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
await instance.createPromoKitty(861753013, coo, {from: coo,value: 0});
await instance.createPromoKitty(635712875, coo, {from: coo,value: 0});
await instance.createPromoKitty(739257866, coo, {from: coo,value: 0});
await instance.createPromoKitty(345608416, coo, {from: coo,value: 0});
await instance.createPromoKitty(438539960, coo, {from: coo,value: 0});
await instance.createPromoKitty(27055356, coo, {from: coo,value: 0});
await instance.createPromoKitty(395840266, coo, {from: coo,value: 0});
await instance.createPromoKitty(760831843, coo, {from: coo,value: 0});
await instance.createPromoKitty(196257152, coo, {from: coo,value: 0});
await instance.createPromoKitty(467856379, coo, {from: coo,value: 0});
await instance.createPromoKitty(598363094, coo, {from: coo,value: 0});
await instance.createPromoKitty(118579496, coo, {from: coo,value: 0});
await instance.createPromoKitty(58978306, coo, {from: coo,value: 0});
await instance.createPromoKitty(72877470, coo, {from: coo,value: 0});
await instance.createPromoKitty(762035966, coo, {from: coo,value: 0});
await instance.createPromoKitty(208422776, coo, {from: coo,value: 0});
await instance.createPromoKitty(869114446, coo, {from: coo,value: 0});
await instance.createPromoKitty(112299947, coo, {from: coo,value: 0});
await instance.createPromoKitty(887402774, coo, {from: coo,value: 0});
await instance.createPromoKitty(425582957, coo, {from: coo,value: 0});
await instance.createPromoKitty(531280376, coo, {from: coo,value: 0});
await instance.createPromoKitty(641785980, coo, {from: coo,value: 0});
await instance.createPromoKitty(565062188, coo, {from: coo,value: 0});
await instance.createPromoKitty(607548102, coo, {from: coo,value: 0});
await instance.createPromoKitty(485867647, coo, {from: coo,value: 0});
await instance.createPromoKitty(464394426, coo, {from: coo,value: 0});
await instance.createPromoKitty(645487667, coo, {from: coo,value: 0});
await instance.createPromoKitty(335060800, coo, {from: coo,value: 0});
await instance.createPromoKitty(253235686, coo, {from: coo,value: 0});
await instance.createPromoKitty(505544407, coo, {from: coo,value: 0});
await instance.createPromoKitty(386953064, coo, {from: coo,value: 0});
await instance.createPromoKitty(747558832, coo, {from: coo,value: 0});
await instance.createPromoKitty(169007085, coo, {from: coo,value: 0});
await instance.createPromoKitty(250060278, coo, {from: coo,value: 0});
await instance.createPromoKitty(320862452, coo, {from: coo,value: 0});
await instance.createPromoKitty(22027102, coo, {from: coo,value: 0});
await instance.createPromoKitty(843203961, coo, {from: coo,value: 0});
await instance.createPromoKitty(99324877, coo, {from: coo,value: 0});
await instance.createPromoKitty(972027168, coo, {from: coo,value: 0});
await instance.createPromoKitty(175892943, coo, {from: coo,value: 0});
await instance.createPromoKitty(256391822, coo, {from: coo,value: 0});
await instance.createPromoKitty(369941032, coo, {from: coo,value: 0});
await instance.createPromoKitty(386596795, coo, {from: coo,value: 0});
await instance.createPromoKitty(771623955, coo, {from: coo,value: 0});
await instance.createPromoKitty(680609414, coo, {from: coo,value: 0});
await instance.createPromoKitty(685455450, coo, {from: coo,value: 0});
await instance.createPromoKitty(353170915, coo, {from: coo,value: 0});
await instance.createPromoKitty(605235651, coo, {from: coo,value: 0});
await instance.createPromoKitty(746378714, coo, {from: coo,value: 0});
await instance.createPromoKitty(27731071, coo, {from: coo,value: 0});
await instance.createPromoKitty(729323944, coo, {from: coo,value: 0});
await instance.createPromoKitty(8400547, coo, {from: coo,value: 0});
await instance.createPromoKitty(389603269, coo, {from: coo,value: 0});
await instance.createPromoKitty(776062164, coo, {from: coo,value: 0});
await instance.createPromoKitty(177488125, coo, {from: coo,value: 0});
await instance.createPromoKitty(192481532, coo, {from: coo,value: 0});
await instance.createPromoKitty(381066819, coo, {from: coo,value: 0});
await instance.createPromoKitty(235632359, coo, {from: coo,value: 0});
await instance.createPromoKitty(222429217, coo, {from: coo,value: 0});
await instance.createPromoKitty(947606693, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(1, 25, {from: coo});
await instance.breedWith(40, 7, {from: coo});
await instance.breedWith(27, 29, {from: coo});
await instance.breedWith(24, 14, {from: coo});
await instance.breedWith(23, 16, {from: coo});
await instance.breedWith(13, 26, {from: coo});
await instance.breedWith(30, 18, {from: coo});
await instance.breedWith(38, 37, {from: coo});
await instance.breedWith(35, 8, {from: coo});
await instance.breedWith(17, 2, {from: coo});
await instance.breedWith(3, 39, {from: coo});
await instance.breedWith(10, 12, {from: coo});
await instance.breedWith(22, 36, {from: coo});
await instance.breedWith(6, 11, {from: coo});
await instance.breedWith(20, 4, {from: coo});
await instance.breedWith(31, 33, {from: coo});
await instance.breedWith(15, 5, {from: coo});
await instance.breedWith(28, 32, {from: coo});
await instance.breedWith(21, 19, {from: coo});
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
await instance.giveBirth(1);
await instance.giveBirth(40);
await instance.giveBirth(27);
await instance.giveBirth(24);
await instance.giveBirth(23);
await instance.giveBirth(13);
await instance.giveBirth(30);
await instance.giveBirth(38);
await instance.giveBirth(35);
await instance.giveBirth(17);
await instance.giveBirth(3);
await instance.giveBirth(10);
await instance.giveBirth(22);
await instance.giveBirth(6);
await instance.giveBirth(20);
await instance.giveBirth(31);
await instance.giveBirth(15);
await instance.giveBirth(28);
await instance.giveBirth(21);
await instance.giveBirth(9);
});
it('test 5',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('test 6',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('test 7',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('test 8',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('test 9',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('acctack', async() => {
 await instance._breedWith(57,58,{from:coo});
});
});
