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
await instance.createPromoKitty(287130139, coo, {from: coo,value: 0});
await instance.createPromoKitty(832431262, coo, {from: coo,value: 0});
await instance.createPromoKitty(429689262, coo, {from: coo,value: 0});
await instance.createPromoKitty(702599752, coo, {from: coo,value: 0});
await instance.createPromoKitty(169784309, coo, {from: coo,value: 0});
await instance.createPromoKitty(33967602, coo, {from: coo,value: 0});
await instance.createPromoKitty(145130383, coo, {from: coo,value: 0});
await instance.createPromoKitty(766185095, coo, {from: coo,value: 0});
await instance.createPromoKitty(181997037, coo, {from: coo,value: 0});
await instance.createPromoKitty(369331407, coo, {from: coo,value: 0});
await instance.createPromoKitty(596505327, coo, {from: coo,value: 0});
await instance.createPromoKitty(686013431, coo, {from: coo,value: 0});
await instance.createPromoKitty(427225764, coo, {from: coo,value: 0});
await instance.createPromoKitty(881324452, coo, {from: coo,value: 0});
await instance.createPromoKitty(256949196, coo, {from: coo,value: 0});
await instance.createPromoKitty(576509569, coo, {from: coo,value: 0});
await instance.createPromoKitty(499891165, coo, {from: coo,value: 0});
await instance.createPromoKitty(964023758, coo, {from: coo,value: 0});
await instance.createPromoKitty(899078481, coo, {from: coo,value: 0});
await instance.createPromoKitty(403596575, coo, {from: coo,value: 0});
await instance.createPromoKitty(893058776, coo, {from: coo,value: 0});
await instance.createPromoKitty(585972467, coo, {from: coo,value: 0});
await instance.createPromoKitty(80194645, coo, {from: coo,value: 0});
await instance.createPromoKitty(221630236, coo, {from: coo,value: 0});
await instance.createPromoKitty(995317349, coo, {from: coo,value: 0});
await instance.createPromoKitty(184438951, coo, {from: coo,value: 0});
await instance.createPromoKitty(226134623, coo, {from: coo,value: 0});
await instance.createPromoKitty(841981638, coo, {from: coo,value: 0});
await instance.createPromoKitty(810330362, coo, {from: coo,value: 0});
await instance.createPromoKitty(629323128, coo, {from: coo,value: 0});
await instance.createPromoKitty(663539485, coo, {from: coo,value: 0});
await instance.createPromoKitty(883461301, coo, {from: coo,value: 0});
await instance.createPromoKitty(298006060, coo, {from: coo,value: 0});
await instance.createPromoKitty(587648761, coo, {from: coo,value: 0});
await instance.createPromoKitty(245852919, coo, {from: coo,value: 0});
await instance.createPromoKitty(619095778, coo, {from: coo,value: 0});
await instance.createPromoKitty(879874322, coo, {from: coo,value: 0});
await instance.createPromoKitty(134472818, coo, {from: coo,value: 0});
await instance.createPromoKitty(609449495, coo, {from: coo,value: 0});
await instance.createPromoKitty(924276533, coo, {from: coo,value: 0});
await instance.createPromoKitty(950004136, coo, {from: coo,value: 0});
await instance.createPromoKitty(760732337, coo, {from: coo,value: 0});
await instance.createPromoKitty(85096462, coo, {from: coo,value: 0});
await instance.createPromoKitty(115316861, coo, {from: coo,value: 0});
await instance.createPromoKitty(330807051, coo, {from: coo,value: 0});
await instance.createPromoKitty(419243988, coo, {from: coo,value: 0});
await instance.createPromoKitty(567986075, coo, {from: coo,value: 0});
await instance.createPromoKitty(126672774, coo, {from: coo,value: 0});
await instance.createPromoKitty(669951887, coo, {from: coo,value: 0});
await instance.createPromoKitty(661943573, coo, {from: coo,value: 0});
await instance.createPromoKitty(392287211, coo, {from: coo,value: 0});
await instance.createPromoKitty(706718957, coo, {from: coo,value: 0});
await instance.createPromoKitty(998785051, coo, {from: coo,value: 0});
await instance.createPromoKitty(899267954, coo, {from: coo,value: 0});
await instance.createPromoKitty(523981435, coo, {from: coo,value: 0});
await instance.createPromoKitty(359870699, coo, {from: coo,value: 0});
await instance.createPromoKitty(530464143, coo, {from: coo,value: 0});
await instance.createPromoKitty(442695927, coo, {from: coo,value: 0});
await instance.createPromoKitty(933027105, coo, {from: coo,value: 0});
await instance.createPromoKitty(818734074, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(21, 1, {from: coo});
await instance.breedWith(39, 11, {from: coo});
await instance.breedWith(36, 34, {from: coo});
await instance.breedWith(23, 3, {from: coo});
await instance.breedWith(26, 13, {from: coo});
await instance.breedWith(35, 25, {from: coo});
await instance.breedWith(4, 40, {from: coo});
await instance.breedWith(30, 15, {from: coo});
await instance.breedWith(16, 5, {from: coo});
await instance.breedWith(38, 22, {from: coo});
await instance.breedWith(8, 6, {from: coo});
await instance.breedWith(24, 12, {from: coo});
await instance.breedWith(28, 17, {from: coo});
await instance.breedWith(33, 29, {from: coo});
await instance.breedWith(31, 7, {from: coo});
await instance.breedWith(37, 14, {from: coo});
await instance.breedWith(20, 27, {from: coo});
await instance.breedWith(2, 9, {from: coo});
await instance.breedWith(32, 18, {from: coo});
await instance.breedWith(10, 19, {from: coo});
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
await instance.giveBirth(21);
await instance.giveBirth(39);
await instance.giveBirth(36);
await instance.giveBirth(23);
await instance.giveBirth(26);
await instance.giveBirth(35);
await instance.giveBirth(4);
await instance.giveBirth(30);
await instance.giveBirth(16);
await instance.giveBirth(38);
await instance.giveBirth(8);
await instance.giveBirth(24);
await instance.giveBirth(28);
await instance.giveBirth(33);
await instance.giveBirth(31);
await instance.giveBirth(37);
await instance.giveBirth(20);
await instance.giveBirth(2);
await instance.giveBirth(32);
await instance.giveBirth(10);
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
