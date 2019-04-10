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
await instance.createPromoKitty(887506054, coo, {from: coo,value: 0});
await instance.createPromoKitty(952370893, coo, {from: coo,value: 0});
await instance.createPromoKitty(78764876, coo, {from: coo,value: 0});
await instance.createPromoKitty(659738487, coo, {from: coo,value: 0});
await instance.createPromoKitty(377504572, coo, {from: coo,value: 0});
await instance.createPromoKitty(400307084, coo, {from: coo,value: 0});
await instance.createPromoKitty(736453759, coo, {from: coo,value: 0});
await instance.createPromoKitty(918137210, coo, {from: coo,value: 0});
await instance.createPromoKitty(234395345, coo, {from: coo,value: 0});
await instance.createPromoKitty(162584357, coo, {from: coo,value: 0});
await instance.createPromoKitty(366352351, coo, {from: coo,value: 0});
await instance.createPromoKitty(509816032, coo, {from: coo,value: 0});
await instance.createPromoKitty(991935931, coo, {from: coo,value: 0});
await instance.createPromoKitty(206733688, coo, {from: coo,value: 0});
await instance.createPromoKitty(822845738, coo, {from: coo,value: 0});
await instance.createPromoKitty(777657591, coo, {from: coo,value: 0});
await instance.createPromoKitty(555767908, coo, {from: coo,value: 0});
await instance.createPromoKitty(802454235, coo, {from: coo,value: 0});
await instance.createPromoKitty(472282966, coo, {from: coo,value: 0});
await instance.createPromoKitty(62991048, coo, {from: coo,value: 0});
await instance.createPromoKitty(780780848, coo, {from: coo,value: 0});
await instance.createPromoKitty(642031345, coo, {from: coo,value: 0});
await instance.createPromoKitty(479593802, coo, {from: coo,value: 0});
await instance.createPromoKitty(673034566, coo, {from: coo,value: 0});
await instance.createPromoKitty(219628750, coo, {from: coo,value: 0});
await instance.createPromoKitty(380980805, coo, {from: coo,value: 0});
await instance.createPromoKitty(552689734, coo, {from: coo,value: 0});
await instance.createPromoKitty(508344338, coo, {from: coo,value: 0});
await instance.createPromoKitty(38168403, coo, {from: coo,value: 0});
await instance.createPromoKitty(227905597, coo, {from: coo,value: 0});
await instance.createPromoKitty(415317935, coo, {from: coo,value: 0});
await instance.createPromoKitty(327805455, coo, {from: coo,value: 0});
await instance.createPromoKitty(301749785, coo, {from: coo,value: 0});
await instance.createPromoKitty(704136924, coo, {from: coo,value: 0});
await instance.createPromoKitty(681829090, coo, {from: coo,value: 0});
await instance.createPromoKitty(364893758, coo, {from: coo,value: 0});
await instance.createPromoKitty(164882586, coo, {from: coo,value: 0});
await instance.createPromoKitty(543780088, coo, {from: coo,value: 0});
await instance.createPromoKitty(313877755, coo, {from: coo,value: 0});
await instance.createPromoKitty(934035190, coo, {from: coo,value: 0});
await instance.createPromoKitty(288992271, coo, {from: coo,value: 0});
await instance.createPromoKitty(67898579, coo, {from: coo,value: 0});
await instance.createPromoKitty(655806560, coo, {from: coo,value: 0});
await instance.createPromoKitty(76964864, coo, {from: coo,value: 0});
await instance.createPromoKitty(318978712, coo, {from: coo,value: 0});
await instance.createPromoKitty(604258671, coo, {from: coo,value: 0});
await instance.createPromoKitty(466311923, coo, {from: coo,value: 0});
await instance.createPromoKitty(405756571, coo, {from: coo,value: 0});
await instance.createPromoKitty(967495282, coo, {from: coo,value: 0});
await instance.createPromoKitty(805254975, coo, {from: coo,value: 0});
await instance.createPromoKitty(470785222, coo, {from: coo,value: 0});
await instance.createPromoKitty(991393779, coo, {from: coo,value: 0});
await instance.createPromoKitty(520061032, coo, {from: coo,value: 0});
await instance.createPromoKitty(142422146, coo, {from: coo,value: 0});
await instance.createPromoKitty(318112418, coo, {from: coo,value: 0});
await instance.createPromoKitty(472568878, coo, {from: coo,value: 0});
await instance.createPromoKitty(119387269, coo, {from: coo,value: 0});
await instance.createPromoKitty(608904357, coo, {from: coo,value: 0});
await instance.createPromoKitty(587615460, coo, {from: coo,value: 0});
await instance.createPromoKitty(914099041, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(32, 24, {from: coo});
await instance.breedWith(25, 30, {from: coo});
await instance.breedWith(22, 31, {from: coo});
await instance.breedWith(37, 26, {from: coo});
await instance.breedWith(34, 29, {from: coo});
await instance.breedWith(1, 13, {from: coo});
await instance.breedWith(5, 8, {from: coo});
await instance.breedWith(16, 35, {from: coo});
await instance.breedWith(6, 15, {from: coo});
await instance.breedWith(40, 17, {from: coo});
await instance.breedWith(38, 4, {from: coo});
await instance.breedWith(21, 33, {from: coo});
await instance.breedWith(12, 3, {from: coo});
await instance.breedWith(39, 14, {from: coo});
await instance.breedWith(18, 36, {from: coo});
await instance.breedWith(10, 28, {from: coo});
await instance.breedWith(7, 20, {from: coo});
await instance.breedWith(2, 27, {from: coo});
await instance.breedWith(19, 23, {from: coo});
await instance.breedWith(11, 9, {from: coo});
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
await instance.giveBirth(32);
await instance.giveBirth(25);
await instance.giveBirth(22);
await instance.giveBirth(37);
await instance.giveBirth(34);
await instance.giveBirth(1);
await instance.giveBirth(5);
await instance.giveBirth(16);
await instance.giveBirth(6);
await instance.giveBirth(40);
await instance.giveBirth(38);
await instance.giveBirth(21);
await instance.giveBirth(12);
await instance.giveBirth(39);
await instance.giveBirth(18);
await instance.giveBirth(10);
await instance.giveBirth(7);
await instance.giveBirth(2);
await instance.giveBirth(19);
await instance.giveBirth(11);
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
