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
await instance.createPromoKitty(354225034, coo, {from: coo,value: 0});
await instance.createPromoKitty(503933002, coo, {from: coo,value: 0});
await instance.createPromoKitty(703410626, coo, {from: coo,value: 0});
await instance.createPromoKitty(537557357, coo, {from: coo,value: 0});
await instance.createPromoKitty(545106663, coo, {from: coo,value: 0});
await instance.createPromoKitty(179945767, coo, {from: coo,value: 0});
await instance.createPromoKitty(159477848, coo, {from: coo,value: 0});
await instance.createPromoKitty(265669593, coo, {from: coo,value: 0});
await instance.createPromoKitty(27355711, coo, {from: coo,value: 0});
await instance.createPromoKitty(847533996, coo, {from: coo,value: 0});
await instance.createPromoKitty(991117110, coo, {from: coo,value: 0});
await instance.createPromoKitty(246387238, coo, {from: coo,value: 0});
await instance.createPromoKitty(722589077, coo, {from: coo,value: 0});
await instance.createPromoKitty(978147560, coo, {from: coo,value: 0});
await instance.createPromoKitty(585124719, coo, {from: coo,value: 0});
await instance.createPromoKitty(193042716, coo, {from: coo,value: 0});
await instance.createPromoKitty(388004420, coo, {from: coo,value: 0});
await instance.createPromoKitty(332321689, coo, {from: coo,value: 0});
await instance.createPromoKitty(962631301, coo, {from: coo,value: 0});
await instance.createPromoKitty(784535134, coo, {from: coo,value: 0});
await instance.createPromoKitty(53573174, coo, {from: coo,value: 0});
await instance.createPromoKitty(754972505, coo, {from: coo,value: 0});
await instance.createPromoKitty(466566413, coo, {from: coo,value: 0});
await instance.createPromoKitty(80809607, coo, {from: coo,value: 0});
await instance.createPromoKitty(411066066, coo, {from: coo,value: 0});
await instance.createPromoKitty(75828259, coo, {from: coo,value: 0});
await instance.createPromoKitty(57475525, coo, {from: coo,value: 0});
await instance.createPromoKitty(800252179, coo, {from: coo,value: 0});
await instance.createPromoKitty(729620579, coo, {from: coo,value: 0});
await instance.createPromoKitty(708392340, coo, {from: coo,value: 0});
await instance.createPromoKitty(57298739, coo, {from: coo,value: 0});
await instance.createPromoKitty(421761819, coo, {from: coo,value: 0});
await instance.createPromoKitty(58967662, coo, {from: coo,value: 0});
await instance.createPromoKitty(661369361, coo, {from: coo,value: 0});
await instance.createPromoKitty(802563524, coo, {from: coo,value: 0});
await instance.createPromoKitty(270599031, coo, {from: coo,value: 0});
await instance.createPromoKitty(453706517, coo, {from: coo,value: 0});
await instance.createPromoKitty(46783194, coo, {from: coo,value: 0});
await instance.createPromoKitty(244444731, coo, {from: coo,value: 0});
await instance.createPromoKitty(188890677, coo, {from: coo,value: 0});
await instance.createPromoKitty(745898799, coo, {from: coo,value: 0});
await instance.createPromoKitty(205875454, coo, {from: coo,value: 0});
await instance.createPromoKitty(6172210, coo, {from: coo,value: 0});
await instance.createPromoKitty(896690357, coo, {from: coo,value: 0});
await instance.createPromoKitty(396568247, coo, {from: coo,value: 0});
await instance.createPromoKitty(609442679, coo, {from: coo,value: 0});
await instance.createPromoKitty(183744997, coo, {from: coo,value: 0});
await instance.createPromoKitty(901068041, coo, {from: coo,value: 0});
await instance.createPromoKitty(762949479, coo, {from: coo,value: 0});
await instance.createPromoKitty(173082255, coo, {from: coo,value: 0});
await instance.createPromoKitty(763278340, coo, {from: coo,value: 0});
await instance.createPromoKitty(419098072, coo, {from: coo,value: 0});
await instance.createPromoKitty(392266059, coo, {from: coo,value: 0});
await instance.createPromoKitty(965862209, coo, {from: coo,value: 0});
await instance.createPromoKitty(556404626, coo, {from: coo,value: 0});
await instance.createPromoKitty(593782321, coo, {from: coo,value: 0});
await instance.createPromoKitty(312667211, coo, {from: coo,value: 0});
await instance.createPromoKitty(966609102, coo, {from: coo,value: 0});
await instance.createPromoKitty(606909249, coo, {from: coo,value: 0});
await instance.createPromoKitty(476034696, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(25, 21, {from: coo});
await instance.breedWith(26, 32, {from: coo});
await instance.breedWith(24, 19, {from: coo});
await instance.breedWith(18, 37, {from: coo});
await instance.breedWith(27, 28, {from: coo});
await instance.breedWith(38, 2, {from: coo});
await instance.breedWith(34, 4, {from: coo});
await instance.breedWith(22, 35, {from: coo});
await instance.breedWith(6, 14, {from: coo});
await instance.breedWith(13, 11, {from: coo});
await instance.breedWith(40, 8, {from: coo});
await instance.breedWith(9, 16, {from: coo});
await instance.breedWith(36, 31, {from: coo});
await instance.breedWith(12, 30, {from: coo});
await instance.breedWith(5, 20, {from: coo});
await instance.breedWith(23, 29, {from: coo});
await instance.breedWith(10, 7, {from: coo});
await instance.breedWith(3, 17, {from: coo});
await instance.breedWith(1, 33, {from: coo});
await instance.breedWith(15, 39, {from: coo});
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
await instance.giveBirth(25);
await instance.giveBirth(26);
await instance.giveBirth(24);
await instance.giveBirth(18);
await instance.giveBirth(27);
await instance.giveBirth(38);
await instance.giveBirth(34);
await instance.giveBirth(22);
await instance.giveBirth(6);
await instance.giveBirth(13);
await instance.giveBirth(40);
await instance.giveBirth(9);
await instance.giveBirth(36);
await instance.giveBirth(12);
await instance.giveBirth(5);
await instance.giveBirth(23);
await instance.giveBirth(10);
await instance.giveBirth(3);
await instance.giveBirth(1);
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
