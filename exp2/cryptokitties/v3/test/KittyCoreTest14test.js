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
await instance.createPromoKitty(518549784, coo, {from: coo,value: 0});
await instance.createPromoKitty(950908263, coo, {from: coo,value: 0});
await instance.createPromoKitty(959847485, coo, {from: coo,value: 0});
await instance.createPromoKitty(124127802, coo, {from: coo,value: 0});
await instance.createPromoKitty(203501540, coo, {from: coo,value: 0});
await instance.createPromoKitty(207470010, coo, {from: coo,value: 0});
await instance.createPromoKitty(149556403, coo, {from: coo,value: 0});
await instance.createPromoKitty(431224652, coo, {from: coo,value: 0});
await instance.createPromoKitty(893222838, coo, {from: coo,value: 0});
await instance.createPromoKitty(18739862, coo, {from: coo,value: 0});
await instance.createPromoKitty(48758786, coo, {from: coo,value: 0});
await instance.createPromoKitty(288572385, coo, {from: coo,value: 0});
await instance.createPromoKitty(208525114, coo, {from: coo,value: 0});
await instance.createPromoKitty(699282582, coo, {from: coo,value: 0});
await instance.createPromoKitty(897199500, coo, {from: coo,value: 0});
await instance.createPromoKitty(555708291, coo, {from: coo,value: 0});
await instance.createPromoKitty(106831482, coo, {from: coo,value: 0});
await instance.createPromoKitty(459507290, coo, {from: coo,value: 0});
await instance.createPromoKitty(720706912, coo, {from: coo,value: 0});
await instance.createPromoKitty(899731559, coo, {from: coo,value: 0});
await instance.createPromoKitty(943281814, coo, {from: coo,value: 0});
await instance.createPromoKitty(646056134, coo, {from: coo,value: 0});
await instance.createPromoKitty(329267749, coo, {from: coo,value: 0});
await instance.createPromoKitty(279774999, coo, {from: coo,value: 0});
await instance.createPromoKitty(17331395, coo, {from: coo,value: 0});
await instance.createPromoKitty(627019414, coo, {from: coo,value: 0});
await instance.createPromoKitty(95645129, coo, {from: coo,value: 0});
await instance.createPromoKitty(128655734, coo, {from: coo,value: 0});
await instance.createPromoKitty(500858207, coo, {from: coo,value: 0});
await instance.createPromoKitty(602493600, coo, {from: coo,value: 0});
await instance.createPromoKitty(623779141, coo, {from: coo,value: 0});
await instance.createPromoKitty(109892635, coo, {from: coo,value: 0});
await instance.createPromoKitty(510452445, coo, {from: coo,value: 0});
await instance.createPromoKitty(998575190, coo, {from: coo,value: 0});
await instance.createPromoKitty(507855589, coo, {from: coo,value: 0});
await instance.createPromoKitty(660830185, coo, {from: coo,value: 0});
await instance.createPromoKitty(926633404, coo, {from: coo,value: 0});
await instance.createPromoKitty(485084277, coo, {from: coo,value: 0});
await instance.createPromoKitty(539839490, coo, {from: coo,value: 0});
await instance.createPromoKitty(223830349, coo, {from: coo,value: 0});
await instance.createPromoKitty(553058588, coo, {from: coo,value: 0});
await instance.createPromoKitty(812422008, coo, {from: coo,value: 0});
await instance.createPromoKitty(439007134, coo, {from: coo,value: 0});
await instance.createPromoKitty(129976513, coo, {from: coo,value: 0});
await instance.createPromoKitty(661822369, coo, {from: coo,value: 0});
await instance.createPromoKitty(199738838, coo, {from: coo,value: 0});
await instance.createPromoKitty(192007692, coo, {from: coo,value: 0});
await instance.createPromoKitty(795595998, coo, {from: coo,value: 0});
await instance.createPromoKitty(964351322, coo, {from: coo,value: 0});
await instance.createPromoKitty(551919905, coo, {from: coo,value: 0});
await instance.createPromoKitty(683250706, coo, {from: coo,value: 0});
await instance.createPromoKitty(234461785, coo, {from: coo,value: 0});
await instance.createPromoKitty(314237376, coo, {from: coo,value: 0});
await instance.createPromoKitty(903875707, coo, {from: coo,value: 0});
await instance.createPromoKitty(186125607, coo, {from: coo,value: 0});
await instance.createPromoKitty(705919371, coo, {from: coo,value: 0});
await instance.createPromoKitty(28958846, coo, {from: coo,value: 0});
await instance.createPromoKitty(417279242, coo, {from: coo,value: 0});
await instance.createPromoKitty(755815640, coo, {from: coo,value: 0});
await instance.createPromoKitty(391329451, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(40, 14, {from: coo});
await instance.breedWith(4, 23, {from: coo});
await instance.breedWith(11, 36, {from: coo});
await instance.breedWith(25, 16, {from: coo});
await instance.breedWith(7, 12, {from: coo});
await instance.breedWith(26, 6, {from: coo});
await instance.breedWith(20, 31, {from: coo});
await instance.breedWith(5, 37, {from: coo});
await instance.breedWith(13, 8, {from: coo});
await instance.breedWith(30, 17, {from: coo});
await instance.breedWith(28, 2, {from: coo});
await instance.breedWith(38, 3, {from: coo});
await instance.breedWith(33, 9, {from: coo});
await instance.breedWith(22, 19, {from: coo});
await instance.breedWith(21, 32, {from: coo});
await instance.breedWith(24, 35, {from: coo});
await instance.breedWith(27, 15, {from: coo});
await instance.breedWith(39, 34, {from: coo});
await instance.breedWith(29, 1, {from: coo});
await instance.breedWith(18, 10, {from: coo});
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
await instance.giveBirth(40);
await instance.giveBirth(4);
await instance.giveBirth(11);
await instance.giveBirth(25);
await instance.giveBirth(7);
await instance.giveBirth(26);
await instance.giveBirth(20);
await instance.giveBirth(5);
await instance.giveBirth(13);
await instance.giveBirth(30);
await instance.giveBirth(28);
await instance.giveBirth(38);
await instance.giveBirth(33);
await instance.giveBirth(22);
await instance.giveBirth(21);
await instance.giveBirth(24);
await instance.giveBirth(27);
await instance.giveBirth(39);
await instance.giveBirth(29);
await instance.giveBirth(18);
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
