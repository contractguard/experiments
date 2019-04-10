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
await instance.createPromoKitty(271195594, coo, {from: coo,value: 0});
await instance.createPromoKitty(534289072, coo, {from: coo,value: 0});
await instance.createPromoKitty(852604170, coo, {from: coo,value: 0});
await instance.createPromoKitty(70179164, coo, {from: coo,value: 0});
await instance.createPromoKitty(511856549, coo, {from: coo,value: 0});
await instance.createPromoKitty(7723301, coo, {from: coo,value: 0});
await instance.createPromoKitty(934610412, coo, {from: coo,value: 0});
await instance.createPromoKitty(650896266, coo, {from: coo,value: 0});
await instance.createPromoKitty(405065331, coo, {from: coo,value: 0});
await instance.createPromoKitty(967967190, coo, {from: coo,value: 0});
await instance.createPromoKitty(541833764, coo, {from: coo,value: 0});
await instance.createPromoKitty(532062973, coo, {from: coo,value: 0});
await instance.createPromoKitty(71732292, coo, {from: coo,value: 0});
await instance.createPromoKitty(738343873, coo, {from: coo,value: 0});
await instance.createPromoKitty(690769038, coo, {from: coo,value: 0});
await instance.createPromoKitty(291076183, coo, {from: coo,value: 0});
await instance.createPromoKitty(483395961, coo, {from: coo,value: 0});
await instance.createPromoKitty(219272445, coo, {from: coo,value: 0});
await instance.createPromoKitty(57731993, coo, {from: coo,value: 0});
await instance.createPromoKitty(199606490, coo, {from: coo,value: 0});
await instance.createPromoKitty(387704302, coo, {from: coo,value: 0});
await instance.createPromoKitty(773014887, coo, {from: coo,value: 0});
await instance.createPromoKitty(24008896, coo, {from: coo,value: 0});
await instance.createPromoKitty(951554504, coo, {from: coo,value: 0});
await instance.createPromoKitty(117769933, coo, {from: coo,value: 0});
await instance.createPromoKitty(645547600, coo, {from: coo,value: 0});
await instance.createPromoKitty(438738379, coo, {from: coo,value: 0});
await instance.createPromoKitty(9421796, coo, {from: coo,value: 0});
await instance.createPromoKitty(252446584, coo, {from: coo,value: 0});
await instance.createPromoKitty(519017110, coo, {from: coo,value: 0});
await instance.createPromoKitty(404025013, coo, {from: coo,value: 0});
await instance.createPromoKitty(93983413, coo, {from: coo,value: 0});
await instance.createPromoKitty(993808753, coo, {from: coo,value: 0});
await instance.createPromoKitty(434467095, coo, {from: coo,value: 0});
await instance.createPromoKitty(517540135, coo, {from: coo,value: 0});
await instance.createPromoKitty(220154711, coo, {from: coo,value: 0});
await instance.createPromoKitty(181541697, coo, {from: coo,value: 0});
await instance.createPromoKitty(671843845, coo, {from: coo,value: 0});
await instance.createPromoKitty(171242707, coo, {from: coo,value: 0});
await instance.createPromoKitty(137588449, coo, {from: coo,value: 0});
await instance.createPromoKitty(649620285, coo, {from: coo,value: 0});
await instance.createPromoKitty(895211564, coo, {from: coo,value: 0});
await instance.createPromoKitty(176779562, coo, {from: coo,value: 0});
await instance.createPromoKitty(106090859, coo, {from: coo,value: 0});
await instance.createPromoKitty(795532152, coo, {from: coo,value: 0});
await instance.createPromoKitty(173184984, coo, {from: coo,value: 0});
await instance.createPromoKitty(425208669, coo, {from: coo,value: 0});
await instance.createPromoKitty(442596207, coo, {from: coo,value: 0});
await instance.createPromoKitty(817269999, coo, {from: coo,value: 0});
await instance.createPromoKitty(308007783, coo, {from: coo,value: 0});
await instance.createPromoKitty(162177008, coo, {from: coo,value: 0});
await instance.createPromoKitty(425019255, coo, {from: coo,value: 0});
await instance.createPromoKitty(181669361, coo, {from: coo,value: 0});
await instance.createPromoKitty(321564933, coo, {from: coo,value: 0});
await instance.createPromoKitty(139257872, coo, {from: coo,value: 0});
await instance.createPromoKitty(161453117, coo, {from: coo,value: 0});
await instance.createPromoKitty(875682099, coo, {from: coo,value: 0});
await instance.createPromoKitty(870251374, coo, {from: coo,value: 0});
await instance.createPromoKitty(318294838, coo, {from: coo,value: 0});
await instance.createPromoKitty(83889552, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(20, 1, {from: coo});
await instance.breedWith(23, 2, {from: coo});
await instance.breedWith(8, 6, {from: coo});
await instance.breedWith(18, 22, {from: coo});
await instance.breedWith(5, 33, {from: coo});
await instance.breedWith(24, 29, {from: coo});
await instance.breedWith(27, 39, {from: coo});
await instance.breedWith(40, 17, {from: coo});
await instance.breedWith(11, 31, {from: coo});
await instance.breedWith(36, 26, {from: coo});
await instance.breedWith(30, 38, {from: coo});
await instance.breedWith(28, 10, {from: coo});
await instance.breedWith(7, 16, {from: coo});
await instance.breedWith(14, 19, {from: coo});
await instance.breedWith(32, 9, {from: coo});
await instance.breedWith(37, 21, {from: coo});
await instance.breedWith(15, 3, {from: coo});
await instance.breedWith(25, 4, {from: coo});
await instance.breedWith(34, 13, {from: coo});
await instance.breedWith(12, 35, {from: coo});
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
await instance.giveBirth(20);
await instance.giveBirth(23);
await instance.giveBirth(8);
await instance.giveBirth(18);
await instance.giveBirth(5);
await instance.giveBirth(24);
await instance.giveBirth(27);
await instance.giveBirth(40);
await instance.giveBirth(11);
await instance.giveBirth(36);
await instance.giveBirth(30);
await instance.giveBirth(28);
await instance.giveBirth(7);
await instance.giveBirth(14);
await instance.giveBirth(32);
await instance.giveBirth(37);
await instance.giveBirth(15);
await instance.giveBirth(25);
await instance.giveBirth(34);
await instance.giveBirth(12);
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
