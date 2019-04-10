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
await instance.createPromoKitty(276780065, coo, {from: coo,value: 0});
await instance.createPromoKitty(423929180, coo, {from: coo,value: 0});
await instance.createPromoKitty(660656772, coo, {from: coo,value: 0});
await instance.createPromoKitty(66769084, coo, {from: coo,value: 0});
await instance.createPromoKitty(628183085, coo, {from: coo,value: 0});
await instance.createPromoKitty(248872863, coo, {from: coo,value: 0});
await instance.createPromoKitty(443735412, coo, {from: coo,value: 0});
await instance.createPromoKitty(484858688, coo, {from: coo,value: 0});
await instance.createPromoKitty(759767259, coo, {from: coo,value: 0});
await instance.createPromoKitty(879493642, coo, {from: coo,value: 0});
await instance.createPromoKitty(403001592, coo, {from: coo,value: 0});
await instance.createPromoKitty(999396103, coo, {from: coo,value: 0});
await instance.createPromoKitty(87561202, coo, {from: coo,value: 0});
await instance.createPromoKitty(664162930, coo, {from: coo,value: 0});
await instance.createPromoKitty(445829061, coo, {from: coo,value: 0});
await instance.createPromoKitty(212292773, coo, {from: coo,value: 0});
await instance.createPromoKitty(186856270, coo, {from: coo,value: 0});
await instance.createPromoKitty(478559424, coo, {from: coo,value: 0});
await instance.createPromoKitty(19469866, coo, {from: coo,value: 0});
await instance.createPromoKitty(379161095, coo, {from: coo,value: 0});
await instance.createPromoKitty(269758621, coo, {from: coo,value: 0});
await instance.createPromoKitty(95467226, coo, {from: coo,value: 0});
await instance.createPromoKitty(292292351, coo, {from: coo,value: 0});
await instance.createPromoKitty(545805758, coo, {from: coo,value: 0});
await instance.createPromoKitty(959080485, coo, {from: coo,value: 0});
await instance.createPromoKitty(694252263, coo, {from: coo,value: 0});
await instance.createPromoKitty(184965977, coo, {from: coo,value: 0});
await instance.createPromoKitty(387515452, coo, {from: coo,value: 0});
await instance.createPromoKitty(173137389, coo, {from: coo,value: 0});
await instance.createPromoKitty(467739837, coo, {from: coo,value: 0});
await instance.createPromoKitty(253723005, coo, {from: coo,value: 0});
await instance.createPromoKitty(689726299, coo, {from: coo,value: 0});
await instance.createPromoKitty(19068066, coo, {from: coo,value: 0});
await instance.createPromoKitty(571630562, coo, {from: coo,value: 0});
await instance.createPromoKitty(366029888, coo, {from: coo,value: 0});
await instance.createPromoKitty(617863763, coo, {from: coo,value: 0});
await instance.createPromoKitty(986553695, coo, {from: coo,value: 0});
await instance.createPromoKitty(271324564, coo, {from: coo,value: 0});
await instance.createPromoKitty(978175570, coo, {from: coo,value: 0});
await instance.createPromoKitty(878842119, coo, {from: coo,value: 0});
await instance.createPromoKitty(60292750, coo, {from: coo,value: 0});
await instance.createPromoKitty(687626861, coo, {from: coo,value: 0});
await instance.createPromoKitty(614514105, coo, {from: coo,value: 0});
await instance.createPromoKitty(364091436, coo, {from: coo,value: 0});
await instance.createPromoKitty(691477482, coo, {from: coo,value: 0});
await instance.createPromoKitty(934138678, coo, {from: coo,value: 0});
await instance.createPromoKitty(289299011, coo, {from: coo,value: 0});
await instance.createPromoKitty(331045149, coo, {from: coo,value: 0});
await instance.createPromoKitty(885474287, coo, {from: coo,value: 0});
await instance.createPromoKitty(365614876, coo, {from: coo,value: 0});
await instance.createPromoKitty(950194984, coo, {from: coo,value: 0});
await instance.createPromoKitty(740634434, coo, {from: coo,value: 0});
await instance.createPromoKitty(317247237, coo, {from: coo,value: 0});
await instance.createPromoKitty(768243485, coo, {from: coo,value: 0});
await instance.createPromoKitty(949562213, coo, {from: coo,value: 0});
await instance.createPromoKitty(68444280, coo, {from: coo,value: 0});
await instance.createPromoKitty(970227784, coo, {from: coo,value: 0});
await instance.createPromoKitty(366655964, coo, {from: coo,value: 0});
await instance.createPromoKitty(302811188, coo, {from: coo,value: 0});
await instance.createPromoKitty(655429668, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(9, 7, {from: coo});
await instance.breedWith(6, 8, {from: coo});
await instance.breedWith(1, 3, {from: coo});
await instance.breedWith(31, 5, {from: coo});
await instance.breedWith(36, 39, {from: coo});
await instance.breedWith(27, 23, {from: coo});
await instance.breedWith(34, 10, {from: coo});
await instance.breedWith(13, 25, {from: coo});
await instance.breedWith(2, 32, {from: coo});
await instance.breedWith(21, 18, {from: coo});
await instance.breedWith(38, 11, {from: coo});
await instance.breedWith(33, 15, {from: coo});
await instance.breedWith(37, 17, {from: coo});
await instance.breedWith(24, 35, {from: coo});
await instance.breedWith(28, 14, {from: coo});
await instance.breedWith(29, 16, {from: coo});
await instance.breedWith(30, 26, {from: coo});
await instance.breedWith(4, 40, {from: coo});
await instance.breedWith(20, 19, {from: coo});
await instance.breedWith(12, 22, {from: coo});
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
await instance.giveBirth(9);
await instance.giveBirth(6);
await instance.giveBirth(1);
await instance.giveBirth(31);
await instance.giveBirth(36);
await instance.giveBirth(27);
await instance.giveBirth(34);
await instance.giveBirth(13);
await instance.giveBirth(2);
await instance.giveBirth(21);
await instance.giveBirth(38);
await instance.giveBirth(33);
await instance.giveBirth(37);
await instance.giveBirth(24);
await instance.giveBirth(28);
await instance.giveBirth(29);
await instance.giveBirth(30);
await instance.giveBirth(4);
await instance.giveBirth(20);
await instance.giveBirth(12);
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
