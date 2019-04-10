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
await instance.createPromoKitty(305900751, coo, {from: coo,value: 0});
await instance.createPromoKitty(732543246, coo, {from: coo,value: 0});
await instance.createPromoKitty(92243797, coo, {from: coo,value: 0});
await instance.createPromoKitty(371271099, coo, {from: coo,value: 0});
await instance.createPromoKitty(982706766, coo, {from: coo,value: 0});
await instance.createPromoKitty(242232128, coo, {from: coo,value: 0});
await instance.createPromoKitty(145078948, coo, {from: coo,value: 0});
await instance.createPromoKitty(654724753, coo, {from: coo,value: 0});
await instance.createPromoKitty(757075969, coo, {from: coo,value: 0});
await instance.createPromoKitty(905226503, coo, {from: coo,value: 0});
await instance.createPromoKitty(250811721, coo, {from: coo,value: 0});
await instance.createPromoKitty(519112773, coo, {from: coo,value: 0});
await instance.createPromoKitty(816868740, coo, {from: coo,value: 0});
await instance.createPromoKitty(844609788, coo, {from: coo,value: 0});
await instance.createPromoKitty(634101658, coo, {from: coo,value: 0});
await instance.createPromoKitty(440139105, coo, {from: coo,value: 0});
await instance.createPromoKitty(162381470, coo, {from: coo,value: 0});
await instance.createPromoKitty(926017504, coo, {from: coo,value: 0});
await instance.createPromoKitty(533531907, coo, {from: coo,value: 0});
await instance.createPromoKitty(874301953, coo, {from: coo,value: 0});
await instance.createPromoKitty(918865259, coo, {from: coo,value: 0});
await instance.createPromoKitty(401015412, coo, {from: coo,value: 0});
await instance.createPromoKitty(975878544, coo, {from: coo,value: 0});
await instance.createPromoKitty(659170874, coo, {from: coo,value: 0});
await instance.createPromoKitty(182414999, coo, {from: coo,value: 0});
await instance.createPromoKitty(16295223, coo, {from: coo,value: 0});
await instance.createPromoKitty(277504538, coo, {from: coo,value: 0});
await instance.createPromoKitty(685498934, coo, {from: coo,value: 0});
await instance.createPromoKitty(922585116, coo, {from: coo,value: 0});
await instance.createPromoKitty(676296221, coo, {from: coo,value: 0});
await instance.createPromoKitty(433065948, coo, {from: coo,value: 0});
await instance.createPromoKitty(412703311, coo, {from: coo,value: 0});
await instance.createPromoKitty(71223052, coo, {from: coo,value: 0});
await instance.createPromoKitty(411299415, coo, {from: coo,value: 0});
await instance.createPromoKitty(162896898, coo, {from: coo,value: 0});
await instance.createPromoKitty(84026142, coo, {from: coo,value: 0});
await instance.createPromoKitty(228416929, coo, {from: coo,value: 0});
await instance.createPromoKitty(102815212, coo, {from: coo,value: 0});
await instance.createPromoKitty(966094640, coo, {from: coo,value: 0});
await instance.createPromoKitty(852968113, coo, {from: coo,value: 0});
await instance.createPromoKitty(363272225, coo, {from: coo,value: 0});
await instance.createPromoKitty(749585267, coo, {from: coo,value: 0});
await instance.createPromoKitty(634758569, coo, {from: coo,value: 0});
await instance.createPromoKitty(739994477, coo, {from: coo,value: 0});
await instance.createPromoKitty(291662161, coo, {from: coo,value: 0});
await instance.createPromoKitty(411112695, coo, {from: coo,value: 0});
await instance.createPromoKitty(191249891, coo, {from: coo,value: 0});
await instance.createPromoKitty(737062822, coo, {from: coo,value: 0});
await instance.createPromoKitty(984799066, coo, {from: coo,value: 0});
await instance.createPromoKitty(251898424, coo, {from: coo,value: 0});
await instance.createPromoKitty(654518850, coo, {from: coo,value: 0});
await instance.createPromoKitty(41540980, coo, {from: coo,value: 0});
await instance.createPromoKitty(143867469, coo, {from: coo,value: 0});
await instance.createPromoKitty(213550789, coo, {from: coo,value: 0});
await instance.createPromoKitty(816660248, coo, {from: coo,value: 0});
await instance.createPromoKitty(700206028, coo, {from: coo,value: 0});
await instance.createPromoKitty(772616116, coo, {from: coo,value: 0});
await instance.createPromoKitty(879417377, coo, {from: coo,value: 0});
await instance.createPromoKitty(419032624, coo, {from: coo,value: 0});
await instance.createPromoKitty(518062433, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(29, 5, {from: coo});
await instance.breedWith(23, 40, {from: coo});
await instance.breedWith(19, 4, {from: coo});
await instance.breedWith(27, 30, {from: coo});
await instance.breedWith(36, 14, {from: coo});
await instance.breedWith(28, 37, {from: coo});
await instance.breedWith(11, 15, {from: coo});
await instance.breedWith(35, 21, {from: coo});
await instance.breedWith(1, 7, {from: coo});
await instance.breedWith(12, 20, {from: coo});
await instance.breedWith(24, 26, {from: coo});
await instance.breedWith(3, 25, {from: coo});
await instance.breedWith(10, 9, {from: coo});
await instance.breedWith(16, 34, {from: coo});
await instance.breedWith(8, 2, {from: coo});
await instance.breedWith(6, 13, {from: coo});
await instance.breedWith(17, 38, {from: coo});
await instance.breedWith(32, 22, {from: coo});
await instance.breedWith(33, 31, {from: coo});
await instance.breedWith(39, 18, {from: coo});
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
await instance.giveBirth(29);
await instance.giveBirth(23);
await instance.giveBirth(19);
await instance.giveBirth(27);
await instance.giveBirth(36);
await instance.giveBirth(28);
await instance.giveBirth(11);
await instance.giveBirth(35);
await instance.giveBirth(1);
await instance.giveBirth(12);
await instance.giveBirth(24);
await instance.giveBirth(3);
await instance.giveBirth(10);
await instance.giveBirth(16);
await instance.giveBirth(8);
await instance.giveBirth(6);
await instance.giveBirth(17);
await instance.giveBirth(32);
await instance.giveBirth(33);
await instance.giveBirth(39);
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
