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
await instance.createPromoKitty(61055534, coo, {from: coo,value: 0});
await instance.createPromoKitty(64695994, coo, {from: coo,value: 0});
await instance.createPromoKitty(190003538, coo, {from: coo,value: 0});
await instance.createPromoKitty(42213168, coo, {from: coo,value: 0});
await instance.createPromoKitty(888770251, coo, {from: coo,value: 0});
await instance.createPromoKitty(465968638, coo, {from: coo,value: 0});
await instance.createPromoKitty(4810265, coo, {from: coo,value: 0});
await instance.createPromoKitty(404287242, coo, {from: coo,value: 0});
await instance.createPromoKitty(686891207, coo, {from: coo,value: 0});
await instance.createPromoKitty(546114567, coo, {from: coo,value: 0});
await instance.createPromoKitty(874605780, coo, {from: coo,value: 0});
await instance.createPromoKitty(223953692, coo, {from: coo,value: 0});
await instance.createPromoKitty(982055600, coo, {from: coo,value: 0});
await instance.createPromoKitty(795159180, coo, {from: coo,value: 0});
await instance.createPromoKitty(395617744, coo, {from: coo,value: 0});
await instance.createPromoKitty(737926685, coo, {from: coo,value: 0});
await instance.createPromoKitty(769707293, coo, {from: coo,value: 0});
await instance.createPromoKitty(683041301, coo, {from: coo,value: 0});
await instance.createPromoKitty(239675641, coo, {from: coo,value: 0});
await instance.createPromoKitty(440819709, coo, {from: coo,value: 0});
await instance.createPromoKitty(281947320, coo, {from: coo,value: 0});
await instance.createPromoKitty(575550635, coo, {from: coo,value: 0});
await instance.createPromoKitty(887579540, coo, {from: coo,value: 0});
await instance.createPromoKitty(115999773, coo, {from: coo,value: 0});
await instance.createPromoKitty(753043408, coo, {from: coo,value: 0});
await instance.createPromoKitty(421875836, coo, {from: coo,value: 0});
await instance.createPromoKitty(217215097, coo, {from: coo,value: 0});
await instance.createPromoKitty(532230994, coo, {from: coo,value: 0});
await instance.createPromoKitty(968760903, coo, {from: coo,value: 0});
await instance.createPromoKitty(160483952, coo, {from: coo,value: 0});
await instance.createPromoKitty(851545951, coo, {from: coo,value: 0});
await instance.createPromoKitty(517165782, coo, {from: coo,value: 0});
await instance.createPromoKitty(466526822, coo, {from: coo,value: 0});
await instance.createPromoKitty(963074837, coo, {from: coo,value: 0});
await instance.createPromoKitty(526431701, coo, {from: coo,value: 0});
await instance.createPromoKitty(559604241, coo, {from: coo,value: 0});
await instance.createPromoKitty(166936650, coo, {from: coo,value: 0});
await instance.createPromoKitty(658317200, coo, {from: coo,value: 0});
await instance.createPromoKitty(530752019, coo, {from: coo,value: 0});
await instance.createPromoKitty(634625561, coo, {from: coo,value: 0});
await instance.createPromoKitty(819189182, coo, {from: coo,value: 0});
await instance.createPromoKitty(204409648, coo, {from: coo,value: 0});
await instance.createPromoKitty(906626344, coo, {from: coo,value: 0});
await instance.createPromoKitty(393619650, coo, {from: coo,value: 0});
await instance.createPromoKitty(504286039, coo, {from: coo,value: 0});
await instance.createPromoKitty(200315004, coo, {from: coo,value: 0});
await instance.createPromoKitty(784151952, coo, {from: coo,value: 0});
await instance.createPromoKitty(146019746, coo, {from: coo,value: 0});
await instance.createPromoKitty(135305262, coo, {from: coo,value: 0});
await instance.createPromoKitty(164744192, coo, {from: coo,value: 0});
await instance.createPromoKitty(462939254, coo, {from: coo,value: 0});
await instance.createPromoKitty(909094798, coo, {from: coo,value: 0});
await instance.createPromoKitty(680580845, coo, {from: coo,value: 0});
await instance.createPromoKitty(692597165, coo, {from: coo,value: 0});
await instance.createPromoKitty(69925770, coo, {from: coo,value: 0});
await instance.createPromoKitty(820263087, coo, {from: coo,value: 0});
await instance.createPromoKitty(944998874, coo, {from: coo,value: 0});
await instance.createPromoKitty(982961449, coo, {from: coo,value: 0});
await instance.createPromoKitty(645049015, coo, {from: coo,value: 0});
await instance.createPromoKitty(389974520, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(9, 39, {from: coo});
await instance.breedWith(13, 37, {from: coo});
await instance.breedWith(27, 23, {from: coo});
await instance.breedWith(21, 2, {from: coo});
await instance.breedWith(3, 31, {from: coo});
await instance.breedWith(17, 25, {from: coo});
await instance.breedWith(24, 33, {from: coo});
await instance.breedWith(7, 15, {from: coo});
await instance.breedWith(5, 40, {from: coo});
await instance.breedWith(19, 18, {from: coo});
await instance.breedWith(16, 6, {from: coo});
await instance.breedWith(22, 14, {from: coo});
await instance.breedWith(30, 10, {from: coo});
await instance.breedWith(35, 34, {from: coo});
await instance.breedWith(29, 4, {from: coo});
await instance.breedWith(20, 32, {from: coo});
await instance.breedWith(38, 36, {from: coo});
await instance.breedWith(26, 28, {from: coo});
await instance.breedWith(12, 11, {from: coo});
await instance.breedWith(8, 1, {from: coo});
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
await instance.giveBirth(9);
await instance.giveBirth(13);
await instance.giveBirth(27);
await instance.giveBirth(21);
await instance.giveBirth(3);
await instance.giveBirth(17);
await instance.giveBirth(24);
await instance.giveBirth(7);
await instance.giveBirth(5);
await instance.giveBirth(19);
await instance.giveBirth(16);
await instance.giveBirth(22);
await instance.giveBirth(30);
await instance.giveBirth(35);
await instance.giveBirth(29);
await instance.giveBirth(20);
await instance.giveBirth(38);
await instance.giveBirth(26);
await instance.giveBirth(12);
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
