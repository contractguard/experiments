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

  describe("Gen0 Auction", function() {
    let saleAuction, siringAuction;
    const kittyId1 = 1,
      kittyId2 = 2;
    const startingPrice = FINNEY_BN*10;

    before(async function() {
      await deployContract();
      saleAuction = await SaleClockAuction.new(coreC.address, 0);
      siringAuction = await SiringClockAuction.new(coreC.address, 0);
      await coreC.setSaleAuctionAddress(saleAuction.address, { from: ceo });
      await coreC.setSiringAuctionAddress(siringAuction.address, {
        from: ceo
      });
    });

    it("should fail to create gen0 auction if not coo", async function() {
      await util.expectThrow(coreC.createGen0Auction(1, { from: user1 }));
    });
    it("should start aveSalePrice at 0", async function() {
      const avePrice = await saleAuction.averageGen0SalePrice();
      assert(avePrice == 0);
    });
    it("should be able to create gen0 auction", async function() {
      await coreC.createGen0Auction(1, { from: coo });
      const auction = await saleAuction.getAuction(kittyId1);
      eq(auction[0], coreC.address);
      assert(auction[1] == startingPrice);
      assert(auction[2] == 0);
      const gen0CreatedCount = await coreC.gen0CreatedCount();
      eq(gen0CreatedCount, 1);
    });
    it("avePrice should be unchanged (no sale yet)", async function() {
      const avePrice = await saleAuction.averageGen0SalePrice();
      assert(avePrice == 0);
      const auction = await saleAuction.getAuction(kittyId1);
    });
    it("should be able to bid on gen0 auction", async function() {
      await saleAuction.bid(kittyId1, { from: user1, value: startingPrice });
      const kitty1Owner = await coreC.ownerOf(kittyId1);
      eq(kitty1Owner, user1);
    });
    it("avePrice should be about 1/5 starting price after first sale", async function() {
      const avePrice = await saleAuction.averageGen0SalePrice();
      assert(avePrice.gt(0));
      assert(avePrice < startingPrice/4);
    });
    it("avePrice should not be influenced by regular auctions", async function() {
      const avePrice1 = await saleAuction.averageGen0SalePrice();
      await coreC.createSaleAuction(
        kittyId1,
        (FINNEY_BN*50).toString(),
        (FINNEY_BN*50).toString(),
        10000,
        { from: user1 }
      );
      await saleAuction.bid(kittyId1, {
        from: user2,
        value: FINNEY_BN*50
      });
      const avePrice2 = await saleAuction.averageGen0SalePrice();
      assert(avePrice1.toString() == avePrice2.toString());
    });
    it("next 3 gen0 auctions should be startingPrice", async function() {
      // Create kitties 2-4, all these auctions should have
      // starting price of 10 finney because avePrice*1.5 is
      // still less than starting price
      // (3/5)(3/2)p = (9/10)p < p
      for (let id = 2; id < 5; id++) {
        await coreC.createGen0Auction(1, { from: coo });
        const auction = await saleAuction.getAuction(id);
        assert(auction[1] == FINNEY_BN*10);
        await saleAuction.bid(id, { from: user1, value: FINNEY_BN*10 });
        const avePrice = await saleAuction.averageGen0SalePrice();
      }
    });
    it("gen0 auctions should compute price based on previous sales", async function() {
      // The 5th should have starting price of > startingPrice
      // (4/5)(3/2)p = (12/10)p > p
      await coreC.createGen0Auction(1, { from: coo });
      const auction = await saleAuction.getAuction(5);
      assert(auction[1]>startingPrice);
    });
  });
});
