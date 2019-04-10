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
await instance.createPromoKitty(332895463, coo, {from: coo,value: 0});
await instance.createPromoKitty(205515620, coo, {from: coo,value: 0});
await instance.createPromoKitty(558250299, coo, {from: coo,value: 0});
await instance.createPromoKitty(715238284, coo, {from: coo,value: 0});
await instance.createPromoKitty(937726308, coo, {from: coo,value: 0});
await instance.createPromoKitty(268758748, coo, {from: coo,value: 0});
await instance.createPromoKitty(74603435, coo, {from: coo,value: 0});
await instance.createPromoKitty(610559399, coo, {from: coo,value: 0});
await instance.createPromoKitty(896884573, coo, {from: coo,value: 0});
await instance.createPromoKitty(348299648, coo, {from: coo,value: 0});
await instance.createPromoKitty(617039105, coo, {from: coo,value: 0});
await instance.createPromoKitty(930988495, coo, {from: coo,value: 0});
await instance.createPromoKitty(812734356, coo, {from: coo,value: 0});
await instance.createPromoKitty(962514231, coo, {from: coo,value: 0});
await instance.createPromoKitty(64432699, coo, {from: coo,value: 0});
await instance.createPromoKitty(199343934, coo, {from: coo,value: 0});
await instance.createPromoKitty(454896791, coo, {from: coo,value: 0});
await instance.createPromoKitty(763375178, coo, {from: coo,value: 0});
await instance.createPromoKitty(5403985, coo, {from: coo,value: 0});
await instance.createPromoKitty(897816017, coo, {from: coo,value: 0});
await instance.createPromoKitty(552682229, coo, {from: coo,value: 0});
await instance.createPromoKitty(251741238, coo, {from: coo,value: 0});
await instance.createPromoKitty(788233423, coo, {from: coo,value: 0});
await instance.createPromoKitty(252739775, coo, {from: coo,value: 0});
await instance.createPromoKitty(98069412, coo, {from: coo,value: 0});
await instance.createPromoKitty(719337906, coo, {from: coo,value: 0});
await instance.createPromoKitty(155578255, coo, {from: coo,value: 0});
await instance.createPromoKitty(128683411, coo, {from: coo,value: 0});
await instance.createPromoKitty(879872883, coo, {from: coo,value: 0});
await instance.createPromoKitty(574312620, coo, {from: coo,value: 0});
await instance.createPromoKitty(826846247, coo, {from: coo,value: 0});
await instance.createPromoKitty(373838049, coo, {from: coo,value: 0});
await instance.createPromoKitty(195802187, coo, {from: coo,value: 0});
await instance.createPromoKitty(760220599, coo, {from: coo,value: 0});
await instance.createPromoKitty(943978109, coo, {from: coo,value: 0});
await instance.createPromoKitty(55597072, coo, {from: coo,value: 0});
await instance.createPromoKitty(636423931, coo, {from: coo,value: 0});
await instance.createPromoKitty(441154801, coo, {from: coo,value: 0});
await instance.createPromoKitty(681233842, coo, {from: coo,value: 0});
await instance.createPromoKitty(657348955, coo, {from: coo,value: 0});
await instance.createPromoKitty(689842733, coo, {from: coo,value: 0});
await instance.createPromoKitty(596787571, coo, {from: coo,value: 0});
await instance.createPromoKitty(52074732, coo, {from: coo,value: 0});
await instance.createPromoKitty(695655328, coo, {from: coo,value: 0});
await instance.createPromoKitty(652710643, coo, {from: coo,value: 0});
await instance.createPromoKitty(931157, coo, {from: coo,value: 0});
await instance.createPromoKitty(700540598, coo, {from: coo,value: 0});
await instance.createPromoKitty(340829443, coo, {from: coo,value: 0});
await instance.createPromoKitty(15784989, coo, {from: coo,value: 0});
await instance.createPromoKitty(410472199, coo, {from: coo,value: 0});
await instance.createPromoKitty(976047330, coo, {from: coo,value: 0});
await instance.createPromoKitty(293865218, coo, {from: coo,value: 0});
await instance.createPromoKitty(897062234, coo, {from: coo,value: 0});
await instance.createPromoKitty(46964154, coo, {from: coo,value: 0});
await instance.createPromoKitty(646092559, coo, {from: coo,value: 0});
await instance.createPromoKitty(772808857, coo, {from: coo,value: 0});
await instance.createPromoKitty(244846312, coo, {from: coo,value: 0});
await instance.createPromoKitty(11994324, coo, {from: coo,value: 0});
await instance.createPromoKitty(874401609, coo, {from: coo,value: 0});
await instance.createPromoKitty(251449685, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(21, 6, {from: coo});
await instance.breedWith(15, 40, {from: coo});
await instance.breedWith(14, 9, {from: coo});
await instance.breedWith(5, 18, {from: coo});
await instance.breedWith(2, 38, {from: coo});
await instance.breedWith(35, 3, {from: coo});
await instance.breedWith(19, 37, {from: coo});
await instance.breedWith(7, 4, {from: coo});
await instance.breedWith(24, 29, {from: coo});
await instance.breedWith(17, 10, {from: coo});
await instance.breedWith(33, 32, {from: coo});
await instance.breedWith(25, 28, {from: coo});
await instance.breedWith(13, 8, {from: coo});
await instance.breedWith(31, 39, {from: coo});
await instance.breedWith(26, 36, {from: coo});
await instance.breedWith(34, 1, {from: coo});
await instance.breedWith(11, 27, {from: coo});
await instance.breedWith(12, 23, {from: coo});
await instance.breedWith(22, 20, {from: coo});
await instance.breedWith(16, 30, {from: coo});
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
await instance.giveBirth(21);
await instance.giveBirth(15);
await instance.giveBirth(14);
await instance.giveBirth(5);
await instance.giveBirth(2);
await instance.giveBirth(35);
await instance.giveBirth(19);
await instance.giveBirth(7);
await instance.giveBirth(24);
await instance.giveBirth(17);
await instance.giveBirth(33);
await instance.giveBirth(25);
await instance.giveBirth(13);
await instance.giveBirth(31);
await instance.giveBirth(26);
await instance.giveBirth(34);
await instance.giveBirth(11);
await instance.giveBirth(12);
await instance.giveBirth(22);
await instance.giveBirth(16);
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
