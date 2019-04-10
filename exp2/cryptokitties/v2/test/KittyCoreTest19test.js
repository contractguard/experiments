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
await instance.createPromoKitty(260639229, coo, {from: coo,value: 0});
await instance.createPromoKitty(456907770, coo, {from: coo,value: 0});
await instance.createPromoKitty(548965095, coo, {from: coo,value: 0});
await instance.createPromoKitty(209967575, coo, {from: coo,value: 0});
await instance.createPromoKitty(29018633, coo, {from: coo,value: 0});
await instance.createPromoKitty(372252978, coo, {from: coo,value: 0});
await instance.createPromoKitty(730503033, coo, {from: coo,value: 0});
await instance.createPromoKitty(970730918, coo, {from: coo,value: 0});
await instance.createPromoKitty(313653936, coo, {from: coo,value: 0});
await instance.createPromoKitty(471568134, coo, {from: coo,value: 0});
await instance.createPromoKitty(131360815, coo, {from: coo,value: 0});
await instance.createPromoKitty(24201119, coo, {from: coo,value: 0});
await instance.createPromoKitty(336780219, coo, {from: coo,value: 0});
await instance.createPromoKitty(806845399, coo, {from: coo,value: 0});
await instance.createPromoKitty(703120042, coo, {from: coo,value: 0});
await instance.createPromoKitty(312557461, coo, {from: coo,value: 0});
await instance.createPromoKitty(954258996, coo, {from: coo,value: 0});
await instance.createPromoKitty(643609257, coo, {from: coo,value: 0});
await instance.createPromoKitty(895174603, coo, {from: coo,value: 0});
await instance.createPromoKitty(966274061, coo, {from: coo,value: 0});
await instance.createPromoKitty(297124651, coo, {from: coo,value: 0});
await instance.createPromoKitty(51943597, coo, {from: coo,value: 0});
await instance.createPromoKitty(409792114, coo, {from: coo,value: 0});
await instance.createPromoKitty(426717266, coo, {from: coo,value: 0});
await instance.createPromoKitty(308859701, coo, {from: coo,value: 0});
await instance.createPromoKitty(910776438, coo, {from: coo,value: 0});
await instance.createPromoKitty(952746566, coo, {from: coo,value: 0});
await instance.createPromoKitty(807919228, coo, {from: coo,value: 0});
await instance.createPromoKitty(726233854, coo, {from: coo,value: 0});
await instance.createPromoKitty(724829727, coo, {from: coo,value: 0});
await instance.createPromoKitty(266084489, coo, {from: coo,value: 0});
await instance.createPromoKitty(363013692, coo, {from: coo,value: 0});
await instance.createPromoKitty(810656848, coo, {from: coo,value: 0});
await instance.createPromoKitty(715741385, coo, {from: coo,value: 0});
await instance.createPromoKitty(449121802, coo, {from: coo,value: 0});
await instance.createPromoKitty(387173858, coo, {from: coo,value: 0});
await instance.createPromoKitty(726453972, coo, {from: coo,value: 0});
await instance.createPromoKitty(350251399, coo, {from: coo,value: 0});
await instance.createPromoKitty(932142120, coo, {from: coo,value: 0});
await instance.createPromoKitty(701200709, coo, {from: coo,value: 0});
await instance.createPromoKitty(57508302, coo, {from: coo,value: 0});
await instance.createPromoKitty(672671526, coo, {from: coo,value: 0});
await instance.createPromoKitty(153331156, coo, {from: coo,value: 0});
await instance.createPromoKitty(925073434, coo, {from: coo,value: 0});
await instance.createPromoKitty(379953311, coo, {from: coo,value: 0});
await instance.createPromoKitty(213004069, coo, {from: coo,value: 0});
await instance.createPromoKitty(420808168, coo, {from: coo,value: 0});
await instance.createPromoKitty(21420864, coo, {from: coo,value: 0});
await instance.createPromoKitty(169591212, coo, {from: coo,value: 0});
await instance.createPromoKitty(290234101, coo, {from: coo,value: 0});
await instance.createPromoKitty(734054390, coo, {from: coo,value: 0});
await instance.createPromoKitty(437471296, coo, {from: coo,value: 0});
await instance.createPromoKitty(978762052, coo, {from: coo,value: 0});
await instance.createPromoKitty(833925223, coo, {from: coo,value: 0});
await instance.createPromoKitty(146272549, coo, {from: coo,value: 0});
await instance.createPromoKitty(528762632, coo, {from: coo,value: 0});
await instance.createPromoKitty(74550778, coo, {from: coo,value: 0});
await instance.createPromoKitty(619598068, coo, {from: coo,value: 0});
await instance.createPromoKitty(900417236, coo, {from: coo,value: 0});
await instance.createPromoKitty(291620299, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(24, 25, {from: coo});
await instance.breedWith(1, 15, {from: coo});
await instance.breedWith(16, 34, {from: coo});
await instance.breedWith(38, 12, {from: coo});
await instance.breedWith(14, 27, {from: coo});
await instance.breedWith(3, 40, {from: coo});
await instance.breedWith(35, 13, {from: coo});
await instance.breedWith(21, 29, {from: coo});
await instance.breedWith(19, 33, {from: coo});
await instance.breedWith(9, 30, {from: coo});
await instance.breedWith(5, 4, {from: coo});
await instance.breedWith(10, 28, {from: coo});
await instance.breedWith(39, 6, {from: coo});
await instance.breedWith(11, 37, {from: coo});
await instance.breedWith(26, 2, {from: coo});
await instance.breedWith(7, 20, {from: coo});
await instance.breedWith(32, 17, {from: coo});
await instance.breedWith(18, 36, {from: coo});
await instance.breedWith(8, 23, {from: coo});
await instance.breedWith(22, 31, {from: coo});
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
await instance.giveBirth(24);
await instance.giveBirth(1);
await instance.giveBirth(16);
await instance.giveBirth(38);
await instance.giveBirth(14);
await instance.giveBirth(3);
await instance.giveBirth(35);
await instance.giveBirth(21);
await instance.giveBirth(19);
await instance.giveBirth(9);
await instance.giveBirth(5);
await instance.giveBirth(10);
await instance.giveBirth(39);
await instance.giveBirth(11);
await instance.giveBirth(26);
await instance.giveBirth(7);
await instance.giveBirth(32);
await instance.giveBirth(18);
await instance.giveBirth(8);
await instance.giveBirth(22);
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
