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
await instance.createPromoKitty(2605691, coo, {from: coo,value: 0});
await instance.createPromoKitty(999765995, coo, {from: coo,value: 0});
await instance.createPromoKitty(278506487, coo, {from: coo,value: 0});
await instance.createPromoKitty(22862664, coo, {from: coo,value: 0});
await instance.createPromoKitty(346309794, coo, {from: coo,value: 0});
await instance.createPromoKitty(440785263, coo, {from: coo,value: 0});
await instance.createPromoKitty(110134833, coo, {from: coo,value: 0});
await instance.createPromoKitty(927426389, coo, {from: coo,value: 0});
await instance.createPromoKitty(652305093, coo, {from: coo,value: 0});
await instance.createPromoKitty(648301172, coo, {from: coo,value: 0});
await instance.createPromoKitty(834078824, coo, {from: coo,value: 0});
await instance.createPromoKitty(282957384, coo, {from: coo,value: 0});
await instance.createPromoKitty(655394926, coo, {from: coo,value: 0});
await instance.createPromoKitty(607744996, coo, {from: coo,value: 0});
await instance.createPromoKitty(841953172, coo, {from: coo,value: 0});
await instance.createPromoKitty(697137106, coo, {from: coo,value: 0});
await instance.createPromoKitty(47557802, coo, {from: coo,value: 0});
await instance.createPromoKitty(54711956, coo, {from: coo,value: 0});
await instance.createPromoKitty(154831700, coo, {from: coo,value: 0});
await instance.createPromoKitty(324148211, coo, {from: coo,value: 0});
await instance.createPromoKitty(41374264, coo, {from: coo,value: 0});
await instance.createPromoKitty(999350402, coo, {from: coo,value: 0});
await instance.createPromoKitty(185206911, coo, {from: coo,value: 0});
await instance.createPromoKitty(422619343, coo, {from: coo,value: 0});
await instance.createPromoKitty(719142041, coo, {from: coo,value: 0});
await instance.createPromoKitty(190174674, coo, {from: coo,value: 0});
await instance.createPromoKitty(128843697, coo, {from: coo,value: 0});
await instance.createPromoKitty(339159094, coo, {from: coo,value: 0});
await instance.createPromoKitty(512789157, coo, {from: coo,value: 0});
await instance.createPromoKitty(750277429, coo, {from: coo,value: 0});
await instance.createPromoKitty(834375677, coo, {from: coo,value: 0});
await instance.createPromoKitty(902939031, coo, {from: coo,value: 0});
await instance.createPromoKitty(9562476, coo, {from: coo,value: 0});
await instance.createPromoKitty(549732523, coo, {from: coo,value: 0});
await instance.createPromoKitty(962932873, coo, {from: coo,value: 0});
await instance.createPromoKitty(745596790, coo, {from: coo,value: 0});
await instance.createPromoKitty(122227680, coo, {from: coo,value: 0});
await instance.createPromoKitty(406474059, coo, {from: coo,value: 0});
await instance.createPromoKitty(446464668, coo, {from: coo,value: 0});
await instance.createPromoKitty(349655447, coo, {from: coo,value: 0});
await instance.createPromoKitty(557405116, coo, {from: coo,value: 0});
await instance.createPromoKitty(664583133, coo, {from: coo,value: 0});
await instance.createPromoKitty(610049861, coo, {from: coo,value: 0});
await instance.createPromoKitty(877662049, coo, {from: coo,value: 0});
await instance.createPromoKitty(964738126, coo, {from: coo,value: 0});
await instance.createPromoKitty(347927661, coo, {from: coo,value: 0});
await instance.createPromoKitty(957177094, coo, {from: coo,value: 0});
await instance.createPromoKitty(367171684, coo, {from: coo,value: 0});
await instance.createPromoKitty(737229616, coo, {from: coo,value: 0});
await instance.createPromoKitty(353929319, coo, {from: coo,value: 0});
await instance.createPromoKitty(650267012, coo, {from: coo,value: 0});
await instance.createPromoKitty(907504781, coo, {from: coo,value: 0});
await instance.createPromoKitty(321029171, coo, {from: coo,value: 0});
await instance.createPromoKitty(921595891, coo, {from: coo,value: 0});
await instance.createPromoKitty(220693534, coo, {from: coo,value: 0});
await instance.createPromoKitty(981514539, coo, {from: coo,value: 0});
await instance.createPromoKitty(929785358, coo, {from: coo,value: 0});
await instance.createPromoKitty(128497211, coo, {from: coo,value: 0});
await instance.createPromoKitty(535305465, coo, {from: coo,value: 0});
await instance.createPromoKitty(205539977, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(6, 7, {from: coo});
await instance.breedWith(35, 27, {from: coo});
await instance.breedWith(18, 26, {from: coo});
await instance.breedWith(1, 39, {from: coo});
await instance.breedWith(30, 2, {from: coo});
await instance.breedWith(32, 19, {from: coo});
await instance.breedWith(20, 17, {from: coo});
await instance.breedWith(3, 33, {from: coo});
await instance.breedWith(8, 5, {from: coo});
await instance.breedWith(14, 28, {from: coo});
await instance.breedWith(40, 11, {from: coo});
await instance.breedWith(15, 24, {from: coo});
await instance.breedWith(22, 21, {from: coo});
await instance.breedWith(36, 38, {from: coo});
await instance.breedWith(37, 9, {from: coo});
await instance.breedWith(34, 12, {from: coo});
await instance.breedWith(4, 16, {from: coo});
await instance.breedWith(13, 31, {from: coo});
await instance.breedWith(25, 29, {from: coo});
await instance.breedWith(23, 10, {from: coo});
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
await instance.giveBirth(6);
await instance.giveBirth(35);
await instance.giveBirth(18);
await instance.giveBirth(1);
await instance.giveBirth(30);
await instance.giveBirth(32);
await instance.giveBirth(20);
await instance.giveBirth(3);
await instance.giveBirth(8);
await instance.giveBirth(14);
await instance.giveBirth(40);
await instance.giveBirth(15);
await instance.giveBirth(22);
await instance.giveBirth(36);
await instance.giveBirth(37);
await instance.giveBirth(34);
await instance.giveBirth(4);
await instance.giveBirth(13);
await instance.giveBirth(25);
await instance.giveBirth(23);
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
