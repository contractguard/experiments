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
await instance.createPromoKitty(816760299, coo, {from: coo,value: 0});
await instance.createPromoKitty(612931875, coo, {from: coo,value: 0});
await instance.createPromoKitty(383479038, coo, {from: coo,value: 0});
await instance.createPromoKitty(38357108, coo, {from: coo,value: 0});
await instance.createPromoKitty(437226610, coo, {from: coo,value: 0});
await instance.createPromoKitty(712473308, coo, {from: coo,value: 0});
await instance.createPromoKitty(299129280, coo, {from: coo,value: 0});
await instance.createPromoKitty(717188748, coo, {from: coo,value: 0});
await instance.createPromoKitty(477076718, coo, {from: coo,value: 0});
await instance.createPromoKitty(737195542, coo, {from: coo,value: 0});
await instance.createPromoKitty(674992583, coo, {from: coo,value: 0});
await instance.createPromoKitty(9758901, coo, {from: coo,value: 0});
await instance.createPromoKitty(477554376, coo, {from: coo,value: 0});
await instance.createPromoKitty(162788903, coo, {from: coo,value: 0});
await instance.createPromoKitty(942475799, coo, {from: coo,value: 0});
await instance.createPromoKitty(661730894, coo, {from: coo,value: 0});
await instance.createPromoKitty(891408322, coo, {from: coo,value: 0});
await instance.createPromoKitty(735112384, coo, {from: coo,value: 0});
await instance.createPromoKitty(692676896, coo, {from: coo,value: 0});
await instance.createPromoKitty(949784636, coo, {from: coo,value: 0});
await instance.createPromoKitty(34274062, coo, {from: coo,value: 0});
await instance.createPromoKitty(156828384, coo, {from: coo,value: 0});
await instance.createPromoKitty(30125498, coo, {from: coo,value: 0});
await instance.createPromoKitty(1671693, coo, {from: coo,value: 0});
await instance.createPromoKitty(364893981, coo, {from: coo,value: 0});
await instance.createPromoKitty(608540074, coo, {from: coo,value: 0});
await instance.createPromoKitty(742594307, coo, {from: coo,value: 0});
await instance.createPromoKitty(751260856, coo, {from: coo,value: 0});
await instance.createPromoKitty(350616784, coo, {from: coo,value: 0});
await instance.createPromoKitty(19402519, coo, {from: coo,value: 0});
await instance.createPromoKitty(222346748, coo, {from: coo,value: 0});
await instance.createPromoKitty(815082136, coo, {from: coo,value: 0});
await instance.createPromoKitty(295032403, coo, {from: coo,value: 0});
await instance.createPromoKitty(581097568, coo, {from: coo,value: 0});
await instance.createPromoKitty(814101918, coo, {from: coo,value: 0});
await instance.createPromoKitty(214029591, coo, {from: coo,value: 0});
await instance.createPromoKitty(929017749, coo, {from: coo,value: 0});
await instance.createPromoKitty(137357881, coo, {from: coo,value: 0});
await instance.createPromoKitty(280382448, coo, {from: coo,value: 0});
await instance.createPromoKitty(885612881, coo, {from: coo,value: 0});
await instance.createPromoKitty(261457016, coo, {from: coo,value: 0});
await instance.createPromoKitty(797448806, coo, {from: coo,value: 0});
await instance.createPromoKitty(657211688, coo, {from: coo,value: 0});
await instance.createPromoKitty(621077672, coo, {from: coo,value: 0});
await instance.createPromoKitty(566254868, coo, {from: coo,value: 0});
await instance.createPromoKitty(10306884, coo, {from: coo,value: 0});
await instance.createPromoKitty(248518156, coo, {from: coo,value: 0});
await instance.createPromoKitty(590717569, coo, {from: coo,value: 0});
await instance.createPromoKitty(267094169, coo, {from: coo,value: 0});
await instance.createPromoKitty(528011140, coo, {from: coo,value: 0});
await instance.createPromoKitty(487353937, coo, {from: coo,value: 0});
await instance.createPromoKitty(149490335, coo, {from: coo,value: 0});
await instance.createPromoKitty(56158397, coo, {from: coo,value: 0});
await instance.createPromoKitty(94207989, coo, {from: coo,value: 0});
await instance.createPromoKitty(18979215, coo, {from: coo,value: 0});
await instance.createPromoKitty(47516763, coo, {from: coo,value: 0});
await instance.createPromoKitty(17223609, coo, {from: coo,value: 0});
await instance.createPromoKitty(875831302, coo, {from: coo,value: 0});
await instance.createPromoKitty(234152899, coo, {from: coo,value: 0});
await instance.createPromoKitty(343150746, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(9, 33, {from: coo});
await instance.breedWith(34, 19, {from: coo});
await instance.breedWith(17, 27, {from: coo});
await instance.breedWith(16, 35, {from: coo});
await instance.breedWith(2, 4, {from: coo});
await instance.breedWith(10, 31, {from: coo});
await instance.breedWith(24, 7, {from: coo});
await instance.breedWith(8, 30, {from: coo});
await instance.breedWith(1, 14, {from: coo});
await instance.breedWith(21, 3, {from: coo});
await instance.breedWith(26, 37, {from: coo});
await instance.breedWith(32, 29, {from: coo});
await instance.breedWith(5, 11, {from: coo});
await instance.breedWith(15, 20, {from: coo});
await instance.breedWith(38, 25, {from: coo});
await instance.breedWith(28, 40, {from: coo});
await instance.breedWith(12, 22, {from: coo});
await instance.breedWith(23, 39, {from: coo});
await instance.breedWith(13, 36, {from: coo});
await instance.breedWith(6, 18, {from: coo});
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
await instance.giveBirth(9);
await instance.giveBirth(34);
await instance.giveBirth(17);
await instance.giveBirth(16);
await instance.giveBirth(2);
await instance.giveBirth(10);
await instance.giveBirth(24);
await instance.giveBirth(8);
await instance.giveBirth(1);
await instance.giveBirth(21);
await instance.giveBirth(26);
await instance.giveBirth(32);
await instance.giveBirth(5);
await instance.giveBirth(15);
await instance.giveBirth(38);
await instance.giveBirth(28);
await instance.giveBirth(12);
await instance.giveBirth(23);
await instance.giveBirth(13);
await instance.giveBirth(6);
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
