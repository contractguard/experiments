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
await instance.createPromoKitty(992640070, coo, {from: coo,value: 0});
await instance.createPromoKitty(86717067, coo, {from: coo,value: 0});
await instance.createPromoKitty(891401287, coo, {from: coo,value: 0});
await instance.createPromoKitty(923961991, coo, {from: coo,value: 0});
await instance.createPromoKitty(34260381, coo, {from: coo,value: 0});
await instance.createPromoKitty(659608869, coo, {from: coo,value: 0});
await instance.createPromoKitty(986860007, coo, {from: coo,value: 0});
await instance.createPromoKitty(83160832, coo, {from: coo,value: 0});
await instance.createPromoKitty(55423485, coo, {from: coo,value: 0});
await instance.createPromoKitty(256024828, coo, {from: coo,value: 0});
await instance.createPromoKitty(2190917, coo, {from: coo,value: 0});
await instance.createPromoKitty(841024448, coo, {from: coo,value: 0});
await instance.createPromoKitty(688312687, coo, {from: coo,value: 0});
await instance.createPromoKitty(995231246, coo, {from: coo,value: 0});
await instance.createPromoKitty(606719516, coo, {from: coo,value: 0});
await instance.createPromoKitty(330727845, coo, {from: coo,value: 0});
await instance.createPromoKitty(562109531, coo, {from: coo,value: 0});
await instance.createPromoKitty(500868572, coo, {from: coo,value: 0});
await instance.createPromoKitty(920088979, coo, {from: coo,value: 0});
await instance.createPromoKitty(475375520, coo, {from: coo,value: 0});
await instance.createPromoKitty(166154776, coo, {from: coo,value: 0});
await instance.createPromoKitty(824359802, coo, {from: coo,value: 0});
await instance.createPromoKitty(726223200, coo, {from: coo,value: 0});
await instance.createPromoKitty(827980938, coo, {from: coo,value: 0});
await instance.createPromoKitty(368134012, coo, {from: coo,value: 0});
await instance.createPromoKitty(188779997, coo, {from: coo,value: 0});
await instance.createPromoKitty(940395689, coo, {from: coo,value: 0});
await instance.createPromoKitty(339331363, coo, {from: coo,value: 0});
await instance.createPromoKitty(563315069, coo, {from: coo,value: 0});
await instance.createPromoKitty(202971642, coo, {from: coo,value: 0});
await instance.createPromoKitty(979853304, coo, {from: coo,value: 0});
await instance.createPromoKitty(653422044, coo, {from: coo,value: 0});
await instance.createPromoKitty(742064845, coo, {from: coo,value: 0});
await instance.createPromoKitty(346559703, coo, {from: coo,value: 0});
await instance.createPromoKitty(359891391, coo, {from: coo,value: 0});
await instance.createPromoKitty(796502376, coo, {from: coo,value: 0});
await instance.createPromoKitty(950140667, coo, {from: coo,value: 0});
await instance.createPromoKitty(664099047, coo, {from: coo,value: 0});
await instance.createPromoKitty(892333204, coo, {from: coo,value: 0});
await instance.createPromoKitty(849217849, coo, {from: coo,value: 0});
await instance.createPromoKitty(361522826, coo, {from: coo,value: 0});
await instance.createPromoKitty(226367349, coo, {from: coo,value: 0});
await instance.createPromoKitty(744682984, coo, {from: coo,value: 0});
await instance.createPromoKitty(684947064, coo, {from: coo,value: 0});
await instance.createPromoKitty(931019156, coo, {from: coo,value: 0});
await instance.createPromoKitty(809159396, coo, {from: coo,value: 0});
await instance.createPromoKitty(943587436, coo, {from: coo,value: 0});
await instance.createPromoKitty(677639139, coo, {from: coo,value: 0});
await instance.createPromoKitty(607377010, coo, {from: coo,value: 0});
await instance.createPromoKitty(907242001, coo, {from: coo,value: 0});
await instance.createPromoKitty(457839305, coo, {from: coo,value: 0});
await instance.createPromoKitty(837062545, coo, {from: coo,value: 0});
await instance.createPromoKitty(285695770, coo, {from: coo,value: 0});
await instance.createPromoKitty(122553135, coo, {from: coo,value: 0});
await instance.createPromoKitty(910388528, coo, {from: coo,value: 0});
await instance.createPromoKitty(43950437, coo, {from: coo,value: 0});
await instance.createPromoKitty(330105797, coo, {from: coo,value: 0});
await instance.createPromoKitty(716119873, coo, {from: coo,value: 0});
await instance.createPromoKitty(966173403, coo, {from: coo,value: 0});
await instance.createPromoKitty(930852148, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(38, 27, {from: coo});
await instance.breedWith(20, 19, {from: coo});
await instance.breedWith(26, 40, {from: coo});
await instance.breedWith(22, 18, {from: coo});
await instance.breedWith(39, 31, {from: coo});
await instance.breedWith(35, 36, {from: coo});
await instance.breedWith(6, 2, {from: coo});
await instance.breedWith(16, 24, {from: coo});
await instance.breedWith(23, 9, {from: coo});
await instance.breedWith(29, 34, {from: coo});
await instance.breedWith(1, 14, {from: coo});
await instance.breedWith(13, 7, {from: coo});
await instance.breedWith(15, 10, {from: coo});
await instance.breedWith(30, 17, {from: coo});
await instance.breedWith(12, 32, {from: coo});
await instance.breedWith(33, 37, {from: coo});
await instance.breedWith(8, 3, {from: coo});
await instance.breedWith(11, 4, {from: coo});
await instance.breedWith(25, 5, {from: coo});
await instance.breedWith(21, 28, {from: coo});
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
await instance.giveBirth(38);
await instance.giveBirth(20);
await instance.giveBirth(26);
await instance.giveBirth(22);
await instance.giveBirth(39);
await instance.giveBirth(35);
await instance.giveBirth(6);
await instance.giveBirth(16);
await instance.giveBirth(23);
await instance.giveBirth(29);
await instance.giveBirth(1);
await instance.giveBirth(13);
await instance.giveBirth(15);
await instance.giveBirth(30);
await instance.giveBirth(12);
await instance.giveBirth(33);
await instance.giveBirth(8);
await instance.giveBirth(11);
await instance.giveBirth(25);
await instance.giveBirth(21);
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
