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
await instance.createPromoKitty(348240895, coo, {from: coo,value: 0});
await instance.createPromoKitty(142454084, coo, {from: coo,value: 0});
await instance.createPromoKitty(989912115, coo, {from: coo,value: 0});
await instance.createPromoKitty(538166190, coo, {from: coo,value: 0});
await instance.createPromoKitty(394914016, coo, {from: coo,value: 0});
await instance.createPromoKitty(734256704, coo, {from: coo,value: 0});
await instance.createPromoKitty(52355553, coo, {from: coo,value: 0});
await instance.createPromoKitty(767379514, coo, {from: coo,value: 0});
await instance.createPromoKitty(739538670, coo, {from: coo,value: 0});
await instance.createPromoKitty(636463971, coo, {from: coo,value: 0});
await instance.createPromoKitty(253487664, coo, {from: coo,value: 0});
await instance.createPromoKitty(168119637, coo, {from: coo,value: 0});
await instance.createPromoKitty(290081774, coo, {from: coo,value: 0});
await instance.createPromoKitty(700918962, coo, {from: coo,value: 0});
await instance.createPromoKitty(963768637, coo, {from: coo,value: 0});
await instance.createPromoKitty(363381097, coo, {from: coo,value: 0});
await instance.createPromoKitty(944454155, coo, {from: coo,value: 0});
await instance.createPromoKitty(691045538, coo, {from: coo,value: 0});
await instance.createPromoKitty(729286746, coo, {from: coo,value: 0});
await instance.createPromoKitty(373531670, coo, {from: coo,value: 0});
await instance.createPromoKitty(918456737, coo, {from: coo,value: 0});
await instance.createPromoKitty(988489855, coo, {from: coo,value: 0});
await instance.createPromoKitty(370022911, coo, {from: coo,value: 0});
await instance.createPromoKitty(215897507, coo, {from: coo,value: 0});
await instance.createPromoKitty(547493234, coo, {from: coo,value: 0});
await instance.createPromoKitty(265805184, coo, {from: coo,value: 0});
await instance.createPromoKitty(714441345, coo, {from: coo,value: 0});
await instance.createPromoKitty(679149232, coo, {from: coo,value: 0});
await instance.createPromoKitty(454503084, coo, {from: coo,value: 0});
await instance.createPromoKitty(677782670, coo, {from: coo,value: 0});
await instance.createPromoKitty(260525675, coo, {from: coo,value: 0});
await instance.createPromoKitty(648222749, coo, {from: coo,value: 0});
await instance.createPromoKitty(545652417, coo, {from: coo,value: 0});
await instance.createPromoKitty(256103811, coo, {from: coo,value: 0});
await instance.createPromoKitty(355745455, coo, {from: coo,value: 0});
await instance.createPromoKitty(924175071, coo, {from: coo,value: 0});
await instance.createPromoKitty(880561802, coo, {from: coo,value: 0});
await instance.createPromoKitty(532161580, coo, {from: coo,value: 0});
await instance.createPromoKitty(631223881, coo, {from: coo,value: 0});
await instance.createPromoKitty(941281236, coo, {from: coo,value: 0});
await instance.createPromoKitty(226978248, coo, {from: coo,value: 0});
await instance.createPromoKitty(123761629, coo, {from: coo,value: 0});
await instance.createPromoKitty(33527928, coo, {from: coo,value: 0});
await instance.createPromoKitty(69676180, coo, {from: coo,value: 0});
await instance.createPromoKitty(714079539, coo, {from: coo,value: 0});
await instance.createPromoKitty(145047055, coo, {from: coo,value: 0});
await instance.createPromoKitty(243564481, coo, {from: coo,value: 0});
await instance.createPromoKitty(42701691, coo, {from: coo,value: 0});
await instance.createPromoKitty(970880153, coo, {from: coo,value: 0});
await instance.createPromoKitty(194547763, coo, {from: coo,value: 0});
await instance.createPromoKitty(100845568, coo, {from: coo,value: 0});
await instance.createPromoKitty(783986817, coo, {from: coo,value: 0});
await instance.createPromoKitty(246414663, coo, {from: coo,value: 0});
await instance.createPromoKitty(492266820, coo, {from: coo,value: 0});
await instance.createPromoKitty(6107046, coo, {from: coo,value: 0});
await instance.createPromoKitty(357747403, coo, {from: coo,value: 0});
await instance.createPromoKitty(897421572, coo, {from: coo,value: 0});
await instance.createPromoKitty(634477479, coo, {from: coo,value: 0});
await instance.createPromoKitty(965009699, coo, {from: coo,value: 0});
await instance.createPromoKitty(221519358, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(18, 20, {from: coo});
await instance.breedWith(23, 31, {from: coo});
await instance.breedWith(36, 17, {from: coo});
await instance.breedWith(21, 37, {from: coo});
await instance.breedWith(14, 29, {from: coo});
await instance.breedWith(35, 25, {from: coo});
await instance.breedWith(4, 5, {from: coo});
await instance.breedWith(12, 3, {from: coo});
await instance.breedWith(40, 11, {from: coo});
await instance.breedWith(1, 26, {from: coo});
await instance.breedWith(6, 24, {from: coo});
await instance.breedWith(19, 10, {from: coo});
await instance.breedWith(34, 22, {from: coo});
await instance.breedWith(15, 2, {from: coo});
await instance.breedWith(28, 9, {from: coo});
await instance.breedWith(13, 32, {from: coo});
await instance.breedWith(8, 39, {from: coo});
await instance.breedWith(27, 38, {from: coo});
await instance.breedWith(33, 30, {from: coo});
await instance.breedWith(7, 16, {from: coo});
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
await instance.giveBirth(18);
await instance.giveBirth(23);
await instance.giveBirth(36);
await instance.giveBirth(21);
await instance.giveBirth(14);
await instance.giveBirth(35);
await instance.giveBirth(4);
await instance.giveBirth(12);
await instance.giveBirth(40);
await instance.giveBirth(1);
await instance.giveBirth(6);
await instance.giveBirth(19);
await instance.giveBirth(34);
await instance.giveBirth(15);
await instance.giveBirth(28);
await instance.giveBirth(13);
await instance.giveBirth(8);
await instance.giveBirth(27);
await instance.giveBirth(33);
await instance.giveBirth(7);
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
// let Kit5 = await test_subjec.t_KittyCore.createPromoKitty(n4, accounts[3], {from: coo, gas: 400000, gasPrice: 1100000000, value:0});
//console.log(Kit1.logs);

//培养第一代 kitty5
await instance.breedWith(55, 56, {from: coo});
await util.forwardEVMTime(cooldowns[0]);
await instance.giveBirth(55);

//培育第二代
await instance.breedWith(57, 59, {from: coo});
await util.forwardEVMTime(cooldowns[0]);});
it('attack', async() => {
 let result_Gen2 = await instance.giveBirth(57);
});
});
