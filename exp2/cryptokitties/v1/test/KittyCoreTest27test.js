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
await instance.createPromoKitty(793826752, coo, {from: coo,value: 0});
await instance.createPromoKitty(349939408, coo, {from: coo,value: 0});
await instance.createPromoKitty(849178272, coo, {from: coo,value: 0});
await instance.createPromoKitty(536250819, coo, {from: coo,value: 0});
await instance.createPromoKitty(939390008, coo, {from: coo,value: 0});
await instance.createPromoKitty(629034465, coo, {from: coo,value: 0});
await instance.createPromoKitty(57753153, coo, {from: coo,value: 0});
await instance.createPromoKitty(556270455, coo, {from: coo,value: 0});
await instance.createPromoKitty(826745641, coo, {from: coo,value: 0});
await instance.createPromoKitty(833656310, coo, {from: coo,value: 0});
await instance.createPromoKitty(97061416, coo, {from: coo,value: 0});
await instance.createPromoKitty(410606037, coo, {from: coo,value: 0});
await instance.createPromoKitty(702639971, coo, {from: coo,value: 0});
await instance.createPromoKitty(536466552, coo, {from: coo,value: 0});
await instance.createPromoKitty(805292063, coo, {from: coo,value: 0});
await instance.createPromoKitty(848747082, coo, {from: coo,value: 0});
await instance.createPromoKitty(787334676, coo, {from: coo,value: 0});
await instance.createPromoKitty(970085744, coo, {from: coo,value: 0});
await instance.createPromoKitty(47240204, coo, {from: coo,value: 0});
await instance.createPromoKitty(485496196, coo, {from: coo,value: 0});
await instance.createPromoKitty(769919185, coo, {from: coo,value: 0});
await instance.createPromoKitty(977543259, coo, {from: coo,value: 0});
await instance.createPromoKitty(690521507, coo, {from: coo,value: 0});
await instance.createPromoKitty(225184920, coo, {from: coo,value: 0});
await instance.createPromoKitty(377431065, coo, {from: coo,value: 0});
await instance.createPromoKitty(383971910, coo, {from: coo,value: 0});
await instance.createPromoKitty(153733803, coo, {from: coo,value: 0});
await instance.createPromoKitty(85762514, coo, {from: coo,value: 0});
await instance.createPromoKitty(185593068, coo, {from: coo,value: 0});
await instance.createPromoKitty(956818910, coo, {from: coo,value: 0});
await instance.createPromoKitty(51462259, coo, {from: coo,value: 0});
await instance.createPromoKitty(376404664, coo, {from: coo,value: 0});
await instance.createPromoKitty(481922995, coo, {from: coo,value: 0});
await instance.createPromoKitty(903097508, coo, {from: coo,value: 0});
await instance.createPromoKitty(56321861, coo, {from: coo,value: 0});
await instance.createPromoKitty(337627493, coo, {from: coo,value: 0});
await instance.createPromoKitty(592460877, coo, {from: coo,value: 0});
await instance.createPromoKitty(431738290, coo, {from: coo,value: 0});
await instance.createPromoKitty(332376503, coo, {from: coo,value: 0});
await instance.createPromoKitty(754436496, coo, {from: coo,value: 0});
await instance.createPromoKitty(668593887, coo, {from: coo,value: 0});
await instance.createPromoKitty(151054079, coo, {from: coo,value: 0});
await instance.createPromoKitty(896817028, coo, {from: coo,value: 0});
await instance.createPromoKitty(837756077, coo, {from: coo,value: 0});
await instance.createPromoKitty(564826807, coo, {from: coo,value: 0});
await instance.createPromoKitty(566295630, coo, {from: coo,value: 0});
await instance.createPromoKitty(232997753, coo, {from: coo,value: 0});
await instance.createPromoKitty(636515141, coo, {from: coo,value: 0});
await instance.createPromoKitty(633278279, coo, {from: coo,value: 0});
await instance.createPromoKitty(709029590, coo, {from: coo,value: 0});
await instance.createPromoKitty(761851819, coo, {from: coo,value: 0});
await instance.createPromoKitty(860462522, coo, {from: coo,value: 0});
await instance.createPromoKitty(648476377, coo, {from: coo,value: 0});
await instance.createPromoKitty(234195819, coo, {from: coo,value: 0});
await instance.createPromoKitty(881278890, coo, {from: coo,value: 0});
await instance.createPromoKitty(752614491, coo, {from: coo,value: 0});
await instance.createPromoKitty(560236405, coo, {from: coo,value: 0});
await instance.createPromoKitty(734448005, coo, {from: coo,value: 0});
await instance.createPromoKitty(772488481, coo, {from: coo,value: 0});
await instance.createPromoKitty(104272214, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(13, 40, {from: coo});
await instance.breedWith(38, 35, {from: coo});
await instance.breedWith(10, 37, {from: coo});
await instance.breedWith(4, 34, {from: coo});
await instance.breedWith(28, 21, {from: coo});
await instance.breedWith(1, 5, {from: coo});
await instance.breedWith(18, 32, {from: coo});
await instance.breedWith(25, 33, {from: coo});
await instance.breedWith(24, 30, {from: coo});
await instance.breedWith(27, 7, {from: coo});
await instance.breedWith(6, 39, {from: coo});
await instance.breedWith(20, 29, {from: coo});
await instance.breedWith(31, 12, {from: coo});
await instance.breedWith(11, 22, {from: coo});
await instance.breedWith(23, 3, {from: coo});
await instance.breedWith(19, 26, {from: coo});
await instance.breedWith(14, 17, {from: coo});
await instance.breedWith(16, 15, {from: coo});
await instance.breedWith(8, 36, {from: coo});
await instance.breedWith(9, 2, {from: coo});
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
await instance.giveBirth(13);
await instance.giveBirth(38);
await instance.giveBirth(10);
await instance.giveBirth(4);
await instance.giveBirth(28);
await instance.giveBirth(1);
await instance.giveBirth(18);
await instance.giveBirth(25);
await instance.giveBirth(24);
await instance.giveBirth(27);
await instance.giveBirth(6);
await instance.giveBirth(20);
await instance.giveBirth(31);
await instance.giveBirth(11);
await instance.giveBirth(23);
await instance.giveBirth(19);
await instance.giveBirth(14);
await instance.giveBirth(16);
await instance.giveBirth(8);
await instance.giveBirth(9);
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
