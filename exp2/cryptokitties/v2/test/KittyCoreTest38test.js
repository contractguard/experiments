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
await instance.createPromoKitty(169890130, coo, {from: coo,value: 0});
await instance.createPromoKitty(972134038, coo, {from: coo,value: 0});
await instance.createPromoKitty(710864380, coo, {from: coo,value: 0});
await instance.createPromoKitty(593306263, coo, {from: coo,value: 0});
await instance.createPromoKitty(583057467, coo, {from: coo,value: 0});
await instance.createPromoKitty(208695862, coo, {from: coo,value: 0});
await instance.createPromoKitty(347914701, coo, {from: coo,value: 0});
await instance.createPromoKitty(903288099, coo, {from: coo,value: 0});
await instance.createPromoKitty(204197426, coo, {from: coo,value: 0});
await instance.createPromoKitty(63096152, coo, {from: coo,value: 0});
await instance.createPromoKitty(899144840, coo, {from: coo,value: 0});
await instance.createPromoKitty(258200516, coo, {from: coo,value: 0});
await instance.createPromoKitty(947198158, coo, {from: coo,value: 0});
await instance.createPromoKitty(390833950, coo, {from: coo,value: 0});
await instance.createPromoKitty(614512360, coo, {from: coo,value: 0});
await instance.createPromoKitty(309340316, coo, {from: coo,value: 0});
await instance.createPromoKitty(166299915, coo, {from: coo,value: 0});
await instance.createPromoKitty(971743705, coo, {from: coo,value: 0});
await instance.createPromoKitty(35818941, coo, {from: coo,value: 0});
await instance.createPromoKitty(502418450, coo, {from: coo,value: 0});
await instance.createPromoKitty(115948921, coo, {from: coo,value: 0});
await instance.createPromoKitty(195640126, coo, {from: coo,value: 0});
await instance.createPromoKitty(679451498, coo, {from: coo,value: 0});
await instance.createPromoKitty(651387599, coo, {from: coo,value: 0});
await instance.createPromoKitty(454001053, coo, {from: coo,value: 0});
await instance.createPromoKitty(276757305, coo, {from: coo,value: 0});
await instance.createPromoKitty(454555800, coo, {from: coo,value: 0});
await instance.createPromoKitty(914105158, coo, {from: coo,value: 0});
await instance.createPromoKitty(445582715, coo, {from: coo,value: 0});
await instance.createPromoKitty(935657516, coo, {from: coo,value: 0});
await instance.createPromoKitty(134707933, coo, {from: coo,value: 0});
await instance.createPromoKitty(105418412, coo, {from: coo,value: 0});
await instance.createPromoKitty(892152340, coo, {from: coo,value: 0});
await instance.createPromoKitty(297950097, coo, {from: coo,value: 0});
await instance.createPromoKitty(993559115, coo, {from: coo,value: 0});
await instance.createPromoKitty(551946606, coo, {from: coo,value: 0});
await instance.createPromoKitty(80994477, coo, {from: coo,value: 0});
await instance.createPromoKitty(38655992, coo, {from: coo,value: 0});
await instance.createPromoKitty(735029672, coo, {from: coo,value: 0});
await instance.createPromoKitty(695328282, coo, {from: coo,value: 0});
await instance.createPromoKitty(353046228, coo, {from: coo,value: 0});
await instance.createPromoKitty(754944906, coo, {from: coo,value: 0});
await instance.createPromoKitty(602141225, coo, {from: coo,value: 0});
await instance.createPromoKitty(938011779, coo, {from: coo,value: 0});
await instance.createPromoKitty(282791565, coo, {from: coo,value: 0});
await instance.createPromoKitty(213193895, coo, {from: coo,value: 0});
await instance.createPromoKitty(352264937, coo, {from: coo,value: 0});
await instance.createPromoKitty(401258442, coo, {from: coo,value: 0});
await instance.createPromoKitty(82127648, coo, {from: coo,value: 0});
await instance.createPromoKitty(262355801, coo, {from: coo,value: 0});
await instance.createPromoKitty(983307987, coo, {from: coo,value: 0});
await instance.createPromoKitty(850475060, coo, {from: coo,value: 0});
await instance.createPromoKitty(132522459, coo, {from: coo,value: 0});
await instance.createPromoKitty(516188214, coo, {from: coo,value: 0});
await instance.createPromoKitty(266721400, coo, {from: coo,value: 0});
await instance.createPromoKitty(72930328, coo, {from: coo,value: 0});
await instance.createPromoKitty(29288533, coo, {from: coo,value: 0});
await instance.createPromoKitty(339698290, coo, {from: coo,value: 0});
await instance.createPromoKitty(410423595, coo, {from: coo,value: 0});
await instance.createPromoKitty(435292155, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(40, 39, {from: coo});
await instance.breedWith(8, 7, {from: coo});
await instance.breedWith(18, 4, {from: coo});
await instance.breedWith(32, 22, {from: coo});
await instance.breedWith(12, 20, {from: coo});
await instance.breedWith(23, 15, {from: coo});
await instance.breedWith(19, 34, {from: coo});
await instance.breedWith(3, 17, {from: coo});
await instance.breedWith(31, 27, {from: coo});
await instance.breedWith(30, 14, {from: coo});
await instance.breedWith(36, 33, {from: coo});
await instance.breedWith(13, 9, {from: coo});
await instance.breedWith(26, 16, {from: coo});
await instance.breedWith(21, 11, {from: coo});
await instance.breedWith(1, 35, {from: coo});
await instance.breedWith(24, 10, {from: coo});
await instance.breedWith(2, 28, {from: coo});
await instance.breedWith(38, 5, {from: coo});
await instance.breedWith(29, 25, {from: coo});
await instance.breedWith(6, 37, {from: coo});
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
await instance.giveBirth(40);
await instance.giveBirth(8);
await instance.giveBirth(18);
await instance.giveBirth(32);
await instance.giveBirth(12);
await instance.giveBirth(23);
await instance.giveBirth(19);
await instance.giveBirth(3);
await instance.giveBirth(31);
await instance.giveBirth(30);
await instance.giveBirth(36);
await instance.giveBirth(13);
await instance.giveBirth(26);
await instance.giveBirth(21);
await instance.giveBirth(1);
await instance.giveBirth(24);
await instance.giveBirth(2);
await instance.giveBirth(38);
await instance.giveBirth(29);
await instance.giveBirth(6);
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
