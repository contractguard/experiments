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
await instance.createPromoKitty(326149218, coo, {from: coo,value: 0});
await instance.createPromoKitty(755126868, coo, {from: coo,value: 0});
await instance.createPromoKitty(391724568, coo, {from: coo,value: 0});
await instance.createPromoKitty(181349904, coo, {from: coo,value: 0});
await instance.createPromoKitty(497289189, coo, {from: coo,value: 0});
await instance.createPromoKitty(397613777, coo, {from: coo,value: 0});
await instance.createPromoKitty(121438246, coo, {from: coo,value: 0});
await instance.createPromoKitty(474033618, coo, {from: coo,value: 0});
await instance.createPromoKitty(314913083, coo, {from: coo,value: 0});
await instance.createPromoKitty(920226473, coo, {from: coo,value: 0});
await instance.createPromoKitty(791297498, coo, {from: coo,value: 0});
await instance.createPromoKitty(800950113, coo, {from: coo,value: 0});
await instance.createPromoKitty(745589386, coo, {from: coo,value: 0});
await instance.createPromoKitty(629411893, coo, {from: coo,value: 0});
await instance.createPromoKitty(234146766, coo, {from: coo,value: 0});
await instance.createPromoKitty(667677081, coo, {from: coo,value: 0});
await instance.createPromoKitty(256495575, coo, {from: coo,value: 0});
await instance.createPromoKitty(993517717, coo, {from: coo,value: 0});
await instance.createPromoKitty(650022558, coo, {from: coo,value: 0});
await instance.createPromoKitty(404227027, coo, {from: coo,value: 0});
await instance.createPromoKitty(196069265, coo, {from: coo,value: 0});
await instance.createPromoKitty(245674493, coo, {from: coo,value: 0});
await instance.createPromoKitty(466150795, coo, {from: coo,value: 0});
await instance.createPromoKitty(283992335, coo, {from: coo,value: 0});
await instance.createPromoKitty(511870840, coo, {from: coo,value: 0});
await instance.createPromoKitty(997773094, coo, {from: coo,value: 0});
await instance.createPromoKitty(227177851, coo, {from: coo,value: 0});
await instance.createPromoKitty(81213400, coo, {from: coo,value: 0});
await instance.createPromoKitty(496661785, coo, {from: coo,value: 0});
await instance.createPromoKitty(236032499, coo, {from: coo,value: 0});
await instance.createPromoKitty(808339544, coo, {from: coo,value: 0});
await instance.createPromoKitty(857273450, coo, {from: coo,value: 0});
await instance.createPromoKitty(738743111, coo, {from: coo,value: 0});
await instance.createPromoKitty(185410071, coo, {from: coo,value: 0});
await instance.createPromoKitty(365101440, coo, {from: coo,value: 0});
await instance.createPromoKitty(480561121, coo, {from: coo,value: 0});
await instance.createPromoKitty(589379987, coo, {from: coo,value: 0});
await instance.createPromoKitty(264339924, coo, {from: coo,value: 0});
await instance.createPromoKitty(276819300, coo, {from: coo,value: 0});
await instance.createPromoKitty(856910716, coo, {from: coo,value: 0});
await instance.createPromoKitty(790171448, coo, {from: coo,value: 0});
await instance.createPromoKitty(883426327, coo, {from: coo,value: 0});
await instance.createPromoKitty(101749859, coo, {from: coo,value: 0});
await instance.createPromoKitty(396109921, coo, {from: coo,value: 0});
await instance.createPromoKitty(862643861, coo, {from: coo,value: 0});
await instance.createPromoKitty(849741476, coo, {from: coo,value: 0});
await instance.createPromoKitty(984885669, coo, {from: coo,value: 0});
await instance.createPromoKitty(641013294, coo, {from: coo,value: 0});
await instance.createPromoKitty(237990135, coo, {from: coo,value: 0});
await instance.createPromoKitty(706321572, coo, {from: coo,value: 0});
await instance.createPromoKitty(944304423, coo, {from: coo,value: 0});
await instance.createPromoKitty(618649655, coo, {from: coo,value: 0});
await instance.createPromoKitty(108068675, coo, {from: coo,value: 0});
await instance.createPromoKitty(758948960, coo, {from: coo,value: 0});
await instance.createPromoKitty(102336728, coo, {from: coo,value: 0});
await instance.createPromoKitty(429283430, coo, {from: coo,value: 0});
await instance.createPromoKitty(550150802, coo, {from: coo,value: 0});
await instance.createPromoKitty(662914582, coo, {from: coo,value: 0});
await instance.createPromoKitty(77228040, coo, {from: coo,value: 0});
await instance.createPromoKitty(517143099, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(16, 2, {from: coo});
await instance.breedWith(4, 18, {from: coo});
await instance.breedWith(30, 27, {from: coo});
await instance.breedWith(31, 15, {from: coo});
await instance.breedWith(25, 39, {from: coo});
await instance.breedWith(36, 35, {from: coo});
await instance.breedWith(3, 28, {from: coo});
await instance.breedWith(17, 26, {from: coo});
await instance.breedWith(11, 7, {from: coo});
await instance.breedWith(32, 21, {from: coo});
await instance.breedWith(19, 40, {from: coo});
await instance.breedWith(8, 6, {from: coo});
await instance.breedWith(23, 13, {from: coo});
await instance.breedWith(24, 10, {from: coo});
await instance.breedWith(14, 37, {from: coo});
await instance.breedWith(1, 38, {from: coo});
await instance.breedWith(22, 33, {from: coo});
await instance.breedWith(12, 5, {from: coo});
await instance.breedWith(34, 9, {from: coo});
await instance.breedWith(20, 29, {from: coo});
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
await instance.giveBirth(16);
await instance.giveBirth(4);
await instance.giveBirth(30);
await instance.giveBirth(31);
await instance.giveBirth(25);
await instance.giveBirth(36);
await instance.giveBirth(3);
await instance.giveBirth(17);
await instance.giveBirth(11);
await instance.giveBirth(32);
await instance.giveBirth(19);
await instance.giveBirth(8);
await instance.giveBirth(23);
await instance.giveBirth(24);
await instance.giveBirth(14);
await instance.giveBirth(1);
await instance.giveBirth(22);
await instance.giveBirth(12);
await instance.giveBirth(34);
await instance.giveBirth(20);
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
