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
await instance.createPromoKitty(706100820, coo, {from: coo,value: 0});
await instance.createPromoKitty(482554455, coo, {from: coo,value: 0});
await instance.createPromoKitty(797953584, coo, {from: coo,value: 0});
await instance.createPromoKitty(946865765, coo, {from: coo,value: 0});
await instance.createPromoKitty(920717300, coo, {from: coo,value: 0});
await instance.createPromoKitty(620060837, coo, {from: coo,value: 0});
await instance.createPromoKitty(261791766, coo, {from: coo,value: 0});
await instance.createPromoKitty(911139603, coo, {from: coo,value: 0});
await instance.createPromoKitty(116507949, coo, {from: coo,value: 0});
await instance.createPromoKitty(483381985, coo, {from: coo,value: 0});
await instance.createPromoKitty(606651644, coo, {from: coo,value: 0});
await instance.createPromoKitty(962748319, coo, {from: coo,value: 0});
await instance.createPromoKitty(53386665, coo, {from: coo,value: 0});
await instance.createPromoKitty(363598931, coo, {from: coo,value: 0});
await instance.createPromoKitty(381863011, coo, {from: coo,value: 0});
await instance.createPromoKitty(754558333, coo, {from: coo,value: 0});
await instance.createPromoKitty(322265650, coo, {from: coo,value: 0});
await instance.createPromoKitty(223448357, coo, {from: coo,value: 0});
await instance.createPromoKitty(434392104, coo, {from: coo,value: 0});
await instance.createPromoKitty(796208359, coo, {from: coo,value: 0});
await instance.createPromoKitty(933959633, coo, {from: coo,value: 0});
await instance.createPromoKitty(412491543, coo, {from: coo,value: 0});
await instance.createPromoKitty(42021222, coo, {from: coo,value: 0});
await instance.createPromoKitty(63911922, coo, {from: coo,value: 0});
await instance.createPromoKitty(372067781, coo, {from: coo,value: 0});
await instance.createPromoKitty(567730240, coo, {from: coo,value: 0});
await instance.createPromoKitty(726126607, coo, {from: coo,value: 0});
await instance.createPromoKitty(46199618, coo, {from: coo,value: 0});
await instance.createPromoKitty(33065470, coo, {from: coo,value: 0});
await instance.createPromoKitty(139908840, coo, {from: coo,value: 0});
await instance.createPromoKitty(45285158, coo, {from: coo,value: 0});
await instance.createPromoKitty(717395893, coo, {from: coo,value: 0});
await instance.createPromoKitty(615475582, coo, {from: coo,value: 0});
await instance.createPromoKitty(741903489, coo, {from: coo,value: 0});
await instance.createPromoKitty(894597934, coo, {from: coo,value: 0});
await instance.createPromoKitty(550285000, coo, {from: coo,value: 0});
await instance.createPromoKitty(658433908, coo, {from: coo,value: 0});
await instance.createPromoKitty(770955064, coo, {from: coo,value: 0});
await instance.createPromoKitty(141063059, coo, {from: coo,value: 0});
await instance.createPromoKitty(75246078, coo, {from: coo,value: 0});
await instance.createPromoKitty(292653711, coo, {from: coo,value: 0});
await instance.createPromoKitty(692096232, coo, {from: coo,value: 0});
await instance.createPromoKitty(301318610, coo, {from: coo,value: 0});
await instance.createPromoKitty(729047188, coo, {from: coo,value: 0});
await instance.createPromoKitty(95705867, coo, {from: coo,value: 0});
await instance.createPromoKitty(378423397, coo, {from: coo,value: 0});
await instance.createPromoKitty(676934598, coo, {from: coo,value: 0});
await instance.createPromoKitty(712933998, coo, {from: coo,value: 0});
await instance.createPromoKitty(60725979, coo, {from: coo,value: 0});
await instance.createPromoKitty(649164225, coo, {from: coo,value: 0});
await instance.createPromoKitty(49940701, coo, {from: coo,value: 0});
await instance.createPromoKitty(556647448, coo, {from: coo,value: 0});
await instance.createPromoKitty(142397054, coo, {from: coo,value: 0});
await instance.createPromoKitty(98774598, coo, {from: coo,value: 0});
await instance.createPromoKitty(402055440, coo, {from: coo,value: 0});
await instance.createPromoKitty(130084296, coo, {from: coo,value: 0});
await instance.createPromoKitty(476283134, coo, {from: coo,value: 0});
await instance.createPromoKitty(891608914, coo, {from: coo,value: 0});
await instance.createPromoKitty(230013997, coo, {from: coo,value: 0});
await instance.createPromoKitty(337936264, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(10, 1, {from: coo});
await instance.breedWith(21, 40, {from: coo});
await instance.breedWith(25, 20, {from: coo});
await instance.breedWith(12, 22, {from: coo});
await instance.breedWith(9, 28, {from: coo});
await instance.breedWith(8, 38, {from: coo});
await instance.breedWith(19, 16, {from: coo});
await instance.breedWith(37, 5, {from: coo});
await instance.breedWith(15, 33, {from: coo});
await instance.breedWith(11, 7, {from: coo});
await instance.breedWith(2, 6, {from: coo});
await instance.breedWith(36, 4, {from: coo});
await instance.breedWith(26, 39, {from: coo});
await instance.breedWith(13, 18, {from: coo});
await instance.breedWith(27, 30, {from: coo});
await instance.breedWith(14, 3, {from: coo});
await instance.breedWith(17, 34, {from: coo});
await instance.breedWith(29, 31, {from: coo});
await instance.breedWith(23, 35, {from: coo});
await instance.breedWith(24, 32, {from: coo});
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
await instance.giveBirth(10);
await instance.giveBirth(21);
await instance.giveBirth(25);
await instance.giveBirth(12);
await instance.giveBirth(9);
await instance.giveBirth(8);
await instance.giveBirth(19);
await instance.giveBirth(37);
await instance.giveBirth(15);
await instance.giveBirth(11);
await instance.giveBirth(2);
await instance.giveBirth(36);
await instance.giveBirth(26);
await instance.giveBirth(13);
await instance.giveBirth(27);
await instance.giveBirth(14);
await instance.giveBirth(17);
await instance.giveBirth(29);
await instance.giveBirth(23);
await instance.giveBirth(24);
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
