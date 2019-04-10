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
await instance.createPromoKitty(959883474, coo, {from: coo,value: 0});
await instance.createPromoKitty(58099718, coo, {from: coo,value: 0});
await instance.createPromoKitty(821603514, coo, {from: coo,value: 0});
await instance.createPromoKitty(585124644, coo, {from: coo,value: 0});
await instance.createPromoKitty(824188966, coo, {from: coo,value: 0});
await instance.createPromoKitty(352499024, coo, {from: coo,value: 0});
await instance.createPromoKitty(632594272, coo, {from: coo,value: 0});
await instance.createPromoKitty(577989703, coo, {from: coo,value: 0});
await instance.createPromoKitty(482340124, coo, {from: coo,value: 0});
await instance.createPromoKitty(990391177, coo, {from: coo,value: 0});
await instance.createPromoKitty(429922454, coo, {from: coo,value: 0});
await instance.createPromoKitty(504478817, coo, {from: coo,value: 0});
await instance.createPromoKitty(100051733, coo, {from: coo,value: 0});
await instance.createPromoKitty(944023500, coo, {from: coo,value: 0});
await instance.createPromoKitty(864667205, coo, {from: coo,value: 0});
await instance.createPromoKitty(821596991, coo, {from: coo,value: 0});
await instance.createPromoKitty(746457510, coo, {from: coo,value: 0});
await instance.createPromoKitty(584453986, coo, {from: coo,value: 0});
await instance.createPromoKitty(239302706, coo, {from: coo,value: 0});
await instance.createPromoKitty(7056259, coo, {from: coo,value: 0});
await instance.createPromoKitty(94796720, coo, {from: coo,value: 0});
await instance.createPromoKitty(707918536, coo, {from: coo,value: 0});
await instance.createPromoKitty(92185724, coo, {from: coo,value: 0});
await instance.createPromoKitty(530140827, coo, {from: coo,value: 0});
await instance.createPromoKitty(69251994, coo, {from: coo,value: 0});
await instance.createPromoKitty(485322814, coo, {from: coo,value: 0});
await instance.createPromoKitty(798243659, coo, {from: coo,value: 0});
await instance.createPromoKitty(104971743, coo, {from: coo,value: 0});
await instance.createPromoKitty(983616245, coo, {from: coo,value: 0});
await instance.createPromoKitty(936515491, coo, {from: coo,value: 0});
await instance.createPromoKitty(413743307, coo, {from: coo,value: 0});
await instance.createPromoKitty(145497915, coo, {from: coo,value: 0});
await instance.createPromoKitty(289344877, coo, {from: coo,value: 0});
await instance.createPromoKitty(125254884, coo, {from: coo,value: 0});
await instance.createPromoKitty(625198013, coo, {from: coo,value: 0});
await instance.createPromoKitty(268713492, coo, {from: coo,value: 0});
await instance.createPromoKitty(528462069, coo, {from: coo,value: 0});
await instance.createPromoKitty(789297139, coo, {from: coo,value: 0});
await instance.createPromoKitty(559466503, coo, {from: coo,value: 0});
await instance.createPromoKitty(267129460, coo, {from: coo,value: 0});
await instance.createPromoKitty(896449325, coo, {from: coo,value: 0});
await instance.createPromoKitty(295692893, coo, {from: coo,value: 0});
await instance.createPromoKitty(471581633, coo, {from: coo,value: 0});
await instance.createPromoKitty(6190568, coo, {from: coo,value: 0});
await instance.createPromoKitty(760221353, coo, {from: coo,value: 0});
await instance.createPromoKitty(463937881, coo, {from: coo,value: 0});
await instance.createPromoKitty(605283901, coo, {from: coo,value: 0});
await instance.createPromoKitty(981246564, coo, {from: coo,value: 0});
await instance.createPromoKitty(618023631, coo, {from: coo,value: 0});
await instance.createPromoKitty(438879151, coo, {from: coo,value: 0});
await instance.createPromoKitty(361720335, coo, {from: coo,value: 0});
await instance.createPromoKitty(232231432, coo, {from: coo,value: 0});
await instance.createPromoKitty(165373202, coo, {from: coo,value: 0});
await instance.createPromoKitty(656170332, coo, {from: coo,value: 0});
await instance.createPromoKitty(709764467, coo, {from: coo,value: 0});
await instance.createPromoKitty(494279668, coo, {from: coo,value: 0});
await instance.createPromoKitty(113794481, coo, {from: coo,value: 0});
await instance.createPromoKitty(465171324, coo, {from: coo,value: 0});
await instance.createPromoKitty(785897077, coo, {from: coo,value: 0});
await instance.createPromoKitty(502752355, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(15, 28, {from: coo});
await instance.breedWith(29, 8, {from: coo});
await instance.breedWith(4, 31, {from: coo});
await instance.breedWith(32, 35, {from: coo});
await instance.breedWith(14, 7, {from: coo});
await instance.breedWith(10, 5, {from: coo});
await instance.breedWith(1, 13, {from: coo});
await instance.breedWith(25, 39, {from: coo});
await instance.breedWith(23, 27, {from: coo});
await instance.breedWith(16, 17, {from: coo});
await instance.breedWith(37, 36, {from: coo});
await instance.breedWith(21, 3, {from: coo});
await instance.breedWith(6, 26, {from: coo});
await instance.breedWith(18, 20, {from: coo});
await instance.breedWith(12, 22, {from: coo});
await instance.breedWith(33, 11, {from: coo});
await instance.breedWith(38, 34, {from: coo});
await instance.breedWith(30, 40, {from: coo});
await instance.breedWith(19, 9, {from: coo});
await instance.breedWith(24, 2, {from: coo});
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
await instance.giveBirth(15);
await instance.giveBirth(29);
await instance.giveBirth(4);
await instance.giveBirth(32);
await instance.giveBirth(14);
await instance.giveBirth(10);
await instance.giveBirth(1);
await instance.giveBirth(25);
await instance.giveBirth(23);
await instance.giveBirth(16);
await instance.giveBirth(37);
await instance.giveBirth(21);
await instance.giveBirth(6);
await instance.giveBirth(18);
await instance.giveBirth(12);
await instance.giveBirth(33);
await instance.giveBirth(38);
await instance.giveBirth(30);
await instance.giveBirth(19);
await instance.giveBirth(24);
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
