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
await instance.createPromoKitty(128979939, coo, {from: coo,value: 0});
await instance.createPromoKitty(81846582, coo, {from: coo,value: 0});
await instance.createPromoKitty(984995417, coo, {from: coo,value: 0});
await instance.createPromoKitty(591696651, coo, {from: coo,value: 0});
await instance.createPromoKitty(503750881, coo, {from: coo,value: 0});
await instance.createPromoKitty(860010450, coo, {from: coo,value: 0});
await instance.createPromoKitty(852335289, coo, {from: coo,value: 0});
await instance.createPromoKitty(451336673, coo, {from: coo,value: 0});
await instance.createPromoKitty(117912248, coo, {from: coo,value: 0});
await instance.createPromoKitty(571747337, coo, {from: coo,value: 0});
await instance.createPromoKitty(137227660, coo, {from: coo,value: 0});
await instance.createPromoKitty(222945405, coo, {from: coo,value: 0});
await instance.createPromoKitty(566044903, coo, {from: coo,value: 0});
await instance.createPromoKitty(334191699, coo, {from: coo,value: 0});
await instance.createPromoKitty(480217186, coo, {from: coo,value: 0});
await instance.createPromoKitty(472191549, coo, {from: coo,value: 0});
await instance.createPromoKitty(952299459, coo, {from: coo,value: 0});
await instance.createPromoKitty(153234151, coo, {from: coo,value: 0});
await instance.createPromoKitty(468566047, coo, {from: coo,value: 0});
await instance.createPromoKitty(324111548, coo, {from: coo,value: 0});
await instance.createPromoKitty(227612459, coo, {from: coo,value: 0});
await instance.createPromoKitty(609805613, coo, {from: coo,value: 0});
await instance.createPromoKitty(695869942, coo, {from: coo,value: 0});
await instance.createPromoKitty(974141412, coo, {from: coo,value: 0});
await instance.createPromoKitty(508649449, coo, {from: coo,value: 0});
await instance.createPromoKitty(181827856, coo, {from: coo,value: 0});
await instance.createPromoKitty(83651248, coo, {from: coo,value: 0});
await instance.createPromoKitty(666412846, coo, {from: coo,value: 0});
await instance.createPromoKitty(974699442, coo, {from: coo,value: 0});
await instance.createPromoKitty(574248650, coo, {from: coo,value: 0});
await instance.createPromoKitty(808441662, coo, {from: coo,value: 0});
await instance.createPromoKitty(626427945, coo, {from: coo,value: 0});
await instance.createPromoKitty(969446865, coo, {from: coo,value: 0});
await instance.createPromoKitty(730042879, coo, {from: coo,value: 0});
await instance.createPromoKitty(487411395, coo, {from: coo,value: 0});
await instance.createPromoKitty(785291296, coo, {from: coo,value: 0});
await instance.createPromoKitty(246187498, coo, {from: coo,value: 0});
await instance.createPromoKitty(602763006, coo, {from: coo,value: 0});
await instance.createPromoKitty(761345900, coo, {from: coo,value: 0});
await instance.createPromoKitty(130998432, coo, {from: coo,value: 0});
await instance.createPromoKitty(788558347, coo, {from: coo,value: 0});
await instance.createPromoKitty(988019293, coo, {from: coo,value: 0});
await instance.createPromoKitty(916380039, coo, {from: coo,value: 0});
await instance.createPromoKitty(899546570, coo, {from: coo,value: 0});
await instance.createPromoKitty(639611163, coo, {from: coo,value: 0});
await instance.createPromoKitty(599748359, coo, {from: coo,value: 0});
await instance.createPromoKitty(541465988, coo, {from: coo,value: 0});
await instance.createPromoKitty(980059658, coo, {from: coo,value: 0});
await instance.createPromoKitty(838330121, coo, {from: coo,value: 0});
await instance.createPromoKitty(384895478, coo, {from: coo,value: 0});
await instance.createPromoKitty(528282086, coo, {from: coo,value: 0});
await instance.createPromoKitty(714017740, coo, {from: coo,value: 0});
await instance.createPromoKitty(518905740, coo, {from: coo,value: 0});
await instance.createPromoKitty(282164026, coo, {from: coo,value: 0});
await instance.createPromoKitty(860467707, coo, {from: coo,value: 0});
await instance.createPromoKitty(729871473, coo, {from: coo,value: 0});
await instance.createPromoKitty(760625514, coo, {from: coo,value: 0});
await instance.createPromoKitty(221081735, coo, {from: coo,value: 0});
await instance.createPromoKitty(461868887, coo, {from: coo,value: 0});
await instance.createPromoKitty(237418721, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(2, 18, {from: coo});
await instance.breedWith(16, 39, {from: coo});
await instance.breedWith(27, 6, {from: coo});
await instance.breedWith(34, 12, {from: coo});
await instance.breedWith(29, 9, {from: coo});
await instance.breedWith(23, 21, {from: coo});
await instance.breedWith(19, 5, {from: coo});
await instance.breedWith(31, 35, {from: coo});
await instance.breedWith(17, 14, {from: coo});
await instance.breedWith(37, 10, {from: coo});
await instance.breedWith(28, 11, {from: coo});
await instance.breedWith(40, 30, {from: coo});
await instance.breedWith(8, 33, {from: coo});
await instance.breedWith(38, 26, {from: coo});
await instance.breedWith(36, 7, {from: coo});
await instance.breedWith(24, 13, {from: coo});
await instance.breedWith(25, 15, {from: coo});
await instance.breedWith(32, 1, {from: coo});
await instance.breedWith(20, 22, {from: coo});
await instance.breedWith(3, 4, {from: coo});
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
await instance.giveBirth(2);
await instance.giveBirth(16);
await instance.giveBirth(27);
await instance.giveBirth(34);
await instance.giveBirth(29);
await instance.giveBirth(23);
await instance.giveBirth(19);
await instance.giveBirth(31);
await instance.giveBirth(17);
await instance.giveBirth(37);
await instance.giveBirth(28);
await instance.giveBirth(40);
await instance.giveBirth(8);
await instance.giveBirth(38);
await instance.giveBirth(36);
await instance.giveBirth(24);
await instance.giveBirth(25);
await instance.giveBirth(32);
await instance.giveBirth(20);
await instance.giveBirth(3);
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
