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
await instance.createPromoKitty(647118701, coo, {from: coo,value: 0});
await instance.createPromoKitty(473086557, coo, {from: coo,value: 0});
await instance.createPromoKitty(64167250, coo, {from: coo,value: 0});
await instance.createPromoKitty(990074745, coo, {from: coo,value: 0});
await instance.createPromoKitty(781117896, coo, {from: coo,value: 0});
await instance.createPromoKitty(673501996, coo, {from: coo,value: 0});
await instance.createPromoKitty(256998204, coo, {from: coo,value: 0});
await instance.createPromoKitty(757270112, coo, {from: coo,value: 0});
await instance.createPromoKitty(61624198, coo, {from: coo,value: 0});
await instance.createPromoKitty(146476064, coo, {from: coo,value: 0});
await instance.createPromoKitty(415579647, coo, {from: coo,value: 0});
await instance.createPromoKitty(274578771, coo, {from: coo,value: 0});
await instance.createPromoKitty(928672185, coo, {from: coo,value: 0});
await instance.createPromoKitty(660815847, coo, {from: coo,value: 0});
await instance.createPromoKitty(670308375, coo, {from: coo,value: 0});
await instance.createPromoKitty(887651297, coo, {from: coo,value: 0});
await instance.createPromoKitty(171728870, coo, {from: coo,value: 0});
await instance.createPromoKitty(452219172, coo, {from: coo,value: 0});
await instance.createPromoKitty(227767480, coo, {from: coo,value: 0});
await instance.createPromoKitty(91751554, coo, {from: coo,value: 0});
await instance.createPromoKitty(339078340, coo, {from: coo,value: 0});
await instance.createPromoKitty(510242660, coo, {from: coo,value: 0});
await instance.createPromoKitty(991357763, coo, {from: coo,value: 0});
await instance.createPromoKitty(774214109, coo, {from: coo,value: 0});
await instance.createPromoKitty(630569811, coo, {from: coo,value: 0});
await instance.createPromoKitty(894522961, coo, {from: coo,value: 0});
await instance.createPromoKitty(673009624, coo, {from: coo,value: 0});
await instance.createPromoKitty(407425630, coo, {from: coo,value: 0});
await instance.createPromoKitty(734845555, coo, {from: coo,value: 0});
await instance.createPromoKitty(966426988, coo, {from: coo,value: 0});
await instance.createPromoKitty(491334190, coo, {from: coo,value: 0});
await instance.createPromoKitty(411028924, coo, {from: coo,value: 0});
await instance.createPromoKitty(985766859, coo, {from: coo,value: 0});
await instance.createPromoKitty(87674009, coo, {from: coo,value: 0});
await instance.createPromoKitty(276510226, coo, {from: coo,value: 0});
await instance.createPromoKitty(825766768, coo, {from: coo,value: 0});
await instance.createPromoKitty(728213992, coo, {from: coo,value: 0});
await instance.createPromoKitty(548332014, coo, {from: coo,value: 0});
await instance.createPromoKitty(333142102, coo, {from: coo,value: 0});
await instance.createPromoKitty(920506879, coo, {from: coo,value: 0});
await instance.createPromoKitty(988272071, coo, {from: coo,value: 0});
await instance.createPromoKitty(928039708, coo, {from: coo,value: 0});
await instance.createPromoKitty(529718461, coo, {from: coo,value: 0});
await instance.createPromoKitty(787844010, coo, {from: coo,value: 0});
await instance.createPromoKitty(804604662, coo, {from: coo,value: 0});
await instance.createPromoKitty(499390885, coo, {from: coo,value: 0});
await instance.createPromoKitty(125933366, coo, {from: coo,value: 0});
await instance.createPromoKitty(407495639, coo, {from: coo,value: 0});
await instance.createPromoKitty(872684118, coo, {from: coo,value: 0});
await instance.createPromoKitty(940531894, coo, {from: coo,value: 0});
await instance.createPromoKitty(638096227, coo, {from: coo,value: 0});
await instance.createPromoKitty(531139963, coo, {from: coo,value: 0});
await instance.createPromoKitty(615046014, coo, {from: coo,value: 0});
await instance.createPromoKitty(171466314, coo, {from: coo,value: 0});
await instance.createPromoKitty(761848201, coo, {from: coo,value: 0});
await instance.createPromoKitty(422577378, coo, {from: coo,value: 0});
await instance.createPromoKitty(680765906, coo, {from: coo,value: 0});
await instance.createPromoKitty(882237569, coo, {from: coo,value: 0});
await instance.createPromoKitty(445506887, coo, {from: coo,value: 0});
await instance.createPromoKitty(690117071, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(32, 35, {from: coo});
await instance.breedWith(11, 7, {from: coo});
await instance.breedWith(3, 5, {from: coo});
await instance.breedWith(24, 17, {from: coo});
await instance.breedWith(14, 18, {from: coo});
await instance.breedWith(1, 29, {from: coo});
await instance.breedWith(28, 27, {from: coo});
await instance.breedWith(36, 6, {from: coo});
await instance.breedWith(2, 16, {from: coo});
await instance.breedWith(26, 30, {from: coo});
await instance.breedWith(33, 31, {from: coo});
await instance.breedWith(25, 4, {from: coo});
await instance.breedWith(20, 37, {from: coo});
await instance.breedWith(39, 9, {from: coo});
await instance.breedWith(21, 10, {from: coo});
await instance.breedWith(22, 19, {from: coo});
await instance.breedWith(40, 8, {from: coo});
await instance.breedWith(23, 38, {from: coo});
await instance.breedWith(12, 13, {from: coo});
await instance.breedWith(15, 34, {from: coo});
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
await instance.giveBirth(32);
await instance.giveBirth(11);
await instance.giveBirth(3);
await instance.giveBirth(24);
await instance.giveBirth(14);
await instance.giveBirth(1);
await instance.giveBirth(28);
await instance.giveBirth(36);
await instance.giveBirth(2);
await instance.giveBirth(26);
await instance.giveBirth(33);
await instance.giveBirth(25);
await instance.giveBirth(20);
await instance.giveBirth(39);
await instance.giveBirth(21);
await instance.giveBirth(22);
await instance.giveBirth(40);
await instance.giveBirth(23);
await instance.giveBirth(12);
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
