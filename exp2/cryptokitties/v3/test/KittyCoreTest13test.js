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
await instance.createPromoKitty(613822400, coo, {from: coo,value: 0});
await instance.createPromoKitty(90086212, coo, {from: coo,value: 0});
await instance.createPromoKitty(587906326, coo, {from: coo,value: 0});
await instance.createPromoKitty(937003803, coo, {from: coo,value: 0});
await instance.createPromoKitty(674310552, coo, {from: coo,value: 0});
await instance.createPromoKitty(560041716, coo, {from: coo,value: 0});
await instance.createPromoKitty(325053861, coo, {from: coo,value: 0});
await instance.createPromoKitty(748765923, coo, {from: coo,value: 0});
await instance.createPromoKitty(293310800, coo, {from: coo,value: 0});
await instance.createPromoKitty(385903480, coo, {from: coo,value: 0});
await instance.createPromoKitty(736873610, coo, {from: coo,value: 0});
await instance.createPromoKitty(529225246, coo, {from: coo,value: 0});
await instance.createPromoKitty(484949815, coo, {from: coo,value: 0});
await instance.createPromoKitty(949981193, coo, {from: coo,value: 0});
await instance.createPromoKitty(851320511, coo, {from: coo,value: 0});
await instance.createPromoKitty(471254824, coo, {from: coo,value: 0});
await instance.createPromoKitty(71402157, coo, {from: coo,value: 0});
await instance.createPromoKitty(881790920, coo, {from: coo,value: 0});
await instance.createPromoKitty(488192430, coo, {from: coo,value: 0});
await instance.createPromoKitty(464578489, coo, {from: coo,value: 0});
await instance.createPromoKitty(51605325, coo, {from: coo,value: 0});
await instance.createPromoKitty(577209415, coo, {from: coo,value: 0});
await instance.createPromoKitty(834966981, coo, {from: coo,value: 0});
await instance.createPromoKitty(370640944, coo, {from: coo,value: 0});
await instance.createPromoKitty(861535275, coo, {from: coo,value: 0});
await instance.createPromoKitty(4758944, coo, {from: coo,value: 0});
await instance.createPromoKitty(926986882, coo, {from: coo,value: 0});
await instance.createPromoKitty(998769324, coo, {from: coo,value: 0});
await instance.createPromoKitty(568134626, coo, {from: coo,value: 0});
await instance.createPromoKitty(597488292, coo, {from: coo,value: 0});
await instance.createPromoKitty(406843053, coo, {from: coo,value: 0});
await instance.createPromoKitty(474081433, coo, {from: coo,value: 0});
await instance.createPromoKitty(103303192, coo, {from: coo,value: 0});
await instance.createPromoKitty(412451230, coo, {from: coo,value: 0});
await instance.createPromoKitty(238971668, coo, {from: coo,value: 0});
await instance.createPromoKitty(878143785, coo, {from: coo,value: 0});
await instance.createPromoKitty(246426779, coo, {from: coo,value: 0});
await instance.createPromoKitty(257211514, coo, {from: coo,value: 0});
await instance.createPromoKitty(63932156, coo, {from: coo,value: 0});
await instance.createPromoKitty(375383107, coo, {from: coo,value: 0});
await instance.createPromoKitty(822846774, coo, {from: coo,value: 0});
await instance.createPromoKitty(488801044, coo, {from: coo,value: 0});
await instance.createPromoKitty(349810895, coo, {from: coo,value: 0});
await instance.createPromoKitty(31754466, coo, {from: coo,value: 0});
await instance.createPromoKitty(435373700, coo, {from: coo,value: 0});
await instance.createPromoKitty(863147769, coo, {from: coo,value: 0});
await instance.createPromoKitty(189791653, coo, {from: coo,value: 0});
await instance.createPromoKitty(106434897, coo, {from: coo,value: 0});
await instance.createPromoKitty(640015747, coo, {from: coo,value: 0});
await instance.createPromoKitty(254603457, coo, {from: coo,value: 0});
await instance.createPromoKitty(412033019, coo, {from: coo,value: 0});
await instance.createPromoKitty(927704719, coo, {from: coo,value: 0});
await instance.createPromoKitty(646322862, coo, {from: coo,value: 0});
await instance.createPromoKitty(274795271, coo, {from: coo,value: 0});
await instance.createPromoKitty(730881610, coo, {from: coo,value: 0});
await instance.createPromoKitty(960674065, coo, {from: coo,value: 0});
await instance.createPromoKitty(221355237, coo, {from: coo,value: 0});
await instance.createPromoKitty(483689106, coo, {from: coo,value: 0});
await instance.createPromoKitty(674367175, coo, {from: coo,value: 0});
await instance.createPromoKitty(667039020, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(31, 29, {from: coo});
await instance.breedWith(22, 38, {from: coo});
await instance.breedWith(17, 33, {from: coo});
await instance.breedWith(13, 12, {from: coo});
await instance.breedWith(9, 34, {from: coo});
await instance.breedWith(20, 39, {from: coo});
await instance.breedWith(5, 6, {from: coo});
await instance.breedWith(37, 30, {from: coo});
await instance.breedWith(36, 25, {from: coo});
await instance.breedWith(16, 23, {from: coo});
await instance.breedWith(2, 32, {from: coo});
await instance.breedWith(27, 28, {from: coo});
await instance.breedWith(15, 8, {from: coo});
await instance.breedWith(7, 4, {from: coo});
await instance.breedWith(14, 18, {from: coo});
await instance.breedWith(10, 26, {from: coo});
await instance.breedWith(1, 24, {from: coo});
await instance.breedWith(35, 21, {from: coo});
await instance.breedWith(40, 11, {from: coo});
await instance.breedWith(3, 19, {from: coo});
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
await instance.giveBirth(31);
await instance.giveBirth(22);
await instance.giveBirth(17);
await instance.giveBirth(13);
await instance.giveBirth(9);
await instance.giveBirth(20);
await instance.giveBirth(5);
await instance.giveBirth(37);
await instance.giveBirth(36);
await instance.giveBirth(16);
await instance.giveBirth(2);
await instance.giveBirth(27);
await instance.giveBirth(15);
await instance.giveBirth(7);
await instance.giveBirth(14);
await instance.giveBirth(10);
await instance.giveBirth(1);
await instance.giveBirth(35);
await instance.giveBirth(40);
await instance.giveBirth(3);
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
