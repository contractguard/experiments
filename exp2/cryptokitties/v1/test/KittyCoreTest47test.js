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
await instance.createPromoKitty(603494441, coo, {from: coo,value: 0});
await instance.createPromoKitty(7262511, coo, {from: coo,value: 0});
await instance.createPromoKitty(465658807, coo, {from: coo,value: 0});
await instance.createPromoKitty(525106180, coo, {from: coo,value: 0});
await instance.createPromoKitty(479044437, coo, {from: coo,value: 0});
await instance.createPromoKitty(141836627, coo, {from: coo,value: 0});
await instance.createPromoKitty(900993640, coo, {from: coo,value: 0});
await instance.createPromoKitty(948624464, coo, {from: coo,value: 0});
await instance.createPromoKitty(708755184, coo, {from: coo,value: 0});
await instance.createPromoKitty(524250289, coo, {from: coo,value: 0});
await instance.createPromoKitty(935745858, coo, {from: coo,value: 0});
await instance.createPromoKitty(116250770, coo, {from: coo,value: 0});
await instance.createPromoKitty(230031787, coo, {from: coo,value: 0});
await instance.createPromoKitty(310905032, coo, {from: coo,value: 0});
await instance.createPromoKitty(147954004, coo, {from: coo,value: 0});
await instance.createPromoKitty(333755047, coo, {from: coo,value: 0});
await instance.createPromoKitty(193136977, coo, {from: coo,value: 0});
await instance.createPromoKitty(380462364, coo, {from: coo,value: 0});
await instance.createPromoKitty(167376584, coo, {from: coo,value: 0});
await instance.createPromoKitty(958809979, coo, {from: coo,value: 0});
await instance.createPromoKitty(843014883, coo, {from: coo,value: 0});
await instance.createPromoKitty(506263989, coo, {from: coo,value: 0});
await instance.createPromoKitty(69220435, coo, {from: coo,value: 0});
await instance.createPromoKitty(893627700, coo, {from: coo,value: 0});
await instance.createPromoKitty(582560689, coo, {from: coo,value: 0});
await instance.createPromoKitty(111515181, coo, {from: coo,value: 0});
await instance.createPromoKitty(618036765, coo, {from: coo,value: 0});
await instance.createPromoKitty(579273930, coo, {from: coo,value: 0});
await instance.createPromoKitty(816823984, coo, {from: coo,value: 0});
await instance.createPromoKitty(68858321, coo, {from: coo,value: 0});
await instance.createPromoKitty(16746831, coo, {from: coo,value: 0});
await instance.createPromoKitty(391875112, coo, {from: coo,value: 0});
await instance.createPromoKitty(437959848, coo, {from: coo,value: 0});
await instance.createPromoKitty(820326630, coo, {from: coo,value: 0});
await instance.createPromoKitty(371488521, coo, {from: coo,value: 0});
await instance.createPromoKitty(167950724, coo, {from: coo,value: 0});
await instance.createPromoKitty(666784110, coo, {from: coo,value: 0});
await instance.createPromoKitty(780014171, coo, {from: coo,value: 0});
await instance.createPromoKitty(610925658, coo, {from: coo,value: 0});
await instance.createPromoKitty(131730530, coo, {from: coo,value: 0});
await instance.createPromoKitty(778448016, coo, {from: coo,value: 0});
await instance.createPromoKitty(376074648, coo, {from: coo,value: 0});
await instance.createPromoKitty(318541783, coo, {from: coo,value: 0});
await instance.createPromoKitty(258333786, coo, {from: coo,value: 0});
await instance.createPromoKitty(228746641, coo, {from: coo,value: 0});
await instance.createPromoKitty(699191867, coo, {from: coo,value: 0});
await instance.createPromoKitty(549687598, coo, {from: coo,value: 0});
await instance.createPromoKitty(397730251, coo, {from: coo,value: 0});
await instance.createPromoKitty(826767702, coo, {from: coo,value: 0});
await instance.createPromoKitty(744795627, coo, {from: coo,value: 0});
await instance.createPromoKitty(194005550, coo, {from: coo,value: 0});
await instance.createPromoKitty(327995953, coo, {from: coo,value: 0});
await instance.createPromoKitty(342007885, coo, {from: coo,value: 0});
await instance.createPromoKitty(776641132, coo, {from: coo,value: 0});
await instance.createPromoKitty(375082950, coo, {from: coo,value: 0});
await instance.createPromoKitty(361874545, coo, {from: coo,value: 0});
await instance.createPromoKitty(221403921, coo, {from: coo,value: 0});
await instance.createPromoKitty(707345216, coo, {from: coo,value: 0});
await instance.createPromoKitty(471616122, coo, {from: coo,value: 0});
await instance.createPromoKitty(906377059, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(3, 13, {from: coo});
await instance.breedWith(32, 38, {from: coo});
await instance.breedWith(8, 6, {from: coo});
await instance.breedWith(37, 26, {from: coo});
await instance.breedWith(21, 15, {from: coo});
await instance.breedWith(31, 30, {from: coo});
await instance.breedWith(29, 34, {from: coo});
await instance.breedWith(17, 33, {from: coo});
await instance.breedWith(16, 35, {from: coo});
await instance.breedWith(19, 27, {from: coo});
await instance.breedWith(1, 24, {from: coo});
await instance.breedWith(12, 20, {from: coo});
await instance.breedWith(4, 11, {from: coo});
await instance.breedWith(2, 22, {from: coo});
await instance.breedWith(40, 5, {from: coo});
await instance.breedWith(14, 28, {from: coo});
await instance.breedWith(18, 7, {from: coo});
await instance.breedWith(25, 10, {from: coo});
await instance.breedWith(23, 9, {from: coo});
await instance.breedWith(39, 36, {from: coo});
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
await instance.giveBirth(3);
await instance.giveBirth(32);
await instance.giveBirth(8);
await instance.giveBirth(37);
await instance.giveBirth(21);
await instance.giveBirth(31);
await instance.giveBirth(29);
await instance.giveBirth(17);
await instance.giveBirth(16);
await instance.giveBirth(19);
await instance.giveBirth(1);
await instance.giveBirth(12);
await instance.giveBirth(4);
await instance.giveBirth(2);
await instance.giveBirth(40);
await instance.giveBirth(14);
await instance.giveBirth(18);
await instance.giveBirth(25);
await instance.giveBirth(23);
await instance.giveBirth(39);
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
