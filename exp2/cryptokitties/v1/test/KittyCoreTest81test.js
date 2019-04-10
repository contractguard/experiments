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
await instance.createPromoKitty(395422135, coo, {from: coo,value: 0});
await instance.createPromoKitty(937502917, coo, {from: coo,value: 0});
await instance.createPromoKitty(788040462, coo, {from: coo,value: 0});
await instance.createPromoKitty(48540653, coo, {from: coo,value: 0});
await instance.createPromoKitty(854342710, coo, {from: coo,value: 0});
await instance.createPromoKitty(320130398, coo, {from: coo,value: 0});
await instance.createPromoKitty(215883305, coo, {from: coo,value: 0});
await instance.createPromoKitty(997047158, coo, {from: coo,value: 0});
await instance.createPromoKitty(506020842, coo, {from: coo,value: 0});
await instance.createPromoKitty(486767937, coo, {from: coo,value: 0});
await instance.createPromoKitty(479915249, coo, {from: coo,value: 0});
await instance.createPromoKitty(680077207, coo, {from: coo,value: 0});
await instance.createPromoKitty(573173133, coo, {from: coo,value: 0});
await instance.createPromoKitty(367397054, coo, {from: coo,value: 0});
await instance.createPromoKitty(756965774, coo, {from: coo,value: 0});
await instance.createPromoKitty(875089145, coo, {from: coo,value: 0});
await instance.createPromoKitty(990241576, coo, {from: coo,value: 0});
await instance.createPromoKitty(330515115, coo, {from: coo,value: 0});
await instance.createPromoKitty(920214252, coo, {from: coo,value: 0});
await instance.createPromoKitty(609787193, coo, {from: coo,value: 0});
await instance.createPromoKitty(198923585, coo, {from: coo,value: 0});
await instance.createPromoKitty(498116268, coo, {from: coo,value: 0});
await instance.createPromoKitty(875654427, coo, {from: coo,value: 0});
await instance.createPromoKitty(774619465, coo, {from: coo,value: 0});
await instance.createPromoKitty(779192662, coo, {from: coo,value: 0});
await instance.createPromoKitty(830630992, coo, {from: coo,value: 0});
await instance.createPromoKitty(208615680, coo, {from: coo,value: 0});
await instance.createPromoKitty(620238630, coo, {from: coo,value: 0});
await instance.createPromoKitty(774497104, coo, {from: coo,value: 0});
await instance.createPromoKitty(813536575, coo, {from: coo,value: 0});
await instance.createPromoKitty(389534229, coo, {from: coo,value: 0});
await instance.createPromoKitty(187686766, coo, {from: coo,value: 0});
await instance.createPromoKitty(784425995, coo, {from: coo,value: 0});
await instance.createPromoKitty(560711856, coo, {from: coo,value: 0});
await instance.createPromoKitty(776314551, coo, {from: coo,value: 0});
await instance.createPromoKitty(133839805, coo, {from: coo,value: 0});
await instance.createPromoKitty(184502471, coo, {from: coo,value: 0});
await instance.createPromoKitty(252030241, coo, {from: coo,value: 0});
await instance.createPromoKitty(268010708, coo, {from: coo,value: 0});
await instance.createPromoKitty(646531971, coo, {from: coo,value: 0});
await instance.createPromoKitty(319241831, coo, {from: coo,value: 0});
await instance.createPromoKitty(273541797, coo, {from: coo,value: 0});
await instance.createPromoKitty(538694044, coo, {from: coo,value: 0});
await instance.createPromoKitty(547308257, coo, {from: coo,value: 0});
await instance.createPromoKitty(383252574, coo, {from: coo,value: 0});
await instance.createPromoKitty(836161996, coo, {from: coo,value: 0});
await instance.createPromoKitty(550061954, coo, {from: coo,value: 0});
await instance.createPromoKitty(514681508, coo, {from: coo,value: 0});
await instance.createPromoKitty(814348186, coo, {from: coo,value: 0});
await instance.createPromoKitty(362955963, coo, {from: coo,value: 0});
await instance.createPromoKitty(556212579, coo, {from: coo,value: 0});
await instance.createPromoKitty(329878839, coo, {from: coo,value: 0});
await instance.createPromoKitty(294869206, coo, {from: coo,value: 0});
await instance.createPromoKitty(791137271, coo, {from: coo,value: 0});
await instance.createPromoKitty(175744632, coo, {from: coo,value: 0});
await instance.createPromoKitty(126168954, coo, {from: coo,value: 0});
await instance.createPromoKitty(8452214, coo, {from: coo,value: 0});
await instance.createPromoKitty(804914562, coo, {from: coo,value: 0});
await instance.createPromoKitty(802904017, coo, {from: coo,value: 0});
await instance.createPromoKitty(741287943, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(30, 27, {from: coo});
await instance.breedWith(10, 12, {from: coo});
await instance.breedWith(16, 26, {from: coo});
await instance.breedWith(40, 34, {from: coo});
await instance.breedWith(14, 31, {from: coo});
await instance.breedWith(21, 9, {from: coo});
await instance.breedWith(23, 18, {from: coo});
await instance.breedWith(38, 11, {from: coo});
await instance.breedWith(28, 36, {from: coo});
await instance.breedWith(20, 6, {from: coo});
await instance.breedWith(4, 37, {from: coo});
await instance.breedWith(8, 35, {from: coo});
await instance.breedWith(7, 13, {from: coo});
await instance.breedWith(5, 39, {from: coo});
await instance.breedWith(25, 2, {from: coo});
await instance.breedWith(24, 33, {from: coo});
await instance.breedWith(3, 29, {from: coo});
await instance.breedWith(19, 15, {from: coo});
await instance.breedWith(1, 17, {from: coo});
await instance.breedWith(22, 32, {from: coo});
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
await instance.giveBirth(10);
await instance.giveBirth(16);
await instance.giveBirth(40);
await instance.giveBirth(14);
await instance.giveBirth(21);
await instance.giveBirth(23);
await instance.giveBirth(38);
await instance.giveBirth(28);
await instance.giveBirth(20);
await instance.giveBirth(4);
await instance.giveBirth(8);
await instance.giveBirth(7);
await instance.giveBirth(5);
await instance.giveBirth(25);
await instance.giveBirth(24);
await instance.giveBirth(3);
await instance.giveBirth(19);
await instance.giveBirth(1);
await instance.giveBirth(22);
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
