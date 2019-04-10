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
await instance.createPromoKitty(545151367, coo, {from: coo,value: 0});
await instance.createPromoKitty(830142571, coo, {from: coo,value: 0});
await instance.createPromoKitty(12935106, coo, {from: coo,value: 0});
await instance.createPromoKitty(835188995, coo, {from: coo,value: 0});
await instance.createPromoKitty(269293170, coo, {from: coo,value: 0});
await instance.createPromoKitty(472245706, coo, {from: coo,value: 0});
await instance.createPromoKitty(891310117, coo, {from: coo,value: 0});
await instance.createPromoKitty(799475182, coo, {from: coo,value: 0});
await instance.createPromoKitty(939107450, coo, {from: coo,value: 0});
await instance.createPromoKitty(952884201, coo, {from: coo,value: 0});
await instance.createPromoKitty(5448422, coo, {from: coo,value: 0});
await instance.createPromoKitty(220180598, coo, {from: coo,value: 0});
await instance.createPromoKitty(977288648, coo, {from: coo,value: 0});
await instance.createPromoKitty(620318143, coo, {from: coo,value: 0});
await instance.createPromoKitty(722879599, coo, {from: coo,value: 0});
await instance.createPromoKitty(637206665, coo, {from: coo,value: 0});
await instance.createPromoKitty(430824016, coo, {from: coo,value: 0});
await instance.createPromoKitty(849497349, coo, {from: coo,value: 0});
await instance.createPromoKitty(708549911, coo, {from: coo,value: 0});
await instance.createPromoKitty(408049622, coo, {from: coo,value: 0});
await instance.createPromoKitty(495397311, coo, {from: coo,value: 0});
await instance.createPromoKitty(518951923, coo, {from: coo,value: 0});
await instance.createPromoKitty(394772979, coo, {from: coo,value: 0});
await instance.createPromoKitty(61806712, coo, {from: coo,value: 0});
await instance.createPromoKitty(843775873, coo, {from: coo,value: 0});
await instance.createPromoKitty(436430935, coo, {from: coo,value: 0});
await instance.createPromoKitty(235478610, coo, {from: coo,value: 0});
await instance.createPromoKitty(826893693, coo, {from: coo,value: 0});
await instance.createPromoKitty(922636863, coo, {from: coo,value: 0});
await instance.createPromoKitty(150476396, coo, {from: coo,value: 0});
await instance.createPromoKitty(593682059, coo, {from: coo,value: 0});
await instance.createPromoKitty(562133237, coo, {from: coo,value: 0});
await instance.createPromoKitty(354779559, coo, {from: coo,value: 0});
await instance.createPromoKitty(933809866, coo, {from: coo,value: 0});
await instance.createPromoKitty(602866409, coo, {from: coo,value: 0});
await instance.createPromoKitty(499729058, coo, {from: coo,value: 0});
await instance.createPromoKitty(252723, coo, {from: coo,value: 0});
await instance.createPromoKitty(222092372, coo, {from: coo,value: 0});
await instance.createPromoKitty(997718229, coo, {from: coo,value: 0});
await instance.createPromoKitty(129671584, coo, {from: coo,value: 0});
await instance.createPromoKitty(567570817, coo, {from: coo,value: 0});
await instance.createPromoKitty(129776787, coo, {from: coo,value: 0});
await instance.createPromoKitty(817263499, coo, {from: coo,value: 0});
await instance.createPromoKitty(195060625, coo, {from: coo,value: 0});
await instance.createPromoKitty(995069813, coo, {from: coo,value: 0});
await instance.createPromoKitty(272803529, coo, {from: coo,value: 0});
await instance.createPromoKitty(445391521, coo, {from: coo,value: 0});
await instance.createPromoKitty(264405022, coo, {from: coo,value: 0});
await instance.createPromoKitty(294873534, coo, {from: coo,value: 0});
await instance.createPromoKitty(259008566, coo, {from: coo,value: 0});
await instance.createPromoKitty(249341549, coo, {from: coo,value: 0});
await instance.createPromoKitty(934736836, coo, {from: coo,value: 0});
await instance.createPromoKitty(438577830, coo, {from: coo,value: 0});
await instance.createPromoKitty(967371167, coo, {from: coo,value: 0});
await instance.createPromoKitty(901225662, coo, {from: coo,value: 0});
await instance.createPromoKitty(735233661, coo, {from: coo,value: 0});
await instance.createPromoKitty(814461499, coo, {from: coo,value: 0});
await instance.createPromoKitty(429586602, coo, {from: coo,value: 0});
await instance.createPromoKitty(997145320, coo, {from: coo,value: 0});
await instance.createPromoKitty(68355879, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(3, 35, {from: coo});
await instance.breedWith(13, 15, {from: coo});
await instance.breedWith(17, 36, {from: coo});
await instance.breedWith(14, 38, {from: coo});
await instance.breedWith(31, 33, {from: coo});
await instance.breedWith(19, 11, {from: coo});
await instance.breedWith(1, 8, {from: coo});
await instance.breedWith(29, 37, {from: coo});
await instance.breedWith(6, 25, {from: coo});
await instance.breedWith(24, 20, {from: coo});
await instance.breedWith(28, 7, {from: coo});
await instance.breedWith(5, 30, {from: coo});
await instance.breedWith(18, 34, {from: coo});
await instance.breedWith(40, 23, {from: coo});
await instance.breedWith(26, 39, {from: coo});
await instance.breedWith(4, 21, {from: coo});
await instance.breedWith(16, 12, {from: coo});
await instance.breedWith(22, 2, {from: coo});
await instance.breedWith(10, 27, {from: coo});
await instance.breedWith(9, 32, {from: coo});
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
await instance.giveBirth(3);
await instance.giveBirth(13);
await instance.giveBirth(17);
await instance.giveBirth(14);
await instance.giveBirth(31);
await instance.giveBirth(19);
await instance.giveBirth(1);
await instance.giveBirth(29);
await instance.giveBirth(6);
await instance.giveBirth(24);
await instance.giveBirth(28);
await instance.giveBirth(5);
await instance.giveBirth(18);
await instance.giveBirth(40);
await instance.giveBirth(26);
await instance.giveBirth(4);
await instance.giveBirth(16);
await instance.giveBirth(22);
await instance.giveBirth(10);
await instance.giveBirth(9);
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
