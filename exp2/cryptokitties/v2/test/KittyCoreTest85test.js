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
await instance.createPromoKitty(275157696, coo, {from: coo,value: 0});
await instance.createPromoKitty(737218790, coo, {from: coo,value: 0});
await instance.createPromoKitty(333938218, coo, {from: coo,value: 0});
await instance.createPromoKitty(55444350, coo, {from: coo,value: 0});
await instance.createPromoKitty(577526510, coo, {from: coo,value: 0});
await instance.createPromoKitty(330671099, coo, {from: coo,value: 0});
await instance.createPromoKitty(325075764, coo, {from: coo,value: 0});
await instance.createPromoKitty(692399244, coo, {from: coo,value: 0});
await instance.createPromoKitty(318674740, coo, {from: coo,value: 0});
await instance.createPromoKitty(919248865, coo, {from: coo,value: 0});
await instance.createPromoKitty(203267006, coo, {from: coo,value: 0});
await instance.createPromoKitty(890709661, coo, {from: coo,value: 0});
await instance.createPromoKitty(911932819, coo, {from: coo,value: 0});
await instance.createPromoKitty(155765816, coo, {from: coo,value: 0});
await instance.createPromoKitty(833592044, coo, {from: coo,value: 0});
await instance.createPromoKitty(736020475, coo, {from: coo,value: 0});
await instance.createPromoKitty(276538450, coo, {from: coo,value: 0});
await instance.createPromoKitty(29288301, coo, {from: coo,value: 0});
await instance.createPromoKitty(394803951, coo, {from: coo,value: 0});
await instance.createPromoKitty(219561695, coo, {from: coo,value: 0});
await instance.createPromoKitty(270505712, coo, {from: coo,value: 0});
await instance.createPromoKitty(85723594, coo, {from: coo,value: 0});
await instance.createPromoKitty(635712402, coo, {from: coo,value: 0});
await instance.createPromoKitty(906333573, coo, {from: coo,value: 0});
await instance.createPromoKitty(211188081, coo, {from: coo,value: 0});
await instance.createPromoKitty(293483824, coo, {from: coo,value: 0});
await instance.createPromoKitty(632951171, coo, {from: coo,value: 0});
await instance.createPromoKitty(488277590, coo, {from: coo,value: 0});
await instance.createPromoKitty(245792123, coo, {from: coo,value: 0});
await instance.createPromoKitty(2717554, coo, {from: coo,value: 0});
await instance.createPromoKitty(161835428, coo, {from: coo,value: 0});
await instance.createPromoKitty(599467789, coo, {from: coo,value: 0});
await instance.createPromoKitty(883334213, coo, {from: coo,value: 0});
await instance.createPromoKitty(148382625, coo, {from: coo,value: 0});
await instance.createPromoKitty(950855490, coo, {from: coo,value: 0});
await instance.createPromoKitty(24207981, coo, {from: coo,value: 0});
await instance.createPromoKitty(716433696, coo, {from: coo,value: 0});
await instance.createPromoKitty(809392802, coo, {from: coo,value: 0});
await instance.createPromoKitty(598858204, coo, {from: coo,value: 0});
await instance.createPromoKitty(723916193, coo, {from: coo,value: 0});
await instance.createPromoKitty(923968342, coo, {from: coo,value: 0});
await instance.createPromoKitty(770955761, coo, {from: coo,value: 0});
await instance.createPromoKitty(849403763, coo, {from: coo,value: 0});
await instance.createPromoKitty(341077415, coo, {from: coo,value: 0});
await instance.createPromoKitty(522067123, coo, {from: coo,value: 0});
await instance.createPromoKitty(586530141, coo, {from: coo,value: 0});
await instance.createPromoKitty(2897892, coo, {from: coo,value: 0});
await instance.createPromoKitty(197952499, coo, {from: coo,value: 0});
await instance.createPromoKitty(594006698, coo, {from: coo,value: 0});
await instance.createPromoKitty(121329826, coo, {from: coo,value: 0});
await instance.createPromoKitty(319022554, coo, {from: coo,value: 0});
await instance.createPromoKitty(3260410, coo, {from: coo,value: 0});
await instance.createPromoKitty(647448629, coo, {from: coo,value: 0});
await instance.createPromoKitty(894943155, coo, {from: coo,value: 0});
await instance.createPromoKitty(826213567, coo, {from: coo,value: 0});
await instance.createPromoKitty(57628457, coo, {from: coo,value: 0});
await instance.createPromoKitty(643581694, coo, {from: coo,value: 0});
await instance.createPromoKitty(197300670, coo, {from: coo,value: 0});
await instance.createPromoKitty(19103652, coo, {from: coo,value: 0});
await instance.createPromoKitty(776932208, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(10, 31, {from: coo});
await instance.breedWith(17, 24, {from: coo});
await instance.breedWith(37, 40, {from: coo});
await instance.breedWith(8, 23, {from: coo});
await instance.breedWith(27, 15, {from: coo});
await instance.breedWith(35, 3, {from: coo});
await instance.breedWith(13, 29, {from: coo});
await instance.breedWith(18, 34, {from: coo});
await instance.breedWith(28, 12, {from: coo});
await instance.breedWith(6, 38, {from: coo});
await instance.breedWith(5, 14, {from: coo});
await instance.breedWith(2, 33, {from: coo});
await instance.breedWith(1, 25, {from: coo});
await instance.breedWith(32, 4, {from: coo});
await instance.breedWith(26, 16, {from: coo});
await instance.breedWith(11, 7, {from: coo});
await instance.breedWith(9, 21, {from: coo});
await instance.breedWith(20, 30, {from: coo});
await instance.breedWith(39, 19, {from: coo});
await instance.breedWith(22, 36, {from: coo});
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
await instance.giveBirth(10);
await instance.giveBirth(17);
await instance.giveBirth(37);
await instance.giveBirth(8);
await instance.giveBirth(27);
await instance.giveBirth(35);
await instance.giveBirth(13);
await instance.giveBirth(18);
await instance.giveBirth(28);
await instance.giveBirth(6);
await instance.giveBirth(5);
await instance.giveBirth(2);
await instance.giveBirth(1);
await instance.giveBirth(32);
await instance.giveBirth(26);
await instance.giveBirth(11);
await instance.giveBirth(9);
await instance.giveBirth(20);
await instance.giveBirth(39);
await instance.giveBirth(22);
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
