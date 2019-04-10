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
await instance.createPromoKitty(702955749, coo, {from: coo,value: 0});
await instance.createPromoKitty(775467410, coo, {from: coo,value: 0});
await instance.createPromoKitty(521603222, coo, {from: coo,value: 0});
await instance.createPromoKitty(288661067, coo, {from: coo,value: 0});
await instance.createPromoKitty(517230273, coo, {from: coo,value: 0});
await instance.createPromoKitty(341635556, coo, {from: coo,value: 0});
await instance.createPromoKitty(250341349, coo, {from: coo,value: 0});
await instance.createPromoKitty(297574385, coo, {from: coo,value: 0});
await instance.createPromoKitty(185841269, coo, {from: coo,value: 0});
await instance.createPromoKitty(193560057, coo, {from: coo,value: 0});
await instance.createPromoKitty(995288222, coo, {from: coo,value: 0});
await instance.createPromoKitty(928699535, coo, {from: coo,value: 0});
await instance.createPromoKitty(379404088, coo, {from: coo,value: 0});
await instance.createPromoKitty(158598026, coo, {from: coo,value: 0});
await instance.createPromoKitty(37676197, coo, {from: coo,value: 0});
await instance.createPromoKitty(897915472, coo, {from: coo,value: 0});
await instance.createPromoKitty(745296209, coo, {from: coo,value: 0});
await instance.createPromoKitty(807881862, coo, {from: coo,value: 0});
await instance.createPromoKitty(141166950, coo, {from: coo,value: 0});
await instance.createPromoKitty(356241344, coo, {from: coo,value: 0});
await instance.createPromoKitty(739157264, coo, {from: coo,value: 0});
await instance.createPromoKitty(162045965, coo, {from: coo,value: 0});
await instance.createPromoKitty(164333835, coo, {from: coo,value: 0});
await instance.createPromoKitty(787014470, coo, {from: coo,value: 0});
await instance.createPromoKitty(816938626, coo, {from: coo,value: 0});
await instance.createPromoKitty(137438475, coo, {from: coo,value: 0});
await instance.createPromoKitty(512913867, coo, {from: coo,value: 0});
await instance.createPromoKitty(592533252, coo, {from: coo,value: 0});
await instance.createPromoKitty(606727364, coo, {from: coo,value: 0});
await instance.createPromoKitty(877292132, coo, {from: coo,value: 0});
await instance.createPromoKitty(986372206, coo, {from: coo,value: 0});
await instance.createPromoKitty(954066935, coo, {from: coo,value: 0});
await instance.createPromoKitty(759891051, coo, {from: coo,value: 0});
await instance.createPromoKitty(963618368, coo, {from: coo,value: 0});
await instance.createPromoKitty(830711527, coo, {from: coo,value: 0});
await instance.createPromoKitty(533567009, coo, {from: coo,value: 0});
await instance.createPromoKitty(666496790, coo, {from: coo,value: 0});
await instance.createPromoKitty(864073464, coo, {from: coo,value: 0});
await instance.createPromoKitty(527641517, coo, {from: coo,value: 0});
await instance.createPromoKitty(128677609, coo, {from: coo,value: 0});
await instance.createPromoKitty(951183961, coo, {from: coo,value: 0});
await instance.createPromoKitty(366837635, coo, {from: coo,value: 0});
await instance.createPromoKitty(186856925, coo, {from: coo,value: 0});
await instance.createPromoKitty(477448420, coo, {from: coo,value: 0});
await instance.createPromoKitty(987170946, coo, {from: coo,value: 0});
await instance.createPromoKitty(924451339, coo, {from: coo,value: 0});
await instance.createPromoKitty(72866670, coo, {from: coo,value: 0});
await instance.createPromoKitty(481728779, coo, {from: coo,value: 0});
await instance.createPromoKitty(881447042, coo, {from: coo,value: 0});
await instance.createPromoKitty(575161493, coo, {from: coo,value: 0});
await instance.createPromoKitty(26888472, coo, {from: coo,value: 0});
await instance.createPromoKitty(763171155, coo, {from: coo,value: 0});
await instance.createPromoKitty(407412167, coo, {from: coo,value: 0});
await instance.createPromoKitty(752453524, coo, {from: coo,value: 0});
await instance.createPromoKitty(392776881, coo, {from: coo,value: 0});
await instance.createPromoKitty(775171219, coo, {from: coo,value: 0});
await instance.createPromoKitty(5417832, coo, {from: coo,value: 0});
await instance.createPromoKitty(327077683, coo, {from: coo,value: 0});
await instance.createPromoKitty(546691066, coo, {from: coo,value: 0});
await instance.createPromoKitty(434930063, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(18, 13, {from: coo});
await instance.breedWith(21, 31, {from: coo});
await instance.breedWith(16, 9, {from: coo});
await instance.breedWith(3, 23, {from: coo});
await instance.breedWith(32, 27, {from: coo});
await instance.breedWith(34, 29, {from: coo});
await instance.breedWith(6, 28, {from: coo});
await instance.breedWith(37, 22, {from: coo});
await instance.breedWith(1, 36, {from: coo});
await instance.breedWith(30, 10, {from: coo});
await instance.breedWith(17, 24, {from: coo});
await instance.breedWith(14, 4, {from: coo});
await instance.breedWith(25, 35, {from: coo});
await instance.breedWith(7, 15, {from: coo});
await instance.breedWith(8, 2, {from: coo});
await instance.breedWith(20, 40, {from: coo});
await instance.breedWith(19, 38, {from: coo});
await instance.breedWith(26, 39, {from: coo});
await instance.breedWith(5, 33, {from: coo});
await instance.breedWith(12, 11, {from: coo});
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
await instance.giveBirth(18);
await instance.giveBirth(21);
await instance.giveBirth(16);
await instance.giveBirth(3);
await instance.giveBirth(32);
await instance.giveBirth(34);
await instance.giveBirth(6);
await instance.giveBirth(37);
await instance.giveBirth(1);
await instance.giveBirth(30);
await instance.giveBirth(17);
await instance.giveBirth(14);
await instance.giveBirth(25);
await instance.giveBirth(7);
await instance.giveBirth(8);
await instance.giveBirth(20);
await instance.giveBirth(19);
await instance.giveBirth(26);
await instance.giveBirth(5);
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
