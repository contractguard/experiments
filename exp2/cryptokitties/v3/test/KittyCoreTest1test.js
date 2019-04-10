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
await instance.createPromoKitty(626158723, coo, {from: coo,value: 0});
await instance.createPromoKitty(501308212, coo, {from: coo,value: 0});
await instance.createPromoKitty(178750506, coo, {from: coo,value: 0});
await instance.createPromoKitty(538570433, coo, {from: coo,value: 0});
await instance.createPromoKitty(27717375, coo, {from: coo,value: 0});
await instance.createPromoKitty(408537575, coo, {from: coo,value: 0});
await instance.createPromoKitty(610326973, coo, {from: coo,value: 0});
await instance.createPromoKitty(273328329, coo, {from: coo,value: 0});
await instance.createPromoKitty(932270991, coo, {from: coo,value: 0});
await instance.createPromoKitty(358582167, coo, {from: coo,value: 0});
await instance.createPromoKitty(577602074, coo, {from: coo,value: 0});
await instance.createPromoKitty(847527528, coo, {from: coo,value: 0});
await instance.createPromoKitty(484916178, coo, {from: coo,value: 0});
await instance.createPromoKitty(56666727, coo, {from: coo,value: 0});
await instance.createPromoKitty(667863383, coo, {from: coo,value: 0});
await instance.createPromoKitty(720710623, coo, {from: coo,value: 0});
await instance.createPromoKitty(422307362, coo, {from: coo,value: 0});
await instance.createPromoKitty(233962732, coo, {from: coo,value: 0});
await instance.createPromoKitty(132753905, coo, {from: coo,value: 0});
await instance.createPromoKitty(31456680, coo, {from: coo,value: 0});
await instance.createPromoKitty(871294518, coo, {from: coo,value: 0});
await instance.createPromoKitty(121955341, coo, {from: coo,value: 0});
await instance.createPromoKitty(779019359, coo, {from: coo,value: 0});
await instance.createPromoKitty(562385724, coo, {from: coo,value: 0});
await instance.createPromoKitty(274933492, coo, {from: coo,value: 0});
await instance.createPromoKitty(505567448, coo, {from: coo,value: 0});
await instance.createPromoKitty(326122825, coo, {from: coo,value: 0});
await instance.createPromoKitty(181073271, coo, {from: coo,value: 0});
await instance.createPromoKitty(512477152, coo, {from: coo,value: 0});
await instance.createPromoKitty(689601469, coo, {from: coo,value: 0});
await instance.createPromoKitty(482969746, coo, {from: coo,value: 0});
await instance.createPromoKitty(896422609, coo, {from: coo,value: 0});
await instance.createPromoKitty(222467950, coo, {from: coo,value: 0});
await instance.createPromoKitty(358402050, coo, {from: coo,value: 0});
await instance.createPromoKitty(404257788, coo, {from: coo,value: 0});
await instance.createPromoKitty(248364413, coo, {from: coo,value: 0});
await instance.createPromoKitty(910499523, coo, {from: coo,value: 0});
await instance.createPromoKitty(927101983, coo, {from: coo,value: 0});
await instance.createPromoKitty(594671785, coo, {from: coo,value: 0});
await instance.createPromoKitty(685534431, coo, {from: coo,value: 0});
await instance.createPromoKitty(859931718, coo, {from: coo,value: 0});
await instance.createPromoKitty(405135910, coo, {from: coo,value: 0});
await instance.createPromoKitty(449498723, coo, {from: coo,value: 0});
await instance.createPromoKitty(890408906, coo, {from: coo,value: 0});
await instance.createPromoKitty(284801307, coo, {from: coo,value: 0});
await instance.createPromoKitty(149261571, coo, {from: coo,value: 0});
await instance.createPromoKitty(186263363, coo, {from: coo,value: 0});
await instance.createPromoKitty(280943256, coo, {from: coo,value: 0});
await instance.createPromoKitty(535114702, coo, {from: coo,value: 0});
await instance.createPromoKitty(336854574, coo, {from: coo,value: 0});
await instance.createPromoKitty(480524832, coo, {from: coo,value: 0});
await instance.createPromoKitty(90577363, coo, {from: coo,value: 0});
await instance.createPromoKitty(58224780, coo, {from: coo,value: 0});
await instance.createPromoKitty(150588586, coo, {from: coo,value: 0});
await instance.createPromoKitty(799612728, coo, {from: coo,value: 0});
await instance.createPromoKitty(328704043, coo, {from: coo,value: 0});
await instance.createPromoKitty(443203326, coo, {from: coo,value: 0});
await instance.createPromoKitty(943198130, coo, {from: coo,value: 0});
await instance.createPromoKitty(180357828, coo, {from: coo,value: 0});
await instance.createPromoKitty(853704054, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(14, 39, {from: coo});
await instance.breedWith(40, 22, {from: coo});
await instance.breedWith(7, 18, {from: coo});
await instance.breedWith(21, 35, {from: coo});
await instance.breedWith(13, 19, {from: coo});
await instance.breedWith(20, 12, {from: coo});
await instance.breedWith(32, 25, {from: coo});
await instance.breedWith(38, 26, {from: coo});
await instance.breedWith(16, 34, {from: coo});
await instance.breedWith(3, 5, {from: coo});
await instance.breedWith(11, 24, {from: coo});
await instance.breedWith(8, 6, {from: coo});
await instance.breedWith(4, 31, {from: coo});
await instance.breedWith(33, 17, {from: coo});
await instance.breedWith(1, 15, {from: coo});
await instance.breedWith(9, 28, {from: coo});
await instance.breedWith(36, 2, {from: coo});
await instance.breedWith(23, 30, {from: coo});
await instance.breedWith(37, 27, {from: coo});
await instance.breedWith(29, 10, {from: coo});
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
await instance.giveBirth(14);
await instance.giveBirth(40);
await instance.giveBirth(7);
await instance.giveBirth(21);
await instance.giveBirth(13);
await instance.giveBirth(20);
await instance.giveBirth(32);
await instance.giveBirth(38);
await instance.giveBirth(16);
await instance.giveBirth(3);
await instance.giveBirth(11);
await instance.giveBirth(8);
await instance.giveBirth(4);
await instance.giveBirth(33);
await instance.giveBirth(1);
await instance.giveBirth(9);
await instance.giveBirth(36);
await instance.giveBirth(23);
await instance.giveBirth(37);
await instance.giveBirth(29);
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
