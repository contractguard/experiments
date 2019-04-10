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
await instance.createPromoKitty(7856726, coo, {from: coo,value: 0});
await instance.createPromoKitty(392277700, coo, {from: coo,value: 0});
await instance.createPromoKitty(736547325, coo, {from: coo,value: 0});
await instance.createPromoKitty(364072621, coo, {from: coo,value: 0});
await instance.createPromoKitty(847315373, coo, {from: coo,value: 0});
await instance.createPromoKitty(51193124, coo, {from: coo,value: 0});
await instance.createPromoKitty(678012397, coo, {from: coo,value: 0});
await instance.createPromoKitty(484298050, coo, {from: coo,value: 0});
await instance.createPromoKitty(733123526, coo, {from: coo,value: 0});
await instance.createPromoKitty(317534416, coo, {from: coo,value: 0});
await instance.createPromoKitty(90240885, coo, {from: coo,value: 0});
await instance.createPromoKitty(910479781, coo, {from: coo,value: 0});
await instance.createPromoKitty(185438749, coo, {from: coo,value: 0});
await instance.createPromoKitty(800616181, coo, {from: coo,value: 0});
await instance.createPromoKitty(919382727, coo, {from: coo,value: 0});
await instance.createPromoKitty(861085863, coo, {from: coo,value: 0});
await instance.createPromoKitty(725924853, coo, {from: coo,value: 0});
await instance.createPromoKitty(392108188, coo, {from: coo,value: 0});
await instance.createPromoKitty(841482580, coo, {from: coo,value: 0});
await instance.createPromoKitty(79089342, coo, {from: coo,value: 0});
await instance.createPromoKitty(49695495, coo, {from: coo,value: 0});
await instance.createPromoKitty(724078306, coo, {from: coo,value: 0});
await instance.createPromoKitty(517076007, coo, {from: coo,value: 0});
await instance.createPromoKitty(353237797, coo, {from: coo,value: 0});
await instance.createPromoKitty(121570946, coo, {from: coo,value: 0});
await instance.createPromoKitty(935290606, coo, {from: coo,value: 0});
await instance.createPromoKitty(581632927, coo, {from: coo,value: 0});
await instance.createPromoKitty(699329923, coo, {from: coo,value: 0});
await instance.createPromoKitty(980624752, coo, {from: coo,value: 0});
await instance.createPromoKitty(489521512, coo, {from: coo,value: 0});
await instance.createPromoKitty(994193413, coo, {from: coo,value: 0});
await instance.createPromoKitty(731740907, coo, {from: coo,value: 0});
await instance.createPromoKitty(768017124, coo, {from: coo,value: 0});
await instance.createPromoKitty(559216703, coo, {from: coo,value: 0});
await instance.createPromoKitty(25807034, coo, {from: coo,value: 0});
await instance.createPromoKitty(148786452, coo, {from: coo,value: 0});
await instance.createPromoKitty(688968000, coo, {from: coo,value: 0});
await instance.createPromoKitty(462069343, coo, {from: coo,value: 0});
await instance.createPromoKitty(163208168, coo, {from: coo,value: 0});
await instance.createPromoKitty(368630297, coo, {from: coo,value: 0});
await instance.createPromoKitty(969224553, coo, {from: coo,value: 0});
await instance.createPromoKitty(175258852, coo, {from: coo,value: 0});
await instance.createPromoKitty(55640549, coo, {from: coo,value: 0});
await instance.createPromoKitty(592855956, coo, {from: coo,value: 0});
await instance.createPromoKitty(873923772, coo, {from: coo,value: 0});
await instance.createPromoKitty(998149855, coo, {from: coo,value: 0});
await instance.createPromoKitty(431998443, coo, {from: coo,value: 0});
await instance.createPromoKitty(333539683, coo, {from: coo,value: 0});
await instance.createPromoKitty(392852781, coo, {from: coo,value: 0});
await instance.createPromoKitty(148386423, coo, {from: coo,value: 0});
await instance.createPromoKitty(811483033, coo, {from: coo,value: 0});
await instance.createPromoKitty(539619750, coo, {from: coo,value: 0});
await instance.createPromoKitty(188338283, coo, {from: coo,value: 0});
await instance.createPromoKitty(279921316, coo, {from: coo,value: 0});
await instance.createPromoKitty(231078472, coo, {from: coo,value: 0});
await instance.createPromoKitty(434919808, coo, {from: coo,value: 0});
await instance.createPromoKitty(203980207, coo, {from: coo,value: 0});
await instance.createPromoKitty(896685512, coo, {from: coo,value: 0});
await instance.createPromoKitty(980221906, coo, {from: coo,value: 0});
await instance.createPromoKitty(65823574, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(12, 16, {from: coo});
await instance.breedWith(40, 35, {from: coo});
await instance.breedWith(39, 31, {from: coo});
await instance.breedWith(17, 36, {from: coo});
await instance.breedWith(34, 25, {from: coo});
await instance.breedWith(4, 32, {from: coo});
await instance.breedWith(33, 6, {from: coo});
await instance.breedWith(5, 11, {from: coo});
await instance.breedWith(2, 18, {from: coo});
await instance.breedWith(38, 24, {from: coo});
await instance.breedWith(30, 22, {from: coo});
await instance.breedWith(13, 15, {from: coo});
await instance.breedWith(7, 26, {from: coo});
await instance.breedWith(14, 10, {from: coo});
await instance.breedWith(20, 1, {from: coo});
await instance.breedWith(27, 28, {from: coo});
await instance.breedWith(3, 23, {from: coo});
await instance.breedWith(29, 8, {from: coo});
await instance.breedWith(9, 37, {from: coo});
await instance.breedWith(19, 21, {from: coo});
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
await instance.giveBirth(12);
await instance.giveBirth(40);
await instance.giveBirth(39);
await instance.giveBirth(17);
await instance.giveBirth(34);
await instance.giveBirth(4);
await instance.giveBirth(33);
await instance.giveBirth(5);
await instance.giveBirth(2);
await instance.giveBirth(38);
await instance.giveBirth(30);
await instance.giveBirth(13);
await instance.giveBirth(7);
await instance.giveBirth(14);
await instance.giveBirth(20);
await instance.giveBirth(27);
await instance.giveBirth(3);
await instance.giveBirth(29);
await instance.giveBirth(9);
await instance.giveBirth(19);
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
