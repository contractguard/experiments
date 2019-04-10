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
await instance.createPromoKitty(317573449, coo, {from: coo,value: 0});
await instance.createPromoKitty(27737326, coo, {from: coo,value: 0});
await instance.createPromoKitty(25690017, coo, {from: coo,value: 0});
await instance.createPromoKitty(949502398, coo, {from: coo,value: 0});
await instance.createPromoKitty(229147628, coo, {from: coo,value: 0});
await instance.createPromoKitty(976334114, coo, {from: coo,value: 0});
await instance.createPromoKitty(362527602, coo, {from: coo,value: 0});
await instance.createPromoKitty(698888333, coo, {from: coo,value: 0});
await instance.createPromoKitty(531161182, coo, {from: coo,value: 0});
await instance.createPromoKitty(785516105, coo, {from: coo,value: 0});
await instance.createPromoKitty(20873854, coo, {from: coo,value: 0});
await instance.createPromoKitty(420610153, coo, {from: coo,value: 0});
await instance.createPromoKitty(46350295, coo, {from: coo,value: 0});
await instance.createPromoKitty(856193004, coo, {from: coo,value: 0});
await instance.createPromoKitty(140303735, coo, {from: coo,value: 0});
await instance.createPromoKitty(790681425, coo, {from: coo,value: 0});
await instance.createPromoKitty(507225304, coo, {from: coo,value: 0});
await instance.createPromoKitty(540884867, coo, {from: coo,value: 0});
await instance.createPromoKitty(928507346, coo, {from: coo,value: 0});
await instance.createPromoKitty(226859294, coo, {from: coo,value: 0});
await instance.createPromoKitty(78157812, coo, {from: coo,value: 0});
await instance.createPromoKitty(831917652, coo, {from: coo,value: 0});
await instance.createPromoKitty(981523799, coo, {from: coo,value: 0});
await instance.createPromoKitty(436988368, coo, {from: coo,value: 0});
await instance.createPromoKitty(510404157, coo, {from: coo,value: 0});
await instance.createPromoKitty(923202084, coo, {from: coo,value: 0});
await instance.createPromoKitty(225621323, coo, {from: coo,value: 0});
await instance.createPromoKitty(910774826, coo, {from: coo,value: 0});
await instance.createPromoKitty(843942169, coo, {from: coo,value: 0});
await instance.createPromoKitty(680515025, coo, {from: coo,value: 0});
await instance.createPromoKitty(207125356, coo, {from: coo,value: 0});
await instance.createPromoKitty(577390894, coo, {from: coo,value: 0});
await instance.createPromoKitty(820205354, coo, {from: coo,value: 0});
await instance.createPromoKitty(536786654, coo, {from: coo,value: 0});
await instance.createPromoKitty(355438434, coo, {from: coo,value: 0});
await instance.createPromoKitty(936081705, coo, {from: coo,value: 0});
await instance.createPromoKitty(901069627, coo, {from: coo,value: 0});
await instance.createPromoKitty(721810380, coo, {from: coo,value: 0});
await instance.createPromoKitty(279491631, coo, {from: coo,value: 0});
await instance.createPromoKitty(40206088, coo, {from: coo,value: 0});
await instance.createPromoKitty(682427771, coo, {from: coo,value: 0});
await instance.createPromoKitty(610653710, coo, {from: coo,value: 0});
await instance.createPromoKitty(473440398, coo, {from: coo,value: 0});
await instance.createPromoKitty(493572753, coo, {from: coo,value: 0});
await instance.createPromoKitty(520861844, coo, {from: coo,value: 0});
await instance.createPromoKitty(884630783, coo, {from: coo,value: 0});
await instance.createPromoKitty(579757347, coo, {from: coo,value: 0});
await instance.createPromoKitty(578780674, coo, {from: coo,value: 0});
await instance.createPromoKitty(499455295, coo, {from: coo,value: 0});
await instance.createPromoKitty(921900659, coo, {from: coo,value: 0});
await instance.createPromoKitty(981033715, coo, {from: coo,value: 0});
await instance.createPromoKitty(390332653, coo, {from: coo,value: 0});
await instance.createPromoKitty(364038780, coo, {from: coo,value: 0});
await instance.createPromoKitty(321900450, coo, {from: coo,value: 0});
await instance.createPromoKitty(655612405, coo, {from: coo,value: 0});
await instance.createPromoKitty(957619326, coo, {from: coo,value: 0});
await instance.createPromoKitty(295305902, coo, {from: coo,value: 0});
await instance.createPromoKitty(566398299, coo, {from: coo,value: 0});
await instance.createPromoKitty(293427629, coo, {from: coo,value: 0});
await instance.createPromoKitty(690384316, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(7, 14, {from: coo});
await instance.breedWith(1, 3, {from: coo});
await instance.breedWith(21, 6, {from: coo});
await instance.breedWith(10, 11, {from: coo});
await instance.breedWith(36, 26, {from: coo});
await instance.breedWith(39, 13, {from: coo});
await instance.breedWith(23, 31, {from: coo});
await instance.breedWith(34, 38, {from: coo});
await instance.breedWith(20, 37, {from: coo});
await instance.breedWith(29, 35, {from: coo});
await instance.breedWith(8, 22, {from: coo});
await instance.breedWith(24, 17, {from: coo});
await instance.breedWith(2, 27, {from: coo});
await instance.breedWith(12, 40, {from: coo});
await instance.breedWith(19, 16, {from: coo});
await instance.breedWith(18, 25, {from: coo});
await instance.breedWith(28, 33, {from: coo});
await instance.breedWith(5, 9, {from: coo});
await instance.breedWith(32, 30, {from: coo});
await instance.breedWith(15, 4, {from: coo});
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
await instance.giveBirth(7);
await instance.giveBirth(1);
await instance.giveBirth(21);
await instance.giveBirth(10);
await instance.giveBirth(36);
await instance.giveBirth(39);
await instance.giveBirth(23);
await instance.giveBirth(34);
await instance.giveBirth(20);
await instance.giveBirth(29);
await instance.giveBirth(8);
await instance.giveBirth(24);
await instance.giveBirth(2);
await instance.giveBirth(12);
await instance.giveBirth(19);
await instance.giveBirth(18);
await instance.giveBirth(28);
await instance.giveBirth(5);
await instance.giveBirth(32);
await instance.giveBirth(15);
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
