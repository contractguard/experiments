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
await instance.createPromoKitty(498965432, coo, {from: coo,value: 0});
await instance.createPromoKitty(64274026, coo, {from: coo,value: 0});
await instance.createPromoKitty(432796172, coo, {from: coo,value: 0});
await instance.createPromoKitty(480825035, coo, {from: coo,value: 0});
await instance.createPromoKitty(784509778, coo, {from: coo,value: 0});
await instance.createPromoKitty(358254173, coo, {from: coo,value: 0});
await instance.createPromoKitty(423316474, coo, {from: coo,value: 0});
await instance.createPromoKitty(649169510, coo, {from: coo,value: 0});
await instance.createPromoKitty(453767495, coo, {from: coo,value: 0});
await instance.createPromoKitty(704179709, coo, {from: coo,value: 0});
await instance.createPromoKitty(99974832, coo, {from: coo,value: 0});
await instance.createPromoKitty(732968914, coo, {from: coo,value: 0});
await instance.createPromoKitty(17884958, coo, {from: coo,value: 0});
await instance.createPromoKitty(242897958, coo, {from: coo,value: 0});
await instance.createPromoKitty(346384607, coo, {from: coo,value: 0});
await instance.createPromoKitty(239723305, coo, {from: coo,value: 0});
await instance.createPromoKitty(516906789, coo, {from: coo,value: 0});
await instance.createPromoKitty(148421500, coo, {from: coo,value: 0});
await instance.createPromoKitty(403715892, coo, {from: coo,value: 0});
await instance.createPromoKitty(855221060, coo, {from: coo,value: 0});
await instance.createPromoKitty(114001027, coo, {from: coo,value: 0});
await instance.createPromoKitty(703019936, coo, {from: coo,value: 0});
await instance.createPromoKitty(961219349, coo, {from: coo,value: 0});
await instance.createPromoKitty(609980683, coo, {from: coo,value: 0});
await instance.createPromoKitty(971339704, coo, {from: coo,value: 0});
await instance.createPromoKitty(79717609, coo, {from: coo,value: 0});
await instance.createPromoKitty(650910449, coo, {from: coo,value: 0});
await instance.createPromoKitty(380462567, coo, {from: coo,value: 0});
await instance.createPromoKitty(443828440, coo, {from: coo,value: 0});
await instance.createPromoKitty(346250593, coo, {from: coo,value: 0});
await instance.createPromoKitty(3301506, coo, {from: coo,value: 0});
await instance.createPromoKitty(255078454, coo, {from: coo,value: 0});
await instance.createPromoKitty(727794822, coo, {from: coo,value: 0});
await instance.createPromoKitty(18355933, coo, {from: coo,value: 0});
await instance.createPromoKitty(874121469, coo, {from: coo,value: 0});
await instance.createPromoKitty(917593726, coo, {from: coo,value: 0});
await instance.createPromoKitty(10068080, coo, {from: coo,value: 0});
await instance.createPromoKitty(750875832, coo, {from: coo,value: 0});
await instance.createPromoKitty(598702843, coo, {from: coo,value: 0});
await instance.createPromoKitty(212778932, coo, {from: coo,value: 0});
await instance.createPromoKitty(36945568, coo, {from: coo,value: 0});
await instance.createPromoKitty(132787081, coo, {from: coo,value: 0});
await instance.createPromoKitty(68530801, coo, {from: coo,value: 0});
await instance.createPromoKitty(90158757, coo, {from: coo,value: 0});
await instance.createPromoKitty(475531087, coo, {from: coo,value: 0});
await instance.createPromoKitty(260611169, coo, {from: coo,value: 0});
await instance.createPromoKitty(965515229, coo, {from: coo,value: 0});
await instance.createPromoKitty(45474263, coo, {from: coo,value: 0});
await instance.createPromoKitty(244368546, coo, {from: coo,value: 0});
await instance.createPromoKitty(496593984, coo, {from: coo,value: 0});
await instance.createPromoKitty(554245505, coo, {from: coo,value: 0});
await instance.createPromoKitty(842399635, coo, {from: coo,value: 0});
await instance.createPromoKitty(806990093, coo, {from: coo,value: 0});
await instance.createPromoKitty(668688643, coo, {from: coo,value: 0});
await instance.createPromoKitty(884958723, coo, {from: coo,value: 0});
await instance.createPromoKitty(355554018, coo, {from: coo,value: 0});
await instance.createPromoKitty(449272125, coo, {from: coo,value: 0});
await instance.createPromoKitty(245992229, coo, {from: coo,value: 0});
await instance.createPromoKitty(845780913, coo, {from: coo,value: 0});
await instance.createPromoKitty(184267354, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(16, 25, {from: coo});
await instance.breedWith(34, 29, {from: coo});
await instance.breedWith(9, 15, {from: coo});
await instance.breedWith(22, 30, {from: coo});
await instance.breedWith(8, 3, {from: coo});
await instance.breedWith(12, 5, {from: coo});
await instance.breedWith(24, 2, {from: coo});
await instance.breedWith(31, 23, {from: coo});
await instance.breedWith(36, 19, {from: coo});
await instance.breedWith(13, 18, {from: coo});
await instance.breedWith(6, 1, {from: coo});
await instance.breedWith(20, 7, {from: coo});
await instance.breedWith(4, 28, {from: coo});
await instance.breedWith(26, 17, {from: coo});
await instance.breedWith(40, 11, {from: coo});
await instance.breedWith(37, 32, {from: coo});
await instance.breedWith(10, 38, {from: coo});
await instance.breedWith(39, 35, {from: coo});
await instance.breedWith(14, 33, {from: coo});
await instance.breedWith(21, 27, {from: coo});
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
await instance.giveBirth(34);
await instance.giveBirth(9);
await instance.giveBirth(22);
await instance.giveBirth(8);
await instance.giveBirth(12);
await instance.giveBirth(24);
await instance.giveBirth(31);
await instance.giveBirth(36);
await instance.giveBirth(13);
await instance.giveBirth(6);
await instance.giveBirth(20);
await instance.giveBirth(4);
await instance.giveBirth(26);
await instance.giveBirth(40);
await instance.giveBirth(37);
await instance.giveBirth(10);
await instance.giveBirth(39);
await instance.giveBirth(14);
await instance.giveBirth(21);
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
