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
await instance.createPromoKitty(910693183, coo, {from: coo,value: 0});
await instance.createPromoKitty(775764068, coo, {from: coo,value: 0});
await instance.createPromoKitty(834202075, coo, {from: coo,value: 0});
await instance.createPromoKitty(677944631, coo, {from: coo,value: 0});
await instance.createPromoKitty(790068123, coo, {from: coo,value: 0});
await instance.createPromoKitty(248324188, coo, {from: coo,value: 0});
await instance.createPromoKitty(578702485, coo, {from: coo,value: 0});
await instance.createPromoKitty(718833687, coo, {from: coo,value: 0});
await instance.createPromoKitty(948276000, coo, {from: coo,value: 0});
await instance.createPromoKitty(956060241, coo, {from: coo,value: 0});
await instance.createPromoKitty(577616300, coo, {from: coo,value: 0});
await instance.createPromoKitty(254785341, coo, {from: coo,value: 0});
await instance.createPromoKitty(75779581, coo, {from: coo,value: 0});
await instance.createPromoKitty(775601735, coo, {from: coo,value: 0});
await instance.createPromoKitty(394738414, coo, {from: coo,value: 0});
await instance.createPromoKitty(391002890, coo, {from: coo,value: 0});
await instance.createPromoKitty(2416905, coo, {from: coo,value: 0});
await instance.createPromoKitty(109839954, coo, {from: coo,value: 0});
await instance.createPromoKitty(561864850, coo, {from: coo,value: 0});
await instance.createPromoKitty(756917174, coo, {from: coo,value: 0});
await instance.createPromoKitty(229331032, coo, {from: coo,value: 0});
await instance.createPromoKitty(784668395, coo, {from: coo,value: 0});
await instance.createPromoKitty(518330129, coo, {from: coo,value: 0});
await instance.createPromoKitty(88013924, coo, {from: coo,value: 0});
await instance.createPromoKitty(120487311, coo, {from: coo,value: 0});
await instance.createPromoKitty(120624567, coo, {from: coo,value: 0});
await instance.createPromoKitty(555153768, coo, {from: coo,value: 0});
await instance.createPromoKitty(240243554, coo, {from: coo,value: 0});
await instance.createPromoKitty(256634751, coo, {from: coo,value: 0});
await instance.createPromoKitty(241534745, coo, {from: coo,value: 0});
await instance.createPromoKitty(457978676, coo, {from: coo,value: 0});
await instance.createPromoKitty(602210590, coo, {from: coo,value: 0});
await instance.createPromoKitty(900907169, coo, {from: coo,value: 0});
await instance.createPromoKitty(696841105, coo, {from: coo,value: 0});
await instance.createPromoKitty(392128998, coo, {from: coo,value: 0});
await instance.createPromoKitty(53630089, coo, {from: coo,value: 0});
await instance.createPromoKitty(371745645, coo, {from: coo,value: 0});
await instance.createPromoKitty(31546250, coo, {from: coo,value: 0});
await instance.createPromoKitty(656539858, coo, {from: coo,value: 0});
await instance.createPromoKitty(142249669, coo, {from: coo,value: 0});
await instance.createPromoKitty(51554044, coo, {from: coo,value: 0});
await instance.createPromoKitty(895360852, coo, {from: coo,value: 0});
await instance.createPromoKitty(896477571, coo, {from: coo,value: 0});
await instance.createPromoKitty(221882581, coo, {from: coo,value: 0});
await instance.createPromoKitty(949630838, coo, {from: coo,value: 0});
await instance.createPromoKitty(577483974, coo, {from: coo,value: 0});
await instance.createPromoKitty(317424335, coo, {from: coo,value: 0});
await instance.createPromoKitty(531461264, coo, {from: coo,value: 0});
await instance.createPromoKitty(299773441, coo, {from: coo,value: 0});
await instance.createPromoKitty(966731553, coo, {from: coo,value: 0});
await instance.createPromoKitty(991604518, coo, {from: coo,value: 0});
await instance.createPromoKitty(617047476, coo, {from: coo,value: 0});
await instance.createPromoKitty(217820967, coo, {from: coo,value: 0});
await instance.createPromoKitty(92496801, coo, {from: coo,value: 0});
await instance.createPromoKitty(159000778, coo, {from: coo,value: 0});
await instance.createPromoKitty(309205824, coo, {from: coo,value: 0});
await instance.createPromoKitty(656472521, coo, {from: coo,value: 0});
await instance.createPromoKitty(977182311, coo, {from: coo,value: 0});
await instance.createPromoKitty(2254789, coo, {from: coo,value: 0});
await instance.createPromoKitty(573512129, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(32, 25, {from: coo});
await instance.breedWith(33, 15, {from: coo});
await instance.breedWith(35, 29, {from: coo});
await instance.breedWith(28, 39, {from: coo});
await instance.breedWith(2, 34, {from: coo});
await instance.breedWith(37, 10, {from: coo});
await instance.breedWith(20, 40, {from: coo});
await instance.breedWith(3, 22, {from: coo});
await instance.breedWith(18, 30, {from: coo});
await instance.breedWith(24, 16, {from: coo});
await instance.breedWith(4, 7, {from: coo});
await instance.breedWith(6, 23, {from: coo});
await instance.breedWith(19, 17, {from: coo});
await instance.breedWith(11, 36, {from: coo});
await instance.breedWith(27, 1, {from: coo});
await instance.breedWith(5, 8, {from: coo});
await instance.breedWith(12, 31, {from: coo});
await instance.breedWith(9, 14, {from: coo});
await instance.breedWith(26, 38, {from: coo});
await instance.breedWith(13, 21, {from: coo});
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
await instance.giveBirth(32);
await instance.giveBirth(33);
await instance.giveBirth(35);
await instance.giveBirth(28);
await instance.giveBirth(2);
await instance.giveBirth(37);
await instance.giveBirth(20);
await instance.giveBirth(3);
await instance.giveBirth(18);
await instance.giveBirth(24);
await instance.giveBirth(4);
await instance.giveBirth(6);
await instance.giveBirth(19);
await instance.giveBirth(11);
await instance.giveBirth(27);
await instance.giveBirth(5);
await instance.giveBirth(12);
await instance.giveBirth(9);
await instance.giveBirth(26);
await instance.giveBirth(13);
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
