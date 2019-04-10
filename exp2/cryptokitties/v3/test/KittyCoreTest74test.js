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
await instance.createPromoKitty(470008259, coo, {from: coo,value: 0});
await instance.createPromoKitty(770834300, coo, {from: coo,value: 0});
await instance.createPromoKitty(323938017, coo, {from: coo,value: 0});
await instance.createPromoKitty(624474857, coo, {from: coo,value: 0});
await instance.createPromoKitty(721938042, coo, {from: coo,value: 0});
await instance.createPromoKitty(893854541, coo, {from: coo,value: 0});
await instance.createPromoKitty(615083668, coo, {from: coo,value: 0});
await instance.createPromoKitty(989370974, coo, {from: coo,value: 0});
await instance.createPromoKitty(430641633, coo, {from: coo,value: 0});
await instance.createPromoKitty(832115545, coo, {from: coo,value: 0});
await instance.createPromoKitty(481365724, coo, {from: coo,value: 0});
await instance.createPromoKitty(784567533, coo, {from: coo,value: 0});
await instance.createPromoKitty(301606291, coo, {from: coo,value: 0});
await instance.createPromoKitty(15535127, coo, {from: coo,value: 0});
await instance.createPromoKitty(741447225, coo, {from: coo,value: 0});
await instance.createPromoKitty(282662827, coo, {from: coo,value: 0});
await instance.createPromoKitty(493250039, coo, {from: coo,value: 0});
await instance.createPromoKitty(723566558, coo, {from: coo,value: 0});
await instance.createPromoKitty(443040339, coo, {from: coo,value: 0});
await instance.createPromoKitty(756916331, coo, {from: coo,value: 0});
await instance.createPromoKitty(386178815, coo, {from: coo,value: 0});
await instance.createPromoKitty(675284666, coo, {from: coo,value: 0});
await instance.createPromoKitty(345882586, coo, {from: coo,value: 0});
await instance.createPromoKitty(428808011, coo, {from: coo,value: 0});
await instance.createPromoKitty(660438046, coo, {from: coo,value: 0});
await instance.createPromoKitty(371473399, coo, {from: coo,value: 0});
await instance.createPromoKitty(794414146, coo, {from: coo,value: 0});
await instance.createPromoKitty(6483284, coo, {from: coo,value: 0});
await instance.createPromoKitty(433305581, coo, {from: coo,value: 0});
await instance.createPromoKitty(757843571, coo, {from: coo,value: 0});
await instance.createPromoKitty(935930207, coo, {from: coo,value: 0});
await instance.createPromoKitty(722315331, coo, {from: coo,value: 0});
await instance.createPromoKitty(709240325, coo, {from: coo,value: 0});
await instance.createPromoKitty(445683317, coo, {from: coo,value: 0});
await instance.createPromoKitty(531162320, coo, {from: coo,value: 0});
await instance.createPromoKitty(207474913, coo, {from: coo,value: 0});
await instance.createPromoKitty(386538166, coo, {from: coo,value: 0});
await instance.createPromoKitty(293510284, coo, {from: coo,value: 0});
await instance.createPromoKitty(278529184, coo, {from: coo,value: 0});
await instance.createPromoKitty(826726694, coo, {from: coo,value: 0});
await instance.createPromoKitty(980420847, coo, {from: coo,value: 0});
await instance.createPromoKitty(60437348, coo, {from: coo,value: 0});
await instance.createPromoKitty(487195275, coo, {from: coo,value: 0});
await instance.createPromoKitty(397532149, coo, {from: coo,value: 0});
await instance.createPromoKitty(823632664, coo, {from: coo,value: 0});
await instance.createPromoKitty(53463375, coo, {from: coo,value: 0});
await instance.createPromoKitty(889544995, coo, {from: coo,value: 0});
await instance.createPromoKitty(766802182, coo, {from: coo,value: 0});
await instance.createPromoKitty(674268822, coo, {from: coo,value: 0});
await instance.createPromoKitty(962789554, coo, {from: coo,value: 0});
await instance.createPromoKitty(219028401, coo, {from: coo,value: 0});
await instance.createPromoKitty(49937634, coo, {from: coo,value: 0});
await instance.createPromoKitty(186236595, coo, {from: coo,value: 0});
await instance.createPromoKitty(814428799, coo, {from: coo,value: 0});
await instance.createPromoKitty(534263433, coo, {from: coo,value: 0});
await instance.createPromoKitty(24677282, coo, {from: coo,value: 0});
await instance.createPromoKitty(775895634, coo, {from: coo,value: 0});
await instance.createPromoKitty(516561630, coo, {from: coo,value: 0});
await instance.createPromoKitty(522225671, coo, {from: coo,value: 0});
await instance.createPromoKitty(376970265, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(29, 3, {from: coo});
await instance.breedWith(11, 26, {from: coo});
await instance.breedWith(8, 40, {from: coo});
await instance.breedWith(38, 24, {from: coo});
await instance.breedWith(39, 4, {from: coo});
await instance.breedWith(1, 22, {from: coo});
await instance.breedWith(23, 10, {from: coo});
await instance.breedWith(2, 16, {from: coo});
await instance.breedWith(6, 12, {from: coo});
await instance.breedWith(27, 15, {from: coo});
await instance.breedWith(14, 21, {from: coo});
await instance.breedWith(36, 28, {from: coo});
await instance.breedWith(20, 5, {from: coo});
await instance.breedWith(25, 13, {from: coo});
await instance.breedWith(34, 19, {from: coo});
await instance.breedWith(9, 35, {from: coo});
await instance.breedWith(31, 30, {from: coo});
await instance.breedWith(17, 32, {from: coo});
await instance.breedWith(7, 37, {from: coo});
await instance.breedWith(33, 18, {from: coo});
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
await instance.giveBirth(11);
await instance.giveBirth(8);
await instance.giveBirth(38);
await instance.giveBirth(39);
await instance.giveBirth(1);
await instance.giveBirth(23);
await instance.giveBirth(2);
await instance.giveBirth(6);
await instance.giveBirth(27);
await instance.giveBirth(14);
await instance.giveBirth(36);
await instance.giveBirth(20);
await instance.giveBirth(25);
await instance.giveBirth(34);
await instance.giveBirth(9);
await instance.giveBirth(31);
await instance.giveBirth(17);
await instance.giveBirth(7);
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
