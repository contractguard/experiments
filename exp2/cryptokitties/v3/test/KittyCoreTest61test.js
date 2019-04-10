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
await instance.createPromoKitty(883291069, coo, {from: coo,value: 0});
await instance.createPromoKitty(384978126, coo, {from: coo,value: 0});
await instance.createPromoKitty(767516468, coo, {from: coo,value: 0});
await instance.createPromoKitty(15429442, coo, {from: coo,value: 0});
await instance.createPromoKitty(717139239, coo, {from: coo,value: 0});
await instance.createPromoKitty(105067403, coo, {from: coo,value: 0});
await instance.createPromoKitty(182060463, coo, {from: coo,value: 0});
await instance.createPromoKitty(516540896, coo, {from: coo,value: 0});
await instance.createPromoKitty(739394533, coo, {from: coo,value: 0});
await instance.createPromoKitty(14225373, coo, {from: coo,value: 0});
await instance.createPromoKitty(209491201, coo, {from: coo,value: 0});
await instance.createPromoKitty(321867792, coo, {from: coo,value: 0});
await instance.createPromoKitty(169317265, coo, {from: coo,value: 0});
await instance.createPromoKitty(144043629, coo, {from: coo,value: 0});
await instance.createPromoKitty(113475215, coo, {from: coo,value: 0});
await instance.createPromoKitty(878904874, coo, {from: coo,value: 0});
await instance.createPromoKitty(488570070, coo, {from: coo,value: 0});
await instance.createPromoKitty(203018838, coo, {from: coo,value: 0});
await instance.createPromoKitty(325773332, coo, {from: coo,value: 0});
await instance.createPromoKitty(787374530, coo, {from: coo,value: 0});
await instance.createPromoKitty(628643494, coo, {from: coo,value: 0});
await instance.createPromoKitty(574240257, coo, {from: coo,value: 0});
await instance.createPromoKitty(151511991, coo, {from: coo,value: 0});
await instance.createPromoKitty(870995530, coo, {from: coo,value: 0});
await instance.createPromoKitty(281405164, coo, {from: coo,value: 0});
await instance.createPromoKitty(240038646, coo, {from: coo,value: 0});
await instance.createPromoKitty(37540695, coo, {from: coo,value: 0});
await instance.createPromoKitty(705638229, coo, {from: coo,value: 0});
await instance.createPromoKitty(636060916, coo, {from: coo,value: 0});
await instance.createPromoKitty(13164594, coo, {from: coo,value: 0});
await instance.createPromoKitty(139047027, coo, {from: coo,value: 0});
await instance.createPromoKitty(204923219, coo, {from: coo,value: 0});
await instance.createPromoKitty(428223798, coo, {from: coo,value: 0});
await instance.createPromoKitty(579371967, coo, {from: coo,value: 0});
await instance.createPromoKitty(923127988, coo, {from: coo,value: 0});
await instance.createPromoKitty(817305286, coo, {from: coo,value: 0});
await instance.createPromoKitty(33523871, coo, {from: coo,value: 0});
await instance.createPromoKitty(179914054, coo, {from: coo,value: 0});
await instance.createPromoKitty(704409452, coo, {from: coo,value: 0});
await instance.createPromoKitty(456609269, coo, {from: coo,value: 0});
await instance.createPromoKitty(202021900, coo, {from: coo,value: 0});
await instance.createPromoKitty(902016576, coo, {from: coo,value: 0});
await instance.createPromoKitty(214043978, coo, {from: coo,value: 0});
await instance.createPromoKitty(709841708, coo, {from: coo,value: 0});
await instance.createPromoKitty(528944744, coo, {from: coo,value: 0});
await instance.createPromoKitty(174232818, coo, {from: coo,value: 0});
await instance.createPromoKitty(397629318, coo, {from: coo,value: 0});
await instance.createPromoKitty(193269295, coo, {from: coo,value: 0});
await instance.createPromoKitty(902623811, coo, {from: coo,value: 0});
await instance.createPromoKitty(477215365, coo, {from: coo,value: 0});
await instance.createPromoKitty(587873639, coo, {from: coo,value: 0});
await instance.createPromoKitty(923872476, coo, {from: coo,value: 0});
await instance.createPromoKitty(118632434, coo, {from: coo,value: 0});
await instance.createPromoKitty(186400802, coo, {from: coo,value: 0});
await instance.createPromoKitty(279065255, coo, {from: coo,value: 0});
await instance.createPromoKitty(523736012, coo, {from: coo,value: 0});
await instance.createPromoKitty(694240296, coo, {from: coo,value: 0});
await instance.createPromoKitty(920848404, coo, {from: coo,value: 0});
await instance.createPromoKitty(987728083, coo, {from: coo,value: 0});
await instance.createPromoKitty(14592057, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(7, 40, {from: coo});
await instance.breedWith(19, 24, {from: coo});
await instance.breedWith(18, 25, {from: coo});
await instance.breedWith(6, 26, {from: coo});
await instance.breedWith(29, 22, {from: coo});
await instance.breedWith(32, 20, {from: coo});
await instance.breedWith(30, 15, {from: coo});
await instance.breedWith(2, 8, {from: coo});
await instance.breedWith(36, 38, {from: coo});
await instance.breedWith(39, 9, {from: coo});
await instance.breedWith(3, 34, {from: coo});
await instance.breedWith(10, 28, {from: coo});
await instance.breedWith(27, 11, {from: coo});
await instance.breedWith(35, 37, {from: coo});
await instance.breedWith(1, 33, {from: coo});
await instance.breedWith(14, 4, {from: coo});
await instance.breedWith(5, 13, {from: coo});
await instance.breedWith(31, 23, {from: coo});
await instance.breedWith(16, 21, {from: coo});
await instance.breedWith(17, 12, {from: coo});
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
await instance.giveBirth(7);
await instance.giveBirth(19);
await instance.giveBirth(18);
await instance.giveBirth(6);
await instance.giveBirth(29);
await instance.giveBirth(32);
await instance.giveBirth(30);
await instance.giveBirth(2);
await instance.giveBirth(36);
await instance.giveBirth(39);
await instance.giveBirth(3);
await instance.giveBirth(10);
await instance.giveBirth(27);
await instance.giveBirth(35);
await instance.giveBirth(1);
await instance.giveBirth(14);
await instance.giveBirth(5);
await instance.giveBirth(31);
await instance.giveBirth(16);
await instance.giveBirth(17);
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
});
it('attack', async() => {
 await instance.breedWith(57, bigValue, {from: coo});
});
});
