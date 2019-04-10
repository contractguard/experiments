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
await instance.createPromoKitty(823881251, coo, {from: coo,value: 0});
await instance.createPromoKitty(441282812, coo, {from: coo,value: 0});
await instance.createPromoKitty(512196198, coo, {from: coo,value: 0});
await instance.createPromoKitty(440566249, coo, {from: coo,value: 0});
await instance.createPromoKitty(67175030, coo, {from: coo,value: 0});
await instance.createPromoKitty(136124082, coo, {from: coo,value: 0});
await instance.createPromoKitty(449669280, coo, {from: coo,value: 0});
await instance.createPromoKitty(185985563, coo, {from: coo,value: 0});
await instance.createPromoKitty(411099440, coo, {from: coo,value: 0});
await instance.createPromoKitty(531617869, coo, {from: coo,value: 0});
await instance.createPromoKitty(523281831, coo, {from: coo,value: 0});
await instance.createPromoKitty(176075864, coo, {from: coo,value: 0});
await instance.createPromoKitty(779699673, coo, {from: coo,value: 0});
await instance.createPromoKitty(686821411, coo, {from: coo,value: 0});
await instance.createPromoKitty(781248017, coo, {from: coo,value: 0});
await instance.createPromoKitty(484282596, coo, {from: coo,value: 0});
await instance.createPromoKitty(989398608, coo, {from: coo,value: 0});
await instance.createPromoKitty(145838718, coo, {from: coo,value: 0});
await instance.createPromoKitty(164433606, coo, {from: coo,value: 0});
await instance.createPromoKitty(731853727, coo, {from: coo,value: 0});
await instance.createPromoKitty(849159388, coo, {from: coo,value: 0});
await instance.createPromoKitty(898866004, coo, {from: coo,value: 0});
await instance.createPromoKitty(407541231, coo, {from: coo,value: 0});
await instance.createPromoKitty(184235275, coo, {from: coo,value: 0});
await instance.createPromoKitty(734562857, coo, {from: coo,value: 0});
await instance.createPromoKitty(334284017, coo, {from: coo,value: 0});
await instance.createPromoKitty(55101139, coo, {from: coo,value: 0});
await instance.createPromoKitty(32769708, coo, {from: coo,value: 0});
await instance.createPromoKitty(382513633, coo, {from: coo,value: 0});
await instance.createPromoKitty(308623592, coo, {from: coo,value: 0});
await instance.createPromoKitty(46062953, coo, {from: coo,value: 0});
await instance.createPromoKitty(970779976, coo, {from: coo,value: 0});
await instance.createPromoKitty(417432996, coo, {from: coo,value: 0});
await instance.createPromoKitty(339203048, coo, {from: coo,value: 0});
await instance.createPromoKitty(592470848, coo, {from: coo,value: 0});
await instance.createPromoKitty(378489762, coo, {from: coo,value: 0});
await instance.createPromoKitty(170731346, coo, {from: coo,value: 0});
await instance.createPromoKitty(100990252, coo, {from: coo,value: 0});
await instance.createPromoKitty(165842438, coo, {from: coo,value: 0});
await instance.createPromoKitty(220656167, coo, {from: coo,value: 0});
await instance.createPromoKitty(774451884, coo, {from: coo,value: 0});
await instance.createPromoKitty(343664088, coo, {from: coo,value: 0});
await instance.createPromoKitty(284210994, coo, {from: coo,value: 0});
await instance.createPromoKitty(5568046, coo, {from: coo,value: 0});
await instance.createPromoKitty(872177792, coo, {from: coo,value: 0});
await instance.createPromoKitty(235163699, coo, {from: coo,value: 0});
await instance.createPromoKitty(337311215, coo, {from: coo,value: 0});
await instance.createPromoKitty(564849376, coo, {from: coo,value: 0});
await instance.createPromoKitty(100269295, coo, {from: coo,value: 0});
await instance.createPromoKitty(55534324, coo, {from: coo,value: 0});
await instance.createPromoKitty(682688022, coo, {from: coo,value: 0});
await instance.createPromoKitty(1666779, coo, {from: coo,value: 0});
await instance.createPromoKitty(936717247, coo, {from: coo,value: 0});
await instance.createPromoKitty(697278574, coo, {from: coo,value: 0});
await instance.createPromoKitty(513808622, coo, {from: coo,value: 0});
await instance.createPromoKitty(496696307, coo, {from: coo,value: 0});
await instance.createPromoKitty(133255553, coo, {from: coo,value: 0});
await instance.createPromoKitty(709110340, coo, {from: coo,value: 0});
await instance.createPromoKitty(765540525, coo, {from: coo,value: 0});
await instance.createPromoKitty(405953717, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(8, 36, {from: coo});
await instance.breedWith(14, 21, {from: coo});
await instance.breedWith(31, 15, {from: coo});
await instance.breedWith(13, 1, {from: coo});
await instance.breedWith(22, 33, {from: coo});
await instance.breedWith(17, 11, {from: coo});
await instance.breedWith(5, 18, {from: coo});
await instance.breedWith(40, 6, {from: coo});
await instance.breedWith(32, 26, {from: coo});
await instance.breedWith(28, 24, {from: coo});
await instance.breedWith(29, 9, {from: coo});
await instance.breedWith(30, 2, {from: coo});
await instance.breedWith(27, 16, {from: coo});
await instance.breedWith(10, 20, {from: coo});
await instance.breedWith(12, 35, {from: coo});
await instance.breedWith(34, 4, {from: coo});
await instance.breedWith(3, 39, {from: coo});
await instance.breedWith(7, 19, {from: coo});
await instance.breedWith(37, 25, {from: coo});
await instance.breedWith(23, 38, {from: coo});
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
await instance.giveBirth(8);
await instance.giveBirth(14);
await instance.giveBirth(31);
await instance.giveBirth(13);
await instance.giveBirth(22);
await instance.giveBirth(17);
await instance.giveBirth(5);
await instance.giveBirth(40);
await instance.giveBirth(32);
await instance.giveBirth(28);
await instance.giveBirth(29);
await instance.giveBirth(30);
await instance.giveBirth(27);
await instance.giveBirth(10);
await instance.giveBirth(12);
await instance.giveBirth(34);
await instance.giveBirth(3);
await instance.giveBirth(7);
await instance.giveBirth(37);
await instance.giveBirth(23);
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
