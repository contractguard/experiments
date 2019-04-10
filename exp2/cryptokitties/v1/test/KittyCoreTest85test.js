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
await instance.createPromoKitty(405714617, coo, {from: coo,value: 0});
await instance.createPromoKitty(451277557, coo, {from: coo,value: 0});
await instance.createPromoKitty(558650625, coo, {from: coo,value: 0});
await instance.createPromoKitty(262276299, coo, {from: coo,value: 0});
await instance.createPromoKitty(747391600, coo, {from: coo,value: 0});
await instance.createPromoKitty(353139767, coo, {from: coo,value: 0});
await instance.createPromoKitty(83823045, coo, {from: coo,value: 0});
await instance.createPromoKitty(233047583, coo, {from: coo,value: 0});
await instance.createPromoKitty(365466344, coo, {from: coo,value: 0});
await instance.createPromoKitty(312657114, coo, {from: coo,value: 0});
await instance.createPromoKitty(393047578, coo, {from: coo,value: 0});
await instance.createPromoKitty(321552563, coo, {from: coo,value: 0});
await instance.createPromoKitty(940187967, coo, {from: coo,value: 0});
await instance.createPromoKitty(581694489, coo, {from: coo,value: 0});
await instance.createPromoKitty(943510729, coo, {from: coo,value: 0});
await instance.createPromoKitty(503235815, coo, {from: coo,value: 0});
await instance.createPromoKitty(827579039, coo, {from: coo,value: 0});
await instance.createPromoKitty(365925929, coo, {from: coo,value: 0});
await instance.createPromoKitty(80468686, coo, {from: coo,value: 0});
await instance.createPromoKitty(148443331, coo, {from: coo,value: 0});
await instance.createPromoKitty(130114559, coo, {from: coo,value: 0});
await instance.createPromoKitty(232633316, coo, {from: coo,value: 0});
await instance.createPromoKitty(375386501, coo, {from: coo,value: 0});
await instance.createPromoKitty(854175950, coo, {from: coo,value: 0});
await instance.createPromoKitty(499936468, coo, {from: coo,value: 0});
await instance.createPromoKitty(330956442, coo, {from: coo,value: 0});
await instance.createPromoKitty(379118623, coo, {from: coo,value: 0});
await instance.createPromoKitty(845891046, coo, {from: coo,value: 0});
await instance.createPromoKitty(918134924, coo, {from: coo,value: 0});
await instance.createPromoKitty(244695400, coo, {from: coo,value: 0});
await instance.createPromoKitty(65125660, coo, {from: coo,value: 0});
await instance.createPromoKitty(226213494, coo, {from: coo,value: 0});
await instance.createPromoKitty(989097370, coo, {from: coo,value: 0});
await instance.createPromoKitty(198497739, coo, {from: coo,value: 0});
await instance.createPromoKitty(223595067, coo, {from: coo,value: 0});
await instance.createPromoKitty(4888034, coo, {from: coo,value: 0});
await instance.createPromoKitty(274475356, coo, {from: coo,value: 0});
await instance.createPromoKitty(723871071, coo, {from: coo,value: 0});
await instance.createPromoKitty(372832851, coo, {from: coo,value: 0});
await instance.createPromoKitty(702360903, coo, {from: coo,value: 0});
await instance.createPromoKitty(281322014, coo, {from: coo,value: 0});
await instance.createPromoKitty(195153320, coo, {from: coo,value: 0});
await instance.createPromoKitty(182734215, coo, {from: coo,value: 0});
await instance.createPromoKitty(371493185, coo, {from: coo,value: 0});
await instance.createPromoKitty(451018997, coo, {from: coo,value: 0});
await instance.createPromoKitty(594967847, coo, {from: coo,value: 0});
await instance.createPromoKitty(747646299, coo, {from: coo,value: 0});
await instance.createPromoKitty(389709192, coo, {from: coo,value: 0});
await instance.createPromoKitty(574649816, coo, {from: coo,value: 0});
await instance.createPromoKitty(732939252, coo, {from: coo,value: 0});
await instance.createPromoKitty(312071749, coo, {from: coo,value: 0});
await instance.createPromoKitty(7307930, coo, {from: coo,value: 0});
await instance.createPromoKitty(967552880, coo, {from: coo,value: 0});
await instance.createPromoKitty(978517812, coo, {from: coo,value: 0});
await instance.createPromoKitty(828886852, coo, {from: coo,value: 0});
await instance.createPromoKitty(531687857, coo, {from: coo,value: 0});
await instance.createPromoKitty(928767265, coo, {from: coo,value: 0});
await instance.createPromoKitty(529574412, coo, {from: coo,value: 0});
await instance.createPromoKitty(777240245, coo, {from: coo,value: 0});
await instance.createPromoKitty(363795831, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(23, 34, {from: coo});
await instance.breedWith(3, 4, {from: coo});
await instance.breedWith(39, 16, {from: coo});
await instance.breedWith(17, 10, {from: coo});
await instance.breedWith(31, 37, {from: coo});
await instance.breedWith(19, 29, {from: coo});
await instance.breedWith(15, 18, {from: coo});
await instance.breedWith(1, 35, {from: coo});
await instance.breedWith(25, 36, {from: coo});
await instance.breedWith(28, 27, {from: coo});
await instance.breedWith(11, 5, {from: coo});
await instance.breedWith(40, 12, {from: coo});
await instance.breedWith(14, 32, {from: coo});
await instance.breedWith(6, 22, {from: coo});
await instance.breedWith(30, 2, {from: coo});
await instance.breedWith(7, 8, {from: coo});
await instance.breedWith(24, 33, {from: coo});
await instance.breedWith(21, 26, {from: coo});
await instance.breedWith(38, 13, {from: coo});
await instance.breedWith(9, 20, {from: coo});
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
await instance.giveBirth(23);
await instance.giveBirth(3);
await instance.giveBirth(39);
await instance.giveBirth(17);
await instance.giveBirth(31);
await instance.giveBirth(19);
await instance.giveBirth(15);
await instance.giveBirth(1);
await instance.giveBirth(25);
await instance.giveBirth(28);
await instance.giveBirth(11);
await instance.giveBirth(40);
await instance.giveBirth(14);
await instance.giveBirth(6);
await instance.giveBirth(30);
await instance.giveBirth(7);
await instance.giveBirth(24);
await instance.giveBirth(21);
await instance.giveBirth(38);
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
