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
await instance.createPromoKitty(487510583, coo, {from: coo,value: 0});
await instance.createPromoKitty(301858510, coo, {from: coo,value: 0});
await instance.createPromoKitty(306578237, coo, {from: coo,value: 0});
await instance.createPromoKitty(946975846, coo, {from: coo,value: 0});
await instance.createPromoKitty(690001576, coo, {from: coo,value: 0});
await instance.createPromoKitty(338697583, coo, {from: coo,value: 0});
await instance.createPromoKitty(326418417, coo, {from: coo,value: 0});
await instance.createPromoKitty(33522247, coo, {from: coo,value: 0});
await instance.createPromoKitty(931107336, coo, {from: coo,value: 0});
await instance.createPromoKitty(990912286, coo, {from: coo,value: 0});
await instance.createPromoKitty(622189699, coo, {from: coo,value: 0});
await instance.createPromoKitty(46915248, coo, {from: coo,value: 0});
await instance.createPromoKitty(786707582, coo, {from: coo,value: 0});
await instance.createPromoKitty(560675288, coo, {from: coo,value: 0});
await instance.createPromoKitty(672976787, coo, {from: coo,value: 0});
await instance.createPromoKitty(138447675, coo, {from: coo,value: 0});
await instance.createPromoKitty(31638654, coo, {from: coo,value: 0});
await instance.createPromoKitty(214150765, coo, {from: coo,value: 0});
await instance.createPromoKitty(656469361, coo, {from: coo,value: 0});
await instance.createPromoKitty(620766909, coo, {from: coo,value: 0});
await instance.createPromoKitty(932462, coo, {from: coo,value: 0});
await instance.createPromoKitty(375350105, coo, {from: coo,value: 0});
await instance.createPromoKitty(125339119, coo, {from: coo,value: 0});
await instance.createPromoKitty(874966529, coo, {from: coo,value: 0});
await instance.createPromoKitty(244552194, coo, {from: coo,value: 0});
await instance.createPromoKitty(128628442, coo, {from: coo,value: 0});
await instance.createPromoKitty(206143027, coo, {from: coo,value: 0});
await instance.createPromoKitty(888399956, coo, {from: coo,value: 0});
await instance.createPromoKitty(964678057, coo, {from: coo,value: 0});
await instance.createPromoKitty(777652693, coo, {from: coo,value: 0});
await instance.createPromoKitty(798340368, coo, {from: coo,value: 0});
await instance.createPromoKitty(586641390, coo, {from: coo,value: 0});
await instance.createPromoKitty(166685285, coo, {from: coo,value: 0});
await instance.createPromoKitty(784285539, coo, {from: coo,value: 0});
await instance.createPromoKitty(210395206, coo, {from: coo,value: 0});
await instance.createPromoKitty(486803798, coo, {from: coo,value: 0});
await instance.createPromoKitty(324182830, coo, {from: coo,value: 0});
await instance.createPromoKitty(923378126, coo, {from: coo,value: 0});
await instance.createPromoKitty(637919431, coo, {from: coo,value: 0});
await instance.createPromoKitty(986491431, coo, {from: coo,value: 0});
await instance.createPromoKitty(521152159, coo, {from: coo,value: 0});
await instance.createPromoKitty(16500899, coo, {from: coo,value: 0});
await instance.createPromoKitty(403908031, coo, {from: coo,value: 0});
await instance.createPromoKitty(101028331, coo, {from: coo,value: 0});
await instance.createPromoKitty(363182724, coo, {from: coo,value: 0});
await instance.createPromoKitty(193109774, coo, {from: coo,value: 0});
await instance.createPromoKitty(951919759, coo, {from: coo,value: 0});
await instance.createPromoKitty(334349130, coo, {from: coo,value: 0});
await instance.createPromoKitty(174628042, coo, {from: coo,value: 0});
await instance.createPromoKitty(387679670, coo, {from: coo,value: 0});
await instance.createPromoKitty(834212496, coo, {from: coo,value: 0});
await instance.createPromoKitty(970936903, coo, {from: coo,value: 0});
await instance.createPromoKitty(357212523, coo, {from: coo,value: 0});
await instance.createPromoKitty(672225505, coo, {from: coo,value: 0});
await instance.createPromoKitty(26322781, coo, {from: coo,value: 0});
await instance.createPromoKitty(103955973, coo, {from: coo,value: 0});
await instance.createPromoKitty(795287250, coo, {from: coo,value: 0});
await instance.createPromoKitty(945782812, coo, {from: coo,value: 0});
await instance.createPromoKitty(303681036, coo, {from: coo,value: 0});
await instance.createPromoKitty(272952439, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(29, 6, {from: coo});
await instance.breedWith(14, 13, {from: coo});
await instance.breedWith(40, 3, {from: coo});
await instance.breedWith(36, 2, {from: coo});
await instance.breedWith(9, 28, {from: coo});
await instance.breedWith(12, 4, {from: coo});
await instance.breedWith(24, 35, {from: coo});
await instance.breedWith(33, 23, {from: coo});
await instance.breedWith(27, 32, {from: coo});
await instance.breedWith(34, 37, {from: coo});
await instance.breedWith(39, 17, {from: coo});
await instance.breedWith(30, 5, {from: coo});
await instance.breedWith(7, 15, {from: coo});
await instance.breedWith(10, 8, {from: coo});
await instance.breedWith(20, 19, {from: coo});
await instance.breedWith(25, 18, {from: coo});
await instance.breedWith(31, 21, {from: coo});
await instance.breedWith(16, 38, {from: coo});
await instance.breedWith(22, 11, {from: coo});
await instance.breedWith(26, 1, {from: coo});
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
await instance.giveBirth(29);
await instance.giveBirth(14);
await instance.giveBirth(40);
await instance.giveBirth(36);
await instance.giveBirth(9);
await instance.giveBirth(12);
await instance.giveBirth(24);
await instance.giveBirth(33);
await instance.giveBirth(27);
await instance.giveBirth(34);
await instance.giveBirth(39);
await instance.giveBirth(30);
await instance.giveBirth(7);
await instance.giveBirth(10);
await instance.giveBirth(20);
await instance.giveBirth(25);
await instance.giveBirth(31);
await instance.giveBirth(16);
await instance.giveBirth(22);
await instance.giveBirth(26);
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
