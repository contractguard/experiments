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

  describe("Cooldowns progression", function() {
    let kitA, kitB;
    before(deployContract);

    it("create some kittens", async function() {
      // breed 2 genetically diff kittens
      await coreC.mintKittens(32, 2, { from: coo });
      kitA = 1;
      kitB = 2;
    });

    it("Let them breed and give birth", async function() {
      await coreC.breedWith(kitA, kitB);
      await util.expectThrow(coreC.giveBirth(kitA));
      await util.forwardEVMTime(cooldowns[0]);
      await coreC.giveBirth(kitA);
    });

    it("KitA can breed again right away", async function() {
      await coreC.breedWith(kitA, kitB);
      // just advancing the first CD is not enough
      await util.forwardEVMTime(cooldowns[0]);
      await util.expectThrow(coreC.giveBirth(kitA));
      await util.forwardEVMTime(cooldowns[1]);
      await coreC.giveBirth(kitA);
    });

    it("KitB now will be the one pregnant", async function() {
      await coreC.breedWith(kitB, kitA);
      // just advancing the first CD is not enough
      await util.forwardEVMTime(cooldowns[1]);
      await util.expectThrow(coreC.giveBirth(kitB));
      await util.forwardEVMTime(cooldowns[2]);
      await coreC.giveBirth(kitB);
    });

    it("After reaching the limit it stops at max cooldown", async function() {
      await util.forwardEVMTime(cooldowns[3]);
      // go over the whole cooldown table
      for (var i = 4; i <= cooldowns.length + 1; i++) {
        let cooldownPosition = i;
        if (cooldownPosition > cooldowns.length - 1)
          cooldownPosition = cooldowns.length - 1;
        //debug("i:", i, cooldownPosition, cooldowns[cooldownPosition]);
        await coreC.breedWith(kitB, kitA);
        await util.forwardEVMTime(cooldowns[cooldownPosition]);
        await coreC.giveBirth(kitB);
      }
    });
  });
});
