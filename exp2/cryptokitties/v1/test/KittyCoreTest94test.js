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
await instance.createPromoKitty(776155006, coo, {from: coo,value: 0});
await instance.createPromoKitty(373660380, coo, {from: coo,value: 0});
await instance.createPromoKitty(431902079, coo, {from: coo,value: 0});
await instance.createPromoKitty(625631635, coo, {from: coo,value: 0});
await instance.createPromoKitty(77933739, coo, {from: coo,value: 0});
await instance.createPromoKitty(318453658, coo, {from: coo,value: 0});
await instance.createPromoKitty(763313120, coo, {from: coo,value: 0});
await instance.createPromoKitty(131372139, coo, {from: coo,value: 0});
await instance.createPromoKitty(659421592, coo, {from: coo,value: 0});
await instance.createPromoKitty(374949912, coo, {from: coo,value: 0});
await instance.createPromoKitty(828901565, coo, {from: coo,value: 0});
await instance.createPromoKitty(138602384, coo, {from: coo,value: 0});
await instance.createPromoKitty(550782041, coo, {from: coo,value: 0});
await instance.createPromoKitty(72012931, coo, {from: coo,value: 0});
await instance.createPromoKitty(644112641, coo, {from: coo,value: 0});
await instance.createPromoKitty(4599750, coo, {from: coo,value: 0});
await instance.createPromoKitty(254018301, coo, {from: coo,value: 0});
await instance.createPromoKitty(7712858, coo, {from: coo,value: 0});
await instance.createPromoKitty(355858324, coo, {from: coo,value: 0});
await instance.createPromoKitty(754374393, coo, {from: coo,value: 0});
await instance.createPromoKitty(622075800, coo, {from: coo,value: 0});
await instance.createPromoKitty(886453449, coo, {from: coo,value: 0});
await instance.createPromoKitty(615559965, coo, {from: coo,value: 0});
await instance.createPromoKitty(448357701, coo, {from: coo,value: 0});
await instance.createPromoKitty(352854382, coo, {from: coo,value: 0});
await instance.createPromoKitty(825368053, coo, {from: coo,value: 0});
await instance.createPromoKitty(817278453, coo, {from: coo,value: 0});
await instance.createPromoKitty(217654957, coo, {from: coo,value: 0});
await instance.createPromoKitty(49196212, coo, {from: coo,value: 0});
await instance.createPromoKitty(48240662, coo, {from: coo,value: 0});
await instance.createPromoKitty(204523492, coo, {from: coo,value: 0});
await instance.createPromoKitty(50381559, coo, {from: coo,value: 0});
await instance.createPromoKitty(899497704, coo, {from: coo,value: 0});
await instance.createPromoKitty(513173929, coo, {from: coo,value: 0});
await instance.createPromoKitty(903006055, coo, {from: coo,value: 0});
await instance.createPromoKitty(791467589, coo, {from: coo,value: 0});
await instance.createPromoKitty(815666726, coo, {from: coo,value: 0});
await instance.createPromoKitty(984461336, coo, {from: coo,value: 0});
await instance.createPromoKitty(667034258, coo, {from: coo,value: 0});
await instance.createPromoKitty(335231575, coo, {from: coo,value: 0});
await instance.createPromoKitty(169160268, coo, {from: coo,value: 0});
await instance.createPromoKitty(370188025, coo, {from: coo,value: 0});
await instance.createPromoKitty(522805962, coo, {from: coo,value: 0});
await instance.createPromoKitty(260900650, coo, {from: coo,value: 0});
await instance.createPromoKitty(25763685, coo, {from: coo,value: 0});
await instance.createPromoKitty(604517856, coo, {from: coo,value: 0});
await instance.createPromoKitty(207254907, coo, {from: coo,value: 0});
await instance.createPromoKitty(703554932, coo, {from: coo,value: 0});
await instance.createPromoKitty(877365190, coo, {from: coo,value: 0});
await instance.createPromoKitty(368762599, coo, {from: coo,value: 0});
await instance.createPromoKitty(63502603, coo, {from: coo,value: 0});
await instance.createPromoKitty(406740564, coo, {from: coo,value: 0});
await instance.createPromoKitty(64457090, coo, {from: coo,value: 0});
await instance.createPromoKitty(58949403, coo, {from: coo,value: 0});
await instance.createPromoKitty(980255687, coo, {from: coo,value: 0});
await instance.createPromoKitty(182661992, coo, {from: coo,value: 0});
await instance.createPromoKitty(327034066, coo, {from: coo,value: 0});
await instance.createPromoKitty(671417874, coo, {from: coo,value: 0});
await instance.createPromoKitty(979506096, coo, {from: coo,value: 0});
await instance.createPromoKitty(804472134, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(1, 19, {from: coo});
await instance.breedWith(26, 33, {from: coo});
await instance.breedWith(4, 37, {from: coo});
await instance.breedWith(10, 24, {from: coo});
await instance.breedWith(31, 11, {from: coo});
await instance.breedWith(6, 27, {from: coo});
await instance.breedWith(39, 40, {from: coo});
await instance.breedWith(16, 28, {from: coo});
await instance.breedWith(29, 20, {from: coo});
await instance.breedWith(12, 2, {from: coo});
await instance.breedWith(14, 30, {from: coo});
await instance.breedWith(25, 34, {from: coo});
await instance.breedWith(18, 23, {from: coo});
await instance.breedWith(3, 36, {from: coo});
await instance.breedWith(35, 22, {from: coo});
await instance.breedWith(13, 8, {from: coo});
await instance.breedWith(5, 32, {from: coo});
await instance.breedWith(17, 21, {from: coo});
await instance.breedWith(15, 38, {from: coo});
await instance.breedWith(7, 9, {from: coo});
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
await instance.giveBirth(1);
await instance.giveBirth(26);
await instance.giveBirth(4);
await instance.giveBirth(10);
await instance.giveBirth(31);
await instance.giveBirth(6);
await instance.giveBirth(39);
await instance.giveBirth(16);
await instance.giveBirth(29);
await instance.giveBirth(12);
await instance.giveBirth(14);
await instance.giveBirth(25);
await instance.giveBirth(18);
await instance.giveBirth(3);
await instance.giveBirth(35);
await instance.giveBirth(13);
await instance.giveBirth(5);
await instance.giveBirth(17);
await instance.giveBirth(15);
await instance.giveBirth(7);
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
