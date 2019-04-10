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
await instance.createPromoKitty(68685541, coo, {from: coo,value: 0});
await instance.createPromoKitty(614910124, coo, {from: coo,value: 0});
await instance.createPromoKitty(541374713, coo, {from: coo,value: 0});
await instance.createPromoKitty(463545586, coo, {from: coo,value: 0});
await instance.createPromoKitty(291076171, coo, {from: coo,value: 0});
await instance.createPromoKitty(300820238, coo, {from: coo,value: 0});
await instance.createPromoKitty(973741833, coo, {from: coo,value: 0});
await instance.createPromoKitty(152437963, coo, {from: coo,value: 0});
await instance.createPromoKitty(660790026, coo, {from: coo,value: 0});
await instance.createPromoKitty(977576685, coo, {from: coo,value: 0});
await instance.createPromoKitty(856057052, coo, {from: coo,value: 0});
await instance.createPromoKitty(113746641, coo, {from: coo,value: 0});
await instance.createPromoKitty(460660901, coo, {from: coo,value: 0});
await instance.createPromoKitty(95463354, coo, {from: coo,value: 0});
await instance.createPromoKitty(535004391, coo, {from: coo,value: 0});
await instance.createPromoKitty(496194839, coo, {from: coo,value: 0});
await instance.createPromoKitty(205202278, coo, {from: coo,value: 0});
await instance.createPromoKitty(556288398, coo, {from: coo,value: 0});
await instance.createPromoKitty(855789961, coo, {from: coo,value: 0});
await instance.createPromoKitty(744950200, coo, {from: coo,value: 0});
await instance.createPromoKitty(968695778, coo, {from: coo,value: 0});
await instance.createPromoKitty(691412281, coo, {from: coo,value: 0});
await instance.createPromoKitty(704164618, coo, {from: coo,value: 0});
await instance.createPromoKitty(997353519, coo, {from: coo,value: 0});
await instance.createPromoKitty(887580854, coo, {from: coo,value: 0});
await instance.createPromoKitty(930450487, coo, {from: coo,value: 0});
await instance.createPromoKitty(689417695, coo, {from: coo,value: 0});
await instance.createPromoKitty(803059578, coo, {from: coo,value: 0});
await instance.createPromoKitty(670192711, coo, {from: coo,value: 0});
await instance.createPromoKitty(838803421, coo, {from: coo,value: 0});
await instance.createPromoKitty(15448820, coo, {from: coo,value: 0});
await instance.createPromoKitty(848810910, coo, {from: coo,value: 0});
await instance.createPromoKitty(932197350, coo, {from: coo,value: 0});
await instance.createPromoKitty(164362343, coo, {from: coo,value: 0});
await instance.createPromoKitty(236493456, coo, {from: coo,value: 0});
await instance.createPromoKitty(758442651, coo, {from: coo,value: 0});
await instance.createPromoKitty(927437295, coo, {from: coo,value: 0});
await instance.createPromoKitty(910235446, coo, {from: coo,value: 0});
await instance.createPromoKitty(340355230, coo, {from: coo,value: 0});
await instance.createPromoKitty(497709836, coo, {from: coo,value: 0});
await instance.createPromoKitty(560102984, coo, {from: coo,value: 0});
await instance.createPromoKitty(78478600, coo, {from: coo,value: 0});
await instance.createPromoKitty(939756981, coo, {from: coo,value: 0});
await instance.createPromoKitty(612960155, coo, {from: coo,value: 0});
await instance.createPromoKitty(910133266, coo, {from: coo,value: 0});
await instance.createPromoKitty(12202264, coo, {from: coo,value: 0});
await instance.createPromoKitty(510748429, coo, {from: coo,value: 0});
await instance.createPromoKitty(378126437, coo, {from: coo,value: 0});
await instance.createPromoKitty(693939314, coo, {from: coo,value: 0});
await instance.createPromoKitty(26921769, coo, {from: coo,value: 0});
await instance.createPromoKitty(281361917, coo, {from: coo,value: 0});
await instance.createPromoKitty(735888389, coo, {from: coo,value: 0});
await instance.createPromoKitty(405049394, coo, {from: coo,value: 0});
await instance.createPromoKitty(160996999, coo, {from: coo,value: 0});
await instance.createPromoKitty(315484234, coo, {from: coo,value: 0});
await instance.createPromoKitty(922788946, coo, {from: coo,value: 0});
await instance.createPromoKitty(483211147, coo, {from: coo,value: 0});
await instance.createPromoKitty(630203881, coo, {from: coo,value: 0});
await instance.createPromoKitty(237375873, coo, {from: coo,value: 0});
await instance.createPromoKitty(3116765, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(26, 30, {from: coo});
await instance.breedWith(33, 7, {from: coo});
await instance.breedWith(24, 11, {from: coo});
await instance.breedWith(38, 16, {from: coo});
await instance.breedWith(39, 4, {from: coo});
await instance.breedWith(6, 14, {from: coo});
await instance.breedWith(21, 8, {from: coo});
await instance.breedWith(20, 18, {from: coo});
await instance.breedWith(40, 25, {from: coo});
await instance.breedWith(5, 15, {from: coo});
await instance.breedWith(9, 12, {from: coo});
await instance.breedWith(36, 34, {from: coo});
await instance.breedWith(1, 2, {from: coo});
await instance.breedWith(27, 13, {from: coo});
await instance.breedWith(31, 32, {from: coo});
await instance.breedWith(3, 19, {from: coo});
await instance.breedWith(23, 35, {from: coo});
await instance.breedWith(17, 37, {from: coo});
await instance.breedWith(28, 22, {from: coo});
await instance.breedWith(29, 10, {from: coo});
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
await instance.giveBirth(26);
await instance.giveBirth(33);
await instance.giveBirth(24);
await instance.giveBirth(38);
await instance.giveBirth(39);
await instance.giveBirth(6);
await instance.giveBirth(21);
await instance.giveBirth(20);
await instance.giveBirth(40);
await instance.giveBirth(5);
await instance.giveBirth(9);
await instance.giveBirth(36);
await instance.giveBirth(1);
await instance.giveBirth(27);
await instance.giveBirth(31);
await instance.giveBirth(3);
await instance.giveBirth(23);
await instance.giveBirth(17);
await instance.giveBirth(28);
await instance.giveBirth(29);
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
