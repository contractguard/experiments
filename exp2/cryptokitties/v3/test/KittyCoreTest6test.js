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
await instance.createPromoKitty(316282321, coo, {from: coo,value: 0});
await instance.createPromoKitty(601259155, coo, {from: coo,value: 0});
await instance.createPromoKitty(259212264, coo, {from: coo,value: 0});
await instance.createPromoKitty(822833866, coo, {from: coo,value: 0});
await instance.createPromoKitty(208321041, coo, {from: coo,value: 0});
await instance.createPromoKitty(662465429, coo, {from: coo,value: 0});
await instance.createPromoKitty(569449882, coo, {from: coo,value: 0});
await instance.createPromoKitty(607502834, coo, {from: coo,value: 0});
await instance.createPromoKitty(847610203, coo, {from: coo,value: 0});
await instance.createPromoKitty(104115059, coo, {from: coo,value: 0});
await instance.createPromoKitty(891201744, coo, {from: coo,value: 0});
await instance.createPromoKitty(519505345, coo, {from: coo,value: 0});
await instance.createPromoKitty(62119838, coo, {from: coo,value: 0});
await instance.createPromoKitty(181348010, coo, {from: coo,value: 0});
await instance.createPromoKitty(474696585, coo, {from: coo,value: 0});
await instance.createPromoKitty(147643721, coo, {from: coo,value: 0});
await instance.createPromoKitty(186174627, coo, {from: coo,value: 0});
await instance.createPromoKitty(965295409, coo, {from: coo,value: 0});
await instance.createPromoKitty(777536966, coo, {from: coo,value: 0});
await instance.createPromoKitty(339913462, coo, {from: coo,value: 0});
await instance.createPromoKitty(41127198, coo, {from: coo,value: 0});
await instance.createPromoKitty(952957796, coo, {from: coo,value: 0});
await instance.createPromoKitty(712597664, coo, {from: coo,value: 0});
await instance.createPromoKitty(883599187, coo, {from: coo,value: 0});
await instance.createPromoKitty(947579049, coo, {from: coo,value: 0});
await instance.createPromoKitty(25686691, coo, {from: coo,value: 0});
await instance.createPromoKitty(511383523, coo, {from: coo,value: 0});
await instance.createPromoKitty(784048116, coo, {from: coo,value: 0});
await instance.createPromoKitty(425598202, coo, {from: coo,value: 0});
await instance.createPromoKitty(134569223, coo, {from: coo,value: 0});
await instance.createPromoKitty(504403552, coo, {from: coo,value: 0});
await instance.createPromoKitty(166021466, coo, {from: coo,value: 0});
await instance.createPromoKitty(44249509, coo, {from: coo,value: 0});
await instance.createPromoKitty(318322743, coo, {from: coo,value: 0});
await instance.createPromoKitty(825799745, coo, {from: coo,value: 0});
await instance.createPromoKitty(147553192, coo, {from: coo,value: 0});
await instance.createPromoKitty(406213044, coo, {from: coo,value: 0});
await instance.createPromoKitty(351011830, coo, {from: coo,value: 0});
await instance.createPromoKitty(565773161, coo, {from: coo,value: 0});
await instance.createPromoKitty(602542222, coo, {from: coo,value: 0});
await instance.createPromoKitty(285583285, coo, {from: coo,value: 0});
await instance.createPromoKitty(122118797, coo, {from: coo,value: 0});
await instance.createPromoKitty(529801704, coo, {from: coo,value: 0});
await instance.createPromoKitty(817494678, coo, {from: coo,value: 0});
await instance.createPromoKitty(283445366, coo, {from: coo,value: 0});
await instance.createPromoKitty(100396134, coo, {from: coo,value: 0});
await instance.createPromoKitty(136181928, coo, {from: coo,value: 0});
await instance.createPromoKitty(459263471, coo, {from: coo,value: 0});
await instance.createPromoKitty(67958867, coo, {from: coo,value: 0});
await instance.createPromoKitty(439451641, coo, {from: coo,value: 0});
await instance.createPromoKitty(406926739, coo, {from: coo,value: 0});
await instance.createPromoKitty(134961747, coo, {from: coo,value: 0});
await instance.createPromoKitty(760930855, coo, {from: coo,value: 0});
await instance.createPromoKitty(69828362, coo, {from: coo,value: 0});
await instance.createPromoKitty(467773166, coo, {from: coo,value: 0});
await instance.createPromoKitty(350944587, coo, {from: coo,value: 0});
await instance.createPromoKitty(188542708, coo, {from: coo,value: 0});
await instance.createPromoKitty(418944039, coo, {from: coo,value: 0});
await instance.createPromoKitty(145462142, coo, {from: coo,value: 0});
await instance.createPromoKitty(587356297, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(37, 19, {from: coo});
await instance.breedWith(10, 15, {from: coo});
await instance.breedWith(34, 11, {from: coo});
await instance.breedWith(21, 36, {from: coo});
await instance.breedWith(22, 7, {from: coo});
await instance.breedWith(28, 38, {from: coo});
await instance.breedWith(23, 14, {from: coo});
await instance.breedWith(24, 32, {from: coo});
await instance.breedWith(35, 2, {from: coo});
await instance.breedWith(26, 13, {from: coo});
await instance.breedWith(29, 8, {from: coo});
await instance.breedWith(33, 25, {from: coo});
await instance.breedWith(16, 1, {from: coo});
await instance.breedWith(6, 31, {from: coo});
await instance.breedWith(18, 40, {from: coo});
await instance.breedWith(27, 30, {from: coo});
await instance.breedWith(39, 12, {from: coo});
await instance.breedWith(17, 5, {from: coo});
await instance.breedWith(20, 3, {from: coo});
await instance.breedWith(4, 9, {from: coo});
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
await instance.giveBirth(37);
await instance.giveBirth(10);
await instance.giveBirth(34);
await instance.giveBirth(21);
await instance.giveBirth(22);
await instance.giveBirth(28);
await instance.giveBirth(23);
await instance.giveBirth(24);
await instance.giveBirth(35);
await instance.giveBirth(26);
await instance.giveBirth(29);
await instance.giveBirth(33);
await instance.giveBirth(16);
await instance.giveBirth(6);
await instance.giveBirth(18);
await instance.giveBirth(27);
await instance.giveBirth(39);
await instance.giveBirth(17);
await instance.giveBirth(20);
await instance.giveBirth(4);
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
