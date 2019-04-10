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
await instance.createPromoKitty(346442085, coo, {from: coo,value: 0});
await instance.createPromoKitty(381527750, coo, {from: coo,value: 0});
await instance.createPromoKitty(973519795, coo, {from: coo,value: 0});
await instance.createPromoKitty(48949017, coo, {from: coo,value: 0});
await instance.createPromoKitty(928321876, coo, {from: coo,value: 0});
await instance.createPromoKitty(515287107, coo, {from: coo,value: 0});
await instance.createPromoKitty(842835465, coo, {from: coo,value: 0});
await instance.createPromoKitty(336439411, coo, {from: coo,value: 0});
await instance.createPromoKitty(706862473, coo, {from: coo,value: 0});
await instance.createPromoKitty(569310732, coo, {from: coo,value: 0});
await instance.createPromoKitty(181976622, coo, {from: coo,value: 0});
await instance.createPromoKitty(925194000, coo, {from: coo,value: 0});
await instance.createPromoKitty(95667447, coo, {from: coo,value: 0});
await instance.createPromoKitty(739427347, coo, {from: coo,value: 0});
await instance.createPromoKitty(108807218, coo, {from: coo,value: 0});
await instance.createPromoKitty(258784581, coo, {from: coo,value: 0});
await instance.createPromoKitty(780854561, coo, {from: coo,value: 0});
await instance.createPromoKitty(838359610, coo, {from: coo,value: 0});
await instance.createPromoKitty(982616535, coo, {from: coo,value: 0});
await instance.createPromoKitty(664071101, coo, {from: coo,value: 0});
await instance.createPromoKitty(249999683, coo, {from: coo,value: 0});
await instance.createPromoKitty(891960749, coo, {from: coo,value: 0});
await instance.createPromoKitty(48407238, coo, {from: coo,value: 0});
await instance.createPromoKitty(945554785, coo, {from: coo,value: 0});
await instance.createPromoKitty(352997536, coo, {from: coo,value: 0});
await instance.createPromoKitty(290711471, coo, {from: coo,value: 0});
await instance.createPromoKitty(578395322, coo, {from: coo,value: 0});
await instance.createPromoKitty(192568255, coo, {from: coo,value: 0});
await instance.createPromoKitty(674659498, coo, {from: coo,value: 0});
await instance.createPromoKitty(737617919, coo, {from: coo,value: 0});
await instance.createPromoKitty(660028435, coo, {from: coo,value: 0});
await instance.createPromoKitty(461553237, coo, {from: coo,value: 0});
await instance.createPromoKitty(422479147, coo, {from: coo,value: 0});
await instance.createPromoKitty(490472241, coo, {from: coo,value: 0});
await instance.createPromoKitty(69946189, coo, {from: coo,value: 0});
await instance.createPromoKitty(340110413, coo, {from: coo,value: 0});
await instance.createPromoKitty(443996003, coo, {from: coo,value: 0});
await instance.createPromoKitty(883805036, coo, {from: coo,value: 0});
await instance.createPromoKitty(117473276, coo, {from: coo,value: 0});
await instance.createPromoKitty(274165394, coo, {from: coo,value: 0});
await instance.createPromoKitty(75459177, coo, {from: coo,value: 0});
await instance.createPromoKitty(27414000, coo, {from: coo,value: 0});
await instance.createPromoKitty(996688660, coo, {from: coo,value: 0});
await instance.createPromoKitty(30162788, coo, {from: coo,value: 0});
await instance.createPromoKitty(620975045, coo, {from: coo,value: 0});
await instance.createPromoKitty(164569860, coo, {from: coo,value: 0});
await instance.createPromoKitty(709555797, coo, {from: coo,value: 0});
await instance.createPromoKitty(584059399, coo, {from: coo,value: 0});
await instance.createPromoKitty(210746880, coo, {from: coo,value: 0});
await instance.createPromoKitty(363171018, coo, {from: coo,value: 0});
await instance.createPromoKitty(249710679, coo, {from: coo,value: 0});
await instance.createPromoKitty(257462766, coo, {from: coo,value: 0});
await instance.createPromoKitty(303788601, coo, {from: coo,value: 0});
await instance.createPromoKitty(66850077, coo, {from: coo,value: 0});
await instance.createPromoKitty(703472776, coo, {from: coo,value: 0});
await instance.createPromoKitty(129001590, coo, {from: coo,value: 0});
await instance.createPromoKitty(322718600, coo, {from: coo,value: 0});
await instance.createPromoKitty(205498364, coo, {from: coo,value: 0});
await instance.createPromoKitty(425553939, coo, {from: coo,value: 0});
await instance.createPromoKitty(905059832, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(12, 32, {from: coo});
await instance.breedWith(25, 14, {from: coo});
await instance.breedWith(22, 23, {from: coo});
await instance.breedWith(24, 20, {from: coo});
await instance.breedWith(2, 35, {from: coo});
await instance.breedWith(13, 3, {from: coo});
await instance.breedWith(40, 31, {from: coo});
await instance.breedWith(17, 34, {from: coo});
await instance.breedWith(11, 1, {from: coo});
await instance.breedWith(26, 16, {from: coo});
await instance.breedWith(39, 30, {from: coo});
await instance.breedWith(8, 38, {from: coo});
await instance.breedWith(9, 15, {from: coo});
await instance.breedWith(37, 28, {from: coo});
await instance.breedWith(27, 4, {from: coo});
await instance.breedWith(7, 21, {from: coo});
await instance.breedWith(10, 29, {from: coo});
await instance.breedWith(19, 6, {from: coo});
await instance.breedWith(33, 18, {from: coo});
await instance.breedWith(5, 36, {from: coo});
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
await instance.giveBirth(12);
await instance.giveBirth(25);
await instance.giveBirth(22);
await instance.giveBirth(24);
await instance.giveBirth(2);
await instance.giveBirth(13);
await instance.giveBirth(40);
await instance.giveBirth(17);
await instance.giveBirth(11);
await instance.giveBirth(26);
await instance.giveBirth(39);
await instance.giveBirth(8);
await instance.giveBirth(9);
await instance.giveBirth(37);
await instance.giveBirth(27);
await instance.giveBirth(7);
await instance.giveBirth(10);
await instance.giveBirth(19);
await instance.giveBirth(33);
await instance.giveBirth(5);
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
