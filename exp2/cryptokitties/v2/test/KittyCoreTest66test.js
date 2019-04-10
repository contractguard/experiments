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
await instance.createPromoKitty(938673099, coo, {from: coo,value: 0});
await instance.createPromoKitty(152585549, coo, {from: coo,value: 0});
await instance.createPromoKitty(479287057, coo, {from: coo,value: 0});
await instance.createPromoKitty(854095014, coo, {from: coo,value: 0});
await instance.createPromoKitty(160913521, coo, {from: coo,value: 0});
await instance.createPromoKitty(449319709, coo, {from: coo,value: 0});
await instance.createPromoKitty(841410210, coo, {from: coo,value: 0});
await instance.createPromoKitty(111089577, coo, {from: coo,value: 0});
await instance.createPromoKitty(343678112, coo, {from: coo,value: 0});
await instance.createPromoKitty(671285595, coo, {from: coo,value: 0});
await instance.createPromoKitty(391537566, coo, {from: coo,value: 0});
await instance.createPromoKitty(82009689, coo, {from: coo,value: 0});
await instance.createPromoKitty(311401724, coo, {from: coo,value: 0});
await instance.createPromoKitty(934847053, coo, {from: coo,value: 0});
await instance.createPromoKitty(815028136, coo, {from: coo,value: 0});
await instance.createPromoKitty(666199777, coo, {from: coo,value: 0});
await instance.createPromoKitty(466296920, coo, {from: coo,value: 0});
await instance.createPromoKitty(393719023, coo, {from: coo,value: 0});
await instance.createPromoKitty(914711016, coo, {from: coo,value: 0});
await instance.createPromoKitty(232067935, coo, {from: coo,value: 0});
await instance.createPromoKitty(487330540, coo, {from: coo,value: 0});
await instance.createPromoKitty(900496224, coo, {from: coo,value: 0});
await instance.createPromoKitty(929777315, coo, {from: coo,value: 0});
await instance.createPromoKitty(369514881, coo, {from: coo,value: 0});
await instance.createPromoKitty(194919888, coo, {from: coo,value: 0});
await instance.createPromoKitty(189540384, coo, {from: coo,value: 0});
await instance.createPromoKitty(737469700, coo, {from: coo,value: 0});
await instance.createPromoKitty(160653292, coo, {from: coo,value: 0});
await instance.createPromoKitty(88087162, coo, {from: coo,value: 0});
await instance.createPromoKitty(711632633, coo, {from: coo,value: 0});
await instance.createPromoKitty(57731118, coo, {from: coo,value: 0});
await instance.createPromoKitty(704976999, coo, {from: coo,value: 0});
await instance.createPromoKitty(346349878, coo, {from: coo,value: 0});
await instance.createPromoKitty(498748505, coo, {from: coo,value: 0});
await instance.createPromoKitty(226938488, coo, {from: coo,value: 0});
await instance.createPromoKitty(691883367, coo, {from: coo,value: 0});
await instance.createPromoKitty(689938485, coo, {from: coo,value: 0});
await instance.createPromoKitty(989439786, coo, {from: coo,value: 0});
await instance.createPromoKitty(319821252, coo, {from: coo,value: 0});
await instance.createPromoKitty(635860781, coo, {from: coo,value: 0});
await instance.createPromoKitty(648506122, coo, {from: coo,value: 0});
await instance.createPromoKitty(270004286, coo, {from: coo,value: 0});
await instance.createPromoKitty(536514900, coo, {from: coo,value: 0});
await instance.createPromoKitty(908618219, coo, {from: coo,value: 0});
await instance.createPromoKitty(247716453, coo, {from: coo,value: 0});
await instance.createPromoKitty(661502348, coo, {from: coo,value: 0});
await instance.createPromoKitty(279568790, coo, {from: coo,value: 0});
await instance.createPromoKitty(431308657, coo, {from: coo,value: 0});
await instance.createPromoKitty(957470071, coo, {from: coo,value: 0});
await instance.createPromoKitty(246389328, coo, {from: coo,value: 0});
await instance.createPromoKitty(915906835, coo, {from: coo,value: 0});
await instance.createPromoKitty(888381728, coo, {from: coo,value: 0});
await instance.createPromoKitty(277057461, coo, {from: coo,value: 0});
await instance.createPromoKitty(347283846, coo, {from: coo,value: 0});
await instance.createPromoKitty(659076027, coo, {from: coo,value: 0});
await instance.createPromoKitty(310798033, coo, {from: coo,value: 0});
await instance.createPromoKitty(430362089, coo, {from: coo,value: 0});
await instance.createPromoKitty(969360668, coo, {from: coo,value: 0});
await instance.createPromoKitty(30769230, coo, {from: coo,value: 0});
await instance.createPromoKitty(729735911, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(21, 25, {from: coo});
await instance.breedWith(26, 28, {from: coo});
await instance.breedWith(38, 36, {from: coo});
await instance.breedWith(22, 19, {from: coo});
await instance.breedWith(29, 24, {from: coo});
await instance.breedWith(12, 3, {from: coo});
await instance.breedWith(37, 8, {from: coo});
await instance.breedWith(15, 18, {from: coo});
await instance.breedWith(13, 20, {from: coo});
await instance.breedWith(30, 16, {from: coo});
await instance.breedWith(14, 9, {from: coo});
await instance.breedWith(34, 1, {from: coo});
await instance.breedWith(7, 27, {from: coo});
await instance.breedWith(6, 4, {from: coo});
await instance.breedWith(5, 2, {from: coo});
await instance.breedWith(35, 11, {from: coo});
await instance.breedWith(33, 39, {from: coo});
await instance.breedWith(40, 23, {from: coo});
await instance.breedWith(10, 17, {from: coo});
await instance.breedWith(32, 31, {from: coo});
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
await instance.giveBirth(21);
await instance.giveBirth(26);
await instance.giveBirth(38);
await instance.giveBirth(22);
await instance.giveBirth(29);
await instance.giveBirth(12);
await instance.giveBirth(37);
await instance.giveBirth(15);
await instance.giveBirth(13);
await instance.giveBirth(30);
await instance.giveBirth(14);
await instance.giveBirth(34);
await instance.giveBirth(7);
await instance.giveBirth(6);
await instance.giveBirth(5);
await instance.giveBirth(35);
await instance.giveBirth(33);
await instance.giveBirth(40);
await instance.giveBirth(10);
await instance.giveBirth(32);
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
