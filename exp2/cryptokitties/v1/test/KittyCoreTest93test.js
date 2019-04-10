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
await instance.createPromoKitty(303460042, coo, {from: coo,value: 0});
await instance.createPromoKitty(866206471, coo, {from: coo,value: 0});
await instance.createPromoKitty(56066775, coo, {from: coo,value: 0});
await instance.createPromoKitty(258831027, coo, {from: coo,value: 0});
await instance.createPromoKitty(958891452, coo, {from: coo,value: 0});
await instance.createPromoKitty(425470868, coo, {from: coo,value: 0});
await instance.createPromoKitty(597048841, coo, {from: coo,value: 0});
await instance.createPromoKitty(368246997, coo, {from: coo,value: 0});
await instance.createPromoKitty(535553205, coo, {from: coo,value: 0});
await instance.createPromoKitty(391903568, coo, {from: coo,value: 0});
await instance.createPromoKitty(352682674, coo, {from: coo,value: 0});
await instance.createPromoKitty(92815505, coo, {from: coo,value: 0});
await instance.createPromoKitty(915622092, coo, {from: coo,value: 0});
await instance.createPromoKitty(608689032, coo, {from: coo,value: 0});
await instance.createPromoKitty(635338197, coo, {from: coo,value: 0});
await instance.createPromoKitty(299044454, coo, {from: coo,value: 0});
await instance.createPromoKitty(409407065, coo, {from: coo,value: 0});
await instance.createPromoKitty(970019065, coo, {from: coo,value: 0});
await instance.createPromoKitty(3332343, coo, {from: coo,value: 0});
await instance.createPromoKitty(509477757, coo, {from: coo,value: 0});
await instance.createPromoKitty(856736953, coo, {from: coo,value: 0});
await instance.createPromoKitty(676339910, coo, {from: coo,value: 0});
await instance.createPromoKitty(896539831, coo, {from: coo,value: 0});
await instance.createPromoKitty(172653675, coo, {from: coo,value: 0});
await instance.createPromoKitty(10124823, coo, {from: coo,value: 0});
await instance.createPromoKitty(473685003, coo, {from: coo,value: 0});
await instance.createPromoKitty(531887582, coo, {from: coo,value: 0});
await instance.createPromoKitty(440657143, coo, {from: coo,value: 0});
await instance.createPromoKitty(556560754, coo, {from: coo,value: 0});
await instance.createPromoKitty(378423375, coo, {from: coo,value: 0});
await instance.createPromoKitty(156767687, coo, {from: coo,value: 0});
await instance.createPromoKitty(957528556, coo, {from: coo,value: 0});
await instance.createPromoKitty(291515171, coo, {from: coo,value: 0});
await instance.createPromoKitty(289420214, coo, {from: coo,value: 0});
await instance.createPromoKitty(191951489, coo, {from: coo,value: 0});
await instance.createPromoKitty(314981127, coo, {from: coo,value: 0});
await instance.createPromoKitty(29466461, coo, {from: coo,value: 0});
await instance.createPromoKitty(375995031, coo, {from: coo,value: 0});
await instance.createPromoKitty(855771156, coo, {from: coo,value: 0});
await instance.createPromoKitty(469904132, coo, {from: coo,value: 0});
await instance.createPromoKitty(158521983, coo, {from: coo,value: 0});
await instance.createPromoKitty(135715526, coo, {from: coo,value: 0});
await instance.createPromoKitty(176334738, coo, {from: coo,value: 0});
await instance.createPromoKitty(251259915, coo, {from: coo,value: 0});
await instance.createPromoKitty(91884934, coo, {from: coo,value: 0});
await instance.createPromoKitty(517849127, coo, {from: coo,value: 0});
await instance.createPromoKitty(68377966, coo, {from: coo,value: 0});
await instance.createPromoKitty(131708082, coo, {from: coo,value: 0});
await instance.createPromoKitty(129791047, coo, {from: coo,value: 0});
await instance.createPromoKitty(171499984, coo, {from: coo,value: 0});
await instance.createPromoKitty(66393411, coo, {from: coo,value: 0});
await instance.createPromoKitty(309296313, coo, {from: coo,value: 0});
await instance.createPromoKitty(748964571, coo, {from: coo,value: 0});
await instance.createPromoKitty(915379128, coo, {from: coo,value: 0});
await instance.createPromoKitty(260060208, coo, {from: coo,value: 0});
await instance.createPromoKitty(390592237, coo, {from: coo,value: 0});
await instance.createPromoKitty(86978122, coo, {from: coo,value: 0});
await instance.createPromoKitty(731515794, coo, {from: coo,value: 0});
await instance.createPromoKitty(158489470, coo, {from: coo,value: 0});
await instance.createPromoKitty(207649290, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(26, 17, {from: coo});
await instance.breedWith(27, 12, {from: coo});
await instance.breedWith(6, 4, {from: coo});
await instance.breedWith(40, 28, {from: coo});
await instance.breedWith(19, 14, {from: coo});
await instance.breedWith(7, 30, {from: coo});
await instance.breedWith(2, 32, {from: coo});
await instance.breedWith(24, 13, {from: coo});
await instance.breedWith(1, 35, {from: coo});
await instance.breedWith(8, 37, {from: coo});
await instance.breedWith(39, 33, {from: coo});
await instance.breedWith(25, 21, {from: coo});
await instance.breedWith(23, 36, {from: coo});
await instance.breedWith(34, 10, {from: coo});
await instance.breedWith(18, 11, {from: coo});
await instance.breedWith(29, 38, {from: coo});
await instance.breedWith(5, 20, {from: coo});
await instance.breedWith(31, 9, {from: coo});
await instance.breedWith(22, 16, {from: coo});
await instance.breedWith(3, 15, {from: coo});
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
await instance.giveBirth(26);
await instance.giveBirth(27);
await instance.giveBirth(6);
await instance.giveBirth(40);
await instance.giveBirth(19);
await instance.giveBirth(7);
await instance.giveBirth(2);
await instance.giveBirth(24);
await instance.giveBirth(1);
await instance.giveBirth(8);
await instance.giveBirth(39);
await instance.giveBirth(25);
await instance.giveBirth(23);
await instance.giveBirth(34);
await instance.giveBirth(18);
await instance.giveBirth(29);
await instance.giveBirth(5);
await instance.giveBirth(31);
await instance.giveBirth(22);
await instance.giveBirth(3);
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
