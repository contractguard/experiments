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
await instance.createPromoKitty(650223928, coo, {from: coo,value: 0});
await instance.createPromoKitty(15082608, coo, {from: coo,value: 0});
await instance.createPromoKitty(269175691, coo, {from: coo,value: 0});
await instance.createPromoKitty(838384504, coo, {from: coo,value: 0});
await instance.createPromoKitty(165816337, coo, {from: coo,value: 0});
await instance.createPromoKitty(124287671, coo, {from: coo,value: 0});
await instance.createPromoKitty(104467403, coo, {from: coo,value: 0});
await instance.createPromoKitty(636584632, coo, {from: coo,value: 0});
await instance.createPromoKitty(273646994, coo, {from: coo,value: 0});
await instance.createPromoKitty(212596918, coo, {from: coo,value: 0});
await instance.createPromoKitty(365881481, coo, {from: coo,value: 0});
await instance.createPromoKitty(150714623, coo, {from: coo,value: 0});
await instance.createPromoKitty(196928540, coo, {from: coo,value: 0});
await instance.createPromoKitty(660283197, coo, {from: coo,value: 0});
await instance.createPromoKitty(936802934, coo, {from: coo,value: 0});
await instance.createPromoKitty(123124521, coo, {from: coo,value: 0});
await instance.createPromoKitty(36876166, coo, {from: coo,value: 0});
await instance.createPromoKitty(277115668, coo, {from: coo,value: 0});
await instance.createPromoKitty(669314687, coo, {from: coo,value: 0});
await instance.createPromoKitty(306080163, coo, {from: coo,value: 0});
await instance.createPromoKitty(54955763, coo, {from: coo,value: 0});
await instance.createPromoKitty(169474164, coo, {from: coo,value: 0});
await instance.createPromoKitty(145670769, coo, {from: coo,value: 0});
await instance.createPromoKitty(687384588, coo, {from: coo,value: 0});
await instance.createPromoKitty(15411645, coo, {from: coo,value: 0});
await instance.createPromoKitty(568470260, coo, {from: coo,value: 0});
await instance.createPromoKitty(183781638, coo, {from: coo,value: 0});
await instance.createPromoKitty(900696013, coo, {from: coo,value: 0});
await instance.createPromoKitty(252682017, coo, {from: coo,value: 0});
await instance.createPromoKitty(106175161, coo, {from: coo,value: 0});
await instance.createPromoKitty(190625032, coo, {from: coo,value: 0});
await instance.createPromoKitty(219077099, coo, {from: coo,value: 0});
await instance.createPromoKitty(55838688, coo, {from: coo,value: 0});
await instance.createPromoKitty(758945883, coo, {from: coo,value: 0});
await instance.createPromoKitty(688805050, coo, {from: coo,value: 0});
await instance.createPromoKitty(521578896, coo, {from: coo,value: 0});
await instance.createPromoKitty(936520173, coo, {from: coo,value: 0});
await instance.createPromoKitty(819963205, coo, {from: coo,value: 0});
await instance.createPromoKitty(754840189, coo, {from: coo,value: 0});
await instance.createPromoKitty(742783182, coo, {from: coo,value: 0});
await instance.createPromoKitty(101322129, coo, {from: coo,value: 0});
await instance.createPromoKitty(525319208, coo, {from: coo,value: 0});
await instance.createPromoKitty(246486560, coo, {from: coo,value: 0});
await instance.createPromoKitty(355349490, coo, {from: coo,value: 0});
await instance.createPromoKitty(331108592, coo, {from: coo,value: 0});
await instance.createPromoKitty(48762255, coo, {from: coo,value: 0});
await instance.createPromoKitty(753312960, coo, {from: coo,value: 0});
await instance.createPromoKitty(406523483, coo, {from: coo,value: 0});
await instance.createPromoKitty(705961140, coo, {from: coo,value: 0});
await instance.createPromoKitty(139643795, coo, {from: coo,value: 0});
await instance.createPromoKitty(830632955, coo, {from: coo,value: 0});
await instance.createPromoKitty(859500703, coo, {from: coo,value: 0});
await instance.createPromoKitty(863702300, coo, {from: coo,value: 0});
await instance.createPromoKitty(804045001, coo, {from: coo,value: 0});
await instance.createPromoKitty(841376997, coo, {from: coo,value: 0});
await instance.createPromoKitty(170851487, coo, {from: coo,value: 0});
await instance.createPromoKitty(341422270, coo, {from: coo,value: 0});
await instance.createPromoKitty(781969962, coo, {from: coo,value: 0});
await instance.createPromoKitty(694798009, coo, {from: coo,value: 0});
await instance.createPromoKitty(747675823, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(28, 30, {from: coo});
await instance.breedWith(29, 36, {from: coo});
await instance.breedWith(22, 31, {from: coo});
await instance.breedWith(14, 18, {from: coo});
await instance.breedWith(8, 21, {from: coo});
await instance.breedWith(20, 7, {from: coo});
await instance.breedWith(34, 19, {from: coo});
await instance.breedWith(39, 40, {from: coo});
await instance.breedWith(6, 23, {from: coo});
await instance.breedWith(38, 1, {from: coo});
await instance.breedWith(5, 3, {from: coo});
await instance.breedWith(32, 15, {from: coo});
await instance.breedWith(10, 17, {from: coo});
await instance.breedWith(4, 27, {from: coo});
await instance.breedWith(37, 11, {from: coo});
await instance.breedWith(25, 9, {from: coo});
await instance.breedWith(26, 2, {from: coo});
await instance.breedWith(16, 33, {from: coo});
await instance.breedWith(13, 24, {from: coo});
await instance.breedWith(12, 35, {from: coo});
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
await instance.giveBirth(28);
await instance.giveBirth(29);
await instance.giveBirth(22);
await instance.giveBirth(14);
await instance.giveBirth(8);
await instance.giveBirth(20);
await instance.giveBirth(34);
await instance.giveBirth(39);
await instance.giveBirth(6);
await instance.giveBirth(38);
await instance.giveBirth(5);
await instance.giveBirth(32);
await instance.giveBirth(10);
await instance.giveBirth(4);
await instance.giveBirth(37);
await instance.giveBirth(25);
await instance.giveBirth(26);
await instance.giveBirth(16);
await instance.giveBirth(13);
await instance.giveBirth(12);
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
