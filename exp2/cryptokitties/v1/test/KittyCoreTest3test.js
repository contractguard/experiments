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
await instance.createPromoKitty(506762469, coo, {from: coo,value: 0});
await instance.createPromoKitty(625275418, coo, {from: coo,value: 0});
await instance.createPromoKitty(423542356, coo, {from: coo,value: 0});
await instance.createPromoKitty(773671878, coo, {from: coo,value: 0});
await instance.createPromoKitty(963105743, coo, {from: coo,value: 0});
await instance.createPromoKitty(913630020, coo, {from: coo,value: 0});
await instance.createPromoKitty(547936949, coo, {from: coo,value: 0});
await instance.createPromoKitty(253551362, coo, {from: coo,value: 0});
await instance.createPromoKitty(507072755, coo, {from: coo,value: 0});
await instance.createPromoKitty(260274872, coo, {from: coo,value: 0});
await instance.createPromoKitty(955526247, coo, {from: coo,value: 0});
await instance.createPromoKitty(869102466, coo, {from: coo,value: 0});
await instance.createPromoKitty(605531099, coo, {from: coo,value: 0});
await instance.createPromoKitty(560627772, coo, {from: coo,value: 0});
await instance.createPromoKitty(307904254, coo, {from: coo,value: 0});
await instance.createPromoKitty(519883715, coo, {from: coo,value: 0});
await instance.createPromoKitty(387821871, coo, {from: coo,value: 0});
await instance.createPromoKitty(213417766, coo, {from: coo,value: 0});
await instance.createPromoKitty(333153093, coo, {from: coo,value: 0});
await instance.createPromoKitty(120829773, coo, {from: coo,value: 0});
await instance.createPromoKitty(289869704, coo, {from: coo,value: 0});
await instance.createPromoKitty(153523108, coo, {from: coo,value: 0});
await instance.createPromoKitty(556951164, coo, {from: coo,value: 0});
await instance.createPromoKitty(280536064, coo, {from: coo,value: 0});
await instance.createPromoKitty(649598319, coo, {from: coo,value: 0});
await instance.createPromoKitty(685571889, coo, {from: coo,value: 0});
await instance.createPromoKitty(298019907, coo, {from: coo,value: 0});
await instance.createPromoKitty(241586911, coo, {from: coo,value: 0});
await instance.createPromoKitty(173754949, coo, {from: coo,value: 0});
await instance.createPromoKitty(228454410, coo, {from: coo,value: 0});
await instance.createPromoKitty(19928647, coo, {from: coo,value: 0});
await instance.createPromoKitty(450351105, coo, {from: coo,value: 0});
await instance.createPromoKitty(304259197, coo, {from: coo,value: 0});
await instance.createPromoKitty(156554728, coo, {from: coo,value: 0});
await instance.createPromoKitty(510632801, coo, {from: coo,value: 0});
await instance.createPromoKitty(402749197, coo, {from: coo,value: 0});
await instance.createPromoKitty(365509639, coo, {from: coo,value: 0});
await instance.createPromoKitty(723297551, coo, {from: coo,value: 0});
await instance.createPromoKitty(268836716, coo, {from: coo,value: 0});
await instance.createPromoKitty(960601650, coo, {from: coo,value: 0});
await instance.createPromoKitty(756519760, coo, {from: coo,value: 0});
await instance.createPromoKitty(175278249, coo, {from: coo,value: 0});
await instance.createPromoKitty(711376378, coo, {from: coo,value: 0});
await instance.createPromoKitty(982415887, coo, {from: coo,value: 0});
await instance.createPromoKitty(686328948, coo, {from: coo,value: 0});
await instance.createPromoKitty(523243329, coo, {from: coo,value: 0});
await instance.createPromoKitty(146579976, coo, {from: coo,value: 0});
await instance.createPromoKitty(541945482, coo, {from: coo,value: 0});
await instance.createPromoKitty(156499681, coo, {from: coo,value: 0});
await instance.createPromoKitty(451649703, coo, {from: coo,value: 0});
await instance.createPromoKitty(497269791, coo, {from: coo,value: 0});
await instance.createPromoKitty(976031082, coo, {from: coo,value: 0});
await instance.createPromoKitty(590697007, coo, {from: coo,value: 0});
await instance.createPromoKitty(101622770, coo, {from: coo,value: 0});
await instance.createPromoKitty(451346168, coo, {from: coo,value: 0});
await instance.createPromoKitty(935432494, coo, {from: coo,value: 0});
await instance.createPromoKitty(279804694, coo, {from: coo,value: 0});
await instance.createPromoKitty(25465606, coo, {from: coo,value: 0});
await instance.createPromoKitty(347605257, coo, {from: coo,value: 0});
await instance.createPromoKitty(936184925, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(40, 15, {from: coo});
await instance.breedWith(27, 29, {from: coo});
await instance.breedWith(9, 30, {from: coo});
await instance.breedWith(13, 17, {from: coo});
await instance.breedWith(25, 16, {from: coo});
await instance.breedWith(1, 26, {from: coo});
await instance.breedWith(23, 6, {from: coo});
await instance.breedWith(38, 37, {from: coo});
await instance.breedWith(33, 5, {from: coo});
await instance.breedWith(14, 11, {from: coo});
await instance.breedWith(35, 32, {from: coo});
await instance.breedWith(39, 19, {from: coo});
await instance.breedWith(2, 24, {from: coo});
await instance.breedWith(7, 22, {from: coo});
await instance.breedWith(10, 31, {from: coo});
await instance.breedWith(4, 3, {from: coo});
await instance.breedWith(20, 12, {from: coo});
await instance.breedWith(18, 21, {from: coo});
await instance.breedWith(36, 28, {from: coo});
await instance.breedWith(8, 34, {from: coo});
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
await instance.giveBirth(40);
await instance.giveBirth(27);
await instance.giveBirth(9);
await instance.giveBirth(13);
await instance.giveBirth(25);
await instance.giveBirth(1);
await instance.giveBirth(23);
await instance.giveBirth(38);
await instance.giveBirth(33);
await instance.giveBirth(14);
await instance.giveBirth(35);
await instance.giveBirth(39);
await instance.giveBirth(2);
await instance.giveBirth(7);
await instance.giveBirth(10);
await instance.giveBirth(4);
await instance.giveBirth(20);
await instance.giveBirth(18);
await instance.giveBirth(36);
await instance.giveBirth(8);
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
