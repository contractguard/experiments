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
await instance.createPromoKitty(304389910, coo, {from: coo,value: 0});
await instance.createPromoKitty(133214193, coo, {from: coo,value: 0});
await instance.createPromoKitty(801367205, coo, {from: coo,value: 0});
await instance.createPromoKitty(909904137, coo, {from: coo,value: 0});
await instance.createPromoKitty(135940247, coo, {from: coo,value: 0});
await instance.createPromoKitty(86648207, coo, {from: coo,value: 0});
await instance.createPromoKitty(205690217, coo, {from: coo,value: 0});
await instance.createPromoKitty(603474349, coo, {from: coo,value: 0});
await instance.createPromoKitty(192204906, coo, {from: coo,value: 0});
await instance.createPromoKitty(454491177, coo, {from: coo,value: 0});
await instance.createPromoKitty(791590968, coo, {from: coo,value: 0});
await instance.createPromoKitty(909081112, coo, {from: coo,value: 0});
await instance.createPromoKitty(785186581, coo, {from: coo,value: 0});
await instance.createPromoKitty(689422787, coo, {from: coo,value: 0});
await instance.createPromoKitty(609847377, coo, {from: coo,value: 0});
await instance.createPromoKitty(377553359, coo, {from: coo,value: 0});
await instance.createPromoKitty(973019399, coo, {from: coo,value: 0});
await instance.createPromoKitty(969891358, coo, {from: coo,value: 0});
await instance.createPromoKitty(134297400, coo, {from: coo,value: 0});
await instance.createPromoKitty(278357572, coo, {from: coo,value: 0});
await instance.createPromoKitty(826818799, coo, {from: coo,value: 0});
await instance.createPromoKitty(769506702, coo, {from: coo,value: 0});
await instance.createPromoKitty(288541231, coo, {from: coo,value: 0});
await instance.createPromoKitty(976827619, coo, {from: coo,value: 0});
await instance.createPromoKitty(60110469, coo, {from: coo,value: 0});
await instance.createPromoKitty(716583542, coo, {from: coo,value: 0});
await instance.createPromoKitty(227815929, coo, {from: coo,value: 0});
await instance.createPromoKitty(955526484, coo, {from: coo,value: 0});
await instance.createPromoKitty(74531828, coo, {from: coo,value: 0});
await instance.createPromoKitty(195383021, coo, {from: coo,value: 0});
await instance.createPromoKitty(206070, coo, {from: coo,value: 0});
await instance.createPromoKitty(355884530, coo, {from: coo,value: 0});
await instance.createPromoKitty(827576758, coo, {from: coo,value: 0});
await instance.createPromoKitty(266907690, coo, {from: coo,value: 0});
await instance.createPromoKitty(972232147, coo, {from: coo,value: 0});
await instance.createPromoKitty(59895979, coo, {from: coo,value: 0});
await instance.createPromoKitty(950647569, coo, {from: coo,value: 0});
await instance.createPromoKitty(579732086, coo, {from: coo,value: 0});
await instance.createPromoKitty(807324628, coo, {from: coo,value: 0});
await instance.createPromoKitty(292775555, coo, {from: coo,value: 0});
await instance.createPromoKitty(320483139, coo, {from: coo,value: 0});
await instance.createPromoKitty(876998075, coo, {from: coo,value: 0});
await instance.createPromoKitty(470387510, coo, {from: coo,value: 0});
await instance.createPromoKitty(391854953, coo, {from: coo,value: 0});
await instance.createPromoKitty(119533993, coo, {from: coo,value: 0});
await instance.createPromoKitty(140294274, coo, {from: coo,value: 0});
await instance.createPromoKitty(150774193, coo, {from: coo,value: 0});
await instance.createPromoKitty(507265225, coo, {from: coo,value: 0});
await instance.createPromoKitty(948080273, coo, {from: coo,value: 0});
await instance.createPromoKitty(458358937, coo, {from: coo,value: 0});
await instance.createPromoKitty(345208166, coo, {from: coo,value: 0});
await instance.createPromoKitty(904686151, coo, {from: coo,value: 0});
await instance.createPromoKitty(189513754, coo, {from: coo,value: 0});
await instance.createPromoKitty(387372546, coo, {from: coo,value: 0});
await instance.createPromoKitty(453507665, coo, {from: coo,value: 0});
await instance.createPromoKitty(717803348, coo, {from: coo,value: 0});
await instance.createPromoKitty(742406787, coo, {from: coo,value: 0});
await instance.createPromoKitty(118592629, coo, {from: coo,value: 0});
await instance.createPromoKitty(742132981, coo, {from: coo,value: 0});
await instance.createPromoKitty(530377774, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(34, 15, {from: coo});
await instance.breedWith(29, 28, {from: coo});
await instance.breedWith(31, 2, {from: coo});
await instance.breedWith(23, 6, {from: coo});
await instance.breedWith(3, 24, {from: coo});
await instance.breedWith(11, 36, {from: coo});
await instance.breedWith(22, 7, {from: coo});
await instance.breedWith(33, 38, {from: coo});
await instance.breedWith(30, 4, {from: coo});
await instance.breedWith(1, 16, {from: coo});
await instance.breedWith(12, 40, {from: coo});
await instance.breedWith(17, 25, {from: coo});
await instance.breedWith(35, 5, {from: coo});
await instance.breedWith(21, 39, {from: coo});
await instance.breedWith(20, 14, {from: coo});
await instance.breedWith(37, 8, {from: coo});
await instance.breedWith(10, 32, {from: coo});
await instance.breedWith(13, 19, {from: coo});
await instance.breedWith(26, 9, {from: coo});
await instance.breedWith(18, 27, {from: coo});
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
await instance.giveBirth(34);
await instance.giveBirth(29);
await instance.giveBirth(31);
await instance.giveBirth(23);
await instance.giveBirth(3);
await instance.giveBirth(11);
await instance.giveBirth(22);
await instance.giveBirth(33);
await instance.giveBirth(30);
await instance.giveBirth(1);
await instance.giveBirth(12);
await instance.giveBirth(17);
await instance.giveBirth(35);
await instance.giveBirth(21);
await instance.giveBirth(20);
await instance.giveBirth(37);
await instance.giveBirth(10);
await instance.giveBirth(13);
await instance.giveBirth(26);
await instance.giveBirth(18);
});
it('test 5',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('test 6',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('test 7',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('test 8',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('test 9',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('acctack', async() => {
 await instance._breedWith(57,58,{from:coo});
});
});
