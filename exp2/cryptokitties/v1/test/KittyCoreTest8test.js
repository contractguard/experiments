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
await instance.createPromoKitty(696040883, coo, {from: coo,value: 0});
await instance.createPromoKitty(611917114, coo, {from: coo,value: 0});
await instance.createPromoKitty(204306039, coo, {from: coo,value: 0});
await instance.createPromoKitty(151321172, coo, {from: coo,value: 0});
await instance.createPromoKitty(902037428, coo, {from: coo,value: 0});
await instance.createPromoKitty(13682438, coo, {from: coo,value: 0});
await instance.createPromoKitty(408367120, coo, {from: coo,value: 0});
await instance.createPromoKitty(443706292, coo, {from: coo,value: 0});
await instance.createPromoKitty(914497850, coo, {from: coo,value: 0});
await instance.createPromoKitty(376000562, coo, {from: coo,value: 0});
await instance.createPromoKitty(671182876, coo, {from: coo,value: 0});
await instance.createPromoKitty(883308335, coo, {from: coo,value: 0});
await instance.createPromoKitty(847568942, coo, {from: coo,value: 0});
await instance.createPromoKitty(673876152, coo, {from: coo,value: 0});
await instance.createPromoKitty(752874927, coo, {from: coo,value: 0});
await instance.createPromoKitty(647675659, coo, {from: coo,value: 0});
await instance.createPromoKitty(667722679, coo, {from: coo,value: 0});
await instance.createPromoKitty(74010697, coo, {from: coo,value: 0});
await instance.createPromoKitty(970271076, coo, {from: coo,value: 0});
await instance.createPromoKitty(542025270, coo, {from: coo,value: 0});
await instance.createPromoKitty(889871172, coo, {from: coo,value: 0});
await instance.createPromoKitty(501336272, coo, {from: coo,value: 0});
await instance.createPromoKitty(940002052, coo, {from: coo,value: 0});
await instance.createPromoKitty(568984991, coo, {from: coo,value: 0});
await instance.createPromoKitty(298888474, coo, {from: coo,value: 0});
await instance.createPromoKitty(700673386, coo, {from: coo,value: 0});
await instance.createPromoKitty(13157870, coo, {from: coo,value: 0});
await instance.createPromoKitty(984159983, coo, {from: coo,value: 0});
await instance.createPromoKitty(691181255, coo, {from: coo,value: 0});
await instance.createPromoKitty(195639145, coo, {from: coo,value: 0});
await instance.createPromoKitty(219114648, coo, {from: coo,value: 0});
await instance.createPromoKitty(522566115, coo, {from: coo,value: 0});
await instance.createPromoKitty(822475869, coo, {from: coo,value: 0});
await instance.createPromoKitty(178085222, coo, {from: coo,value: 0});
await instance.createPromoKitty(522446682, coo, {from: coo,value: 0});
await instance.createPromoKitty(799887774, coo, {from: coo,value: 0});
await instance.createPromoKitty(980375062, coo, {from: coo,value: 0});
await instance.createPromoKitty(519341887, coo, {from: coo,value: 0});
await instance.createPromoKitty(425941889, coo, {from: coo,value: 0});
await instance.createPromoKitty(158657055, coo, {from: coo,value: 0});
await instance.createPromoKitty(886129113, coo, {from: coo,value: 0});
await instance.createPromoKitty(786342173, coo, {from: coo,value: 0});
await instance.createPromoKitty(295857507, coo, {from: coo,value: 0});
await instance.createPromoKitty(850628754, coo, {from: coo,value: 0});
await instance.createPromoKitty(370719406, coo, {from: coo,value: 0});
await instance.createPromoKitty(927302784, coo, {from: coo,value: 0});
await instance.createPromoKitty(277672699, coo, {from: coo,value: 0});
await instance.createPromoKitty(353875572, coo, {from: coo,value: 0});
await instance.createPromoKitty(842583863, coo, {from: coo,value: 0});
await instance.createPromoKitty(372245844, coo, {from: coo,value: 0});
await instance.createPromoKitty(711703368, coo, {from: coo,value: 0});
await instance.createPromoKitty(380940424, coo, {from: coo,value: 0});
await instance.createPromoKitty(522100525, coo, {from: coo,value: 0});
await instance.createPromoKitty(483120995, coo, {from: coo,value: 0});
await instance.createPromoKitty(273136305, coo, {from: coo,value: 0});
await instance.createPromoKitty(812914607, coo, {from: coo,value: 0});
await instance.createPromoKitty(347811570, coo, {from: coo,value: 0});
await instance.createPromoKitty(960969384, coo, {from: coo,value: 0});
await instance.createPromoKitty(678328661, coo, {from: coo,value: 0});
await instance.createPromoKitty(485887483, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(33, 10, {from: coo});
await instance.breedWith(3, 16, {from: coo});
await instance.breedWith(29, 11, {from: coo});
await instance.breedWith(9, 30, {from: coo});
await instance.breedWith(18, 4, {from: coo});
await instance.breedWith(31, 13, {from: coo});
await instance.breedWith(19, 23, {from: coo});
await instance.breedWith(25, 7, {from: coo});
await instance.breedWith(32, 17, {from: coo});
await instance.breedWith(35, 40, {from: coo});
await instance.breedWith(12, 27, {from: coo});
await instance.breedWith(37, 22, {from: coo});
await instance.breedWith(21, 24, {from: coo});
await instance.breedWith(2, 5, {from: coo});
await instance.breedWith(26, 20, {from: coo});
await instance.breedWith(1, 8, {from: coo});
await instance.breedWith(28, 38, {from: coo});
await instance.breedWith(14, 39, {from: coo});
await instance.breedWith(34, 36, {from: coo});
await instance.breedWith(15, 6, {from: coo});
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
await instance.giveBirth(33);
await instance.giveBirth(3);
await instance.giveBirth(29);
await instance.giveBirth(9);
await instance.giveBirth(18);
await instance.giveBirth(31);
await instance.giveBirth(19);
await instance.giveBirth(25);
await instance.giveBirth(32);
await instance.giveBirth(35);
await instance.giveBirth(12);
await instance.giveBirth(37);
await instance.giveBirth(21);
await instance.giveBirth(2);
await instance.giveBirth(26);
await instance.giveBirth(1);
await instance.giveBirth(28);
await instance.giveBirth(14);
await instance.giveBirth(34);
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
