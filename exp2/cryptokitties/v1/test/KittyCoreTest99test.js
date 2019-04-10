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
await instance.createPromoKitty(420290247, coo, {from: coo,value: 0});
await instance.createPromoKitty(806043419, coo, {from: coo,value: 0});
await instance.createPromoKitty(106020924, coo, {from: coo,value: 0});
await instance.createPromoKitty(304165571, coo, {from: coo,value: 0});
await instance.createPromoKitty(333385345, coo, {from: coo,value: 0});
await instance.createPromoKitty(654506164, coo, {from: coo,value: 0});
await instance.createPromoKitty(523211736, coo, {from: coo,value: 0});
await instance.createPromoKitty(182825917, coo, {from: coo,value: 0});
await instance.createPromoKitty(479341638, coo, {from: coo,value: 0});
await instance.createPromoKitty(928234622, coo, {from: coo,value: 0});
await instance.createPromoKitty(343376011, coo, {from: coo,value: 0});
await instance.createPromoKitty(227372855, coo, {from: coo,value: 0});
await instance.createPromoKitty(451089377, coo, {from: coo,value: 0});
await instance.createPromoKitty(227562935, coo, {from: coo,value: 0});
await instance.createPromoKitty(251450571, coo, {from: coo,value: 0});
await instance.createPromoKitty(376111507, coo, {from: coo,value: 0});
await instance.createPromoKitty(467221466, coo, {from: coo,value: 0});
await instance.createPromoKitty(934921818, coo, {from: coo,value: 0});
await instance.createPromoKitty(676354484, coo, {from: coo,value: 0});
await instance.createPromoKitty(884653686, coo, {from: coo,value: 0});
await instance.createPromoKitty(326263758, coo, {from: coo,value: 0});
await instance.createPromoKitty(546611998, coo, {from: coo,value: 0});
await instance.createPromoKitty(321344528, coo, {from: coo,value: 0});
await instance.createPromoKitty(814771877, coo, {from: coo,value: 0});
await instance.createPromoKitty(383068571, coo, {from: coo,value: 0});
await instance.createPromoKitty(412084257, coo, {from: coo,value: 0});
await instance.createPromoKitty(66648262, coo, {from: coo,value: 0});
await instance.createPromoKitty(116864123, coo, {from: coo,value: 0});
await instance.createPromoKitty(826571807, coo, {from: coo,value: 0});
await instance.createPromoKitty(143726099, coo, {from: coo,value: 0});
await instance.createPromoKitty(164711914, coo, {from: coo,value: 0});
await instance.createPromoKitty(185359830, coo, {from: coo,value: 0});
await instance.createPromoKitty(185164479, coo, {from: coo,value: 0});
await instance.createPromoKitty(859681830, coo, {from: coo,value: 0});
await instance.createPromoKitty(15084591, coo, {from: coo,value: 0});
await instance.createPromoKitty(690776858, coo, {from: coo,value: 0});
await instance.createPromoKitty(779845147, coo, {from: coo,value: 0});
await instance.createPromoKitty(986099456, coo, {from: coo,value: 0});
await instance.createPromoKitty(335933326, coo, {from: coo,value: 0});
await instance.createPromoKitty(520543449, coo, {from: coo,value: 0});
await instance.createPromoKitty(106590634, coo, {from: coo,value: 0});
await instance.createPromoKitty(188100202, coo, {from: coo,value: 0});
await instance.createPromoKitty(886002547, coo, {from: coo,value: 0});
await instance.createPromoKitty(149565704, coo, {from: coo,value: 0});
await instance.createPromoKitty(579435788, coo, {from: coo,value: 0});
await instance.createPromoKitty(132368206, coo, {from: coo,value: 0});
await instance.createPromoKitty(219597190, coo, {from: coo,value: 0});
await instance.createPromoKitty(598387914, coo, {from: coo,value: 0});
await instance.createPromoKitty(814840815, coo, {from: coo,value: 0});
await instance.createPromoKitty(867973751, coo, {from: coo,value: 0});
await instance.createPromoKitty(461474729, coo, {from: coo,value: 0});
await instance.createPromoKitty(610024643, coo, {from: coo,value: 0});
await instance.createPromoKitty(468083697, coo, {from: coo,value: 0});
await instance.createPromoKitty(919231352, coo, {from: coo,value: 0});
await instance.createPromoKitty(386628405, coo, {from: coo,value: 0});
await instance.createPromoKitty(439306007, coo, {from: coo,value: 0});
await instance.createPromoKitty(369741021, coo, {from: coo,value: 0});
await instance.createPromoKitty(493745103, coo, {from: coo,value: 0});
await instance.createPromoKitty(879153676, coo, {from: coo,value: 0});
await instance.createPromoKitty(670767232, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(9, 7, {from: coo});
await instance.breedWith(24, 12, {from: coo});
await instance.breedWith(27, 20, {from: coo});
await instance.breedWith(23, 4, {from: coo});
await instance.breedWith(19, 6, {from: coo});
await instance.breedWith(16, 39, {from: coo});
await instance.breedWith(29, 36, {from: coo});
await instance.breedWith(30, 37, {from: coo});
await instance.breedWith(14, 28, {from: coo});
await instance.breedWith(25, 18, {from: coo});
await instance.breedWith(5, 22, {from: coo});
await instance.breedWith(26, 34, {from: coo});
await instance.breedWith(13, 33, {from: coo});
await instance.breedWith(2, 35, {from: coo});
await instance.breedWith(1, 3, {from: coo});
await instance.breedWith(10, 17, {from: coo});
await instance.breedWith(40, 32, {from: coo});
await instance.breedWith(31, 8, {from: coo});
await instance.breedWith(21, 11, {from: coo});
await instance.breedWith(15, 38, {from: coo});
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
await instance.giveBirth(9);
await instance.giveBirth(24);
await instance.giveBirth(27);
await instance.giveBirth(23);
await instance.giveBirth(19);
await instance.giveBirth(16);
await instance.giveBirth(29);
await instance.giveBirth(30);
await instance.giveBirth(14);
await instance.giveBirth(25);
await instance.giveBirth(5);
await instance.giveBirth(26);
await instance.giveBirth(13);
await instance.giveBirth(2);
await instance.giveBirth(1);
await instance.giveBirth(10);
await instance.giveBirth(40);
await instance.giveBirth(31);
await instance.giveBirth(21);
await instance.giveBirth(15);
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
