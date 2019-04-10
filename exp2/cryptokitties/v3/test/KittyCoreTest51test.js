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
await instance.createPromoKitty(779813345, coo, {from: coo,value: 0});
await instance.createPromoKitty(421803924, coo, {from: coo,value: 0});
await instance.createPromoKitty(819742862, coo, {from: coo,value: 0});
await instance.createPromoKitty(500198006, coo, {from: coo,value: 0});
await instance.createPromoKitty(601765142, coo, {from: coo,value: 0});
await instance.createPromoKitty(780567026, coo, {from: coo,value: 0});
await instance.createPromoKitty(853298078, coo, {from: coo,value: 0});
await instance.createPromoKitty(233284883, coo, {from: coo,value: 0});
await instance.createPromoKitty(108696910, coo, {from: coo,value: 0});
await instance.createPromoKitty(282299510, coo, {from: coo,value: 0});
await instance.createPromoKitty(926884702, coo, {from: coo,value: 0});
await instance.createPromoKitty(822721249, coo, {from: coo,value: 0});
await instance.createPromoKitty(763158805, coo, {from: coo,value: 0});
await instance.createPromoKitty(71821120, coo, {from: coo,value: 0});
await instance.createPromoKitty(386924526, coo, {from: coo,value: 0});
await instance.createPromoKitty(879681987, coo, {from: coo,value: 0});
await instance.createPromoKitty(760696489, coo, {from: coo,value: 0});
await instance.createPromoKitty(470582160, coo, {from: coo,value: 0});
await instance.createPromoKitty(441263424, coo, {from: coo,value: 0});
await instance.createPromoKitty(989408372, coo, {from: coo,value: 0});
await instance.createPromoKitty(669362839, coo, {from: coo,value: 0});
await instance.createPromoKitty(469550969, coo, {from: coo,value: 0});
await instance.createPromoKitty(792757722, coo, {from: coo,value: 0});
await instance.createPromoKitty(451518299, coo, {from: coo,value: 0});
await instance.createPromoKitty(309565728, coo, {from: coo,value: 0});
await instance.createPromoKitty(96669639, coo, {from: coo,value: 0});
await instance.createPromoKitty(48292455, coo, {from: coo,value: 0});
await instance.createPromoKitty(861859121, coo, {from: coo,value: 0});
await instance.createPromoKitty(430341547, coo, {from: coo,value: 0});
await instance.createPromoKitty(755884755, coo, {from: coo,value: 0});
await instance.createPromoKitty(865798174, coo, {from: coo,value: 0});
await instance.createPromoKitty(631683148, coo, {from: coo,value: 0});
await instance.createPromoKitty(328462467, coo, {from: coo,value: 0});
await instance.createPromoKitty(580399649, coo, {from: coo,value: 0});
await instance.createPromoKitty(927265567, coo, {from: coo,value: 0});
await instance.createPromoKitty(179117526, coo, {from: coo,value: 0});
await instance.createPromoKitty(42044402, coo, {from: coo,value: 0});
await instance.createPromoKitty(847704526, coo, {from: coo,value: 0});
await instance.createPromoKitty(661864317, coo, {from: coo,value: 0});
await instance.createPromoKitty(5767353, coo, {from: coo,value: 0});
await instance.createPromoKitty(948310340, coo, {from: coo,value: 0});
await instance.createPromoKitty(508825591, coo, {from: coo,value: 0});
await instance.createPromoKitty(732855620, coo, {from: coo,value: 0});
await instance.createPromoKitty(858880848, coo, {from: coo,value: 0});
await instance.createPromoKitty(245844696, coo, {from: coo,value: 0});
await instance.createPromoKitty(240412927, coo, {from: coo,value: 0});
await instance.createPromoKitty(950787957, coo, {from: coo,value: 0});
await instance.createPromoKitty(260221133, coo, {from: coo,value: 0});
await instance.createPromoKitty(495218440, coo, {from: coo,value: 0});
await instance.createPromoKitty(825719202, coo, {from: coo,value: 0});
await instance.createPromoKitty(443954523, coo, {from: coo,value: 0});
await instance.createPromoKitty(877608820, coo, {from: coo,value: 0});
await instance.createPromoKitty(475988333, coo, {from: coo,value: 0});
await instance.createPromoKitty(666609440, coo, {from: coo,value: 0});
await instance.createPromoKitty(496005214, coo, {from: coo,value: 0});
await instance.createPromoKitty(327426969, coo, {from: coo,value: 0});
await instance.createPromoKitty(450341679, coo, {from: coo,value: 0});
await instance.createPromoKitty(95427974, coo, {from: coo,value: 0});
await instance.createPromoKitty(932058019, coo, {from: coo,value: 0});
await instance.createPromoKitty(380449228, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(2, 21, {from: coo});
await instance.breedWith(10, 5, {from: coo});
await instance.breedWith(25, 19, {from: coo});
await instance.breedWith(39, 17, {from: coo});
await instance.breedWith(11, 9, {from: coo});
await instance.breedWith(12, 4, {from: coo});
await instance.breedWith(14, 18, {from: coo});
await instance.breedWith(3, 20, {from: coo});
await instance.breedWith(35, 34, {from: coo});
await instance.breedWith(31, 26, {from: coo});
await instance.breedWith(1, 37, {from: coo});
await instance.breedWith(8, 6, {from: coo});
await instance.breedWith(36, 13, {from: coo});
await instance.breedWith(29, 33, {from: coo});
await instance.breedWith(30, 24, {from: coo});
await instance.breedWith(22, 7, {from: coo});
await instance.breedWith(27, 32, {from: coo});
await instance.breedWith(16, 23, {from: coo});
await instance.breedWith(28, 38, {from: coo});
await instance.breedWith(40, 15, {from: coo});
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
await instance.giveBirth(2);
await instance.giveBirth(10);
await instance.giveBirth(25);
await instance.giveBirth(39);
await instance.giveBirth(11);
await instance.giveBirth(12);
await instance.giveBirth(14);
await instance.giveBirth(3);
await instance.giveBirth(35);
await instance.giveBirth(31);
await instance.giveBirth(1);
await instance.giveBirth(8);
await instance.giveBirth(36);
await instance.giveBirth(29);
await instance.giveBirth(30);
await instance.giveBirth(22);
await instance.giveBirth(27);
await instance.giveBirth(16);
await instance.giveBirth(28);
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
