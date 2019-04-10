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
await instance.createPromoKitty(33982187, coo, {from: coo,value: 0});
await instance.createPromoKitty(228096467, coo, {from: coo,value: 0});
await instance.createPromoKitty(433264066, coo, {from: coo,value: 0});
await instance.createPromoKitty(347415467, coo, {from: coo,value: 0});
await instance.createPromoKitty(203214107, coo, {from: coo,value: 0});
await instance.createPromoKitty(225777803, coo, {from: coo,value: 0});
await instance.createPromoKitty(635443512, coo, {from: coo,value: 0});
await instance.createPromoKitty(737068591, coo, {from: coo,value: 0});
await instance.createPromoKitty(820060781, coo, {from: coo,value: 0});
await instance.createPromoKitty(753234892, coo, {from: coo,value: 0});
await instance.createPromoKitty(650385837, coo, {from: coo,value: 0});
await instance.createPromoKitty(874045190, coo, {from: coo,value: 0});
await instance.createPromoKitty(617052878, coo, {from: coo,value: 0});
await instance.createPromoKitty(175676903, coo, {from: coo,value: 0});
await instance.createPromoKitty(93886942, coo, {from: coo,value: 0});
await instance.createPromoKitty(949120090, coo, {from: coo,value: 0});
await instance.createPromoKitty(744822286, coo, {from: coo,value: 0});
await instance.createPromoKitty(499328995, coo, {from: coo,value: 0});
await instance.createPromoKitty(836683143, coo, {from: coo,value: 0});
await instance.createPromoKitty(759750412, coo, {from: coo,value: 0});
await instance.createPromoKitty(888800072, coo, {from: coo,value: 0});
await instance.createPromoKitty(242291652, coo, {from: coo,value: 0});
await instance.createPromoKitty(862380896, coo, {from: coo,value: 0});
await instance.createPromoKitty(171880079, coo, {from: coo,value: 0});
await instance.createPromoKitty(208525440, coo, {from: coo,value: 0});
await instance.createPromoKitty(504997465, coo, {from: coo,value: 0});
await instance.createPromoKitty(567230808, coo, {from: coo,value: 0});
await instance.createPromoKitty(636284451, coo, {from: coo,value: 0});
await instance.createPromoKitty(824762434, coo, {from: coo,value: 0});
await instance.createPromoKitty(248295496, coo, {from: coo,value: 0});
await instance.createPromoKitty(798034711, coo, {from: coo,value: 0});
await instance.createPromoKitty(216564240, coo, {from: coo,value: 0});
await instance.createPromoKitty(795936343, coo, {from: coo,value: 0});
await instance.createPromoKitty(667578210, coo, {from: coo,value: 0});
await instance.createPromoKitty(4144144, coo, {from: coo,value: 0});
await instance.createPromoKitty(408402635, coo, {from: coo,value: 0});
await instance.createPromoKitty(183488814, coo, {from: coo,value: 0});
await instance.createPromoKitty(591806926, coo, {from: coo,value: 0});
await instance.createPromoKitty(554880, coo, {from: coo,value: 0});
await instance.createPromoKitty(83986513, coo, {from: coo,value: 0});
await instance.createPromoKitty(698320945, coo, {from: coo,value: 0});
await instance.createPromoKitty(499745387, coo, {from: coo,value: 0});
await instance.createPromoKitty(894460585, coo, {from: coo,value: 0});
await instance.createPromoKitty(368561617, coo, {from: coo,value: 0});
await instance.createPromoKitty(172923994, coo, {from: coo,value: 0});
await instance.createPromoKitty(406016304, coo, {from: coo,value: 0});
await instance.createPromoKitty(487526127, coo, {from: coo,value: 0});
await instance.createPromoKitty(901202137, coo, {from: coo,value: 0});
await instance.createPromoKitty(194604765, coo, {from: coo,value: 0});
await instance.createPromoKitty(197963441, coo, {from: coo,value: 0});
await instance.createPromoKitty(695669668, coo, {from: coo,value: 0});
await instance.createPromoKitty(33287688, coo, {from: coo,value: 0});
await instance.createPromoKitty(923275081, coo, {from: coo,value: 0});
await instance.createPromoKitty(845691537, coo, {from: coo,value: 0});
await instance.createPromoKitty(762837767, coo, {from: coo,value: 0});
await instance.createPromoKitty(236337464, coo, {from: coo,value: 0});
await instance.createPromoKitty(868163977, coo, {from: coo,value: 0});
await instance.createPromoKitty(139958387, coo, {from: coo,value: 0});
await instance.createPromoKitty(745586091, coo, {from: coo,value: 0});
await instance.createPromoKitty(252549794, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(8, 39, {from: coo});
await instance.breedWith(37, 28, {from: coo});
await instance.breedWith(21, 5, {from: coo});
await instance.breedWith(24, 7, {from: coo});
await instance.breedWith(23, 26, {from: coo});
await instance.breedWith(4, 29, {from: coo});
await instance.breedWith(2, 22, {from: coo});
await instance.breedWith(10, 34, {from: coo});
await instance.breedWith(12, 35, {from: coo});
await instance.breedWith(27, 13, {from: coo});
await instance.breedWith(20, 17, {from: coo});
await instance.breedWith(9, 31, {from: coo});
await instance.breedWith(40, 15, {from: coo});
await instance.breedWith(30, 32, {from: coo});
await instance.breedWith(14, 1, {from: coo});
await instance.breedWith(11, 33, {from: coo});
await instance.breedWith(19, 18, {from: coo});
await instance.breedWith(25, 38, {from: coo});
await instance.breedWith(36, 16, {from: coo});
await instance.breedWith(3, 6, {from: coo});
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
await instance.giveBirth(8);
await instance.giveBirth(37);
await instance.giveBirth(21);
await instance.giveBirth(24);
await instance.giveBirth(23);
await instance.giveBirth(4);
await instance.giveBirth(2);
await instance.giveBirth(10);
await instance.giveBirth(12);
await instance.giveBirth(27);
await instance.giveBirth(20);
await instance.giveBirth(9);
await instance.giveBirth(40);
await instance.giveBirth(30);
await instance.giveBirth(14);
await instance.giveBirth(11);
await instance.giveBirth(19);
await instance.giveBirth(25);
await instance.giveBirth(36);
await instance.giveBirth(3);
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
