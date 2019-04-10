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
await instance.createPromoKitty(772885280, coo, {from: coo,value: 0});
await instance.createPromoKitty(176893751, coo, {from: coo,value: 0});
await instance.createPromoKitty(443715084, coo, {from: coo,value: 0});
await instance.createPromoKitty(107295401, coo, {from: coo,value: 0});
await instance.createPromoKitty(736108822, coo, {from: coo,value: 0});
await instance.createPromoKitty(3786648, coo, {from: coo,value: 0});
await instance.createPromoKitty(568128369, coo, {from: coo,value: 0});
await instance.createPromoKitty(265691821, coo, {from: coo,value: 0});
await instance.createPromoKitty(756517414, coo, {from: coo,value: 0});
await instance.createPromoKitty(779841776, coo, {from: coo,value: 0});
await instance.createPromoKitty(864902573, coo, {from: coo,value: 0});
await instance.createPromoKitty(840324663, coo, {from: coo,value: 0});
await instance.createPromoKitty(419539413, coo, {from: coo,value: 0});
await instance.createPromoKitty(167800907, coo, {from: coo,value: 0});
await instance.createPromoKitty(374368169, coo, {from: coo,value: 0});
await instance.createPromoKitty(760308051, coo, {from: coo,value: 0});
await instance.createPromoKitty(6766317, coo, {from: coo,value: 0});
await instance.createPromoKitty(17454655, coo, {from: coo,value: 0});
await instance.createPromoKitty(997582835, coo, {from: coo,value: 0});
await instance.createPromoKitty(986395369, coo, {from: coo,value: 0});
await instance.createPromoKitty(375022871, coo, {from: coo,value: 0});
await instance.createPromoKitty(76656553, coo, {from: coo,value: 0});
await instance.createPromoKitty(740739810, coo, {from: coo,value: 0});
await instance.createPromoKitty(376506231, coo, {from: coo,value: 0});
await instance.createPromoKitty(997199374, coo, {from: coo,value: 0});
await instance.createPromoKitty(347877952, coo, {from: coo,value: 0});
await instance.createPromoKitty(282659959, coo, {from: coo,value: 0});
await instance.createPromoKitty(700959328, coo, {from: coo,value: 0});
await instance.createPromoKitty(77475279, coo, {from: coo,value: 0});
await instance.createPromoKitty(966418868, coo, {from: coo,value: 0});
await instance.createPromoKitty(662295742, coo, {from: coo,value: 0});
await instance.createPromoKitty(802665253, coo, {from: coo,value: 0});
await instance.createPromoKitty(186643592, coo, {from: coo,value: 0});
await instance.createPromoKitty(431840183, coo, {from: coo,value: 0});
await instance.createPromoKitty(659664378, coo, {from: coo,value: 0});
await instance.createPromoKitty(160779299, coo, {from: coo,value: 0});
await instance.createPromoKitty(18146555, coo, {from: coo,value: 0});
await instance.createPromoKitty(567299180, coo, {from: coo,value: 0});
await instance.createPromoKitty(238066066, coo, {from: coo,value: 0});
await instance.createPromoKitty(243079653, coo, {from: coo,value: 0});
await instance.createPromoKitty(864784883, coo, {from: coo,value: 0});
await instance.createPromoKitty(452495300, coo, {from: coo,value: 0});
await instance.createPromoKitty(584820030, coo, {from: coo,value: 0});
await instance.createPromoKitty(594923593, coo, {from: coo,value: 0});
await instance.createPromoKitty(597313478, coo, {from: coo,value: 0});
await instance.createPromoKitty(721183379, coo, {from: coo,value: 0});
await instance.createPromoKitty(687328536, coo, {from: coo,value: 0});
await instance.createPromoKitty(79477227, coo, {from: coo,value: 0});
await instance.createPromoKitty(968758934, coo, {from: coo,value: 0});
await instance.createPromoKitty(532696245, coo, {from: coo,value: 0});
await instance.createPromoKitty(489670772, coo, {from: coo,value: 0});
await instance.createPromoKitty(100568032, coo, {from: coo,value: 0});
await instance.createPromoKitty(802436496, coo, {from: coo,value: 0});
await instance.createPromoKitty(683135934, coo, {from: coo,value: 0});
await instance.createPromoKitty(255229794, coo, {from: coo,value: 0});
await instance.createPromoKitty(231236294, coo, {from: coo,value: 0});
await instance.createPromoKitty(240537231, coo, {from: coo,value: 0});
await instance.createPromoKitty(158036914, coo, {from: coo,value: 0});
await instance.createPromoKitty(13126547, coo, {from: coo,value: 0});
await instance.createPromoKitty(984758096, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(1, 30, {from: coo});
await instance.breedWith(18, 32, {from: coo});
await instance.breedWith(3, 40, {from: coo});
await instance.breedWith(34, 20, {from: coo});
await instance.breedWith(5, 38, {from: coo});
await instance.breedWith(36, 31, {from: coo});
await instance.breedWith(7, 8, {from: coo});
await instance.breedWith(29, 39, {from: coo});
await instance.breedWith(4, 24, {from: coo});
await instance.breedWith(27, 14, {from: coo});
await instance.breedWith(13, 19, {from: coo});
await instance.breedWith(26, 23, {from: coo});
await instance.breedWith(28, 6, {from: coo});
await instance.breedWith(17, 9, {from: coo});
await instance.breedWith(2, 35, {from: coo});
await instance.breedWith(25, 33, {from: coo});
await instance.breedWith(21, 22, {from: coo});
await instance.breedWith(16, 12, {from: coo});
await instance.breedWith(11, 37, {from: coo});
await instance.breedWith(10, 15, {from: coo});
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
await instance.giveBirth(1);
await instance.giveBirth(18);
await instance.giveBirth(3);
await instance.giveBirth(34);
await instance.giveBirth(5);
await instance.giveBirth(36);
await instance.giveBirth(7);
await instance.giveBirth(29);
await instance.giveBirth(4);
await instance.giveBirth(27);
await instance.giveBirth(13);
await instance.giveBirth(26);
await instance.giveBirth(28);
await instance.giveBirth(17);
await instance.giveBirth(2);
await instance.giveBirth(25);
await instance.giveBirth(21);
await instance.giveBirth(16);
await instance.giveBirth(11);
await instance.giveBirth(10);
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
