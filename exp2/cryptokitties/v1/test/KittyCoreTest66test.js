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
await instance.createPromoKitty(89739559, coo, {from: coo,value: 0});
await instance.createPromoKitty(734570569, coo, {from: coo,value: 0});
await instance.createPromoKitty(690569348, coo, {from: coo,value: 0});
await instance.createPromoKitty(748610137, coo, {from: coo,value: 0});
await instance.createPromoKitty(912802149, coo, {from: coo,value: 0});
await instance.createPromoKitty(683897543, coo, {from: coo,value: 0});
await instance.createPromoKitty(136757527, coo, {from: coo,value: 0});
await instance.createPromoKitty(536409176, coo, {from: coo,value: 0});
await instance.createPromoKitty(318156342, coo, {from: coo,value: 0});
await instance.createPromoKitty(635108841, coo, {from: coo,value: 0});
await instance.createPromoKitty(49191514, coo, {from: coo,value: 0});
await instance.createPromoKitty(891815540, coo, {from: coo,value: 0});
await instance.createPromoKitty(307596088, coo, {from: coo,value: 0});
await instance.createPromoKitty(384235289, coo, {from: coo,value: 0});
await instance.createPromoKitty(346630416, coo, {from: coo,value: 0});
await instance.createPromoKitty(717032136, coo, {from: coo,value: 0});
await instance.createPromoKitty(535422483, coo, {from: coo,value: 0});
await instance.createPromoKitty(509302950, coo, {from: coo,value: 0});
await instance.createPromoKitty(774590622, coo, {from: coo,value: 0});
await instance.createPromoKitty(350745142, coo, {from: coo,value: 0});
await instance.createPromoKitty(957310856, coo, {from: coo,value: 0});
await instance.createPromoKitty(262081894, coo, {from: coo,value: 0});
await instance.createPromoKitty(877905956, coo, {from: coo,value: 0});
await instance.createPromoKitty(869043097, coo, {from: coo,value: 0});
await instance.createPromoKitty(518965775, coo, {from: coo,value: 0});
await instance.createPromoKitty(19946562, coo, {from: coo,value: 0});
await instance.createPromoKitty(291950792, coo, {from: coo,value: 0});
await instance.createPromoKitty(526509805, coo, {from: coo,value: 0});
await instance.createPromoKitty(218051143, coo, {from: coo,value: 0});
await instance.createPromoKitty(669809461, coo, {from: coo,value: 0});
await instance.createPromoKitty(348559193, coo, {from: coo,value: 0});
await instance.createPromoKitty(514731538, coo, {from: coo,value: 0});
await instance.createPromoKitty(454946281, coo, {from: coo,value: 0});
await instance.createPromoKitty(162385596, coo, {from: coo,value: 0});
await instance.createPromoKitty(585110315, coo, {from: coo,value: 0});
await instance.createPromoKitty(548832669, coo, {from: coo,value: 0});
await instance.createPromoKitty(861017197, coo, {from: coo,value: 0});
await instance.createPromoKitty(759841585, coo, {from: coo,value: 0});
await instance.createPromoKitty(884456386, coo, {from: coo,value: 0});
await instance.createPromoKitty(593004969, coo, {from: coo,value: 0});
await instance.createPromoKitty(368082714, coo, {from: coo,value: 0});
await instance.createPromoKitty(796744849, coo, {from: coo,value: 0});
await instance.createPromoKitty(716353688, coo, {from: coo,value: 0});
await instance.createPromoKitty(140429797, coo, {from: coo,value: 0});
await instance.createPromoKitty(654175383, coo, {from: coo,value: 0});
await instance.createPromoKitty(530509666, coo, {from: coo,value: 0});
await instance.createPromoKitty(314065734, coo, {from: coo,value: 0});
await instance.createPromoKitty(88257466, coo, {from: coo,value: 0});
await instance.createPromoKitty(636358578, coo, {from: coo,value: 0});
await instance.createPromoKitty(517074240, coo, {from: coo,value: 0});
await instance.createPromoKitty(478428219, coo, {from: coo,value: 0});
await instance.createPromoKitty(631386870, coo, {from: coo,value: 0});
await instance.createPromoKitty(833502523, coo, {from: coo,value: 0});
await instance.createPromoKitty(921082379, coo, {from: coo,value: 0});
await instance.createPromoKitty(973299491, coo, {from: coo,value: 0});
await instance.createPromoKitty(831911440, coo, {from: coo,value: 0});
await instance.createPromoKitty(673572095, coo, {from: coo,value: 0});
await instance.createPromoKitty(780949617, coo, {from: coo,value: 0});
await instance.createPromoKitty(286624902, coo, {from: coo,value: 0});
await instance.createPromoKitty(678599589, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(29, 11, {from: coo});
await instance.breedWith(30, 1, {from: coo});
await instance.breedWith(3, 24, {from: coo});
await instance.breedWith(28, 37, {from: coo});
await instance.breedWith(39, 14, {from: coo});
await instance.breedWith(40, 34, {from: coo});
await instance.breedWith(12, 6, {from: coo});
await instance.breedWith(17, 36, {from: coo});
await instance.breedWith(32, 2, {from: coo});
await instance.breedWith(26, 18, {from: coo});
await instance.breedWith(21, 13, {from: coo});
await instance.breedWith(10, 27, {from: coo});
await instance.breedWith(35, 31, {from: coo});
await instance.breedWith(33, 25, {from: coo});
await instance.breedWith(8, 7, {from: coo});
await instance.breedWith(4, 23, {from: coo});
await instance.breedWith(19, 5, {from: coo});
await instance.breedWith(20, 38, {from: coo});
await instance.breedWith(16, 9, {from: coo});
await instance.breedWith(15, 22, {from: coo});
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
await instance.giveBirth(29);
await instance.giveBirth(30);
await instance.giveBirth(3);
await instance.giveBirth(28);
await instance.giveBirth(39);
await instance.giveBirth(40);
await instance.giveBirth(12);
await instance.giveBirth(17);
await instance.giveBirth(32);
await instance.giveBirth(26);
await instance.giveBirth(21);
await instance.giveBirth(10);
await instance.giveBirth(35);
await instance.giveBirth(33);
await instance.giveBirth(8);
await instance.giveBirth(4);
await instance.giveBirth(19);
await instance.giveBirth(20);
await instance.giveBirth(16);
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
