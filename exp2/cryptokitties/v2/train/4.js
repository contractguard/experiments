// Activate verbose mode by setting env var `export DEBUG=ck`
//const debug = require("debug")("ck");
//const BigNumber = require("bignumber.js");

const ETH_STRING = web3.utils.toWei("1", "ether");
const FINNEY_STRING = web3.utils.toWei("1", "finney");
const ETH_BN = web3.utils.toBN(ETH_STRING);
const FINNEY_BN = web3.utils.toBN(FINNEY_STRING);
const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";

const util = require("./util.js");
// add test wrapper to make tests possible
const KittyCore = artifacts.require("./KittyCoreTest.sol");
// A dummy implementation
const GeneScienceMock = artifacts.require(
  "./contracts/GeneScienceMock.sol"
);
const SaleClockAuction = artifacts.require("./SaleClockAuction.sol");
const SiringClockAuction = artifacts.require("./SiringClockAuction.sol");

contract("KittyCore", function(accounts) {
  // This only runs once across all test suites
  before(() => util.measureGas(accounts));
  after(() => util.measureGas(accounts));
  if (util.isNotFocusTest("core")) return;
  const eq = assert.equal.bind(assert);
  const coo = accounts[0];
  const user1 = accounts[1];
  const user2 = accounts[2];
  const user3 = accounts[3];
  const ceo = accounts[4];
  const cfo = accounts[5];
  const gasPrice = 1e11;
  let coreC;
  let geneScienceContract;
  const logEvents = [];
  const pastEvents = [];
  // timers we get from Kitty contract
  let cooldowns, autoBirthPrice;

  async function deployContract() {
    //debug("deploying contract");
    coreC = await KittyCore.new();
    // the deployer is the original CEO and can appoint a new one
    await coreC.setCEO(ceo);
    // only need to create external contracts once
    if (geneScienceContract === undefined) {
      geneScienceContract = await GeneScienceMock.new();
    }
    await coreC.setGeneScienceAddress(geneScienceContract.address, {
      from: ceo
    });
    // initialize some mock auction contracts
    const siringAuctionContract = await SiringClockAuction.new(
      coreC.address,
      100
    );
    await coreC.setSiringAuctionAddress(siringAuctionContract.address, {
      from: ceo
    });
    const saleAuctionContract = await SaleClockAuction.new(coreC.address, 100);
    await coreC.setSaleAuctionAddress(saleAuctionContract.address, {
      from: ceo
    });
    if (!cooldowns) {
      cooldowns = [];
      for (var i = 0; i <= 13; i++) {
        cooldowns[i] = (await coreC.cooldowns.call(i)).toNumber();
      }
      //debug("cooldowns", cooldowns);
    }
    if (!autoBirthPrice) {
      autoBirthPrice = await coreC.autoBirthFee();
    }
    await coreC.unpause({ from: ceo });
    //const eventsWatch = coreC.allEvents();
    //eventsWatch.watch((err, res) => {
      //if (err) return;
      //pastEvents.push(res);
      //debug(">>", res.event, res.args);
    //});
    //logEvents.push(eventsWatch);
    coreC._getKittyHelper = async function(id) {
      let attrs = await this.getKitty(id);
      return {
        isGestating: attrs[0],
        isReady: attrs[1],
        cooldownIndex: attrs[2].toNumber(),
        nextActionAt: attrs[3].toNumber(),
        siringWithId: attrs[4].toNumber(),
        birthTime: attrs[5].toNumber(),
        matronId: attrs[6].toNumber(),
        sireId: attrs[7].toNumber(),
        generation: attrs[8].toNumber(),
        genes: attrs[9]
      };
    };
  }

  after(function() {
    //logEvents.forEach(ev => ev.stopWatching());
  });

  describe("Siring", function() {
    let kitA, kitB, kitC, kitD, kitE;
    before(deployContract);
    it("create a few kittens", async function() {
      // breed 4 kittens
      await coreC.mintKittens(10, 4, { from: coo });
      kitA = 1;
      kitB = 2;
      kitC = 3;
      kitD = 4;
      // give kitD to user1
      await coreC.transfer(user1, kitD);
      eq(await coreC.kittyIndexToOwner(kitD), user1);
    });

    it("kitten cant sire itself", async function() {
      await util.expectThrow(coreC.breedWith(kitA, kitA));
    });

    it("siring is only allowed with due permissions", async function() {
      await util.expectThrow(coreC.breedWith(kitD, kitA), { from: user1 });
      let now = (await coreC.timeNow()).toNumber();
      let kitAStats = await coreC._getKittyHelper(kitA);
      //debug("A before breeding:", kitAStats, now);
      assert(kitAStats.nextActionAt <= now);
      eq(kitAStats.isReady, true);

      // owner of kitA approves it to sire D
      await coreC.approveSiring(user1, kitA);
      await coreC.breedWith(kitD, kitA, { from: user1 });

      // check kitA stats afterwards
      now = (await coreC.timeNow()).toNumber();
      kitAStats = await coreC._getKittyHelper(kitA);
      //debug("kitA after breeding:", kitAStats);
      eq(kitAStats.cooldownIndex, 1);
      assert(kitAStats.nextActionAt > now);
      eq(kitAStats.isReady, false);

      // check kitD
      const kitDStats = await coreC._getKittyHelper(kitD);
      //debug("D:", kitDStats);
      eq(kitDStats.cooldownIndex, 1);
    });

    it("pregnant kitten cant sire", async function() {
      await coreC.approveSiring(coo, kitD, { from: user1 });
      await util.expectThrow(coreC.breedWith(kitB, kitD));
    });

    it("sire has cooldown after siring", async function() {
      await util.expectThrow(coreC.breedWith(kitB, kitA));
      await util.expectThrow(coreC.breedWith(kitA, kitB));
    });

    it("allowed user cant re-use the same sire permission", async function() {
      await util.forwardEVMTime(cooldowns[0]);

      // Can't re-use the same sire permission again
      await util.expectThrow(coreC.breedWith(kitD, kitA, { from: user1 }));

      // B from A works because they share the same owner
      await coreC.breedWith(kitB, kitA);
    });
  });
});
