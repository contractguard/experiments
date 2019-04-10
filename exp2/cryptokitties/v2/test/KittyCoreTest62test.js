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
await instance.createPromoKitty(797368839, coo, {from: coo,value: 0});
await instance.createPromoKitty(639875917, coo, {from: coo,value: 0});
await instance.createPromoKitty(400083651, coo, {from: coo,value: 0});
await instance.createPromoKitty(341517465, coo, {from: coo,value: 0});
await instance.createPromoKitty(246939679, coo, {from: coo,value: 0});
await instance.createPromoKitty(382571843, coo, {from: coo,value: 0});
await instance.createPromoKitty(887288008, coo, {from: coo,value: 0});
await instance.createPromoKitty(142817998, coo, {from: coo,value: 0});
await instance.createPromoKitty(555681588, coo, {from: coo,value: 0});
await instance.createPromoKitty(436446915, coo, {from: coo,value: 0});
await instance.createPromoKitty(443532257, coo, {from: coo,value: 0});
await instance.createPromoKitty(277629550, coo, {from: coo,value: 0});
await instance.createPromoKitty(720840048, coo, {from: coo,value: 0});
await instance.createPromoKitty(148838375, coo, {from: coo,value: 0});
await instance.createPromoKitty(683802989, coo, {from: coo,value: 0});
await instance.createPromoKitty(280218951, coo, {from: coo,value: 0});
await instance.createPromoKitty(77904178, coo, {from: coo,value: 0});
await instance.createPromoKitty(394856919, coo, {from: coo,value: 0});
await instance.createPromoKitty(607097430, coo, {from: coo,value: 0});
await instance.createPromoKitty(527507934, coo, {from: coo,value: 0});
await instance.createPromoKitty(998460145, coo, {from: coo,value: 0});
await instance.createPromoKitty(373486994, coo, {from: coo,value: 0});
await instance.createPromoKitty(372656922, coo, {from: coo,value: 0});
await instance.createPromoKitty(399372302, coo, {from: coo,value: 0});
await instance.createPromoKitty(355750090, coo, {from: coo,value: 0});
await instance.createPromoKitty(328965381, coo, {from: coo,value: 0});
await instance.createPromoKitty(82442534, coo, {from: coo,value: 0});
await instance.createPromoKitty(108339865, coo, {from: coo,value: 0});
await instance.createPromoKitty(218293912, coo, {from: coo,value: 0});
await instance.createPromoKitty(835962443, coo, {from: coo,value: 0});
await instance.createPromoKitty(629786381, coo, {from: coo,value: 0});
await instance.createPromoKitty(646959625, coo, {from: coo,value: 0});
await instance.createPromoKitty(762008786, coo, {from: coo,value: 0});
await instance.createPromoKitty(676095556, coo, {from: coo,value: 0});
await instance.createPromoKitty(74059090, coo, {from: coo,value: 0});
await instance.createPromoKitty(683044442, coo, {from: coo,value: 0});
await instance.createPromoKitty(174260578, coo, {from: coo,value: 0});
await instance.createPromoKitty(298150354, coo, {from: coo,value: 0});
await instance.createPromoKitty(135423007, coo, {from: coo,value: 0});
await instance.createPromoKitty(372407222, coo, {from: coo,value: 0});
await instance.createPromoKitty(318019043, coo, {from: coo,value: 0});
await instance.createPromoKitty(920092266, coo, {from: coo,value: 0});
await instance.createPromoKitty(815565542, coo, {from: coo,value: 0});
await instance.createPromoKitty(223887603, coo, {from: coo,value: 0});
await instance.createPromoKitty(847733740, coo, {from: coo,value: 0});
await instance.createPromoKitty(829145029, coo, {from: coo,value: 0});
await instance.createPromoKitty(765899750, coo, {from: coo,value: 0});
await instance.createPromoKitty(784380613, coo, {from: coo,value: 0});
await instance.createPromoKitty(218510926, coo, {from: coo,value: 0});
await instance.createPromoKitty(967078084, coo, {from: coo,value: 0});
await instance.createPromoKitty(221327706, coo, {from: coo,value: 0});
await instance.createPromoKitty(95112954, coo, {from: coo,value: 0});
await instance.createPromoKitty(992555396, coo, {from: coo,value: 0});
await instance.createPromoKitty(909782770, coo, {from: coo,value: 0});
await instance.createPromoKitty(106041484, coo, {from: coo,value: 0});
await instance.createPromoKitty(250393761, coo, {from: coo,value: 0});
await instance.createPromoKitty(45808897, coo, {from: coo,value: 0});
await instance.createPromoKitty(741153198, coo, {from: coo,value: 0});
await instance.createPromoKitty(274567913, coo, {from: coo,value: 0});
await instance.createPromoKitty(154154382, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(40, 37, {from: coo});
await instance.breedWith(19, 34, {from: coo});
await instance.breedWith(31, 5, {from: coo});
await instance.breedWith(8, 4, {from: coo});
await instance.breedWith(16, 20, {from: coo});
await instance.breedWith(15, 35, {from: coo});
await instance.breedWith(39, 2, {from: coo});
await instance.breedWith(7, 23, {from: coo});
await instance.breedWith(30, 9, {from: coo});
await instance.breedWith(17, 29, {from: coo});
await instance.breedWith(14, 13, {from: coo});
await instance.breedWith(3, 21, {from: coo});
await instance.breedWith(27, 24, {from: coo});
await instance.breedWith(1, 12, {from: coo});
await instance.breedWith(36, 26, {from: coo});
await instance.breedWith(22, 28, {from: coo});
await instance.breedWith(38, 32, {from: coo});
await instance.breedWith(6, 18, {from: coo});
await instance.breedWith(10, 33, {from: coo});
await instance.breedWith(25, 11, {from: coo});
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
await instance.giveBirth(19);
await instance.giveBirth(31);
await instance.giveBirth(8);
await instance.giveBirth(16);
await instance.giveBirth(15);
await instance.giveBirth(39);
await instance.giveBirth(7);
await instance.giveBirth(30);
await instance.giveBirth(17);
await instance.giveBirth(14);
await instance.giveBirth(3);
await instance.giveBirth(27);
await instance.giveBirth(1);
await instance.giveBirth(36);
await instance.giveBirth(22);
await instance.giveBirth(38);
await instance.giveBirth(6);
await instance.giveBirth(10);
await instance.giveBirth(25);
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
