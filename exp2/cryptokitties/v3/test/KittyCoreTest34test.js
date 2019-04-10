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
await instance.createPromoKitty(359311824, coo, {from: coo,value: 0});
await instance.createPromoKitty(294776936, coo, {from: coo,value: 0});
await instance.createPromoKitty(662703028, coo, {from: coo,value: 0});
await instance.createPromoKitty(200095618, coo, {from: coo,value: 0});
await instance.createPromoKitty(409977879, coo, {from: coo,value: 0});
await instance.createPromoKitty(198266033, coo, {from: coo,value: 0});
await instance.createPromoKitty(908790851, coo, {from: coo,value: 0});
await instance.createPromoKitty(787506531, coo, {from: coo,value: 0});
await instance.createPromoKitty(83444861, coo, {from: coo,value: 0});
await instance.createPromoKitty(250781724, coo, {from: coo,value: 0});
await instance.createPromoKitty(43193341, coo, {from: coo,value: 0});
await instance.createPromoKitty(922652022, coo, {from: coo,value: 0});
await instance.createPromoKitty(668840802, coo, {from: coo,value: 0});
await instance.createPromoKitty(299547738, coo, {from: coo,value: 0});
await instance.createPromoKitty(312665544, coo, {from: coo,value: 0});
await instance.createPromoKitty(755023429, coo, {from: coo,value: 0});
await instance.createPromoKitty(721435645, coo, {from: coo,value: 0});
await instance.createPromoKitty(926180863, coo, {from: coo,value: 0});
await instance.createPromoKitty(907134456, coo, {from: coo,value: 0});
await instance.createPromoKitty(81382725, coo, {from: coo,value: 0});
await instance.createPromoKitty(876932070, coo, {from: coo,value: 0});
await instance.createPromoKitty(271960461, coo, {from: coo,value: 0});
await instance.createPromoKitty(459802455, coo, {from: coo,value: 0});
await instance.createPromoKitty(139133559, coo, {from: coo,value: 0});
await instance.createPromoKitty(291598444, coo, {from: coo,value: 0});
await instance.createPromoKitty(462521035, coo, {from: coo,value: 0});
await instance.createPromoKitty(336195408, coo, {from: coo,value: 0});
await instance.createPromoKitty(962932964, coo, {from: coo,value: 0});
await instance.createPromoKitty(189040430, coo, {from: coo,value: 0});
await instance.createPromoKitty(893412245, coo, {from: coo,value: 0});
await instance.createPromoKitty(539543444, coo, {from: coo,value: 0});
await instance.createPromoKitty(957344107, coo, {from: coo,value: 0});
await instance.createPromoKitty(311889798, coo, {from: coo,value: 0});
await instance.createPromoKitty(719631911, coo, {from: coo,value: 0});
await instance.createPromoKitty(219145721, coo, {from: coo,value: 0});
await instance.createPromoKitty(272366852, coo, {from: coo,value: 0});
await instance.createPromoKitty(841496120, coo, {from: coo,value: 0});
await instance.createPromoKitty(228370480, coo, {from: coo,value: 0});
await instance.createPromoKitty(769924108, coo, {from: coo,value: 0});
await instance.createPromoKitty(463281045, coo, {from: coo,value: 0});
await instance.createPromoKitty(623957668, coo, {from: coo,value: 0});
await instance.createPromoKitty(79418889, coo, {from: coo,value: 0});
await instance.createPromoKitty(906413666, coo, {from: coo,value: 0});
await instance.createPromoKitty(572465584, coo, {from: coo,value: 0});
await instance.createPromoKitty(825189207, coo, {from: coo,value: 0});
await instance.createPromoKitty(743122300, coo, {from: coo,value: 0});
await instance.createPromoKitty(198295099, coo, {from: coo,value: 0});
await instance.createPromoKitty(73858123, coo, {from: coo,value: 0});
await instance.createPromoKitty(402552444, coo, {from: coo,value: 0});
await instance.createPromoKitty(548391479, coo, {from: coo,value: 0});
await instance.createPromoKitty(466027977, coo, {from: coo,value: 0});
await instance.createPromoKitty(502136590, coo, {from: coo,value: 0});
await instance.createPromoKitty(244970457, coo, {from: coo,value: 0});
await instance.createPromoKitty(677641556, coo, {from: coo,value: 0});
await instance.createPromoKitty(805285519, coo, {from: coo,value: 0});
await instance.createPromoKitty(461811022, coo, {from: coo,value: 0});
await instance.createPromoKitty(303578014, coo, {from: coo,value: 0});
await instance.createPromoKitty(997459249, coo, {from: coo,value: 0});
await instance.createPromoKitty(421519702, coo, {from: coo,value: 0});
await instance.createPromoKitty(779644992, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(17, 13, {from: coo});
await instance.breedWith(20, 32, {from: coo});
await instance.breedWith(33, 15, {from: coo});
await instance.breedWith(34, 16, {from: coo});
await instance.breedWith(12, 3, {from: coo});
await instance.breedWith(21, 25, {from: coo});
await instance.breedWith(40, 6, {from: coo});
await instance.breedWith(14, 2, {from: coo});
await instance.breedWith(4, 23, {from: coo});
await instance.breedWith(19, 39, {from: coo});
await instance.breedWith(1, 10, {from: coo});
await instance.breedWith(30, 29, {from: coo});
await instance.breedWith(35, 11, {from: coo});
await instance.breedWith(5, 24, {from: coo});
await instance.breedWith(26, 28, {from: coo});
await instance.breedWith(27, 38, {from: coo});
await instance.breedWith(37, 8, {from: coo});
await instance.breedWith(22, 36, {from: coo});
await instance.breedWith(9, 31, {from: coo});
await instance.breedWith(18, 7, {from: coo});
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
await instance.giveBirth(17);
await instance.giveBirth(20);
await instance.giveBirth(33);
await instance.giveBirth(34);
await instance.giveBirth(12);
await instance.giveBirth(21);
await instance.giveBirth(40);
await instance.giveBirth(14);
await instance.giveBirth(4);
await instance.giveBirth(19);
await instance.giveBirth(1);
await instance.giveBirth(30);
await instance.giveBirth(35);
await instance.giveBirth(5);
await instance.giveBirth(26);
await instance.giveBirth(27);
await instance.giveBirth(37);
await instance.giveBirth(22);
await instance.giveBirth(9);
await instance.giveBirth(18);
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
