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
await instance.createPromoKitty(770472219, coo, {from: coo,value: 0});
await instance.createPromoKitty(278995210, coo, {from: coo,value: 0});
await instance.createPromoKitty(12234015, coo, {from: coo,value: 0});
await instance.createPromoKitty(310005890, coo, {from: coo,value: 0});
await instance.createPromoKitty(438753437, coo, {from: coo,value: 0});
await instance.createPromoKitty(982352361, coo, {from: coo,value: 0});
await instance.createPromoKitty(209390222, coo, {from: coo,value: 0});
await instance.createPromoKitty(355561596, coo, {from: coo,value: 0});
await instance.createPromoKitty(503861152, coo, {from: coo,value: 0});
await instance.createPromoKitty(543197064, coo, {from: coo,value: 0});
await instance.createPromoKitty(449748365, coo, {from: coo,value: 0});
await instance.createPromoKitty(294912411, coo, {from: coo,value: 0});
await instance.createPromoKitty(648390274, coo, {from: coo,value: 0});
await instance.createPromoKitty(704384367, coo, {from: coo,value: 0});
await instance.createPromoKitty(79198679, coo, {from: coo,value: 0});
await instance.createPromoKitty(673973482, coo, {from: coo,value: 0});
await instance.createPromoKitty(87818885, coo, {from: coo,value: 0});
await instance.createPromoKitty(560824482, coo, {from: coo,value: 0});
await instance.createPromoKitty(663470979, coo, {from: coo,value: 0});
await instance.createPromoKitty(712281122, coo, {from: coo,value: 0});
await instance.createPromoKitty(127961497, coo, {from: coo,value: 0});
await instance.createPromoKitty(634183710, coo, {from: coo,value: 0});
await instance.createPromoKitty(819654713, coo, {from: coo,value: 0});
await instance.createPromoKitty(438415793, coo, {from: coo,value: 0});
await instance.createPromoKitty(628378432, coo, {from: coo,value: 0});
await instance.createPromoKitty(516457283, coo, {from: coo,value: 0});
await instance.createPromoKitty(192573756, coo, {from: coo,value: 0});
await instance.createPromoKitty(967242285, coo, {from: coo,value: 0});
await instance.createPromoKitty(523819715, coo, {from: coo,value: 0});
await instance.createPromoKitty(779759656, coo, {from: coo,value: 0});
await instance.createPromoKitty(261439302, coo, {from: coo,value: 0});
await instance.createPromoKitty(395454197, coo, {from: coo,value: 0});
await instance.createPromoKitty(341698771, coo, {from: coo,value: 0});
await instance.createPromoKitty(850021228, coo, {from: coo,value: 0});
await instance.createPromoKitty(369431789, coo, {from: coo,value: 0});
await instance.createPromoKitty(678328923, coo, {from: coo,value: 0});
await instance.createPromoKitty(861695449, coo, {from: coo,value: 0});
await instance.createPromoKitty(878919285, coo, {from: coo,value: 0});
await instance.createPromoKitty(413029508, coo, {from: coo,value: 0});
await instance.createPromoKitty(796265128, coo, {from: coo,value: 0});
await instance.createPromoKitty(735450984, coo, {from: coo,value: 0});
await instance.createPromoKitty(539320414, coo, {from: coo,value: 0});
await instance.createPromoKitty(927932618, coo, {from: coo,value: 0});
await instance.createPromoKitty(12957626, coo, {from: coo,value: 0});
await instance.createPromoKitty(581434600, coo, {from: coo,value: 0});
await instance.createPromoKitty(191822584, coo, {from: coo,value: 0});
await instance.createPromoKitty(611172235, coo, {from: coo,value: 0});
await instance.createPromoKitty(292982297, coo, {from: coo,value: 0});
await instance.createPromoKitty(648958573, coo, {from: coo,value: 0});
await instance.createPromoKitty(491816767, coo, {from: coo,value: 0});
await instance.createPromoKitty(32354034, coo, {from: coo,value: 0});
await instance.createPromoKitty(466633692, coo, {from: coo,value: 0});
await instance.createPromoKitty(581934429, coo, {from: coo,value: 0});
await instance.createPromoKitty(933598512, coo, {from: coo,value: 0});
await instance.createPromoKitty(714384128, coo, {from: coo,value: 0});
await instance.createPromoKitty(23687245, coo, {from: coo,value: 0});
await instance.createPromoKitty(304853834, coo, {from: coo,value: 0});
await instance.createPromoKitty(678531259, coo, {from: coo,value: 0});
await instance.createPromoKitty(890730630, coo, {from: coo,value: 0});
await instance.createPromoKitty(991524615, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(25, 4, {from: coo});
await instance.breedWith(5, 35, {from: coo});
await instance.breedWith(2, 9, {from: coo});
await instance.breedWith(16, 37, {from: coo});
await instance.breedWith(13, 39, {from: coo});
await instance.breedWith(31, 36, {from: coo});
await instance.breedWith(24, 7, {from: coo});
await instance.breedWith(15, 33, {from: coo});
await instance.breedWith(10, 21, {from: coo});
await instance.breedWith(28, 32, {from: coo});
await instance.breedWith(30, 3, {from: coo});
await instance.breedWith(12, 40, {from: coo});
await instance.breedWith(19, 34, {from: coo});
await instance.breedWith(23, 22, {from: coo});
await instance.breedWith(18, 27, {from: coo});
await instance.breedWith(1, 26, {from: coo});
await instance.breedWith(38, 6, {from: coo});
await instance.breedWith(11, 29, {from: coo});
await instance.breedWith(14, 8, {from: coo});
await instance.breedWith(17, 20, {from: coo});
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
await instance.giveBirth(25);
await instance.giveBirth(5);
await instance.giveBirth(2);
await instance.giveBirth(16);
await instance.giveBirth(13);
await instance.giveBirth(31);
await instance.giveBirth(24);
await instance.giveBirth(15);
await instance.giveBirth(10);
await instance.giveBirth(28);
await instance.giveBirth(30);
await instance.giveBirth(12);
await instance.giveBirth(19);
await instance.giveBirth(23);
await instance.giveBirth(18);
await instance.giveBirth(1);
await instance.giveBirth(38);
await instance.giveBirth(11);
await instance.giveBirth(14);
await instance.giveBirth(17);
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
