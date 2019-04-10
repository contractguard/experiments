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
await instance.createPromoKitty(308212433, coo, {from: coo,value: 0});
await instance.createPromoKitty(782737762, coo, {from: coo,value: 0});
await instance.createPromoKitty(876378975, coo, {from: coo,value: 0});
await instance.createPromoKitty(467529057, coo, {from: coo,value: 0});
await instance.createPromoKitty(167344195, coo, {from: coo,value: 0});
await instance.createPromoKitty(502051839, coo, {from: coo,value: 0});
await instance.createPromoKitty(358558159, coo, {from: coo,value: 0});
await instance.createPromoKitty(596930122, coo, {from: coo,value: 0});
await instance.createPromoKitty(954053679, coo, {from: coo,value: 0});
await instance.createPromoKitty(307119182, coo, {from: coo,value: 0});
await instance.createPromoKitty(422955988, coo, {from: coo,value: 0});
await instance.createPromoKitty(122089840, coo, {from: coo,value: 0});
await instance.createPromoKitty(196257973, coo, {from: coo,value: 0});
await instance.createPromoKitty(20238546, coo, {from: coo,value: 0});
await instance.createPromoKitty(647043350, coo, {from: coo,value: 0});
await instance.createPromoKitty(446340145, coo, {from: coo,value: 0});
await instance.createPromoKitty(811447942, coo, {from: coo,value: 0});
await instance.createPromoKitty(542866646, coo, {from: coo,value: 0});
await instance.createPromoKitty(762550655, coo, {from: coo,value: 0});
await instance.createPromoKitty(364335724, coo, {from: coo,value: 0});
await instance.createPromoKitty(860489611, coo, {from: coo,value: 0});
await instance.createPromoKitty(765200275, coo, {from: coo,value: 0});
await instance.createPromoKitty(167700061, coo, {from: coo,value: 0});
await instance.createPromoKitty(850146307, coo, {from: coo,value: 0});
await instance.createPromoKitty(709727278, coo, {from: coo,value: 0});
await instance.createPromoKitty(339210926, coo, {from: coo,value: 0});
await instance.createPromoKitty(699574872, coo, {from: coo,value: 0});
await instance.createPromoKitty(186266683, coo, {from: coo,value: 0});
await instance.createPromoKitty(788803727, coo, {from: coo,value: 0});
await instance.createPromoKitty(414952606, coo, {from: coo,value: 0});
await instance.createPromoKitty(20278856, coo, {from: coo,value: 0});
await instance.createPromoKitty(886603463, coo, {from: coo,value: 0});
await instance.createPromoKitty(233539026, coo, {from: coo,value: 0});
await instance.createPromoKitty(607469899, coo, {from: coo,value: 0});
await instance.createPromoKitty(775636737, coo, {from: coo,value: 0});
await instance.createPromoKitty(477663487, coo, {from: coo,value: 0});
await instance.createPromoKitty(154843318, coo, {from: coo,value: 0});
await instance.createPromoKitty(901495953, coo, {from: coo,value: 0});
await instance.createPromoKitty(79685404, coo, {from: coo,value: 0});
await instance.createPromoKitty(84060838, coo, {from: coo,value: 0});
await instance.createPromoKitty(206081180, coo, {from: coo,value: 0});
await instance.createPromoKitty(579660481, coo, {from: coo,value: 0});
await instance.createPromoKitty(79543042, coo, {from: coo,value: 0});
await instance.createPromoKitty(315516912, coo, {from: coo,value: 0});
await instance.createPromoKitty(113383621, coo, {from: coo,value: 0});
await instance.createPromoKitty(604818286, coo, {from: coo,value: 0});
await instance.createPromoKitty(835011762, coo, {from: coo,value: 0});
await instance.createPromoKitty(225402963, coo, {from: coo,value: 0});
await instance.createPromoKitty(922708602, coo, {from: coo,value: 0});
await instance.createPromoKitty(612206135, coo, {from: coo,value: 0});
await instance.createPromoKitty(20612318, coo, {from: coo,value: 0});
await instance.createPromoKitty(238055555, coo, {from: coo,value: 0});
await instance.createPromoKitty(786698607, coo, {from: coo,value: 0});
await instance.createPromoKitty(227290590, coo, {from: coo,value: 0});
await instance.createPromoKitty(848155248, coo, {from: coo,value: 0});
await instance.createPromoKitty(749297010, coo, {from: coo,value: 0});
await instance.createPromoKitty(92432928, coo, {from: coo,value: 0});
await instance.createPromoKitty(678898014, coo, {from: coo,value: 0});
await instance.createPromoKitty(435661218, coo, {from: coo,value: 0});
await instance.createPromoKitty(597396356, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(27, 23, {from: coo});
await instance.breedWith(3, 25, {from: coo});
await instance.breedWith(4, 14, {from: coo});
await instance.breedWith(39, 5, {from: coo});
await instance.breedWith(1, 16, {from: coo});
await instance.breedWith(18, 34, {from: coo});
await instance.breedWith(19, 12, {from: coo});
await instance.breedWith(37, 36, {from: coo});
await instance.breedWith(22, 10, {from: coo});
await instance.breedWith(26, 2, {from: coo});
await instance.breedWith(8, 30, {from: coo});
await instance.breedWith(33, 24, {from: coo});
await instance.breedWith(29, 28, {from: coo});
await instance.breedWith(11, 35, {from: coo});
await instance.breedWith(6, 40, {from: coo});
await instance.breedWith(13, 17, {from: coo});
await instance.breedWith(9, 21, {from: coo});
await instance.breedWith(31, 20, {from: coo});
await instance.breedWith(32, 38, {from: coo});
await instance.breedWith(15, 7, {from: coo});
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
await instance.giveBirth(27);
await instance.giveBirth(3);
await instance.giveBirth(4);
await instance.giveBirth(39);
await instance.giveBirth(1);
await instance.giveBirth(18);
await instance.giveBirth(19);
await instance.giveBirth(37);
await instance.giveBirth(22);
await instance.giveBirth(26);
await instance.giveBirth(8);
await instance.giveBirth(33);
await instance.giveBirth(29);
await instance.giveBirth(11);
await instance.giveBirth(6);
await instance.giveBirth(13);
await instance.giveBirth(9);
await instance.giveBirth(31);
await instance.giveBirth(32);
await instance.giveBirth(15);
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
