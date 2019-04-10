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
await instance.createPromoKitty(423716043, coo, {from: coo,value: 0});
await instance.createPromoKitty(65331046, coo, {from: coo,value: 0});
await instance.createPromoKitty(942877572, coo, {from: coo,value: 0});
await instance.createPromoKitty(194227240, coo, {from: coo,value: 0});
await instance.createPromoKitty(799054249, coo, {from: coo,value: 0});
await instance.createPromoKitty(562575553, coo, {from: coo,value: 0});
await instance.createPromoKitty(292083213, coo, {from: coo,value: 0});
await instance.createPromoKitty(215598700, coo, {from: coo,value: 0});
await instance.createPromoKitty(23093521, coo, {from: coo,value: 0});
await instance.createPromoKitty(199836453, coo, {from: coo,value: 0});
await instance.createPromoKitty(272491508, coo, {from: coo,value: 0});
await instance.createPromoKitty(763721222, coo, {from: coo,value: 0});
await instance.createPromoKitty(230435472, coo, {from: coo,value: 0});
await instance.createPromoKitty(420432401, coo, {from: coo,value: 0});
await instance.createPromoKitty(207372355, coo, {from: coo,value: 0});
await instance.createPromoKitty(394321399, coo, {from: coo,value: 0});
await instance.createPromoKitty(645449718, coo, {from: coo,value: 0});
await instance.createPromoKitty(975690364, coo, {from: coo,value: 0});
await instance.createPromoKitty(190951595, coo, {from: coo,value: 0});
await instance.createPromoKitty(503338485, coo, {from: coo,value: 0});
await instance.createPromoKitty(371924976, coo, {from: coo,value: 0});
await instance.createPromoKitty(161863389, coo, {from: coo,value: 0});
await instance.createPromoKitty(795180410, coo, {from: coo,value: 0});
await instance.createPromoKitty(363820644, coo, {from: coo,value: 0});
await instance.createPromoKitty(12864499, coo, {from: coo,value: 0});
await instance.createPromoKitty(481651823, coo, {from: coo,value: 0});
await instance.createPromoKitty(474305878, coo, {from: coo,value: 0});
await instance.createPromoKitty(422943906, coo, {from: coo,value: 0});
await instance.createPromoKitty(347099874, coo, {from: coo,value: 0});
await instance.createPromoKitty(241766815, coo, {from: coo,value: 0});
await instance.createPromoKitty(933729599, coo, {from: coo,value: 0});
await instance.createPromoKitty(198006142, coo, {from: coo,value: 0});
await instance.createPromoKitty(840418306, coo, {from: coo,value: 0});
await instance.createPromoKitty(593718919, coo, {from: coo,value: 0});
await instance.createPromoKitty(852393797, coo, {from: coo,value: 0});
await instance.createPromoKitty(974751196, coo, {from: coo,value: 0});
await instance.createPromoKitty(636065420, coo, {from: coo,value: 0});
await instance.createPromoKitty(942698700, coo, {from: coo,value: 0});
await instance.createPromoKitty(959331805, coo, {from: coo,value: 0});
await instance.createPromoKitty(162440641, coo, {from: coo,value: 0});
await instance.createPromoKitty(820113742, coo, {from: coo,value: 0});
await instance.createPromoKitty(545953843, coo, {from: coo,value: 0});
await instance.createPromoKitty(657876866, coo, {from: coo,value: 0});
await instance.createPromoKitty(655149121, coo, {from: coo,value: 0});
await instance.createPromoKitty(679635857, coo, {from: coo,value: 0});
await instance.createPromoKitty(526393595, coo, {from: coo,value: 0});
await instance.createPromoKitty(49542460, coo, {from: coo,value: 0});
await instance.createPromoKitty(409836848, coo, {from: coo,value: 0});
await instance.createPromoKitty(126232446, coo, {from: coo,value: 0});
await instance.createPromoKitty(669108850, coo, {from: coo,value: 0});
await instance.createPromoKitty(810233660, coo, {from: coo,value: 0});
await instance.createPromoKitty(266791904, coo, {from: coo,value: 0});
await instance.createPromoKitty(586456997, coo, {from: coo,value: 0});
await instance.createPromoKitty(486232110, coo, {from: coo,value: 0});
await instance.createPromoKitty(132392144, coo, {from: coo,value: 0});
await instance.createPromoKitty(101090273, coo, {from: coo,value: 0});
await instance.createPromoKitty(437519950, coo, {from: coo,value: 0});
await instance.createPromoKitty(532364597, coo, {from: coo,value: 0});
await instance.createPromoKitty(932840223, coo, {from: coo,value: 0});
await instance.createPromoKitty(886771090, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(27, 18, {from: coo});
await instance.breedWith(6, 30, {from: coo});
await instance.breedWith(28, 5, {from: coo});
await instance.breedWith(38, 1, {from: coo});
await instance.breedWith(35, 14, {from: coo});
await instance.breedWith(22, 17, {from: coo});
await instance.breedWith(39, 20, {from: coo});
await instance.breedWith(12, 37, {from: coo});
await instance.breedWith(10, 25, {from: coo});
await instance.breedWith(23, 8, {from: coo});
await instance.breedWith(15, 26, {from: coo});
await instance.breedWith(19, 11, {from: coo});
await instance.breedWith(32, 29, {from: coo});
await instance.breedWith(40, 34, {from: coo});
await instance.breedWith(16, 36, {from: coo});
await instance.breedWith(9, 7, {from: coo});
await instance.breedWith(2, 33, {from: coo});
await instance.breedWith(31, 4, {from: coo});
await instance.breedWith(3, 24, {from: coo});
await instance.breedWith(13, 21, {from: coo});
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
await instance.giveBirth(27);
await instance.giveBirth(6);
await instance.giveBirth(28);
await instance.giveBirth(38);
await instance.giveBirth(35);
await instance.giveBirth(22);
await instance.giveBirth(39);
await instance.giveBirth(12);
await instance.giveBirth(10);
await instance.giveBirth(23);
await instance.giveBirth(15);
await instance.giveBirth(19);
await instance.giveBirth(32);
await instance.giveBirth(40);
await instance.giveBirth(16);
await instance.giveBirth(9);
await instance.giveBirth(2);
await instance.giveBirth(31);
await instance.giveBirth(3);
await instance.giveBirth(13);
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
