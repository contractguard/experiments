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
await instance.createPromoKitty(357175161, coo, {from: coo,value: 0});
await instance.createPromoKitty(541031788, coo, {from: coo,value: 0});
await instance.createPromoKitty(193421316, coo, {from: coo,value: 0});
await instance.createPromoKitty(152903109, coo, {from: coo,value: 0});
await instance.createPromoKitty(421943958, coo, {from: coo,value: 0});
await instance.createPromoKitty(648151475, coo, {from: coo,value: 0});
await instance.createPromoKitty(929908039, coo, {from: coo,value: 0});
await instance.createPromoKitty(616888801, coo, {from: coo,value: 0});
await instance.createPromoKitty(822398501, coo, {from: coo,value: 0});
await instance.createPromoKitty(216548698, coo, {from: coo,value: 0});
await instance.createPromoKitty(174197424, coo, {from: coo,value: 0});
await instance.createPromoKitty(586411066, coo, {from: coo,value: 0});
await instance.createPromoKitty(329166705, coo, {from: coo,value: 0});
await instance.createPromoKitty(644918445, coo, {from: coo,value: 0});
await instance.createPromoKitty(178207119, coo, {from: coo,value: 0});
await instance.createPromoKitty(936998761, coo, {from: coo,value: 0});
await instance.createPromoKitty(324672792, coo, {from: coo,value: 0});
await instance.createPromoKitty(282087143, coo, {from: coo,value: 0});
await instance.createPromoKitty(561096938, coo, {from: coo,value: 0});
await instance.createPromoKitty(209101133, coo, {from: coo,value: 0});
await instance.createPromoKitty(290862557, coo, {from: coo,value: 0});
await instance.createPromoKitty(975234638, coo, {from: coo,value: 0});
await instance.createPromoKitty(317103914, coo, {from: coo,value: 0});
await instance.createPromoKitty(981481216, coo, {from: coo,value: 0});
await instance.createPromoKitty(155204885, coo, {from: coo,value: 0});
await instance.createPromoKitty(880824190, coo, {from: coo,value: 0});
await instance.createPromoKitty(920924627, coo, {from: coo,value: 0});
await instance.createPromoKitty(23617927, coo, {from: coo,value: 0});
await instance.createPromoKitty(904145321, coo, {from: coo,value: 0});
await instance.createPromoKitty(241767949, coo, {from: coo,value: 0});
await instance.createPromoKitty(19236953, coo, {from: coo,value: 0});
await instance.createPromoKitty(505167795, coo, {from: coo,value: 0});
await instance.createPromoKitty(662121348, coo, {from: coo,value: 0});
await instance.createPromoKitty(911647988, coo, {from: coo,value: 0});
await instance.createPromoKitty(120929407, coo, {from: coo,value: 0});
await instance.createPromoKitty(210073863, coo, {from: coo,value: 0});
await instance.createPromoKitty(69709685, coo, {from: coo,value: 0});
await instance.createPromoKitty(243585595, coo, {from: coo,value: 0});
await instance.createPromoKitty(338212071, coo, {from: coo,value: 0});
await instance.createPromoKitty(549210406, coo, {from: coo,value: 0});
await instance.createPromoKitty(568146716, coo, {from: coo,value: 0});
await instance.createPromoKitty(432118928, coo, {from: coo,value: 0});
await instance.createPromoKitty(551527264, coo, {from: coo,value: 0});
await instance.createPromoKitty(465951425, coo, {from: coo,value: 0});
await instance.createPromoKitty(939699750, coo, {from: coo,value: 0});
await instance.createPromoKitty(606384508, coo, {from: coo,value: 0});
await instance.createPromoKitty(762809646, coo, {from: coo,value: 0});
await instance.createPromoKitty(96248070, coo, {from: coo,value: 0});
await instance.createPromoKitty(792083307, coo, {from: coo,value: 0});
await instance.createPromoKitty(615307103, coo, {from: coo,value: 0});
await instance.createPromoKitty(104526902, coo, {from: coo,value: 0});
await instance.createPromoKitty(771517092, coo, {from: coo,value: 0});
await instance.createPromoKitty(968334015, coo, {from: coo,value: 0});
await instance.createPromoKitty(80109733, coo, {from: coo,value: 0});
await instance.createPromoKitty(856566132, coo, {from: coo,value: 0});
await instance.createPromoKitty(830904010, coo, {from: coo,value: 0});
await instance.createPromoKitty(929254380, coo, {from: coo,value: 0});
await instance.createPromoKitty(643617228, coo, {from: coo,value: 0});
await instance.createPromoKitty(506179654, coo, {from: coo,value: 0});
await instance.createPromoKitty(308922858, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(3, 33, {from: coo});
await instance.breedWith(6, 22, {from: coo});
await instance.breedWith(37, 40, {from: coo});
await instance.breedWith(13, 1, {from: coo});
await instance.breedWith(30, 18, {from: coo});
await instance.breedWith(10, 25, {from: coo});
await instance.breedWith(38, 5, {from: coo});
await instance.breedWith(34, 32, {from: coo});
await instance.breedWith(14, 2, {from: coo});
await instance.breedWith(36, 24, {from: coo});
await instance.breedWith(8, 16, {from: coo});
await instance.breedWith(23, 29, {from: coo});
await instance.breedWith(20, 35, {from: coo});
await instance.breedWith(11, 19, {from: coo});
await instance.breedWith(12, 4, {from: coo});
await instance.breedWith(39, 17, {from: coo});
await instance.breedWith(28, 7, {from: coo});
await instance.breedWith(21, 9, {from: coo});
await instance.breedWith(15, 26, {from: coo});
await instance.breedWith(27, 31, {from: coo});
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
await instance.giveBirth(3);
await instance.giveBirth(6);
await instance.giveBirth(37);
await instance.giveBirth(13);
await instance.giveBirth(30);
await instance.giveBirth(10);
await instance.giveBirth(38);
await instance.giveBirth(34);
await instance.giveBirth(14);
await instance.giveBirth(36);
await instance.giveBirth(8);
await instance.giveBirth(23);
await instance.giveBirth(20);
await instance.giveBirth(11);
await instance.giveBirth(12);
await instance.giveBirth(39);
await instance.giveBirth(28);
await instance.giveBirth(21);
await instance.giveBirth(15);
await instance.giveBirth(27);
});
it('test 5',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('test 6',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('test 7',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('test 8',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('test 9',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('acctack', async() => {
 await instance._breedWith(57,58,{from:coo});
});
});
