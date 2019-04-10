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
await instance.createPromoKitty(468233319, coo, {from: coo,value: 0});
await instance.createPromoKitty(705456129, coo, {from: coo,value: 0});
await instance.createPromoKitty(880498591, coo, {from: coo,value: 0});
await instance.createPromoKitty(663263516, coo, {from: coo,value: 0});
await instance.createPromoKitty(388251703, coo, {from: coo,value: 0});
await instance.createPromoKitty(967131162, coo, {from: coo,value: 0});
await instance.createPromoKitty(875224008, coo, {from: coo,value: 0});
await instance.createPromoKitty(947466981, coo, {from: coo,value: 0});
await instance.createPromoKitty(732572, coo, {from: coo,value: 0});
await instance.createPromoKitty(659011983, coo, {from: coo,value: 0});
await instance.createPromoKitty(918874111, coo, {from: coo,value: 0});
await instance.createPromoKitty(865515120, coo, {from: coo,value: 0});
await instance.createPromoKitty(643872032, coo, {from: coo,value: 0});
await instance.createPromoKitty(607684232, coo, {from: coo,value: 0});
await instance.createPromoKitty(801546564, coo, {from: coo,value: 0});
await instance.createPromoKitty(404727746, coo, {from: coo,value: 0});
await instance.createPromoKitty(492813075, coo, {from: coo,value: 0});
await instance.createPromoKitty(341165644, coo, {from: coo,value: 0});
await instance.createPromoKitty(851201474, coo, {from: coo,value: 0});
await instance.createPromoKitty(214987938, coo, {from: coo,value: 0});
await instance.createPromoKitty(125791733, coo, {from: coo,value: 0});
await instance.createPromoKitty(387807690, coo, {from: coo,value: 0});
await instance.createPromoKitty(24931129, coo, {from: coo,value: 0});
await instance.createPromoKitty(697441961, coo, {from: coo,value: 0});
await instance.createPromoKitty(663708135, coo, {from: coo,value: 0});
await instance.createPromoKitty(549967948, coo, {from: coo,value: 0});
await instance.createPromoKitty(435649888, coo, {from: coo,value: 0});
await instance.createPromoKitty(584019181, coo, {from: coo,value: 0});
await instance.createPromoKitty(184720459, coo, {from: coo,value: 0});
await instance.createPromoKitty(788175873, coo, {from: coo,value: 0});
await instance.createPromoKitty(980383937, coo, {from: coo,value: 0});
await instance.createPromoKitty(455049018, coo, {from: coo,value: 0});
await instance.createPromoKitty(427828504, coo, {from: coo,value: 0});
await instance.createPromoKitty(863079139, coo, {from: coo,value: 0});
await instance.createPromoKitty(954222479, coo, {from: coo,value: 0});
await instance.createPromoKitty(558230932, coo, {from: coo,value: 0});
await instance.createPromoKitty(831418762, coo, {from: coo,value: 0});
await instance.createPromoKitty(190379036, coo, {from: coo,value: 0});
await instance.createPromoKitty(637739879, coo, {from: coo,value: 0});
await instance.createPromoKitty(150616361, coo, {from: coo,value: 0});
await instance.createPromoKitty(162520590, coo, {from: coo,value: 0});
await instance.createPromoKitty(770594947, coo, {from: coo,value: 0});
await instance.createPromoKitty(724131039, coo, {from: coo,value: 0});
await instance.createPromoKitty(280514043, coo, {from: coo,value: 0});
await instance.createPromoKitty(479483640, coo, {from: coo,value: 0});
await instance.createPromoKitty(634098890, coo, {from: coo,value: 0});
await instance.createPromoKitty(326246737, coo, {from: coo,value: 0});
await instance.createPromoKitty(78492099, coo, {from: coo,value: 0});
await instance.createPromoKitty(226016209, coo, {from: coo,value: 0});
await instance.createPromoKitty(25340749, coo, {from: coo,value: 0});
await instance.createPromoKitty(110770289, coo, {from: coo,value: 0});
await instance.createPromoKitty(601828186, coo, {from: coo,value: 0});
await instance.createPromoKitty(853483447, coo, {from: coo,value: 0});
await instance.createPromoKitty(316718308, coo, {from: coo,value: 0});
await instance.createPromoKitty(447022096, coo, {from: coo,value: 0});
await instance.createPromoKitty(2697751, coo, {from: coo,value: 0});
await instance.createPromoKitty(470633189, coo, {from: coo,value: 0});
await instance.createPromoKitty(753572668, coo, {from: coo,value: 0});
await instance.createPromoKitty(816505756, coo, {from: coo,value: 0});
await instance.createPromoKitty(740173207, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(39, 5, {from: coo});
await instance.breedWith(11, 15, {from: coo});
await instance.breedWith(13, 40, {from: coo});
await instance.breedWith(35, 4, {from: coo});
await instance.breedWith(28, 17, {from: coo});
await instance.breedWith(10, 26, {from: coo});
await instance.breedWith(29, 25, {from: coo});
await instance.breedWith(32, 9, {from: coo});
await instance.breedWith(37, 7, {from: coo});
await instance.breedWith(1, 23, {from: coo});
await instance.breedWith(38, 24, {from: coo});
await instance.breedWith(34, 31, {from: coo});
await instance.breedWith(21, 14, {from: coo});
await instance.breedWith(8, 33, {from: coo});
await instance.breedWith(22, 19, {from: coo});
await instance.breedWith(36, 20, {from: coo});
await instance.breedWith(16, 27, {from: coo});
await instance.breedWith(12, 18, {from: coo});
await instance.breedWith(2, 30, {from: coo});
await instance.breedWith(3, 6, {from: coo});
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
await instance.giveBirth(39);
await instance.giveBirth(11);
await instance.giveBirth(13);
await instance.giveBirth(35);
await instance.giveBirth(28);
await instance.giveBirth(10);
await instance.giveBirth(29);
await instance.giveBirth(32);
await instance.giveBirth(37);
await instance.giveBirth(1);
await instance.giveBirth(38);
await instance.giveBirth(34);
await instance.giveBirth(21);
await instance.giveBirth(8);
await instance.giveBirth(22);
await instance.giveBirth(36);
await instance.giveBirth(16);
await instance.giveBirth(12);
await instance.giveBirth(2);
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
