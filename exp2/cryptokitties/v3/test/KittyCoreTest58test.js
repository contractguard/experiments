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
await instance.createPromoKitty(783714927, coo, {from: coo,value: 0});
await instance.createPromoKitty(56230422, coo, {from: coo,value: 0});
await instance.createPromoKitty(166317399, coo, {from: coo,value: 0});
await instance.createPromoKitty(598951634, coo, {from: coo,value: 0});
await instance.createPromoKitty(938550601, coo, {from: coo,value: 0});
await instance.createPromoKitty(360115273, coo, {from: coo,value: 0});
await instance.createPromoKitty(41662991, coo, {from: coo,value: 0});
await instance.createPromoKitty(175716656, coo, {from: coo,value: 0});
await instance.createPromoKitty(613273397, coo, {from: coo,value: 0});
await instance.createPromoKitty(269921197, coo, {from: coo,value: 0});
await instance.createPromoKitty(253987296, coo, {from: coo,value: 0});
await instance.createPromoKitty(309521855, coo, {from: coo,value: 0});
await instance.createPromoKitty(455520617, coo, {from: coo,value: 0});
await instance.createPromoKitty(339692209, coo, {from: coo,value: 0});
await instance.createPromoKitty(54626567, coo, {from: coo,value: 0});
await instance.createPromoKitty(931015088, coo, {from: coo,value: 0});
await instance.createPromoKitty(774885660, coo, {from: coo,value: 0});
await instance.createPromoKitty(932637074, coo, {from: coo,value: 0});
await instance.createPromoKitty(364404970, coo, {from: coo,value: 0});
await instance.createPromoKitty(153524658, coo, {from: coo,value: 0});
await instance.createPromoKitty(896074335, coo, {from: coo,value: 0});
await instance.createPromoKitty(146751799, coo, {from: coo,value: 0});
await instance.createPromoKitty(599780309, coo, {from: coo,value: 0});
await instance.createPromoKitty(158014793, coo, {from: coo,value: 0});
await instance.createPromoKitty(271000731, coo, {from: coo,value: 0});
await instance.createPromoKitty(923926793, coo, {from: coo,value: 0});
await instance.createPromoKitty(772470655, coo, {from: coo,value: 0});
await instance.createPromoKitty(292922959, coo, {from: coo,value: 0});
await instance.createPromoKitty(619472479, coo, {from: coo,value: 0});
await instance.createPromoKitty(728569260, coo, {from: coo,value: 0});
await instance.createPromoKitty(227642573, coo, {from: coo,value: 0});
await instance.createPromoKitty(310749435, coo, {from: coo,value: 0});
await instance.createPromoKitty(16372355, coo, {from: coo,value: 0});
await instance.createPromoKitty(404687233, coo, {from: coo,value: 0});
await instance.createPromoKitty(94268594, coo, {from: coo,value: 0});
await instance.createPromoKitty(766934418, coo, {from: coo,value: 0});
await instance.createPromoKitty(902547817, coo, {from: coo,value: 0});
await instance.createPromoKitty(155616948, coo, {from: coo,value: 0});
await instance.createPromoKitty(259610637, coo, {from: coo,value: 0});
await instance.createPromoKitty(538046206, coo, {from: coo,value: 0});
await instance.createPromoKitty(601665098, coo, {from: coo,value: 0});
await instance.createPromoKitty(214022048, coo, {from: coo,value: 0});
await instance.createPromoKitty(368934122, coo, {from: coo,value: 0});
await instance.createPromoKitty(270578891, coo, {from: coo,value: 0});
await instance.createPromoKitty(863530676, coo, {from: coo,value: 0});
await instance.createPromoKitty(597084440, coo, {from: coo,value: 0});
await instance.createPromoKitty(508600275, coo, {from: coo,value: 0});
await instance.createPromoKitty(834613258, coo, {from: coo,value: 0});
await instance.createPromoKitty(85545962, coo, {from: coo,value: 0});
await instance.createPromoKitty(498235029, coo, {from: coo,value: 0});
await instance.createPromoKitty(75254211, coo, {from: coo,value: 0});
await instance.createPromoKitty(827057512, coo, {from: coo,value: 0});
await instance.createPromoKitty(701219211, coo, {from: coo,value: 0});
await instance.createPromoKitty(243106041, coo, {from: coo,value: 0});
await instance.createPromoKitty(695750552, coo, {from: coo,value: 0});
await instance.createPromoKitty(854269736, coo, {from: coo,value: 0});
await instance.createPromoKitty(846785832, coo, {from: coo,value: 0});
await instance.createPromoKitty(954161037, coo, {from: coo,value: 0});
await instance.createPromoKitty(898051216, coo, {from: coo,value: 0});
await instance.createPromoKitty(487775331, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(13, 37, {from: coo});
await instance.breedWith(9, 14, {from: coo});
await instance.breedWith(23, 40, {from: coo});
await instance.breedWith(31, 7, {from: coo});
await instance.breedWith(32, 12, {from: coo});
await instance.breedWith(21, 22, {from: coo});
await instance.breedWith(8, 2, {from: coo});
await instance.breedWith(29, 36, {from: coo});
await instance.breedWith(17, 19, {from: coo});
await instance.breedWith(33, 10, {from: coo});
await instance.breedWith(35, 24, {from: coo});
await instance.breedWith(27, 34, {from: coo});
await instance.breedWith(11, 6, {from: coo});
await instance.breedWith(3, 5, {from: coo});
await instance.breedWith(38, 4, {from: coo});
await instance.breedWith(16, 39, {from: coo});
await instance.breedWith(1, 20, {from: coo});
await instance.breedWith(15, 30, {from: coo});
await instance.breedWith(25, 28, {from: coo});
await instance.breedWith(18, 26, {from: coo});
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
await instance.giveBirth(13);
await instance.giveBirth(9);
await instance.giveBirth(23);
await instance.giveBirth(31);
await instance.giveBirth(32);
await instance.giveBirth(21);
await instance.giveBirth(8);
await instance.giveBirth(29);
await instance.giveBirth(17);
await instance.giveBirth(33);
await instance.giveBirth(35);
await instance.giveBirth(27);
await instance.giveBirth(11);
await instance.giveBirth(3);
await instance.giveBirth(38);
await instance.giveBirth(16);
await instance.giveBirth(1);
await instance.giveBirth(15);
await instance.giveBirth(25);
await instance.giveBirth(18);
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
