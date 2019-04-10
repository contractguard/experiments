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
await instance.createPromoKitty(506642327, coo, {from: coo,value: 0});
await instance.createPromoKitty(30733553, coo, {from: coo,value: 0});
await instance.createPromoKitty(363072211, coo, {from: coo,value: 0});
await instance.createPromoKitty(443619193, coo, {from: coo,value: 0});
await instance.createPromoKitty(613255404, coo, {from: coo,value: 0});
await instance.createPromoKitty(451499822, coo, {from: coo,value: 0});
await instance.createPromoKitty(978056482, coo, {from: coo,value: 0});
await instance.createPromoKitty(145375205, coo, {from: coo,value: 0});
await instance.createPromoKitty(303605356, coo, {from: coo,value: 0});
await instance.createPromoKitty(730073181, coo, {from: coo,value: 0});
await instance.createPromoKitty(592214120, coo, {from: coo,value: 0});
await instance.createPromoKitty(597030769, coo, {from: coo,value: 0});
await instance.createPromoKitty(724195236, coo, {from: coo,value: 0});
await instance.createPromoKitty(408061058, coo, {from: coo,value: 0});
await instance.createPromoKitty(141365093, coo, {from: coo,value: 0});
await instance.createPromoKitty(283578937, coo, {from: coo,value: 0});
await instance.createPromoKitty(855925548, coo, {from: coo,value: 0});
await instance.createPromoKitty(937041008, coo, {from: coo,value: 0});
await instance.createPromoKitty(435570800, coo, {from: coo,value: 0});
await instance.createPromoKitty(490423008, coo, {from: coo,value: 0});
await instance.createPromoKitty(298892359, coo, {from: coo,value: 0});
await instance.createPromoKitty(695019854, coo, {from: coo,value: 0});
await instance.createPromoKitty(904493777, coo, {from: coo,value: 0});
await instance.createPromoKitty(620107644, coo, {from: coo,value: 0});
await instance.createPromoKitty(108653980, coo, {from: coo,value: 0});
await instance.createPromoKitty(940578702, coo, {from: coo,value: 0});
await instance.createPromoKitty(409165299, coo, {from: coo,value: 0});
await instance.createPromoKitty(341396135, coo, {from: coo,value: 0});
await instance.createPromoKitty(441483214, coo, {from: coo,value: 0});
await instance.createPromoKitty(202339378, coo, {from: coo,value: 0});
await instance.createPromoKitty(476403668, coo, {from: coo,value: 0});
await instance.createPromoKitty(921953056, coo, {from: coo,value: 0});
await instance.createPromoKitty(192740597, coo, {from: coo,value: 0});
await instance.createPromoKitty(222099854, coo, {from: coo,value: 0});
await instance.createPromoKitty(25905589, coo, {from: coo,value: 0});
await instance.createPromoKitty(755934764, coo, {from: coo,value: 0});
await instance.createPromoKitty(653710424, coo, {from: coo,value: 0});
await instance.createPromoKitty(999337068, coo, {from: coo,value: 0});
await instance.createPromoKitty(146980478, coo, {from: coo,value: 0});
await instance.createPromoKitty(110063793, coo, {from: coo,value: 0});
await instance.createPromoKitty(892311234, coo, {from: coo,value: 0});
await instance.createPromoKitty(430658997, coo, {from: coo,value: 0});
await instance.createPromoKitty(305522117, coo, {from: coo,value: 0});
await instance.createPromoKitty(611233179, coo, {from: coo,value: 0});
await instance.createPromoKitty(543281043, coo, {from: coo,value: 0});
await instance.createPromoKitty(146416032, coo, {from: coo,value: 0});
await instance.createPromoKitty(806167682, coo, {from: coo,value: 0});
await instance.createPromoKitty(273966043, coo, {from: coo,value: 0});
await instance.createPromoKitty(127816760, coo, {from: coo,value: 0});
await instance.createPromoKitty(389668161, coo, {from: coo,value: 0});
await instance.createPromoKitty(862282342, coo, {from: coo,value: 0});
await instance.createPromoKitty(244590161, coo, {from: coo,value: 0});
await instance.createPromoKitty(940319963, coo, {from: coo,value: 0});
await instance.createPromoKitty(648406899, coo, {from: coo,value: 0});
await instance.createPromoKitty(277815846, coo, {from: coo,value: 0});
await instance.createPromoKitty(3114901, coo, {from: coo,value: 0});
await instance.createPromoKitty(729926988, coo, {from: coo,value: 0});
await instance.createPromoKitty(143995023, coo, {from: coo,value: 0});
await instance.createPromoKitty(725474086, coo, {from: coo,value: 0});
await instance.createPromoKitty(62245369, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(26, 2, {from: coo});
await instance.breedWith(34, 14, {from: coo});
await instance.breedWith(24, 36, {from: coo});
await instance.breedWith(18, 11, {from: coo});
await instance.breedWith(28, 17, {from: coo});
await instance.breedWith(19, 29, {from: coo});
await instance.breedWith(10, 30, {from: coo});
await instance.breedWith(40, 22, {from: coo});
await instance.breedWith(16, 25, {from: coo});
await instance.breedWith(5, 4, {from: coo});
await instance.breedWith(21, 15, {from: coo});
await instance.breedWith(12, 13, {from: coo});
await instance.breedWith(1, 9, {from: coo});
await instance.breedWith(32, 23, {from: coo});
await instance.breedWith(7, 27, {from: coo});
await instance.breedWith(35, 33, {from: coo});
await instance.breedWith(38, 31, {from: coo});
await instance.breedWith(37, 8, {from: coo});
await instance.breedWith(20, 6, {from: coo});
await instance.breedWith(39, 3, {from: coo});
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
await instance.giveBirth(26);
await instance.giveBirth(34);
await instance.giveBirth(24);
await instance.giveBirth(18);
await instance.giveBirth(28);
await instance.giveBirth(19);
await instance.giveBirth(10);
await instance.giveBirth(40);
await instance.giveBirth(16);
await instance.giveBirth(5);
await instance.giveBirth(21);
await instance.giveBirth(12);
await instance.giveBirth(1);
await instance.giveBirth(32);
await instance.giveBirth(7);
await instance.giveBirth(35);
await instance.giveBirth(38);
await instance.giveBirth(37);
await instance.giveBirth(20);
await instance.giveBirth(39);
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
