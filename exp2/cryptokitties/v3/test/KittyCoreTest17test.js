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
await instance.createPromoKitty(210734508, coo, {from: coo,value: 0});
await instance.createPromoKitty(956273260, coo, {from: coo,value: 0});
await instance.createPromoKitty(425409225, coo, {from: coo,value: 0});
await instance.createPromoKitty(620037756, coo, {from: coo,value: 0});
await instance.createPromoKitty(126849825, coo, {from: coo,value: 0});
await instance.createPromoKitty(948954452, coo, {from: coo,value: 0});
await instance.createPromoKitty(10107861, coo, {from: coo,value: 0});
await instance.createPromoKitty(579321854, coo, {from: coo,value: 0});
await instance.createPromoKitty(276583931, coo, {from: coo,value: 0});
await instance.createPromoKitty(364804805, coo, {from: coo,value: 0});
await instance.createPromoKitty(134078620, coo, {from: coo,value: 0});
await instance.createPromoKitty(598393470, coo, {from: coo,value: 0});
await instance.createPromoKitty(412953166, coo, {from: coo,value: 0});
await instance.createPromoKitty(343413784, coo, {from: coo,value: 0});
await instance.createPromoKitty(384899182, coo, {from: coo,value: 0});
await instance.createPromoKitty(515270414, coo, {from: coo,value: 0});
await instance.createPromoKitty(914058602, coo, {from: coo,value: 0});
await instance.createPromoKitty(23144123, coo, {from: coo,value: 0});
await instance.createPromoKitty(846340438, coo, {from: coo,value: 0});
await instance.createPromoKitty(750985720, coo, {from: coo,value: 0});
await instance.createPromoKitty(629082685, coo, {from: coo,value: 0});
await instance.createPromoKitty(640531351, coo, {from: coo,value: 0});
await instance.createPromoKitty(649630093, coo, {from: coo,value: 0});
await instance.createPromoKitty(109164338, coo, {from: coo,value: 0});
await instance.createPromoKitty(521319848, coo, {from: coo,value: 0});
await instance.createPromoKitty(714653677, coo, {from: coo,value: 0});
await instance.createPromoKitty(650407844, coo, {from: coo,value: 0});
await instance.createPromoKitty(751115016, coo, {from: coo,value: 0});
await instance.createPromoKitty(951365684, coo, {from: coo,value: 0});
await instance.createPromoKitty(139338079, coo, {from: coo,value: 0});
await instance.createPromoKitty(677486563, coo, {from: coo,value: 0});
await instance.createPromoKitty(753429242, coo, {from: coo,value: 0});
await instance.createPromoKitty(169833352, coo, {from: coo,value: 0});
await instance.createPromoKitty(68982302, coo, {from: coo,value: 0});
await instance.createPromoKitty(796223958, coo, {from: coo,value: 0});
await instance.createPromoKitty(971897978, coo, {from: coo,value: 0});
await instance.createPromoKitty(723644693, coo, {from: coo,value: 0});
await instance.createPromoKitty(345749762, coo, {from: coo,value: 0});
await instance.createPromoKitty(538194869, coo, {from: coo,value: 0});
await instance.createPromoKitty(556027268, coo, {from: coo,value: 0});
await instance.createPromoKitty(720951118, coo, {from: coo,value: 0});
await instance.createPromoKitty(385886118, coo, {from: coo,value: 0});
await instance.createPromoKitty(5888929, coo, {from: coo,value: 0});
await instance.createPromoKitty(715626969, coo, {from: coo,value: 0});
await instance.createPromoKitty(594954467, coo, {from: coo,value: 0});
await instance.createPromoKitty(474017277, coo, {from: coo,value: 0});
await instance.createPromoKitty(629816150, coo, {from: coo,value: 0});
await instance.createPromoKitty(594527793, coo, {from: coo,value: 0});
await instance.createPromoKitty(757303759, coo, {from: coo,value: 0});
await instance.createPromoKitty(895670690, coo, {from: coo,value: 0});
await instance.createPromoKitty(774660300, coo, {from: coo,value: 0});
await instance.createPromoKitty(244954077, coo, {from: coo,value: 0});
await instance.createPromoKitty(349384645, coo, {from: coo,value: 0});
await instance.createPromoKitty(890449639, coo, {from: coo,value: 0});
await instance.createPromoKitty(1688163, coo, {from: coo,value: 0});
await instance.createPromoKitty(998032472, coo, {from: coo,value: 0});
await instance.createPromoKitty(972970360, coo, {from: coo,value: 0});
await instance.createPromoKitty(576708041, coo, {from: coo,value: 0});
await instance.createPromoKitty(991201203, coo, {from: coo,value: 0});
await instance.createPromoKitty(340605980, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(15, 33, {from: coo});
await instance.breedWith(11, 12, {from: coo});
await instance.breedWith(23, 38, {from: coo});
await instance.breedWith(4, 6, {from: coo});
await instance.breedWith(35, 10, {from: coo});
await instance.breedWith(30, 5, {from: coo});
await instance.breedWith(20, 39, {from: coo});
await instance.breedWith(3, 19, {from: coo});
await instance.breedWith(13, 8, {from: coo});
await instance.breedWith(40, 1, {from: coo});
await instance.breedWith(17, 24, {from: coo});
await instance.breedWith(9, 28, {from: coo});
await instance.breedWith(7, 37, {from: coo});
await instance.breedWith(26, 16, {from: coo});
await instance.breedWith(34, 18, {from: coo});
await instance.breedWith(14, 21, {from: coo});
await instance.breedWith(29, 32, {from: coo});
await instance.breedWith(2, 22, {from: coo});
await instance.breedWith(25, 27, {from: coo});
await instance.breedWith(31, 36, {from: coo});
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
await instance.giveBirth(15);
await instance.giveBirth(11);
await instance.giveBirth(23);
await instance.giveBirth(4);
await instance.giveBirth(35);
await instance.giveBirth(30);
await instance.giveBirth(20);
await instance.giveBirth(3);
await instance.giveBirth(13);
await instance.giveBirth(40);
await instance.giveBirth(17);
await instance.giveBirth(9);
await instance.giveBirth(7);
await instance.giveBirth(26);
await instance.giveBirth(34);
await instance.giveBirth(14);
await instance.giveBirth(29);
await instance.giveBirth(2);
await instance.giveBirth(25);
await instance.giveBirth(31);
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
