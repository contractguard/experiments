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
await instance.createPromoKitty(169558872, coo, {from: coo,value: 0});
await instance.createPromoKitty(272491194, coo, {from: coo,value: 0});
await instance.createPromoKitty(556600117, coo, {from: coo,value: 0});
await instance.createPromoKitty(988746152, coo, {from: coo,value: 0});
await instance.createPromoKitty(406339646, coo, {from: coo,value: 0});
await instance.createPromoKitty(317472075, coo, {from: coo,value: 0});
await instance.createPromoKitty(14170334, coo, {from: coo,value: 0});
await instance.createPromoKitty(861514106, coo, {from: coo,value: 0});
await instance.createPromoKitty(188004083, coo, {from: coo,value: 0});
await instance.createPromoKitty(704382499, coo, {from: coo,value: 0});
await instance.createPromoKitty(624007390, coo, {from: coo,value: 0});
await instance.createPromoKitty(996745389, coo, {from: coo,value: 0});
await instance.createPromoKitty(36283310, coo, {from: coo,value: 0});
await instance.createPromoKitty(594151554, coo, {from: coo,value: 0});
await instance.createPromoKitty(920684464, coo, {from: coo,value: 0});
await instance.createPromoKitty(372558849, coo, {from: coo,value: 0});
await instance.createPromoKitty(742917389, coo, {from: coo,value: 0});
await instance.createPromoKitty(995569188, coo, {from: coo,value: 0});
await instance.createPromoKitty(998784183, coo, {from: coo,value: 0});
await instance.createPromoKitty(647788460, coo, {from: coo,value: 0});
await instance.createPromoKitty(551567343, coo, {from: coo,value: 0});
await instance.createPromoKitty(745908862, coo, {from: coo,value: 0});
await instance.createPromoKitty(74128565, coo, {from: coo,value: 0});
await instance.createPromoKitty(921735634, coo, {from: coo,value: 0});
await instance.createPromoKitty(268634376, coo, {from: coo,value: 0});
await instance.createPromoKitty(967661452, coo, {from: coo,value: 0});
await instance.createPromoKitty(692453792, coo, {from: coo,value: 0});
await instance.createPromoKitty(628831931, coo, {from: coo,value: 0});
await instance.createPromoKitty(259760503, coo, {from: coo,value: 0});
await instance.createPromoKitty(72306943, coo, {from: coo,value: 0});
await instance.createPromoKitty(227770823, coo, {from: coo,value: 0});
await instance.createPromoKitty(726779325, coo, {from: coo,value: 0});
await instance.createPromoKitty(541834984, coo, {from: coo,value: 0});
await instance.createPromoKitty(184460873, coo, {from: coo,value: 0});
await instance.createPromoKitty(411716138, coo, {from: coo,value: 0});
await instance.createPromoKitty(657109764, coo, {from: coo,value: 0});
await instance.createPromoKitty(574664611, coo, {from: coo,value: 0});
await instance.createPromoKitty(355991090, coo, {from: coo,value: 0});
await instance.createPromoKitty(391175072, coo, {from: coo,value: 0});
await instance.createPromoKitty(179856682, coo, {from: coo,value: 0});
await instance.createPromoKitty(980798814, coo, {from: coo,value: 0});
await instance.createPromoKitty(407569685, coo, {from: coo,value: 0});
await instance.createPromoKitty(1499729, coo, {from: coo,value: 0});
await instance.createPromoKitty(110387442, coo, {from: coo,value: 0});
await instance.createPromoKitty(823141334, coo, {from: coo,value: 0});
await instance.createPromoKitty(794401862, coo, {from: coo,value: 0});
await instance.createPromoKitty(355251919, coo, {from: coo,value: 0});
await instance.createPromoKitty(518940746, coo, {from: coo,value: 0});
await instance.createPromoKitty(273948265, coo, {from: coo,value: 0});
await instance.createPromoKitty(419089895, coo, {from: coo,value: 0});
await instance.createPromoKitty(769068780, coo, {from: coo,value: 0});
await instance.createPromoKitty(278146172, coo, {from: coo,value: 0});
await instance.createPromoKitty(795994810, coo, {from: coo,value: 0});
await instance.createPromoKitty(501330838, coo, {from: coo,value: 0});
await instance.createPromoKitty(788171128, coo, {from: coo,value: 0});
await instance.createPromoKitty(726796350, coo, {from: coo,value: 0});
await instance.createPromoKitty(818456066, coo, {from: coo,value: 0});
await instance.createPromoKitty(941220577, coo, {from: coo,value: 0});
await instance.createPromoKitty(777097979, coo, {from: coo,value: 0});
await instance.createPromoKitty(114533684, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(31, 3, {from: coo});
await instance.breedWith(30, 29, {from: coo});
await instance.breedWith(10, 21, {from: coo});
await instance.breedWith(28, 15, {from: coo});
await instance.breedWith(9, 38, {from: coo});
await instance.breedWith(36, 35, {from: coo});
await instance.breedWith(7, 20, {from: coo});
await instance.breedWith(13, 23, {from: coo});
await instance.breedWith(26, 24, {from: coo});
await instance.breedWith(12, 14, {from: coo});
await instance.breedWith(11, 5, {from: coo});
await instance.breedWith(17, 4, {from: coo});
await instance.breedWith(8, 33, {from: coo});
await instance.breedWith(27, 34, {from: coo});
await instance.breedWith(32, 6, {from: coo});
await instance.breedWith(37, 39, {from: coo});
await instance.breedWith(1, 2, {from: coo});
await instance.breedWith(25, 18, {from: coo});
await instance.breedWith(22, 19, {from: coo});
await instance.breedWith(40, 16, {from: coo});
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
await instance.giveBirth(30);
await instance.giveBirth(10);
await instance.giveBirth(28);
await instance.giveBirth(9);
await instance.giveBirth(36);
await instance.giveBirth(7);
await instance.giveBirth(13);
await instance.giveBirth(26);
await instance.giveBirth(12);
await instance.giveBirth(11);
await instance.giveBirth(17);
await instance.giveBirth(8);
await instance.giveBirth(27);
await instance.giveBirth(32);
await instance.giveBirth(37);
await instance.giveBirth(1);
await instance.giveBirth(25);
await instance.giveBirth(22);
await instance.giveBirth(40);
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
