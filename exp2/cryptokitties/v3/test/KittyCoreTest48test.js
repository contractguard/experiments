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
await instance.createPromoKitty(157456048, coo, {from: coo,value: 0});
await instance.createPromoKitty(217274049, coo, {from: coo,value: 0});
await instance.createPromoKitty(497833283, coo, {from: coo,value: 0});
await instance.createPromoKitty(421741016, coo, {from: coo,value: 0});
await instance.createPromoKitty(697325403, coo, {from: coo,value: 0});
await instance.createPromoKitty(797092902, coo, {from: coo,value: 0});
await instance.createPromoKitty(192032843, coo, {from: coo,value: 0});
await instance.createPromoKitty(585130584, coo, {from: coo,value: 0});
await instance.createPromoKitty(440106035, coo, {from: coo,value: 0});
await instance.createPromoKitty(472139437, coo, {from: coo,value: 0});
await instance.createPromoKitty(831141975, coo, {from: coo,value: 0});
await instance.createPromoKitty(665121900, coo, {from: coo,value: 0});
await instance.createPromoKitty(473188263, coo, {from: coo,value: 0});
await instance.createPromoKitty(821876506, coo, {from: coo,value: 0});
await instance.createPromoKitty(636191132, coo, {from: coo,value: 0});
await instance.createPromoKitty(330257112, coo, {from: coo,value: 0});
await instance.createPromoKitty(626655825, coo, {from: coo,value: 0});
await instance.createPromoKitty(893317787, coo, {from: coo,value: 0});
await instance.createPromoKitty(4942379, coo, {from: coo,value: 0});
await instance.createPromoKitty(928377772, coo, {from: coo,value: 0});
await instance.createPromoKitty(500836729, coo, {from: coo,value: 0});
await instance.createPromoKitty(328394505, coo, {from: coo,value: 0});
await instance.createPromoKitty(199746591, coo, {from: coo,value: 0});
await instance.createPromoKitty(257215909, coo, {from: coo,value: 0});
await instance.createPromoKitty(3535082, coo, {from: coo,value: 0});
await instance.createPromoKitty(896558675, coo, {from: coo,value: 0});
await instance.createPromoKitty(44961783, coo, {from: coo,value: 0});
await instance.createPromoKitty(414115317, coo, {from: coo,value: 0});
await instance.createPromoKitty(235716435, coo, {from: coo,value: 0});
await instance.createPromoKitty(458793734, coo, {from: coo,value: 0});
await instance.createPromoKitty(158485866, coo, {from: coo,value: 0});
await instance.createPromoKitty(170409168, coo, {from: coo,value: 0});
await instance.createPromoKitty(848856515, coo, {from: coo,value: 0});
await instance.createPromoKitty(349143491, coo, {from: coo,value: 0});
await instance.createPromoKitty(405544770, coo, {from: coo,value: 0});
await instance.createPromoKitty(440011907, coo, {from: coo,value: 0});
await instance.createPromoKitty(438892924, coo, {from: coo,value: 0});
await instance.createPromoKitty(39739837, coo, {from: coo,value: 0});
await instance.createPromoKitty(184181776, coo, {from: coo,value: 0});
await instance.createPromoKitty(417526739, coo, {from: coo,value: 0});
await instance.createPromoKitty(331482589, coo, {from: coo,value: 0});
await instance.createPromoKitty(810978274, coo, {from: coo,value: 0});
await instance.createPromoKitty(777778147, coo, {from: coo,value: 0});
await instance.createPromoKitty(319118640, coo, {from: coo,value: 0});
await instance.createPromoKitty(781377387, coo, {from: coo,value: 0});
await instance.createPromoKitty(124669089, coo, {from: coo,value: 0});
await instance.createPromoKitty(641338776, coo, {from: coo,value: 0});
await instance.createPromoKitty(786561153, coo, {from: coo,value: 0});
await instance.createPromoKitty(52298762, coo, {from: coo,value: 0});
await instance.createPromoKitty(328684114, coo, {from: coo,value: 0});
await instance.createPromoKitty(125818882, coo, {from: coo,value: 0});
await instance.createPromoKitty(892227903, coo, {from: coo,value: 0});
await instance.createPromoKitty(946603403, coo, {from: coo,value: 0});
await instance.createPromoKitty(461519161, coo, {from: coo,value: 0});
await instance.createPromoKitty(707336109, coo, {from: coo,value: 0});
await instance.createPromoKitty(705136740, coo, {from: coo,value: 0});
await instance.createPromoKitty(938626569, coo, {from: coo,value: 0});
await instance.createPromoKitty(383766091, coo, {from: coo,value: 0});
await instance.createPromoKitty(277218603, coo, {from: coo,value: 0});
await instance.createPromoKitty(583947424, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(10, 34, {from: coo});
await instance.breedWith(26, 21, {from: coo});
await instance.breedWith(30, 29, {from: coo});
await instance.breedWith(13, 9, {from: coo});
await instance.breedWith(5, 39, {from: coo});
await instance.breedWith(3, 16, {from: coo});
await instance.breedWith(24, 15, {from: coo});
await instance.breedWith(22, 33, {from: coo});
await instance.breedWith(40, 19, {from: coo});
await instance.breedWith(28, 12, {from: coo});
await instance.breedWith(7, 37, {from: coo});
await instance.breedWith(35, 23, {from: coo});
await instance.breedWith(1, 6, {from: coo});
await instance.breedWith(31, 14, {from: coo});
await instance.breedWith(32, 17, {from: coo});
await instance.breedWith(25, 36, {from: coo});
await instance.breedWith(4, 11, {from: coo});
await instance.breedWith(18, 27, {from: coo});
await instance.breedWith(38, 20, {from: coo});
await instance.breedWith(8, 2, {from: coo});
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
await instance.giveBirth(10);
await instance.giveBirth(26);
await instance.giveBirth(30);
await instance.giveBirth(13);
await instance.giveBirth(5);
await instance.giveBirth(3);
await instance.giveBirth(24);
await instance.giveBirth(22);
await instance.giveBirth(40);
await instance.giveBirth(28);
await instance.giveBirth(7);
await instance.giveBirth(35);
await instance.giveBirth(1);
await instance.giveBirth(31);
await instance.giveBirth(32);
await instance.giveBirth(25);
await instance.giveBirth(4);
await instance.giveBirth(18);
await instance.giveBirth(38);
await instance.giveBirth(8);
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
