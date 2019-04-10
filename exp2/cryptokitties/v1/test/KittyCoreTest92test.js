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
await instance.createPromoKitty(7332257, coo, {from: coo,value: 0});
await instance.createPromoKitty(824483171, coo, {from: coo,value: 0});
await instance.createPromoKitty(701711353, coo, {from: coo,value: 0});
await instance.createPromoKitty(435307618, coo, {from: coo,value: 0});
await instance.createPromoKitty(835799006, coo, {from: coo,value: 0});
await instance.createPromoKitty(499317575, coo, {from: coo,value: 0});
await instance.createPromoKitty(210120506, coo, {from: coo,value: 0});
await instance.createPromoKitty(113563386, coo, {from: coo,value: 0});
await instance.createPromoKitty(756391225, coo, {from: coo,value: 0});
await instance.createPromoKitty(50386688, coo, {from: coo,value: 0});
await instance.createPromoKitty(255656369, coo, {from: coo,value: 0});
await instance.createPromoKitty(408180999, coo, {from: coo,value: 0});
await instance.createPromoKitty(486970730, coo, {from: coo,value: 0});
await instance.createPromoKitty(503872711, coo, {from: coo,value: 0});
await instance.createPromoKitty(806014157, coo, {from: coo,value: 0});
await instance.createPromoKitty(958646123, coo, {from: coo,value: 0});
await instance.createPromoKitty(571678114, coo, {from: coo,value: 0});
await instance.createPromoKitty(672027455, coo, {from: coo,value: 0});
await instance.createPromoKitty(348555818, coo, {from: coo,value: 0});
await instance.createPromoKitty(569354925, coo, {from: coo,value: 0});
await instance.createPromoKitty(786287045, coo, {from: coo,value: 0});
await instance.createPromoKitty(229190561, coo, {from: coo,value: 0});
await instance.createPromoKitty(401969122, coo, {from: coo,value: 0});
await instance.createPromoKitty(451315477, coo, {from: coo,value: 0});
await instance.createPromoKitty(242112417, coo, {from: coo,value: 0});
await instance.createPromoKitty(645103065, coo, {from: coo,value: 0});
await instance.createPromoKitty(502770213, coo, {from: coo,value: 0});
await instance.createPromoKitty(609665811, coo, {from: coo,value: 0});
await instance.createPromoKitty(64674791, coo, {from: coo,value: 0});
await instance.createPromoKitty(801218791, coo, {from: coo,value: 0});
await instance.createPromoKitty(155281077, coo, {from: coo,value: 0});
await instance.createPromoKitty(67768735, coo, {from: coo,value: 0});
await instance.createPromoKitty(403290546, coo, {from: coo,value: 0});
await instance.createPromoKitty(648475000, coo, {from: coo,value: 0});
await instance.createPromoKitty(597350569, coo, {from: coo,value: 0});
await instance.createPromoKitty(199040118, coo, {from: coo,value: 0});
await instance.createPromoKitty(730765262, coo, {from: coo,value: 0});
await instance.createPromoKitty(264625198, coo, {from: coo,value: 0});
await instance.createPromoKitty(505278916, coo, {from: coo,value: 0});
await instance.createPromoKitty(647697997, coo, {from: coo,value: 0});
await instance.createPromoKitty(917441218, coo, {from: coo,value: 0});
await instance.createPromoKitty(878713791, coo, {from: coo,value: 0});
await instance.createPromoKitty(746681399, coo, {from: coo,value: 0});
await instance.createPromoKitty(862612708, coo, {from: coo,value: 0});
await instance.createPromoKitty(953937052, coo, {from: coo,value: 0});
await instance.createPromoKitty(529106031, coo, {from: coo,value: 0});
await instance.createPromoKitty(885527074, coo, {from: coo,value: 0});
await instance.createPromoKitty(676862589, coo, {from: coo,value: 0});
await instance.createPromoKitty(688491469, coo, {from: coo,value: 0});
await instance.createPromoKitty(261463944, coo, {from: coo,value: 0});
await instance.createPromoKitty(814906010, coo, {from: coo,value: 0});
await instance.createPromoKitty(565464895, coo, {from: coo,value: 0});
await instance.createPromoKitty(993089972, coo, {from: coo,value: 0});
await instance.createPromoKitty(333115747, coo, {from: coo,value: 0});
await instance.createPromoKitty(304087911, coo, {from: coo,value: 0});
await instance.createPromoKitty(711959246, coo, {from: coo,value: 0});
await instance.createPromoKitty(102680775, coo, {from: coo,value: 0});
await instance.createPromoKitty(812324603, coo, {from: coo,value: 0});
await instance.createPromoKitty(77269343, coo, {from: coo,value: 0});
await instance.createPromoKitty(917293249, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(10, 15, {from: coo});
await instance.breedWith(32, 26, {from: coo});
await instance.breedWith(38, 35, {from: coo});
await instance.breedWith(22, 4, {from: coo});
await instance.breedWith(9, 40, {from: coo});
await instance.breedWith(3, 11, {from: coo});
await instance.breedWith(29, 23, {from: coo});
await instance.breedWith(6, 30, {from: coo});
await instance.breedWith(27, 16, {from: coo});
await instance.breedWith(28, 17, {from: coo});
await instance.breedWith(19, 1, {from: coo});
await instance.breedWith(13, 37, {from: coo});
await instance.breedWith(25, 5, {from: coo});
await instance.breedWith(31, 33, {from: coo});
await instance.breedWith(12, 20, {from: coo});
await instance.breedWith(14, 18, {from: coo});
await instance.breedWith(21, 8, {from: coo});
await instance.breedWith(34, 39, {from: coo});
await instance.breedWith(2, 36, {from: coo});
await instance.breedWith(7, 24, {from: coo});
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
await instance.giveBirth(10);
await instance.giveBirth(32);
await instance.giveBirth(38);
await instance.giveBirth(22);
await instance.giveBirth(9);
await instance.giveBirth(3);
await instance.giveBirth(29);
await instance.giveBirth(6);
await instance.giveBirth(27);
await instance.giveBirth(28);
await instance.giveBirth(19);
await instance.giveBirth(13);
await instance.giveBirth(25);
await instance.giveBirth(31);
await instance.giveBirth(12);
await instance.giveBirth(14);
await instance.giveBirth(21);
await instance.giveBirth(34);
await instance.giveBirth(2);
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
