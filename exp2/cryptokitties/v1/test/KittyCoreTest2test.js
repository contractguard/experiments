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
await instance.createPromoKitty(731336176, coo, {from: coo,value: 0});
await instance.createPromoKitty(262328492, coo, {from: coo,value: 0});
await instance.createPromoKitty(456367925, coo, {from: coo,value: 0});
await instance.createPromoKitty(521410026, coo, {from: coo,value: 0});
await instance.createPromoKitty(760484249, coo, {from: coo,value: 0});
await instance.createPromoKitty(180824219, coo, {from: coo,value: 0});
await instance.createPromoKitty(134016845, coo, {from: coo,value: 0});
await instance.createPromoKitty(628960937, coo, {from: coo,value: 0});
await instance.createPromoKitty(430231254, coo, {from: coo,value: 0});
await instance.createPromoKitty(916122093, coo, {from: coo,value: 0});
await instance.createPromoKitty(125225919, coo, {from: coo,value: 0});
await instance.createPromoKitty(336155742, coo, {from: coo,value: 0});
await instance.createPromoKitty(271570992, coo, {from: coo,value: 0});
await instance.createPromoKitty(781619844, coo, {from: coo,value: 0});
await instance.createPromoKitty(54177274, coo, {from: coo,value: 0});
await instance.createPromoKitty(603649025, coo, {from: coo,value: 0});
await instance.createPromoKitty(435183581, coo, {from: coo,value: 0});
await instance.createPromoKitty(623216345, coo, {from: coo,value: 0});
await instance.createPromoKitty(210068935, coo, {from: coo,value: 0});
await instance.createPromoKitty(811923069, coo, {from: coo,value: 0});
await instance.createPromoKitty(557845342, coo, {from: coo,value: 0});
await instance.createPromoKitty(845625708, coo, {from: coo,value: 0});
await instance.createPromoKitty(11498141, coo, {from: coo,value: 0});
await instance.createPromoKitty(797413489, coo, {from: coo,value: 0});
await instance.createPromoKitty(831007125, coo, {from: coo,value: 0});
await instance.createPromoKitty(976027861, coo, {from: coo,value: 0});
await instance.createPromoKitty(230229556, coo, {from: coo,value: 0});
await instance.createPromoKitty(12530466, coo, {from: coo,value: 0});
await instance.createPromoKitty(802437765, coo, {from: coo,value: 0});
await instance.createPromoKitty(893999559, coo, {from: coo,value: 0});
await instance.createPromoKitty(130021953, coo, {from: coo,value: 0});
await instance.createPromoKitty(257891780, coo, {from: coo,value: 0});
await instance.createPromoKitty(177032380, coo, {from: coo,value: 0});
await instance.createPromoKitty(193171406, coo, {from: coo,value: 0});
await instance.createPromoKitty(430470362, coo, {from: coo,value: 0});
await instance.createPromoKitty(581668219, coo, {from: coo,value: 0});
await instance.createPromoKitty(61419620, coo, {from: coo,value: 0});
await instance.createPromoKitty(439718335, coo, {from: coo,value: 0});
await instance.createPromoKitty(591825988, coo, {from: coo,value: 0});
await instance.createPromoKitty(743387771, coo, {from: coo,value: 0});
await instance.createPromoKitty(918787450, coo, {from: coo,value: 0});
await instance.createPromoKitty(722374999, coo, {from: coo,value: 0});
await instance.createPromoKitty(336211998, coo, {from: coo,value: 0});
await instance.createPromoKitty(30373719, coo, {from: coo,value: 0});
await instance.createPromoKitty(455513319, coo, {from: coo,value: 0});
await instance.createPromoKitty(245555548, coo, {from: coo,value: 0});
await instance.createPromoKitty(339929608, coo, {from: coo,value: 0});
await instance.createPromoKitty(252077512, coo, {from: coo,value: 0});
await instance.createPromoKitty(780731, coo, {from: coo,value: 0});
await instance.createPromoKitty(303864185, coo, {from: coo,value: 0});
await instance.createPromoKitty(125613697, coo, {from: coo,value: 0});
await instance.createPromoKitty(458761905, coo, {from: coo,value: 0});
await instance.createPromoKitty(240676040, coo, {from: coo,value: 0});
await instance.createPromoKitty(862992169, coo, {from: coo,value: 0});
await instance.createPromoKitty(144100178, coo, {from: coo,value: 0});
await instance.createPromoKitty(983864619, coo, {from: coo,value: 0});
await instance.createPromoKitty(939801132, coo, {from: coo,value: 0});
await instance.createPromoKitty(879974263, coo, {from: coo,value: 0});
await instance.createPromoKitty(385037585, coo, {from: coo,value: 0});
await instance.createPromoKitty(610910624, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(30, 33, {from: coo});
await instance.breedWith(31, 10, {from: coo});
await instance.breedWith(9, 28, {from: coo});
await instance.breedWith(35, 5, {from: coo});
await instance.breedWith(17, 29, {from: coo});
await instance.breedWith(13, 21, {from: coo});
await instance.breedWith(20, 1, {from: coo});
await instance.breedWith(2, 40, {from: coo});
await instance.breedWith(25, 7, {from: coo});
await instance.breedWith(3, 16, {from: coo});
await instance.breedWith(4, 14, {from: coo});
await instance.breedWith(37, 24, {from: coo});
await instance.breedWith(38, 39, {from: coo});
await instance.breedWith(6, 18, {from: coo});
await instance.breedWith(32, 22, {from: coo});
await instance.breedWith(27, 23, {from: coo});
await instance.breedWith(8, 11, {from: coo});
await instance.breedWith(12, 36, {from: coo});
await instance.breedWith(34, 26, {from: coo});
await instance.breedWith(15, 19, {from: coo});
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
await instance.giveBirth(9);
await instance.giveBirth(35);
await instance.giveBirth(17);
await instance.giveBirth(13);
await instance.giveBirth(20);
await instance.giveBirth(2);
await instance.giveBirth(25);
await instance.giveBirth(3);
await instance.giveBirth(4);
await instance.giveBirth(37);
await instance.giveBirth(38);
await instance.giveBirth(6);
await instance.giveBirth(32);
await instance.giveBirth(27);
await instance.giveBirth(8);
await instance.giveBirth(12);
await instance.giveBirth(34);
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
