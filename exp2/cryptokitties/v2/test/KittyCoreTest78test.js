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
await instance.createPromoKitty(273422601, coo, {from: coo,value: 0});
await instance.createPromoKitty(43782748, coo, {from: coo,value: 0});
await instance.createPromoKitty(258036640, coo, {from: coo,value: 0});
await instance.createPromoKitty(750151671, coo, {from: coo,value: 0});
await instance.createPromoKitty(516501049, coo, {from: coo,value: 0});
await instance.createPromoKitty(922021681, coo, {from: coo,value: 0});
await instance.createPromoKitty(203074003, coo, {from: coo,value: 0});
await instance.createPromoKitty(529446607, coo, {from: coo,value: 0});
await instance.createPromoKitty(277257438, coo, {from: coo,value: 0});
await instance.createPromoKitty(898882588, coo, {from: coo,value: 0});
await instance.createPromoKitty(427869930, coo, {from: coo,value: 0});
await instance.createPromoKitty(510656182, coo, {from: coo,value: 0});
await instance.createPromoKitty(19318399, coo, {from: coo,value: 0});
await instance.createPromoKitty(506558159, coo, {from: coo,value: 0});
await instance.createPromoKitty(843562489, coo, {from: coo,value: 0});
await instance.createPromoKitty(117276271, coo, {from: coo,value: 0});
await instance.createPromoKitty(422136390, coo, {from: coo,value: 0});
await instance.createPromoKitty(275405279, coo, {from: coo,value: 0});
await instance.createPromoKitty(742014520, coo, {from: coo,value: 0});
await instance.createPromoKitty(315418867, coo, {from: coo,value: 0});
await instance.createPromoKitty(225972313, coo, {from: coo,value: 0});
await instance.createPromoKitty(713233323, coo, {from: coo,value: 0});
await instance.createPromoKitty(474664378, coo, {from: coo,value: 0});
await instance.createPromoKitty(305870489, coo, {from: coo,value: 0});
await instance.createPromoKitty(441781531, coo, {from: coo,value: 0});
await instance.createPromoKitty(389372163, coo, {from: coo,value: 0});
await instance.createPromoKitty(940966506, coo, {from: coo,value: 0});
await instance.createPromoKitty(5908807, coo, {from: coo,value: 0});
await instance.createPromoKitty(225550986, coo, {from: coo,value: 0});
await instance.createPromoKitty(469520646, coo, {from: coo,value: 0});
await instance.createPromoKitty(202275720, coo, {from: coo,value: 0});
await instance.createPromoKitty(338005364, coo, {from: coo,value: 0});
await instance.createPromoKitty(140597957, coo, {from: coo,value: 0});
await instance.createPromoKitty(566205463, coo, {from: coo,value: 0});
await instance.createPromoKitty(568617581, coo, {from: coo,value: 0});
await instance.createPromoKitty(846374860, coo, {from: coo,value: 0});
await instance.createPromoKitty(3467578, coo, {from: coo,value: 0});
await instance.createPromoKitty(575628633, coo, {from: coo,value: 0});
await instance.createPromoKitty(493734489, coo, {from: coo,value: 0});
await instance.createPromoKitty(924108124, coo, {from: coo,value: 0});
await instance.createPromoKitty(392526889, coo, {from: coo,value: 0});
await instance.createPromoKitty(807264319, coo, {from: coo,value: 0});
await instance.createPromoKitty(942659397, coo, {from: coo,value: 0});
await instance.createPromoKitty(876229635, coo, {from: coo,value: 0});
await instance.createPromoKitty(748297645, coo, {from: coo,value: 0});
await instance.createPromoKitty(223601241, coo, {from: coo,value: 0});
await instance.createPromoKitty(801476549, coo, {from: coo,value: 0});
await instance.createPromoKitty(690584146, coo, {from: coo,value: 0});
await instance.createPromoKitty(319050491, coo, {from: coo,value: 0});
await instance.createPromoKitty(809877560, coo, {from: coo,value: 0});
await instance.createPromoKitty(804229740, coo, {from: coo,value: 0});
await instance.createPromoKitty(604548197, coo, {from: coo,value: 0});
await instance.createPromoKitty(638928594, coo, {from: coo,value: 0});
await instance.createPromoKitty(942228743, coo, {from: coo,value: 0});
await instance.createPromoKitty(903979975, coo, {from: coo,value: 0});
await instance.createPromoKitty(128764349, coo, {from: coo,value: 0});
await instance.createPromoKitty(931077362, coo, {from: coo,value: 0});
await instance.createPromoKitty(319431964, coo, {from: coo,value: 0});
await instance.createPromoKitty(930105948, coo, {from: coo,value: 0});
await instance.createPromoKitty(858534360, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(34, 19, {from: coo});
await instance.breedWith(26, 6, {from: coo});
await instance.breedWith(14, 36, {from: coo});
await instance.breedWith(20, 18, {from: coo});
await instance.breedWith(3, 17, {from: coo});
await instance.breedWith(23, 32, {from: coo});
await instance.breedWith(37, 4, {from: coo});
await instance.breedWith(5, 13, {from: coo});
await instance.breedWith(15, 29, {from: coo});
await instance.breedWith(10, 22, {from: coo});
await instance.breedWith(33, 11, {from: coo});
await instance.breedWith(12, 24, {from: coo});
await instance.breedWith(1, 40, {from: coo});
await instance.breedWith(27, 7, {from: coo});
await instance.breedWith(8, 38, {from: coo});
await instance.breedWith(31, 21, {from: coo});
await instance.breedWith(2, 9, {from: coo});
await instance.breedWith(35, 25, {from: coo});
await instance.breedWith(28, 39, {from: coo});
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
await instance.giveBirth(34);
await instance.giveBirth(26);
await instance.giveBirth(14);
await instance.giveBirth(20);
await instance.giveBirth(3);
await instance.giveBirth(23);
await instance.giveBirth(37);
await instance.giveBirth(5);
await instance.giveBirth(15);
await instance.giveBirth(10);
await instance.giveBirth(33);
await instance.giveBirth(12);
await instance.giveBirth(1);
await instance.giveBirth(27);
await instance.giveBirth(8);
await instance.giveBirth(31);
await instance.giveBirth(2);
await instance.giveBirth(35);
await instance.giveBirth(28);
await instance.giveBirth(16);
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
