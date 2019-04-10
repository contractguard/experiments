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
await instance.createPromoKitty(220951044, coo, {from: coo,value: 0});
await instance.createPromoKitty(86289333, coo, {from: coo,value: 0});
await instance.createPromoKitty(571094340, coo, {from: coo,value: 0});
await instance.createPromoKitty(105786081, coo, {from: coo,value: 0});
await instance.createPromoKitty(941597448, coo, {from: coo,value: 0});
await instance.createPromoKitty(871327004, coo, {from: coo,value: 0});
await instance.createPromoKitty(658734989, coo, {from: coo,value: 0});
await instance.createPromoKitty(885571419, coo, {from: coo,value: 0});
await instance.createPromoKitty(923756517, coo, {from: coo,value: 0});
await instance.createPromoKitty(724727598, coo, {from: coo,value: 0});
await instance.createPromoKitty(227804639, coo, {from: coo,value: 0});
await instance.createPromoKitty(477468166, coo, {from: coo,value: 0});
await instance.createPromoKitty(693419328, coo, {from: coo,value: 0});
await instance.createPromoKitty(842423107, coo, {from: coo,value: 0});
await instance.createPromoKitty(81754256, coo, {from: coo,value: 0});
await instance.createPromoKitty(756141429, coo, {from: coo,value: 0});
await instance.createPromoKitty(907427928, coo, {from: coo,value: 0});
await instance.createPromoKitty(122426130, coo, {from: coo,value: 0});
await instance.createPromoKitty(601310273, coo, {from: coo,value: 0});
await instance.createPromoKitty(201113942, coo, {from: coo,value: 0});
await instance.createPromoKitty(973242732, coo, {from: coo,value: 0});
await instance.createPromoKitty(381257998, coo, {from: coo,value: 0});
await instance.createPromoKitty(316362103, coo, {from: coo,value: 0});
await instance.createPromoKitty(754229510, coo, {from: coo,value: 0});
await instance.createPromoKitty(390170455, coo, {from: coo,value: 0});
await instance.createPromoKitty(855508480, coo, {from: coo,value: 0});
await instance.createPromoKitty(860439969, coo, {from: coo,value: 0});
await instance.createPromoKitty(128389351, coo, {from: coo,value: 0});
await instance.createPromoKitty(150995257, coo, {from: coo,value: 0});
await instance.createPromoKitty(502269508, coo, {from: coo,value: 0});
await instance.createPromoKitty(997295286, coo, {from: coo,value: 0});
await instance.createPromoKitty(796784999, coo, {from: coo,value: 0});
await instance.createPromoKitty(805828978, coo, {from: coo,value: 0});
await instance.createPromoKitty(80448399, coo, {from: coo,value: 0});
await instance.createPromoKitty(808637832, coo, {from: coo,value: 0});
await instance.createPromoKitty(683200359, coo, {from: coo,value: 0});
await instance.createPromoKitty(625357546, coo, {from: coo,value: 0});
await instance.createPromoKitty(511753701, coo, {from: coo,value: 0});
await instance.createPromoKitty(66765506, coo, {from: coo,value: 0});
await instance.createPromoKitty(349046880, coo, {from: coo,value: 0});
await instance.createPromoKitty(296196141, coo, {from: coo,value: 0});
await instance.createPromoKitty(913059740, coo, {from: coo,value: 0});
await instance.createPromoKitty(878778729, coo, {from: coo,value: 0});
await instance.createPromoKitty(79110055, coo, {from: coo,value: 0});
await instance.createPromoKitty(572619845, coo, {from: coo,value: 0});
await instance.createPromoKitty(878380413, coo, {from: coo,value: 0});
await instance.createPromoKitty(461791066, coo, {from: coo,value: 0});
await instance.createPromoKitty(536242433, coo, {from: coo,value: 0});
await instance.createPromoKitty(757128400, coo, {from: coo,value: 0});
await instance.createPromoKitty(758212877, coo, {from: coo,value: 0});
await instance.createPromoKitty(836408902, coo, {from: coo,value: 0});
await instance.createPromoKitty(755130022, coo, {from: coo,value: 0});
await instance.createPromoKitty(430455031, coo, {from: coo,value: 0});
await instance.createPromoKitty(400288925, coo, {from: coo,value: 0});
await instance.createPromoKitty(411842857, coo, {from: coo,value: 0});
await instance.createPromoKitty(545394739, coo, {from: coo,value: 0});
await instance.createPromoKitty(93837605, coo, {from: coo,value: 0});
await instance.createPromoKitty(545073765, coo, {from: coo,value: 0});
await instance.createPromoKitty(109797991, coo, {from: coo,value: 0});
await instance.createPromoKitty(724631232, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(7, 5, {from: coo});
await instance.breedWith(24, 4, {from: coo});
await instance.breedWith(13, 21, {from: coo});
await instance.breedWith(1, 14, {from: coo});
await instance.breedWith(18, 40, {from: coo});
await instance.breedWith(34, 2, {from: coo});
await instance.breedWith(25, 31, {from: coo});
await instance.breedWith(37, 17, {from: coo});
await instance.breedWith(28, 3, {from: coo});
await instance.breedWith(20, 29, {from: coo});
await instance.breedWith(33, 15, {from: coo});
await instance.breedWith(19, 11, {from: coo});
await instance.breedWith(27, 10, {from: coo});
await instance.breedWith(30, 26, {from: coo});
await instance.breedWith(16, 12, {from: coo});
await instance.breedWith(9, 32, {from: coo});
await instance.breedWith(39, 8, {from: coo});
await instance.breedWith(35, 23, {from: coo});
await instance.breedWith(36, 22, {from: coo});
await instance.breedWith(38, 6, {from: coo});
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
await instance.giveBirth(7);
await instance.giveBirth(24);
await instance.giveBirth(13);
await instance.giveBirth(1);
await instance.giveBirth(18);
await instance.giveBirth(34);
await instance.giveBirth(25);
await instance.giveBirth(37);
await instance.giveBirth(28);
await instance.giveBirth(20);
await instance.giveBirth(33);
await instance.giveBirth(19);
await instance.giveBirth(27);
await instance.giveBirth(30);
await instance.giveBirth(16);
await instance.giveBirth(9);
await instance.giveBirth(39);
await instance.giveBirth(35);
await instance.giveBirth(36);
await instance.giveBirth(38);
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
