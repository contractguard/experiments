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
await instance.createPromoKitty(498421186, coo, {from: coo,value: 0});
await instance.createPromoKitty(482027853, coo, {from: coo,value: 0});
await instance.createPromoKitty(768677821, coo, {from: coo,value: 0});
await instance.createPromoKitty(152935249, coo, {from: coo,value: 0});
await instance.createPromoKitty(118890018, coo, {from: coo,value: 0});
await instance.createPromoKitty(361952765, coo, {from: coo,value: 0});
await instance.createPromoKitty(283380025, coo, {from: coo,value: 0});
await instance.createPromoKitty(39227982, coo, {from: coo,value: 0});
await instance.createPromoKitty(601239603, coo, {from: coo,value: 0});
await instance.createPromoKitty(385446798, coo, {from: coo,value: 0});
await instance.createPromoKitty(637790772, coo, {from: coo,value: 0});
await instance.createPromoKitty(293635728, coo, {from: coo,value: 0});
await instance.createPromoKitty(299997210, coo, {from: coo,value: 0});
await instance.createPromoKitty(2994789, coo, {from: coo,value: 0});
await instance.createPromoKitty(568183635, coo, {from: coo,value: 0});
await instance.createPromoKitty(156056617, coo, {from: coo,value: 0});
await instance.createPromoKitty(378985379, coo, {from: coo,value: 0});
await instance.createPromoKitty(917335663, coo, {from: coo,value: 0});
await instance.createPromoKitty(480172424, coo, {from: coo,value: 0});
await instance.createPromoKitty(927058007, coo, {from: coo,value: 0});
await instance.createPromoKitty(528528199, coo, {from: coo,value: 0});
await instance.createPromoKitty(727622511, coo, {from: coo,value: 0});
await instance.createPromoKitty(356110817, coo, {from: coo,value: 0});
await instance.createPromoKitty(911246028, coo, {from: coo,value: 0});
await instance.createPromoKitty(830295979, coo, {from: coo,value: 0});
await instance.createPromoKitty(902441872, coo, {from: coo,value: 0});
await instance.createPromoKitty(616242415, coo, {from: coo,value: 0});
await instance.createPromoKitty(270817894, coo, {from: coo,value: 0});
await instance.createPromoKitty(876805338, coo, {from: coo,value: 0});
await instance.createPromoKitty(176313176, coo, {from: coo,value: 0});
await instance.createPromoKitty(331576294, coo, {from: coo,value: 0});
await instance.createPromoKitty(786026030, coo, {from: coo,value: 0});
await instance.createPromoKitty(29505456, coo, {from: coo,value: 0});
await instance.createPromoKitty(439385092, coo, {from: coo,value: 0});
await instance.createPromoKitty(365825281, coo, {from: coo,value: 0});
await instance.createPromoKitty(596880853, coo, {from: coo,value: 0});
await instance.createPromoKitty(982632992, coo, {from: coo,value: 0});
await instance.createPromoKitty(919404625, coo, {from: coo,value: 0});
await instance.createPromoKitty(199956324, coo, {from: coo,value: 0});
await instance.createPromoKitty(168453662, coo, {from: coo,value: 0});
await instance.createPromoKitty(286799801, coo, {from: coo,value: 0});
await instance.createPromoKitty(611449765, coo, {from: coo,value: 0});
await instance.createPromoKitty(793657637, coo, {from: coo,value: 0});
await instance.createPromoKitty(617857650, coo, {from: coo,value: 0});
await instance.createPromoKitty(44241436, coo, {from: coo,value: 0});
await instance.createPromoKitty(591436753, coo, {from: coo,value: 0});
await instance.createPromoKitty(373533554, coo, {from: coo,value: 0});
await instance.createPromoKitty(399984027, coo, {from: coo,value: 0});
await instance.createPromoKitty(475918180, coo, {from: coo,value: 0});
await instance.createPromoKitty(692473200, coo, {from: coo,value: 0});
await instance.createPromoKitty(424256728, coo, {from: coo,value: 0});
await instance.createPromoKitty(154745667, coo, {from: coo,value: 0});
await instance.createPromoKitty(816441722, coo, {from: coo,value: 0});
await instance.createPromoKitty(267776766, coo, {from: coo,value: 0});
await instance.createPromoKitty(185858469, coo, {from: coo,value: 0});
await instance.createPromoKitty(520536343, coo, {from: coo,value: 0});
await instance.createPromoKitty(325182890, coo, {from: coo,value: 0});
await instance.createPromoKitty(566471994, coo, {from: coo,value: 0});
await instance.createPromoKitty(599597650, coo, {from: coo,value: 0});
await instance.createPromoKitty(782677131, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(17, 31, {from: coo});
await instance.breedWith(34, 24, {from: coo});
await instance.breedWith(10, 32, {from: coo});
await instance.breedWith(8, 30, {from: coo});
await instance.breedWith(40, 1, {from: coo});
await instance.breedWith(15, 19, {from: coo});
await instance.breedWith(39, 11, {from: coo});
await instance.breedWith(36, 29, {from: coo});
await instance.breedWith(35, 21, {from: coo});
await instance.breedWith(23, 28, {from: coo});
await instance.breedWith(2, 18, {from: coo});
await instance.breedWith(6, 22, {from: coo});
await instance.breedWith(7, 27, {from: coo});
await instance.breedWith(14, 3, {from: coo});
await instance.breedWith(25, 4, {from: coo});
await instance.breedWith(16, 5, {from: coo});
await instance.breedWith(38, 13, {from: coo});
await instance.breedWith(20, 12, {from: coo});
await instance.breedWith(37, 26, {from: coo});
await instance.breedWith(9, 33, {from: coo});
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
await instance.giveBirth(17);
await instance.giveBirth(34);
await instance.giveBirth(10);
await instance.giveBirth(8);
await instance.giveBirth(40);
await instance.giveBirth(15);
await instance.giveBirth(39);
await instance.giveBirth(36);
await instance.giveBirth(35);
await instance.giveBirth(23);
await instance.giveBirth(2);
await instance.giveBirth(6);
await instance.giveBirth(7);
await instance.giveBirth(14);
await instance.giveBirth(25);
await instance.giveBirth(16);
await instance.giveBirth(38);
await instance.giveBirth(20);
await instance.giveBirth(37);
await instance.giveBirth(9);
});
it('test 5',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('test 6',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('test 7',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('test 8',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('test 9',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('acctack', async() => {
 await instance._breedWith(57,58,{from:coo});
});
});
