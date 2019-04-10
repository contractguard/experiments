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
await instance.createPromoKitty(315877007, coo, {from: coo,value: 0});
await instance.createPromoKitty(662179634, coo, {from: coo,value: 0});
await instance.createPromoKitty(992195707, coo, {from: coo,value: 0});
await instance.createPromoKitty(967553100, coo, {from: coo,value: 0});
await instance.createPromoKitty(221172527, coo, {from: coo,value: 0});
await instance.createPromoKitty(241804677, coo, {from: coo,value: 0});
await instance.createPromoKitty(738715149, coo, {from: coo,value: 0});
await instance.createPromoKitty(818280685, coo, {from: coo,value: 0});
await instance.createPromoKitty(490031836, coo, {from: coo,value: 0});
await instance.createPromoKitty(834945431, coo, {from: coo,value: 0});
await instance.createPromoKitty(498962579, coo, {from: coo,value: 0});
await instance.createPromoKitty(703336096, coo, {from: coo,value: 0});
await instance.createPromoKitty(82684991, coo, {from: coo,value: 0});
await instance.createPromoKitty(699831085, coo, {from: coo,value: 0});
await instance.createPromoKitty(615005420, coo, {from: coo,value: 0});
await instance.createPromoKitty(326824063, coo, {from: coo,value: 0});
await instance.createPromoKitty(127664440, coo, {from: coo,value: 0});
await instance.createPromoKitty(667859572, coo, {from: coo,value: 0});
await instance.createPromoKitty(816182327, coo, {from: coo,value: 0});
await instance.createPromoKitty(66506730, coo, {from: coo,value: 0});
await instance.createPromoKitty(334191008, coo, {from: coo,value: 0});
await instance.createPromoKitty(434797853, coo, {from: coo,value: 0});
await instance.createPromoKitty(572065185, coo, {from: coo,value: 0});
await instance.createPromoKitty(539549754, coo, {from: coo,value: 0});
await instance.createPromoKitty(462624441, coo, {from: coo,value: 0});
await instance.createPromoKitty(605282272, coo, {from: coo,value: 0});
await instance.createPromoKitty(978371145, coo, {from: coo,value: 0});
await instance.createPromoKitty(680764131, coo, {from: coo,value: 0});
await instance.createPromoKitty(654507582, coo, {from: coo,value: 0});
await instance.createPromoKitty(485936496, coo, {from: coo,value: 0});
await instance.createPromoKitty(450649852, coo, {from: coo,value: 0});
await instance.createPromoKitty(650696837, coo, {from: coo,value: 0});
await instance.createPromoKitty(715071471, coo, {from: coo,value: 0});
await instance.createPromoKitty(598213610, coo, {from: coo,value: 0});
await instance.createPromoKitty(89745904, coo, {from: coo,value: 0});
await instance.createPromoKitty(133776770, coo, {from: coo,value: 0});
await instance.createPromoKitty(172876477, coo, {from: coo,value: 0});
await instance.createPromoKitty(879313407, coo, {from: coo,value: 0});
await instance.createPromoKitty(414853341, coo, {from: coo,value: 0});
await instance.createPromoKitty(822156340, coo, {from: coo,value: 0});
await instance.createPromoKitty(959067117, coo, {from: coo,value: 0});
await instance.createPromoKitty(462089250, coo, {from: coo,value: 0});
await instance.createPromoKitty(404913676, coo, {from: coo,value: 0});
await instance.createPromoKitty(535598621, coo, {from: coo,value: 0});
await instance.createPromoKitty(159566635, coo, {from: coo,value: 0});
await instance.createPromoKitty(171911411, coo, {from: coo,value: 0});
await instance.createPromoKitty(470162212, coo, {from: coo,value: 0});
await instance.createPromoKitty(221853165, coo, {from: coo,value: 0});
await instance.createPromoKitty(415670248, coo, {from: coo,value: 0});
await instance.createPromoKitty(13590666, coo, {from: coo,value: 0});
await instance.createPromoKitty(288721925, coo, {from: coo,value: 0});
await instance.createPromoKitty(807056622, coo, {from: coo,value: 0});
await instance.createPromoKitty(190547788, coo, {from: coo,value: 0});
await instance.createPromoKitty(946466812, coo, {from: coo,value: 0});
await instance.createPromoKitty(660970480, coo, {from: coo,value: 0});
await instance.createPromoKitty(251745332, coo, {from: coo,value: 0});
await instance.createPromoKitty(838037000, coo, {from: coo,value: 0});
await instance.createPromoKitty(473952282, coo, {from: coo,value: 0});
await instance.createPromoKitty(523839440, coo, {from: coo,value: 0});
await instance.createPromoKitty(934543193, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(10, 34, {from: coo});
await instance.breedWith(7, 40, {from: coo});
await instance.breedWith(29, 27, {from: coo});
await instance.breedWith(31, 28, {from: coo});
await instance.breedWith(32, 26, {from: coo});
await instance.breedWith(11, 37, {from: coo});
await instance.breedWith(17, 30, {from: coo});
await instance.breedWith(16, 35, {from: coo});
await instance.breedWith(20, 36, {from: coo});
await instance.breedWith(21, 9, {from: coo});
await instance.breedWith(1, 14, {from: coo});
await instance.breedWith(13, 2, {from: coo});
await instance.breedWith(24, 5, {from: coo});
await instance.breedWith(25, 22, {from: coo});
await instance.breedWith(15, 18, {from: coo});
await instance.breedWith(12, 6, {from: coo});
await instance.breedWith(39, 33, {from: coo});
await instance.breedWith(3, 23, {from: coo});
await instance.breedWith(38, 8, {from: coo});
await instance.breedWith(4, 19, {from: coo});
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
await instance.giveBirth(10);
await instance.giveBirth(7);
await instance.giveBirth(29);
await instance.giveBirth(31);
await instance.giveBirth(32);
await instance.giveBirth(11);
await instance.giveBirth(17);
await instance.giveBirth(16);
await instance.giveBirth(20);
await instance.giveBirth(21);
await instance.giveBirth(1);
await instance.giveBirth(13);
await instance.giveBirth(24);
await instance.giveBirth(25);
await instance.giveBirth(15);
await instance.giveBirth(12);
await instance.giveBirth(39);
await instance.giveBirth(3);
await instance.giveBirth(38);
await instance.giveBirth(4);
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
