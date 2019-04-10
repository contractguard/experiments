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
await instance.createPromoKitty(507938656, coo, {from: coo,value: 0});
await instance.createPromoKitty(972500224, coo, {from: coo,value: 0});
await instance.createPromoKitty(966655112, coo, {from: coo,value: 0});
await instance.createPromoKitty(566160180, coo, {from: coo,value: 0});
await instance.createPromoKitty(717008579, coo, {from: coo,value: 0});
await instance.createPromoKitty(924851526, coo, {from: coo,value: 0});
await instance.createPromoKitty(322053022, coo, {from: coo,value: 0});
await instance.createPromoKitty(298255520, coo, {from: coo,value: 0});
await instance.createPromoKitty(964277952, coo, {from: coo,value: 0});
await instance.createPromoKitty(444627981, coo, {from: coo,value: 0});
await instance.createPromoKitty(610624421, coo, {from: coo,value: 0});
await instance.createPromoKitty(351454356, coo, {from: coo,value: 0});
await instance.createPromoKitty(989289294, coo, {from: coo,value: 0});
await instance.createPromoKitty(693306096, coo, {from: coo,value: 0});
await instance.createPromoKitty(292151222, coo, {from: coo,value: 0});
await instance.createPromoKitty(768771860, coo, {from: coo,value: 0});
await instance.createPromoKitty(506951404, coo, {from: coo,value: 0});
await instance.createPromoKitty(937335506, coo, {from: coo,value: 0});
await instance.createPromoKitty(43948491, coo, {from: coo,value: 0});
await instance.createPromoKitty(125183186, coo, {from: coo,value: 0});
await instance.createPromoKitty(655517830, coo, {from: coo,value: 0});
await instance.createPromoKitty(203516621, coo, {from: coo,value: 0});
await instance.createPromoKitty(553841317, coo, {from: coo,value: 0});
await instance.createPromoKitty(906594248, coo, {from: coo,value: 0});
await instance.createPromoKitty(69148501, coo, {from: coo,value: 0});
await instance.createPromoKitty(359254726, coo, {from: coo,value: 0});
await instance.createPromoKitty(292084008, coo, {from: coo,value: 0});
await instance.createPromoKitty(431982968, coo, {from: coo,value: 0});
await instance.createPromoKitty(159549601, coo, {from: coo,value: 0});
await instance.createPromoKitty(190566826, coo, {from: coo,value: 0});
await instance.createPromoKitty(347770392, coo, {from: coo,value: 0});
await instance.createPromoKitty(57278742, coo, {from: coo,value: 0});
await instance.createPromoKitty(637391740, coo, {from: coo,value: 0});
await instance.createPromoKitty(501885850, coo, {from: coo,value: 0});
await instance.createPromoKitty(804954854, coo, {from: coo,value: 0});
await instance.createPromoKitty(341746149, coo, {from: coo,value: 0});
await instance.createPromoKitty(351991080, coo, {from: coo,value: 0});
await instance.createPromoKitty(296821618, coo, {from: coo,value: 0});
await instance.createPromoKitty(115078681, coo, {from: coo,value: 0});
await instance.createPromoKitty(56571965, coo, {from: coo,value: 0});
await instance.createPromoKitty(43723350, coo, {from: coo,value: 0});
await instance.createPromoKitty(677195895, coo, {from: coo,value: 0});
await instance.createPromoKitty(67479980, coo, {from: coo,value: 0});
await instance.createPromoKitty(679105920, coo, {from: coo,value: 0});
await instance.createPromoKitty(546002441, coo, {from: coo,value: 0});
await instance.createPromoKitty(214565841, coo, {from: coo,value: 0});
await instance.createPromoKitty(490521935, coo, {from: coo,value: 0});
await instance.createPromoKitty(399030962, coo, {from: coo,value: 0});
await instance.createPromoKitty(235854285, coo, {from: coo,value: 0});
await instance.createPromoKitty(457672754, coo, {from: coo,value: 0});
await instance.createPromoKitty(37752381, coo, {from: coo,value: 0});
await instance.createPromoKitty(731719985, coo, {from: coo,value: 0});
await instance.createPromoKitty(507590021, coo, {from: coo,value: 0});
await instance.createPromoKitty(175334576, coo, {from: coo,value: 0});
await instance.createPromoKitty(215186341, coo, {from: coo,value: 0});
await instance.createPromoKitty(339526222, coo, {from: coo,value: 0});
await instance.createPromoKitty(347262321, coo, {from: coo,value: 0});
await instance.createPromoKitty(396442562, coo, {from: coo,value: 0});
await instance.createPromoKitty(351148038, coo, {from: coo,value: 0});
await instance.createPromoKitty(185613303, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(19, 22, {from: coo});
await instance.breedWith(34, 30, {from: coo});
await instance.breedWith(8, 26, {from: coo});
await instance.breedWith(13, 16, {from: coo});
await instance.breedWith(20, 1, {from: coo});
await instance.breedWith(4, 18, {from: coo});
await instance.breedWith(25, 6, {from: coo});
await instance.breedWith(12, 14, {from: coo});
await instance.breedWith(5, 38, {from: coo});
await instance.breedWith(37, 17, {from: coo});
await instance.breedWith(11, 36, {from: coo});
await instance.breedWith(7, 15, {from: coo});
await instance.breedWith(29, 9, {from: coo});
await instance.breedWith(2, 31, {from: coo});
await instance.breedWith(3, 10, {from: coo});
await instance.breedWith(35, 40, {from: coo});
await instance.breedWith(21, 24, {from: coo});
await instance.breedWith(23, 39, {from: coo});
await instance.breedWith(32, 28, {from: coo});
await instance.breedWith(33, 27, {from: coo});
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
await instance.giveBirth(19);
await instance.giveBirth(34);
await instance.giveBirth(8);
await instance.giveBirth(13);
await instance.giveBirth(20);
await instance.giveBirth(4);
await instance.giveBirth(25);
await instance.giveBirth(12);
await instance.giveBirth(5);
await instance.giveBirth(37);
await instance.giveBirth(11);
await instance.giveBirth(7);
await instance.giveBirth(29);
await instance.giveBirth(2);
await instance.giveBirth(3);
await instance.giveBirth(35);
await instance.giveBirth(21);
await instance.giveBirth(23);
await instance.giveBirth(32);
await instance.giveBirth(33);
});
it('test 5',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('test 6',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('test 7',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('test 8',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('test 9',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('acctack', async() => {
 await instance._breedWith(57,58,{from:coo});
});
});
