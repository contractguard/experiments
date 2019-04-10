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
await instance.createPromoKitty(704357243, coo, {from: coo,value: 0});
await instance.createPromoKitty(49794112, coo, {from: coo,value: 0});
await instance.createPromoKitty(35754076, coo, {from: coo,value: 0});
await instance.createPromoKitty(222699705, coo, {from: coo,value: 0});
await instance.createPromoKitty(603263974, coo, {from: coo,value: 0});
await instance.createPromoKitty(766316498, coo, {from: coo,value: 0});
await instance.createPromoKitty(339169815, coo, {from: coo,value: 0});
await instance.createPromoKitty(854016780, coo, {from: coo,value: 0});
await instance.createPromoKitty(119722067, coo, {from: coo,value: 0});
await instance.createPromoKitty(636944648, coo, {from: coo,value: 0});
await instance.createPromoKitty(828295642, coo, {from: coo,value: 0});
await instance.createPromoKitty(907577403, coo, {from: coo,value: 0});
await instance.createPromoKitty(50775829, coo, {from: coo,value: 0});
await instance.createPromoKitty(725925459, coo, {from: coo,value: 0});
await instance.createPromoKitty(356947024, coo, {from: coo,value: 0});
await instance.createPromoKitty(481086694, coo, {from: coo,value: 0});
await instance.createPromoKitty(26253726, coo, {from: coo,value: 0});
await instance.createPromoKitty(536941291, coo, {from: coo,value: 0});
await instance.createPromoKitty(981182300, coo, {from: coo,value: 0});
await instance.createPromoKitty(195241228, coo, {from: coo,value: 0});
await instance.createPromoKitty(889689481, coo, {from: coo,value: 0});
await instance.createPromoKitty(263869683, coo, {from: coo,value: 0});
await instance.createPromoKitty(786163118, coo, {from: coo,value: 0});
await instance.createPromoKitty(944023917, coo, {from: coo,value: 0});
await instance.createPromoKitty(528463438, coo, {from: coo,value: 0});
await instance.createPromoKitty(868424834, coo, {from: coo,value: 0});
await instance.createPromoKitty(736964343, coo, {from: coo,value: 0});
await instance.createPromoKitty(68312018, coo, {from: coo,value: 0});
await instance.createPromoKitty(528552338, coo, {from: coo,value: 0});
await instance.createPromoKitty(20454633, coo, {from: coo,value: 0});
await instance.createPromoKitty(658317408, coo, {from: coo,value: 0});
await instance.createPromoKitty(922029691, coo, {from: coo,value: 0});
await instance.createPromoKitty(161797729, coo, {from: coo,value: 0});
await instance.createPromoKitty(695480670, coo, {from: coo,value: 0});
await instance.createPromoKitty(169758943, coo, {from: coo,value: 0});
await instance.createPromoKitty(909119035, coo, {from: coo,value: 0});
await instance.createPromoKitty(165709603, coo, {from: coo,value: 0});
await instance.createPromoKitty(485209946, coo, {from: coo,value: 0});
await instance.createPromoKitty(624032113, coo, {from: coo,value: 0});
await instance.createPromoKitty(912574456, coo, {from: coo,value: 0});
await instance.createPromoKitty(243809412, coo, {from: coo,value: 0});
await instance.createPromoKitty(944188498, coo, {from: coo,value: 0});
await instance.createPromoKitty(781325720, coo, {from: coo,value: 0});
await instance.createPromoKitty(850534929, coo, {from: coo,value: 0});
await instance.createPromoKitty(789810178, coo, {from: coo,value: 0});
await instance.createPromoKitty(132056104, coo, {from: coo,value: 0});
await instance.createPromoKitty(356495712, coo, {from: coo,value: 0});
await instance.createPromoKitty(352169739, coo, {from: coo,value: 0});
await instance.createPromoKitty(43517086, coo, {from: coo,value: 0});
await instance.createPromoKitty(690822451, coo, {from: coo,value: 0});
await instance.createPromoKitty(734980692, coo, {from: coo,value: 0});
await instance.createPromoKitty(798430979, coo, {from: coo,value: 0});
await instance.createPromoKitty(57463512, coo, {from: coo,value: 0});
await instance.createPromoKitty(255060387, coo, {from: coo,value: 0});
await instance.createPromoKitty(333279759, coo, {from: coo,value: 0});
await instance.createPromoKitty(242028629, coo, {from: coo,value: 0});
await instance.createPromoKitty(418704744, coo, {from: coo,value: 0});
await instance.createPromoKitty(548041494, coo, {from: coo,value: 0});
await instance.createPromoKitty(146464469, coo, {from: coo,value: 0});
await instance.createPromoKitty(211517225, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(29, 23, {from: coo});
await instance.breedWith(8, 16, {from: coo});
await instance.breedWith(25, 35, {from: coo});
await instance.breedWith(18, 27, {from: coo});
await instance.breedWith(10, 32, {from: coo});
await instance.breedWith(28, 19, {from: coo});
await instance.breedWith(3, 37, {from: coo});
await instance.breedWith(14, 20, {from: coo});
await instance.breedWith(21, 11, {from: coo});
await instance.breedWith(31, 6, {from: coo});
await instance.breedWith(15, 36, {from: coo});
await instance.breedWith(39, 22, {from: coo});
await instance.breedWith(40, 17, {from: coo});
await instance.breedWith(2, 7, {from: coo});
await instance.breedWith(34, 33, {from: coo});
await instance.breedWith(5, 26, {from: coo});
await instance.breedWith(38, 30, {from: coo});
await instance.breedWith(13, 9, {from: coo});
await instance.breedWith(24, 4, {from: coo});
await instance.breedWith(1, 12, {from: coo});
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
await instance.giveBirth(29);
await instance.giveBirth(8);
await instance.giveBirth(25);
await instance.giveBirth(18);
await instance.giveBirth(10);
await instance.giveBirth(28);
await instance.giveBirth(3);
await instance.giveBirth(14);
await instance.giveBirth(21);
await instance.giveBirth(31);
await instance.giveBirth(15);
await instance.giveBirth(39);
await instance.giveBirth(40);
await instance.giveBirth(2);
await instance.giveBirth(34);
await instance.giveBirth(5);
await instance.giveBirth(38);
await instance.giveBirth(13);
await instance.giveBirth(24);
await instance.giveBirth(1);
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
