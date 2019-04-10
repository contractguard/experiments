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
await instance.createPromoKitty(237352202, coo, {from: coo,value: 0});
await instance.createPromoKitty(381128788, coo, {from: coo,value: 0});
await instance.createPromoKitty(288920785, coo, {from: coo,value: 0});
await instance.createPromoKitty(516357867, coo, {from: coo,value: 0});
await instance.createPromoKitty(732204358, coo, {from: coo,value: 0});
await instance.createPromoKitty(11307, coo, {from: coo,value: 0});
await instance.createPromoKitty(995025344, coo, {from: coo,value: 0});
await instance.createPromoKitty(412273973, coo, {from: coo,value: 0});
await instance.createPromoKitty(512724526, coo, {from: coo,value: 0});
await instance.createPromoKitty(660927950, coo, {from: coo,value: 0});
await instance.createPromoKitty(679537440, coo, {from: coo,value: 0});
await instance.createPromoKitty(332933349, coo, {from: coo,value: 0});
await instance.createPromoKitty(753360662, coo, {from: coo,value: 0});
await instance.createPromoKitty(323848584, coo, {from: coo,value: 0});
await instance.createPromoKitty(139711255, coo, {from: coo,value: 0});
await instance.createPromoKitty(809715877, coo, {from: coo,value: 0});
await instance.createPromoKitty(66178018, coo, {from: coo,value: 0});
await instance.createPromoKitty(889666147, coo, {from: coo,value: 0});
await instance.createPromoKitty(526002644, coo, {from: coo,value: 0});
await instance.createPromoKitty(910686995, coo, {from: coo,value: 0});
await instance.createPromoKitty(160165985, coo, {from: coo,value: 0});
await instance.createPromoKitty(818737695, coo, {from: coo,value: 0});
await instance.createPromoKitty(78030581, coo, {from: coo,value: 0});
await instance.createPromoKitty(349208752, coo, {from: coo,value: 0});
await instance.createPromoKitty(701323612, coo, {from: coo,value: 0});
await instance.createPromoKitty(628482605, coo, {from: coo,value: 0});
await instance.createPromoKitty(428768347, coo, {from: coo,value: 0});
await instance.createPromoKitty(292911753, coo, {from: coo,value: 0});
await instance.createPromoKitty(522922379, coo, {from: coo,value: 0});
await instance.createPromoKitty(851407791, coo, {from: coo,value: 0});
await instance.createPromoKitty(389828922, coo, {from: coo,value: 0});
await instance.createPromoKitty(313285375, coo, {from: coo,value: 0});
await instance.createPromoKitty(894104510, coo, {from: coo,value: 0});
await instance.createPromoKitty(652323449, coo, {from: coo,value: 0});
await instance.createPromoKitty(254424772, coo, {from: coo,value: 0});
await instance.createPromoKitty(365627716, coo, {from: coo,value: 0});
await instance.createPromoKitty(551411538, coo, {from: coo,value: 0});
await instance.createPromoKitty(728796630, coo, {from: coo,value: 0});
await instance.createPromoKitty(365373706, coo, {from: coo,value: 0});
await instance.createPromoKitty(72045668, coo, {from: coo,value: 0});
await instance.createPromoKitty(322109058, coo, {from: coo,value: 0});
await instance.createPromoKitty(611421173, coo, {from: coo,value: 0});
await instance.createPromoKitty(881311546, coo, {from: coo,value: 0});
await instance.createPromoKitty(695716738, coo, {from: coo,value: 0});
await instance.createPromoKitty(943759785, coo, {from: coo,value: 0});
await instance.createPromoKitty(865980957, coo, {from: coo,value: 0});
await instance.createPromoKitty(403894578, coo, {from: coo,value: 0});
await instance.createPromoKitty(567012378, coo, {from: coo,value: 0});
await instance.createPromoKitty(187512686, coo, {from: coo,value: 0});
await instance.createPromoKitty(208614200, coo, {from: coo,value: 0});
await instance.createPromoKitty(618091219, coo, {from: coo,value: 0});
await instance.createPromoKitty(487104762, coo, {from: coo,value: 0});
await instance.createPromoKitty(973539560, coo, {from: coo,value: 0});
await instance.createPromoKitty(141396513, coo, {from: coo,value: 0});
await instance.createPromoKitty(409110724, coo, {from: coo,value: 0});
await instance.createPromoKitty(485009507, coo, {from: coo,value: 0});
await instance.createPromoKitty(582060395, coo, {from: coo,value: 0});
await instance.createPromoKitty(136062502, coo, {from: coo,value: 0});
await instance.createPromoKitty(547412272, coo, {from: coo,value: 0});
await instance.createPromoKitty(833949748, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(1, 3, {from: coo});
await instance.breedWith(28, 30, {from: coo});
await instance.breedWith(16, 18, {from: coo});
await instance.breedWith(33, 26, {from: coo});
await instance.breedWith(22, 9, {from: coo});
await instance.breedWith(32, 24, {from: coo});
await instance.breedWith(2, 5, {from: coo});
await instance.breedWith(27, 8, {from: coo});
await instance.breedWith(31, 40, {from: coo});
await instance.breedWith(21, 10, {from: coo});
await instance.breedWith(11, 37, {from: coo});
await instance.breedWith(7, 12, {from: coo});
await instance.breedWith(39, 19, {from: coo});
await instance.breedWith(36, 34, {from: coo});
await instance.breedWith(38, 4, {from: coo});
await instance.breedWith(14, 6, {from: coo});
await instance.breedWith(17, 20, {from: coo});
await instance.breedWith(29, 15, {from: coo});
await instance.breedWith(13, 23, {from: coo});
await instance.breedWith(35, 25, {from: coo});
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
await instance.giveBirth(1);
await instance.giveBirth(28);
await instance.giveBirth(16);
await instance.giveBirth(33);
await instance.giveBirth(22);
await instance.giveBirth(32);
await instance.giveBirth(2);
await instance.giveBirth(27);
await instance.giveBirth(31);
await instance.giveBirth(21);
await instance.giveBirth(11);
await instance.giveBirth(7);
await instance.giveBirth(39);
await instance.giveBirth(36);
await instance.giveBirth(38);
await instance.giveBirth(14);
await instance.giveBirth(17);
await instance.giveBirth(29);
await instance.giveBirth(13);
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
