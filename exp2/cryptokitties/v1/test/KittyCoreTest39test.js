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
await instance.createPromoKitty(159231791, coo, {from: coo,value: 0});
await instance.createPromoKitty(457616930, coo, {from: coo,value: 0});
await instance.createPromoKitty(23903911, coo, {from: coo,value: 0});
await instance.createPromoKitty(749007404, coo, {from: coo,value: 0});
await instance.createPromoKitty(57012189, coo, {from: coo,value: 0});
await instance.createPromoKitty(127687551, coo, {from: coo,value: 0});
await instance.createPromoKitty(471001601, coo, {from: coo,value: 0});
await instance.createPromoKitty(348637222, coo, {from: coo,value: 0});
await instance.createPromoKitty(821344791, coo, {from: coo,value: 0});
await instance.createPromoKitty(994820552, coo, {from: coo,value: 0});
await instance.createPromoKitty(793500988, coo, {from: coo,value: 0});
await instance.createPromoKitty(615754930, coo, {from: coo,value: 0});
await instance.createPromoKitty(536458987, coo, {from: coo,value: 0});
await instance.createPromoKitty(231854235, coo, {from: coo,value: 0});
await instance.createPromoKitty(924112311, coo, {from: coo,value: 0});
await instance.createPromoKitty(661387992, coo, {from: coo,value: 0});
await instance.createPromoKitty(307801707, coo, {from: coo,value: 0});
await instance.createPromoKitty(285247120, coo, {from: coo,value: 0});
await instance.createPromoKitty(949739945, coo, {from: coo,value: 0});
await instance.createPromoKitty(175387178, coo, {from: coo,value: 0});
await instance.createPromoKitty(378779276, coo, {from: coo,value: 0});
await instance.createPromoKitty(655242889, coo, {from: coo,value: 0});
await instance.createPromoKitty(455207392, coo, {from: coo,value: 0});
await instance.createPromoKitty(349796843, coo, {from: coo,value: 0});
await instance.createPromoKitty(772625756, coo, {from: coo,value: 0});
await instance.createPromoKitty(296250855, coo, {from: coo,value: 0});
await instance.createPromoKitty(240985928, coo, {from: coo,value: 0});
await instance.createPromoKitty(46011903, coo, {from: coo,value: 0});
await instance.createPromoKitty(238462614, coo, {from: coo,value: 0});
await instance.createPromoKitty(363765255, coo, {from: coo,value: 0});
await instance.createPromoKitty(824192018, coo, {from: coo,value: 0});
await instance.createPromoKitty(954073048, coo, {from: coo,value: 0});
await instance.createPromoKitty(523127965, coo, {from: coo,value: 0});
await instance.createPromoKitty(968745943, coo, {from: coo,value: 0});
await instance.createPromoKitty(57579154, coo, {from: coo,value: 0});
await instance.createPromoKitty(845298861, coo, {from: coo,value: 0});
await instance.createPromoKitty(9506970, coo, {from: coo,value: 0});
await instance.createPromoKitty(180933616, coo, {from: coo,value: 0});
await instance.createPromoKitty(606148372, coo, {from: coo,value: 0});
await instance.createPromoKitty(894851273, coo, {from: coo,value: 0});
await instance.createPromoKitty(394918456, coo, {from: coo,value: 0});
await instance.createPromoKitty(45303896, coo, {from: coo,value: 0});
await instance.createPromoKitty(972716620, coo, {from: coo,value: 0});
await instance.createPromoKitty(168933898, coo, {from: coo,value: 0});
await instance.createPromoKitty(89374977, coo, {from: coo,value: 0});
await instance.createPromoKitty(298620457, coo, {from: coo,value: 0});
await instance.createPromoKitty(916373673, coo, {from: coo,value: 0});
await instance.createPromoKitty(150693188, coo, {from: coo,value: 0});
await instance.createPromoKitty(37016507, coo, {from: coo,value: 0});
await instance.createPromoKitty(273664935, coo, {from: coo,value: 0});
await instance.createPromoKitty(646804545, coo, {from: coo,value: 0});
await instance.createPromoKitty(751722654, coo, {from: coo,value: 0});
await instance.createPromoKitty(143084423, coo, {from: coo,value: 0});
await instance.createPromoKitty(415413663, coo, {from: coo,value: 0});
await instance.createPromoKitty(15905293, coo, {from: coo,value: 0});
await instance.createPromoKitty(925750493, coo, {from: coo,value: 0});
await instance.createPromoKitty(920276731, coo, {from: coo,value: 0});
await instance.createPromoKitty(149386922, coo, {from: coo,value: 0});
await instance.createPromoKitty(895200757, coo, {from: coo,value: 0});
await instance.createPromoKitty(804899121, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(15, 35, {from: coo});
await instance.breedWith(37, 1, {from: coo});
await instance.breedWith(17, 19, {from: coo});
await instance.breedWith(8, 5, {from: coo});
await instance.breedWith(25, 13, {from: coo});
await instance.breedWith(27, 24, {from: coo});
await instance.breedWith(34, 9, {from: coo});
await instance.breedWith(36, 14, {from: coo});
await instance.breedWith(38, 7, {from: coo});
await instance.breedWith(12, 23, {from: coo});
await instance.breedWith(2, 22, {from: coo});
await instance.breedWith(11, 29, {from: coo});
await instance.breedWith(33, 39, {from: coo});
await instance.breedWith(31, 28, {from: coo});
await instance.breedWith(3, 18, {from: coo});
await instance.breedWith(10, 6, {from: coo});
await instance.breedWith(21, 20, {from: coo});
await instance.breedWith(4, 30, {from: coo});
await instance.breedWith(32, 40, {from: coo});
await instance.breedWith(16, 26, {from: coo});
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
await instance.giveBirth(15);
await instance.giveBirth(37);
await instance.giveBirth(17);
await instance.giveBirth(8);
await instance.giveBirth(25);
await instance.giveBirth(27);
await instance.giveBirth(34);
await instance.giveBirth(36);
await instance.giveBirth(38);
await instance.giveBirth(12);
await instance.giveBirth(2);
await instance.giveBirth(11);
await instance.giveBirth(33);
await instance.giveBirth(31);
await instance.giveBirth(3);
await instance.giveBirth(10);
await instance.giveBirth(21);
await instance.giveBirth(4);
await instance.giveBirth(32);
await instance.giveBirth(16);
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
