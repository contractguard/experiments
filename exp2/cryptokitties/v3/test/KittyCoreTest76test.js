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
await instance.createPromoKitty(510036938, coo, {from: coo,value: 0});
await instance.createPromoKitty(259972937, coo, {from: coo,value: 0});
await instance.createPromoKitty(934497399, coo, {from: coo,value: 0});
await instance.createPromoKitty(81869207, coo, {from: coo,value: 0});
await instance.createPromoKitty(434251248, coo, {from: coo,value: 0});
await instance.createPromoKitty(199142766, coo, {from: coo,value: 0});
await instance.createPromoKitty(549355389, coo, {from: coo,value: 0});
await instance.createPromoKitty(560862461, coo, {from: coo,value: 0});
await instance.createPromoKitty(49386404, coo, {from: coo,value: 0});
await instance.createPromoKitty(605055256, coo, {from: coo,value: 0});
await instance.createPromoKitty(843521209, coo, {from: coo,value: 0});
await instance.createPromoKitty(55524694, coo, {from: coo,value: 0});
await instance.createPromoKitty(875718458, coo, {from: coo,value: 0});
await instance.createPromoKitty(834243076, coo, {from: coo,value: 0});
await instance.createPromoKitty(200706555, coo, {from: coo,value: 0});
await instance.createPromoKitty(872965836, coo, {from: coo,value: 0});
await instance.createPromoKitty(914469569, coo, {from: coo,value: 0});
await instance.createPromoKitty(210677677, coo, {from: coo,value: 0});
await instance.createPromoKitty(701458224, coo, {from: coo,value: 0});
await instance.createPromoKitty(606754115, coo, {from: coo,value: 0});
await instance.createPromoKitty(901533470, coo, {from: coo,value: 0});
await instance.createPromoKitty(345937496, coo, {from: coo,value: 0});
await instance.createPromoKitty(16708568, coo, {from: coo,value: 0});
await instance.createPromoKitty(885199941, coo, {from: coo,value: 0});
await instance.createPromoKitty(176559004, coo, {from: coo,value: 0});
await instance.createPromoKitty(535994909, coo, {from: coo,value: 0});
await instance.createPromoKitty(780606397, coo, {from: coo,value: 0});
await instance.createPromoKitty(232117474, coo, {from: coo,value: 0});
await instance.createPromoKitty(511398012, coo, {from: coo,value: 0});
await instance.createPromoKitty(465618433, coo, {from: coo,value: 0});
await instance.createPromoKitty(956912279, coo, {from: coo,value: 0});
await instance.createPromoKitty(674434832, coo, {from: coo,value: 0});
await instance.createPromoKitty(997187433, coo, {from: coo,value: 0});
await instance.createPromoKitty(321441199, coo, {from: coo,value: 0});
await instance.createPromoKitty(38562464, coo, {from: coo,value: 0});
await instance.createPromoKitty(960702336, coo, {from: coo,value: 0});
await instance.createPromoKitty(989112008, coo, {from: coo,value: 0});
await instance.createPromoKitty(300351579, coo, {from: coo,value: 0});
await instance.createPromoKitty(262141278, coo, {from: coo,value: 0});
await instance.createPromoKitty(493447175, coo, {from: coo,value: 0});
await instance.createPromoKitty(417039759, coo, {from: coo,value: 0});
await instance.createPromoKitty(789430144, coo, {from: coo,value: 0});
await instance.createPromoKitty(544185146, coo, {from: coo,value: 0});
await instance.createPromoKitty(588476750, coo, {from: coo,value: 0});
await instance.createPromoKitty(943005002, coo, {from: coo,value: 0});
await instance.createPromoKitty(615437629, coo, {from: coo,value: 0});
await instance.createPromoKitty(657495138, coo, {from: coo,value: 0});
await instance.createPromoKitty(262380069, coo, {from: coo,value: 0});
await instance.createPromoKitty(62919530, coo, {from: coo,value: 0});
await instance.createPromoKitty(317420998, coo, {from: coo,value: 0});
await instance.createPromoKitty(921317818, coo, {from: coo,value: 0});
await instance.createPromoKitty(222587370, coo, {from: coo,value: 0});
await instance.createPromoKitty(139921514, coo, {from: coo,value: 0});
await instance.createPromoKitty(470318510, coo, {from: coo,value: 0});
await instance.createPromoKitty(734955508, coo, {from: coo,value: 0});
await instance.createPromoKitty(841880335, coo, {from: coo,value: 0});
await instance.createPromoKitty(180222091, coo, {from: coo,value: 0});
await instance.createPromoKitty(925745162, coo, {from: coo,value: 0});
await instance.createPromoKitty(50667685, coo, {from: coo,value: 0});
await instance.createPromoKitty(3822324, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(6, 28, {from: coo});
await instance.breedWith(7, 34, {from: coo});
await instance.breedWith(9, 19, {from: coo});
await instance.breedWith(2, 40, {from: coo});
await instance.breedWith(29, 39, {from: coo});
await instance.breedWith(14, 12, {from: coo});
await instance.breedWith(4, 16, {from: coo});
await instance.breedWith(20, 17, {from: coo});
await instance.breedWith(31, 27, {from: coo});
await instance.breedWith(38, 24, {from: coo});
await instance.breedWith(3, 18, {from: coo});
await instance.breedWith(11, 13, {from: coo});
await instance.breedWith(23, 10, {from: coo});
await instance.breedWith(26, 33, {from: coo});
await instance.breedWith(8, 37, {from: coo});
await instance.breedWith(32, 1, {from: coo});
await instance.breedWith(36, 25, {from: coo});
await instance.breedWith(15, 30, {from: coo});
await instance.breedWith(21, 35, {from: coo});
await instance.breedWith(5, 22, {from: coo});
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
await instance.giveBirth(6);
await instance.giveBirth(7);
await instance.giveBirth(9);
await instance.giveBirth(2);
await instance.giveBirth(29);
await instance.giveBirth(14);
await instance.giveBirth(4);
await instance.giveBirth(20);
await instance.giveBirth(31);
await instance.giveBirth(38);
await instance.giveBirth(3);
await instance.giveBirth(11);
await instance.giveBirth(23);
await instance.giveBirth(26);
await instance.giveBirth(8);
await instance.giveBirth(32);
await instance.giveBirth(36);
await instance.giveBirth(15);
await instance.giveBirth(21);
await instance.giveBirth(5);
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
