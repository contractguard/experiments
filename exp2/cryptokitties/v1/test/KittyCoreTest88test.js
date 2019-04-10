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
await instance.createPromoKitty(729245830, coo, {from: coo,value: 0});
await instance.createPromoKitty(23830473, coo, {from: coo,value: 0});
await instance.createPromoKitty(858207786, coo, {from: coo,value: 0});
await instance.createPromoKitty(696924841, coo, {from: coo,value: 0});
await instance.createPromoKitty(713854776, coo, {from: coo,value: 0});
await instance.createPromoKitty(263758660, coo, {from: coo,value: 0});
await instance.createPromoKitty(808996960, coo, {from: coo,value: 0});
await instance.createPromoKitty(247348493, coo, {from: coo,value: 0});
await instance.createPromoKitty(916350245, coo, {from: coo,value: 0});
await instance.createPromoKitty(983010923, coo, {from: coo,value: 0});
await instance.createPromoKitty(532514458, coo, {from: coo,value: 0});
await instance.createPromoKitty(840570321, coo, {from: coo,value: 0});
await instance.createPromoKitty(925697171, coo, {from: coo,value: 0});
await instance.createPromoKitty(710171283, coo, {from: coo,value: 0});
await instance.createPromoKitty(155257127, coo, {from: coo,value: 0});
await instance.createPromoKitty(658121157, coo, {from: coo,value: 0});
await instance.createPromoKitty(542509523, coo, {from: coo,value: 0});
await instance.createPromoKitty(190938334, coo, {from: coo,value: 0});
await instance.createPromoKitty(739009577, coo, {from: coo,value: 0});
await instance.createPromoKitty(949677679, coo, {from: coo,value: 0});
await instance.createPromoKitty(699414778, coo, {from: coo,value: 0});
await instance.createPromoKitty(110383019, coo, {from: coo,value: 0});
await instance.createPromoKitty(415097386, coo, {from: coo,value: 0});
await instance.createPromoKitty(27725636, coo, {from: coo,value: 0});
await instance.createPromoKitty(710854958, coo, {from: coo,value: 0});
await instance.createPromoKitty(72748987, coo, {from: coo,value: 0});
await instance.createPromoKitty(131469041, coo, {from: coo,value: 0});
await instance.createPromoKitty(226434967, coo, {from: coo,value: 0});
await instance.createPromoKitty(128596484, coo, {from: coo,value: 0});
await instance.createPromoKitty(290069645, coo, {from: coo,value: 0});
await instance.createPromoKitty(560654659, coo, {from: coo,value: 0});
await instance.createPromoKitty(666063542, coo, {from: coo,value: 0});
await instance.createPromoKitty(206009346, coo, {from: coo,value: 0});
await instance.createPromoKitty(104824805, coo, {from: coo,value: 0});
await instance.createPromoKitty(591818264, coo, {from: coo,value: 0});
await instance.createPromoKitty(439452260, coo, {from: coo,value: 0});
await instance.createPromoKitty(900611192, coo, {from: coo,value: 0});
await instance.createPromoKitty(435650889, coo, {from: coo,value: 0});
await instance.createPromoKitty(79209018, coo, {from: coo,value: 0});
await instance.createPromoKitty(818330872, coo, {from: coo,value: 0});
await instance.createPromoKitty(746408912, coo, {from: coo,value: 0});
await instance.createPromoKitty(146801296, coo, {from: coo,value: 0});
await instance.createPromoKitty(802472522, coo, {from: coo,value: 0});
await instance.createPromoKitty(988818211, coo, {from: coo,value: 0});
await instance.createPromoKitty(632235606, coo, {from: coo,value: 0});
await instance.createPromoKitty(130450588, coo, {from: coo,value: 0});
await instance.createPromoKitty(942410956, coo, {from: coo,value: 0});
await instance.createPromoKitty(92446960, coo, {from: coo,value: 0});
await instance.createPromoKitty(432799368, coo, {from: coo,value: 0});
await instance.createPromoKitty(842547096, coo, {from: coo,value: 0});
await instance.createPromoKitty(686698006, coo, {from: coo,value: 0});
await instance.createPromoKitty(453507715, coo, {from: coo,value: 0});
await instance.createPromoKitty(274213534, coo, {from: coo,value: 0});
await instance.createPromoKitty(905173801, coo, {from: coo,value: 0});
await instance.createPromoKitty(676533275, coo, {from: coo,value: 0});
await instance.createPromoKitty(121424621, coo, {from: coo,value: 0});
await instance.createPromoKitty(256800222, coo, {from: coo,value: 0});
await instance.createPromoKitty(88367123, coo, {from: coo,value: 0});
await instance.createPromoKitty(247501214, coo, {from: coo,value: 0});
await instance.createPromoKitty(369853749, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(10, 35, {from: coo});
await instance.breedWith(39, 29, {from: coo});
await instance.breedWith(28, 26, {from: coo});
await instance.breedWith(21, 17, {from: coo});
await instance.breedWith(13, 30, {from: coo});
await instance.breedWith(2, 19, {from: coo});
await instance.breedWith(38, 12, {from: coo});
await instance.breedWith(6, 24, {from: coo});
await instance.breedWith(18, 9, {from: coo});
await instance.breedWith(5, 36, {from: coo});
await instance.breedWith(15, 16, {from: coo});
await instance.breedWith(37, 20, {from: coo});
await instance.breedWith(27, 14, {from: coo});
await instance.breedWith(11, 25, {from: coo});
await instance.breedWith(31, 8, {from: coo});
await instance.breedWith(3, 40, {from: coo});
await instance.breedWith(4, 7, {from: coo});
await instance.breedWith(1, 34, {from: coo});
await instance.breedWith(33, 23, {from: coo});
await instance.breedWith(22, 32, {from: coo});
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
await instance.giveBirth(10);
await instance.giveBirth(39);
await instance.giveBirth(28);
await instance.giveBirth(21);
await instance.giveBirth(13);
await instance.giveBirth(2);
await instance.giveBirth(38);
await instance.giveBirth(6);
await instance.giveBirth(18);
await instance.giveBirth(5);
await instance.giveBirth(15);
await instance.giveBirth(37);
await instance.giveBirth(27);
await instance.giveBirth(11);
await instance.giveBirth(31);
await instance.giveBirth(3);
await instance.giveBirth(4);
await instance.giveBirth(1);
await instance.giveBirth(33);
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
