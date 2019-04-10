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
await instance.createPromoKitty(970068622, coo, {from: coo,value: 0});
await instance.createPromoKitty(298081115, coo, {from: coo,value: 0});
await instance.createPromoKitty(937736864, coo, {from: coo,value: 0});
await instance.createPromoKitty(978227876, coo, {from: coo,value: 0});
await instance.createPromoKitty(557381896, coo, {from: coo,value: 0});
await instance.createPromoKitty(553623735, coo, {from: coo,value: 0});
await instance.createPromoKitty(591484082, coo, {from: coo,value: 0});
await instance.createPromoKitty(170863753, coo, {from: coo,value: 0});
await instance.createPromoKitty(722971807, coo, {from: coo,value: 0});
await instance.createPromoKitty(6434365, coo, {from: coo,value: 0});
await instance.createPromoKitty(789226596, coo, {from: coo,value: 0});
await instance.createPromoKitty(784943831, coo, {from: coo,value: 0});
await instance.createPromoKitty(519427442, coo, {from: coo,value: 0});
await instance.createPromoKitty(783420513, coo, {from: coo,value: 0});
await instance.createPromoKitty(827658921, coo, {from: coo,value: 0});
await instance.createPromoKitty(139668660, coo, {from: coo,value: 0});
await instance.createPromoKitty(959575673, coo, {from: coo,value: 0});
await instance.createPromoKitty(108288251, coo, {from: coo,value: 0});
await instance.createPromoKitty(788137578, coo, {from: coo,value: 0});
await instance.createPromoKitty(382150252, coo, {from: coo,value: 0});
await instance.createPromoKitty(650813435, coo, {from: coo,value: 0});
await instance.createPromoKitty(238137344, coo, {from: coo,value: 0});
await instance.createPromoKitty(310406806, coo, {from: coo,value: 0});
await instance.createPromoKitty(894013661, coo, {from: coo,value: 0});
await instance.createPromoKitty(61615492, coo, {from: coo,value: 0});
await instance.createPromoKitty(275488753, coo, {from: coo,value: 0});
await instance.createPromoKitty(780367331, coo, {from: coo,value: 0});
await instance.createPromoKitty(65165656, coo, {from: coo,value: 0});
await instance.createPromoKitty(739886951, coo, {from: coo,value: 0});
await instance.createPromoKitty(862956695, coo, {from: coo,value: 0});
await instance.createPromoKitty(578805724, coo, {from: coo,value: 0});
await instance.createPromoKitty(486031698, coo, {from: coo,value: 0});
await instance.createPromoKitty(388886882, coo, {from: coo,value: 0});
await instance.createPromoKitty(519954564, coo, {from: coo,value: 0});
await instance.createPromoKitty(87613689, coo, {from: coo,value: 0});
await instance.createPromoKitty(605791066, coo, {from: coo,value: 0});
await instance.createPromoKitty(540846151, coo, {from: coo,value: 0});
await instance.createPromoKitty(801188432, coo, {from: coo,value: 0});
await instance.createPromoKitty(760975809, coo, {from: coo,value: 0});
await instance.createPromoKitty(733544898, coo, {from: coo,value: 0});
await instance.createPromoKitty(814939421, coo, {from: coo,value: 0});
await instance.createPromoKitty(40850936, coo, {from: coo,value: 0});
await instance.createPromoKitty(697699120, coo, {from: coo,value: 0});
await instance.createPromoKitty(178434442, coo, {from: coo,value: 0});
await instance.createPromoKitty(315652197, coo, {from: coo,value: 0});
await instance.createPromoKitty(246817837, coo, {from: coo,value: 0});
await instance.createPromoKitty(906337004, coo, {from: coo,value: 0});
await instance.createPromoKitty(504005213, coo, {from: coo,value: 0});
await instance.createPromoKitty(749327387, coo, {from: coo,value: 0});
await instance.createPromoKitty(51283123, coo, {from: coo,value: 0});
await instance.createPromoKitty(110272177, coo, {from: coo,value: 0});
await instance.createPromoKitty(500204095, coo, {from: coo,value: 0});
await instance.createPromoKitty(915912195, coo, {from: coo,value: 0});
await instance.createPromoKitty(448086391, coo, {from: coo,value: 0});
await instance.createPromoKitty(168868541, coo, {from: coo,value: 0});
await instance.createPromoKitty(530063676, coo, {from: coo,value: 0});
await instance.createPromoKitty(360134694, coo, {from: coo,value: 0});
await instance.createPromoKitty(505832059, coo, {from: coo,value: 0});
await instance.createPromoKitty(851299364, coo, {from: coo,value: 0});
await instance.createPromoKitty(824844975, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(11, 6, {from: coo});
await instance.breedWith(1, 17, {from: coo});
await instance.breedWith(36, 24, {from: coo});
await instance.breedWith(12, 8, {from: coo});
await instance.breedWith(26, 19, {from: coo});
await instance.breedWith(3, 9, {from: coo});
await instance.breedWith(18, 15, {from: coo});
await instance.breedWith(34, 5, {from: coo});
await instance.breedWith(27, 29, {from: coo});
await instance.breedWith(2, 23, {from: coo});
await instance.breedWith(33, 4, {from: coo});
await instance.breedWith(14, 7, {from: coo});
await instance.breedWith(39, 21, {from: coo});
await instance.breedWith(32, 10, {from: coo});
await instance.breedWith(35, 40, {from: coo});
await instance.breedWith(38, 37, {from: coo});
await instance.breedWith(13, 20, {from: coo});
await instance.breedWith(22, 16, {from: coo});
await instance.breedWith(25, 31, {from: coo});
await instance.breedWith(28, 30, {from: coo});
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
await instance.giveBirth(11);
await instance.giveBirth(1);
await instance.giveBirth(36);
await instance.giveBirth(12);
await instance.giveBirth(26);
await instance.giveBirth(3);
await instance.giveBirth(18);
await instance.giveBirth(34);
await instance.giveBirth(27);
await instance.giveBirth(2);
await instance.giveBirth(33);
await instance.giveBirth(14);
await instance.giveBirth(39);
await instance.giveBirth(32);
await instance.giveBirth(35);
await instance.giveBirth(38);
await instance.giveBirth(13);
await instance.giveBirth(22);
await instance.giveBirth(25);
await instance.giveBirth(28);
});
it('test 5',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('test 6',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('test 7',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('test 8',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('test 9',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('acctack', async() => {
 await instance._breedWith(57,58,{from:coo});
});
});
