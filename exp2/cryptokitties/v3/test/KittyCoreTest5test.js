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
await instance.createPromoKitty(540799867, coo, {from: coo,value: 0});
await instance.createPromoKitty(5914193, coo, {from: coo,value: 0});
await instance.createPromoKitty(334852860, coo, {from: coo,value: 0});
await instance.createPromoKitty(849094442, coo, {from: coo,value: 0});
await instance.createPromoKitty(274539662, coo, {from: coo,value: 0});
await instance.createPromoKitty(357473149, coo, {from: coo,value: 0});
await instance.createPromoKitty(168414407, coo, {from: coo,value: 0});
await instance.createPromoKitty(130768632, coo, {from: coo,value: 0});
await instance.createPromoKitty(21911574, coo, {from: coo,value: 0});
await instance.createPromoKitty(185973566, coo, {from: coo,value: 0});
await instance.createPromoKitty(256293354, coo, {from: coo,value: 0});
await instance.createPromoKitty(10009208, coo, {from: coo,value: 0});
await instance.createPromoKitty(491948031, coo, {from: coo,value: 0});
await instance.createPromoKitty(573341067, coo, {from: coo,value: 0});
await instance.createPromoKitty(844261733, coo, {from: coo,value: 0});
await instance.createPromoKitty(501787171, coo, {from: coo,value: 0});
await instance.createPromoKitty(559198608, coo, {from: coo,value: 0});
await instance.createPromoKitty(908868334, coo, {from: coo,value: 0});
await instance.createPromoKitty(400115056, coo, {from: coo,value: 0});
await instance.createPromoKitty(823135231, coo, {from: coo,value: 0});
await instance.createPromoKitty(89886429, coo, {from: coo,value: 0});
await instance.createPromoKitty(751299637, coo, {from: coo,value: 0});
await instance.createPromoKitty(8962867, coo, {from: coo,value: 0});
await instance.createPromoKitty(698347995, coo, {from: coo,value: 0});
await instance.createPromoKitty(312925728, coo, {from: coo,value: 0});
await instance.createPromoKitty(847222311, coo, {from: coo,value: 0});
await instance.createPromoKitty(829713971, coo, {from: coo,value: 0});
await instance.createPromoKitty(340732687, coo, {from: coo,value: 0});
await instance.createPromoKitty(283404424, coo, {from: coo,value: 0});
await instance.createPromoKitty(884585625, coo, {from: coo,value: 0});
await instance.createPromoKitty(248814736, coo, {from: coo,value: 0});
await instance.createPromoKitty(345704803, coo, {from: coo,value: 0});
await instance.createPromoKitty(600077102, coo, {from: coo,value: 0});
await instance.createPromoKitty(604853280, coo, {from: coo,value: 0});
await instance.createPromoKitty(305048492, coo, {from: coo,value: 0});
await instance.createPromoKitty(151556411, coo, {from: coo,value: 0});
await instance.createPromoKitty(240176616, coo, {from: coo,value: 0});
await instance.createPromoKitty(567181680, coo, {from: coo,value: 0});
await instance.createPromoKitty(20506971, coo, {from: coo,value: 0});
await instance.createPromoKitty(340169004, coo, {from: coo,value: 0});
await instance.createPromoKitty(328649762, coo, {from: coo,value: 0});
await instance.createPromoKitty(1887221, coo, {from: coo,value: 0});
await instance.createPromoKitty(251117541, coo, {from: coo,value: 0});
await instance.createPromoKitty(474001211, coo, {from: coo,value: 0});
await instance.createPromoKitty(221169323, coo, {from: coo,value: 0});
await instance.createPromoKitty(141338873, coo, {from: coo,value: 0});
await instance.createPromoKitty(384552357, coo, {from: coo,value: 0});
await instance.createPromoKitty(98530277, coo, {from: coo,value: 0});
await instance.createPromoKitty(462449166, coo, {from: coo,value: 0});
await instance.createPromoKitty(329412419, coo, {from: coo,value: 0});
await instance.createPromoKitty(344062200, coo, {from: coo,value: 0});
await instance.createPromoKitty(647592271, coo, {from: coo,value: 0});
await instance.createPromoKitty(463480486, coo, {from: coo,value: 0});
await instance.createPromoKitty(762320550, coo, {from: coo,value: 0});
await instance.createPromoKitty(875914006, coo, {from: coo,value: 0});
await instance.createPromoKitty(188581744, coo, {from: coo,value: 0});
await instance.createPromoKitty(203976943, coo, {from: coo,value: 0});
await instance.createPromoKitty(51957639, coo, {from: coo,value: 0});
await instance.createPromoKitty(736471696, coo, {from: coo,value: 0});
await instance.createPromoKitty(442427302, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(11, 31, {from: coo});
await instance.breedWith(26, 27, {from: coo});
await instance.breedWith(9, 1, {from: coo});
await instance.breedWith(6, 7, {from: coo});
await instance.breedWith(4, 30, {from: coo});
await instance.breedWith(15, 25, {from: coo});
await instance.breedWith(40, 29, {from: coo});
await instance.breedWith(16, 34, {from: coo});
await instance.breedWith(3, 21, {from: coo});
await instance.breedWith(19, 35, {from: coo});
await instance.breedWith(14, 20, {from: coo});
await instance.breedWith(28, 12, {from: coo});
await instance.breedWith(2, 23, {from: coo});
await instance.breedWith(18, 22, {from: coo});
await instance.breedWith(10, 8, {from: coo});
await instance.breedWith(39, 5, {from: coo});
await instance.breedWith(13, 37, {from: coo});
await instance.breedWith(32, 17, {from: coo});
await instance.breedWith(33, 36, {from: coo});
await instance.breedWith(38, 24, {from: coo});
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
await instance.giveBirth(11);
await instance.giveBirth(26);
await instance.giveBirth(9);
await instance.giveBirth(6);
await instance.giveBirth(4);
await instance.giveBirth(15);
await instance.giveBirth(40);
await instance.giveBirth(16);
await instance.giveBirth(3);
await instance.giveBirth(19);
await instance.giveBirth(14);
await instance.giveBirth(28);
await instance.giveBirth(2);
await instance.giveBirth(18);
await instance.giveBirth(10);
await instance.giveBirth(39);
await instance.giveBirth(13);
await instance.giveBirth(32);
await instance.giveBirth(33);
await instance.giveBirth(38);
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
