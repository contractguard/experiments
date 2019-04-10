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
await instance.createPromoKitty(406412790, coo, {from: coo,value: 0});
await instance.createPromoKitty(278091959, coo, {from: coo,value: 0});
await instance.createPromoKitty(797586684, coo, {from: coo,value: 0});
await instance.createPromoKitty(868732806, coo, {from: coo,value: 0});
await instance.createPromoKitty(813074426, coo, {from: coo,value: 0});
await instance.createPromoKitty(338255716, coo, {from: coo,value: 0});
await instance.createPromoKitty(675411897, coo, {from: coo,value: 0});
await instance.createPromoKitty(339571349, coo, {from: coo,value: 0});
await instance.createPromoKitty(812517994, coo, {from: coo,value: 0});
await instance.createPromoKitty(44215561, coo, {from: coo,value: 0});
await instance.createPromoKitty(628826491, coo, {from: coo,value: 0});
await instance.createPromoKitty(803033535, coo, {from: coo,value: 0});
await instance.createPromoKitty(648198996, coo, {from: coo,value: 0});
await instance.createPromoKitty(207717427, coo, {from: coo,value: 0});
await instance.createPromoKitty(865973868, coo, {from: coo,value: 0});
await instance.createPromoKitty(410116314, coo, {from: coo,value: 0});
await instance.createPromoKitty(58401929, coo, {from: coo,value: 0});
await instance.createPromoKitty(987993530, coo, {from: coo,value: 0});
await instance.createPromoKitty(322218361, coo, {from: coo,value: 0});
await instance.createPromoKitty(271039129, coo, {from: coo,value: 0});
await instance.createPromoKitty(886801814, coo, {from: coo,value: 0});
await instance.createPromoKitty(387326788, coo, {from: coo,value: 0});
await instance.createPromoKitty(340917250, coo, {from: coo,value: 0});
await instance.createPromoKitty(602422405, coo, {from: coo,value: 0});
await instance.createPromoKitty(508626539, coo, {from: coo,value: 0});
await instance.createPromoKitty(340367652, coo, {from: coo,value: 0});
await instance.createPromoKitty(477909482, coo, {from: coo,value: 0});
await instance.createPromoKitty(366969713, coo, {from: coo,value: 0});
await instance.createPromoKitty(851155211, coo, {from: coo,value: 0});
await instance.createPromoKitty(139591862, coo, {from: coo,value: 0});
await instance.createPromoKitty(400699373, coo, {from: coo,value: 0});
await instance.createPromoKitty(87641147, coo, {from: coo,value: 0});
await instance.createPromoKitty(626837606, coo, {from: coo,value: 0});
await instance.createPromoKitty(574487269, coo, {from: coo,value: 0});
await instance.createPromoKitty(262024543, coo, {from: coo,value: 0});
await instance.createPromoKitty(723094503, coo, {from: coo,value: 0});
await instance.createPromoKitty(762592219, coo, {from: coo,value: 0});
await instance.createPromoKitty(7464044, coo, {from: coo,value: 0});
await instance.createPromoKitty(477193070, coo, {from: coo,value: 0});
await instance.createPromoKitty(131899476, coo, {from: coo,value: 0});
await instance.createPromoKitty(539930186, coo, {from: coo,value: 0});
await instance.createPromoKitty(903359503, coo, {from: coo,value: 0});
await instance.createPromoKitty(715569267, coo, {from: coo,value: 0});
await instance.createPromoKitty(482916073, coo, {from: coo,value: 0});
await instance.createPromoKitty(405326441, coo, {from: coo,value: 0});
await instance.createPromoKitty(345274579, coo, {from: coo,value: 0});
await instance.createPromoKitty(18264391, coo, {from: coo,value: 0});
await instance.createPromoKitty(566059430, coo, {from: coo,value: 0});
await instance.createPromoKitty(85911372, coo, {from: coo,value: 0});
await instance.createPromoKitty(621742105, coo, {from: coo,value: 0});
await instance.createPromoKitty(784397670, coo, {from: coo,value: 0});
await instance.createPromoKitty(278451671, coo, {from: coo,value: 0});
await instance.createPromoKitty(116825078, coo, {from: coo,value: 0});
await instance.createPromoKitty(225950572, coo, {from: coo,value: 0});
await instance.createPromoKitty(393660941, coo, {from: coo,value: 0});
await instance.createPromoKitty(782823182, coo, {from: coo,value: 0});
await instance.createPromoKitty(363128735, coo, {from: coo,value: 0});
await instance.createPromoKitty(944758345, coo, {from: coo,value: 0});
await instance.createPromoKitty(951253431, coo, {from: coo,value: 0});
await instance.createPromoKitty(847840594, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(7, 27, {from: coo});
await instance.breedWith(15, 31, {from: coo});
await instance.breedWith(25, 14, {from: coo});
await instance.breedWith(36, 28, {from: coo});
await instance.breedWith(13, 20, {from: coo});
await instance.breedWith(10, 39, {from: coo});
await instance.breedWith(35, 21, {from: coo});
await instance.breedWith(23, 37, {from: coo});
await instance.breedWith(34, 29, {from: coo});
await instance.breedWith(9, 18, {from: coo});
await instance.breedWith(5, 6, {from: coo});
await instance.breedWith(38, 40, {from: coo});
await instance.breedWith(22, 1, {from: coo});
await instance.breedWith(32, 24, {from: coo});
await instance.breedWith(12, 33, {from: coo});
await instance.breedWith(11, 3, {from: coo});
await instance.breedWith(30, 19, {from: coo});
await instance.breedWith(8, 2, {from: coo});
await instance.breedWith(16, 4, {from: coo});
await instance.breedWith(17, 26, {from: coo});
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
await instance.giveBirth(7);
await instance.giveBirth(15);
await instance.giveBirth(25);
await instance.giveBirth(36);
await instance.giveBirth(13);
await instance.giveBirth(10);
await instance.giveBirth(35);
await instance.giveBirth(23);
await instance.giveBirth(34);
await instance.giveBirth(9);
await instance.giveBirth(5);
await instance.giveBirth(38);
await instance.giveBirth(22);
await instance.giveBirth(32);
await instance.giveBirth(12);
await instance.giveBirth(11);
await instance.giveBirth(30);
await instance.giveBirth(8);
await instance.giveBirth(16);
await instance.giveBirth(17);
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
