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
await instance.createPromoKitty(698682992, coo, {from: coo,value: 0});
await instance.createPromoKitty(386918044, coo, {from: coo,value: 0});
await instance.createPromoKitty(262496651, coo, {from: coo,value: 0});
await instance.createPromoKitty(26566178, coo, {from: coo,value: 0});
await instance.createPromoKitty(106665979, coo, {from: coo,value: 0});
await instance.createPromoKitty(110269815, coo, {from: coo,value: 0});
await instance.createPromoKitty(46459089, coo, {from: coo,value: 0});
await instance.createPromoKitty(53999931, coo, {from: coo,value: 0});
await instance.createPromoKitty(296671593, coo, {from: coo,value: 0});
await instance.createPromoKitty(268944690, coo, {from: coo,value: 0});
await instance.createPromoKitty(820386506, coo, {from: coo,value: 0});
await instance.createPromoKitty(599062950, coo, {from: coo,value: 0});
await instance.createPromoKitty(272295534, coo, {from: coo,value: 0});
await instance.createPromoKitty(206891793, coo, {from: coo,value: 0});
await instance.createPromoKitty(155238535, coo, {from: coo,value: 0});
await instance.createPromoKitty(854936822, coo, {from: coo,value: 0});
await instance.createPromoKitty(253454700, coo, {from: coo,value: 0});
await instance.createPromoKitty(971784349, coo, {from: coo,value: 0});
await instance.createPromoKitty(229225723, coo, {from: coo,value: 0});
await instance.createPromoKitty(223876348, coo, {from: coo,value: 0});
await instance.createPromoKitty(938210923, coo, {from: coo,value: 0});
await instance.createPromoKitty(685423576, coo, {from: coo,value: 0});
await instance.createPromoKitty(617352578, coo, {from: coo,value: 0});
await instance.createPromoKitty(966313099, coo, {from: coo,value: 0});
await instance.createPromoKitty(517340728, coo, {from: coo,value: 0});
await instance.createPromoKitty(252732738, coo, {from: coo,value: 0});
await instance.createPromoKitty(836040494, coo, {from: coo,value: 0});
await instance.createPromoKitty(951894784, coo, {from: coo,value: 0});
await instance.createPromoKitty(340624400, coo, {from: coo,value: 0});
await instance.createPromoKitty(879403424, coo, {from: coo,value: 0});
await instance.createPromoKitty(543633749, coo, {from: coo,value: 0});
await instance.createPromoKitty(494043181, coo, {from: coo,value: 0});
await instance.createPromoKitty(127737944, coo, {from: coo,value: 0});
await instance.createPromoKitty(820834322, coo, {from: coo,value: 0});
await instance.createPromoKitty(459045757, coo, {from: coo,value: 0});
await instance.createPromoKitty(926541737, coo, {from: coo,value: 0});
await instance.createPromoKitty(269158269, coo, {from: coo,value: 0});
await instance.createPromoKitty(66997276, coo, {from: coo,value: 0});
await instance.createPromoKitty(330348501, coo, {from: coo,value: 0});
await instance.createPromoKitty(330559061, coo, {from: coo,value: 0});
await instance.createPromoKitty(681400482, coo, {from: coo,value: 0});
await instance.createPromoKitty(707491444, coo, {from: coo,value: 0});
await instance.createPromoKitty(936893379, coo, {from: coo,value: 0});
await instance.createPromoKitty(852364826, coo, {from: coo,value: 0});
await instance.createPromoKitty(329797625, coo, {from: coo,value: 0});
await instance.createPromoKitty(23556696, coo, {from: coo,value: 0});
await instance.createPromoKitty(198243848, coo, {from: coo,value: 0});
await instance.createPromoKitty(572105743, coo, {from: coo,value: 0});
await instance.createPromoKitty(465699356, coo, {from: coo,value: 0});
await instance.createPromoKitty(675487645, coo, {from: coo,value: 0});
await instance.createPromoKitty(662173905, coo, {from: coo,value: 0});
await instance.createPromoKitty(873999117, coo, {from: coo,value: 0});
await instance.createPromoKitty(263858329, coo, {from: coo,value: 0});
await instance.createPromoKitty(362174512, coo, {from: coo,value: 0});
await instance.createPromoKitty(257154362, coo, {from: coo,value: 0});
await instance.createPromoKitty(772793534, coo, {from: coo,value: 0});
await instance.createPromoKitty(862175920, coo, {from: coo,value: 0});
await instance.createPromoKitty(634523280, coo, {from: coo,value: 0});
await instance.createPromoKitty(127466105, coo, {from: coo,value: 0});
await instance.createPromoKitty(700010314, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(19, 36, {from: coo});
await instance.breedWith(32, 1, {from: coo});
await instance.breedWith(34, 26, {from: coo});
await instance.breedWith(14, 9, {from: coo});
await instance.breedWith(20, 7, {from: coo});
await instance.breedWith(13, 29, {from: coo});
await instance.breedWith(28, 33, {from: coo});
await instance.breedWith(16, 23, {from: coo});
await instance.breedWith(37, 3, {from: coo});
await instance.breedWith(5, 38, {from: coo});
await instance.breedWith(40, 24, {from: coo});
await instance.breedWith(10, 15, {from: coo});
await instance.breedWith(25, 35, {from: coo});
await instance.breedWith(27, 21, {from: coo});
await instance.breedWith(39, 30, {from: coo});
await instance.breedWith(18, 4, {from: coo});
await instance.breedWith(6, 31, {from: coo});
await instance.breedWith(11, 22, {from: coo});
await instance.breedWith(17, 12, {from: coo});
await instance.breedWith(2, 8, {from: coo});
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
await instance.giveBirth(19);
await instance.giveBirth(32);
await instance.giveBirth(34);
await instance.giveBirth(14);
await instance.giveBirth(20);
await instance.giveBirth(13);
await instance.giveBirth(28);
await instance.giveBirth(16);
await instance.giveBirth(37);
await instance.giveBirth(5);
await instance.giveBirth(40);
await instance.giveBirth(10);
await instance.giveBirth(25);
await instance.giveBirth(27);
await instance.giveBirth(39);
await instance.giveBirth(18);
await instance.giveBirth(6);
await instance.giveBirth(11);
await instance.giveBirth(17);
await instance.giveBirth(2);
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
