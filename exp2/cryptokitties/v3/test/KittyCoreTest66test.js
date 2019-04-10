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
await instance.createPromoKitty(376764075, coo, {from: coo,value: 0});
await instance.createPromoKitty(163544684, coo, {from: coo,value: 0});
await instance.createPromoKitty(800949319, coo, {from: coo,value: 0});
await instance.createPromoKitty(568503432, coo, {from: coo,value: 0});
await instance.createPromoKitty(306792759, coo, {from: coo,value: 0});
await instance.createPromoKitty(77963746, coo, {from: coo,value: 0});
await instance.createPromoKitty(556638227, coo, {from: coo,value: 0});
await instance.createPromoKitty(279632791, coo, {from: coo,value: 0});
await instance.createPromoKitty(836889829, coo, {from: coo,value: 0});
await instance.createPromoKitty(37674385, coo, {from: coo,value: 0});
await instance.createPromoKitty(553639633, coo, {from: coo,value: 0});
await instance.createPromoKitty(16471083, coo, {from: coo,value: 0});
await instance.createPromoKitty(575083971, coo, {from: coo,value: 0});
await instance.createPromoKitty(550898061, coo, {from: coo,value: 0});
await instance.createPromoKitty(892231001, coo, {from: coo,value: 0});
await instance.createPromoKitty(991133229, coo, {from: coo,value: 0});
await instance.createPromoKitty(804228823, coo, {from: coo,value: 0});
await instance.createPromoKitty(992159091, coo, {from: coo,value: 0});
await instance.createPromoKitty(241226043, coo, {from: coo,value: 0});
await instance.createPromoKitty(428778024, coo, {from: coo,value: 0});
await instance.createPromoKitty(632349521, coo, {from: coo,value: 0});
await instance.createPromoKitty(910841962, coo, {from: coo,value: 0});
await instance.createPromoKitty(669256251, coo, {from: coo,value: 0});
await instance.createPromoKitty(543641152, coo, {from: coo,value: 0});
await instance.createPromoKitty(670943009, coo, {from: coo,value: 0});
await instance.createPromoKitty(473775172, coo, {from: coo,value: 0});
await instance.createPromoKitty(181747764, coo, {from: coo,value: 0});
await instance.createPromoKitty(172919060, coo, {from: coo,value: 0});
await instance.createPromoKitty(151074144, coo, {from: coo,value: 0});
await instance.createPromoKitty(328678285, coo, {from: coo,value: 0});
await instance.createPromoKitty(256368043, coo, {from: coo,value: 0});
await instance.createPromoKitty(690607219, coo, {from: coo,value: 0});
await instance.createPromoKitty(82878593, coo, {from: coo,value: 0});
await instance.createPromoKitty(250009418, coo, {from: coo,value: 0});
await instance.createPromoKitty(852391668, coo, {from: coo,value: 0});
await instance.createPromoKitty(245690943, coo, {from: coo,value: 0});
await instance.createPromoKitty(619733731, coo, {from: coo,value: 0});
await instance.createPromoKitty(935017468, coo, {from: coo,value: 0});
await instance.createPromoKitty(971496140, coo, {from: coo,value: 0});
await instance.createPromoKitty(462087659, coo, {from: coo,value: 0});
await instance.createPromoKitty(237270136, coo, {from: coo,value: 0});
await instance.createPromoKitty(27232875, coo, {from: coo,value: 0});
await instance.createPromoKitty(146174386, coo, {from: coo,value: 0});
await instance.createPromoKitty(261788769, coo, {from: coo,value: 0});
await instance.createPromoKitty(222518753, coo, {from: coo,value: 0});
await instance.createPromoKitty(754601299, coo, {from: coo,value: 0});
await instance.createPromoKitty(411397685, coo, {from: coo,value: 0});
await instance.createPromoKitty(168436598, coo, {from: coo,value: 0});
await instance.createPromoKitty(680821415, coo, {from: coo,value: 0});
await instance.createPromoKitty(380796510, coo, {from: coo,value: 0});
await instance.createPromoKitty(348715320, coo, {from: coo,value: 0});
await instance.createPromoKitty(896325226, coo, {from: coo,value: 0});
await instance.createPromoKitty(924165449, coo, {from: coo,value: 0});
await instance.createPromoKitty(534133956, coo, {from: coo,value: 0});
await instance.createPromoKitty(381892485, coo, {from: coo,value: 0});
await instance.createPromoKitty(319844238, coo, {from: coo,value: 0});
await instance.createPromoKitty(402707475, coo, {from: coo,value: 0});
await instance.createPromoKitty(14149905, coo, {from: coo,value: 0});
await instance.createPromoKitty(657279913, coo, {from: coo,value: 0});
await instance.createPromoKitty(758957379, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(4, 28, {from: coo});
await instance.breedWith(16, 1, {from: coo});
await instance.breedWith(37, 25, {from: coo});
await instance.breedWith(8, 23, {from: coo});
await instance.breedWith(7, 40, {from: coo});
await instance.breedWith(5, 33, {from: coo});
await instance.breedWith(36, 35, {from: coo});
await instance.breedWith(9, 39, {from: coo});
await instance.breedWith(38, 30, {from: coo});
await instance.breedWith(31, 17, {from: coo});
await instance.breedWith(24, 32, {from: coo});
await instance.breedWith(3, 15, {from: coo});
await instance.breedWith(29, 34, {from: coo});
await instance.breedWith(13, 19, {from: coo});
await instance.breedWith(14, 6, {from: coo});
await instance.breedWith(26, 11, {from: coo});
await instance.breedWith(12, 22, {from: coo});
await instance.breedWith(27, 21, {from: coo});
await instance.breedWith(2, 20, {from: coo});
await instance.breedWith(18, 10, {from: coo});
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
await instance.giveBirth(4);
await instance.giveBirth(16);
await instance.giveBirth(37);
await instance.giveBirth(8);
await instance.giveBirth(7);
await instance.giveBirth(5);
await instance.giveBirth(36);
await instance.giveBirth(9);
await instance.giveBirth(38);
await instance.giveBirth(31);
await instance.giveBirth(24);
await instance.giveBirth(3);
await instance.giveBirth(29);
await instance.giveBirth(13);
await instance.giveBirth(14);
await instance.giveBirth(26);
await instance.giveBirth(12);
await instance.giveBirth(27);
await instance.giveBirth(2);
await instance.giveBirth(18);
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
