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

contract("KittyCore", function (accounts) {
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
        await coreC.unpause({from: ceo});
        //const eventsWatch = coreC.allEvents();
        //eventsWatch.watch((err, res) => {
        //if (err) return;
        //pastEvents.push(res);
        //debug(">>", res.event, res.args);
        //});
        //logEvents.push(eventsWatch);
        coreC._getKittyHelper = async function (id) {
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

    after(function () {
        //logEvents.forEach(ev => ev.stopWatching());
    });

    describe("auction withdrawals", function () {
        beforeEach(async function () {
            await deployContract();
            saleAuction = await SaleClockAuction.new(coreC.address, 1000);
            siringAuction = await SiringClockAuction.new(coreC.address, 1000);
            await coreC.setSaleAuctionAddress(saleAuction.address, {from: ceo});
            await coreC.setSiringAuctionAddress(siringAuction.address, {
                from: ceo
            });
            await coreC.setCFO(cfo, {from: ceo});
            // Get some Ether into both sale and siring auctions
            await coreC.mintKittens(1, 2, {from: coo});
            await coreC.createSaleAuction(1, 100000, 200000, 100, {from: coo});
            await saleAuction.bid(1, {from: user1, value: 200000});
            await coreC.createSiringAuction(1, 100000, 200000, 100, {from: user1});
            await coreC.bidOnSiringAuction(1, 2, {from: coo, value: 200000});
        });

        it("should be able to withdraw via core as COO", async function () {
            const saleBal1 = await web3.eth.getBalance(saleAuction.address);
            const sireBal1 = await web3.eth.getBalance(siringAuction.address);
            const coreBal1 = await web3.eth.getBalance(coreC.address);
            await coreC.withdrawAuctionBalances({from: coo});
            const saleBal2 = await web3.eth.getBalance(saleAuction.address);
            const sireBal2 = await web3.eth.getBalance(siringAuction.address);
            const coreBal2 = await web3.eth.getBalance(coreC.address);
            //assert(coreBal1+saleBal1+sireBal1 == coreBal2);
            assert(web3.utils.toBN(saleBal2.toString()) == 0);
            assert(web3.utils.toBN(sireBal2.toString()) == 0);
        });
    });
});
