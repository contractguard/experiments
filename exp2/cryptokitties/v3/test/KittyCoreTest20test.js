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
await instance.createPromoKitty(444179824, coo, {from: coo,value: 0});
await instance.createPromoKitty(739888293, coo, {from: coo,value: 0});
await instance.createPromoKitty(624566825, coo, {from: coo,value: 0});
await instance.createPromoKitty(789503073, coo, {from: coo,value: 0});
await instance.createPromoKitty(139956707, coo, {from: coo,value: 0});
await instance.createPromoKitty(651557415, coo, {from: coo,value: 0});
await instance.createPromoKitty(961787778, coo, {from: coo,value: 0});
await instance.createPromoKitty(913541019, coo, {from: coo,value: 0});
await instance.createPromoKitty(898983314, coo, {from: coo,value: 0});
await instance.createPromoKitty(139197870, coo, {from: coo,value: 0});
await instance.createPromoKitty(369145558, coo, {from: coo,value: 0});
await instance.createPromoKitty(729310464, coo, {from: coo,value: 0});
await instance.createPromoKitty(269775958, coo, {from: coo,value: 0});
await instance.createPromoKitty(614362551, coo, {from: coo,value: 0});
await instance.createPromoKitty(107510986, coo, {from: coo,value: 0});
await instance.createPromoKitty(913023928, coo, {from: coo,value: 0});
await instance.createPromoKitty(640767188, coo, {from: coo,value: 0});
await instance.createPromoKitty(286831072, coo, {from: coo,value: 0});
await instance.createPromoKitty(227675696, coo, {from: coo,value: 0});
await instance.createPromoKitty(557654896, coo, {from: coo,value: 0});
await instance.createPromoKitty(693961172, coo, {from: coo,value: 0});
await instance.createPromoKitty(956843225, coo, {from: coo,value: 0});
await instance.createPromoKitty(10274518, coo, {from: coo,value: 0});
await instance.createPromoKitty(25836466, coo, {from: coo,value: 0});
await instance.createPromoKitty(942759928, coo, {from: coo,value: 0});
await instance.createPromoKitty(269139884, coo, {from: coo,value: 0});
await instance.createPromoKitty(186667446, coo, {from: coo,value: 0});
await instance.createPromoKitty(767810583, coo, {from: coo,value: 0});
await instance.createPromoKitty(8771, coo, {from: coo,value: 0});
await instance.createPromoKitty(653189863, coo, {from: coo,value: 0});
await instance.createPromoKitty(825436252, coo, {from: coo,value: 0});
await instance.createPromoKitty(785423730, coo, {from: coo,value: 0});
await instance.createPromoKitty(848093227, coo, {from: coo,value: 0});
await instance.createPromoKitty(764843211, coo, {from: coo,value: 0});
await instance.createPromoKitty(232387667, coo, {from: coo,value: 0});
await instance.createPromoKitty(499230552, coo, {from: coo,value: 0});
await instance.createPromoKitty(684045382, coo, {from: coo,value: 0});
await instance.createPromoKitty(233253703, coo, {from: coo,value: 0});
await instance.createPromoKitty(219658173, coo, {from: coo,value: 0});
await instance.createPromoKitty(2589167, coo, {from: coo,value: 0});
await instance.createPromoKitty(770679658, coo, {from: coo,value: 0});
await instance.createPromoKitty(809908302, coo, {from: coo,value: 0});
await instance.createPromoKitty(629013364, coo, {from: coo,value: 0});
await instance.createPromoKitty(842800378, coo, {from: coo,value: 0});
await instance.createPromoKitty(332444795, coo, {from: coo,value: 0});
await instance.createPromoKitty(682805702, coo, {from: coo,value: 0});
await instance.createPromoKitty(638612071, coo, {from: coo,value: 0});
await instance.createPromoKitty(620034664, coo, {from: coo,value: 0});
await instance.createPromoKitty(391882161, coo, {from: coo,value: 0});
await instance.createPromoKitty(313291292, coo, {from: coo,value: 0});
await instance.createPromoKitty(494872125, coo, {from: coo,value: 0});
await instance.createPromoKitty(333612124, coo, {from: coo,value: 0});
await instance.createPromoKitty(68876639, coo, {from: coo,value: 0});
await instance.createPromoKitty(52191500, coo, {from: coo,value: 0});
await instance.createPromoKitty(839122059, coo, {from: coo,value: 0});
await instance.createPromoKitty(549900579, coo, {from: coo,value: 0});
await instance.createPromoKitty(29558038, coo, {from: coo,value: 0});
await instance.createPromoKitty(328629250, coo, {from: coo,value: 0});
await instance.createPromoKitty(621037659, coo, {from: coo,value: 0});
await instance.createPromoKitty(60564387, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(28, 9, {from: coo});
await instance.breedWith(34, 39, {from: coo});
await instance.breedWith(33, 40, {from: coo});
await instance.breedWith(36, 7, {from: coo});
await instance.breedWith(15, 29, {from: coo});
await instance.breedWith(18, 16, {from: coo});
await instance.breedWith(6, 5, {from: coo});
await instance.breedWith(26, 30, {from: coo});
await instance.breedWith(37, 2, {from: coo});
await instance.breedWith(27, 14, {from: coo});
await instance.breedWith(3, 31, {from: coo});
await instance.breedWith(25, 10, {from: coo});
await instance.breedWith(8, 11, {from: coo});
await instance.breedWith(32, 20, {from: coo});
await instance.breedWith(17, 21, {from: coo});
await instance.breedWith(4, 13, {from: coo});
await instance.breedWith(38, 24, {from: coo});
await instance.breedWith(23, 35, {from: coo});
await instance.breedWith(22, 12, {from: coo});
await instance.breedWith(1, 19, {from: coo});
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
await instance.giveBirth(28);
await instance.giveBirth(34);
await instance.giveBirth(33);
await instance.giveBirth(36);
await instance.giveBirth(15);
await instance.giveBirth(18);
await instance.giveBirth(6);
await instance.giveBirth(26);
await instance.giveBirth(37);
await instance.giveBirth(27);
await instance.giveBirth(3);
await instance.giveBirth(25);
await instance.giveBirth(8);
await instance.giveBirth(32);
await instance.giveBirth(17);
await instance.giveBirth(4);
await instance.giveBirth(38);
await instance.giveBirth(23);
await instance.giveBirth(22);
await instance.giveBirth(1);
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
