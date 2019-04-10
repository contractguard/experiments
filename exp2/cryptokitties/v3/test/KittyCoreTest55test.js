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
await instance.createPromoKitty(61651276, coo, {from: coo,value: 0});
await instance.createPromoKitty(193969963, coo, {from: coo,value: 0});
await instance.createPromoKitty(810866133, coo, {from: coo,value: 0});
await instance.createPromoKitty(971605373, coo, {from: coo,value: 0});
await instance.createPromoKitty(987524384, coo, {from: coo,value: 0});
await instance.createPromoKitty(188049757, coo, {from: coo,value: 0});
await instance.createPromoKitty(472297258, coo, {from: coo,value: 0});
await instance.createPromoKitty(992724551, coo, {from: coo,value: 0});
await instance.createPromoKitty(325024868, coo, {from: coo,value: 0});
await instance.createPromoKitty(825409427, coo, {from: coo,value: 0});
await instance.createPromoKitty(930141003, coo, {from: coo,value: 0});
await instance.createPromoKitty(849405446, coo, {from: coo,value: 0});
await instance.createPromoKitty(57462494, coo, {from: coo,value: 0});
await instance.createPromoKitty(528390645, coo, {from: coo,value: 0});
await instance.createPromoKitty(864205437, coo, {from: coo,value: 0});
await instance.createPromoKitty(484453258, coo, {from: coo,value: 0});
await instance.createPromoKitty(484200606, coo, {from: coo,value: 0});
await instance.createPromoKitty(671783962, coo, {from: coo,value: 0});
await instance.createPromoKitty(354645326, coo, {from: coo,value: 0});
await instance.createPromoKitty(236129135, coo, {from: coo,value: 0});
await instance.createPromoKitty(538873755, coo, {from: coo,value: 0});
await instance.createPromoKitty(924230225, coo, {from: coo,value: 0});
await instance.createPromoKitty(252711545, coo, {from: coo,value: 0});
await instance.createPromoKitty(364754164, coo, {from: coo,value: 0});
await instance.createPromoKitty(692982493, coo, {from: coo,value: 0});
await instance.createPromoKitty(175071823, coo, {from: coo,value: 0});
await instance.createPromoKitty(776435755, coo, {from: coo,value: 0});
await instance.createPromoKitty(313900600, coo, {from: coo,value: 0});
await instance.createPromoKitty(923359001, coo, {from: coo,value: 0});
await instance.createPromoKitty(798933496, coo, {from: coo,value: 0});
await instance.createPromoKitty(10526203, coo, {from: coo,value: 0});
await instance.createPromoKitty(892658622, coo, {from: coo,value: 0});
await instance.createPromoKitty(167055531, coo, {from: coo,value: 0});
await instance.createPromoKitty(569955498, coo, {from: coo,value: 0});
await instance.createPromoKitty(322460092, coo, {from: coo,value: 0});
await instance.createPromoKitty(90811200, coo, {from: coo,value: 0});
await instance.createPromoKitty(617854201, coo, {from: coo,value: 0});
await instance.createPromoKitty(1622145, coo, {from: coo,value: 0});
await instance.createPromoKitty(445237680, coo, {from: coo,value: 0});
await instance.createPromoKitty(706485830, coo, {from: coo,value: 0});
await instance.createPromoKitty(563484521, coo, {from: coo,value: 0});
await instance.createPromoKitty(787841723, coo, {from: coo,value: 0});
await instance.createPromoKitty(558519076, coo, {from: coo,value: 0});
await instance.createPromoKitty(679427597, coo, {from: coo,value: 0});
await instance.createPromoKitty(187539596, coo, {from: coo,value: 0});
await instance.createPromoKitty(891668705, coo, {from: coo,value: 0});
await instance.createPromoKitty(747063635, coo, {from: coo,value: 0});
await instance.createPromoKitty(748055612, coo, {from: coo,value: 0});
await instance.createPromoKitty(939322710, coo, {from: coo,value: 0});
await instance.createPromoKitty(104095358, coo, {from: coo,value: 0});
await instance.createPromoKitty(134383595, coo, {from: coo,value: 0});
await instance.createPromoKitty(534287594, coo, {from: coo,value: 0});
await instance.createPromoKitty(725931026, coo, {from: coo,value: 0});
await instance.createPromoKitty(474468793, coo, {from: coo,value: 0});
await instance.createPromoKitty(512615507, coo, {from: coo,value: 0});
await instance.createPromoKitty(807778713, coo, {from: coo,value: 0});
await instance.createPromoKitty(3187738, coo, {from: coo,value: 0});
await instance.createPromoKitty(157564347, coo, {from: coo,value: 0});
await instance.createPromoKitty(566312006, coo, {from: coo,value: 0});
await instance.createPromoKitty(537855334, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(37, 30, {from: coo});
await instance.breedWith(8, 23, {from: coo});
await instance.breedWith(14, 16, {from: coo});
await instance.breedWith(6, 21, {from: coo});
await instance.breedWith(38, 31, {from: coo});
await instance.breedWith(24, 35, {from: coo});
await instance.breedWith(2, 20, {from: coo});
await instance.breedWith(19, 12, {from: coo});
await instance.breedWith(17, 25, {from: coo});
await instance.breedWith(1, 10, {from: coo});
await instance.breedWith(7, 4, {from: coo});
await instance.breedWith(28, 5, {from: coo});
await instance.breedWith(26, 36, {from: coo});
await instance.breedWith(32, 9, {from: coo});
await instance.breedWith(22, 34, {from: coo});
await instance.breedWith(29, 27, {from: coo});
await instance.breedWith(15, 18, {from: coo});
await instance.breedWith(39, 33, {from: coo});
await instance.breedWith(11, 3, {from: coo});
await instance.breedWith(13, 40, {from: coo});
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
await instance.giveBirth(37);
await instance.giveBirth(8);
await instance.giveBirth(14);
await instance.giveBirth(6);
await instance.giveBirth(38);
await instance.giveBirth(24);
await instance.giveBirth(2);
await instance.giveBirth(19);
await instance.giveBirth(17);
await instance.giveBirth(1);
await instance.giveBirth(7);
await instance.giveBirth(28);
await instance.giveBirth(26);
await instance.giveBirth(32);
await instance.giveBirth(22);
await instance.giveBirth(29);
await instance.giveBirth(15);
await instance.giveBirth(39);
await instance.giveBirth(11);
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
});
it('attack', async() => {
 await instance.breedWith(57, bigValue, {from: coo});
});
});
