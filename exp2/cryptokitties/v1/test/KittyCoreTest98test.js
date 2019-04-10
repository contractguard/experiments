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
await instance.createPromoKitty(871660179, coo, {from: coo,value: 0});
await instance.createPromoKitty(151785393, coo, {from: coo,value: 0});
await instance.createPromoKitty(309875379, coo, {from: coo,value: 0});
await instance.createPromoKitty(594462577, coo, {from: coo,value: 0});
await instance.createPromoKitty(574233995, coo, {from: coo,value: 0});
await instance.createPromoKitty(89737375, coo, {from: coo,value: 0});
await instance.createPromoKitty(980119430, coo, {from: coo,value: 0});
await instance.createPromoKitty(135435371, coo, {from: coo,value: 0});
await instance.createPromoKitty(68452335, coo, {from: coo,value: 0});
await instance.createPromoKitty(467013653, coo, {from: coo,value: 0});
await instance.createPromoKitty(602610485, coo, {from: coo,value: 0});
await instance.createPromoKitty(72197935, coo, {from: coo,value: 0});
await instance.createPromoKitty(260818030, coo, {from: coo,value: 0});
await instance.createPromoKitty(447535812, coo, {from: coo,value: 0});
await instance.createPromoKitty(130050287, coo, {from: coo,value: 0});
await instance.createPromoKitty(395318412, coo, {from: coo,value: 0});
await instance.createPromoKitty(504878258, coo, {from: coo,value: 0});
await instance.createPromoKitty(518321349, coo, {from: coo,value: 0});
await instance.createPromoKitty(722969782, coo, {from: coo,value: 0});
await instance.createPromoKitty(125186145, coo, {from: coo,value: 0});
await instance.createPromoKitty(149214581, coo, {from: coo,value: 0});
await instance.createPromoKitty(737764525, coo, {from: coo,value: 0});
await instance.createPromoKitty(611630493, coo, {from: coo,value: 0});
await instance.createPromoKitty(927363406, coo, {from: coo,value: 0});
await instance.createPromoKitty(289803806, coo, {from: coo,value: 0});
await instance.createPromoKitty(745538783, coo, {from: coo,value: 0});
await instance.createPromoKitty(76075078, coo, {from: coo,value: 0});
await instance.createPromoKitty(25683703, coo, {from: coo,value: 0});
await instance.createPromoKitty(34919493, coo, {from: coo,value: 0});
await instance.createPromoKitty(389950775, coo, {from: coo,value: 0});
await instance.createPromoKitty(254294005, coo, {from: coo,value: 0});
await instance.createPromoKitty(445850200, coo, {from: coo,value: 0});
await instance.createPromoKitty(792403522, coo, {from: coo,value: 0});
await instance.createPromoKitty(443067783, coo, {from: coo,value: 0});
await instance.createPromoKitty(633439443, coo, {from: coo,value: 0});
await instance.createPromoKitty(289146152, coo, {from: coo,value: 0});
await instance.createPromoKitty(35842069, coo, {from: coo,value: 0});
await instance.createPromoKitty(42556470, coo, {from: coo,value: 0});
await instance.createPromoKitty(449314314, coo, {from: coo,value: 0});
await instance.createPromoKitty(38473240, coo, {from: coo,value: 0});
await instance.createPromoKitty(530409489, coo, {from: coo,value: 0});
await instance.createPromoKitty(526075924, coo, {from: coo,value: 0});
await instance.createPromoKitty(908628445, coo, {from: coo,value: 0});
await instance.createPromoKitty(322682226, coo, {from: coo,value: 0});
await instance.createPromoKitty(537552720, coo, {from: coo,value: 0});
await instance.createPromoKitty(290726137, coo, {from: coo,value: 0});
await instance.createPromoKitty(338004300, coo, {from: coo,value: 0});
await instance.createPromoKitty(542691825, coo, {from: coo,value: 0});
await instance.createPromoKitty(705997257, coo, {from: coo,value: 0});
await instance.createPromoKitty(283134855, coo, {from: coo,value: 0});
await instance.createPromoKitty(627186287, coo, {from: coo,value: 0});
await instance.createPromoKitty(633976620, coo, {from: coo,value: 0});
await instance.createPromoKitty(637288762, coo, {from: coo,value: 0});
await instance.createPromoKitty(734425655, coo, {from: coo,value: 0});
await instance.createPromoKitty(803774692, coo, {from: coo,value: 0});
await instance.createPromoKitty(33873338, coo, {from: coo,value: 0});
await instance.createPromoKitty(789768303, coo, {from: coo,value: 0});
await instance.createPromoKitty(626746904, coo, {from: coo,value: 0});
await instance.createPromoKitty(484498624, coo, {from: coo,value: 0});
await instance.createPromoKitty(252301654, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(28, 26, {from: coo});
await instance.breedWith(18, 13, {from: coo});
await instance.breedWith(11, 4, {from: coo});
await instance.breedWith(36, 38, {from: coo});
await instance.breedWith(23, 27, {from: coo});
await instance.breedWith(34, 3, {from: coo});
await instance.breedWith(30, 16, {from: coo});
await instance.breedWith(35, 7, {from: coo});
await instance.breedWith(2, 9, {from: coo});
await instance.breedWith(29, 6, {from: coo});
await instance.breedWith(40, 12, {from: coo});
await instance.breedWith(8, 10, {from: coo});
await instance.breedWith(1, 24, {from: coo});
await instance.breedWith(32, 20, {from: coo});
await instance.breedWith(25, 37, {from: coo});
await instance.breedWith(33, 31, {from: coo});
await instance.breedWith(15, 14, {from: coo});
await instance.breedWith(22, 5, {from: coo});
await instance.breedWith(39, 21, {from: coo});
await instance.breedWith(19, 17, {from: coo});
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
await instance.giveBirth(28);
await instance.giveBirth(18);
await instance.giveBirth(11);
await instance.giveBirth(36);
await instance.giveBirth(23);
await instance.giveBirth(34);
await instance.giveBirth(30);
await instance.giveBirth(35);
await instance.giveBirth(2);
await instance.giveBirth(29);
await instance.giveBirth(40);
await instance.giveBirth(8);
await instance.giveBirth(1);
await instance.giveBirth(32);
await instance.giveBirth(25);
await instance.giveBirth(33);
await instance.giveBirth(15);
await instance.giveBirth(22);
await instance.giveBirth(39);
await instance.giveBirth(19);
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
