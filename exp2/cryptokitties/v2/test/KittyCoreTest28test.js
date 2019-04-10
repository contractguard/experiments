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
await instance.createPromoKitty(623521637, coo, {from: coo,value: 0});
await instance.createPromoKitty(20103515, coo, {from: coo,value: 0});
await instance.createPromoKitty(559180873, coo, {from: coo,value: 0});
await instance.createPromoKitty(736302195, coo, {from: coo,value: 0});
await instance.createPromoKitty(94824480, coo, {from: coo,value: 0});
await instance.createPromoKitty(874737685, coo, {from: coo,value: 0});
await instance.createPromoKitty(875413953, coo, {from: coo,value: 0});
await instance.createPromoKitty(918998857, coo, {from: coo,value: 0});
await instance.createPromoKitty(16773644, coo, {from: coo,value: 0});
await instance.createPromoKitty(322993031, coo, {from: coo,value: 0});
await instance.createPromoKitty(397719207, coo, {from: coo,value: 0});
await instance.createPromoKitty(875345254, coo, {from: coo,value: 0});
await instance.createPromoKitty(267189297, coo, {from: coo,value: 0});
await instance.createPromoKitty(895737130, coo, {from: coo,value: 0});
await instance.createPromoKitty(910371938, coo, {from: coo,value: 0});
await instance.createPromoKitty(755223457, coo, {from: coo,value: 0});
await instance.createPromoKitty(614029396, coo, {from: coo,value: 0});
await instance.createPromoKitty(362910152, coo, {from: coo,value: 0});
await instance.createPromoKitty(362389124, coo, {from: coo,value: 0});
await instance.createPromoKitty(714626979, coo, {from: coo,value: 0});
await instance.createPromoKitty(144778078, coo, {from: coo,value: 0});
await instance.createPromoKitty(156825459, coo, {from: coo,value: 0});
await instance.createPromoKitty(968729235, coo, {from: coo,value: 0});
await instance.createPromoKitty(496092522, coo, {from: coo,value: 0});
await instance.createPromoKitty(549681932, coo, {from: coo,value: 0});
await instance.createPromoKitty(94173108, coo, {from: coo,value: 0});
await instance.createPromoKitty(315361148, coo, {from: coo,value: 0});
await instance.createPromoKitty(571367370, coo, {from: coo,value: 0});
await instance.createPromoKitty(318264543, coo, {from: coo,value: 0});
await instance.createPromoKitty(244011156, coo, {from: coo,value: 0});
await instance.createPromoKitty(413925720, coo, {from: coo,value: 0});
await instance.createPromoKitty(344449280, coo, {from: coo,value: 0});
await instance.createPromoKitty(145054763, coo, {from: coo,value: 0});
await instance.createPromoKitty(936179946, coo, {from: coo,value: 0});
await instance.createPromoKitty(38879779, coo, {from: coo,value: 0});
await instance.createPromoKitty(645156650, coo, {from: coo,value: 0});
await instance.createPromoKitty(937799158, coo, {from: coo,value: 0});
await instance.createPromoKitty(261401909, coo, {from: coo,value: 0});
await instance.createPromoKitty(201807652, coo, {from: coo,value: 0});
await instance.createPromoKitty(199045835, coo, {from: coo,value: 0});
await instance.createPromoKitty(219131906, coo, {from: coo,value: 0});
await instance.createPromoKitty(406915480, coo, {from: coo,value: 0});
await instance.createPromoKitty(219815299, coo, {from: coo,value: 0});
await instance.createPromoKitty(492299193, coo, {from: coo,value: 0});
await instance.createPromoKitty(73963807, coo, {from: coo,value: 0});
await instance.createPromoKitty(839325198, coo, {from: coo,value: 0});
await instance.createPromoKitty(698396059, coo, {from: coo,value: 0});
await instance.createPromoKitty(310317328, coo, {from: coo,value: 0});
await instance.createPromoKitty(625909282, coo, {from: coo,value: 0});
await instance.createPromoKitty(165487684, coo, {from: coo,value: 0});
await instance.createPromoKitty(330576514, coo, {from: coo,value: 0});
await instance.createPromoKitty(932883851, coo, {from: coo,value: 0});
await instance.createPromoKitty(308949556, coo, {from: coo,value: 0});
await instance.createPromoKitty(608039572, coo, {from: coo,value: 0});
await instance.createPromoKitty(3882279, coo, {from: coo,value: 0});
await instance.createPromoKitty(767495618, coo, {from: coo,value: 0});
await instance.createPromoKitty(58027184, coo, {from: coo,value: 0});
await instance.createPromoKitty(327345474, coo, {from: coo,value: 0});
await instance.createPromoKitty(364435310, coo, {from: coo,value: 0});
await instance.createPromoKitty(330513053, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(16, 3, {from: coo});
await instance.breedWith(6, 33, {from: coo});
await instance.breedWith(13, 23, {from: coo});
await instance.breedWith(40, 10, {from: coo});
await instance.breedWith(32, 28, {from: coo});
await instance.breedWith(31, 8, {from: coo});
await instance.breedWith(18, 34, {from: coo});
await instance.breedWith(22, 1, {from: coo});
await instance.breedWith(29, 11, {from: coo});
await instance.breedWith(14, 2, {from: coo});
await instance.breedWith(7, 25, {from: coo});
await instance.breedWith(30, 5, {from: coo});
await instance.breedWith(20, 27, {from: coo});
await instance.breedWith(19, 4, {from: coo});
await instance.breedWith(39, 35, {from: coo});
await instance.breedWith(37, 24, {from: coo});
await instance.breedWith(21, 15, {from: coo});
await instance.breedWith(12, 36, {from: coo});
await instance.breedWith(17, 9, {from: coo});
await instance.breedWith(26, 38, {from: coo});
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
await instance.giveBirth(16);
await instance.giveBirth(6);
await instance.giveBirth(13);
await instance.giveBirth(40);
await instance.giveBirth(32);
await instance.giveBirth(31);
await instance.giveBirth(18);
await instance.giveBirth(22);
await instance.giveBirth(29);
await instance.giveBirth(14);
await instance.giveBirth(7);
await instance.giveBirth(30);
await instance.giveBirth(20);
await instance.giveBirth(19);
await instance.giveBirth(39);
await instance.giveBirth(37);
await instance.giveBirth(21);
await instance.giveBirth(12);
await instance.giveBirth(17);
await instance.giveBirth(26);
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
