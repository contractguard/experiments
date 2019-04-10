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
await instance.createPromoKitty(580567354, coo, {from: coo,value: 0});
await instance.createPromoKitty(220544143, coo, {from: coo,value: 0});
await instance.createPromoKitty(149736904, coo, {from: coo,value: 0});
await instance.createPromoKitty(180985311, coo, {from: coo,value: 0});
await instance.createPromoKitty(990276291, coo, {from: coo,value: 0});
await instance.createPromoKitty(496996671, coo, {from: coo,value: 0});
await instance.createPromoKitty(964261444, coo, {from: coo,value: 0});
await instance.createPromoKitty(424397360, coo, {from: coo,value: 0});
await instance.createPromoKitty(930564595, coo, {from: coo,value: 0});
await instance.createPromoKitty(753655952, coo, {from: coo,value: 0});
await instance.createPromoKitty(52651413, coo, {from: coo,value: 0});
await instance.createPromoKitty(866984320, coo, {from: coo,value: 0});
await instance.createPromoKitty(520518528, coo, {from: coo,value: 0});
await instance.createPromoKitty(953520872, coo, {from: coo,value: 0});
await instance.createPromoKitty(66774752, coo, {from: coo,value: 0});
await instance.createPromoKitty(23833150, coo, {from: coo,value: 0});
await instance.createPromoKitty(929638369, coo, {from: coo,value: 0});
await instance.createPromoKitty(890547195, coo, {from: coo,value: 0});
await instance.createPromoKitty(278297095, coo, {from: coo,value: 0});
await instance.createPromoKitty(817585465, coo, {from: coo,value: 0});
await instance.createPromoKitty(100604804, coo, {from: coo,value: 0});
await instance.createPromoKitty(278950235, coo, {from: coo,value: 0});
await instance.createPromoKitty(580181010, coo, {from: coo,value: 0});
await instance.createPromoKitty(141663411, coo, {from: coo,value: 0});
await instance.createPromoKitty(69199764, coo, {from: coo,value: 0});
await instance.createPromoKitty(734342857, coo, {from: coo,value: 0});
await instance.createPromoKitty(140414983, coo, {from: coo,value: 0});
await instance.createPromoKitty(628159867, coo, {from: coo,value: 0});
await instance.createPromoKitty(78505592, coo, {from: coo,value: 0});
await instance.createPromoKitty(539262018, coo, {from: coo,value: 0});
await instance.createPromoKitty(451305559, coo, {from: coo,value: 0});
await instance.createPromoKitty(187055452, coo, {from: coo,value: 0});
await instance.createPromoKitty(782969125, coo, {from: coo,value: 0});
await instance.createPromoKitty(29790476, coo, {from: coo,value: 0});
await instance.createPromoKitty(736498010, coo, {from: coo,value: 0});
await instance.createPromoKitty(809550596, coo, {from: coo,value: 0});
await instance.createPromoKitty(780150863, coo, {from: coo,value: 0});
await instance.createPromoKitty(880143214, coo, {from: coo,value: 0});
await instance.createPromoKitty(43489562, coo, {from: coo,value: 0});
await instance.createPromoKitty(425892697, coo, {from: coo,value: 0});
await instance.createPromoKitty(398339602, coo, {from: coo,value: 0});
await instance.createPromoKitty(49313311, coo, {from: coo,value: 0});
await instance.createPromoKitty(392671876, coo, {from: coo,value: 0});
await instance.createPromoKitty(958313492, coo, {from: coo,value: 0});
await instance.createPromoKitty(207385777, coo, {from: coo,value: 0});
await instance.createPromoKitty(697857601, coo, {from: coo,value: 0});
await instance.createPromoKitty(713939940, coo, {from: coo,value: 0});
await instance.createPromoKitty(900205883, coo, {from: coo,value: 0});
await instance.createPromoKitty(441259277, coo, {from: coo,value: 0});
await instance.createPromoKitty(617313668, coo, {from: coo,value: 0});
await instance.createPromoKitty(780053309, coo, {from: coo,value: 0});
await instance.createPromoKitty(359802037, coo, {from: coo,value: 0});
await instance.createPromoKitty(222007008, coo, {from: coo,value: 0});
await instance.createPromoKitty(252680407, coo, {from: coo,value: 0});
await instance.createPromoKitty(708128644, coo, {from: coo,value: 0});
await instance.createPromoKitty(798934198, coo, {from: coo,value: 0});
await instance.createPromoKitty(780858129, coo, {from: coo,value: 0});
await instance.createPromoKitty(176536512, coo, {from: coo,value: 0});
await instance.createPromoKitty(240936865, coo, {from: coo,value: 0});
await instance.createPromoKitty(443220557, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(5, 19, {from: coo});
await instance.breedWith(10, 38, {from: coo});
await instance.breedWith(16, 28, {from: coo});
await instance.breedWith(11, 14, {from: coo});
await instance.breedWith(1, 15, {from: coo});
await instance.breedWith(40, 17, {from: coo});
await instance.breedWith(27, 29, {from: coo});
await instance.breedWith(8, 35, {from: coo});
await instance.breedWith(12, 23, {from: coo});
await instance.breedWith(34, 33, {from: coo});
await instance.breedWith(39, 32, {from: coo});
await instance.breedWith(18, 7, {from: coo});
await instance.breedWith(36, 21, {from: coo});
await instance.breedWith(2, 3, {from: coo});
await instance.breedWith(22, 4, {from: coo});
await instance.breedWith(20, 37, {from: coo});
await instance.breedWith(24, 30, {from: coo});
await instance.breedWith(9, 31, {from: coo});
await instance.breedWith(13, 6, {from: coo});
await instance.breedWith(26, 25, {from: coo});
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
await instance.giveBirth(5);
await instance.giveBirth(10);
await instance.giveBirth(16);
await instance.giveBirth(11);
await instance.giveBirth(1);
await instance.giveBirth(40);
await instance.giveBirth(27);
await instance.giveBirth(8);
await instance.giveBirth(12);
await instance.giveBirth(34);
await instance.giveBirth(39);
await instance.giveBirth(18);
await instance.giveBirth(36);
await instance.giveBirth(2);
await instance.giveBirth(22);
await instance.giveBirth(20);
await instance.giveBirth(24);
await instance.giveBirth(9);
await instance.giveBirth(13);
await instance.giveBirth(26);
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
