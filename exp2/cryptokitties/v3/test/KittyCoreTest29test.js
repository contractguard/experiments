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
await instance.createPromoKitty(991436982, coo, {from: coo,value: 0});
await instance.createPromoKitty(964583750, coo, {from: coo,value: 0});
await instance.createPromoKitty(56319854, coo, {from: coo,value: 0});
await instance.createPromoKitty(214237584, coo, {from: coo,value: 0});
await instance.createPromoKitty(354772833, coo, {from: coo,value: 0});
await instance.createPromoKitty(510338120, coo, {from: coo,value: 0});
await instance.createPromoKitty(192113757, coo, {from: coo,value: 0});
await instance.createPromoKitty(355028493, coo, {from: coo,value: 0});
await instance.createPromoKitty(217253554, coo, {from: coo,value: 0});
await instance.createPromoKitty(276188193, coo, {from: coo,value: 0});
await instance.createPromoKitty(784318259, coo, {from: coo,value: 0});
await instance.createPromoKitty(299740383, coo, {from: coo,value: 0});
await instance.createPromoKitty(666439187, coo, {from: coo,value: 0});
await instance.createPromoKitty(218860748, coo, {from: coo,value: 0});
await instance.createPromoKitty(647609167, coo, {from: coo,value: 0});
await instance.createPromoKitty(69203043, coo, {from: coo,value: 0});
await instance.createPromoKitty(16293009, coo, {from: coo,value: 0});
await instance.createPromoKitty(756902204, coo, {from: coo,value: 0});
await instance.createPromoKitty(186695570, coo, {from: coo,value: 0});
await instance.createPromoKitty(516388972, coo, {from: coo,value: 0});
await instance.createPromoKitty(872527184, coo, {from: coo,value: 0});
await instance.createPromoKitty(623892542, coo, {from: coo,value: 0});
await instance.createPromoKitty(284322603, coo, {from: coo,value: 0});
await instance.createPromoKitty(898641011, coo, {from: coo,value: 0});
await instance.createPromoKitty(4012501, coo, {from: coo,value: 0});
await instance.createPromoKitty(598734626, coo, {from: coo,value: 0});
await instance.createPromoKitty(32552449, coo, {from: coo,value: 0});
await instance.createPromoKitty(448335454, coo, {from: coo,value: 0});
await instance.createPromoKitty(715151057, coo, {from: coo,value: 0});
await instance.createPromoKitty(130644872, coo, {from: coo,value: 0});
await instance.createPromoKitty(296117906, coo, {from: coo,value: 0});
await instance.createPromoKitty(451446951, coo, {from: coo,value: 0});
await instance.createPromoKitty(802592671, coo, {from: coo,value: 0});
await instance.createPromoKitty(971513618, coo, {from: coo,value: 0});
await instance.createPromoKitty(460077458, coo, {from: coo,value: 0});
await instance.createPromoKitty(594647310, coo, {from: coo,value: 0});
await instance.createPromoKitty(179671909, coo, {from: coo,value: 0});
await instance.createPromoKitty(335278654, coo, {from: coo,value: 0});
await instance.createPromoKitty(304354954, coo, {from: coo,value: 0});
await instance.createPromoKitty(561605187, coo, {from: coo,value: 0});
await instance.createPromoKitty(810272822, coo, {from: coo,value: 0});
await instance.createPromoKitty(780410428, coo, {from: coo,value: 0});
await instance.createPromoKitty(462583480, coo, {from: coo,value: 0});
await instance.createPromoKitty(442061860, coo, {from: coo,value: 0});
await instance.createPromoKitty(77817460, coo, {from: coo,value: 0});
await instance.createPromoKitty(110145166, coo, {from: coo,value: 0});
await instance.createPromoKitty(88265484, coo, {from: coo,value: 0});
await instance.createPromoKitty(152338590, coo, {from: coo,value: 0});
await instance.createPromoKitty(351074615, coo, {from: coo,value: 0});
await instance.createPromoKitty(311561510, coo, {from: coo,value: 0});
await instance.createPromoKitty(595603293, coo, {from: coo,value: 0});
await instance.createPromoKitty(924938431, coo, {from: coo,value: 0});
await instance.createPromoKitty(4711724, coo, {from: coo,value: 0});
await instance.createPromoKitty(394846864, coo, {from: coo,value: 0});
await instance.createPromoKitty(51102095, coo, {from: coo,value: 0});
await instance.createPromoKitty(540872321, coo, {from: coo,value: 0});
await instance.createPromoKitty(942082477, coo, {from: coo,value: 0});
await instance.createPromoKitty(553097143, coo, {from: coo,value: 0});
await instance.createPromoKitty(402823598, coo, {from: coo,value: 0});
await instance.createPromoKitty(626919909, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(31, 33, {from: coo});
await instance.breedWith(28, 35, {from: coo});
await instance.breedWith(12, 18, {from: coo});
await instance.breedWith(37, 38, {from: coo});
await instance.breedWith(24, 9, {from: coo});
await instance.breedWith(23, 11, {from: coo});
await instance.breedWith(27, 5, {from: coo});
await instance.breedWith(16, 14, {from: coo});
await instance.breedWith(26, 19, {from: coo});
await instance.breedWith(4, 25, {from: coo});
await instance.breedWith(32, 10, {from: coo});
await instance.breedWith(40, 34, {from: coo});
await instance.breedWith(3, 15, {from: coo});
await instance.breedWith(2, 29, {from: coo});
await instance.breedWith(8, 30, {from: coo});
await instance.breedWith(7, 20, {from: coo});
await instance.breedWith(39, 6, {from: coo});
await instance.breedWith(17, 1, {from: coo});
await instance.breedWith(22, 13, {from: coo});
await instance.breedWith(21, 36, {from: coo});
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
await instance.giveBirth(31);
await instance.giveBirth(28);
await instance.giveBirth(12);
await instance.giveBirth(37);
await instance.giveBirth(24);
await instance.giveBirth(23);
await instance.giveBirth(27);
await instance.giveBirth(16);
await instance.giveBirth(26);
await instance.giveBirth(4);
await instance.giveBirth(32);
await instance.giveBirth(40);
await instance.giveBirth(3);
await instance.giveBirth(2);
await instance.giveBirth(8);
await instance.giveBirth(7);
await instance.giveBirth(39);
await instance.giveBirth(17);
await instance.giveBirth(22);
await instance.giveBirth(21);
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
