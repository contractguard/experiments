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
await instance.createPromoKitty(578499538, coo, {from: coo,value: 0});
await instance.createPromoKitty(641897865, coo, {from: coo,value: 0});
await instance.createPromoKitty(234309862, coo, {from: coo,value: 0});
await instance.createPromoKitty(834893721, coo, {from: coo,value: 0});
await instance.createPromoKitty(40752409, coo, {from: coo,value: 0});
await instance.createPromoKitty(356681360, coo, {from: coo,value: 0});
await instance.createPromoKitty(901808031, coo, {from: coo,value: 0});
await instance.createPromoKitty(600156573, coo, {from: coo,value: 0});
await instance.createPromoKitty(339581958, coo, {from: coo,value: 0});
await instance.createPromoKitty(81704498, coo, {from: coo,value: 0});
await instance.createPromoKitty(939480999, coo, {from: coo,value: 0});
await instance.createPromoKitty(509287680, coo, {from: coo,value: 0});
await instance.createPromoKitty(602961566, coo, {from: coo,value: 0});
await instance.createPromoKitty(133732132, coo, {from: coo,value: 0});
await instance.createPromoKitty(444167359, coo, {from: coo,value: 0});
await instance.createPromoKitty(689772172, coo, {from: coo,value: 0});
await instance.createPromoKitty(37013638, coo, {from: coo,value: 0});
await instance.createPromoKitty(126899319, coo, {from: coo,value: 0});
await instance.createPromoKitty(454837378, coo, {from: coo,value: 0});
await instance.createPromoKitty(92909645, coo, {from: coo,value: 0});
await instance.createPromoKitty(521163163, coo, {from: coo,value: 0});
await instance.createPromoKitty(130520246, coo, {from: coo,value: 0});
await instance.createPromoKitty(841670997, coo, {from: coo,value: 0});
await instance.createPromoKitty(482773917, coo, {from: coo,value: 0});
await instance.createPromoKitty(387336837, coo, {from: coo,value: 0});
await instance.createPromoKitty(852206593, coo, {from: coo,value: 0});
await instance.createPromoKitty(921326356, coo, {from: coo,value: 0});
await instance.createPromoKitty(584161902, coo, {from: coo,value: 0});
await instance.createPromoKitty(419758718, coo, {from: coo,value: 0});
await instance.createPromoKitty(228666795, coo, {from: coo,value: 0});
await instance.createPromoKitty(619583533, coo, {from: coo,value: 0});
await instance.createPromoKitty(376868313, coo, {from: coo,value: 0});
await instance.createPromoKitty(598349630, coo, {from: coo,value: 0});
await instance.createPromoKitty(327645803, coo, {from: coo,value: 0});
await instance.createPromoKitty(420934088, coo, {from: coo,value: 0});
await instance.createPromoKitty(375646496, coo, {from: coo,value: 0});
await instance.createPromoKitty(728221003, coo, {from: coo,value: 0});
await instance.createPromoKitty(831267513, coo, {from: coo,value: 0});
await instance.createPromoKitty(223212356, coo, {from: coo,value: 0});
await instance.createPromoKitty(28567548, coo, {from: coo,value: 0});
await instance.createPromoKitty(645200581, coo, {from: coo,value: 0});
await instance.createPromoKitty(626853190, coo, {from: coo,value: 0});
await instance.createPromoKitty(69072928, coo, {from: coo,value: 0});
await instance.createPromoKitty(969058067, coo, {from: coo,value: 0});
await instance.createPromoKitty(352320761, coo, {from: coo,value: 0});
await instance.createPromoKitty(285947263, coo, {from: coo,value: 0});
await instance.createPromoKitty(963419399, coo, {from: coo,value: 0});
await instance.createPromoKitty(948884170, coo, {from: coo,value: 0});
await instance.createPromoKitty(834155105, coo, {from: coo,value: 0});
await instance.createPromoKitty(956901296, coo, {from: coo,value: 0});
await instance.createPromoKitty(706008721, coo, {from: coo,value: 0});
await instance.createPromoKitty(408049126, coo, {from: coo,value: 0});
await instance.createPromoKitty(9780933, coo, {from: coo,value: 0});
await instance.createPromoKitty(700330143, coo, {from: coo,value: 0});
await instance.createPromoKitty(35391117, coo, {from: coo,value: 0});
await instance.createPromoKitty(557343811, coo, {from: coo,value: 0});
await instance.createPromoKitty(894470494, coo, {from: coo,value: 0});
await instance.createPromoKitty(451692601, coo, {from: coo,value: 0});
await instance.createPromoKitty(924026030, coo, {from: coo,value: 0});
await instance.createPromoKitty(162239441, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(35, 16, {from: coo});
await instance.breedWith(25, 10, {from: coo});
await instance.breedWith(19, 21, {from: coo});
await instance.breedWith(3, 5, {from: coo});
await instance.breedWith(30, 37, {from: coo});
await instance.breedWith(26, 6, {from: coo});
await instance.breedWith(23, 27, {from: coo});
await instance.breedWith(1, 24, {from: coo});
await instance.breedWith(29, 36, {from: coo});
await instance.breedWith(12, 22, {from: coo});
await instance.breedWith(9, 31, {from: coo});
await instance.breedWith(7, 8, {from: coo});
await instance.breedWith(4, 40, {from: coo});
await instance.breedWith(18, 28, {from: coo});
await instance.breedWith(20, 17, {from: coo});
await instance.breedWith(39, 14, {from: coo});
await instance.breedWith(34, 2, {from: coo});
await instance.breedWith(32, 11, {from: coo});
await instance.breedWith(38, 15, {from: coo});
await instance.breedWith(33, 13, {from: coo});
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
await instance.giveBirth(35);
await instance.giveBirth(25);
await instance.giveBirth(19);
await instance.giveBirth(3);
await instance.giveBirth(30);
await instance.giveBirth(26);
await instance.giveBirth(23);
await instance.giveBirth(1);
await instance.giveBirth(29);
await instance.giveBirth(12);
await instance.giveBirth(9);
await instance.giveBirth(7);
await instance.giveBirth(4);
await instance.giveBirth(18);
await instance.giveBirth(20);
await instance.giveBirth(39);
await instance.giveBirth(34);
await instance.giveBirth(32);
await instance.giveBirth(38);
await instance.giveBirth(33);
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
