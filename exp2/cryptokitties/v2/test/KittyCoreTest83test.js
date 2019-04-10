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
await instance.createPromoKitty(444474798, coo, {from: coo,value: 0});
await instance.createPromoKitty(822799699, coo, {from: coo,value: 0});
await instance.createPromoKitty(615669726, coo, {from: coo,value: 0});
await instance.createPromoKitty(651858724, coo, {from: coo,value: 0});
await instance.createPromoKitty(359796203, coo, {from: coo,value: 0});
await instance.createPromoKitty(257122642, coo, {from: coo,value: 0});
await instance.createPromoKitty(251958044, coo, {from: coo,value: 0});
await instance.createPromoKitty(281008680, coo, {from: coo,value: 0});
await instance.createPromoKitty(956020516, coo, {from: coo,value: 0});
await instance.createPromoKitty(834397473, coo, {from: coo,value: 0});
await instance.createPromoKitty(319380296, coo, {from: coo,value: 0});
await instance.createPromoKitty(259824435, coo, {from: coo,value: 0});
await instance.createPromoKitty(359640376, coo, {from: coo,value: 0});
await instance.createPromoKitty(793506752, coo, {from: coo,value: 0});
await instance.createPromoKitty(840657607, coo, {from: coo,value: 0});
await instance.createPromoKitty(865651036, coo, {from: coo,value: 0});
await instance.createPromoKitty(816395603, coo, {from: coo,value: 0});
await instance.createPromoKitty(764720732, coo, {from: coo,value: 0});
await instance.createPromoKitty(647723425, coo, {from: coo,value: 0});
await instance.createPromoKitty(437576126, coo, {from: coo,value: 0});
await instance.createPromoKitty(585573487, coo, {from: coo,value: 0});
await instance.createPromoKitty(50689290, coo, {from: coo,value: 0});
await instance.createPromoKitty(499833918, coo, {from: coo,value: 0});
await instance.createPromoKitty(491118378, coo, {from: coo,value: 0});
await instance.createPromoKitty(673348076, coo, {from: coo,value: 0});
await instance.createPromoKitty(229892541, coo, {from: coo,value: 0});
await instance.createPromoKitty(767661353, coo, {from: coo,value: 0});
await instance.createPromoKitty(465774748, coo, {from: coo,value: 0});
await instance.createPromoKitty(489334124, coo, {from: coo,value: 0});
await instance.createPromoKitty(208952675, coo, {from: coo,value: 0});
await instance.createPromoKitty(681503217, coo, {from: coo,value: 0});
await instance.createPromoKitty(882448824, coo, {from: coo,value: 0});
await instance.createPromoKitty(39846173, coo, {from: coo,value: 0});
await instance.createPromoKitty(312946812, coo, {from: coo,value: 0});
await instance.createPromoKitty(57072128, coo, {from: coo,value: 0});
await instance.createPromoKitty(812145177, coo, {from: coo,value: 0});
await instance.createPromoKitty(12320115, coo, {from: coo,value: 0});
await instance.createPromoKitty(514503627, coo, {from: coo,value: 0});
await instance.createPromoKitty(296134708, coo, {from: coo,value: 0});
await instance.createPromoKitty(481962814, coo, {from: coo,value: 0});
await instance.createPromoKitty(510607702, coo, {from: coo,value: 0});
await instance.createPromoKitty(408059107, coo, {from: coo,value: 0});
await instance.createPromoKitty(247034794, coo, {from: coo,value: 0});
await instance.createPromoKitty(144767940, coo, {from: coo,value: 0});
await instance.createPromoKitty(553304480, coo, {from: coo,value: 0});
await instance.createPromoKitty(926664983, coo, {from: coo,value: 0});
await instance.createPromoKitty(738094265, coo, {from: coo,value: 0});
await instance.createPromoKitty(951114498, coo, {from: coo,value: 0});
await instance.createPromoKitty(697650423, coo, {from: coo,value: 0});
await instance.createPromoKitty(524058222, coo, {from: coo,value: 0});
await instance.createPromoKitty(785404590, coo, {from: coo,value: 0});
await instance.createPromoKitty(171601225, coo, {from: coo,value: 0});
await instance.createPromoKitty(312183426, coo, {from: coo,value: 0});
await instance.createPromoKitty(745377193, coo, {from: coo,value: 0});
await instance.createPromoKitty(346787075, coo, {from: coo,value: 0});
await instance.createPromoKitty(854240939, coo, {from: coo,value: 0});
await instance.createPromoKitty(597250505, coo, {from: coo,value: 0});
await instance.createPromoKitty(698504817, coo, {from: coo,value: 0});
await instance.createPromoKitty(642988752, coo, {from: coo,value: 0});
await instance.createPromoKitty(440379016, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(40, 17, {from: coo});
await instance.breedWith(14, 12, {from: coo});
await instance.breedWith(5, 15, {from: coo});
await instance.breedWith(3, 11, {from: coo});
await instance.breedWith(36, 9, {from: coo});
await instance.breedWith(28, 25, {from: coo});
await instance.breedWith(32, 2, {from: coo});
await instance.breedWith(18, 10, {from: coo});
await instance.breedWith(8, 30, {from: coo});
await instance.breedWith(34, 23, {from: coo});
await instance.breedWith(22, 27, {from: coo});
await instance.breedWith(31, 29, {from: coo});
await instance.breedWith(19, 4, {from: coo});
await instance.breedWith(33, 20, {from: coo});
await instance.breedWith(21, 39, {from: coo});
await instance.breedWith(26, 35, {from: coo});
await instance.breedWith(6, 13, {from: coo});
await instance.breedWith(37, 38, {from: coo});
await instance.breedWith(1, 16, {from: coo});
await instance.breedWith(24, 7, {from: coo});
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
await instance.giveBirth(40);
await instance.giveBirth(14);
await instance.giveBirth(5);
await instance.giveBirth(3);
await instance.giveBirth(36);
await instance.giveBirth(28);
await instance.giveBirth(32);
await instance.giveBirth(18);
await instance.giveBirth(8);
await instance.giveBirth(34);
await instance.giveBirth(22);
await instance.giveBirth(31);
await instance.giveBirth(19);
await instance.giveBirth(33);
await instance.giveBirth(21);
await instance.giveBirth(26);
await instance.giveBirth(6);
await instance.giveBirth(37);
await instance.giveBirth(1);
await instance.giveBirth(24);
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
