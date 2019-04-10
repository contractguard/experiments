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
await instance.createPromoKitty(293328581, coo, {from: coo,value: 0});
await instance.createPromoKitty(260884839, coo, {from: coo,value: 0});
await instance.createPromoKitty(888113854, coo, {from: coo,value: 0});
await instance.createPromoKitty(979068034, coo, {from: coo,value: 0});
await instance.createPromoKitty(42826924, coo, {from: coo,value: 0});
await instance.createPromoKitty(694504135, coo, {from: coo,value: 0});
await instance.createPromoKitty(389241846, coo, {from: coo,value: 0});
await instance.createPromoKitty(304776763, coo, {from: coo,value: 0});
await instance.createPromoKitty(643661116, coo, {from: coo,value: 0});
await instance.createPromoKitty(301527852, coo, {from: coo,value: 0});
await instance.createPromoKitty(418505775, coo, {from: coo,value: 0});
await instance.createPromoKitty(108750542, coo, {from: coo,value: 0});
await instance.createPromoKitty(569800409, coo, {from: coo,value: 0});
await instance.createPromoKitty(125062976, coo, {from: coo,value: 0});
await instance.createPromoKitty(462816150, coo, {from: coo,value: 0});
await instance.createPromoKitty(339648011, coo, {from: coo,value: 0});
await instance.createPromoKitty(473289246, coo, {from: coo,value: 0});
await instance.createPromoKitty(586336428, coo, {from: coo,value: 0});
await instance.createPromoKitty(281602467, coo, {from: coo,value: 0});
await instance.createPromoKitty(279200162, coo, {from: coo,value: 0});
await instance.createPromoKitty(878539436, coo, {from: coo,value: 0});
await instance.createPromoKitty(734439419, coo, {from: coo,value: 0});
await instance.createPromoKitty(713010964, coo, {from: coo,value: 0});
await instance.createPromoKitty(334364216, coo, {from: coo,value: 0});
await instance.createPromoKitty(977156535, coo, {from: coo,value: 0});
await instance.createPromoKitty(688721904, coo, {from: coo,value: 0});
await instance.createPromoKitty(584588056, coo, {from: coo,value: 0});
await instance.createPromoKitty(228920919, coo, {from: coo,value: 0});
await instance.createPromoKitty(812276322, coo, {from: coo,value: 0});
await instance.createPromoKitty(369578967, coo, {from: coo,value: 0});
await instance.createPromoKitty(370424914, coo, {from: coo,value: 0});
await instance.createPromoKitty(161265608, coo, {from: coo,value: 0});
await instance.createPromoKitty(757860366, coo, {from: coo,value: 0});
await instance.createPromoKitty(978520932, coo, {from: coo,value: 0});
await instance.createPromoKitty(449181425, coo, {from: coo,value: 0});
await instance.createPromoKitty(251731925, coo, {from: coo,value: 0});
await instance.createPromoKitty(458128766, coo, {from: coo,value: 0});
await instance.createPromoKitty(167514561, coo, {from: coo,value: 0});
await instance.createPromoKitty(413010532, coo, {from: coo,value: 0});
await instance.createPromoKitty(295381030, coo, {from: coo,value: 0});
await instance.createPromoKitty(925755403, coo, {from: coo,value: 0});
await instance.createPromoKitty(586071531, coo, {from: coo,value: 0});
await instance.createPromoKitty(152932612, coo, {from: coo,value: 0});
await instance.createPromoKitty(931127410, coo, {from: coo,value: 0});
await instance.createPromoKitty(74809434, coo, {from: coo,value: 0});
await instance.createPromoKitty(425596537, coo, {from: coo,value: 0});
await instance.createPromoKitty(710616906, coo, {from: coo,value: 0});
await instance.createPromoKitty(739461264, coo, {from: coo,value: 0});
await instance.createPromoKitty(168360473, coo, {from: coo,value: 0});
await instance.createPromoKitty(974342847, coo, {from: coo,value: 0});
await instance.createPromoKitty(7905948, coo, {from: coo,value: 0});
await instance.createPromoKitty(302403991, coo, {from: coo,value: 0});
await instance.createPromoKitty(856004339, coo, {from: coo,value: 0});
await instance.createPromoKitty(953862071, coo, {from: coo,value: 0});
await instance.createPromoKitty(941116933, coo, {from: coo,value: 0});
await instance.createPromoKitty(857333889, coo, {from: coo,value: 0});
await instance.createPromoKitty(374033862, coo, {from: coo,value: 0});
await instance.createPromoKitty(755588636, coo, {from: coo,value: 0});
await instance.createPromoKitty(500996985, coo, {from: coo,value: 0});
await instance.createPromoKitty(954344506, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(19, 2, {from: coo});
await instance.breedWith(18, 5, {from: coo});
await instance.breedWith(31, 26, {from: coo});
await instance.breedWith(35, 23, {from: coo});
await instance.breedWith(25, 14, {from: coo});
await instance.breedWith(8, 13, {from: coo});
await instance.breedWith(24, 1, {from: coo});
await instance.breedWith(38, 33, {from: coo});
await instance.breedWith(27, 3, {from: coo});
await instance.breedWith(29, 4, {from: coo});
await instance.breedWith(28, 17, {from: coo});
await instance.breedWith(21, 7, {from: coo});
await instance.breedWith(40, 10, {from: coo});
await instance.breedWith(32, 37, {from: coo});
await instance.breedWith(6, 30, {from: coo});
await instance.breedWith(36, 22, {from: coo});
await instance.breedWith(12, 39, {from: coo});
await instance.breedWith(20, 34, {from: coo});
await instance.breedWith(16, 15, {from: coo});
await instance.breedWith(11, 9, {from: coo});
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
await instance.pause();
await instance.unpause();
await instance.giveBirth(19);
await instance.giveBirth(18);
await instance.giveBirth(31);
await instance.giveBirth(35);
await instance.giveBirth(25);
await instance.giveBirth(8);
await instance.giveBirth(24);
await instance.giveBirth(38);
await instance.giveBirth(27);
await instance.giveBirth(29);
await instance.giveBirth(28);
await instance.giveBirth(21);
await instance.giveBirth(40);
await instance.giveBirth(32);
await instance.giveBirth(6);
await instance.giveBirth(36);
await instance.giveBirth(12);
await instance.giveBirth(20);
await instance.giveBirth(16);
await instance.giveBirth(11);
});
it('test 5',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('test 6',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.pause();
await instance.unpause();
});
it('test 7',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('test 8',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.pause();
await instance.unpause();
});
it('test 9',async() => {
await util.forwardEVMTime(cooldowns[0]);
// let Kit5 = await test_subjec.t_KittyCore.createPromoKitty(n4, accounts[3], {from: coo, gas: 400000, gasPrice: 1100000000, value:0});
//console.log(Kit1.logs);

//培养第一代 kitty5
await instance.breedWith(55, 56, {from: coo});
await util.forwardEVMTime(cooldowns[0]);
await instance.giveBirth(55);

//培育第二代
await instance.breedWith(57, 59, {from: coo});
await util.forwardEVMTime(cooldowns[0]);});
it('attack', async() => {
 let result_Gen2 = await instance.giveBirth(57);
});
});
