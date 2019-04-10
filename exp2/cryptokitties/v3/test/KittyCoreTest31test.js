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
await instance.createPromoKitty(790193264, coo, {from: coo,value: 0});
await instance.createPromoKitty(773425508, coo, {from: coo,value: 0});
await instance.createPromoKitty(140480594, coo, {from: coo,value: 0});
await instance.createPromoKitty(669483092, coo, {from: coo,value: 0});
await instance.createPromoKitty(177043994, coo, {from: coo,value: 0});
await instance.createPromoKitty(244625034, coo, {from: coo,value: 0});
await instance.createPromoKitty(351935735, coo, {from: coo,value: 0});
await instance.createPromoKitty(593080475, coo, {from: coo,value: 0});
await instance.createPromoKitty(831627338, coo, {from: coo,value: 0});
await instance.createPromoKitty(65982818, coo, {from: coo,value: 0});
await instance.createPromoKitty(94113392, coo, {from: coo,value: 0});
await instance.createPromoKitty(992329426, coo, {from: coo,value: 0});
await instance.createPromoKitty(524179910, coo, {from: coo,value: 0});
await instance.createPromoKitty(296464037, coo, {from: coo,value: 0});
await instance.createPromoKitty(973449694, coo, {from: coo,value: 0});
await instance.createPromoKitty(829756117, coo, {from: coo,value: 0});
await instance.createPromoKitty(355880304, coo, {from: coo,value: 0});
await instance.createPromoKitty(47035387, coo, {from: coo,value: 0});
await instance.createPromoKitty(197107386, coo, {from: coo,value: 0});
await instance.createPromoKitty(130570548, coo, {from: coo,value: 0});
await instance.createPromoKitty(763358128, coo, {from: coo,value: 0});
await instance.createPromoKitty(104434074, coo, {from: coo,value: 0});
await instance.createPromoKitty(179572665, coo, {from: coo,value: 0});
await instance.createPromoKitty(69377539, coo, {from: coo,value: 0});
await instance.createPromoKitty(124115531, coo, {from: coo,value: 0});
await instance.createPromoKitty(711674541, coo, {from: coo,value: 0});
await instance.createPromoKitty(567401705, coo, {from: coo,value: 0});
await instance.createPromoKitty(573231484, coo, {from: coo,value: 0});
await instance.createPromoKitty(911491325, coo, {from: coo,value: 0});
await instance.createPromoKitty(424413314, coo, {from: coo,value: 0});
await instance.createPromoKitty(705377775, coo, {from: coo,value: 0});
await instance.createPromoKitty(811424949, coo, {from: coo,value: 0});
await instance.createPromoKitty(324729115, coo, {from: coo,value: 0});
await instance.createPromoKitty(314978303, coo, {from: coo,value: 0});
await instance.createPromoKitty(800458331, coo, {from: coo,value: 0});
await instance.createPromoKitty(700877096, coo, {from: coo,value: 0});
await instance.createPromoKitty(93146637, coo, {from: coo,value: 0});
await instance.createPromoKitty(985015116, coo, {from: coo,value: 0});
await instance.createPromoKitty(689420358, coo, {from: coo,value: 0});
await instance.createPromoKitty(218639392, coo, {from: coo,value: 0});
await instance.createPromoKitty(320741007, coo, {from: coo,value: 0});
await instance.createPromoKitty(335453764, coo, {from: coo,value: 0});
await instance.createPromoKitty(817948039, coo, {from: coo,value: 0});
await instance.createPromoKitty(25351599, coo, {from: coo,value: 0});
await instance.createPromoKitty(998327561, coo, {from: coo,value: 0});
await instance.createPromoKitty(49416506, coo, {from: coo,value: 0});
await instance.createPromoKitty(370634476, coo, {from: coo,value: 0});
await instance.createPromoKitty(127259093, coo, {from: coo,value: 0});
await instance.createPromoKitty(816292880, coo, {from: coo,value: 0});
await instance.createPromoKitty(588172886, coo, {from: coo,value: 0});
await instance.createPromoKitty(959853858, coo, {from: coo,value: 0});
await instance.createPromoKitty(101226320, coo, {from: coo,value: 0});
await instance.createPromoKitty(894895950, coo, {from: coo,value: 0});
await instance.createPromoKitty(145595817, coo, {from: coo,value: 0});
await instance.createPromoKitty(780494055, coo, {from: coo,value: 0});
await instance.createPromoKitty(209339175, coo, {from: coo,value: 0});
await instance.createPromoKitty(166898028, coo, {from: coo,value: 0});
await instance.createPromoKitty(613003859, coo, {from: coo,value: 0});
await instance.createPromoKitty(315561713, coo, {from: coo,value: 0});
await instance.createPromoKitty(839504048, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(33, 30, {from: coo});
await instance.breedWith(13, 7, {from: coo});
await instance.breedWith(35, 39, {from: coo});
await instance.breedWith(32, 3, {from: coo});
await instance.breedWith(24, 38, {from: coo});
await instance.breedWith(5, 22, {from: coo});
await instance.breedWith(11, 12, {from: coo});
await instance.breedWith(25, 23, {from: coo});
await instance.breedWith(21, 27, {from: coo});
await instance.breedWith(29, 28, {from: coo});
await instance.breedWith(36, 1, {from: coo});
await instance.breedWith(10, 18, {from: coo});
await instance.breedWith(40, 31, {from: coo});
await instance.breedWith(26, 17, {from: coo});
await instance.breedWith(19, 15, {from: coo});
await instance.breedWith(34, 8, {from: coo});
await instance.breedWith(16, 37, {from: coo});
await instance.breedWith(20, 14, {from: coo});
await instance.breedWith(4, 2, {from: coo});
await instance.breedWith(9, 6, {from: coo});
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
await instance.giveBirth(33);
await instance.giveBirth(13);
await instance.giveBirth(35);
await instance.giveBirth(32);
await instance.giveBirth(24);
await instance.giveBirth(5);
await instance.giveBirth(11);
await instance.giveBirth(25);
await instance.giveBirth(21);
await instance.giveBirth(29);
await instance.giveBirth(36);
await instance.giveBirth(10);
await instance.giveBirth(40);
await instance.giveBirth(26);
await instance.giveBirth(19);
await instance.giveBirth(34);
await instance.giveBirth(16);
await instance.giveBirth(20);
await instance.giveBirth(4);
await instance.giveBirth(9);
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
