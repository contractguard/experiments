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
await instance.createPromoKitty(396666595, coo, {from: coo,value: 0});
await instance.createPromoKitty(961157241, coo, {from: coo,value: 0});
await instance.createPromoKitty(736393832, coo, {from: coo,value: 0});
await instance.createPromoKitty(806974583, coo, {from: coo,value: 0});
await instance.createPromoKitty(685705310, coo, {from: coo,value: 0});
await instance.createPromoKitty(491867340, coo, {from: coo,value: 0});
await instance.createPromoKitty(636326295, coo, {from: coo,value: 0});
await instance.createPromoKitty(543919953, coo, {from: coo,value: 0});
await instance.createPromoKitty(866729061, coo, {from: coo,value: 0});
await instance.createPromoKitty(718755384, coo, {from: coo,value: 0});
await instance.createPromoKitty(373735696, coo, {from: coo,value: 0});
await instance.createPromoKitty(114703419, coo, {from: coo,value: 0});
await instance.createPromoKitty(465207834, coo, {from: coo,value: 0});
await instance.createPromoKitty(745371295, coo, {from: coo,value: 0});
await instance.createPromoKitty(284483760, coo, {from: coo,value: 0});
await instance.createPromoKitty(553376847, coo, {from: coo,value: 0});
await instance.createPromoKitty(910726456, coo, {from: coo,value: 0});
await instance.createPromoKitty(390396828, coo, {from: coo,value: 0});
await instance.createPromoKitty(445535744, coo, {from: coo,value: 0});
await instance.createPromoKitty(137745044, coo, {from: coo,value: 0});
await instance.createPromoKitty(392347388, coo, {from: coo,value: 0});
await instance.createPromoKitty(725195245, coo, {from: coo,value: 0});
await instance.createPromoKitty(954516416, coo, {from: coo,value: 0});
await instance.createPromoKitty(470855110, coo, {from: coo,value: 0});
await instance.createPromoKitty(329417397, coo, {from: coo,value: 0});
await instance.createPromoKitty(919940488, coo, {from: coo,value: 0});
await instance.createPromoKitty(39370693, coo, {from: coo,value: 0});
await instance.createPromoKitty(514750992, coo, {from: coo,value: 0});
await instance.createPromoKitty(321332431, coo, {from: coo,value: 0});
await instance.createPromoKitty(717249716, coo, {from: coo,value: 0});
await instance.createPromoKitty(266199615, coo, {from: coo,value: 0});
await instance.createPromoKitty(549873987, coo, {from: coo,value: 0});
await instance.createPromoKitty(567500568, coo, {from: coo,value: 0});
await instance.createPromoKitty(427254002, coo, {from: coo,value: 0});
await instance.createPromoKitty(807279873, coo, {from: coo,value: 0});
await instance.createPromoKitty(601212898, coo, {from: coo,value: 0});
await instance.createPromoKitty(37336716, coo, {from: coo,value: 0});
await instance.createPromoKitty(52264601, coo, {from: coo,value: 0});
await instance.createPromoKitty(401178698, coo, {from: coo,value: 0});
await instance.createPromoKitty(179122315, coo, {from: coo,value: 0});
await instance.createPromoKitty(106893815, coo, {from: coo,value: 0});
await instance.createPromoKitty(928049778, coo, {from: coo,value: 0});
await instance.createPromoKitty(89685867, coo, {from: coo,value: 0});
await instance.createPromoKitty(740804266, coo, {from: coo,value: 0});
await instance.createPromoKitty(115377405, coo, {from: coo,value: 0});
await instance.createPromoKitty(787470176, coo, {from: coo,value: 0});
await instance.createPromoKitty(92968131, coo, {from: coo,value: 0});
await instance.createPromoKitty(676187298, coo, {from: coo,value: 0});
await instance.createPromoKitty(350145362, coo, {from: coo,value: 0});
await instance.createPromoKitty(242822529, coo, {from: coo,value: 0});
await instance.createPromoKitty(894419561, coo, {from: coo,value: 0});
await instance.createPromoKitty(796892656, coo, {from: coo,value: 0});
await instance.createPromoKitty(507651558, coo, {from: coo,value: 0});
await instance.createPromoKitty(355417517, coo, {from: coo,value: 0});
await instance.createPromoKitty(315265345, coo, {from: coo,value: 0});
await instance.createPromoKitty(731240530, coo, {from: coo,value: 0});
await instance.createPromoKitty(300883285, coo, {from: coo,value: 0});
await instance.createPromoKitty(250450568, coo, {from: coo,value: 0});
await instance.createPromoKitty(634167077, coo, {from: coo,value: 0});
await instance.createPromoKitty(50314807, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(15, 9, {from: coo});
await instance.breedWith(29, 23, {from: coo});
await instance.breedWith(38, 30, {from: coo});
await instance.breedWith(1, 13, {from: coo});
await instance.breedWith(2, 17, {from: coo});
await instance.breedWith(18, 40, {from: coo});
await instance.breedWith(5, 31, {from: coo});
await instance.breedWith(21, 28, {from: coo});
await instance.breedWith(39, 35, {from: coo});
await instance.breedWith(14, 32, {from: coo});
await instance.breedWith(12, 24, {from: coo});
await instance.breedWith(11, 26, {from: coo});
await instance.breedWith(3, 6, {from: coo});
await instance.breedWith(8, 22, {from: coo});
await instance.breedWith(7, 4, {from: coo});
await instance.breedWith(16, 19, {from: coo});
await instance.breedWith(37, 25, {from: coo});
await instance.breedWith(36, 27, {from: coo});
await instance.breedWith(34, 10, {from: coo});
await instance.breedWith(33, 20, {from: coo});
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
await instance.giveBirth(15);
await instance.giveBirth(29);
await instance.giveBirth(38);
await instance.giveBirth(1);
await instance.giveBirth(2);
await instance.giveBirth(18);
await instance.giveBirth(5);
await instance.giveBirth(21);
await instance.giveBirth(39);
await instance.giveBirth(14);
await instance.giveBirth(12);
await instance.giveBirth(11);
await instance.giveBirth(3);
await instance.giveBirth(8);
await instance.giveBirth(7);
await instance.giveBirth(16);
await instance.giveBirth(37);
await instance.giveBirth(36);
await instance.giveBirth(34);
await instance.giveBirth(33);
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
