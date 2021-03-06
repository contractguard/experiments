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
await instance.createPromoKitty(374827494, coo, {from: coo,value: 0});
await instance.createPromoKitty(707303709, coo, {from: coo,value: 0});
await instance.createPromoKitty(816623131, coo, {from: coo,value: 0});
await instance.createPromoKitty(492188725, coo, {from: coo,value: 0});
await instance.createPromoKitty(900765274, coo, {from: coo,value: 0});
await instance.createPromoKitty(347093004, coo, {from: coo,value: 0});
await instance.createPromoKitty(927290756, coo, {from: coo,value: 0});
await instance.createPromoKitty(943471118, coo, {from: coo,value: 0});
await instance.createPromoKitty(934877495, coo, {from: coo,value: 0});
await instance.createPromoKitty(595109217, coo, {from: coo,value: 0});
await instance.createPromoKitty(880983990, coo, {from: coo,value: 0});
await instance.createPromoKitty(874511342, coo, {from: coo,value: 0});
await instance.createPromoKitty(863328137, coo, {from: coo,value: 0});
await instance.createPromoKitty(606553647, coo, {from: coo,value: 0});
await instance.createPromoKitty(840220719, coo, {from: coo,value: 0});
await instance.createPromoKitty(664112127, coo, {from: coo,value: 0});
await instance.createPromoKitty(636013399, coo, {from: coo,value: 0});
await instance.createPromoKitty(511058212, coo, {from: coo,value: 0});
await instance.createPromoKitty(147286826, coo, {from: coo,value: 0});
await instance.createPromoKitty(977000442, coo, {from: coo,value: 0});
await instance.createPromoKitty(561591324, coo, {from: coo,value: 0});
await instance.createPromoKitty(678490145, coo, {from: coo,value: 0});
await instance.createPromoKitty(642762885, coo, {from: coo,value: 0});
await instance.createPromoKitty(914971693, coo, {from: coo,value: 0});
await instance.createPromoKitty(399785623, coo, {from: coo,value: 0});
await instance.createPromoKitty(111257344, coo, {from: coo,value: 0});
await instance.createPromoKitty(234246134, coo, {from: coo,value: 0});
await instance.createPromoKitty(980182007, coo, {from: coo,value: 0});
await instance.createPromoKitty(694006495, coo, {from: coo,value: 0});
await instance.createPromoKitty(831198463, coo, {from: coo,value: 0});
await instance.createPromoKitty(110888390, coo, {from: coo,value: 0});
await instance.createPromoKitty(887342757, coo, {from: coo,value: 0});
await instance.createPromoKitty(70845998, coo, {from: coo,value: 0});
await instance.createPromoKitty(646791892, coo, {from: coo,value: 0});
await instance.createPromoKitty(840751738, coo, {from: coo,value: 0});
await instance.createPromoKitty(28180156, coo, {from: coo,value: 0});
await instance.createPromoKitty(634460507, coo, {from: coo,value: 0});
await instance.createPromoKitty(112602323, coo, {from: coo,value: 0});
await instance.createPromoKitty(305762436, coo, {from: coo,value: 0});
await instance.createPromoKitty(288645674, coo, {from: coo,value: 0});
await instance.createPromoKitty(546549732, coo, {from: coo,value: 0});
await instance.createPromoKitty(814832360, coo, {from: coo,value: 0});
await instance.createPromoKitty(118214836, coo, {from: coo,value: 0});
await instance.createPromoKitty(748087733, coo, {from: coo,value: 0});
await instance.createPromoKitty(108183096, coo, {from: coo,value: 0});
await instance.createPromoKitty(211699603, coo, {from: coo,value: 0});
await instance.createPromoKitty(761022636, coo, {from: coo,value: 0});
await instance.createPromoKitty(794973917, coo, {from: coo,value: 0});
await instance.createPromoKitty(108529168, coo, {from: coo,value: 0});
await instance.createPromoKitty(311112071, coo, {from: coo,value: 0});
await instance.createPromoKitty(246834395, coo, {from: coo,value: 0});
await instance.createPromoKitty(19740723, coo, {from: coo,value: 0});
await instance.createPromoKitty(719343552, coo, {from: coo,value: 0});
await instance.createPromoKitty(623003081, coo, {from: coo,value: 0});
await instance.createPromoKitty(651736581, coo, {from: coo,value: 0});
await instance.createPromoKitty(469886510, coo, {from: coo,value: 0});
await instance.createPromoKitty(466424139, coo, {from: coo,value: 0});
await instance.createPromoKitty(620205604, coo, {from: coo,value: 0});
await instance.createPromoKitty(57415495, coo, {from: coo,value: 0});
await instance.createPromoKitty(531027870, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(10, 7, {from: coo});
await instance.breedWith(4, 21, {from: coo});
await instance.breedWith(9, 3, {from: coo});
await instance.breedWith(37, 38, {from: coo});
await instance.breedWith(1, 25, {from: coo});
await instance.breedWith(32, 22, {from: coo});
await instance.breedWith(28, 18, {from: coo});
await instance.breedWith(11, 5, {from: coo});
await instance.breedWith(20, 27, {from: coo});
await instance.breedWith(8, 2, {from: coo});
await instance.breedWith(35, 40, {from: coo});
await instance.breedWith(39, 31, {from: coo});
await instance.breedWith(24, 15, {from: coo});
await instance.breedWith(26, 33, {from: coo});
await instance.breedWith(13, 23, {from: coo});
await instance.breedWith(17, 30, {from: coo});
await instance.breedWith(6, 19, {from: coo});
await instance.breedWith(14, 34, {from: coo});
await instance.breedWith(12, 29, {from: coo});
await instance.breedWith(36, 16, {from: coo});
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
await instance.giveBirth(4);
await instance.giveBirth(9);
await instance.giveBirth(37);
await instance.giveBirth(1);
await instance.giveBirth(32);
await instance.giveBirth(28);
await instance.giveBirth(11);
await instance.giveBirth(20);
await instance.giveBirth(8);
await instance.giveBirth(35);
await instance.giveBirth(39);
await instance.giveBirth(24);
await instance.giveBirth(26);
await instance.giveBirth(13);
await instance.giveBirth(17);
await instance.giveBirth(6);
await instance.giveBirth(14);
await instance.giveBirth(12);
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
