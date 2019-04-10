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
await instance.createPromoKitty(740453164, coo, {from: coo,value: 0});
await instance.createPromoKitty(552614528, coo, {from: coo,value: 0});
await instance.createPromoKitty(5420682, coo, {from: coo,value: 0});
await instance.createPromoKitty(90497395, coo, {from: coo,value: 0});
await instance.createPromoKitty(879359089, coo, {from: coo,value: 0});
await instance.createPromoKitty(225965233, coo, {from: coo,value: 0});
await instance.createPromoKitty(314968089, coo, {from: coo,value: 0});
await instance.createPromoKitty(402030159, coo, {from: coo,value: 0});
await instance.createPromoKitty(503718737, coo, {from: coo,value: 0});
await instance.createPromoKitty(32289622, coo, {from: coo,value: 0});
await instance.createPromoKitty(527924582, coo, {from: coo,value: 0});
await instance.createPromoKitty(299467512, coo, {from: coo,value: 0});
await instance.createPromoKitty(827492890, coo, {from: coo,value: 0});
await instance.createPromoKitty(528575835, coo, {from: coo,value: 0});
await instance.createPromoKitty(94307782, coo, {from: coo,value: 0});
await instance.createPromoKitty(647676259, coo, {from: coo,value: 0});
await instance.createPromoKitty(191281787, coo, {from: coo,value: 0});
await instance.createPromoKitty(588263886, coo, {from: coo,value: 0});
await instance.createPromoKitty(885880866, coo, {from: coo,value: 0});
await instance.createPromoKitty(765118832, coo, {from: coo,value: 0});
await instance.createPromoKitty(196934271, coo, {from: coo,value: 0});
await instance.createPromoKitty(281417280, coo, {from: coo,value: 0});
await instance.createPromoKitty(200907500, coo, {from: coo,value: 0});
await instance.createPromoKitty(961848861, coo, {from: coo,value: 0});
await instance.createPromoKitty(763654076, coo, {from: coo,value: 0});
await instance.createPromoKitty(980048617, coo, {from: coo,value: 0});
await instance.createPromoKitty(177029517, coo, {from: coo,value: 0});
await instance.createPromoKitty(312837706, coo, {from: coo,value: 0});
await instance.createPromoKitty(686870826, coo, {from: coo,value: 0});
await instance.createPromoKitty(228537955, coo, {from: coo,value: 0});
await instance.createPromoKitty(299654165, coo, {from: coo,value: 0});
await instance.createPromoKitty(206657850, coo, {from: coo,value: 0});
await instance.createPromoKitty(666883161, coo, {from: coo,value: 0});
await instance.createPromoKitty(243737999, coo, {from: coo,value: 0});
await instance.createPromoKitty(101813734, coo, {from: coo,value: 0});
await instance.createPromoKitty(347439338, coo, {from: coo,value: 0});
await instance.createPromoKitty(554896164, coo, {from: coo,value: 0});
await instance.createPromoKitty(638707120, coo, {from: coo,value: 0});
await instance.createPromoKitty(26851425, coo, {from: coo,value: 0});
await instance.createPromoKitty(719558578, coo, {from: coo,value: 0});
await instance.createPromoKitty(511551060, coo, {from: coo,value: 0});
await instance.createPromoKitty(541028827, coo, {from: coo,value: 0});
await instance.createPromoKitty(567801143, coo, {from: coo,value: 0});
await instance.createPromoKitty(922977604, coo, {from: coo,value: 0});
await instance.createPromoKitty(251432641, coo, {from: coo,value: 0});
await instance.createPromoKitty(217196826, coo, {from: coo,value: 0});
await instance.createPromoKitty(168243746, coo, {from: coo,value: 0});
await instance.createPromoKitty(300144912, coo, {from: coo,value: 0});
await instance.createPromoKitty(730824087, coo, {from: coo,value: 0});
await instance.createPromoKitty(45586644, coo, {from: coo,value: 0});
await instance.createPromoKitty(554124622, coo, {from: coo,value: 0});
await instance.createPromoKitty(124297324, coo, {from: coo,value: 0});
await instance.createPromoKitty(152925082, coo, {from: coo,value: 0});
await instance.createPromoKitty(681719879, coo, {from: coo,value: 0});
await instance.createPromoKitty(349647491, coo, {from: coo,value: 0});
await instance.createPromoKitty(969884897, coo, {from: coo,value: 0});
await instance.createPromoKitty(312272358, coo, {from: coo,value: 0});
await instance.createPromoKitty(604683991, coo, {from: coo,value: 0});
await instance.createPromoKitty(920477219, coo, {from: coo,value: 0});
await instance.createPromoKitty(365019960, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(14, 28, {from: coo});
await instance.breedWith(8, 35, {from: coo});
await instance.breedWith(1, 30, {from: coo});
await instance.breedWith(5, 31, {from: coo});
await instance.breedWith(7, 23, {from: coo});
await instance.breedWith(18, 19, {from: coo});
await instance.breedWith(24, 9, {from: coo});
await instance.breedWith(26, 39, {from: coo});
await instance.breedWith(4, 33, {from: coo});
await instance.breedWith(12, 37, {from: coo});
await instance.breedWith(6, 29, {from: coo});
await instance.breedWith(16, 21, {from: coo});
await instance.breedWith(13, 40, {from: coo});
await instance.breedWith(17, 38, {from: coo});
await instance.breedWith(27, 20, {from: coo});
await instance.breedWith(10, 11, {from: coo});
await instance.breedWith(3, 22, {from: coo});
await instance.breedWith(36, 32, {from: coo});
await instance.breedWith(15, 25, {from: coo});
await instance.breedWith(34, 2, {from: coo});
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
await instance.giveBirth(14);
await instance.giveBirth(8);
await instance.giveBirth(1);
await instance.giveBirth(5);
await instance.giveBirth(7);
await instance.giveBirth(18);
await instance.giveBirth(24);
await instance.giveBirth(26);
await instance.giveBirth(4);
await instance.giveBirth(12);
await instance.giveBirth(6);
await instance.giveBirth(16);
await instance.giveBirth(13);
await instance.giveBirth(17);
await instance.giveBirth(27);
await instance.giveBirth(10);
await instance.giveBirth(3);
await instance.giveBirth(36);
await instance.giveBirth(15);
await instance.giveBirth(34);
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
