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
await instance.createPromoKitty(692604914, coo, {from: coo,value: 0});
await instance.createPromoKitty(493980685, coo, {from: coo,value: 0});
await instance.createPromoKitty(504384377, coo, {from: coo,value: 0});
await instance.createPromoKitty(441441242, coo, {from: coo,value: 0});
await instance.createPromoKitty(588233794, coo, {from: coo,value: 0});
await instance.createPromoKitty(495306777, coo, {from: coo,value: 0});
await instance.createPromoKitty(549074344, coo, {from: coo,value: 0});
await instance.createPromoKitty(489200149, coo, {from: coo,value: 0});
await instance.createPromoKitty(367392821, coo, {from: coo,value: 0});
await instance.createPromoKitty(342383456, coo, {from: coo,value: 0});
await instance.createPromoKitty(985264189, coo, {from: coo,value: 0});
await instance.createPromoKitty(437617877, coo, {from: coo,value: 0});
await instance.createPromoKitty(108559803, coo, {from: coo,value: 0});
await instance.createPromoKitty(86780417, coo, {from: coo,value: 0});
await instance.createPromoKitty(827043220, coo, {from: coo,value: 0});
await instance.createPromoKitty(718535033, coo, {from: coo,value: 0});
await instance.createPromoKitty(738646975, coo, {from: coo,value: 0});
await instance.createPromoKitty(563825174, coo, {from: coo,value: 0});
await instance.createPromoKitty(398544407, coo, {from: coo,value: 0});
await instance.createPromoKitty(329726548, coo, {from: coo,value: 0});
await instance.createPromoKitty(328175089, coo, {from: coo,value: 0});
await instance.createPromoKitty(672419865, coo, {from: coo,value: 0});
await instance.createPromoKitty(18858136, coo, {from: coo,value: 0});
await instance.createPromoKitty(853626838, coo, {from: coo,value: 0});
await instance.createPromoKitty(302120940, coo, {from: coo,value: 0});
await instance.createPromoKitty(785299564, coo, {from: coo,value: 0});
await instance.createPromoKitty(342944927, coo, {from: coo,value: 0});
await instance.createPromoKitty(978296424, coo, {from: coo,value: 0});
await instance.createPromoKitty(125904420, coo, {from: coo,value: 0});
await instance.createPromoKitty(24641846, coo, {from: coo,value: 0});
await instance.createPromoKitty(887448959, coo, {from: coo,value: 0});
await instance.createPromoKitty(321047224, coo, {from: coo,value: 0});
await instance.createPromoKitty(570377757, coo, {from: coo,value: 0});
await instance.createPromoKitty(360190308, coo, {from: coo,value: 0});
await instance.createPromoKitty(92763281, coo, {from: coo,value: 0});
await instance.createPromoKitty(268512428, coo, {from: coo,value: 0});
await instance.createPromoKitty(782836302, coo, {from: coo,value: 0});
await instance.createPromoKitty(588966743, coo, {from: coo,value: 0});
await instance.createPromoKitty(834594666, coo, {from: coo,value: 0});
await instance.createPromoKitty(49913656, coo, {from: coo,value: 0});
await instance.createPromoKitty(215936003, coo, {from: coo,value: 0});
await instance.createPromoKitty(454838732, coo, {from: coo,value: 0});
await instance.createPromoKitty(72720647, coo, {from: coo,value: 0});
await instance.createPromoKitty(135716551, coo, {from: coo,value: 0});
await instance.createPromoKitty(927196949, coo, {from: coo,value: 0});
await instance.createPromoKitty(968427501, coo, {from: coo,value: 0});
await instance.createPromoKitty(568645292, coo, {from: coo,value: 0});
await instance.createPromoKitty(297760854, coo, {from: coo,value: 0});
await instance.createPromoKitty(940658913, coo, {from: coo,value: 0});
await instance.createPromoKitty(860831105, coo, {from: coo,value: 0});
await instance.createPromoKitty(185544365, coo, {from: coo,value: 0});
await instance.createPromoKitty(662572940, coo, {from: coo,value: 0});
await instance.createPromoKitty(527126077, coo, {from: coo,value: 0});
await instance.createPromoKitty(849854247, coo, {from: coo,value: 0});
await instance.createPromoKitty(813594408, coo, {from: coo,value: 0});
await instance.createPromoKitty(105827204, coo, {from: coo,value: 0});
await instance.createPromoKitty(950325796, coo, {from: coo,value: 0});
await instance.createPromoKitty(540473975, coo, {from: coo,value: 0});
await instance.createPromoKitty(870800735, coo, {from: coo,value: 0});
await instance.createPromoKitty(856749031, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(31, 29, {from: coo});
await instance.breedWith(6, 36, {from: coo});
await instance.breedWith(11, 22, {from: coo});
await instance.breedWith(17, 14, {from: coo});
await instance.breedWith(25, 40, {from: coo});
await instance.breedWith(12, 19, {from: coo});
await instance.breedWith(5, 38, {from: coo});
await instance.breedWith(10, 24, {from: coo});
await instance.breedWith(7, 27, {from: coo});
await instance.breedWith(15, 4, {from: coo});
await instance.breedWith(13, 20, {from: coo});
await instance.breedWith(16, 23, {from: coo});
await instance.breedWith(9, 26, {from: coo});
await instance.breedWith(37, 34, {from: coo});
await instance.breedWith(21, 35, {from: coo});
await instance.breedWith(33, 28, {from: coo});
await instance.breedWith(1, 30, {from: coo});
await instance.breedWith(39, 8, {from: coo});
await instance.breedWith(3, 2, {from: coo});
await instance.breedWith(32, 18, {from: coo});
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
await instance.giveBirth(31);
await instance.giveBirth(6);
await instance.giveBirth(11);
await instance.giveBirth(17);
await instance.giveBirth(25);
await instance.giveBirth(12);
await instance.giveBirth(5);
await instance.giveBirth(10);
await instance.giveBirth(7);
await instance.giveBirth(15);
await instance.giveBirth(13);
await instance.giveBirth(16);
await instance.giveBirth(9);
await instance.giveBirth(37);
await instance.giveBirth(21);
await instance.giveBirth(33);
await instance.giveBirth(1);
await instance.giveBirth(39);
await instance.giveBirth(3);
await instance.giveBirth(32);
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
