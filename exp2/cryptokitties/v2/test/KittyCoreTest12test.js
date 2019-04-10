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
await instance.createPromoKitty(286895648, coo, {from: coo,value: 0});
await instance.createPromoKitty(601678178, coo, {from: coo,value: 0});
await instance.createPromoKitty(415826213, coo, {from: coo,value: 0});
await instance.createPromoKitty(341202408, coo, {from: coo,value: 0});
await instance.createPromoKitty(348937607, coo, {from: coo,value: 0});
await instance.createPromoKitty(457656318, coo, {from: coo,value: 0});
await instance.createPromoKitty(517417452, coo, {from: coo,value: 0});
await instance.createPromoKitty(693307852, coo, {from: coo,value: 0});
await instance.createPromoKitty(7310055, coo, {from: coo,value: 0});
await instance.createPromoKitty(330005643, coo, {from: coo,value: 0});
await instance.createPromoKitty(6153587, coo, {from: coo,value: 0});
await instance.createPromoKitty(129370587, coo, {from: coo,value: 0});
await instance.createPromoKitty(300567499, coo, {from: coo,value: 0});
await instance.createPromoKitty(259030985, coo, {from: coo,value: 0});
await instance.createPromoKitty(621908797, coo, {from: coo,value: 0});
await instance.createPromoKitty(596868412, coo, {from: coo,value: 0});
await instance.createPromoKitty(118287689, coo, {from: coo,value: 0});
await instance.createPromoKitty(323257499, coo, {from: coo,value: 0});
await instance.createPromoKitty(987595089, coo, {from: coo,value: 0});
await instance.createPromoKitty(921263535, coo, {from: coo,value: 0});
await instance.createPromoKitty(378504748, coo, {from: coo,value: 0});
await instance.createPromoKitty(554547947, coo, {from: coo,value: 0});
await instance.createPromoKitty(966161269, coo, {from: coo,value: 0});
await instance.createPromoKitty(818453833, coo, {from: coo,value: 0});
await instance.createPromoKitty(283834594, coo, {from: coo,value: 0});
await instance.createPromoKitty(93594760, coo, {from: coo,value: 0});
await instance.createPromoKitty(711513976, coo, {from: coo,value: 0});
await instance.createPromoKitty(311123553, coo, {from: coo,value: 0});
await instance.createPromoKitty(466789942, coo, {from: coo,value: 0});
await instance.createPromoKitty(679098684, coo, {from: coo,value: 0});
await instance.createPromoKitty(998760558, coo, {from: coo,value: 0});
await instance.createPromoKitty(997169862, coo, {from: coo,value: 0});
await instance.createPromoKitty(317456355, coo, {from: coo,value: 0});
await instance.createPromoKitty(739839909, coo, {from: coo,value: 0});
await instance.createPromoKitty(610320999, coo, {from: coo,value: 0});
await instance.createPromoKitty(631768738, coo, {from: coo,value: 0});
await instance.createPromoKitty(387860053, coo, {from: coo,value: 0});
await instance.createPromoKitty(348513940, coo, {from: coo,value: 0});
await instance.createPromoKitty(136346352, coo, {from: coo,value: 0});
await instance.createPromoKitty(399363151, coo, {from: coo,value: 0});
await instance.createPromoKitty(534288755, coo, {from: coo,value: 0});
await instance.createPromoKitty(816618278, coo, {from: coo,value: 0});
await instance.createPromoKitty(574620670, coo, {from: coo,value: 0});
await instance.createPromoKitty(971161863, coo, {from: coo,value: 0});
await instance.createPromoKitty(849574074, coo, {from: coo,value: 0});
await instance.createPromoKitty(72047599, coo, {from: coo,value: 0});
await instance.createPromoKitty(923302240, coo, {from: coo,value: 0});
await instance.createPromoKitty(410151676, coo, {from: coo,value: 0});
await instance.createPromoKitty(133757533, coo, {from: coo,value: 0});
await instance.createPromoKitty(77496807, coo, {from: coo,value: 0});
await instance.createPromoKitty(637280626, coo, {from: coo,value: 0});
await instance.createPromoKitty(966855127, coo, {from: coo,value: 0});
await instance.createPromoKitty(380839001, coo, {from: coo,value: 0});
await instance.createPromoKitty(806180650, coo, {from: coo,value: 0});
await instance.createPromoKitty(245125500, coo, {from: coo,value: 0});
await instance.createPromoKitty(372955968, coo, {from: coo,value: 0});
await instance.createPromoKitty(766402834, coo, {from: coo,value: 0});
await instance.createPromoKitty(801160293, coo, {from: coo,value: 0});
await instance.createPromoKitty(114197974, coo, {from: coo,value: 0});
await instance.createPromoKitty(786595808, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(11, 2, {from: coo});
await instance.breedWith(22, 31, {from: coo});
await instance.breedWith(5, 19, {from: coo});
await instance.breedWith(29, 23, {from: coo});
await instance.breedWith(7, 36, {from: coo});
await instance.breedWith(28, 39, {from: coo});
await instance.breedWith(16, 32, {from: coo});
await instance.breedWith(3, 17, {from: coo});
await instance.breedWith(25, 12, {from: coo});
await instance.breedWith(20, 1, {from: coo});
await instance.breedWith(10, 4, {from: coo});
await instance.breedWith(24, 13, {from: coo});
await instance.breedWith(14, 8, {from: coo});
await instance.breedWith(6, 26, {from: coo});
await instance.breedWith(21, 38, {from: coo});
await instance.breedWith(35, 18, {from: coo});
await instance.breedWith(40, 9, {from: coo});
await instance.breedWith(15, 30, {from: coo});
await instance.breedWith(34, 37, {from: coo});
await instance.breedWith(27, 33, {from: coo});
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
await instance.giveBirth(11);
await instance.giveBirth(22);
await instance.giveBirth(5);
await instance.giveBirth(29);
await instance.giveBirth(7);
await instance.giveBirth(28);
await instance.giveBirth(16);
await instance.giveBirth(3);
await instance.giveBirth(25);
await instance.giveBirth(20);
await instance.giveBirth(10);
await instance.giveBirth(24);
await instance.giveBirth(14);
await instance.giveBirth(6);
await instance.giveBirth(21);
await instance.giveBirth(35);
await instance.giveBirth(40);
await instance.giveBirth(15);
await instance.giveBirth(34);
await instance.giveBirth(27);
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
