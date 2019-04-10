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
await instance.createPromoKitty(935746053, coo, {from: coo,value: 0});
await instance.createPromoKitty(934929593, coo, {from: coo,value: 0});
await instance.createPromoKitty(859431815, coo, {from: coo,value: 0});
await instance.createPromoKitty(544097600, coo, {from: coo,value: 0});
await instance.createPromoKitty(561258609, coo, {from: coo,value: 0});
await instance.createPromoKitty(511681582, coo, {from: coo,value: 0});
await instance.createPromoKitty(555514773, coo, {from: coo,value: 0});
await instance.createPromoKitty(754749835, coo, {from: coo,value: 0});
await instance.createPromoKitty(901361947, coo, {from: coo,value: 0});
await instance.createPromoKitty(826330210, coo, {from: coo,value: 0});
await instance.createPromoKitty(642670278, coo, {from: coo,value: 0});
await instance.createPromoKitty(575462025, coo, {from: coo,value: 0});
await instance.createPromoKitty(199242851, coo, {from: coo,value: 0});
await instance.createPromoKitty(56899639, coo, {from: coo,value: 0});
await instance.createPromoKitty(620442090, coo, {from: coo,value: 0});
await instance.createPromoKitty(363146601, coo, {from: coo,value: 0});
await instance.createPromoKitty(578491538, coo, {from: coo,value: 0});
await instance.createPromoKitty(544340878, coo, {from: coo,value: 0});
await instance.createPromoKitty(164106031, coo, {from: coo,value: 0});
await instance.createPromoKitty(307325521, coo, {from: coo,value: 0});
await instance.createPromoKitty(723854367, coo, {from: coo,value: 0});
await instance.createPromoKitty(430048046, coo, {from: coo,value: 0});
await instance.createPromoKitty(908214472, coo, {from: coo,value: 0});
await instance.createPromoKitty(640962062, coo, {from: coo,value: 0});
await instance.createPromoKitty(562922078, coo, {from: coo,value: 0});
await instance.createPromoKitty(703689422, coo, {from: coo,value: 0});
await instance.createPromoKitty(641700828, coo, {from: coo,value: 0});
await instance.createPromoKitty(357247618, coo, {from: coo,value: 0});
await instance.createPromoKitty(366140775, coo, {from: coo,value: 0});
await instance.createPromoKitty(789912580, coo, {from: coo,value: 0});
await instance.createPromoKitty(825098530, coo, {from: coo,value: 0});
await instance.createPromoKitty(718167546, coo, {from: coo,value: 0});
await instance.createPromoKitty(495235319, coo, {from: coo,value: 0});
await instance.createPromoKitty(566996968, coo, {from: coo,value: 0});
await instance.createPromoKitty(663136953, coo, {from: coo,value: 0});
await instance.createPromoKitty(2869324, coo, {from: coo,value: 0});
await instance.createPromoKitty(912580146, coo, {from: coo,value: 0});
await instance.createPromoKitty(940027195, coo, {from: coo,value: 0});
await instance.createPromoKitty(290195601, coo, {from: coo,value: 0});
await instance.createPromoKitty(15315304, coo, {from: coo,value: 0});
await instance.createPromoKitty(246830280, coo, {from: coo,value: 0});
await instance.createPromoKitty(92487448, coo, {from: coo,value: 0});
await instance.createPromoKitty(87387768, coo, {from: coo,value: 0});
await instance.createPromoKitty(95539027, coo, {from: coo,value: 0});
await instance.createPromoKitty(225813694, coo, {from: coo,value: 0});
await instance.createPromoKitty(676795756, coo, {from: coo,value: 0});
await instance.createPromoKitty(583265146, coo, {from: coo,value: 0});
await instance.createPromoKitty(333003941, coo, {from: coo,value: 0});
await instance.createPromoKitty(284984811, coo, {from: coo,value: 0});
await instance.createPromoKitty(33804103, coo, {from: coo,value: 0});
await instance.createPromoKitty(247624429, coo, {from: coo,value: 0});
await instance.createPromoKitty(922702814, coo, {from: coo,value: 0});
await instance.createPromoKitty(341789933, coo, {from: coo,value: 0});
await instance.createPromoKitty(751642243, coo, {from: coo,value: 0});
await instance.createPromoKitty(347221218, coo, {from: coo,value: 0});
await instance.createPromoKitty(554273203, coo, {from: coo,value: 0});
await instance.createPromoKitty(108272766, coo, {from: coo,value: 0});
await instance.createPromoKitty(468907320, coo, {from: coo,value: 0});
await instance.createPromoKitty(151879171, coo, {from: coo,value: 0});
await instance.createPromoKitty(272725755, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(31, 27, {from: coo});
await instance.breedWith(38, 25, {from: coo});
await instance.breedWith(1, 9, {from: coo});
await instance.breedWith(12, 39, {from: coo});
await instance.breedWith(7, 14, {from: coo});
await instance.breedWith(10, 11, {from: coo});
await instance.breedWith(35, 24, {from: coo});
await instance.breedWith(32, 15, {from: coo});
await instance.breedWith(2, 22, {from: coo});
await instance.breedWith(3, 28, {from: coo});
await instance.breedWith(36, 21, {from: coo});
await instance.breedWith(34, 37, {from: coo});
await instance.breedWith(26, 20, {from: coo});
await instance.breedWith(29, 17, {from: coo});
await instance.breedWith(13, 6, {from: coo});
await instance.breedWith(30, 40, {from: coo});
await instance.breedWith(5, 23, {from: coo});
await instance.breedWith(18, 8, {from: coo});
await instance.breedWith(4, 33, {from: coo});
await instance.breedWith(16, 19, {from: coo});
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
await instance.giveBirth(38);
await instance.giveBirth(1);
await instance.giveBirth(12);
await instance.giveBirth(7);
await instance.giveBirth(10);
await instance.giveBirth(35);
await instance.giveBirth(32);
await instance.giveBirth(2);
await instance.giveBirth(3);
await instance.giveBirth(36);
await instance.giveBirth(34);
await instance.giveBirth(26);
await instance.giveBirth(29);
await instance.giveBirth(13);
await instance.giveBirth(30);
await instance.giveBirth(5);
await instance.giveBirth(18);
await instance.giveBirth(4);
await instance.giveBirth(16);
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
