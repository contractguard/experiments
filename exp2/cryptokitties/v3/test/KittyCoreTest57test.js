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
await instance.createPromoKitty(207104594, coo, {from: coo,value: 0});
await instance.createPromoKitty(609291955, coo, {from: coo,value: 0});
await instance.createPromoKitty(144559322, coo, {from: coo,value: 0});
await instance.createPromoKitty(169522846, coo, {from: coo,value: 0});
await instance.createPromoKitty(89655129, coo, {from: coo,value: 0});
await instance.createPromoKitty(306565089, coo, {from: coo,value: 0});
await instance.createPromoKitty(206865128, coo, {from: coo,value: 0});
await instance.createPromoKitty(756718057, coo, {from: coo,value: 0});
await instance.createPromoKitty(156618392, coo, {from: coo,value: 0});
await instance.createPromoKitty(569626545, coo, {from: coo,value: 0});
await instance.createPromoKitty(860709092, coo, {from: coo,value: 0});
await instance.createPromoKitty(177267631, coo, {from: coo,value: 0});
await instance.createPromoKitty(177245329, coo, {from: coo,value: 0});
await instance.createPromoKitty(119155002, coo, {from: coo,value: 0});
await instance.createPromoKitty(636555300, coo, {from: coo,value: 0});
await instance.createPromoKitty(718973128, coo, {from: coo,value: 0});
await instance.createPromoKitty(506643952, coo, {from: coo,value: 0});
await instance.createPromoKitty(238581250, coo, {from: coo,value: 0});
await instance.createPromoKitty(293770142, coo, {from: coo,value: 0});
await instance.createPromoKitty(283719716, coo, {from: coo,value: 0});
await instance.createPromoKitty(657723495, coo, {from: coo,value: 0});
await instance.createPromoKitty(947885517, coo, {from: coo,value: 0});
await instance.createPromoKitty(728209694, coo, {from: coo,value: 0});
await instance.createPromoKitty(324987112, coo, {from: coo,value: 0});
await instance.createPromoKitty(823576544, coo, {from: coo,value: 0});
await instance.createPromoKitty(987596983, coo, {from: coo,value: 0});
await instance.createPromoKitty(220560656, coo, {from: coo,value: 0});
await instance.createPromoKitty(400519275, coo, {from: coo,value: 0});
await instance.createPromoKitty(369920719, coo, {from: coo,value: 0});
await instance.createPromoKitty(876556187, coo, {from: coo,value: 0});
await instance.createPromoKitty(69452403, coo, {from: coo,value: 0});
await instance.createPromoKitty(491339294, coo, {from: coo,value: 0});
await instance.createPromoKitty(170784197, coo, {from: coo,value: 0});
await instance.createPromoKitty(152598825, coo, {from: coo,value: 0});
await instance.createPromoKitty(975838531, coo, {from: coo,value: 0});
await instance.createPromoKitty(572846881, coo, {from: coo,value: 0});
await instance.createPromoKitty(467218012, coo, {from: coo,value: 0});
await instance.createPromoKitty(716321740, coo, {from: coo,value: 0});
await instance.createPromoKitty(41709894, coo, {from: coo,value: 0});
await instance.createPromoKitty(39881474, coo, {from: coo,value: 0});
await instance.createPromoKitty(140442895, coo, {from: coo,value: 0});
await instance.createPromoKitty(535212681, coo, {from: coo,value: 0});
await instance.createPromoKitty(979759592, coo, {from: coo,value: 0});
await instance.createPromoKitty(812067414, coo, {from: coo,value: 0});
await instance.createPromoKitty(83409483, coo, {from: coo,value: 0});
await instance.createPromoKitty(246410498, coo, {from: coo,value: 0});
await instance.createPromoKitty(889669367, coo, {from: coo,value: 0});
await instance.createPromoKitty(715887234, coo, {from: coo,value: 0});
await instance.createPromoKitty(902335524, coo, {from: coo,value: 0});
await instance.createPromoKitty(92831424, coo, {from: coo,value: 0});
await instance.createPromoKitty(587549168, coo, {from: coo,value: 0});
await instance.createPromoKitty(733390713, coo, {from: coo,value: 0});
await instance.createPromoKitty(963041774, coo, {from: coo,value: 0});
await instance.createPromoKitty(412507731, coo, {from: coo,value: 0});
await instance.createPromoKitty(946311735, coo, {from: coo,value: 0});
await instance.createPromoKitty(491545974, coo, {from: coo,value: 0});
await instance.createPromoKitty(954819500, coo, {from: coo,value: 0});
await instance.createPromoKitty(72957759, coo, {from: coo,value: 0});
await instance.createPromoKitty(458775685, coo, {from: coo,value: 0});
await instance.createPromoKitty(523006077, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(33, 39, {from: coo});
await instance.breedWith(13, 8, {from: coo});
await instance.breedWith(5, 34, {from: coo});
await instance.breedWith(26, 4, {from: coo});
await instance.breedWith(7, 30, {from: coo});
await instance.breedWith(32, 17, {from: coo});
await instance.breedWith(37, 1, {from: coo});
await instance.breedWith(22, 21, {from: coo});
await instance.breedWith(23, 10, {from: coo});
await instance.breedWith(2, 25, {from: coo});
await instance.breedWith(31, 38, {from: coo});
await instance.breedWith(27, 9, {from: coo});
await instance.breedWith(35, 15, {from: coo});
await instance.breedWith(28, 19, {from: coo});
await instance.breedWith(3, 12, {from: coo});
await instance.breedWith(24, 18, {from: coo});
await instance.breedWith(6, 29, {from: coo});
await instance.breedWith(20, 11, {from: coo});
await instance.breedWith(14, 16, {from: coo});
await instance.breedWith(40, 36, {from: coo});
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
await instance.giveBirth(33);
await instance.giveBirth(13);
await instance.giveBirth(5);
await instance.giveBirth(26);
await instance.giveBirth(7);
await instance.giveBirth(32);
await instance.giveBirth(37);
await instance.giveBirth(22);
await instance.giveBirth(23);
await instance.giveBirth(2);
await instance.giveBirth(31);
await instance.giveBirth(27);
await instance.giveBirth(35);
await instance.giveBirth(28);
await instance.giveBirth(3);
await instance.giveBirth(24);
await instance.giveBirth(6);
await instance.giveBirth(20);
await instance.giveBirth(14);
await instance.giveBirth(40);
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
