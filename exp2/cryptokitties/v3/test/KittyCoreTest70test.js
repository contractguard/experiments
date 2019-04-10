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
await instance.createPromoKitty(556250994, coo, {from: coo,value: 0});
await instance.createPromoKitty(802385902, coo, {from: coo,value: 0});
await instance.createPromoKitty(18325236, coo, {from: coo,value: 0});
await instance.createPromoKitty(196617651, coo, {from: coo,value: 0});
await instance.createPromoKitty(254386644, coo, {from: coo,value: 0});
await instance.createPromoKitty(18177397, coo, {from: coo,value: 0});
await instance.createPromoKitty(684128163, coo, {from: coo,value: 0});
await instance.createPromoKitty(29699972, coo, {from: coo,value: 0});
await instance.createPromoKitty(914672793, coo, {from: coo,value: 0});
await instance.createPromoKitty(306457762, coo, {from: coo,value: 0});
await instance.createPromoKitty(507714237, coo, {from: coo,value: 0});
await instance.createPromoKitty(929027525, coo, {from: coo,value: 0});
await instance.createPromoKitty(165808136, coo, {from: coo,value: 0});
await instance.createPromoKitty(708628348, coo, {from: coo,value: 0});
await instance.createPromoKitty(698817661, coo, {from: coo,value: 0});
await instance.createPromoKitty(89066281, coo, {from: coo,value: 0});
await instance.createPromoKitty(917827711, coo, {from: coo,value: 0});
await instance.createPromoKitty(458368664, coo, {from: coo,value: 0});
await instance.createPromoKitty(394614078, coo, {from: coo,value: 0});
await instance.createPromoKitty(423727704, coo, {from: coo,value: 0});
await instance.createPromoKitty(212092809, coo, {from: coo,value: 0});
await instance.createPromoKitty(519255832, coo, {from: coo,value: 0});
await instance.createPromoKitty(193311402, coo, {from: coo,value: 0});
await instance.createPromoKitty(131884416, coo, {from: coo,value: 0});
await instance.createPromoKitty(159313805, coo, {from: coo,value: 0});
await instance.createPromoKitty(650394786, coo, {from: coo,value: 0});
await instance.createPromoKitty(770895962, coo, {from: coo,value: 0});
await instance.createPromoKitty(35468591, coo, {from: coo,value: 0});
await instance.createPromoKitty(869334877, coo, {from: coo,value: 0});
await instance.createPromoKitty(843977755, coo, {from: coo,value: 0});
await instance.createPromoKitty(827107096, coo, {from: coo,value: 0});
await instance.createPromoKitty(106047976, coo, {from: coo,value: 0});
await instance.createPromoKitty(697625014, coo, {from: coo,value: 0});
await instance.createPromoKitty(202686864, coo, {from: coo,value: 0});
await instance.createPromoKitty(497559655, coo, {from: coo,value: 0});
await instance.createPromoKitty(569680558, coo, {from: coo,value: 0});
await instance.createPromoKitty(421522130, coo, {from: coo,value: 0});
await instance.createPromoKitty(910477303, coo, {from: coo,value: 0});
await instance.createPromoKitty(41201795, coo, {from: coo,value: 0});
await instance.createPromoKitty(214492576, coo, {from: coo,value: 0});
await instance.createPromoKitty(187527625, coo, {from: coo,value: 0});
await instance.createPromoKitty(904116014, coo, {from: coo,value: 0});
await instance.createPromoKitty(805839973, coo, {from: coo,value: 0});
await instance.createPromoKitty(418086999, coo, {from: coo,value: 0});
await instance.createPromoKitty(818436562, coo, {from: coo,value: 0});
await instance.createPromoKitty(821800084, coo, {from: coo,value: 0});
await instance.createPromoKitty(277967154, coo, {from: coo,value: 0});
await instance.createPromoKitty(256565221, coo, {from: coo,value: 0});
await instance.createPromoKitty(77735477, coo, {from: coo,value: 0});
await instance.createPromoKitty(397506023, coo, {from: coo,value: 0});
await instance.createPromoKitty(517906145, coo, {from: coo,value: 0});
await instance.createPromoKitty(829881322, coo, {from: coo,value: 0});
await instance.createPromoKitty(507965504, coo, {from: coo,value: 0});
await instance.createPromoKitty(673552037, coo, {from: coo,value: 0});
await instance.createPromoKitty(51595984, coo, {from: coo,value: 0});
await instance.createPromoKitty(48871290, coo, {from: coo,value: 0});
await instance.createPromoKitty(95740358, coo, {from: coo,value: 0});
await instance.createPromoKitty(185361984, coo, {from: coo,value: 0});
await instance.createPromoKitty(791254750, coo, {from: coo,value: 0});
await instance.createPromoKitty(665997196, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(10, 5, {from: coo});
await instance.breedWith(33, 25, {from: coo});
await instance.breedWith(17, 3, {from: coo});
await instance.breedWith(16, 15, {from: coo});
await instance.breedWith(26, 38, {from: coo});
await instance.breedWith(4, 11, {from: coo});
await instance.breedWith(9, 14, {from: coo});
await instance.breedWith(21, 2, {from: coo});
await instance.breedWith(24, 28, {from: coo});
await instance.breedWith(36, 39, {from: coo});
await instance.breedWith(13, 20, {from: coo});
await instance.breedWith(37, 18, {from: coo});
await instance.breedWith(6, 35, {from: coo});
await instance.breedWith(12, 40, {from: coo});
await instance.breedWith(19, 29, {from: coo});
await instance.breedWith(31, 32, {from: coo});
await instance.breedWith(8, 7, {from: coo});
await instance.breedWith(22, 23, {from: coo});
await instance.breedWith(30, 34, {from: coo});
await instance.breedWith(27, 1, {from: coo});
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
await instance.giveBirth(33);
await instance.giveBirth(17);
await instance.giveBirth(16);
await instance.giveBirth(26);
await instance.giveBirth(4);
await instance.giveBirth(9);
await instance.giveBirth(21);
await instance.giveBirth(24);
await instance.giveBirth(36);
await instance.giveBirth(13);
await instance.giveBirth(37);
await instance.giveBirth(6);
await instance.giveBirth(12);
await instance.giveBirth(19);
await instance.giveBirth(31);
await instance.giveBirth(8);
await instance.giveBirth(22);
await instance.giveBirth(30);
await instance.giveBirth(27);
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
