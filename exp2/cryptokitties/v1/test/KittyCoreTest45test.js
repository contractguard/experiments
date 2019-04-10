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
await instance.createPromoKitty(518476980, coo, {from: coo,value: 0});
await instance.createPromoKitty(360061520, coo, {from: coo,value: 0});
await instance.createPromoKitty(70920467, coo, {from: coo,value: 0});
await instance.createPromoKitty(219858419, coo, {from: coo,value: 0});
await instance.createPromoKitty(638858551, coo, {from: coo,value: 0});
await instance.createPromoKitty(615693991, coo, {from: coo,value: 0});
await instance.createPromoKitty(69968328, coo, {from: coo,value: 0});
await instance.createPromoKitty(308237726, coo, {from: coo,value: 0});
await instance.createPromoKitty(295225755, coo, {from: coo,value: 0});
await instance.createPromoKitty(486893074, coo, {from: coo,value: 0});
await instance.createPromoKitty(343533017, coo, {from: coo,value: 0});
await instance.createPromoKitty(182502520, coo, {from: coo,value: 0});
await instance.createPromoKitty(221825952, coo, {from: coo,value: 0});
await instance.createPromoKitty(166910280, coo, {from: coo,value: 0});
await instance.createPromoKitty(157220836, coo, {from: coo,value: 0});
await instance.createPromoKitty(144245912, coo, {from: coo,value: 0});
await instance.createPromoKitty(54469021, coo, {from: coo,value: 0});
await instance.createPromoKitty(650789804, coo, {from: coo,value: 0});
await instance.createPromoKitty(755737121, coo, {from: coo,value: 0});
await instance.createPromoKitty(308092600, coo, {from: coo,value: 0});
await instance.createPromoKitty(120110546, coo, {from: coo,value: 0});
await instance.createPromoKitty(530357069, coo, {from: coo,value: 0});
await instance.createPromoKitty(766232618, coo, {from: coo,value: 0});
await instance.createPromoKitty(352770726, coo, {from: coo,value: 0});
await instance.createPromoKitty(704431576, coo, {from: coo,value: 0});
await instance.createPromoKitty(401560658, coo, {from: coo,value: 0});
await instance.createPromoKitty(409464807, coo, {from: coo,value: 0});
await instance.createPromoKitty(573170148, coo, {from: coo,value: 0});
await instance.createPromoKitty(611778822, coo, {from: coo,value: 0});
await instance.createPromoKitty(533457373, coo, {from: coo,value: 0});
await instance.createPromoKitty(265383635, coo, {from: coo,value: 0});
await instance.createPromoKitty(597571223, coo, {from: coo,value: 0});
await instance.createPromoKitty(880365662, coo, {from: coo,value: 0});
await instance.createPromoKitty(439378132, coo, {from: coo,value: 0});
await instance.createPromoKitty(305495075, coo, {from: coo,value: 0});
await instance.createPromoKitty(997127343, coo, {from: coo,value: 0});
await instance.createPromoKitty(527055645, coo, {from: coo,value: 0});
await instance.createPromoKitty(122283116, coo, {from: coo,value: 0});
await instance.createPromoKitty(626660151, coo, {from: coo,value: 0});
await instance.createPromoKitty(434578919, coo, {from: coo,value: 0});
await instance.createPromoKitty(532718112, coo, {from: coo,value: 0});
await instance.createPromoKitty(421519450, coo, {from: coo,value: 0});
await instance.createPromoKitty(6970787, coo, {from: coo,value: 0});
await instance.createPromoKitty(273395614, coo, {from: coo,value: 0});
await instance.createPromoKitty(840877639, coo, {from: coo,value: 0});
await instance.createPromoKitty(617523839, coo, {from: coo,value: 0});
await instance.createPromoKitty(747775337, coo, {from: coo,value: 0});
await instance.createPromoKitty(213109885, coo, {from: coo,value: 0});
await instance.createPromoKitty(103155048, coo, {from: coo,value: 0});
await instance.createPromoKitty(241080700, coo, {from: coo,value: 0});
await instance.createPromoKitty(669156307, coo, {from: coo,value: 0});
await instance.createPromoKitty(520757652, coo, {from: coo,value: 0});
await instance.createPromoKitty(701969052, coo, {from: coo,value: 0});
await instance.createPromoKitty(413895434, coo, {from: coo,value: 0});
await instance.createPromoKitty(512939627, coo, {from: coo,value: 0});
await instance.createPromoKitty(374241280, coo, {from: coo,value: 0});
await instance.createPromoKitty(634829467, coo, {from: coo,value: 0});
await instance.createPromoKitty(283507352, coo, {from: coo,value: 0});
await instance.createPromoKitty(724771162, coo, {from: coo,value: 0});
await instance.createPromoKitty(710846954, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(3, 5, {from: coo});
await instance.breedWith(13, 37, {from: coo});
await instance.breedWith(32, 40, {from: coo});
await instance.breedWith(38, 33, {from: coo});
await instance.breedWith(19, 39, {from: coo});
await instance.breedWith(9, 24, {from: coo});
await instance.breedWith(31, 10, {from: coo});
await instance.breedWith(30, 28, {from: coo});
await instance.breedWith(8, 6, {from: coo});
await instance.breedWith(34, 15, {from: coo});
await instance.breedWith(14, 17, {from: coo});
await instance.breedWith(18, 11, {from: coo});
await instance.breedWith(36, 29, {from: coo});
await instance.breedWith(23, 22, {from: coo});
await instance.breedWith(26, 7, {from: coo});
await instance.breedWith(1, 35, {from: coo});
await instance.breedWith(12, 2, {from: coo});
await instance.breedWith(20, 4, {from: coo});
await instance.breedWith(25, 21, {from: coo});
await instance.breedWith(27, 16, {from: coo});
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
await instance.giveBirth(3);
await instance.giveBirth(13);
await instance.giveBirth(32);
await instance.giveBirth(38);
await instance.giveBirth(19);
await instance.giveBirth(9);
await instance.giveBirth(31);
await instance.giveBirth(30);
await instance.giveBirth(8);
await instance.giveBirth(34);
await instance.giveBirth(14);
await instance.giveBirth(18);
await instance.giveBirth(36);
await instance.giveBirth(23);
await instance.giveBirth(26);
await instance.giveBirth(1);
await instance.giveBirth(12);
await instance.giveBirth(20);
await instance.giveBirth(25);
await instance.giveBirth(27);
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
