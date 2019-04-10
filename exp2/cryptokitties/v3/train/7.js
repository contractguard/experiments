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

  describe("Roles: CEO + CFO", async function() {
    before(deployContract);
    it("COO try to appoint another COO, but cant", async function() {
      // that is the case because we override OZ ownable function
      await util.expectThrow(coreC.setCOO(user2));
    });
    it("CEO can appoint a CFO", async function() {
      await util.expectThrow(coreC.setCFO(cfo));
      await coreC.setCFO(cfo, { from: ceo });
    });
    it("CEO can appoint another coo", async function() {
      await coreC.setCOO(user1, { from: ceo });
    });
    it("new coo can do things, old coo cant anymore", async function() {
      await util.expectThrow(coreC.mintKittens(10, 1, { from: coo }));
      await coreC.mintKittens(10, 1, { from: user1 });
    });
    it("CEO can appoint another CEO", async function() {
      await util.expectThrow(coreC.setCEO(user2, { from: coo }));
      await coreC.setCEO(user2, { from: ceo });
    });
    it("old CEO cant do anything since they were replaced", async function() {
      await util.expectThrow(coreC.setCEO(user3, { from: ceo }));
      await coreC.setCEO(ceo, { from: user2 });
    });
    it("CFO can drain funds", async function() {
      await coreC.fundMe({ value: web3.utils.toWei("0.05", "ether") });
      const ctoBalance1 = await web3.eth.getBalance(cfo);
      //debug("cfo balance was", ctoBalance1);
      await coreC.withdrawBalance({ from: cfo });
      const ctoBalance2 = await web3.eth.getBalance(cfo);
      //debug("cfo balance is ", ctoBalance2);
      assert(ctoBalance2 > ctoBalance1);
    });
  });

});
