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
await instance.createPromoKitty(45913217, coo, {from: coo,value: 0});
await instance.createPromoKitty(771809546, coo, {from: coo,value: 0});
await instance.createPromoKitty(946555112, coo, {from: coo,value: 0});
await instance.createPromoKitty(759607382, coo, {from: coo,value: 0});
await instance.createPromoKitty(800960609, coo, {from: coo,value: 0});
await instance.createPromoKitty(575585276, coo, {from: coo,value: 0});
await instance.createPromoKitty(784521396, coo, {from: coo,value: 0});
await instance.createPromoKitty(495344721, coo, {from: coo,value: 0});
await instance.createPromoKitty(323904969, coo, {from: coo,value: 0});
await instance.createPromoKitty(884962889, coo, {from: coo,value: 0});
await instance.createPromoKitty(529841166, coo, {from: coo,value: 0});
await instance.createPromoKitty(799147222, coo, {from: coo,value: 0});
await instance.createPromoKitty(692802103, coo, {from: coo,value: 0});
await instance.createPromoKitty(972952641, coo, {from: coo,value: 0});
await instance.createPromoKitty(594638572, coo, {from: coo,value: 0});
await instance.createPromoKitty(23079900, coo, {from: coo,value: 0});
await instance.createPromoKitty(878985897, coo, {from: coo,value: 0});
await instance.createPromoKitty(833884660, coo, {from: coo,value: 0});
await instance.createPromoKitty(906662806, coo, {from: coo,value: 0});
await instance.createPromoKitty(600355163, coo, {from: coo,value: 0});
await instance.createPromoKitty(220257045, coo, {from: coo,value: 0});
await instance.createPromoKitty(236335138, coo, {from: coo,value: 0});
await instance.createPromoKitty(748440857, coo, {from: coo,value: 0});
await instance.createPromoKitty(232641015, coo, {from: coo,value: 0});
await instance.createPromoKitty(617973003, coo, {from: coo,value: 0});
await instance.createPromoKitty(315414410, coo, {from: coo,value: 0});
await instance.createPromoKitty(257658436, coo, {from: coo,value: 0});
await instance.createPromoKitty(145106642, coo, {from: coo,value: 0});
await instance.createPromoKitty(373189889, coo, {from: coo,value: 0});
await instance.createPromoKitty(802249025, coo, {from: coo,value: 0});
await instance.createPromoKitty(978517362, coo, {from: coo,value: 0});
await instance.createPromoKitty(586942286, coo, {from: coo,value: 0});
await instance.createPromoKitty(831493830, coo, {from: coo,value: 0});
await instance.createPromoKitty(929621051, coo, {from: coo,value: 0});
await instance.createPromoKitty(795317876, coo, {from: coo,value: 0});
await instance.createPromoKitty(233926254, coo, {from: coo,value: 0});
await instance.createPromoKitty(194234084, coo, {from: coo,value: 0});
await instance.createPromoKitty(81879809, coo, {from: coo,value: 0});
await instance.createPromoKitty(731934859, coo, {from: coo,value: 0});
await instance.createPromoKitty(174900884, coo, {from: coo,value: 0});
await instance.createPromoKitty(812221070, coo, {from: coo,value: 0});
await instance.createPromoKitty(342572287, coo, {from: coo,value: 0});
await instance.createPromoKitty(135799165, coo, {from: coo,value: 0});
await instance.createPromoKitty(983628856, coo, {from: coo,value: 0});
await instance.createPromoKitty(796606695, coo, {from: coo,value: 0});
await instance.createPromoKitty(191144656, coo, {from: coo,value: 0});
await instance.createPromoKitty(679542954, coo, {from: coo,value: 0});
await instance.createPromoKitty(895122702, coo, {from: coo,value: 0});
await instance.createPromoKitty(750326004, coo, {from: coo,value: 0});
await instance.createPromoKitty(300159150, coo, {from: coo,value: 0});
await instance.createPromoKitty(558528563, coo, {from: coo,value: 0});
await instance.createPromoKitty(923278871, coo, {from: coo,value: 0});
await instance.createPromoKitty(941840668, coo, {from: coo,value: 0});
await instance.createPromoKitty(779298866, coo, {from: coo,value: 0});
await instance.createPromoKitty(201177210, coo, {from: coo,value: 0});
await instance.createPromoKitty(322311689, coo, {from: coo,value: 0});
await instance.createPromoKitty(40116023, coo, {from: coo,value: 0});
await instance.createPromoKitty(924996797, coo, {from: coo,value: 0});
await instance.createPromoKitty(738114018, coo, {from: coo,value: 0});
await instance.createPromoKitty(617899211, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(6, 21, {from: coo});
await instance.breedWith(35, 31, {from: coo});
await instance.breedWith(2, 24, {from: coo});
await instance.breedWith(10, 5, {from: coo});
await instance.breedWith(12, 3, {from: coo});
await instance.breedWith(9, 38, {from: coo});
await instance.breedWith(14, 16, {from: coo});
await instance.breedWith(20, 25, {from: coo});
await instance.breedWith(15, 39, {from: coo});
await instance.breedWith(40, 19, {from: coo});
await instance.breedWith(34, 4, {from: coo});
await instance.breedWith(7, 32, {from: coo});
await instance.breedWith(29, 8, {from: coo});
await instance.breedWith(1, 27, {from: coo});
await instance.breedWith(22, 17, {from: coo});
await instance.breedWith(13, 30, {from: coo});
await instance.breedWith(11, 26, {from: coo});
await instance.breedWith(18, 23, {from: coo});
await instance.breedWith(36, 28, {from: coo});
await instance.breedWith(33, 37, {from: coo});
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
await instance.giveBirth(6);
await instance.giveBirth(35);
await instance.giveBirth(2);
await instance.giveBirth(10);
await instance.giveBirth(12);
await instance.giveBirth(9);
await instance.giveBirth(14);
await instance.giveBirth(20);
await instance.giveBirth(15);
await instance.giveBirth(40);
await instance.giveBirth(34);
await instance.giveBirth(7);
await instance.giveBirth(29);
await instance.giveBirth(1);
await instance.giveBirth(22);
await instance.giveBirth(13);
await instance.giveBirth(11);
await instance.giveBirth(18);
await instance.giveBirth(36);
await instance.giveBirth(33);
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
