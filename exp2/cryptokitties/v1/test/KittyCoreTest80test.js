const KittyCore = artifacts.require("./KittyCoreTest.sol");
const SaleClockAuction = artifacts.require("./SaleClockAuction.sol");
const SiringClockAuction = artifacts.require("./SiringClockAuction.sol");
const GeneScienceMock = artifacts.require("./GeneScienceMock.sol");
const BigNumber = web3.utils.BN;
const util = require("./util.js")


contract('KittyBreeding', async (accounts) => {
    let coo = accounts[0];
    let ceo = accounts[0];
    let cfo = accounts[0];
    let bigValue = web3.utils.toBN("57896044618658097711785492504343953926634992332820282019728792003956564819968");
    let instance;
    let test_subject_SaleClockAuction;
    let test_subject_SiringClockAuction;
    let test_subject_GeneScience;
    let atrrs;
    let cooldowns, autoBirthPrice;
    let user1 = accounts[10];
    let user2 = accounts[11];
    let n0 = web3.utils.toBN("626837621154801616088980922659877168609154386318304496692374110716999053");
    let n1 = web3.utils.toBN("623332824742417442073801652020554010523726975553705023219600667807529387");
    let n2 = web3.utils.toBN("516352335416235417056702290154738622491807922722465690508248901653769675");
    let n3 = web3.utils.toBN("626837514194733471931671628842075756017852396531725903999108783271194062");
    let n4 = web3.utils.toBN("623332880692384699892637626080736662593748365051052090218150622775425454");
    let n5 = web3.utils.toBN("461303548515090852312075703606893019953834813576144180229003629194229101");
    let n6 = web3.utils.toBN("623327769803442901710395056776552497095442687958945773589013378394108268");
    let n7 = web3.utils.toBN("455962002069384858370720607417168167583077581913821361519992102215692750");
    let n3000 = web3.utils.toBN("10000000000000000");
    let n3007 = web3.utils.toBN("9000000000000000");
    let n3008 = web3.utils.toBN("35000000000000000");
    before('setup contract for each test', async () => {
        //coo决定ceo ceo决定cfo
        instance = await KittyCore.new({from: coo, gas: 5800000});
        test_subject_SaleClockAuction = await SaleClockAuction.new(instance.address, 357, {
            from: coo,
            gas: 5800000
        });
        test_subject_SiringClockAuction = await SiringClockAuction.new(instance.address, 357, {
            from: coo,
            gas: 5800000
        });
        test_subject_GeneScience = await GeneScienceMock.new({from: coo, gas: 5800000});

        await instance.setCEO(ceo, {from: coo, gas: 5800000});
        await instance.setCFO(cfo, {from: ceo, gas: 5800000});

        await instance.setGeneScienceAddress(test_subject_GeneScience.address, {
            from: ceo,
            gas: 5800000
        });
        await instance.setSiringAuctionAddress(test_subject_SiringClockAuction.address, {
            from: ceo,
            gas: 5800000
        });
        await instance.setSaleAuctionAddress(test_subject_SaleClockAuction.address, {
            from: ceo,
            gas: 5800000
        });
        //获取所有冷却时间，猫孕育下一代需要冷却时间
        if (!cooldowns) {
            cooldowns = [];
            for (var i = 0; i <= 13; i++) {
                cooldowns[i] = (await instance.cooldowns.call(i)).toNumber();
            }
        }
        //生育的费用
        if (!autoBirthPrice) {
            autoBirthPrice = await instance.autoBirthFee();
        }

        await instance.unpause({from: ceo, gas: 5800000});

    });

it('test 0',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.createPromoKitty(129486664, coo, {from: coo,value: 0});
await instance.createPromoKitty(443962964, coo, {from: coo,value: 0});
await instance.createPromoKitty(52895112, coo, {from: coo,value: 0});
await instance.createPromoKitty(180882864, coo, {from: coo,value: 0});
await instance.createPromoKitty(420326850, coo, {from: coo,value: 0});
await instance.createPromoKitty(339449447, coo, {from: coo,value: 0});
await instance.createPromoKitty(905132864, coo, {from: coo,value: 0});
await instance.createPromoKitty(393797061, coo, {from: coo,value: 0});
await instance.createPromoKitty(440626272, coo, {from: coo,value: 0});
await instance.createPromoKitty(150686433, coo, {from: coo,value: 0});
await instance.createPromoKitty(984472412, coo, {from: coo,value: 0});
await instance.createPromoKitty(94953281, coo, {from: coo,value: 0});
await instance.createPromoKitty(917967500, coo, {from: coo,value: 0});
await instance.createPromoKitty(376583191, coo, {from: coo,value: 0});
await instance.createPromoKitty(594983157, coo, {from: coo,value: 0});
await instance.createPromoKitty(702653963, coo, {from: coo,value: 0});
await instance.createPromoKitty(630819197, coo, {from: coo,value: 0});
await instance.createPromoKitty(41403336, coo, {from: coo,value: 0});
await instance.createPromoKitty(613296948, coo, {from: coo,value: 0});
await instance.createPromoKitty(231022054, coo, {from: coo,value: 0});
await instance.createPromoKitty(320083303, coo, {from: coo,value: 0});
await instance.createPromoKitty(548146099, coo, {from: coo,value: 0});
await instance.createPromoKitty(187944426, coo, {from: coo,value: 0});
await instance.createPromoKitty(9352340, coo, {from: coo,value: 0});
await instance.createPromoKitty(7021337, coo, {from: coo,value: 0});
await instance.createPromoKitty(261916041, coo, {from: coo,value: 0});
await instance.createPromoKitty(523771590, coo, {from: coo,value: 0});
await instance.createPromoKitty(914266151, coo, {from: coo,value: 0});
await instance.createPromoKitty(15757163, coo, {from: coo,value: 0});
await instance.createPromoKitty(312873729, coo, {from: coo,value: 0});
await instance.createPromoKitty(226591112, coo, {from: coo,value: 0});
await instance.createPromoKitty(366301343, coo, {from: coo,value: 0});
await instance.createPromoKitty(18380339, coo, {from: coo,value: 0});
await instance.createPromoKitty(554391504, coo, {from: coo,value: 0});
await instance.createPromoKitty(97169557, coo, {from: coo,value: 0});
await instance.createPromoKitty(384042763, coo, {from: coo,value: 0});
await instance.createPromoKitty(22316825, coo, {from: coo,value: 0});
await instance.createPromoKitty(515835100, coo, {from: coo,value: 0});
await instance.createPromoKitty(392201628, coo, {from: coo,value: 0});
await instance.createPromoKitty(494034771, coo, {from: coo,value: 0});
await instance.createPromoKitty(887731567, coo, {from: coo,value: 0});
await instance.createPromoKitty(666828599, coo, {from: coo,value: 0});
await instance.createPromoKitty(132772665, coo, {from: coo,value: 0});
await instance.createPromoKitty(948719698, coo, {from: coo,value: 0});
await instance.createPromoKitty(805260050, coo, {from: coo,value: 0});
await instance.createPromoKitty(777987421, coo, {from: coo,value: 0});
await instance.createPromoKitty(141256668, coo, {from: coo,value: 0});
await instance.createPromoKitty(752293069, coo, {from: coo,value: 0});
await instance.createPromoKitty(370370376, coo, {from: coo,value: 0});
await instance.createPromoKitty(397113718, coo, {from: coo,value: 0});
await instance.createPromoKitty(613606693, coo, {from: coo,value: 0});
await instance.createPromoKitty(643399029, coo, {from: coo,value: 0});
await instance.createPromoKitty(831902571, coo, {from: coo,value: 0});
await instance.createPromoKitty(126430311, coo, {from: coo,value: 0});
await instance.createPromoKitty(972620984, coo, {from: coo,value: 0});
await instance.createPromoKitty(196528764, coo, {from: coo,value: 0});
await instance.createPromoKitty(299888184, coo, {from: coo,value: 0});
await instance.createPromoKitty(977216740, coo, {from: coo,value: 0});
await instance.createPromoKitty(327432627, coo, {from: coo,value: 0});
await instance.createPromoKitty(749298835, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(16, 24, {from: coo});
await instance.breedWith(38, 21, {from: coo});
await instance.breedWith(4, 22, {from: coo});
await instance.breedWith(1, 17, {from: coo});
await instance.breedWith(12, 34, {from: coo});
await instance.breedWith(9, 26, {from: coo});
await instance.breedWith(19, 40, {from: coo});
await instance.breedWith(37, 39, {from: coo});
await instance.breedWith(20, 25, {from: coo});
await instance.breedWith(18, 5, {from: coo});
await instance.breedWith(14, 10, {from: coo});
await instance.breedWith(15, 6, {from: coo});
await instance.breedWith(31, 3, {from: coo});
await instance.breedWith(30, 2, {from: coo});
await instance.breedWith(23, 36, {from: coo});
await instance.breedWith(7, 11, {from: coo});
await instance.breedWith(35, 32, {from: coo});
await instance.breedWith(8, 27, {from: coo});
await instance.breedWith(29, 33, {from: coo});
await instance.breedWith(28, 13, {from: coo});
});
it('test 2',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.pause();
await instance.unpause();
});
it('test 3',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('test 4',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.pause();
await instance.unpause();
await instance.giveBirth(16);
await instance.giveBirth(38);
await instance.giveBirth(4);
await instance.giveBirth(1);
await instance.giveBirth(12);
await instance.giveBirth(9);
await instance.giveBirth(19);
await instance.giveBirth(37);
await instance.giveBirth(20);
await instance.giveBirth(18);
await instance.giveBirth(14);
await instance.giveBirth(15);
await instance.giveBirth(31);
await instance.giveBirth(30);
await instance.giveBirth(23);
await instance.giveBirth(7);
await instance.giveBirth(35);
await instance.giveBirth(8);
await instance.giveBirth(29);
await instance.giveBirth(28);
});
it('test 5',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('test 6',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.pause();
await instance.unpause();
});
it('test 7',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('test 8',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.pause();
await instance.unpause();
});
it('test 9',async() => {
await util.forwardEVMTime(cooldowns[0]);
// let Kit5 = await test_subjec.t_KittyCore.createPromoKitty(n4, accounts[3], {from: coo, gas: 400000, gasPrice: 1100000000, value:0});
//console.log(Kit1.logs);

//培养第一代 kitty5
await instance.breedWith(55, 56, {from: coo});
await util.forwardEVMTime(cooldowns[0]);
await instance.giveBirth(55);

//培育第二代
await instance.breedWith(57, 59, {from: coo});
await util.forwardEVMTime(cooldowns[0]);});
it('attack', async() => {
 let result_Gen2 = await instance.giveBirth(57);
});
});
