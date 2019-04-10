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

  describe("Kitty Breeding:", function() {
    let kitA, kitB, kitC, kitD, kitE, kitF;
    before(deployContract);

    it("create some kittens", async function() {
      // breed 3 genetically diff kittens
      await coreC.mintKittens(10, 1, { from: coo });
      kitA = 1;
      await coreC.mintKittens(100, 1, { from: coo });
      kitB = 2;
      await coreC.mintKittens(1000, 1, { from: coo });
      kitC = 3;
    });

    it("kitA gets pregnant from kitB", async function() {
      // works because they have the same owner
      await coreC.breedWith(kitA, kitB);

      const attr = await coreC._getKittyHelper(kitA);
      eq(attr.isGestating, true);
      assert(attr.nextActionAt != 0);
    });

    it("tries and fails to get kitA pregnant again", async function() {
      await util.expectThrow(coreC.breedWith(kitA, kitC));
    });

    it("wait kitA be ready to give birth", async function() {
      await util.expectThrow(coreC.giveBirth(kitA));
      await util.forwardEVMTime(cooldowns[0]);
    });

    it("have kitA give birth to kitD", async function() {
      await coreC.giveBirth(kitA);
      // will be the last kitten
      kitD = (await coreC.totalSupply()).toNumber();
      let attr = await coreC._getKittyHelper(kitD);
      //debug("kitD was born:", attr);
      eq(attr.isGestating, false);
      eq(attr.cooldownIndex, 0);
      eq(attr.nextActionAt, 0);
      eq(attr.siringWithId, 0);
      eq(attr.matronId, 1);
      eq(attr.sireId, 2);
      eq(attr.generation, 1);
      // equation: mom's 10 + sire's 100 / 2 + 1
      eq(attr.genes.toNumber(), 56);
      const kitDOwner = await coreC.kittyIndexToOwner(kitD);
      eq(kitDOwner, coo);
    });

    it("kitD can breed right after being born", async function() {
      //debug("kitD::", await coreC._getKittyHelper(kitD));
      kitDcanBreed = await coreC.isReadyToBreed(kitD);
      eq(kitDcanBreed, true);
    });

    it("kitD can't breed with either parent, but can breed with kitC, who is unrelated", async function() {
      await util.expectThrow(coreC.breedWith(kitD, kitA));
      await util.expectThrow(coreC.breedWith(kitD, kitB));
      await util.expectThrow(coreC.breedWith(kitA, kitD));
      await util.expectThrow(coreC.breedWith(kitB, kitD));
      await coreC.breedWith(kitD, kitC);

      const attr = await coreC._getKittyHelper(kitD);
      eq(attr.isGestating, true);
      assert(attr.nextActionAt != 0);
    });

    it("test that siblings cant breed", async function() {
      await util.forwardEVMTime(cooldowns[0]);
      await coreC.giveBirth(kitD);
      // KitF is children of D with C (we are not testing it)
      const kitE = kitD + 1;
      // A & B have another child
      await coreC.breedWith(kitB, kitA);
      await util.forwardEVMTime(cooldowns[1]);
      await coreC.giveBirth(kitB);
      // KitE is children of B & A (just like D)
      kitF = kitE + 1;
      // test the sibling thing
      const canFdoD = await coreC.canBreedWith(kitF, kitD);
      eq(canFdoD, false);
      canDdoF = await coreC.canBreedWith(kitD, kitF);
      eq(canDdoF, false);
      await util.expectThrow(coreC.breedWith(kitF, kitD));
      await util.expectThrow(coreC.breedWith(kitD, kitF));
      // just make sure new kitten can do fine with new
    });

    it("test breedWithAuto still retains the same requirements", async function() {
      await util.forwardEVMTime(cooldowns[1]);

      await util.expectThrow(coreC.breedWith(kitF, kitD));
      await util.expectThrow(coreC.breedWith(kitD, kitF));
    });

    it("make breedWithAuto happen and check event", async function() {
      // too low fee
      await util.expectThrow(coreC.breedWithAuto(kitB, kitA), {
        value: autoBirthPrice.sub(web3.utils.toBN("10"))
      });

      await coreC.breedWithAuto(kitB, kitA, { value: autoBirthPrice });
      await util.sleep(500);

      // event order is not certain, might be any of the last 2
      /*let ev = pastEvents.pop();
      if (ev.event !== "AutoBirth") {
        ev = pastEvents.pop();
      }
      //debug("last event ", ev);
      eq(ev.event, "AutoBirth");
      eq(ev.args.matronId.toNumber(), kitB);*/
      //debug(
      //  ev.args.time,
      //  cooldowns[2],
      //  (await coreC.timeNow()).add(cooldowns[2])
      //);
      //eq(
      //  ev.args.cooldownEndTime.toString(),
      //  (await coreC.timeNow()).add(cooldowns[2]).toString()
      //);
    });

    it("test that anyone can give birth to a kitten", async function() {
      await util.forwardEVMTime(cooldowns[2]);
      await coreC.giveBirth(kitB, { from: user3 });
    });
  });
});
