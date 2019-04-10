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
await instance.createPromoKitty(813916564, coo, {from: coo,value: 0});
await instance.createPromoKitty(382992188, coo, {from: coo,value: 0});
await instance.createPromoKitty(268178825, coo, {from: coo,value: 0});
await instance.createPromoKitty(134669046, coo, {from: coo,value: 0});
await instance.createPromoKitty(550729831, coo, {from: coo,value: 0});
await instance.createPromoKitty(323695104, coo, {from: coo,value: 0});
await instance.createPromoKitty(176778046, coo, {from: coo,value: 0});
await instance.createPromoKitty(342506382, coo, {from: coo,value: 0});
await instance.createPromoKitty(667965613, coo, {from: coo,value: 0});
await instance.createPromoKitty(229101698, coo, {from: coo,value: 0});
await instance.createPromoKitty(904089788, coo, {from: coo,value: 0});
await instance.createPromoKitty(101700903, coo, {from: coo,value: 0});
await instance.createPromoKitty(942538735, coo, {from: coo,value: 0});
await instance.createPromoKitty(101903812, coo, {from: coo,value: 0});
await instance.createPromoKitty(611006889, coo, {from: coo,value: 0});
await instance.createPromoKitty(882227355, coo, {from: coo,value: 0});
await instance.createPromoKitty(401798833, coo, {from: coo,value: 0});
await instance.createPromoKitty(845987786, coo, {from: coo,value: 0});
await instance.createPromoKitty(968690265, coo, {from: coo,value: 0});
await instance.createPromoKitty(711962276, coo, {from: coo,value: 0});
await instance.createPromoKitty(451239461, coo, {from: coo,value: 0});
await instance.createPromoKitty(426443523, coo, {from: coo,value: 0});
await instance.createPromoKitty(189033821, coo, {from: coo,value: 0});
await instance.createPromoKitty(658224940, coo, {from: coo,value: 0});
await instance.createPromoKitty(637812886, coo, {from: coo,value: 0});
await instance.createPromoKitty(264608200, coo, {from: coo,value: 0});
await instance.createPromoKitty(367437048, coo, {from: coo,value: 0});
await instance.createPromoKitty(765074423, coo, {from: coo,value: 0});
await instance.createPromoKitty(593253954, coo, {from: coo,value: 0});
await instance.createPromoKitty(133961682, coo, {from: coo,value: 0});
await instance.createPromoKitty(101065096, coo, {from: coo,value: 0});
await instance.createPromoKitty(98535054, coo, {from: coo,value: 0});
await instance.createPromoKitty(31091262, coo, {from: coo,value: 0});
await instance.createPromoKitty(684547155, coo, {from: coo,value: 0});
await instance.createPromoKitty(633749204, coo, {from: coo,value: 0});
await instance.createPromoKitty(490608064, coo, {from: coo,value: 0});
await instance.createPromoKitty(706911098, coo, {from: coo,value: 0});
await instance.createPromoKitty(26927687, coo, {from: coo,value: 0});
await instance.createPromoKitty(686282676, coo, {from: coo,value: 0});
await instance.createPromoKitty(656226955, coo, {from: coo,value: 0});
await instance.createPromoKitty(711476775, coo, {from: coo,value: 0});
await instance.createPromoKitty(287632063, coo, {from: coo,value: 0});
await instance.createPromoKitty(684967579, coo, {from: coo,value: 0});
await instance.createPromoKitty(356989520, coo, {from: coo,value: 0});
await instance.createPromoKitty(22051172, coo, {from: coo,value: 0});
await instance.createPromoKitty(26574681, coo, {from: coo,value: 0});
await instance.createPromoKitty(730083766, coo, {from: coo,value: 0});
await instance.createPromoKitty(649607578, coo, {from: coo,value: 0});
await instance.createPromoKitty(902768071, coo, {from: coo,value: 0});
await instance.createPromoKitty(514558893, coo, {from: coo,value: 0});
await instance.createPromoKitty(587951908, coo, {from: coo,value: 0});
await instance.createPromoKitty(98619675, coo, {from: coo,value: 0});
await instance.createPromoKitty(36492846, coo, {from: coo,value: 0});
await instance.createPromoKitty(624842939, coo, {from: coo,value: 0});
await instance.createPromoKitty(541072202, coo, {from: coo,value: 0});
await instance.createPromoKitty(511057359, coo, {from: coo,value: 0});
await instance.createPromoKitty(2352335, coo, {from: coo,value: 0});
await instance.createPromoKitty(134539260, coo, {from: coo,value: 0});
await instance.createPromoKitty(926143343, coo, {from: coo,value: 0});
await instance.createPromoKitty(67100105, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(31, 12, {from: coo});
await instance.breedWith(5, 11, {from: coo});
await instance.breedWith(29, 20, {from: coo});
await instance.breedWith(21, 33, {from: coo});
await instance.breedWith(35, 16, {from: coo});
await instance.breedWith(8, 3, {from: coo});
await instance.breedWith(30, 1, {from: coo});
await instance.breedWith(22, 23, {from: coo});
await instance.breedWith(15, 6, {from: coo});
await instance.breedWith(9, 39, {from: coo});
await instance.breedWith(34, 26, {from: coo});
await instance.breedWith(38, 25, {from: coo});
await instance.breedWith(10, 17, {from: coo});
await instance.breedWith(7, 14, {from: coo});
await instance.breedWith(2, 18, {from: coo});
await instance.breedWith(19, 40, {from: coo});
await instance.breedWith(37, 32, {from: coo});
await instance.breedWith(28, 36, {from: coo});
await instance.breedWith(24, 4, {from: coo});
await instance.breedWith(27, 13, {from: coo});
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
await instance.giveBirth(5);
await instance.giveBirth(29);
await instance.giveBirth(21);
await instance.giveBirth(35);
await instance.giveBirth(8);
await instance.giveBirth(30);
await instance.giveBirth(22);
await instance.giveBirth(15);
await instance.giveBirth(9);
await instance.giveBirth(34);
await instance.giveBirth(38);
await instance.giveBirth(10);
await instance.giveBirth(7);
await instance.giveBirth(2);
await instance.giveBirth(19);
await instance.giveBirth(37);
await instance.giveBirth(28);
await instance.giveBirth(24);
await instance.giveBirth(27);
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
