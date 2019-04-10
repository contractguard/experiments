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
await instance.createPromoKitty(633525225, coo, {from: coo,value: 0});
await instance.createPromoKitty(385909503, coo, {from: coo,value: 0});
await instance.createPromoKitty(401473335, coo, {from: coo,value: 0});
await instance.createPromoKitty(653601999, coo, {from: coo,value: 0});
await instance.createPromoKitty(86993472, coo, {from: coo,value: 0});
await instance.createPromoKitty(846043276, coo, {from: coo,value: 0});
await instance.createPromoKitty(257046901, coo, {from: coo,value: 0});
await instance.createPromoKitty(836060839, coo, {from: coo,value: 0});
await instance.createPromoKitty(121404224, coo, {from: coo,value: 0});
await instance.createPromoKitty(727828453, coo, {from: coo,value: 0});
await instance.createPromoKitty(42820812, coo, {from: coo,value: 0});
await instance.createPromoKitty(423868999, coo, {from: coo,value: 0});
await instance.createPromoKitty(125425708, coo, {from: coo,value: 0});
await instance.createPromoKitty(187044600, coo, {from: coo,value: 0});
await instance.createPromoKitty(324589191, coo, {from: coo,value: 0});
await instance.createPromoKitty(669669365, coo, {from: coo,value: 0});
await instance.createPromoKitty(707687106, coo, {from: coo,value: 0});
await instance.createPromoKitty(234552981, coo, {from: coo,value: 0});
await instance.createPromoKitty(391272709, coo, {from: coo,value: 0});
await instance.createPromoKitty(784082726, coo, {from: coo,value: 0});
await instance.createPromoKitty(153829301, coo, {from: coo,value: 0});
await instance.createPromoKitty(577277618, coo, {from: coo,value: 0});
await instance.createPromoKitty(276486967, coo, {from: coo,value: 0});
await instance.createPromoKitty(901523584, coo, {from: coo,value: 0});
await instance.createPromoKitty(34127817, coo, {from: coo,value: 0});
await instance.createPromoKitty(589705840, coo, {from: coo,value: 0});
await instance.createPromoKitty(3881110, coo, {from: coo,value: 0});
await instance.createPromoKitty(691535555, coo, {from: coo,value: 0});
await instance.createPromoKitty(782872941, coo, {from: coo,value: 0});
await instance.createPromoKitty(528480172, coo, {from: coo,value: 0});
await instance.createPromoKitty(155480695, coo, {from: coo,value: 0});
await instance.createPromoKitty(850844636, coo, {from: coo,value: 0});
await instance.createPromoKitty(606726282, coo, {from: coo,value: 0});
await instance.createPromoKitty(159627550, coo, {from: coo,value: 0});
await instance.createPromoKitty(626984747, coo, {from: coo,value: 0});
await instance.createPromoKitty(67112370, coo, {from: coo,value: 0});
await instance.createPromoKitty(329328064, coo, {from: coo,value: 0});
await instance.createPromoKitty(796680716, coo, {from: coo,value: 0});
await instance.createPromoKitty(632939774, coo, {from: coo,value: 0});
await instance.createPromoKitty(249088040, coo, {from: coo,value: 0});
await instance.createPromoKitty(559091883, coo, {from: coo,value: 0});
await instance.createPromoKitty(617155318, coo, {from: coo,value: 0});
await instance.createPromoKitty(344617921, coo, {from: coo,value: 0});
await instance.createPromoKitty(599777875, coo, {from: coo,value: 0});
await instance.createPromoKitty(535264539, coo, {from: coo,value: 0});
await instance.createPromoKitty(750339412, coo, {from: coo,value: 0});
await instance.createPromoKitty(916836928, coo, {from: coo,value: 0});
await instance.createPromoKitty(82416379, coo, {from: coo,value: 0});
await instance.createPromoKitty(1884551, coo, {from: coo,value: 0});
await instance.createPromoKitty(972138705, coo, {from: coo,value: 0});
await instance.createPromoKitty(373197308, coo, {from: coo,value: 0});
await instance.createPromoKitty(691148502, coo, {from: coo,value: 0});
await instance.createPromoKitty(620442776, coo, {from: coo,value: 0});
await instance.createPromoKitty(890417682, coo, {from: coo,value: 0});
await instance.createPromoKitty(106594779, coo, {from: coo,value: 0});
await instance.createPromoKitty(442353621, coo, {from: coo,value: 0});
await instance.createPromoKitty(178064628, coo, {from: coo,value: 0});
await instance.createPromoKitty(812918771, coo, {from: coo,value: 0});
await instance.createPromoKitty(850216682, coo, {from: coo,value: 0});
await instance.createPromoKitty(380236816, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(18, 15, {from: coo});
await instance.breedWith(34, 19, {from: coo});
await instance.breedWith(27, 39, {from: coo});
await instance.breedWith(6, 33, {from: coo});
await instance.breedWith(9, 26, {from: coo});
await instance.breedWith(35, 23, {from: coo});
await instance.breedWith(31, 24, {from: coo});
await instance.breedWith(2, 13, {from: coo});
await instance.breedWith(11, 10, {from: coo});
await instance.breedWith(25, 5, {from: coo});
await instance.breedWith(38, 7, {from: coo});
await instance.breedWith(40, 14, {from: coo});
await instance.breedWith(20, 4, {from: coo});
await instance.breedWith(36, 29, {from: coo});
await instance.breedWith(30, 21, {from: coo});
await instance.breedWith(3, 32, {from: coo});
await instance.breedWith(17, 8, {from: coo});
await instance.breedWith(12, 1, {from: coo});
await instance.breedWith(37, 16, {from: coo});
await instance.breedWith(22, 28, {from: coo});
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
await instance.giveBirth(18);
await instance.giveBirth(34);
await instance.giveBirth(27);
await instance.giveBirth(6);
await instance.giveBirth(9);
await instance.giveBirth(35);
await instance.giveBirth(31);
await instance.giveBirth(2);
await instance.giveBirth(11);
await instance.giveBirth(25);
await instance.giveBirth(38);
await instance.giveBirth(40);
await instance.giveBirth(20);
await instance.giveBirth(36);
await instance.giveBirth(30);
await instance.giveBirth(3);
await instance.giveBirth(17);
await instance.giveBirth(12);
await instance.giveBirth(37);
await instance.giveBirth(22);
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
});
it('attack', async() => {
 await instance.breedWith(57, bigValue, {from: coo});
});
});
