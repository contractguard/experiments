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
await instance.createPromoKitty(184710005, coo, {from: coo,value: 0});
await instance.createPromoKitty(160198425, coo, {from: coo,value: 0});
await instance.createPromoKitty(638436127, coo, {from: coo,value: 0});
await instance.createPromoKitty(576315746, coo, {from: coo,value: 0});
await instance.createPromoKitty(950765224, coo, {from: coo,value: 0});
await instance.createPromoKitty(279913078, coo, {from: coo,value: 0});
await instance.createPromoKitty(562526327, coo, {from: coo,value: 0});
await instance.createPromoKitty(23682478, coo, {from: coo,value: 0});
await instance.createPromoKitty(489216429, coo, {from: coo,value: 0});
await instance.createPromoKitty(43013708, coo, {from: coo,value: 0});
await instance.createPromoKitty(547999660, coo, {from: coo,value: 0});
await instance.createPromoKitty(646686457, coo, {from: coo,value: 0});
await instance.createPromoKitty(584104104, coo, {from: coo,value: 0});
await instance.createPromoKitty(428339108, coo, {from: coo,value: 0});
await instance.createPromoKitty(278214748, coo, {from: coo,value: 0});
await instance.createPromoKitty(552412559, coo, {from: coo,value: 0});
await instance.createPromoKitty(168343167, coo, {from: coo,value: 0});
await instance.createPromoKitty(474185596, coo, {from: coo,value: 0});
await instance.createPromoKitty(227437927, coo, {from: coo,value: 0});
await instance.createPromoKitty(198879820, coo, {from: coo,value: 0});
await instance.createPromoKitty(73371105, coo, {from: coo,value: 0});
await instance.createPromoKitty(754775946, coo, {from: coo,value: 0});
await instance.createPromoKitty(223595641, coo, {from: coo,value: 0});
await instance.createPromoKitty(491493696, coo, {from: coo,value: 0});
await instance.createPromoKitty(435765437, coo, {from: coo,value: 0});
await instance.createPromoKitty(820232065, coo, {from: coo,value: 0});
await instance.createPromoKitty(946963700, coo, {from: coo,value: 0});
await instance.createPromoKitty(525528804, coo, {from: coo,value: 0});
await instance.createPromoKitty(553469625, coo, {from: coo,value: 0});
await instance.createPromoKitty(246108089, coo, {from: coo,value: 0});
await instance.createPromoKitty(504607766, coo, {from: coo,value: 0});
await instance.createPromoKitty(458044807, coo, {from: coo,value: 0});
await instance.createPromoKitty(163581407, coo, {from: coo,value: 0});
await instance.createPromoKitty(812195042, coo, {from: coo,value: 0});
await instance.createPromoKitty(349726740, coo, {from: coo,value: 0});
await instance.createPromoKitty(879019971, coo, {from: coo,value: 0});
await instance.createPromoKitty(920273641, coo, {from: coo,value: 0});
await instance.createPromoKitty(101958995, coo, {from: coo,value: 0});
await instance.createPromoKitty(93024212, coo, {from: coo,value: 0});
await instance.createPromoKitty(282166526, coo, {from: coo,value: 0});
await instance.createPromoKitty(623085674, coo, {from: coo,value: 0});
await instance.createPromoKitty(684671520, coo, {from: coo,value: 0});
await instance.createPromoKitty(823990776, coo, {from: coo,value: 0});
await instance.createPromoKitty(491366014, coo, {from: coo,value: 0});
await instance.createPromoKitty(698511428, coo, {from: coo,value: 0});
await instance.createPromoKitty(729567629, coo, {from: coo,value: 0});
await instance.createPromoKitty(106684183, coo, {from: coo,value: 0});
await instance.createPromoKitty(959566761, coo, {from: coo,value: 0});
await instance.createPromoKitty(409987348, coo, {from: coo,value: 0});
await instance.createPromoKitty(534139911, coo, {from: coo,value: 0});
await instance.createPromoKitty(65537693, coo, {from: coo,value: 0});
await instance.createPromoKitty(569517892, coo, {from: coo,value: 0});
await instance.createPromoKitty(698149690, coo, {from: coo,value: 0});
await instance.createPromoKitty(976864772, coo, {from: coo,value: 0});
await instance.createPromoKitty(576895502, coo, {from: coo,value: 0});
await instance.createPromoKitty(157692813, coo, {from: coo,value: 0});
await instance.createPromoKitty(762241887, coo, {from: coo,value: 0});
await instance.createPromoKitty(616704543, coo, {from: coo,value: 0});
await instance.createPromoKitty(454079362, coo, {from: coo,value: 0});
await instance.createPromoKitty(162169852, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(7, 13, {from: coo});
await instance.breedWith(19, 5, {from: coo});
await instance.breedWith(40, 34, {from: coo});
await instance.breedWith(4, 26, {from: coo});
await instance.breedWith(28, 37, {from: coo});
await instance.breedWith(11, 10, {from: coo});
await instance.breedWith(6, 36, {from: coo});
await instance.breedWith(3, 35, {from: coo});
await instance.breedWith(25, 21, {from: coo});
await instance.breedWith(23, 20, {from: coo});
await instance.breedWith(22, 17, {from: coo});
await instance.breedWith(31, 38, {from: coo});
await instance.breedWith(29, 32, {from: coo});
await instance.breedWith(39, 18, {from: coo});
await instance.breedWith(16, 9, {from: coo});
await instance.breedWith(27, 33, {from: coo});
await instance.breedWith(2, 12, {from: coo});
await instance.breedWith(8, 30, {from: coo});
await instance.breedWith(24, 15, {from: coo});
await instance.breedWith(14, 1, {from: coo});
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
await instance.giveBirth(7);
await instance.giveBirth(19);
await instance.giveBirth(40);
await instance.giveBirth(4);
await instance.giveBirth(28);
await instance.giveBirth(11);
await instance.giveBirth(6);
await instance.giveBirth(3);
await instance.giveBirth(25);
await instance.giveBirth(23);
await instance.giveBirth(22);
await instance.giveBirth(31);
await instance.giveBirth(29);
await instance.giveBirth(39);
await instance.giveBirth(16);
await instance.giveBirth(27);
await instance.giveBirth(2);
await instance.giveBirth(8);
await instance.giveBirth(24);
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
