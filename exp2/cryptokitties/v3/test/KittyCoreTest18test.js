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
await instance.createPromoKitty(313105373, coo, {from: coo,value: 0});
await instance.createPromoKitty(416152632, coo, {from: coo,value: 0});
await instance.createPromoKitty(539001316, coo, {from: coo,value: 0});
await instance.createPromoKitty(788581812, coo, {from: coo,value: 0});
await instance.createPromoKitty(543686107, coo, {from: coo,value: 0});
await instance.createPromoKitty(178363941, coo, {from: coo,value: 0});
await instance.createPromoKitty(314265044, coo, {from: coo,value: 0});
await instance.createPromoKitty(165979807, coo, {from: coo,value: 0});
await instance.createPromoKitty(229126594, coo, {from: coo,value: 0});
await instance.createPromoKitty(741472798, coo, {from: coo,value: 0});
await instance.createPromoKitty(247792184, coo, {from: coo,value: 0});
await instance.createPromoKitty(751676968, coo, {from: coo,value: 0});
await instance.createPromoKitty(924750472, coo, {from: coo,value: 0});
await instance.createPromoKitty(274873994, coo, {from: coo,value: 0});
await instance.createPromoKitty(855087209, coo, {from: coo,value: 0});
await instance.createPromoKitty(800291691, coo, {from: coo,value: 0});
await instance.createPromoKitty(836524176, coo, {from: coo,value: 0});
await instance.createPromoKitty(625289778, coo, {from: coo,value: 0});
await instance.createPromoKitty(514805712, coo, {from: coo,value: 0});
await instance.createPromoKitty(681005906, coo, {from: coo,value: 0});
await instance.createPromoKitty(191244508, coo, {from: coo,value: 0});
await instance.createPromoKitty(511953743, coo, {from: coo,value: 0});
await instance.createPromoKitty(190913962, coo, {from: coo,value: 0});
await instance.createPromoKitty(893501875, coo, {from: coo,value: 0});
await instance.createPromoKitty(737386584, coo, {from: coo,value: 0});
await instance.createPromoKitty(951864100, coo, {from: coo,value: 0});
await instance.createPromoKitty(922958020, coo, {from: coo,value: 0});
await instance.createPromoKitty(50729476, coo, {from: coo,value: 0});
await instance.createPromoKitty(550266785, coo, {from: coo,value: 0});
await instance.createPromoKitty(721853493, coo, {from: coo,value: 0});
await instance.createPromoKitty(662500794, coo, {from: coo,value: 0});
await instance.createPromoKitty(122770496, coo, {from: coo,value: 0});
await instance.createPromoKitty(842394654, coo, {from: coo,value: 0});
await instance.createPromoKitty(525713066, coo, {from: coo,value: 0});
await instance.createPromoKitty(658160082, coo, {from: coo,value: 0});
await instance.createPromoKitty(269239648, coo, {from: coo,value: 0});
await instance.createPromoKitty(541921233, coo, {from: coo,value: 0});
await instance.createPromoKitty(942698539, coo, {from: coo,value: 0});
await instance.createPromoKitty(455188092, coo, {from: coo,value: 0});
await instance.createPromoKitty(869168875, coo, {from: coo,value: 0});
await instance.createPromoKitty(197567998, coo, {from: coo,value: 0});
await instance.createPromoKitty(81362487, coo, {from: coo,value: 0});
await instance.createPromoKitty(846260182, coo, {from: coo,value: 0});
await instance.createPromoKitty(593636941, coo, {from: coo,value: 0});
await instance.createPromoKitty(272610842, coo, {from: coo,value: 0});
await instance.createPromoKitty(361713734, coo, {from: coo,value: 0});
await instance.createPromoKitty(207324787, coo, {from: coo,value: 0});
await instance.createPromoKitty(651924170, coo, {from: coo,value: 0});
await instance.createPromoKitty(16524136, coo, {from: coo,value: 0});
await instance.createPromoKitty(325059537, coo, {from: coo,value: 0});
await instance.createPromoKitty(440058815, coo, {from: coo,value: 0});
await instance.createPromoKitty(235868821, coo, {from: coo,value: 0});
await instance.createPromoKitty(896540214, coo, {from: coo,value: 0});
await instance.createPromoKitty(294150340, coo, {from: coo,value: 0});
await instance.createPromoKitty(523394860, coo, {from: coo,value: 0});
await instance.createPromoKitty(12627581, coo, {from: coo,value: 0});
await instance.createPromoKitty(120460815, coo, {from: coo,value: 0});
await instance.createPromoKitty(870906759, coo, {from: coo,value: 0});
await instance.createPromoKitty(409736705, coo, {from: coo,value: 0});
await instance.createPromoKitty(929203757, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(26, 38, {from: coo});
await instance.breedWith(36, 32, {from: coo});
await instance.breedWith(11, 39, {from: coo});
await instance.breedWith(15, 35, {from: coo});
await instance.breedWith(29, 28, {from: coo});
await instance.breedWith(30, 21, {from: coo});
await instance.breedWith(3, 5, {from: coo});
await instance.breedWith(2, 18, {from: coo});
await instance.breedWith(7, 37, {from: coo});
await instance.breedWith(13, 20, {from: coo});
await instance.breedWith(31, 4, {from: coo});
await instance.breedWith(23, 9, {from: coo});
await instance.breedWith(25, 34, {from: coo});
await instance.breedWith(14, 12, {from: coo});
await instance.breedWith(10, 27, {from: coo});
await instance.breedWith(8, 24, {from: coo});
await instance.breedWith(19, 17, {from: coo});
await instance.breedWith(33, 40, {from: coo});
await instance.breedWith(6, 1, {from: coo});
await instance.breedWith(16, 22, {from: coo});
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
await instance.giveBirth(26);
await instance.giveBirth(36);
await instance.giveBirth(11);
await instance.giveBirth(15);
await instance.giveBirth(29);
await instance.giveBirth(30);
await instance.giveBirth(3);
await instance.giveBirth(2);
await instance.giveBirth(7);
await instance.giveBirth(13);
await instance.giveBirth(31);
await instance.giveBirth(23);
await instance.giveBirth(25);
await instance.giveBirth(14);
await instance.giveBirth(10);
await instance.giveBirth(8);
await instance.giveBirth(19);
await instance.giveBirth(33);
await instance.giveBirth(6);
await instance.giveBirth(16);
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
