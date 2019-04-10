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
await instance.createPromoKitty(114382909, coo, {from: coo,value: 0});
await instance.createPromoKitty(154011356, coo, {from: coo,value: 0});
await instance.createPromoKitty(558440693, coo, {from: coo,value: 0});
await instance.createPromoKitty(458155978, coo, {from: coo,value: 0});
await instance.createPromoKitty(734476221, coo, {from: coo,value: 0});
await instance.createPromoKitty(190305345, coo, {from: coo,value: 0});
await instance.createPromoKitty(241898936, coo, {from: coo,value: 0});
await instance.createPromoKitty(24485426, coo, {from: coo,value: 0});
await instance.createPromoKitty(557905453, coo, {from: coo,value: 0});
await instance.createPromoKitty(27799813, coo, {from: coo,value: 0});
await instance.createPromoKitty(993580952, coo, {from: coo,value: 0});
await instance.createPromoKitty(957368552, coo, {from: coo,value: 0});
await instance.createPromoKitty(20273400, coo, {from: coo,value: 0});
await instance.createPromoKitty(638694413, coo, {from: coo,value: 0});
await instance.createPromoKitty(974445803, coo, {from: coo,value: 0});
await instance.createPromoKitty(246903038, coo, {from: coo,value: 0});
await instance.createPromoKitty(233627249, coo, {from: coo,value: 0});
await instance.createPromoKitty(403452758, coo, {from: coo,value: 0});
await instance.createPromoKitty(743949200, coo, {from: coo,value: 0});
await instance.createPromoKitty(184046939, coo, {from: coo,value: 0});
await instance.createPromoKitty(335782390, coo, {from: coo,value: 0});
await instance.createPromoKitty(858456774, coo, {from: coo,value: 0});
await instance.createPromoKitty(143194477, coo, {from: coo,value: 0});
await instance.createPromoKitty(494148361, coo, {from: coo,value: 0});
await instance.createPromoKitty(771557431, coo, {from: coo,value: 0});
await instance.createPromoKitty(997385904, coo, {from: coo,value: 0});
await instance.createPromoKitty(38398124, coo, {from: coo,value: 0});
await instance.createPromoKitty(223522513, coo, {from: coo,value: 0});
await instance.createPromoKitty(560494050, coo, {from: coo,value: 0});
await instance.createPromoKitty(185586158, coo, {from: coo,value: 0});
await instance.createPromoKitty(574648587, coo, {from: coo,value: 0});
await instance.createPromoKitty(412314825, coo, {from: coo,value: 0});
await instance.createPromoKitty(143497889, coo, {from: coo,value: 0});
await instance.createPromoKitty(92187259, coo, {from: coo,value: 0});
await instance.createPromoKitty(669442849, coo, {from: coo,value: 0});
await instance.createPromoKitty(515378573, coo, {from: coo,value: 0});
await instance.createPromoKitty(337266605, coo, {from: coo,value: 0});
await instance.createPromoKitty(411321292, coo, {from: coo,value: 0});
await instance.createPromoKitty(212490283, coo, {from: coo,value: 0});
await instance.createPromoKitty(645189934, coo, {from: coo,value: 0});
await instance.createPromoKitty(349813691, coo, {from: coo,value: 0});
await instance.createPromoKitty(698135371, coo, {from: coo,value: 0});
await instance.createPromoKitty(361250602, coo, {from: coo,value: 0});
await instance.createPromoKitty(749676994, coo, {from: coo,value: 0});
await instance.createPromoKitty(657894805, coo, {from: coo,value: 0});
await instance.createPromoKitty(548775051, coo, {from: coo,value: 0});
await instance.createPromoKitty(842530548, coo, {from: coo,value: 0});
await instance.createPromoKitty(201771111, coo, {from: coo,value: 0});
await instance.createPromoKitty(782371058, coo, {from: coo,value: 0});
await instance.createPromoKitty(21784704, coo, {from: coo,value: 0});
await instance.createPromoKitty(672233530, coo, {from: coo,value: 0});
await instance.createPromoKitty(896359901, coo, {from: coo,value: 0});
await instance.createPromoKitty(724770099, coo, {from: coo,value: 0});
await instance.createPromoKitty(791188705, coo, {from: coo,value: 0});
await instance.createPromoKitty(360916296, coo, {from: coo,value: 0});
await instance.createPromoKitty(85544352, coo, {from: coo,value: 0});
await instance.createPromoKitty(807583529, coo, {from: coo,value: 0});
await instance.createPromoKitty(928266615, coo, {from: coo,value: 0});
await instance.createPromoKitty(325859645, coo, {from: coo,value: 0});
await instance.createPromoKitty(655247227, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(18, 37, {from: coo});
await instance.breedWith(30, 19, {from: coo});
await instance.breedWith(11, 14, {from: coo});
await instance.breedWith(16, 27, {from: coo});
await instance.breedWith(29, 34, {from: coo});
await instance.breedWith(36, 13, {from: coo});
await instance.breedWith(5, 31, {from: coo});
await instance.breedWith(24, 32, {from: coo});
await instance.breedWith(15, 1, {from: coo});
await instance.breedWith(40, 25, {from: coo});
await instance.breedWith(8, 7, {from: coo});
await instance.breedWith(38, 26, {from: coo});
await instance.breedWith(12, 2, {from: coo});
await instance.breedWith(23, 33, {from: coo});
await instance.breedWith(28, 4, {from: coo});
await instance.breedWith(9, 21, {from: coo});
await instance.breedWith(35, 6, {from: coo});
await instance.breedWith(20, 39, {from: coo});
await instance.breedWith(17, 10, {from: coo});
await instance.breedWith(22, 3, {from: coo});
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
await instance.giveBirth(18);
await instance.giveBirth(30);
await instance.giveBirth(11);
await instance.giveBirth(16);
await instance.giveBirth(29);
await instance.giveBirth(36);
await instance.giveBirth(5);
await instance.giveBirth(24);
await instance.giveBirth(15);
await instance.giveBirth(40);
await instance.giveBirth(8);
await instance.giveBirth(38);
await instance.giveBirth(12);
await instance.giveBirth(23);
await instance.giveBirth(28);
await instance.giveBirth(9);
await instance.giveBirth(35);
await instance.giveBirth(20);
await instance.giveBirth(17);
await instance.giveBirth(22);
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
