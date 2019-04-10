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
await instance.createPromoKitty(108289611, coo, {from: coo,value: 0});
await instance.createPromoKitty(1425281, coo, {from: coo,value: 0});
await instance.createPromoKitty(961814904, coo, {from: coo,value: 0});
await instance.createPromoKitty(62012492, coo, {from: coo,value: 0});
await instance.createPromoKitty(731703590, coo, {from: coo,value: 0});
await instance.createPromoKitty(374226847, coo, {from: coo,value: 0});
await instance.createPromoKitty(111839416, coo, {from: coo,value: 0});
await instance.createPromoKitty(987885993, coo, {from: coo,value: 0});
await instance.createPromoKitty(436639884, coo, {from: coo,value: 0});
await instance.createPromoKitty(282597149, coo, {from: coo,value: 0});
await instance.createPromoKitty(592200036, coo, {from: coo,value: 0});
await instance.createPromoKitty(515860122, coo, {from: coo,value: 0});
await instance.createPromoKitty(609163890, coo, {from: coo,value: 0});
await instance.createPromoKitty(645853930, coo, {from: coo,value: 0});
await instance.createPromoKitty(479481736, coo, {from: coo,value: 0});
await instance.createPromoKitty(519714349, coo, {from: coo,value: 0});
await instance.createPromoKitty(603685450, coo, {from: coo,value: 0});
await instance.createPromoKitty(539056318, coo, {from: coo,value: 0});
await instance.createPromoKitty(573515597, coo, {from: coo,value: 0});
await instance.createPromoKitty(589425482, coo, {from: coo,value: 0});
await instance.createPromoKitty(569724613, coo, {from: coo,value: 0});
await instance.createPromoKitty(751477767, coo, {from: coo,value: 0});
await instance.createPromoKitty(771694166, coo, {from: coo,value: 0});
await instance.createPromoKitty(140291878, coo, {from: coo,value: 0});
await instance.createPromoKitty(40616135, coo, {from: coo,value: 0});
await instance.createPromoKitty(728796469, coo, {from: coo,value: 0});
await instance.createPromoKitty(269801978, coo, {from: coo,value: 0});
await instance.createPromoKitty(577688747, coo, {from: coo,value: 0});
await instance.createPromoKitty(32420451, coo, {from: coo,value: 0});
await instance.createPromoKitty(148596834, coo, {from: coo,value: 0});
await instance.createPromoKitty(492335305, coo, {from: coo,value: 0});
await instance.createPromoKitty(486074783, coo, {from: coo,value: 0});
await instance.createPromoKitty(28593518, coo, {from: coo,value: 0});
await instance.createPromoKitty(821511571, coo, {from: coo,value: 0});
await instance.createPromoKitty(760561953, coo, {from: coo,value: 0});
await instance.createPromoKitty(882052387, coo, {from: coo,value: 0});
await instance.createPromoKitty(402089593, coo, {from: coo,value: 0});
await instance.createPromoKitty(410062656, coo, {from: coo,value: 0});
await instance.createPromoKitty(461523450, coo, {from: coo,value: 0});
await instance.createPromoKitty(704085626, coo, {from: coo,value: 0});
await instance.createPromoKitty(58878810, coo, {from: coo,value: 0});
await instance.createPromoKitty(758242151, coo, {from: coo,value: 0});
await instance.createPromoKitty(299769990, coo, {from: coo,value: 0});
await instance.createPromoKitty(242348545, coo, {from: coo,value: 0});
await instance.createPromoKitty(530568738, coo, {from: coo,value: 0});
await instance.createPromoKitty(461478654, coo, {from: coo,value: 0});
await instance.createPromoKitty(46445908, coo, {from: coo,value: 0});
await instance.createPromoKitty(49190554, coo, {from: coo,value: 0});
await instance.createPromoKitty(445149473, coo, {from: coo,value: 0});
await instance.createPromoKitty(935391712, coo, {from: coo,value: 0});
await instance.createPromoKitty(808897471, coo, {from: coo,value: 0});
await instance.createPromoKitty(163508484, coo, {from: coo,value: 0});
await instance.createPromoKitty(402951029, coo, {from: coo,value: 0});
await instance.createPromoKitty(555903566, coo, {from: coo,value: 0});
await instance.createPromoKitty(68728742, coo, {from: coo,value: 0});
await instance.createPromoKitty(717257361, coo, {from: coo,value: 0});
await instance.createPromoKitty(232030437, coo, {from: coo,value: 0});
await instance.createPromoKitty(667582440, coo, {from: coo,value: 0});
await instance.createPromoKitty(197215651, coo, {from: coo,value: 0});
await instance.createPromoKitty(671297608, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(21, 39, {from: coo});
await instance.breedWith(37, 8, {from: coo});
await instance.breedWith(23, 27, {from: coo});
await instance.breedWith(26, 12, {from: coo});
await instance.breedWith(34, 19, {from: coo});
await instance.breedWith(38, 7, {from: coo});
await instance.breedWith(16, 6, {from: coo});
await instance.breedWith(3, 36, {from: coo});
await instance.breedWith(15, 4, {from: coo});
await instance.breedWith(35, 22, {from: coo});
await instance.breedWith(30, 33, {from: coo});
await instance.breedWith(13, 11, {from: coo});
await instance.breedWith(20, 31, {from: coo});
await instance.breedWith(28, 14, {from: coo});
await instance.breedWith(24, 10, {from: coo});
await instance.breedWith(40, 2, {from: coo});
await instance.breedWith(32, 9, {from: coo});
await instance.breedWith(17, 1, {from: coo});
await instance.breedWith(29, 25, {from: coo});
await instance.breedWith(5, 18, {from: coo});
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
await instance.giveBirth(37);
await instance.giveBirth(23);
await instance.giveBirth(26);
await instance.giveBirth(34);
await instance.giveBirth(38);
await instance.giveBirth(16);
await instance.giveBirth(3);
await instance.giveBirth(15);
await instance.giveBirth(35);
await instance.giveBirth(30);
await instance.giveBirth(13);
await instance.giveBirth(20);
await instance.giveBirth(28);
await instance.giveBirth(24);
await instance.giveBirth(40);
await instance.giveBirth(32);
await instance.giveBirth(17);
await instance.giveBirth(29);
await instance.giveBirth(5);
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
