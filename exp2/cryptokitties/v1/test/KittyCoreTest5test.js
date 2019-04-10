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
await instance.createPromoKitty(535983080, coo, {from: coo,value: 0});
await instance.createPromoKitty(274410273, coo, {from: coo,value: 0});
await instance.createPromoKitty(161891274, coo, {from: coo,value: 0});
await instance.createPromoKitty(903063162, coo, {from: coo,value: 0});
await instance.createPromoKitty(732997866, coo, {from: coo,value: 0});
await instance.createPromoKitty(148563925, coo, {from: coo,value: 0});
await instance.createPromoKitty(513591544, coo, {from: coo,value: 0});
await instance.createPromoKitty(166010827, coo, {from: coo,value: 0});
await instance.createPromoKitty(45208952, coo, {from: coo,value: 0});
await instance.createPromoKitty(423211538, coo, {from: coo,value: 0});
await instance.createPromoKitty(314398641, coo, {from: coo,value: 0});
await instance.createPromoKitty(141640779, coo, {from: coo,value: 0});
await instance.createPromoKitty(281567905, coo, {from: coo,value: 0});
await instance.createPromoKitty(473251967, coo, {from: coo,value: 0});
await instance.createPromoKitty(944562941, coo, {from: coo,value: 0});
await instance.createPromoKitty(29539451, coo, {from: coo,value: 0});
await instance.createPromoKitty(666767790, coo, {from: coo,value: 0});
await instance.createPromoKitty(353684898, coo, {from: coo,value: 0});
await instance.createPromoKitty(764541936, coo, {from: coo,value: 0});
await instance.createPromoKitty(679629254, coo, {from: coo,value: 0});
await instance.createPromoKitty(371195151, coo, {from: coo,value: 0});
await instance.createPromoKitty(450757833, coo, {from: coo,value: 0});
await instance.createPromoKitty(76813485, coo, {from: coo,value: 0});
await instance.createPromoKitty(626443555, coo, {from: coo,value: 0});
await instance.createPromoKitty(929153009, coo, {from: coo,value: 0});
await instance.createPromoKitty(824061173, coo, {from: coo,value: 0});
await instance.createPromoKitty(661770853, coo, {from: coo,value: 0});
await instance.createPromoKitty(561895923, coo, {from: coo,value: 0});
await instance.createPromoKitty(884383848, coo, {from: coo,value: 0});
await instance.createPromoKitty(459281463, coo, {from: coo,value: 0});
await instance.createPromoKitty(225003668, coo, {from: coo,value: 0});
await instance.createPromoKitty(840244638, coo, {from: coo,value: 0});
await instance.createPromoKitty(824113943, coo, {from: coo,value: 0});
await instance.createPromoKitty(1257118, coo, {from: coo,value: 0});
await instance.createPromoKitty(981494804, coo, {from: coo,value: 0});
await instance.createPromoKitty(904511527, coo, {from: coo,value: 0});
await instance.createPromoKitty(873664881, coo, {from: coo,value: 0});
await instance.createPromoKitty(201450604, coo, {from: coo,value: 0});
await instance.createPromoKitty(884676882, coo, {from: coo,value: 0});
await instance.createPromoKitty(200188199, coo, {from: coo,value: 0});
await instance.createPromoKitty(939556115, coo, {from: coo,value: 0});
await instance.createPromoKitty(863729904, coo, {from: coo,value: 0});
await instance.createPromoKitty(674904089, coo, {from: coo,value: 0});
await instance.createPromoKitty(915362953, coo, {from: coo,value: 0});
await instance.createPromoKitty(514458529, coo, {from: coo,value: 0});
await instance.createPromoKitty(319649309, coo, {from: coo,value: 0});
await instance.createPromoKitty(426728800, coo, {from: coo,value: 0});
await instance.createPromoKitty(788225601, coo, {from: coo,value: 0});
await instance.createPromoKitty(213850940, coo, {from: coo,value: 0});
await instance.createPromoKitty(92213165, coo, {from: coo,value: 0});
await instance.createPromoKitty(168012401, coo, {from: coo,value: 0});
await instance.createPromoKitty(607492765, coo, {from: coo,value: 0});
await instance.createPromoKitty(59872386, coo, {from: coo,value: 0});
await instance.createPromoKitty(846133392, coo, {from: coo,value: 0});
await instance.createPromoKitty(41833821, coo, {from: coo,value: 0});
await instance.createPromoKitty(55120848, coo, {from: coo,value: 0});
await instance.createPromoKitty(78465143, coo, {from: coo,value: 0});
await instance.createPromoKitty(819945683, coo, {from: coo,value: 0});
await instance.createPromoKitty(964455717, coo, {from: coo,value: 0});
await instance.createPromoKitty(70012853, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(8, 6, {from: coo});
await instance.breedWith(36, 38, {from: coo});
await instance.breedWith(39, 26, {from: coo});
await instance.breedWith(20, 7, {from: coo});
await instance.breedWith(22, 29, {from: coo});
await instance.breedWith(15, 24, {from: coo});
await instance.breedWith(25, 4, {from: coo});
await instance.breedWith(3, 28, {from: coo});
await instance.breedWith(14, 40, {from: coo});
await instance.breedWith(16, 23, {from: coo});
await instance.breedWith(1, 31, {from: coo});
await instance.breedWith(30, 19, {from: coo});
await instance.breedWith(17, 35, {from: coo});
await instance.breedWith(2, 18, {from: coo});
await instance.breedWith(5, 9, {from: coo});
await instance.breedWith(10, 13, {from: coo});
await instance.breedWith(21, 12, {from: coo});
await instance.breedWith(34, 27, {from: coo});
await instance.breedWith(11, 33, {from: coo});
await instance.breedWith(37, 32, {from: coo});
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
await instance.giveBirth(8);
await instance.giveBirth(36);
await instance.giveBirth(39);
await instance.giveBirth(20);
await instance.giveBirth(22);
await instance.giveBirth(15);
await instance.giveBirth(25);
await instance.giveBirth(3);
await instance.giveBirth(14);
await instance.giveBirth(16);
await instance.giveBirth(1);
await instance.giveBirth(30);
await instance.giveBirth(17);
await instance.giveBirth(2);
await instance.giveBirth(5);
await instance.giveBirth(10);
await instance.giveBirth(21);
await instance.giveBirth(34);
await instance.giveBirth(11);
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
