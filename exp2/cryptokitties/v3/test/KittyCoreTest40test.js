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
await instance.createPromoKitty(345155182, coo, {from: coo,value: 0});
await instance.createPromoKitty(549181351, coo, {from: coo,value: 0});
await instance.createPromoKitty(166634761, coo, {from: coo,value: 0});
await instance.createPromoKitty(123320703, coo, {from: coo,value: 0});
await instance.createPromoKitty(350092625, coo, {from: coo,value: 0});
await instance.createPromoKitty(880223910, coo, {from: coo,value: 0});
await instance.createPromoKitty(200038307, coo, {from: coo,value: 0});
await instance.createPromoKitty(742317755, coo, {from: coo,value: 0});
await instance.createPromoKitty(769565184, coo, {from: coo,value: 0});
await instance.createPromoKitty(503943438, coo, {from: coo,value: 0});
await instance.createPromoKitty(38229929, coo, {from: coo,value: 0});
await instance.createPromoKitty(839658992, coo, {from: coo,value: 0});
await instance.createPromoKitty(148278935, coo, {from: coo,value: 0});
await instance.createPromoKitty(91126122, coo, {from: coo,value: 0});
await instance.createPromoKitty(108661003, coo, {from: coo,value: 0});
await instance.createPromoKitty(230376613, coo, {from: coo,value: 0});
await instance.createPromoKitty(185005397, coo, {from: coo,value: 0});
await instance.createPromoKitty(806366409, coo, {from: coo,value: 0});
await instance.createPromoKitty(786620676, coo, {from: coo,value: 0});
await instance.createPromoKitty(726101868, coo, {from: coo,value: 0});
await instance.createPromoKitty(769291831, coo, {from: coo,value: 0});
await instance.createPromoKitty(230128139, coo, {from: coo,value: 0});
await instance.createPromoKitty(341933870, coo, {from: coo,value: 0});
await instance.createPromoKitty(201126868, coo, {from: coo,value: 0});
await instance.createPromoKitty(802561095, coo, {from: coo,value: 0});
await instance.createPromoKitty(427210914, coo, {from: coo,value: 0});
await instance.createPromoKitty(869019366, coo, {from: coo,value: 0});
await instance.createPromoKitty(140351678, coo, {from: coo,value: 0});
await instance.createPromoKitty(733112706, coo, {from: coo,value: 0});
await instance.createPromoKitty(281357473, coo, {from: coo,value: 0});
await instance.createPromoKitty(549819835, coo, {from: coo,value: 0});
await instance.createPromoKitty(460755771, coo, {from: coo,value: 0});
await instance.createPromoKitty(934455658, coo, {from: coo,value: 0});
await instance.createPromoKitty(877035206, coo, {from: coo,value: 0});
await instance.createPromoKitty(391017770, coo, {from: coo,value: 0});
await instance.createPromoKitty(943768827, coo, {from: coo,value: 0});
await instance.createPromoKitty(271708751, coo, {from: coo,value: 0});
await instance.createPromoKitty(746500485, coo, {from: coo,value: 0});
await instance.createPromoKitty(306032014, coo, {from: coo,value: 0});
await instance.createPromoKitty(918148427, coo, {from: coo,value: 0});
await instance.createPromoKitty(210836395, coo, {from: coo,value: 0});
await instance.createPromoKitty(998036197, coo, {from: coo,value: 0});
await instance.createPromoKitty(408804908, coo, {from: coo,value: 0});
await instance.createPromoKitty(798748768, coo, {from: coo,value: 0});
await instance.createPromoKitty(860750286, coo, {from: coo,value: 0});
await instance.createPromoKitty(636826474, coo, {from: coo,value: 0});
await instance.createPromoKitty(805975030, coo, {from: coo,value: 0});
await instance.createPromoKitty(143690536, coo, {from: coo,value: 0});
await instance.createPromoKitty(129240146, coo, {from: coo,value: 0});
await instance.createPromoKitty(733747091, coo, {from: coo,value: 0});
await instance.createPromoKitty(747980494, coo, {from: coo,value: 0});
await instance.createPromoKitty(302390292, coo, {from: coo,value: 0});
await instance.createPromoKitty(730826943, coo, {from: coo,value: 0});
await instance.createPromoKitty(966726757, coo, {from: coo,value: 0});
await instance.createPromoKitty(655977692, coo, {from: coo,value: 0});
await instance.createPromoKitty(484652971, coo, {from: coo,value: 0});
await instance.createPromoKitty(397561968, coo, {from: coo,value: 0});
await instance.createPromoKitty(406684624, coo, {from: coo,value: 0});
await instance.createPromoKitty(631445969, coo, {from: coo,value: 0});
await instance.createPromoKitty(109048474, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(14, 20, {from: coo});
await instance.breedWith(3, 30, {from: coo});
await instance.breedWith(34, 9, {from: coo});
await instance.breedWith(33, 2, {from: coo});
await instance.breedWith(11, 38, {from: coo});
await instance.breedWith(37, 36, {from: coo});
await instance.breedWith(26, 15, {from: coo});
await instance.breedWith(18, 17, {from: coo});
await instance.breedWith(28, 8, {from: coo});
await instance.breedWith(35, 31, {from: coo});
await instance.breedWith(32, 5, {from: coo});
await instance.breedWith(21, 6, {from: coo});
await instance.breedWith(24, 25, {from: coo});
await instance.breedWith(22, 12, {from: coo});
await instance.breedWith(7, 39, {from: coo});
await instance.breedWith(4, 16, {from: coo});
await instance.breedWith(27, 23, {from: coo});
await instance.breedWith(19, 29, {from: coo});
await instance.breedWith(1, 10, {from: coo});
await instance.breedWith(13, 40, {from: coo});
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
await instance.giveBirth(14);
await instance.giveBirth(3);
await instance.giveBirth(34);
await instance.giveBirth(33);
await instance.giveBirth(11);
await instance.giveBirth(37);
await instance.giveBirth(26);
await instance.giveBirth(18);
await instance.giveBirth(28);
await instance.giveBirth(35);
await instance.giveBirth(32);
await instance.giveBirth(21);
await instance.giveBirth(24);
await instance.giveBirth(22);
await instance.giveBirth(7);
await instance.giveBirth(4);
await instance.giveBirth(27);
await instance.giveBirth(19);
await instance.giveBirth(1);
await instance.giveBirth(13);
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
