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
await instance.createPromoKitty(98993314, coo, {from: coo,value: 0});
await instance.createPromoKitty(584638824, coo, {from: coo,value: 0});
await instance.createPromoKitty(897399612, coo, {from: coo,value: 0});
await instance.createPromoKitty(661226446, coo, {from: coo,value: 0});
await instance.createPromoKitty(829526148, coo, {from: coo,value: 0});
await instance.createPromoKitty(176219858, coo, {from: coo,value: 0});
await instance.createPromoKitty(516225780, coo, {from: coo,value: 0});
await instance.createPromoKitty(522600467, coo, {from: coo,value: 0});
await instance.createPromoKitty(426547975, coo, {from: coo,value: 0});
await instance.createPromoKitty(378538587, coo, {from: coo,value: 0});
await instance.createPromoKitty(528309303, coo, {from: coo,value: 0});
await instance.createPromoKitty(79926485, coo, {from: coo,value: 0});
await instance.createPromoKitty(644509264, coo, {from: coo,value: 0});
await instance.createPromoKitty(469862394, coo, {from: coo,value: 0});
await instance.createPromoKitty(167482533, coo, {from: coo,value: 0});
await instance.createPromoKitty(276725112, coo, {from: coo,value: 0});
await instance.createPromoKitty(780716902, coo, {from: coo,value: 0});
await instance.createPromoKitty(695638476, coo, {from: coo,value: 0});
await instance.createPromoKitty(380174892, coo, {from: coo,value: 0});
await instance.createPromoKitty(352228840, coo, {from: coo,value: 0});
await instance.createPromoKitty(611469551, coo, {from: coo,value: 0});
await instance.createPromoKitty(708448509, coo, {from: coo,value: 0});
await instance.createPromoKitty(225388211, coo, {from: coo,value: 0});
await instance.createPromoKitty(619090479, coo, {from: coo,value: 0});
await instance.createPromoKitty(263836365, coo, {from: coo,value: 0});
await instance.createPromoKitty(90770728, coo, {from: coo,value: 0});
await instance.createPromoKitty(870520723, coo, {from: coo,value: 0});
await instance.createPromoKitty(936070809, coo, {from: coo,value: 0});
await instance.createPromoKitty(424228699, coo, {from: coo,value: 0});
await instance.createPromoKitty(787361229, coo, {from: coo,value: 0});
await instance.createPromoKitty(685936896, coo, {from: coo,value: 0});
await instance.createPromoKitty(521415972, coo, {from: coo,value: 0});
await instance.createPromoKitty(584446864, coo, {from: coo,value: 0});
await instance.createPromoKitty(415682944, coo, {from: coo,value: 0});
await instance.createPromoKitty(370079176, coo, {from: coo,value: 0});
await instance.createPromoKitty(418639742, coo, {from: coo,value: 0});
await instance.createPromoKitty(426279968, coo, {from: coo,value: 0});
await instance.createPromoKitty(563197041, coo, {from: coo,value: 0});
await instance.createPromoKitty(619122583, coo, {from: coo,value: 0});
await instance.createPromoKitty(388107942, coo, {from: coo,value: 0});
await instance.createPromoKitty(329596392, coo, {from: coo,value: 0});
await instance.createPromoKitty(330480422, coo, {from: coo,value: 0});
await instance.createPromoKitty(682948463, coo, {from: coo,value: 0});
await instance.createPromoKitty(935153446, coo, {from: coo,value: 0});
await instance.createPromoKitty(804773193, coo, {from: coo,value: 0});
await instance.createPromoKitty(573207753, coo, {from: coo,value: 0});
await instance.createPromoKitty(45638034, coo, {from: coo,value: 0});
await instance.createPromoKitty(174456949, coo, {from: coo,value: 0});
await instance.createPromoKitty(109194329, coo, {from: coo,value: 0});
await instance.createPromoKitty(20406718, coo, {from: coo,value: 0});
await instance.createPromoKitty(268760794, coo, {from: coo,value: 0});
await instance.createPromoKitty(309769215, coo, {from: coo,value: 0});
await instance.createPromoKitty(609048291, coo, {from: coo,value: 0});
await instance.createPromoKitty(347954676, coo, {from: coo,value: 0});
await instance.createPromoKitty(717269064, coo, {from: coo,value: 0});
await instance.createPromoKitty(735115025, coo, {from: coo,value: 0});
await instance.createPromoKitty(729065110, coo, {from: coo,value: 0});
await instance.createPromoKitty(359652211, coo, {from: coo,value: 0});
await instance.createPromoKitty(183963285, coo, {from: coo,value: 0});
await instance.createPromoKitty(648779230, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(1, 14, {from: coo});
await instance.breedWith(26, 25, {from: coo});
await instance.breedWith(18, 19, {from: coo});
await instance.breedWith(30, 7, {from: coo});
await instance.breedWith(24, 5, {from: coo});
await instance.breedWith(17, 34, {from: coo});
await instance.breedWith(13, 4, {from: coo});
await instance.breedWith(20, 15, {from: coo});
await instance.breedWith(28, 37, {from: coo});
await instance.breedWith(36, 16, {from: coo});
await instance.breedWith(2, 10, {from: coo});
await instance.breedWith(21, 39, {from: coo});
await instance.breedWith(38, 33, {from: coo});
await instance.breedWith(11, 9, {from: coo});
await instance.breedWith(29, 27, {from: coo});
await instance.breedWith(31, 8, {from: coo});
await instance.breedWith(6, 35, {from: coo});
await instance.breedWith(32, 22, {from: coo});
await instance.breedWith(3, 40, {from: coo});
await instance.breedWith(23, 12, {from: coo});
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
await instance.giveBirth(1);
await instance.giveBirth(26);
await instance.giveBirth(18);
await instance.giveBirth(30);
await instance.giveBirth(24);
await instance.giveBirth(17);
await instance.giveBirth(13);
await instance.giveBirth(20);
await instance.giveBirth(28);
await instance.giveBirth(36);
await instance.giveBirth(2);
await instance.giveBirth(21);
await instance.giveBirth(38);
await instance.giveBirth(11);
await instance.giveBirth(29);
await instance.giveBirth(31);
await instance.giveBirth(6);
await instance.giveBirth(32);
await instance.giveBirth(3);
await instance.giveBirth(23);
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
