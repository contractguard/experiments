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
await instance.createPromoKitty(489472257, coo, {from: coo,value: 0});
await instance.createPromoKitty(142423017, coo, {from: coo,value: 0});
await instance.createPromoKitty(231742251, coo, {from: coo,value: 0});
await instance.createPromoKitty(287937886, coo, {from: coo,value: 0});
await instance.createPromoKitty(77206127, coo, {from: coo,value: 0});
await instance.createPromoKitty(902068096, coo, {from: coo,value: 0});
await instance.createPromoKitty(12651491, coo, {from: coo,value: 0});
await instance.createPromoKitty(450622594, coo, {from: coo,value: 0});
await instance.createPromoKitty(248374507, coo, {from: coo,value: 0});
await instance.createPromoKitty(54513341, coo, {from: coo,value: 0});
await instance.createPromoKitty(703129566, coo, {from: coo,value: 0});
await instance.createPromoKitty(99782435, coo, {from: coo,value: 0});
await instance.createPromoKitty(853558744, coo, {from: coo,value: 0});
await instance.createPromoKitty(719667469, coo, {from: coo,value: 0});
await instance.createPromoKitty(522334511, coo, {from: coo,value: 0});
await instance.createPromoKitty(761978846, coo, {from: coo,value: 0});
await instance.createPromoKitty(420206157, coo, {from: coo,value: 0});
await instance.createPromoKitty(13380846, coo, {from: coo,value: 0});
await instance.createPromoKitty(75815211, coo, {from: coo,value: 0});
await instance.createPromoKitty(191092176, coo, {from: coo,value: 0});
await instance.createPromoKitty(159285615, coo, {from: coo,value: 0});
await instance.createPromoKitty(470535039, coo, {from: coo,value: 0});
await instance.createPromoKitty(642581618, coo, {from: coo,value: 0});
await instance.createPromoKitty(544285762, coo, {from: coo,value: 0});
await instance.createPromoKitty(867804869, coo, {from: coo,value: 0});
await instance.createPromoKitty(782443064, coo, {from: coo,value: 0});
await instance.createPromoKitty(318947051, coo, {from: coo,value: 0});
await instance.createPromoKitty(10517239, coo, {from: coo,value: 0});
await instance.createPromoKitty(166799163, coo, {from: coo,value: 0});
await instance.createPromoKitty(722653267, coo, {from: coo,value: 0});
await instance.createPromoKitty(25677201, coo, {from: coo,value: 0});
await instance.createPromoKitty(564759181, coo, {from: coo,value: 0});
await instance.createPromoKitty(826468039, coo, {from: coo,value: 0});
await instance.createPromoKitty(582312645, coo, {from: coo,value: 0});
await instance.createPromoKitty(962507790, coo, {from: coo,value: 0});
await instance.createPromoKitty(308344921, coo, {from: coo,value: 0});
await instance.createPromoKitty(597129485, coo, {from: coo,value: 0});
await instance.createPromoKitty(977063316, coo, {from: coo,value: 0});
await instance.createPromoKitty(478063649, coo, {from: coo,value: 0});
await instance.createPromoKitty(385475374, coo, {from: coo,value: 0});
await instance.createPromoKitty(354455693, coo, {from: coo,value: 0});
await instance.createPromoKitty(919162113, coo, {from: coo,value: 0});
await instance.createPromoKitty(222602454, coo, {from: coo,value: 0});
await instance.createPromoKitty(891187722, coo, {from: coo,value: 0});
await instance.createPromoKitty(852579019, coo, {from: coo,value: 0});
await instance.createPromoKitty(339078114, coo, {from: coo,value: 0});
await instance.createPromoKitty(351588394, coo, {from: coo,value: 0});
await instance.createPromoKitty(399766414, coo, {from: coo,value: 0});
await instance.createPromoKitty(732013021, coo, {from: coo,value: 0});
await instance.createPromoKitty(844586548, coo, {from: coo,value: 0});
await instance.createPromoKitty(487390063, coo, {from: coo,value: 0});
await instance.createPromoKitty(983879770, coo, {from: coo,value: 0});
await instance.createPromoKitty(373326469, coo, {from: coo,value: 0});
await instance.createPromoKitty(281539945, coo, {from: coo,value: 0});
await instance.createPromoKitty(660236702, coo, {from: coo,value: 0});
await instance.createPromoKitty(978979089, coo, {from: coo,value: 0});
await instance.createPromoKitty(150823166, coo, {from: coo,value: 0});
await instance.createPromoKitty(231521401, coo, {from: coo,value: 0});
await instance.createPromoKitty(31226765, coo, {from: coo,value: 0});
await instance.createPromoKitty(238042862, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(8, 33, {from: coo});
await instance.breedWith(23, 3, {from: coo});
await instance.breedWith(28, 35, {from: coo});
await instance.breedWith(34, 30, {from: coo});
await instance.breedWith(22, 2, {from: coo});
await instance.breedWith(39, 24, {from: coo});
await instance.breedWith(10, 27, {from: coo});
await instance.breedWith(12, 18, {from: coo});
await instance.breedWith(9, 36, {from: coo});
await instance.breedWith(26, 32, {from: coo});
await instance.breedWith(25, 16, {from: coo});
await instance.breedWith(29, 6, {from: coo});
await instance.breedWith(7, 4, {from: coo});
await instance.breedWith(5, 17, {from: coo});
await instance.breedWith(21, 14, {from: coo});
await instance.breedWith(40, 20, {from: coo});
await instance.breedWith(1, 15, {from: coo});
await instance.breedWith(38, 37, {from: coo});
await instance.breedWith(13, 31, {from: coo});
await instance.breedWith(11, 19, {from: coo});
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
await instance.giveBirth(8);
await instance.giveBirth(23);
await instance.giveBirth(28);
await instance.giveBirth(34);
await instance.giveBirth(22);
await instance.giveBirth(39);
await instance.giveBirth(10);
await instance.giveBirth(12);
await instance.giveBirth(9);
await instance.giveBirth(26);
await instance.giveBirth(25);
await instance.giveBirth(29);
await instance.giveBirth(7);
await instance.giveBirth(5);
await instance.giveBirth(21);
await instance.giveBirth(40);
await instance.giveBirth(1);
await instance.giveBirth(38);
await instance.giveBirth(13);
await instance.giveBirth(11);
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
