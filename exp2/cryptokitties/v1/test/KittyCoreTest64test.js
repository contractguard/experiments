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
await instance.createPromoKitty(243440481, coo, {from: coo,value: 0});
await instance.createPromoKitty(856715399, coo, {from: coo,value: 0});
await instance.createPromoKitty(897271211, coo, {from: coo,value: 0});
await instance.createPromoKitty(303483041, coo, {from: coo,value: 0});
await instance.createPromoKitty(492872250, coo, {from: coo,value: 0});
await instance.createPromoKitty(499078716, coo, {from: coo,value: 0});
await instance.createPromoKitty(104717144, coo, {from: coo,value: 0});
await instance.createPromoKitty(612198211, coo, {from: coo,value: 0});
await instance.createPromoKitty(881640627, coo, {from: coo,value: 0});
await instance.createPromoKitty(153435924, coo, {from: coo,value: 0});
await instance.createPromoKitty(186690141, coo, {from: coo,value: 0});
await instance.createPromoKitty(955766530, coo, {from: coo,value: 0});
await instance.createPromoKitty(452497103, coo, {from: coo,value: 0});
await instance.createPromoKitty(436257238, coo, {from: coo,value: 0});
await instance.createPromoKitty(847498577, coo, {from: coo,value: 0});
await instance.createPromoKitty(463534236, coo, {from: coo,value: 0});
await instance.createPromoKitty(909366670, coo, {from: coo,value: 0});
await instance.createPromoKitty(698067631, coo, {from: coo,value: 0});
await instance.createPromoKitty(511969056, coo, {from: coo,value: 0});
await instance.createPromoKitty(441287018, coo, {from: coo,value: 0});
await instance.createPromoKitty(452609208, coo, {from: coo,value: 0});
await instance.createPromoKitty(654025400, coo, {from: coo,value: 0});
await instance.createPromoKitty(529421317, coo, {from: coo,value: 0});
await instance.createPromoKitty(108727137, coo, {from: coo,value: 0});
await instance.createPromoKitty(873088014, coo, {from: coo,value: 0});
await instance.createPromoKitty(228868079, coo, {from: coo,value: 0});
await instance.createPromoKitty(86403840, coo, {from: coo,value: 0});
await instance.createPromoKitty(49059701, coo, {from: coo,value: 0});
await instance.createPromoKitty(272322594, coo, {from: coo,value: 0});
await instance.createPromoKitty(166043943, coo, {from: coo,value: 0});
await instance.createPromoKitty(848225455, coo, {from: coo,value: 0});
await instance.createPromoKitty(56346052, coo, {from: coo,value: 0});
await instance.createPromoKitty(374406919, coo, {from: coo,value: 0});
await instance.createPromoKitty(179622859, coo, {from: coo,value: 0});
await instance.createPromoKitty(74743673, coo, {from: coo,value: 0});
await instance.createPromoKitty(387754662, coo, {from: coo,value: 0});
await instance.createPromoKitty(709408889, coo, {from: coo,value: 0});
await instance.createPromoKitty(79229025, coo, {from: coo,value: 0});
await instance.createPromoKitty(723992943, coo, {from: coo,value: 0});
await instance.createPromoKitty(923599086, coo, {from: coo,value: 0});
await instance.createPromoKitty(715663722, coo, {from: coo,value: 0});
await instance.createPromoKitty(713654152, coo, {from: coo,value: 0});
await instance.createPromoKitty(480710796, coo, {from: coo,value: 0});
await instance.createPromoKitty(42267727, coo, {from: coo,value: 0});
await instance.createPromoKitty(958457397, coo, {from: coo,value: 0});
await instance.createPromoKitty(797365729, coo, {from: coo,value: 0});
await instance.createPromoKitty(700562637, coo, {from: coo,value: 0});
await instance.createPromoKitty(648259143, coo, {from: coo,value: 0});
await instance.createPromoKitty(951757287, coo, {from: coo,value: 0});
await instance.createPromoKitty(13420039, coo, {from: coo,value: 0});
await instance.createPromoKitty(938852031, coo, {from: coo,value: 0});
await instance.createPromoKitty(488141683, coo, {from: coo,value: 0});
await instance.createPromoKitty(611339452, coo, {from: coo,value: 0});
await instance.createPromoKitty(303339040, coo, {from: coo,value: 0});
await instance.createPromoKitty(696780287, coo, {from: coo,value: 0});
await instance.createPromoKitty(128131417, coo, {from: coo,value: 0});
await instance.createPromoKitty(339322817, coo, {from: coo,value: 0});
await instance.createPromoKitty(605630348, coo, {from: coo,value: 0});
await instance.createPromoKitty(389393729, coo, {from: coo,value: 0});
await instance.createPromoKitty(960554583, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(2, 22, {from: coo});
await instance.breedWith(36, 10, {from: coo});
await instance.breedWith(14, 23, {from: coo});
await instance.breedWith(34, 3, {from: coo});
await instance.breedWith(19, 1, {from: coo});
await instance.breedWith(20, 18, {from: coo});
await instance.breedWith(35, 21, {from: coo});
await instance.breedWith(9, 30, {from: coo});
await instance.breedWith(24, 38, {from: coo});
await instance.breedWith(13, 29, {from: coo});
await instance.breedWith(25, 12, {from: coo});
await instance.breedWith(7, 8, {from: coo});
await instance.breedWith(33, 28, {from: coo});
await instance.breedWith(32, 6, {from: coo});
await instance.breedWith(31, 37, {from: coo});
await instance.breedWith(16, 17, {from: coo});
await instance.breedWith(4, 27, {from: coo});
await instance.breedWith(39, 40, {from: coo});
await instance.breedWith(15, 5, {from: coo});
await instance.breedWith(11, 26, {from: coo});
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
await instance.giveBirth(2);
await instance.giveBirth(36);
await instance.giveBirth(14);
await instance.giveBirth(34);
await instance.giveBirth(19);
await instance.giveBirth(20);
await instance.giveBirth(35);
await instance.giveBirth(9);
await instance.giveBirth(24);
await instance.giveBirth(13);
await instance.giveBirth(25);
await instance.giveBirth(7);
await instance.giveBirth(33);
await instance.giveBirth(32);
await instance.giveBirth(31);
await instance.giveBirth(16);
await instance.giveBirth(4);
await instance.giveBirth(39);
await instance.giveBirth(15);
await instance.giveBirth(11);
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
