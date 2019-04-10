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
await instance.createPromoKitty(638341999, coo, {from: coo,value: 0});
await instance.createPromoKitty(676825801, coo, {from: coo,value: 0});
await instance.createPromoKitty(763755439, coo, {from: coo,value: 0});
await instance.createPromoKitty(671293896, coo, {from: coo,value: 0});
await instance.createPromoKitty(179125660, coo, {from: coo,value: 0});
await instance.createPromoKitty(877112977, coo, {from: coo,value: 0});
await instance.createPromoKitty(393031261, coo, {from: coo,value: 0});
await instance.createPromoKitty(72102510, coo, {from: coo,value: 0});
await instance.createPromoKitty(291716666, coo, {from: coo,value: 0});
await instance.createPromoKitty(605371348, coo, {from: coo,value: 0});
await instance.createPromoKitty(660922922, coo, {from: coo,value: 0});
await instance.createPromoKitty(744791393, coo, {from: coo,value: 0});
await instance.createPromoKitty(772774507, coo, {from: coo,value: 0});
await instance.createPromoKitty(633079576, coo, {from: coo,value: 0});
await instance.createPromoKitty(968130606, coo, {from: coo,value: 0});
await instance.createPromoKitty(687801441, coo, {from: coo,value: 0});
await instance.createPromoKitty(226624695, coo, {from: coo,value: 0});
await instance.createPromoKitty(149848702, coo, {from: coo,value: 0});
await instance.createPromoKitty(494069912, coo, {from: coo,value: 0});
await instance.createPromoKitty(928073699, coo, {from: coo,value: 0});
await instance.createPromoKitty(858602640, coo, {from: coo,value: 0});
await instance.createPromoKitty(67602587, coo, {from: coo,value: 0});
await instance.createPromoKitty(407007795, coo, {from: coo,value: 0});
await instance.createPromoKitty(530045602, coo, {from: coo,value: 0});
await instance.createPromoKitty(178486257, coo, {from: coo,value: 0});
await instance.createPromoKitty(629977493, coo, {from: coo,value: 0});
await instance.createPromoKitty(794178178, coo, {from: coo,value: 0});
await instance.createPromoKitty(64345108, coo, {from: coo,value: 0});
await instance.createPromoKitty(108107957, coo, {from: coo,value: 0});
await instance.createPromoKitty(230345101, coo, {from: coo,value: 0});
await instance.createPromoKitty(757777286, coo, {from: coo,value: 0});
await instance.createPromoKitty(857925155, coo, {from: coo,value: 0});
await instance.createPromoKitty(25650579, coo, {from: coo,value: 0});
await instance.createPromoKitty(61662116, coo, {from: coo,value: 0});
await instance.createPromoKitty(889028387, coo, {from: coo,value: 0});
await instance.createPromoKitty(638212640, coo, {from: coo,value: 0});
await instance.createPromoKitty(507320307, coo, {from: coo,value: 0});
await instance.createPromoKitty(733618395, coo, {from: coo,value: 0});
await instance.createPromoKitty(77436216, coo, {from: coo,value: 0});
await instance.createPromoKitty(312293072, coo, {from: coo,value: 0});
await instance.createPromoKitty(377686165, coo, {from: coo,value: 0});
await instance.createPromoKitty(131834044, coo, {from: coo,value: 0});
await instance.createPromoKitty(358063401, coo, {from: coo,value: 0});
await instance.createPromoKitty(875389643, coo, {from: coo,value: 0});
await instance.createPromoKitty(106686950, coo, {from: coo,value: 0});
await instance.createPromoKitty(262414076, coo, {from: coo,value: 0});
await instance.createPromoKitty(602592584, coo, {from: coo,value: 0});
await instance.createPromoKitty(178541396, coo, {from: coo,value: 0});
await instance.createPromoKitty(406628904, coo, {from: coo,value: 0});
await instance.createPromoKitty(40420473, coo, {from: coo,value: 0});
await instance.createPromoKitty(811213099, coo, {from: coo,value: 0});
await instance.createPromoKitty(215579090, coo, {from: coo,value: 0});
await instance.createPromoKitty(737692368, coo, {from: coo,value: 0});
await instance.createPromoKitty(800124687, coo, {from: coo,value: 0});
await instance.createPromoKitty(635471407, coo, {from: coo,value: 0});
await instance.createPromoKitty(497904638, coo, {from: coo,value: 0});
await instance.createPromoKitty(9582776, coo, {from: coo,value: 0});
await instance.createPromoKitty(263848169, coo, {from: coo,value: 0});
await instance.createPromoKitty(706461591, coo, {from: coo,value: 0});
await instance.createPromoKitty(229156785, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(19, 20, {from: coo});
await instance.breedWith(21, 25, {from: coo});
await instance.breedWith(9, 15, {from: coo});
await instance.breedWith(23, 1, {from: coo});
await instance.breedWith(27, 37, {from: coo});
await instance.breedWith(2, 8, {from: coo});
await instance.breedWith(24, 29, {from: coo});
await instance.breedWith(26, 18, {from: coo});
await instance.breedWith(3, 14, {from: coo});
await instance.breedWith(7, 4, {from: coo});
await instance.breedWith(32, 39, {from: coo});
await instance.breedWith(6, 17, {from: coo});
await instance.breedWith(5, 35, {from: coo});
await instance.breedWith(12, 28, {from: coo});
await instance.breedWith(22, 40, {from: coo});
await instance.breedWith(13, 33, {from: coo});
await instance.breedWith(34, 36, {from: coo});
await instance.breedWith(16, 31, {from: coo});
await instance.breedWith(11, 30, {from: coo});
await instance.breedWith(10, 38, {from: coo});
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
await instance.giveBirth(19);
await instance.giveBirth(21);
await instance.giveBirth(9);
await instance.giveBirth(23);
await instance.giveBirth(27);
await instance.giveBirth(2);
await instance.giveBirth(24);
await instance.giveBirth(26);
await instance.giveBirth(3);
await instance.giveBirth(7);
await instance.giveBirth(32);
await instance.giveBirth(6);
await instance.giveBirth(5);
await instance.giveBirth(12);
await instance.giveBirth(22);
await instance.giveBirth(13);
await instance.giveBirth(34);
await instance.giveBirth(16);
await instance.giveBirth(11);
await instance.giveBirth(10);
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
