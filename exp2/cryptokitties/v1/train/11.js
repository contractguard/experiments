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

  describe("Auction wrapper", function() {
    let saleAuction, siringAuction;
    const kittyId1 = 1,
      kittyId2 = 2,
      kittyId3 = 3;

    before(async function() {
      await deployContract();
      saleAuction = await SaleClockAuction.new(coreC.address, 0);
      siringAuction = await SiringClockAuction.new(coreC.address, 0);
      await coreC.mintKittens(999, 3, { from: coo });
      await coreC.transfer(user1, kittyId2, { from: coo });
      await coreC.transfer(user1, kittyId3, { from: coo });
    });

    it("non-CEO should fail to set auction addresses", async function() {
      await util.expectThrow(
        coreC.setSaleAuctionAddress(saleAuction.address, { from: user1 })
      );
      await util.expectThrow(
        coreC.setSiringAuctionAddress(siringAuction.address, { from: user1 })
      );
    });
    it("CEO should be able to set auction addresses", async function() {
      await coreC.setSaleAuctionAddress(saleAuction.address, { from: ceo });
      await coreC.setSiringAuctionAddress(siringAuction.address, {
        from: ceo
      });
    });
    it("should fail to create sale auction if not cat owner", async function() {
      await util.expectThrow(
        coreC.createSaleAuction(kittyId1, 100, 200, 60, { from: user1 })
      );
    });
    it("should be able to create sale auction", async function() {
      await coreC.createSaleAuction(kittyId1, 100, 200, 60, { from: coo });
      const kitty1Owner = await coreC.ownerOf(kittyId1);
      eq(kitty1Owner, saleAuction.address);
    });
    it("should fail to breed if sire is on sale auction", async function() {
      await util.expectThrow(
        coreC.breedWith(kittyId2, kittyId1, { from: user1 })
      );
    });
    it("should be able to bid on sale auction", async function() {
      const cooBal1 = await web3.eth.getBalance(coo);
      await saleAuction.bid(kittyId1, { from: user1, value: 200 });
      const cooBal2 = await web3.eth.getBalance(coo);
      const kitty1Owner = await coreC.ownerOf(kittyId1);
      eq(kitty1Owner, user1);
      assert(cooBal2>cooBal1);
      // Transfer the kitty back to coo for the rest of the tests
      await coreC.transfer(coo, kittyId1, { from: user1 });
    });
    it("should fail to create siring auction if not cat owner", async function() {
      await util.expectThrow(
        coreC.createSiringAuction(kittyId1, 100, 200, 60, { from: user1 })
      );
    });
    it("should be able to create siring auction", async function() {
      await coreC.createSiringAuction(kittyId1, 100, 200, 60, { from: coo });
      const kitty1Owner = await coreC.ownerOf(kittyId1);
      eq(kitty1Owner, siringAuction.address);
    });
    it("should fail to breed if sire is on siring auction", async function() {
      await util.expectThrow(
        coreC.breedWith(kittyId2, kittyId1, { from: user1 })
      );
    });
    it("should fail to bid on siring auction if matron is in cooldown", async function() {
      // Breed, putting kitty 2 into cooldown
      await coreC.breedWith(kittyId3, kittyId2, { from: user1 });
      await util.expectThrow(
        coreC.bidOnSiringAuction(kittyId1, kittyId2, {
          from: user1,
          value: 200
        })
      );
      // Forward time so cooldowns end before next test
      await util.forwardEVMTime(60 * 60);
    });
    it("should be able to bid on siring auction", async function() {
      const cooBal1 = await web3.eth.getBalance(coo);
      await coreC.bidOnSiringAuction(kittyId1, kittyId2, {
        from: user1,
        value: 200
      });
      const cooBal2 = await web3.eth.getBalance(coo);
      const kitty1Owner = await coreC.ownerOf(kittyId1);
      const kitty2Owner = await coreC.ownerOf(kittyId2);
      eq(kitty1Owner, coo);
      eq(kitty2Owner, user1);
      assert(cooBal2>cooBal1);
      // Forward time so cooldowns end before next test
      await util.forwardEVMTime(60 * 60);
      await coreC.giveBirth(kittyId2, { from: user1 });
    });
    it("should be able to cancel a sale auction", async function() {
      await coreC.createSaleAuction(kittyId1, 100, 200, 60, { from: coo });
      await saleAuction.cancelAuction(kittyId1, { from: coo });
      const kitty1Owner = await coreC.ownerOf(kittyId1);
      eq(kitty1Owner, coo);
    });
    it("should be able to cancel a siring auction", async function() {
      await coreC.createSiringAuction(kittyId1, 100, 200, 60, { from: coo });
      await siringAuction.cancelAuction(kittyId1, { from: coo });
      const kitty1Owner = await coreC.ownerOf(kittyId1);
      eq(kitty1Owner, coo);
    });
    it("should be able to bid on siring auction with autobirth", async function(
      //done
    ) {
      const events = coreC.AutoBirth();
      /*coreC.autoBirthFee().then(autoBirthFee => {
        coreC
          .createSiringAuction(kittyId1, 100, 200, 60, { from: coo })
          .then(() => {
            coreC
              .bidOnSiringAuction(kittyId1, kittyId2, {
                from: user1,
                value: autoBirthFee.add(200)
              })
              .then(() => {
                events.get((err, res) => {
                  assert(!err);
                  eq(res[0].event, "AutoBirth");
                  assert(res[0].args.matronId.eq(kittyId2));
                  done();
                });
              });
          });*/
      autoBirthFee = await coreC.autoBirthFee();
      await coreC.createSiringAuction(kittyId1, 100, 200, 60, { from: coo });
      await coreC.bidOnSiringAuction(kittyId1, kittyId2, {from: user1,value: autoBirthFee+200});
      //});
    });
  });
});
