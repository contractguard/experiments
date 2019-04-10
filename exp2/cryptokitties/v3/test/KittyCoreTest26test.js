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
await instance.createPromoKitty(316461352, coo, {from: coo,value: 0});
await instance.createPromoKitty(578578441, coo, {from: coo,value: 0});
await instance.createPromoKitty(408593674, coo, {from: coo,value: 0});
await instance.createPromoKitty(342781670, coo, {from: coo,value: 0});
await instance.createPromoKitty(377521121, coo, {from: coo,value: 0});
await instance.createPromoKitty(107126240, coo, {from: coo,value: 0});
await instance.createPromoKitty(625918298, coo, {from: coo,value: 0});
await instance.createPromoKitty(582886575, coo, {from: coo,value: 0});
await instance.createPromoKitty(60612645, coo, {from: coo,value: 0});
await instance.createPromoKitty(990443689, coo, {from: coo,value: 0});
await instance.createPromoKitty(363327109, coo, {from: coo,value: 0});
await instance.createPromoKitty(431930911, coo, {from: coo,value: 0});
await instance.createPromoKitty(277697927, coo, {from: coo,value: 0});
await instance.createPromoKitty(840977770, coo, {from: coo,value: 0});
await instance.createPromoKitty(124443098, coo, {from: coo,value: 0});
await instance.createPromoKitty(124122498, coo, {from: coo,value: 0});
await instance.createPromoKitty(550232343, coo, {from: coo,value: 0});
await instance.createPromoKitty(924987335, coo, {from: coo,value: 0});
await instance.createPromoKitty(282524603, coo, {from: coo,value: 0});
await instance.createPromoKitty(254177724, coo, {from: coo,value: 0});
await instance.createPromoKitty(794324394, coo, {from: coo,value: 0});
await instance.createPromoKitty(869733240, coo, {from: coo,value: 0});
await instance.createPromoKitty(69502798, coo, {from: coo,value: 0});
await instance.createPromoKitty(194964012, coo, {from: coo,value: 0});
await instance.createPromoKitty(321858612, coo, {from: coo,value: 0});
await instance.createPromoKitty(976487722, coo, {from: coo,value: 0});
await instance.createPromoKitty(197137818, coo, {from: coo,value: 0});
await instance.createPromoKitty(532182080, coo, {from: coo,value: 0});
await instance.createPromoKitty(493673983, coo, {from: coo,value: 0});
await instance.createPromoKitty(563491379, coo, {from: coo,value: 0});
await instance.createPromoKitty(797075460, coo, {from: coo,value: 0});
await instance.createPromoKitty(378829399, coo, {from: coo,value: 0});
await instance.createPromoKitty(383941044, coo, {from: coo,value: 0});
await instance.createPromoKitty(686794, coo, {from: coo,value: 0});
await instance.createPromoKitty(489635406, coo, {from: coo,value: 0});
await instance.createPromoKitty(508654852, coo, {from: coo,value: 0});
await instance.createPromoKitty(807401373, coo, {from: coo,value: 0});
await instance.createPromoKitty(715679981, coo, {from: coo,value: 0});
await instance.createPromoKitty(932256470, coo, {from: coo,value: 0});
await instance.createPromoKitty(367634078, coo, {from: coo,value: 0});
await instance.createPromoKitty(361936390, coo, {from: coo,value: 0});
await instance.createPromoKitty(612445214, coo, {from: coo,value: 0});
await instance.createPromoKitty(843034283, coo, {from: coo,value: 0});
await instance.createPromoKitty(799991596, coo, {from: coo,value: 0});
await instance.createPromoKitty(896851514, coo, {from: coo,value: 0});
await instance.createPromoKitty(672205910, coo, {from: coo,value: 0});
await instance.createPromoKitty(245822233, coo, {from: coo,value: 0});
await instance.createPromoKitty(831271457, coo, {from: coo,value: 0});
await instance.createPromoKitty(134502207, coo, {from: coo,value: 0});
await instance.createPromoKitty(824103704, coo, {from: coo,value: 0});
await instance.createPromoKitty(29129667, coo, {from: coo,value: 0});
await instance.createPromoKitty(847562486, coo, {from: coo,value: 0});
await instance.createPromoKitty(648267216, coo, {from: coo,value: 0});
await instance.createPromoKitty(615043905, coo, {from: coo,value: 0});
await instance.createPromoKitty(167033028, coo, {from: coo,value: 0});
await instance.createPromoKitty(927472905, coo, {from: coo,value: 0});
await instance.createPromoKitty(397541414, coo, {from: coo,value: 0});
await instance.createPromoKitty(101234201, coo, {from: coo,value: 0});
await instance.createPromoKitty(620315650, coo, {from: coo,value: 0});
await instance.createPromoKitty(900955771, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(17, 31, {from: coo});
await instance.breedWith(22, 35, {from: coo});
await instance.breedWith(18, 40, {from: coo});
await instance.breedWith(15, 9, {from: coo});
await instance.breedWith(7, 30, {from: coo});
await instance.breedWith(25, 10, {from: coo});
await instance.breedWith(13, 6, {from: coo});
await instance.breedWith(16, 36, {from: coo});
await instance.breedWith(5, 1, {from: coo});
await instance.breedWith(38, 29, {from: coo});
await instance.breedWith(4, 32, {from: coo});
await instance.breedWith(8, 34, {from: coo});
await instance.breedWith(14, 27, {from: coo});
await instance.breedWith(2, 37, {from: coo});
await instance.breedWith(11, 19, {from: coo});
await instance.breedWith(3, 21, {from: coo});
await instance.breedWith(33, 28, {from: coo});
await instance.breedWith(23, 26, {from: coo});
await instance.breedWith(12, 39, {from: coo});
await instance.breedWith(20, 24, {from: coo});
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
await instance.giveBirth(17);
await instance.giveBirth(22);
await instance.giveBirth(18);
await instance.giveBirth(15);
await instance.giveBirth(7);
await instance.giveBirth(25);
await instance.giveBirth(13);
await instance.giveBirth(16);
await instance.giveBirth(5);
await instance.giveBirth(38);
await instance.giveBirth(4);
await instance.giveBirth(8);
await instance.giveBirth(14);
await instance.giveBirth(2);
await instance.giveBirth(11);
await instance.giveBirth(3);
await instance.giveBirth(33);
await instance.giveBirth(23);
await instance.giveBirth(12);
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
