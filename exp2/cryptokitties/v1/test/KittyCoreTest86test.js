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
await instance.createPromoKitty(401953730, coo, {from: coo,value: 0});
await instance.createPromoKitty(192222742, coo, {from: coo,value: 0});
await instance.createPromoKitty(16574116, coo, {from: coo,value: 0});
await instance.createPromoKitty(607117633, coo, {from: coo,value: 0});
await instance.createPromoKitty(427312943, coo, {from: coo,value: 0});
await instance.createPromoKitty(286492906, coo, {from: coo,value: 0});
await instance.createPromoKitty(373194269, coo, {from: coo,value: 0});
await instance.createPromoKitty(480260858, coo, {from: coo,value: 0});
await instance.createPromoKitty(211714366, coo, {from: coo,value: 0});
await instance.createPromoKitty(205410361, coo, {from: coo,value: 0});
await instance.createPromoKitty(249811130, coo, {from: coo,value: 0});
await instance.createPromoKitty(585408496, coo, {from: coo,value: 0});
await instance.createPromoKitty(354087878, coo, {from: coo,value: 0});
await instance.createPromoKitty(555801030, coo, {from: coo,value: 0});
await instance.createPromoKitty(936504938, coo, {from: coo,value: 0});
await instance.createPromoKitty(415294670, coo, {from: coo,value: 0});
await instance.createPromoKitty(563332473, coo, {from: coo,value: 0});
await instance.createPromoKitty(150982583, coo, {from: coo,value: 0});
await instance.createPromoKitty(592716545, coo, {from: coo,value: 0});
await instance.createPromoKitty(270944214, coo, {from: coo,value: 0});
await instance.createPromoKitty(868408510, coo, {from: coo,value: 0});
await instance.createPromoKitty(426269258, coo, {from: coo,value: 0});
await instance.createPromoKitty(575391369, coo, {from: coo,value: 0});
await instance.createPromoKitty(885199735, coo, {from: coo,value: 0});
await instance.createPromoKitty(951588905, coo, {from: coo,value: 0});
await instance.createPromoKitty(853028378, coo, {from: coo,value: 0});
await instance.createPromoKitty(338315789, coo, {from: coo,value: 0});
await instance.createPromoKitty(166317249, coo, {from: coo,value: 0});
await instance.createPromoKitty(267845021, coo, {from: coo,value: 0});
await instance.createPromoKitty(460034498, coo, {from: coo,value: 0});
await instance.createPromoKitty(125733761, coo, {from: coo,value: 0});
await instance.createPromoKitty(438701695, coo, {from: coo,value: 0});
await instance.createPromoKitty(598201277, coo, {from: coo,value: 0});
await instance.createPromoKitty(758232864, coo, {from: coo,value: 0});
await instance.createPromoKitty(825880968, coo, {from: coo,value: 0});
await instance.createPromoKitty(192442162, coo, {from: coo,value: 0});
await instance.createPromoKitty(947104038, coo, {from: coo,value: 0});
await instance.createPromoKitty(174471812, coo, {from: coo,value: 0});
await instance.createPromoKitty(107291435, coo, {from: coo,value: 0});
await instance.createPromoKitty(974947829, coo, {from: coo,value: 0});
await instance.createPromoKitty(732435378, coo, {from: coo,value: 0});
await instance.createPromoKitty(417524237, coo, {from: coo,value: 0});
await instance.createPromoKitty(615525120, coo, {from: coo,value: 0});
await instance.createPromoKitty(307018084, coo, {from: coo,value: 0});
await instance.createPromoKitty(691775914, coo, {from: coo,value: 0});
await instance.createPromoKitty(976839636, coo, {from: coo,value: 0});
await instance.createPromoKitty(74638809, coo, {from: coo,value: 0});
await instance.createPromoKitty(500020846, coo, {from: coo,value: 0});
await instance.createPromoKitty(758004037, coo, {from: coo,value: 0});
await instance.createPromoKitty(562815580, coo, {from: coo,value: 0});
await instance.createPromoKitty(979873148, coo, {from: coo,value: 0});
await instance.createPromoKitty(798100625, coo, {from: coo,value: 0});
await instance.createPromoKitty(425979764, coo, {from: coo,value: 0});
await instance.createPromoKitty(102251631, coo, {from: coo,value: 0});
await instance.createPromoKitty(639682415, coo, {from: coo,value: 0});
await instance.createPromoKitty(126024396, coo, {from: coo,value: 0});
await instance.createPromoKitty(354063787, coo, {from: coo,value: 0});
await instance.createPromoKitty(666834932, coo, {from: coo,value: 0});
await instance.createPromoKitty(196416057, coo, {from: coo,value: 0});
await instance.createPromoKitty(150848045, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(7, 37, {from: coo});
await instance.breedWith(20, 24, {from: coo});
await instance.breedWith(11, 31, {from: coo});
await instance.breedWith(23, 9, {from: coo});
await instance.breedWith(2, 4, {from: coo});
await instance.breedWith(29, 25, {from: coo});
await instance.breedWith(22, 21, {from: coo});
await instance.breedWith(3, 38, {from: coo});
await instance.breedWith(18, 28, {from: coo});
await instance.breedWith(36, 19, {from: coo});
await instance.breedWith(16, 33, {from: coo});
await instance.breedWith(35, 17, {from: coo});
await instance.breedWith(8, 26, {from: coo});
await instance.breedWith(34, 27, {from: coo});
await instance.breedWith(13, 10, {from: coo});
await instance.breedWith(32, 6, {from: coo});
await instance.breedWith(5, 12, {from: coo});
await instance.breedWith(39, 1, {from: coo});
await instance.breedWith(15, 30, {from: coo});
await instance.breedWith(14, 40, {from: coo});
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
await instance.giveBirth(7);
await instance.giveBirth(20);
await instance.giveBirth(11);
await instance.giveBirth(23);
await instance.giveBirth(2);
await instance.giveBirth(29);
await instance.giveBirth(22);
await instance.giveBirth(3);
await instance.giveBirth(18);
await instance.giveBirth(36);
await instance.giveBirth(16);
await instance.giveBirth(35);
await instance.giveBirth(8);
await instance.giveBirth(34);
await instance.giveBirth(13);
await instance.giveBirth(32);
await instance.giveBirth(5);
await instance.giveBirth(39);
await instance.giveBirth(15);
await instance.giveBirth(14);
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
