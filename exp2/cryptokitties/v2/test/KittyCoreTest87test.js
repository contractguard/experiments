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
await instance.createPromoKitty(768505049, coo, {from: coo,value: 0});
await instance.createPromoKitty(845222474, coo, {from: coo,value: 0});
await instance.createPromoKitty(216643721, coo, {from: coo,value: 0});
await instance.createPromoKitty(579770365, coo, {from: coo,value: 0});
await instance.createPromoKitty(723246417, coo, {from: coo,value: 0});
await instance.createPromoKitty(321911976, coo, {from: coo,value: 0});
await instance.createPromoKitty(748481522, coo, {from: coo,value: 0});
await instance.createPromoKitty(580548277, coo, {from: coo,value: 0});
await instance.createPromoKitty(597926651, coo, {from: coo,value: 0});
await instance.createPromoKitty(991728197, coo, {from: coo,value: 0});
await instance.createPromoKitty(712127640, coo, {from: coo,value: 0});
await instance.createPromoKitty(352592482, coo, {from: coo,value: 0});
await instance.createPromoKitty(886383506, coo, {from: coo,value: 0});
await instance.createPromoKitty(289499170, coo, {from: coo,value: 0});
await instance.createPromoKitty(775616721, coo, {from: coo,value: 0});
await instance.createPromoKitty(934410842, coo, {from: coo,value: 0});
await instance.createPromoKitty(631328422, coo, {from: coo,value: 0});
await instance.createPromoKitty(571707560, coo, {from: coo,value: 0});
await instance.createPromoKitty(70326299, coo, {from: coo,value: 0});
await instance.createPromoKitty(650902771, coo, {from: coo,value: 0});
await instance.createPromoKitty(308925333, coo, {from: coo,value: 0});
await instance.createPromoKitty(577807999, coo, {from: coo,value: 0});
await instance.createPromoKitty(853097761, coo, {from: coo,value: 0});
await instance.createPromoKitty(126155811, coo, {from: coo,value: 0});
await instance.createPromoKitty(724791145, coo, {from: coo,value: 0});
await instance.createPromoKitty(780177659, coo, {from: coo,value: 0});
await instance.createPromoKitty(547091144, coo, {from: coo,value: 0});
await instance.createPromoKitty(952793770, coo, {from: coo,value: 0});
await instance.createPromoKitty(925686370, coo, {from: coo,value: 0});
await instance.createPromoKitty(377816180, coo, {from: coo,value: 0});
await instance.createPromoKitty(668644338, coo, {from: coo,value: 0});
await instance.createPromoKitty(738156287, coo, {from: coo,value: 0});
await instance.createPromoKitty(987761834, coo, {from: coo,value: 0});
await instance.createPromoKitty(869256668, coo, {from: coo,value: 0});
await instance.createPromoKitty(622710993, coo, {from: coo,value: 0});
await instance.createPromoKitty(58746443, coo, {from: coo,value: 0});
await instance.createPromoKitty(217896238, coo, {from: coo,value: 0});
await instance.createPromoKitty(523856842, coo, {from: coo,value: 0});
await instance.createPromoKitty(458804094, coo, {from: coo,value: 0});
await instance.createPromoKitty(604669894, coo, {from: coo,value: 0});
await instance.createPromoKitty(110554489, coo, {from: coo,value: 0});
await instance.createPromoKitty(653344087, coo, {from: coo,value: 0});
await instance.createPromoKitty(278794464, coo, {from: coo,value: 0});
await instance.createPromoKitty(627968709, coo, {from: coo,value: 0});
await instance.createPromoKitty(220487172, coo, {from: coo,value: 0});
await instance.createPromoKitty(410356917, coo, {from: coo,value: 0});
await instance.createPromoKitty(556514096, coo, {from: coo,value: 0});
await instance.createPromoKitty(294624668, coo, {from: coo,value: 0});
await instance.createPromoKitty(499818557, coo, {from: coo,value: 0});
await instance.createPromoKitty(766337303, coo, {from: coo,value: 0});
await instance.createPromoKitty(796318844, coo, {from: coo,value: 0});
await instance.createPromoKitty(622595171, coo, {from: coo,value: 0});
await instance.createPromoKitty(708120812, coo, {from: coo,value: 0});
await instance.createPromoKitty(541848118, coo, {from: coo,value: 0});
await instance.createPromoKitty(382601958, coo, {from: coo,value: 0});
await instance.createPromoKitty(919202296, coo, {from: coo,value: 0});
await instance.createPromoKitty(556027165, coo, {from: coo,value: 0});
await instance.createPromoKitty(722706626, coo, {from: coo,value: 0});
await instance.createPromoKitty(982144122, coo, {from: coo,value: 0});
await instance.createPromoKitty(725036183, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(24, 40, {from: coo});
await instance.breedWith(22, 35, {from: coo});
await instance.breedWith(21, 30, {from: coo});
await instance.breedWith(26, 29, {from: coo});
await instance.breedWith(17, 13, {from: coo});
await instance.breedWith(2, 33, {from: coo});
await instance.breedWith(34, 12, {from: coo});
await instance.breedWith(9, 20, {from: coo});
await instance.breedWith(27, 15, {from: coo});
await instance.breedWith(6, 28, {from: coo});
await instance.breedWith(37, 4, {from: coo});
await instance.breedWith(18, 19, {from: coo});
await instance.breedWith(7, 36, {from: coo});
await instance.breedWith(25, 11, {from: coo});
await instance.breedWith(5, 16, {from: coo});
await instance.breedWith(10, 31, {from: coo});
await instance.breedWith(23, 8, {from: coo});
await instance.breedWith(39, 14, {from: coo});
await instance.breedWith(1, 3, {from: coo});
await instance.breedWith(38, 32, {from: coo});
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
await instance.giveBirth(24);
await instance.giveBirth(22);
await instance.giveBirth(21);
await instance.giveBirth(26);
await instance.giveBirth(17);
await instance.giveBirth(2);
await instance.giveBirth(34);
await instance.giveBirth(9);
await instance.giveBirth(27);
await instance.giveBirth(6);
await instance.giveBirth(37);
await instance.giveBirth(18);
await instance.giveBirth(7);
await instance.giveBirth(25);
await instance.giveBirth(5);
await instance.giveBirth(10);
await instance.giveBirth(23);
await instance.giveBirth(39);
await instance.giveBirth(1);
await instance.giveBirth(38);
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
