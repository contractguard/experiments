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
await instance.createPromoKitty(744810563, coo, {from: coo,value: 0});
await instance.createPromoKitty(50042999, coo, {from: coo,value: 0});
await instance.createPromoKitty(511487155, coo, {from: coo,value: 0});
await instance.createPromoKitty(719074949, coo, {from: coo,value: 0});
await instance.createPromoKitty(819944799, coo, {from: coo,value: 0});
await instance.createPromoKitty(957773315, coo, {from: coo,value: 0});
await instance.createPromoKitty(265382909, coo, {from: coo,value: 0});
await instance.createPromoKitty(834397465, coo, {from: coo,value: 0});
await instance.createPromoKitty(394117184, coo, {from: coo,value: 0});
await instance.createPromoKitty(262418610, coo, {from: coo,value: 0});
await instance.createPromoKitty(792415725, coo, {from: coo,value: 0});
await instance.createPromoKitty(451677696, coo, {from: coo,value: 0});
await instance.createPromoKitty(467633565, coo, {from: coo,value: 0});
await instance.createPromoKitty(646247218, coo, {from: coo,value: 0});
await instance.createPromoKitty(819890805, coo, {from: coo,value: 0});
await instance.createPromoKitty(486627286, coo, {from: coo,value: 0});
await instance.createPromoKitty(126863328, coo, {from: coo,value: 0});
await instance.createPromoKitty(63999448, coo, {from: coo,value: 0});
await instance.createPromoKitty(566280564, coo, {from: coo,value: 0});
await instance.createPromoKitty(383345577, coo, {from: coo,value: 0});
await instance.createPromoKitty(572557711, coo, {from: coo,value: 0});
await instance.createPromoKitty(216436478, coo, {from: coo,value: 0});
await instance.createPromoKitty(44205894, coo, {from: coo,value: 0});
await instance.createPromoKitty(54310533, coo, {from: coo,value: 0});
await instance.createPromoKitty(262592601, coo, {from: coo,value: 0});
await instance.createPromoKitty(212867973, coo, {from: coo,value: 0});
await instance.createPromoKitty(793168349, coo, {from: coo,value: 0});
await instance.createPromoKitty(226187755, coo, {from: coo,value: 0});
await instance.createPromoKitty(757247873, coo, {from: coo,value: 0});
await instance.createPromoKitty(128555775, coo, {from: coo,value: 0});
await instance.createPromoKitty(906493129, coo, {from: coo,value: 0});
await instance.createPromoKitty(843296592, coo, {from: coo,value: 0});
await instance.createPromoKitty(500754003, coo, {from: coo,value: 0});
await instance.createPromoKitty(765149710, coo, {from: coo,value: 0});
await instance.createPromoKitty(498851104, coo, {from: coo,value: 0});
await instance.createPromoKitty(236968559, coo, {from: coo,value: 0});
await instance.createPromoKitty(235545374, coo, {from: coo,value: 0});
await instance.createPromoKitty(46499333, coo, {from: coo,value: 0});
await instance.createPromoKitty(348641673, coo, {from: coo,value: 0});
await instance.createPromoKitty(816919560, coo, {from: coo,value: 0});
await instance.createPromoKitty(166587105, coo, {from: coo,value: 0});
await instance.createPromoKitty(926524129, coo, {from: coo,value: 0});
await instance.createPromoKitty(73615493, coo, {from: coo,value: 0});
await instance.createPromoKitty(215048564, coo, {from: coo,value: 0});
await instance.createPromoKitty(591629440, coo, {from: coo,value: 0});
await instance.createPromoKitty(709653797, coo, {from: coo,value: 0});
await instance.createPromoKitty(724938072, coo, {from: coo,value: 0});
await instance.createPromoKitty(269256711, coo, {from: coo,value: 0});
await instance.createPromoKitty(504309421, coo, {from: coo,value: 0});
await instance.createPromoKitty(444032855, coo, {from: coo,value: 0});
await instance.createPromoKitty(431813357, coo, {from: coo,value: 0});
await instance.createPromoKitty(129810836, coo, {from: coo,value: 0});
await instance.createPromoKitty(672746306, coo, {from: coo,value: 0});
await instance.createPromoKitty(630860853, coo, {from: coo,value: 0});
await instance.createPromoKitty(730406753, coo, {from: coo,value: 0});
await instance.createPromoKitty(821974894, coo, {from: coo,value: 0});
await instance.createPromoKitty(50518689, coo, {from: coo,value: 0});
await instance.createPromoKitty(726914934, coo, {from: coo,value: 0});
await instance.createPromoKitty(278968006, coo, {from: coo,value: 0});
await instance.createPromoKitty(757922228, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(3, 18, {from: coo});
await instance.breedWith(29, 32, {from: coo});
await instance.breedWith(25, 6, {from: coo});
await instance.breedWith(14, 12, {from: coo});
await instance.breedWith(31, 19, {from: coo});
await instance.breedWith(15, 22, {from: coo});
await instance.breedWith(8, 30, {from: coo});
await instance.breedWith(34, 4, {from: coo});
await instance.breedWith(20, 37, {from: coo});
await instance.breedWith(26, 33, {from: coo});
await instance.breedWith(7, 36, {from: coo});
await instance.breedWith(39, 16, {from: coo});
await instance.breedWith(38, 21, {from: coo});
await instance.breedWith(28, 11, {from: coo});
await instance.breedWith(13, 1, {from: coo});
await instance.breedWith(10, 40, {from: coo});
await instance.breedWith(23, 2, {from: coo});
await instance.breedWith(17, 27, {from: coo});
await instance.breedWith(35, 5, {from: coo});
await instance.breedWith(9, 24, {from: coo});
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
await instance.giveBirth(3);
await instance.giveBirth(29);
await instance.giveBirth(25);
await instance.giveBirth(14);
await instance.giveBirth(31);
await instance.giveBirth(15);
await instance.giveBirth(8);
await instance.giveBirth(34);
await instance.giveBirth(20);
await instance.giveBirth(26);
await instance.giveBirth(7);
await instance.giveBirth(39);
await instance.giveBirth(38);
await instance.giveBirth(28);
await instance.giveBirth(13);
await instance.giveBirth(10);
await instance.giveBirth(23);
await instance.giveBirth(17);
await instance.giveBirth(35);
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
});
it('attack', async() => {
 await instance.breedWith(57, bigValue, {from: coo});
});
});
