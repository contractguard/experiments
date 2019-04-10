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
await instance.createPromoKitty(187779430, coo, {from: coo,value: 0});
await instance.createPromoKitty(927057447, coo, {from: coo,value: 0});
await instance.createPromoKitty(768548952, coo, {from: coo,value: 0});
await instance.createPromoKitty(697998097, coo, {from: coo,value: 0});
await instance.createPromoKitty(478312122, coo, {from: coo,value: 0});
await instance.createPromoKitty(738382902, coo, {from: coo,value: 0});
await instance.createPromoKitty(80168571, coo, {from: coo,value: 0});
await instance.createPromoKitty(276078839, coo, {from: coo,value: 0});
await instance.createPromoKitty(154683262, coo, {from: coo,value: 0});
await instance.createPromoKitty(276774766, coo, {from: coo,value: 0});
await instance.createPromoKitty(252883959, coo, {from: coo,value: 0});
await instance.createPromoKitty(321938255, coo, {from: coo,value: 0});
await instance.createPromoKitty(579188264, coo, {from: coo,value: 0});
await instance.createPromoKitty(217417066, coo, {from: coo,value: 0});
await instance.createPromoKitty(388590716, coo, {from: coo,value: 0});
await instance.createPromoKitty(371103195, coo, {from: coo,value: 0});
await instance.createPromoKitty(575545982, coo, {from: coo,value: 0});
await instance.createPromoKitty(130802825, coo, {from: coo,value: 0});
await instance.createPromoKitty(175011382, coo, {from: coo,value: 0});
await instance.createPromoKitty(847752972, coo, {from: coo,value: 0});
await instance.createPromoKitty(960710634, coo, {from: coo,value: 0});
await instance.createPromoKitty(680323281, coo, {from: coo,value: 0});
await instance.createPromoKitty(666475113, coo, {from: coo,value: 0});
await instance.createPromoKitty(125595557, coo, {from: coo,value: 0});
await instance.createPromoKitty(544478, coo, {from: coo,value: 0});
await instance.createPromoKitty(378424067, coo, {from: coo,value: 0});
await instance.createPromoKitty(435380150, coo, {from: coo,value: 0});
await instance.createPromoKitty(272740922, coo, {from: coo,value: 0});
await instance.createPromoKitty(136078604, coo, {from: coo,value: 0});
await instance.createPromoKitty(952007321, coo, {from: coo,value: 0});
await instance.createPromoKitty(606761377, coo, {from: coo,value: 0});
await instance.createPromoKitty(997951457, coo, {from: coo,value: 0});
await instance.createPromoKitty(298794338, coo, {from: coo,value: 0});
await instance.createPromoKitty(30437811, coo, {from: coo,value: 0});
await instance.createPromoKitty(966373806, coo, {from: coo,value: 0});
await instance.createPromoKitty(167335380, coo, {from: coo,value: 0});
await instance.createPromoKitty(966530472, coo, {from: coo,value: 0});
await instance.createPromoKitty(387974762, coo, {from: coo,value: 0});
await instance.createPromoKitty(385305210, coo, {from: coo,value: 0});
await instance.createPromoKitty(948737237, coo, {from: coo,value: 0});
await instance.createPromoKitty(330253811, coo, {from: coo,value: 0});
await instance.createPromoKitty(996654515, coo, {from: coo,value: 0});
await instance.createPromoKitty(485913397, coo, {from: coo,value: 0});
await instance.createPromoKitty(80692051, coo, {from: coo,value: 0});
await instance.createPromoKitty(778622573, coo, {from: coo,value: 0});
await instance.createPromoKitty(860307849, coo, {from: coo,value: 0});
await instance.createPromoKitty(161454412, coo, {from: coo,value: 0});
await instance.createPromoKitty(835653455, coo, {from: coo,value: 0});
await instance.createPromoKitty(45729880, coo, {from: coo,value: 0});
await instance.createPromoKitty(702720524, coo, {from: coo,value: 0});
await instance.createPromoKitty(676376377, coo, {from: coo,value: 0});
await instance.createPromoKitty(879032401, coo, {from: coo,value: 0});
await instance.createPromoKitty(67216787, coo, {from: coo,value: 0});
await instance.createPromoKitty(491836449, coo, {from: coo,value: 0});
await instance.createPromoKitty(214931649, coo, {from: coo,value: 0});
await instance.createPromoKitty(121045626, coo, {from: coo,value: 0});
await instance.createPromoKitty(692894223, coo, {from: coo,value: 0});
await instance.createPromoKitty(174286901, coo, {from: coo,value: 0});
await instance.createPromoKitty(682726615, coo, {from: coo,value: 0});
await instance.createPromoKitty(10660198, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(10, 17, {from: coo});
await instance.breedWith(28, 32, {from: coo});
await instance.breedWith(23, 35, {from: coo});
await instance.breedWith(39, 29, {from: coo});
await instance.breedWith(18, 2, {from: coo});
await instance.breedWith(22, 20, {from: coo});
await instance.breedWith(33, 31, {from: coo});
await instance.breedWith(30, 12, {from: coo});
await instance.breedWith(4, 38, {from: coo});
await instance.breedWith(24, 19, {from: coo});
await instance.breedWith(37, 27, {from: coo});
await instance.breedWith(34, 16, {from: coo});
await instance.breedWith(36, 40, {from: coo});
await instance.breedWith(25, 3, {from: coo});
await instance.breedWith(5, 6, {from: coo});
await instance.breedWith(11, 26, {from: coo});
await instance.breedWith(15, 21, {from: coo});
await instance.breedWith(8, 9, {from: coo});
await instance.breedWith(1, 13, {from: coo});
await instance.breedWith(14, 7, {from: coo});
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
await instance.giveBirth(10);
await instance.giveBirth(28);
await instance.giveBirth(23);
await instance.giveBirth(39);
await instance.giveBirth(18);
await instance.giveBirth(22);
await instance.giveBirth(33);
await instance.giveBirth(30);
await instance.giveBirth(4);
await instance.giveBirth(24);
await instance.giveBirth(37);
await instance.giveBirth(34);
await instance.giveBirth(36);
await instance.giveBirth(25);
await instance.giveBirth(5);
await instance.giveBirth(11);
await instance.giveBirth(15);
await instance.giveBirth(8);
await instance.giveBirth(1);
await instance.giveBirth(14);
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
