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
await instance.createPromoKitty(930609101, coo, {from: coo,value: 0});
await instance.createPromoKitty(730702688, coo, {from: coo,value: 0});
await instance.createPromoKitty(604702034, coo, {from: coo,value: 0});
await instance.createPromoKitty(136122380, coo, {from: coo,value: 0});
await instance.createPromoKitty(367934688, coo, {from: coo,value: 0});
await instance.createPromoKitty(546160636, coo, {from: coo,value: 0});
await instance.createPromoKitty(61571396, coo, {from: coo,value: 0});
await instance.createPromoKitty(622743866, coo, {from: coo,value: 0});
await instance.createPromoKitty(85711511, coo, {from: coo,value: 0});
await instance.createPromoKitty(503672384, coo, {from: coo,value: 0});
await instance.createPromoKitty(5953723, coo, {from: coo,value: 0});
await instance.createPromoKitty(789056869, coo, {from: coo,value: 0});
await instance.createPromoKitty(697169067, coo, {from: coo,value: 0});
await instance.createPromoKitty(289109194, coo, {from: coo,value: 0});
await instance.createPromoKitty(813624148, coo, {from: coo,value: 0});
await instance.createPromoKitty(889551172, coo, {from: coo,value: 0});
await instance.createPromoKitty(584818873, coo, {from: coo,value: 0});
await instance.createPromoKitty(447467026, coo, {from: coo,value: 0});
await instance.createPromoKitty(443133443, coo, {from: coo,value: 0});
await instance.createPromoKitty(651581193, coo, {from: coo,value: 0});
await instance.createPromoKitty(237164281, coo, {from: coo,value: 0});
await instance.createPromoKitty(578493802, coo, {from: coo,value: 0});
await instance.createPromoKitty(934941088, coo, {from: coo,value: 0});
await instance.createPromoKitty(549178642, coo, {from: coo,value: 0});
await instance.createPromoKitty(83199422, coo, {from: coo,value: 0});
await instance.createPromoKitty(187555674, coo, {from: coo,value: 0});
await instance.createPromoKitty(700225090, coo, {from: coo,value: 0});
await instance.createPromoKitty(604050932, coo, {from: coo,value: 0});
await instance.createPromoKitty(680148692, coo, {from: coo,value: 0});
await instance.createPromoKitty(957664797, coo, {from: coo,value: 0});
await instance.createPromoKitty(154640100, coo, {from: coo,value: 0});
await instance.createPromoKitty(620740543, coo, {from: coo,value: 0});
await instance.createPromoKitty(579466617, coo, {from: coo,value: 0});
await instance.createPromoKitty(55924344, coo, {from: coo,value: 0});
await instance.createPromoKitty(505386773, coo, {from: coo,value: 0});
await instance.createPromoKitty(358025799, coo, {from: coo,value: 0});
await instance.createPromoKitty(369451116, coo, {from: coo,value: 0});
await instance.createPromoKitty(327766541, coo, {from: coo,value: 0});
await instance.createPromoKitty(13605777, coo, {from: coo,value: 0});
await instance.createPromoKitty(970506133, coo, {from: coo,value: 0});
await instance.createPromoKitty(774876282, coo, {from: coo,value: 0});
await instance.createPromoKitty(226108489, coo, {from: coo,value: 0});
await instance.createPromoKitty(852221250, coo, {from: coo,value: 0});
await instance.createPromoKitty(469012756, coo, {from: coo,value: 0});
await instance.createPromoKitty(947200483, coo, {from: coo,value: 0});
await instance.createPromoKitty(800119261, coo, {from: coo,value: 0});
await instance.createPromoKitty(647234889, coo, {from: coo,value: 0});
await instance.createPromoKitty(299929423, coo, {from: coo,value: 0});
await instance.createPromoKitty(379470739, coo, {from: coo,value: 0});
await instance.createPromoKitty(678653259, coo, {from: coo,value: 0});
await instance.createPromoKitty(515371581, coo, {from: coo,value: 0});
await instance.createPromoKitty(517180381, coo, {from: coo,value: 0});
await instance.createPromoKitty(166073573, coo, {from: coo,value: 0});
await instance.createPromoKitty(866605640, coo, {from: coo,value: 0});
await instance.createPromoKitty(693842585, coo, {from: coo,value: 0});
await instance.createPromoKitty(319735204, coo, {from: coo,value: 0});
await instance.createPromoKitty(11402231, coo, {from: coo,value: 0});
await instance.createPromoKitty(810860093, coo, {from: coo,value: 0});
await instance.createPromoKitty(770530507, coo, {from: coo,value: 0});
await instance.createPromoKitty(192494132, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(40, 29, {from: coo});
await instance.breedWith(28, 17, {from: coo});
await instance.breedWith(13, 35, {from: coo});
await instance.breedWith(30, 37, {from: coo});
await instance.breedWith(14, 32, {from: coo});
await instance.breedWith(11, 9, {from: coo});
await instance.breedWith(3, 39, {from: coo});
await instance.breedWith(36, 5, {from: coo});
await instance.breedWith(2, 16, {from: coo});
await instance.breedWith(8, 25, {from: coo});
await instance.breedWith(19, 15, {from: coo});
await instance.breedWith(27, 38, {from: coo});
await instance.breedWith(22, 20, {from: coo});
await instance.breedWith(34, 24, {from: coo});
await instance.breedWith(33, 18, {from: coo});
await instance.breedWith(12, 31, {from: coo});
await instance.breedWith(7, 10, {from: coo});
await instance.breedWith(26, 23, {from: coo});
await instance.breedWith(1, 21, {from: coo});
await instance.breedWith(4, 6, {from: coo});
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
await instance.giveBirth(40);
await instance.giveBirth(28);
await instance.giveBirth(13);
await instance.giveBirth(30);
await instance.giveBirth(14);
await instance.giveBirth(11);
await instance.giveBirth(3);
await instance.giveBirth(36);
await instance.giveBirth(2);
await instance.giveBirth(8);
await instance.giveBirth(19);
await instance.giveBirth(27);
await instance.giveBirth(22);
await instance.giveBirth(34);
await instance.giveBirth(33);
await instance.giveBirth(12);
await instance.giveBirth(7);
await instance.giveBirth(26);
await instance.giveBirth(1);
await instance.giveBirth(4);
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
