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
await instance.createPromoKitty(711810110, coo, {from: coo,value: 0});
await instance.createPromoKitty(803876947, coo, {from: coo,value: 0});
await instance.createPromoKitty(800886894, coo, {from: coo,value: 0});
await instance.createPromoKitty(531357382, coo, {from: coo,value: 0});
await instance.createPromoKitty(469585653, coo, {from: coo,value: 0});
await instance.createPromoKitty(156987785, coo, {from: coo,value: 0});
await instance.createPromoKitty(545762825, coo, {from: coo,value: 0});
await instance.createPromoKitty(576711907, coo, {from: coo,value: 0});
await instance.createPromoKitty(624982475, coo, {from: coo,value: 0});
await instance.createPromoKitty(154222939, coo, {from: coo,value: 0});
await instance.createPromoKitty(957756900, coo, {from: coo,value: 0});
await instance.createPromoKitty(499750941, coo, {from: coo,value: 0});
await instance.createPromoKitty(691966235, coo, {from: coo,value: 0});
await instance.createPromoKitty(308902633, coo, {from: coo,value: 0});
await instance.createPromoKitty(234746901, coo, {from: coo,value: 0});
await instance.createPromoKitty(422204829, coo, {from: coo,value: 0});
await instance.createPromoKitty(44386042, coo, {from: coo,value: 0});
await instance.createPromoKitty(49862283, coo, {from: coo,value: 0});
await instance.createPromoKitty(795434608, coo, {from: coo,value: 0});
await instance.createPromoKitty(602567606, coo, {from: coo,value: 0});
await instance.createPromoKitty(934216218, coo, {from: coo,value: 0});
await instance.createPromoKitty(788692085, coo, {from: coo,value: 0});
await instance.createPromoKitty(726751064, coo, {from: coo,value: 0});
await instance.createPromoKitty(6879140, coo, {from: coo,value: 0});
await instance.createPromoKitty(584587513, coo, {from: coo,value: 0});
await instance.createPromoKitty(513156505, coo, {from: coo,value: 0});
await instance.createPromoKitty(842677361, coo, {from: coo,value: 0});
await instance.createPromoKitty(2096390, coo, {from: coo,value: 0});
await instance.createPromoKitty(423020915, coo, {from: coo,value: 0});
await instance.createPromoKitty(246246980, coo, {from: coo,value: 0});
await instance.createPromoKitty(751317518, coo, {from: coo,value: 0});
await instance.createPromoKitty(946008967, coo, {from: coo,value: 0});
await instance.createPromoKitty(460494619, coo, {from: coo,value: 0});
await instance.createPromoKitty(428581811, coo, {from: coo,value: 0});
await instance.createPromoKitty(536446546, coo, {from: coo,value: 0});
await instance.createPromoKitty(586349514, coo, {from: coo,value: 0});
await instance.createPromoKitty(41676648, coo, {from: coo,value: 0});
await instance.createPromoKitty(431598663, coo, {from: coo,value: 0});
await instance.createPromoKitty(547753986, coo, {from: coo,value: 0});
await instance.createPromoKitty(150033045, coo, {from: coo,value: 0});
await instance.createPromoKitty(309145815, coo, {from: coo,value: 0});
await instance.createPromoKitty(234866342, coo, {from: coo,value: 0});
await instance.createPromoKitty(84559842, coo, {from: coo,value: 0});
await instance.createPromoKitty(719092013, coo, {from: coo,value: 0});
await instance.createPromoKitty(215897207, coo, {from: coo,value: 0});
await instance.createPromoKitty(65531427, coo, {from: coo,value: 0});
await instance.createPromoKitty(394556679, coo, {from: coo,value: 0});
await instance.createPromoKitty(244467366, coo, {from: coo,value: 0});
await instance.createPromoKitty(135080272, coo, {from: coo,value: 0});
await instance.createPromoKitty(588272097, coo, {from: coo,value: 0});
await instance.createPromoKitty(571005290, coo, {from: coo,value: 0});
await instance.createPromoKitty(306636617, coo, {from: coo,value: 0});
await instance.createPromoKitty(702124729, coo, {from: coo,value: 0});
await instance.createPromoKitty(440171967, coo, {from: coo,value: 0});
await instance.createPromoKitty(384569596, coo, {from: coo,value: 0});
await instance.createPromoKitty(458251258, coo, {from: coo,value: 0});
await instance.createPromoKitty(111418144, coo, {from: coo,value: 0});
await instance.createPromoKitty(860667992, coo, {from: coo,value: 0});
await instance.createPromoKitty(966533737, coo, {from: coo,value: 0});
await instance.createPromoKitty(668584192, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(14, 19, {from: coo});
await instance.breedWith(30, 32, {from: coo});
await instance.breedWith(29, 7, {from: coo});
await instance.breedWith(33, 2, {from: coo});
await instance.breedWith(22, 1, {from: coo});
await instance.breedWith(10, 38, {from: coo});
await instance.breedWith(13, 8, {from: coo});
await instance.breedWith(24, 31, {from: coo});
await instance.breedWith(17, 15, {from: coo});
await instance.breedWith(26, 39, {from: coo});
await instance.breedWith(9, 11, {from: coo});
await instance.breedWith(25, 35, {from: coo});
await instance.breedWith(34, 27, {from: coo});
await instance.breedWith(4, 6, {from: coo});
await instance.breedWith(18, 16, {from: coo});
await instance.breedWith(21, 5, {from: coo});
await instance.breedWith(12, 28, {from: coo});
await instance.breedWith(20, 23, {from: coo});
await instance.breedWith(36, 37, {from: coo});
await instance.breedWith(3, 40, {from: coo});
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
await instance.giveBirth(14);
await instance.giveBirth(30);
await instance.giveBirth(29);
await instance.giveBirth(33);
await instance.giveBirth(22);
await instance.giveBirth(10);
await instance.giveBirth(13);
await instance.giveBirth(24);
await instance.giveBirth(17);
await instance.giveBirth(26);
await instance.giveBirth(9);
await instance.giveBirth(25);
await instance.giveBirth(34);
await instance.giveBirth(4);
await instance.giveBirth(18);
await instance.giveBirth(21);
await instance.giveBirth(12);
await instance.giveBirth(20);
await instance.giveBirth(36);
await instance.giveBirth(3);
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
