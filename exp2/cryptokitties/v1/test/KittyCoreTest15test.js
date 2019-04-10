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
await instance.createPromoKitty(653495942, coo, {from: coo,value: 0});
await instance.createPromoKitty(115119396, coo, {from: coo,value: 0});
await instance.createPromoKitty(477782302, coo, {from: coo,value: 0});
await instance.createPromoKitty(285657383, coo, {from: coo,value: 0});
await instance.createPromoKitty(452838726, coo, {from: coo,value: 0});
await instance.createPromoKitty(178437401, coo, {from: coo,value: 0});
await instance.createPromoKitty(326574562, coo, {from: coo,value: 0});
await instance.createPromoKitty(279729679, coo, {from: coo,value: 0});
await instance.createPromoKitty(792547796, coo, {from: coo,value: 0});
await instance.createPromoKitty(701564580, coo, {from: coo,value: 0});
await instance.createPromoKitty(163863854, coo, {from: coo,value: 0});
await instance.createPromoKitty(395895506, coo, {from: coo,value: 0});
await instance.createPromoKitty(223652832, coo, {from: coo,value: 0});
await instance.createPromoKitty(392252314, coo, {from: coo,value: 0});
await instance.createPromoKitty(157203063, coo, {from: coo,value: 0});
await instance.createPromoKitty(591758103, coo, {from: coo,value: 0});
await instance.createPromoKitty(184161669, coo, {from: coo,value: 0});
await instance.createPromoKitty(759488355, coo, {from: coo,value: 0});
await instance.createPromoKitty(374142502, coo, {from: coo,value: 0});
await instance.createPromoKitty(18182403, coo, {from: coo,value: 0});
await instance.createPromoKitty(987778084, coo, {from: coo,value: 0});
await instance.createPromoKitty(108679860, coo, {from: coo,value: 0});
await instance.createPromoKitty(759819706, coo, {from: coo,value: 0});
await instance.createPromoKitty(58218593, coo, {from: coo,value: 0});
await instance.createPromoKitty(100296059, coo, {from: coo,value: 0});
await instance.createPromoKitty(92518203, coo, {from: coo,value: 0});
await instance.createPromoKitty(971141071, coo, {from: coo,value: 0});
await instance.createPromoKitty(191351442, coo, {from: coo,value: 0});
await instance.createPromoKitty(962187256, coo, {from: coo,value: 0});
await instance.createPromoKitty(271601658, coo, {from: coo,value: 0});
await instance.createPromoKitty(50965100, coo, {from: coo,value: 0});
await instance.createPromoKitty(449837619, coo, {from: coo,value: 0});
await instance.createPromoKitty(133178729, coo, {from: coo,value: 0});
await instance.createPromoKitty(263367526, coo, {from: coo,value: 0});
await instance.createPromoKitty(210140546, coo, {from: coo,value: 0});
await instance.createPromoKitty(899289692, coo, {from: coo,value: 0});
await instance.createPromoKitty(255504925, coo, {from: coo,value: 0});
await instance.createPromoKitty(873628716, coo, {from: coo,value: 0});
await instance.createPromoKitty(474442789, coo, {from: coo,value: 0});
await instance.createPromoKitty(750482319, coo, {from: coo,value: 0});
await instance.createPromoKitty(49302468, coo, {from: coo,value: 0});
await instance.createPromoKitty(280471072, coo, {from: coo,value: 0});
await instance.createPromoKitty(659975897, coo, {from: coo,value: 0});
await instance.createPromoKitty(7472916, coo, {from: coo,value: 0});
await instance.createPromoKitty(815350304, coo, {from: coo,value: 0});
await instance.createPromoKitty(909623804, coo, {from: coo,value: 0});
await instance.createPromoKitty(891136130, coo, {from: coo,value: 0});
await instance.createPromoKitty(619486068, coo, {from: coo,value: 0});
await instance.createPromoKitty(80355763, coo, {from: coo,value: 0});
await instance.createPromoKitty(849576977, coo, {from: coo,value: 0});
await instance.createPromoKitty(654159936, coo, {from: coo,value: 0});
await instance.createPromoKitty(511080425, coo, {from: coo,value: 0});
await instance.createPromoKitty(654451075, coo, {from: coo,value: 0});
await instance.createPromoKitty(394581027, coo, {from: coo,value: 0});
await instance.createPromoKitty(621400853, coo, {from: coo,value: 0});
await instance.createPromoKitty(149398824, coo, {from: coo,value: 0});
await instance.createPromoKitty(47109580, coo, {from: coo,value: 0});
await instance.createPromoKitty(490399498, coo, {from: coo,value: 0});
await instance.createPromoKitty(967298220, coo, {from: coo,value: 0});
await instance.createPromoKitty(5013355, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(29, 2, {from: coo});
await instance.breedWith(40, 11, {from: coo});
await instance.breedWith(26, 34, {from: coo});
await instance.breedWith(23, 5, {from: coo});
await instance.breedWith(37, 25, {from: coo});
await instance.breedWith(36, 9, {from: coo});
await instance.breedWith(32, 14, {from: coo});
await instance.breedWith(7, 33, {from: coo});
await instance.breedWith(12, 21, {from: coo});
await instance.breedWith(19, 15, {from: coo});
await instance.breedWith(22, 16, {from: coo});
await instance.breedWith(20, 4, {from: coo});
await instance.breedWith(38, 1, {from: coo});
await instance.breedWith(35, 3, {from: coo});
await instance.breedWith(30, 17, {from: coo});
await instance.breedWith(13, 10, {from: coo});
await instance.breedWith(8, 24, {from: coo});
await instance.breedWith(6, 28, {from: coo});
await instance.breedWith(31, 39, {from: coo});
await instance.breedWith(18, 27, {from: coo});
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
await instance.giveBirth(29);
await instance.giveBirth(40);
await instance.giveBirth(26);
await instance.giveBirth(23);
await instance.giveBirth(37);
await instance.giveBirth(36);
await instance.giveBirth(32);
await instance.giveBirth(7);
await instance.giveBirth(12);
await instance.giveBirth(19);
await instance.giveBirth(22);
await instance.giveBirth(20);
await instance.giveBirth(38);
await instance.giveBirth(35);
await instance.giveBirth(30);
await instance.giveBirth(13);
await instance.giveBirth(8);
await instance.giveBirth(6);
await instance.giveBirth(31);
await instance.giveBirth(18);
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
