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
await instance.createPromoKitty(844719901, coo, {from: coo,value: 0});
await instance.createPromoKitty(456245177, coo, {from: coo,value: 0});
await instance.createPromoKitty(528906388, coo, {from: coo,value: 0});
await instance.createPromoKitty(91352907, coo, {from: coo,value: 0});
await instance.createPromoKitty(592032601, coo, {from: coo,value: 0});
await instance.createPromoKitty(711270372, coo, {from: coo,value: 0});
await instance.createPromoKitty(294428164, coo, {from: coo,value: 0});
await instance.createPromoKitty(708197820, coo, {from: coo,value: 0});
await instance.createPromoKitty(408769174, coo, {from: coo,value: 0});
await instance.createPromoKitty(861446220, coo, {from: coo,value: 0});
await instance.createPromoKitty(627848551, coo, {from: coo,value: 0});
await instance.createPromoKitty(256045141, coo, {from: coo,value: 0});
await instance.createPromoKitty(586198254, coo, {from: coo,value: 0});
await instance.createPromoKitty(64634608, coo, {from: coo,value: 0});
await instance.createPromoKitty(794868088, coo, {from: coo,value: 0});
await instance.createPromoKitty(998106382, coo, {from: coo,value: 0});
await instance.createPromoKitty(602422204, coo, {from: coo,value: 0});
await instance.createPromoKitty(395616600, coo, {from: coo,value: 0});
await instance.createPromoKitty(329896705, coo, {from: coo,value: 0});
await instance.createPromoKitty(462641960, coo, {from: coo,value: 0});
await instance.createPromoKitty(134685566, coo, {from: coo,value: 0});
await instance.createPromoKitty(401683430, coo, {from: coo,value: 0});
await instance.createPromoKitty(862920080, coo, {from: coo,value: 0});
await instance.createPromoKitty(183547162, coo, {from: coo,value: 0});
await instance.createPromoKitty(324995600, coo, {from: coo,value: 0});
await instance.createPromoKitty(597386431, coo, {from: coo,value: 0});
await instance.createPromoKitty(779745244, coo, {from: coo,value: 0});
await instance.createPromoKitty(164819111, coo, {from: coo,value: 0});
await instance.createPromoKitty(696328190, coo, {from: coo,value: 0});
await instance.createPromoKitty(698173560, coo, {from: coo,value: 0});
await instance.createPromoKitty(54936270, coo, {from: coo,value: 0});
await instance.createPromoKitty(254608457, coo, {from: coo,value: 0});
await instance.createPromoKitty(723970172, coo, {from: coo,value: 0});
await instance.createPromoKitty(8575500, coo, {from: coo,value: 0});
await instance.createPromoKitty(514840028, coo, {from: coo,value: 0});
await instance.createPromoKitty(654827090, coo, {from: coo,value: 0});
await instance.createPromoKitty(982576162, coo, {from: coo,value: 0});
await instance.createPromoKitty(21473969, coo, {from: coo,value: 0});
await instance.createPromoKitty(944424509, coo, {from: coo,value: 0});
await instance.createPromoKitty(285910031, coo, {from: coo,value: 0});
await instance.createPromoKitty(390863505, coo, {from: coo,value: 0});
await instance.createPromoKitty(307187421, coo, {from: coo,value: 0});
await instance.createPromoKitty(908556022, coo, {from: coo,value: 0});
await instance.createPromoKitty(783010651, coo, {from: coo,value: 0});
await instance.createPromoKitty(8494068, coo, {from: coo,value: 0});
await instance.createPromoKitty(377012541, coo, {from: coo,value: 0});
await instance.createPromoKitty(554171774, coo, {from: coo,value: 0});
await instance.createPromoKitty(738992063, coo, {from: coo,value: 0});
await instance.createPromoKitty(17041391, coo, {from: coo,value: 0});
await instance.createPromoKitty(316728930, coo, {from: coo,value: 0});
await instance.createPromoKitty(664591770, coo, {from: coo,value: 0});
await instance.createPromoKitty(128392732, coo, {from: coo,value: 0});
await instance.createPromoKitty(511421932, coo, {from: coo,value: 0});
await instance.createPromoKitty(590530138, coo, {from: coo,value: 0});
await instance.createPromoKitty(456056551, coo, {from: coo,value: 0});
await instance.createPromoKitty(360796752, coo, {from: coo,value: 0});
await instance.createPromoKitty(937717240, coo, {from: coo,value: 0});
await instance.createPromoKitty(280244442, coo, {from: coo,value: 0});
await instance.createPromoKitty(767082135, coo, {from: coo,value: 0});
await instance.createPromoKitty(621619926, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(37, 13, {from: coo});
await instance.breedWith(17, 33, {from: coo});
await instance.breedWith(21, 31, {from: coo});
await instance.breedWith(26, 8, {from: coo});
await instance.breedWith(19, 30, {from: coo});
await instance.breedWith(16, 23, {from: coo});
await instance.breedWith(1, 4, {from: coo});
await instance.breedWith(6, 40, {from: coo});
await instance.breedWith(7, 15, {from: coo});
await instance.breedWith(32, 11, {from: coo});
await instance.breedWith(14, 12, {from: coo});
await instance.breedWith(10, 34, {from: coo});
await instance.breedWith(18, 36, {from: coo});
await instance.breedWith(5, 29, {from: coo});
await instance.breedWith(39, 24, {from: coo});
await instance.breedWith(27, 35, {from: coo});
await instance.breedWith(20, 9, {from: coo});
await instance.breedWith(28, 38, {from: coo});
await instance.breedWith(3, 22, {from: coo});
await instance.breedWith(2, 25, {from: coo});
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
await instance.giveBirth(37);
await instance.giveBirth(17);
await instance.giveBirth(21);
await instance.giveBirth(26);
await instance.giveBirth(19);
await instance.giveBirth(16);
await instance.giveBirth(1);
await instance.giveBirth(6);
await instance.giveBirth(7);
await instance.giveBirth(32);
await instance.giveBirth(14);
await instance.giveBirth(10);
await instance.giveBirth(18);
await instance.giveBirth(5);
await instance.giveBirth(39);
await instance.giveBirth(27);
await instance.giveBirth(20);
await instance.giveBirth(28);
await instance.giveBirth(3);
await instance.giveBirth(2);
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
