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
await instance.createPromoKitty(557749414, coo, {from: coo,value: 0});
await instance.createPromoKitty(537257054, coo, {from: coo,value: 0});
await instance.createPromoKitty(147984941, coo, {from: coo,value: 0});
await instance.createPromoKitty(815696959, coo, {from: coo,value: 0});
await instance.createPromoKitty(486627771, coo, {from: coo,value: 0});
await instance.createPromoKitty(6731657, coo, {from: coo,value: 0});
await instance.createPromoKitty(406051442, coo, {from: coo,value: 0});
await instance.createPromoKitty(664420871, coo, {from: coo,value: 0});
await instance.createPromoKitty(97658516, coo, {from: coo,value: 0});
await instance.createPromoKitty(912133780, coo, {from: coo,value: 0});
await instance.createPromoKitty(518703106, coo, {from: coo,value: 0});
await instance.createPromoKitty(475744397, coo, {from: coo,value: 0});
await instance.createPromoKitty(31204593, coo, {from: coo,value: 0});
await instance.createPromoKitty(52009340, coo, {from: coo,value: 0});
await instance.createPromoKitty(916419729, coo, {from: coo,value: 0});
await instance.createPromoKitty(261892656, coo, {from: coo,value: 0});
await instance.createPromoKitty(434386392, coo, {from: coo,value: 0});
await instance.createPromoKitty(985869408, coo, {from: coo,value: 0});
await instance.createPromoKitty(309008932, coo, {from: coo,value: 0});
await instance.createPromoKitty(977953506, coo, {from: coo,value: 0});
await instance.createPromoKitty(180991121, coo, {from: coo,value: 0});
await instance.createPromoKitty(220509437, coo, {from: coo,value: 0});
await instance.createPromoKitty(203894506, coo, {from: coo,value: 0});
await instance.createPromoKitty(950030028, coo, {from: coo,value: 0});
await instance.createPromoKitty(547143598, coo, {from: coo,value: 0});
await instance.createPromoKitty(697860418, coo, {from: coo,value: 0});
await instance.createPromoKitty(728696382, coo, {from: coo,value: 0});
await instance.createPromoKitty(110218359, coo, {from: coo,value: 0});
await instance.createPromoKitty(809824894, coo, {from: coo,value: 0});
await instance.createPromoKitty(396397334, coo, {from: coo,value: 0});
await instance.createPromoKitty(704894814, coo, {from: coo,value: 0});
await instance.createPromoKitty(208914784, coo, {from: coo,value: 0});
await instance.createPromoKitty(696108488, coo, {from: coo,value: 0});
await instance.createPromoKitty(307753492, coo, {from: coo,value: 0});
await instance.createPromoKitty(861738201, coo, {from: coo,value: 0});
await instance.createPromoKitty(602726820, coo, {from: coo,value: 0});
await instance.createPromoKitty(681125930, coo, {from: coo,value: 0});
await instance.createPromoKitty(894927158, coo, {from: coo,value: 0});
await instance.createPromoKitty(95745666, coo, {from: coo,value: 0});
await instance.createPromoKitty(487311525, coo, {from: coo,value: 0});
await instance.createPromoKitty(48299105, coo, {from: coo,value: 0});
await instance.createPromoKitty(151028695, coo, {from: coo,value: 0});
await instance.createPromoKitty(906083928, coo, {from: coo,value: 0});
await instance.createPromoKitty(287998417, coo, {from: coo,value: 0});
await instance.createPromoKitty(870319305, coo, {from: coo,value: 0});
await instance.createPromoKitty(122061982, coo, {from: coo,value: 0});
await instance.createPromoKitty(507721084, coo, {from: coo,value: 0});
await instance.createPromoKitty(932987053, coo, {from: coo,value: 0});
await instance.createPromoKitty(236973618, coo, {from: coo,value: 0});
await instance.createPromoKitty(679076909, coo, {from: coo,value: 0});
await instance.createPromoKitty(626715990, coo, {from: coo,value: 0});
await instance.createPromoKitty(559469846, coo, {from: coo,value: 0});
await instance.createPromoKitty(589822148, coo, {from: coo,value: 0});
await instance.createPromoKitty(573702560, coo, {from: coo,value: 0});
await instance.createPromoKitty(558107904, coo, {from: coo,value: 0});
await instance.createPromoKitty(546193094, coo, {from: coo,value: 0});
await instance.createPromoKitty(977993897, coo, {from: coo,value: 0});
await instance.createPromoKitty(797608328, coo, {from: coo,value: 0});
await instance.createPromoKitty(476231177, coo, {from: coo,value: 0});
await instance.createPromoKitty(55230042, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(1, 40, {from: coo});
await instance.breedWith(10, 15, {from: coo});
await instance.breedWith(16, 34, {from: coo});
await instance.breedWith(25, 18, {from: coo});
await instance.breedWith(39, 7, {from: coo});
await instance.breedWith(3, 6, {from: coo});
await instance.breedWith(14, 22, {from: coo});
await instance.breedWith(24, 30, {from: coo});
await instance.breedWith(36, 33, {from: coo});
await instance.breedWith(38, 17, {from: coo});
await instance.breedWith(23, 11, {from: coo});
await instance.breedWith(2, 9, {from: coo});
await instance.breedWith(32, 28, {from: coo});
await instance.breedWith(4, 31, {from: coo});
await instance.breedWith(20, 8, {from: coo});
await instance.breedWith(37, 35, {from: coo});
await instance.breedWith(27, 19, {from: coo});
await instance.breedWith(26, 12, {from: coo});
await instance.breedWith(13, 29, {from: coo});
await instance.breedWith(5, 21, {from: coo});
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
await instance.giveBirth(1);
await instance.giveBirth(10);
await instance.giveBirth(16);
await instance.giveBirth(25);
await instance.giveBirth(39);
await instance.giveBirth(3);
await instance.giveBirth(14);
await instance.giveBirth(24);
await instance.giveBirth(36);
await instance.giveBirth(38);
await instance.giveBirth(23);
await instance.giveBirth(2);
await instance.giveBirth(32);
await instance.giveBirth(4);
await instance.giveBirth(20);
await instance.giveBirth(37);
await instance.giveBirth(27);
await instance.giveBirth(26);
await instance.giveBirth(13);
await instance.giveBirth(5);
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
