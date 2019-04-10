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
await instance.createPromoKitty(904984469, coo, {from: coo,value: 0});
await instance.createPromoKitty(536806275, coo, {from: coo,value: 0});
await instance.createPromoKitty(578312472, coo, {from: coo,value: 0});
await instance.createPromoKitty(471520257, coo, {from: coo,value: 0});
await instance.createPromoKitty(701680943, coo, {from: coo,value: 0});
await instance.createPromoKitty(708328633, coo, {from: coo,value: 0});
await instance.createPromoKitty(477729878, coo, {from: coo,value: 0});
await instance.createPromoKitty(53350859, coo, {from: coo,value: 0});
await instance.createPromoKitty(327956417, coo, {from: coo,value: 0});
await instance.createPromoKitty(532247645, coo, {from: coo,value: 0});
await instance.createPromoKitty(631438133, coo, {from: coo,value: 0});
await instance.createPromoKitty(726548059, coo, {from: coo,value: 0});
await instance.createPromoKitty(470514788, coo, {from: coo,value: 0});
await instance.createPromoKitty(885059194, coo, {from: coo,value: 0});
await instance.createPromoKitty(842989405, coo, {from: coo,value: 0});
await instance.createPromoKitty(331415913, coo, {from: coo,value: 0});
await instance.createPromoKitty(88710529, coo, {from: coo,value: 0});
await instance.createPromoKitty(922633579, coo, {from: coo,value: 0});
await instance.createPromoKitty(210201077, coo, {from: coo,value: 0});
await instance.createPromoKitty(473363148, coo, {from: coo,value: 0});
await instance.createPromoKitty(201753511, coo, {from: coo,value: 0});
await instance.createPromoKitty(607964269, coo, {from: coo,value: 0});
await instance.createPromoKitty(735920060, coo, {from: coo,value: 0});
await instance.createPromoKitty(578551864, coo, {from: coo,value: 0});
await instance.createPromoKitty(585759015, coo, {from: coo,value: 0});
await instance.createPromoKitty(298289941, coo, {from: coo,value: 0});
await instance.createPromoKitty(36624649, coo, {from: coo,value: 0});
await instance.createPromoKitty(268616259, coo, {from: coo,value: 0});
await instance.createPromoKitty(624619157, coo, {from: coo,value: 0});
await instance.createPromoKitty(481027, coo, {from: coo,value: 0});
await instance.createPromoKitty(555638735, coo, {from: coo,value: 0});
await instance.createPromoKitty(834066063, coo, {from: coo,value: 0});
await instance.createPromoKitty(2559239, coo, {from: coo,value: 0});
await instance.createPromoKitty(292278334, coo, {from: coo,value: 0});
await instance.createPromoKitty(321003738, coo, {from: coo,value: 0});
await instance.createPromoKitty(117476104, coo, {from: coo,value: 0});
await instance.createPromoKitty(840108455, coo, {from: coo,value: 0});
await instance.createPromoKitty(383362468, coo, {from: coo,value: 0});
await instance.createPromoKitty(867898341, coo, {from: coo,value: 0});
await instance.createPromoKitty(617855295, coo, {from: coo,value: 0});
await instance.createPromoKitty(713743662, coo, {from: coo,value: 0});
await instance.createPromoKitty(767134488, coo, {from: coo,value: 0});
await instance.createPromoKitty(984525999, coo, {from: coo,value: 0});
await instance.createPromoKitty(12153333, coo, {from: coo,value: 0});
await instance.createPromoKitty(658035468, coo, {from: coo,value: 0});
await instance.createPromoKitty(426534696, coo, {from: coo,value: 0});
await instance.createPromoKitty(726581039, coo, {from: coo,value: 0});
await instance.createPromoKitty(959094594, coo, {from: coo,value: 0});
await instance.createPromoKitty(835333459, coo, {from: coo,value: 0});
await instance.createPromoKitty(733280109, coo, {from: coo,value: 0});
await instance.createPromoKitty(414888222, coo, {from: coo,value: 0});
await instance.createPromoKitty(39086191, coo, {from: coo,value: 0});
await instance.createPromoKitty(802776154, coo, {from: coo,value: 0});
await instance.createPromoKitty(931149446, coo, {from: coo,value: 0});
await instance.createPromoKitty(799210240, coo, {from: coo,value: 0});
await instance.createPromoKitty(32885338, coo, {from: coo,value: 0});
await instance.createPromoKitty(850662828, coo, {from: coo,value: 0});
await instance.createPromoKitty(56598922, coo, {from: coo,value: 0});
await instance.createPromoKitty(272821029, coo, {from: coo,value: 0});
await instance.createPromoKitty(63131035, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(35, 22, {from: coo});
await instance.breedWith(38, 26, {from: coo});
await instance.breedWith(13, 12, {from: coo});
await instance.breedWith(6, 8, {from: coo});
await instance.breedWith(17, 9, {from: coo});
await instance.breedWith(15, 36, {from: coo});
await instance.breedWith(33, 34, {from: coo});
await instance.breedWith(1, 21, {from: coo});
await instance.breedWith(24, 14, {from: coo});
await instance.breedWith(28, 32, {from: coo});
await instance.breedWith(3, 4, {from: coo});
await instance.breedWith(5, 31, {from: coo});
await instance.breedWith(16, 20, {from: coo});
await instance.breedWith(11, 7, {from: coo});
await instance.breedWith(40, 2, {from: coo});
await instance.breedWith(30, 19, {from: coo});
await instance.breedWith(23, 18, {from: coo});
await instance.breedWith(25, 29, {from: coo});
await instance.breedWith(37, 10, {from: coo});
await instance.breedWith(39, 27, {from: coo});
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
await instance.giveBirth(35);
await instance.giveBirth(38);
await instance.giveBirth(13);
await instance.giveBirth(6);
await instance.giveBirth(17);
await instance.giveBirth(15);
await instance.giveBirth(33);
await instance.giveBirth(1);
await instance.giveBirth(24);
await instance.giveBirth(28);
await instance.giveBirth(3);
await instance.giveBirth(5);
await instance.giveBirth(16);
await instance.giveBirth(11);
await instance.giveBirth(40);
await instance.giveBirth(30);
await instance.giveBirth(23);
await instance.giveBirth(25);
await instance.giveBirth(37);
await instance.giveBirth(39);
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
