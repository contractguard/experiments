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
await instance.createPromoKitty(89016809, coo, {from: coo,value: 0});
await instance.createPromoKitty(526155796, coo, {from: coo,value: 0});
await instance.createPromoKitty(398239442, coo, {from: coo,value: 0});
await instance.createPromoKitty(340841335, coo, {from: coo,value: 0});
await instance.createPromoKitty(255510750, coo, {from: coo,value: 0});
await instance.createPromoKitty(582221219, coo, {from: coo,value: 0});
await instance.createPromoKitty(497785731, coo, {from: coo,value: 0});
await instance.createPromoKitty(563442958, coo, {from: coo,value: 0});
await instance.createPromoKitty(644989496, coo, {from: coo,value: 0});
await instance.createPromoKitty(193178339, coo, {from: coo,value: 0});
await instance.createPromoKitty(941989846, coo, {from: coo,value: 0});
await instance.createPromoKitty(473015178, coo, {from: coo,value: 0});
await instance.createPromoKitty(118893831, coo, {from: coo,value: 0});
await instance.createPromoKitty(276741969, coo, {from: coo,value: 0});
await instance.createPromoKitty(316223487, coo, {from: coo,value: 0});
await instance.createPromoKitty(994772406, coo, {from: coo,value: 0});
await instance.createPromoKitty(820532509, coo, {from: coo,value: 0});
await instance.createPromoKitty(120026816, coo, {from: coo,value: 0});
await instance.createPromoKitty(812770765, coo, {from: coo,value: 0});
await instance.createPromoKitty(621809753, coo, {from: coo,value: 0});
await instance.createPromoKitty(481611565, coo, {from: coo,value: 0});
await instance.createPromoKitty(65397305, coo, {from: coo,value: 0});
await instance.createPromoKitty(512536068, coo, {from: coo,value: 0});
await instance.createPromoKitty(945198045, coo, {from: coo,value: 0});
await instance.createPromoKitty(264070894, coo, {from: coo,value: 0});
await instance.createPromoKitty(695541518, coo, {from: coo,value: 0});
await instance.createPromoKitty(937520058, coo, {from: coo,value: 0});
await instance.createPromoKitty(854307335, coo, {from: coo,value: 0});
await instance.createPromoKitty(512447304, coo, {from: coo,value: 0});
await instance.createPromoKitty(407865137, coo, {from: coo,value: 0});
await instance.createPromoKitty(902947486, coo, {from: coo,value: 0});
await instance.createPromoKitty(388550322, coo, {from: coo,value: 0});
await instance.createPromoKitty(429311245, coo, {from: coo,value: 0});
await instance.createPromoKitty(559950995, coo, {from: coo,value: 0});
await instance.createPromoKitty(383205650, coo, {from: coo,value: 0});
await instance.createPromoKitty(946186882, coo, {from: coo,value: 0});
await instance.createPromoKitty(169029964, coo, {from: coo,value: 0});
await instance.createPromoKitty(799593724, coo, {from: coo,value: 0});
await instance.createPromoKitty(576112872, coo, {from: coo,value: 0});
await instance.createPromoKitty(325525253, coo, {from: coo,value: 0});
await instance.createPromoKitty(769796212, coo, {from: coo,value: 0});
await instance.createPromoKitty(762461948, coo, {from: coo,value: 0});
await instance.createPromoKitty(635043618, coo, {from: coo,value: 0});
await instance.createPromoKitty(185269490, coo, {from: coo,value: 0});
await instance.createPromoKitty(793371132, coo, {from: coo,value: 0});
await instance.createPromoKitty(857615385, coo, {from: coo,value: 0});
await instance.createPromoKitty(277003444, coo, {from: coo,value: 0});
await instance.createPromoKitty(882326303, coo, {from: coo,value: 0});
await instance.createPromoKitty(474239635, coo, {from: coo,value: 0});
await instance.createPromoKitty(423115787, coo, {from: coo,value: 0});
await instance.createPromoKitty(51598563, coo, {from: coo,value: 0});
await instance.createPromoKitty(238510655, coo, {from: coo,value: 0});
await instance.createPromoKitty(789139081, coo, {from: coo,value: 0});
await instance.createPromoKitty(473533638, coo, {from: coo,value: 0});
await instance.createPromoKitty(548448437, coo, {from: coo,value: 0});
await instance.createPromoKitty(806757923, coo, {from: coo,value: 0});
await instance.createPromoKitty(748844278, coo, {from: coo,value: 0});
await instance.createPromoKitty(278828696, coo, {from: coo,value: 0});
await instance.createPromoKitty(626390374, coo, {from: coo,value: 0});
await instance.createPromoKitty(232010195, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(40, 29, {from: coo});
await instance.breedWith(27, 26, {from: coo});
await instance.breedWith(31, 32, {from: coo});
await instance.breedWith(13, 10, {from: coo});
await instance.breedWith(19, 7, {from: coo});
await instance.breedWith(38, 16, {from: coo});
await instance.breedWith(24, 34, {from: coo});
await instance.breedWith(14, 36, {from: coo});
await instance.breedWith(35, 25, {from: coo});
await instance.breedWith(5, 37, {from: coo});
await instance.breedWith(4, 12, {from: coo});
await instance.breedWith(3, 20, {from: coo});
await instance.breedWith(15, 33, {from: coo});
await instance.breedWith(28, 21, {from: coo});
await instance.breedWith(39, 11, {from: coo});
await instance.breedWith(23, 30, {from: coo});
await instance.breedWith(6, 9, {from: coo});
await instance.breedWith(17, 18, {from: coo});
await instance.breedWith(2, 1, {from: coo});
await instance.breedWith(8, 22, {from: coo});
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
await instance.giveBirth(40);
await instance.giveBirth(27);
await instance.giveBirth(31);
await instance.giveBirth(13);
await instance.giveBirth(19);
await instance.giveBirth(38);
await instance.giveBirth(24);
await instance.giveBirth(14);
await instance.giveBirth(35);
await instance.giveBirth(5);
await instance.giveBirth(4);
await instance.giveBirth(3);
await instance.giveBirth(15);
await instance.giveBirth(28);
await instance.giveBirth(39);
await instance.giveBirth(23);
await instance.giveBirth(6);
await instance.giveBirth(17);
await instance.giveBirth(2);
await instance.giveBirth(8);
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
