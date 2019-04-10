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
await instance.createPromoKitty(187338255, coo, {from: coo,value: 0});
await instance.createPromoKitty(783751514, coo, {from: coo,value: 0});
await instance.createPromoKitty(392110162, coo, {from: coo,value: 0});
await instance.createPromoKitty(698035317, coo, {from: coo,value: 0});
await instance.createPromoKitty(687403947, coo, {from: coo,value: 0});
await instance.createPromoKitty(654469209, coo, {from: coo,value: 0});
await instance.createPromoKitty(574888113, coo, {from: coo,value: 0});
await instance.createPromoKitty(411749576, coo, {from: coo,value: 0});
await instance.createPromoKitty(698517308, coo, {from: coo,value: 0});
await instance.createPromoKitty(367693523, coo, {from: coo,value: 0});
await instance.createPromoKitty(629263915, coo, {from: coo,value: 0});
await instance.createPromoKitty(723148993, coo, {from: coo,value: 0});
await instance.createPromoKitty(580555069, coo, {from: coo,value: 0});
await instance.createPromoKitty(11795266, coo, {from: coo,value: 0});
await instance.createPromoKitty(801392931, coo, {from: coo,value: 0});
await instance.createPromoKitty(375414949, coo, {from: coo,value: 0});
await instance.createPromoKitty(200656049, coo, {from: coo,value: 0});
await instance.createPromoKitty(884337489, coo, {from: coo,value: 0});
await instance.createPromoKitty(868481670, coo, {from: coo,value: 0});
await instance.createPromoKitty(767240513, coo, {from: coo,value: 0});
await instance.createPromoKitty(397608794, coo, {from: coo,value: 0});
await instance.createPromoKitty(395402600, coo, {from: coo,value: 0});
await instance.createPromoKitty(308343738, coo, {from: coo,value: 0});
await instance.createPromoKitty(26288372, coo, {from: coo,value: 0});
await instance.createPromoKitty(192536723, coo, {from: coo,value: 0});
await instance.createPromoKitty(272216833, coo, {from: coo,value: 0});
await instance.createPromoKitty(501134616, coo, {from: coo,value: 0});
await instance.createPromoKitty(947212031, coo, {from: coo,value: 0});
await instance.createPromoKitty(103911870, coo, {from: coo,value: 0});
await instance.createPromoKitty(190466275, coo, {from: coo,value: 0});
await instance.createPromoKitty(554388192, coo, {from: coo,value: 0});
await instance.createPromoKitty(211146312, coo, {from: coo,value: 0});
await instance.createPromoKitty(505354261, coo, {from: coo,value: 0});
await instance.createPromoKitty(767356207, coo, {from: coo,value: 0});
await instance.createPromoKitty(535022313, coo, {from: coo,value: 0});
await instance.createPromoKitty(825161144, coo, {from: coo,value: 0});
await instance.createPromoKitty(561082496, coo, {from: coo,value: 0});
await instance.createPromoKitty(437600343, coo, {from: coo,value: 0});
await instance.createPromoKitty(378271708, coo, {from: coo,value: 0});
await instance.createPromoKitty(513172930, coo, {from: coo,value: 0});
await instance.createPromoKitty(265435333, coo, {from: coo,value: 0});
await instance.createPromoKitty(571699914, coo, {from: coo,value: 0});
await instance.createPromoKitty(417263561, coo, {from: coo,value: 0});
await instance.createPromoKitty(488412609, coo, {from: coo,value: 0});
await instance.createPromoKitty(254968395, coo, {from: coo,value: 0});
await instance.createPromoKitty(20147036, coo, {from: coo,value: 0});
await instance.createPromoKitty(97743279, coo, {from: coo,value: 0});
await instance.createPromoKitty(65371899, coo, {from: coo,value: 0});
await instance.createPromoKitty(876615815, coo, {from: coo,value: 0});
await instance.createPromoKitty(842929624, coo, {from: coo,value: 0});
await instance.createPromoKitty(906951508, coo, {from: coo,value: 0});
await instance.createPromoKitty(62003101, coo, {from: coo,value: 0});
await instance.createPromoKitty(382761181, coo, {from: coo,value: 0});
await instance.createPromoKitty(369038413, coo, {from: coo,value: 0});
await instance.createPromoKitty(480879626, coo, {from: coo,value: 0});
await instance.createPromoKitty(139686457, coo, {from: coo,value: 0});
await instance.createPromoKitty(131383814, coo, {from: coo,value: 0});
await instance.createPromoKitty(907838857, coo, {from: coo,value: 0});
await instance.createPromoKitty(839094694, coo, {from: coo,value: 0});
await instance.createPromoKitty(131084751, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(33, 3, {from: coo});
await instance.breedWith(18, 8, {from: coo});
await instance.breedWith(22, 37, {from: coo});
await instance.breedWith(4, 38, {from: coo});
await instance.breedWith(15, 35, {from: coo});
await instance.breedWith(29, 39, {from: coo});
await instance.breedWith(5, 30, {from: coo});
await instance.breedWith(28, 11, {from: coo});
await instance.breedWith(23, 40, {from: coo});
await instance.breedWith(36, 25, {from: coo});
await instance.breedWith(2, 9, {from: coo});
await instance.breedWith(26, 12, {from: coo});
await instance.breedWith(16, 32, {from: coo});
await instance.breedWith(31, 34, {from: coo});
await instance.breedWith(7, 10, {from: coo});
await instance.breedWith(24, 21, {from: coo});
await instance.breedWith(6, 27, {from: coo});
await instance.breedWith(17, 1, {from: coo});
await instance.breedWith(20, 19, {from: coo});
await instance.breedWith(13, 14, {from: coo});
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
await instance.giveBirth(33);
await instance.giveBirth(18);
await instance.giveBirth(22);
await instance.giveBirth(4);
await instance.giveBirth(15);
await instance.giveBirth(29);
await instance.giveBirth(5);
await instance.giveBirth(28);
await instance.giveBirth(23);
await instance.giveBirth(36);
await instance.giveBirth(2);
await instance.giveBirth(26);
await instance.giveBirth(16);
await instance.giveBirth(31);
await instance.giveBirth(7);
await instance.giveBirth(24);
await instance.giveBirth(6);
await instance.giveBirth(17);
await instance.giveBirth(20);
await instance.giveBirth(13);
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
