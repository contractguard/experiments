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
await instance.createPromoKitty(515908538, coo, {from: coo,value: 0});
await instance.createPromoKitty(406787958, coo, {from: coo,value: 0});
await instance.createPromoKitty(178089018, coo, {from: coo,value: 0});
await instance.createPromoKitty(83990142, coo, {from: coo,value: 0});
await instance.createPromoKitty(357833041, coo, {from: coo,value: 0});
await instance.createPromoKitty(161594898, coo, {from: coo,value: 0});
await instance.createPromoKitty(408402201, coo, {from: coo,value: 0});
await instance.createPromoKitty(852358858, coo, {from: coo,value: 0});
await instance.createPromoKitty(405738204, coo, {from: coo,value: 0});
await instance.createPromoKitty(148916951, coo, {from: coo,value: 0});
await instance.createPromoKitty(593034848, coo, {from: coo,value: 0});
await instance.createPromoKitty(817203253, coo, {from: coo,value: 0});
await instance.createPromoKitty(634026955, coo, {from: coo,value: 0});
await instance.createPromoKitty(39576455, coo, {from: coo,value: 0});
await instance.createPromoKitty(187307213, coo, {from: coo,value: 0});
await instance.createPromoKitty(833473901, coo, {from: coo,value: 0});
await instance.createPromoKitty(113319475, coo, {from: coo,value: 0});
await instance.createPromoKitty(334946830, coo, {from: coo,value: 0});
await instance.createPromoKitty(893935226, coo, {from: coo,value: 0});
await instance.createPromoKitty(898785250, coo, {from: coo,value: 0});
await instance.createPromoKitty(764640004, coo, {from: coo,value: 0});
await instance.createPromoKitty(459908606, coo, {from: coo,value: 0});
await instance.createPromoKitty(844979125, coo, {from: coo,value: 0});
await instance.createPromoKitty(694443313, coo, {from: coo,value: 0});
await instance.createPromoKitty(672350681, coo, {from: coo,value: 0});
await instance.createPromoKitty(934839699, coo, {from: coo,value: 0});
await instance.createPromoKitty(510453751, coo, {from: coo,value: 0});
await instance.createPromoKitty(203345480, coo, {from: coo,value: 0});
await instance.createPromoKitty(609246006, coo, {from: coo,value: 0});
await instance.createPromoKitty(371682410, coo, {from: coo,value: 0});
await instance.createPromoKitty(235971509, coo, {from: coo,value: 0});
await instance.createPromoKitty(998358508, coo, {from: coo,value: 0});
await instance.createPromoKitty(671673987, coo, {from: coo,value: 0});
await instance.createPromoKitty(169299912, coo, {from: coo,value: 0});
await instance.createPromoKitty(509745738, coo, {from: coo,value: 0});
await instance.createPromoKitty(28462134, coo, {from: coo,value: 0});
await instance.createPromoKitty(725236714, coo, {from: coo,value: 0});
await instance.createPromoKitty(432328854, coo, {from: coo,value: 0});
await instance.createPromoKitty(906467790, coo, {from: coo,value: 0});
await instance.createPromoKitty(857765935, coo, {from: coo,value: 0});
await instance.createPromoKitty(126621698, coo, {from: coo,value: 0});
await instance.createPromoKitty(434832003, coo, {from: coo,value: 0});
await instance.createPromoKitty(791568066, coo, {from: coo,value: 0});
await instance.createPromoKitty(968062068, coo, {from: coo,value: 0});
await instance.createPromoKitty(746312408, coo, {from: coo,value: 0});
await instance.createPromoKitty(100054673, coo, {from: coo,value: 0});
await instance.createPromoKitty(451502184, coo, {from: coo,value: 0});
await instance.createPromoKitty(962945506, coo, {from: coo,value: 0});
await instance.createPromoKitty(13147089, coo, {from: coo,value: 0});
await instance.createPromoKitty(818805423, coo, {from: coo,value: 0});
await instance.createPromoKitty(892177236, coo, {from: coo,value: 0});
await instance.createPromoKitty(847084885, coo, {from: coo,value: 0});
await instance.createPromoKitty(507760988, coo, {from: coo,value: 0});
await instance.createPromoKitty(577404111, coo, {from: coo,value: 0});
await instance.createPromoKitty(247168692, coo, {from: coo,value: 0});
await instance.createPromoKitty(884614164, coo, {from: coo,value: 0});
await instance.createPromoKitty(854364668, coo, {from: coo,value: 0});
await instance.createPromoKitty(711426494, coo, {from: coo,value: 0});
await instance.createPromoKitty(20920229, coo, {from: coo,value: 0});
await instance.createPromoKitty(459682526, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(3, 1, {from: coo});
await instance.breedWith(9, 38, {from: coo});
await instance.breedWith(8, 6, {from: coo});
await instance.breedWith(34, 29, {from: coo});
await instance.breedWith(2, 40, {from: coo});
await instance.breedWith(5, 28, {from: coo});
await instance.breedWith(35, 24, {from: coo});
await instance.breedWith(13, 32, {from: coo});
await instance.breedWith(27, 23, {from: coo});
await instance.breedWith(7, 17, {from: coo});
await instance.breedWith(16, 25, {from: coo});
await instance.breedWith(37, 39, {from: coo});
await instance.breedWith(4, 33, {from: coo});
await instance.breedWith(14, 10, {from: coo});
await instance.breedWith(18, 30, {from: coo});
await instance.breedWith(11, 19, {from: coo});
await instance.breedWith(20, 22, {from: coo});
await instance.breedWith(26, 31, {from: coo});
await instance.breedWith(36, 15, {from: coo});
await instance.breedWith(21, 12, {from: coo});
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
await instance.giveBirth(3);
await instance.giveBirth(9);
await instance.giveBirth(8);
await instance.giveBirth(34);
await instance.giveBirth(2);
await instance.giveBirth(5);
await instance.giveBirth(35);
await instance.giveBirth(13);
await instance.giveBirth(27);
await instance.giveBirth(7);
await instance.giveBirth(16);
await instance.giveBirth(37);
await instance.giveBirth(4);
await instance.giveBirth(14);
await instance.giveBirth(18);
await instance.giveBirth(11);
await instance.giveBirth(20);
await instance.giveBirth(26);
await instance.giveBirth(36);
await instance.giveBirth(21);
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
