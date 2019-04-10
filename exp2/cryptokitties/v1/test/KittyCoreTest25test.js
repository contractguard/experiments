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
await instance.createPromoKitty(540882112, coo, {from: coo,value: 0});
await instance.createPromoKitty(590781926, coo, {from: coo,value: 0});
await instance.createPromoKitty(910179426, coo, {from: coo,value: 0});
await instance.createPromoKitty(596453220, coo, {from: coo,value: 0});
await instance.createPromoKitty(776686432, coo, {from: coo,value: 0});
await instance.createPromoKitty(827551294, coo, {from: coo,value: 0});
await instance.createPromoKitty(459613341, coo, {from: coo,value: 0});
await instance.createPromoKitty(834172441, coo, {from: coo,value: 0});
await instance.createPromoKitty(40060086, coo, {from: coo,value: 0});
await instance.createPromoKitty(384691950, coo, {from: coo,value: 0});
await instance.createPromoKitty(940255144, coo, {from: coo,value: 0});
await instance.createPromoKitty(797768409, coo, {from: coo,value: 0});
await instance.createPromoKitty(604640452, coo, {from: coo,value: 0});
await instance.createPromoKitty(313366951, coo, {from: coo,value: 0});
await instance.createPromoKitty(426484741, coo, {from: coo,value: 0});
await instance.createPromoKitty(715376649, coo, {from: coo,value: 0});
await instance.createPromoKitty(732999691, coo, {from: coo,value: 0});
await instance.createPromoKitty(346227696, coo, {from: coo,value: 0});
await instance.createPromoKitty(953851021, coo, {from: coo,value: 0});
await instance.createPromoKitty(827210014, coo, {from: coo,value: 0});
await instance.createPromoKitty(456319493, coo, {from: coo,value: 0});
await instance.createPromoKitty(531618217, coo, {from: coo,value: 0});
await instance.createPromoKitty(71053213, coo, {from: coo,value: 0});
await instance.createPromoKitty(214121574, coo, {from: coo,value: 0});
await instance.createPromoKitty(362405193, coo, {from: coo,value: 0});
await instance.createPromoKitty(736207427, coo, {from: coo,value: 0});
await instance.createPromoKitty(101836747, coo, {from: coo,value: 0});
await instance.createPromoKitty(941511159, coo, {from: coo,value: 0});
await instance.createPromoKitty(958697953, coo, {from: coo,value: 0});
await instance.createPromoKitty(239692719, coo, {from: coo,value: 0});
await instance.createPromoKitty(799514747, coo, {from: coo,value: 0});
await instance.createPromoKitty(540750262, coo, {from: coo,value: 0});
await instance.createPromoKitty(961010178, coo, {from: coo,value: 0});
await instance.createPromoKitty(171536424, coo, {from: coo,value: 0});
await instance.createPromoKitty(690225692, coo, {from: coo,value: 0});
await instance.createPromoKitty(4992176, coo, {from: coo,value: 0});
await instance.createPromoKitty(559213909, coo, {from: coo,value: 0});
await instance.createPromoKitty(863928651, coo, {from: coo,value: 0});
await instance.createPromoKitty(462477203, coo, {from: coo,value: 0});
await instance.createPromoKitty(238286403, coo, {from: coo,value: 0});
await instance.createPromoKitty(153542460, coo, {from: coo,value: 0});
await instance.createPromoKitty(795540281, coo, {from: coo,value: 0});
await instance.createPromoKitty(131666989, coo, {from: coo,value: 0});
await instance.createPromoKitty(540360322, coo, {from: coo,value: 0});
await instance.createPromoKitty(454450483, coo, {from: coo,value: 0});
await instance.createPromoKitty(597343971, coo, {from: coo,value: 0});
await instance.createPromoKitty(669270936, coo, {from: coo,value: 0});
await instance.createPromoKitty(863317592, coo, {from: coo,value: 0});
await instance.createPromoKitty(185249639, coo, {from: coo,value: 0});
await instance.createPromoKitty(150245140, coo, {from: coo,value: 0});
await instance.createPromoKitty(951783744, coo, {from: coo,value: 0});
await instance.createPromoKitty(467240904, coo, {from: coo,value: 0});
await instance.createPromoKitty(174560635, coo, {from: coo,value: 0});
await instance.createPromoKitty(132710477, coo, {from: coo,value: 0});
await instance.createPromoKitty(431346964, coo, {from: coo,value: 0});
await instance.createPromoKitty(6249199, coo, {from: coo,value: 0});
await instance.createPromoKitty(185144118, coo, {from: coo,value: 0});
await instance.createPromoKitty(668533199, coo, {from: coo,value: 0});
await instance.createPromoKitty(878739710, coo, {from: coo,value: 0});
await instance.createPromoKitty(268762118, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(16, 36, {from: coo});
await instance.breedWith(35, 26, {from: coo});
await instance.breedWith(20, 7, {from: coo});
await instance.breedWith(25, 3, {from: coo});
await instance.breedWith(30, 6, {from: coo});
await instance.breedWith(31, 29, {from: coo});
await instance.breedWith(39, 32, {from: coo});
await instance.breedWith(40, 19, {from: coo});
await instance.breedWith(2, 33, {from: coo});
await instance.breedWith(27, 4, {from: coo});
await instance.breedWith(8, 11, {from: coo});
await instance.breedWith(13, 22, {from: coo});
await instance.breedWith(14, 1, {from: coo});
await instance.breedWith(5, 24, {from: coo});
await instance.breedWith(9, 12, {from: coo});
await instance.breedWith(21, 37, {from: coo});
await instance.breedWith(23, 34, {from: coo});
await instance.breedWith(18, 10, {from: coo});
await instance.breedWith(38, 28, {from: coo});
await instance.breedWith(17, 15, {from: coo});
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
await instance.giveBirth(16);
await instance.giveBirth(35);
await instance.giveBirth(20);
await instance.giveBirth(25);
await instance.giveBirth(30);
await instance.giveBirth(31);
await instance.giveBirth(39);
await instance.giveBirth(40);
await instance.giveBirth(2);
await instance.giveBirth(27);
await instance.giveBirth(8);
await instance.giveBirth(13);
await instance.giveBirth(14);
await instance.giveBirth(5);
await instance.giveBirth(9);
await instance.giveBirth(21);
await instance.giveBirth(23);
await instance.giveBirth(18);
await instance.giveBirth(38);
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
