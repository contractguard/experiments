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
await instance.createPromoKitty(844314919, coo, {from: coo,value: 0});
await instance.createPromoKitty(342934500, coo, {from: coo,value: 0});
await instance.createPromoKitty(483162124, coo, {from: coo,value: 0});
await instance.createPromoKitty(366479339, coo, {from: coo,value: 0});
await instance.createPromoKitty(470751709, coo, {from: coo,value: 0});
await instance.createPromoKitty(194327895, coo, {from: coo,value: 0});
await instance.createPromoKitty(691047950, coo, {from: coo,value: 0});
await instance.createPromoKitty(755818817, coo, {from: coo,value: 0});
await instance.createPromoKitty(570498627, coo, {from: coo,value: 0});
await instance.createPromoKitty(726383041, coo, {from: coo,value: 0});
await instance.createPromoKitty(12451719, coo, {from: coo,value: 0});
await instance.createPromoKitty(280719771, coo, {from: coo,value: 0});
await instance.createPromoKitty(215086364, coo, {from: coo,value: 0});
await instance.createPromoKitty(779409141, coo, {from: coo,value: 0});
await instance.createPromoKitty(678619322, coo, {from: coo,value: 0});
await instance.createPromoKitty(378504151, coo, {from: coo,value: 0});
await instance.createPromoKitty(419686803, coo, {from: coo,value: 0});
await instance.createPromoKitty(434325421, coo, {from: coo,value: 0});
await instance.createPromoKitty(604218208, coo, {from: coo,value: 0});
await instance.createPromoKitty(242060223, coo, {from: coo,value: 0});
await instance.createPromoKitty(305684297, coo, {from: coo,value: 0});
await instance.createPromoKitty(448320216, coo, {from: coo,value: 0});
await instance.createPromoKitty(159607562, coo, {from: coo,value: 0});
await instance.createPromoKitty(375473177, coo, {from: coo,value: 0});
await instance.createPromoKitty(529617322, coo, {from: coo,value: 0});
await instance.createPromoKitty(600921056, coo, {from: coo,value: 0});
await instance.createPromoKitty(341120369, coo, {from: coo,value: 0});
await instance.createPromoKitty(212046703, coo, {from: coo,value: 0});
await instance.createPromoKitty(730946571, coo, {from: coo,value: 0});
await instance.createPromoKitty(141249582, coo, {from: coo,value: 0});
await instance.createPromoKitty(351790103, coo, {from: coo,value: 0});
await instance.createPromoKitty(525261639, coo, {from: coo,value: 0});
await instance.createPromoKitty(519962537, coo, {from: coo,value: 0});
await instance.createPromoKitty(276222150, coo, {from: coo,value: 0});
await instance.createPromoKitty(170009563, coo, {from: coo,value: 0});
await instance.createPromoKitty(318564310, coo, {from: coo,value: 0});
await instance.createPromoKitty(984301348, coo, {from: coo,value: 0});
await instance.createPromoKitty(109775074, coo, {from: coo,value: 0});
await instance.createPromoKitty(34820355, coo, {from: coo,value: 0});
await instance.createPromoKitty(81979118, coo, {from: coo,value: 0});
await instance.createPromoKitty(414553659, coo, {from: coo,value: 0});
await instance.createPromoKitty(860116805, coo, {from: coo,value: 0});
await instance.createPromoKitty(849322573, coo, {from: coo,value: 0});
await instance.createPromoKitty(46902070, coo, {from: coo,value: 0});
await instance.createPromoKitty(674814242, coo, {from: coo,value: 0});
await instance.createPromoKitty(484839939, coo, {from: coo,value: 0});
await instance.createPromoKitty(325087778, coo, {from: coo,value: 0});
await instance.createPromoKitty(385839794, coo, {from: coo,value: 0});
await instance.createPromoKitty(895609988, coo, {from: coo,value: 0});
await instance.createPromoKitty(380994967, coo, {from: coo,value: 0});
await instance.createPromoKitty(232776795, coo, {from: coo,value: 0});
await instance.createPromoKitty(450091565, coo, {from: coo,value: 0});
await instance.createPromoKitty(373709409, coo, {from: coo,value: 0});
await instance.createPromoKitty(170612274, coo, {from: coo,value: 0});
await instance.createPromoKitty(263830932, coo, {from: coo,value: 0});
await instance.createPromoKitty(503821922, coo, {from: coo,value: 0});
await instance.createPromoKitty(1128368, coo, {from: coo,value: 0});
await instance.createPromoKitty(53566640, coo, {from: coo,value: 0});
await instance.createPromoKitty(76662185, coo, {from: coo,value: 0});
await instance.createPromoKitty(575135104, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(18, 16, {from: coo});
await instance.breedWith(37, 6, {from: coo});
await instance.breedWith(25, 21, {from: coo});
await instance.breedWith(13, 34, {from: coo});
await instance.breedWith(36, 30, {from: coo});
await instance.breedWith(27, 35, {from: coo});
await instance.breedWith(11, 22, {from: coo});
await instance.breedWith(9, 20, {from: coo});
await instance.breedWith(2, 29, {from: coo});
await instance.breedWith(15, 32, {from: coo});
await instance.breedWith(40, 26, {from: coo});
await instance.breedWith(31, 33, {from: coo});
await instance.breedWith(4, 38, {from: coo});
await instance.breedWith(12, 28, {from: coo});
await instance.breedWith(3, 39, {from: coo});
await instance.breedWith(5, 10, {from: coo});
await instance.breedWith(14, 7, {from: coo});
await instance.breedWith(24, 1, {from: coo});
await instance.breedWith(19, 8, {from: coo});
await instance.breedWith(17, 23, {from: coo});
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
await instance.giveBirth(18);
await instance.giveBirth(37);
await instance.giveBirth(25);
await instance.giveBirth(13);
await instance.giveBirth(36);
await instance.giveBirth(27);
await instance.giveBirth(11);
await instance.giveBirth(9);
await instance.giveBirth(2);
await instance.giveBirth(15);
await instance.giveBirth(40);
await instance.giveBirth(31);
await instance.giveBirth(4);
await instance.giveBirth(12);
await instance.giveBirth(3);
await instance.giveBirth(5);
await instance.giveBirth(14);
await instance.giveBirth(24);
await instance.giveBirth(19);
await instance.giveBirth(17);
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
