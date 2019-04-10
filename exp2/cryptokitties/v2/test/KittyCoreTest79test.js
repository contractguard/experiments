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
await instance.createPromoKitty(359186130, coo, {from: coo,value: 0});
await instance.createPromoKitty(610168492, coo, {from: coo,value: 0});
await instance.createPromoKitty(565994767, coo, {from: coo,value: 0});
await instance.createPromoKitty(587053031, coo, {from: coo,value: 0});
await instance.createPromoKitty(372341204, coo, {from: coo,value: 0});
await instance.createPromoKitty(620039502, coo, {from: coo,value: 0});
await instance.createPromoKitty(328314417, coo, {from: coo,value: 0});
await instance.createPromoKitty(164829809, coo, {from: coo,value: 0});
await instance.createPromoKitty(325478793, coo, {from: coo,value: 0});
await instance.createPromoKitty(963372162, coo, {from: coo,value: 0});
await instance.createPromoKitty(23622781, coo, {from: coo,value: 0});
await instance.createPromoKitty(423993165, coo, {from: coo,value: 0});
await instance.createPromoKitty(877396261, coo, {from: coo,value: 0});
await instance.createPromoKitty(754942042, coo, {from: coo,value: 0});
await instance.createPromoKitty(921906849, coo, {from: coo,value: 0});
await instance.createPromoKitty(705920892, coo, {from: coo,value: 0});
await instance.createPromoKitty(800865070, coo, {from: coo,value: 0});
await instance.createPromoKitty(931271591, coo, {from: coo,value: 0});
await instance.createPromoKitty(432416895, coo, {from: coo,value: 0});
await instance.createPromoKitty(690289961, coo, {from: coo,value: 0});
await instance.createPromoKitty(446600821, coo, {from: coo,value: 0});
await instance.createPromoKitty(555050735, coo, {from: coo,value: 0});
await instance.createPromoKitty(853585849, coo, {from: coo,value: 0});
await instance.createPromoKitty(916852145, coo, {from: coo,value: 0});
await instance.createPromoKitty(249915200, coo, {from: coo,value: 0});
await instance.createPromoKitty(565326519, coo, {from: coo,value: 0});
await instance.createPromoKitty(836043502, coo, {from: coo,value: 0});
await instance.createPromoKitty(563979616, coo, {from: coo,value: 0});
await instance.createPromoKitty(619776023, coo, {from: coo,value: 0});
await instance.createPromoKitty(877693788, coo, {from: coo,value: 0});
await instance.createPromoKitty(928825842, coo, {from: coo,value: 0});
await instance.createPromoKitty(87790907, coo, {from: coo,value: 0});
await instance.createPromoKitty(408798483, coo, {from: coo,value: 0});
await instance.createPromoKitty(188593040, coo, {from: coo,value: 0});
await instance.createPromoKitty(796928090, coo, {from: coo,value: 0});
await instance.createPromoKitty(874352648, coo, {from: coo,value: 0});
await instance.createPromoKitty(776744171, coo, {from: coo,value: 0});
await instance.createPromoKitty(570197162, coo, {from: coo,value: 0});
await instance.createPromoKitty(298118109, coo, {from: coo,value: 0});
await instance.createPromoKitty(482003464, coo, {from: coo,value: 0});
await instance.createPromoKitty(801780841, coo, {from: coo,value: 0});
await instance.createPromoKitty(923447042, coo, {from: coo,value: 0});
await instance.createPromoKitty(56514727, coo, {from: coo,value: 0});
await instance.createPromoKitty(381579988, coo, {from: coo,value: 0});
await instance.createPromoKitty(383571679, coo, {from: coo,value: 0});
await instance.createPromoKitty(953265533, coo, {from: coo,value: 0});
await instance.createPromoKitty(100341669, coo, {from: coo,value: 0});
await instance.createPromoKitty(438647129, coo, {from: coo,value: 0});
await instance.createPromoKitty(570703943, coo, {from: coo,value: 0});
await instance.createPromoKitty(857091076, coo, {from: coo,value: 0});
await instance.createPromoKitty(297014100, coo, {from: coo,value: 0});
await instance.createPromoKitty(218020615, coo, {from: coo,value: 0});
await instance.createPromoKitty(220848325, coo, {from: coo,value: 0});
await instance.createPromoKitty(410118134, coo, {from: coo,value: 0});
await instance.createPromoKitty(806883134, coo, {from: coo,value: 0});
await instance.createPromoKitty(586962575, coo, {from: coo,value: 0});
await instance.createPromoKitty(985783232, coo, {from: coo,value: 0});
await instance.createPromoKitty(517727177, coo, {from: coo,value: 0});
await instance.createPromoKitty(306307460, coo, {from: coo,value: 0});
await instance.createPromoKitty(681798884, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(23, 2, {from: coo});
await instance.breedWith(37, 16, {from: coo});
await instance.breedWith(22, 1, {from: coo});
await instance.breedWith(15, 12, {from: coo});
await instance.breedWith(5, 14, {from: coo});
await instance.breedWith(32, 26, {from: coo});
await instance.breedWith(31, 40, {from: coo});
await instance.breedWith(39, 24, {from: coo});
await instance.breedWith(35, 9, {from: coo});
await instance.breedWith(11, 33, {from: coo});
await instance.breedWith(17, 21, {from: coo});
await instance.breedWith(7, 38, {from: coo});
await instance.breedWith(20, 27, {from: coo});
await instance.breedWith(8, 36, {from: coo});
await instance.breedWith(18, 28, {from: coo});
await instance.breedWith(4, 25, {from: coo});
await instance.breedWith(10, 34, {from: coo});
await instance.breedWith(30, 29, {from: coo});
await instance.breedWith(6, 13, {from: coo});
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
await instance.giveBirth(23);
await instance.giveBirth(37);
await instance.giveBirth(22);
await instance.giveBirth(15);
await instance.giveBirth(5);
await instance.giveBirth(32);
await instance.giveBirth(31);
await instance.giveBirth(39);
await instance.giveBirth(35);
await instance.giveBirth(11);
await instance.giveBirth(17);
await instance.giveBirth(7);
await instance.giveBirth(20);
await instance.giveBirth(8);
await instance.giveBirth(18);
await instance.giveBirth(4);
await instance.giveBirth(10);
await instance.giveBirth(30);
await instance.giveBirth(6);
await instance.giveBirth(3);
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
