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
await instance.createPromoKitty(97143666, coo, {from: coo,value: 0});
await instance.createPromoKitty(130603573, coo, {from: coo,value: 0});
await instance.createPromoKitty(235471161, coo, {from: coo,value: 0});
await instance.createPromoKitty(656584403, coo, {from: coo,value: 0});
await instance.createPromoKitty(857037136, coo, {from: coo,value: 0});
await instance.createPromoKitty(508249829, coo, {from: coo,value: 0});
await instance.createPromoKitty(696841111, coo, {from: coo,value: 0});
await instance.createPromoKitty(958341715, coo, {from: coo,value: 0});
await instance.createPromoKitty(539259594, coo, {from: coo,value: 0});
await instance.createPromoKitty(993906548, coo, {from: coo,value: 0});
await instance.createPromoKitty(39482206, coo, {from: coo,value: 0});
await instance.createPromoKitty(179901965, coo, {from: coo,value: 0});
await instance.createPromoKitty(897844574, coo, {from: coo,value: 0});
await instance.createPromoKitty(992233567, coo, {from: coo,value: 0});
await instance.createPromoKitty(521515098, coo, {from: coo,value: 0});
await instance.createPromoKitty(707584826, coo, {from: coo,value: 0});
await instance.createPromoKitty(888910859, coo, {from: coo,value: 0});
await instance.createPromoKitty(779741162, coo, {from: coo,value: 0});
await instance.createPromoKitty(734718955, coo, {from: coo,value: 0});
await instance.createPromoKitty(180098700, coo, {from: coo,value: 0});
await instance.createPromoKitty(199967618, coo, {from: coo,value: 0});
await instance.createPromoKitty(213042400, coo, {from: coo,value: 0});
await instance.createPromoKitty(110318007, coo, {from: coo,value: 0});
await instance.createPromoKitty(231053197, coo, {from: coo,value: 0});
await instance.createPromoKitty(452218894, coo, {from: coo,value: 0});
await instance.createPromoKitty(620915010, coo, {from: coo,value: 0});
await instance.createPromoKitty(573186638, coo, {from: coo,value: 0});
await instance.createPromoKitty(658194716, coo, {from: coo,value: 0});
await instance.createPromoKitty(492231050, coo, {from: coo,value: 0});
await instance.createPromoKitty(555036511, coo, {from: coo,value: 0});
await instance.createPromoKitty(612620583, coo, {from: coo,value: 0});
await instance.createPromoKitty(534225592, coo, {from: coo,value: 0});
await instance.createPromoKitty(9856819, coo, {from: coo,value: 0});
await instance.createPromoKitty(239855735, coo, {from: coo,value: 0});
await instance.createPromoKitty(229984718, coo, {from: coo,value: 0});
await instance.createPromoKitty(865048507, coo, {from: coo,value: 0});
await instance.createPromoKitty(340340586, coo, {from: coo,value: 0});
await instance.createPromoKitty(164049281, coo, {from: coo,value: 0});
await instance.createPromoKitty(764871099, coo, {from: coo,value: 0});
await instance.createPromoKitty(45100856, coo, {from: coo,value: 0});
await instance.createPromoKitty(280298193, coo, {from: coo,value: 0});
await instance.createPromoKitty(854563221, coo, {from: coo,value: 0});
await instance.createPromoKitty(448724513, coo, {from: coo,value: 0});
await instance.createPromoKitty(23514473, coo, {from: coo,value: 0});
await instance.createPromoKitty(198619112, coo, {from: coo,value: 0});
await instance.createPromoKitty(912795456, coo, {from: coo,value: 0});
await instance.createPromoKitty(837519312, coo, {from: coo,value: 0});
await instance.createPromoKitty(310316201, coo, {from: coo,value: 0});
await instance.createPromoKitty(409899894, coo, {from: coo,value: 0});
await instance.createPromoKitty(738032468, coo, {from: coo,value: 0});
await instance.createPromoKitty(466833192, coo, {from: coo,value: 0});
await instance.createPromoKitty(331005173, coo, {from: coo,value: 0});
await instance.createPromoKitty(819405102, coo, {from: coo,value: 0});
await instance.createPromoKitty(22727422, coo, {from: coo,value: 0});
await instance.createPromoKitty(947531366, coo, {from: coo,value: 0});
await instance.createPromoKitty(619197304, coo, {from: coo,value: 0});
await instance.createPromoKitty(547775921, coo, {from: coo,value: 0});
await instance.createPromoKitty(380993358, coo, {from: coo,value: 0});
await instance.createPromoKitty(742699230, coo, {from: coo,value: 0});
await instance.createPromoKitty(375825154, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(23, 16, {from: coo});
await instance.breedWith(33, 5, {from: coo});
await instance.breedWith(38, 24, {from: coo});
await instance.breedWith(25, 8, {from: coo});
await instance.breedWith(40, 39, {from: coo});
await instance.breedWith(31, 14, {from: coo});
await instance.breedWith(32, 13, {from: coo});
await instance.breedWith(17, 3, {from: coo});
await instance.breedWith(29, 35, {from: coo});
await instance.breedWith(2, 1, {from: coo});
await instance.breedWith(30, 36, {from: coo});
await instance.breedWith(10, 22, {from: coo});
await instance.breedWith(21, 15, {from: coo});
await instance.breedWith(9, 37, {from: coo});
await instance.breedWith(6, 34, {from: coo});
await instance.breedWith(26, 11, {from: coo});
await instance.breedWith(28, 18, {from: coo});
await instance.breedWith(4, 7, {from: coo});
await instance.breedWith(12, 27, {from: coo});
await instance.breedWith(19, 20, {from: coo});
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
await instance.giveBirth(23);
await instance.giveBirth(33);
await instance.giveBirth(38);
await instance.giveBirth(25);
await instance.giveBirth(40);
await instance.giveBirth(31);
await instance.giveBirth(32);
await instance.giveBirth(17);
await instance.giveBirth(29);
await instance.giveBirth(2);
await instance.giveBirth(30);
await instance.giveBirth(10);
await instance.giveBirth(21);
await instance.giveBirth(9);
await instance.giveBirth(6);
await instance.giveBirth(26);
await instance.giveBirth(28);
await instance.giveBirth(4);
await instance.giveBirth(12);
await instance.giveBirth(19);
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
