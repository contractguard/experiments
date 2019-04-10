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
await instance.createPromoKitty(312438840, coo, {from: coo,value: 0});
await instance.createPromoKitty(560067769, coo, {from: coo,value: 0});
await instance.createPromoKitty(433924706, coo, {from: coo,value: 0});
await instance.createPromoKitty(764469826, coo, {from: coo,value: 0});
await instance.createPromoKitty(569743876, coo, {from: coo,value: 0});
await instance.createPromoKitty(641350989, coo, {from: coo,value: 0});
await instance.createPromoKitty(290500645, coo, {from: coo,value: 0});
await instance.createPromoKitty(291743130, coo, {from: coo,value: 0});
await instance.createPromoKitty(275263604, coo, {from: coo,value: 0});
await instance.createPromoKitty(797134046, coo, {from: coo,value: 0});
await instance.createPromoKitty(754168773, coo, {from: coo,value: 0});
await instance.createPromoKitty(595272198, coo, {from: coo,value: 0});
await instance.createPromoKitty(892582927, coo, {from: coo,value: 0});
await instance.createPromoKitty(400136097, coo, {from: coo,value: 0});
await instance.createPromoKitty(135530370, coo, {from: coo,value: 0});
await instance.createPromoKitty(901046932, coo, {from: coo,value: 0});
await instance.createPromoKitty(359581161, coo, {from: coo,value: 0});
await instance.createPromoKitty(807884455, coo, {from: coo,value: 0});
await instance.createPromoKitty(626325580, coo, {from: coo,value: 0});
await instance.createPromoKitty(194832385, coo, {from: coo,value: 0});
await instance.createPromoKitty(688582220, coo, {from: coo,value: 0});
await instance.createPromoKitty(217173044, coo, {from: coo,value: 0});
await instance.createPromoKitty(682903089, coo, {from: coo,value: 0});
await instance.createPromoKitty(344068104, coo, {from: coo,value: 0});
await instance.createPromoKitty(811885376, coo, {from: coo,value: 0});
await instance.createPromoKitty(175511563, coo, {from: coo,value: 0});
await instance.createPromoKitty(2960140, coo, {from: coo,value: 0});
await instance.createPromoKitty(660956651, coo, {from: coo,value: 0});
await instance.createPromoKitty(394852865, coo, {from: coo,value: 0});
await instance.createPromoKitty(969720942, coo, {from: coo,value: 0});
await instance.createPromoKitty(634417416, coo, {from: coo,value: 0});
await instance.createPromoKitty(150615368, coo, {from: coo,value: 0});
await instance.createPromoKitty(460248396, coo, {from: coo,value: 0});
await instance.createPromoKitty(780241683, coo, {from: coo,value: 0});
await instance.createPromoKitty(903113436, coo, {from: coo,value: 0});
await instance.createPromoKitty(80523942, coo, {from: coo,value: 0});
await instance.createPromoKitty(709741351, coo, {from: coo,value: 0});
await instance.createPromoKitty(760961807, coo, {from: coo,value: 0});
await instance.createPromoKitty(422847234, coo, {from: coo,value: 0});
await instance.createPromoKitty(851479285, coo, {from: coo,value: 0});
await instance.createPromoKitty(831189447, coo, {from: coo,value: 0});
await instance.createPromoKitty(256605072, coo, {from: coo,value: 0});
await instance.createPromoKitty(73226782, coo, {from: coo,value: 0});
await instance.createPromoKitty(738385100, coo, {from: coo,value: 0});
await instance.createPromoKitty(445017299, coo, {from: coo,value: 0});
await instance.createPromoKitty(228124228, coo, {from: coo,value: 0});
await instance.createPromoKitty(620866080, coo, {from: coo,value: 0});
await instance.createPromoKitty(318952386, coo, {from: coo,value: 0});
await instance.createPromoKitty(588057439, coo, {from: coo,value: 0});
await instance.createPromoKitty(4065308, coo, {from: coo,value: 0});
await instance.createPromoKitty(753479429, coo, {from: coo,value: 0});
await instance.createPromoKitty(220613638, coo, {from: coo,value: 0});
await instance.createPromoKitty(392568880, coo, {from: coo,value: 0});
await instance.createPromoKitty(870626966, coo, {from: coo,value: 0});
await instance.createPromoKitty(213971591, coo, {from: coo,value: 0});
await instance.createPromoKitty(541701122, coo, {from: coo,value: 0});
await instance.createPromoKitty(393734154, coo, {from: coo,value: 0});
await instance.createPromoKitty(60621950, coo, {from: coo,value: 0});
await instance.createPromoKitty(974242666, coo, {from: coo,value: 0});
await instance.createPromoKitty(984691491, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(14, 17, {from: coo});
await instance.breedWith(40, 2, {from: coo});
await instance.breedWith(7, 21, {from: coo});
await instance.breedWith(23, 36, {from: coo});
await instance.breedWith(31, 32, {from: coo});
await instance.breedWith(24, 18, {from: coo});
await instance.breedWith(22, 4, {from: coo});
await instance.breedWith(35, 29, {from: coo});
await instance.breedWith(5, 8, {from: coo});
await instance.breedWith(25, 27, {from: coo});
await instance.breedWith(38, 15, {from: coo});
await instance.breedWith(19, 39, {from: coo});
await instance.breedWith(30, 13, {from: coo});
await instance.breedWith(10, 26, {from: coo});
await instance.breedWith(37, 11, {from: coo});
await instance.breedWith(28, 9, {from: coo});
await instance.breedWith(6, 34, {from: coo});
await instance.breedWith(3, 1, {from: coo});
await instance.breedWith(20, 33, {from: coo});
await instance.breedWith(16, 12, {from: coo});
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
await instance.giveBirth(14);
await instance.giveBirth(40);
await instance.giveBirth(7);
await instance.giveBirth(23);
await instance.giveBirth(31);
await instance.giveBirth(24);
await instance.giveBirth(22);
await instance.giveBirth(35);
await instance.giveBirth(5);
await instance.giveBirth(25);
await instance.giveBirth(38);
await instance.giveBirth(19);
await instance.giveBirth(30);
await instance.giveBirth(10);
await instance.giveBirth(37);
await instance.giveBirth(28);
await instance.giveBirth(6);
await instance.giveBirth(3);
await instance.giveBirth(20);
await instance.giveBirth(16);
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
