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
await instance.createPromoKitty(812234890, coo, {from: coo,value: 0});
await instance.createPromoKitty(566681324, coo, {from: coo,value: 0});
await instance.createPromoKitty(980903036, coo, {from: coo,value: 0});
await instance.createPromoKitty(80553722, coo, {from: coo,value: 0});
await instance.createPromoKitty(696361626, coo, {from: coo,value: 0});
await instance.createPromoKitty(722027027, coo, {from: coo,value: 0});
await instance.createPromoKitty(828357130, coo, {from: coo,value: 0});
await instance.createPromoKitty(770466541, coo, {from: coo,value: 0});
await instance.createPromoKitty(620010051, coo, {from: coo,value: 0});
await instance.createPromoKitty(588326520, coo, {from: coo,value: 0});
await instance.createPromoKitty(815367118, coo, {from: coo,value: 0});
await instance.createPromoKitty(149376374, coo, {from: coo,value: 0});
await instance.createPromoKitty(819074642, coo, {from: coo,value: 0});
await instance.createPromoKitty(700221788, coo, {from: coo,value: 0});
await instance.createPromoKitty(268592902, coo, {from: coo,value: 0});
await instance.createPromoKitty(177255561, coo, {from: coo,value: 0});
await instance.createPromoKitty(929538758, coo, {from: coo,value: 0});
await instance.createPromoKitty(492927760, coo, {from: coo,value: 0});
await instance.createPromoKitty(713618274, coo, {from: coo,value: 0});
await instance.createPromoKitty(705666239, coo, {from: coo,value: 0});
await instance.createPromoKitty(451389691, coo, {from: coo,value: 0});
await instance.createPromoKitty(674419512, coo, {from: coo,value: 0});
await instance.createPromoKitty(53842203, coo, {from: coo,value: 0});
await instance.createPromoKitty(65861609, coo, {from: coo,value: 0});
await instance.createPromoKitty(581777949, coo, {from: coo,value: 0});
await instance.createPromoKitty(998899388, coo, {from: coo,value: 0});
await instance.createPromoKitty(400598300, coo, {from: coo,value: 0});
await instance.createPromoKitty(223726969, coo, {from: coo,value: 0});
await instance.createPromoKitty(432914765, coo, {from: coo,value: 0});
await instance.createPromoKitty(137785733, coo, {from: coo,value: 0});
await instance.createPromoKitty(365575352, coo, {from: coo,value: 0});
await instance.createPromoKitty(118756296, coo, {from: coo,value: 0});
await instance.createPromoKitty(157336440, coo, {from: coo,value: 0});
await instance.createPromoKitty(31172177, coo, {from: coo,value: 0});
await instance.createPromoKitty(136669149, coo, {from: coo,value: 0});
await instance.createPromoKitty(978109443, coo, {from: coo,value: 0});
await instance.createPromoKitty(81850006, coo, {from: coo,value: 0});
await instance.createPromoKitty(816871816, coo, {from: coo,value: 0});
await instance.createPromoKitty(466654551, coo, {from: coo,value: 0});
await instance.createPromoKitty(697758396, coo, {from: coo,value: 0});
await instance.createPromoKitty(336447323, coo, {from: coo,value: 0});
await instance.createPromoKitty(996545036, coo, {from: coo,value: 0});
await instance.createPromoKitty(54527275, coo, {from: coo,value: 0});
await instance.createPromoKitty(199733669, coo, {from: coo,value: 0});
await instance.createPromoKitty(992797491, coo, {from: coo,value: 0});
await instance.createPromoKitty(711648550, coo, {from: coo,value: 0});
await instance.createPromoKitty(324674259, coo, {from: coo,value: 0});
await instance.createPromoKitty(991596448, coo, {from: coo,value: 0});
await instance.createPromoKitty(602988830, coo, {from: coo,value: 0});
await instance.createPromoKitty(718458204, coo, {from: coo,value: 0});
await instance.createPromoKitty(759163093, coo, {from: coo,value: 0});
await instance.createPromoKitty(851368246, coo, {from: coo,value: 0});
await instance.createPromoKitty(357514535, coo, {from: coo,value: 0});
await instance.createPromoKitty(216253091, coo, {from: coo,value: 0});
await instance.createPromoKitty(452899553, coo, {from: coo,value: 0});
await instance.createPromoKitty(607894764, coo, {from: coo,value: 0});
await instance.createPromoKitty(554660697, coo, {from: coo,value: 0});
await instance.createPromoKitty(689695254, coo, {from: coo,value: 0});
await instance.createPromoKitty(177988689, coo, {from: coo,value: 0});
await instance.createPromoKitty(648697423, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(10, 38, {from: coo});
await instance.breedWith(23, 19, {from: coo});
await instance.breedWith(6, 32, {from: coo});
await instance.breedWith(28, 22, {from: coo});
await instance.breedWith(13, 14, {from: coo});
await instance.breedWith(7, 21, {from: coo});
await instance.breedWith(39, 15, {from: coo});
await instance.breedWith(26, 29, {from: coo});
await instance.breedWith(9, 3, {from: coo});
await instance.breedWith(12, 34, {from: coo});
await instance.breedWith(25, 5, {from: coo});
await instance.breedWith(35, 31, {from: coo});
await instance.breedWith(36, 2, {from: coo});
await instance.breedWith(4, 20, {from: coo});
await instance.breedWith(27, 17, {from: coo});
await instance.breedWith(18, 8, {from: coo});
await instance.breedWith(33, 30, {from: coo});
await instance.breedWith(16, 1, {from: coo});
await instance.breedWith(37, 24, {from: coo});
await instance.breedWith(11, 40, {from: coo});
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
await instance.giveBirth(10);
await instance.giveBirth(23);
await instance.giveBirth(6);
await instance.giveBirth(28);
await instance.giveBirth(13);
await instance.giveBirth(7);
await instance.giveBirth(39);
await instance.giveBirth(26);
await instance.giveBirth(9);
await instance.giveBirth(12);
await instance.giveBirth(25);
await instance.giveBirth(35);
await instance.giveBirth(36);
await instance.giveBirth(4);
await instance.giveBirth(27);
await instance.giveBirth(18);
await instance.giveBirth(33);
await instance.giveBirth(16);
await instance.giveBirth(37);
await instance.giveBirth(11);
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
