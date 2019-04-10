// Simulate dynamic ceilings
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8500'));

const DynamicCeiling = artifacts.require("DynamicCeiling");

const setHiddenCurves = require("./helpers/hiddenCurves.js").setHiddenCurves;

contract("DynamicCeiling", function(accounts) {
    let dynamicCeiling;

    const curves = [
        [web3.utils.toWei("1000"), 30, 10**12],
        [web3.utils.toWei("21000"), 30, 10**12],
        [web3.utils.toWei("61000"), 30, 10**12],
    ];

    it("Deploys dynamicCeiling", async function() {
        dynamicCeiling = await DynamicCeiling.new(accounts[0], accounts[0]);

        assert.equal(await dynamicCeiling.currentIndex(), 0);
    });

    it("Checks that toCollect is 0 before curves are set", async function() {
        assert.equal(await dynamicCeiling.toCollect.call(0), 0);
        assert.equal(await dynamicCeiling.toCollect.call(web3.utils.toWei("10")), 0);
        assert.equal(await dynamicCeiling.toCollect.call(web3.utils.toWei("15")), 0);
        assert.equal(await dynamicCeiling.toCollect.call(web3.utils.toWei("20")), 0);
        assert.equal(await dynamicCeiling.toCollect.call(web3.utils.toWei("30")), 0);
        assert.equal(await dynamicCeiling.toCollect.call(web3.utils.toWei("55")), 0);
        assert.equal(await dynamicCeiling.toCollect.call(web3.utils.toWei("676")), 0);
        assert.equal(await dynamicCeiling.toCollect.call(web3.utils.toWei("5555")), 0);
        assert.equal(await dynamicCeiling.toCollect.call(web3.utils.toWei("1000000000")), 0);

        assert.equal(await dynamicCeiling.currentIndex(), 0);
    });

    it("Sets the curves", async function() {
        await setHiddenCurves(dynamicCeiling, curves);
        assert.equal(await dynamicCeiling.nCurves(), 10);
    });

    it("Checks that toCollect is 0 before curves are revealed", async function() {
        assert.equal(await dynamicCeiling.toCollect.call('0'), '0');
        assert.equal(await dynamicCeiling.toCollect.call(web3.utils.toWei("10")), 0);
        assert.equal(await dynamicCeiling.toCollect.call(web3.utils.toWei("15")), 0);
        assert.equal(await dynamicCeiling.toCollect.call(web3.utils.toWei("20")), 0);
        assert.equal(await dynamicCeiling.toCollect.call(web3.utils.toWei("30")), 0);
        assert.equal(await dynamicCeiling.toCollect.call(web3.utils.toWei("55")), 0);
        assert.equal(await dynamicCeiling.toCollect.call(web3.utils.toWei("676")), 0);
        assert.equal(await dynamicCeiling.toCollect.call(web3.utils.toWei("5555")), 0);
        assert.equal(await dynamicCeiling.toCollect.call(web3.utils.toWei("1000000000")), 0);

        assert.equal(await dynamicCeiling.currentIndex(), 0);
    });

    it("Reveals 1st curve", async function() {
        await dynamicCeiling.revealCurve(
            curves[0][0],
            curves[0][1],
            curves[0][2],
            false,
            web3.utils.sha3("pwd0"));

        assert.equal(await dynamicCeiling.revealedCurves(), 1);
        //assert.equal((await dynamicCeiling.currentIndex()), '0');
        assert.equal(await dynamicCeiling.allRevealed(), false);
    });

    it("Checks toCollect after 1st curve is revealed", async function() {
        assert.equal((await dynamicCeiling.currentIndex()), '0');
        assert.equal((await dynamicCeiling.toCollect.call(0)), '33333333333333333333');

        assert.equal((await dynamicCeiling.toCollect.call(web3.utils.toWei("10"))), '33000000000000000000');
        assert.equal((await dynamicCeiling.toCollect.call(web3.utils.toWei("15"))), '32833333333333333333');
        assert.equal((await dynamicCeiling.toCollect.call(web3.utils.toWei("20"))), '32666666666666666666');
        assert.equal((await dynamicCeiling.toCollect.call(web3.utils.toWei("30"))), '32333333333333333333');
        assert.equal((await dynamicCeiling.toCollect.call(web3.utils.toWei("55"))), '31500000000000000000');
        assert.equal((await dynamicCeiling.toCollect.call(web3.utils.toWei("676"))), '10800000000000000000');
        assert.equal((await dynamicCeiling.toCollect.call(web3.utils.toWei("999"))), '33333333333333333');

        assert.equal((await dynamicCeiling.toCollect.call('999999999998999999999')), '1000000001');
        assert.equal((await dynamicCeiling.toCollect.call('999999999999000000000')), '1000000000');
        assert.equal((await dynamicCeiling.toCollect.call('999999999999999999999')), '1');

        await dynamicCeiling.toCollect(curves[0][0]);
        assert.equal((await dynamicCeiling.currentIndex()), '0');
        //assert.equal((await dynamicCeiling.toCollect.call(curves[0][0])), '0');
    });

    it("Reveals 2nd curve", async function() {
        await dynamicCeiling.revealCurve(
            curves[1][0],
            curves[1][1],
            curves[1][2],
            false,
            web3.utils.sha3("pwd1"));

        assert.equal(await dynamicCeiling.revealedCurves(), 2);
        assert.equal((await dynamicCeiling.currentIndex()), '0');
        assert.equal(await dynamicCeiling.allRevealed(), false);
    });

    it("Checks toCollect after 2nd curve is revealed", async function() {
        await dynamicCeiling.toCollect(curves[0][0]);
        assert.equal((await dynamicCeiling.currentIndex()), '1');
        assert.equal((await dynamicCeiling.toCollect.call(curves[0][0])), '666666666666666666666')

        assert.equal((await dynamicCeiling.toCollect.call(web3.utils.toWei("1010"))), '666333333333333333333');
        assert.equal((await dynamicCeiling.toCollect.call(web3.utils.toWei("1015"))), '666166666666666666666');
        assert.equal((await dynamicCeiling.toCollect.call(web3.utils.toWei("1020"))), '666000000000000000000');
        assert.equal((await dynamicCeiling.toCollect.call(web3.utils.toWei("1030"))), '665666666666666666666');
        assert.equal((await dynamicCeiling.toCollect.call(web3.utils.toWei("1055"))), '664833333333333333333');
        assert.equal((await dynamicCeiling.toCollect.call(web3.utils.toWei("10676"))), '344133333333333333333');
        assert.equal((await dynamicCeiling.toCollect.call(web3.utils.toWei("10999"))), '333366666666666666666');

        assert.equal((await dynamicCeiling.toCollect.call('20999999999998999999999')), '1000000001');
        assert.equal((await dynamicCeiling.toCollect.call('20999999999999000000000')), '1000000000');
        assert.equal((await dynamicCeiling.toCollect.call('20999999999999999999999')), '1');

        await dynamicCeiling.toCollect(curves[1][0]);
        //assert.equal((await dynamicCeiling.currentIndex()), '1');
        //assert.equal((await dynamicCeiling.toCollect.call(curves[1][0])), '0');
    });

    it("Reveals last curve", async function() {
        await dynamicCeiling.revealCurve(
            curves[2][0],
            curves[2][1],
            curves[2][2],
            true,
            web3.utils.sha3("pwd2"));

        assert.equal(await dynamicCeiling.revealedCurves(), 3);
        //assert.equal((await dynamicCeiling.currentIndex()), '1');
        assert.equal(await dynamicCeiling.allRevealed(), true);
    });

    it("Checks toCollect after 3rd curve is revealed", async function() {
        await dynamicCeiling.toCollect(curves[1][0]);
        assert.equal((await dynamicCeiling.currentIndex()), '2');
        assert.equal((await dynamicCeiling.toCollect.call(curves[1][0])), '1333333333333333333333');

        assert.equal((await dynamicCeiling.toCollect.call(web3.utils.toWei("21010"))), '1333000000000000000000');
        assert.equal((await dynamicCeiling.toCollect.call(web3.utils.toWei("21015"))), '1332833333333333333333');
        assert.equal((await dynamicCeiling.toCollect.call(web3.utils.toWei("21020"))), '1332666666666666666666');
        assert.equal((await dynamicCeiling.toCollect.call(web3.utils.toWei("21030"))), '1332333333333333333333');
        assert.equal((await dynamicCeiling.toCollect.call(web3.utils.toWei("21055"))), '1331500000000000000000');
        assert.equal((await dynamicCeiling.toCollect.call(web3.utils.toWei("21676"))), '1310800000000000000000');
        assert.equal((await dynamicCeiling.toCollect.call(web3.utils.toWei("21999"))), '1300033333333333333333');

        assert.equal((await dynamicCeiling.toCollect.call('60999999999998999999999')), '1000000001');
        assert.equal((await dynamicCeiling.toCollect.call('60999999999999000000000')), '1000000000');
        assert.equal((await dynamicCeiling.toCollect.call('60999999999999999999999')), '1');

        await dynamicCeiling.toCollect(curves[2][0]);
        //assert.equal((await dynamicCeiling.currentIndex()), '2');
        //assert.equal((await dynamicCeiling.toCollect.call(curves[2][0])), '0');
    });


    it("Deploys dynamicCeiling", async function() {
        dynamicCeiling = await DynamicCeiling.new(accounts[0], accounts[0]);

        assert.equal(await dynamicCeiling.currentIndex(), 0);
    });

    it("Sets the curves", async function() {
        await setHiddenCurves(dynamicCeiling, curves);
        assert.equal(await dynamicCeiling.nCurves(), 10);
    });

    it("Reveals multiple curves", async function() {
        await dynamicCeiling.revealMulti(
            [
                curves[0][0],
                curves[1][0],
                curves[2][0],
            ],
            [
                curves[0][1],
                curves[1][1],
                curves[2][1],
            ],
            [
                curves[0][2],
                curves[1][2],
                curves[2][2],
            ],
            [
                false,
                false,
                true,
            ],
            [
            	web3.utils.sha3("pwd0"),
            	web3.utils.sha3("pwd1"),
            	web3.utils.sha3("pwd2"),
            ]
        );

        assert.equal(await dynamicCeiling.currentIndex(), 0);
        assert.equal(await dynamicCeiling.revealedCurves(), 3);
        assert.equal(await dynamicCeiling.allRevealed(), true);
    });

});
