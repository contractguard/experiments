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
await instance.createPromoKitty(681203604, coo, {from: coo,value: 0});
await instance.createPromoKitty(765163981, coo, {from: coo,value: 0});
await instance.createPromoKitty(833302692, coo, {from: coo,value: 0});
await instance.createPromoKitty(914740565, coo, {from: coo,value: 0});
await instance.createPromoKitty(188069434, coo, {from: coo,value: 0});
await instance.createPromoKitty(328593853, coo, {from: coo,value: 0});
await instance.createPromoKitty(64108089, coo, {from: coo,value: 0});
await instance.createPromoKitty(984928821, coo, {from: coo,value: 0});
await instance.createPromoKitty(518190688, coo, {from: coo,value: 0});
await instance.createPromoKitty(745290331, coo, {from: coo,value: 0});
await instance.createPromoKitty(643619020, coo, {from: coo,value: 0});
await instance.createPromoKitty(203094241, coo, {from: coo,value: 0});
await instance.createPromoKitty(696212476, coo, {from: coo,value: 0});
await instance.createPromoKitty(971362659, coo, {from: coo,value: 0});
await instance.createPromoKitty(92451107, coo, {from: coo,value: 0});
await instance.createPromoKitty(291704848, coo, {from: coo,value: 0});
await instance.createPromoKitty(731423183, coo, {from: coo,value: 0});
await instance.createPromoKitty(809967159, coo, {from: coo,value: 0});
await instance.createPromoKitty(855275122, coo, {from: coo,value: 0});
await instance.createPromoKitty(550714219, coo, {from: coo,value: 0});
await instance.createPromoKitty(301660421, coo, {from: coo,value: 0});
await instance.createPromoKitty(566142179, coo, {from: coo,value: 0});
await instance.createPromoKitty(681585397, coo, {from: coo,value: 0});
await instance.createPromoKitty(769959591, coo, {from: coo,value: 0});
await instance.createPromoKitty(89253100, coo, {from: coo,value: 0});
await instance.createPromoKitty(250736868, coo, {from: coo,value: 0});
await instance.createPromoKitty(465341354, coo, {from: coo,value: 0});
await instance.createPromoKitty(657706413, coo, {from: coo,value: 0});
await instance.createPromoKitty(741502676, coo, {from: coo,value: 0});
await instance.createPromoKitty(238866805, coo, {from: coo,value: 0});
await instance.createPromoKitty(155612413, coo, {from: coo,value: 0});
await instance.createPromoKitty(25113024, coo, {from: coo,value: 0});
await instance.createPromoKitty(625432623, coo, {from: coo,value: 0});
await instance.createPromoKitty(227658280, coo, {from: coo,value: 0});
await instance.createPromoKitty(590493832, coo, {from: coo,value: 0});
await instance.createPromoKitty(766089804, coo, {from: coo,value: 0});
await instance.createPromoKitty(972459712, coo, {from: coo,value: 0});
await instance.createPromoKitty(503744121, coo, {from: coo,value: 0});
await instance.createPromoKitty(718545310, coo, {from: coo,value: 0});
await instance.createPromoKitty(743882421, coo, {from: coo,value: 0});
await instance.createPromoKitty(777362222, coo, {from: coo,value: 0});
await instance.createPromoKitty(824278173, coo, {from: coo,value: 0});
await instance.createPromoKitty(673369244, coo, {from: coo,value: 0});
await instance.createPromoKitty(217936176, coo, {from: coo,value: 0});
await instance.createPromoKitty(959942436, coo, {from: coo,value: 0});
await instance.createPromoKitty(657727056, coo, {from: coo,value: 0});
await instance.createPromoKitty(481846150, coo, {from: coo,value: 0});
await instance.createPromoKitty(955130421, coo, {from: coo,value: 0});
await instance.createPromoKitty(448168115, coo, {from: coo,value: 0});
await instance.createPromoKitty(437678496, coo, {from: coo,value: 0});
await instance.createPromoKitty(71988946, coo, {from: coo,value: 0});
await instance.createPromoKitty(642707145, coo, {from: coo,value: 0});
await instance.createPromoKitty(868525349, coo, {from: coo,value: 0});
await instance.createPromoKitty(683192114, coo, {from: coo,value: 0});
await instance.createPromoKitty(533726915, coo, {from: coo,value: 0});
await instance.createPromoKitty(755019244, coo, {from: coo,value: 0});
await instance.createPromoKitty(780035625, coo, {from: coo,value: 0});
await instance.createPromoKitty(134240932, coo, {from: coo,value: 0});
await instance.createPromoKitty(946553507, coo, {from: coo,value: 0});
await instance.createPromoKitty(818022718, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(31, 36, {from: coo});
await instance.breedWith(14, 16, {from: coo});
await instance.breedWith(26, 4, {from: coo});
await instance.breedWith(37, 33, {from: coo});
await instance.breedWith(22, 9, {from: coo});
await instance.breedWith(15, 24, {from: coo});
await instance.breedWith(5, 25, {from: coo});
await instance.breedWith(40, 10, {from: coo});
await instance.breedWith(23, 20, {from: coo});
await instance.breedWith(30, 38, {from: coo});
await instance.breedWith(13, 27, {from: coo});
await instance.breedWith(34, 11, {from: coo});
await instance.breedWith(28, 12, {from: coo});
await instance.breedWith(39, 7, {from: coo});
await instance.breedWith(3, 18, {from: coo});
await instance.breedWith(35, 6, {from: coo});
await instance.breedWith(19, 32, {from: coo});
await instance.breedWith(8, 2, {from: coo});
await instance.breedWith(1, 17, {from: coo});
await instance.breedWith(29, 21, {from: coo});
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
await instance.giveBirth(31);
await instance.giveBirth(14);
await instance.giveBirth(26);
await instance.giveBirth(37);
await instance.giveBirth(22);
await instance.giveBirth(15);
await instance.giveBirth(5);
await instance.giveBirth(40);
await instance.giveBirth(23);
await instance.giveBirth(30);
await instance.giveBirth(13);
await instance.giveBirth(34);
await instance.giveBirth(28);
await instance.giveBirth(39);
await instance.giveBirth(3);
await instance.giveBirth(35);
await instance.giveBirth(19);
await instance.giveBirth(8);
await instance.giveBirth(1);
await instance.giveBirth(29);
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
