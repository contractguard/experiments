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
await instance.createPromoKitty(657155558, coo, {from: coo,value: 0});
await instance.createPromoKitty(966938401, coo, {from: coo,value: 0});
await instance.createPromoKitty(99880903, coo, {from: coo,value: 0});
await instance.createPromoKitty(362233215, coo, {from: coo,value: 0});
await instance.createPromoKitty(59160332, coo, {from: coo,value: 0});
await instance.createPromoKitty(210207888, coo, {from: coo,value: 0});
await instance.createPromoKitty(661378708, coo, {from: coo,value: 0});
await instance.createPromoKitty(517259792, coo, {from: coo,value: 0});
await instance.createPromoKitty(74461739, coo, {from: coo,value: 0});
await instance.createPromoKitty(136923230, coo, {from: coo,value: 0});
await instance.createPromoKitty(489661161, coo, {from: coo,value: 0});
await instance.createPromoKitty(733843573, coo, {from: coo,value: 0});
await instance.createPromoKitty(590697453, coo, {from: coo,value: 0});
await instance.createPromoKitty(621948658, coo, {from: coo,value: 0});
await instance.createPromoKitty(790966349, coo, {from: coo,value: 0});
await instance.createPromoKitty(143845216, coo, {from: coo,value: 0});
await instance.createPromoKitty(339654140, coo, {from: coo,value: 0});
await instance.createPromoKitty(768487273, coo, {from: coo,value: 0});
await instance.createPromoKitty(85409979, coo, {from: coo,value: 0});
await instance.createPromoKitty(233400598, coo, {from: coo,value: 0});
await instance.createPromoKitty(206588974, coo, {from: coo,value: 0});
await instance.createPromoKitty(987858254, coo, {from: coo,value: 0});
await instance.createPromoKitty(344952690, coo, {from: coo,value: 0});
await instance.createPromoKitty(626237865, coo, {from: coo,value: 0});
await instance.createPromoKitty(970345074, coo, {from: coo,value: 0});
await instance.createPromoKitty(393237390, coo, {from: coo,value: 0});
await instance.createPromoKitty(351160438, coo, {from: coo,value: 0});
await instance.createPromoKitty(663415916, coo, {from: coo,value: 0});
await instance.createPromoKitty(807773712, coo, {from: coo,value: 0});
await instance.createPromoKitty(653469786, coo, {from: coo,value: 0});
await instance.createPromoKitty(589419275, coo, {from: coo,value: 0});
await instance.createPromoKitty(466220449, coo, {from: coo,value: 0});
await instance.createPromoKitty(542828801, coo, {from: coo,value: 0});
await instance.createPromoKitty(606179371, coo, {from: coo,value: 0});
await instance.createPromoKitty(414225036, coo, {from: coo,value: 0});
await instance.createPromoKitty(484054886, coo, {from: coo,value: 0});
await instance.createPromoKitty(333607156, coo, {from: coo,value: 0});
await instance.createPromoKitty(885809644, coo, {from: coo,value: 0});
await instance.createPromoKitty(948083939, coo, {from: coo,value: 0});
await instance.createPromoKitty(765791940, coo, {from: coo,value: 0});
await instance.createPromoKitty(552756976, coo, {from: coo,value: 0});
await instance.createPromoKitty(883871251, coo, {from: coo,value: 0});
await instance.createPromoKitty(688020726, coo, {from: coo,value: 0});
await instance.createPromoKitty(448721932, coo, {from: coo,value: 0});
await instance.createPromoKitty(819402418, coo, {from: coo,value: 0});
await instance.createPromoKitty(584215216, coo, {from: coo,value: 0});
await instance.createPromoKitty(476491449, coo, {from: coo,value: 0});
await instance.createPromoKitty(442271225, coo, {from: coo,value: 0});
await instance.createPromoKitty(659280762, coo, {from: coo,value: 0});
await instance.createPromoKitty(560078041, coo, {from: coo,value: 0});
await instance.createPromoKitty(959540191, coo, {from: coo,value: 0});
await instance.createPromoKitty(422021061, coo, {from: coo,value: 0});
await instance.createPromoKitty(182643625, coo, {from: coo,value: 0});
await instance.createPromoKitty(647558713, coo, {from: coo,value: 0});
await instance.createPromoKitty(616645281, coo, {from: coo,value: 0});
await instance.createPromoKitty(605077091, coo, {from: coo,value: 0});
await instance.createPromoKitty(140094910, coo, {from: coo,value: 0});
await instance.createPromoKitty(890071507, coo, {from: coo,value: 0});
await instance.createPromoKitty(200372106, coo, {from: coo,value: 0});
await instance.createPromoKitty(683284464, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(34, 38, {from: coo});
await instance.breedWith(23, 15, {from: coo});
await instance.breedWith(6, 12, {from: coo});
await instance.breedWith(27, 33, {from: coo});
await instance.breedWith(30, 16, {from: coo});
await instance.breedWith(37, 21, {from: coo});
await instance.breedWith(28, 26, {from: coo});
await instance.breedWith(8, 40, {from: coo});
await instance.breedWith(2, 5, {from: coo});
await instance.breedWith(3, 32, {from: coo});
await instance.breedWith(36, 13, {from: coo});
await instance.breedWith(35, 24, {from: coo});
await instance.breedWith(11, 17, {from: coo});
await instance.breedWith(29, 20, {from: coo});
await instance.breedWith(9, 14, {from: coo});
await instance.breedWith(10, 4, {from: coo});
await instance.breedWith(31, 19, {from: coo});
await instance.breedWith(1, 22, {from: coo});
await instance.breedWith(7, 18, {from: coo});
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
await instance.pause();
await instance.unpause();
await instance.giveBirth(34);
await instance.giveBirth(23);
await instance.giveBirth(6);
await instance.giveBirth(27);
await instance.giveBirth(30);
await instance.giveBirth(37);
await instance.giveBirth(28);
await instance.giveBirth(8);
await instance.giveBirth(2);
await instance.giveBirth(3);
await instance.giveBirth(36);
await instance.giveBirth(35);
await instance.giveBirth(11);
await instance.giveBirth(29);
await instance.giveBirth(9);
await instance.giveBirth(10);
await instance.giveBirth(31);
await instance.giveBirth(1);
await instance.giveBirth(7);
await instance.giveBirth(25);
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
