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
await instance.createPromoKitty(935924338, coo, {from: coo,value: 0});
await instance.createPromoKitty(14418361, coo, {from: coo,value: 0});
await instance.createPromoKitty(52106152, coo, {from: coo,value: 0});
await instance.createPromoKitty(257326929, coo, {from: coo,value: 0});
await instance.createPromoKitty(388392639, coo, {from: coo,value: 0});
await instance.createPromoKitty(611995488, coo, {from: coo,value: 0});
await instance.createPromoKitty(645873270, coo, {from: coo,value: 0});
await instance.createPromoKitty(606810517, coo, {from: coo,value: 0});
await instance.createPromoKitty(447580940, coo, {from: coo,value: 0});
await instance.createPromoKitty(401225751, coo, {from: coo,value: 0});
await instance.createPromoKitty(828185904, coo, {from: coo,value: 0});
await instance.createPromoKitty(152118148, coo, {from: coo,value: 0});
await instance.createPromoKitty(464659953, coo, {from: coo,value: 0});
await instance.createPromoKitty(237424062, coo, {from: coo,value: 0});
await instance.createPromoKitty(110622264, coo, {from: coo,value: 0});
await instance.createPromoKitty(486719260, coo, {from: coo,value: 0});
await instance.createPromoKitty(549658241, coo, {from: coo,value: 0});
await instance.createPromoKitty(871120682, coo, {from: coo,value: 0});
await instance.createPromoKitty(720742690, coo, {from: coo,value: 0});
await instance.createPromoKitty(125533191, coo, {from: coo,value: 0});
await instance.createPromoKitty(330917258, coo, {from: coo,value: 0});
await instance.createPromoKitty(16175360, coo, {from: coo,value: 0});
await instance.createPromoKitty(484590951, coo, {from: coo,value: 0});
await instance.createPromoKitty(386813806, coo, {from: coo,value: 0});
await instance.createPromoKitty(201599652, coo, {from: coo,value: 0});
await instance.createPromoKitty(206730925, coo, {from: coo,value: 0});
await instance.createPromoKitty(96918652, coo, {from: coo,value: 0});
await instance.createPromoKitty(909107785, coo, {from: coo,value: 0});
await instance.createPromoKitty(830113830, coo, {from: coo,value: 0});
await instance.createPromoKitty(112057603, coo, {from: coo,value: 0});
await instance.createPromoKitty(652106677, coo, {from: coo,value: 0});
await instance.createPromoKitty(116832459, coo, {from: coo,value: 0});
await instance.createPromoKitty(934651796, coo, {from: coo,value: 0});
await instance.createPromoKitty(595790521, coo, {from: coo,value: 0});
await instance.createPromoKitty(777501066, coo, {from: coo,value: 0});
await instance.createPromoKitty(335124733, coo, {from: coo,value: 0});
await instance.createPromoKitty(408284277, coo, {from: coo,value: 0});
await instance.createPromoKitty(349140554, coo, {from: coo,value: 0});
await instance.createPromoKitty(1648024, coo, {from: coo,value: 0});
await instance.createPromoKitty(893413297, coo, {from: coo,value: 0});
await instance.createPromoKitty(916545511, coo, {from: coo,value: 0});
await instance.createPromoKitty(964461921, coo, {from: coo,value: 0});
await instance.createPromoKitty(215955097, coo, {from: coo,value: 0});
await instance.createPromoKitty(851666673, coo, {from: coo,value: 0});
await instance.createPromoKitty(454662805, coo, {from: coo,value: 0});
await instance.createPromoKitty(309186880, coo, {from: coo,value: 0});
await instance.createPromoKitty(863001844, coo, {from: coo,value: 0});
await instance.createPromoKitty(695193779, coo, {from: coo,value: 0});
await instance.createPromoKitty(93192774, coo, {from: coo,value: 0});
await instance.createPromoKitty(297163307, coo, {from: coo,value: 0});
await instance.createPromoKitty(136486893, coo, {from: coo,value: 0});
await instance.createPromoKitty(651692126, coo, {from: coo,value: 0});
await instance.createPromoKitty(240616605, coo, {from: coo,value: 0});
await instance.createPromoKitty(927591350, coo, {from: coo,value: 0});
await instance.createPromoKitty(354198404, coo, {from: coo,value: 0});
await instance.createPromoKitty(523156929, coo, {from: coo,value: 0});
await instance.createPromoKitty(215976277, coo, {from: coo,value: 0});
await instance.createPromoKitty(117351694, coo, {from: coo,value: 0});
await instance.createPromoKitty(404483566, coo, {from: coo,value: 0});
await instance.createPromoKitty(767206103, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(5, 23, {from: coo});
await instance.breedWith(33, 1, {from: coo});
await instance.breedWith(14, 10, {from: coo});
await instance.breedWith(4, 21, {from: coo});
await instance.breedWith(40, 18, {from: coo});
await instance.breedWith(22, 24, {from: coo});
await instance.breedWith(36, 8, {from: coo});
await instance.breedWith(37, 31, {from: coo});
await instance.breedWith(25, 2, {from: coo});
await instance.breedWith(11, 32, {from: coo});
await instance.breedWith(9, 30, {from: coo});
await instance.breedWith(12, 35, {from: coo});
await instance.breedWith(15, 3, {from: coo});
await instance.breedWith(20, 28, {from: coo});
await instance.breedWith(6, 27, {from: coo});
await instance.breedWith(39, 17, {from: coo});
await instance.breedWith(19, 38, {from: coo});
await instance.breedWith(7, 13, {from: coo});
await instance.breedWith(29, 34, {from: coo});
await instance.breedWith(16, 26, {from: coo});
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
await instance.giveBirth(5);
await instance.giveBirth(33);
await instance.giveBirth(14);
await instance.giveBirth(4);
await instance.giveBirth(40);
await instance.giveBirth(22);
await instance.giveBirth(36);
await instance.giveBirth(37);
await instance.giveBirth(25);
await instance.giveBirth(11);
await instance.giveBirth(9);
await instance.giveBirth(12);
await instance.giveBirth(15);
await instance.giveBirth(20);
await instance.giveBirth(6);
await instance.giveBirth(39);
await instance.giveBirth(19);
await instance.giveBirth(7);
await instance.giveBirth(29);
await instance.giveBirth(16);
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
// let Kit5 = await test_subjec.t_KittyCore.createPromoKitty(n4, accounts[3], {from: coo, gas: 400000, gasPrice: 1100000000, value:0});
//console.log(Kit1.logs);

//培养第一代 kitty5
await instance.breedWith(55, 56, {from: coo});
await util.forwardEVMTime(cooldowns[0]);
await instance.giveBirth(55);

//培育第二代
await instance.breedWith(57, 59, {from: coo});
await util.forwardEVMTime(cooldowns[0]);});
it('attack', async() => {
 let result_Gen2 = await instance.giveBirth(57);
});
});
