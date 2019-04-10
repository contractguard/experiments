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
await instance.createPromoKitty(996729850, coo, {from: coo,value: 0});
await instance.createPromoKitty(379479936, coo, {from: coo,value: 0});
await instance.createPromoKitty(439761021, coo, {from: coo,value: 0});
await instance.createPromoKitty(86158054, coo, {from: coo,value: 0});
await instance.createPromoKitty(424190395, coo, {from: coo,value: 0});
await instance.createPromoKitty(242694600, coo, {from: coo,value: 0});
await instance.createPromoKitty(634423952, coo, {from: coo,value: 0});
await instance.createPromoKitty(683483021, coo, {from: coo,value: 0});
await instance.createPromoKitty(14617757, coo, {from: coo,value: 0});
await instance.createPromoKitty(985469168, coo, {from: coo,value: 0});
await instance.createPromoKitty(506974383, coo, {from: coo,value: 0});
await instance.createPromoKitty(939986332, coo, {from: coo,value: 0});
await instance.createPromoKitty(11705296, coo, {from: coo,value: 0});
await instance.createPromoKitty(247480340, coo, {from: coo,value: 0});
await instance.createPromoKitty(96167572, coo, {from: coo,value: 0});
await instance.createPromoKitty(438014651, coo, {from: coo,value: 0});
await instance.createPromoKitty(897418938, coo, {from: coo,value: 0});
await instance.createPromoKitty(358213084, coo, {from: coo,value: 0});
await instance.createPromoKitty(201254769, coo, {from: coo,value: 0});
await instance.createPromoKitty(643592766, coo, {from: coo,value: 0});
await instance.createPromoKitty(344468582, coo, {from: coo,value: 0});
await instance.createPromoKitty(378869681, coo, {from: coo,value: 0});
await instance.createPromoKitty(431152857, coo, {from: coo,value: 0});
await instance.createPromoKitty(887630094, coo, {from: coo,value: 0});
await instance.createPromoKitty(468336097, coo, {from: coo,value: 0});
await instance.createPromoKitty(941664114, coo, {from: coo,value: 0});
await instance.createPromoKitty(148161077, coo, {from: coo,value: 0});
await instance.createPromoKitty(204708286, coo, {from: coo,value: 0});
await instance.createPromoKitty(968622864, coo, {from: coo,value: 0});
await instance.createPromoKitty(779015011, coo, {from: coo,value: 0});
await instance.createPromoKitty(258162175, coo, {from: coo,value: 0});
await instance.createPromoKitty(693911545, coo, {from: coo,value: 0});
await instance.createPromoKitty(553099026, coo, {from: coo,value: 0});
await instance.createPromoKitty(489101653, coo, {from: coo,value: 0});
await instance.createPromoKitty(218817639, coo, {from: coo,value: 0});
await instance.createPromoKitty(158829084, coo, {from: coo,value: 0});
await instance.createPromoKitty(592499380, coo, {from: coo,value: 0});
await instance.createPromoKitty(953625056, coo, {from: coo,value: 0});
await instance.createPromoKitty(826605, coo, {from: coo,value: 0});
await instance.createPromoKitty(661929840, coo, {from: coo,value: 0});
await instance.createPromoKitty(593010132, coo, {from: coo,value: 0});
await instance.createPromoKitty(29965861, coo, {from: coo,value: 0});
await instance.createPromoKitty(287084820, coo, {from: coo,value: 0});
await instance.createPromoKitty(608305135, coo, {from: coo,value: 0});
await instance.createPromoKitty(820593059, coo, {from: coo,value: 0});
await instance.createPromoKitty(185292967, coo, {from: coo,value: 0});
await instance.createPromoKitty(56648738, coo, {from: coo,value: 0});
await instance.createPromoKitty(306989105, coo, {from: coo,value: 0});
await instance.createPromoKitty(450211798, coo, {from: coo,value: 0});
await instance.createPromoKitty(10213895, coo, {from: coo,value: 0});
await instance.createPromoKitty(504115140, coo, {from: coo,value: 0});
await instance.createPromoKitty(577908814, coo, {from: coo,value: 0});
await instance.createPromoKitty(925596796, coo, {from: coo,value: 0});
await instance.createPromoKitty(924514011, coo, {from: coo,value: 0});
await instance.createPromoKitty(783396992, coo, {from: coo,value: 0});
await instance.createPromoKitty(289310425, coo, {from: coo,value: 0});
await instance.createPromoKitty(874708759, coo, {from: coo,value: 0});
await instance.createPromoKitty(912601098, coo, {from: coo,value: 0});
await instance.createPromoKitty(826237553, coo, {from: coo,value: 0});
await instance.createPromoKitty(46191825, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(30, 18, {from: coo});
await instance.breedWith(12, 8, {from: coo});
await instance.breedWith(9, 22, {from: coo});
await instance.breedWith(13, 19, {from: coo});
await instance.breedWith(15, 23, {from: coo});
await instance.breedWith(38, 28, {from: coo});
await instance.breedWith(40, 17, {from: coo});
await instance.breedWith(37, 14, {from: coo});
await instance.breedWith(10, 2, {from: coo});
await instance.breedWith(20, 3, {from: coo});
await instance.breedWith(29, 7, {from: coo});
await instance.breedWith(35, 1, {from: coo});
await instance.breedWith(27, 33, {from: coo});
await instance.breedWith(39, 31, {from: coo});
await instance.breedWith(26, 4, {from: coo});
await instance.breedWith(32, 25, {from: coo});
await instance.breedWith(24, 36, {from: coo});
await instance.breedWith(6, 34, {from: coo});
await instance.breedWith(16, 11, {from: coo});
await instance.breedWith(5, 21, {from: coo});
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
await instance.giveBirth(30);
await instance.giveBirth(12);
await instance.giveBirth(9);
await instance.giveBirth(13);
await instance.giveBirth(15);
await instance.giveBirth(38);
await instance.giveBirth(40);
await instance.giveBirth(37);
await instance.giveBirth(10);
await instance.giveBirth(20);
await instance.giveBirth(29);
await instance.giveBirth(35);
await instance.giveBirth(27);
await instance.giveBirth(39);
await instance.giveBirth(26);
await instance.giveBirth(32);
await instance.giveBirth(24);
await instance.giveBirth(6);
await instance.giveBirth(16);
await instance.giveBirth(5);
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
