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
await instance.createPromoKitty(738755575, coo, {from: coo,value: 0});
await instance.createPromoKitty(965654522, coo, {from: coo,value: 0});
await instance.createPromoKitty(541331447, coo, {from: coo,value: 0});
await instance.createPromoKitty(69887801, coo, {from: coo,value: 0});
await instance.createPromoKitty(549126903, coo, {from: coo,value: 0});
await instance.createPromoKitty(497206025, coo, {from: coo,value: 0});
await instance.createPromoKitty(244855215, coo, {from: coo,value: 0});
await instance.createPromoKitty(744249780, coo, {from: coo,value: 0});
await instance.createPromoKitty(788319221, coo, {from: coo,value: 0});
await instance.createPromoKitty(427876025, coo, {from: coo,value: 0});
await instance.createPromoKitty(303193067, coo, {from: coo,value: 0});
await instance.createPromoKitty(311003808, coo, {from: coo,value: 0});
await instance.createPromoKitty(502489848, coo, {from: coo,value: 0});
await instance.createPromoKitty(379712288, coo, {from: coo,value: 0});
await instance.createPromoKitty(229549702, coo, {from: coo,value: 0});
await instance.createPromoKitty(179858824, coo, {from: coo,value: 0});
await instance.createPromoKitty(993792512, coo, {from: coo,value: 0});
await instance.createPromoKitty(784083473, coo, {from: coo,value: 0});
await instance.createPromoKitty(467864726, coo, {from: coo,value: 0});
await instance.createPromoKitty(886609338, coo, {from: coo,value: 0});
await instance.createPromoKitty(377856275, coo, {from: coo,value: 0});
await instance.createPromoKitty(837388703, coo, {from: coo,value: 0});
await instance.createPromoKitty(860250103, coo, {from: coo,value: 0});
await instance.createPromoKitty(684481058, coo, {from: coo,value: 0});
await instance.createPromoKitty(541639584, coo, {from: coo,value: 0});
await instance.createPromoKitty(835354741, coo, {from: coo,value: 0});
await instance.createPromoKitty(825905398, coo, {from: coo,value: 0});
await instance.createPromoKitty(212858160, coo, {from: coo,value: 0});
await instance.createPromoKitty(437903056, coo, {from: coo,value: 0});
await instance.createPromoKitty(606023297, coo, {from: coo,value: 0});
await instance.createPromoKitty(160732342, coo, {from: coo,value: 0});
await instance.createPromoKitty(484292704, coo, {from: coo,value: 0});
await instance.createPromoKitty(932615190, coo, {from: coo,value: 0});
await instance.createPromoKitty(203990304, coo, {from: coo,value: 0});
await instance.createPromoKitty(311597261, coo, {from: coo,value: 0});
await instance.createPromoKitty(686339431, coo, {from: coo,value: 0});
await instance.createPromoKitty(238782581, coo, {from: coo,value: 0});
await instance.createPromoKitty(827684747, coo, {from: coo,value: 0});
await instance.createPromoKitty(996513339, coo, {from: coo,value: 0});
await instance.createPromoKitty(445356738, coo, {from: coo,value: 0});
await instance.createPromoKitty(962550729, coo, {from: coo,value: 0});
await instance.createPromoKitty(889867204, coo, {from: coo,value: 0});
await instance.createPromoKitty(766184501, coo, {from: coo,value: 0});
await instance.createPromoKitty(942850207, coo, {from: coo,value: 0});
await instance.createPromoKitty(346429583, coo, {from: coo,value: 0});
await instance.createPromoKitty(858536045, coo, {from: coo,value: 0});
await instance.createPromoKitty(38772047, coo, {from: coo,value: 0});
await instance.createPromoKitty(639181713, coo, {from: coo,value: 0});
await instance.createPromoKitty(704462042, coo, {from: coo,value: 0});
await instance.createPromoKitty(510659050, coo, {from: coo,value: 0});
await instance.createPromoKitty(502446039, coo, {from: coo,value: 0});
await instance.createPromoKitty(668097083, coo, {from: coo,value: 0});
await instance.createPromoKitty(960587618, coo, {from: coo,value: 0});
await instance.createPromoKitty(337461621, coo, {from: coo,value: 0});
await instance.createPromoKitty(197148736, coo, {from: coo,value: 0});
await instance.createPromoKitty(597774167, coo, {from: coo,value: 0});
await instance.createPromoKitty(770644872, coo, {from: coo,value: 0});
await instance.createPromoKitty(32827670, coo, {from: coo,value: 0});
await instance.createPromoKitty(139810743, coo, {from: coo,value: 0});
await instance.createPromoKitty(737171108, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(20, 15, {from: coo});
await instance.breedWith(17, 4, {from: coo});
await instance.breedWith(18, 31, {from: coo});
await instance.breedWith(38, 16, {from: coo});
await instance.breedWith(11, 6, {from: coo});
await instance.breedWith(7, 28, {from: coo});
await instance.breedWith(26, 27, {from: coo});
await instance.breedWith(24, 8, {from: coo});
await instance.breedWith(33, 34, {from: coo});
await instance.breedWith(3, 2, {from: coo});
await instance.breedWith(14, 19, {from: coo});
await instance.breedWith(5, 29, {from: coo});
await instance.breedWith(30, 39, {from: coo});
await instance.breedWith(10, 22, {from: coo});
await instance.breedWith(21, 1, {from: coo});
await instance.breedWith(13, 32, {from: coo});
await instance.breedWith(23, 40, {from: coo});
await instance.breedWith(25, 36, {from: coo});
await instance.breedWith(35, 12, {from: coo});
await instance.breedWith(37, 9, {from: coo});
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
await instance.giveBirth(20);
await instance.giveBirth(17);
await instance.giveBirth(18);
await instance.giveBirth(38);
await instance.giveBirth(11);
await instance.giveBirth(7);
await instance.giveBirth(26);
await instance.giveBirth(24);
await instance.giveBirth(33);
await instance.giveBirth(3);
await instance.giveBirth(14);
await instance.giveBirth(5);
await instance.giveBirth(30);
await instance.giveBirth(10);
await instance.giveBirth(21);
await instance.giveBirth(13);
await instance.giveBirth(23);
await instance.giveBirth(25);
await instance.giveBirth(35);
await instance.giveBirth(37);
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
