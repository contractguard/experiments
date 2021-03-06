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
await instance.createPromoKitty(271908231, coo, {from: coo,value: 0});
await instance.createPromoKitty(820583591, coo, {from: coo,value: 0});
await instance.createPromoKitty(114590437, coo, {from: coo,value: 0});
await instance.createPromoKitty(76510521, coo, {from: coo,value: 0});
await instance.createPromoKitty(436494480, coo, {from: coo,value: 0});
await instance.createPromoKitty(962188438, coo, {from: coo,value: 0});
await instance.createPromoKitty(451593958, coo, {from: coo,value: 0});
await instance.createPromoKitty(961466978, coo, {from: coo,value: 0});
await instance.createPromoKitty(442454040, coo, {from: coo,value: 0});
await instance.createPromoKitty(801062405, coo, {from: coo,value: 0});
await instance.createPromoKitty(311669626, coo, {from: coo,value: 0});
await instance.createPromoKitty(612563820, coo, {from: coo,value: 0});
await instance.createPromoKitty(107205298, coo, {from: coo,value: 0});
await instance.createPromoKitty(967867970, coo, {from: coo,value: 0});
await instance.createPromoKitty(499893088, coo, {from: coo,value: 0});
await instance.createPromoKitty(693398842, coo, {from: coo,value: 0});
await instance.createPromoKitty(176425741, coo, {from: coo,value: 0});
await instance.createPromoKitty(715434132, coo, {from: coo,value: 0});
await instance.createPromoKitty(39978590, coo, {from: coo,value: 0});
await instance.createPromoKitty(223341719, coo, {from: coo,value: 0});
await instance.createPromoKitty(866105773, coo, {from: coo,value: 0});
await instance.createPromoKitty(770272136, coo, {from: coo,value: 0});
await instance.createPromoKitty(920116363, coo, {from: coo,value: 0});
await instance.createPromoKitty(979465078, coo, {from: coo,value: 0});
await instance.createPromoKitty(381901130, coo, {from: coo,value: 0});
await instance.createPromoKitty(30616991, coo, {from: coo,value: 0});
await instance.createPromoKitty(82799900, coo, {from: coo,value: 0});
await instance.createPromoKitty(462182941, coo, {from: coo,value: 0});
await instance.createPromoKitty(305828569, coo, {from: coo,value: 0});
await instance.createPromoKitty(701175458, coo, {from: coo,value: 0});
await instance.createPromoKitty(746409407, coo, {from: coo,value: 0});
await instance.createPromoKitty(815287090, coo, {from: coo,value: 0});
await instance.createPromoKitty(124989408, coo, {from: coo,value: 0});
await instance.createPromoKitty(301801167, coo, {from: coo,value: 0});
await instance.createPromoKitty(922921817, coo, {from: coo,value: 0});
await instance.createPromoKitty(698894339, coo, {from: coo,value: 0});
await instance.createPromoKitty(958718388, coo, {from: coo,value: 0});
await instance.createPromoKitty(19392918, coo, {from: coo,value: 0});
await instance.createPromoKitty(357321865, coo, {from: coo,value: 0});
await instance.createPromoKitty(170196307, coo, {from: coo,value: 0});
await instance.createPromoKitty(15562284, coo, {from: coo,value: 0});
await instance.createPromoKitty(56944857, coo, {from: coo,value: 0});
await instance.createPromoKitty(732456875, coo, {from: coo,value: 0});
await instance.createPromoKitty(783710282, coo, {from: coo,value: 0});
await instance.createPromoKitty(259405994, coo, {from: coo,value: 0});
await instance.createPromoKitty(130667867, coo, {from: coo,value: 0});
await instance.createPromoKitty(315203743, coo, {from: coo,value: 0});
await instance.createPromoKitty(907930834, coo, {from: coo,value: 0});
await instance.createPromoKitty(268786806, coo, {from: coo,value: 0});
await instance.createPromoKitty(91533638, coo, {from: coo,value: 0});
await instance.createPromoKitty(526082525, coo, {from: coo,value: 0});
await instance.createPromoKitty(365350092, coo, {from: coo,value: 0});
await instance.createPromoKitty(732422323, coo, {from: coo,value: 0});
await instance.createPromoKitty(774024691, coo, {from: coo,value: 0});
await instance.createPromoKitty(190114401, coo, {from: coo,value: 0});
await instance.createPromoKitty(314666097, coo, {from: coo,value: 0});
await instance.createPromoKitty(646119553, coo, {from: coo,value: 0});
await instance.createPromoKitty(458687229, coo, {from: coo,value: 0});
await instance.createPromoKitty(495920529, coo, {from: coo,value: 0});
await instance.createPromoKitty(350463167, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(4, 5, {from: coo});
await instance.breedWith(38, 34, {from: coo});
await instance.breedWith(2, 24, {from: coo});
await instance.breedWith(6, 21, {from: coo});
await instance.breedWith(7, 18, {from: coo});
await instance.breedWith(15, 8, {from: coo});
await instance.breedWith(16, 13, {from: coo});
await instance.breedWith(37, 30, {from: coo});
await instance.breedWith(14, 25, {from: coo});
await instance.breedWith(36, 10, {from: coo});
await instance.breedWith(39, 28, {from: coo});
await instance.breedWith(40, 35, {from: coo});
await instance.breedWith(3, 22, {from: coo});
await instance.breedWith(20, 19, {from: coo});
await instance.breedWith(17, 31, {from: coo});
await instance.breedWith(23, 26, {from: coo});
await instance.breedWith(9, 32, {from: coo});
await instance.breedWith(11, 12, {from: coo});
await instance.breedWith(1, 33, {from: coo});
await instance.breedWith(27, 29, {from: coo});
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
await instance.giveBirth(38);
await instance.giveBirth(2);
await instance.giveBirth(6);
await instance.giveBirth(7);
await instance.giveBirth(15);
await instance.giveBirth(16);
await instance.giveBirth(37);
await instance.giveBirth(14);
await instance.giveBirth(36);
await instance.giveBirth(39);
await instance.giveBirth(40);
await instance.giveBirth(3);
await instance.giveBirth(20);
await instance.giveBirth(17);
await instance.giveBirth(23);
await instance.giveBirth(9);
await instance.giveBirth(11);
await instance.giveBirth(1);
await instance.giveBirth(27);
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
