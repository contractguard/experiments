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
await instance.createPromoKitty(900450330, coo, {from: coo,value: 0});
await instance.createPromoKitty(661071059, coo, {from: coo,value: 0});
await instance.createPromoKitty(782806139, coo, {from: coo,value: 0});
await instance.createPromoKitty(142440542, coo, {from: coo,value: 0});
await instance.createPromoKitty(77466608, coo, {from: coo,value: 0});
await instance.createPromoKitty(740539409, coo, {from: coo,value: 0});
await instance.createPromoKitty(966102606, coo, {from: coo,value: 0});
await instance.createPromoKitty(545972647, coo, {from: coo,value: 0});
await instance.createPromoKitty(375629377, coo, {from: coo,value: 0});
await instance.createPromoKitty(946676506, coo, {from: coo,value: 0});
await instance.createPromoKitty(260187601, coo, {from: coo,value: 0});
await instance.createPromoKitty(940288889, coo, {from: coo,value: 0});
await instance.createPromoKitty(365801418, coo, {from: coo,value: 0});
await instance.createPromoKitty(422868605, coo, {from: coo,value: 0});
await instance.createPromoKitty(926836065, coo, {from: coo,value: 0});
await instance.createPromoKitty(780416356, coo, {from: coo,value: 0});
await instance.createPromoKitty(656752438, coo, {from: coo,value: 0});
await instance.createPromoKitty(432601984, coo, {from: coo,value: 0});
await instance.createPromoKitty(391742681, coo, {from: coo,value: 0});
await instance.createPromoKitty(646345737, coo, {from: coo,value: 0});
await instance.createPromoKitty(315842436, coo, {from: coo,value: 0});
await instance.createPromoKitty(865490396, coo, {from: coo,value: 0});
await instance.createPromoKitty(466279488, coo, {from: coo,value: 0});
await instance.createPromoKitty(921430387, coo, {from: coo,value: 0});
await instance.createPromoKitty(394055383, coo, {from: coo,value: 0});
await instance.createPromoKitty(687812669, coo, {from: coo,value: 0});
await instance.createPromoKitty(150495373, coo, {from: coo,value: 0});
await instance.createPromoKitty(934252995, coo, {from: coo,value: 0});
await instance.createPromoKitty(68646709, coo, {from: coo,value: 0});
await instance.createPromoKitty(603018015, coo, {from: coo,value: 0});
await instance.createPromoKitty(483168179, coo, {from: coo,value: 0});
await instance.createPromoKitty(680426150, coo, {from: coo,value: 0});
await instance.createPromoKitty(182126398, coo, {from: coo,value: 0});
await instance.createPromoKitty(931221056, coo, {from: coo,value: 0});
await instance.createPromoKitty(183831172, coo, {from: coo,value: 0});
await instance.createPromoKitty(289974985, coo, {from: coo,value: 0});
await instance.createPromoKitty(928184761, coo, {from: coo,value: 0});
await instance.createPromoKitty(458474865, coo, {from: coo,value: 0});
await instance.createPromoKitty(489051508, coo, {from: coo,value: 0});
await instance.createPromoKitty(896362549, coo, {from: coo,value: 0});
await instance.createPromoKitty(995527812, coo, {from: coo,value: 0});
await instance.createPromoKitty(658290937, coo, {from: coo,value: 0});
await instance.createPromoKitty(16251328, coo, {from: coo,value: 0});
await instance.createPromoKitty(364845721, coo, {from: coo,value: 0});
await instance.createPromoKitty(964570418, coo, {from: coo,value: 0});
await instance.createPromoKitty(263399949, coo, {from: coo,value: 0});
await instance.createPromoKitty(593417049, coo, {from: coo,value: 0});
await instance.createPromoKitty(227658151, coo, {from: coo,value: 0});
await instance.createPromoKitty(470909535, coo, {from: coo,value: 0});
await instance.createPromoKitty(765084009, coo, {from: coo,value: 0});
await instance.createPromoKitty(201634334, coo, {from: coo,value: 0});
await instance.createPromoKitty(950172951, coo, {from: coo,value: 0});
await instance.createPromoKitty(557188516, coo, {from: coo,value: 0});
await instance.createPromoKitty(884228626, coo, {from: coo,value: 0});
await instance.createPromoKitty(704398342, coo, {from: coo,value: 0});
await instance.createPromoKitty(332462691, coo, {from: coo,value: 0});
await instance.createPromoKitty(197011670, coo, {from: coo,value: 0});
await instance.createPromoKitty(564452727, coo, {from: coo,value: 0});
await instance.createPromoKitty(897217677, coo, {from: coo,value: 0});
await instance.createPromoKitty(625010782, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(10, 21, {from: coo});
await instance.breedWith(3, 9, {from: coo});
await instance.breedWith(24, 39, {from: coo});
await instance.breedWith(32, 25, {from: coo});
await instance.breedWith(37, 6, {from: coo});
await instance.breedWith(2, 7, {from: coo});
await instance.breedWith(11, 4, {from: coo});
await instance.breedWith(14, 28, {from: coo});
await instance.breedWith(16, 5, {from: coo});
await instance.breedWith(40, 38, {from: coo});
await instance.breedWith(36, 13, {from: coo});
await instance.breedWith(30, 19, {from: coo});
await instance.breedWith(15, 33, {from: coo});
await instance.breedWith(18, 22, {from: coo});
await instance.breedWith(8, 12, {from: coo});
await instance.breedWith(31, 34, {from: coo});
await instance.breedWith(27, 17, {from: coo});
await instance.breedWith(35, 26, {from: coo});
await instance.breedWith(29, 20, {from: coo});
await instance.breedWith(23, 1, {from: coo});
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
await instance.giveBirth(10);
await instance.giveBirth(3);
await instance.giveBirth(24);
await instance.giveBirth(32);
await instance.giveBirth(37);
await instance.giveBirth(2);
await instance.giveBirth(11);
await instance.giveBirth(14);
await instance.giveBirth(16);
await instance.giveBirth(40);
await instance.giveBirth(36);
await instance.giveBirth(30);
await instance.giveBirth(15);
await instance.giveBirth(18);
await instance.giveBirth(8);
await instance.giveBirth(31);
await instance.giveBirth(27);
await instance.giveBirth(35);
await instance.giveBirth(29);
await instance.giveBirth(23);
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
