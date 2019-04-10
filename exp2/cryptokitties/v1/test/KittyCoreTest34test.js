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
await instance.createPromoKitty(762028999, coo, {from: coo,value: 0});
await instance.createPromoKitty(382480663, coo, {from: coo,value: 0});
await instance.createPromoKitty(623800531, coo, {from: coo,value: 0});
await instance.createPromoKitty(89455346, coo, {from: coo,value: 0});
await instance.createPromoKitty(291806955, coo, {from: coo,value: 0});
await instance.createPromoKitty(321815705, coo, {from: coo,value: 0});
await instance.createPromoKitty(848858288, coo, {from: coo,value: 0});
await instance.createPromoKitty(33514666, coo, {from: coo,value: 0});
await instance.createPromoKitty(814312354, coo, {from: coo,value: 0});
await instance.createPromoKitty(947774567, coo, {from: coo,value: 0});
await instance.createPromoKitty(216310992, coo, {from: coo,value: 0});
await instance.createPromoKitty(532230417, coo, {from: coo,value: 0});
await instance.createPromoKitty(536076735, coo, {from: coo,value: 0});
await instance.createPromoKitty(44308840, coo, {from: coo,value: 0});
await instance.createPromoKitty(698660933, coo, {from: coo,value: 0});
await instance.createPromoKitty(706235504, coo, {from: coo,value: 0});
await instance.createPromoKitty(876618680, coo, {from: coo,value: 0});
await instance.createPromoKitty(220298527, coo, {from: coo,value: 0});
await instance.createPromoKitty(757075071, coo, {from: coo,value: 0});
await instance.createPromoKitty(849055258, coo, {from: coo,value: 0});
await instance.createPromoKitty(613190713, coo, {from: coo,value: 0});
await instance.createPromoKitty(569140105, coo, {from: coo,value: 0});
await instance.createPromoKitty(830804382, coo, {from: coo,value: 0});
await instance.createPromoKitty(715733148, coo, {from: coo,value: 0});
await instance.createPromoKitty(205315835, coo, {from: coo,value: 0});
await instance.createPromoKitty(562648590, coo, {from: coo,value: 0});
await instance.createPromoKitty(814240835, coo, {from: coo,value: 0});
await instance.createPromoKitty(44083881, coo, {from: coo,value: 0});
await instance.createPromoKitty(13378344, coo, {from: coo,value: 0});
await instance.createPromoKitty(112568347, coo, {from: coo,value: 0});
await instance.createPromoKitty(725183630, coo, {from: coo,value: 0});
await instance.createPromoKitty(253193222, coo, {from: coo,value: 0});
await instance.createPromoKitty(662309387, coo, {from: coo,value: 0});
await instance.createPromoKitty(979478833, coo, {from: coo,value: 0});
await instance.createPromoKitty(584755666, coo, {from: coo,value: 0});
await instance.createPromoKitty(331792208, coo, {from: coo,value: 0});
await instance.createPromoKitty(134571332, coo, {from: coo,value: 0});
await instance.createPromoKitty(946128337, coo, {from: coo,value: 0});
await instance.createPromoKitty(299178824, coo, {from: coo,value: 0});
await instance.createPromoKitty(231262772, coo, {from: coo,value: 0});
await instance.createPromoKitty(28984501, coo, {from: coo,value: 0});
await instance.createPromoKitty(318834847, coo, {from: coo,value: 0});
await instance.createPromoKitty(588582775, coo, {from: coo,value: 0});
await instance.createPromoKitty(872527084, coo, {from: coo,value: 0});
await instance.createPromoKitty(710223474, coo, {from: coo,value: 0});
await instance.createPromoKitty(920236362, coo, {from: coo,value: 0});
await instance.createPromoKitty(296350009, coo, {from: coo,value: 0});
await instance.createPromoKitty(187680423, coo, {from: coo,value: 0});
await instance.createPromoKitty(260466187, coo, {from: coo,value: 0});
await instance.createPromoKitty(129659376, coo, {from: coo,value: 0});
await instance.createPromoKitty(580640539, coo, {from: coo,value: 0});
await instance.createPromoKitty(229123596, coo, {from: coo,value: 0});
await instance.createPromoKitty(428869153, coo, {from: coo,value: 0});
await instance.createPromoKitty(9338061, coo, {from: coo,value: 0});
await instance.createPromoKitty(664999838, coo, {from: coo,value: 0});
await instance.createPromoKitty(693622722, coo, {from: coo,value: 0});
await instance.createPromoKitty(220228218, coo, {from: coo,value: 0});
await instance.createPromoKitty(382227083, coo, {from: coo,value: 0});
await instance.createPromoKitty(718404205, coo, {from: coo,value: 0});
await instance.createPromoKitty(191596213, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(28, 20, {from: coo});
await instance.breedWith(32, 8, {from: coo});
await instance.breedWith(22, 29, {from: coo});
await instance.breedWith(25, 10, {from: coo});
await instance.breedWith(26, 37, {from: coo});
await instance.breedWith(15, 11, {from: coo});
await instance.breedWith(23, 19, {from: coo});
await instance.breedWith(38, 2, {from: coo});
await instance.breedWith(36, 3, {from: coo});
await instance.breedWith(40, 17, {from: coo});
await instance.breedWith(35, 13, {from: coo});
await instance.breedWith(4, 30, {from: coo});
await instance.breedWith(12, 34, {from: coo});
await instance.breedWith(18, 33, {from: coo});
await instance.breedWith(27, 7, {from: coo});
await instance.breedWith(39, 24, {from: coo});
await instance.breedWith(21, 6, {from: coo});
await instance.breedWith(5, 14, {from: coo});
await instance.breedWith(9, 16, {from: coo});
await instance.breedWith(31, 1, {from: coo});
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
await instance.giveBirth(28);
await instance.giveBirth(32);
await instance.giveBirth(22);
await instance.giveBirth(25);
await instance.giveBirth(26);
await instance.giveBirth(15);
await instance.giveBirth(23);
await instance.giveBirth(38);
await instance.giveBirth(36);
await instance.giveBirth(40);
await instance.giveBirth(35);
await instance.giveBirth(4);
await instance.giveBirth(12);
await instance.giveBirth(18);
await instance.giveBirth(27);
await instance.giveBirth(39);
await instance.giveBirth(21);
await instance.giveBirth(5);
await instance.giveBirth(9);
await instance.giveBirth(31);
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
