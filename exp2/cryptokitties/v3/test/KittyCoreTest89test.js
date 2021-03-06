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
await instance.createPromoKitty(256319293, coo, {from: coo,value: 0});
await instance.createPromoKitty(69584880, coo, {from: coo,value: 0});
await instance.createPromoKitty(814498229, coo, {from: coo,value: 0});
await instance.createPromoKitty(224133457, coo, {from: coo,value: 0});
await instance.createPromoKitty(142494318, coo, {from: coo,value: 0});
await instance.createPromoKitty(94521300, coo, {from: coo,value: 0});
await instance.createPromoKitty(108246697, coo, {from: coo,value: 0});
await instance.createPromoKitty(667291685, coo, {from: coo,value: 0});
await instance.createPromoKitty(236585519, coo, {from: coo,value: 0});
await instance.createPromoKitty(887288294, coo, {from: coo,value: 0});
await instance.createPromoKitty(986640470, coo, {from: coo,value: 0});
await instance.createPromoKitty(585083251, coo, {from: coo,value: 0});
await instance.createPromoKitty(900158108, coo, {from: coo,value: 0});
await instance.createPromoKitty(315770187, coo, {from: coo,value: 0});
await instance.createPromoKitty(26632498, coo, {from: coo,value: 0});
await instance.createPromoKitty(632585206, coo, {from: coo,value: 0});
await instance.createPromoKitty(785210420, coo, {from: coo,value: 0});
await instance.createPromoKitty(4711101, coo, {from: coo,value: 0});
await instance.createPromoKitty(603610169, coo, {from: coo,value: 0});
await instance.createPromoKitty(324693944, coo, {from: coo,value: 0});
await instance.createPromoKitty(881489366, coo, {from: coo,value: 0});
await instance.createPromoKitty(564710273, coo, {from: coo,value: 0});
await instance.createPromoKitty(254342875, coo, {from: coo,value: 0});
await instance.createPromoKitty(887211116, coo, {from: coo,value: 0});
await instance.createPromoKitty(652900332, coo, {from: coo,value: 0});
await instance.createPromoKitty(812757138, coo, {from: coo,value: 0});
await instance.createPromoKitty(249007792, coo, {from: coo,value: 0});
await instance.createPromoKitty(120460205, coo, {from: coo,value: 0});
await instance.createPromoKitty(100871135, coo, {from: coo,value: 0});
await instance.createPromoKitty(910494279, coo, {from: coo,value: 0});
await instance.createPromoKitty(724000497, coo, {from: coo,value: 0});
await instance.createPromoKitty(851137359, coo, {from: coo,value: 0});
await instance.createPromoKitty(145491851, coo, {from: coo,value: 0});
await instance.createPromoKitty(90084106, coo, {from: coo,value: 0});
await instance.createPromoKitty(799707227, coo, {from: coo,value: 0});
await instance.createPromoKitty(301873087, coo, {from: coo,value: 0});
await instance.createPromoKitty(207235985, coo, {from: coo,value: 0});
await instance.createPromoKitty(653792779, coo, {from: coo,value: 0});
await instance.createPromoKitty(280437635, coo, {from: coo,value: 0});
await instance.createPromoKitty(894340637, coo, {from: coo,value: 0});
await instance.createPromoKitty(326519474, coo, {from: coo,value: 0});
await instance.createPromoKitty(988347071, coo, {from: coo,value: 0});
await instance.createPromoKitty(811678644, coo, {from: coo,value: 0});
await instance.createPromoKitty(14469373, coo, {from: coo,value: 0});
await instance.createPromoKitty(969015162, coo, {from: coo,value: 0});
await instance.createPromoKitty(993323842, coo, {from: coo,value: 0});
await instance.createPromoKitty(688383610, coo, {from: coo,value: 0});
await instance.createPromoKitty(431989577, coo, {from: coo,value: 0});
await instance.createPromoKitty(372793083, coo, {from: coo,value: 0});
await instance.createPromoKitty(146660751, coo, {from: coo,value: 0});
await instance.createPromoKitty(720526938, coo, {from: coo,value: 0});
await instance.createPromoKitty(940721364, coo, {from: coo,value: 0});
await instance.createPromoKitty(847341400, coo, {from: coo,value: 0});
await instance.createPromoKitty(698734250, coo, {from: coo,value: 0});
await instance.createPromoKitty(222668445, coo, {from: coo,value: 0});
await instance.createPromoKitty(138785967, coo, {from: coo,value: 0});
await instance.createPromoKitty(545874306, coo, {from: coo,value: 0});
await instance.createPromoKitty(157876861, coo, {from: coo,value: 0});
await instance.createPromoKitty(55148379, coo, {from: coo,value: 0});
await instance.createPromoKitty(3727497, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(2, 8, {from: coo});
await instance.breedWith(20, 21, {from: coo});
await instance.breedWith(30, 17, {from: coo});
await instance.breedWith(16, 18, {from: coo});
await instance.breedWith(7, 24, {from: coo});
await instance.breedWith(31, 12, {from: coo});
await instance.breedWith(26, 10, {from: coo});
await instance.breedWith(15, 14, {from: coo});
await instance.breedWith(6, 22, {from: coo});
await instance.breedWith(5, 29, {from: coo});
await instance.breedWith(11, 9, {from: coo});
await instance.breedWith(25, 32, {from: coo});
await instance.breedWith(33, 38, {from: coo});
await instance.breedWith(27, 40, {from: coo});
await instance.breedWith(39, 36, {from: coo});
await instance.breedWith(28, 23, {from: coo});
await instance.breedWith(13, 34, {from: coo});
await instance.breedWith(19, 4, {from: coo});
await instance.breedWith(37, 1, {from: coo});
await instance.breedWith(35, 3, {from: coo});
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
await instance.giveBirth(20);
await instance.giveBirth(30);
await instance.giveBirth(16);
await instance.giveBirth(7);
await instance.giveBirth(31);
await instance.giveBirth(26);
await instance.giveBirth(15);
await instance.giveBirth(6);
await instance.giveBirth(5);
await instance.giveBirth(11);
await instance.giveBirth(25);
await instance.giveBirth(33);
await instance.giveBirth(27);
await instance.giveBirth(39);
await instance.giveBirth(28);
await instance.giveBirth(13);
await instance.giveBirth(19);
await instance.giveBirth(37);
await instance.giveBirth(35);
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
