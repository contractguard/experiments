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
await instance.createPromoKitty(131351866, coo, {from: coo,value: 0});
await instance.createPromoKitty(60648514, coo, {from: coo,value: 0});
await instance.createPromoKitty(577065313, coo, {from: coo,value: 0});
await instance.createPromoKitty(633020317, coo, {from: coo,value: 0});
await instance.createPromoKitty(977698548, coo, {from: coo,value: 0});
await instance.createPromoKitty(756638360, coo, {from: coo,value: 0});
await instance.createPromoKitty(854230663, coo, {from: coo,value: 0});
await instance.createPromoKitty(95121913, coo, {from: coo,value: 0});
await instance.createPromoKitty(290747720, coo, {from: coo,value: 0});
await instance.createPromoKitty(95467135, coo, {from: coo,value: 0});
await instance.createPromoKitty(886507588, coo, {from: coo,value: 0});
await instance.createPromoKitty(176285064, coo, {from: coo,value: 0});
await instance.createPromoKitty(10304336, coo, {from: coo,value: 0});
await instance.createPromoKitty(835339787, coo, {from: coo,value: 0});
await instance.createPromoKitty(200011683, coo, {from: coo,value: 0});
await instance.createPromoKitty(742913149, coo, {from: coo,value: 0});
await instance.createPromoKitty(846876577, coo, {from: coo,value: 0});
await instance.createPromoKitty(262350240, coo, {from: coo,value: 0});
await instance.createPromoKitty(324932348, coo, {from: coo,value: 0});
await instance.createPromoKitty(595796605, coo, {from: coo,value: 0});
await instance.createPromoKitty(820329511, coo, {from: coo,value: 0});
await instance.createPromoKitty(847084576, coo, {from: coo,value: 0});
await instance.createPromoKitty(18472661, coo, {from: coo,value: 0});
await instance.createPromoKitty(207393349, coo, {from: coo,value: 0});
await instance.createPromoKitty(318786537, coo, {from: coo,value: 0});
await instance.createPromoKitty(489772739, coo, {from: coo,value: 0});
await instance.createPromoKitty(384138498, coo, {from: coo,value: 0});
await instance.createPromoKitty(111799180, coo, {from: coo,value: 0});
await instance.createPromoKitty(566109545, coo, {from: coo,value: 0});
await instance.createPromoKitty(890388024, coo, {from: coo,value: 0});
await instance.createPromoKitty(700658456, coo, {from: coo,value: 0});
await instance.createPromoKitty(747368316, coo, {from: coo,value: 0});
await instance.createPromoKitty(919318490, coo, {from: coo,value: 0});
await instance.createPromoKitty(650598252, coo, {from: coo,value: 0});
await instance.createPromoKitty(853245898, coo, {from: coo,value: 0});
await instance.createPromoKitty(29810932, coo, {from: coo,value: 0});
await instance.createPromoKitty(689482336, coo, {from: coo,value: 0});
await instance.createPromoKitty(638003261, coo, {from: coo,value: 0});
await instance.createPromoKitty(307266651, coo, {from: coo,value: 0});
await instance.createPromoKitty(252013662, coo, {from: coo,value: 0});
await instance.createPromoKitty(569098992, coo, {from: coo,value: 0});
await instance.createPromoKitty(590802646, coo, {from: coo,value: 0});
await instance.createPromoKitty(64702455, coo, {from: coo,value: 0});
await instance.createPromoKitty(843144732, coo, {from: coo,value: 0});
await instance.createPromoKitty(89505813, coo, {from: coo,value: 0});
await instance.createPromoKitty(368294190, coo, {from: coo,value: 0});
await instance.createPromoKitty(739429401, coo, {from: coo,value: 0});
await instance.createPromoKitty(72244444, coo, {from: coo,value: 0});
await instance.createPromoKitty(182468938, coo, {from: coo,value: 0});
await instance.createPromoKitty(645931521, coo, {from: coo,value: 0});
await instance.createPromoKitty(484616467, coo, {from: coo,value: 0});
await instance.createPromoKitty(774228923, coo, {from: coo,value: 0});
await instance.createPromoKitty(702516623, coo, {from: coo,value: 0});
await instance.createPromoKitty(440216019, coo, {from: coo,value: 0});
await instance.createPromoKitty(226549376, coo, {from: coo,value: 0});
await instance.createPromoKitty(216466099, coo, {from: coo,value: 0});
await instance.createPromoKitty(7716611, coo, {from: coo,value: 0});
await instance.createPromoKitty(373635641, coo, {from: coo,value: 0});
await instance.createPromoKitty(424130170, coo, {from: coo,value: 0});
await instance.createPromoKitty(111463243, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(7, 30, {from: coo});
await instance.breedWith(24, 38, {from: coo});
await instance.breedWith(9, 27, {from: coo});
await instance.breedWith(4, 17, {from: coo});
await instance.breedWith(11, 18, {from: coo});
await instance.breedWith(26, 32, {from: coo});
await instance.breedWith(19, 33, {from: coo});
await instance.breedWith(8, 13, {from: coo});
await instance.breedWith(3, 16, {from: coo});
await instance.breedWith(2, 25, {from: coo});
await instance.breedWith(23, 22, {from: coo});
await instance.breedWith(37, 15, {from: coo});
await instance.breedWith(12, 28, {from: coo});
await instance.breedWith(35, 14, {from: coo});
await instance.breedWith(10, 31, {from: coo});
await instance.breedWith(39, 40, {from: coo});
await instance.breedWith(34, 29, {from: coo});
await instance.breedWith(20, 1, {from: coo});
await instance.breedWith(36, 5, {from: coo});
await instance.breedWith(21, 6, {from: coo});
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
await instance.giveBirth(24);
await instance.giveBirth(9);
await instance.giveBirth(4);
await instance.giveBirth(11);
await instance.giveBirth(26);
await instance.giveBirth(19);
await instance.giveBirth(8);
await instance.giveBirth(3);
await instance.giveBirth(2);
await instance.giveBirth(23);
await instance.giveBirth(37);
await instance.giveBirth(12);
await instance.giveBirth(35);
await instance.giveBirth(10);
await instance.giveBirth(39);
await instance.giveBirth(34);
await instance.giveBirth(20);
await instance.giveBirth(36);
await instance.giveBirth(21);
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
