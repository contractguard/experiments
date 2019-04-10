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
await instance.createPromoKitty(42452809, coo, {from: coo,value: 0});
await instance.createPromoKitty(664022917, coo, {from: coo,value: 0});
await instance.createPromoKitty(300201411, coo, {from: coo,value: 0});
await instance.createPromoKitty(334282364, coo, {from: coo,value: 0});
await instance.createPromoKitty(851417776, coo, {from: coo,value: 0});
await instance.createPromoKitty(822684128, coo, {from: coo,value: 0});
await instance.createPromoKitty(310298373, coo, {from: coo,value: 0});
await instance.createPromoKitty(986601810, coo, {from: coo,value: 0});
await instance.createPromoKitty(623689818, coo, {from: coo,value: 0});
await instance.createPromoKitty(845793104, coo, {from: coo,value: 0});
await instance.createPromoKitty(781322562, coo, {from: coo,value: 0});
await instance.createPromoKitty(577699716, coo, {from: coo,value: 0});
await instance.createPromoKitty(594013117, coo, {from: coo,value: 0});
await instance.createPromoKitty(956441811, coo, {from: coo,value: 0});
await instance.createPromoKitty(92261771, coo, {from: coo,value: 0});
await instance.createPromoKitty(801486070, coo, {from: coo,value: 0});
await instance.createPromoKitty(198195665, coo, {from: coo,value: 0});
await instance.createPromoKitty(844127416, coo, {from: coo,value: 0});
await instance.createPromoKitty(150680047, coo, {from: coo,value: 0});
await instance.createPromoKitty(698126774, coo, {from: coo,value: 0});
await instance.createPromoKitty(218932452, coo, {from: coo,value: 0});
await instance.createPromoKitty(201877364, coo, {from: coo,value: 0});
await instance.createPromoKitty(834517368, coo, {from: coo,value: 0});
await instance.createPromoKitty(954960961, coo, {from: coo,value: 0});
await instance.createPromoKitty(618414266, coo, {from: coo,value: 0});
await instance.createPromoKitty(104118700, coo, {from: coo,value: 0});
await instance.createPromoKitty(723666883, coo, {from: coo,value: 0});
await instance.createPromoKitty(204139402, coo, {from: coo,value: 0});
await instance.createPromoKitty(719595685, coo, {from: coo,value: 0});
await instance.createPromoKitty(19662754, coo, {from: coo,value: 0});
await instance.createPromoKitty(876285139, coo, {from: coo,value: 0});
await instance.createPromoKitty(568122088, coo, {from: coo,value: 0});
await instance.createPromoKitty(461971115, coo, {from: coo,value: 0});
await instance.createPromoKitty(91523169, coo, {from: coo,value: 0});
await instance.createPromoKitty(255797717, coo, {from: coo,value: 0});
await instance.createPromoKitty(213275218, coo, {from: coo,value: 0});
await instance.createPromoKitty(181438655, coo, {from: coo,value: 0});
await instance.createPromoKitty(761643388, coo, {from: coo,value: 0});
await instance.createPromoKitty(729371379, coo, {from: coo,value: 0});
await instance.createPromoKitty(319181166, coo, {from: coo,value: 0});
await instance.createPromoKitty(60693057, coo, {from: coo,value: 0});
await instance.createPromoKitty(544641009, coo, {from: coo,value: 0});
await instance.createPromoKitty(745925800, coo, {from: coo,value: 0});
await instance.createPromoKitty(471401244, coo, {from: coo,value: 0});
await instance.createPromoKitty(674000431, coo, {from: coo,value: 0});
await instance.createPromoKitty(88612969, coo, {from: coo,value: 0});
await instance.createPromoKitty(65013036, coo, {from: coo,value: 0});
await instance.createPromoKitty(272269973, coo, {from: coo,value: 0});
await instance.createPromoKitty(839062909, coo, {from: coo,value: 0});
await instance.createPromoKitty(482902650, coo, {from: coo,value: 0});
await instance.createPromoKitty(636502514, coo, {from: coo,value: 0});
await instance.createPromoKitty(574869738, coo, {from: coo,value: 0});
await instance.createPromoKitty(343741485, coo, {from: coo,value: 0});
await instance.createPromoKitty(475842162, coo, {from: coo,value: 0});
await instance.createPromoKitty(342111923, coo, {from: coo,value: 0});
await instance.createPromoKitty(435978980, coo, {from: coo,value: 0});
await instance.createPromoKitty(247613274, coo, {from: coo,value: 0});
await instance.createPromoKitty(372753521, coo, {from: coo,value: 0});
await instance.createPromoKitty(473177028, coo, {from: coo,value: 0});
await instance.createPromoKitty(300869326, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(29, 13, {from: coo});
await instance.breedWith(21, 17, {from: coo});
await instance.breedWith(40, 28, {from: coo});
await instance.breedWith(4, 32, {from: coo});
await instance.breedWith(6, 20, {from: coo});
await instance.breedWith(12, 14, {from: coo});
await instance.breedWith(7, 27, {from: coo});
await instance.breedWith(3, 37, {from: coo});
await instance.breedWith(39, 16, {from: coo});
await instance.breedWith(18, 22, {from: coo});
await instance.breedWith(15, 34, {from: coo});
await instance.breedWith(38, 19, {from: coo});
await instance.breedWith(11, 5, {from: coo});
await instance.breedWith(9, 10, {from: coo});
await instance.breedWith(8, 2, {from: coo});
await instance.breedWith(31, 24, {from: coo});
await instance.breedWith(36, 35, {from: coo});
await instance.breedWith(26, 1, {from: coo});
await instance.breedWith(33, 30, {from: coo});
await instance.breedWith(23, 25, {from: coo});
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
await instance.giveBirth(29);
await instance.giveBirth(21);
await instance.giveBirth(40);
await instance.giveBirth(4);
await instance.giveBirth(6);
await instance.giveBirth(12);
await instance.giveBirth(7);
await instance.giveBirth(3);
await instance.giveBirth(39);
await instance.giveBirth(18);
await instance.giveBirth(15);
await instance.giveBirth(38);
await instance.giveBirth(11);
await instance.giveBirth(9);
await instance.giveBirth(8);
await instance.giveBirth(31);
await instance.giveBirth(36);
await instance.giveBirth(26);
await instance.giveBirth(33);
await instance.giveBirth(23);
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
