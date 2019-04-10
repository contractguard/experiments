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
await instance.createPromoKitty(515481446, coo, {from: coo,value: 0});
await instance.createPromoKitty(336632325, coo, {from: coo,value: 0});
await instance.createPromoKitty(994140059, coo, {from: coo,value: 0});
await instance.createPromoKitty(273027966, coo, {from: coo,value: 0});
await instance.createPromoKitty(848929611, coo, {from: coo,value: 0});
await instance.createPromoKitty(126528186, coo, {from: coo,value: 0});
await instance.createPromoKitty(439601116, coo, {from: coo,value: 0});
await instance.createPromoKitty(982075479, coo, {from: coo,value: 0});
await instance.createPromoKitty(364368149, coo, {from: coo,value: 0});
await instance.createPromoKitty(788326725, coo, {from: coo,value: 0});
await instance.createPromoKitty(558181086, coo, {from: coo,value: 0});
await instance.createPromoKitty(334909385, coo, {from: coo,value: 0});
await instance.createPromoKitty(87434409, coo, {from: coo,value: 0});
await instance.createPromoKitty(111315384, coo, {from: coo,value: 0});
await instance.createPromoKitty(805425210, coo, {from: coo,value: 0});
await instance.createPromoKitty(536402993, coo, {from: coo,value: 0});
await instance.createPromoKitty(375686254, coo, {from: coo,value: 0});
await instance.createPromoKitty(784463732, coo, {from: coo,value: 0});
await instance.createPromoKitty(407029328, coo, {from: coo,value: 0});
await instance.createPromoKitty(112281120, coo, {from: coo,value: 0});
await instance.createPromoKitty(423874277, coo, {from: coo,value: 0});
await instance.createPromoKitty(928384605, coo, {from: coo,value: 0});
await instance.createPromoKitty(460019274, coo, {from: coo,value: 0});
await instance.createPromoKitty(185807217, coo, {from: coo,value: 0});
await instance.createPromoKitty(354345245, coo, {from: coo,value: 0});
await instance.createPromoKitty(545242523, coo, {from: coo,value: 0});
await instance.createPromoKitty(243858013, coo, {from: coo,value: 0});
await instance.createPromoKitty(577737783, coo, {from: coo,value: 0});
await instance.createPromoKitty(55687030, coo, {from: coo,value: 0});
await instance.createPromoKitty(438006419, coo, {from: coo,value: 0});
await instance.createPromoKitty(620701457, coo, {from: coo,value: 0});
await instance.createPromoKitty(273496571, coo, {from: coo,value: 0});
await instance.createPromoKitty(458212294, coo, {from: coo,value: 0});
await instance.createPromoKitty(532842225, coo, {from: coo,value: 0});
await instance.createPromoKitty(284397224, coo, {from: coo,value: 0});
await instance.createPromoKitty(811573799, coo, {from: coo,value: 0});
await instance.createPromoKitty(146018290, coo, {from: coo,value: 0});
await instance.createPromoKitty(613148493, coo, {from: coo,value: 0});
await instance.createPromoKitty(830504535, coo, {from: coo,value: 0});
await instance.createPromoKitty(511757064, coo, {from: coo,value: 0});
await instance.createPromoKitty(288731439, coo, {from: coo,value: 0});
await instance.createPromoKitty(909130501, coo, {from: coo,value: 0});
await instance.createPromoKitty(409093482, coo, {from: coo,value: 0});
await instance.createPromoKitty(522624450, coo, {from: coo,value: 0});
await instance.createPromoKitty(291914481, coo, {from: coo,value: 0});
await instance.createPromoKitty(886673498, coo, {from: coo,value: 0});
await instance.createPromoKitty(570917657, coo, {from: coo,value: 0});
await instance.createPromoKitty(785061039, coo, {from: coo,value: 0});
await instance.createPromoKitty(308446078, coo, {from: coo,value: 0});
await instance.createPromoKitty(347206373, coo, {from: coo,value: 0});
await instance.createPromoKitty(557877364, coo, {from: coo,value: 0});
await instance.createPromoKitty(448357355, coo, {from: coo,value: 0});
await instance.createPromoKitty(103203164, coo, {from: coo,value: 0});
await instance.createPromoKitty(255445454, coo, {from: coo,value: 0});
await instance.createPromoKitty(223770239, coo, {from: coo,value: 0});
await instance.createPromoKitty(463454628, coo, {from: coo,value: 0});
await instance.createPromoKitty(295501887, coo, {from: coo,value: 0});
await instance.createPromoKitty(265215463, coo, {from: coo,value: 0});
await instance.createPromoKitty(917885729, coo, {from: coo,value: 0});
await instance.createPromoKitty(515067229, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(10, 34, {from: coo});
await instance.breedWith(8, 19, {from: coo});
await instance.breedWith(6, 37, {from: coo});
await instance.breedWith(20, 35, {from: coo});
await instance.breedWith(23, 33, {from: coo});
await instance.breedWith(27, 5, {from: coo});
await instance.breedWith(26, 14, {from: coo});
await instance.breedWith(28, 31, {from: coo});
await instance.breedWith(4, 11, {from: coo});
await instance.breedWith(38, 39, {from: coo});
await instance.breedWith(16, 18, {from: coo});
await instance.breedWith(32, 13, {from: coo});
await instance.breedWith(30, 1, {from: coo});
await instance.breedWith(9, 29, {from: coo});
await instance.breedWith(3, 12, {from: coo});
await instance.breedWith(2, 15, {from: coo});
await instance.breedWith(25, 22, {from: coo});
await instance.breedWith(17, 21, {from: coo});
await instance.breedWith(40, 24, {from: coo});
await instance.breedWith(36, 7, {from: coo});
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
await instance.giveBirth(10);
await instance.giveBirth(8);
await instance.giveBirth(6);
await instance.giveBirth(20);
await instance.giveBirth(23);
await instance.giveBirth(27);
await instance.giveBirth(26);
await instance.giveBirth(28);
await instance.giveBirth(4);
await instance.giveBirth(38);
await instance.giveBirth(16);
await instance.giveBirth(32);
await instance.giveBirth(30);
await instance.giveBirth(9);
await instance.giveBirth(3);
await instance.giveBirth(2);
await instance.giveBirth(25);
await instance.giveBirth(17);
await instance.giveBirth(40);
await instance.giveBirth(36);
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
