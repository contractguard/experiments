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
await instance.createPromoKitty(967407151, coo, {from: coo,value: 0});
await instance.createPromoKitty(415622703, coo, {from: coo,value: 0});
await instance.createPromoKitty(952131103, coo, {from: coo,value: 0});
await instance.createPromoKitty(192081817, coo, {from: coo,value: 0});
await instance.createPromoKitty(187504598, coo, {from: coo,value: 0});
await instance.createPromoKitty(686151494, coo, {from: coo,value: 0});
await instance.createPromoKitty(462480296, coo, {from: coo,value: 0});
await instance.createPromoKitty(681898520, coo, {from: coo,value: 0});
await instance.createPromoKitty(580861267, coo, {from: coo,value: 0});
await instance.createPromoKitty(590905043, coo, {from: coo,value: 0});
await instance.createPromoKitty(704227578, coo, {from: coo,value: 0});
await instance.createPromoKitty(422841198, coo, {from: coo,value: 0});
await instance.createPromoKitty(78214985, coo, {from: coo,value: 0});
await instance.createPromoKitty(811634951, coo, {from: coo,value: 0});
await instance.createPromoKitty(539559761, coo, {from: coo,value: 0});
await instance.createPromoKitty(350277617, coo, {from: coo,value: 0});
await instance.createPromoKitty(479363189, coo, {from: coo,value: 0});
await instance.createPromoKitty(352134455, coo, {from: coo,value: 0});
await instance.createPromoKitty(315223598, coo, {from: coo,value: 0});
await instance.createPromoKitty(314191028, coo, {from: coo,value: 0});
await instance.createPromoKitty(531730285, coo, {from: coo,value: 0});
await instance.createPromoKitty(109423692, coo, {from: coo,value: 0});
await instance.createPromoKitty(927266894, coo, {from: coo,value: 0});
await instance.createPromoKitty(679785445, coo, {from: coo,value: 0});
await instance.createPromoKitty(500507897, coo, {from: coo,value: 0});
await instance.createPromoKitty(459210468, coo, {from: coo,value: 0});
await instance.createPromoKitty(221290340, coo, {from: coo,value: 0});
await instance.createPromoKitty(364765162, coo, {from: coo,value: 0});
await instance.createPromoKitty(186303913, coo, {from: coo,value: 0});
await instance.createPromoKitty(740389031, coo, {from: coo,value: 0});
await instance.createPromoKitty(775289859, coo, {from: coo,value: 0});
await instance.createPromoKitty(936577110, coo, {from: coo,value: 0});
await instance.createPromoKitty(808157964, coo, {from: coo,value: 0});
await instance.createPromoKitty(129879736, coo, {from: coo,value: 0});
await instance.createPromoKitty(799209775, coo, {from: coo,value: 0});
await instance.createPromoKitty(669183157, coo, {from: coo,value: 0});
await instance.createPromoKitty(845239144, coo, {from: coo,value: 0});
await instance.createPromoKitty(851313474, coo, {from: coo,value: 0});
await instance.createPromoKitty(442831247, coo, {from: coo,value: 0});
await instance.createPromoKitty(643286692, coo, {from: coo,value: 0});
await instance.createPromoKitty(920436868, coo, {from: coo,value: 0});
await instance.createPromoKitty(820861512, coo, {from: coo,value: 0});
await instance.createPromoKitty(207890717, coo, {from: coo,value: 0});
await instance.createPromoKitty(454190045, coo, {from: coo,value: 0});
await instance.createPromoKitty(640427767, coo, {from: coo,value: 0});
await instance.createPromoKitty(652212208, coo, {from: coo,value: 0});
await instance.createPromoKitty(181604623, coo, {from: coo,value: 0});
await instance.createPromoKitty(787566720, coo, {from: coo,value: 0});
await instance.createPromoKitty(755690090, coo, {from: coo,value: 0});
await instance.createPromoKitty(518769668, coo, {from: coo,value: 0});
await instance.createPromoKitty(190038055, coo, {from: coo,value: 0});
await instance.createPromoKitty(669514060, coo, {from: coo,value: 0});
await instance.createPromoKitty(419669969, coo, {from: coo,value: 0});
await instance.createPromoKitty(368396537, coo, {from: coo,value: 0});
await instance.createPromoKitty(26873667, coo, {from: coo,value: 0});
await instance.createPromoKitty(487203434, coo, {from: coo,value: 0});
await instance.createPromoKitty(111325150, coo, {from: coo,value: 0});
await instance.createPromoKitty(312770961, coo, {from: coo,value: 0});
await instance.createPromoKitty(351392557, coo, {from: coo,value: 0});
await instance.createPromoKitty(52911259, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(39, 10, {from: coo});
await instance.breedWith(25, 35, {from: coo});
await instance.breedWith(37, 17, {from: coo});
await instance.breedWith(15, 30, {from: coo});
await instance.breedWith(40, 24, {from: coo});
await instance.breedWith(36, 31, {from: coo});
await instance.breedWith(22, 2, {from: coo});
await instance.breedWith(33, 21, {from: coo});
await instance.breedWith(4, 9, {from: coo});
await instance.breedWith(13, 38, {from: coo});
await instance.breedWith(1, 12, {from: coo});
await instance.breedWith(6, 14, {from: coo});
await instance.breedWith(7, 18, {from: coo});
await instance.breedWith(32, 19, {from: coo});
await instance.breedWith(20, 16, {from: coo});
await instance.breedWith(3, 23, {from: coo});
await instance.breedWith(8, 27, {from: coo});
await instance.breedWith(5, 11, {from: coo});
await instance.breedWith(34, 26, {from: coo});
await instance.breedWith(28, 29, {from: coo});
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
await instance.giveBirth(39);
await instance.giveBirth(25);
await instance.giveBirth(37);
await instance.giveBirth(15);
await instance.giveBirth(40);
await instance.giveBirth(36);
await instance.giveBirth(22);
await instance.giveBirth(33);
await instance.giveBirth(4);
await instance.giveBirth(13);
await instance.giveBirth(1);
await instance.giveBirth(6);
await instance.giveBirth(7);
await instance.giveBirth(32);
await instance.giveBirth(20);
await instance.giveBirth(3);
await instance.giveBirth(8);
await instance.giveBirth(5);
await instance.giveBirth(34);
await instance.giveBirth(28);
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
