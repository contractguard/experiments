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
await instance.createPromoKitty(436571139, coo, {from: coo,value: 0});
await instance.createPromoKitty(959552638, coo, {from: coo,value: 0});
await instance.createPromoKitty(934206720, coo, {from: coo,value: 0});
await instance.createPromoKitty(632348488, coo, {from: coo,value: 0});
await instance.createPromoKitty(557019130, coo, {from: coo,value: 0});
await instance.createPromoKitty(947990581, coo, {from: coo,value: 0});
await instance.createPromoKitty(20036361, coo, {from: coo,value: 0});
await instance.createPromoKitty(860000141, coo, {from: coo,value: 0});
await instance.createPromoKitty(460921201, coo, {from: coo,value: 0});
await instance.createPromoKitty(858889402, coo, {from: coo,value: 0});
await instance.createPromoKitty(34678202, coo, {from: coo,value: 0});
await instance.createPromoKitty(952970023, coo, {from: coo,value: 0});
await instance.createPromoKitty(986217353, coo, {from: coo,value: 0});
await instance.createPromoKitty(341776934, coo, {from: coo,value: 0});
await instance.createPromoKitty(74708267, coo, {from: coo,value: 0});
await instance.createPromoKitty(996966657, coo, {from: coo,value: 0});
await instance.createPromoKitty(272721230, coo, {from: coo,value: 0});
await instance.createPromoKitty(468566687, coo, {from: coo,value: 0});
await instance.createPromoKitty(20020782, coo, {from: coo,value: 0});
await instance.createPromoKitty(355611790, coo, {from: coo,value: 0});
await instance.createPromoKitty(1493679, coo, {from: coo,value: 0});
await instance.createPromoKitty(215372233, coo, {from: coo,value: 0});
await instance.createPromoKitty(848833066, coo, {from: coo,value: 0});
await instance.createPromoKitty(205264708, coo, {from: coo,value: 0});
await instance.createPromoKitty(227002759, coo, {from: coo,value: 0});
await instance.createPromoKitty(539533795, coo, {from: coo,value: 0});
await instance.createPromoKitty(487661328, coo, {from: coo,value: 0});
await instance.createPromoKitty(858050348, coo, {from: coo,value: 0});
await instance.createPromoKitty(360030892, coo, {from: coo,value: 0});
await instance.createPromoKitty(367836543, coo, {from: coo,value: 0});
await instance.createPromoKitty(135859390, coo, {from: coo,value: 0});
await instance.createPromoKitty(226181713, coo, {from: coo,value: 0});
await instance.createPromoKitty(465003550, coo, {from: coo,value: 0});
await instance.createPromoKitty(320909497, coo, {from: coo,value: 0});
await instance.createPromoKitty(523724889, coo, {from: coo,value: 0});
await instance.createPromoKitty(931465285, coo, {from: coo,value: 0});
await instance.createPromoKitty(803177134, coo, {from: coo,value: 0});
await instance.createPromoKitty(33016787, coo, {from: coo,value: 0});
await instance.createPromoKitty(163382694, coo, {from: coo,value: 0});
await instance.createPromoKitty(265034572, coo, {from: coo,value: 0});
await instance.createPromoKitty(21350572, coo, {from: coo,value: 0});
await instance.createPromoKitty(27316382, coo, {from: coo,value: 0});
await instance.createPromoKitty(908558194, coo, {from: coo,value: 0});
await instance.createPromoKitty(410746076, coo, {from: coo,value: 0});
await instance.createPromoKitty(918846562, coo, {from: coo,value: 0});
await instance.createPromoKitty(427889423, coo, {from: coo,value: 0});
await instance.createPromoKitty(441522136, coo, {from: coo,value: 0});
await instance.createPromoKitty(335934901, coo, {from: coo,value: 0});
await instance.createPromoKitty(672922100, coo, {from: coo,value: 0});
await instance.createPromoKitty(593152790, coo, {from: coo,value: 0});
await instance.createPromoKitty(985290482, coo, {from: coo,value: 0});
await instance.createPromoKitty(453624564, coo, {from: coo,value: 0});
await instance.createPromoKitty(879269974, coo, {from: coo,value: 0});
await instance.createPromoKitty(829861433, coo, {from: coo,value: 0});
await instance.createPromoKitty(24226318, coo, {from: coo,value: 0});
await instance.createPromoKitty(510012822, coo, {from: coo,value: 0});
await instance.createPromoKitty(619522128, coo, {from: coo,value: 0});
await instance.createPromoKitty(976312429, coo, {from: coo,value: 0});
await instance.createPromoKitty(377029946, coo, {from: coo,value: 0});
await instance.createPromoKitty(883959699, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(14, 18, {from: coo});
await instance.breedWith(30, 21, {from: coo});
await instance.breedWith(25, 37, {from: coo});
await instance.breedWith(9, 34, {from: coo});
await instance.breedWith(20, 29, {from: coo});
await instance.breedWith(31, 10, {from: coo});
await instance.breedWith(16, 17, {from: coo});
await instance.breedWith(19, 28, {from: coo});
await instance.breedWith(27, 15, {from: coo});
await instance.breedWith(8, 1, {from: coo});
await instance.breedWith(38, 2, {from: coo});
await instance.breedWith(40, 23, {from: coo});
await instance.breedWith(6, 35, {from: coo});
await instance.breedWith(4, 12, {from: coo});
await instance.breedWith(32, 24, {from: coo});
await instance.breedWith(7, 3, {from: coo});
await instance.breedWith(33, 11, {from: coo});
await instance.breedWith(36, 13, {from: coo});
await instance.breedWith(39, 22, {from: coo});
await instance.breedWith(26, 5, {from: coo});
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
await instance.giveBirth(14);
await instance.giveBirth(30);
await instance.giveBirth(25);
await instance.giveBirth(9);
await instance.giveBirth(20);
await instance.giveBirth(31);
await instance.giveBirth(16);
await instance.giveBirth(19);
await instance.giveBirth(27);
await instance.giveBirth(8);
await instance.giveBirth(38);
await instance.giveBirth(40);
await instance.giveBirth(6);
await instance.giveBirth(4);
await instance.giveBirth(32);
await instance.giveBirth(7);
await instance.giveBirth(33);
await instance.giveBirth(36);
await instance.giveBirth(39);
await instance.giveBirth(26);
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
