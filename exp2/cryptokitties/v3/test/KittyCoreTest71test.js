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
await instance.createPromoKitty(454663649, coo, {from: coo,value: 0});
await instance.createPromoKitty(689314584, coo, {from: coo,value: 0});
await instance.createPromoKitty(238459783, coo, {from: coo,value: 0});
await instance.createPromoKitty(974140718, coo, {from: coo,value: 0});
await instance.createPromoKitty(865030182, coo, {from: coo,value: 0});
await instance.createPromoKitty(968746720, coo, {from: coo,value: 0});
await instance.createPromoKitty(410929405, coo, {from: coo,value: 0});
await instance.createPromoKitty(500699966, coo, {from: coo,value: 0});
await instance.createPromoKitty(995652583, coo, {from: coo,value: 0});
await instance.createPromoKitty(26685739, coo, {from: coo,value: 0});
await instance.createPromoKitty(209577389, coo, {from: coo,value: 0});
await instance.createPromoKitty(576103773, coo, {from: coo,value: 0});
await instance.createPromoKitty(313136080, coo, {from: coo,value: 0});
await instance.createPromoKitty(952782942, coo, {from: coo,value: 0});
await instance.createPromoKitty(99144809, coo, {from: coo,value: 0});
await instance.createPromoKitty(818691471, coo, {from: coo,value: 0});
await instance.createPromoKitty(564188048, coo, {from: coo,value: 0});
await instance.createPromoKitty(641401395, coo, {from: coo,value: 0});
await instance.createPromoKitty(160289956, coo, {from: coo,value: 0});
await instance.createPromoKitty(297080929, coo, {from: coo,value: 0});
await instance.createPromoKitty(181005877, coo, {from: coo,value: 0});
await instance.createPromoKitty(563264793, coo, {from: coo,value: 0});
await instance.createPromoKitty(201024423, coo, {from: coo,value: 0});
await instance.createPromoKitty(6282350, coo, {from: coo,value: 0});
await instance.createPromoKitty(821448092, coo, {from: coo,value: 0});
await instance.createPromoKitty(789539802, coo, {from: coo,value: 0});
await instance.createPromoKitty(236410197, coo, {from: coo,value: 0});
await instance.createPromoKitty(498866729, coo, {from: coo,value: 0});
await instance.createPromoKitty(612264223, coo, {from: coo,value: 0});
await instance.createPromoKitty(598128794, coo, {from: coo,value: 0});
await instance.createPromoKitty(107140165, coo, {from: coo,value: 0});
await instance.createPromoKitty(991816936, coo, {from: coo,value: 0});
await instance.createPromoKitty(397702115, coo, {from: coo,value: 0});
await instance.createPromoKitty(137868106, coo, {from: coo,value: 0});
await instance.createPromoKitty(711981843, coo, {from: coo,value: 0});
await instance.createPromoKitty(4274171, coo, {from: coo,value: 0});
await instance.createPromoKitty(820689579, coo, {from: coo,value: 0});
await instance.createPromoKitty(672249078, coo, {from: coo,value: 0});
await instance.createPromoKitty(246731847, coo, {from: coo,value: 0});
await instance.createPromoKitty(149341614, coo, {from: coo,value: 0});
await instance.createPromoKitty(45831450, coo, {from: coo,value: 0});
await instance.createPromoKitty(29216644, coo, {from: coo,value: 0});
await instance.createPromoKitty(506414552, coo, {from: coo,value: 0});
await instance.createPromoKitty(987797065, coo, {from: coo,value: 0});
await instance.createPromoKitty(159536927, coo, {from: coo,value: 0});
await instance.createPromoKitty(727898276, coo, {from: coo,value: 0});
await instance.createPromoKitty(766318875, coo, {from: coo,value: 0});
await instance.createPromoKitty(427517805, coo, {from: coo,value: 0});
await instance.createPromoKitty(868094694, coo, {from: coo,value: 0});
await instance.createPromoKitty(185965369, coo, {from: coo,value: 0});
await instance.createPromoKitty(23268972, coo, {from: coo,value: 0});
await instance.createPromoKitty(745757921, coo, {from: coo,value: 0});
await instance.createPromoKitty(276483400, coo, {from: coo,value: 0});
await instance.createPromoKitty(299702469, coo, {from: coo,value: 0});
await instance.createPromoKitty(872439926, coo, {from: coo,value: 0});
await instance.createPromoKitty(340107369, coo, {from: coo,value: 0});
await instance.createPromoKitty(780398722, coo, {from: coo,value: 0});
await instance.createPromoKitty(539158360, coo, {from: coo,value: 0});
await instance.createPromoKitty(756312534, coo, {from: coo,value: 0});
await instance.createPromoKitty(27367095, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(22, 6, {from: coo});
await instance.breedWith(32, 30, {from: coo});
await instance.breedWith(13, 11, {from: coo});
await instance.breedWith(29, 5, {from: coo});
await instance.breedWith(2, 39, {from: coo});
await instance.breedWith(27, 40, {from: coo});
await instance.breedWith(25, 12, {from: coo});
await instance.breedWith(8, 20, {from: coo});
await instance.breedWith(33, 21, {from: coo});
await instance.breedWith(7, 10, {from: coo});
await instance.breedWith(34, 26, {from: coo});
await instance.breedWith(14, 3, {from: coo});
await instance.breedWith(35, 23, {from: coo});
await instance.breedWith(15, 19, {from: coo});
await instance.breedWith(18, 24, {from: coo});
await instance.breedWith(16, 37, {from: coo});
await instance.breedWith(9, 36, {from: coo});
await instance.breedWith(1, 31, {from: coo});
await instance.breedWith(38, 28, {from: coo});
await instance.breedWith(17, 4, {from: coo});
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
await instance.giveBirth(22);
await instance.giveBirth(32);
await instance.giveBirth(13);
await instance.giveBirth(29);
await instance.giveBirth(2);
await instance.giveBirth(27);
await instance.giveBirth(25);
await instance.giveBirth(8);
await instance.giveBirth(33);
await instance.giveBirth(7);
await instance.giveBirth(34);
await instance.giveBirth(14);
await instance.giveBirth(35);
await instance.giveBirth(15);
await instance.giveBirth(18);
await instance.giveBirth(16);
await instance.giveBirth(9);
await instance.giveBirth(1);
await instance.giveBirth(38);
await instance.giveBirth(17);
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
