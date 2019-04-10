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
await instance.createPromoKitty(347779030, coo, {from: coo,value: 0});
await instance.createPromoKitty(376390666, coo, {from: coo,value: 0});
await instance.createPromoKitty(228182581, coo, {from: coo,value: 0});
await instance.createPromoKitty(357824266, coo, {from: coo,value: 0});
await instance.createPromoKitty(341793258, coo, {from: coo,value: 0});
await instance.createPromoKitty(908178171, coo, {from: coo,value: 0});
await instance.createPromoKitty(228117440, coo, {from: coo,value: 0});
await instance.createPromoKitty(206239039, coo, {from: coo,value: 0});
await instance.createPromoKitty(176530547, coo, {from: coo,value: 0});
await instance.createPromoKitty(454245159, coo, {from: coo,value: 0});
await instance.createPromoKitty(630559862, coo, {from: coo,value: 0});
await instance.createPromoKitty(757774122, coo, {from: coo,value: 0});
await instance.createPromoKitty(978677859, coo, {from: coo,value: 0});
await instance.createPromoKitty(452748671, coo, {from: coo,value: 0});
await instance.createPromoKitty(653077935, coo, {from: coo,value: 0});
await instance.createPromoKitty(103463800, coo, {from: coo,value: 0});
await instance.createPromoKitty(721541845, coo, {from: coo,value: 0});
await instance.createPromoKitty(162717402, coo, {from: coo,value: 0});
await instance.createPromoKitty(429005890, coo, {from: coo,value: 0});
await instance.createPromoKitty(313979806, coo, {from: coo,value: 0});
await instance.createPromoKitty(403987882, coo, {from: coo,value: 0});
await instance.createPromoKitty(137470562, coo, {from: coo,value: 0});
await instance.createPromoKitty(13419098, coo, {from: coo,value: 0});
await instance.createPromoKitty(629938145, coo, {from: coo,value: 0});
await instance.createPromoKitty(417684047, coo, {from: coo,value: 0});
await instance.createPromoKitty(896414030, coo, {from: coo,value: 0});
await instance.createPromoKitty(819638508, coo, {from: coo,value: 0});
await instance.createPromoKitty(69048497, coo, {from: coo,value: 0});
await instance.createPromoKitty(219065818, coo, {from: coo,value: 0});
await instance.createPromoKitty(822108269, coo, {from: coo,value: 0});
await instance.createPromoKitty(792882165, coo, {from: coo,value: 0});
await instance.createPromoKitty(845085015, coo, {from: coo,value: 0});
await instance.createPromoKitty(167101268, coo, {from: coo,value: 0});
await instance.createPromoKitty(49706974, coo, {from: coo,value: 0});
await instance.createPromoKitty(494854225, coo, {from: coo,value: 0});
await instance.createPromoKitty(79915715, coo, {from: coo,value: 0});
await instance.createPromoKitty(163894174, coo, {from: coo,value: 0});
await instance.createPromoKitty(55262585, coo, {from: coo,value: 0});
await instance.createPromoKitty(662779312, coo, {from: coo,value: 0});
await instance.createPromoKitty(940703817, coo, {from: coo,value: 0});
await instance.createPromoKitty(455439560, coo, {from: coo,value: 0});
await instance.createPromoKitty(967422224, coo, {from: coo,value: 0});
await instance.createPromoKitty(670001044, coo, {from: coo,value: 0});
await instance.createPromoKitty(983593711, coo, {from: coo,value: 0});
await instance.createPromoKitty(628310893, coo, {from: coo,value: 0});
await instance.createPromoKitty(253182473, coo, {from: coo,value: 0});
await instance.createPromoKitty(783273437, coo, {from: coo,value: 0});
await instance.createPromoKitty(749204285, coo, {from: coo,value: 0});
await instance.createPromoKitty(801669975, coo, {from: coo,value: 0});
await instance.createPromoKitty(779266594, coo, {from: coo,value: 0});
await instance.createPromoKitty(762688320, coo, {from: coo,value: 0});
await instance.createPromoKitty(636372679, coo, {from: coo,value: 0});
await instance.createPromoKitty(320652673, coo, {from: coo,value: 0});
await instance.createPromoKitty(636863536, coo, {from: coo,value: 0});
await instance.createPromoKitty(730752824, coo, {from: coo,value: 0});
await instance.createPromoKitty(336269558, coo, {from: coo,value: 0});
await instance.createPromoKitty(77166504, coo, {from: coo,value: 0});
await instance.createPromoKitty(89306343, coo, {from: coo,value: 0});
await instance.createPromoKitty(297660523, coo, {from: coo,value: 0});
await instance.createPromoKitty(676313167, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(39, 23, {from: coo});
await instance.breedWith(27, 11, {from: coo});
await instance.breedWith(20, 24, {from: coo});
await instance.breedWith(22, 36, {from: coo});
await instance.breedWith(35, 29, {from: coo});
await instance.breedWith(32, 37, {from: coo});
await instance.breedWith(13, 6, {from: coo});
await instance.breedWith(1, 18, {from: coo});
await instance.breedWith(25, 3, {from: coo});
await instance.breedWith(16, 21, {from: coo});
await instance.breedWith(7, 8, {from: coo});
await instance.breedWith(38, 33, {from: coo});
await instance.breedWith(4, 40, {from: coo});
await instance.breedWith(12, 5, {from: coo});
await instance.breedWith(19, 2, {from: coo});
await instance.breedWith(30, 31, {from: coo});
await instance.breedWith(9, 10, {from: coo});
await instance.breedWith(14, 15, {from: coo});
await instance.breedWith(17, 28, {from: coo});
await instance.breedWith(26, 34, {from: coo});
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
await instance.giveBirth(39);
await instance.giveBirth(27);
await instance.giveBirth(20);
await instance.giveBirth(22);
await instance.giveBirth(35);
await instance.giveBirth(32);
await instance.giveBirth(13);
await instance.giveBirth(1);
await instance.giveBirth(25);
await instance.giveBirth(16);
await instance.giveBirth(7);
await instance.giveBirth(38);
await instance.giveBirth(4);
await instance.giveBirth(12);
await instance.giveBirth(19);
await instance.giveBirth(30);
await instance.giveBirth(9);
await instance.giveBirth(14);
await instance.giveBirth(17);
await instance.giveBirth(26);
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
});
it('attack', async() => {
 await instance.breedWith(57, bigValue, {from: coo});
});
});
