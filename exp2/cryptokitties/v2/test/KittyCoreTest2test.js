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
await instance.createPromoKitty(412893410, coo, {from: coo,value: 0});
await instance.createPromoKitty(4400251, coo, {from: coo,value: 0});
await instance.createPromoKitty(82551300, coo, {from: coo,value: 0});
await instance.createPromoKitty(364127348, coo, {from: coo,value: 0});
await instance.createPromoKitty(225051349, coo, {from: coo,value: 0});
await instance.createPromoKitty(950850270, coo, {from: coo,value: 0});
await instance.createPromoKitty(896092112, coo, {from: coo,value: 0});
await instance.createPromoKitty(40828669, coo, {from: coo,value: 0});
await instance.createPromoKitty(759035499, coo, {from: coo,value: 0});
await instance.createPromoKitty(114150604, coo, {from: coo,value: 0});
await instance.createPromoKitty(159561782, coo, {from: coo,value: 0});
await instance.createPromoKitty(927129020, coo, {from: coo,value: 0});
await instance.createPromoKitty(812199420, coo, {from: coo,value: 0});
await instance.createPromoKitty(27659115, coo, {from: coo,value: 0});
await instance.createPromoKitty(151581006, coo, {from: coo,value: 0});
await instance.createPromoKitty(870130010, coo, {from: coo,value: 0});
await instance.createPromoKitty(979233884, coo, {from: coo,value: 0});
await instance.createPromoKitty(419865437, coo, {from: coo,value: 0});
await instance.createPromoKitty(835689338, coo, {from: coo,value: 0});
await instance.createPromoKitty(226499910, coo, {from: coo,value: 0});
await instance.createPromoKitty(605518349, coo, {from: coo,value: 0});
await instance.createPromoKitty(274774450, coo, {from: coo,value: 0});
await instance.createPromoKitty(361991217, coo, {from: coo,value: 0});
await instance.createPromoKitty(521328941, coo, {from: coo,value: 0});
await instance.createPromoKitty(308037984, coo, {from: coo,value: 0});
await instance.createPromoKitty(47861875, coo, {from: coo,value: 0});
await instance.createPromoKitty(612089982, coo, {from: coo,value: 0});
await instance.createPromoKitty(161472167, coo, {from: coo,value: 0});
await instance.createPromoKitty(804811687, coo, {from: coo,value: 0});
await instance.createPromoKitty(441344562, coo, {from: coo,value: 0});
await instance.createPromoKitty(732808388, coo, {from: coo,value: 0});
await instance.createPromoKitty(739647438, coo, {from: coo,value: 0});
await instance.createPromoKitty(759332716, coo, {from: coo,value: 0});
await instance.createPromoKitty(514225420, coo, {from: coo,value: 0});
await instance.createPromoKitty(470273101, coo, {from: coo,value: 0});
await instance.createPromoKitty(452532254, coo, {from: coo,value: 0});
await instance.createPromoKitty(352499535, coo, {from: coo,value: 0});
await instance.createPromoKitty(988605505, coo, {from: coo,value: 0});
await instance.createPromoKitty(601296182, coo, {from: coo,value: 0});
await instance.createPromoKitty(7881677, coo, {from: coo,value: 0});
await instance.createPromoKitty(584121414, coo, {from: coo,value: 0});
await instance.createPromoKitty(762318247, coo, {from: coo,value: 0});
await instance.createPromoKitty(209909277, coo, {from: coo,value: 0});
await instance.createPromoKitty(188454725, coo, {from: coo,value: 0});
await instance.createPromoKitty(378481120, coo, {from: coo,value: 0});
await instance.createPromoKitty(851878143, coo, {from: coo,value: 0});
await instance.createPromoKitty(657919408, coo, {from: coo,value: 0});
await instance.createPromoKitty(293015918, coo, {from: coo,value: 0});
await instance.createPromoKitty(434906839, coo, {from: coo,value: 0});
await instance.createPromoKitty(984635046, coo, {from: coo,value: 0});
await instance.createPromoKitty(740594065, coo, {from: coo,value: 0});
await instance.createPromoKitty(205537967, coo, {from: coo,value: 0});
await instance.createPromoKitty(588376789, coo, {from: coo,value: 0});
await instance.createPromoKitty(420164338, coo, {from: coo,value: 0});
await instance.createPromoKitty(556717971, coo, {from: coo,value: 0});
await instance.createPromoKitty(24815411, coo, {from: coo,value: 0});
await instance.createPromoKitty(468594293, coo, {from: coo,value: 0});
await instance.createPromoKitty(119414612, coo, {from: coo,value: 0});
await instance.createPromoKitty(929220859, coo, {from: coo,value: 0});
await instance.createPromoKitty(390476337, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(29, 39, {from: coo});
await instance.breedWith(2, 22, {from: coo});
await instance.breedWith(7, 37, {from: coo});
await instance.breedWith(18, 9, {from: coo});
await instance.breedWith(17, 25, {from: coo});
await instance.breedWith(36, 3, {from: coo});
await instance.breedWith(10, 31, {from: coo});
await instance.breedWith(27, 35, {from: coo});
await instance.breedWith(6, 1, {from: coo});
await instance.breedWith(28, 13, {from: coo});
await instance.breedWith(8, 4, {from: coo});
await instance.breedWith(38, 11, {from: coo});
await instance.breedWith(5, 21, {from: coo});
await instance.breedWith(34, 32, {from: coo});
await instance.breedWith(20, 23, {from: coo});
await instance.breedWith(16, 40, {from: coo});
await instance.breedWith(19, 26, {from: coo});
await instance.breedWith(33, 30, {from: coo});
await instance.breedWith(15, 14, {from: coo});
await instance.breedWith(12, 24, {from: coo});
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
await instance.giveBirth(29);
await instance.giveBirth(2);
await instance.giveBirth(7);
await instance.giveBirth(18);
await instance.giveBirth(17);
await instance.giveBirth(36);
await instance.giveBirth(10);
await instance.giveBirth(27);
await instance.giveBirth(6);
await instance.giveBirth(28);
await instance.giveBirth(8);
await instance.giveBirth(38);
await instance.giveBirth(5);
await instance.giveBirth(34);
await instance.giveBirth(20);
await instance.giveBirth(16);
await instance.giveBirth(19);
await instance.giveBirth(33);
await instance.giveBirth(15);
await instance.giveBirth(12);
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
