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
await instance.createPromoKitty(196413540, coo, {from: coo,value: 0});
await instance.createPromoKitty(694586969, coo, {from: coo,value: 0});
await instance.createPromoKitty(500994085, coo, {from: coo,value: 0});
await instance.createPromoKitty(632932481, coo, {from: coo,value: 0});
await instance.createPromoKitty(321514195, coo, {from: coo,value: 0});
await instance.createPromoKitty(765353769, coo, {from: coo,value: 0});
await instance.createPromoKitty(260016262, coo, {from: coo,value: 0});
await instance.createPromoKitty(692691890, coo, {from: coo,value: 0});
await instance.createPromoKitty(828533474, coo, {from: coo,value: 0});
await instance.createPromoKitty(286239492, coo, {from: coo,value: 0});
await instance.createPromoKitty(591923275, coo, {from: coo,value: 0});
await instance.createPromoKitty(691058751, coo, {from: coo,value: 0});
await instance.createPromoKitty(770150258, coo, {from: coo,value: 0});
await instance.createPromoKitty(127533480, coo, {from: coo,value: 0});
await instance.createPromoKitty(193723285, coo, {from: coo,value: 0});
await instance.createPromoKitty(627443296, coo, {from: coo,value: 0});
await instance.createPromoKitty(704681535, coo, {from: coo,value: 0});
await instance.createPromoKitty(615416073, coo, {from: coo,value: 0});
await instance.createPromoKitty(110965848, coo, {from: coo,value: 0});
await instance.createPromoKitty(378868779, coo, {from: coo,value: 0});
await instance.createPromoKitty(402576349, coo, {from: coo,value: 0});
await instance.createPromoKitty(171601716, coo, {from: coo,value: 0});
await instance.createPromoKitty(515616338, coo, {from: coo,value: 0});
await instance.createPromoKitty(526635418, coo, {from: coo,value: 0});
await instance.createPromoKitty(227323561, coo, {from: coo,value: 0});
await instance.createPromoKitty(533710596, coo, {from: coo,value: 0});
await instance.createPromoKitty(143044087, coo, {from: coo,value: 0});
await instance.createPromoKitty(153768489, coo, {from: coo,value: 0});
await instance.createPromoKitty(927480315, coo, {from: coo,value: 0});
await instance.createPromoKitty(264853951, coo, {from: coo,value: 0});
await instance.createPromoKitty(642878534, coo, {from: coo,value: 0});
await instance.createPromoKitty(646156421, coo, {from: coo,value: 0});
await instance.createPromoKitty(361784121, coo, {from: coo,value: 0});
await instance.createPromoKitty(953357798, coo, {from: coo,value: 0});
await instance.createPromoKitty(819515988, coo, {from: coo,value: 0});
await instance.createPromoKitty(176224681, coo, {from: coo,value: 0});
await instance.createPromoKitty(846437453, coo, {from: coo,value: 0});
await instance.createPromoKitty(921645538, coo, {from: coo,value: 0});
await instance.createPromoKitty(300149951, coo, {from: coo,value: 0});
await instance.createPromoKitty(639490506, coo, {from: coo,value: 0});
await instance.createPromoKitty(237071678, coo, {from: coo,value: 0});
await instance.createPromoKitty(366175433, coo, {from: coo,value: 0});
await instance.createPromoKitty(844278175, coo, {from: coo,value: 0});
await instance.createPromoKitty(675746536, coo, {from: coo,value: 0});
await instance.createPromoKitty(61857223, coo, {from: coo,value: 0});
await instance.createPromoKitty(128063426, coo, {from: coo,value: 0});
await instance.createPromoKitty(442143356, coo, {from: coo,value: 0});
await instance.createPromoKitty(694423860, coo, {from: coo,value: 0});
await instance.createPromoKitty(816423698, coo, {from: coo,value: 0});
await instance.createPromoKitty(928128024, coo, {from: coo,value: 0});
await instance.createPromoKitty(256313868, coo, {from: coo,value: 0});
await instance.createPromoKitty(307403599, coo, {from: coo,value: 0});
await instance.createPromoKitty(671356737, coo, {from: coo,value: 0});
await instance.createPromoKitty(489809316, coo, {from: coo,value: 0});
await instance.createPromoKitty(96387884, coo, {from: coo,value: 0});
await instance.createPromoKitty(323770077, coo, {from: coo,value: 0});
await instance.createPromoKitty(301225156, coo, {from: coo,value: 0});
await instance.createPromoKitty(348437969, coo, {from: coo,value: 0});
await instance.createPromoKitty(732192525, coo, {from: coo,value: 0});
await instance.createPromoKitty(777805286, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(8, 26, {from: coo});
await instance.breedWith(5, 38, {from: coo});
await instance.breedWith(32, 4, {from: coo});
await instance.breedWith(37, 14, {from: coo});
await instance.breedWith(33, 12, {from: coo});
await instance.breedWith(40, 16, {from: coo});
await instance.breedWith(21, 39, {from: coo});
await instance.breedWith(10, 24, {from: coo});
await instance.breedWith(17, 30, {from: coo});
await instance.breedWith(6, 35, {from: coo});
await instance.breedWith(22, 29, {from: coo});
await instance.breedWith(36, 7, {from: coo});
await instance.breedWith(11, 25, {from: coo});
await instance.breedWith(19, 31, {from: coo});
await instance.breedWith(18, 28, {from: coo});
await instance.breedWith(27, 2, {from: coo});
await instance.breedWith(13, 23, {from: coo});
await instance.breedWith(15, 34, {from: coo});
await instance.breedWith(3, 1, {from: coo});
await instance.breedWith(20, 9, {from: coo});
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
await instance.giveBirth(5);
await instance.giveBirth(32);
await instance.giveBirth(37);
await instance.giveBirth(33);
await instance.giveBirth(40);
await instance.giveBirth(21);
await instance.giveBirth(10);
await instance.giveBirth(17);
await instance.giveBirth(6);
await instance.giveBirth(22);
await instance.giveBirth(36);
await instance.giveBirth(11);
await instance.giveBirth(19);
await instance.giveBirth(18);
await instance.giveBirth(27);
await instance.giveBirth(13);
await instance.giveBirth(15);
await instance.giveBirth(3);
await instance.giveBirth(20);
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
