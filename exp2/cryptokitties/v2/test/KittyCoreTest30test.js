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
await instance.createPromoKitty(41712455, coo, {from: coo,value: 0});
await instance.createPromoKitty(823664086, coo, {from: coo,value: 0});
await instance.createPromoKitty(974957284, coo, {from: coo,value: 0});
await instance.createPromoKitty(609384467, coo, {from: coo,value: 0});
await instance.createPromoKitty(479243748, coo, {from: coo,value: 0});
await instance.createPromoKitty(758560068, coo, {from: coo,value: 0});
await instance.createPromoKitty(209048974, coo, {from: coo,value: 0});
await instance.createPromoKitty(284985583, coo, {from: coo,value: 0});
await instance.createPromoKitty(310726478, coo, {from: coo,value: 0});
await instance.createPromoKitty(585915934, coo, {from: coo,value: 0});
await instance.createPromoKitty(138015503, coo, {from: coo,value: 0});
await instance.createPromoKitty(926286984, coo, {from: coo,value: 0});
await instance.createPromoKitty(349304058, coo, {from: coo,value: 0});
await instance.createPromoKitty(420033876, coo, {from: coo,value: 0});
await instance.createPromoKitty(956047379, coo, {from: coo,value: 0});
await instance.createPromoKitty(832506368, coo, {from: coo,value: 0});
await instance.createPromoKitty(923707637, coo, {from: coo,value: 0});
await instance.createPromoKitty(636343340, coo, {from: coo,value: 0});
await instance.createPromoKitty(152841244, coo, {from: coo,value: 0});
await instance.createPromoKitty(159983151, coo, {from: coo,value: 0});
await instance.createPromoKitty(659821437, coo, {from: coo,value: 0});
await instance.createPromoKitty(66215214, coo, {from: coo,value: 0});
await instance.createPromoKitty(376253628, coo, {from: coo,value: 0});
await instance.createPromoKitty(650576238, coo, {from: coo,value: 0});
await instance.createPromoKitty(669937421, coo, {from: coo,value: 0});
await instance.createPromoKitty(788607519, coo, {from: coo,value: 0});
await instance.createPromoKitty(799229530, coo, {from: coo,value: 0});
await instance.createPromoKitty(578887079, coo, {from: coo,value: 0});
await instance.createPromoKitty(484176466, coo, {from: coo,value: 0});
await instance.createPromoKitty(863906687, coo, {from: coo,value: 0});
await instance.createPromoKitty(818546296, coo, {from: coo,value: 0});
await instance.createPromoKitty(356747116, coo, {from: coo,value: 0});
await instance.createPromoKitty(739310165, coo, {from: coo,value: 0});
await instance.createPromoKitty(140695856, coo, {from: coo,value: 0});
await instance.createPromoKitty(970214617, coo, {from: coo,value: 0});
await instance.createPromoKitty(137828950, coo, {from: coo,value: 0});
await instance.createPromoKitty(454879795, coo, {from: coo,value: 0});
await instance.createPromoKitty(695700324, coo, {from: coo,value: 0});
await instance.createPromoKitty(229180958, coo, {from: coo,value: 0});
await instance.createPromoKitty(62078343, coo, {from: coo,value: 0});
await instance.createPromoKitty(405547987, coo, {from: coo,value: 0});
await instance.createPromoKitty(105880779, coo, {from: coo,value: 0});
await instance.createPromoKitty(467926511, coo, {from: coo,value: 0});
await instance.createPromoKitty(665411430, coo, {from: coo,value: 0});
await instance.createPromoKitty(249900142, coo, {from: coo,value: 0});
await instance.createPromoKitty(476972065, coo, {from: coo,value: 0});
await instance.createPromoKitty(776356816, coo, {from: coo,value: 0});
await instance.createPromoKitty(8964791, coo, {from: coo,value: 0});
await instance.createPromoKitty(808175469, coo, {from: coo,value: 0});
await instance.createPromoKitty(488333521, coo, {from: coo,value: 0});
await instance.createPromoKitty(721858139, coo, {from: coo,value: 0});
await instance.createPromoKitty(870438184, coo, {from: coo,value: 0});
await instance.createPromoKitty(764903212, coo, {from: coo,value: 0});
await instance.createPromoKitty(157469736, coo, {from: coo,value: 0});
await instance.createPromoKitty(110267919, coo, {from: coo,value: 0});
await instance.createPromoKitty(878000500, coo, {from: coo,value: 0});
await instance.createPromoKitty(665062113, coo, {from: coo,value: 0});
await instance.createPromoKitty(580663003, coo, {from: coo,value: 0});
await instance.createPromoKitty(611800888, coo, {from: coo,value: 0});
await instance.createPromoKitty(433278155, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(26, 22, {from: coo});
await instance.breedWith(12, 19, {from: coo});
await instance.breedWith(18, 32, {from: coo});
await instance.breedWith(31, 1, {from: coo});
await instance.breedWith(20, 15, {from: coo});
await instance.breedWith(3, 35, {from: coo});
await instance.breedWith(27, 11, {from: coo});
await instance.breedWith(13, 29, {from: coo});
await instance.breedWith(4, 24, {from: coo});
await instance.breedWith(8, 33, {from: coo});
await instance.breedWith(30, 38, {from: coo});
await instance.breedWith(14, 6, {from: coo});
await instance.breedWith(37, 17, {from: coo});
await instance.breedWith(10, 23, {from: coo});
await instance.breedWith(7, 28, {from: coo});
await instance.breedWith(2, 34, {from: coo});
await instance.breedWith(5, 39, {from: coo});
await instance.breedWith(40, 21, {from: coo});
await instance.breedWith(16, 25, {from: coo});
await instance.breedWith(36, 9, {from: coo});
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
await instance.giveBirth(26);
await instance.giveBirth(12);
await instance.giveBirth(18);
await instance.giveBirth(31);
await instance.giveBirth(20);
await instance.giveBirth(3);
await instance.giveBirth(27);
await instance.giveBirth(13);
await instance.giveBirth(4);
await instance.giveBirth(8);
await instance.giveBirth(30);
await instance.giveBirth(14);
await instance.giveBirth(37);
await instance.giveBirth(10);
await instance.giveBirth(7);
await instance.giveBirth(2);
await instance.giveBirth(5);
await instance.giveBirth(40);
await instance.giveBirth(16);
await instance.giveBirth(36);
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
