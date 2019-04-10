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
await instance.createPromoKitty(166838110, coo, {from: coo,value: 0});
await instance.createPromoKitty(428126282, coo, {from: coo,value: 0});
await instance.createPromoKitty(451948104, coo, {from: coo,value: 0});
await instance.createPromoKitty(599934745, coo, {from: coo,value: 0});
await instance.createPromoKitty(124712121, coo, {from: coo,value: 0});
await instance.createPromoKitty(597579516, coo, {from: coo,value: 0});
await instance.createPromoKitty(305225395, coo, {from: coo,value: 0});
await instance.createPromoKitty(972004800, coo, {from: coo,value: 0});
await instance.createPromoKitty(87221421, coo, {from: coo,value: 0});
await instance.createPromoKitty(615963995, coo, {from: coo,value: 0});
await instance.createPromoKitty(767088582, coo, {from: coo,value: 0});
await instance.createPromoKitty(543397791, coo, {from: coo,value: 0});
await instance.createPromoKitty(545014610, coo, {from: coo,value: 0});
await instance.createPromoKitty(626221212, coo, {from: coo,value: 0});
await instance.createPromoKitty(517571848, coo, {from: coo,value: 0});
await instance.createPromoKitty(236678921, coo, {from: coo,value: 0});
await instance.createPromoKitty(480323263, coo, {from: coo,value: 0});
await instance.createPromoKitty(111423623, coo, {from: coo,value: 0});
await instance.createPromoKitty(886401642, coo, {from: coo,value: 0});
await instance.createPromoKitty(308091331, coo, {from: coo,value: 0});
await instance.createPromoKitty(34766548, coo, {from: coo,value: 0});
await instance.createPromoKitty(355347711, coo, {from: coo,value: 0});
await instance.createPromoKitty(741767522, coo, {from: coo,value: 0});
await instance.createPromoKitty(20368885, coo, {from: coo,value: 0});
await instance.createPromoKitty(843269793, coo, {from: coo,value: 0});
await instance.createPromoKitty(755120345, coo, {from: coo,value: 0});
await instance.createPromoKitty(609108950, coo, {from: coo,value: 0});
await instance.createPromoKitty(488660203, coo, {from: coo,value: 0});
await instance.createPromoKitty(766613561, coo, {from: coo,value: 0});
await instance.createPromoKitty(858685666, coo, {from: coo,value: 0});
await instance.createPromoKitty(507870836, coo, {from: coo,value: 0});
await instance.createPromoKitty(175331877, coo, {from: coo,value: 0});
await instance.createPromoKitty(498048100, coo, {from: coo,value: 0});
await instance.createPromoKitty(155407353, coo, {from: coo,value: 0});
await instance.createPromoKitty(800342477, coo, {from: coo,value: 0});
await instance.createPromoKitty(355416155, coo, {from: coo,value: 0});
await instance.createPromoKitty(672058856, coo, {from: coo,value: 0});
await instance.createPromoKitty(765064937, coo, {from: coo,value: 0});
await instance.createPromoKitty(766005878, coo, {from: coo,value: 0});
await instance.createPromoKitty(467957550, coo, {from: coo,value: 0});
await instance.createPromoKitty(562083800, coo, {from: coo,value: 0});
await instance.createPromoKitty(867825115, coo, {from: coo,value: 0});
await instance.createPromoKitty(171989438, coo, {from: coo,value: 0});
await instance.createPromoKitty(608021302, coo, {from: coo,value: 0});
await instance.createPromoKitty(210662025, coo, {from: coo,value: 0});
await instance.createPromoKitty(770290358, coo, {from: coo,value: 0});
await instance.createPromoKitty(244559275, coo, {from: coo,value: 0});
await instance.createPromoKitty(179011076, coo, {from: coo,value: 0});
await instance.createPromoKitty(686929208, coo, {from: coo,value: 0});
await instance.createPromoKitty(602003845, coo, {from: coo,value: 0});
await instance.createPromoKitty(326456509, coo, {from: coo,value: 0});
await instance.createPromoKitty(525637112, coo, {from: coo,value: 0});
await instance.createPromoKitty(206076262, coo, {from: coo,value: 0});
await instance.createPromoKitty(202360404, coo, {from: coo,value: 0});
await instance.createPromoKitty(542402283, coo, {from: coo,value: 0});
await instance.createPromoKitty(317364332, coo, {from: coo,value: 0});
await instance.createPromoKitty(266818998, coo, {from: coo,value: 0});
await instance.createPromoKitty(755790463, coo, {from: coo,value: 0});
await instance.createPromoKitty(935848517, coo, {from: coo,value: 0});
await instance.createPromoKitty(210399094, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(15, 19, {from: coo});
await instance.breedWith(17, 21, {from: coo});
await instance.breedWith(24, 22, {from: coo});
await instance.breedWith(33, 8, {from: coo});
await instance.breedWith(34, 40, {from: coo});
await instance.breedWith(1, 38, {from: coo});
await instance.breedWith(35, 4, {from: coo});
await instance.breedWith(28, 13, {from: coo});
await instance.breedWith(37, 20, {from: coo});
await instance.breedWith(23, 9, {from: coo});
await instance.breedWith(5, 7, {from: coo});
await instance.breedWith(32, 36, {from: coo});
await instance.breedWith(11, 6, {from: coo});
await instance.breedWith(10, 16, {from: coo});
await instance.breedWith(26, 2, {from: coo});
await instance.breedWith(30, 29, {from: coo});
await instance.breedWith(18, 3, {from: coo});
await instance.breedWith(27, 31, {from: coo});
await instance.breedWith(14, 12, {from: coo});
await instance.breedWith(25, 39, {from: coo});
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
await instance.giveBirth(17);
await instance.giveBirth(24);
await instance.giveBirth(33);
await instance.giveBirth(34);
await instance.giveBirth(1);
await instance.giveBirth(35);
await instance.giveBirth(28);
await instance.giveBirth(37);
await instance.giveBirth(23);
await instance.giveBirth(5);
await instance.giveBirth(32);
await instance.giveBirth(11);
await instance.giveBirth(10);
await instance.giveBirth(26);
await instance.giveBirth(30);
await instance.giveBirth(18);
await instance.giveBirth(27);
await instance.giveBirth(14);
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
