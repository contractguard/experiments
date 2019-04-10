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
await instance.createPromoKitty(216484729, coo, {from: coo,value: 0});
await instance.createPromoKitty(730385825, coo, {from: coo,value: 0});
await instance.createPromoKitty(657798960, coo, {from: coo,value: 0});
await instance.createPromoKitty(204477722, coo, {from: coo,value: 0});
await instance.createPromoKitty(588437749, coo, {from: coo,value: 0});
await instance.createPromoKitty(675728117, coo, {from: coo,value: 0});
await instance.createPromoKitty(747923084, coo, {from: coo,value: 0});
await instance.createPromoKitty(660185072, coo, {from: coo,value: 0});
await instance.createPromoKitty(868024369, coo, {from: coo,value: 0});
await instance.createPromoKitty(524983939, coo, {from: coo,value: 0});
await instance.createPromoKitty(102338354, coo, {from: coo,value: 0});
await instance.createPromoKitty(194982052, coo, {from: coo,value: 0});
await instance.createPromoKitty(977451589, coo, {from: coo,value: 0});
await instance.createPromoKitty(922973227, coo, {from: coo,value: 0});
await instance.createPromoKitty(372735594, coo, {from: coo,value: 0});
await instance.createPromoKitty(339473833, coo, {from: coo,value: 0});
await instance.createPromoKitty(343306986, coo, {from: coo,value: 0});
await instance.createPromoKitty(675666385, coo, {from: coo,value: 0});
await instance.createPromoKitty(770357820, coo, {from: coo,value: 0});
await instance.createPromoKitty(721760460, coo, {from: coo,value: 0});
await instance.createPromoKitty(441938993, coo, {from: coo,value: 0});
await instance.createPromoKitty(158479351, coo, {from: coo,value: 0});
await instance.createPromoKitty(778088686, coo, {from: coo,value: 0});
await instance.createPromoKitty(458940862, coo, {from: coo,value: 0});
await instance.createPromoKitty(903890502, coo, {from: coo,value: 0});
await instance.createPromoKitty(875519683, coo, {from: coo,value: 0});
await instance.createPromoKitty(197044067, coo, {from: coo,value: 0});
await instance.createPromoKitty(760773972, coo, {from: coo,value: 0});
await instance.createPromoKitty(119216827, coo, {from: coo,value: 0});
await instance.createPromoKitty(636918573, coo, {from: coo,value: 0});
await instance.createPromoKitty(16636739, coo, {from: coo,value: 0});
await instance.createPromoKitty(831076828, coo, {from: coo,value: 0});
await instance.createPromoKitty(295811296, coo, {from: coo,value: 0});
await instance.createPromoKitty(104818167, coo, {from: coo,value: 0});
await instance.createPromoKitty(621397224, coo, {from: coo,value: 0});
await instance.createPromoKitty(703869617, coo, {from: coo,value: 0});
await instance.createPromoKitty(96179151, coo, {from: coo,value: 0});
await instance.createPromoKitty(793663798, coo, {from: coo,value: 0});
await instance.createPromoKitty(155541784, coo, {from: coo,value: 0});
await instance.createPromoKitty(313832719, coo, {from: coo,value: 0});
await instance.createPromoKitty(88352362, coo, {from: coo,value: 0});
await instance.createPromoKitty(599125568, coo, {from: coo,value: 0});
await instance.createPromoKitty(882944371, coo, {from: coo,value: 0});
await instance.createPromoKitty(131005037, coo, {from: coo,value: 0});
await instance.createPromoKitty(322442998, coo, {from: coo,value: 0});
await instance.createPromoKitty(335040789, coo, {from: coo,value: 0});
await instance.createPromoKitty(289460293, coo, {from: coo,value: 0});
await instance.createPromoKitty(333574488, coo, {from: coo,value: 0});
await instance.createPromoKitty(629589754, coo, {from: coo,value: 0});
await instance.createPromoKitty(734722743, coo, {from: coo,value: 0});
await instance.createPromoKitty(172281142, coo, {from: coo,value: 0});
await instance.createPromoKitty(575925941, coo, {from: coo,value: 0});
await instance.createPromoKitty(53959101, coo, {from: coo,value: 0});
await instance.createPromoKitty(80905673, coo, {from: coo,value: 0});
await instance.createPromoKitty(633897562, coo, {from: coo,value: 0});
await instance.createPromoKitty(859483516, coo, {from: coo,value: 0});
await instance.createPromoKitty(564116445, coo, {from: coo,value: 0});
await instance.createPromoKitty(902479875, coo, {from: coo,value: 0});
await instance.createPromoKitty(947775756, coo, {from: coo,value: 0});
await instance.createPromoKitty(636787192, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(22, 8, {from: coo});
await instance.breedWith(27, 5, {from: coo});
await instance.breedWith(23, 9, {from: coo});
await instance.breedWith(4, 17, {from: coo});
await instance.breedWith(14, 35, {from: coo});
await instance.breedWith(34, 40, {from: coo});
await instance.breedWith(6, 11, {from: coo});
await instance.breedWith(3, 12, {from: coo});
await instance.breedWith(37, 36, {from: coo});
await instance.breedWith(25, 33, {from: coo});
await instance.breedWith(19, 13, {from: coo});
await instance.breedWith(26, 2, {from: coo});
await instance.breedWith(7, 39, {from: coo});
await instance.breedWith(24, 21, {from: coo});
await instance.breedWith(16, 1, {from: coo});
await instance.breedWith(32, 31, {from: coo});
await instance.breedWith(29, 18, {from: coo});
await instance.breedWith(20, 38, {from: coo});
await instance.breedWith(28, 10, {from: coo});
await instance.breedWith(30, 15, {from: coo});
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
await instance.giveBirth(22);
await instance.giveBirth(27);
await instance.giveBirth(23);
await instance.giveBirth(4);
await instance.giveBirth(14);
await instance.giveBirth(34);
await instance.giveBirth(6);
await instance.giveBirth(3);
await instance.giveBirth(37);
await instance.giveBirth(25);
await instance.giveBirth(19);
await instance.giveBirth(26);
await instance.giveBirth(7);
await instance.giveBirth(24);
await instance.giveBirth(16);
await instance.giveBirth(32);
await instance.giveBirth(29);
await instance.giveBirth(20);
await instance.giveBirth(28);
await instance.giveBirth(30);
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
