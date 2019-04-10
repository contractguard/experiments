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
await instance.createPromoKitty(916170154, coo, {from: coo,value: 0});
await instance.createPromoKitty(43831079, coo, {from: coo,value: 0});
await instance.createPromoKitty(451830991, coo, {from: coo,value: 0});
await instance.createPromoKitty(888973854, coo, {from: coo,value: 0});
await instance.createPromoKitty(510903354, coo, {from: coo,value: 0});
await instance.createPromoKitty(741597313, coo, {from: coo,value: 0});
await instance.createPromoKitty(494123044, coo, {from: coo,value: 0});
await instance.createPromoKitty(963545108, coo, {from: coo,value: 0});
await instance.createPromoKitty(724106407, coo, {from: coo,value: 0});
await instance.createPromoKitty(845167707, coo, {from: coo,value: 0});
await instance.createPromoKitty(129930434, coo, {from: coo,value: 0});
await instance.createPromoKitty(483861189, coo, {from: coo,value: 0});
await instance.createPromoKitty(261501592, coo, {from: coo,value: 0});
await instance.createPromoKitty(207452707, coo, {from: coo,value: 0});
await instance.createPromoKitty(557389386, coo, {from: coo,value: 0});
await instance.createPromoKitty(933852884, coo, {from: coo,value: 0});
await instance.createPromoKitty(572420383, coo, {from: coo,value: 0});
await instance.createPromoKitty(341773021, coo, {from: coo,value: 0});
await instance.createPromoKitty(356790797, coo, {from: coo,value: 0});
await instance.createPromoKitty(911563272, coo, {from: coo,value: 0});
await instance.createPromoKitty(769271514, coo, {from: coo,value: 0});
await instance.createPromoKitty(17564470, coo, {from: coo,value: 0});
await instance.createPromoKitty(120747070, coo, {from: coo,value: 0});
await instance.createPromoKitty(798481504, coo, {from: coo,value: 0});
await instance.createPromoKitty(286142939, coo, {from: coo,value: 0});
await instance.createPromoKitty(546241339, coo, {from: coo,value: 0});
await instance.createPromoKitty(375610940, coo, {from: coo,value: 0});
await instance.createPromoKitty(331043136, coo, {from: coo,value: 0});
await instance.createPromoKitty(362725003, coo, {from: coo,value: 0});
await instance.createPromoKitty(688193435, coo, {from: coo,value: 0});
await instance.createPromoKitty(375348523, coo, {from: coo,value: 0});
await instance.createPromoKitty(835655469, coo, {from: coo,value: 0});
await instance.createPromoKitty(970572453, coo, {from: coo,value: 0});
await instance.createPromoKitty(949047801, coo, {from: coo,value: 0});
await instance.createPromoKitty(627832733, coo, {from: coo,value: 0});
await instance.createPromoKitty(352633109, coo, {from: coo,value: 0});
await instance.createPromoKitty(259066622, coo, {from: coo,value: 0});
await instance.createPromoKitty(145698649, coo, {from: coo,value: 0});
await instance.createPromoKitty(118410740, coo, {from: coo,value: 0});
await instance.createPromoKitty(982298170, coo, {from: coo,value: 0});
await instance.createPromoKitty(183118925, coo, {from: coo,value: 0});
await instance.createPromoKitty(229375457, coo, {from: coo,value: 0});
await instance.createPromoKitty(300220017, coo, {from: coo,value: 0});
await instance.createPromoKitty(31277600, coo, {from: coo,value: 0});
await instance.createPromoKitty(567286011, coo, {from: coo,value: 0});
await instance.createPromoKitty(3304990, coo, {from: coo,value: 0});
await instance.createPromoKitty(139308252, coo, {from: coo,value: 0});
await instance.createPromoKitty(950547203, coo, {from: coo,value: 0});
await instance.createPromoKitty(634239231, coo, {from: coo,value: 0});
await instance.createPromoKitty(641611493, coo, {from: coo,value: 0});
await instance.createPromoKitty(725917026, coo, {from: coo,value: 0});
await instance.createPromoKitty(732123672, coo, {from: coo,value: 0});
await instance.createPromoKitty(335965155, coo, {from: coo,value: 0});
await instance.createPromoKitty(353465873, coo, {from: coo,value: 0});
await instance.createPromoKitty(297758181, coo, {from: coo,value: 0});
await instance.createPromoKitty(241410367, coo, {from: coo,value: 0});
await instance.createPromoKitty(257043461, coo, {from: coo,value: 0});
await instance.createPromoKitty(985276641, coo, {from: coo,value: 0});
await instance.createPromoKitty(131536402, coo, {from: coo,value: 0});
await instance.createPromoKitty(62895896, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(33, 1, {from: coo});
await instance.breedWith(2, 35, {from: coo});
await instance.breedWith(14, 22, {from: coo});
await instance.breedWith(32, 5, {from: coo});
await instance.breedWith(19, 31, {from: coo});
await instance.breedWith(21, 37, {from: coo});
await instance.breedWith(23, 26, {from: coo});
await instance.breedWith(30, 28, {from: coo});
await instance.breedWith(4, 16, {from: coo});
await instance.breedWith(10, 36, {from: coo});
await instance.breedWith(39, 18, {from: coo});
await instance.breedWith(3, 13, {from: coo});
await instance.breedWith(38, 34, {from: coo});
await instance.breedWith(29, 8, {from: coo});
await instance.breedWith(40, 27, {from: coo});
await instance.breedWith(15, 9, {from: coo});
await instance.breedWith(7, 24, {from: coo});
await instance.breedWith(17, 25, {from: coo});
await instance.breedWith(6, 20, {from: coo});
await instance.breedWith(11, 12, {from: coo});
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
await instance.giveBirth(2);
await instance.giveBirth(14);
await instance.giveBirth(32);
await instance.giveBirth(19);
await instance.giveBirth(21);
await instance.giveBirth(23);
await instance.giveBirth(30);
await instance.giveBirth(4);
await instance.giveBirth(10);
await instance.giveBirth(39);
await instance.giveBirth(3);
await instance.giveBirth(38);
await instance.giveBirth(29);
await instance.giveBirth(40);
await instance.giveBirth(15);
await instance.giveBirth(7);
await instance.giveBirth(17);
await instance.giveBirth(6);
await instance.giveBirth(11);
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
