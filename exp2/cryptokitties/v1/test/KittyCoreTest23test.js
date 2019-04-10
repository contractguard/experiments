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
await instance.createPromoKitty(16666894, coo, {from: coo,value: 0});
await instance.createPromoKitty(721232434, coo, {from: coo,value: 0});
await instance.createPromoKitty(9122781, coo, {from: coo,value: 0});
await instance.createPromoKitty(821075454, coo, {from: coo,value: 0});
await instance.createPromoKitty(527586951, coo, {from: coo,value: 0});
await instance.createPromoKitty(984225282, coo, {from: coo,value: 0});
await instance.createPromoKitty(199422437, coo, {from: coo,value: 0});
await instance.createPromoKitty(585671865, coo, {from: coo,value: 0});
await instance.createPromoKitty(124983697, coo, {from: coo,value: 0});
await instance.createPromoKitty(881522949, coo, {from: coo,value: 0});
await instance.createPromoKitty(571163813, coo, {from: coo,value: 0});
await instance.createPromoKitty(138044877, coo, {from: coo,value: 0});
await instance.createPromoKitty(799552090, coo, {from: coo,value: 0});
await instance.createPromoKitty(633825284, coo, {from: coo,value: 0});
await instance.createPromoKitty(440923645, coo, {from: coo,value: 0});
await instance.createPromoKitty(338218235, coo, {from: coo,value: 0});
await instance.createPromoKitty(897234802, coo, {from: coo,value: 0});
await instance.createPromoKitty(429746189, coo, {from: coo,value: 0});
await instance.createPromoKitty(46664748, coo, {from: coo,value: 0});
await instance.createPromoKitty(666082579, coo, {from: coo,value: 0});
await instance.createPromoKitty(373220149, coo, {from: coo,value: 0});
await instance.createPromoKitty(308559853, coo, {from: coo,value: 0});
await instance.createPromoKitty(607669342, coo, {from: coo,value: 0});
await instance.createPromoKitty(320863259, coo, {from: coo,value: 0});
await instance.createPromoKitty(149507144, coo, {from: coo,value: 0});
await instance.createPromoKitty(423470178, coo, {from: coo,value: 0});
await instance.createPromoKitty(494330926, coo, {from: coo,value: 0});
await instance.createPromoKitty(996237267, coo, {from: coo,value: 0});
await instance.createPromoKitty(971362404, coo, {from: coo,value: 0});
await instance.createPromoKitty(644151411, coo, {from: coo,value: 0});
await instance.createPromoKitty(20706170, coo, {from: coo,value: 0});
await instance.createPromoKitty(562256035, coo, {from: coo,value: 0});
await instance.createPromoKitty(306993471, coo, {from: coo,value: 0});
await instance.createPromoKitty(17070155, coo, {from: coo,value: 0});
await instance.createPromoKitty(813827788, coo, {from: coo,value: 0});
await instance.createPromoKitty(579833728, coo, {from: coo,value: 0});
await instance.createPromoKitty(344292032, coo, {from: coo,value: 0});
await instance.createPromoKitty(975347286, coo, {from: coo,value: 0});
await instance.createPromoKitty(474410205, coo, {from: coo,value: 0});
await instance.createPromoKitty(535056347, coo, {from: coo,value: 0});
await instance.createPromoKitty(525272790, coo, {from: coo,value: 0});
await instance.createPromoKitty(884192702, coo, {from: coo,value: 0});
await instance.createPromoKitty(622605383, coo, {from: coo,value: 0});
await instance.createPromoKitty(552310894, coo, {from: coo,value: 0});
await instance.createPromoKitty(53541347, coo, {from: coo,value: 0});
await instance.createPromoKitty(280318088, coo, {from: coo,value: 0});
await instance.createPromoKitty(662447047, coo, {from: coo,value: 0});
await instance.createPromoKitty(669857556, coo, {from: coo,value: 0});
await instance.createPromoKitty(206454994, coo, {from: coo,value: 0});
await instance.createPromoKitty(128723734, coo, {from: coo,value: 0});
await instance.createPromoKitty(220057617, coo, {from: coo,value: 0});
await instance.createPromoKitty(838822504, coo, {from: coo,value: 0});
await instance.createPromoKitty(740128337, coo, {from: coo,value: 0});
await instance.createPromoKitty(220098627, coo, {from: coo,value: 0});
await instance.createPromoKitty(435818522, coo, {from: coo,value: 0});
await instance.createPromoKitty(343045740, coo, {from: coo,value: 0});
await instance.createPromoKitty(443185555, coo, {from: coo,value: 0});
await instance.createPromoKitty(2564728, coo, {from: coo,value: 0});
await instance.createPromoKitty(656970693, coo, {from: coo,value: 0});
await instance.createPromoKitty(500586007, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(11, 15, {from: coo});
await instance.breedWith(16, 17, {from: coo});
await instance.breedWith(40, 12, {from: coo});
await instance.breedWith(34, 9, {from: coo});
await instance.breedWith(39, 35, {from: coo});
await instance.breedWith(38, 28, {from: coo});
await instance.breedWith(10, 37, {from: coo});
await instance.breedWith(22, 13, {from: coo});
await instance.breedWith(7, 26, {from: coo});
await instance.breedWith(20, 18, {from: coo});
await instance.breedWith(23, 31, {from: coo});
await instance.breedWith(29, 6, {from: coo});
await instance.breedWith(8, 3, {from: coo});
await instance.breedWith(30, 5, {from: coo});
await instance.breedWith(32, 1, {from: coo});
await instance.breedWith(25, 2, {from: coo});
await instance.breedWith(14, 33, {from: coo});
await instance.breedWith(19, 4, {from: coo});
await instance.breedWith(21, 24, {from: coo});
await instance.breedWith(36, 27, {from: coo});
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
await instance.giveBirth(11);
await instance.giveBirth(16);
await instance.giveBirth(40);
await instance.giveBirth(34);
await instance.giveBirth(39);
await instance.giveBirth(38);
await instance.giveBirth(10);
await instance.giveBirth(22);
await instance.giveBirth(7);
await instance.giveBirth(20);
await instance.giveBirth(23);
await instance.giveBirth(29);
await instance.giveBirth(8);
await instance.giveBirth(30);
await instance.giveBirth(32);
await instance.giveBirth(25);
await instance.giveBirth(14);
await instance.giveBirth(19);
await instance.giveBirth(21);
await instance.giveBirth(36);
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
