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
await instance.createPromoKitty(870529569, coo, {from: coo,value: 0});
await instance.createPromoKitty(966118849, coo, {from: coo,value: 0});
await instance.createPromoKitty(182251091, coo, {from: coo,value: 0});
await instance.createPromoKitty(268614582, coo, {from: coo,value: 0});
await instance.createPromoKitty(670362340, coo, {from: coo,value: 0});
await instance.createPromoKitty(880272453, coo, {from: coo,value: 0});
await instance.createPromoKitty(461647115, coo, {from: coo,value: 0});
await instance.createPromoKitty(256554939, coo, {from: coo,value: 0});
await instance.createPromoKitty(95074896, coo, {from: coo,value: 0});
await instance.createPromoKitty(401160359, coo, {from: coo,value: 0});
await instance.createPromoKitty(472089601, coo, {from: coo,value: 0});
await instance.createPromoKitty(349732901, coo, {from: coo,value: 0});
await instance.createPromoKitty(559496712, coo, {from: coo,value: 0});
await instance.createPromoKitty(388715976, coo, {from: coo,value: 0});
await instance.createPromoKitty(968631710, coo, {from: coo,value: 0});
await instance.createPromoKitty(402449202, coo, {from: coo,value: 0});
await instance.createPromoKitty(76228070, coo, {from: coo,value: 0});
await instance.createPromoKitty(808871983, coo, {from: coo,value: 0});
await instance.createPromoKitty(726663114, coo, {from: coo,value: 0});
await instance.createPromoKitty(1868904, coo, {from: coo,value: 0});
await instance.createPromoKitty(84745937, coo, {from: coo,value: 0});
await instance.createPromoKitty(517602774, coo, {from: coo,value: 0});
await instance.createPromoKitty(223633641, coo, {from: coo,value: 0});
await instance.createPromoKitty(843739739, coo, {from: coo,value: 0});
await instance.createPromoKitty(902482775, coo, {from: coo,value: 0});
await instance.createPromoKitty(652348739, coo, {from: coo,value: 0});
await instance.createPromoKitty(763954435, coo, {from: coo,value: 0});
await instance.createPromoKitty(405222839, coo, {from: coo,value: 0});
await instance.createPromoKitty(473048132, coo, {from: coo,value: 0});
await instance.createPromoKitty(32261080, coo, {from: coo,value: 0});
await instance.createPromoKitty(5247636, coo, {from: coo,value: 0});
await instance.createPromoKitty(119932901, coo, {from: coo,value: 0});
await instance.createPromoKitty(143330593, coo, {from: coo,value: 0});
await instance.createPromoKitty(754497321, coo, {from: coo,value: 0});
await instance.createPromoKitty(976507327, coo, {from: coo,value: 0});
await instance.createPromoKitty(463650354, coo, {from: coo,value: 0});
await instance.createPromoKitty(979115802, coo, {from: coo,value: 0});
await instance.createPromoKitty(635471629, coo, {from: coo,value: 0});
await instance.createPromoKitty(364868841, coo, {from: coo,value: 0});
await instance.createPromoKitty(707693335, coo, {from: coo,value: 0});
await instance.createPromoKitty(852127243, coo, {from: coo,value: 0});
await instance.createPromoKitty(748347320, coo, {from: coo,value: 0});
await instance.createPromoKitty(361208080, coo, {from: coo,value: 0});
await instance.createPromoKitty(331271634, coo, {from: coo,value: 0});
await instance.createPromoKitty(110812590, coo, {from: coo,value: 0});
await instance.createPromoKitty(307376966, coo, {from: coo,value: 0});
await instance.createPromoKitty(136650929, coo, {from: coo,value: 0});
await instance.createPromoKitty(271826544, coo, {from: coo,value: 0});
await instance.createPromoKitty(824352543, coo, {from: coo,value: 0});
await instance.createPromoKitty(235471837, coo, {from: coo,value: 0});
await instance.createPromoKitty(813088926, coo, {from: coo,value: 0});
await instance.createPromoKitty(871140993, coo, {from: coo,value: 0});
await instance.createPromoKitty(885086561, coo, {from: coo,value: 0});
await instance.createPromoKitty(280140757, coo, {from: coo,value: 0});
await instance.createPromoKitty(998603882, coo, {from: coo,value: 0});
await instance.createPromoKitty(317324883, coo, {from: coo,value: 0});
await instance.createPromoKitty(618740722, coo, {from: coo,value: 0});
await instance.createPromoKitty(495554101, coo, {from: coo,value: 0});
await instance.createPromoKitty(957901244, coo, {from: coo,value: 0});
await instance.createPromoKitty(544250843, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(23, 28, {from: coo});
await instance.breedWith(17, 14, {from: coo});
await instance.breedWith(20, 10, {from: coo});
await instance.breedWith(16, 32, {from: coo});
await instance.breedWith(27, 19, {from: coo});
await instance.breedWith(2, 24, {from: coo});
await instance.breedWith(11, 9, {from: coo});
await instance.breedWith(33, 40, {from: coo});
await instance.breedWith(34, 21, {from: coo});
await instance.breedWith(22, 37, {from: coo});
await instance.breedWith(8, 15, {from: coo});
await instance.breedWith(26, 1, {from: coo});
await instance.breedWith(35, 7, {from: coo});
await instance.breedWith(12, 39, {from: coo});
await instance.breedWith(13, 25, {from: coo});
await instance.breedWith(31, 18, {from: coo});
await instance.breedWith(36, 6, {from: coo});
await instance.breedWith(4, 5, {from: coo});
await instance.breedWith(30, 38, {from: coo});
await instance.breedWith(29, 3, {from: coo});
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
await instance.giveBirth(23);
await instance.giveBirth(17);
await instance.giveBirth(20);
await instance.giveBirth(16);
await instance.giveBirth(27);
await instance.giveBirth(2);
await instance.giveBirth(11);
await instance.giveBirth(33);
await instance.giveBirth(34);
await instance.giveBirth(22);
await instance.giveBirth(8);
await instance.giveBirth(26);
await instance.giveBirth(35);
await instance.giveBirth(12);
await instance.giveBirth(13);
await instance.giveBirth(31);
await instance.giveBirth(36);
await instance.giveBirth(4);
await instance.giveBirth(30);
await instance.giveBirth(29);
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
