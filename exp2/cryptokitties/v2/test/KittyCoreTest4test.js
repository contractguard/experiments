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
await instance.createPromoKitty(747128207, coo, {from: coo,value: 0});
await instance.createPromoKitty(499265475, coo, {from: coo,value: 0});
await instance.createPromoKitty(663593901, coo, {from: coo,value: 0});
await instance.createPromoKitty(353447531, coo, {from: coo,value: 0});
await instance.createPromoKitty(876333127, coo, {from: coo,value: 0});
await instance.createPromoKitty(234350772, coo, {from: coo,value: 0});
await instance.createPromoKitty(652820604, coo, {from: coo,value: 0});
await instance.createPromoKitty(869376800, coo, {from: coo,value: 0});
await instance.createPromoKitty(295968960, coo, {from: coo,value: 0});
await instance.createPromoKitty(83822400, coo, {from: coo,value: 0});
await instance.createPromoKitty(603318476, coo, {from: coo,value: 0});
await instance.createPromoKitty(283357029, coo, {from: coo,value: 0});
await instance.createPromoKitty(944150856, coo, {from: coo,value: 0});
await instance.createPromoKitty(820858289, coo, {from: coo,value: 0});
await instance.createPromoKitty(426248332, coo, {from: coo,value: 0});
await instance.createPromoKitty(481801922, coo, {from: coo,value: 0});
await instance.createPromoKitty(300137369, coo, {from: coo,value: 0});
await instance.createPromoKitty(182188144, coo, {from: coo,value: 0});
await instance.createPromoKitty(148687695, coo, {from: coo,value: 0});
await instance.createPromoKitty(527272528, coo, {from: coo,value: 0});
await instance.createPromoKitty(846637186, coo, {from: coo,value: 0});
await instance.createPromoKitty(472356347, coo, {from: coo,value: 0});
await instance.createPromoKitty(291094213, coo, {from: coo,value: 0});
await instance.createPromoKitty(892843956, coo, {from: coo,value: 0});
await instance.createPromoKitty(541599471, coo, {from: coo,value: 0});
await instance.createPromoKitty(726613525, coo, {from: coo,value: 0});
await instance.createPromoKitty(282778644, coo, {from: coo,value: 0});
await instance.createPromoKitty(3569489, coo, {from: coo,value: 0});
await instance.createPromoKitty(421736489, coo, {from: coo,value: 0});
await instance.createPromoKitty(713050932, coo, {from: coo,value: 0});
await instance.createPromoKitty(547785342, coo, {from: coo,value: 0});
await instance.createPromoKitty(742173153, coo, {from: coo,value: 0});
await instance.createPromoKitty(892250310, coo, {from: coo,value: 0});
await instance.createPromoKitty(865521474, coo, {from: coo,value: 0});
await instance.createPromoKitty(851788682, coo, {from: coo,value: 0});
await instance.createPromoKitty(15541746, coo, {from: coo,value: 0});
await instance.createPromoKitty(335923860, coo, {from: coo,value: 0});
await instance.createPromoKitty(914929437, coo, {from: coo,value: 0});
await instance.createPromoKitty(813302804, coo, {from: coo,value: 0});
await instance.createPromoKitty(21660898, coo, {from: coo,value: 0});
await instance.createPromoKitty(739056916, coo, {from: coo,value: 0});
await instance.createPromoKitty(984142973, coo, {from: coo,value: 0});
await instance.createPromoKitty(591337312, coo, {from: coo,value: 0});
await instance.createPromoKitty(990909851, coo, {from: coo,value: 0});
await instance.createPromoKitty(163329465, coo, {from: coo,value: 0});
await instance.createPromoKitty(704654594, coo, {from: coo,value: 0});
await instance.createPromoKitty(371556672, coo, {from: coo,value: 0});
await instance.createPromoKitty(871518297, coo, {from: coo,value: 0});
await instance.createPromoKitty(2132279, coo, {from: coo,value: 0});
await instance.createPromoKitty(591229137, coo, {from: coo,value: 0});
await instance.createPromoKitty(900695708, coo, {from: coo,value: 0});
await instance.createPromoKitty(590747604, coo, {from: coo,value: 0});
await instance.createPromoKitty(834384572, coo, {from: coo,value: 0});
await instance.createPromoKitty(512394111, coo, {from: coo,value: 0});
await instance.createPromoKitty(716327232, coo, {from: coo,value: 0});
await instance.createPromoKitty(777413651, coo, {from: coo,value: 0});
await instance.createPromoKitty(339160676, coo, {from: coo,value: 0});
await instance.createPromoKitty(128643577, coo, {from: coo,value: 0});
await instance.createPromoKitty(679110664, coo, {from: coo,value: 0});
await instance.createPromoKitty(138494022, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(9, 25, {from: coo});
await instance.breedWith(13, 27, {from: coo});
await instance.breedWith(8, 32, {from: coo});
await instance.breedWith(12, 34, {from: coo});
await instance.breedWith(11, 35, {from: coo});
await instance.breedWith(40, 33, {from: coo});
await instance.breedWith(16, 5, {from: coo});
await instance.breedWith(29, 15, {from: coo});
await instance.breedWith(17, 26, {from: coo});
await instance.breedWith(20, 6, {from: coo});
await instance.breedWith(39, 7, {from: coo});
await instance.breedWith(31, 18, {from: coo});
await instance.breedWith(24, 3, {from: coo});
await instance.breedWith(21, 10, {from: coo});
await instance.breedWith(19, 4, {from: coo});
await instance.breedWith(2, 28, {from: coo});
await instance.breedWith(37, 23, {from: coo});
await instance.breedWith(36, 14, {from: coo});
await instance.breedWith(1, 38, {from: coo});
await instance.breedWith(22, 30, {from: coo});
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
await instance.giveBirth(9);
await instance.giveBirth(13);
await instance.giveBirth(8);
await instance.giveBirth(12);
await instance.giveBirth(11);
await instance.giveBirth(40);
await instance.giveBirth(16);
await instance.giveBirth(29);
await instance.giveBirth(17);
await instance.giveBirth(20);
await instance.giveBirth(39);
await instance.giveBirth(31);
await instance.giveBirth(24);
await instance.giveBirth(21);
await instance.giveBirth(19);
await instance.giveBirth(2);
await instance.giveBirth(37);
await instance.giveBirth(36);
await instance.giveBirth(1);
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
