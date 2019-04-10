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
await instance.createPromoKitty(693721488, coo, {from: coo,value: 0});
await instance.createPromoKitty(992369622, coo, {from: coo,value: 0});
await instance.createPromoKitty(665624795, coo, {from: coo,value: 0});
await instance.createPromoKitty(570010660, coo, {from: coo,value: 0});
await instance.createPromoKitty(209850611, coo, {from: coo,value: 0});
await instance.createPromoKitty(906281806, coo, {from: coo,value: 0});
await instance.createPromoKitty(775737504, coo, {from: coo,value: 0});
await instance.createPromoKitty(942217712, coo, {from: coo,value: 0});
await instance.createPromoKitty(460430674, coo, {from: coo,value: 0});
await instance.createPromoKitty(195264591, coo, {from: coo,value: 0});
await instance.createPromoKitty(342222382, coo, {from: coo,value: 0});
await instance.createPromoKitty(353042021, coo, {from: coo,value: 0});
await instance.createPromoKitty(953935891, coo, {from: coo,value: 0});
await instance.createPromoKitty(432166109, coo, {from: coo,value: 0});
await instance.createPromoKitty(240052614, coo, {from: coo,value: 0});
await instance.createPromoKitty(302584201, coo, {from: coo,value: 0});
await instance.createPromoKitty(54494234, coo, {from: coo,value: 0});
await instance.createPromoKitty(635737006, coo, {from: coo,value: 0});
await instance.createPromoKitty(35945306, coo, {from: coo,value: 0});
await instance.createPromoKitty(344287741, coo, {from: coo,value: 0});
await instance.createPromoKitty(794505282, coo, {from: coo,value: 0});
await instance.createPromoKitty(462346689, coo, {from: coo,value: 0});
await instance.createPromoKitty(240871943, coo, {from: coo,value: 0});
await instance.createPromoKitty(58591818, coo, {from: coo,value: 0});
await instance.createPromoKitty(956649154, coo, {from: coo,value: 0});
await instance.createPromoKitty(806282183, coo, {from: coo,value: 0});
await instance.createPromoKitty(719887419, coo, {from: coo,value: 0});
await instance.createPromoKitty(147825694, coo, {from: coo,value: 0});
await instance.createPromoKitty(800952176, coo, {from: coo,value: 0});
await instance.createPromoKitty(777180687, coo, {from: coo,value: 0});
await instance.createPromoKitty(449431069, coo, {from: coo,value: 0});
await instance.createPromoKitty(753977033, coo, {from: coo,value: 0});
await instance.createPromoKitty(596748185, coo, {from: coo,value: 0});
await instance.createPromoKitty(124705025, coo, {from: coo,value: 0});
await instance.createPromoKitty(189772524, coo, {from: coo,value: 0});
await instance.createPromoKitty(604043234, coo, {from: coo,value: 0});
await instance.createPromoKitty(227802853, coo, {from: coo,value: 0});
await instance.createPromoKitty(534283708, coo, {from: coo,value: 0});
await instance.createPromoKitty(741159419, coo, {from: coo,value: 0});
await instance.createPromoKitty(395166684, coo, {from: coo,value: 0});
await instance.createPromoKitty(562821884, coo, {from: coo,value: 0});
await instance.createPromoKitty(733998350, coo, {from: coo,value: 0});
await instance.createPromoKitty(733123010, coo, {from: coo,value: 0});
await instance.createPromoKitty(158137171, coo, {from: coo,value: 0});
await instance.createPromoKitty(503357435, coo, {from: coo,value: 0});
await instance.createPromoKitty(992425272, coo, {from: coo,value: 0});
await instance.createPromoKitty(207077489, coo, {from: coo,value: 0});
await instance.createPromoKitty(280614431, coo, {from: coo,value: 0});
await instance.createPromoKitty(315389372, coo, {from: coo,value: 0});
await instance.createPromoKitty(369644832, coo, {from: coo,value: 0});
await instance.createPromoKitty(154988584, coo, {from: coo,value: 0});
await instance.createPromoKitty(392347682, coo, {from: coo,value: 0});
await instance.createPromoKitty(350746079, coo, {from: coo,value: 0});
await instance.createPromoKitty(845757226, coo, {from: coo,value: 0});
await instance.createPromoKitty(419821108, coo, {from: coo,value: 0});
await instance.createPromoKitty(866473177, coo, {from: coo,value: 0});
await instance.createPromoKitty(793197804, coo, {from: coo,value: 0});
await instance.createPromoKitty(797569383, coo, {from: coo,value: 0});
await instance.createPromoKitty(659660251, coo, {from: coo,value: 0});
await instance.createPromoKitty(717404655, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(38, 31, {from: coo});
await instance.breedWith(1, 17, {from: coo});
await instance.breedWith(15, 18, {from: coo});
await instance.breedWith(22, 37, {from: coo});
await instance.breedWith(20, 27, {from: coo});
await instance.breedWith(2, 35, {from: coo});
await instance.breedWith(13, 14, {from: coo});
await instance.breedWith(6, 24, {from: coo});
await instance.breedWith(33, 36, {from: coo});
await instance.breedWith(32, 40, {from: coo});
await instance.breedWith(30, 25, {from: coo});
await instance.breedWith(9, 39, {from: coo});
await instance.breedWith(12, 4, {from: coo});
await instance.breedWith(3, 19, {from: coo});
await instance.breedWith(34, 21, {from: coo});
await instance.breedWith(23, 29, {from: coo});
await instance.breedWith(26, 5, {from: coo});
await instance.breedWith(8, 11, {from: coo});
await instance.breedWith(28, 16, {from: coo});
await instance.breedWith(10, 7, {from: coo});
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
await instance.giveBirth(38);
await instance.giveBirth(1);
await instance.giveBirth(15);
await instance.giveBirth(22);
await instance.giveBirth(20);
await instance.giveBirth(2);
await instance.giveBirth(13);
await instance.giveBirth(6);
await instance.giveBirth(33);
await instance.giveBirth(32);
await instance.giveBirth(30);
await instance.giveBirth(9);
await instance.giveBirth(12);
await instance.giveBirth(3);
await instance.giveBirth(34);
await instance.giveBirth(23);
await instance.giveBirth(26);
await instance.giveBirth(8);
await instance.giveBirth(28);
await instance.giveBirth(10);
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
