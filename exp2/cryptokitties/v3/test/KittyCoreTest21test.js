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
await instance.createPromoKitty(667660746, coo, {from: coo,value: 0});
await instance.createPromoKitty(262379431, coo, {from: coo,value: 0});
await instance.createPromoKitty(725637508, coo, {from: coo,value: 0});
await instance.createPromoKitty(184707177, coo, {from: coo,value: 0});
await instance.createPromoKitty(518672278, coo, {from: coo,value: 0});
await instance.createPromoKitty(6085901, coo, {from: coo,value: 0});
await instance.createPromoKitty(243263542, coo, {from: coo,value: 0});
await instance.createPromoKitty(152604236, coo, {from: coo,value: 0});
await instance.createPromoKitty(233562150, coo, {from: coo,value: 0});
await instance.createPromoKitty(692633816, coo, {from: coo,value: 0});
await instance.createPromoKitty(678399238, coo, {from: coo,value: 0});
await instance.createPromoKitty(129509282, coo, {from: coo,value: 0});
await instance.createPromoKitty(414217759, coo, {from: coo,value: 0});
await instance.createPromoKitty(210908674, coo, {from: coo,value: 0});
await instance.createPromoKitty(973926881, coo, {from: coo,value: 0});
await instance.createPromoKitty(778010333, coo, {from: coo,value: 0});
await instance.createPromoKitty(885766351, coo, {from: coo,value: 0});
await instance.createPromoKitty(11495898, coo, {from: coo,value: 0});
await instance.createPromoKitty(646508298, coo, {from: coo,value: 0});
await instance.createPromoKitty(125293404, coo, {from: coo,value: 0});
await instance.createPromoKitty(340155641, coo, {from: coo,value: 0});
await instance.createPromoKitty(659936714, coo, {from: coo,value: 0});
await instance.createPromoKitty(920440776, coo, {from: coo,value: 0});
await instance.createPromoKitty(695980802, coo, {from: coo,value: 0});
await instance.createPromoKitty(51058136, coo, {from: coo,value: 0});
await instance.createPromoKitty(707386685, coo, {from: coo,value: 0});
await instance.createPromoKitty(506429322, coo, {from: coo,value: 0});
await instance.createPromoKitty(681063041, coo, {from: coo,value: 0});
await instance.createPromoKitty(604435382, coo, {from: coo,value: 0});
await instance.createPromoKitty(540095298, coo, {from: coo,value: 0});
await instance.createPromoKitty(705623551, coo, {from: coo,value: 0});
await instance.createPromoKitty(968751766, coo, {from: coo,value: 0});
await instance.createPromoKitty(719898269, coo, {from: coo,value: 0});
await instance.createPromoKitty(908975125, coo, {from: coo,value: 0});
await instance.createPromoKitty(820218318, coo, {from: coo,value: 0});
await instance.createPromoKitty(936459259, coo, {from: coo,value: 0});
await instance.createPromoKitty(775495036, coo, {from: coo,value: 0});
await instance.createPromoKitty(752321652, coo, {from: coo,value: 0});
await instance.createPromoKitty(412568185, coo, {from: coo,value: 0});
await instance.createPromoKitty(62137762, coo, {from: coo,value: 0});
await instance.createPromoKitty(18914442, coo, {from: coo,value: 0});
await instance.createPromoKitty(336541865, coo, {from: coo,value: 0});
await instance.createPromoKitty(176209031, coo, {from: coo,value: 0});
await instance.createPromoKitty(664350498, coo, {from: coo,value: 0});
await instance.createPromoKitty(832015439, coo, {from: coo,value: 0});
await instance.createPromoKitty(224477542, coo, {from: coo,value: 0});
await instance.createPromoKitty(212413840, coo, {from: coo,value: 0});
await instance.createPromoKitty(530102975, coo, {from: coo,value: 0});
await instance.createPromoKitty(167247136, coo, {from: coo,value: 0});
await instance.createPromoKitty(826350261, coo, {from: coo,value: 0});
await instance.createPromoKitty(106942888, coo, {from: coo,value: 0});
await instance.createPromoKitty(389602043, coo, {from: coo,value: 0});
await instance.createPromoKitty(364758176, coo, {from: coo,value: 0});
await instance.createPromoKitty(733620688, coo, {from: coo,value: 0});
await instance.createPromoKitty(274502001, coo, {from: coo,value: 0});
await instance.createPromoKitty(305571113, coo, {from: coo,value: 0});
await instance.createPromoKitty(870955950, coo, {from: coo,value: 0});
await instance.createPromoKitty(579945703, coo, {from: coo,value: 0});
await instance.createPromoKitty(278362054, coo, {from: coo,value: 0});
await instance.createPromoKitty(532566673, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(12, 14, {from: coo});
await instance.breedWith(17, 29, {from: coo});
await instance.breedWith(22, 30, {from: coo});
await instance.breedWith(11, 23, {from: coo});
await instance.breedWith(15, 26, {from: coo});
await instance.breedWith(6, 18, {from: coo});
await instance.breedWith(37, 25, {from: coo});
await instance.breedWith(16, 40, {from: coo});
await instance.breedWith(13, 32, {from: coo});
await instance.breedWith(35, 24, {from: coo});
await instance.breedWith(33, 20, {from: coo});
await instance.breedWith(1, 9, {from: coo});
await instance.breedWith(27, 7, {from: coo});
await instance.breedWith(34, 28, {from: coo});
await instance.breedWith(36, 21, {from: coo});
await instance.breedWith(4, 31, {from: coo});
await instance.breedWith(5, 8, {from: coo});
await instance.breedWith(38, 39, {from: coo});
await instance.breedWith(19, 2, {from: coo});
await instance.breedWith(10, 3, {from: coo});
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
await instance.giveBirth(12);
await instance.giveBirth(17);
await instance.giveBirth(22);
await instance.giveBirth(11);
await instance.giveBirth(15);
await instance.giveBirth(6);
await instance.giveBirth(37);
await instance.giveBirth(16);
await instance.giveBirth(13);
await instance.giveBirth(35);
await instance.giveBirth(33);
await instance.giveBirth(1);
await instance.giveBirth(27);
await instance.giveBirth(34);
await instance.giveBirth(36);
await instance.giveBirth(4);
await instance.giveBirth(5);
await instance.giveBirth(38);
await instance.giveBirth(19);
await instance.giveBirth(10);
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
