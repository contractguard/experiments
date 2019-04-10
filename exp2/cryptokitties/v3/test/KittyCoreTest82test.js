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
await instance.createPromoKitty(972993447, coo, {from: coo,value: 0});
await instance.createPromoKitty(251600958, coo, {from: coo,value: 0});
await instance.createPromoKitty(141526242, coo, {from: coo,value: 0});
await instance.createPromoKitty(503130347, coo, {from: coo,value: 0});
await instance.createPromoKitty(578849921, coo, {from: coo,value: 0});
await instance.createPromoKitty(883834505, coo, {from: coo,value: 0});
await instance.createPromoKitty(762567593, coo, {from: coo,value: 0});
await instance.createPromoKitty(949508408, coo, {from: coo,value: 0});
await instance.createPromoKitty(985072946, coo, {from: coo,value: 0});
await instance.createPromoKitty(689913708, coo, {from: coo,value: 0});
await instance.createPromoKitty(250072979, coo, {from: coo,value: 0});
await instance.createPromoKitty(361865107, coo, {from: coo,value: 0});
await instance.createPromoKitty(951849310, coo, {from: coo,value: 0});
await instance.createPromoKitty(760122827, coo, {from: coo,value: 0});
await instance.createPromoKitty(453717998, coo, {from: coo,value: 0});
await instance.createPromoKitty(58126574, coo, {from: coo,value: 0});
await instance.createPromoKitty(543389909, coo, {from: coo,value: 0});
await instance.createPromoKitty(89628566, coo, {from: coo,value: 0});
await instance.createPromoKitty(501395562, coo, {from: coo,value: 0});
await instance.createPromoKitty(33446562, coo, {from: coo,value: 0});
await instance.createPromoKitty(65694046, coo, {from: coo,value: 0});
await instance.createPromoKitty(785140794, coo, {from: coo,value: 0});
await instance.createPromoKitty(921905226, coo, {from: coo,value: 0});
await instance.createPromoKitty(247556907, coo, {from: coo,value: 0});
await instance.createPromoKitty(342689648, coo, {from: coo,value: 0});
await instance.createPromoKitty(390852475, coo, {from: coo,value: 0});
await instance.createPromoKitty(364119835, coo, {from: coo,value: 0});
await instance.createPromoKitty(721851688, coo, {from: coo,value: 0});
await instance.createPromoKitty(920225755, coo, {from: coo,value: 0});
await instance.createPromoKitty(243566832, coo, {from: coo,value: 0});
await instance.createPromoKitty(112454721, coo, {from: coo,value: 0});
await instance.createPromoKitty(831085722, coo, {from: coo,value: 0});
await instance.createPromoKitty(173843506, coo, {from: coo,value: 0});
await instance.createPromoKitty(999380964, coo, {from: coo,value: 0});
await instance.createPromoKitty(421045105, coo, {from: coo,value: 0});
await instance.createPromoKitty(775796164, coo, {from: coo,value: 0});
await instance.createPromoKitty(424338871, coo, {from: coo,value: 0});
await instance.createPromoKitty(661011672, coo, {from: coo,value: 0});
await instance.createPromoKitty(304704176, coo, {from: coo,value: 0});
await instance.createPromoKitty(500373065, coo, {from: coo,value: 0});
await instance.createPromoKitty(305891750, coo, {from: coo,value: 0});
await instance.createPromoKitty(414540398, coo, {from: coo,value: 0});
await instance.createPromoKitty(244568500, coo, {from: coo,value: 0});
await instance.createPromoKitty(973205037, coo, {from: coo,value: 0});
await instance.createPromoKitty(966872734, coo, {from: coo,value: 0});
await instance.createPromoKitty(181049643, coo, {from: coo,value: 0});
await instance.createPromoKitty(599626928, coo, {from: coo,value: 0});
await instance.createPromoKitty(508796501, coo, {from: coo,value: 0});
await instance.createPromoKitty(909983139, coo, {from: coo,value: 0});
await instance.createPromoKitty(514560691, coo, {from: coo,value: 0});
await instance.createPromoKitty(55425377, coo, {from: coo,value: 0});
await instance.createPromoKitty(973530294, coo, {from: coo,value: 0});
await instance.createPromoKitty(2036755, coo, {from: coo,value: 0});
await instance.createPromoKitty(939231448, coo, {from: coo,value: 0});
await instance.createPromoKitty(917119200, coo, {from: coo,value: 0});
await instance.createPromoKitty(383063160, coo, {from: coo,value: 0});
await instance.createPromoKitty(871584769, coo, {from: coo,value: 0});
await instance.createPromoKitty(435767121, coo, {from: coo,value: 0});
await instance.createPromoKitty(828532264, coo, {from: coo,value: 0});
await instance.createPromoKitty(362083373, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(17, 3, {from: coo});
await instance.breedWith(24, 16, {from: coo});
await instance.breedWith(13, 4, {from: coo});
await instance.breedWith(23, 21, {from: coo});
await instance.breedWith(2, 30, {from: coo});
await instance.breedWith(27, 10, {from: coo});
await instance.breedWith(32, 34, {from: coo});
await instance.breedWith(31, 20, {from: coo});
await instance.breedWith(5, 33, {from: coo});
await instance.breedWith(8, 39, {from: coo});
await instance.breedWith(7, 25, {from: coo});
await instance.breedWith(35, 26, {from: coo});
await instance.breedWith(9, 11, {from: coo});
await instance.breedWith(1, 14, {from: coo});
await instance.breedWith(29, 22, {from: coo});
await instance.breedWith(37, 18, {from: coo});
await instance.breedWith(28, 40, {from: coo});
await instance.breedWith(15, 12, {from: coo});
await instance.breedWith(6, 38, {from: coo});
await instance.breedWith(19, 36, {from: coo});
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
await instance.giveBirth(17);
await instance.giveBirth(24);
await instance.giveBirth(13);
await instance.giveBirth(23);
await instance.giveBirth(2);
await instance.giveBirth(27);
await instance.giveBirth(32);
await instance.giveBirth(31);
await instance.giveBirth(5);
await instance.giveBirth(8);
await instance.giveBirth(7);
await instance.giveBirth(35);
await instance.giveBirth(9);
await instance.giveBirth(1);
await instance.giveBirth(29);
await instance.giveBirth(37);
await instance.giveBirth(28);
await instance.giveBirth(15);
await instance.giveBirth(6);
await instance.giveBirth(19);
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
