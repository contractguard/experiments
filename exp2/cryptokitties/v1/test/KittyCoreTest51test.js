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
await instance.createPromoKitty(249929003, coo, {from: coo,value: 0});
await instance.createPromoKitty(22998570, coo, {from: coo,value: 0});
await instance.createPromoKitty(813192532, coo, {from: coo,value: 0});
await instance.createPromoKitty(280616333, coo, {from: coo,value: 0});
await instance.createPromoKitty(362022505, coo, {from: coo,value: 0});
await instance.createPromoKitty(888856883, coo, {from: coo,value: 0});
await instance.createPromoKitty(216558415, coo, {from: coo,value: 0});
await instance.createPromoKitty(550831788, coo, {from: coo,value: 0});
await instance.createPromoKitty(992829824, coo, {from: coo,value: 0});
await instance.createPromoKitty(850021162, coo, {from: coo,value: 0});
await instance.createPromoKitty(713559245, coo, {from: coo,value: 0});
await instance.createPromoKitty(682671686, coo, {from: coo,value: 0});
await instance.createPromoKitty(591880736, coo, {from: coo,value: 0});
await instance.createPromoKitty(491747593, coo, {from: coo,value: 0});
await instance.createPromoKitty(816766964, coo, {from: coo,value: 0});
await instance.createPromoKitty(139217184, coo, {from: coo,value: 0});
await instance.createPromoKitty(3323665, coo, {from: coo,value: 0});
await instance.createPromoKitty(294055760, coo, {from: coo,value: 0});
await instance.createPromoKitty(159916189, coo, {from: coo,value: 0});
await instance.createPromoKitty(302538786, coo, {from: coo,value: 0});
await instance.createPromoKitty(456973918, coo, {from: coo,value: 0});
await instance.createPromoKitty(470017082, coo, {from: coo,value: 0});
await instance.createPromoKitty(510159453, coo, {from: coo,value: 0});
await instance.createPromoKitty(438854039, coo, {from: coo,value: 0});
await instance.createPromoKitty(465656224, coo, {from: coo,value: 0});
await instance.createPromoKitty(41432302, coo, {from: coo,value: 0});
await instance.createPromoKitty(291779381, coo, {from: coo,value: 0});
await instance.createPromoKitty(730285047, coo, {from: coo,value: 0});
await instance.createPromoKitty(764738868, coo, {from: coo,value: 0});
await instance.createPromoKitty(29689000, coo, {from: coo,value: 0});
await instance.createPromoKitty(510610818, coo, {from: coo,value: 0});
await instance.createPromoKitty(150772082, coo, {from: coo,value: 0});
await instance.createPromoKitty(969367875, coo, {from: coo,value: 0});
await instance.createPromoKitty(637071928, coo, {from: coo,value: 0});
await instance.createPromoKitty(986607859, coo, {from: coo,value: 0});
await instance.createPromoKitty(477514707, coo, {from: coo,value: 0});
await instance.createPromoKitty(963234687, coo, {from: coo,value: 0});
await instance.createPromoKitty(402830350, coo, {from: coo,value: 0});
await instance.createPromoKitty(2973289, coo, {from: coo,value: 0});
await instance.createPromoKitty(797764754, coo, {from: coo,value: 0});
await instance.createPromoKitty(439892132, coo, {from: coo,value: 0});
await instance.createPromoKitty(583335033, coo, {from: coo,value: 0});
await instance.createPromoKitty(79473421, coo, {from: coo,value: 0});
await instance.createPromoKitty(95692571, coo, {from: coo,value: 0});
await instance.createPromoKitty(246819015, coo, {from: coo,value: 0});
await instance.createPromoKitty(250895994, coo, {from: coo,value: 0});
await instance.createPromoKitty(540451325, coo, {from: coo,value: 0});
await instance.createPromoKitty(710185090, coo, {from: coo,value: 0});
await instance.createPromoKitty(665065381, coo, {from: coo,value: 0});
await instance.createPromoKitty(369801200, coo, {from: coo,value: 0});
await instance.createPromoKitty(779623621, coo, {from: coo,value: 0});
await instance.createPromoKitty(130748318, coo, {from: coo,value: 0});
await instance.createPromoKitty(582464198, coo, {from: coo,value: 0});
await instance.createPromoKitty(202575707, coo, {from: coo,value: 0});
await instance.createPromoKitty(643272765, coo, {from: coo,value: 0});
await instance.createPromoKitty(201259725, coo, {from: coo,value: 0});
await instance.createPromoKitty(617203741, coo, {from: coo,value: 0});
await instance.createPromoKitty(976312691, coo, {from: coo,value: 0});
await instance.createPromoKitty(552585272, coo, {from: coo,value: 0});
await instance.createPromoKitty(931578644, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(20, 23, {from: coo});
await instance.breedWith(25, 40, {from: coo});
await instance.breedWith(37, 13, {from: coo});
await instance.breedWith(7, 18, {from: coo});
await instance.breedWith(36, 3, {from: coo});
await instance.breedWith(39, 12, {from: coo});
await instance.breedWith(9, 33, {from: coo});
await instance.breedWith(1, 4, {from: coo});
await instance.breedWith(35, 24, {from: coo});
await instance.breedWith(8, 14, {from: coo});
await instance.breedWith(30, 28, {from: coo});
await instance.breedWith(38, 6, {from: coo});
await instance.breedWith(27, 17, {from: coo});
await instance.breedWith(16, 31, {from: coo});
await instance.breedWith(22, 34, {from: coo});
await instance.breedWith(10, 29, {from: coo});
await instance.breedWith(26, 5, {from: coo});
await instance.breedWith(11, 21, {from: coo});
await instance.breedWith(32, 2, {from: coo});
await instance.breedWith(19, 15, {from: coo});
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
await instance.giveBirth(25);
await instance.giveBirth(37);
await instance.giveBirth(7);
await instance.giveBirth(36);
await instance.giveBirth(39);
await instance.giveBirth(9);
await instance.giveBirth(1);
await instance.giveBirth(35);
await instance.giveBirth(8);
await instance.giveBirth(30);
await instance.giveBirth(38);
await instance.giveBirth(27);
await instance.giveBirth(16);
await instance.giveBirth(22);
await instance.giveBirth(10);
await instance.giveBirth(26);
await instance.giveBirth(11);
await instance.giveBirth(32);
await instance.giveBirth(19);
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
