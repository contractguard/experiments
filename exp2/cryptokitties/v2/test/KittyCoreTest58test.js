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
await instance.createPromoKitty(96647702, coo, {from: coo,value: 0});
await instance.createPromoKitty(887482575, coo, {from: coo,value: 0});
await instance.createPromoKitty(237984553, coo, {from: coo,value: 0});
await instance.createPromoKitty(343505656, coo, {from: coo,value: 0});
await instance.createPromoKitty(514653429, coo, {from: coo,value: 0});
await instance.createPromoKitty(373341799, coo, {from: coo,value: 0});
await instance.createPromoKitty(531002062, coo, {from: coo,value: 0});
await instance.createPromoKitty(27783316, coo, {from: coo,value: 0});
await instance.createPromoKitty(138772508, coo, {from: coo,value: 0});
await instance.createPromoKitty(94971321, coo, {from: coo,value: 0});
await instance.createPromoKitty(735981445, coo, {from: coo,value: 0});
await instance.createPromoKitty(796421705, coo, {from: coo,value: 0});
await instance.createPromoKitty(624769465, coo, {from: coo,value: 0});
await instance.createPromoKitty(694414482, coo, {from: coo,value: 0});
await instance.createPromoKitty(743786469, coo, {from: coo,value: 0});
await instance.createPromoKitty(717114647, coo, {from: coo,value: 0});
await instance.createPromoKitty(872004416, coo, {from: coo,value: 0});
await instance.createPromoKitty(319010901, coo, {from: coo,value: 0});
await instance.createPromoKitty(593024311, coo, {from: coo,value: 0});
await instance.createPromoKitty(684294023, coo, {from: coo,value: 0});
await instance.createPromoKitty(680215586, coo, {from: coo,value: 0});
await instance.createPromoKitty(804364067, coo, {from: coo,value: 0});
await instance.createPromoKitty(592463810, coo, {from: coo,value: 0});
await instance.createPromoKitty(560284534, coo, {from: coo,value: 0});
await instance.createPromoKitty(1251135, coo, {from: coo,value: 0});
await instance.createPromoKitty(621606458, coo, {from: coo,value: 0});
await instance.createPromoKitty(541332287, coo, {from: coo,value: 0});
await instance.createPromoKitty(57836014, coo, {from: coo,value: 0});
await instance.createPromoKitty(678361102, coo, {from: coo,value: 0});
await instance.createPromoKitty(345401409, coo, {from: coo,value: 0});
await instance.createPromoKitty(389992744, coo, {from: coo,value: 0});
await instance.createPromoKitty(142851690, coo, {from: coo,value: 0});
await instance.createPromoKitty(181979492, coo, {from: coo,value: 0});
await instance.createPromoKitty(809822928, coo, {from: coo,value: 0});
await instance.createPromoKitty(852143009, coo, {from: coo,value: 0});
await instance.createPromoKitty(560709888, coo, {from: coo,value: 0});
await instance.createPromoKitty(413003065, coo, {from: coo,value: 0});
await instance.createPromoKitty(294906369, coo, {from: coo,value: 0});
await instance.createPromoKitty(481174397, coo, {from: coo,value: 0});
await instance.createPromoKitty(185188534, coo, {from: coo,value: 0});
await instance.createPromoKitty(29913098, coo, {from: coo,value: 0});
await instance.createPromoKitty(359045228, coo, {from: coo,value: 0});
await instance.createPromoKitty(19570523, coo, {from: coo,value: 0});
await instance.createPromoKitty(739445936, coo, {from: coo,value: 0});
await instance.createPromoKitty(919285085, coo, {from: coo,value: 0});
await instance.createPromoKitty(914607065, coo, {from: coo,value: 0});
await instance.createPromoKitty(847608455, coo, {from: coo,value: 0});
await instance.createPromoKitty(362043466, coo, {from: coo,value: 0});
await instance.createPromoKitty(493738549, coo, {from: coo,value: 0});
await instance.createPromoKitty(279138383, coo, {from: coo,value: 0});
await instance.createPromoKitty(250042571, coo, {from: coo,value: 0});
await instance.createPromoKitty(492333224, coo, {from: coo,value: 0});
await instance.createPromoKitty(211113992, coo, {from: coo,value: 0});
await instance.createPromoKitty(519394095, coo, {from: coo,value: 0});
await instance.createPromoKitty(110534878, coo, {from: coo,value: 0});
await instance.createPromoKitty(895798659, coo, {from: coo,value: 0});
await instance.createPromoKitty(629843836, coo, {from: coo,value: 0});
await instance.createPromoKitty(380986487, coo, {from: coo,value: 0});
await instance.createPromoKitty(145417429, coo, {from: coo,value: 0});
await instance.createPromoKitty(392600174, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(24, 1, {from: coo});
await instance.breedWith(18, 36, {from: coo});
await instance.breedWith(12, 29, {from: coo});
await instance.breedWith(20, 35, {from: coo});
await instance.breedWith(16, 11, {from: coo});
await instance.breedWith(34, 21, {from: coo});
await instance.breedWith(3, 4, {from: coo});
await instance.breedWith(8, 31, {from: coo});
await instance.breedWith(10, 27, {from: coo});
await instance.breedWith(9, 28, {from: coo});
await instance.breedWith(33, 23, {from: coo});
await instance.breedWith(38, 25, {from: coo});
await instance.breedWith(37, 15, {from: coo});
await instance.breedWith(2, 13, {from: coo});
await instance.breedWith(7, 14, {from: coo});
await instance.breedWith(19, 5, {from: coo});
await instance.breedWith(17, 26, {from: coo});
await instance.breedWith(22, 32, {from: coo});
await instance.breedWith(40, 39, {from: coo});
await instance.breedWith(30, 6, {from: coo});
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
await instance.giveBirth(18);
await instance.giveBirth(12);
await instance.giveBirth(20);
await instance.giveBirth(16);
await instance.giveBirth(34);
await instance.giveBirth(3);
await instance.giveBirth(8);
await instance.giveBirth(10);
await instance.giveBirth(9);
await instance.giveBirth(33);
await instance.giveBirth(38);
await instance.giveBirth(37);
await instance.giveBirth(2);
await instance.giveBirth(7);
await instance.giveBirth(19);
await instance.giveBirth(17);
await instance.giveBirth(22);
await instance.giveBirth(40);
await instance.giveBirth(30);
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
