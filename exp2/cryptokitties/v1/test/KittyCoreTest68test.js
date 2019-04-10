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
await instance.createPromoKitty(108088047, coo, {from: coo,value: 0});
await instance.createPromoKitty(134434992, coo, {from: coo,value: 0});
await instance.createPromoKitty(170142279, coo, {from: coo,value: 0});
await instance.createPromoKitty(483511474, coo, {from: coo,value: 0});
await instance.createPromoKitty(443653616, coo, {from: coo,value: 0});
await instance.createPromoKitty(950487248, coo, {from: coo,value: 0});
await instance.createPromoKitty(506531573, coo, {from: coo,value: 0});
await instance.createPromoKitty(74266348, coo, {from: coo,value: 0});
await instance.createPromoKitty(234422673, coo, {from: coo,value: 0});
await instance.createPromoKitty(556110886, coo, {from: coo,value: 0});
await instance.createPromoKitty(212224408, coo, {from: coo,value: 0});
await instance.createPromoKitty(974296589, coo, {from: coo,value: 0});
await instance.createPromoKitty(975098533, coo, {from: coo,value: 0});
await instance.createPromoKitty(233797813, coo, {from: coo,value: 0});
await instance.createPromoKitty(271899936, coo, {from: coo,value: 0});
await instance.createPromoKitty(558402802, coo, {from: coo,value: 0});
await instance.createPromoKitty(856921873, coo, {from: coo,value: 0});
await instance.createPromoKitty(430337942, coo, {from: coo,value: 0});
await instance.createPromoKitty(171001513, coo, {from: coo,value: 0});
await instance.createPromoKitty(294759863, coo, {from: coo,value: 0});
await instance.createPromoKitty(582750376, coo, {from: coo,value: 0});
await instance.createPromoKitty(161621314, coo, {from: coo,value: 0});
await instance.createPromoKitty(94748053, coo, {from: coo,value: 0});
await instance.createPromoKitty(821928016, coo, {from: coo,value: 0});
await instance.createPromoKitty(291612838, coo, {from: coo,value: 0});
await instance.createPromoKitty(133642765, coo, {from: coo,value: 0});
await instance.createPromoKitty(308850038, coo, {from: coo,value: 0});
await instance.createPromoKitty(193360906, coo, {from: coo,value: 0});
await instance.createPromoKitty(861005331, coo, {from: coo,value: 0});
await instance.createPromoKitty(43425256, coo, {from: coo,value: 0});
await instance.createPromoKitty(743210297, coo, {from: coo,value: 0});
await instance.createPromoKitty(481827710, coo, {from: coo,value: 0});
await instance.createPromoKitty(584868320, coo, {from: coo,value: 0});
await instance.createPromoKitty(881192352, coo, {from: coo,value: 0});
await instance.createPromoKitty(588722144, coo, {from: coo,value: 0});
await instance.createPromoKitty(264837579, coo, {from: coo,value: 0});
await instance.createPromoKitty(188665941, coo, {from: coo,value: 0});
await instance.createPromoKitty(223774505, coo, {from: coo,value: 0});
await instance.createPromoKitty(211941407, coo, {from: coo,value: 0});
await instance.createPromoKitty(493117268, coo, {from: coo,value: 0});
await instance.createPromoKitty(87490816, coo, {from: coo,value: 0});
await instance.createPromoKitty(767879004, coo, {from: coo,value: 0});
await instance.createPromoKitty(155636273, coo, {from: coo,value: 0});
await instance.createPromoKitty(362349464, coo, {from: coo,value: 0});
await instance.createPromoKitty(753468379, coo, {from: coo,value: 0});
await instance.createPromoKitty(751847404, coo, {from: coo,value: 0});
await instance.createPromoKitty(392927850, coo, {from: coo,value: 0});
await instance.createPromoKitty(150267464, coo, {from: coo,value: 0});
await instance.createPromoKitty(498195660, coo, {from: coo,value: 0});
await instance.createPromoKitty(289513998, coo, {from: coo,value: 0});
await instance.createPromoKitty(346446384, coo, {from: coo,value: 0});
await instance.createPromoKitty(711719033, coo, {from: coo,value: 0});
await instance.createPromoKitty(667702889, coo, {from: coo,value: 0});
await instance.createPromoKitty(670704852, coo, {from: coo,value: 0});
await instance.createPromoKitty(732507442, coo, {from: coo,value: 0});
await instance.createPromoKitty(629353677, coo, {from: coo,value: 0});
await instance.createPromoKitty(32358954, coo, {from: coo,value: 0});
await instance.createPromoKitty(891967871, coo, {from: coo,value: 0});
await instance.createPromoKitty(67011584, coo, {from: coo,value: 0});
await instance.createPromoKitty(908722550, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(40, 24, {from: coo});
await instance.breedWith(2, 37, {from: coo});
await instance.breedWith(38, 30, {from: coo});
await instance.breedWith(32, 36, {from: coo});
await instance.breedWith(6, 1, {from: coo});
await instance.breedWith(23, 35, {from: coo});
await instance.breedWith(20, 16, {from: coo});
await instance.breedWith(28, 25, {from: coo});
await instance.breedWith(11, 15, {from: coo});
await instance.breedWith(31, 13, {from: coo});
await instance.breedWith(4, 33, {from: coo});
await instance.breedWith(18, 22, {from: coo});
await instance.breedWith(5, 29, {from: coo});
await instance.breedWith(8, 3, {from: coo});
await instance.breedWith(19, 10, {from: coo});
await instance.breedWith(14, 34, {from: coo});
await instance.breedWith(7, 17, {from: coo});
await instance.breedWith(26, 12, {from: coo});
await instance.breedWith(27, 9, {from: coo});
await instance.breedWith(39, 21, {from: coo});
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
await instance.giveBirth(40);
await instance.giveBirth(2);
await instance.giveBirth(38);
await instance.giveBirth(32);
await instance.giveBirth(6);
await instance.giveBirth(23);
await instance.giveBirth(20);
await instance.giveBirth(28);
await instance.giveBirth(11);
await instance.giveBirth(31);
await instance.giveBirth(4);
await instance.giveBirth(18);
await instance.giveBirth(5);
await instance.giveBirth(8);
await instance.giveBirth(19);
await instance.giveBirth(14);
await instance.giveBirth(7);
await instance.giveBirth(26);
await instance.giveBirth(27);
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
