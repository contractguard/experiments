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
await instance.createPromoKitty(707295913, coo, {from: coo,value: 0});
await instance.createPromoKitty(329887530, coo, {from: coo,value: 0});
await instance.createPromoKitty(858798722, coo, {from: coo,value: 0});
await instance.createPromoKitty(198318142, coo, {from: coo,value: 0});
await instance.createPromoKitty(941658841, coo, {from: coo,value: 0});
await instance.createPromoKitty(610832256, coo, {from: coo,value: 0});
await instance.createPromoKitty(433523511, coo, {from: coo,value: 0});
await instance.createPromoKitty(93591895, coo, {from: coo,value: 0});
await instance.createPromoKitty(51476523, coo, {from: coo,value: 0});
await instance.createPromoKitty(571241652, coo, {from: coo,value: 0});
await instance.createPromoKitty(426251426, coo, {from: coo,value: 0});
await instance.createPromoKitty(841543306, coo, {from: coo,value: 0});
await instance.createPromoKitty(488492700, coo, {from: coo,value: 0});
await instance.createPromoKitty(328674319, coo, {from: coo,value: 0});
await instance.createPromoKitty(671043410, coo, {from: coo,value: 0});
await instance.createPromoKitty(661054905, coo, {from: coo,value: 0});
await instance.createPromoKitty(80032744, coo, {from: coo,value: 0});
await instance.createPromoKitty(790440130, coo, {from: coo,value: 0});
await instance.createPromoKitty(1110890, coo, {from: coo,value: 0});
await instance.createPromoKitty(430971510, coo, {from: coo,value: 0});
await instance.createPromoKitty(616157749, coo, {from: coo,value: 0});
await instance.createPromoKitty(971450035, coo, {from: coo,value: 0});
await instance.createPromoKitty(612950298, coo, {from: coo,value: 0});
await instance.createPromoKitty(408175500, coo, {from: coo,value: 0});
await instance.createPromoKitty(508863482, coo, {from: coo,value: 0});
await instance.createPromoKitty(308291444, coo, {from: coo,value: 0});
await instance.createPromoKitty(628039725, coo, {from: coo,value: 0});
await instance.createPromoKitty(11532372, coo, {from: coo,value: 0});
await instance.createPromoKitty(511112209, coo, {from: coo,value: 0});
await instance.createPromoKitty(850077734, coo, {from: coo,value: 0});
await instance.createPromoKitty(401763638, coo, {from: coo,value: 0});
await instance.createPromoKitty(182475749, coo, {from: coo,value: 0});
await instance.createPromoKitty(124146715, coo, {from: coo,value: 0});
await instance.createPromoKitty(147400904, coo, {from: coo,value: 0});
await instance.createPromoKitty(332390470, coo, {from: coo,value: 0});
await instance.createPromoKitty(992439234, coo, {from: coo,value: 0});
await instance.createPromoKitty(938499172, coo, {from: coo,value: 0});
await instance.createPromoKitty(966951858, coo, {from: coo,value: 0});
await instance.createPromoKitty(174938675, coo, {from: coo,value: 0});
await instance.createPromoKitty(583664119, coo, {from: coo,value: 0});
await instance.createPromoKitty(825601587, coo, {from: coo,value: 0});
await instance.createPromoKitty(196164579, coo, {from: coo,value: 0});
await instance.createPromoKitty(135838382, coo, {from: coo,value: 0});
await instance.createPromoKitty(267279195, coo, {from: coo,value: 0});
await instance.createPromoKitty(985858487, coo, {from: coo,value: 0});
await instance.createPromoKitty(111384318, coo, {from: coo,value: 0});
await instance.createPromoKitty(54081617, coo, {from: coo,value: 0});
await instance.createPromoKitty(280907271, coo, {from: coo,value: 0});
await instance.createPromoKitty(895068555, coo, {from: coo,value: 0});
await instance.createPromoKitty(358365677, coo, {from: coo,value: 0});
await instance.createPromoKitty(86735529, coo, {from: coo,value: 0});
await instance.createPromoKitty(669870665, coo, {from: coo,value: 0});
await instance.createPromoKitty(541899010, coo, {from: coo,value: 0});
await instance.createPromoKitty(459451476, coo, {from: coo,value: 0});
await instance.createPromoKitty(599170674, coo, {from: coo,value: 0});
await instance.createPromoKitty(8571953, coo, {from: coo,value: 0});
await instance.createPromoKitty(839609543, coo, {from: coo,value: 0});
await instance.createPromoKitty(24398568, coo, {from: coo,value: 0});
await instance.createPromoKitty(595394215, coo, {from: coo,value: 0});
await instance.createPromoKitty(113496796, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(39, 28, {from: coo});
await instance.breedWith(40, 29, {from: coo});
await instance.breedWith(38, 17, {from: coo});
await instance.breedWith(32, 20, {from: coo});
await instance.breedWith(31, 33, {from: coo});
await instance.breedWith(15, 1, {from: coo});
await instance.breedWith(2, 25, {from: coo});
await instance.breedWith(30, 19, {from: coo});
await instance.breedWith(16, 3, {from: coo});
await instance.breedWith(21, 10, {from: coo});
await instance.breedWith(22, 18, {from: coo});
await instance.breedWith(34, 13, {from: coo});
await instance.breedWith(9, 36, {from: coo});
await instance.breedWith(7, 6, {from: coo});
await instance.breedWith(4, 8, {from: coo});
await instance.breedWith(23, 12, {from: coo});
await instance.breedWith(37, 27, {from: coo});
await instance.breedWith(11, 26, {from: coo});
await instance.breedWith(35, 5, {from: coo});
await instance.breedWith(14, 24, {from: coo});
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
await instance.giveBirth(39);
await instance.giveBirth(40);
await instance.giveBirth(38);
await instance.giveBirth(32);
await instance.giveBirth(31);
await instance.giveBirth(15);
await instance.giveBirth(2);
await instance.giveBirth(30);
await instance.giveBirth(16);
await instance.giveBirth(21);
await instance.giveBirth(22);
await instance.giveBirth(34);
await instance.giveBirth(9);
await instance.giveBirth(7);
await instance.giveBirth(4);
await instance.giveBirth(23);
await instance.giveBirth(37);
await instance.giveBirth(11);
await instance.giveBirth(35);
await instance.giveBirth(14);
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
