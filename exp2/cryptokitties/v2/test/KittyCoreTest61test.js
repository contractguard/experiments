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
await instance.createPromoKitty(399215249, coo, {from: coo,value: 0});
await instance.createPromoKitty(92899699, coo, {from: coo,value: 0});
await instance.createPromoKitty(385357196, coo, {from: coo,value: 0});
await instance.createPromoKitty(450752340, coo, {from: coo,value: 0});
await instance.createPromoKitty(510569931, coo, {from: coo,value: 0});
await instance.createPromoKitty(45410980, coo, {from: coo,value: 0});
await instance.createPromoKitty(315355836, coo, {from: coo,value: 0});
await instance.createPromoKitty(766729057, coo, {from: coo,value: 0});
await instance.createPromoKitty(323378429, coo, {from: coo,value: 0});
await instance.createPromoKitty(988146584, coo, {from: coo,value: 0});
await instance.createPromoKitty(251511238, coo, {from: coo,value: 0});
await instance.createPromoKitty(966790797, coo, {from: coo,value: 0});
await instance.createPromoKitty(547272406, coo, {from: coo,value: 0});
await instance.createPromoKitty(139945021, coo, {from: coo,value: 0});
await instance.createPromoKitty(596739476, coo, {from: coo,value: 0});
await instance.createPromoKitty(352444143, coo, {from: coo,value: 0});
await instance.createPromoKitty(813815293, coo, {from: coo,value: 0});
await instance.createPromoKitty(787914556, coo, {from: coo,value: 0});
await instance.createPromoKitty(268061842, coo, {from: coo,value: 0});
await instance.createPromoKitty(432948001, coo, {from: coo,value: 0});
await instance.createPromoKitty(114489855, coo, {from: coo,value: 0});
await instance.createPromoKitty(754342483, coo, {from: coo,value: 0});
await instance.createPromoKitty(128422589, coo, {from: coo,value: 0});
await instance.createPromoKitty(719625642, coo, {from: coo,value: 0});
await instance.createPromoKitty(830400957, coo, {from: coo,value: 0});
await instance.createPromoKitty(858437580, coo, {from: coo,value: 0});
await instance.createPromoKitty(745021607, coo, {from: coo,value: 0});
await instance.createPromoKitty(168642571, coo, {from: coo,value: 0});
await instance.createPromoKitty(381434916, coo, {from: coo,value: 0});
await instance.createPromoKitty(389028063, coo, {from: coo,value: 0});
await instance.createPromoKitty(268616671, coo, {from: coo,value: 0});
await instance.createPromoKitty(184512183, coo, {from: coo,value: 0});
await instance.createPromoKitty(82488495, coo, {from: coo,value: 0});
await instance.createPromoKitty(488655613, coo, {from: coo,value: 0});
await instance.createPromoKitty(523924364, coo, {from: coo,value: 0});
await instance.createPromoKitty(689387065, coo, {from: coo,value: 0});
await instance.createPromoKitty(761703245, coo, {from: coo,value: 0});
await instance.createPromoKitty(15571846, coo, {from: coo,value: 0});
await instance.createPromoKitty(935972170, coo, {from: coo,value: 0});
await instance.createPromoKitty(923401139, coo, {from: coo,value: 0});
await instance.createPromoKitty(268176788, coo, {from: coo,value: 0});
await instance.createPromoKitty(634279306, coo, {from: coo,value: 0});
await instance.createPromoKitty(190211709, coo, {from: coo,value: 0});
await instance.createPromoKitty(254339099, coo, {from: coo,value: 0});
await instance.createPromoKitty(604807760, coo, {from: coo,value: 0});
await instance.createPromoKitty(232998778, coo, {from: coo,value: 0});
await instance.createPromoKitty(257937857, coo, {from: coo,value: 0});
await instance.createPromoKitty(396161089, coo, {from: coo,value: 0});
await instance.createPromoKitty(220155609, coo, {from: coo,value: 0});
await instance.createPromoKitty(698578604, coo, {from: coo,value: 0});
await instance.createPromoKitty(343242427, coo, {from: coo,value: 0});
await instance.createPromoKitty(564652065, coo, {from: coo,value: 0});
await instance.createPromoKitty(69582290, coo, {from: coo,value: 0});
await instance.createPromoKitty(151090872, coo, {from: coo,value: 0});
await instance.createPromoKitty(565993483, coo, {from: coo,value: 0});
await instance.createPromoKitty(760986995, coo, {from: coo,value: 0});
await instance.createPromoKitty(859649061, coo, {from: coo,value: 0});
await instance.createPromoKitty(494270917, coo, {from: coo,value: 0});
await instance.createPromoKitty(380420353, coo, {from: coo,value: 0});
await instance.createPromoKitty(927402149, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(14, 23, {from: coo});
await instance.breedWith(37, 25, {from: coo});
await instance.breedWith(10, 6, {from: coo});
await instance.breedWith(39, 26, {from: coo});
await instance.breedWith(21, 30, {from: coo});
await instance.breedWith(19, 27, {from: coo});
await instance.breedWith(13, 17, {from: coo});
await instance.breedWith(2, 20, {from: coo});
await instance.breedWith(24, 33, {from: coo});
await instance.breedWith(29, 4, {from: coo});
await instance.breedWith(5, 3, {from: coo});
await instance.breedWith(8, 11, {from: coo});
await instance.breedWith(18, 7, {from: coo});
await instance.breedWith(22, 32, {from: coo});
await instance.breedWith(9, 12, {from: coo});
await instance.breedWith(28, 1, {from: coo});
await instance.breedWith(31, 35, {from: coo});
await instance.breedWith(36, 34, {from: coo});
await instance.breedWith(38, 15, {from: coo});
await instance.breedWith(16, 40, {from: coo});
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
await instance.giveBirth(14);
await instance.giveBirth(37);
await instance.giveBirth(10);
await instance.giveBirth(39);
await instance.giveBirth(21);
await instance.giveBirth(19);
await instance.giveBirth(13);
await instance.giveBirth(2);
await instance.giveBirth(24);
await instance.giveBirth(29);
await instance.giveBirth(5);
await instance.giveBirth(8);
await instance.giveBirth(18);
await instance.giveBirth(22);
await instance.giveBirth(9);
await instance.giveBirth(28);
await instance.giveBirth(31);
await instance.giveBirth(36);
await instance.giveBirth(38);
await instance.giveBirth(16);
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
