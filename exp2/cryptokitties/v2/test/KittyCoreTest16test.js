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
await instance.createPromoKitty(266153859, coo, {from: coo,value: 0});
await instance.createPromoKitty(542143143, coo, {from: coo,value: 0});
await instance.createPromoKitty(326855322, coo, {from: coo,value: 0});
await instance.createPromoKitty(928278562, coo, {from: coo,value: 0});
await instance.createPromoKitty(814941989, coo, {from: coo,value: 0});
await instance.createPromoKitty(877885390, coo, {from: coo,value: 0});
await instance.createPromoKitty(448382248, coo, {from: coo,value: 0});
await instance.createPromoKitty(577848977, coo, {from: coo,value: 0});
await instance.createPromoKitty(296068921, coo, {from: coo,value: 0});
await instance.createPromoKitty(671828412, coo, {from: coo,value: 0});
await instance.createPromoKitty(446726886, coo, {from: coo,value: 0});
await instance.createPromoKitty(598822425, coo, {from: coo,value: 0});
await instance.createPromoKitty(145278877, coo, {from: coo,value: 0});
await instance.createPromoKitty(202712589, coo, {from: coo,value: 0});
await instance.createPromoKitty(129871943, coo, {from: coo,value: 0});
await instance.createPromoKitty(176215785, coo, {from: coo,value: 0});
await instance.createPromoKitty(683483808, coo, {from: coo,value: 0});
await instance.createPromoKitty(456754250, coo, {from: coo,value: 0});
await instance.createPromoKitty(260769414, coo, {from: coo,value: 0});
await instance.createPromoKitty(681165715, coo, {from: coo,value: 0});
await instance.createPromoKitty(301458419, coo, {from: coo,value: 0});
await instance.createPromoKitty(672746533, coo, {from: coo,value: 0});
await instance.createPromoKitty(486413012, coo, {from: coo,value: 0});
await instance.createPromoKitty(154955186, coo, {from: coo,value: 0});
await instance.createPromoKitty(814817067, coo, {from: coo,value: 0});
await instance.createPromoKitty(40836960, coo, {from: coo,value: 0});
await instance.createPromoKitty(415773080, coo, {from: coo,value: 0});
await instance.createPromoKitty(612040757, coo, {from: coo,value: 0});
await instance.createPromoKitty(872549600, coo, {from: coo,value: 0});
await instance.createPromoKitty(980257796, coo, {from: coo,value: 0});
await instance.createPromoKitty(899554884, coo, {from: coo,value: 0});
await instance.createPromoKitty(927168123, coo, {from: coo,value: 0});
await instance.createPromoKitty(384629495, coo, {from: coo,value: 0});
await instance.createPromoKitty(698563039, coo, {from: coo,value: 0});
await instance.createPromoKitty(34639095, coo, {from: coo,value: 0});
await instance.createPromoKitty(852886771, coo, {from: coo,value: 0});
await instance.createPromoKitty(116047455, coo, {from: coo,value: 0});
await instance.createPromoKitty(281066944, coo, {from: coo,value: 0});
await instance.createPromoKitty(309980748, coo, {from: coo,value: 0});
await instance.createPromoKitty(241868437, coo, {from: coo,value: 0});
await instance.createPromoKitty(820402183, coo, {from: coo,value: 0});
await instance.createPromoKitty(230452139, coo, {from: coo,value: 0});
await instance.createPromoKitty(128140296, coo, {from: coo,value: 0});
await instance.createPromoKitty(74243738, coo, {from: coo,value: 0});
await instance.createPromoKitty(307274073, coo, {from: coo,value: 0});
await instance.createPromoKitty(286905409, coo, {from: coo,value: 0});
await instance.createPromoKitty(511783286, coo, {from: coo,value: 0});
await instance.createPromoKitty(502567328, coo, {from: coo,value: 0});
await instance.createPromoKitty(652148128, coo, {from: coo,value: 0});
await instance.createPromoKitty(888607371, coo, {from: coo,value: 0});
await instance.createPromoKitty(306178173, coo, {from: coo,value: 0});
await instance.createPromoKitty(951659858, coo, {from: coo,value: 0});
await instance.createPromoKitty(738025614, coo, {from: coo,value: 0});
await instance.createPromoKitty(284666504, coo, {from: coo,value: 0});
await instance.createPromoKitty(133112593, coo, {from: coo,value: 0});
await instance.createPromoKitty(712886335, coo, {from: coo,value: 0});
await instance.createPromoKitty(410478970, coo, {from: coo,value: 0});
await instance.createPromoKitty(909863435, coo, {from: coo,value: 0});
await instance.createPromoKitty(428081092, coo, {from: coo,value: 0});
await instance.createPromoKitty(512990108, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(2, 34, {from: coo});
await instance.breedWith(30, 27, {from: coo});
await instance.breedWith(10, 23, {from: coo});
await instance.breedWith(26, 33, {from: coo});
await instance.breedWith(9, 16, {from: coo});
await instance.breedWith(22, 40, {from: coo});
await instance.breedWith(29, 15, {from: coo});
await instance.breedWith(28, 14, {from: coo});
await instance.breedWith(8, 31, {from: coo});
await instance.breedWith(13, 7, {from: coo});
await instance.breedWith(5, 11, {from: coo});
await instance.breedWith(36, 6, {from: coo});
await instance.breedWith(32, 4, {from: coo});
await instance.breedWith(19, 12, {from: coo});
await instance.breedWith(17, 18, {from: coo});
await instance.breedWith(38, 35, {from: coo});
await instance.breedWith(24, 37, {from: coo});
await instance.breedWith(20, 39, {from: coo});
await instance.breedWith(3, 25, {from: coo});
await instance.breedWith(1, 21, {from: coo});
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
await instance.giveBirth(2);
await instance.giveBirth(30);
await instance.giveBirth(10);
await instance.giveBirth(26);
await instance.giveBirth(9);
await instance.giveBirth(22);
await instance.giveBirth(29);
await instance.giveBirth(28);
await instance.giveBirth(8);
await instance.giveBirth(13);
await instance.giveBirth(5);
await instance.giveBirth(36);
await instance.giveBirth(32);
await instance.giveBirth(19);
await instance.giveBirth(17);
await instance.giveBirth(38);
await instance.giveBirth(24);
await instance.giveBirth(20);
await instance.giveBirth(3);
await instance.giveBirth(1);
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
