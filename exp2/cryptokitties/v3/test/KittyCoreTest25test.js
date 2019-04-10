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
await instance.createPromoKitty(37977738, coo, {from: coo,value: 0});
await instance.createPromoKitty(510672567, coo, {from: coo,value: 0});
await instance.createPromoKitty(767965039, coo, {from: coo,value: 0});
await instance.createPromoKitty(848956450, coo, {from: coo,value: 0});
await instance.createPromoKitty(376510391, coo, {from: coo,value: 0});
await instance.createPromoKitty(238649617, coo, {from: coo,value: 0});
await instance.createPromoKitty(161273232, coo, {from: coo,value: 0});
await instance.createPromoKitty(180212264, coo, {from: coo,value: 0});
await instance.createPromoKitty(646995311, coo, {from: coo,value: 0});
await instance.createPromoKitty(159332802, coo, {from: coo,value: 0});
await instance.createPromoKitty(896474676, coo, {from: coo,value: 0});
await instance.createPromoKitty(246010647, coo, {from: coo,value: 0});
await instance.createPromoKitty(972097735, coo, {from: coo,value: 0});
await instance.createPromoKitty(244371253, coo, {from: coo,value: 0});
await instance.createPromoKitty(787445195, coo, {from: coo,value: 0});
await instance.createPromoKitty(381282048, coo, {from: coo,value: 0});
await instance.createPromoKitty(897901765, coo, {from: coo,value: 0});
await instance.createPromoKitty(695063073, coo, {from: coo,value: 0});
await instance.createPromoKitty(566784786, coo, {from: coo,value: 0});
await instance.createPromoKitty(772491718, coo, {from: coo,value: 0});
await instance.createPromoKitty(113311509, coo, {from: coo,value: 0});
await instance.createPromoKitty(170238736, coo, {from: coo,value: 0});
await instance.createPromoKitty(732100363, coo, {from: coo,value: 0});
await instance.createPromoKitty(620250044, coo, {from: coo,value: 0});
await instance.createPromoKitty(638690391, coo, {from: coo,value: 0});
await instance.createPromoKitty(576623098, coo, {from: coo,value: 0});
await instance.createPromoKitty(340041523, coo, {from: coo,value: 0});
await instance.createPromoKitty(608651255, coo, {from: coo,value: 0});
await instance.createPromoKitty(646730191, coo, {from: coo,value: 0});
await instance.createPromoKitty(436118030, coo, {from: coo,value: 0});
await instance.createPromoKitty(709379993, coo, {from: coo,value: 0});
await instance.createPromoKitty(365675223, coo, {from: coo,value: 0});
await instance.createPromoKitty(784194879, coo, {from: coo,value: 0});
await instance.createPromoKitty(609483401, coo, {from: coo,value: 0});
await instance.createPromoKitty(133045508, coo, {from: coo,value: 0});
await instance.createPromoKitty(177749695, coo, {from: coo,value: 0});
await instance.createPromoKitty(416393140, coo, {from: coo,value: 0});
await instance.createPromoKitty(409736140, coo, {from: coo,value: 0});
await instance.createPromoKitty(340925470, coo, {from: coo,value: 0});
await instance.createPromoKitty(977838651, coo, {from: coo,value: 0});
await instance.createPromoKitty(759079891, coo, {from: coo,value: 0});
await instance.createPromoKitty(547705027, coo, {from: coo,value: 0});
await instance.createPromoKitty(422286648, coo, {from: coo,value: 0});
await instance.createPromoKitty(262296021, coo, {from: coo,value: 0});
await instance.createPromoKitty(929238398, coo, {from: coo,value: 0});
await instance.createPromoKitty(18016859, coo, {from: coo,value: 0});
await instance.createPromoKitty(108153059, coo, {from: coo,value: 0});
await instance.createPromoKitty(874483805, coo, {from: coo,value: 0});
await instance.createPromoKitty(729700862, coo, {from: coo,value: 0});
await instance.createPromoKitty(177048664, coo, {from: coo,value: 0});
await instance.createPromoKitty(215833862, coo, {from: coo,value: 0});
await instance.createPromoKitty(224810183, coo, {from: coo,value: 0});
await instance.createPromoKitty(578500665, coo, {from: coo,value: 0});
await instance.createPromoKitty(215959166, coo, {from: coo,value: 0});
await instance.createPromoKitty(48075770, coo, {from: coo,value: 0});
await instance.createPromoKitty(717605151, coo, {from: coo,value: 0});
await instance.createPromoKitty(421388251, coo, {from: coo,value: 0});
await instance.createPromoKitty(297994235, coo, {from: coo,value: 0});
await instance.createPromoKitty(845731999, coo, {from: coo,value: 0});
await instance.createPromoKitty(890768602, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(15, 22, {from: coo});
await instance.breedWith(37, 31, {from: coo});
await instance.breedWith(19, 29, {from: coo});
await instance.breedWith(28, 36, {from: coo});
await instance.breedWith(24, 18, {from: coo});
await instance.breedWith(34, 11, {from: coo});
await instance.breedWith(8, 27, {from: coo});
await instance.breedWith(16, 6, {from: coo});
await instance.breedWith(33, 25, {from: coo});
await instance.breedWith(2, 38, {from: coo});
await instance.breedWith(26, 10, {from: coo});
await instance.breedWith(23, 30, {from: coo});
await instance.breedWith(14, 1, {from: coo});
await instance.breedWith(5, 39, {from: coo});
await instance.breedWith(4, 20, {from: coo});
await instance.breedWith(17, 7, {from: coo});
await instance.breedWith(21, 40, {from: coo});
await instance.breedWith(3, 35, {from: coo});
await instance.breedWith(13, 9, {from: coo});
await instance.breedWith(12, 32, {from: coo});
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
await instance.giveBirth(15);
await instance.giveBirth(37);
await instance.giveBirth(19);
await instance.giveBirth(28);
await instance.giveBirth(24);
await instance.giveBirth(34);
await instance.giveBirth(8);
await instance.giveBirth(16);
await instance.giveBirth(33);
await instance.giveBirth(2);
await instance.giveBirth(26);
await instance.giveBirth(23);
await instance.giveBirth(14);
await instance.giveBirth(5);
await instance.giveBirth(4);
await instance.giveBirth(17);
await instance.giveBirth(21);
await instance.giveBirth(3);
await instance.giveBirth(13);
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
