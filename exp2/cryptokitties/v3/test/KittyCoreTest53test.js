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
await instance.createPromoKitty(141577027, coo, {from: coo,value: 0});
await instance.createPromoKitty(470802769, coo, {from: coo,value: 0});
await instance.createPromoKitty(130327154, coo, {from: coo,value: 0});
await instance.createPromoKitty(882614863, coo, {from: coo,value: 0});
await instance.createPromoKitty(831458245, coo, {from: coo,value: 0});
await instance.createPromoKitty(209598788, coo, {from: coo,value: 0});
await instance.createPromoKitty(733544094, coo, {from: coo,value: 0});
await instance.createPromoKitty(336331659, coo, {from: coo,value: 0});
await instance.createPromoKitty(156956664, coo, {from: coo,value: 0});
await instance.createPromoKitty(138004836, coo, {from: coo,value: 0});
await instance.createPromoKitty(17796344, coo, {from: coo,value: 0});
await instance.createPromoKitty(350016755, coo, {from: coo,value: 0});
await instance.createPromoKitty(395243636, coo, {from: coo,value: 0});
await instance.createPromoKitty(341985593, coo, {from: coo,value: 0});
await instance.createPromoKitty(562960400, coo, {from: coo,value: 0});
await instance.createPromoKitty(842859925, coo, {from: coo,value: 0});
await instance.createPromoKitty(932623403, coo, {from: coo,value: 0});
await instance.createPromoKitty(667781708, coo, {from: coo,value: 0});
await instance.createPromoKitty(262052155, coo, {from: coo,value: 0});
await instance.createPromoKitty(687977457, coo, {from: coo,value: 0});
await instance.createPromoKitty(579536998, coo, {from: coo,value: 0});
await instance.createPromoKitty(828990381, coo, {from: coo,value: 0});
await instance.createPromoKitty(745470227, coo, {from: coo,value: 0});
await instance.createPromoKitty(530590365, coo, {from: coo,value: 0});
await instance.createPromoKitty(160255420, coo, {from: coo,value: 0});
await instance.createPromoKitty(984852596, coo, {from: coo,value: 0});
await instance.createPromoKitty(677607359, coo, {from: coo,value: 0});
await instance.createPromoKitty(612328718, coo, {from: coo,value: 0});
await instance.createPromoKitty(816112459, coo, {from: coo,value: 0});
await instance.createPromoKitty(155506180, coo, {from: coo,value: 0});
await instance.createPromoKitty(157027483, coo, {from: coo,value: 0});
await instance.createPromoKitty(280474788, coo, {from: coo,value: 0});
await instance.createPromoKitty(167423684, coo, {from: coo,value: 0});
await instance.createPromoKitty(228629104, coo, {from: coo,value: 0});
await instance.createPromoKitty(599123086, coo, {from: coo,value: 0});
await instance.createPromoKitty(458580557, coo, {from: coo,value: 0});
await instance.createPromoKitty(693762974, coo, {from: coo,value: 0});
await instance.createPromoKitty(650936173, coo, {from: coo,value: 0});
await instance.createPromoKitty(527470154, coo, {from: coo,value: 0});
await instance.createPromoKitty(88091495, coo, {from: coo,value: 0});
await instance.createPromoKitty(201357106, coo, {from: coo,value: 0});
await instance.createPromoKitty(582064208, coo, {from: coo,value: 0});
await instance.createPromoKitty(642377834, coo, {from: coo,value: 0});
await instance.createPromoKitty(781661203, coo, {from: coo,value: 0});
await instance.createPromoKitty(97223274, coo, {from: coo,value: 0});
await instance.createPromoKitty(907914832, coo, {from: coo,value: 0});
await instance.createPromoKitty(613024597, coo, {from: coo,value: 0});
await instance.createPromoKitty(530861730, coo, {from: coo,value: 0});
await instance.createPromoKitty(522084775, coo, {from: coo,value: 0});
await instance.createPromoKitty(835398413, coo, {from: coo,value: 0});
await instance.createPromoKitty(490129467, coo, {from: coo,value: 0});
await instance.createPromoKitty(171904290, coo, {from: coo,value: 0});
await instance.createPromoKitty(697448826, coo, {from: coo,value: 0});
await instance.createPromoKitty(537575048, coo, {from: coo,value: 0});
await instance.createPromoKitty(996384816, coo, {from: coo,value: 0});
await instance.createPromoKitty(260608536, coo, {from: coo,value: 0});
await instance.createPromoKitty(876619795, coo, {from: coo,value: 0});
await instance.createPromoKitty(574586959, coo, {from: coo,value: 0});
await instance.createPromoKitty(864541142, coo, {from: coo,value: 0});
await instance.createPromoKitty(416130623, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(16, 15, {from: coo});
await instance.breedWith(33, 30, {from: coo});
await instance.breedWith(7, 38, {from: coo});
await instance.breedWith(9, 27, {from: coo});
await instance.breedWith(18, 4, {from: coo});
await instance.breedWith(26, 1, {from: coo});
await instance.breedWith(29, 10, {from: coo});
await instance.breedWith(12, 20, {from: coo});
await instance.breedWith(13, 3, {from: coo});
await instance.breedWith(14, 17, {from: coo});
await instance.breedWith(21, 32, {from: coo});
await instance.breedWith(11, 8, {from: coo});
await instance.breedWith(19, 5, {from: coo});
await instance.breedWith(28, 2, {from: coo});
await instance.breedWith(39, 24, {from: coo});
await instance.breedWith(31, 34, {from: coo});
await instance.breedWith(36, 6, {from: coo});
await instance.breedWith(22, 37, {from: coo});
await instance.breedWith(23, 40, {from: coo});
await instance.breedWith(25, 35, {from: coo});
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
await instance.giveBirth(16);
await instance.giveBirth(33);
await instance.giveBirth(7);
await instance.giveBirth(9);
await instance.giveBirth(18);
await instance.giveBirth(26);
await instance.giveBirth(29);
await instance.giveBirth(12);
await instance.giveBirth(13);
await instance.giveBirth(14);
await instance.giveBirth(21);
await instance.giveBirth(11);
await instance.giveBirth(19);
await instance.giveBirth(28);
await instance.giveBirth(39);
await instance.giveBirth(31);
await instance.giveBirth(36);
await instance.giveBirth(22);
await instance.giveBirth(23);
await instance.giveBirth(25);
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
