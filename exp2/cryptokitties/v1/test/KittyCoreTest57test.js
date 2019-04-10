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
await instance.createPromoKitty(510761335, coo, {from: coo,value: 0});
await instance.createPromoKitty(156143885, coo, {from: coo,value: 0});
await instance.createPromoKitty(800526129, coo, {from: coo,value: 0});
await instance.createPromoKitty(109181108, coo, {from: coo,value: 0});
await instance.createPromoKitty(820899919, coo, {from: coo,value: 0});
await instance.createPromoKitty(107179652, coo, {from: coo,value: 0});
await instance.createPromoKitty(140654422, coo, {from: coo,value: 0});
await instance.createPromoKitty(986766285, coo, {from: coo,value: 0});
await instance.createPromoKitty(428691800, coo, {from: coo,value: 0});
await instance.createPromoKitty(270171537, coo, {from: coo,value: 0});
await instance.createPromoKitty(636978384, coo, {from: coo,value: 0});
await instance.createPromoKitty(340844661, coo, {from: coo,value: 0});
await instance.createPromoKitty(468120329, coo, {from: coo,value: 0});
await instance.createPromoKitty(992692392, coo, {from: coo,value: 0});
await instance.createPromoKitty(72178744, coo, {from: coo,value: 0});
await instance.createPromoKitty(249588760, coo, {from: coo,value: 0});
await instance.createPromoKitty(483044725, coo, {from: coo,value: 0});
await instance.createPromoKitty(416373851, coo, {from: coo,value: 0});
await instance.createPromoKitty(53287712, coo, {from: coo,value: 0});
await instance.createPromoKitty(79693574, coo, {from: coo,value: 0});
await instance.createPromoKitty(359838893, coo, {from: coo,value: 0});
await instance.createPromoKitty(977652107, coo, {from: coo,value: 0});
await instance.createPromoKitty(327376623, coo, {from: coo,value: 0});
await instance.createPromoKitty(780068476, coo, {from: coo,value: 0});
await instance.createPromoKitty(264504166, coo, {from: coo,value: 0});
await instance.createPromoKitty(524961108, coo, {from: coo,value: 0});
await instance.createPromoKitty(93772713, coo, {from: coo,value: 0});
await instance.createPromoKitty(754574488, coo, {from: coo,value: 0});
await instance.createPromoKitty(976991260, coo, {from: coo,value: 0});
await instance.createPromoKitty(50136581, coo, {from: coo,value: 0});
await instance.createPromoKitty(678013936, coo, {from: coo,value: 0});
await instance.createPromoKitty(365915832, coo, {from: coo,value: 0});
await instance.createPromoKitty(543627979, coo, {from: coo,value: 0});
await instance.createPromoKitty(365697351, coo, {from: coo,value: 0});
await instance.createPromoKitty(485438053, coo, {from: coo,value: 0});
await instance.createPromoKitty(862936072, coo, {from: coo,value: 0});
await instance.createPromoKitty(269547131, coo, {from: coo,value: 0});
await instance.createPromoKitty(786863070, coo, {from: coo,value: 0});
await instance.createPromoKitty(912824204, coo, {from: coo,value: 0});
await instance.createPromoKitty(196321414, coo, {from: coo,value: 0});
await instance.createPromoKitty(663200903, coo, {from: coo,value: 0});
await instance.createPromoKitty(298935152, coo, {from: coo,value: 0});
await instance.createPromoKitty(151002809, coo, {from: coo,value: 0});
await instance.createPromoKitty(638461171, coo, {from: coo,value: 0});
await instance.createPromoKitty(695062530, coo, {from: coo,value: 0});
await instance.createPromoKitty(842339775, coo, {from: coo,value: 0});
await instance.createPromoKitty(556981624, coo, {from: coo,value: 0});
await instance.createPromoKitty(213676326, coo, {from: coo,value: 0});
await instance.createPromoKitty(512655409, coo, {from: coo,value: 0});
await instance.createPromoKitty(822947894, coo, {from: coo,value: 0});
await instance.createPromoKitty(291149189, coo, {from: coo,value: 0});
await instance.createPromoKitty(599499179, coo, {from: coo,value: 0});
await instance.createPromoKitty(540042850, coo, {from: coo,value: 0});
await instance.createPromoKitty(985473800, coo, {from: coo,value: 0});
await instance.createPromoKitty(779393126, coo, {from: coo,value: 0});
await instance.createPromoKitty(119662430, coo, {from: coo,value: 0});
await instance.createPromoKitty(130977438, coo, {from: coo,value: 0});
await instance.createPromoKitty(520376759, coo, {from: coo,value: 0});
await instance.createPromoKitty(282689636, coo, {from: coo,value: 0});
await instance.createPromoKitty(75643079, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(27, 8, {from: coo});
await instance.breedWith(5, 33, {from: coo});
await instance.breedWith(30, 16, {from: coo});
await instance.breedWith(29, 23, {from: coo});
await instance.breedWith(21, 36, {from: coo});
await instance.breedWith(22, 39, {from: coo});
await instance.breedWith(34, 32, {from: coo});
await instance.breedWith(2, 37, {from: coo});
await instance.breedWith(19, 9, {from: coo});
await instance.breedWith(25, 40, {from: coo});
await instance.breedWith(24, 26, {from: coo});
await instance.breedWith(13, 28, {from: coo});
await instance.breedWith(31, 10, {from: coo});
await instance.breedWith(11, 35, {from: coo});
await instance.breedWith(7, 38, {from: coo});
await instance.breedWith(12, 17, {from: coo});
await instance.breedWith(6, 3, {from: coo});
await instance.breedWith(14, 20, {from: coo});
await instance.breedWith(4, 18, {from: coo});
await instance.breedWith(15, 1, {from: coo});
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
await instance.giveBirth(27);
await instance.giveBirth(5);
await instance.giveBirth(30);
await instance.giveBirth(29);
await instance.giveBirth(21);
await instance.giveBirth(22);
await instance.giveBirth(34);
await instance.giveBirth(2);
await instance.giveBirth(19);
await instance.giveBirth(25);
await instance.giveBirth(24);
await instance.giveBirth(13);
await instance.giveBirth(31);
await instance.giveBirth(11);
await instance.giveBirth(7);
await instance.giveBirth(12);
await instance.giveBirth(6);
await instance.giveBirth(14);
await instance.giveBirth(4);
await instance.giveBirth(15);
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
