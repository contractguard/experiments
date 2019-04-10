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
await instance.createPromoKitty(391849816, coo, {from: coo,value: 0});
await instance.createPromoKitty(341287396, coo, {from: coo,value: 0});
await instance.createPromoKitty(588372548, coo, {from: coo,value: 0});
await instance.createPromoKitty(244477386, coo, {from: coo,value: 0});
await instance.createPromoKitty(677668462, coo, {from: coo,value: 0});
await instance.createPromoKitty(142798920, coo, {from: coo,value: 0});
await instance.createPromoKitty(804927226, coo, {from: coo,value: 0});
await instance.createPromoKitty(313495146, coo, {from: coo,value: 0});
await instance.createPromoKitty(935047202, coo, {from: coo,value: 0});
await instance.createPromoKitty(785300618, coo, {from: coo,value: 0});
await instance.createPromoKitty(108308391, coo, {from: coo,value: 0});
await instance.createPromoKitty(928643981, coo, {from: coo,value: 0});
await instance.createPromoKitty(80471643, coo, {from: coo,value: 0});
await instance.createPromoKitty(901339342, coo, {from: coo,value: 0});
await instance.createPromoKitty(718742616, coo, {from: coo,value: 0});
await instance.createPromoKitty(950234858, coo, {from: coo,value: 0});
await instance.createPromoKitty(467913953, coo, {from: coo,value: 0});
await instance.createPromoKitty(643942444, coo, {from: coo,value: 0});
await instance.createPromoKitty(265614957, coo, {from: coo,value: 0});
await instance.createPromoKitty(337963635, coo, {from: coo,value: 0});
await instance.createPromoKitty(744722924, coo, {from: coo,value: 0});
await instance.createPromoKitty(119875358, coo, {from: coo,value: 0});
await instance.createPromoKitty(823552110, coo, {from: coo,value: 0});
await instance.createPromoKitty(273326578, coo, {from: coo,value: 0});
await instance.createPromoKitty(779434598, coo, {from: coo,value: 0});
await instance.createPromoKitty(607945894, coo, {from: coo,value: 0});
await instance.createPromoKitty(746078550, coo, {from: coo,value: 0});
await instance.createPromoKitty(590728008, coo, {from: coo,value: 0});
await instance.createPromoKitty(73046613, coo, {from: coo,value: 0});
await instance.createPromoKitty(651506984, coo, {from: coo,value: 0});
await instance.createPromoKitty(999929186, coo, {from: coo,value: 0});
await instance.createPromoKitty(477035990, coo, {from: coo,value: 0});
await instance.createPromoKitty(463248618, coo, {from: coo,value: 0});
await instance.createPromoKitty(370618003, coo, {from: coo,value: 0});
await instance.createPromoKitty(146782716, coo, {from: coo,value: 0});
await instance.createPromoKitty(333306715, coo, {from: coo,value: 0});
await instance.createPromoKitty(475876267, coo, {from: coo,value: 0});
await instance.createPromoKitty(957562999, coo, {from: coo,value: 0});
await instance.createPromoKitty(773469959, coo, {from: coo,value: 0});
await instance.createPromoKitty(590697480, coo, {from: coo,value: 0});
await instance.createPromoKitty(428683660, coo, {from: coo,value: 0});
await instance.createPromoKitty(457736432, coo, {from: coo,value: 0});
await instance.createPromoKitty(267002659, coo, {from: coo,value: 0});
await instance.createPromoKitty(255967718, coo, {from: coo,value: 0});
await instance.createPromoKitty(338434268, coo, {from: coo,value: 0});
await instance.createPromoKitty(384285159, coo, {from: coo,value: 0});
await instance.createPromoKitty(839808398, coo, {from: coo,value: 0});
await instance.createPromoKitty(732301373, coo, {from: coo,value: 0});
await instance.createPromoKitty(130529557, coo, {from: coo,value: 0});
await instance.createPromoKitty(215116492, coo, {from: coo,value: 0});
await instance.createPromoKitty(94600490, coo, {from: coo,value: 0});
await instance.createPromoKitty(425869031, coo, {from: coo,value: 0});
await instance.createPromoKitty(192590564, coo, {from: coo,value: 0});
await instance.createPromoKitty(547763437, coo, {from: coo,value: 0});
await instance.createPromoKitty(749770939, coo, {from: coo,value: 0});
await instance.createPromoKitty(779595755, coo, {from: coo,value: 0});
await instance.createPromoKitty(274559844, coo, {from: coo,value: 0});
await instance.createPromoKitty(121495920, coo, {from: coo,value: 0});
await instance.createPromoKitty(482471822, coo, {from: coo,value: 0});
await instance.createPromoKitty(943427641, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(33, 36, {from: coo});
await instance.breedWith(27, 28, {from: coo});
await instance.breedWith(19, 17, {from: coo});
await instance.breedWith(32, 37, {from: coo});
await instance.breedWith(10, 15, {from: coo});
await instance.breedWith(16, 30, {from: coo});
await instance.breedWith(8, 24, {from: coo});
await instance.breedWith(40, 7, {from: coo});
await instance.breedWith(14, 18, {from: coo});
await instance.breedWith(25, 29, {from: coo});
await instance.breedWith(26, 6, {from: coo});
await instance.breedWith(31, 22, {from: coo});
await instance.breedWith(5, 39, {from: coo});
await instance.breedWith(3, 38, {from: coo});
await instance.breedWith(1, 2, {from: coo});
await instance.breedWith(12, 23, {from: coo});
await instance.breedWith(21, 4, {from: coo});
await instance.breedWith(35, 34, {from: coo});
await instance.breedWith(20, 9, {from: coo});
await instance.breedWith(13, 11, {from: coo});
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
await instance.giveBirth(33);
await instance.giveBirth(27);
await instance.giveBirth(19);
await instance.giveBirth(32);
await instance.giveBirth(10);
await instance.giveBirth(16);
await instance.giveBirth(8);
await instance.giveBirth(40);
await instance.giveBirth(14);
await instance.giveBirth(25);
await instance.giveBirth(26);
await instance.giveBirth(31);
await instance.giveBirth(5);
await instance.giveBirth(3);
await instance.giveBirth(1);
await instance.giveBirth(12);
await instance.giveBirth(21);
await instance.giveBirth(35);
await instance.giveBirth(20);
await instance.giveBirth(13);
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
