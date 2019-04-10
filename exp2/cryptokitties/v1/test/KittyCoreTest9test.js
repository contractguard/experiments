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
await instance.createPromoKitty(424678946, coo, {from: coo,value: 0});
await instance.createPromoKitty(281902523, coo, {from: coo,value: 0});
await instance.createPromoKitty(257558409, coo, {from: coo,value: 0});
await instance.createPromoKitty(195341727, coo, {from: coo,value: 0});
await instance.createPromoKitty(790190395, coo, {from: coo,value: 0});
await instance.createPromoKitty(298042601, coo, {from: coo,value: 0});
await instance.createPromoKitty(596737106, coo, {from: coo,value: 0});
await instance.createPromoKitty(343154253, coo, {from: coo,value: 0});
await instance.createPromoKitty(339964209, coo, {from: coo,value: 0});
await instance.createPromoKitty(479845555, coo, {from: coo,value: 0});
await instance.createPromoKitty(897546921, coo, {from: coo,value: 0});
await instance.createPromoKitty(427277915, coo, {from: coo,value: 0});
await instance.createPromoKitty(308700997, coo, {from: coo,value: 0});
await instance.createPromoKitty(177304758, coo, {from: coo,value: 0});
await instance.createPromoKitty(983275468, coo, {from: coo,value: 0});
await instance.createPromoKitty(600920154, coo, {from: coo,value: 0});
await instance.createPromoKitty(246199937, coo, {from: coo,value: 0});
await instance.createPromoKitty(309438876, coo, {from: coo,value: 0});
await instance.createPromoKitty(561872299, coo, {from: coo,value: 0});
await instance.createPromoKitty(803265562, coo, {from: coo,value: 0});
await instance.createPromoKitty(701198249, coo, {from: coo,value: 0});
await instance.createPromoKitty(315493535, coo, {from: coo,value: 0});
await instance.createPromoKitty(593054573, coo, {from: coo,value: 0});
await instance.createPromoKitty(488730948, coo, {from: coo,value: 0});
await instance.createPromoKitty(487476457, coo, {from: coo,value: 0});
await instance.createPromoKitty(819029973, coo, {from: coo,value: 0});
await instance.createPromoKitty(645904009, coo, {from: coo,value: 0});
await instance.createPromoKitty(552183836, coo, {from: coo,value: 0});
await instance.createPromoKitty(923770509, coo, {from: coo,value: 0});
await instance.createPromoKitty(226706329, coo, {from: coo,value: 0});
await instance.createPromoKitty(33961814, coo, {from: coo,value: 0});
await instance.createPromoKitty(726041468, coo, {from: coo,value: 0});
await instance.createPromoKitty(812894976, coo, {from: coo,value: 0});
await instance.createPromoKitty(467610022, coo, {from: coo,value: 0});
await instance.createPromoKitty(552142909, coo, {from: coo,value: 0});
await instance.createPromoKitty(996191302, coo, {from: coo,value: 0});
await instance.createPromoKitty(329212472, coo, {from: coo,value: 0});
await instance.createPromoKitty(944749746, coo, {from: coo,value: 0});
await instance.createPromoKitty(347497252, coo, {from: coo,value: 0});
await instance.createPromoKitty(841297264, coo, {from: coo,value: 0});
await instance.createPromoKitty(279087215, coo, {from: coo,value: 0});
await instance.createPromoKitty(670749952, coo, {from: coo,value: 0});
await instance.createPromoKitty(504258833, coo, {from: coo,value: 0});
await instance.createPromoKitty(912241737, coo, {from: coo,value: 0});
await instance.createPromoKitty(807526642, coo, {from: coo,value: 0});
await instance.createPromoKitty(694415827, coo, {from: coo,value: 0});
await instance.createPromoKitty(904935253, coo, {from: coo,value: 0});
await instance.createPromoKitty(275419185, coo, {from: coo,value: 0});
await instance.createPromoKitty(583029019, coo, {from: coo,value: 0});
await instance.createPromoKitty(395045502, coo, {from: coo,value: 0});
await instance.createPromoKitty(26245804, coo, {from: coo,value: 0});
await instance.createPromoKitty(965388236, coo, {from: coo,value: 0});
await instance.createPromoKitty(98318060, coo, {from: coo,value: 0});
await instance.createPromoKitty(149466304, coo, {from: coo,value: 0});
await instance.createPromoKitty(627665204, coo, {from: coo,value: 0});
await instance.createPromoKitty(95777012, coo, {from: coo,value: 0});
await instance.createPromoKitty(324976847, coo, {from: coo,value: 0});
await instance.createPromoKitty(812881749, coo, {from: coo,value: 0});
await instance.createPromoKitty(172496767, coo, {from: coo,value: 0});
await instance.createPromoKitty(830120312, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(32, 26, {from: coo});
await instance.breedWith(39, 13, {from: coo});
await instance.breedWith(35, 17, {from: coo});
await instance.breedWith(9, 28, {from: coo});
await instance.breedWith(4, 8, {from: coo});
await instance.breedWith(29, 38, {from: coo});
await instance.breedWith(31, 14, {from: coo});
await instance.breedWith(12, 23, {from: coo});
await instance.breedWith(3, 19, {from: coo});
await instance.breedWith(30, 22, {from: coo});
await instance.breedWith(6, 33, {from: coo});
await instance.breedWith(5, 37, {from: coo});
await instance.breedWith(2, 18, {from: coo});
await instance.breedWith(7, 15, {from: coo});
await instance.breedWith(21, 36, {from: coo});
await instance.breedWith(24, 10, {from: coo});
await instance.breedWith(20, 25, {from: coo});
await instance.breedWith(16, 40, {from: coo});
await instance.breedWith(11, 27, {from: coo});
await instance.breedWith(1, 34, {from: coo});
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
await instance.giveBirth(32);
await instance.giveBirth(39);
await instance.giveBirth(35);
await instance.giveBirth(9);
await instance.giveBirth(4);
await instance.giveBirth(29);
await instance.giveBirth(31);
await instance.giveBirth(12);
await instance.giveBirth(3);
await instance.giveBirth(30);
await instance.giveBirth(6);
await instance.giveBirth(5);
await instance.giveBirth(2);
await instance.giveBirth(7);
await instance.giveBirth(21);
await instance.giveBirth(24);
await instance.giveBirth(20);
await instance.giveBirth(16);
await instance.giveBirth(11);
await instance.giveBirth(1);
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
// let Kit5 = await test_subjec.t_KittyCore.createPromoKitty(n4, accounts[3], {from: coo, gas: 400000, gasPrice: 1100000000, value:0});
//console.log(Kit1.logs);

//培养第一代 kitty5
await instance.breedWith(55, 56, {from: coo});
await util.forwardEVMTime(cooldowns[0]);
await instance.giveBirth(55);

//培育第二代
await instance.breedWith(57, 59, {from: coo});
await util.forwardEVMTime(cooldowns[0]);});
it('attack', async() => {
 let result_Gen2 = await instance.giveBirth(57);
});
});
