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
await instance.createPromoKitty(808072320, coo, {from: coo,value: 0});
await instance.createPromoKitty(3678926, coo, {from: coo,value: 0});
await instance.createPromoKitty(328906052, coo, {from: coo,value: 0});
await instance.createPromoKitty(108970910, coo, {from: coo,value: 0});
await instance.createPromoKitty(213230925, coo, {from: coo,value: 0});
await instance.createPromoKitty(529901423, coo, {from: coo,value: 0});
await instance.createPromoKitty(512296896, coo, {from: coo,value: 0});
await instance.createPromoKitty(896828155, coo, {from: coo,value: 0});
await instance.createPromoKitty(29975424, coo, {from: coo,value: 0});
await instance.createPromoKitty(977684229, coo, {from: coo,value: 0});
await instance.createPromoKitty(811006951, coo, {from: coo,value: 0});
await instance.createPromoKitty(861929421, coo, {from: coo,value: 0});
await instance.createPromoKitty(243698463, coo, {from: coo,value: 0});
await instance.createPromoKitty(739811533, coo, {from: coo,value: 0});
await instance.createPromoKitty(744449635, coo, {from: coo,value: 0});
await instance.createPromoKitty(585583630, coo, {from: coo,value: 0});
await instance.createPromoKitty(889112691, coo, {from: coo,value: 0});
await instance.createPromoKitty(359468027, coo, {from: coo,value: 0});
await instance.createPromoKitty(31463445, coo, {from: coo,value: 0});
await instance.createPromoKitty(771174224, coo, {from: coo,value: 0});
await instance.createPromoKitty(327152440, coo, {from: coo,value: 0});
await instance.createPromoKitty(832478646, coo, {from: coo,value: 0});
await instance.createPromoKitty(760966270, coo, {from: coo,value: 0});
await instance.createPromoKitty(904568173, coo, {from: coo,value: 0});
await instance.createPromoKitty(558855732, coo, {from: coo,value: 0});
await instance.createPromoKitty(670032800, coo, {from: coo,value: 0});
await instance.createPromoKitty(838573954, coo, {from: coo,value: 0});
await instance.createPromoKitty(88643752, coo, {from: coo,value: 0});
await instance.createPromoKitty(363235672, coo, {from: coo,value: 0});
await instance.createPromoKitty(622526461, coo, {from: coo,value: 0});
await instance.createPromoKitty(10674878, coo, {from: coo,value: 0});
await instance.createPromoKitty(344728038, coo, {from: coo,value: 0});
await instance.createPromoKitty(798291032, coo, {from: coo,value: 0});
await instance.createPromoKitty(500512312, coo, {from: coo,value: 0});
await instance.createPromoKitty(213308608, coo, {from: coo,value: 0});
await instance.createPromoKitty(883454816, coo, {from: coo,value: 0});
await instance.createPromoKitty(949120746, coo, {from: coo,value: 0});
await instance.createPromoKitty(496309730, coo, {from: coo,value: 0});
await instance.createPromoKitty(300641653, coo, {from: coo,value: 0});
await instance.createPromoKitty(581140163, coo, {from: coo,value: 0});
await instance.createPromoKitty(575597844, coo, {from: coo,value: 0});
await instance.createPromoKitty(901503635, coo, {from: coo,value: 0});
await instance.createPromoKitty(918742652, coo, {from: coo,value: 0});
await instance.createPromoKitty(285293530, coo, {from: coo,value: 0});
await instance.createPromoKitty(520519109, coo, {from: coo,value: 0});
await instance.createPromoKitty(732275460, coo, {from: coo,value: 0});
await instance.createPromoKitty(222533430, coo, {from: coo,value: 0});
await instance.createPromoKitty(805260601, coo, {from: coo,value: 0});
await instance.createPromoKitty(467352220, coo, {from: coo,value: 0});
await instance.createPromoKitty(14651993, coo, {from: coo,value: 0});
await instance.createPromoKitty(285140740, coo, {from: coo,value: 0});
await instance.createPromoKitty(234677128, coo, {from: coo,value: 0});
await instance.createPromoKitty(781016138, coo, {from: coo,value: 0});
await instance.createPromoKitty(895844582, coo, {from: coo,value: 0});
await instance.createPromoKitty(310564235, coo, {from: coo,value: 0});
await instance.createPromoKitty(736025579, coo, {from: coo,value: 0});
await instance.createPromoKitty(677082054, coo, {from: coo,value: 0});
await instance.createPromoKitty(438258029, coo, {from: coo,value: 0});
await instance.createPromoKitty(934454818, coo, {from: coo,value: 0});
await instance.createPromoKitty(773466854, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(26, 25, {from: coo});
await instance.breedWith(21, 38, {from: coo});
await instance.breedWith(17, 32, {from: coo});
await instance.breedWith(11, 27, {from: coo});
await instance.breedWith(20, 33, {from: coo});
await instance.breedWith(2, 22, {from: coo});
await instance.breedWith(18, 39, {from: coo});
await instance.breedWith(34, 23, {from: coo});
await instance.breedWith(28, 31, {from: coo});
await instance.breedWith(35, 24, {from: coo});
await instance.breedWith(37, 14, {from: coo});
await instance.breedWith(15, 12, {from: coo});
await instance.breedWith(29, 1, {from: coo});
await instance.breedWith(10, 16, {from: coo});
await instance.breedWith(4, 36, {from: coo});
await instance.breedWith(19, 13, {from: coo});
await instance.breedWith(6, 3, {from: coo});
await instance.breedWith(30, 7, {from: coo});
await instance.breedWith(9, 8, {from: coo});
await instance.breedWith(40, 5, {from: coo});
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
await instance.giveBirth(26);
await instance.giveBirth(21);
await instance.giveBirth(17);
await instance.giveBirth(11);
await instance.giveBirth(20);
await instance.giveBirth(2);
await instance.giveBirth(18);
await instance.giveBirth(34);
await instance.giveBirth(28);
await instance.giveBirth(35);
await instance.giveBirth(37);
await instance.giveBirth(15);
await instance.giveBirth(29);
await instance.giveBirth(10);
await instance.giveBirth(4);
await instance.giveBirth(19);
await instance.giveBirth(6);
await instance.giveBirth(30);
await instance.giveBirth(9);
await instance.giveBirth(40);
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
