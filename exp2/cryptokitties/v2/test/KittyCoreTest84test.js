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
await instance.createPromoKitty(190298452, coo, {from: coo,value: 0});
await instance.createPromoKitty(605915594, coo, {from: coo,value: 0});
await instance.createPromoKitty(968674431, coo, {from: coo,value: 0});
await instance.createPromoKitty(238641845, coo, {from: coo,value: 0});
await instance.createPromoKitty(453169356, coo, {from: coo,value: 0});
await instance.createPromoKitty(252386425, coo, {from: coo,value: 0});
await instance.createPromoKitty(805450577, coo, {from: coo,value: 0});
await instance.createPromoKitty(270966122, coo, {from: coo,value: 0});
await instance.createPromoKitty(821021710, coo, {from: coo,value: 0});
await instance.createPromoKitty(314488343, coo, {from: coo,value: 0});
await instance.createPromoKitty(382463156, coo, {from: coo,value: 0});
await instance.createPromoKitty(556820068, coo, {from: coo,value: 0});
await instance.createPromoKitty(710919362, coo, {from: coo,value: 0});
await instance.createPromoKitty(565071529, coo, {from: coo,value: 0});
await instance.createPromoKitty(954417344, coo, {from: coo,value: 0});
await instance.createPromoKitty(784098916, coo, {from: coo,value: 0});
await instance.createPromoKitty(439934109, coo, {from: coo,value: 0});
await instance.createPromoKitty(360170826, coo, {from: coo,value: 0});
await instance.createPromoKitty(953733459, coo, {from: coo,value: 0});
await instance.createPromoKitty(744907242, coo, {from: coo,value: 0});
await instance.createPromoKitty(254500757, coo, {from: coo,value: 0});
await instance.createPromoKitty(272818130, coo, {from: coo,value: 0});
await instance.createPromoKitty(688214802, coo, {from: coo,value: 0});
await instance.createPromoKitty(665410676, coo, {from: coo,value: 0});
await instance.createPromoKitty(282885273, coo, {from: coo,value: 0});
await instance.createPromoKitty(456054931, coo, {from: coo,value: 0});
await instance.createPromoKitty(652955847, coo, {from: coo,value: 0});
await instance.createPromoKitty(831307423, coo, {from: coo,value: 0});
await instance.createPromoKitty(447880475, coo, {from: coo,value: 0});
await instance.createPromoKitty(681871821, coo, {from: coo,value: 0});
await instance.createPromoKitty(877730047, coo, {from: coo,value: 0});
await instance.createPromoKitty(803740608, coo, {from: coo,value: 0});
await instance.createPromoKitty(707006576, coo, {from: coo,value: 0});
await instance.createPromoKitty(170146215, coo, {from: coo,value: 0});
await instance.createPromoKitty(568024058, coo, {from: coo,value: 0});
await instance.createPromoKitty(176643776, coo, {from: coo,value: 0});
await instance.createPromoKitty(545172343, coo, {from: coo,value: 0});
await instance.createPromoKitty(143198682, coo, {from: coo,value: 0});
await instance.createPromoKitty(393639545, coo, {from: coo,value: 0});
await instance.createPromoKitty(929905076, coo, {from: coo,value: 0});
await instance.createPromoKitty(769937915, coo, {from: coo,value: 0});
await instance.createPromoKitty(339903800, coo, {from: coo,value: 0});
await instance.createPromoKitty(271240257, coo, {from: coo,value: 0});
await instance.createPromoKitty(349964889, coo, {from: coo,value: 0});
await instance.createPromoKitty(202226632, coo, {from: coo,value: 0});
await instance.createPromoKitty(93843140, coo, {from: coo,value: 0});
await instance.createPromoKitty(369646955, coo, {from: coo,value: 0});
await instance.createPromoKitty(298544092, coo, {from: coo,value: 0});
await instance.createPromoKitty(510587866, coo, {from: coo,value: 0});
await instance.createPromoKitty(290494385, coo, {from: coo,value: 0});
await instance.createPromoKitty(387781746, coo, {from: coo,value: 0});
await instance.createPromoKitty(866182489, coo, {from: coo,value: 0});
await instance.createPromoKitty(919367565, coo, {from: coo,value: 0});
await instance.createPromoKitty(579337776, coo, {from: coo,value: 0});
await instance.createPromoKitty(10473970, coo, {from: coo,value: 0});
await instance.createPromoKitty(926399426, coo, {from: coo,value: 0});
await instance.createPromoKitty(677610276, coo, {from: coo,value: 0});
await instance.createPromoKitty(854630537, coo, {from: coo,value: 0});
await instance.createPromoKitty(318293645, coo, {from: coo,value: 0});
await instance.createPromoKitty(418381247, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(24, 14, {from: coo});
await instance.breedWith(23, 27, {from: coo});
await instance.breedWith(36, 35, {from: coo});
await instance.breedWith(34, 18, {from: coo});
await instance.breedWith(26, 10, {from: coo});
await instance.breedWith(33, 12, {from: coo});
await instance.breedWith(13, 39, {from: coo});
await instance.breedWith(25, 21, {from: coo});
await instance.breedWith(32, 15, {from: coo});
await instance.breedWith(8, 4, {from: coo});
await instance.breedWith(29, 17, {from: coo});
await instance.breedWith(19, 37, {from: coo});
await instance.breedWith(2, 22, {from: coo});
await instance.breedWith(30, 6, {from: coo});
await instance.breedWith(40, 5, {from: coo});
await instance.breedWith(7, 38, {from: coo});
await instance.breedWith(16, 3, {from: coo});
await instance.breedWith(9, 1, {from: coo});
await instance.breedWith(31, 20, {from: coo});
await instance.breedWith(11, 28, {from: coo});
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
await instance.giveBirth(24);
await instance.giveBirth(23);
await instance.giveBirth(36);
await instance.giveBirth(34);
await instance.giveBirth(26);
await instance.giveBirth(33);
await instance.giveBirth(13);
await instance.giveBirth(25);
await instance.giveBirth(32);
await instance.giveBirth(8);
await instance.giveBirth(29);
await instance.giveBirth(19);
await instance.giveBirth(2);
await instance.giveBirth(30);
await instance.giveBirth(40);
await instance.giveBirth(7);
await instance.giveBirth(16);
await instance.giveBirth(9);
await instance.giveBirth(31);
await instance.giveBirth(11);
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
