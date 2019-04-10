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
await instance.createPromoKitty(518124897, coo, {from: coo,value: 0});
await instance.createPromoKitty(838403632, coo, {from: coo,value: 0});
await instance.createPromoKitty(647130232, coo, {from: coo,value: 0});
await instance.createPromoKitty(585733631, coo, {from: coo,value: 0});
await instance.createPromoKitty(641890767, coo, {from: coo,value: 0});
await instance.createPromoKitty(429934470, coo, {from: coo,value: 0});
await instance.createPromoKitty(780088482, coo, {from: coo,value: 0});
await instance.createPromoKitty(385175109, coo, {from: coo,value: 0});
await instance.createPromoKitty(423820969, coo, {from: coo,value: 0});
await instance.createPromoKitty(763026457, coo, {from: coo,value: 0});
await instance.createPromoKitty(451460748, coo, {from: coo,value: 0});
await instance.createPromoKitty(935080027, coo, {from: coo,value: 0});
await instance.createPromoKitty(521569198, coo, {from: coo,value: 0});
await instance.createPromoKitty(796665553, coo, {from: coo,value: 0});
await instance.createPromoKitty(780726810, coo, {from: coo,value: 0});
await instance.createPromoKitty(979766943, coo, {from: coo,value: 0});
await instance.createPromoKitty(255215613, coo, {from: coo,value: 0});
await instance.createPromoKitty(895540030, coo, {from: coo,value: 0});
await instance.createPromoKitty(834787606, coo, {from: coo,value: 0});
await instance.createPromoKitty(954294382, coo, {from: coo,value: 0});
await instance.createPromoKitty(11388350, coo, {from: coo,value: 0});
await instance.createPromoKitty(503621063, coo, {from: coo,value: 0});
await instance.createPromoKitty(638851739, coo, {from: coo,value: 0});
await instance.createPromoKitty(675050625, coo, {from: coo,value: 0});
await instance.createPromoKitty(492885627, coo, {from: coo,value: 0});
await instance.createPromoKitty(143526347, coo, {from: coo,value: 0});
await instance.createPromoKitty(610142507, coo, {from: coo,value: 0});
await instance.createPromoKitty(539643469, coo, {from: coo,value: 0});
await instance.createPromoKitty(28979601, coo, {from: coo,value: 0});
await instance.createPromoKitty(418221004, coo, {from: coo,value: 0});
await instance.createPromoKitty(349031036, coo, {from: coo,value: 0});
await instance.createPromoKitty(539719356, coo, {from: coo,value: 0});
await instance.createPromoKitty(939566872, coo, {from: coo,value: 0});
await instance.createPromoKitty(276096632, coo, {from: coo,value: 0});
await instance.createPromoKitty(609688728, coo, {from: coo,value: 0});
await instance.createPromoKitty(329211063, coo, {from: coo,value: 0});
await instance.createPromoKitty(476666034, coo, {from: coo,value: 0});
await instance.createPromoKitty(635018023, coo, {from: coo,value: 0});
await instance.createPromoKitty(730209898, coo, {from: coo,value: 0});
await instance.createPromoKitty(744722283, coo, {from: coo,value: 0});
await instance.createPromoKitty(680516538, coo, {from: coo,value: 0});
await instance.createPromoKitty(935079134, coo, {from: coo,value: 0});
await instance.createPromoKitty(274043370, coo, {from: coo,value: 0});
await instance.createPromoKitty(109125414, coo, {from: coo,value: 0});
await instance.createPromoKitty(50704546, coo, {from: coo,value: 0});
await instance.createPromoKitty(795205679, coo, {from: coo,value: 0});
await instance.createPromoKitty(68552775, coo, {from: coo,value: 0});
await instance.createPromoKitty(80909097, coo, {from: coo,value: 0});
await instance.createPromoKitty(422845326, coo, {from: coo,value: 0});
await instance.createPromoKitty(253910947, coo, {from: coo,value: 0});
await instance.createPromoKitty(726873121, coo, {from: coo,value: 0});
await instance.createPromoKitty(282283479, coo, {from: coo,value: 0});
await instance.createPromoKitty(149049761, coo, {from: coo,value: 0});
await instance.createPromoKitty(655598396, coo, {from: coo,value: 0});
await instance.createPromoKitty(276995517, coo, {from: coo,value: 0});
await instance.createPromoKitty(12175261, coo, {from: coo,value: 0});
await instance.createPromoKitty(385856078, coo, {from: coo,value: 0});
await instance.createPromoKitty(533448444, coo, {from: coo,value: 0});
await instance.createPromoKitty(778914177, coo, {from: coo,value: 0});
await instance.createPromoKitty(790753679, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(27, 32, {from: coo});
await instance.breedWith(28, 31, {from: coo});
await instance.breedWith(15, 22, {from: coo});
await instance.breedWith(38, 12, {from: coo});
await instance.breedWith(6, 35, {from: coo});
await instance.breedWith(34, 21, {from: coo});
await instance.breedWith(29, 10, {from: coo});
await instance.breedWith(33, 5, {from: coo});
await instance.breedWith(19, 18, {from: coo});
await instance.breedWith(23, 20, {from: coo});
await instance.breedWith(40, 3, {from: coo});
await instance.breedWith(17, 13, {from: coo});
await instance.breedWith(39, 11, {from: coo});
await instance.breedWith(7, 30, {from: coo});
await instance.breedWith(24, 14, {from: coo});
await instance.breedWith(2, 1, {from: coo});
await instance.breedWith(26, 16, {from: coo});
await instance.breedWith(36, 9, {from: coo});
await instance.breedWith(37, 25, {from: coo});
await instance.breedWith(8, 4, {from: coo});
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
await instance.giveBirth(27);
await instance.giveBirth(28);
await instance.giveBirth(15);
await instance.giveBirth(38);
await instance.giveBirth(6);
await instance.giveBirth(34);
await instance.giveBirth(29);
await instance.giveBirth(33);
await instance.giveBirth(19);
await instance.giveBirth(23);
await instance.giveBirth(40);
await instance.giveBirth(17);
await instance.giveBirth(39);
await instance.giveBirth(7);
await instance.giveBirth(24);
await instance.giveBirth(2);
await instance.giveBirth(26);
await instance.giveBirth(36);
await instance.giveBirth(37);
await instance.giveBirth(8);
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
