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
await instance.createPromoKitty(699866175, coo, {from: coo,value: 0});
await instance.createPromoKitty(19089044, coo, {from: coo,value: 0});
await instance.createPromoKitty(326581956, coo, {from: coo,value: 0});
await instance.createPromoKitty(851157362, coo, {from: coo,value: 0});
await instance.createPromoKitty(452577817, coo, {from: coo,value: 0});
await instance.createPromoKitty(726090761, coo, {from: coo,value: 0});
await instance.createPromoKitty(437205555, coo, {from: coo,value: 0});
await instance.createPromoKitty(890802325, coo, {from: coo,value: 0});
await instance.createPromoKitty(370955605, coo, {from: coo,value: 0});
await instance.createPromoKitty(513955044, coo, {from: coo,value: 0});
await instance.createPromoKitty(728541663, coo, {from: coo,value: 0});
await instance.createPromoKitty(558790045, coo, {from: coo,value: 0});
await instance.createPromoKitty(797897289, coo, {from: coo,value: 0});
await instance.createPromoKitty(639272013, coo, {from: coo,value: 0});
await instance.createPromoKitty(920570993, coo, {from: coo,value: 0});
await instance.createPromoKitty(873264821, coo, {from: coo,value: 0});
await instance.createPromoKitty(16845338, coo, {from: coo,value: 0});
await instance.createPromoKitty(585493507, coo, {from: coo,value: 0});
await instance.createPromoKitty(295833694, coo, {from: coo,value: 0});
await instance.createPromoKitty(161141308, coo, {from: coo,value: 0});
await instance.createPromoKitty(154399272, coo, {from: coo,value: 0});
await instance.createPromoKitty(763423337, coo, {from: coo,value: 0});
await instance.createPromoKitty(155943323, coo, {from: coo,value: 0});
await instance.createPromoKitty(596140055, coo, {from: coo,value: 0});
await instance.createPromoKitty(827527548, coo, {from: coo,value: 0});
await instance.createPromoKitty(652885383, coo, {from: coo,value: 0});
await instance.createPromoKitty(249112123, coo, {from: coo,value: 0});
await instance.createPromoKitty(714644185, coo, {from: coo,value: 0});
await instance.createPromoKitty(547483066, coo, {from: coo,value: 0});
await instance.createPromoKitty(941254923, coo, {from: coo,value: 0});
await instance.createPromoKitty(18435960, coo, {from: coo,value: 0});
await instance.createPromoKitty(986382032, coo, {from: coo,value: 0});
await instance.createPromoKitty(343924233, coo, {from: coo,value: 0});
await instance.createPromoKitty(166201967, coo, {from: coo,value: 0});
await instance.createPromoKitty(40287009, coo, {from: coo,value: 0});
await instance.createPromoKitty(833935791, coo, {from: coo,value: 0});
await instance.createPromoKitty(996490457, coo, {from: coo,value: 0});
await instance.createPromoKitty(64631108, coo, {from: coo,value: 0});
await instance.createPromoKitty(1548834, coo, {from: coo,value: 0});
await instance.createPromoKitty(81330111, coo, {from: coo,value: 0});
await instance.createPromoKitty(537305022, coo, {from: coo,value: 0});
await instance.createPromoKitty(430879152, coo, {from: coo,value: 0});
await instance.createPromoKitty(987892257, coo, {from: coo,value: 0});
await instance.createPromoKitty(736886429, coo, {from: coo,value: 0});
await instance.createPromoKitty(928872742, coo, {from: coo,value: 0});
await instance.createPromoKitty(899363081, coo, {from: coo,value: 0});
await instance.createPromoKitty(629164535, coo, {from: coo,value: 0});
await instance.createPromoKitty(29478357, coo, {from: coo,value: 0});
await instance.createPromoKitty(244504404, coo, {from: coo,value: 0});
await instance.createPromoKitty(569275476, coo, {from: coo,value: 0});
await instance.createPromoKitty(975370457, coo, {from: coo,value: 0});
await instance.createPromoKitty(541501488, coo, {from: coo,value: 0});
await instance.createPromoKitty(760624169, coo, {from: coo,value: 0});
await instance.createPromoKitty(41925725, coo, {from: coo,value: 0});
await instance.createPromoKitty(471801394, coo, {from: coo,value: 0});
await instance.createPromoKitty(296876592, coo, {from: coo,value: 0});
await instance.createPromoKitty(387957586, coo, {from: coo,value: 0});
await instance.createPromoKitty(706018662, coo, {from: coo,value: 0});
await instance.createPromoKitty(16725841, coo, {from: coo,value: 0});
await instance.createPromoKitty(811301252, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(9, 14, {from: coo});
await instance.breedWith(5, 23, {from: coo});
await instance.breedWith(2, 19, {from: coo});
await instance.breedWith(39, 30, {from: coo});
await instance.breedWith(8, 22, {from: coo});
await instance.breedWith(33, 15, {from: coo});
await instance.breedWith(28, 36, {from: coo});
await instance.breedWith(18, 32, {from: coo});
await instance.breedWith(31, 35, {from: coo});
await instance.breedWith(20, 11, {from: coo});
await instance.breedWith(1, 17, {from: coo});
await instance.breedWith(7, 24, {from: coo});
await instance.breedWith(12, 3, {from: coo});
await instance.breedWith(10, 16, {from: coo});
await instance.breedWith(29, 21, {from: coo});
await instance.breedWith(27, 37, {from: coo});
await instance.breedWith(25, 26, {from: coo});
await instance.breedWith(13, 4, {from: coo});
await instance.breedWith(34, 40, {from: coo});
await instance.breedWith(6, 38, {from: coo});
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
await instance.giveBirth(9);
await instance.giveBirth(5);
await instance.giveBirth(2);
await instance.giveBirth(39);
await instance.giveBirth(8);
await instance.giveBirth(33);
await instance.giveBirth(28);
await instance.giveBirth(18);
await instance.giveBirth(31);
await instance.giveBirth(20);
await instance.giveBirth(1);
await instance.giveBirth(7);
await instance.giveBirth(12);
await instance.giveBirth(10);
await instance.giveBirth(29);
await instance.giveBirth(27);
await instance.giveBirth(25);
await instance.giveBirth(13);
await instance.giveBirth(34);
await instance.giveBirth(6);
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
// let Kit5 = await test_subjec.t_KittyCore.createPromoKitty(n4, accounts[3], {from: coo, gas: 400000, gasPrice: 1100000000, value:0});
//console.log(Kit1.logs);

//培养第一代 kitty5
await instance.breedWith(55, 56, {from: coo});
await util.forwardEVMTime(cooldowns[0]);
await instance.giveBirth(55);

//培育第二代
await instance.breedWith(57, 59, {from: coo});
await util.forwardEVMTime(cooldowns[0]);});
it('attack', async() => {
 let result_Gen2 = await instance.giveBirth(57);
});
});
