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
await instance.createPromoKitty(31438784, coo, {from: coo,value: 0});
await instance.createPromoKitty(672557448, coo, {from: coo,value: 0});
await instance.createPromoKitty(626900130, coo, {from: coo,value: 0});
await instance.createPromoKitty(979074226, coo, {from: coo,value: 0});
await instance.createPromoKitty(629396835, coo, {from: coo,value: 0});
await instance.createPromoKitty(360325586, coo, {from: coo,value: 0});
await instance.createPromoKitty(166174827, coo, {from: coo,value: 0});
await instance.createPromoKitty(178081712, coo, {from: coo,value: 0});
await instance.createPromoKitty(793169233, coo, {from: coo,value: 0});
await instance.createPromoKitty(725845871, coo, {from: coo,value: 0});
await instance.createPromoKitty(773735914, coo, {from: coo,value: 0});
await instance.createPromoKitty(48339704, coo, {from: coo,value: 0});
await instance.createPromoKitty(801147440, coo, {from: coo,value: 0});
await instance.createPromoKitty(126130568, coo, {from: coo,value: 0});
await instance.createPromoKitty(711755084, coo, {from: coo,value: 0});
await instance.createPromoKitty(567993721, coo, {from: coo,value: 0});
await instance.createPromoKitty(132853989, coo, {from: coo,value: 0});
await instance.createPromoKitty(133043368, coo, {from: coo,value: 0});
await instance.createPromoKitty(101805318, coo, {from: coo,value: 0});
await instance.createPromoKitty(310919042, coo, {from: coo,value: 0});
await instance.createPromoKitty(124933486, coo, {from: coo,value: 0});
await instance.createPromoKitty(329431405, coo, {from: coo,value: 0});
await instance.createPromoKitty(497926068, coo, {from: coo,value: 0});
await instance.createPromoKitty(50634858, coo, {from: coo,value: 0});
await instance.createPromoKitty(668672984, coo, {from: coo,value: 0});
await instance.createPromoKitty(582968519, coo, {from: coo,value: 0});
await instance.createPromoKitty(209686105, coo, {from: coo,value: 0});
await instance.createPromoKitty(24001330, coo, {from: coo,value: 0});
await instance.createPromoKitty(219562180, coo, {from: coo,value: 0});
await instance.createPromoKitty(863455204, coo, {from: coo,value: 0});
await instance.createPromoKitty(496302302, coo, {from: coo,value: 0});
await instance.createPromoKitty(880946088, coo, {from: coo,value: 0});
await instance.createPromoKitty(401799301, coo, {from: coo,value: 0});
await instance.createPromoKitty(467924107, coo, {from: coo,value: 0});
await instance.createPromoKitty(236863534, coo, {from: coo,value: 0});
await instance.createPromoKitty(302831334, coo, {from: coo,value: 0});
await instance.createPromoKitty(195042575, coo, {from: coo,value: 0});
await instance.createPromoKitty(657229658, coo, {from: coo,value: 0});
await instance.createPromoKitty(864101609, coo, {from: coo,value: 0});
await instance.createPromoKitty(45972028, coo, {from: coo,value: 0});
await instance.createPromoKitty(945979074, coo, {from: coo,value: 0});
await instance.createPromoKitty(240369857, coo, {from: coo,value: 0});
await instance.createPromoKitty(630727768, coo, {from: coo,value: 0});
await instance.createPromoKitty(985648026, coo, {from: coo,value: 0});
await instance.createPromoKitty(932714851, coo, {from: coo,value: 0});
await instance.createPromoKitty(147694860, coo, {from: coo,value: 0});
await instance.createPromoKitty(493915850, coo, {from: coo,value: 0});
await instance.createPromoKitty(525080395, coo, {from: coo,value: 0});
await instance.createPromoKitty(753326250, coo, {from: coo,value: 0});
await instance.createPromoKitty(855566239, coo, {from: coo,value: 0});
await instance.createPromoKitty(898519328, coo, {from: coo,value: 0});
await instance.createPromoKitty(333009561, coo, {from: coo,value: 0});
await instance.createPromoKitty(746734171, coo, {from: coo,value: 0});
await instance.createPromoKitty(679075669, coo, {from: coo,value: 0});
await instance.createPromoKitty(901647272, coo, {from: coo,value: 0});
await instance.createPromoKitty(389875560, coo, {from: coo,value: 0});
await instance.createPromoKitty(560992642, coo, {from: coo,value: 0});
await instance.createPromoKitty(341497532, coo, {from: coo,value: 0});
await instance.createPromoKitty(661215333, coo, {from: coo,value: 0});
await instance.createPromoKitty(96264234, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(16, 7, {from: coo});
await instance.breedWith(1, 11, {from: coo});
await instance.breedWith(14, 24, {from: coo});
await instance.breedWith(6, 34, {from: coo});
await instance.breedWith(23, 9, {from: coo});
await instance.breedWith(19, 10, {from: coo});
await instance.breedWith(25, 26, {from: coo});
await instance.breedWith(5, 2, {from: coo});
await instance.breedWith(17, 37, {from: coo});
await instance.breedWith(29, 22, {from: coo});
await instance.breedWith(38, 39, {from: coo});
await instance.breedWith(3, 33, {from: coo});
await instance.breedWith(36, 13, {from: coo});
await instance.breedWith(8, 40, {from: coo});
await instance.breedWith(30, 21, {from: coo});
await instance.breedWith(35, 15, {from: coo});
await instance.breedWith(12, 18, {from: coo});
await instance.breedWith(28, 31, {from: coo});
await instance.breedWith(27, 32, {from: coo});
await instance.breedWith(20, 4, {from: coo});
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
await instance.giveBirth(16);
await instance.giveBirth(1);
await instance.giveBirth(14);
await instance.giveBirth(6);
await instance.giveBirth(23);
await instance.giveBirth(19);
await instance.giveBirth(25);
await instance.giveBirth(5);
await instance.giveBirth(17);
await instance.giveBirth(29);
await instance.giveBirth(38);
await instance.giveBirth(3);
await instance.giveBirth(36);
await instance.giveBirth(8);
await instance.giveBirth(30);
await instance.giveBirth(35);
await instance.giveBirth(12);
await instance.giveBirth(28);
await instance.giveBirth(27);
await instance.giveBirth(20);
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
