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
await instance.createPromoKitty(557417118, coo, {from: coo,value: 0});
await instance.createPromoKitty(512464295, coo, {from: coo,value: 0});
await instance.createPromoKitty(425996921, coo, {from: coo,value: 0});
await instance.createPromoKitty(253225986, coo, {from: coo,value: 0});
await instance.createPromoKitty(131508322, coo, {from: coo,value: 0});
await instance.createPromoKitty(632298126, coo, {from: coo,value: 0});
await instance.createPromoKitty(331358989, coo, {from: coo,value: 0});
await instance.createPromoKitty(481439405, coo, {from: coo,value: 0});
await instance.createPromoKitty(331350661, coo, {from: coo,value: 0});
await instance.createPromoKitty(364491190, coo, {from: coo,value: 0});
await instance.createPromoKitty(924236312, coo, {from: coo,value: 0});
await instance.createPromoKitty(41076687, coo, {from: coo,value: 0});
await instance.createPromoKitty(671541343, coo, {from: coo,value: 0});
await instance.createPromoKitty(804335826, coo, {from: coo,value: 0});
await instance.createPromoKitty(557181800, coo, {from: coo,value: 0});
await instance.createPromoKitty(9390257, coo, {from: coo,value: 0});
await instance.createPromoKitty(105985655, coo, {from: coo,value: 0});
await instance.createPromoKitty(650487282, coo, {from: coo,value: 0});
await instance.createPromoKitty(22556241, coo, {from: coo,value: 0});
await instance.createPromoKitty(614646313, coo, {from: coo,value: 0});
await instance.createPromoKitty(530421194, coo, {from: coo,value: 0});
await instance.createPromoKitty(790691584, coo, {from: coo,value: 0});
await instance.createPromoKitty(564858955, coo, {from: coo,value: 0});
await instance.createPromoKitty(424508469, coo, {from: coo,value: 0});
await instance.createPromoKitty(510318768, coo, {from: coo,value: 0});
await instance.createPromoKitty(309569683, coo, {from: coo,value: 0});
await instance.createPromoKitty(135261173, coo, {from: coo,value: 0});
await instance.createPromoKitty(422763765, coo, {from: coo,value: 0});
await instance.createPromoKitty(650024630, coo, {from: coo,value: 0});
await instance.createPromoKitty(5757674, coo, {from: coo,value: 0});
await instance.createPromoKitty(834479553, coo, {from: coo,value: 0});
await instance.createPromoKitty(308783622, coo, {from: coo,value: 0});
await instance.createPromoKitty(522691597, coo, {from: coo,value: 0});
await instance.createPromoKitty(993881396, coo, {from: coo,value: 0});
await instance.createPromoKitty(555234701, coo, {from: coo,value: 0});
await instance.createPromoKitty(843003493, coo, {from: coo,value: 0});
await instance.createPromoKitty(527039721, coo, {from: coo,value: 0});
await instance.createPromoKitty(56012494, coo, {from: coo,value: 0});
await instance.createPromoKitty(545536482, coo, {from: coo,value: 0});
await instance.createPromoKitty(646065335, coo, {from: coo,value: 0});
await instance.createPromoKitty(710085445, coo, {from: coo,value: 0});
await instance.createPromoKitty(232965739, coo, {from: coo,value: 0});
await instance.createPromoKitty(56368168, coo, {from: coo,value: 0});
await instance.createPromoKitty(761648064, coo, {from: coo,value: 0});
await instance.createPromoKitty(572038229, coo, {from: coo,value: 0});
await instance.createPromoKitty(938088241, coo, {from: coo,value: 0});
await instance.createPromoKitty(25973810, coo, {from: coo,value: 0});
await instance.createPromoKitty(349044311, coo, {from: coo,value: 0});
await instance.createPromoKitty(599657710, coo, {from: coo,value: 0});
await instance.createPromoKitty(381562256, coo, {from: coo,value: 0});
await instance.createPromoKitty(294541951, coo, {from: coo,value: 0});
await instance.createPromoKitty(312863356, coo, {from: coo,value: 0});
await instance.createPromoKitty(831342326, coo, {from: coo,value: 0});
await instance.createPromoKitty(598895773, coo, {from: coo,value: 0});
await instance.createPromoKitty(64000417, coo, {from: coo,value: 0});
await instance.createPromoKitty(615588987, coo, {from: coo,value: 0});
await instance.createPromoKitty(302447584, coo, {from: coo,value: 0});
await instance.createPromoKitty(244282732, coo, {from: coo,value: 0});
await instance.createPromoKitty(783475266, coo, {from: coo,value: 0});
await instance.createPromoKitty(415209324, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(13, 35, {from: coo});
await instance.breedWith(31, 28, {from: coo});
await instance.breedWith(26, 1, {from: coo});
await instance.breedWith(34, 29, {from: coo});
await instance.breedWith(9, 10, {from: coo});
await instance.breedWith(25, 17, {from: coo});
await instance.breedWith(37, 21, {from: coo});
await instance.breedWith(40, 7, {from: coo});
await instance.breedWith(12, 5, {from: coo});
await instance.breedWith(27, 11, {from: coo});
await instance.breedWith(4, 24, {from: coo});
await instance.breedWith(33, 6, {from: coo});
await instance.breedWith(2, 32, {from: coo});
await instance.breedWith(3, 19, {from: coo});
await instance.breedWith(20, 18, {from: coo});
await instance.breedWith(22, 38, {from: coo});
await instance.breedWith(14, 23, {from: coo});
await instance.breedWith(36, 8, {from: coo});
await instance.breedWith(15, 30, {from: coo});
await instance.breedWith(16, 39, {from: coo});
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
await instance.giveBirth(31);
await instance.giveBirth(26);
await instance.giveBirth(34);
await instance.giveBirth(9);
await instance.giveBirth(25);
await instance.giveBirth(37);
await instance.giveBirth(40);
await instance.giveBirth(12);
await instance.giveBirth(27);
await instance.giveBirth(4);
await instance.giveBirth(33);
await instance.giveBirth(2);
await instance.giveBirth(3);
await instance.giveBirth(20);
await instance.giveBirth(22);
await instance.giveBirth(14);
await instance.giveBirth(36);
await instance.giveBirth(15);
await instance.giveBirth(16);
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
