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
await instance.createPromoKitty(523329579, coo, {from: coo,value: 0});
await instance.createPromoKitty(931746645, coo, {from: coo,value: 0});
await instance.createPromoKitty(342671373, coo, {from: coo,value: 0});
await instance.createPromoKitty(513240236, coo, {from: coo,value: 0});
await instance.createPromoKitty(203245662, coo, {from: coo,value: 0});
await instance.createPromoKitty(465956852, coo, {from: coo,value: 0});
await instance.createPromoKitty(196650661, coo, {from: coo,value: 0});
await instance.createPromoKitty(199266598, coo, {from: coo,value: 0});
await instance.createPromoKitty(174656254, coo, {from: coo,value: 0});
await instance.createPromoKitty(313164845, coo, {from: coo,value: 0});
await instance.createPromoKitty(497525942, coo, {from: coo,value: 0});
await instance.createPromoKitty(776034455, coo, {from: coo,value: 0});
await instance.createPromoKitty(538636309, coo, {from: coo,value: 0});
await instance.createPromoKitty(518219937, coo, {from: coo,value: 0});
await instance.createPromoKitty(58457694, coo, {from: coo,value: 0});
await instance.createPromoKitty(973663933, coo, {from: coo,value: 0});
await instance.createPromoKitty(824084929, coo, {from: coo,value: 0});
await instance.createPromoKitty(851690423, coo, {from: coo,value: 0});
await instance.createPromoKitty(925470534, coo, {from: coo,value: 0});
await instance.createPromoKitty(243899748, coo, {from: coo,value: 0});
await instance.createPromoKitty(339411070, coo, {from: coo,value: 0});
await instance.createPromoKitty(507371113, coo, {from: coo,value: 0});
await instance.createPromoKitty(786158324, coo, {from: coo,value: 0});
await instance.createPromoKitty(361576642, coo, {from: coo,value: 0});
await instance.createPromoKitty(898668307, coo, {from: coo,value: 0});
await instance.createPromoKitty(458850115, coo, {from: coo,value: 0});
await instance.createPromoKitty(371587107, coo, {from: coo,value: 0});
await instance.createPromoKitty(976060928, coo, {from: coo,value: 0});
await instance.createPromoKitty(614716451, coo, {from: coo,value: 0});
await instance.createPromoKitty(480076178, coo, {from: coo,value: 0});
await instance.createPromoKitty(367040850, coo, {from: coo,value: 0});
await instance.createPromoKitty(562675534, coo, {from: coo,value: 0});
await instance.createPromoKitty(47861607, coo, {from: coo,value: 0});
await instance.createPromoKitty(824362134, coo, {from: coo,value: 0});
await instance.createPromoKitty(198394683, coo, {from: coo,value: 0});
await instance.createPromoKitty(872775945, coo, {from: coo,value: 0});
await instance.createPromoKitty(670078755, coo, {from: coo,value: 0});
await instance.createPromoKitty(752338099, coo, {from: coo,value: 0});
await instance.createPromoKitty(849723418, coo, {from: coo,value: 0});
await instance.createPromoKitty(159681697, coo, {from: coo,value: 0});
await instance.createPromoKitty(308326813, coo, {from: coo,value: 0});
await instance.createPromoKitty(585218035, coo, {from: coo,value: 0});
await instance.createPromoKitty(893974862, coo, {from: coo,value: 0});
await instance.createPromoKitty(891846918, coo, {from: coo,value: 0});
await instance.createPromoKitty(43260121, coo, {from: coo,value: 0});
await instance.createPromoKitty(680852346, coo, {from: coo,value: 0});
await instance.createPromoKitty(3703079, coo, {from: coo,value: 0});
await instance.createPromoKitty(964706016, coo, {from: coo,value: 0});
await instance.createPromoKitty(19631964, coo, {from: coo,value: 0});
await instance.createPromoKitty(776249625, coo, {from: coo,value: 0});
await instance.createPromoKitty(458748516, coo, {from: coo,value: 0});
await instance.createPromoKitty(791526021, coo, {from: coo,value: 0});
await instance.createPromoKitty(815634501, coo, {from: coo,value: 0});
await instance.createPromoKitty(973304797, coo, {from: coo,value: 0});
await instance.createPromoKitty(911563524, coo, {from: coo,value: 0});
await instance.createPromoKitty(980554980, coo, {from: coo,value: 0});
await instance.createPromoKitty(259794117, coo, {from: coo,value: 0});
await instance.createPromoKitty(233647889, coo, {from: coo,value: 0});
await instance.createPromoKitty(736954394, coo, {from: coo,value: 0});
await instance.createPromoKitty(803757875, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(19, 3, {from: coo});
await instance.breedWith(13, 20, {from: coo});
await instance.breedWith(5, 10, {from: coo});
await instance.breedWith(38, 35, {from: coo});
await instance.breedWith(2, 9, {from: coo});
await instance.breedWith(32, 1, {from: coo});
await instance.breedWith(6, 31, {from: coo});
await instance.breedWith(17, 26, {from: coo});
await instance.breedWith(27, 7, {from: coo});
await instance.breedWith(16, 34, {from: coo});
await instance.breedWith(33, 12, {from: coo});
await instance.breedWith(8, 37, {from: coo});
await instance.breedWith(29, 24, {from: coo});
await instance.breedWith(22, 4, {from: coo});
await instance.breedWith(39, 15, {from: coo});
await instance.breedWith(23, 21, {from: coo});
await instance.breedWith(30, 36, {from: coo});
await instance.breedWith(11, 25, {from: coo});
await instance.breedWith(40, 28, {from: coo});
await instance.breedWith(14, 18, {from: coo});
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
await instance.giveBirth(19);
await instance.giveBirth(13);
await instance.giveBirth(5);
await instance.giveBirth(38);
await instance.giveBirth(2);
await instance.giveBirth(32);
await instance.giveBirth(6);
await instance.giveBirth(17);
await instance.giveBirth(27);
await instance.giveBirth(16);
await instance.giveBirth(33);
await instance.giveBirth(8);
await instance.giveBirth(29);
await instance.giveBirth(22);
await instance.giveBirth(39);
await instance.giveBirth(23);
await instance.giveBirth(30);
await instance.giveBirth(11);
await instance.giveBirth(40);
await instance.giveBirth(14);
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
