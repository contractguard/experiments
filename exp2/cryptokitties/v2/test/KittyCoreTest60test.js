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
await instance.createPromoKitty(449297654, coo, {from: coo,value: 0});
await instance.createPromoKitty(864567162, coo, {from: coo,value: 0});
await instance.createPromoKitty(780362258, coo, {from: coo,value: 0});
await instance.createPromoKitty(139521710, coo, {from: coo,value: 0});
await instance.createPromoKitty(402563213, coo, {from: coo,value: 0});
await instance.createPromoKitty(987127585, coo, {from: coo,value: 0});
await instance.createPromoKitty(228615311, coo, {from: coo,value: 0});
await instance.createPromoKitty(53787340, coo, {from: coo,value: 0});
await instance.createPromoKitty(580617008, coo, {from: coo,value: 0});
await instance.createPromoKitty(496910986, coo, {from: coo,value: 0});
await instance.createPromoKitty(988745225, coo, {from: coo,value: 0});
await instance.createPromoKitty(955263191, coo, {from: coo,value: 0});
await instance.createPromoKitty(680353954, coo, {from: coo,value: 0});
await instance.createPromoKitty(745685524, coo, {from: coo,value: 0});
await instance.createPromoKitty(272452881, coo, {from: coo,value: 0});
await instance.createPromoKitty(628207171, coo, {from: coo,value: 0});
await instance.createPromoKitty(672811250, coo, {from: coo,value: 0});
await instance.createPromoKitty(274183133, coo, {from: coo,value: 0});
await instance.createPromoKitty(852234384, coo, {from: coo,value: 0});
await instance.createPromoKitty(583275980, coo, {from: coo,value: 0});
await instance.createPromoKitty(78271719, coo, {from: coo,value: 0});
await instance.createPromoKitty(852505458, coo, {from: coo,value: 0});
await instance.createPromoKitty(368910554, coo, {from: coo,value: 0});
await instance.createPromoKitty(613359209, coo, {from: coo,value: 0});
await instance.createPromoKitty(708483456, coo, {from: coo,value: 0});
await instance.createPromoKitty(997895451, coo, {from: coo,value: 0});
await instance.createPromoKitty(391591297, coo, {from: coo,value: 0});
await instance.createPromoKitty(68063817, coo, {from: coo,value: 0});
await instance.createPromoKitty(651560115, coo, {from: coo,value: 0});
await instance.createPromoKitty(78282234, coo, {from: coo,value: 0});
await instance.createPromoKitty(154403387, coo, {from: coo,value: 0});
await instance.createPromoKitty(501710011, coo, {from: coo,value: 0});
await instance.createPromoKitty(933892756, coo, {from: coo,value: 0});
await instance.createPromoKitty(376769352, coo, {from: coo,value: 0});
await instance.createPromoKitty(679367993, coo, {from: coo,value: 0});
await instance.createPromoKitty(967617492, coo, {from: coo,value: 0});
await instance.createPromoKitty(34937441, coo, {from: coo,value: 0});
await instance.createPromoKitty(325610248, coo, {from: coo,value: 0});
await instance.createPromoKitty(92727962, coo, {from: coo,value: 0});
await instance.createPromoKitty(994465585, coo, {from: coo,value: 0});
await instance.createPromoKitty(445062062, coo, {from: coo,value: 0});
await instance.createPromoKitty(561950424, coo, {from: coo,value: 0});
await instance.createPromoKitty(341235438, coo, {from: coo,value: 0});
await instance.createPromoKitty(564390424, coo, {from: coo,value: 0});
await instance.createPromoKitty(352085795, coo, {from: coo,value: 0});
await instance.createPromoKitty(135731034, coo, {from: coo,value: 0});
await instance.createPromoKitty(456246183, coo, {from: coo,value: 0});
await instance.createPromoKitty(940954930, coo, {from: coo,value: 0});
await instance.createPromoKitty(644978586, coo, {from: coo,value: 0});
await instance.createPromoKitty(602256384, coo, {from: coo,value: 0});
await instance.createPromoKitty(76703408, coo, {from: coo,value: 0});
await instance.createPromoKitty(44520825, coo, {from: coo,value: 0});
await instance.createPromoKitty(57904125, coo, {from: coo,value: 0});
await instance.createPromoKitty(784964225, coo, {from: coo,value: 0});
await instance.createPromoKitty(156133785, coo, {from: coo,value: 0});
await instance.createPromoKitty(451550034, coo, {from: coo,value: 0});
await instance.createPromoKitty(349058107, coo, {from: coo,value: 0});
await instance.createPromoKitty(656839973, coo, {from: coo,value: 0});
await instance.createPromoKitty(340284904, coo, {from: coo,value: 0});
await instance.createPromoKitty(191507136, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(35, 7, {from: coo});
await instance.breedWith(2, 16, {from: coo});
await instance.breedWith(33, 8, {from: coo});
await instance.breedWith(19, 31, {from: coo});
await instance.breedWith(9, 13, {from: coo});
await instance.breedWith(10, 29, {from: coo});
await instance.breedWith(17, 27, {from: coo});
await instance.breedWith(1, 34, {from: coo});
await instance.breedWith(23, 21, {from: coo});
await instance.breedWith(39, 18, {from: coo});
await instance.breedWith(25, 26, {from: coo});
await instance.breedWith(5, 30, {from: coo});
await instance.breedWith(24, 12, {from: coo});
await instance.breedWith(6, 40, {from: coo});
await instance.breedWith(38, 22, {from: coo});
await instance.breedWith(28, 11, {from: coo});
await instance.breedWith(15, 20, {from: coo});
await instance.breedWith(37, 36, {from: coo});
await instance.breedWith(4, 32, {from: coo});
await instance.breedWith(3, 14, {from: coo});
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
await instance.giveBirth(35);
await instance.giveBirth(2);
await instance.giveBirth(33);
await instance.giveBirth(19);
await instance.giveBirth(9);
await instance.giveBirth(10);
await instance.giveBirth(17);
await instance.giveBirth(1);
await instance.giveBirth(23);
await instance.giveBirth(39);
await instance.giveBirth(25);
await instance.giveBirth(5);
await instance.giveBirth(24);
await instance.giveBirth(6);
await instance.giveBirth(38);
await instance.giveBirth(28);
await instance.giveBirth(15);
await instance.giveBirth(37);
await instance.giveBirth(4);
await instance.giveBirth(3);
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
