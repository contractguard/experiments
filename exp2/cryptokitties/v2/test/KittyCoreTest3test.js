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
await instance.createPromoKitty(59607021, coo, {from: coo,value: 0});
await instance.createPromoKitty(411076566, coo, {from: coo,value: 0});
await instance.createPromoKitty(515375704, coo, {from: coo,value: 0});
await instance.createPromoKitty(590147644, coo, {from: coo,value: 0});
await instance.createPromoKitty(37134852, coo, {from: coo,value: 0});
await instance.createPromoKitty(531787745, coo, {from: coo,value: 0});
await instance.createPromoKitty(836885726, coo, {from: coo,value: 0});
await instance.createPromoKitty(202348532, coo, {from: coo,value: 0});
await instance.createPromoKitty(416356956, coo, {from: coo,value: 0});
await instance.createPromoKitty(970466466, coo, {from: coo,value: 0});
await instance.createPromoKitty(679507493, coo, {from: coo,value: 0});
await instance.createPromoKitty(800639795, coo, {from: coo,value: 0});
await instance.createPromoKitty(422125092, coo, {from: coo,value: 0});
await instance.createPromoKitty(854261242, coo, {from: coo,value: 0});
await instance.createPromoKitty(630623633, coo, {from: coo,value: 0});
await instance.createPromoKitty(225858943, coo, {from: coo,value: 0});
await instance.createPromoKitty(332928404, coo, {from: coo,value: 0});
await instance.createPromoKitty(958115891, coo, {from: coo,value: 0});
await instance.createPromoKitty(114165738, coo, {from: coo,value: 0});
await instance.createPromoKitty(774628530, coo, {from: coo,value: 0});
await instance.createPromoKitty(168208238, coo, {from: coo,value: 0});
await instance.createPromoKitty(518063910, coo, {from: coo,value: 0});
await instance.createPromoKitty(843328388, coo, {from: coo,value: 0});
await instance.createPromoKitty(695348592, coo, {from: coo,value: 0});
await instance.createPromoKitty(965532206, coo, {from: coo,value: 0});
await instance.createPromoKitty(36403064, coo, {from: coo,value: 0});
await instance.createPromoKitty(224773903, coo, {from: coo,value: 0});
await instance.createPromoKitty(308496436, coo, {from: coo,value: 0});
await instance.createPromoKitty(300026307, coo, {from: coo,value: 0});
await instance.createPromoKitty(494955116, coo, {from: coo,value: 0});
await instance.createPromoKitty(797345216, coo, {from: coo,value: 0});
await instance.createPromoKitty(283237831, coo, {from: coo,value: 0});
await instance.createPromoKitty(474379276, coo, {from: coo,value: 0});
await instance.createPromoKitty(341730014, coo, {from: coo,value: 0});
await instance.createPromoKitty(809532917, coo, {from: coo,value: 0});
await instance.createPromoKitty(832524150, coo, {from: coo,value: 0});
await instance.createPromoKitty(722055443, coo, {from: coo,value: 0});
await instance.createPromoKitty(570323430, coo, {from: coo,value: 0});
await instance.createPromoKitty(609514768, coo, {from: coo,value: 0});
await instance.createPromoKitty(588564605, coo, {from: coo,value: 0});
await instance.createPromoKitty(660511715, coo, {from: coo,value: 0});
await instance.createPromoKitty(535223884, coo, {from: coo,value: 0});
await instance.createPromoKitty(427004655, coo, {from: coo,value: 0});
await instance.createPromoKitty(395491825, coo, {from: coo,value: 0});
await instance.createPromoKitty(820559004, coo, {from: coo,value: 0});
await instance.createPromoKitty(759645133, coo, {from: coo,value: 0});
await instance.createPromoKitty(362749114, coo, {from: coo,value: 0});
await instance.createPromoKitty(178965170, coo, {from: coo,value: 0});
await instance.createPromoKitty(117602996, coo, {from: coo,value: 0});
await instance.createPromoKitty(705781529, coo, {from: coo,value: 0});
await instance.createPromoKitty(901142784, coo, {from: coo,value: 0});
await instance.createPromoKitty(5885608, coo, {from: coo,value: 0});
await instance.createPromoKitty(445022117, coo, {from: coo,value: 0});
await instance.createPromoKitty(65737407, coo, {from: coo,value: 0});
await instance.createPromoKitty(989701220, coo, {from: coo,value: 0});
await instance.createPromoKitty(956581562, coo, {from: coo,value: 0});
await instance.createPromoKitty(146354203, coo, {from: coo,value: 0});
await instance.createPromoKitty(596001440, coo, {from: coo,value: 0});
await instance.createPromoKitty(870809528, coo, {from: coo,value: 0});
await instance.createPromoKitty(594935433, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(28, 22, {from: coo});
await instance.breedWith(12, 33, {from: coo});
await instance.breedWith(20, 8, {from: coo});
await instance.breedWith(14, 31, {from: coo});
await instance.breedWith(30, 19, {from: coo});
await instance.breedWith(1, 24, {from: coo});
await instance.breedWith(4, 37, {from: coo});
await instance.breedWith(2, 10, {from: coo});
await instance.breedWith(3, 34, {from: coo});
await instance.breedWith(40, 16, {from: coo});
await instance.breedWith(18, 15, {from: coo});
await instance.breedWith(27, 32, {from: coo});
await instance.breedWith(38, 35, {from: coo});
await instance.breedWith(9, 36, {from: coo});
await instance.breedWith(7, 5, {from: coo});
await instance.breedWith(25, 13, {from: coo});
await instance.breedWith(23, 29, {from: coo});
await instance.breedWith(39, 6, {from: coo});
await instance.breedWith(26, 17, {from: coo});
await instance.breedWith(21, 11, {from: coo});
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
await instance.giveBirth(28);
await instance.giveBirth(12);
await instance.giveBirth(20);
await instance.giveBirth(14);
await instance.giveBirth(30);
await instance.giveBirth(1);
await instance.giveBirth(4);
await instance.giveBirth(2);
await instance.giveBirth(3);
await instance.giveBirth(40);
await instance.giveBirth(18);
await instance.giveBirth(27);
await instance.giveBirth(38);
await instance.giveBirth(9);
await instance.giveBirth(7);
await instance.giveBirth(25);
await instance.giveBirth(23);
await instance.giveBirth(39);
await instance.giveBirth(26);
await instance.giveBirth(21);
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
