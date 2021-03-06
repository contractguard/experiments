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
await instance.createPromoKitty(594365045, coo, {from: coo,value: 0});
await instance.createPromoKitty(109910004, coo, {from: coo,value: 0});
await instance.createPromoKitty(373241696, coo, {from: coo,value: 0});
await instance.createPromoKitty(229581184, coo, {from: coo,value: 0});
await instance.createPromoKitty(440742882, coo, {from: coo,value: 0});
await instance.createPromoKitty(513677658, coo, {from: coo,value: 0});
await instance.createPromoKitty(857845132, coo, {from: coo,value: 0});
await instance.createPromoKitty(981806608, coo, {from: coo,value: 0});
await instance.createPromoKitty(78276284, coo, {from: coo,value: 0});
await instance.createPromoKitty(83843835, coo, {from: coo,value: 0});
await instance.createPromoKitty(529309953, coo, {from: coo,value: 0});
await instance.createPromoKitty(915365462, coo, {from: coo,value: 0});
await instance.createPromoKitty(688116776, coo, {from: coo,value: 0});
await instance.createPromoKitty(457818128, coo, {from: coo,value: 0});
await instance.createPromoKitty(754600431, coo, {from: coo,value: 0});
await instance.createPromoKitty(70426412, coo, {from: coo,value: 0});
await instance.createPromoKitty(942035035, coo, {from: coo,value: 0});
await instance.createPromoKitty(815071142, coo, {from: coo,value: 0});
await instance.createPromoKitty(956071924, coo, {from: coo,value: 0});
await instance.createPromoKitty(942743168, coo, {from: coo,value: 0});
await instance.createPromoKitty(453586277, coo, {from: coo,value: 0});
await instance.createPromoKitty(190278171, coo, {from: coo,value: 0});
await instance.createPromoKitty(902758416, coo, {from: coo,value: 0});
await instance.createPromoKitty(665982495, coo, {from: coo,value: 0});
await instance.createPromoKitty(139854409, coo, {from: coo,value: 0});
await instance.createPromoKitty(78281284, coo, {from: coo,value: 0});
await instance.createPromoKitty(543014475, coo, {from: coo,value: 0});
await instance.createPromoKitty(182708336, coo, {from: coo,value: 0});
await instance.createPromoKitty(66441288, coo, {from: coo,value: 0});
await instance.createPromoKitty(80487598, coo, {from: coo,value: 0});
await instance.createPromoKitty(847925775, coo, {from: coo,value: 0});
await instance.createPromoKitty(176553908, coo, {from: coo,value: 0});
await instance.createPromoKitty(972233436, coo, {from: coo,value: 0});
await instance.createPromoKitty(519969991, coo, {from: coo,value: 0});
await instance.createPromoKitty(911962635, coo, {from: coo,value: 0});
await instance.createPromoKitty(978639771, coo, {from: coo,value: 0});
await instance.createPromoKitty(224886296, coo, {from: coo,value: 0});
await instance.createPromoKitty(567239750, coo, {from: coo,value: 0});
await instance.createPromoKitty(84267358, coo, {from: coo,value: 0});
await instance.createPromoKitty(752431064, coo, {from: coo,value: 0});
await instance.createPromoKitty(160130072, coo, {from: coo,value: 0});
await instance.createPromoKitty(377311855, coo, {from: coo,value: 0});
await instance.createPromoKitty(194719874, coo, {from: coo,value: 0});
await instance.createPromoKitty(77645794, coo, {from: coo,value: 0});
await instance.createPromoKitty(552903898, coo, {from: coo,value: 0});
await instance.createPromoKitty(499664699, coo, {from: coo,value: 0});
await instance.createPromoKitty(999901016, coo, {from: coo,value: 0});
await instance.createPromoKitty(836444629, coo, {from: coo,value: 0});
await instance.createPromoKitty(722060361, coo, {from: coo,value: 0});
await instance.createPromoKitty(193666073, coo, {from: coo,value: 0});
await instance.createPromoKitty(981821785, coo, {from: coo,value: 0});
await instance.createPromoKitty(878264588, coo, {from: coo,value: 0});
await instance.createPromoKitty(452627164, coo, {from: coo,value: 0});
await instance.createPromoKitty(474092635, coo, {from: coo,value: 0});
await instance.createPromoKitty(477509426, coo, {from: coo,value: 0});
await instance.createPromoKitty(430148280, coo, {from: coo,value: 0});
await instance.createPromoKitty(378530888, coo, {from: coo,value: 0});
await instance.createPromoKitty(347029331, coo, {from: coo,value: 0});
await instance.createPromoKitty(158258195, coo, {from: coo,value: 0});
await instance.createPromoKitty(817412464, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(21, 39, {from: coo});
await instance.breedWith(36, 14, {from: coo});
await instance.breedWith(35, 32, {from: coo});
await instance.breedWith(15, 11, {from: coo});
await instance.breedWith(29, 30, {from: coo});
await instance.breedWith(7, 6, {from: coo});
await instance.breedWith(17, 9, {from: coo});
await instance.breedWith(2, 34, {from: coo});
await instance.breedWith(1, 37, {from: coo});
await instance.breedWith(31, 20, {from: coo});
await instance.breedWith(38, 22, {from: coo});
await instance.breedWith(33, 19, {from: coo});
await instance.breedWith(24, 18, {from: coo});
await instance.breedWith(12, 27, {from: coo});
await instance.breedWith(28, 13, {from: coo});
await instance.breedWith(5, 16, {from: coo});
await instance.breedWith(23, 40, {from: coo});
await instance.breedWith(4, 10, {from: coo});
await instance.breedWith(26, 8, {from: coo});
await instance.breedWith(25, 3, {from: coo});
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
await instance.giveBirth(36);
await instance.giveBirth(35);
await instance.giveBirth(15);
await instance.giveBirth(29);
await instance.giveBirth(7);
await instance.giveBirth(17);
await instance.giveBirth(2);
await instance.giveBirth(1);
await instance.giveBirth(31);
await instance.giveBirth(38);
await instance.giveBirth(33);
await instance.giveBirth(24);
await instance.giveBirth(12);
await instance.giveBirth(28);
await instance.giveBirth(5);
await instance.giveBirth(23);
await instance.giveBirth(4);
await instance.giveBirth(26);
await instance.giveBirth(25);
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
