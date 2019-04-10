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
await instance.createPromoKitty(661798414, coo, {from: coo,value: 0});
await instance.createPromoKitty(669412707, coo, {from: coo,value: 0});
await instance.createPromoKitty(882401021, coo, {from: coo,value: 0});
await instance.createPromoKitty(50340256, coo, {from: coo,value: 0});
await instance.createPromoKitty(9549886, coo, {from: coo,value: 0});
await instance.createPromoKitty(819947601, coo, {from: coo,value: 0});
await instance.createPromoKitty(141211634, coo, {from: coo,value: 0});
await instance.createPromoKitty(245585703, coo, {from: coo,value: 0});
await instance.createPromoKitty(865760620, coo, {from: coo,value: 0});
await instance.createPromoKitty(606902704, coo, {from: coo,value: 0});
await instance.createPromoKitty(590248806, coo, {from: coo,value: 0});
await instance.createPromoKitty(345021219, coo, {from: coo,value: 0});
await instance.createPromoKitty(224530870, coo, {from: coo,value: 0});
await instance.createPromoKitty(192131868, coo, {from: coo,value: 0});
await instance.createPromoKitty(679714880, coo, {from: coo,value: 0});
await instance.createPromoKitty(669693172, coo, {from: coo,value: 0});
await instance.createPromoKitty(942562384, coo, {from: coo,value: 0});
await instance.createPromoKitty(133959885, coo, {from: coo,value: 0});
await instance.createPromoKitty(968430987, coo, {from: coo,value: 0});
await instance.createPromoKitty(783630296, coo, {from: coo,value: 0});
await instance.createPromoKitty(349465311, coo, {from: coo,value: 0});
await instance.createPromoKitty(600207542, coo, {from: coo,value: 0});
await instance.createPromoKitty(777608266, coo, {from: coo,value: 0});
await instance.createPromoKitty(768347565, coo, {from: coo,value: 0});
await instance.createPromoKitty(58591397, coo, {from: coo,value: 0});
await instance.createPromoKitty(297903364, coo, {from: coo,value: 0});
await instance.createPromoKitty(118103464, coo, {from: coo,value: 0});
await instance.createPromoKitty(587965617, coo, {from: coo,value: 0});
await instance.createPromoKitty(621477624, coo, {from: coo,value: 0});
await instance.createPromoKitty(366968339, coo, {from: coo,value: 0});
await instance.createPromoKitty(972514740, coo, {from: coo,value: 0});
await instance.createPromoKitty(1300035, coo, {from: coo,value: 0});
await instance.createPromoKitty(274865076, coo, {from: coo,value: 0});
await instance.createPromoKitty(246261567, coo, {from: coo,value: 0});
await instance.createPromoKitty(934718837, coo, {from: coo,value: 0});
await instance.createPromoKitty(445722938, coo, {from: coo,value: 0});
await instance.createPromoKitty(430372809, coo, {from: coo,value: 0});
await instance.createPromoKitty(75991906, coo, {from: coo,value: 0});
await instance.createPromoKitty(842024079, coo, {from: coo,value: 0});
await instance.createPromoKitty(508739788, coo, {from: coo,value: 0});
await instance.createPromoKitty(188429185, coo, {from: coo,value: 0});
await instance.createPromoKitty(53979202, coo, {from: coo,value: 0});
await instance.createPromoKitty(761049622, coo, {from: coo,value: 0});
await instance.createPromoKitty(119300365, coo, {from: coo,value: 0});
await instance.createPromoKitty(40250133, coo, {from: coo,value: 0});
await instance.createPromoKitty(236569926, coo, {from: coo,value: 0});
await instance.createPromoKitty(566239214, coo, {from: coo,value: 0});
await instance.createPromoKitty(735785152, coo, {from: coo,value: 0});
await instance.createPromoKitty(804695088, coo, {from: coo,value: 0});
await instance.createPromoKitty(528411322, coo, {from: coo,value: 0});
await instance.createPromoKitty(943649263, coo, {from: coo,value: 0});
await instance.createPromoKitty(738591883, coo, {from: coo,value: 0});
await instance.createPromoKitty(469801066, coo, {from: coo,value: 0});
await instance.createPromoKitty(634476827, coo, {from: coo,value: 0});
await instance.createPromoKitty(363378941, coo, {from: coo,value: 0});
await instance.createPromoKitty(955490664, coo, {from: coo,value: 0});
await instance.createPromoKitty(376749120, coo, {from: coo,value: 0});
await instance.createPromoKitty(833735186, coo, {from: coo,value: 0});
await instance.createPromoKitty(287308587, coo, {from: coo,value: 0});
await instance.createPromoKitty(423670190, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(22, 15, {from: coo});
await instance.breedWith(32, 3, {from: coo});
await instance.breedWith(29, 20, {from: coo});
await instance.breedWith(10, 34, {from: coo});
await instance.breedWith(33, 2, {from: coo});
await instance.breedWith(28, 35, {from: coo});
await instance.breedWith(19, 26, {from: coo});
await instance.breedWith(30, 14, {from: coo});
await instance.breedWith(11, 40, {from: coo});
await instance.breedWith(27, 21, {from: coo});
await instance.breedWith(8, 13, {from: coo});
await instance.breedWith(39, 38, {from: coo});
await instance.breedWith(24, 31, {from: coo});
await instance.breedWith(1, 7, {from: coo});
await instance.breedWith(36, 25, {from: coo});
await instance.breedWith(17, 16, {from: coo});
await instance.breedWith(18, 4, {from: coo});
await instance.breedWith(37, 23, {from: coo});
await instance.breedWith(6, 12, {from: coo});
await instance.breedWith(9, 5, {from: coo});
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
await instance.giveBirth(22);
await instance.giveBirth(32);
await instance.giveBirth(29);
await instance.giveBirth(10);
await instance.giveBirth(33);
await instance.giveBirth(28);
await instance.giveBirth(19);
await instance.giveBirth(30);
await instance.giveBirth(11);
await instance.giveBirth(27);
await instance.giveBirth(8);
await instance.giveBirth(39);
await instance.giveBirth(24);
await instance.giveBirth(1);
await instance.giveBirth(36);
await instance.giveBirth(17);
await instance.giveBirth(18);
await instance.giveBirth(37);
await instance.giveBirth(6);
await instance.giveBirth(9);
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
