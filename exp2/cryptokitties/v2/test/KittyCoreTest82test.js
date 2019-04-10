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
await instance.createPromoKitty(921173458, coo, {from: coo,value: 0});
await instance.createPromoKitty(608628653, coo, {from: coo,value: 0});
await instance.createPromoKitty(290917353, coo, {from: coo,value: 0});
await instance.createPromoKitty(736730794, coo, {from: coo,value: 0});
await instance.createPromoKitty(310851916, coo, {from: coo,value: 0});
await instance.createPromoKitty(9517256, coo, {from: coo,value: 0});
await instance.createPromoKitty(287124598, coo, {from: coo,value: 0});
await instance.createPromoKitty(277314269, coo, {from: coo,value: 0});
await instance.createPromoKitty(114704344, coo, {from: coo,value: 0});
await instance.createPromoKitty(798665767, coo, {from: coo,value: 0});
await instance.createPromoKitty(62143638, coo, {from: coo,value: 0});
await instance.createPromoKitty(899934033, coo, {from: coo,value: 0});
await instance.createPromoKitty(393440627, coo, {from: coo,value: 0});
await instance.createPromoKitty(885467991, coo, {from: coo,value: 0});
await instance.createPromoKitty(825927667, coo, {from: coo,value: 0});
await instance.createPromoKitty(804054881, coo, {from: coo,value: 0});
await instance.createPromoKitty(981054880, coo, {from: coo,value: 0});
await instance.createPromoKitty(826067949, coo, {from: coo,value: 0});
await instance.createPromoKitty(620346938, coo, {from: coo,value: 0});
await instance.createPromoKitty(639751225, coo, {from: coo,value: 0});
await instance.createPromoKitty(952687715, coo, {from: coo,value: 0});
await instance.createPromoKitty(322628458, coo, {from: coo,value: 0});
await instance.createPromoKitty(877923797, coo, {from: coo,value: 0});
await instance.createPromoKitty(898360014, coo, {from: coo,value: 0});
await instance.createPromoKitty(792485209, coo, {from: coo,value: 0});
await instance.createPromoKitty(255079625, coo, {from: coo,value: 0});
await instance.createPromoKitty(908623477, coo, {from: coo,value: 0});
await instance.createPromoKitty(157244115, coo, {from: coo,value: 0});
await instance.createPromoKitty(315224569, coo, {from: coo,value: 0});
await instance.createPromoKitty(718997263, coo, {from: coo,value: 0});
await instance.createPromoKitty(958924388, coo, {from: coo,value: 0});
await instance.createPromoKitty(954365066, coo, {from: coo,value: 0});
await instance.createPromoKitty(989037367, coo, {from: coo,value: 0});
await instance.createPromoKitty(570444979, coo, {from: coo,value: 0});
await instance.createPromoKitty(280220026, coo, {from: coo,value: 0});
await instance.createPromoKitty(342801016, coo, {from: coo,value: 0});
await instance.createPromoKitty(414481470, coo, {from: coo,value: 0});
await instance.createPromoKitty(770057798, coo, {from: coo,value: 0});
await instance.createPromoKitty(141340043, coo, {from: coo,value: 0});
await instance.createPromoKitty(782288099, coo, {from: coo,value: 0});
await instance.createPromoKitty(429772264, coo, {from: coo,value: 0});
await instance.createPromoKitty(974354134, coo, {from: coo,value: 0});
await instance.createPromoKitty(673508617, coo, {from: coo,value: 0});
await instance.createPromoKitty(18477831, coo, {from: coo,value: 0});
await instance.createPromoKitty(240950972, coo, {from: coo,value: 0});
await instance.createPromoKitty(860600686, coo, {from: coo,value: 0});
await instance.createPromoKitty(326409564, coo, {from: coo,value: 0});
await instance.createPromoKitty(503036069, coo, {from: coo,value: 0});
await instance.createPromoKitty(686582829, coo, {from: coo,value: 0});
await instance.createPromoKitty(98714716, coo, {from: coo,value: 0});
await instance.createPromoKitty(370093363, coo, {from: coo,value: 0});
await instance.createPromoKitty(787416772, coo, {from: coo,value: 0});
await instance.createPromoKitty(271660225, coo, {from: coo,value: 0});
await instance.createPromoKitty(584735807, coo, {from: coo,value: 0});
await instance.createPromoKitty(723335043, coo, {from: coo,value: 0});
await instance.createPromoKitty(400908064, coo, {from: coo,value: 0});
await instance.createPromoKitty(355963201, coo, {from: coo,value: 0});
await instance.createPromoKitty(411239585, coo, {from: coo,value: 0});
await instance.createPromoKitty(505972502, coo, {from: coo,value: 0});
await instance.createPromoKitty(291463257, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(11, 22, {from: coo});
await instance.breedWith(23, 6, {from: coo});
await instance.breedWith(13, 36, {from: coo});
await instance.breedWith(29, 24, {from: coo});
await instance.breedWith(18, 31, {from: coo});
await instance.breedWith(30, 4, {from: coo});
await instance.breedWith(34, 32, {from: coo});
await instance.breedWith(37, 8, {from: coo});
await instance.breedWith(26, 38, {from: coo});
await instance.breedWith(3, 12, {from: coo});
await instance.breedWith(40, 10, {from: coo});
await instance.breedWith(20, 28, {from: coo});
await instance.breedWith(16, 27, {from: coo});
await instance.breedWith(17, 5, {from: coo});
await instance.breedWith(15, 2, {from: coo});
await instance.breedWith(7, 35, {from: coo});
await instance.breedWith(19, 1, {from: coo});
await instance.breedWith(14, 39, {from: coo});
await instance.breedWith(21, 9, {from: coo});
await instance.breedWith(25, 33, {from: coo});
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
await instance.giveBirth(11);
await instance.giveBirth(23);
await instance.giveBirth(13);
await instance.giveBirth(29);
await instance.giveBirth(18);
await instance.giveBirth(30);
await instance.giveBirth(34);
await instance.giveBirth(37);
await instance.giveBirth(26);
await instance.giveBirth(3);
await instance.giveBirth(40);
await instance.giveBirth(20);
await instance.giveBirth(16);
await instance.giveBirth(17);
await instance.giveBirth(15);
await instance.giveBirth(7);
await instance.giveBirth(19);
await instance.giveBirth(14);
await instance.giveBirth(21);
await instance.giveBirth(25);
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
