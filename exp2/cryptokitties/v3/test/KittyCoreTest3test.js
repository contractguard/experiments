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
await instance.createPromoKitty(414438456, coo, {from: coo,value: 0});
await instance.createPromoKitty(387674057, coo, {from: coo,value: 0});
await instance.createPromoKitty(983343758, coo, {from: coo,value: 0});
await instance.createPromoKitty(708332131, coo, {from: coo,value: 0});
await instance.createPromoKitty(426247137, coo, {from: coo,value: 0});
await instance.createPromoKitty(787273543, coo, {from: coo,value: 0});
await instance.createPromoKitty(73312827, coo, {from: coo,value: 0});
await instance.createPromoKitty(572021700, coo, {from: coo,value: 0});
await instance.createPromoKitty(523140196, coo, {from: coo,value: 0});
await instance.createPromoKitty(813885398, coo, {from: coo,value: 0});
await instance.createPromoKitty(910059813, coo, {from: coo,value: 0});
await instance.createPromoKitty(447915688, coo, {from: coo,value: 0});
await instance.createPromoKitty(146865419, coo, {from: coo,value: 0});
await instance.createPromoKitty(427547193, coo, {from: coo,value: 0});
await instance.createPromoKitty(793396932, coo, {from: coo,value: 0});
await instance.createPromoKitty(904003262, coo, {from: coo,value: 0});
await instance.createPromoKitty(875114486, coo, {from: coo,value: 0});
await instance.createPromoKitty(251257149, coo, {from: coo,value: 0});
await instance.createPromoKitty(489846351, coo, {from: coo,value: 0});
await instance.createPromoKitty(918762114, coo, {from: coo,value: 0});
await instance.createPromoKitty(177493024, coo, {from: coo,value: 0});
await instance.createPromoKitty(239512934, coo, {from: coo,value: 0});
await instance.createPromoKitty(994363442, coo, {from: coo,value: 0});
await instance.createPromoKitty(905306882, coo, {from: coo,value: 0});
await instance.createPromoKitty(684260932, coo, {from: coo,value: 0});
await instance.createPromoKitty(901667004, coo, {from: coo,value: 0});
await instance.createPromoKitty(271860531, coo, {from: coo,value: 0});
await instance.createPromoKitty(370223622, coo, {from: coo,value: 0});
await instance.createPromoKitty(902465693, coo, {from: coo,value: 0});
await instance.createPromoKitty(209866322, coo, {from: coo,value: 0});
await instance.createPromoKitty(821888186, coo, {from: coo,value: 0});
await instance.createPromoKitty(164126893, coo, {from: coo,value: 0});
await instance.createPromoKitty(212657143, coo, {from: coo,value: 0});
await instance.createPromoKitty(515787405, coo, {from: coo,value: 0});
await instance.createPromoKitty(760230318, coo, {from: coo,value: 0});
await instance.createPromoKitty(401344483, coo, {from: coo,value: 0});
await instance.createPromoKitty(713029239, coo, {from: coo,value: 0});
await instance.createPromoKitty(92781461, coo, {from: coo,value: 0});
await instance.createPromoKitty(21158242, coo, {from: coo,value: 0});
await instance.createPromoKitty(50562105, coo, {from: coo,value: 0});
await instance.createPromoKitty(288146390, coo, {from: coo,value: 0});
await instance.createPromoKitty(352747373, coo, {from: coo,value: 0});
await instance.createPromoKitty(540820943, coo, {from: coo,value: 0});
await instance.createPromoKitty(359359640, coo, {from: coo,value: 0});
await instance.createPromoKitty(482843837, coo, {from: coo,value: 0});
await instance.createPromoKitty(939679697, coo, {from: coo,value: 0});
await instance.createPromoKitty(669656419, coo, {from: coo,value: 0});
await instance.createPromoKitty(351642410, coo, {from: coo,value: 0});
await instance.createPromoKitty(277954375, coo, {from: coo,value: 0});
await instance.createPromoKitty(961521210, coo, {from: coo,value: 0});
await instance.createPromoKitty(69535313, coo, {from: coo,value: 0});
await instance.createPromoKitty(488324634, coo, {from: coo,value: 0});
await instance.createPromoKitty(343478200, coo, {from: coo,value: 0});
await instance.createPromoKitty(306628631, coo, {from: coo,value: 0});
await instance.createPromoKitty(123115083, coo, {from: coo,value: 0});
await instance.createPromoKitty(709356051, coo, {from: coo,value: 0});
await instance.createPromoKitty(269742889, coo, {from: coo,value: 0});
await instance.createPromoKitty(64625956, coo, {from: coo,value: 0});
await instance.createPromoKitty(813453709, coo, {from: coo,value: 0});
await instance.createPromoKitty(85902319, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(29, 34, {from: coo});
await instance.breedWith(17, 8, {from: coo});
await instance.breedWith(24, 12, {from: coo});
await instance.breedWith(31, 3, {from: coo});
await instance.breedWith(39, 4, {from: coo});
await instance.breedWith(10, 35, {from: coo});
await instance.breedWith(18, 21, {from: coo});
await instance.breedWith(16, 32, {from: coo});
await instance.breedWith(20, 25, {from: coo});
await instance.breedWith(1, 2, {from: coo});
await instance.breedWith(19, 26, {from: coo});
await instance.breedWith(23, 11, {from: coo});
await instance.breedWith(40, 22, {from: coo});
await instance.breedWith(6, 13, {from: coo});
await instance.breedWith(33, 36, {from: coo});
await instance.breedWith(37, 7, {from: coo});
await instance.breedWith(5, 9, {from: coo});
await instance.breedWith(14, 27, {from: coo});
await instance.breedWith(15, 28, {from: coo});
await instance.breedWith(38, 30, {from: coo});
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
await instance.giveBirth(24);
await instance.giveBirth(31);
await instance.giveBirth(39);
await instance.giveBirth(10);
await instance.giveBirth(18);
await instance.giveBirth(16);
await instance.giveBirth(20);
await instance.giveBirth(1);
await instance.giveBirth(19);
await instance.giveBirth(23);
await instance.giveBirth(40);
await instance.giveBirth(6);
await instance.giveBirth(33);
await instance.giveBirth(37);
await instance.giveBirth(5);
await instance.giveBirth(14);
await instance.giveBirth(15);
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
