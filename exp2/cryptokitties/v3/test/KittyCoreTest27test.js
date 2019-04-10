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
await instance.createPromoKitty(669712571, coo, {from: coo,value: 0});
await instance.createPromoKitty(452226701, coo, {from: coo,value: 0});
await instance.createPromoKitty(136639564, coo, {from: coo,value: 0});
await instance.createPromoKitty(686390158, coo, {from: coo,value: 0});
await instance.createPromoKitty(829139457, coo, {from: coo,value: 0});
await instance.createPromoKitty(971342295, coo, {from: coo,value: 0});
await instance.createPromoKitty(308147553, coo, {from: coo,value: 0});
await instance.createPromoKitty(656428173, coo, {from: coo,value: 0});
await instance.createPromoKitty(954935048, coo, {from: coo,value: 0});
await instance.createPromoKitty(103789462, coo, {from: coo,value: 0});
await instance.createPromoKitty(606122230, coo, {from: coo,value: 0});
await instance.createPromoKitty(305755991, coo, {from: coo,value: 0});
await instance.createPromoKitty(943519750, coo, {from: coo,value: 0});
await instance.createPromoKitty(75314308, coo, {from: coo,value: 0});
await instance.createPromoKitty(505285736, coo, {from: coo,value: 0});
await instance.createPromoKitty(98152262, coo, {from: coo,value: 0});
await instance.createPromoKitty(902371673, coo, {from: coo,value: 0});
await instance.createPromoKitty(190986481, coo, {from: coo,value: 0});
await instance.createPromoKitty(973273226, coo, {from: coo,value: 0});
await instance.createPromoKitty(955221731, coo, {from: coo,value: 0});
await instance.createPromoKitty(769275376, coo, {from: coo,value: 0});
await instance.createPromoKitty(605110464, coo, {from: coo,value: 0});
await instance.createPromoKitty(442286108, coo, {from: coo,value: 0});
await instance.createPromoKitty(12571261, coo, {from: coo,value: 0});
await instance.createPromoKitty(283781116, coo, {from: coo,value: 0});
await instance.createPromoKitty(180053390, coo, {from: coo,value: 0});
await instance.createPromoKitty(783625996, coo, {from: coo,value: 0});
await instance.createPromoKitty(417459512, coo, {from: coo,value: 0});
await instance.createPromoKitty(463740224, coo, {from: coo,value: 0});
await instance.createPromoKitty(578117715, coo, {from: coo,value: 0});
await instance.createPromoKitty(407175419, coo, {from: coo,value: 0});
await instance.createPromoKitty(340365921, coo, {from: coo,value: 0});
await instance.createPromoKitty(517830593, coo, {from: coo,value: 0});
await instance.createPromoKitty(175956435, coo, {from: coo,value: 0});
await instance.createPromoKitty(801418175, coo, {from: coo,value: 0});
await instance.createPromoKitty(665033805, coo, {from: coo,value: 0});
await instance.createPromoKitty(825601614, coo, {from: coo,value: 0});
await instance.createPromoKitty(116406935, coo, {from: coo,value: 0});
await instance.createPromoKitty(469831652, coo, {from: coo,value: 0});
await instance.createPromoKitty(649914327, coo, {from: coo,value: 0});
await instance.createPromoKitty(690912690, coo, {from: coo,value: 0});
await instance.createPromoKitty(903798591, coo, {from: coo,value: 0});
await instance.createPromoKitty(119487719, coo, {from: coo,value: 0});
await instance.createPromoKitty(396010072, coo, {from: coo,value: 0});
await instance.createPromoKitty(713325508, coo, {from: coo,value: 0});
await instance.createPromoKitty(217821628, coo, {from: coo,value: 0});
await instance.createPromoKitty(431508174, coo, {from: coo,value: 0});
await instance.createPromoKitty(367330946, coo, {from: coo,value: 0});
await instance.createPromoKitty(733066334, coo, {from: coo,value: 0});
await instance.createPromoKitty(609155288, coo, {from: coo,value: 0});
await instance.createPromoKitty(777805001, coo, {from: coo,value: 0});
await instance.createPromoKitty(133547108, coo, {from: coo,value: 0});
await instance.createPromoKitty(402037958, coo, {from: coo,value: 0});
await instance.createPromoKitty(726112305, coo, {from: coo,value: 0});
await instance.createPromoKitty(719461237, coo, {from: coo,value: 0});
await instance.createPromoKitty(198563887, coo, {from: coo,value: 0});
await instance.createPromoKitty(552854514, coo, {from: coo,value: 0});
await instance.createPromoKitty(17808123, coo, {from: coo,value: 0});
await instance.createPromoKitty(710501228, coo, {from: coo,value: 0});
await instance.createPromoKitty(110213318, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(38, 4, {from: coo});
await instance.breedWith(28, 9, {from: coo});
await instance.breedWith(17, 23, {from: coo});
await instance.breedWith(36, 19, {from: coo});
await instance.breedWith(5, 31, {from: coo});
await instance.breedWith(10, 39, {from: coo});
await instance.breedWith(15, 27, {from: coo});
await instance.breedWith(34, 25, {from: coo});
await instance.breedWith(3, 26, {from: coo});
await instance.breedWith(6, 2, {from: coo});
await instance.breedWith(16, 11, {from: coo});
await instance.breedWith(20, 8, {from: coo});
await instance.breedWith(32, 24, {from: coo});
await instance.breedWith(29, 18, {from: coo});
await instance.breedWith(7, 14, {from: coo});
await instance.breedWith(35, 13, {from: coo});
await instance.breedWith(22, 1, {from: coo});
await instance.breedWith(37, 30, {from: coo});
await instance.breedWith(33, 12, {from: coo});
await instance.breedWith(21, 40, {from: coo});
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
await instance.giveBirth(38);
await instance.giveBirth(28);
await instance.giveBirth(17);
await instance.giveBirth(36);
await instance.giveBirth(5);
await instance.giveBirth(10);
await instance.giveBirth(15);
await instance.giveBirth(34);
await instance.giveBirth(3);
await instance.giveBirth(6);
await instance.giveBirth(16);
await instance.giveBirth(20);
await instance.giveBirth(32);
await instance.giveBirth(29);
await instance.giveBirth(7);
await instance.giveBirth(35);
await instance.giveBirth(22);
await instance.giveBirth(37);
await instance.giveBirth(33);
await instance.giveBirth(21);
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
