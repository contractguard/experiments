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
await instance.createPromoKitty(988470460, coo, {from: coo,value: 0});
await instance.createPromoKitty(351516969, coo, {from: coo,value: 0});
await instance.createPromoKitty(554006181, coo, {from: coo,value: 0});
await instance.createPromoKitty(47130288, coo, {from: coo,value: 0});
await instance.createPromoKitty(766205238, coo, {from: coo,value: 0});
await instance.createPromoKitty(825181623, coo, {from: coo,value: 0});
await instance.createPromoKitty(704596257, coo, {from: coo,value: 0});
await instance.createPromoKitty(491930061, coo, {from: coo,value: 0});
await instance.createPromoKitty(677664178, coo, {from: coo,value: 0});
await instance.createPromoKitty(868620022, coo, {from: coo,value: 0});
await instance.createPromoKitty(818814276, coo, {from: coo,value: 0});
await instance.createPromoKitty(175582685, coo, {from: coo,value: 0});
await instance.createPromoKitty(145616537, coo, {from: coo,value: 0});
await instance.createPromoKitty(417483469, coo, {from: coo,value: 0});
await instance.createPromoKitty(688975048, coo, {from: coo,value: 0});
await instance.createPromoKitty(322975378, coo, {from: coo,value: 0});
await instance.createPromoKitty(988937174, coo, {from: coo,value: 0});
await instance.createPromoKitty(749518652, coo, {from: coo,value: 0});
await instance.createPromoKitty(639833827, coo, {from: coo,value: 0});
await instance.createPromoKitty(356254161, coo, {from: coo,value: 0});
await instance.createPromoKitty(329632910, coo, {from: coo,value: 0});
await instance.createPromoKitty(59439913, coo, {from: coo,value: 0});
await instance.createPromoKitty(194325250, coo, {from: coo,value: 0});
await instance.createPromoKitty(298160758, coo, {from: coo,value: 0});
await instance.createPromoKitty(628565097, coo, {from: coo,value: 0});
await instance.createPromoKitty(989306518, coo, {from: coo,value: 0});
await instance.createPromoKitty(18366193, coo, {from: coo,value: 0});
await instance.createPromoKitty(365650407, coo, {from: coo,value: 0});
await instance.createPromoKitty(769652865, coo, {from: coo,value: 0});
await instance.createPromoKitty(91624852, coo, {from: coo,value: 0});
await instance.createPromoKitty(597248943, coo, {from: coo,value: 0});
await instance.createPromoKitty(727652822, coo, {from: coo,value: 0});
await instance.createPromoKitty(852797939, coo, {from: coo,value: 0});
await instance.createPromoKitty(88588775, coo, {from: coo,value: 0});
await instance.createPromoKitty(105620185, coo, {from: coo,value: 0});
await instance.createPromoKitty(692748105, coo, {from: coo,value: 0});
await instance.createPromoKitty(284980178, coo, {from: coo,value: 0});
await instance.createPromoKitty(637156645, coo, {from: coo,value: 0});
await instance.createPromoKitty(294843081, coo, {from: coo,value: 0});
await instance.createPromoKitty(499011437, coo, {from: coo,value: 0});
await instance.createPromoKitty(135070266, coo, {from: coo,value: 0});
await instance.createPromoKitty(95084401, coo, {from: coo,value: 0});
await instance.createPromoKitty(761624642, coo, {from: coo,value: 0});
await instance.createPromoKitty(166794454, coo, {from: coo,value: 0});
await instance.createPromoKitty(471678980, coo, {from: coo,value: 0});
await instance.createPromoKitty(625073179, coo, {from: coo,value: 0});
await instance.createPromoKitty(594903547, coo, {from: coo,value: 0});
await instance.createPromoKitty(60195756, coo, {from: coo,value: 0});
await instance.createPromoKitty(601943034, coo, {from: coo,value: 0});
await instance.createPromoKitty(885392424, coo, {from: coo,value: 0});
await instance.createPromoKitty(826272856, coo, {from: coo,value: 0});
await instance.createPromoKitty(978344809, coo, {from: coo,value: 0});
await instance.createPromoKitty(614525422, coo, {from: coo,value: 0});
await instance.createPromoKitty(571341415, coo, {from: coo,value: 0});
await instance.createPromoKitty(898751883, coo, {from: coo,value: 0});
await instance.createPromoKitty(775849420, coo, {from: coo,value: 0});
await instance.createPromoKitty(776752283, coo, {from: coo,value: 0});
await instance.createPromoKitty(472456049, coo, {from: coo,value: 0});
await instance.createPromoKitty(325793466, coo, {from: coo,value: 0});
await instance.createPromoKitty(678119146, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(36, 37, {from: coo});
await instance.breedWith(5, 14, {from: coo});
await instance.breedWith(27, 3, {from: coo});
await instance.breedWith(18, 23, {from: coo});
await instance.breedWith(40, 22, {from: coo});
await instance.breedWith(24, 19, {from: coo});
await instance.breedWith(16, 13, {from: coo});
await instance.breedWith(34, 7, {from: coo});
await instance.breedWith(12, 33, {from: coo});
await instance.breedWith(32, 25, {from: coo});
await instance.breedWith(38, 2, {from: coo});
await instance.breedWith(4, 6, {from: coo});
await instance.breedWith(1, 39, {from: coo});
await instance.breedWith(28, 31, {from: coo});
await instance.breedWith(29, 21, {from: coo});
await instance.breedWith(30, 10, {from: coo});
await instance.breedWith(17, 15, {from: coo});
await instance.breedWith(11, 35, {from: coo});
await instance.breedWith(9, 20, {from: coo});
await instance.breedWith(26, 8, {from: coo});
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
await instance.giveBirth(36);
await instance.giveBirth(5);
await instance.giveBirth(27);
await instance.giveBirth(18);
await instance.giveBirth(40);
await instance.giveBirth(24);
await instance.giveBirth(16);
await instance.giveBirth(34);
await instance.giveBirth(12);
await instance.giveBirth(32);
await instance.giveBirth(38);
await instance.giveBirth(4);
await instance.giveBirth(1);
await instance.giveBirth(28);
await instance.giveBirth(29);
await instance.giveBirth(30);
await instance.giveBirth(17);
await instance.giveBirth(11);
await instance.giveBirth(9);
await instance.giveBirth(26);
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
