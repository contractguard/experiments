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
await instance.createPromoKitty(292553088, coo, {from: coo,value: 0});
await instance.createPromoKitty(37819122, coo, {from: coo,value: 0});
await instance.createPromoKitty(248891966, coo, {from: coo,value: 0});
await instance.createPromoKitty(921420839, coo, {from: coo,value: 0});
await instance.createPromoKitty(426937656, coo, {from: coo,value: 0});
await instance.createPromoKitty(391451212, coo, {from: coo,value: 0});
await instance.createPromoKitty(253388593, coo, {from: coo,value: 0});
await instance.createPromoKitty(434626389, coo, {from: coo,value: 0});
await instance.createPromoKitty(615896787, coo, {from: coo,value: 0});
await instance.createPromoKitty(832093456, coo, {from: coo,value: 0});
await instance.createPromoKitty(521229571, coo, {from: coo,value: 0});
await instance.createPromoKitty(532429014, coo, {from: coo,value: 0});
await instance.createPromoKitty(817105772, coo, {from: coo,value: 0});
await instance.createPromoKitty(483531458, coo, {from: coo,value: 0});
await instance.createPromoKitty(532397331, coo, {from: coo,value: 0});
await instance.createPromoKitty(82651722, coo, {from: coo,value: 0});
await instance.createPromoKitty(738793471, coo, {from: coo,value: 0});
await instance.createPromoKitty(417653112, coo, {from: coo,value: 0});
await instance.createPromoKitty(157611466, coo, {from: coo,value: 0});
await instance.createPromoKitty(770449331, coo, {from: coo,value: 0});
await instance.createPromoKitty(419728650, coo, {from: coo,value: 0});
await instance.createPromoKitty(777028170, coo, {from: coo,value: 0});
await instance.createPromoKitty(175862846, coo, {from: coo,value: 0});
await instance.createPromoKitty(305874653, coo, {from: coo,value: 0});
await instance.createPromoKitty(358963461, coo, {from: coo,value: 0});
await instance.createPromoKitty(625678734, coo, {from: coo,value: 0});
await instance.createPromoKitty(978339802, coo, {from: coo,value: 0});
await instance.createPromoKitty(264979512, coo, {from: coo,value: 0});
await instance.createPromoKitty(540666291, coo, {from: coo,value: 0});
await instance.createPromoKitty(616398165, coo, {from: coo,value: 0});
await instance.createPromoKitty(119414214, coo, {from: coo,value: 0});
await instance.createPromoKitty(420137874, coo, {from: coo,value: 0});
await instance.createPromoKitty(500162066, coo, {from: coo,value: 0});
await instance.createPromoKitty(878831811, coo, {from: coo,value: 0});
await instance.createPromoKitty(963008288, coo, {from: coo,value: 0});
await instance.createPromoKitty(324657251, coo, {from: coo,value: 0});
await instance.createPromoKitty(212129583, coo, {from: coo,value: 0});
await instance.createPromoKitty(142531656, coo, {from: coo,value: 0});
await instance.createPromoKitty(533923912, coo, {from: coo,value: 0});
await instance.createPromoKitty(268198140, coo, {from: coo,value: 0});
await instance.createPromoKitty(200327969, coo, {from: coo,value: 0});
await instance.createPromoKitty(282514769, coo, {from: coo,value: 0});
await instance.createPromoKitty(35932713, coo, {from: coo,value: 0});
await instance.createPromoKitty(477050940, coo, {from: coo,value: 0});
await instance.createPromoKitty(41334279, coo, {from: coo,value: 0});
await instance.createPromoKitty(921757863, coo, {from: coo,value: 0});
await instance.createPromoKitty(147817800, coo, {from: coo,value: 0});
await instance.createPromoKitty(556733351, coo, {from: coo,value: 0});
await instance.createPromoKitty(714140442, coo, {from: coo,value: 0});
await instance.createPromoKitty(772254931, coo, {from: coo,value: 0});
await instance.createPromoKitty(161531958, coo, {from: coo,value: 0});
await instance.createPromoKitty(316845312, coo, {from: coo,value: 0});
await instance.createPromoKitty(412419627, coo, {from: coo,value: 0});
await instance.createPromoKitty(847955995, coo, {from: coo,value: 0});
await instance.createPromoKitty(968181501, coo, {from: coo,value: 0});
await instance.createPromoKitty(696281999, coo, {from: coo,value: 0});
await instance.createPromoKitty(957476697, coo, {from: coo,value: 0});
await instance.createPromoKitty(889738969, coo, {from: coo,value: 0});
await instance.createPromoKitty(567937132, coo, {from: coo,value: 0});
await instance.createPromoKitty(845264859, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(39, 21, {from: coo});
await instance.breedWith(4, 18, {from: coo});
await instance.breedWith(12, 28, {from: coo});
await instance.breedWith(36, 26, {from: coo});
await instance.breedWith(29, 8, {from: coo});
await instance.breedWith(32, 11, {from: coo});
await instance.breedWith(33, 2, {from: coo});
await instance.breedWith(7, 1, {from: coo});
await instance.breedWith(17, 23, {from: coo});
await instance.breedWith(16, 25, {from: coo});
await instance.breedWith(3, 30, {from: coo});
await instance.breedWith(35, 10, {from: coo});
await instance.breedWith(5, 19, {from: coo});
await instance.breedWith(27, 20, {from: coo});
await instance.breedWith(24, 40, {from: coo});
await instance.breedWith(15, 6, {from: coo});
await instance.breedWith(38, 13, {from: coo});
await instance.breedWith(37, 22, {from: coo});
await instance.breedWith(34, 9, {from: coo});
await instance.breedWith(14, 31, {from: coo});
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
await instance.giveBirth(4);
await instance.giveBirth(12);
await instance.giveBirth(36);
await instance.giveBirth(29);
await instance.giveBirth(32);
await instance.giveBirth(33);
await instance.giveBirth(7);
await instance.giveBirth(17);
await instance.giveBirth(16);
await instance.giveBirth(3);
await instance.giveBirth(35);
await instance.giveBirth(5);
await instance.giveBirth(27);
await instance.giveBirth(24);
await instance.giveBirth(15);
await instance.giveBirth(38);
await instance.giveBirth(37);
await instance.giveBirth(34);
await instance.giveBirth(14);
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
