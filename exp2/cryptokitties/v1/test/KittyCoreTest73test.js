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
await instance.createPromoKitty(69025151, coo, {from: coo,value: 0});
await instance.createPromoKitty(169667570, coo, {from: coo,value: 0});
await instance.createPromoKitty(711357441, coo, {from: coo,value: 0});
await instance.createPromoKitty(591501023, coo, {from: coo,value: 0});
await instance.createPromoKitty(714857329, coo, {from: coo,value: 0});
await instance.createPromoKitty(742450224, coo, {from: coo,value: 0});
await instance.createPromoKitty(763758126, coo, {from: coo,value: 0});
await instance.createPromoKitty(806547974, coo, {from: coo,value: 0});
await instance.createPromoKitty(89363632, coo, {from: coo,value: 0});
await instance.createPromoKitty(429723670, coo, {from: coo,value: 0});
await instance.createPromoKitty(401377607, coo, {from: coo,value: 0});
await instance.createPromoKitty(483604681, coo, {from: coo,value: 0});
await instance.createPromoKitty(439207524, coo, {from: coo,value: 0});
await instance.createPromoKitty(612086716, coo, {from: coo,value: 0});
await instance.createPromoKitty(428550339, coo, {from: coo,value: 0});
await instance.createPromoKitty(77298600, coo, {from: coo,value: 0});
await instance.createPromoKitty(478681904, coo, {from: coo,value: 0});
await instance.createPromoKitty(198786640, coo, {from: coo,value: 0});
await instance.createPromoKitty(630946741, coo, {from: coo,value: 0});
await instance.createPromoKitty(295430247, coo, {from: coo,value: 0});
await instance.createPromoKitty(30827940, coo, {from: coo,value: 0});
await instance.createPromoKitty(907236911, coo, {from: coo,value: 0});
await instance.createPromoKitty(916654107, coo, {from: coo,value: 0});
await instance.createPromoKitty(365025020, coo, {from: coo,value: 0});
await instance.createPromoKitty(837418467, coo, {from: coo,value: 0});
await instance.createPromoKitty(759181522, coo, {from: coo,value: 0});
await instance.createPromoKitty(715488195, coo, {from: coo,value: 0});
await instance.createPromoKitty(789896493, coo, {from: coo,value: 0});
await instance.createPromoKitty(675747912, coo, {from: coo,value: 0});
await instance.createPromoKitty(732084892, coo, {from: coo,value: 0});
await instance.createPromoKitty(465388271, coo, {from: coo,value: 0});
await instance.createPromoKitty(835210205, coo, {from: coo,value: 0});
await instance.createPromoKitty(841636653, coo, {from: coo,value: 0});
await instance.createPromoKitty(649556508, coo, {from: coo,value: 0});
await instance.createPromoKitty(925375978, coo, {from: coo,value: 0});
await instance.createPromoKitty(811070424, coo, {from: coo,value: 0});
await instance.createPromoKitty(128582007, coo, {from: coo,value: 0});
await instance.createPromoKitty(387793890, coo, {from: coo,value: 0});
await instance.createPromoKitty(184417666, coo, {from: coo,value: 0});
await instance.createPromoKitty(982278633, coo, {from: coo,value: 0});
await instance.createPromoKitty(933120702, coo, {from: coo,value: 0});
await instance.createPromoKitty(141006809, coo, {from: coo,value: 0});
await instance.createPromoKitty(303776473, coo, {from: coo,value: 0});
await instance.createPromoKitty(86662707, coo, {from: coo,value: 0});
await instance.createPromoKitty(638000642, coo, {from: coo,value: 0});
await instance.createPromoKitty(989525080, coo, {from: coo,value: 0});
await instance.createPromoKitty(862350927, coo, {from: coo,value: 0});
await instance.createPromoKitty(41711067, coo, {from: coo,value: 0});
await instance.createPromoKitty(586675834, coo, {from: coo,value: 0});
await instance.createPromoKitty(136654878, coo, {from: coo,value: 0});
await instance.createPromoKitty(903238980, coo, {from: coo,value: 0});
await instance.createPromoKitty(55707296, coo, {from: coo,value: 0});
await instance.createPromoKitty(643358901, coo, {from: coo,value: 0});
await instance.createPromoKitty(508517109, coo, {from: coo,value: 0});
await instance.createPromoKitty(403910014, coo, {from: coo,value: 0});
await instance.createPromoKitty(258067659, coo, {from: coo,value: 0});
await instance.createPromoKitty(30614694, coo, {from: coo,value: 0});
await instance.createPromoKitty(868283482, coo, {from: coo,value: 0});
await instance.createPromoKitty(638928671, coo, {from: coo,value: 0});
await instance.createPromoKitty(676351452, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(40, 2, {from: coo});
await instance.breedWith(25, 31, {from: coo});
await instance.breedWith(14, 26, {from: coo});
await instance.breedWith(11, 22, {from: coo});
await instance.breedWith(1, 16, {from: coo});
await instance.breedWith(17, 19, {from: coo});
await instance.breedWith(28, 13, {from: coo});
await instance.breedWith(12, 21, {from: coo});
await instance.breedWith(38, 9, {from: coo});
await instance.breedWith(33, 32, {from: coo});
await instance.breedWith(5, 4, {from: coo});
await instance.breedWith(20, 39, {from: coo});
await instance.breedWith(24, 8, {from: coo});
await instance.breedWith(34, 3, {from: coo});
await instance.breedWith(27, 37, {from: coo});
await instance.breedWith(10, 7, {from: coo});
await instance.breedWith(6, 23, {from: coo});
await instance.breedWith(35, 15, {from: coo});
await instance.breedWith(30, 36, {from: coo});
await instance.breedWith(29, 18, {from: coo});
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
await instance.giveBirth(40);
await instance.giveBirth(25);
await instance.giveBirth(14);
await instance.giveBirth(11);
await instance.giveBirth(1);
await instance.giveBirth(17);
await instance.giveBirth(28);
await instance.giveBirth(12);
await instance.giveBirth(38);
await instance.giveBirth(33);
await instance.giveBirth(5);
await instance.giveBirth(20);
await instance.giveBirth(24);
await instance.giveBirth(34);
await instance.giveBirth(27);
await instance.giveBirth(10);
await instance.giveBirth(6);
await instance.giveBirth(35);
await instance.giveBirth(30);
await instance.giveBirth(29);
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
