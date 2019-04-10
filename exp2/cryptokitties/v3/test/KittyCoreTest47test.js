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
await instance.createPromoKitty(245228419, coo, {from: coo,value: 0});
await instance.createPromoKitty(869006177, coo, {from: coo,value: 0});
await instance.createPromoKitty(955064187, coo, {from: coo,value: 0});
await instance.createPromoKitty(87457053, coo, {from: coo,value: 0});
await instance.createPromoKitty(118442040, coo, {from: coo,value: 0});
await instance.createPromoKitty(373612920, coo, {from: coo,value: 0});
await instance.createPromoKitty(35240218, coo, {from: coo,value: 0});
await instance.createPromoKitty(775473896, coo, {from: coo,value: 0});
await instance.createPromoKitty(734701452, coo, {from: coo,value: 0});
await instance.createPromoKitty(687045410, coo, {from: coo,value: 0});
await instance.createPromoKitty(742008149, coo, {from: coo,value: 0});
await instance.createPromoKitty(107065980, coo, {from: coo,value: 0});
await instance.createPromoKitty(720182555, coo, {from: coo,value: 0});
await instance.createPromoKitty(108837984, coo, {from: coo,value: 0});
await instance.createPromoKitty(884718753, coo, {from: coo,value: 0});
await instance.createPromoKitty(165083198, coo, {from: coo,value: 0});
await instance.createPromoKitty(972117908, coo, {from: coo,value: 0});
await instance.createPromoKitty(939748547, coo, {from: coo,value: 0});
await instance.createPromoKitty(416492222, coo, {from: coo,value: 0});
await instance.createPromoKitty(101392169, coo, {from: coo,value: 0});
await instance.createPromoKitty(955779685, coo, {from: coo,value: 0});
await instance.createPromoKitty(129875226, coo, {from: coo,value: 0});
await instance.createPromoKitty(116985466, coo, {from: coo,value: 0});
await instance.createPromoKitty(182323175, coo, {from: coo,value: 0});
await instance.createPromoKitty(215188838, coo, {from: coo,value: 0});
await instance.createPromoKitty(338821919, coo, {from: coo,value: 0});
await instance.createPromoKitty(930484446, coo, {from: coo,value: 0});
await instance.createPromoKitty(492635510, coo, {from: coo,value: 0});
await instance.createPromoKitty(897943202, coo, {from: coo,value: 0});
await instance.createPromoKitty(2278021, coo, {from: coo,value: 0});
await instance.createPromoKitty(185618567, coo, {from: coo,value: 0});
await instance.createPromoKitty(531705909, coo, {from: coo,value: 0});
await instance.createPromoKitty(935553013, coo, {from: coo,value: 0});
await instance.createPromoKitty(704028406, coo, {from: coo,value: 0});
await instance.createPromoKitty(230095080, coo, {from: coo,value: 0});
await instance.createPromoKitty(738611162, coo, {from: coo,value: 0});
await instance.createPromoKitty(671164465, coo, {from: coo,value: 0});
await instance.createPromoKitty(604625405, coo, {from: coo,value: 0});
await instance.createPromoKitty(532523656, coo, {from: coo,value: 0});
await instance.createPromoKitty(70429870, coo, {from: coo,value: 0});
await instance.createPromoKitty(693307115, coo, {from: coo,value: 0});
await instance.createPromoKitty(864066499, coo, {from: coo,value: 0});
await instance.createPromoKitty(228382931, coo, {from: coo,value: 0});
await instance.createPromoKitty(325114263, coo, {from: coo,value: 0});
await instance.createPromoKitty(233659493, coo, {from: coo,value: 0});
await instance.createPromoKitty(511349220, coo, {from: coo,value: 0});
await instance.createPromoKitty(463673020, coo, {from: coo,value: 0});
await instance.createPromoKitty(523919887, coo, {from: coo,value: 0});
await instance.createPromoKitty(77155311, coo, {from: coo,value: 0});
await instance.createPromoKitty(3659911, coo, {from: coo,value: 0});
await instance.createPromoKitty(30983139, coo, {from: coo,value: 0});
await instance.createPromoKitty(361460918, coo, {from: coo,value: 0});
await instance.createPromoKitty(606276798, coo, {from: coo,value: 0});
await instance.createPromoKitty(431196817, coo, {from: coo,value: 0});
await instance.createPromoKitty(363103278, coo, {from: coo,value: 0});
await instance.createPromoKitty(936900571, coo, {from: coo,value: 0});
await instance.createPromoKitty(618373875, coo, {from: coo,value: 0});
await instance.createPromoKitty(914698381, coo, {from: coo,value: 0});
await instance.createPromoKitty(429715392, coo, {from: coo,value: 0});
await instance.createPromoKitty(955952876, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(25, 3, {from: coo});
await instance.breedWith(31, 11, {from: coo});
await instance.breedWith(40, 30, {from: coo});
await instance.breedWith(6, 22, {from: coo});
await instance.breedWith(29, 4, {from: coo});
await instance.breedWith(26, 28, {from: coo});
await instance.breedWith(20, 9, {from: coo});
await instance.breedWith(38, 18, {from: coo});
await instance.breedWith(10, 27, {from: coo});
await instance.breedWith(7, 36, {from: coo});
await instance.breedWith(12, 35, {from: coo});
await instance.breedWith(33, 17, {from: coo});
await instance.breedWith(16, 5, {from: coo});
await instance.breedWith(23, 1, {from: coo});
await instance.breedWith(8, 21, {from: coo});
await instance.breedWith(34, 15, {from: coo});
await instance.breedWith(37, 24, {from: coo});
await instance.breedWith(13, 39, {from: coo});
await instance.breedWith(14, 32, {from: coo});
await instance.breedWith(19, 2, {from: coo});
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
await instance.giveBirth(25);
await instance.giveBirth(31);
await instance.giveBirth(40);
await instance.giveBirth(6);
await instance.giveBirth(29);
await instance.giveBirth(26);
await instance.giveBirth(20);
await instance.giveBirth(38);
await instance.giveBirth(10);
await instance.giveBirth(7);
await instance.giveBirth(12);
await instance.giveBirth(33);
await instance.giveBirth(16);
await instance.giveBirth(23);
await instance.giveBirth(8);
await instance.giveBirth(34);
await instance.giveBirth(37);
await instance.giveBirth(13);
await instance.giveBirth(14);
await instance.giveBirth(19);
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
