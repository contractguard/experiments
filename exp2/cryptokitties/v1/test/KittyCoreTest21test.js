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
await instance.createPromoKitty(763186706, coo, {from: coo,value: 0});
await instance.createPromoKitty(48946967, coo, {from: coo,value: 0});
await instance.createPromoKitty(289172017, coo, {from: coo,value: 0});
await instance.createPromoKitty(397918297, coo, {from: coo,value: 0});
await instance.createPromoKitty(49970104, coo, {from: coo,value: 0});
await instance.createPromoKitty(64810435, coo, {from: coo,value: 0});
await instance.createPromoKitty(522362808, coo, {from: coo,value: 0});
await instance.createPromoKitty(834247339, coo, {from: coo,value: 0});
await instance.createPromoKitty(580465282, coo, {from: coo,value: 0});
await instance.createPromoKitty(37062185, coo, {from: coo,value: 0});
await instance.createPromoKitty(948392156, coo, {from: coo,value: 0});
await instance.createPromoKitty(127910760, coo, {from: coo,value: 0});
await instance.createPromoKitty(533936433, coo, {from: coo,value: 0});
await instance.createPromoKitty(855472859, coo, {from: coo,value: 0});
await instance.createPromoKitty(130605852, coo, {from: coo,value: 0});
await instance.createPromoKitty(944378527, coo, {from: coo,value: 0});
await instance.createPromoKitty(297770136, coo, {from: coo,value: 0});
await instance.createPromoKitty(156517003, coo, {from: coo,value: 0});
await instance.createPromoKitty(398479002, coo, {from: coo,value: 0});
await instance.createPromoKitty(685166305, coo, {from: coo,value: 0});
await instance.createPromoKitty(632284769, coo, {from: coo,value: 0});
await instance.createPromoKitty(918852238, coo, {from: coo,value: 0});
await instance.createPromoKitty(766164032, coo, {from: coo,value: 0});
await instance.createPromoKitty(516268090, coo, {from: coo,value: 0});
await instance.createPromoKitty(584631550, coo, {from: coo,value: 0});
await instance.createPromoKitty(676098993, coo, {from: coo,value: 0});
await instance.createPromoKitty(493499001, coo, {from: coo,value: 0});
await instance.createPromoKitty(324795818, coo, {from: coo,value: 0});
await instance.createPromoKitty(894614518, coo, {from: coo,value: 0});
await instance.createPromoKitty(550715449, coo, {from: coo,value: 0});
await instance.createPromoKitty(840633091, coo, {from: coo,value: 0});
await instance.createPromoKitty(372505647, coo, {from: coo,value: 0});
await instance.createPromoKitty(638354484, coo, {from: coo,value: 0});
await instance.createPromoKitty(539336452, coo, {from: coo,value: 0});
await instance.createPromoKitty(605739585, coo, {from: coo,value: 0});
await instance.createPromoKitty(100145634, coo, {from: coo,value: 0});
await instance.createPromoKitty(338933238, coo, {from: coo,value: 0});
await instance.createPromoKitty(229838695, coo, {from: coo,value: 0});
await instance.createPromoKitty(257134227, coo, {from: coo,value: 0});
await instance.createPromoKitty(762447287, coo, {from: coo,value: 0});
await instance.createPromoKitty(212670475, coo, {from: coo,value: 0});
await instance.createPromoKitty(448465683, coo, {from: coo,value: 0});
await instance.createPromoKitty(528333851, coo, {from: coo,value: 0});
await instance.createPromoKitty(244353384, coo, {from: coo,value: 0});
await instance.createPromoKitty(527842574, coo, {from: coo,value: 0});
await instance.createPromoKitty(510805247, coo, {from: coo,value: 0});
await instance.createPromoKitty(290967600, coo, {from: coo,value: 0});
await instance.createPromoKitty(857911787, coo, {from: coo,value: 0});
await instance.createPromoKitty(776234231, coo, {from: coo,value: 0});
await instance.createPromoKitty(369980348, coo, {from: coo,value: 0});
await instance.createPromoKitty(257604842, coo, {from: coo,value: 0});
await instance.createPromoKitty(558283329, coo, {from: coo,value: 0});
await instance.createPromoKitty(668141932, coo, {from: coo,value: 0});
await instance.createPromoKitty(345451404, coo, {from: coo,value: 0});
await instance.createPromoKitty(941812561, coo, {from: coo,value: 0});
await instance.createPromoKitty(870153586, coo, {from: coo,value: 0});
await instance.createPromoKitty(620704238, coo, {from: coo,value: 0});
await instance.createPromoKitty(977980896, coo, {from: coo,value: 0});
await instance.createPromoKitty(611169438, coo, {from: coo,value: 0});
await instance.createPromoKitty(767264405, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(4, 20, {from: coo});
await instance.breedWith(8, 2, {from: coo});
await instance.breedWith(15, 16, {from: coo});
await instance.breedWith(14, 10, {from: coo});
await instance.breedWith(12, 25, {from: coo});
await instance.breedWith(29, 5, {from: coo});
await instance.breedWith(37, 33, {from: coo});
await instance.breedWith(32, 19, {from: coo});
await instance.breedWith(35, 21, {from: coo});
await instance.breedWith(28, 7, {from: coo});
await instance.breedWith(11, 17, {from: coo});
await instance.breedWith(31, 36, {from: coo});
await instance.breedWith(30, 39, {from: coo});
await instance.breedWith(23, 18, {from: coo});
await instance.breedWith(24, 27, {from: coo});
await instance.breedWith(40, 9, {from: coo});
await instance.breedWith(34, 1, {from: coo});
await instance.breedWith(3, 22, {from: coo});
await instance.breedWith(6, 26, {from: coo});
await instance.breedWith(38, 13, {from: coo});
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
await instance.giveBirth(4);
await instance.giveBirth(8);
await instance.giveBirth(15);
await instance.giveBirth(14);
await instance.giveBirth(12);
await instance.giveBirth(29);
await instance.giveBirth(37);
await instance.giveBirth(32);
await instance.giveBirth(35);
await instance.giveBirth(28);
await instance.giveBirth(11);
await instance.giveBirth(31);
await instance.giveBirth(30);
await instance.giveBirth(23);
await instance.giveBirth(24);
await instance.giveBirth(40);
await instance.giveBirth(34);
await instance.giveBirth(3);
await instance.giveBirth(6);
await instance.giveBirth(38);
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
