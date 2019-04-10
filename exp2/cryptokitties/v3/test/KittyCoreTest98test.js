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
await instance.createPromoKitty(94861968, coo, {from: coo,value: 0});
await instance.createPromoKitty(328723601, coo, {from: coo,value: 0});
await instance.createPromoKitty(642158726, coo, {from: coo,value: 0});
await instance.createPromoKitty(719304093, coo, {from: coo,value: 0});
await instance.createPromoKitty(470049547, coo, {from: coo,value: 0});
await instance.createPromoKitty(555079271, coo, {from: coo,value: 0});
await instance.createPromoKitty(545955395, coo, {from: coo,value: 0});
await instance.createPromoKitty(463204061, coo, {from: coo,value: 0});
await instance.createPromoKitty(599248265, coo, {from: coo,value: 0});
await instance.createPromoKitty(785129484, coo, {from: coo,value: 0});
await instance.createPromoKitty(629490424, coo, {from: coo,value: 0});
await instance.createPromoKitty(702077038, coo, {from: coo,value: 0});
await instance.createPromoKitty(650294356, coo, {from: coo,value: 0});
await instance.createPromoKitty(46524578, coo, {from: coo,value: 0});
await instance.createPromoKitty(53282339, coo, {from: coo,value: 0});
await instance.createPromoKitty(644206523, coo, {from: coo,value: 0});
await instance.createPromoKitty(898767111, coo, {from: coo,value: 0});
await instance.createPromoKitty(884054570, coo, {from: coo,value: 0});
await instance.createPromoKitty(399914034, coo, {from: coo,value: 0});
await instance.createPromoKitty(191185964, coo, {from: coo,value: 0});
await instance.createPromoKitty(877406109, coo, {from: coo,value: 0});
await instance.createPromoKitty(94379942, coo, {from: coo,value: 0});
await instance.createPromoKitty(136881614, coo, {from: coo,value: 0});
await instance.createPromoKitty(154058065, coo, {from: coo,value: 0});
await instance.createPromoKitty(839997553, coo, {from: coo,value: 0});
await instance.createPromoKitty(351566866, coo, {from: coo,value: 0});
await instance.createPromoKitty(754282495, coo, {from: coo,value: 0});
await instance.createPromoKitty(346337193, coo, {from: coo,value: 0});
await instance.createPromoKitty(907330230, coo, {from: coo,value: 0});
await instance.createPromoKitty(117576867, coo, {from: coo,value: 0});
await instance.createPromoKitty(680837844, coo, {from: coo,value: 0});
await instance.createPromoKitty(215060734, coo, {from: coo,value: 0});
await instance.createPromoKitty(163480568, coo, {from: coo,value: 0});
await instance.createPromoKitty(215395591, coo, {from: coo,value: 0});
await instance.createPromoKitty(402112330, coo, {from: coo,value: 0});
await instance.createPromoKitty(187799948, coo, {from: coo,value: 0});
await instance.createPromoKitty(873202013, coo, {from: coo,value: 0});
await instance.createPromoKitty(492430901, coo, {from: coo,value: 0});
await instance.createPromoKitty(246849445, coo, {from: coo,value: 0});
await instance.createPromoKitty(906673030, coo, {from: coo,value: 0});
await instance.createPromoKitty(332557836, coo, {from: coo,value: 0});
await instance.createPromoKitty(470877544, coo, {from: coo,value: 0});
await instance.createPromoKitty(498535424, coo, {from: coo,value: 0});
await instance.createPromoKitty(748953577, coo, {from: coo,value: 0});
await instance.createPromoKitty(442610871, coo, {from: coo,value: 0});
await instance.createPromoKitty(383066983, coo, {from: coo,value: 0});
await instance.createPromoKitty(603130118, coo, {from: coo,value: 0});
await instance.createPromoKitty(486800302, coo, {from: coo,value: 0});
await instance.createPromoKitty(448127659, coo, {from: coo,value: 0});
await instance.createPromoKitty(691112552, coo, {from: coo,value: 0});
await instance.createPromoKitty(860159775, coo, {from: coo,value: 0});
await instance.createPromoKitty(26575586, coo, {from: coo,value: 0});
await instance.createPromoKitty(107255182, coo, {from: coo,value: 0});
await instance.createPromoKitty(227303498, coo, {from: coo,value: 0});
await instance.createPromoKitty(66496069, coo, {from: coo,value: 0});
await instance.createPromoKitty(365738985, coo, {from: coo,value: 0});
await instance.createPromoKitty(967820581, coo, {from: coo,value: 0});
await instance.createPromoKitty(403443756, coo, {from: coo,value: 0});
await instance.createPromoKitty(913369939, coo, {from: coo,value: 0});
await instance.createPromoKitty(97806148, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(38, 24, {from: coo});
await instance.breedWith(27, 9, {from: coo});
await instance.breedWith(35, 39, {from: coo});
await instance.breedWith(26, 4, {from: coo});
await instance.breedWith(16, 15, {from: coo});
await instance.breedWith(36, 7, {from: coo});
await instance.breedWith(5, 18, {from: coo});
await instance.breedWith(1, 11, {from: coo});
await instance.breedWith(32, 37, {from: coo});
await instance.breedWith(19, 14, {from: coo});
await instance.breedWith(31, 10, {from: coo});
await instance.breedWith(13, 22, {from: coo});
await instance.breedWith(8, 2, {from: coo});
await instance.breedWith(33, 30, {from: coo});
await instance.breedWith(6, 40, {from: coo});
await instance.breedWith(20, 12, {from: coo});
await instance.breedWith(23, 3, {from: coo});
await instance.breedWith(17, 28, {from: coo});
await instance.breedWith(21, 29, {from: coo});
await instance.breedWith(25, 34, {from: coo});
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
await instance.giveBirth(38);
await instance.giveBirth(27);
await instance.giveBirth(35);
await instance.giveBirth(26);
await instance.giveBirth(16);
await instance.giveBirth(36);
await instance.giveBirth(5);
await instance.giveBirth(1);
await instance.giveBirth(32);
await instance.giveBirth(19);
await instance.giveBirth(31);
await instance.giveBirth(13);
await instance.giveBirth(8);
await instance.giveBirth(33);
await instance.giveBirth(6);
await instance.giveBirth(20);
await instance.giveBirth(23);
await instance.giveBirth(17);
await instance.giveBirth(21);
await instance.giveBirth(25);
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
