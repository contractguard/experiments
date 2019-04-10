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
await instance.createPromoKitty(409884404, coo, {from: coo,value: 0});
await instance.createPromoKitty(312379076, coo, {from: coo,value: 0});
await instance.createPromoKitty(68410167, coo, {from: coo,value: 0});
await instance.createPromoKitty(696382701, coo, {from: coo,value: 0});
await instance.createPromoKitty(203974486, coo, {from: coo,value: 0});
await instance.createPromoKitty(652507165, coo, {from: coo,value: 0});
await instance.createPromoKitty(9844574, coo, {from: coo,value: 0});
await instance.createPromoKitty(554516560, coo, {from: coo,value: 0});
await instance.createPromoKitty(557109729, coo, {from: coo,value: 0});
await instance.createPromoKitty(539489883, coo, {from: coo,value: 0});
await instance.createPromoKitty(956719275, coo, {from: coo,value: 0});
await instance.createPromoKitty(391496183, coo, {from: coo,value: 0});
await instance.createPromoKitty(225952209, coo, {from: coo,value: 0});
await instance.createPromoKitty(771896879, coo, {from: coo,value: 0});
await instance.createPromoKitty(430456728, coo, {from: coo,value: 0});
await instance.createPromoKitty(787388153, coo, {from: coo,value: 0});
await instance.createPromoKitty(42463849, coo, {from: coo,value: 0});
await instance.createPromoKitty(995545883, coo, {from: coo,value: 0});
await instance.createPromoKitty(585357749, coo, {from: coo,value: 0});
await instance.createPromoKitty(540338057, coo, {from: coo,value: 0});
await instance.createPromoKitty(977876490, coo, {from: coo,value: 0});
await instance.createPromoKitty(167421663, coo, {from: coo,value: 0});
await instance.createPromoKitty(193765904, coo, {from: coo,value: 0});
await instance.createPromoKitty(894180908, coo, {from: coo,value: 0});
await instance.createPromoKitty(160142194, coo, {from: coo,value: 0});
await instance.createPromoKitty(371108104, coo, {from: coo,value: 0});
await instance.createPromoKitty(176060142, coo, {from: coo,value: 0});
await instance.createPromoKitty(164548622, coo, {from: coo,value: 0});
await instance.createPromoKitty(346023843, coo, {from: coo,value: 0});
await instance.createPromoKitty(189949216, coo, {from: coo,value: 0});
await instance.createPromoKitty(795802788, coo, {from: coo,value: 0});
await instance.createPromoKitty(527115618, coo, {from: coo,value: 0});
await instance.createPromoKitty(196854820, coo, {from: coo,value: 0});
await instance.createPromoKitty(266655547, coo, {from: coo,value: 0});
await instance.createPromoKitty(883375389, coo, {from: coo,value: 0});
await instance.createPromoKitty(956210745, coo, {from: coo,value: 0});
await instance.createPromoKitty(762014599, coo, {from: coo,value: 0});
await instance.createPromoKitty(768882207, coo, {from: coo,value: 0});
await instance.createPromoKitty(682078368, coo, {from: coo,value: 0});
await instance.createPromoKitty(281142652, coo, {from: coo,value: 0});
await instance.createPromoKitty(45978834, coo, {from: coo,value: 0});
await instance.createPromoKitty(104263908, coo, {from: coo,value: 0});
await instance.createPromoKitty(537346002, coo, {from: coo,value: 0});
await instance.createPromoKitty(777346553, coo, {from: coo,value: 0});
await instance.createPromoKitty(665285057, coo, {from: coo,value: 0});
await instance.createPromoKitty(823933537, coo, {from: coo,value: 0});
await instance.createPromoKitty(519322334, coo, {from: coo,value: 0});
await instance.createPromoKitty(157801634, coo, {from: coo,value: 0});
await instance.createPromoKitty(381481814, coo, {from: coo,value: 0});
await instance.createPromoKitty(925001810, coo, {from: coo,value: 0});
await instance.createPromoKitty(557867000, coo, {from: coo,value: 0});
await instance.createPromoKitty(947877822, coo, {from: coo,value: 0});
await instance.createPromoKitty(676234262, coo, {from: coo,value: 0});
await instance.createPromoKitty(890108963, coo, {from: coo,value: 0});
await instance.createPromoKitty(61267529, coo, {from: coo,value: 0});
await instance.createPromoKitty(380196436, coo, {from: coo,value: 0});
await instance.createPromoKitty(515146084, coo, {from: coo,value: 0});
await instance.createPromoKitty(221864682, coo, {from: coo,value: 0});
await instance.createPromoKitty(513507251, coo, {from: coo,value: 0});
await instance.createPromoKitty(466577255, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(37, 24, {from: coo});
await instance.breedWith(13, 38, {from: coo});
await instance.breedWith(26, 36, {from: coo});
await instance.breedWith(19, 7, {from: coo});
await instance.breedWith(12, 11, {from: coo});
await instance.breedWith(16, 15, {from: coo});
await instance.breedWith(18, 25, {from: coo});
await instance.breedWith(39, 21, {from: coo});
await instance.breedWith(28, 31, {from: coo});
await instance.breedWith(29, 9, {from: coo});
await instance.breedWith(20, 6, {from: coo});
await instance.breedWith(30, 4, {from: coo});
await instance.breedWith(32, 17, {from: coo});
await instance.breedWith(33, 40, {from: coo});
await instance.breedWith(35, 1, {from: coo});
await instance.breedWith(3, 23, {from: coo});
await instance.breedWith(5, 27, {from: coo});
await instance.breedWith(34, 2, {from: coo});
await instance.breedWith(10, 22, {from: coo});
await instance.breedWith(8, 14, {from: coo});
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
await instance.giveBirth(37);
await instance.giveBirth(13);
await instance.giveBirth(26);
await instance.giveBirth(19);
await instance.giveBirth(12);
await instance.giveBirth(16);
await instance.giveBirth(18);
await instance.giveBirth(39);
await instance.giveBirth(28);
await instance.giveBirth(29);
await instance.giveBirth(20);
await instance.giveBirth(30);
await instance.giveBirth(32);
await instance.giveBirth(33);
await instance.giveBirth(35);
await instance.giveBirth(3);
await instance.giveBirth(5);
await instance.giveBirth(34);
await instance.giveBirth(10);
await instance.giveBirth(8);
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
