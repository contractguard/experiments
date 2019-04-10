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
await instance.createPromoKitty(662713486, coo, {from: coo,value: 0});
await instance.createPromoKitty(991024025, coo, {from: coo,value: 0});
await instance.createPromoKitty(818661395, coo, {from: coo,value: 0});
await instance.createPromoKitty(570242631, coo, {from: coo,value: 0});
await instance.createPromoKitty(346187374, coo, {from: coo,value: 0});
await instance.createPromoKitty(930322997, coo, {from: coo,value: 0});
await instance.createPromoKitty(538150876, coo, {from: coo,value: 0});
await instance.createPromoKitty(764120563, coo, {from: coo,value: 0});
await instance.createPromoKitty(887262655, coo, {from: coo,value: 0});
await instance.createPromoKitty(381739466, coo, {from: coo,value: 0});
await instance.createPromoKitty(986307031, coo, {from: coo,value: 0});
await instance.createPromoKitty(340495006, coo, {from: coo,value: 0});
await instance.createPromoKitty(432862164, coo, {from: coo,value: 0});
await instance.createPromoKitty(870889842, coo, {from: coo,value: 0});
await instance.createPromoKitty(516504790, coo, {from: coo,value: 0});
await instance.createPromoKitty(272490407, coo, {from: coo,value: 0});
await instance.createPromoKitty(976442534, coo, {from: coo,value: 0});
await instance.createPromoKitty(625140050, coo, {from: coo,value: 0});
await instance.createPromoKitty(290760654, coo, {from: coo,value: 0});
await instance.createPromoKitty(265188129, coo, {from: coo,value: 0});
await instance.createPromoKitty(898252248, coo, {from: coo,value: 0});
await instance.createPromoKitty(434668495, coo, {from: coo,value: 0});
await instance.createPromoKitty(55401033, coo, {from: coo,value: 0});
await instance.createPromoKitty(557632037, coo, {from: coo,value: 0});
await instance.createPromoKitty(560942042, coo, {from: coo,value: 0});
await instance.createPromoKitty(486557284, coo, {from: coo,value: 0});
await instance.createPromoKitty(587726934, coo, {from: coo,value: 0});
await instance.createPromoKitty(859150219, coo, {from: coo,value: 0});
await instance.createPromoKitty(660153389, coo, {from: coo,value: 0});
await instance.createPromoKitty(745315342, coo, {from: coo,value: 0});
await instance.createPromoKitty(136318914, coo, {from: coo,value: 0});
await instance.createPromoKitty(686393706, coo, {from: coo,value: 0});
await instance.createPromoKitty(259600753, coo, {from: coo,value: 0});
await instance.createPromoKitty(686135238, coo, {from: coo,value: 0});
await instance.createPromoKitty(174198397, coo, {from: coo,value: 0});
await instance.createPromoKitty(373935020, coo, {from: coo,value: 0});
await instance.createPromoKitty(335959543, coo, {from: coo,value: 0});
await instance.createPromoKitty(842959102, coo, {from: coo,value: 0});
await instance.createPromoKitty(925218182, coo, {from: coo,value: 0});
await instance.createPromoKitty(719445970, coo, {from: coo,value: 0});
await instance.createPromoKitty(189641777, coo, {from: coo,value: 0});
await instance.createPromoKitty(517548929, coo, {from: coo,value: 0});
await instance.createPromoKitty(568636335, coo, {from: coo,value: 0});
await instance.createPromoKitty(367000486, coo, {from: coo,value: 0});
await instance.createPromoKitty(183176594, coo, {from: coo,value: 0});
await instance.createPromoKitty(871500224, coo, {from: coo,value: 0});
await instance.createPromoKitty(107542018, coo, {from: coo,value: 0});
await instance.createPromoKitty(49535325, coo, {from: coo,value: 0});
await instance.createPromoKitty(783986216, coo, {from: coo,value: 0});
await instance.createPromoKitty(263217781, coo, {from: coo,value: 0});
await instance.createPromoKitty(270453666, coo, {from: coo,value: 0});
await instance.createPromoKitty(425413091, coo, {from: coo,value: 0});
await instance.createPromoKitty(755828034, coo, {from: coo,value: 0});
await instance.createPromoKitty(322239079, coo, {from: coo,value: 0});
await instance.createPromoKitty(734792014, coo, {from: coo,value: 0});
await instance.createPromoKitty(231620268, coo, {from: coo,value: 0});
await instance.createPromoKitty(798999490, coo, {from: coo,value: 0});
await instance.createPromoKitty(270470553, coo, {from: coo,value: 0});
await instance.createPromoKitty(44214980, coo, {from: coo,value: 0});
await instance.createPromoKitty(909459070, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(35, 12, {from: coo});
await instance.breedWith(11, 27, {from: coo});
await instance.breedWith(18, 5, {from: coo});
await instance.breedWith(22, 33, {from: coo});
await instance.breedWith(38, 8, {from: coo});
await instance.breedWith(40, 23, {from: coo});
await instance.breedWith(31, 9, {from: coo});
await instance.breedWith(28, 29, {from: coo});
await instance.breedWith(26, 6, {from: coo});
await instance.breedWith(17, 21, {from: coo});
await instance.breedWith(20, 36, {from: coo});
await instance.breedWith(13, 1, {from: coo});
await instance.breedWith(15, 3, {from: coo});
await instance.breedWith(34, 4, {from: coo});
await instance.breedWith(16, 19, {from: coo});
await instance.breedWith(2, 32, {from: coo});
await instance.breedWith(37, 7, {from: coo});
await instance.breedWith(10, 25, {from: coo});
await instance.breedWith(30, 14, {from: coo});
await instance.breedWith(24, 39, {from: coo});
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
await instance.giveBirth(11);
await instance.giveBirth(18);
await instance.giveBirth(22);
await instance.giveBirth(38);
await instance.giveBirth(40);
await instance.giveBirth(31);
await instance.giveBirth(28);
await instance.giveBirth(26);
await instance.giveBirth(17);
await instance.giveBirth(20);
await instance.giveBirth(13);
await instance.giveBirth(15);
await instance.giveBirth(34);
await instance.giveBirth(16);
await instance.giveBirth(2);
await instance.giveBirth(37);
await instance.giveBirth(10);
await instance.giveBirth(30);
await instance.giveBirth(24);
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
