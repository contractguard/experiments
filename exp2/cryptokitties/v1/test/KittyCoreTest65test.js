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
await instance.createPromoKitty(226557289, coo, {from: coo,value: 0});
await instance.createPromoKitty(388878569, coo, {from: coo,value: 0});
await instance.createPromoKitty(212771624, coo, {from: coo,value: 0});
await instance.createPromoKitty(867625862, coo, {from: coo,value: 0});
await instance.createPromoKitty(913772044, coo, {from: coo,value: 0});
await instance.createPromoKitty(579379789, coo, {from: coo,value: 0});
await instance.createPromoKitty(87387024, coo, {from: coo,value: 0});
await instance.createPromoKitty(912805858, coo, {from: coo,value: 0});
await instance.createPromoKitty(803341707, coo, {from: coo,value: 0});
await instance.createPromoKitty(241277697, coo, {from: coo,value: 0});
await instance.createPromoKitty(21019371, coo, {from: coo,value: 0});
await instance.createPromoKitty(583936356, coo, {from: coo,value: 0});
await instance.createPromoKitty(580720008, coo, {from: coo,value: 0});
await instance.createPromoKitty(690270681, coo, {from: coo,value: 0});
await instance.createPromoKitty(847955583, coo, {from: coo,value: 0});
await instance.createPromoKitty(796965251, coo, {from: coo,value: 0});
await instance.createPromoKitty(30934072, coo, {from: coo,value: 0});
await instance.createPromoKitty(506969098, coo, {from: coo,value: 0});
await instance.createPromoKitty(787786682, coo, {from: coo,value: 0});
await instance.createPromoKitty(593850967, coo, {from: coo,value: 0});
await instance.createPromoKitty(749788312, coo, {from: coo,value: 0});
await instance.createPromoKitty(182730658, coo, {from: coo,value: 0});
await instance.createPromoKitty(904351882, coo, {from: coo,value: 0});
await instance.createPromoKitty(728550806, coo, {from: coo,value: 0});
await instance.createPromoKitty(225520685, coo, {from: coo,value: 0});
await instance.createPromoKitty(783468887, coo, {from: coo,value: 0});
await instance.createPromoKitty(12100153, coo, {from: coo,value: 0});
await instance.createPromoKitty(288135311, coo, {from: coo,value: 0});
await instance.createPromoKitty(817662901, coo, {from: coo,value: 0});
await instance.createPromoKitty(981088652, coo, {from: coo,value: 0});
await instance.createPromoKitty(676298937, coo, {from: coo,value: 0});
await instance.createPromoKitty(370373111, coo, {from: coo,value: 0});
await instance.createPromoKitty(29844822, coo, {from: coo,value: 0});
await instance.createPromoKitty(904468533, coo, {from: coo,value: 0});
await instance.createPromoKitty(478802537, coo, {from: coo,value: 0});
await instance.createPromoKitty(225315138, coo, {from: coo,value: 0});
await instance.createPromoKitty(689433576, coo, {from: coo,value: 0});
await instance.createPromoKitty(972302001, coo, {from: coo,value: 0});
await instance.createPromoKitty(406641498, coo, {from: coo,value: 0});
await instance.createPromoKitty(752731308, coo, {from: coo,value: 0});
await instance.createPromoKitty(727923789, coo, {from: coo,value: 0});
await instance.createPromoKitty(934118858, coo, {from: coo,value: 0});
await instance.createPromoKitty(799260902, coo, {from: coo,value: 0});
await instance.createPromoKitty(918989936, coo, {from: coo,value: 0});
await instance.createPromoKitty(740214853, coo, {from: coo,value: 0});
await instance.createPromoKitty(379611184, coo, {from: coo,value: 0});
await instance.createPromoKitty(684152966, coo, {from: coo,value: 0});
await instance.createPromoKitty(602479260, coo, {from: coo,value: 0});
await instance.createPromoKitty(70613587, coo, {from: coo,value: 0});
await instance.createPromoKitty(896927276, coo, {from: coo,value: 0});
await instance.createPromoKitty(736234146, coo, {from: coo,value: 0});
await instance.createPromoKitty(594866816, coo, {from: coo,value: 0});
await instance.createPromoKitty(404556043, coo, {from: coo,value: 0});
await instance.createPromoKitty(796422627, coo, {from: coo,value: 0});
await instance.createPromoKitty(42494039, coo, {from: coo,value: 0});
await instance.createPromoKitty(334689446, coo, {from: coo,value: 0});
await instance.createPromoKitty(675722311, coo, {from: coo,value: 0});
await instance.createPromoKitty(538913334, coo, {from: coo,value: 0});
await instance.createPromoKitty(271132905, coo, {from: coo,value: 0});
await instance.createPromoKitty(322991148, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(5, 26, {from: coo});
await instance.breedWith(40, 3, {from: coo});
await instance.breedWith(22, 39, {from: coo});
await instance.breedWith(24, 29, {from: coo});
await instance.breedWith(38, 2, {from: coo});
await instance.breedWith(15, 11, {from: coo});
await instance.breedWith(14, 17, {from: coo});
await instance.breedWith(37, 8, {from: coo});
await instance.breedWith(16, 6, {from: coo});
await instance.breedWith(1, 19, {from: coo});
await instance.breedWith(31, 10, {from: coo});
await instance.breedWith(4, 27, {from: coo});
await instance.breedWith(18, 25, {from: coo});
await instance.breedWith(21, 9, {from: coo});
await instance.breedWith(20, 13, {from: coo});
await instance.breedWith(32, 33, {from: coo});
await instance.breedWith(23, 30, {from: coo});
await instance.breedWith(34, 7, {from: coo});
await instance.breedWith(35, 28, {from: coo});
await instance.breedWith(12, 36, {from: coo});
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
await instance.giveBirth(5);
await instance.giveBirth(40);
await instance.giveBirth(22);
await instance.giveBirth(24);
await instance.giveBirth(38);
await instance.giveBirth(15);
await instance.giveBirth(14);
await instance.giveBirth(37);
await instance.giveBirth(16);
await instance.giveBirth(1);
await instance.giveBirth(31);
await instance.giveBirth(4);
await instance.giveBirth(18);
await instance.giveBirth(21);
await instance.giveBirth(20);
await instance.giveBirth(32);
await instance.giveBirth(23);
await instance.giveBirth(34);
await instance.giveBirth(35);
await instance.giveBirth(12);
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
