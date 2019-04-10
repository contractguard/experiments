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
await instance.createPromoKitty(426213220, coo, {from: coo,value: 0});
await instance.createPromoKitty(635290560, coo, {from: coo,value: 0});
await instance.createPromoKitty(246861286, coo, {from: coo,value: 0});
await instance.createPromoKitty(225382050, coo, {from: coo,value: 0});
await instance.createPromoKitty(523273043, coo, {from: coo,value: 0});
await instance.createPromoKitty(49281991, coo, {from: coo,value: 0});
await instance.createPromoKitty(871397789, coo, {from: coo,value: 0});
await instance.createPromoKitty(961978571, coo, {from: coo,value: 0});
await instance.createPromoKitty(708719654, coo, {from: coo,value: 0});
await instance.createPromoKitty(607123051, coo, {from: coo,value: 0});
await instance.createPromoKitty(161384097, coo, {from: coo,value: 0});
await instance.createPromoKitty(520365761, coo, {from: coo,value: 0});
await instance.createPromoKitty(705001685, coo, {from: coo,value: 0});
await instance.createPromoKitty(498231490, coo, {from: coo,value: 0});
await instance.createPromoKitty(514367103, coo, {from: coo,value: 0});
await instance.createPromoKitty(285871745, coo, {from: coo,value: 0});
await instance.createPromoKitty(442399733, coo, {from: coo,value: 0});
await instance.createPromoKitty(459313131, coo, {from: coo,value: 0});
await instance.createPromoKitty(651485740, coo, {from: coo,value: 0});
await instance.createPromoKitty(395878946, coo, {from: coo,value: 0});
await instance.createPromoKitty(861294464, coo, {from: coo,value: 0});
await instance.createPromoKitty(311835557, coo, {from: coo,value: 0});
await instance.createPromoKitty(738049345, coo, {from: coo,value: 0});
await instance.createPromoKitty(941648592, coo, {from: coo,value: 0});
await instance.createPromoKitty(747340597, coo, {from: coo,value: 0});
await instance.createPromoKitty(98446173, coo, {from: coo,value: 0});
await instance.createPromoKitty(209310956, coo, {from: coo,value: 0});
await instance.createPromoKitty(323918522, coo, {from: coo,value: 0});
await instance.createPromoKitty(503884106, coo, {from: coo,value: 0});
await instance.createPromoKitty(683246944, coo, {from: coo,value: 0});
await instance.createPromoKitty(228480025, coo, {from: coo,value: 0});
await instance.createPromoKitty(92246588, coo, {from: coo,value: 0});
await instance.createPromoKitty(162910239, coo, {from: coo,value: 0});
await instance.createPromoKitty(264668203, coo, {from: coo,value: 0});
await instance.createPromoKitty(429472096, coo, {from: coo,value: 0});
await instance.createPromoKitty(939820720, coo, {from: coo,value: 0});
await instance.createPromoKitty(408045795, coo, {from: coo,value: 0});
await instance.createPromoKitty(447903753, coo, {from: coo,value: 0});
await instance.createPromoKitty(696247562, coo, {from: coo,value: 0});
await instance.createPromoKitty(95924619, coo, {from: coo,value: 0});
await instance.createPromoKitty(256202898, coo, {from: coo,value: 0});
await instance.createPromoKitty(747778215, coo, {from: coo,value: 0});
await instance.createPromoKitty(669202143, coo, {from: coo,value: 0});
await instance.createPromoKitty(83521009, coo, {from: coo,value: 0});
await instance.createPromoKitty(449884619, coo, {from: coo,value: 0});
await instance.createPromoKitty(719151063, coo, {from: coo,value: 0});
await instance.createPromoKitty(753236756, coo, {from: coo,value: 0});
await instance.createPromoKitty(136048521, coo, {from: coo,value: 0});
await instance.createPromoKitty(853226480, coo, {from: coo,value: 0});
await instance.createPromoKitty(450049820, coo, {from: coo,value: 0});
await instance.createPromoKitty(537817520, coo, {from: coo,value: 0});
await instance.createPromoKitty(836748869, coo, {from: coo,value: 0});
await instance.createPromoKitty(258419113, coo, {from: coo,value: 0});
await instance.createPromoKitty(536829842, coo, {from: coo,value: 0});
await instance.createPromoKitty(854325922, coo, {from: coo,value: 0});
await instance.createPromoKitty(218081865, coo, {from: coo,value: 0});
await instance.createPromoKitty(379276512, coo, {from: coo,value: 0});
await instance.createPromoKitty(503799696, coo, {from: coo,value: 0});
await instance.createPromoKitty(518785598, coo, {from: coo,value: 0});
await instance.createPromoKitty(64484687, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(38, 19, {from: coo});
await instance.breedWith(18, 33, {from: coo});
await instance.breedWith(29, 6, {from: coo});
await instance.breedWith(23, 7, {from: coo});
await instance.breedWith(36, 21, {from: coo});
await instance.breedWith(2, 37, {from: coo});
await instance.breedWith(35, 26, {from: coo});
await instance.breedWith(17, 3, {from: coo});
await instance.breedWith(34, 25, {from: coo});
await instance.breedWith(4, 24, {from: coo});
await instance.breedWith(14, 13, {from: coo});
await instance.breedWith(30, 10, {from: coo});
await instance.breedWith(5, 22, {from: coo});
await instance.breedWith(9, 39, {from: coo});
await instance.breedWith(15, 16, {from: coo});
await instance.breedWith(12, 20, {from: coo});
await instance.breedWith(1, 8, {from: coo});
await instance.breedWith(32, 31, {from: coo});
await instance.breedWith(27, 11, {from: coo});
await instance.breedWith(28, 40, {from: coo});
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
await instance.giveBirth(38);
await instance.giveBirth(18);
await instance.giveBirth(29);
await instance.giveBirth(23);
await instance.giveBirth(36);
await instance.giveBirth(2);
await instance.giveBirth(35);
await instance.giveBirth(17);
await instance.giveBirth(34);
await instance.giveBirth(4);
await instance.giveBirth(14);
await instance.giveBirth(30);
await instance.giveBirth(5);
await instance.giveBirth(9);
await instance.giveBirth(15);
await instance.giveBirth(12);
await instance.giveBirth(1);
await instance.giveBirth(32);
await instance.giveBirth(27);
await instance.giveBirth(28);
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
