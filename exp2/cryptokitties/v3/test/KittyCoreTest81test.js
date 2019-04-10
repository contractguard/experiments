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
await instance.createPromoKitty(723936202, coo, {from: coo,value: 0});
await instance.createPromoKitty(94176277, coo, {from: coo,value: 0});
await instance.createPromoKitty(876083484, coo, {from: coo,value: 0});
await instance.createPromoKitty(340105210, coo, {from: coo,value: 0});
await instance.createPromoKitty(610734261, coo, {from: coo,value: 0});
await instance.createPromoKitty(764248493, coo, {from: coo,value: 0});
await instance.createPromoKitty(677827157, coo, {from: coo,value: 0});
await instance.createPromoKitty(161656430, coo, {from: coo,value: 0});
await instance.createPromoKitty(287943370, coo, {from: coo,value: 0});
await instance.createPromoKitty(191800738, coo, {from: coo,value: 0});
await instance.createPromoKitty(941105902, coo, {from: coo,value: 0});
await instance.createPromoKitty(177336579, coo, {from: coo,value: 0});
await instance.createPromoKitty(846878927, coo, {from: coo,value: 0});
await instance.createPromoKitty(596004130, coo, {from: coo,value: 0});
await instance.createPromoKitty(156971202, coo, {from: coo,value: 0});
await instance.createPromoKitty(409051370, coo, {from: coo,value: 0});
await instance.createPromoKitty(617256176, coo, {from: coo,value: 0});
await instance.createPromoKitty(409001009, coo, {from: coo,value: 0});
await instance.createPromoKitty(921713214, coo, {from: coo,value: 0});
await instance.createPromoKitty(772189043, coo, {from: coo,value: 0});
await instance.createPromoKitty(738423442, coo, {from: coo,value: 0});
await instance.createPromoKitty(456592253, coo, {from: coo,value: 0});
await instance.createPromoKitty(700466662, coo, {from: coo,value: 0});
await instance.createPromoKitty(838799112, coo, {from: coo,value: 0});
await instance.createPromoKitty(208061474, coo, {from: coo,value: 0});
await instance.createPromoKitty(201487572, coo, {from: coo,value: 0});
await instance.createPromoKitty(730484906, coo, {from: coo,value: 0});
await instance.createPromoKitty(668257764, coo, {from: coo,value: 0});
await instance.createPromoKitty(77861366, coo, {from: coo,value: 0});
await instance.createPromoKitty(809131349, coo, {from: coo,value: 0});
await instance.createPromoKitty(190783679, coo, {from: coo,value: 0});
await instance.createPromoKitty(75125505, coo, {from: coo,value: 0});
await instance.createPromoKitty(396985945, coo, {from: coo,value: 0});
await instance.createPromoKitty(583720893, coo, {from: coo,value: 0});
await instance.createPromoKitty(311162470, coo, {from: coo,value: 0});
await instance.createPromoKitty(486130893, coo, {from: coo,value: 0});
await instance.createPromoKitty(773375204, coo, {from: coo,value: 0});
await instance.createPromoKitty(135599880, coo, {from: coo,value: 0});
await instance.createPromoKitty(308113249, coo, {from: coo,value: 0});
await instance.createPromoKitty(475458236, coo, {from: coo,value: 0});
await instance.createPromoKitty(650326462, coo, {from: coo,value: 0});
await instance.createPromoKitty(590913461, coo, {from: coo,value: 0});
await instance.createPromoKitty(662552595, coo, {from: coo,value: 0});
await instance.createPromoKitty(707369811, coo, {from: coo,value: 0});
await instance.createPromoKitty(763983751, coo, {from: coo,value: 0});
await instance.createPromoKitty(131870184, coo, {from: coo,value: 0});
await instance.createPromoKitty(519264170, coo, {from: coo,value: 0});
await instance.createPromoKitty(16392719, coo, {from: coo,value: 0});
await instance.createPromoKitty(59043286, coo, {from: coo,value: 0});
await instance.createPromoKitty(54169062, coo, {from: coo,value: 0});
await instance.createPromoKitty(456885655, coo, {from: coo,value: 0});
await instance.createPromoKitty(42857411, coo, {from: coo,value: 0});
await instance.createPromoKitty(712961762, coo, {from: coo,value: 0});
await instance.createPromoKitty(118429302, coo, {from: coo,value: 0});
await instance.createPromoKitty(284919158, coo, {from: coo,value: 0});
await instance.createPromoKitty(644299886, coo, {from: coo,value: 0});
await instance.createPromoKitty(626489294, coo, {from: coo,value: 0});
await instance.createPromoKitty(426296770, coo, {from: coo,value: 0});
await instance.createPromoKitty(868493989, coo, {from: coo,value: 0});
await instance.createPromoKitty(31945464, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(40, 29, {from: coo});
await instance.breedWith(39, 11, {from: coo});
await instance.breedWith(6, 7, {from: coo});
await instance.breedWith(17, 30, {from: coo});
await instance.breedWith(22, 21, {from: coo});
await instance.breedWith(34, 8, {from: coo});
await instance.breedWith(1, 14, {from: coo});
await instance.breedWith(27, 3, {from: coo});
await instance.breedWith(15, 2, {from: coo});
await instance.breedWith(37, 24, {from: coo});
await instance.breedWith(20, 4, {from: coo});
await instance.breedWith(18, 38, {from: coo});
await instance.breedWith(36, 26, {from: coo});
await instance.breedWith(28, 16, {from: coo});
await instance.breedWith(35, 12, {from: coo});
await instance.breedWith(33, 31, {from: coo});
await instance.breedWith(25, 23, {from: coo});
await instance.breedWith(10, 19, {from: coo});
await instance.breedWith(32, 13, {from: coo});
await instance.breedWith(5, 9, {from: coo});
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
await instance.giveBirth(40);
await instance.giveBirth(39);
await instance.giveBirth(6);
await instance.giveBirth(17);
await instance.giveBirth(22);
await instance.giveBirth(34);
await instance.giveBirth(1);
await instance.giveBirth(27);
await instance.giveBirth(15);
await instance.giveBirth(37);
await instance.giveBirth(20);
await instance.giveBirth(18);
await instance.giveBirth(36);
await instance.giveBirth(28);
await instance.giveBirth(35);
await instance.giveBirth(33);
await instance.giveBirth(25);
await instance.giveBirth(10);
await instance.giveBirth(32);
await instance.giveBirth(5);
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
