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
await instance.createPromoKitty(442319238, coo, {from: coo,value: 0});
await instance.createPromoKitty(851976846, coo, {from: coo,value: 0});
await instance.createPromoKitty(733061974, coo, {from: coo,value: 0});
await instance.createPromoKitty(70248573, coo, {from: coo,value: 0});
await instance.createPromoKitty(406815523, coo, {from: coo,value: 0});
await instance.createPromoKitty(325551344, coo, {from: coo,value: 0});
await instance.createPromoKitty(65593288, coo, {from: coo,value: 0});
await instance.createPromoKitty(844487697, coo, {from: coo,value: 0});
await instance.createPromoKitty(44926387, coo, {from: coo,value: 0});
await instance.createPromoKitty(992355036, coo, {from: coo,value: 0});
await instance.createPromoKitty(425030792, coo, {from: coo,value: 0});
await instance.createPromoKitty(841979364, coo, {from: coo,value: 0});
await instance.createPromoKitty(438429052, coo, {from: coo,value: 0});
await instance.createPromoKitty(214747398, coo, {from: coo,value: 0});
await instance.createPromoKitty(101501200, coo, {from: coo,value: 0});
await instance.createPromoKitty(115605159, coo, {from: coo,value: 0});
await instance.createPromoKitty(775680267, coo, {from: coo,value: 0});
await instance.createPromoKitty(887379821, coo, {from: coo,value: 0});
await instance.createPromoKitty(874253439, coo, {from: coo,value: 0});
await instance.createPromoKitty(565082004, coo, {from: coo,value: 0});
await instance.createPromoKitty(587394054, coo, {from: coo,value: 0});
await instance.createPromoKitty(570716626, coo, {from: coo,value: 0});
await instance.createPromoKitty(72683130, coo, {from: coo,value: 0});
await instance.createPromoKitty(370974446, coo, {from: coo,value: 0});
await instance.createPromoKitty(989071508, coo, {from: coo,value: 0});
await instance.createPromoKitty(393395944, coo, {from: coo,value: 0});
await instance.createPromoKitty(119430129, coo, {from: coo,value: 0});
await instance.createPromoKitty(125338876, coo, {from: coo,value: 0});
await instance.createPromoKitty(646591669, coo, {from: coo,value: 0});
await instance.createPromoKitty(55970014, coo, {from: coo,value: 0});
await instance.createPromoKitty(338622738, coo, {from: coo,value: 0});
await instance.createPromoKitty(281603371, coo, {from: coo,value: 0});
await instance.createPromoKitty(351905520, coo, {from: coo,value: 0});
await instance.createPromoKitty(839159938, coo, {from: coo,value: 0});
await instance.createPromoKitty(521250649, coo, {from: coo,value: 0});
await instance.createPromoKitty(839053959, coo, {from: coo,value: 0});
await instance.createPromoKitty(325572471, coo, {from: coo,value: 0});
await instance.createPromoKitty(487145015, coo, {from: coo,value: 0});
await instance.createPromoKitty(184872607, coo, {from: coo,value: 0});
await instance.createPromoKitty(410993343, coo, {from: coo,value: 0});
await instance.createPromoKitty(679994765, coo, {from: coo,value: 0});
await instance.createPromoKitty(501900734, coo, {from: coo,value: 0});
await instance.createPromoKitty(953300027, coo, {from: coo,value: 0});
await instance.createPromoKitty(986194668, coo, {from: coo,value: 0});
await instance.createPromoKitty(222608574, coo, {from: coo,value: 0});
await instance.createPromoKitty(791515841, coo, {from: coo,value: 0});
await instance.createPromoKitty(295725265, coo, {from: coo,value: 0});
await instance.createPromoKitty(522991190, coo, {from: coo,value: 0});
await instance.createPromoKitty(22047185, coo, {from: coo,value: 0});
await instance.createPromoKitty(712259106, coo, {from: coo,value: 0});
await instance.createPromoKitty(496131206, coo, {from: coo,value: 0});
await instance.createPromoKitty(527851390, coo, {from: coo,value: 0});
await instance.createPromoKitty(830258370, coo, {from: coo,value: 0});
await instance.createPromoKitty(485383695, coo, {from: coo,value: 0});
await instance.createPromoKitty(569934547, coo, {from: coo,value: 0});
await instance.createPromoKitty(764045979, coo, {from: coo,value: 0});
await instance.createPromoKitty(100444957, coo, {from: coo,value: 0});
await instance.createPromoKitty(135303394, coo, {from: coo,value: 0});
await instance.createPromoKitty(63414108, coo, {from: coo,value: 0});
await instance.createPromoKitty(738829539, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(6, 27, {from: coo});
await instance.breedWith(7, 34, {from: coo});
await instance.breedWith(12, 19, {from: coo});
await instance.breedWith(40, 1, {from: coo});
await instance.breedWith(30, 3, {from: coo});
await instance.breedWith(5, 17, {from: coo});
await instance.breedWith(2, 16, {from: coo});
await instance.breedWith(39, 10, {from: coo});
await instance.breedWith(9, 24, {from: coo});
await instance.breedWith(29, 18, {from: coo});
await instance.breedWith(28, 33, {from: coo});
await instance.breedWith(35, 11, {from: coo});
await instance.breedWith(13, 15, {from: coo});
await instance.breedWith(4, 14, {from: coo});
await instance.breedWith(32, 36, {from: coo});
await instance.breedWith(37, 21, {from: coo});
await instance.breedWith(31, 25, {from: coo});
await instance.breedWith(8, 23, {from: coo});
await instance.breedWith(20, 22, {from: coo});
await instance.breedWith(26, 38, {from: coo});
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
await instance.giveBirth(6);
await instance.giveBirth(7);
await instance.giveBirth(12);
await instance.giveBirth(40);
await instance.giveBirth(30);
await instance.giveBirth(5);
await instance.giveBirth(2);
await instance.giveBirth(39);
await instance.giveBirth(9);
await instance.giveBirth(29);
await instance.giveBirth(28);
await instance.giveBirth(35);
await instance.giveBirth(13);
await instance.giveBirth(4);
await instance.giveBirth(32);
await instance.giveBirth(37);
await instance.giveBirth(31);
await instance.giveBirth(8);
await instance.giveBirth(20);
await instance.giveBirth(26);
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
