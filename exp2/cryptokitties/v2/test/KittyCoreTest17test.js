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
await instance.createPromoKitty(893143446, coo, {from: coo,value: 0});
await instance.createPromoKitty(902752869, coo, {from: coo,value: 0});
await instance.createPromoKitty(597692412, coo, {from: coo,value: 0});
await instance.createPromoKitty(230762722, coo, {from: coo,value: 0});
await instance.createPromoKitty(779588735, coo, {from: coo,value: 0});
await instance.createPromoKitty(299969223, coo, {from: coo,value: 0});
await instance.createPromoKitty(4511718, coo, {from: coo,value: 0});
await instance.createPromoKitty(415508504, coo, {from: coo,value: 0});
await instance.createPromoKitty(297247566, coo, {from: coo,value: 0});
await instance.createPromoKitty(949924358, coo, {from: coo,value: 0});
await instance.createPromoKitty(208078242, coo, {from: coo,value: 0});
await instance.createPromoKitty(773947922, coo, {from: coo,value: 0});
await instance.createPromoKitty(309092957, coo, {from: coo,value: 0});
await instance.createPromoKitty(344986557, coo, {from: coo,value: 0});
await instance.createPromoKitty(814052844, coo, {from: coo,value: 0});
await instance.createPromoKitty(906963168, coo, {from: coo,value: 0});
await instance.createPromoKitty(372859432, coo, {from: coo,value: 0});
await instance.createPromoKitty(277774798, coo, {from: coo,value: 0});
await instance.createPromoKitty(932388700, coo, {from: coo,value: 0});
await instance.createPromoKitty(67518781, coo, {from: coo,value: 0});
await instance.createPromoKitty(900256168, coo, {from: coo,value: 0});
await instance.createPromoKitty(809461989, coo, {from: coo,value: 0});
await instance.createPromoKitty(881681874, coo, {from: coo,value: 0});
await instance.createPromoKitty(526428, coo, {from: coo,value: 0});
await instance.createPromoKitty(499460042, coo, {from: coo,value: 0});
await instance.createPromoKitty(952179543, coo, {from: coo,value: 0});
await instance.createPromoKitty(163978302, coo, {from: coo,value: 0});
await instance.createPromoKitty(371260545, coo, {from: coo,value: 0});
await instance.createPromoKitty(442958601, coo, {from: coo,value: 0});
await instance.createPromoKitty(490507499, coo, {from: coo,value: 0});
await instance.createPromoKitty(861029942, coo, {from: coo,value: 0});
await instance.createPromoKitty(14204322, coo, {from: coo,value: 0});
await instance.createPromoKitty(747899933, coo, {from: coo,value: 0});
await instance.createPromoKitty(612575107, coo, {from: coo,value: 0});
await instance.createPromoKitty(670624922, coo, {from: coo,value: 0});
await instance.createPromoKitty(773225396, coo, {from: coo,value: 0});
await instance.createPromoKitty(794124768, coo, {from: coo,value: 0});
await instance.createPromoKitty(730966373, coo, {from: coo,value: 0});
await instance.createPromoKitty(424484033, coo, {from: coo,value: 0});
await instance.createPromoKitty(177200319, coo, {from: coo,value: 0});
await instance.createPromoKitty(273388306, coo, {from: coo,value: 0});
await instance.createPromoKitty(623356881, coo, {from: coo,value: 0});
await instance.createPromoKitty(932638415, coo, {from: coo,value: 0});
await instance.createPromoKitty(870706682, coo, {from: coo,value: 0});
await instance.createPromoKitty(387830596, coo, {from: coo,value: 0});
await instance.createPromoKitty(213396630, coo, {from: coo,value: 0});
await instance.createPromoKitty(603523314, coo, {from: coo,value: 0});
await instance.createPromoKitty(348971395, coo, {from: coo,value: 0});
await instance.createPromoKitty(350585834, coo, {from: coo,value: 0});
await instance.createPromoKitty(535585891, coo, {from: coo,value: 0});
await instance.createPromoKitty(309145832, coo, {from: coo,value: 0});
await instance.createPromoKitty(58902459, coo, {from: coo,value: 0});
await instance.createPromoKitty(464947290, coo, {from: coo,value: 0});
await instance.createPromoKitty(959655098, coo, {from: coo,value: 0});
await instance.createPromoKitty(582486716, coo, {from: coo,value: 0});
await instance.createPromoKitty(852129484, coo, {from: coo,value: 0});
await instance.createPromoKitty(121915664, coo, {from: coo,value: 0});
await instance.createPromoKitty(397103158, coo, {from: coo,value: 0});
await instance.createPromoKitty(551607368, coo, {from: coo,value: 0});
await instance.createPromoKitty(761963700, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(12, 10, {from: coo});
await instance.breedWith(7, 5, {from: coo});
await instance.breedWith(27, 31, {from: coo});
await instance.breedWith(32, 33, {from: coo});
await instance.breedWith(2, 11, {from: coo});
await instance.breedWith(13, 39, {from: coo});
await instance.breedWith(36, 22, {from: coo});
await instance.breedWith(8, 16, {from: coo});
await instance.breedWith(29, 37, {from: coo});
await instance.breedWith(25, 24, {from: coo});
await instance.breedWith(28, 18, {from: coo});
await instance.breedWith(17, 26, {from: coo});
await instance.breedWith(34, 6, {from: coo});
await instance.breedWith(3, 1, {from: coo});
await instance.breedWith(4, 21, {from: coo});
await instance.breedWith(14, 19, {from: coo});
await instance.breedWith(35, 15, {from: coo});
await instance.breedWith(38, 30, {from: coo});
await instance.breedWith(20, 9, {from: coo});
await instance.breedWith(23, 40, {from: coo});
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
await instance.giveBirth(12);
await instance.giveBirth(7);
await instance.giveBirth(27);
await instance.giveBirth(32);
await instance.giveBirth(2);
await instance.giveBirth(13);
await instance.giveBirth(36);
await instance.giveBirth(8);
await instance.giveBirth(29);
await instance.giveBirth(25);
await instance.giveBirth(28);
await instance.giveBirth(17);
await instance.giveBirth(34);
await instance.giveBirth(3);
await instance.giveBirth(4);
await instance.giveBirth(14);
await instance.giveBirth(35);
await instance.giveBirth(38);
await instance.giveBirth(20);
await instance.giveBirth(23);
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
