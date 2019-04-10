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

  describe("Contract Upgrade", function() {
    before(async function redeployContract() {
      await deployContract();
      await coreC.mintKittens(1000, 4, { from: coo });
      await coreC.mintKittens(9000, 2, { from: coo });
      const nKitties = await coreC.totalSupply();
      eq(nKitties.toNumber(), 6);
      await coreC.transfer(user1, 5);
      // have kitty 1 pregnant of kitty 2
      await util.forwardEVMTime(cooldowns[0]);
      await coreC.breedWith(1, 2);
    });

    it("user2 fails to pause contract - not coo", async function() {
      await util.expectThrow(coreC.pause({ from: user2 }));
    });

    it("coo can pause the contract", async function() {
      await coreC.pause({ from: coo });
      const isPaused = await coreC.paused();
      eq(isPaused, true);
    });

    it("functions that alter state can't execute while paused", async function() {
      await util.expectThrow(coreC.transfer(user2, 6));
      await util.expectThrow(coreC.transfer(coo, 3, { from: user1 }));
      await util.expectThrow(coreC.breedWith(1, 2));
    });

    it("can read state of all kittens while paused", async function() {
      const nKitties = await coreC.totalSupply();
      eq(nKitties.toNumber(), 6);
      let attr = await coreC._getKittyHelper(1);
      eq(attr.isGestating, true);
      eq(attr.cooldownIndex, 1);
      assert(attr.nextActionAt > 0);
      eq(attr.siringWithId, 2);
      eq(attr.matronId, 0);
      eq(attr.sireId, 0);
      eq(attr.generation, 0);
      eq(attr.genes.toNumber(), 1000);
    });

    it("unpause", async function() {
      await coreC.unpause({ from: ceo });
      const isPaused = await coreC.paused();
      eq(isPaused, false);
    });

    it("kitten 1 give birth", async function() {
      await util.forwardEVMTime(cooldowns[0]);
      await coreC.giveBirth(1);
      const nKitties = await coreC.totalSupply();
      eq(nKitties.toNumber(), 7);
    });

    it("set new contract address", async function() {
      const coreC2 = await KittyCore.new();
      await util.expectThrow(coreC.setNewAddress(coreC2.address));
      await coreC.pause({ from: ceo });
      // CEO can appoint a new COO even while paused
      await coreC.setCOO(ceo, { from: ceo });
      await coreC.setNewAddress(coreC2.address, { from: ceo });
      const newAddress = await coreC.newContractAddress();
      //debug("new contract address is ", newAddress);
      eq(newAddress, coreC2.address);
      // cannot unpause if new contract address is set
      await util.expectThrow(coreC.unpause({ from: ceo }));
    });
  });
});
