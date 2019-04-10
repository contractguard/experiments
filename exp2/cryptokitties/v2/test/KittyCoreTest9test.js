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
await instance.createPromoKitty(496945545, coo, {from: coo,value: 0});
await instance.createPromoKitty(927124081, coo, {from: coo,value: 0});
await instance.createPromoKitty(939919441, coo, {from: coo,value: 0});
await instance.createPromoKitty(656199449, coo, {from: coo,value: 0});
await instance.createPromoKitty(81845669, coo, {from: coo,value: 0});
await instance.createPromoKitty(982868207, coo, {from: coo,value: 0});
await instance.createPromoKitty(738153223, coo, {from: coo,value: 0});
await instance.createPromoKitty(860001747, coo, {from: coo,value: 0});
await instance.createPromoKitty(806585207, coo, {from: coo,value: 0});
await instance.createPromoKitty(130481927, coo, {from: coo,value: 0});
await instance.createPromoKitty(634532231, coo, {from: coo,value: 0});
await instance.createPromoKitty(15120114, coo, {from: coo,value: 0});
await instance.createPromoKitty(4824796, coo, {from: coo,value: 0});
await instance.createPromoKitty(179363808, coo, {from: coo,value: 0});
await instance.createPromoKitty(359957217, coo, {from: coo,value: 0});
await instance.createPromoKitty(682191181, coo, {from: coo,value: 0});
await instance.createPromoKitty(291683952, coo, {from: coo,value: 0});
await instance.createPromoKitty(185334370, coo, {from: coo,value: 0});
await instance.createPromoKitty(613296568, coo, {from: coo,value: 0});
await instance.createPromoKitty(452119588, coo, {from: coo,value: 0});
await instance.createPromoKitty(302693872, coo, {from: coo,value: 0});
await instance.createPromoKitty(541923546, coo, {from: coo,value: 0});
await instance.createPromoKitty(738778797, coo, {from: coo,value: 0});
await instance.createPromoKitty(949909320, coo, {from: coo,value: 0});
await instance.createPromoKitty(288808087, coo, {from: coo,value: 0});
await instance.createPromoKitty(260995999, coo, {from: coo,value: 0});
await instance.createPromoKitty(361245998, coo, {from: coo,value: 0});
await instance.createPromoKitty(126128906, coo, {from: coo,value: 0});
await instance.createPromoKitty(340537389, coo, {from: coo,value: 0});
await instance.createPromoKitty(470174531, coo, {from: coo,value: 0});
await instance.createPromoKitty(639096665, coo, {from: coo,value: 0});
await instance.createPromoKitty(83433410, coo, {from: coo,value: 0});
await instance.createPromoKitty(403314637, coo, {from: coo,value: 0});
await instance.createPromoKitty(605272169, coo, {from: coo,value: 0});
await instance.createPromoKitty(24868360, coo, {from: coo,value: 0});
await instance.createPromoKitty(724062253, coo, {from: coo,value: 0});
await instance.createPromoKitty(508603481, coo, {from: coo,value: 0});
await instance.createPromoKitty(807594634, coo, {from: coo,value: 0});
await instance.createPromoKitty(210917979, coo, {from: coo,value: 0});
await instance.createPromoKitty(441638796, coo, {from: coo,value: 0});
await instance.createPromoKitty(581910728, coo, {from: coo,value: 0});
await instance.createPromoKitty(869896867, coo, {from: coo,value: 0});
await instance.createPromoKitty(132674240, coo, {from: coo,value: 0});
await instance.createPromoKitty(215346344, coo, {from: coo,value: 0});
await instance.createPromoKitty(686558926, coo, {from: coo,value: 0});
await instance.createPromoKitty(316760653, coo, {from: coo,value: 0});
await instance.createPromoKitty(442639407, coo, {from: coo,value: 0});
await instance.createPromoKitty(899452865, coo, {from: coo,value: 0});
await instance.createPromoKitty(585688927, coo, {from: coo,value: 0});
await instance.createPromoKitty(206503634, coo, {from: coo,value: 0});
await instance.createPromoKitty(864090046, coo, {from: coo,value: 0});
await instance.createPromoKitty(310158360, coo, {from: coo,value: 0});
await instance.createPromoKitty(309415212, coo, {from: coo,value: 0});
await instance.createPromoKitty(949828373, coo, {from: coo,value: 0});
await instance.createPromoKitty(674437880, coo, {from: coo,value: 0});
await instance.createPromoKitty(486319954, coo, {from: coo,value: 0});
await instance.createPromoKitty(806873189, coo, {from: coo,value: 0});
await instance.createPromoKitty(765715217, coo, {from: coo,value: 0});
await instance.createPromoKitty(848367843, coo, {from: coo,value: 0});
await instance.createPromoKitty(761877218, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(34, 20, {from: coo});
await instance.breedWith(7, 30, {from: coo});
await instance.breedWith(3, 39, {from: coo});
await instance.breedWith(13, 17, {from: coo});
await instance.breedWith(31, 11, {from: coo});
await instance.breedWith(40, 22, {from: coo});
await instance.breedWith(4, 37, {from: coo});
await instance.breedWith(1, 8, {from: coo});
await instance.breedWith(26, 12, {from: coo});
await instance.breedWith(18, 9, {from: coo});
await instance.breedWith(23, 35, {from: coo});
await instance.breedWith(27, 15, {from: coo});
await instance.breedWith(32, 14, {from: coo});
await instance.breedWith(5, 33, {from: coo});
await instance.breedWith(19, 16, {from: coo});
await instance.breedWith(25, 38, {from: coo});
await instance.breedWith(10, 2, {from: coo});
await instance.breedWith(36, 29, {from: coo});
await instance.breedWith(24, 21, {from: coo});
await instance.breedWith(28, 6, {from: coo});
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
await instance.giveBirth(34);
await instance.giveBirth(7);
await instance.giveBirth(3);
await instance.giveBirth(13);
await instance.giveBirth(31);
await instance.giveBirth(40);
await instance.giveBirth(4);
await instance.giveBirth(1);
await instance.giveBirth(26);
await instance.giveBirth(18);
await instance.giveBirth(23);
await instance.giveBirth(27);
await instance.giveBirth(32);
await instance.giveBirth(5);
await instance.giveBirth(19);
await instance.giveBirth(25);
await instance.giveBirth(10);
await instance.giveBirth(36);
await instance.giveBirth(24);
await instance.giveBirth(28);
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
