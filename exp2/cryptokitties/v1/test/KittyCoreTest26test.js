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
await instance.createPromoKitty(377559004, coo, {from: coo,value: 0});
await instance.createPromoKitty(842413639, coo, {from: coo,value: 0});
await instance.createPromoKitty(154223142, coo, {from: coo,value: 0});
await instance.createPromoKitty(338021500, coo, {from: coo,value: 0});
await instance.createPromoKitty(406256768, coo, {from: coo,value: 0});
await instance.createPromoKitty(757698786, coo, {from: coo,value: 0});
await instance.createPromoKitty(183255211, coo, {from: coo,value: 0});
await instance.createPromoKitty(295718399, coo, {from: coo,value: 0});
await instance.createPromoKitty(407192308, coo, {from: coo,value: 0});
await instance.createPromoKitty(999715780, coo, {from: coo,value: 0});
await instance.createPromoKitty(903412323, coo, {from: coo,value: 0});
await instance.createPromoKitty(833443350, coo, {from: coo,value: 0});
await instance.createPromoKitty(479424365, coo, {from: coo,value: 0});
await instance.createPromoKitty(334322703, coo, {from: coo,value: 0});
await instance.createPromoKitty(935997408, coo, {from: coo,value: 0});
await instance.createPromoKitty(444041048, coo, {from: coo,value: 0});
await instance.createPromoKitty(244540152, coo, {from: coo,value: 0});
await instance.createPromoKitty(32983833, coo, {from: coo,value: 0});
await instance.createPromoKitty(144858445, coo, {from: coo,value: 0});
await instance.createPromoKitty(211919654, coo, {from: coo,value: 0});
await instance.createPromoKitty(396028099, coo, {from: coo,value: 0});
await instance.createPromoKitty(643265327, coo, {from: coo,value: 0});
await instance.createPromoKitty(733585681, coo, {from: coo,value: 0});
await instance.createPromoKitty(754068324, coo, {from: coo,value: 0});
await instance.createPromoKitty(428094060, coo, {from: coo,value: 0});
await instance.createPromoKitty(831241382, coo, {from: coo,value: 0});
await instance.createPromoKitty(417810652, coo, {from: coo,value: 0});
await instance.createPromoKitty(395287317, coo, {from: coo,value: 0});
await instance.createPromoKitty(536309138, coo, {from: coo,value: 0});
await instance.createPromoKitty(406023976, coo, {from: coo,value: 0});
await instance.createPromoKitty(206688030, coo, {from: coo,value: 0});
await instance.createPromoKitty(594463883, coo, {from: coo,value: 0});
await instance.createPromoKitty(776197335, coo, {from: coo,value: 0});
await instance.createPromoKitty(165466217, coo, {from: coo,value: 0});
await instance.createPromoKitty(127670675, coo, {from: coo,value: 0});
await instance.createPromoKitty(918229769, coo, {from: coo,value: 0});
await instance.createPromoKitty(584219205, coo, {from: coo,value: 0});
await instance.createPromoKitty(189457623, coo, {from: coo,value: 0});
await instance.createPromoKitty(819316113, coo, {from: coo,value: 0});
await instance.createPromoKitty(233033612, coo, {from: coo,value: 0});
await instance.createPromoKitty(226552177, coo, {from: coo,value: 0});
await instance.createPromoKitty(805140986, coo, {from: coo,value: 0});
await instance.createPromoKitty(738818411, coo, {from: coo,value: 0});
await instance.createPromoKitty(639220475, coo, {from: coo,value: 0});
await instance.createPromoKitty(954942755, coo, {from: coo,value: 0});
await instance.createPromoKitty(649603058, coo, {from: coo,value: 0});
await instance.createPromoKitty(453183459, coo, {from: coo,value: 0});
await instance.createPromoKitty(24973414, coo, {from: coo,value: 0});
await instance.createPromoKitty(406132595, coo, {from: coo,value: 0});
await instance.createPromoKitty(460536108, coo, {from: coo,value: 0});
await instance.createPromoKitty(574362725, coo, {from: coo,value: 0});
await instance.createPromoKitty(639754694, coo, {from: coo,value: 0});
await instance.createPromoKitty(751697977, coo, {from: coo,value: 0});
await instance.createPromoKitty(524983153, coo, {from: coo,value: 0});
await instance.createPromoKitty(154739930, coo, {from: coo,value: 0});
await instance.createPromoKitty(409523157, coo, {from: coo,value: 0});
await instance.createPromoKitty(966928719, coo, {from: coo,value: 0});
await instance.createPromoKitty(150133344, coo, {from: coo,value: 0});
await instance.createPromoKitty(949059268, coo, {from: coo,value: 0});
await instance.createPromoKitty(521522105, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(33, 3, {from: coo});
await instance.breedWith(15, 9, {from: coo});
await instance.breedWith(8, 14, {from: coo});
await instance.breedWith(28, 7, {from: coo});
await instance.breedWith(38, 26, {from: coo});
await instance.breedWith(24, 13, {from: coo});
await instance.breedWith(19, 4, {from: coo});
await instance.breedWith(21, 27, {from: coo});
await instance.breedWith(32, 31, {from: coo});
await instance.breedWith(18, 20, {from: coo});
await instance.breedWith(16, 1, {from: coo});
await instance.breedWith(17, 2, {from: coo});
await instance.breedWith(39, 36, {from: coo});
await instance.breedWith(30, 5, {from: coo});
await instance.breedWith(23, 6, {from: coo});
await instance.breedWith(25, 37, {from: coo});
await instance.breedWith(10, 29, {from: coo});
await instance.breedWith(34, 22, {from: coo});
await instance.breedWith(12, 40, {from: coo});
await instance.breedWith(11, 35, {from: coo});
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
await instance.giveBirth(33);
await instance.giveBirth(15);
await instance.giveBirth(8);
await instance.giveBirth(28);
await instance.giveBirth(38);
await instance.giveBirth(24);
await instance.giveBirth(19);
await instance.giveBirth(21);
await instance.giveBirth(32);
await instance.giveBirth(18);
await instance.giveBirth(16);
await instance.giveBirth(17);
await instance.giveBirth(39);
await instance.giveBirth(30);
await instance.giveBirth(23);
await instance.giveBirth(25);
await instance.giveBirth(10);
await instance.giveBirth(34);
await instance.giveBirth(12);
await instance.giveBirth(11);
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
