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
await instance.createPromoKitty(362528114, coo, {from: coo,value: 0});
await instance.createPromoKitty(820150257, coo, {from: coo,value: 0});
await instance.createPromoKitty(238233647, coo, {from: coo,value: 0});
await instance.createPromoKitty(484957011, coo, {from: coo,value: 0});
await instance.createPromoKitty(989651073, coo, {from: coo,value: 0});
await instance.createPromoKitty(972767514, coo, {from: coo,value: 0});
await instance.createPromoKitty(117728516, coo, {from: coo,value: 0});
await instance.createPromoKitty(199571125, coo, {from: coo,value: 0});
await instance.createPromoKitty(308016410, coo, {from: coo,value: 0});
await instance.createPromoKitty(698882463, coo, {from: coo,value: 0});
await instance.createPromoKitty(200521667, coo, {from: coo,value: 0});
await instance.createPromoKitty(308933343, coo, {from: coo,value: 0});
await instance.createPromoKitty(597163633, coo, {from: coo,value: 0});
await instance.createPromoKitty(458134069, coo, {from: coo,value: 0});
await instance.createPromoKitty(934751770, coo, {from: coo,value: 0});
await instance.createPromoKitty(899415849, coo, {from: coo,value: 0});
await instance.createPromoKitty(883662446, coo, {from: coo,value: 0});
await instance.createPromoKitty(116304326, coo, {from: coo,value: 0});
await instance.createPromoKitty(482640004, coo, {from: coo,value: 0});
await instance.createPromoKitty(763217487, coo, {from: coo,value: 0});
await instance.createPromoKitty(983605213, coo, {from: coo,value: 0});
await instance.createPromoKitty(228342856, coo, {from: coo,value: 0});
await instance.createPromoKitty(754375888, coo, {from: coo,value: 0});
await instance.createPromoKitty(112579841, coo, {from: coo,value: 0});
await instance.createPromoKitty(80801290, coo, {from: coo,value: 0});
await instance.createPromoKitty(935180780, coo, {from: coo,value: 0});
await instance.createPromoKitty(911368150, coo, {from: coo,value: 0});
await instance.createPromoKitty(77490036, coo, {from: coo,value: 0});
await instance.createPromoKitty(732341564, coo, {from: coo,value: 0});
await instance.createPromoKitty(857426532, coo, {from: coo,value: 0});
await instance.createPromoKitty(346203332, coo, {from: coo,value: 0});
await instance.createPromoKitty(594467083, coo, {from: coo,value: 0});
await instance.createPromoKitty(446231952, coo, {from: coo,value: 0});
await instance.createPromoKitty(254785042, coo, {from: coo,value: 0});
await instance.createPromoKitty(742799108, coo, {from: coo,value: 0});
await instance.createPromoKitty(17287873, coo, {from: coo,value: 0});
await instance.createPromoKitty(306749770, coo, {from: coo,value: 0});
await instance.createPromoKitty(855157662, coo, {from: coo,value: 0});
await instance.createPromoKitty(216121140, coo, {from: coo,value: 0});
await instance.createPromoKitty(515177059, coo, {from: coo,value: 0});
await instance.createPromoKitty(257951385, coo, {from: coo,value: 0});
await instance.createPromoKitty(629368570, coo, {from: coo,value: 0});
await instance.createPromoKitty(755321185, coo, {from: coo,value: 0});
await instance.createPromoKitty(212744888, coo, {from: coo,value: 0});
await instance.createPromoKitty(151132835, coo, {from: coo,value: 0});
await instance.createPromoKitty(620997580, coo, {from: coo,value: 0});
await instance.createPromoKitty(239526561, coo, {from: coo,value: 0});
await instance.createPromoKitty(291662324, coo, {from: coo,value: 0});
await instance.createPromoKitty(41567147, coo, {from: coo,value: 0});
await instance.createPromoKitty(257276408, coo, {from: coo,value: 0});
await instance.createPromoKitty(486921181, coo, {from: coo,value: 0});
await instance.createPromoKitty(742262778, coo, {from: coo,value: 0});
await instance.createPromoKitty(418522815, coo, {from: coo,value: 0});
await instance.createPromoKitty(498940246, coo, {from: coo,value: 0});
await instance.createPromoKitty(545491164, coo, {from: coo,value: 0});
await instance.createPromoKitty(191601897, coo, {from: coo,value: 0});
await instance.createPromoKitty(911212508, coo, {from: coo,value: 0});
await instance.createPromoKitty(969097901, coo, {from: coo,value: 0});
await instance.createPromoKitty(911181113, coo, {from: coo,value: 0});
await instance.createPromoKitty(975783060, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(18, 31, {from: coo});
await instance.breedWith(33, 2, {from: coo});
await instance.breedWith(30, 38, {from: coo});
await instance.breedWith(36, 21, {from: coo});
await instance.breedWith(25, 20, {from: coo});
await instance.breedWith(34, 16, {from: coo});
await instance.breedWith(27, 1, {from: coo});
await instance.breedWith(12, 23, {from: coo});
await instance.breedWith(40, 28, {from: coo});
await instance.breedWith(26, 39, {from: coo});
await instance.breedWith(13, 19, {from: coo});
await instance.breedWith(15, 29, {from: coo});
await instance.breedWith(24, 22, {from: coo});
await instance.breedWith(9, 11, {from: coo});
await instance.breedWith(6, 8, {from: coo});
await instance.breedWith(5, 10, {from: coo});
await instance.breedWith(32, 17, {from: coo});
await instance.breedWith(35, 3, {from: coo});
await instance.breedWith(7, 14, {from: coo});
await instance.breedWith(37, 4, {from: coo});
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
await instance.giveBirth(33);
await instance.giveBirth(30);
await instance.giveBirth(36);
await instance.giveBirth(25);
await instance.giveBirth(34);
await instance.giveBirth(27);
await instance.giveBirth(12);
await instance.giveBirth(40);
await instance.giveBirth(26);
await instance.giveBirth(13);
await instance.giveBirth(15);
await instance.giveBirth(24);
await instance.giveBirth(9);
await instance.giveBirth(6);
await instance.giveBirth(5);
await instance.giveBirth(32);
await instance.giveBirth(35);
await instance.giveBirth(7);
await instance.giveBirth(37);
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
