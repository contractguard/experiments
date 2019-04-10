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
await instance.createPromoKitty(910488254, coo, {from: coo,value: 0});
await instance.createPromoKitty(335620291, coo, {from: coo,value: 0});
await instance.createPromoKitty(448360978, coo, {from: coo,value: 0});
await instance.createPromoKitty(187527424, coo, {from: coo,value: 0});
await instance.createPromoKitty(540496943, coo, {from: coo,value: 0});
await instance.createPromoKitty(819205646, coo, {from: coo,value: 0});
await instance.createPromoKitty(126925124, coo, {from: coo,value: 0});
await instance.createPromoKitty(513214437, coo, {from: coo,value: 0});
await instance.createPromoKitty(849840650, coo, {from: coo,value: 0});
await instance.createPromoKitty(508110210, coo, {from: coo,value: 0});
await instance.createPromoKitty(66457846, coo, {from: coo,value: 0});
await instance.createPromoKitty(177121484, coo, {from: coo,value: 0});
await instance.createPromoKitty(449942227, coo, {from: coo,value: 0});
await instance.createPromoKitty(367952112, coo, {from: coo,value: 0});
await instance.createPromoKitty(731213637, coo, {from: coo,value: 0});
await instance.createPromoKitty(714470014, coo, {from: coo,value: 0});
await instance.createPromoKitty(679331377, coo, {from: coo,value: 0});
await instance.createPromoKitty(602124775, coo, {from: coo,value: 0});
await instance.createPromoKitty(826455160, coo, {from: coo,value: 0});
await instance.createPromoKitty(881512728, coo, {from: coo,value: 0});
await instance.createPromoKitty(98413554, coo, {from: coo,value: 0});
await instance.createPromoKitty(704607326, coo, {from: coo,value: 0});
await instance.createPromoKitty(213502020, coo, {from: coo,value: 0});
await instance.createPromoKitty(362694712, coo, {from: coo,value: 0});
await instance.createPromoKitty(238117241, coo, {from: coo,value: 0});
await instance.createPromoKitty(789109835, coo, {from: coo,value: 0});
await instance.createPromoKitty(859721155, coo, {from: coo,value: 0});
await instance.createPromoKitty(844879285, coo, {from: coo,value: 0});
await instance.createPromoKitty(693582611, coo, {from: coo,value: 0});
await instance.createPromoKitty(232872054, coo, {from: coo,value: 0});
await instance.createPromoKitty(270162950, coo, {from: coo,value: 0});
await instance.createPromoKitty(831539869, coo, {from: coo,value: 0});
await instance.createPromoKitty(206394011, coo, {from: coo,value: 0});
await instance.createPromoKitty(607060155, coo, {from: coo,value: 0});
await instance.createPromoKitty(846083919, coo, {from: coo,value: 0});
await instance.createPromoKitty(232592974, coo, {from: coo,value: 0});
await instance.createPromoKitty(127593723, coo, {from: coo,value: 0});
await instance.createPromoKitty(11048899, coo, {from: coo,value: 0});
await instance.createPromoKitty(578975256, coo, {from: coo,value: 0});
await instance.createPromoKitty(847508981, coo, {from: coo,value: 0});
await instance.createPromoKitty(296233649, coo, {from: coo,value: 0});
await instance.createPromoKitty(245483734, coo, {from: coo,value: 0});
await instance.createPromoKitty(354597139, coo, {from: coo,value: 0});
await instance.createPromoKitty(959607472, coo, {from: coo,value: 0});
await instance.createPromoKitty(348197406, coo, {from: coo,value: 0});
await instance.createPromoKitty(305379277, coo, {from: coo,value: 0});
await instance.createPromoKitty(959192841, coo, {from: coo,value: 0});
await instance.createPromoKitty(841232418, coo, {from: coo,value: 0});
await instance.createPromoKitty(360123808, coo, {from: coo,value: 0});
await instance.createPromoKitty(273522295, coo, {from: coo,value: 0});
await instance.createPromoKitty(427257058, coo, {from: coo,value: 0});
await instance.createPromoKitty(280836713, coo, {from: coo,value: 0});
await instance.createPromoKitty(105005130, coo, {from: coo,value: 0});
await instance.createPromoKitty(770749701, coo, {from: coo,value: 0});
await instance.createPromoKitty(395984749, coo, {from: coo,value: 0});
await instance.createPromoKitty(806352481, coo, {from: coo,value: 0});
await instance.createPromoKitty(975164281, coo, {from: coo,value: 0});
await instance.createPromoKitty(697255240, coo, {from: coo,value: 0});
await instance.createPromoKitty(692568723, coo, {from: coo,value: 0});
await instance.createPromoKitty(735136255, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(21, 17, {from: coo});
await instance.breedWith(11, 9, {from: coo});
await instance.breedWith(27, 28, {from: coo});
await instance.breedWith(32, 16, {from: coo});
await instance.breedWith(7, 19, {from: coo});
await instance.breedWith(2, 36, {from: coo});
await instance.breedWith(39, 15, {from: coo});
await instance.breedWith(18, 34, {from: coo});
await instance.breedWith(25, 23, {from: coo});
await instance.breedWith(37, 38, {from: coo});
await instance.breedWith(5, 26, {from: coo});
await instance.breedWith(13, 10, {from: coo});
await instance.breedWith(20, 40, {from: coo});
await instance.breedWith(12, 3, {from: coo});
await instance.breedWith(33, 29, {from: coo});
await instance.breedWith(24, 31, {from: coo});
await instance.breedWith(1, 8, {from: coo});
await instance.breedWith(35, 4, {from: coo});
await instance.breedWith(6, 30, {from: coo});
await instance.breedWith(14, 22, {from: coo});
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
await instance.giveBirth(21);
await instance.giveBirth(11);
await instance.giveBirth(27);
await instance.giveBirth(32);
await instance.giveBirth(7);
await instance.giveBirth(2);
await instance.giveBirth(39);
await instance.giveBirth(18);
await instance.giveBirth(25);
await instance.giveBirth(37);
await instance.giveBirth(5);
await instance.giveBirth(13);
await instance.giveBirth(20);
await instance.giveBirth(12);
await instance.giveBirth(33);
await instance.giveBirth(24);
await instance.giveBirth(1);
await instance.giveBirth(35);
await instance.giveBirth(6);
await instance.giveBirth(14);
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
