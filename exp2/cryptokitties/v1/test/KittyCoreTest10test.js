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
await instance.createPromoKitty(128438061, coo, {from: coo,value: 0});
await instance.createPromoKitty(166382759, coo, {from: coo,value: 0});
await instance.createPromoKitty(534118967, coo, {from: coo,value: 0});
await instance.createPromoKitty(70198417, coo, {from: coo,value: 0});
await instance.createPromoKitty(836302776, coo, {from: coo,value: 0});
await instance.createPromoKitty(586269210, coo, {from: coo,value: 0});
await instance.createPromoKitty(757367257, coo, {from: coo,value: 0});
await instance.createPromoKitty(558073298, coo, {from: coo,value: 0});
await instance.createPromoKitty(667661637, coo, {from: coo,value: 0});
await instance.createPromoKitty(994261854, coo, {from: coo,value: 0});
await instance.createPromoKitty(452654091, coo, {from: coo,value: 0});
await instance.createPromoKitty(82922331, coo, {from: coo,value: 0});
await instance.createPromoKitty(825134815, coo, {from: coo,value: 0});
await instance.createPromoKitty(664409818, coo, {from: coo,value: 0});
await instance.createPromoKitty(382794742, coo, {from: coo,value: 0});
await instance.createPromoKitty(653109714, coo, {from: coo,value: 0});
await instance.createPromoKitty(197279076, coo, {from: coo,value: 0});
await instance.createPromoKitty(245840578, coo, {from: coo,value: 0});
await instance.createPromoKitty(948201564, coo, {from: coo,value: 0});
await instance.createPromoKitty(592975635, coo, {from: coo,value: 0});
await instance.createPromoKitty(868599606, coo, {from: coo,value: 0});
await instance.createPromoKitty(323091428, coo, {from: coo,value: 0});
await instance.createPromoKitty(636618407, coo, {from: coo,value: 0});
await instance.createPromoKitty(772911736, coo, {from: coo,value: 0});
await instance.createPromoKitty(932920444, coo, {from: coo,value: 0});
await instance.createPromoKitty(46350279, coo, {from: coo,value: 0});
await instance.createPromoKitty(76253016, coo, {from: coo,value: 0});
await instance.createPromoKitty(145176427, coo, {from: coo,value: 0});
await instance.createPromoKitty(708811711, coo, {from: coo,value: 0});
await instance.createPromoKitty(192085403, coo, {from: coo,value: 0});
await instance.createPromoKitty(496541817, coo, {from: coo,value: 0});
await instance.createPromoKitty(899724756, coo, {from: coo,value: 0});
await instance.createPromoKitty(153008175, coo, {from: coo,value: 0});
await instance.createPromoKitty(877786269, coo, {from: coo,value: 0});
await instance.createPromoKitty(742283829, coo, {from: coo,value: 0});
await instance.createPromoKitty(166896151, coo, {from: coo,value: 0});
await instance.createPromoKitty(268064588, coo, {from: coo,value: 0});
await instance.createPromoKitty(610727401, coo, {from: coo,value: 0});
await instance.createPromoKitty(628284950, coo, {from: coo,value: 0});
await instance.createPromoKitty(798466274, coo, {from: coo,value: 0});
await instance.createPromoKitty(210032285, coo, {from: coo,value: 0});
await instance.createPromoKitty(185691742, coo, {from: coo,value: 0});
await instance.createPromoKitty(997346595, coo, {from: coo,value: 0});
await instance.createPromoKitty(316799781, coo, {from: coo,value: 0});
await instance.createPromoKitty(325782576, coo, {from: coo,value: 0});
await instance.createPromoKitty(725504960, coo, {from: coo,value: 0});
await instance.createPromoKitty(355569983, coo, {from: coo,value: 0});
await instance.createPromoKitty(321649854, coo, {from: coo,value: 0});
await instance.createPromoKitty(986520597, coo, {from: coo,value: 0});
await instance.createPromoKitty(549148985, coo, {from: coo,value: 0});
await instance.createPromoKitty(453027342, coo, {from: coo,value: 0});
await instance.createPromoKitty(247053199, coo, {from: coo,value: 0});
await instance.createPromoKitty(854117327, coo, {from: coo,value: 0});
await instance.createPromoKitty(699498755, coo, {from: coo,value: 0});
await instance.createPromoKitty(965660874, coo, {from: coo,value: 0});
await instance.createPromoKitty(799634925, coo, {from: coo,value: 0});
await instance.createPromoKitty(103896401, coo, {from: coo,value: 0});
await instance.createPromoKitty(327992629, coo, {from: coo,value: 0});
await instance.createPromoKitty(382522462, coo, {from: coo,value: 0});
await instance.createPromoKitty(134832176, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(31, 18, {from: coo});
await instance.breedWith(40, 21, {from: coo});
await instance.breedWith(36, 14, {from: coo});
await instance.breedWith(22, 35, {from: coo});
await instance.breedWith(7, 17, {from: coo});
await instance.breedWith(34, 13, {from: coo});
await instance.breedWith(38, 25, {from: coo});
await instance.breedWith(8, 2, {from: coo});
await instance.breedWith(5, 9, {from: coo});
await instance.breedWith(15, 19, {from: coo});
await instance.breedWith(16, 30, {from: coo});
await instance.breedWith(28, 4, {from: coo});
await instance.breedWith(11, 29, {from: coo});
await instance.breedWith(26, 6, {from: coo});
await instance.breedWith(23, 3, {from: coo});
await instance.breedWith(10, 20, {from: coo});
await instance.breedWith(32, 1, {from: coo});
await instance.breedWith(37, 12, {from: coo});
await instance.breedWith(33, 27, {from: coo});
await instance.breedWith(24, 39, {from: coo});
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
await instance.giveBirth(31);
await instance.giveBirth(40);
await instance.giveBirth(36);
await instance.giveBirth(22);
await instance.giveBirth(7);
await instance.giveBirth(34);
await instance.giveBirth(38);
await instance.giveBirth(8);
await instance.giveBirth(5);
await instance.giveBirth(15);
await instance.giveBirth(16);
await instance.giveBirth(28);
await instance.giveBirth(11);
await instance.giveBirth(26);
await instance.giveBirth(23);
await instance.giveBirth(10);
await instance.giveBirth(32);
await instance.giveBirth(37);
await instance.giveBirth(33);
await instance.giveBirth(24);
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
