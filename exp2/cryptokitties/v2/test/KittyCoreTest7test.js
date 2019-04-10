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
await instance.createPromoKitty(633024742, coo, {from: coo,value: 0});
await instance.createPromoKitty(498020616, coo, {from: coo,value: 0});
await instance.createPromoKitty(206102679, coo, {from: coo,value: 0});
await instance.createPromoKitty(428086835, coo, {from: coo,value: 0});
await instance.createPromoKitty(897343398, coo, {from: coo,value: 0});
await instance.createPromoKitty(874549306, coo, {from: coo,value: 0});
await instance.createPromoKitty(682616419, coo, {from: coo,value: 0});
await instance.createPromoKitty(365323770, coo, {from: coo,value: 0});
await instance.createPromoKitty(743673886, coo, {from: coo,value: 0});
await instance.createPromoKitty(74709707, coo, {from: coo,value: 0});
await instance.createPromoKitty(812564528, coo, {from: coo,value: 0});
await instance.createPromoKitty(156951340, coo, {from: coo,value: 0});
await instance.createPromoKitty(210454076, coo, {from: coo,value: 0});
await instance.createPromoKitty(506156287, coo, {from: coo,value: 0});
await instance.createPromoKitty(318589346, coo, {from: coo,value: 0});
await instance.createPromoKitty(560220074, coo, {from: coo,value: 0});
await instance.createPromoKitty(477585703, coo, {from: coo,value: 0});
await instance.createPromoKitty(642320928, coo, {from: coo,value: 0});
await instance.createPromoKitty(491425073, coo, {from: coo,value: 0});
await instance.createPromoKitty(162243816, coo, {from: coo,value: 0});
await instance.createPromoKitty(606870791, coo, {from: coo,value: 0});
await instance.createPromoKitty(350262213, coo, {from: coo,value: 0});
await instance.createPromoKitty(636661481, coo, {from: coo,value: 0});
await instance.createPromoKitty(698901407, coo, {from: coo,value: 0});
await instance.createPromoKitty(56395188, coo, {from: coo,value: 0});
await instance.createPromoKitty(464811857, coo, {from: coo,value: 0});
await instance.createPromoKitty(889956766, coo, {from: coo,value: 0});
await instance.createPromoKitty(889430451, coo, {from: coo,value: 0});
await instance.createPromoKitty(332016022, coo, {from: coo,value: 0});
await instance.createPromoKitty(640359807, coo, {from: coo,value: 0});
await instance.createPromoKitty(358749851, coo, {from: coo,value: 0});
await instance.createPromoKitty(117516726, coo, {from: coo,value: 0});
await instance.createPromoKitty(559381495, coo, {from: coo,value: 0});
await instance.createPromoKitty(188088424, coo, {from: coo,value: 0});
await instance.createPromoKitty(958274743, coo, {from: coo,value: 0});
await instance.createPromoKitty(935056560, coo, {from: coo,value: 0});
await instance.createPromoKitty(271440981, coo, {from: coo,value: 0});
await instance.createPromoKitty(219079487, coo, {from: coo,value: 0});
await instance.createPromoKitty(932848335, coo, {from: coo,value: 0});
await instance.createPromoKitty(781678580, coo, {from: coo,value: 0});
await instance.createPromoKitty(473307472, coo, {from: coo,value: 0});
await instance.createPromoKitty(145203685, coo, {from: coo,value: 0});
await instance.createPromoKitty(691343618, coo, {from: coo,value: 0});
await instance.createPromoKitty(866455234, coo, {from: coo,value: 0});
await instance.createPromoKitty(357183062, coo, {from: coo,value: 0});
await instance.createPromoKitty(990417967, coo, {from: coo,value: 0});
await instance.createPromoKitty(94628442, coo, {from: coo,value: 0});
await instance.createPromoKitty(660069363, coo, {from: coo,value: 0});
await instance.createPromoKitty(445777609, coo, {from: coo,value: 0});
await instance.createPromoKitty(733372738, coo, {from: coo,value: 0});
await instance.createPromoKitty(953049052, coo, {from: coo,value: 0});
await instance.createPromoKitty(505893526, coo, {from: coo,value: 0});
await instance.createPromoKitty(523864792, coo, {from: coo,value: 0});
await instance.createPromoKitty(805540027, coo, {from: coo,value: 0});
await instance.createPromoKitty(590205817, coo, {from: coo,value: 0});
await instance.createPromoKitty(844076339, coo, {from: coo,value: 0});
await instance.createPromoKitty(785275366, coo, {from: coo,value: 0});
await instance.createPromoKitty(566378607, coo, {from: coo,value: 0});
await instance.createPromoKitty(320629302, coo, {from: coo,value: 0});
await instance.createPromoKitty(438877376, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(35, 36, {from: coo});
await instance.breedWith(32, 9, {from: coo});
await instance.breedWith(18, 2, {from: coo});
await instance.breedWith(27, 25, {from: coo});
await instance.breedWith(26, 30, {from: coo});
await instance.breedWith(29, 22, {from: coo});
await instance.breedWith(4, 39, {from: coo});
await instance.breedWith(31, 3, {from: coo});
await instance.breedWith(24, 19, {from: coo});
await instance.breedWith(16, 23, {from: coo});
await instance.breedWith(6, 1, {from: coo});
await instance.breedWith(33, 13, {from: coo});
await instance.breedWith(17, 40, {from: coo});
await instance.breedWith(21, 10, {from: coo});
await instance.breedWith(37, 11, {from: coo});
await instance.breedWith(38, 28, {from: coo});
await instance.breedWith(8, 14, {from: coo});
await instance.breedWith(12, 7, {from: coo});
await instance.breedWith(20, 34, {from: coo});
await instance.breedWith(15, 5, {from: coo});
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
await instance.giveBirth(35);
await instance.giveBirth(32);
await instance.giveBirth(18);
await instance.giveBirth(27);
await instance.giveBirth(26);
await instance.giveBirth(29);
await instance.giveBirth(4);
await instance.giveBirth(31);
await instance.giveBirth(24);
await instance.giveBirth(16);
await instance.giveBirth(6);
await instance.giveBirth(33);
await instance.giveBirth(17);
await instance.giveBirth(21);
await instance.giveBirth(37);
await instance.giveBirth(38);
await instance.giveBirth(8);
await instance.giveBirth(12);
await instance.giveBirth(20);
await instance.giveBirth(15);
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
