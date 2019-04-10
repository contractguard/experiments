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
await instance.createPromoKitty(302146822, coo, {from: coo,value: 0});
await instance.createPromoKitty(591402182, coo, {from: coo,value: 0});
await instance.createPromoKitty(887124381, coo, {from: coo,value: 0});
await instance.createPromoKitty(204628429, coo, {from: coo,value: 0});
await instance.createPromoKitty(791862760, coo, {from: coo,value: 0});
await instance.createPromoKitty(381414603, coo, {from: coo,value: 0});
await instance.createPromoKitty(591252541, coo, {from: coo,value: 0});
await instance.createPromoKitty(759877482, coo, {from: coo,value: 0});
await instance.createPromoKitty(396513611, coo, {from: coo,value: 0});
await instance.createPromoKitty(976734930, coo, {from: coo,value: 0});
await instance.createPromoKitty(974700246, coo, {from: coo,value: 0});
await instance.createPromoKitty(543084830, coo, {from: coo,value: 0});
await instance.createPromoKitty(771324074, coo, {from: coo,value: 0});
await instance.createPromoKitty(779065339, coo, {from: coo,value: 0});
await instance.createPromoKitty(811611760, coo, {from: coo,value: 0});
await instance.createPromoKitty(70871467, coo, {from: coo,value: 0});
await instance.createPromoKitty(243112222, coo, {from: coo,value: 0});
await instance.createPromoKitty(2284267, coo, {from: coo,value: 0});
await instance.createPromoKitty(948051335, coo, {from: coo,value: 0});
await instance.createPromoKitty(751168263, coo, {from: coo,value: 0});
await instance.createPromoKitty(874161237, coo, {from: coo,value: 0});
await instance.createPromoKitty(801804216, coo, {from: coo,value: 0});
await instance.createPromoKitty(591293191, coo, {from: coo,value: 0});
await instance.createPromoKitty(758075693, coo, {from: coo,value: 0});
await instance.createPromoKitty(231185743, coo, {from: coo,value: 0});
await instance.createPromoKitty(792629654, coo, {from: coo,value: 0});
await instance.createPromoKitty(274165906, coo, {from: coo,value: 0});
await instance.createPromoKitty(150082482, coo, {from: coo,value: 0});
await instance.createPromoKitty(613803350, coo, {from: coo,value: 0});
await instance.createPromoKitty(945545465, coo, {from: coo,value: 0});
await instance.createPromoKitty(508817363, coo, {from: coo,value: 0});
await instance.createPromoKitty(917364998, coo, {from: coo,value: 0});
await instance.createPromoKitty(299888704, coo, {from: coo,value: 0});
await instance.createPromoKitty(381271449, coo, {from: coo,value: 0});
await instance.createPromoKitty(210343219, coo, {from: coo,value: 0});
await instance.createPromoKitty(900932699, coo, {from: coo,value: 0});
await instance.createPromoKitty(443089451, coo, {from: coo,value: 0});
await instance.createPromoKitty(558317861, coo, {from: coo,value: 0});
await instance.createPromoKitty(133814084, coo, {from: coo,value: 0});
await instance.createPromoKitty(630712190, coo, {from: coo,value: 0});
await instance.createPromoKitty(685775205, coo, {from: coo,value: 0});
await instance.createPromoKitty(828856083, coo, {from: coo,value: 0});
await instance.createPromoKitty(70665447, coo, {from: coo,value: 0});
await instance.createPromoKitty(142754116, coo, {from: coo,value: 0});
await instance.createPromoKitty(462014834, coo, {from: coo,value: 0});
await instance.createPromoKitty(412658714, coo, {from: coo,value: 0});
await instance.createPromoKitty(799562885, coo, {from: coo,value: 0});
await instance.createPromoKitty(153117659, coo, {from: coo,value: 0});
await instance.createPromoKitty(752075400, coo, {from: coo,value: 0});
await instance.createPromoKitty(768970605, coo, {from: coo,value: 0});
await instance.createPromoKitty(289868697, coo, {from: coo,value: 0});
await instance.createPromoKitty(875671876, coo, {from: coo,value: 0});
await instance.createPromoKitty(399858777, coo, {from: coo,value: 0});
await instance.createPromoKitty(965864571, coo, {from: coo,value: 0});
await instance.createPromoKitty(391110415, coo, {from: coo,value: 0});
await instance.createPromoKitty(909603625, coo, {from: coo,value: 0});
await instance.createPromoKitty(169874100, coo, {from: coo,value: 0});
await instance.createPromoKitty(745658796, coo, {from: coo,value: 0});
await instance.createPromoKitty(361869473, coo, {from: coo,value: 0});
await instance.createPromoKitty(251151053, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(36, 1, {from: coo});
await instance.breedWith(30, 21, {from: coo});
await instance.breedWith(12, 40, {from: coo});
await instance.breedWith(27, 29, {from: coo});
await instance.breedWith(39, 6, {from: coo});
await instance.breedWith(5, 19, {from: coo});
await instance.breedWith(8, 20, {from: coo});
await instance.breedWith(17, 25, {from: coo});
await instance.breedWith(9, 18, {from: coo});
await instance.breedWith(15, 2, {from: coo});
await instance.breedWith(10, 22, {from: coo});
await instance.breedWith(24, 14, {from: coo});
await instance.breedWith(23, 7, {from: coo});
await instance.breedWith(31, 26, {from: coo});
await instance.breedWith(33, 4, {from: coo});
await instance.breedWith(32, 3, {from: coo});
await instance.breedWith(34, 16, {from: coo});
await instance.breedWith(38, 37, {from: coo});
await instance.breedWith(11, 28, {from: coo});
await instance.breedWith(13, 35, {from: coo});
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
await instance.giveBirth(36);
await instance.giveBirth(30);
await instance.giveBirth(12);
await instance.giveBirth(27);
await instance.giveBirth(39);
await instance.giveBirth(5);
await instance.giveBirth(8);
await instance.giveBirth(17);
await instance.giveBirth(9);
await instance.giveBirth(15);
await instance.giveBirth(10);
await instance.giveBirth(24);
await instance.giveBirth(23);
await instance.giveBirth(31);
await instance.giveBirth(33);
await instance.giveBirth(32);
await instance.giveBirth(34);
await instance.giveBirth(38);
await instance.giveBirth(11);
await instance.giveBirth(13);
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
});
it('attack', async() => {
 await instance.breedWith(57, bigValue, {from: coo});
});
});
