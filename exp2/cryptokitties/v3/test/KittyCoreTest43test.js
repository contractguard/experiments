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
await instance.createPromoKitty(557851046, coo, {from: coo,value: 0});
await instance.createPromoKitty(699343188, coo, {from: coo,value: 0});
await instance.createPromoKitty(639686803, coo, {from: coo,value: 0});
await instance.createPromoKitty(651089683, coo, {from: coo,value: 0});
await instance.createPromoKitty(27263186, coo, {from: coo,value: 0});
await instance.createPromoKitty(208110104, coo, {from: coo,value: 0});
await instance.createPromoKitty(745974171, coo, {from: coo,value: 0});
await instance.createPromoKitty(855194351, coo, {from: coo,value: 0});
await instance.createPromoKitty(559153557, coo, {from: coo,value: 0});
await instance.createPromoKitty(895027824, coo, {from: coo,value: 0});
await instance.createPromoKitty(541777154, coo, {from: coo,value: 0});
await instance.createPromoKitty(280700776, coo, {from: coo,value: 0});
await instance.createPromoKitty(803383446, coo, {from: coo,value: 0});
await instance.createPromoKitty(746426292, coo, {from: coo,value: 0});
await instance.createPromoKitty(655406143, coo, {from: coo,value: 0});
await instance.createPromoKitty(188647949, coo, {from: coo,value: 0});
await instance.createPromoKitty(729309369, coo, {from: coo,value: 0});
await instance.createPromoKitty(278363813, coo, {from: coo,value: 0});
await instance.createPromoKitty(217400201, coo, {from: coo,value: 0});
await instance.createPromoKitty(935540412, coo, {from: coo,value: 0});
await instance.createPromoKitty(740168969, coo, {from: coo,value: 0});
await instance.createPromoKitty(125325491, coo, {from: coo,value: 0});
await instance.createPromoKitty(898774925, coo, {from: coo,value: 0});
await instance.createPromoKitty(584702677, coo, {from: coo,value: 0});
await instance.createPromoKitty(938385737, coo, {from: coo,value: 0});
await instance.createPromoKitty(164861685, coo, {from: coo,value: 0});
await instance.createPromoKitty(802335281, coo, {from: coo,value: 0});
await instance.createPromoKitty(548416355, coo, {from: coo,value: 0});
await instance.createPromoKitty(960299011, coo, {from: coo,value: 0});
await instance.createPromoKitty(472514949, coo, {from: coo,value: 0});
await instance.createPromoKitty(631700949, coo, {from: coo,value: 0});
await instance.createPromoKitty(657461685, coo, {from: coo,value: 0});
await instance.createPromoKitty(861519697, coo, {from: coo,value: 0});
await instance.createPromoKitty(501630970, coo, {from: coo,value: 0});
await instance.createPromoKitty(933507119, coo, {from: coo,value: 0});
await instance.createPromoKitty(791373990, coo, {from: coo,value: 0});
await instance.createPromoKitty(114925072, coo, {from: coo,value: 0});
await instance.createPromoKitty(810613111, coo, {from: coo,value: 0});
await instance.createPromoKitty(661136588, coo, {from: coo,value: 0});
await instance.createPromoKitty(118896115, coo, {from: coo,value: 0});
await instance.createPromoKitty(722915275, coo, {from: coo,value: 0});
await instance.createPromoKitty(168442738, coo, {from: coo,value: 0});
await instance.createPromoKitty(453822021, coo, {from: coo,value: 0});
await instance.createPromoKitty(428978153, coo, {from: coo,value: 0});
await instance.createPromoKitty(475541805, coo, {from: coo,value: 0});
await instance.createPromoKitty(124330006, coo, {from: coo,value: 0});
await instance.createPromoKitty(267150858, coo, {from: coo,value: 0});
await instance.createPromoKitty(125893041, coo, {from: coo,value: 0});
await instance.createPromoKitty(30485733, coo, {from: coo,value: 0});
await instance.createPromoKitty(79366423, coo, {from: coo,value: 0});
await instance.createPromoKitty(939923763, coo, {from: coo,value: 0});
await instance.createPromoKitty(904862426, coo, {from: coo,value: 0});
await instance.createPromoKitty(309714299, coo, {from: coo,value: 0});
await instance.createPromoKitty(183054255, coo, {from: coo,value: 0});
await instance.createPromoKitty(871649379, coo, {from: coo,value: 0});
await instance.createPromoKitty(904866325, coo, {from: coo,value: 0});
await instance.createPromoKitty(843973339, coo, {from: coo,value: 0});
await instance.createPromoKitty(63006702, coo, {from: coo,value: 0});
await instance.createPromoKitty(957722203, coo, {from: coo,value: 0});
await instance.createPromoKitty(918568871, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(39, 4, {from: coo});
await instance.breedWith(19, 9, {from: coo});
await instance.breedWith(21, 40, {from: coo});
await instance.breedWith(8, 31, {from: coo});
await instance.breedWith(26, 22, {from: coo});
await instance.breedWith(5, 2, {from: coo});
await instance.breedWith(33, 36, {from: coo});
await instance.breedWith(30, 29, {from: coo});
await instance.breedWith(16, 35, {from: coo});
await instance.breedWith(13, 23, {from: coo});
await instance.breedWith(7, 18, {from: coo});
await instance.breedWith(10, 20, {from: coo});
await instance.breedWith(12, 11, {from: coo});
await instance.breedWith(14, 24, {from: coo});
await instance.breedWith(3, 38, {from: coo});
await instance.breedWith(28, 32, {from: coo});
await instance.breedWith(37, 25, {from: coo});
await instance.breedWith(27, 1, {from: coo});
await instance.breedWith(34, 17, {from: coo});
await instance.breedWith(15, 6, {from: coo});
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
await instance.giveBirth(39);
await instance.giveBirth(19);
await instance.giveBirth(21);
await instance.giveBirth(8);
await instance.giveBirth(26);
await instance.giveBirth(5);
await instance.giveBirth(33);
await instance.giveBirth(30);
await instance.giveBirth(16);
await instance.giveBirth(13);
await instance.giveBirth(7);
await instance.giveBirth(10);
await instance.giveBirth(12);
await instance.giveBirth(14);
await instance.giveBirth(3);
await instance.giveBirth(28);
await instance.giveBirth(37);
await instance.giveBirth(27);
await instance.giveBirth(34);
await instance.giveBirth(15);
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
