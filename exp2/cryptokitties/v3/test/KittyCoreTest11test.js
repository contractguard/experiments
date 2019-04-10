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
await instance.createPromoKitty(161294652, coo, {from: coo,value: 0});
await instance.createPromoKitty(73053989, coo, {from: coo,value: 0});
await instance.createPromoKitty(80346806, coo, {from: coo,value: 0});
await instance.createPromoKitty(316425067, coo, {from: coo,value: 0});
await instance.createPromoKitty(548506116, coo, {from: coo,value: 0});
await instance.createPromoKitty(337183562, coo, {from: coo,value: 0});
await instance.createPromoKitty(737413801, coo, {from: coo,value: 0});
await instance.createPromoKitty(131078856, coo, {from: coo,value: 0});
await instance.createPromoKitty(391223181, coo, {from: coo,value: 0});
await instance.createPromoKitty(479320110, coo, {from: coo,value: 0});
await instance.createPromoKitty(317766667, coo, {from: coo,value: 0});
await instance.createPromoKitty(890901974, coo, {from: coo,value: 0});
await instance.createPromoKitty(812813868, coo, {from: coo,value: 0});
await instance.createPromoKitty(980607901, coo, {from: coo,value: 0});
await instance.createPromoKitty(161235597, coo, {from: coo,value: 0});
await instance.createPromoKitty(142929909, coo, {from: coo,value: 0});
await instance.createPromoKitty(218163164, coo, {from: coo,value: 0});
await instance.createPromoKitty(659433422, coo, {from: coo,value: 0});
await instance.createPromoKitty(15461971, coo, {from: coo,value: 0});
await instance.createPromoKitty(996271142, coo, {from: coo,value: 0});
await instance.createPromoKitty(27375139, coo, {from: coo,value: 0});
await instance.createPromoKitty(709668175, coo, {from: coo,value: 0});
await instance.createPromoKitty(928932159, coo, {from: coo,value: 0});
await instance.createPromoKitty(544940519, coo, {from: coo,value: 0});
await instance.createPromoKitty(73963417, coo, {from: coo,value: 0});
await instance.createPromoKitty(271288867, coo, {from: coo,value: 0});
await instance.createPromoKitty(894656875, coo, {from: coo,value: 0});
await instance.createPromoKitty(941167392, coo, {from: coo,value: 0});
await instance.createPromoKitty(624387805, coo, {from: coo,value: 0});
await instance.createPromoKitty(634472466, coo, {from: coo,value: 0});
await instance.createPromoKitty(571202810, coo, {from: coo,value: 0});
await instance.createPromoKitty(30634995, coo, {from: coo,value: 0});
await instance.createPromoKitty(958599813, coo, {from: coo,value: 0});
await instance.createPromoKitty(605983583, coo, {from: coo,value: 0});
await instance.createPromoKitty(686828011, coo, {from: coo,value: 0});
await instance.createPromoKitty(662662606, coo, {from: coo,value: 0});
await instance.createPromoKitty(12906820, coo, {from: coo,value: 0});
await instance.createPromoKitty(207624503, coo, {from: coo,value: 0});
await instance.createPromoKitty(668176719, coo, {from: coo,value: 0});
await instance.createPromoKitty(275431349, coo, {from: coo,value: 0});
await instance.createPromoKitty(632084013, coo, {from: coo,value: 0});
await instance.createPromoKitty(291347511, coo, {from: coo,value: 0});
await instance.createPromoKitty(886930823, coo, {from: coo,value: 0});
await instance.createPromoKitty(943980290, coo, {from: coo,value: 0});
await instance.createPromoKitty(864208372, coo, {from: coo,value: 0});
await instance.createPromoKitty(948307087, coo, {from: coo,value: 0});
await instance.createPromoKitty(667419351, coo, {from: coo,value: 0});
await instance.createPromoKitty(915906303, coo, {from: coo,value: 0});
await instance.createPromoKitty(236060047, coo, {from: coo,value: 0});
await instance.createPromoKitty(227538021, coo, {from: coo,value: 0});
await instance.createPromoKitty(698354765, coo, {from: coo,value: 0});
await instance.createPromoKitty(147393376, coo, {from: coo,value: 0});
await instance.createPromoKitty(630640721, coo, {from: coo,value: 0});
await instance.createPromoKitty(949785585, coo, {from: coo,value: 0});
await instance.createPromoKitty(515406859, coo, {from: coo,value: 0});
await instance.createPromoKitty(94094762, coo, {from: coo,value: 0});
await instance.createPromoKitty(402012594, coo, {from: coo,value: 0});
await instance.createPromoKitty(863437321, coo, {from: coo,value: 0});
await instance.createPromoKitty(862384880, coo, {from: coo,value: 0});
await instance.createPromoKitty(143945325, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(7, 21, {from: coo});
await instance.breedWith(32, 9, {from: coo});
await instance.breedWith(30, 12, {from: coo});
await instance.breedWith(38, 40, {from: coo});
await instance.breedWith(35, 29, {from: coo});
await instance.breedWith(34, 23, {from: coo});
await instance.breedWith(24, 18, {from: coo});
await instance.breedWith(3, 2, {from: coo});
await instance.breedWith(20, 16, {from: coo});
await instance.breedWith(5, 10, {from: coo});
await instance.breedWith(39, 8, {from: coo});
await instance.breedWith(33, 26, {from: coo});
await instance.breedWith(17, 11, {from: coo});
await instance.breedWith(6, 22, {from: coo});
await instance.breedWith(1, 25, {from: coo});
await instance.breedWith(15, 13, {from: coo});
await instance.breedWith(31, 19, {from: coo});
await instance.breedWith(37, 14, {from: coo});
await instance.breedWith(27, 4, {from: coo});
await instance.breedWith(28, 36, {from: coo});
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
await instance.giveBirth(7);
await instance.giveBirth(32);
await instance.giveBirth(30);
await instance.giveBirth(38);
await instance.giveBirth(35);
await instance.giveBirth(34);
await instance.giveBirth(24);
await instance.giveBirth(3);
await instance.giveBirth(20);
await instance.giveBirth(5);
await instance.giveBirth(39);
await instance.giveBirth(33);
await instance.giveBirth(17);
await instance.giveBirth(6);
await instance.giveBirth(1);
await instance.giveBirth(15);
await instance.giveBirth(31);
await instance.giveBirth(37);
await instance.giveBirth(27);
await instance.giveBirth(28);
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
