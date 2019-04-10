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
await instance.createPromoKitty(447884791, coo, {from: coo,value: 0});
await instance.createPromoKitty(649906688, coo, {from: coo,value: 0});
await instance.createPromoKitty(252955476, coo, {from: coo,value: 0});
await instance.createPromoKitty(896123976, coo, {from: coo,value: 0});
await instance.createPromoKitty(476903869, coo, {from: coo,value: 0});
await instance.createPromoKitty(708852331, coo, {from: coo,value: 0});
await instance.createPromoKitty(581228952, coo, {from: coo,value: 0});
await instance.createPromoKitty(766252097, coo, {from: coo,value: 0});
await instance.createPromoKitty(896620507, coo, {from: coo,value: 0});
await instance.createPromoKitty(890118232, coo, {from: coo,value: 0});
await instance.createPromoKitty(598165599, coo, {from: coo,value: 0});
await instance.createPromoKitty(275203706, coo, {from: coo,value: 0});
await instance.createPromoKitty(214722966, coo, {from: coo,value: 0});
await instance.createPromoKitty(953502441, coo, {from: coo,value: 0});
await instance.createPromoKitty(744421394, coo, {from: coo,value: 0});
await instance.createPromoKitty(753757622, coo, {from: coo,value: 0});
await instance.createPromoKitty(285023547, coo, {from: coo,value: 0});
await instance.createPromoKitty(979526764, coo, {from: coo,value: 0});
await instance.createPromoKitty(184256768, coo, {from: coo,value: 0});
await instance.createPromoKitty(250408465, coo, {from: coo,value: 0});
await instance.createPromoKitty(542161649, coo, {from: coo,value: 0});
await instance.createPromoKitty(124150990, coo, {from: coo,value: 0});
await instance.createPromoKitty(244495967, coo, {from: coo,value: 0});
await instance.createPromoKitty(528026487, coo, {from: coo,value: 0});
await instance.createPromoKitty(516792175, coo, {from: coo,value: 0});
await instance.createPromoKitty(551854148, coo, {from: coo,value: 0});
await instance.createPromoKitty(629563435, coo, {from: coo,value: 0});
await instance.createPromoKitty(395099088, coo, {from: coo,value: 0});
await instance.createPromoKitty(770295530, coo, {from: coo,value: 0});
await instance.createPromoKitty(92157910, coo, {from: coo,value: 0});
await instance.createPromoKitty(333960040, coo, {from: coo,value: 0});
await instance.createPromoKitty(396755420, coo, {from: coo,value: 0});
await instance.createPromoKitty(162911049, coo, {from: coo,value: 0});
await instance.createPromoKitty(68295849, coo, {from: coo,value: 0});
await instance.createPromoKitty(491086915, coo, {from: coo,value: 0});
await instance.createPromoKitty(648544813, coo, {from: coo,value: 0});
await instance.createPromoKitty(631289431, coo, {from: coo,value: 0});
await instance.createPromoKitty(610364346, coo, {from: coo,value: 0});
await instance.createPromoKitty(87755668, coo, {from: coo,value: 0});
await instance.createPromoKitty(489412357, coo, {from: coo,value: 0});
await instance.createPromoKitty(411500040, coo, {from: coo,value: 0});
await instance.createPromoKitty(260348482, coo, {from: coo,value: 0});
await instance.createPromoKitty(796604884, coo, {from: coo,value: 0});
await instance.createPromoKitty(550548021, coo, {from: coo,value: 0});
await instance.createPromoKitty(28172570, coo, {from: coo,value: 0});
await instance.createPromoKitty(732979785, coo, {from: coo,value: 0});
await instance.createPromoKitty(815081348, coo, {from: coo,value: 0});
await instance.createPromoKitty(680499448, coo, {from: coo,value: 0});
await instance.createPromoKitty(781479449, coo, {from: coo,value: 0});
await instance.createPromoKitty(460657266, coo, {from: coo,value: 0});
await instance.createPromoKitty(476585313, coo, {from: coo,value: 0});
await instance.createPromoKitty(88812562, coo, {from: coo,value: 0});
await instance.createPromoKitty(467551168, coo, {from: coo,value: 0});
await instance.createPromoKitty(324505211, coo, {from: coo,value: 0});
await instance.createPromoKitty(777364493, coo, {from: coo,value: 0});
await instance.createPromoKitty(556563924, coo, {from: coo,value: 0});
await instance.createPromoKitty(781567598, coo, {from: coo,value: 0});
await instance.createPromoKitty(513789805, coo, {from: coo,value: 0});
await instance.createPromoKitty(545203440, coo, {from: coo,value: 0});
await instance.createPromoKitty(254575299, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(17, 9, {from: coo});
await instance.breedWith(27, 14, {from: coo});
await instance.breedWith(39, 8, {from: coo});
await instance.breedWith(24, 29, {from: coo});
await instance.breedWith(10, 36, {from: coo});
await instance.breedWith(22, 21, {from: coo});
await instance.breedWith(15, 18, {from: coo});
await instance.breedWith(40, 26, {from: coo});
await instance.breedWith(31, 34, {from: coo});
await instance.breedWith(23, 7, {from: coo});
await instance.breedWith(30, 35, {from: coo});
await instance.breedWith(3, 25, {from: coo});
await instance.breedWith(37, 1, {from: coo});
await instance.breedWith(16, 38, {from: coo});
await instance.breedWith(5, 28, {from: coo});
await instance.breedWith(6, 11, {from: coo});
await instance.breedWith(32, 19, {from: coo});
await instance.breedWith(20, 12, {from: coo});
await instance.breedWith(2, 4, {from: coo});
await instance.breedWith(13, 33, {from: coo});
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
await instance.giveBirth(27);
await instance.giveBirth(39);
await instance.giveBirth(24);
await instance.giveBirth(10);
await instance.giveBirth(22);
await instance.giveBirth(15);
await instance.giveBirth(40);
await instance.giveBirth(31);
await instance.giveBirth(23);
await instance.giveBirth(30);
await instance.giveBirth(3);
await instance.giveBirth(37);
await instance.giveBirth(16);
await instance.giveBirth(5);
await instance.giveBirth(6);
await instance.giveBirth(32);
await instance.giveBirth(20);
await instance.giveBirth(2);
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
