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
await instance.createPromoKitty(630911274, coo, {from: coo,value: 0});
await instance.createPromoKitty(178976999, coo, {from: coo,value: 0});
await instance.createPromoKitty(286194223, coo, {from: coo,value: 0});
await instance.createPromoKitty(768973193, coo, {from: coo,value: 0});
await instance.createPromoKitty(507275191, coo, {from: coo,value: 0});
await instance.createPromoKitty(918806999, coo, {from: coo,value: 0});
await instance.createPromoKitty(670414087, coo, {from: coo,value: 0});
await instance.createPromoKitty(614408526, coo, {from: coo,value: 0});
await instance.createPromoKitty(609235364, coo, {from: coo,value: 0});
await instance.createPromoKitty(143708422, coo, {from: coo,value: 0});
await instance.createPromoKitty(753981353, coo, {from: coo,value: 0});
await instance.createPromoKitty(46069378, coo, {from: coo,value: 0});
await instance.createPromoKitty(500526042, coo, {from: coo,value: 0});
await instance.createPromoKitty(866335328, coo, {from: coo,value: 0});
await instance.createPromoKitty(673570526, coo, {from: coo,value: 0});
await instance.createPromoKitty(985150322, coo, {from: coo,value: 0});
await instance.createPromoKitty(122930077, coo, {from: coo,value: 0});
await instance.createPromoKitty(630670653, coo, {from: coo,value: 0});
await instance.createPromoKitty(918760343, coo, {from: coo,value: 0});
await instance.createPromoKitty(269741171, coo, {from: coo,value: 0});
await instance.createPromoKitty(360927489, coo, {from: coo,value: 0});
await instance.createPromoKitty(996446802, coo, {from: coo,value: 0});
await instance.createPromoKitty(598671028, coo, {from: coo,value: 0});
await instance.createPromoKitty(336661043, coo, {from: coo,value: 0});
await instance.createPromoKitty(536255524, coo, {from: coo,value: 0});
await instance.createPromoKitty(27198559, coo, {from: coo,value: 0});
await instance.createPromoKitty(944945132, coo, {from: coo,value: 0});
await instance.createPromoKitty(975180644, coo, {from: coo,value: 0});
await instance.createPromoKitty(944024056, coo, {from: coo,value: 0});
await instance.createPromoKitty(831385127, coo, {from: coo,value: 0});
await instance.createPromoKitty(485007328, coo, {from: coo,value: 0});
await instance.createPromoKitty(300625522, coo, {from: coo,value: 0});
await instance.createPromoKitty(229613599, coo, {from: coo,value: 0});
await instance.createPromoKitty(69361749, coo, {from: coo,value: 0});
await instance.createPromoKitty(395105150, coo, {from: coo,value: 0});
await instance.createPromoKitty(676003734, coo, {from: coo,value: 0});
await instance.createPromoKitty(999941672, coo, {from: coo,value: 0});
await instance.createPromoKitty(171885816, coo, {from: coo,value: 0});
await instance.createPromoKitty(554629162, coo, {from: coo,value: 0});
await instance.createPromoKitty(987460171, coo, {from: coo,value: 0});
await instance.createPromoKitty(606755742, coo, {from: coo,value: 0});
await instance.createPromoKitty(33681447, coo, {from: coo,value: 0});
await instance.createPromoKitty(661757895, coo, {from: coo,value: 0});
await instance.createPromoKitty(802960031, coo, {from: coo,value: 0});
await instance.createPromoKitty(249672775, coo, {from: coo,value: 0});
await instance.createPromoKitty(74579211, coo, {from: coo,value: 0});
await instance.createPromoKitty(388375213, coo, {from: coo,value: 0});
await instance.createPromoKitty(738175844, coo, {from: coo,value: 0});
await instance.createPromoKitty(711659684, coo, {from: coo,value: 0});
await instance.createPromoKitty(219604320, coo, {from: coo,value: 0});
await instance.createPromoKitty(29949523, coo, {from: coo,value: 0});
await instance.createPromoKitty(755991209, coo, {from: coo,value: 0});
await instance.createPromoKitty(645016317, coo, {from: coo,value: 0});
await instance.createPromoKitty(636838096, coo, {from: coo,value: 0});
await instance.createPromoKitty(940184865, coo, {from: coo,value: 0});
await instance.createPromoKitty(457273962, coo, {from: coo,value: 0});
await instance.createPromoKitty(168328103, coo, {from: coo,value: 0});
await instance.createPromoKitty(862956099, coo, {from: coo,value: 0});
await instance.createPromoKitty(913470171, coo, {from: coo,value: 0});
await instance.createPromoKitty(75960714, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(21, 27, {from: coo});
await instance.breedWith(30, 23, {from: coo});
await instance.breedWith(22, 34, {from: coo});
await instance.breedWith(36, 16, {from: coo});
await instance.breedWith(39, 37, {from: coo});
await instance.breedWith(33, 24, {from: coo});
await instance.breedWith(8, 9, {from: coo});
await instance.breedWith(4, 3, {from: coo});
await instance.breedWith(35, 12, {from: coo});
await instance.breedWith(32, 31, {from: coo});
await instance.breedWith(28, 15, {from: coo});
await instance.breedWith(11, 2, {from: coo});
await instance.breedWith(20, 17, {from: coo});
await instance.breedWith(38, 10, {from: coo});
await instance.breedWith(25, 26, {from: coo});
await instance.breedWith(40, 18, {from: coo});
await instance.breedWith(29, 5, {from: coo});
await instance.breedWith(7, 19, {from: coo});
await instance.breedWith(13, 1, {from: coo});
await instance.breedWith(14, 6, {from: coo});
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
await instance.giveBirth(21);
await instance.giveBirth(30);
await instance.giveBirth(22);
await instance.giveBirth(36);
await instance.giveBirth(39);
await instance.giveBirth(33);
await instance.giveBirth(8);
await instance.giveBirth(4);
await instance.giveBirth(35);
await instance.giveBirth(32);
await instance.giveBirth(28);
await instance.giveBirth(11);
await instance.giveBirth(20);
await instance.giveBirth(38);
await instance.giveBirth(25);
await instance.giveBirth(40);
await instance.giveBirth(29);
await instance.giveBirth(7);
await instance.giveBirth(13);
await instance.giveBirth(14);
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
