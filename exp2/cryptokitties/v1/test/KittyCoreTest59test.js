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
await instance.createPromoKitty(128031346, coo, {from: coo,value: 0});
await instance.createPromoKitty(161617150, coo, {from: coo,value: 0});
await instance.createPromoKitty(411191604, coo, {from: coo,value: 0});
await instance.createPromoKitty(739621258, coo, {from: coo,value: 0});
await instance.createPromoKitty(690135409, coo, {from: coo,value: 0});
await instance.createPromoKitty(116567191, coo, {from: coo,value: 0});
await instance.createPromoKitty(910581533, coo, {from: coo,value: 0});
await instance.createPromoKitty(859286043, coo, {from: coo,value: 0});
await instance.createPromoKitty(887317383, coo, {from: coo,value: 0});
await instance.createPromoKitty(653412165, coo, {from: coo,value: 0});
await instance.createPromoKitty(949451582, coo, {from: coo,value: 0});
await instance.createPromoKitty(831755518, coo, {from: coo,value: 0});
await instance.createPromoKitty(160478700, coo, {from: coo,value: 0});
await instance.createPromoKitty(630930737, coo, {from: coo,value: 0});
await instance.createPromoKitty(32188300, coo, {from: coo,value: 0});
await instance.createPromoKitty(168251619, coo, {from: coo,value: 0});
await instance.createPromoKitty(516547605, coo, {from: coo,value: 0});
await instance.createPromoKitty(477143726, coo, {from: coo,value: 0});
await instance.createPromoKitty(931365585, coo, {from: coo,value: 0});
await instance.createPromoKitty(298098378, coo, {from: coo,value: 0});
await instance.createPromoKitty(972818801, coo, {from: coo,value: 0});
await instance.createPromoKitty(309697073, coo, {from: coo,value: 0});
await instance.createPromoKitty(221124811, coo, {from: coo,value: 0});
await instance.createPromoKitty(662337295, coo, {from: coo,value: 0});
await instance.createPromoKitty(685891104, coo, {from: coo,value: 0});
await instance.createPromoKitty(834364001, coo, {from: coo,value: 0});
await instance.createPromoKitty(136608394, coo, {from: coo,value: 0});
await instance.createPromoKitty(422742937, coo, {from: coo,value: 0});
await instance.createPromoKitty(681052589, coo, {from: coo,value: 0});
await instance.createPromoKitty(634538076, coo, {from: coo,value: 0});
await instance.createPromoKitty(730676974, coo, {from: coo,value: 0});
await instance.createPromoKitty(340859980, coo, {from: coo,value: 0});
await instance.createPromoKitty(225870442, coo, {from: coo,value: 0});
await instance.createPromoKitty(643122754, coo, {from: coo,value: 0});
await instance.createPromoKitty(475724456, coo, {from: coo,value: 0});
await instance.createPromoKitty(859289269, coo, {from: coo,value: 0});
await instance.createPromoKitty(430394966, coo, {from: coo,value: 0});
await instance.createPromoKitty(481782661, coo, {from: coo,value: 0});
await instance.createPromoKitty(838580663, coo, {from: coo,value: 0});
await instance.createPromoKitty(272841086, coo, {from: coo,value: 0});
await instance.createPromoKitty(635606694, coo, {from: coo,value: 0});
await instance.createPromoKitty(602644316, coo, {from: coo,value: 0});
await instance.createPromoKitty(961396982, coo, {from: coo,value: 0});
await instance.createPromoKitty(646544854, coo, {from: coo,value: 0});
await instance.createPromoKitty(827838210, coo, {from: coo,value: 0});
await instance.createPromoKitty(110253627, coo, {from: coo,value: 0});
await instance.createPromoKitty(326639147, coo, {from: coo,value: 0});
await instance.createPromoKitty(446449132, coo, {from: coo,value: 0});
await instance.createPromoKitty(159445055, coo, {from: coo,value: 0});
await instance.createPromoKitty(41523395, coo, {from: coo,value: 0});
await instance.createPromoKitty(211450501, coo, {from: coo,value: 0});
await instance.createPromoKitty(625037418, coo, {from: coo,value: 0});
await instance.createPromoKitty(185739096, coo, {from: coo,value: 0});
await instance.createPromoKitty(483666771, coo, {from: coo,value: 0});
await instance.createPromoKitty(573328204, coo, {from: coo,value: 0});
await instance.createPromoKitty(483874257, coo, {from: coo,value: 0});
await instance.createPromoKitty(539188018, coo, {from: coo,value: 0});
await instance.createPromoKitty(384116947, coo, {from: coo,value: 0});
await instance.createPromoKitty(140404778, coo, {from: coo,value: 0});
await instance.createPromoKitty(914840849, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(30, 27, {from: coo});
await instance.breedWith(9, 3, {from: coo});
await instance.breedWith(7, 31, {from: coo});
await instance.breedWith(36, 37, {from: coo});
await instance.breedWith(24, 28, {from: coo});
await instance.breedWith(13, 8, {from: coo});
await instance.breedWith(39, 17, {from: coo});
await instance.breedWith(21, 20, {from: coo});
await instance.breedWith(5, 32, {from: coo});
await instance.breedWith(14, 29, {from: coo});
await instance.breedWith(10, 23, {from: coo});
await instance.breedWith(11, 16, {from: coo});
await instance.breedWith(38, 35, {from: coo});
await instance.breedWith(18, 40, {from: coo});
await instance.breedWith(2, 15, {from: coo});
await instance.breedWith(19, 1, {from: coo});
await instance.breedWith(34, 6, {from: coo});
await instance.breedWith(33, 26, {from: coo});
await instance.breedWith(25, 22, {from: coo});
await instance.breedWith(4, 12, {from: coo});
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
await instance.giveBirth(30);
await instance.giveBirth(9);
await instance.giveBirth(7);
await instance.giveBirth(36);
await instance.giveBirth(24);
await instance.giveBirth(13);
await instance.giveBirth(39);
await instance.giveBirth(21);
await instance.giveBirth(5);
await instance.giveBirth(14);
await instance.giveBirth(10);
await instance.giveBirth(11);
await instance.giveBirth(38);
await instance.giveBirth(18);
await instance.giveBirth(2);
await instance.giveBirth(19);
await instance.giveBirth(34);
await instance.giveBirth(33);
await instance.giveBirth(25);
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
