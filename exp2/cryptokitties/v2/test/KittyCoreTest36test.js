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
await instance.createPromoKitty(422887613, coo, {from: coo,value: 0});
await instance.createPromoKitty(868558645, coo, {from: coo,value: 0});
await instance.createPromoKitty(549590676, coo, {from: coo,value: 0});
await instance.createPromoKitty(296462253, coo, {from: coo,value: 0});
await instance.createPromoKitty(42545106, coo, {from: coo,value: 0});
await instance.createPromoKitty(149918716, coo, {from: coo,value: 0});
await instance.createPromoKitty(732251005, coo, {from: coo,value: 0});
await instance.createPromoKitty(857505445, coo, {from: coo,value: 0});
await instance.createPromoKitty(581520949, coo, {from: coo,value: 0});
await instance.createPromoKitty(86277799, coo, {from: coo,value: 0});
await instance.createPromoKitty(145408784, coo, {from: coo,value: 0});
await instance.createPromoKitty(900183108, coo, {from: coo,value: 0});
await instance.createPromoKitty(446539040, coo, {from: coo,value: 0});
await instance.createPromoKitty(182066468, coo, {from: coo,value: 0});
await instance.createPromoKitty(312502208, coo, {from: coo,value: 0});
await instance.createPromoKitty(964945139, coo, {from: coo,value: 0});
await instance.createPromoKitty(77692695, coo, {from: coo,value: 0});
await instance.createPromoKitty(873740168, coo, {from: coo,value: 0});
await instance.createPromoKitty(267007681, coo, {from: coo,value: 0});
await instance.createPromoKitty(791881199, coo, {from: coo,value: 0});
await instance.createPromoKitty(729984381, coo, {from: coo,value: 0});
await instance.createPromoKitty(9292198, coo, {from: coo,value: 0});
await instance.createPromoKitty(288870299, coo, {from: coo,value: 0});
await instance.createPromoKitty(283709452, coo, {from: coo,value: 0});
await instance.createPromoKitty(228713850, coo, {from: coo,value: 0});
await instance.createPromoKitty(730381851, coo, {from: coo,value: 0});
await instance.createPromoKitty(1899317, coo, {from: coo,value: 0});
await instance.createPromoKitty(899921034, coo, {from: coo,value: 0});
await instance.createPromoKitty(174317203, coo, {from: coo,value: 0});
await instance.createPromoKitty(493943621, coo, {from: coo,value: 0});
await instance.createPromoKitty(583327350, coo, {from: coo,value: 0});
await instance.createPromoKitty(23380374, coo, {from: coo,value: 0});
await instance.createPromoKitty(852948136, coo, {from: coo,value: 0});
await instance.createPromoKitty(761080162, coo, {from: coo,value: 0});
await instance.createPromoKitty(436838225, coo, {from: coo,value: 0});
await instance.createPromoKitty(834310776, coo, {from: coo,value: 0});
await instance.createPromoKitty(445512819, coo, {from: coo,value: 0});
await instance.createPromoKitty(991682779, coo, {from: coo,value: 0});
await instance.createPromoKitty(590479499, coo, {from: coo,value: 0});
await instance.createPromoKitty(533552257, coo, {from: coo,value: 0});
await instance.createPromoKitty(995649255, coo, {from: coo,value: 0});
await instance.createPromoKitty(229781248, coo, {from: coo,value: 0});
await instance.createPromoKitty(707121302, coo, {from: coo,value: 0});
await instance.createPromoKitty(849517381, coo, {from: coo,value: 0});
await instance.createPromoKitty(448147251, coo, {from: coo,value: 0});
await instance.createPromoKitty(119938537, coo, {from: coo,value: 0});
await instance.createPromoKitty(666069523, coo, {from: coo,value: 0});
await instance.createPromoKitty(187822100, coo, {from: coo,value: 0});
await instance.createPromoKitty(764391091, coo, {from: coo,value: 0});
await instance.createPromoKitty(418886922, coo, {from: coo,value: 0});
await instance.createPromoKitty(85978870, coo, {from: coo,value: 0});
await instance.createPromoKitty(818772564, coo, {from: coo,value: 0});
await instance.createPromoKitty(924092425, coo, {from: coo,value: 0});
await instance.createPromoKitty(995775403, coo, {from: coo,value: 0});
await instance.createPromoKitty(545851028, coo, {from: coo,value: 0});
await instance.createPromoKitty(18254638, coo, {from: coo,value: 0});
await instance.createPromoKitty(44518106, coo, {from: coo,value: 0});
await instance.createPromoKitty(181129787, coo, {from: coo,value: 0});
await instance.createPromoKitty(308364161, coo, {from: coo,value: 0});
await instance.createPromoKitty(615127910, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(34, 38, {from: coo});
await instance.breedWith(40, 2, {from: coo});
await instance.breedWith(29, 35, {from: coo});
await instance.breedWith(23, 4, {from: coo});
await instance.breedWith(10, 15, {from: coo});
await instance.breedWith(13, 28, {from: coo});
await instance.breedWith(18, 7, {from: coo});
await instance.breedWith(16, 9, {from: coo});
await instance.breedWith(14, 12, {from: coo});
await instance.breedWith(26, 39, {from: coo});
await instance.breedWith(24, 27, {from: coo});
await instance.breedWith(17, 37, {from: coo});
await instance.breedWith(3, 8, {from: coo});
await instance.breedWith(30, 11, {from: coo});
await instance.breedWith(19, 20, {from: coo});
await instance.breedWith(22, 1, {from: coo});
await instance.breedWith(25, 31, {from: coo});
await instance.breedWith(33, 5, {from: coo});
await instance.breedWith(21, 32, {from: coo});
await instance.breedWith(6, 36, {from: coo});
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
await instance.giveBirth(34);
await instance.giveBirth(40);
await instance.giveBirth(29);
await instance.giveBirth(23);
await instance.giveBirth(10);
await instance.giveBirth(13);
await instance.giveBirth(18);
await instance.giveBirth(16);
await instance.giveBirth(14);
await instance.giveBirth(26);
await instance.giveBirth(24);
await instance.giveBirth(17);
await instance.giveBirth(3);
await instance.giveBirth(30);
await instance.giveBirth(19);
await instance.giveBirth(22);
await instance.giveBirth(25);
await instance.giveBirth(33);
await instance.giveBirth(21);
await instance.giveBirth(6);
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
