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
await instance.createPromoKitty(929297321, coo, {from: coo,value: 0});
await instance.createPromoKitty(478639715, coo, {from: coo,value: 0});
await instance.createPromoKitty(834041088, coo, {from: coo,value: 0});
await instance.createPromoKitty(421766651, coo, {from: coo,value: 0});
await instance.createPromoKitty(786558651, coo, {from: coo,value: 0});
await instance.createPromoKitty(750237334, coo, {from: coo,value: 0});
await instance.createPromoKitty(533509216, coo, {from: coo,value: 0});
await instance.createPromoKitty(553365964, coo, {from: coo,value: 0});
await instance.createPromoKitty(475985635, coo, {from: coo,value: 0});
await instance.createPromoKitty(988850453, coo, {from: coo,value: 0});
await instance.createPromoKitty(444148175, coo, {from: coo,value: 0});
await instance.createPromoKitty(887841903, coo, {from: coo,value: 0});
await instance.createPromoKitty(706686221, coo, {from: coo,value: 0});
await instance.createPromoKitty(48973438, coo, {from: coo,value: 0});
await instance.createPromoKitty(234635247, coo, {from: coo,value: 0});
await instance.createPromoKitty(33426838, coo, {from: coo,value: 0});
await instance.createPromoKitty(386805991, coo, {from: coo,value: 0});
await instance.createPromoKitty(169011799, coo, {from: coo,value: 0});
await instance.createPromoKitty(894820708, coo, {from: coo,value: 0});
await instance.createPromoKitty(149949563, coo, {from: coo,value: 0});
await instance.createPromoKitty(347958712, coo, {from: coo,value: 0});
await instance.createPromoKitty(566564639, coo, {from: coo,value: 0});
await instance.createPromoKitty(433889499, coo, {from: coo,value: 0});
await instance.createPromoKitty(738283833, coo, {from: coo,value: 0});
await instance.createPromoKitty(505416379, coo, {from: coo,value: 0});
await instance.createPromoKitty(875397917, coo, {from: coo,value: 0});
await instance.createPromoKitty(100258814, coo, {from: coo,value: 0});
await instance.createPromoKitty(171730993, coo, {from: coo,value: 0});
await instance.createPromoKitty(532632136, coo, {from: coo,value: 0});
await instance.createPromoKitty(175793486, coo, {from: coo,value: 0});
await instance.createPromoKitty(858938451, coo, {from: coo,value: 0});
await instance.createPromoKitty(844060806, coo, {from: coo,value: 0});
await instance.createPromoKitty(227012924, coo, {from: coo,value: 0});
await instance.createPromoKitty(67308575, coo, {from: coo,value: 0});
await instance.createPromoKitty(493999686, coo, {from: coo,value: 0});
await instance.createPromoKitty(776365264, coo, {from: coo,value: 0});
await instance.createPromoKitty(135023622, coo, {from: coo,value: 0});
await instance.createPromoKitty(916539753, coo, {from: coo,value: 0});
await instance.createPromoKitty(404805847, coo, {from: coo,value: 0});
await instance.createPromoKitty(270244706, coo, {from: coo,value: 0});
await instance.createPromoKitty(811121357, coo, {from: coo,value: 0});
await instance.createPromoKitty(262530876, coo, {from: coo,value: 0});
await instance.createPromoKitty(523880192, coo, {from: coo,value: 0});
await instance.createPromoKitty(359481809, coo, {from: coo,value: 0});
await instance.createPromoKitty(99873503, coo, {from: coo,value: 0});
await instance.createPromoKitty(520892258, coo, {from: coo,value: 0});
await instance.createPromoKitty(269416809, coo, {from: coo,value: 0});
await instance.createPromoKitty(991837594, coo, {from: coo,value: 0});
await instance.createPromoKitty(37294450, coo, {from: coo,value: 0});
await instance.createPromoKitty(959459753, coo, {from: coo,value: 0});
await instance.createPromoKitty(903198101, coo, {from: coo,value: 0});
await instance.createPromoKitty(762390077, coo, {from: coo,value: 0});
await instance.createPromoKitty(900746792, coo, {from: coo,value: 0});
await instance.createPromoKitty(565207631, coo, {from: coo,value: 0});
await instance.createPromoKitty(852456679, coo, {from: coo,value: 0});
await instance.createPromoKitty(151574165, coo, {from: coo,value: 0});
await instance.createPromoKitty(217716136, coo, {from: coo,value: 0});
await instance.createPromoKitty(348746125, coo, {from: coo,value: 0});
await instance.createPromoKitty(138106359, coo, {from: coo,value: 0});
await instance.createPromoKitty(126162993, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(11, 26, {from: coo});
await instance.breedWith(10, 25, {from: coo});
await instance.breedWith(3, 2, {from: coo});
await instance.breedWith(5, 14, {from: coo});
await instance.breedWith(19, 16, {from: coo});
await instance.breedWith(36, 24, {from: coo});
await instance.breedWith(35, 20, {from: coo});
await instance.breedWith(22, 6, {from: coo});
await instance.breedWith(15, 33, {from: coo});
await instance.breedWith(23, 31, {from: coo});
await instance.breedWith(8, 7, {from: coo});
await instance.breedWith(28, 39, {from: coo});
await instance.breedWith(27, 38, {from: coo});
await instance.breedWith(37, 40, {from: coo});
await instance.breedWith(32, 29, {from: coo});
await instance.breedWith(4, 18, {from: coo});
await instance.breedWith(13, 21, {from: coo});
await instance.breedWith(1, 12, {from: coo});
await instance.breedWith(30, 17, {from: coo});
await instance.breedWith(9, 34, {from: coo});
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
await instance.giveBirth(11);
await instance.giveBirth(10);
await instance.giveBirth(3);
await instance.giveBirth(5);
await instance.giveBirth(19);
await instance.giveBirth(36);
await instance.giveBirth(35);
await instance.giveBirth(22);
await instance.giveBirth(15);
await instance.giveBirth(23);
await instance.giveBirth(8);
await instance.giveBirth(28);
await instance.giveBirth(27);
await instance.giveBirth(37);
await instance.giveBirth(32);
await instance.giveBirth(4);
await instance.giveBirth(13);
await instance.giveBirth(1);
await instance.giveBirth(30);
await instance.giveBirth(9);
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
