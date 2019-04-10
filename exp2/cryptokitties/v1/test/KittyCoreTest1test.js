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
await instance.createPromoKitty(836292527, coo, {from: coo,value: 0});
await instance.createPromoKitty(837692094, coo, {from: coo,value: 0});
await instance.createPromoKitty(417279292, coo, {from: coo,value: 0});
await instance.createPromoKitty(86099006, coo, {from: coo,value: 0});
await instance.createPromoKitty(904094326, coo, {from: coo,value: 0});
await instance.createPromoKitty(803983680, coo, {from: coo,value: 0});
await instance.createPromoKitty(471308562, coo, {from: coo,value: 0});
await instance.createPromoKitty(227865202, coo, {from: coo,value: 0});
await instance.createPromoKitty(860690053, coo, {from: coo,value: 0});
await instance.createPromoKitty(938137647, coo, {from: coo,value: 0});
await instance.createPromoKitty(140583498, coo, {from: coo,value: 0});
await instance.createPromoKitty(470668983, coo, {from: coo,value: 0});
await instance.createPromoKitty(71114714, coo, {from: coo,value: 0});
await instance.createPromoKitty(129687844, coo, {from: coo,value: 0});
await instance.createPromoKitty(211948589, coo, {from: coo,value: 0});
await instance.createPromoKitty(314044962, coo, {from: coo,value: 0});
await instance.createPromoKitty(524605020, coo, {from: coo,value: 0});
await instance.createPromoKitty(25577212, coo, {from: coo,value: 0});
await instance.createPromoKitty(508304806, coo, {from: coo,value: 0});
await instance.createPromoKitty(101267126, coo, {from: coo,value: 0});
await instance.createPromoKitty(192649302, coo, {from: coo,value: 0});
await instance.createPromoKitty(545774561, coo, {from: coo,value: 0});
await instance.createPromoKitty(959995398, coo, {from: coo,value: 0});
await instance.createPromoKitty(377919713, coo, {from: coo,value: 0});
await instance.createPromoKitty(627956887, coo, {from: coo,value: 0});
await instance.createPromoKitty(692910524, coo, {from: coo,value: 0});
await instance.createPromoKitty(235070168, coo, {from: coo,value: 0});
await instance.createPromoKitty(818365223, coo, {from: coo,value: 0});
await instance.createPromoKitty(972071665, coo, {from: coo,value: 0});
await instance.createPromoKitty(52606987, coo, {from: coo,value: 0});
await instance.createPromoKitty(523563146, coo, {from: coo,value: 0});
await instance.createPromoKitty(617980281, coo, {from: coo,value: 0});
await instance.createPromoKitty(111773276, coo, {from: coo,value: 0});
await instance.createPromoKitty(719750201, coo, {from: coo,value: 0});
await instance.createPromoKitty(873773877, coo, {from: coo,value: 0});
await instance.createPromoKitty(54960210, coo, {from: coo,value: 0});
await instance.createPromoKitty(879062869, coo, {from: coo,value: 0});
await instance.createPromoKitty(258570814, coo, {from: coo,value: 0});
await instance.createPromoKitty(336827367, coo, {from: coo,value: 0});
await instance.createPromoKitty(396542714, coo, {from: coo,value: 0});
await instance.createPromoKitty(428033308, coo, {from: coo,value: 0});
await instance.createPromoKitty(718946769, coo, {from: coo,value: 0});
await instance.createPromoKitty(255184448, coo, {from: coo,value: 0});
await instance.createPromoKitty(351468063, coo, {from: coo,value: 0});
await instance.createPromoKitty(258264653, coo, {from: coo,value: 0});
await instance.createPromoKitty(226359174, coo, {from: coo,value: 0});
await instance.createPromoKitty(898521938, coo, {from: coo,value: 0});
await instance.createPromoKitty(537369015, coo, {from: coo,value: 0});
await instance.createPromoKitty(705302478, coo, {from: coo,value: 0});
await instance.createPromoKitty(577624568, coo, {from: coo,value: 0});
await instance.createPromoKitty(491795005, coo, {from: coo,value: 0});
await instance.createPromoKitty(807668500, coo, {from: coo,value: 0});
await instance.createPromoKitty(454940738, coo, {from: coo,value: 0});
await instance.createPromoKitty(26032990, coo, {from: coo,value: 0});
await instance.createPromoKitty(993284850, coo, {from: coo,value: 0});
await instance.createPromoKitty(539178809, coo, {from: coo,value: 0});
await instance.createPromoKitty(834420786, coo, {from: coo,value: 0});
await instance.createPromoKitty(465423957, coo, {from: coo,value: 0});
await instance.createPromoKitty(866284056, coo, {from: coo,value: 0});
await instance.createPromoKitty(653268597, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(16, 9, {from: coo});
await instance.breedWith(4, 13, {from: coo});
await instance.breedWith(12, 22, {from: coo});
await instance.breedWith(1, 33, {from: coo});
await instance.breedWith(29, 23, {from: coo});
await instance.breedWith(40, 28, {from: coo});
await instance.breedWith(18, 27, {from: coo});
await instance.breedWith(30, 17, {from: coo});
await instance.breedWith(5, 25, {from: coo});
await instance.breedWith(35, 14, {from: coo});
await instance.breedWith(15, 21, {from: coo});
await instance.breedWith(38, 19, {from: coo});
await instance.breedWith(32, 20, {from: coo});
await instance.breedWith(31, 2, {from: coo});
await instance.breedWith(26, 7, {from: coo});
await instance.breedWith(34, 6, {from: coo});
await instance.breedWith(8, 3, {from: coo});
await instance.breedWith(24, 10, {from: coo});
await instance.breedWith(11, 39, {from: coo});
await instance.breedWith(37, 36, {from: coo});
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
await instance.giveBirth(4);
await instance.giveBirth(12);
await instance.giveBirth(1);
await instance.giveBirth(29);
await instance.giveBirth(40);
await instance.giveBirth(18);
await instance.giveBirth(30);
await instance.giveBirth(5);
await instance.giveBirth(35);
await instance.giveBirth(15);
await instance.giveBirth(38);
await instance.giveBirth(32);
await instance.giveBirth(31);
await instance.giveBirth(26);
await instance.giveBirth(34);
await instance.giveBirth(8);
await instance.giveBirth(24);
await instance.giveBirth(11);
await instance.giveBirth(37);
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
