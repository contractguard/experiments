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
await instance.createPromoKitty(112486174, coo, {from: coo,value: 0});
await instance.createPromoKitty(374972294, coo, {from: coo,value: 0});
await instance.createPromoKitty(402285545, coo, {from: coo,value: 0});
await instance.createPromoKitty(95757433, coo, {from: coo,value: 0});
await instance.createPromoKitty(633212242, coo, {from: coo,value: 0});
await instance.createPromoKitty(18805800, coo, {from: coo,value: 0});
await instance.createPromoKitty(267449006, coo, {from: coo,value: 0});
await instance.createPromoKitty(923355753, coo, {from: coo,value: 0});
await instance.createPromoKitty(534066988, coo, {from: coo,value: 0});
await instance.createPromoKitty(461933947, coo, {from: coo,value: 0});
await instance.createPromoKitty(403857138, coo, {from: coo,value: 0});
await instance.createPromoKitty(877827569, coo, {from: coo,value: 0});
await instance.createPromoKitty(733453496, coo, {from: coo,value: 0});
await instance.createPromoKitty(93002644, coo, {from: coo,value: 0});
await instance.createPromoKitty(794841534, coo, {from: coo,value: 0});
await instance.createPromoKitty(115969972, coo, {from: coo,value: 0});
await instance.createPromoKitty(748127908, coo, {from: coo,value: 0});
await instance.createPromoKitty(713554331, coo, {from: coo,value: 0});
await instance.createPromoKitty(852855336, coo, {from: coo,value: 0});
await instance.createPromoKitty(811782089, coo, {from: coo,value: 0});
await instance.createPromoKitty(358919241, coo, {from: coo,value: 0});
await instance.createPromoKitty(161639835, coo, {from: coo,value: 0});
await instance.createPromoKitty(504660253, coo, {from: coo,value: 0});
await instance.createPromoKitty(57622690, coo, {from: coo,value: 0});
await instance.createPromoKitty(434813129, coo, {from: coo,value: 0});
await instance.createPromoKitty(36669080, coo, {from: coo,value: 0});
await instance.createPromoKitty(878202450, coo, {from: coo,value: 0});
await instance.createPromoKitty(688648634, coo, {from: coo,value: 0});
await instance.createPromoKitty(561627581, coo, {from: coo,value: 0});
await instance.createPromoKitty(623601979, coo, {from: coo,value: 0});
await instance.createPromoKitty(962988237, coo, {from: coo,value: 0});
await instance.createPromoKitty(351565022, coo, {from: coo,value: 0});
await instance.createPromoKitty(492645136, coo, {from: coo,value: 0});
await instance.createPromoKitty(259873116, coo, {from: coo,value: 0});
await instance.createPromoKitty(65659494, coo, {from: coo,value: 0});
await instance.createPromoKitty(463123990, coo, {from: coo,value: 0});
await instance.createPromoKitty(963280456, coo, {from: coo,value: 0});
await instance.createPromoKitty(448261333, coo, {from: coo,value: 0});
await instance.createPromoKitty(70048076, coo, {from: coo,value: 0});
await instance.createPromoKitty(612675035, coo, {from: coo,value: 0});
await instance.createPromoKitty(926674433, coo, {from: coo,value: 0});
await instance.createPromoKitty(855889901, coo, {from: coo,value: 0});
await instance.createPromoKitty(175908802, coo, {from: coo,value: 0});
await instance.createPromoKitty(408398184, coo, {from: coo,value: 0});
await instance.createPromoKitty(848902602, coo, {from: coo,value: 0});
await instance.createPromoKitty(619777693, coo, {from: coo,value: 0});
await instance.createPromoKitty(927219053, coo, {from: coo,value: 0});
await instance.createPromoKitty(62125384, coo, {from: coo,value: 0});
await instance.createPromoKitty(259337010, coo, {from: coo,value: 0});
await instance.createPromoKitty(946113906, coo, {from: coo,value: 0});
await instance.createPromoKitty(603262844, coo, {from: coo,value: 0});
await instance.createPromoKitty(363648085, coo, {from: coo,value: 0});
await instance.createPromoKitty(820222139, coo, {from: coo,value: 0});
await instance.createPromoKitty(759681111, coo, {from: coo,value: 0});
await instance.createPromoKitty(689171102, coo, {from: coo,value: 0});
await instance.createPromoKitty(591454707, coo, {from: coo,value: 0});
await instance.createPromoKitty(174835575, coo, {from: coo,value: 0});
await instance.createPromoKitty(116635112, coo, {from: coo,value: 0});
await instance.createPromoKitty(613088834, coo, {from: coo,value: 0});
await instance.createPromoKitty(590820948, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(20, 38, {from: coo});
await instance.breedWith(35, 31, {from: coo});
await instance.breedWith(2, 14, {from: coo});
await instance.breedWith(4, 37, {from: coo});
await instance.breedWith(13, 8, {from: coo});
await instance.breedWith(24, 9, {from: coo});
await instance.breedWith(6, 39, {from: coo});
await instance.breedWith(10, 17, {from: coo});
await instance.breedWith(11, 7, {from: coo});
await instance.breedWith(34, 19, {from: coo});
await instance.breedWith(29, 23, {from: coo});
await instance.breedWith(33, 36, {from: coo});
await instance.breedWith(12, 40, {from: coo});
await instance.breedWith(1, 18, {from: coo});
await instance.breedWith(27, 5, {from: coo});
await instance.breedWith(22, 32, {from: coo});
await instance.breedWith(30, 3, {from: coo});
await instance.breedWith(26, 21, {from: coo});
await instance.breedWith(28, 15, {from: coo});
await instance.breedWith(16, 25, {from: coo});
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
await instance.giveBirth(20);
await instance.giveBirth(35);
await instance.giveBirth(2);
await instance.giveBirth(4);
await instance.giveBirth(13);
await instance.giveBirth(24);
await instance.giveBirth(6);
await instance.giveBirth(10);
await instance.giveBirth(11);
await instance.giveBirth(34);
await instance.giveBirth(29);
await instance.giveBirth(33);
await instance.giveBirth(12);
await instance.giveBirth(1);
await instance.giveBirth(27);
await instance.giveBirth(22);
await instance.giveBirth(30);
await instance.giveBirth(26);
await instance.giveBirth(28);
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
