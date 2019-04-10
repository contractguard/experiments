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
await instance.createPromoKitty(796176774, coo, {from: coo,value: 0});
await instance.createPromoKitty(807295395, coo, {from: coo,value: 0});
await instance.createPromoKitty(911096608, coo, {from: coo,value: 0});
await instance.createPromoKitty(303024715, coo, {from: coo,value: 0});
await instance.createPromoKitty(892688616, coo, {from: coo,value: 0});
await instance.createPromoKitty(168028506, coo, {from: coo,value: 0});
await instance.createPromoKitty(1432088, coo, {from: coo,value: 0});
await instance.createPromoKitty(7987941, coo, {from: coo,value: 0});
await instance.createPromoKitty(453475933, coo, {from: coo,value: 0});
await instance.createPromoKitty(549111206, coo, {from: coo,value: 0});
await instance.createPromoKitty(567060225, coo, {from: coo,value: 0});
await instance.createPromoKitty(790266474, coo, {from: coo,value: 0});
await instance.createPromoKitty(565225038, coo, {from: coo,value: 0});
await instance.createPromoKitty(737416347, coo, {from: coo,value: 0});
await instance.createPromoKitty(642959120, coo, {from: coo,value: 0});
await instance.createPromoKitty(950004354, coo, {from: coo,value: 0});
await instance.createPromoKitty(205097224, coo, {from: coo,value: 0});
await instance.createPromoKitty(559170385, coo, {from: coo,value: 0});
await instance.createPromoKitty(228500704, coo, {from: coo,value: 0});
await instance.createPromoKitty(956341626, coo, {from: coo,value: 0});
await instance.createPromoKitty(73586065, coo, {from: coo,value: 0});
await instance.createPromoKitty(207966284, coo, {from: coo,value: 0});
await instance.createPromoKitty(500960357, coo, {from: coo,value: 0});
await instance.createPromoKitty(179053139, coo, {from: coo,value: 0});
await instance.createPromoKitty(805855022, coo, {from: coo,value: 0});
await instance.createPromoKitty(115578040, coo, {from: coo,value: 0});
await instance.createPromoKitty(916942587, coo, {from: coo,value: 0});
await instance.createPromoKitty(246330236, coo, {from: coo,value: 0});
await instance.createPromoKitty(200443038, coo, {from: coo,value: 0});
await instance.createPromoKitty(624245353, coo, {from: coo,value: 0});
await instance.createPromoKitty(44337813, coo, {from: coo,value: 0});
await instance.createPromoKitty(494608525, coo, {from: coo,value: 0});
await instance.createPromoKitty(935136794, coo, {from: coo,value: 0});
await instance.createPromoKitty(369626736, coo, {from: coo,value: 0});
await instance.createPromoKitty(168009036, coo, {from: coo,value: 0});
await instance.createPromoKitty(171395870, coo, {from: coo,value: 0});
await instance.createPromoKitty(498383461, coo, {from: coo,value: 0});
await instance.createPromoKitty(29337720, coo, {from: coo,value: 0});
await instance.createPromoKitty(992536087, coo, {from: coo,value: 0});
await instance.createPromoKitty(30821, coo, {from: coo,value: 0});
await instance.createPromoKitty(320570541, coo, {from: coo,value: 0});
await instance.createPromoKitty(652820935, coo, {from: coo,value: 0});
await instance.createPromoKitty(981072458, coo, {from: coo,value: 0});
await instance.createPromoKitty(475237980, coo, {from: coo,value: 0});
await instance.createPromoKitty(172126165, coo, {from: coo,value: 0});
await instance.createPromoKitty(488242971, coo, {from: coo,value: 0});
await instance.createPromoKitty(56820379, coo, {from: coo,value: 0});
await instance.createPromoKitty(585887667, coo, {from: coo,value: 0});
await instance.createPromoKitty(307161922, coo, {from: coo,value: 0});
await instance.createPromoKitty(21150056, coo, {from: coo,value: 0});
await instance.createPromoKitty(887120038, coo, {from: coo,value: 0});
await instance.createPromoKitty(825027971, coo, {from: coo,value: 0});
await instance.createPromoKitty(95011359, coo, {from: coo,value: 0});
await instance.createPromoKitty(747475268, coo, {from: coo,value: 0});
await instance.createPromoKitty(42786297, coo, {from: coo,value: 0});
await instance.createPromoKitty(869033521, coo, {from: coo,value: 0});
await instance.createPromoKitty(44420510, coo, {from: coo,value: 0});
await instance.createPromoKitty(943519155, coo, {from: coo,value: 0});
await instance.createPromoKitty(423664663, coo, {from: coo,value: 0});
await instance.createPromoKitty(977363348, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(2, 14, {from: coo});
await instance.breedWith(27, 9, {from: coo});
await instance.breedWith(31, 37, {from: coo});
await instance.breedWith(22, 38, {from: coo});
await instance.breedWith(8, 36, {from: coo});
await instance.breedWith(40, 24, {from: coo});
await instance.breedWith(39, 23, {from: coo});
await instance.breedWith(18, 1, {from: coo});
await instance.breedWith(30, 25, {from: coo});
await instance.breedWith(4, 28, {from: coo});
await instance.breedWith(7, 3, {from: coo});
await instance.breedWith(29, 13, {from: coo});
await instance.breedWith(17, 10, {from: coo});
await instance.breedWith(20, 33, {from: coo});
await instance.breedWith(15, 12, {from: coo});
await instance.breedWith(16, 5, {from: coo});
await instance.breedWith(6, 32, {from: coo});
await instance.breedWith(26, 35, {from: coo});
await instance.breedWith(19, 11, {from: coo});
await instance.breedWith(34, 21, {from: coo});
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
await instance.giveBirth(2);
await instance.giveBirth(27);
await instance.giveBirth(31);
await instance.giveBirth(22);
await instance.giveBirth(8);
await instance.giveBirth(40);
await instance.giveBirth(39);
await instance.giveBirth(18);
await instance.giveBirth(30);
await instance.giveBirth(4);
await instance.giveBirth(7);
await instance.giveBirth(29);
await instance.giveBirth(17);
await instance.giveBirth(20);
await instance.giveBirth(15);
await instance.giveBirth(16);
await instance.giveBirth(6);
await instance.giveBirth(26);
await instance.giveBirth(19);
await instance.giveBirth(34);
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
