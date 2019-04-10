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
await instance.createPromoKitty(438277698, coo, {from: coo,value: 0});
await instance.createPromoKitty(513442766, coo, {from: coo,value: 0});
await instance.createPromoKitty(499452340, coo, {from: coo,value: 0});
await instance.createPromoKitty(338924156, coo, {from: coo,value: 0});
await instance.createPromoKitty(517512381, coo, {from: coo,value: 0});
await instance.createPromoKitty(913880749, coo, {from: coo,value: 0});
await instance.createPromoKitty(645264207, coo, {from: coo,value: 0});
await instance.createPromoKitty(867357305, coo, {from: coo,value: 0});
await instance.createPromoKitty(189373819, coo, {from: coo,value: 0});
await instance.createPromoKitty(894466795, coo, {from: coo,value: 0});
await instance.createPromoKitty(449276061, coo, {from: coo,value: 0});
await instance.createPromoKitty(634404053, coo, {from: coo,value: 0});
await instance.createPromoKitty(424955440, coo, {from: coo,value: 0});
await instance.createPromoKitty(953547402, coo, {from: coo,value: 0});
await instance.createPromoKitty(166127570, coo, {from: coo,value: 0});
await instance.createPromoKitty(354056925, coo, {from: coo,value: 0});
await instance.createPromoKitty(88901040, coo, {from: coo,value: 0});
await instance.createPromoKitty(683256523, coo, {from: coo,value: 0});
await instance.createPromoKitty(709635161, coo, {from: coo,value: 0});
await instance.createPromoKitty(989368172, coo, {from: coo,value: 0});
await instance.createPromoKitty(872993163, coo, {from: coo,value: 0});
await instance.createPromoKitty(761940289, coo, {from: coo,value: 0});
await instance.createPromoKitty(520115762, coo, {from: coo,value: 0});
await instance.createPromoKitty(29972284, coo, {from: coo,value: 0});
await instance.createPromoKitty(363365305, coo, {from: coo,value: 0});
await instance.createPromoKitty(783878286, coo, {from: coo,value: 0});
await instance.createPromoKitty(283390454, coo, {from: coo,value: 0});
await instance.createPromoKitty(867549077, coo, {from: coo,value: 0});
await instance.createPromoKitty(207966069, coo, {from: coo,value: 0});
await instance.createPromoKitty(96418219, coo, {from: coo,value: 0});
await instance.createPromoKitty(420312736, coo, {from: coo,value: 0});
await instance.createPromoKitty(189595424, coo, {from: coo,value: 0});
await instance.createPromoKitty(542626947, coo, {from: coo,value: 0});
await instance.createPromoKitty(493525258, coo, {from: coo,value: 0});
await instance.createPromoKitty(973218341, coo, {from: coo,value: 0});
await instance.createPromoKitty(877181907, coo, {from: coo,value: 0});
await instance.createPromoKitty(322550469, coo, {from: coo,value: 0});
await instance.createPromoKitty(642066068, coo, {from: coo,value: 0});
await instance.createPromoKitty(590356717, coo, {from: coo,value: 0});
await instance.createPromoKitty(98886911, coo, {from: coo,value: 0});
await instance.createPromoKitty(210854071, coo, {from: coo,value: 0});
await instance.createPromoKitty(642827234, coo, {from: coo,value: 0});
await instance.createPromoKitty(405017437, coo, {from: coo,value: 0});
await instance.createPromoKitty(424200393, coo, {from: coo,value: 0});
await instance.createPromoKitty(990078868, coo, {from: coo,value: 0});
await instance.createPromoKitty(425773103, coo, {from: coo,value: 0});
await instance.createPromoKitty(236022215, coo, {from: coo,value: 0});
await instance.createPromoKitty(190939449, coo, {from: coo,value: 0});
await instance.createPromoKitty(102976452, coo, {from: coo,value: 0});
await instance.createPromoKitty(16326186, coo, {from: coo,value: 0});
await instance.createPromoKitty(282359086, coo, {from: coo,value: 0});
await instance.createPromoKitty(219984107, coo, {from: coo,value: 0});
await instance.createPromoKitty(349309271, coo, {from: coo,value: 0});
await instance.createPromoKitty(149101716, coo, {from: coo,value: 0});
await instance.createPromoKitty(144682184, coo, {from: coo,value: 0});
await instance.createPromoKitty(294048614, coo, {from: coo,value: 0});
await instance.createPromoKitty(861683747, coo, {from: coo,value: 0});
await instance.createPromoKitty(160507416, coo, {from: coo,value: 0});
await instance.createPromoKitty(933901464, coo, {from: coo,value: 0});
await instance.createPromoKitty(913605468, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(31, 30, {from: coo});
await instance.breedWith(5, 37, {from: coo});
await instance.breedWith(38, 25, {from: coo});
await instance.breedWith(9, 33, {from: coo});
await instance.breedWith(3, 6, {from: coo});
await instance.breedWith(35, 8, {from: coo});
await instance.breedWith(4, 19, {from: coo});
await instance.breedWith(28, 14, {from: coo});
await instance.breedWith(11, 29, {from: coo});
await instance.breedWith(1, 12, {from: coo});
await instance.breedWith(32, 2, {from: coo});
await instance.breedWith(39, 23, {from: coo});
await instance.breedWith(27, 10, {from: coo});
await instance.breedWith(34, 17, {from: coo});
await instance.breedWith(21, 13, {from: coo});
await instance.breedWith(18, 16, {from: coo});
await instance.breedWith(26, 40, {from: coo});
await instance.breedWith(22, 36, {from: coo});
await instance.breedWith(20, 7, {from: coo});
await instance.breedWith(24, 15, {from: coo});
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
await instance.giveBirth(31);
await instance.giveBirth(5);
await instance.giveBirth(38);
await instance.giveBirth(9);
await instance.giveBirth(3);
await instance.giveBirth(35);
await instance.giveBirth(4);
await instance.giveBirth(28);
await instance.giveBirth(11);
await instance.giveBirth(1);
await instance.giveBirth(32);
await instance.giveBirth(39);
await instance.giveBirth(27);
await instance.giveBirth(34);
await instance.giveBirth(21);
await instance.giveBirth(18);
await instance.giveBirth(26);
await instance.giveBirth(22);
await instance.giveBirth(20);
await instance.giveBirth(24);
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
