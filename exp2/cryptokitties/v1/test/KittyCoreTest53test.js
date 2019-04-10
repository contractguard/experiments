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
await instance.createPromoKitty(598061390, coo, {from: coo,value: 0});
await instance.createPromoKitty(735887462, coo, {from: coo,value: 0});
await instance.createPromoKitty(858721097, coo, {from: coo,value: 0});
await instance.createPromoKitty(201427730, coo, {from: coo,value: 0});
await instance.createPromoKitty(576911098, coo, {from: coo,value: 0});
await instance.createPromoKitty(974598252, coo, {from: coo,value: 0});
await instance.createPromoKitty(730977997, coo, {from: coo,value: 0});
await instance.createPromoKitty(932317168, coo, {from: coo,value: 0});
await instance.createPromoKitty(156478859, coo, {from: coo,value: 0});
await instance.createPromoKitty(593642930, coo, {from: coo,value: 0});
await instance.createPromoKitty(753321490, coo, {from: coo,value: 0});
await instance.createPromoKitty(127758871, coo, {from: coo,value: 0});
await instance.createPromoKitty(877832211, coo, {from: coo,value: 0});
await instance.createPromoKitty(328104556, coo, {from: coo,value: 0});
await instance.createPromoKitty(300688130, coo, {from: coo,value: 0});
await instance.createPromoKitty(536130997, coo, {from: coo,value: 0});
await instance.createPromoKitty(943270538, coo, {from: coo,value: 0});
await instance.createPromoKitty(304279237, coo, {from: coo,value: 0});
await instance.createPromoKitty(192083790, coo, {from: coo,value: 0});
await instance.createPromoKitty(621178453, coo, {from: coo,value: 0});
await instance.createPromoKitty(855046031, coo, {from: coo,value: 0});
await instance.createPromoKitty(887226730, coo, {from: coo,value: 0});
await instance.createPromoKitty(237579419, coo, {from: coo,value: 0});
await instance.createPromoKitty(659496640, coo, {from: coo,value: 0});
await instance.createPromoKitty(38684840, coo, {from: coo,value: 0});
await instance.createPromoKitty(457896165, coo, {from: coo,value: 0});
await instance.createPromoKitty(412931793, coo, {from: coo,value: 0});
await instance.createPromoKitty(886818113, coo, {from: coo,value: 0});
await instance.createPromoKitty(235567661, coo, {from: coo,value: 0});
await instance.createPromoKitty(665045173, coo, {from: coo,value: 0});
await instance.createPromoKitty(926915630, coo, {from: coo,value: 0});
await instance.createPromoKitty(516235365, coo, {from: coo,value: 0});
await instance.createPromoKitty(74995400, coo, {from: coo,value: 0});
await instance.createPromoKitty(848308694, coo, {from: coo,value: 0});
await instance.createPromoKitty(448656609, coo, {from: coo,value: 0});
await instance.createPromoKitty(286978936, coo, {from: coo,value: 0});
await instance.createPromoKitty(390952306, coo, {from: coo,value: 0});
await instance.createPromoKitty(876301436, coo, {from: coo,value: 0});
await instance.createPromoKitty(783423427, coo, {from: coo,value: 0});
await instance.createPromoKitty(313275770, coo, {from: coo,value: 0});
await instance.createPromoKitty(674806384, coo, {from: coo,value: 0});
await instance.createPromoKitty(93722443, coo, {from: coo,value: 0});
await instance.createPromoKitty(637113172, coo, {from: coo,value: 0});
await instance.createPromoKitty(968030783, coo, {from: coo,value: 0});
await instance.createPromoKitty(551302555, coo, {from: coo,value: 0});
await instance.createPromoKitty(887330746, coo, {from: coo,value: 0});
await instance.createPromoKitty(66369135, coo, {from: coo,value: 0});
await instance.createPromoKitty(458880460, coo, {from: coo,value: 0});
await instance.createPromoKitty(755326693, coo, {from: coo,value: 0});
await instance.createPromoKitty(197431438, coo, {from: coo,value: 0});
await instance.createPromoKitty(442087613, coo, {from: coo,value: 0});
await instance.createPromoKitty(785175807, coo, {from: coo,value: 0});
await instance.createPromoKitty(149159586, coo, {from: coo,value: 0});
await instance.createPromoKitty(430739520, coo, {from: coo,value: 0});
await instance.createPromoKitty(991899242, coo, {from: coo,value: 0});
await instance.createPromoKitty(353187400, coo, {from: coo,value: 0});
await instance.createPromoKitty(977099307, coo, {from: coo,value: 0});
await instance.createPromoKitty(39388625, coo, {from: coo,value: 0});
await instance.createPromoKitty(802333365, coo, {from: coo,value: 0});
await instance.createPromoKitty(890836984, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(36, 28, {from: coo});
await instance.breedWith(20, 25, {from: coo});
await instance.breedWith(19, 31, {from: coo});
await instance.breedWith(13, 5, {from: coo});
await instance.breedWith(39, 24, {from: coo});
await instance.breedWith(7, 2, {from: coo});
await instance.breedWith(26, 38, {from: coo});
await instance.breedWith(22, 6, {from: coo});
await instance.breedWith(3, 29, {from: coo});
await instance.breedWith(9, 11, {from: coo});
await instance.breedWith(12, 15, {from: coo});
await instance.breedWith(21, 1, {from: coo});
await instance.breedWith(27, 16, {from: coo});
await instance.breedWith(8, 10, {from: coo});
await instance.breedWith(40, 32, {from: coo});
await instance.breedWith(30, 35, {from: coo});
await instance.breedWith(4, 23, {from: coo});
await instance.breedWith(18, 34, {from: coo});
await instance.breedWith(37, 17, {from: coo});
await instance.breedWith(33, 14, {from: coo});
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
await instance.giveBirth(36);
await instance.giveBirth(20);
await instance.giveBirth(19);
await instance.giveBirth(13);
await instance.giveBirth(39);
await instance.giveBirth(7);
await instance.giveBirth(26);
await instance.giveBirth(22);
await instance.giveBirth(3);
await instance.giveBirth(9);
await instance.giveBirth(12);
await instance.giveBirth(21);
await instance.giveBirth(27);
await instance.giveBirth(8);
await instance.giveBirth(40);
await instance.giveBirth(30);
await instance.giveBirth(4);
await instance.giveBirth(18);
await instance.giveBirth(37);
await instance.giveBirth(33);
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
