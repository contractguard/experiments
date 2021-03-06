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
await instance.createPromoKitty(474574296, coo, {from: coo,value: 0});
await instance.createPromoKitty(837612135, coo, {from: coo,value: 0});
await instance.createPromoKitty(605658052, coo, {from: coo,value: 0});
await instance.createPromoKitty(921502220, coo, {from: coo,value: 0});
await instance.createPromoKitty(321387542, coo, {from: coo,value: 0});
await instance.createPromoKitty(113431828, coo, {from: coo,value: 0});
await instance.createPromoKitty(898968522, coo, {from: coo,value: 0});
await instance.createPromoKitty(800982645, coo, {from: coo,value: 0});
await instance.createPromoKitty(302483107, coo, {from: coo,value: 0});
await instance.createPromoKitty(801839123, coo, {from: coo,value: 0});
await instance.createPromoKitty(244126516, coo, {from: coo,value: 0});
await instance.createPromoKitty(573057473, coo, {from: coo,value: 0});
await instance.createPromoKitty(696339547, coo, {from: coo,value: 0});
await instance.createPromoKitty(826464356, coo, {from: coo,value: 0});
await instance.createPromoKitty(273077091, coo, {from: coo,value: 0});
await instance.createPromoKitty(785664714, coo, {from: coo,value: 0});
await instance.createPromoKitty(1290776, coo, {from: coo,value: 0});
await instance.createPromoKitty(721432183, coo, {from: coo,value: 0});
await instance.createPromoKitty(418884261, coo, {from: coo,value: 0});
await instance.createPromoKitty(482771930, coo, {from: coo,value: 0});
await instance.createPromoKitty(923673614, coo, {from: coo,value: 0});
await instance.createPromoKitty(573349850, coo, {from: coo,value: 0});
await instance.createPromoKitty(303029590, coo, {from: coo,value: 0});
await instance.createPromoKitty(383161000, coo, {from: coo,value: 0});
await instance.createPromoKitty(747044421, coo, {from: coo,value: 0});
await instance.createPromoKitty(871490874, coo, {from: coo,value: 0});
await instance.createPromoKitty(663531672, coo, {from: coo,value: 0});
await instance.createPromoKitty(757007133, coo, {from: coo,value: 0});
await instance.createPromoKitty(647294511, coo, {from: coo,value: 0});
await instance.createPromoKitty(805173448, coo, {from: coo,value: 0});
await instance.createPromoKitty(114378868, coo, {from: coo,value: 0});
await instance.createPromoKitty(443981228, coo, {from: coo,value: 0});
await instance.createPromoKitty(230633794, coo, {from: coo,value: 0});
await instance.createPromoKitty(177059128, coo, {from: coo,value: 0});
await instance.createPromoKitty(398720190, coo, {from: coo,value: 0});
await instance.createPromoKitty(183510853, coo, {from: coo,value: 0});
await instance.createPromoKitty(565013715, coo, {from: coo,value: 0});
await instance.createPromoKitty(246902505, coo, {from: coo,value: 0});
await instance.createPromoKitty(187571730, coo, {from: coo,value: 0});
await instance.createPromoKitty(928600826, coo, {from: coo,value: 0});
await instance.createPromoKitty(167964776, coo, {from: coo,value: 0});
await instance.createPromoKitty(543758520, coo, {from: coo,value: 0});
await instance.createPromoKitty(821770155, coo, {from: coo,value: 0});
await instance.createPromoKitty(639170706, coo, {from: coo,value: 0});
await instance.createPromoKitty(886159780, coo, {from: coo,value: 0});
await instance.createPromoKitty(515388429, coo, {from: coo,value: 0});
await instance.createPromoKitty(327781107, coo, {from: coo,value: 0});
await instance.createPromoKitty(10129550, coo, {from: coo,value: 0});
await instance.createPromoKitty(677626842, coo, {from: coo,value: 0});
await instance.createPromoKitty(998335729, coo, {from: coo,value: 0});
await instance.createPromoKitty(394383508, coo, {from: coo,value: 0});
await instance.createPromoKitty(60772615, coo, {from: coo,value: 0});
await instance.createPromoKitty(357240382, coo, {from: coo,value: 0});
await instance.createPromoKitty(963098277, coo, {from: coo,value: 0});
await instance.createPromoKitty(176703301, coo, {from: coo,value: 0});
await instance.createPromoKitty(597803539, coo, {from: coo,value: 0});
await instance.createPromoKitty(248312480, coo, {from: coo,value: 0});
await instance.createPromoKitty(706918185, coo, {from: coo,value: 0});
await instance.createPromoKitty(786438403, coo, {from: coo,value: 0});
await instance.createPromoKitty(4631948, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(20, 4, {from: coo});
await instance.breedWith(40, 24, {from: coo});
await instance.breedWith(29, 33, {from: coo});
await instance.breedWith(17, 15, {from: coo});
await instance.breedWith(1, 31, {from: coo});
await instance.breedWith(30, 22, {from: coo});
await instance.breedWith(2, 39, {from: coo});
await instance.breedWith(8, 23, {from: coo});
await instance.breedWith(36, 35, {from: coo});
await instance.breedWith(19, 9, {from: coo});
await instance.breedWith(16, 21, {from: coo});
await instance.breedWith(32, 10, {from: coo});
await instance.breedWith(18, 28, {from: coo});
await instance.breedWith(25, 38, {from: coo});
await instance.breedWith(14, 37, {from: coo});
await instance.breedWith(3, 7, {from: coo});
await instance.breedWith(26, 13, {from: coo});
await instance.breedWith(11, 6, {from: coo});
await instance.breedWith(12, 5, {from: coo});
await instance.breedWith(34, 27, {from: coo});
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
await instance.giveBirth(20);
await instance.giveBirth(40);
await instance.giveBirth(29);
await instance.giveBirth(17);
await instance.giveBirth(1);
await instance.giveBirth(30);
await instance.giveBirth(2);
await instance.giveBirth(8);
await instance.giveBirth(36);
await instance.giveBirth(19);
await instance.giveBirth(16);
await instance.giveBirth(32);
await instance.giveBirth(18);
await instance.giveBirth(25);
await instance.giveBirth(14);
await instance.giveBirth(3);
await instance.giveBirth(26);
await instance.giveBirth(11);
await instance.giveBirth(12);
await instance.giveBirth(34);
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
