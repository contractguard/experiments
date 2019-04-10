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
await instance.createPromoKitty(504654136, coo, {from: coo,value: 0});
await instance.createPromoKitty(536596346, coo, {from: coo,value: 0});
await instance.createPromoKitty(909660, coo, {from: coo,value: 0});
await instance.createPromoKitty(123422720, coo, {from: coo,value: 0});
await instance.createPromoKitty(202516952, coo, {from: coo,value: 0});
await instance.createPromoKitty(89347075, coo, {from: coo,value: 0});
await instance.createPromoKitty(388721369, coo, {from: coo,value: 0});
await instance.createPromoKitty(802539066, coo, {from: coo,value: 0});
await instance.createPromoKitty(836862715, coo, {from: coo,value: 0});
await instance.createPromoKitty(253404876, coo, {from: coo,value: 0});
await instance.createPromoKitty(88879309, coo, {from: coo,value: 0});
await instance.createPromoKitty(963894135, coo, {from: coo,value: 0});
await instance.createPromoKitty(20385452, coo, {from: coo,value: 0});
await instance.createPromoKitty(808132044, coo, {from: coo,value: 0});
await instance.createPromoKitty(259902641, coo, {from: coo,value: 0});
await instance.createPromoKitty(394770524, coo, {from: coo,value: 0});
await instance.createPromoKitty(757415300, coo, {from: coo,value: 0});
await instance.createPromoKitty(112066376, coo, {from: coo,value: 0});
await instance.createPromoKitty(277558244, coo, {from: coo,value: 0});
await instance.createPromoKitty(118373640, coo, {from: coo,value: 0});
await instance.createPromoKitty(518357597, coo, {from: coo,value: 0});
await instance.createPromoKitty(398351728, coo, {from: coo,value: 0});
await instance.createPromoKitty(102244339, coo, {from: coo,value: 0});
await instance.createPromoKitty(794729075, coo, {from: coo,value: 0});
await instance.createPromoKitty(811113796, coo, {from: coo,value: 0});
await instance.createPromoKitty(373099263, coo, {from: coo,value: 0});
await instance.createPromoKitty(151585263, coo, {from: coo,value: 0});
await instance.createPromoKitty(512985403, coo, {from: coo,value: 0});
await instance.createPromoKitty(460181695, coo, {from: coo,value: 0});
await instance.createPromoKitty(229909005, coo, {from: coo,value: 0});
await instance.createPromoKitty(191126833, coo, {from: coo,value: 0});
await instance.createPromoKitty(813640858, coo, {from: coo,value: 0});
await instance.createPromoKitty(381476916, coo, {from: coo,value: 0});
await instance.createPromoKitty(497565242, coo, {from: coo,value: 0});
await instance.createPromoKitty(614457744, coo, {from: coo,value: 0});
await instance.createPromoKitty(24214672, coo, {from: coo,value: 0});
await instance.createPromoKitty(670400933, coo, {from: coo,value: 0});
await instance.createPromoKitty(376063724, coo, {from: coo,value: 0});
await instance.createPromoKitty(279417056, coo, {from: coo,value: 0});
await instance.createPromoKitty(415880510, coo, {from: coo,value: 0});
await instance.createPromoKitty(933938685, coo, {from: coo,value: 0});
await instance.createPromoKitty(913213790, coo, {from: coo,value: 0});
await instance.createPromoKitty(42560353, coo, {from: coo,value: 0});
await instance.createPromoKitty(246858471, coo, {from: coo,value: 0});
await instance.createPromoKitty(591094124, coo, {from: coo,value: 0});
await instance.createPromoKitty(469932227, coo, {from: coo,value: 0});
await instance.createPromoKitty(525578559, coo, {from: coo,value: 0});
await instance.createPromoKitty(83216819, coo, {from: coo,value: 0});
await instance.createPromoKitty(844561888, coo, {from: coo,value: 0});
await instance.createPromoKitty(305642597, coo, {from: coo,value: 0});
await instance.createPromoKitty(161976129, coo, {from: coo,value: 0});
await instance.createPromoKitty(391458628, coo, {from: coo,value: 0});
await instance.createPromoKitty(337279265, coo, {from: coo,value: 0});
await instance.createPromoKitty(118082784, coo, {from: coo,value: 0});
await instance.createPromoKitty(45959063, coo, {from: coo,value: 0});
await instance.createPromoKitty(332709141, coo, {from: coo,value: 0});
await instance.createPromoKitty(650581933, coo, {from: coo,value: 0});
await instance.createPromoKitty(264816942, coo, {from: coo,value: 0});
await instance.createPromoKitty(563299839, coo, {from: coo,value: 0});
await instance.createPromoKitty(739238769, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(9, 35, {from: coo});
await instance.breedWith(8, 20, {from: coo});
await instance.breedWith(22, 30, {from: coo});
await instance.breedWith(28, 36, {from: coo});
await instance.breedWith(7, 10, {from: coo});
await instance.breedWith(40, 29, {from: coo});
await instance.breedWith(27, 31, {from: coo});
await instance.breedWith(39, 24, {from: coo});
await instance.breedWith(33, 1, {from: coo});
await instance.breedWith(19, 34, {from: coo});
await instance.breedWith(13, 2, {from: coo});
await instance.breedWith(16, 21, {from: coo});
await instance.breedWith(14, 11, {from: coo});
await instance.breedWith(15, 3, {from: coo});
await instance.breedWith(12, 38, {from: coo});
await instance.breedWith(6, 4, {from: coo});
await instance.breedWith(26, 18, {from: coo});
await instance.breedWith(25, 17, {from: coo});
await instance.breedWith(23, 32, {from: coo});
await instance.breedWith(37, 5, {from: coo});
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
await instance.giveBirth(9);
await instance.giveBirth(8);
await instance.giveBirth(22);
await instance.giveBirth(28);
await instance.giveBirth(7);
await instance.giveBirth(40);
await instance.giveBirth(27);
await instance.giveBirth(39);
await instance.giveBirth(33);
await instance.giveBirth(19);
await instance.giveBirth(13);
await instance.giveBirth(16);
await instance.giveBirth(14);
await instance.giveBirth(15);
await instance.giveBirth(12);
await instance.giveBirth(6);
await instance.giveBirth(26);
await instance.giveBirth(25);
await instance.giveBirth(23);
await instance.giveBirth(37);
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
