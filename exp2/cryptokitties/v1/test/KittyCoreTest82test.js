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
await instance.createPromoKitty(436582360, coo, {from: coo,value: 0});
await instance.createPromoKitty(755000230, coo, {from: coo,value: 0});
await instance.createPromoKitty(9599400, coo, {from: coo,value: 0});
await instance.createPromoKitty(990920302, coo, {from: coo,value: 0});
await instance.createPromoKitty(886274852, coo, {from: coo,value: 0});
await instance.createPromoKitty(374054471, coo, {from: coo,value: 0});
await instance.createPromoKitty(417620691, coo, {from: coo,value: 0});
await instance.createPromoKitty(247687473, coo, {from: coo,value: 0});
await instance.createPromoKitty(621978997, coo, {from: coo,value: 0});
await instance.createPromoKitty(431894656, coo, {from: coo,value: 0});
await instance.createPromoKitty(910834106, coo, {from: coo,value: 0});
await instance.createPromoKitty(884444092, coo, {from: coo,value: 0});
await instance.createPromoKitty(648216916, coo, {from: coo,value: 0});
await instance.createPromoKitty(75643930, coo, {from: coo,value: 0});
await instance.createPromoKitty(187658640, coo, {from: coo,value: 0});
await instance.createPromoKitty(72510712, coo, {from: coo,value: 0});
await instance.createPromoKitty(154404190, coo, {from: coo,value: 0});
await instance.createPromoKitty(845960347, coo, {from: coo,value: 0});
await instance.createPromoKitty(968989505, coo, {from: coo,value: 0});
await instance.createPromoKitty(405589424, coo, {from: coo,value: 0});
await instance.createPromoKitty(689686032, coo, {from: coo,value: 0});
await instance.createPromoKitty(205278866, coo, {from: coo,value: 0});
await instance.createPromoKitty(830642329, coo, {from: coo,value: 0});
await instance.createPromoKitty(114492594, coo, {from: coo,value: 0});
await instance.createPromoKitty(782736329, coo, {from: coo,value: 0});
await instance.createPromoKitty(893474765, coo, {from: coo,value: 0});
await instance.createPromoKitty(404681991, coo, {from: coo,value: 0});
await instance.createPromoKitty(58584489, coo, {from: coo,value: 0});
await instance.createPromoKitty(866167109, coo, {from: coo,value: 0});
await instance.createPromoKitty(20878658, coo, {from: coo,value: 0});
await instance.createPromoKitty(84383542, coo, {from: coo,value: 0});
await instance.createPromoKitty(855758909, coo, {from: coo,value: 0});
await instance.createPromoKitty(711658468, coo, {from: coo,value: 0});
await instance.createPromoKitty(983234743, coo, {from: coo,value: 0});
await instance.createPromoKitty(69134195, coo, {from: coo,value: 0});
await instance.createPromoKitty(382698199, coo, {from: coo,value: 0});
await instance.createPromoKitty(496982081, coo, {from: coo,value: 0});
await instance.createPromoKitty(341547820, coo, {from: coo,value: 0});
await instance.createPromoKitty(938858553, coo, {from: coo,value: 0});
await instance.createPromoKitty(836140583, coo, {from: coo,value: 0});
await instance.createPromoKitty(664041121, coo, {from: coo,value: 0});
await instance.createPromoKitty(55082286, coo, {from: coo,value: 0});
await instance.createPromoKitty(287507321, coo, {from: coo,value: 0});
await instance.createPromoKitty(776514524, coo, {from: coo,value: 0});
await instance.createPromoKitty(539201365, coo, {from: coo,value: 0});
await instance.createPromoKitty(136109365, coo, {from: coo,value: 0});
await instance.createPromoKitty(698206502, coo, {from: coo,value: 0});
await instance.createPromoKitty(639684127, coo, {from: coo,value: 0});
await instance.createPromoKitty(749306374, coo, {from: coo,value: 0});
await instance.createPromoKitty(552437359, coo, {from: coo,value: 0});
await instance.createPromoKitty(200940603, coo, {from: coo,value: 0});
await instance.createPromoKitty(191771372, coo, {from: coo,value: 0});
await instance.createPromoKitty(791753401, coo, {from: coo,value: 0});
await instance.createPromoKitty(642144383, coo, {from: coo,value: 0});
await instance.createPromoKitty(778382088, coo, {from: coo,value: 0});
await instance.createPromoKitty(700993979, coo, {from: coo,value: 0});
await instance.createPromoKitty(740486676, coo, {from: coo,value: 0});
await instance.createPromoKitty(411545122, coo, {from: coo,value: 0});
await instance.createPromoKitty(871195229, coo, {from: coo,value: 0});
await instance.createPromoKitty(450115648, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(24, 16, {from: coo});
await instance.breedWith(22, 26, {from: coo});
await instance.breedWith(20, 11, {from: coo});
await instance.breedWith(34, 31, {from: coo});
await instance.breedWith(36, 33, {from: coo});
await instance.breedWith(15, 3, {from: coo});
await instance.breedWith(2, 14, {from: coo});
await instance.breedWith(17, 21, {from: coo});
await instance.breedWith(8, 9, {from: coo});
await instance.breedWith(37, 10, {from: coo});
await instance.breedWith(39, 6, {from: coo});
await instance.breedWith(5, 38, {from: coo});
await instance.breedWith(40, 28, {from: coo});
await instance.breedWith(13, 18, {from: coo});
await instance.breedWith(30, 19, {from: coo});
await instance.breedWith(32, 12, {from: coo});
await instance.breedWith(4, 29, {from: coo});
await instance.breedWith(25, 35, {from: coo});
await instance.breedWith(1, 7, {from: coo});
await instance.breedWith(23, 27, {from: coo});
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
await instance.giveBirth(24);
await instance.giveBirth(22);
await instance.giveBirth(20);
await instance.giveBirth(34);
await instance.giveBirth(36);
await instance.giveBirth(15);
await instance.giveBirth(2);
await instance.giveBirth(17);
await instance.giveBirth(8);
await instance.giveBirth(37);
await instance.giveBirth(39);
await instance.giveBirth(5);
await instance.giveBirth(40);
await instance.giveBirth(13);
await instance.giveBirth(30);
await instance.giveBirth(32);
await instance.giveBirth(4);
await instance.giveBirth(25);
await instance.giveBirth(1);
await instance.giveBirth(23);
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
