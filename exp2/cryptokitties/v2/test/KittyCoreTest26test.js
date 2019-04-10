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
await instance.createPromoKitty(273171684, coo, {from: coo,value: 0});
await instance.createPromoKitty(275553408, coo, {from: coo,value: 0});
await instance.createPromoKitty(596897507, coo, {from: coo,value: 0});
await instance.createPromoKitty(393658441, coo, {from: coo,value: 0});
await instance.createPromoKitty(107627500, coo, {from: coo,value: 0});
await instance.createPromoKitty(126434854, coo, {from: coo,value: 0});
await instance.createPromoKitty(272834771, coo, {from: coo,value: 0});
await instance.createPromoKitty(388702833, coo, {from: coo,value: 0});
await instance.createPromoKitty(151685010, coo, {from: coo,value: 0});
await instance.createPromoKitty(588113932, coo, {from: coo,value: 0});
await instance.createPromoKitty(716521128, coo, {from: coo,value: 0});
await instance.createPromoKitty(279739790, coo, {from: coo,value: 0});
await instance.createPromoKitty(230357842, coo, {from: coo,value: 0});
await instance.createPromoKitty(998991363, coo, {from: coo,value: 0});
await instance.createPromoKitty(928054906, coo, {from: coo,value: 0});
await instance.createPromoKitty(288921240, coo, {from: coo,value: 0});
await instance.createPromoKitty(547790606, coo, {from: coo,value: 0});
await instance.createPromoKitty(751521884, coo, {from: coo,value: 0});
await instance.createPromoKitty(396970511, coo, {from: coo,value: 0});
await instance.createPromoKitty(869559520, coo, {from: coo,value: 0});
await instance.createPromoKitty(270273104, coo, {from: coo,value: 0});
await instance.createPromoKitty(727999708, coo, {from: coo,value: 0});
await instance.createPromoKitty(550929251, coo, {from: coo,value: 0});
await instance.createPromoKitty(465392781, coo, {from: coo,value: 0});
await instance.createPromoKitty(469469628, coo, {from: coo,value: 0});
await instance.createPromoKitty(27241491, coo, {from: coo,value: 0});
await instance.createPromoKitty(700640893, coo, {from: coo,value: 0});
await instance.createPromoKitty(787401825, coo, {from: coo,value: 0});
await instance.createPromoKitty(663277169, coo, {from: coo,value: 0});
await instance.createPromoKitty(64035855, coo, {from: coo,value: 0});
await instance.createPromoKitty(758482907, coo, {from: coo,value: 0});
await instance.createPromoKitty(212355651, coo, {from: coo,value: 0});
await instance.createPromoKitty(850429294, coo, {from: coo,value: 0});
await instance.createPromoKitty(213539833, coo, {from: coo,value: 0});
await instance.createPromoKitty(351099471, coo, {from: coo,value: 0});
await instance.createPromoKitty(863261742, coo, {from: coo,value: 0});
await instance.createPromoKitty(502282461, coo, {from: coo,value: 0});
await instance.createPromoKitty(522023676, coo, {from: coo,value: 0});
await instance.createPromoKitty(416864952, coo, {from: coo,value: 0});
await instance.createPromoKitty(294335880, coo, {from: coo,value: 0});
await instance.createPromoKitty(105789744, coo, {from: coo,value: 0});
await instance.createPromoKitty(128702690, coo, {from: coo,value: 0});
await instance.createPromoKitty(513503894, coo, {from: coo,value: 0});
await instance.createPromoKitty(852181345, coo, {from: coo,value: 0});
await instance.createPromoKitty(905383650, coo, {from: coo,value: 0});
await instance.createPromoKitty(928968828, coo, {from: coo,value: 0});
await instance.createPromoKitty(330208628, coo, {from: coo,value: 0});
await instance.createPromoKitty(434232218, coo, {from: coo,value: 0});
await instance.createPromoKitty(77002790, coo, {from: coo,value: 0});
await instance.createPromoKitty(284567637, coo, {from: coo,value: 0});
await instance.createPromoKitty(557775671, coo, {from: coo,value: 0});
await instance.createPromoKitty(753291415, coo, {from: coo,value: 0});
await instance.createPromoKitty(727483057, coo, {from: coo,value: 0});
await instance.createPromoKitty(303391625, coo, {from: coo,value: 0});
await instance.createPromoKitty(267125076, coo, {from: coo,value: 0});
await instance.createPromoKitty(133068908, coo, {from: coo,value: 0});
await instance.createPromoKitty(767391987, coo, {from: coo,value: 0});
await instance.createPromoKitty(938521177, coo, {from: coo,value: 0});
await instance.createPromoKitty(666870138, coo, {from: coo,value: 0});
await instance.createPromoKitty(145508591, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(25, 24, {from: coo});
await instance.breedWith(30, 31, {from: coo});
await instance.breedWith(5, 33, {from: coo});
await instance.breedWith(8, 4, {from: coo});
await instance.breedWith(15, 3, {from: coo});
await instance.breedWith(11, 19, {from: coo});
await instance.breedWith(39, 36, {from: coo});
await instance.breedWith(29, 18, {from: coo});
await instance.breedWith(23, 9, {from: coo});
await instance.breedWith(35, 12, {from: coo});
await instance.breedWith(32, 21, {from: coo});
await instance.breedWith(10, 27, {from: coo});
await instance.breedWith(28, 37, {from: coo});
await instance.breedWith(34, 20, {from: coo});
await instance.breedWith(17, 2, {from: coo});
await instance.breedWith(16, 6, {from: coo});
await instance.breedWith(38, 13, {from: coo});
await instance.breedWith(14, 1, {from: coo});
await instance.breedWith(7, 26, {from: coo});
await instance.breedWith(22, 40, {from: coo});
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
await instance.giveBirth(25);
await instance.giveBirth(30);
await instance.giveBirth(5);
await instance.giveBirth(8);
await instance.giveBirth(15);
await instance.giveBirth(11);
await instance.giveBirth(39);
await instance.giveBirth(29);
await instance.giveBirth(23);
await instance.giveBirth(35);
await instance.giveBirth(32);
await instance.giveBirth(10);
await instance.giveBirth(28);
await instance.giveBirth(34);
await instance.giveBirth(17);
await instance.giveBirth(16);
await instance.giveBirth(38);
await instance.giveBirth(14);
await instance.giveBirth(7);
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
