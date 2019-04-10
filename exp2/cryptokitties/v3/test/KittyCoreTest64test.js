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
await instance.createPromoKitty(488898345, coo, {from: coo,value: 0});
await instance.createPromoKitty(551345199, coo, {from: coo,value: 0});
await instance.createPromoKitty(95585061, coo, {from: coo,value: 0});
await instance.createPromoKitty(359716180, coo, {from: coo,value: 0});
await instance.createPromoKitty(233335296, coo, {from: coo,value: 0});
await instance.createPromoKitty(34911566, coo, {from: coo,value: 0});
await instance.createPromoKitty(904194726, coo, {from: coo,value: 0});
await instance.createPromoKitty(254167979, coo, {from: coo,value: 0});
await instance.createPromoKitty(430918325, coo, {from: coo,value: 0});
await instance.createPromoKitty(516201633, coo, {from: coo,value: 0});
await instance.createPromoKitty(532872138, coo, {from: coo,value: 0});
await instance.createPromoKitty(383229741, coo, {from: coo,value: 0});
await instance.createPromoKitty(603202727, coo, {from: coo,value: 0});
await instance.createPromoKitty(943264280, coo, {from: coo,value: 0});
await instance.createPromoKitty(940782590, coo, {from: coo,value: 0});
await instance.createPromoKitty(137916530, coo, {from: coo,value: 0});
await instance.createPromoKitty(356592030, coo, {from: coo,value: 0});
await instance.createPromoKitty(577837137, coo, {from: coo,value: 0});
await instance.createPromoKitty(701512172, coo, {from: coo,value: 0});
await instance.createPromoKitty(817850928, coo, {from: coo,value: 0});
await instance.createPromoKitty(590023335, coo, {from: coo,value: 0});
await instance.createPromoKitty(296290284, coo, {from: coo,value: 0});
await instance.createPromoKitty(142331598, coo, {from: coo,value: 0});
await instance.createPromoKitty(217454276, coo, {from: coo,value: 0});
await instance.createPromoKitty(160646917, coo, {from: coo,value: 0});
await instance.createPromoKitty(779074683, coo, {from: coo,value: 0});
await instance.createPromoKitty(124065185, coo, {from: coo,value: 0});
await instance.createPromoKitty(356166903, coo, {from: coo,value: 0});
await instance.createPromoKitty(435431511, coo, {from: coo,value: 0});
await instance.createPromoKitty(277092297, coo, {from: coo,value: 0});
await instance.createPromoKitty(611867489, coo, {from: coo,value: 0});
await instance.createPromoKitty(358575902, coo, {from: coo,value: 0});
await instance.createPromoKitty(158725056, coo, {from: coo,value: 0});
await instance.createPromoKitty(692659902, coo, {from: coo,value: 0});
await instance.createPromoKitty(710195218, coo, {from: coo,value: 0});
await instance.createPromoKitty(799118802, coo, {from: coo,value: 0});
await instance.createPromoKitty(885245595, coo, {from: coo,value: 0});
await instance.createPromoKitty(850419809, coo, {from: coo,value: 0});
await instance.createPromoKitty(147830361, coo, {from: coo,value: 0});
await instance.createPromoKitty(648043309, coo, {from: coo,value: 0});
await instance.createPromoKitty(491614958, coo, {from: coo,value: 0});
await instance.createPromoKitty(83310684, coo, {from: coo,value: 0});
await instance.createPromoKitty(918403617, coo, {from: coo,value: 0});
await instance.createPromoKitty(197966192, coo, {from: coo,value: 0});
await instance.createPromoKitty(154629414, coo, {from: coo,value: 0});
await instance.createPromoKitty(213043967, coo, {from: coo,value: 0});
await instance.createPromoKitty(791921918, coo, {from: coo,value: 0});
await instance.createPromoKitty(194560288, coo, {from: coo,value: 0});
await instance.createPromoKitty(826584717, coo, {from: coo,value: 0});
await instance.createPromoKitty(554195465, coo, {from: coo,value: 0});
await instance.createPromoKitty(911247584, coo, {from: coo,value: 0});
await instance.createPromoKitty(391724398, coo, {from: coo,value: 0});
await instance.createPromoKitty(727416914, coo, {from: coo,value: 0});
await instance.createPromoKitty(62722780, coo, {from: coo,value: 0});
await instance.createPromoKitty(449475395, coo, {from: coo,value: 0});
await instance.createPromoKitty(95139615, coo, {from: coo,value: 0});
await instance.createPromoKitty(263389633, coo, {from: coo,value: 0});
await instance.createPromoKitty(796106067, coo, {from: coo,value: 0});
await instance.createPromoKitty(807391743, coo, {from: coo,value: 0});
await instance.createPromoKitty(657400526, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(17, 37, {from: coo});
await instance.breedWith(4, 5, {from: coo});
await instance.breedWith(27, 6, {from: coo});
await instance.breedWith(10, 18, {from: coo});
await instance.breedWith(22, 20, {from: coo});
await instance.breedWith(7, 13, {from: coo});
await instance.breedWith(30, 3, {from: coo});
await instance.breedWith(40, 19, {from: coo});
await instance.breedWith(9, 1, {from: coo});
await instance.breedWith(21, 2, {from: coo});
await instance.breedWith(25, 34, {from: coo});
await instance.breedWith(16, 29, {from: coo});
await instance.breedWith(23, 39, {from: coo});
await instance.breedWith(14, 24, {from: coo});
await instance.breedWith(36, 26, {from: coo});
await instance.breedWith(12, 32, {from: coo});
await instance.breedWith(11, 8, {from: coo});
await instance.breedWith(28, 38, {from: coo});
await instance.breedWith(33, 35, {from: coo});
await instance.breedWith(31, 15, {from: coo});
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
await instance.giveBirth(17);
await instance.giveBirth(4);
await instance.giveBirth(27);
await instance.giveBirth(10);
await instance.giveBirth(22);
await instance.giveBirth(7);
await instance.giveBirth(30);
await instance.giveBirth(40);
await instance.giveBirth(9);
await instance.giveBirth(21);
await instance.giveBirth(25);
await instance.giveBirth(16);
await instance.giveBirth(23);
await instance.giveBirth(14);
await instance.giveBirth(36);
await instance.giveBirth(12);
await instance.giveBirth(11);
await instance.giveBirth(28);
await instance.giveBirth(33);
await instance.giveBirth(31);
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
