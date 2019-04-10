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
await instance.createPromoKitty(208392978, coo, {from: coo,value: 0});
await instance.createPromoKitty(901931280, coo, {from: coo,value: 0});
await instance.createPromoKitty(155737368, coo, {from: coo,value: 0});
await instance.createPromoKitty(603400901, coo, {from: coo,value: 0});
await instance.createPromoKitty(282889141, coo, {from: coo,value: 0});
await instance.createPromoKitty(436489815, coo, {from: coo,value: 0});
await instance.createPromoKitty(866732613, coo, {from: coo,value: 0});
await instance.createPromoKitty(957466618, coo, {from: coo,value: 0});
await instance.createPromoKitty(753945410, coo, {from: coo,value: 0});
await instance.createPromoKitty(409767983, coo, {from: coo,value: 0});
await instance.createPromoKitty(220469720, coo, {from: coo,value: 0});
await instance.createPromoKitty(394444218, coo, {from: coo,value: 0});
await instance.createPromoKitty(420707047, coo, {from: coo,value: 0});
await instance.createPromoKitty(974391461, coo, {from: coo,value: 0});
await instance.createPromoKitty(712601000, coo, {from: coo,value: 0});
await instance.createPromoKitty(924865363, coo, {from: coo,value: 0});
await instance.createPromoKitty(868009918, coo, {from: coo,value: 0});
await instance.createPromoKitty(797316894, coo, {from: coo,value: 0});
await instance.createPromoKitty(538434990, coo, {from: coo,value: 0});
await instance.createPromoKitty(674449943, coo, {from: coo,value: 0});
await instance.createPromoKitty(93431973, coo, {from: coo,value: 0});
await instance.createPromoKitty(980002128, coo, {from: coo,value: 0});
await instance.createPromoKitty(357347976, coo, {from: coo,value: 0});
await instance.createPromoKitty(558642670, coo, {from: coo,value: 0});
await instance.createPromoKitty(910397600, coo, {from: coo,value: 0});
await instance.createPromoKitty(548327731, coo, {from: coo,value: 0});
await instance.createPromoKitty(174237270, coo, {from: coo,value: 0});
await instance.createPromoKitty(538721799, coo, {from: coo,value: 0});
await instance.createPromoKitty(947437769, coo, {from: coo,value: 0});
await instance.createPromoKitty(791688969, coo, {from: coo,value: 0});
await instance.createPromoKitty(644088171, coo, {from: coo,value: 0});
await instance.createPromoKitty(386079676, coo, {from: coo,value: 0});
await instance.createPromoKitty(177749269, coo, {from: coo,value: 0});
await instance.createPromoKitty(949144686, coo, {from: coo,value: 0});
await instance.createPromoKitty(91411961, coo, {from: coo,value: 0});
await instance.createPromoKitty(373614100, coo, {from: coo,value: 0});
await instance.createPromoKitty(1411022, coo, {from: coo,value: 0});
await instance.createPromoKitty(752114260, coo, {from: coo,value: 0});
await instance.createPromoKitty(854005304, coo, {from: coo,value: 0});
await instance.createPromoKitty(502149856, coo, {from: coo,value: 0});
await instance.createPromoKitty(287241962, coo, {from: coo,value: 0});
await instance.createPromoKitty(123343318, coo, {from: coo,value: 0});
await instance.createPromoKitty(959033122, coo, {from: coo,value: 0});
await instance.createPromoKitty(954929474, coo, {from: coo,value: 0});
await instance.createPromoKitty(415422375, coo, {from: coo,value: 0});
await instance.createPromoKitty(765430267, coo, {from: coo,value: 0});
await instance.createPromoKitty(700733157, coo, {from: coo,value: 0});
await instance.createPromoKitty(977825863, coo, {from: coo,value: 0});
await instance.createPromoKitty(4379201, coo, {from: coo,value: 0});
await instance.createPromoKitty(812640012, coo, {from: coo,value: 0});
await instance.createPromoKitty(122298592, coo, {from: coo,value: 0});
await instance.createPromoKitty(197978619, coo, {from: coo,value: 0});
await instance.createPromoKitty(583314703, coo, {from: coo,value: 0});
await instance.createPromoKitty(588327664, coo, {from: coo,value: 0});
await instance.createPromoKitty(311166568, coo, {from: coo,value: 0});
await instance.createPromoKitty(523168807, coo, {from: coo,value: 0});
await instance.createPromoKitty(382480543, coo, {from: coo,value: 0});
await instance.createPromoKitty(683717132, coo, {from: coo,value: 0});
await instance.createPromoKitty(499033044, coo, {from: coo,value: 0});
await instance.createPromoKitty(597534704, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(27, 38, {from: coo});
await instance.breedWith(32, 11, {from: coo});
await instance.breedWith(10, 31, {from: coo});
await instance.breedWith(7, 30, {from: coo});
await instance.breedWith(14, 21, {from: coo});
await instance.breedWith(20, 24, {from: coo});
await instance.breedWith(6, 1, {from: coo});
await instance.breedWith(34, 19, {from: coo});
await instance.breedWith(25, 26, {from: coo});
await instance.breedWith(36, 40, {from: coo});
await instance.breedWith(22, 5, {from: coo});
await instance.breedWith(28, 3, {from: coo});
await instance.breedWith(4, 12, {from: coo});
await instance.breedWith(16, 8, {from: coo});
await instance.breedWith(37, 18, {from: coo});
await instance.breedWith(39, 9, {from: coo});
await instance.breedWith(35, 23, {from: coo});
await instance.breedWith(33, 17, {from: coo});
await instance.breedWith(13, 29, {from: coo});
await instance.breedWith(2, 15, {from: coo});
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
await instance.giveBirth(27);
await instance.giveBirth(32);
await instance.giveBirth(10);
await instance.giveBirth(7);
await instance.giveBirth(14);
await instance.giveBirth(20);
await instance.giveBirth(6);
await instance.giveBirth(34);
await instance.giveBirth(25);
await instance.giveBirth(36);
await instance.giveBirth(22);
await instance.giveBirth(28);
await instance.giveBirth(4);
await instance.giveBirth(16);
await instance.giveBirth(37);
await instance.giveBirth(39);
await instance.giveBirth(35);
await instance.giveBirth(33);
await instance.giveBirth(13);
await instance.giveBirth(2);
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
