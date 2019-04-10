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
await instance.createPromoKitty(375842803, coo, {from: coo,value: 0});
await instance.createPromoKitty(278721765, coo, {from: coo,value: 0});
await instance.createPromoKitty(20226124, coo, {from: coo,value: 0});
await instance.createPromoKitty(226596113, coo, {from: coo,value: 0});
await instance.createPromoKitty(52435582, coo, {from: coo,value: 0});
await instance.createPromoKitty(498914436, coo, {from: coo,value: 0});
await instance.createPromoKitty(714676360, coo, {from: coo,value: 0});
await instance.createPromoKitty(838873987, coo, {from: coo,value: 0});
await instance.createPromoKitty(351437226, coo, {from: coo,value: 0});
await instance.createPromoKitty(958972437, coo, {from: coo,value: 0});
await instance.createPromoKitty(711412866, coo, {from: coo,value: 0});
await instance.createPromoKitty(285163384, coo, {from: coo,value: 0});
await instance.createPromoKitty(166845771, coo, {from: coo,value: 0});
await instance.createPromoKitty(210291897, coo, {from: coo,value: 0});
await instance.createPromoKitty(456145794, coo, {from: coo,value: 0});
await instance.createPromoKitty(987106717, coo, {from: coo,value: 0});
await instance.createPromoKitty(927820339, coo, {from: coo,value: 0});
await instance.createPromoKitty(684627512, coo, {from: coo,value: 0});
await instance.createPromoKitty(686504568, coo, {from: coo,value: 0});
await instance.createPromoKitty(277096950, coo, {from: coo,value: 0});
await instance.createPromoKitty(749929699, coo, {from: coo,value: 0});
await instance.createPromoKitty(147026320, coo, {from: coo,value: 0});
await instance.createPromoKitty(419766242, coo, {from: coo,value: 0});
await instance.createPromoKitty(452447266, coo, {from: coo,value: 0});
await instance.createPromoKitty(373575985, coo, {from: coo,value: 0});
await instance.createPromoKitty(913585578, coo, {from: coo,value: 0});
await instance.createPromoKitty(392688363, coo, {from: coo,value: 0});
await instance.createPromoKitty(82950670, coo, {from: coo,value: 0});
await instance.createPromoKitty(767858796, coo, {from: coo,value: 0});
await instance.createPromoKitty(699334735, coo, {from: coo,value: 0});
await instance.createPromoKitty(527396743, coo, {from: coo,value: 0});
await instance.createPromoKitty(171102352, coo, {from: coo,value: 0});
await instance.createPromoKitty(405414449, coo, {from: coo,value: 0});
await instance.createPromoKitty(849490435, coo, {from: coo,value: 0});
await instance.createPromoKitty(686817613, coo, {from: coo,value: 0});
await instance.createPromoKitty(311543937, coo, {from: coo,value: 0});
await instance.createPromoKitty(390377199, coo, {from: coo,value: 0});
await instance.createPromoKitty(55557851, coo, {from: coo,value: 0});
await instance.createPromoKitty(274022103, coo, {from: coo,value: 0});
await instance.createPromoKitty(967784468, coo, {from: coo,value: 0});
await instance.createPromoKitty(28218379, coo, {from: coo,value: 0});
await instance.createPromoKitty(91349633, coo, {from: coo,value: 0});
await instance.createPromoKitty(788519655, coo, {from: coo,value: 0});
await instance.createPromoKitty(297342703, coo, {from: coo,value: 0});
await instance.createPromoKitty(696870473, coo, {from: coo,value: 0});
await instance.createPromoKitty(768807506, coo, {from: coo,value: 0});
await instance.createPromoKitty(210915254, coo, {from: coo,value: 0});
await instance.createPromoKitty(61728130, coo, {from: coo,value: 0});
await instance.createPromoKitty(303327101, coo, {from: coo,value: 0});
await instance.createPromoKitty(15292886, coo, {from: coo,value: 0});
await instance.createPromoKitty(997024755, coo, {from: coo,value: 0});
await instance.createPromoKitty(278037759, coo, {from: coo,value: 0});
await instance.createPromoKitty(960573375, coo, {from: coo,value: 0});
await instance.createPromoKitty(349149350, coo, {from: coo,value: 0});
await instance.createPromoKitty(945275581, coo, {from: coo,value: 0});
await instance.createPromoKitty(129714003, coo, {from: coo,value: 0});
await instance.createPromoKitty(927411436, coo, {from: coo,value: 0});
await instance.createPromoKitty(140424495, coo, {from: coo,value: 0});
await instance.createPromoKitty(327164395, coo, {from: coo,value: 0});
await instance.createPromoKitty(465370686, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(34, 26, {from: coo});
await instance.breedWith(30, 7, {from: coo});
await instance.breedWith(33, 25, {from: coo});
await instance.breedWith(37, 28, {from: coo});
await instance.breedWith(6, 36, {from: coo});
await instance.breedWith(5, 15, {from: coo});
await instance.breedWith(27, 4, {from: coo});
await instance.breedWith(39, 31, {from: coo});
await instance.breedWith(24, 35, {from: coo});
await instance.breedWith(2, 16, {from: coo});
await instance.breedWith(22, 32, {from: coo});
await instance.breedWith(12, 21, {from: coo});
await instance.breedWith(17, 1, {from: coo});
await instance.breedWith(13, 38, {from: coo});
await instance.breedWith(18, 23, {from: coo});
await instance.breedWith(11, 8, {from: coo});
await instance.breedWith(10, 40, {from: coo});
await instance.breedWith(9, 29, {from: coo});
await instance.breedWith(3, 20, {from: coo});
await instance.breedWith(19, 14, {from: coo});
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
await instance.giveBirth(30);
await instance.giveBirth(33);
await instance.giveBirth(37);
await instance.giveBirth(6);
await instance.giveBirth(5);
await instance.giveBirth(27);
await instance.giveBirth(39);
await instance.giveBirth(24);
await instance.giveBirth(2);
await instance.giveBirth(22);
await instance.giveBirth(12);
await instance.giveBirth(17);
await instance.giveBirth(13);
await instance.giveBirth(18);
await instance.giveBirth(11);
await instance.giveBirth(10);
await instance.giveBirth(9);
await instance.giveBirth(3);
await instance.giveBirth(19);
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
