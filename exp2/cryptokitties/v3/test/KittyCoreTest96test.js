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
await instance.createPromoKitty(684572214, coo, {from: coo,value: 0});
await instance.createPromoKitty(523794041, coo, {from: coo,value: 0});
await instance.createPromoKitty(631999723, coo, {from: coo,value: 0});
await instance.createPromoKitty(140953362, coo, {from: coo,value: 0});
await instance.createPromoKitty(470390081, coo, {from: coo,value: 0});
await instance.createPromoKitty(825866828, coo, {from: coo,value: 0});
await instance.createPromoKitty(454850879, coo, {from: coo,value: 0});
await instance.createPromoKitty(158191779, coo, {from: coo,value: 0});
await instance.createPromoKitty(668959212, coo, {from: coo,value: 0});
await instance.createPromoKitty(809418901, coo, {from: coo,value: 0});
await instance.createPromoKitty(293998276, coo, {from: coo,value: 0});
await instance.createPromoKitty(82924236, coo, {from: coo,value: 0});
await instance.createPromoKitty(126690449, coo, {from: coo,value: 0});
await instance.createPromoKitty(508008652, coo, {from: coo,value: 0});
await instance.createPromoKitty(98899060, coo, {from: coo,value: 0});
await instance.createPromoKitty(149417116, coo, {from: coo,value: 0});
await instance.createPromoKitty(69882009, coo, {from: coo,value: 0});
await instance.createPromoKitty(11897666, coo, {from: coo,value: 0});
await instance.createPromoKitty(228495753, coo, {from: coo,value: 0});
await instance.createPromoKitty(139608300, coo, {from: coo,value: 0});
await instance.createPromoKitty(478754963, coo, {from: coo,value: 0});
await instance.createPromoKitty(126954906, coo, {from: coo,value: 0});
await instance.createPromoKitty(822749017, coo, {from: coo,value: 0});
await instance.createPromoKitty(893116007, coo, {from: coo,value: 0});
await instance.createPromoKitty(858888361, coo, {from: coo,value: 0});
await instance.createPromoKitty(931896885, coo, {from: coo,value: 0});
await instance.createPromoKitty(223624583, coo, {from: coo,value: 0});
await instance.createPromoKitty(211671544, coo, {from: coo,value: 0});
await instance.createPromoKitty(464684095, coo, {from: coo,value: 0});
await instance.createPromoKitty(594141544, coo, {from: coo,value: 0});
await instance.createPromoKitty(824243226, coo, {from: coo,value: 0});
await instance.createPromoKitty(324697030, coo, {from: coo,value: 0});
await instance.createPromoKitty(911096682, coo, {from: coo,value: 0});
await instance.createPromoKitty(1773176, coo, {from: coo,value: 0});
await instance.createPromoKitty(529511549, coo, {from: coo,value: 0});
await instance.createPromoKitty(423219718, coo, {from: coo,value: 0});
await instance.createPromoKitty(641739372, coo, {from: coo,value: 0});
await instance.createPromoKitty(708896629, coo, {from: coo,value: 0});
await instance.createPromoKitty(697283558, coo, {from: coo,value: 0});
await instance.createPromoKitty(879271105, coo, {from: coo,value: 0});
await instance.createPromoKitty(453391786, coo, {from: coo,value: 0});
await instance.createPromoKitty(552952738, coo, {from: coo,value: 0});
await instance.createPromoKitty(871385731, coo, {from: coo,value: 0});
await instance.createPromoKitty(111551611, coo, {from: coo,value: 0});
await instance.createPromoKitty(145566966, coo, {from: coo,value: 0});
await instance.createPromoKitty(722781919, coo, {from: coo,value: 0});
await instance.createPromoKitty(264397661, coo, {from: coo,value: 0});
await instance.createPromoKitty(196341533, coo, {from: coo,value: 0});
await instance.createPromoKitty(354735719, coo, {from: coo,value: 0});
await instance.createPromoKitty(168043859, coo, {from: coo,value: 0});
await instance.createPromoKitty(993939335, coo, {from: coo,value: 0});
await instance.createPromoKitty(892814520, coo, {from: coo,value: 0});
await instance.createPromoKitty(840454087, coo, {from: coo,value: 0});
await instance.createPromoKitty(201858828, coo, {from: coo,value: 0});
await instance.createPromoKitty(546064999, coo, {from: coo,value: 0});
await instance.createPromoKitty(475561900, coo, {from: coo,value: 0});
await instance.createPromoKitty(25405335, coo, {from: coo,value: 0});
await instance.createPromoKitty(888411454, coo, {from: coo,value: 0});
await instance.createPromoKitty(286297506, coo, {from: coo,value: 0});
await instance.createPromoKitty(770821548, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(29, 19, {from: coo});
await instance.breedWith(17, 37, {from: coo});
await instance.breedWith(10, 28, {from: coo});
await instance.breedWith(16, 11, {from: coo});
await instance.breedWith(36, 25, {from: coo});
await instance.breedWith(2, 13, {from: coo});
await instance.breedWith(34, 24, {from: coo});
await instance.breedWith(3, 33, {from: coo});
await instance.breedWith(40, 30, {from: coo});
await instance.breedWith(8, 22, {from: coo});
await instance.breedWith(35, 21, {from: coo});
await instance.breedWith(12, 1, {from: coo});
await instance.breedWith(26, 6, {from: coo});
await instance.breedWith(5, 32, {from: coo});
await instance.breedWith(18, 4, {from: coo});
await instance.breedWith(39, 20, {from: coo});
await instance.breedWith(15, 9, {from: coo});
await instance.breedWith(23, 7, {from: coo});
await instance.breedWith(31, 27, {from: coo});
await instance.breedWith(38, 14, {from: coo});
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
await instance.giveBirth(29);
await instance.giveBirth(17);
await instance.giveBirth(10);
await instance.giveBirth(16);
await instance.giveBirth(36);
await instance.giveBirth(2);
await instance.giveBirth(34);
await instance.giveBirth(3);
await instance.giveBirth(40);
await instance.giveBirth(8);
await instance.giveBirth(35);
await instance.giveBirth(12);
await instance.giveBirth(26);
await instance.giveBirth(5);
await instance.giveBirth(18);
await instance.giveBirth(39);
await instance.giveBirth(15);
await instance.giveBirth(23);
await instance.giveBirth(31);
await instance.giveBirth(38);
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
});
it('attack', async() => {
 await instance.breedWith(57, bigValue, {from: coo});
});
});
