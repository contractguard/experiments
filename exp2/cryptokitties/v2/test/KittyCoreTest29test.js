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
await instance.createPromoKitty(772868563, coo, {from: coo,value: 0});
await instance.createPromoKitty(602278367, coo, {from: coo,value: 0});
await instance.createPromoKitty(267311932, coo, {from: coo,value: 0});
await instance.createPromoKitty(198235488, coo, {from: coo,value: 0});
await instance.createPromoKitty(493682901, coo, {from: coo,value: 0});
await instance.createPromoKitty(402214698, coo, {from: coo,value: 0});
await instance.createPromoKitty(11417497, coo, {from: coo,value: 0});
await instance.createPromoKitty(954748877, coo, {from: coo,value: 0});
await instance.createPromoKitty(219742117, coo, {from: coo,value: 0});
await instance.createPromoKitty(87878673, coo, {from: coo,value: 0});
await instance.createPromoKitty(529765047, coo, {from: coo,value: 0});
await instance.createPromoKitty(545114409, coo, {from: coo,value: 0});
await instance.createPromoKitty(611512489, coo, {from: coo,value: 0});
await instance.createPromoKitty(650402952, coo, {from: coo,value: 0});
await instance.createPromoKitty(83042653, coo, {from: coo,value: 0});
await instance.createPromoKitty(554996424, coo, {from: coo,value: 0});
await instance.createPromoKitty(843942696, coo, {from: coo,value: 0});
await instance.createPromoKitty(377098218, coo, {from: coo,value: 0});
await instance.createPromoKitty(363462723, coo, {from: coo,value: 0});
await instance.createPromoKitty(194976395, coo, {from: coo,value: 0});
await instance.createPromoKitty(723985702, coo, {from: coo,value: 0});
await instance.createPromoKitty(752667906, coo, {from: coo,value: 0});
await instance.createPromoKitty(282336355, coo, {from: coo,value: 0});
await instance.createPromoKitty(491032576, coo, {from: coo,value: 0});
await instance.createPromoKitty(546473512, coo, {from: coo,value: 0});
await instance.createPromoKitty(985389345, coo, {from: coo,value: 0});
await instance.createPromoKitty(118966567, coo, {from: coo,value: 0});
await instance.createPromoKitty(595577376, coo, {from: coo,value: 0});
await instance.createPromoKitty(482861749, coo, {from: coo,value: 0});
await instance.createPromoKitty(31706470, coo, {from: coo,value: 0});
await instance.createPromoKitty(983982419, coo, {from: coo,value: 0});
await instance.createPromoKitty(611240184, coo, {from: coo,value: 0});
await instance.createPromoKitty(635449269, coo, {from: coo,value: 0});
await instance.createPromoKitty(115688958, coo, {from: coo,value: 0});
await instance.createPromoKitty(32624391, coo, {from: coo,value: 0});
await instance.createPromoKitty(108834632, coo, {from: coo,value: 0});
await instance.createPromoKitty(942643290, coo, {from: coo,value: 0});
await instance.createPromoKitty(430355498, coo, {from: coo,value: 0});
await instance.createPromoKitty(865895523, coo, {from: coo,value: 0});
await instance.createPromoKitty(46762578, coo, {from: coo,value: 0});
await instance.createPromoKitty(321359173, coo, {from: coo,value: 0});
await instance.createPromoKitty(624393275, coo, {from: coo,value: 0});
await instance.createPromoKitty(388712353, coo, {from: coo,value: 0});
await instance.createPromoKitty(375870732, coo, {from: coo,value: 0});
await instance.createPromoKitty(92162504, coo, {from: coo,value: 0});
await instance.createPromoKitty(403042963, coo, {from: coo,value: 0});
await instance.createPromoKitty(406461907, coo, {from: coo,value: 0});
await instance.createPromoKitty(631307820, coo, {from: coo,value: 0});
await instance.createPromoKitty(111138504, coo, {from: coo,value: 0});
await instance.createPromoKitty(577044903, coo, {from: coo,value: 0});
await instance.createPromoKitty(885954655, coo, {from: coo,value: 0});
await instance.createPromoKitty(273517782, coo, {from: coo,value: 0});
await instance.createPromoKitty(858024229, coo, {from: coo,value: 0});
await instance.createPromoKitty(56849336, coo, {from: coo,value: 0});
await instance.createPromoKitty(871448178, coo, {from: coo,value: 0});
await instance.createPromoKitty(526024288, coo, {from: coo,value: 0});
await instance.createPromoKitty(220615930, coo, {from: coo,value: 0});
await instance.createPromoKitty(25697019, coo, {from: coo,value: 0});
await instance.createPromoKitty(357301443, coo, {from: coo,value: 0});
await instance.createPromoKitty(566922269, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(3, 24, {from: coo});
await instance.breedWith(20, 33, {from: coo});
await instance.breedWith(9, 32, {from: coo});
await instance.breedWith(13, 14, {from: coo});
await instance.breedWith(4, 11, {from: coo});
await instance.breedWith(16, 25, {from: coo});
await instance.breedWith(40, 12, {from: coo});
await instance.breedWith(22, 6, {from: coo});
await instance.breedWith(29, 19, {from: coo});
await instance.breedWith(35, 28, {from: coo});
await instance.breedWith(10, 21, {from: coo});
await instance.breedWith(17, 27, {from: coo});
await instance.breedWith(2, 23, {from: coo});
await instance.breedWith(8, 34, {from: coo});
await instance.breedWith(5, 36, {from: coo});
await instance.breedWith(30, 15, {from: coo});
await instance.breedWith(39, 7, {from: coo});
await instance.breedWith(1, 31, {from: coo});
await instance.breedWith(26, 37, {from: coo});
await instance.breedWith(38, 18, {from: coo});
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
await instance.giveBirth(3);
await instance.giveBirth(20);
await instance.giveBirth(9);
await instance.giveBirth(13);
await instance.giveBirth(4);
await instance.giveBirth(16);
await instance.giveBirth(40);
await instance.giveBirth(22);
await instance.giveBirth(29);
await instance.giveBirth(35);
await instance.giveBirth(10);
await instance.giveBirth(17);
await instance.giveBirth(2);
await instance.giveBirth(8);
await instance.giveBirth(5);
await instance.giveBirth(30);
await instance.giveBirth(39);
await instance.giveBirth(1);
await instance.giveBirth(26);
await instance.giveBirth(38);
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
