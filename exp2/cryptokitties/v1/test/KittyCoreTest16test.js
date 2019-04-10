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
await instance.createPromoKitty(197577010, coo, {from: coo,value: 0});
await instance.createPromoKitty(999335950, coo, {from: coo,value: 0});
await instance.createPromoKitty(249974013, coo, {from: coo,value: 0});
await instance.createPromoKitty(921464552, coo, {from: coo,value: 0});
await instance.createPromoKitty(839068835, coo, {from: coo,value: 0});
await instance.createPromoKitty(57019380, coo, {from: coo,value: 0});
await instance.createPromoKitty(569226250, coo, {from: coo,value: 0});
await instance.createPromoKitty(198257230, coo, {from: coo,value: 0});
await instance.createPromoKitty(186909449, coo, {from: coo,value: 0});
await instance.createPromoKitty(942640873, coo, {from: coo,value: 0});
await instance.createPromoKitty(483192267, coo, {from: coo,value: 0});
await instance.createPromoKitty(352283922, coo, {from: coo,value: 0});
await instance.createPromoKitty(490179846, coo, {from: coo,value: 0});
await instance.createPromoKitty(301166340, coo, {from: coo,value: 0});
await instance.createPromoKitty(706208468, coo, {from: coo,value: 0});
await instance.createPromoKitty(898221717, coo, {from: coo,value: 0});
await instance.createPromoKitty(870806628, coo, {from: coo,value: 0});
await instance.createPromoKitty(805702025, coo, {from: coo,value: 0});
await instance.createPromoKitty(797763660, coo, {from: coo,value: 0});
await instance.createPromoKitty(812242706, coo, {from: coo,value: 0});
await instance.createPromoKitty(867335981, coo, {from: coo,value: 0});
await instance.createPromoKitty(614591768, coo, {from: coo,value: 0});
await instance.createPromoKitty(258607326, coo, {from: coo,value: 0});
await instance.createPromoKitty(601975440, coo, {from: coo,value: 0});
await instance.createPromoKitty(450806316, coo, {from: coo,value: 0});
await instance.createPromoKitty(591322730, coo, {from: coo,value: 0});
await instance.createPromoKitty(696605565, coo, {from: coo,value: 0});
await instance.createPromoKitty(78833793, coo, {from: coo,value: 0});
await instance.createPromoKitty(134142229, coo, {from: coo,value: 0});
await instance.createPromoKitty(553657898, coo, {from: coo,value: 0});
await instance.createPromoKitty(57253414, coo, {from: coo,value: 0});
await instance.createPromoKitty(291227397, coo, {from: coo,value: 0});
await instance.createPromoKitty(725495832, coo, {from: coo,value: 0});
await instance.createPromoKitty(443446648, coo, {from: coo,value: 0});
await instance.createPromoKitty(377535460, coo, {from: coo,value: 0});
await instance.createPromoKitty(764480411, coo, {from: coo,value: 0});
await instance.createPromoKitty(577573888, coo, {from: coo,value: 0});
await instance.createPromoKitty(612208077, coo, {from: coo,value: 0});
await instance.createPromoKitty(895078865, coo, {from: coo,value: 0});
await instance.createPromoKitty(297858994, coo, {from: coo,value: 0});
await instance.createPromoKitty(111460664, coo, {from: coo,value: 0});
await instance.createPromoKitty(9374599, coo, {from: coo,value: 0});
await instance.createPromoKitty(72784441, coo, {from: coo,value: 0});
await instance.createPromoKitty(228023901, coo, {from: coo,value: 0});
await instance.createPromoKitty(203866233, coo, {from: coo,value: 0});
await instance.createPromoKitty(65672083, coo, {from: coo,value: 0});
await instance.createPromoKitty(891641518, coo, {from: coo,value: 0});
await instance.createPromoKitty(31839878, coo, {from: coo,value: 0});
await instance.createPromoKitty(578069408, coo, {from: coo,value: 0});
await instance.createPromoKitty(821004040, coo, {from: coo,value: 0});
await instance.createPromoKitty(869599274, coo, {from: coo,value: 0});
await instance.createPromoKitty(708495056, coo, {from: coo,value: 0});
await instance.createPromoKitty(716243069, coo, {from: coo,value: 0});
await instance.createPromoKitty(945379755, coo, {from: coo,value: 0});
await instance.createPromoKitty(416597291, coo, {from: coo,value: 0});
await instance.createPromoKitty(648667060, coo, {from: coo,value: 0});
await instance.createPromoKitty(622090106, coo, {from: coo,value: 0});
await instance.createPromoKitty(471035548, coo, {from: coo,value: 0});
await instance.createPromoKitty(24134094, coo, {from: coo,value: 0});
await instance.createPromoKitty(969431241, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(30, 13, {from: coo});
await instance.breedWith(31, 36, {from: coo});
await instance.breedWith(12, 38, {from: coo});
await instance.breedWith(25, 2, {from: coo});
await instance.breedWith(18, 3, {from: coo});
await instance.breedWith(4, 7, {from: coo});
await instance.breedWith(9, 15, {from: coo});
await instance.breedWith(39, 19, {from: coo});
await instance.breedWith(1, 17, {from: coo});
await instance.breedWith(26, 22, {from: coo});
await instance.breedWith(5, 14, {from: coo});
await instance.breedWith(23, 28, {from: coo});
await instance.breedWith(35, 24, {from: coo});
await instance.breedWith(29, 33, {from: coo});
await instance.breedWith(6, 21, {from: coo});
await instance.breedWith(34, 10, {from: coo});
await instance.breedWith(37, 16, {from: coo});
await instance.breedWith(40, 32, {from: coo});
await instance.breedWith(20, 11, {from: coo});
await instance.breedWith(8, 27, {from: coo});
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
await instance.giveBirth(30);
await instance.giveBirth(31);
await instance.giveBirth(12);
await instance.giveBirth(25);
await instance.giveBirth(18);
await instance.giveBirth(4);
await instance.giveBirth(9);
await instance.giveBirth(39);
await instance.giveBirth(1);
await instance.giveBirth(26);
await instance.giveBirth(5);
await instance.giveBirth(23);
await instance.giveBirth(35);
await instance.giveBirth(29);
await instance.giveBirth(6);
await instance.giveBirth(34);
await instance.giveBirth(37);
await instance.giveBirth(40);
await instance.giveBirth(20);
await instance.giveBirth(8);
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
