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
await instance.createPromoKitty(516965330, coo, {from: coo,value: 0});
await instance.createPromoKitty(281223200, coo, {from: coo,value: 0});
await instance.createPromoKitty(529063431, coo, {from: coo,value: 0});
await instance.createPromoKitty(104663190, coo, {from: coo,value: 0});
await instance.createPromoKitty(789569396, coo, {from: coo,value: 0});
await instance.createPromoKitty(229500328, coo, {from: coo,value: 0});
await instance.createPromoKitty(687082628, coo, {from: coo,value: 0});
await instance.createPromoKitty(438853990, coo, {from: coo,value: 0});
await instance.createPromoKitty(401088819, coo, {from: coo,value: 0});
await instance.createPromoKitty(606669009, coo, {from: coo,value: 0});
await instance.createPromoKitty(806243125, coo, {from: coo,value: 0});
await instance.createPromoKitty(210501967, coo, {from: coo,value: 0});
await instance.createPromoKitty(758005288, coo, {from: coo,value: 0});
await instance.createPromoKitty(580036647, coo, {from: coo,value: 0});
await instance.createPromoKitty(165685960, coo, {from: coo,value: 0});
await instance.createPromoKitty(246918240, coo, {from: coo,value: 0});
await instance.createPromoKitty(556682188, coo, {from: coo,value: 0});
await instance.createPromoKitty(855636427, coo, {from: coo,value: 0});
await instance.createPromoKitty(809397738, coo, {from: coo,value: 0});
await instance.createPromoKitty(900121272, coo, {from: coo,value: 0});
await instance.createPromoKitty(120259383, coo, {from: coo,value: 0});
await instance.createPromoKitty(533231109, coo, {from: coo,value: 0});
await instance.createPromoKitty(980229376, coo, {from: coo,value: 0});
await instance.createPromoKitty(980325500, coo, {from: coo,value: 0});
await instance.createPromoKitty(175763752, coo, {from: coo,value: 0});
await instance.createPromoKitty(717917074, coo, {from: coo,value: 0});
await instance.createPromoKitty(610344623, coo, {from: coo,value: 0});
await instance.createPromoKitty(902187897, coo, {from: coo,value: 0});
await instance.createPromoKitty(404060194, coo, {from: coo,value: 0});
await instance.createPromoKitty(613193160, coo, {from: coo,value: 0});
await instance.createPromoKitty(345954812, coo, {from: coo,value: 0});
await instance.createPromoKitty(275358650, coo, {from: coo,value: 0});
await instance.createPromoKitty(586076306, coo, {from: coo,value: 0});
await instance.createPromoKitty(178030208, coo, {from: coo,value: 0});
await instance.createPromoKitty(539307146, coo, {from: coo,value: 0});
await instance.createPromoKitty(789230140, coo, {from: coo,value: 0});
await instance.createPromoKitty(14175737, coo, {from: coo,value: 0});
await instance.createPromoKitty(199344227, coo, {from: coo,value: 0});
await instance.createPromoKitty(685361500, coo, {from: coo,value: 0});
await instance.createPromoKitty(587270055, coo, {from: coo,value: 0});
await instance.createPromoKitty(884007988, coo, {from: coo,value: 0});
await instance.createPromoKitty(560114777, coo, {from: coo,value: 0});
await instance.createPromoKitty(188335367, coo, {from: coo,value: 0});
await instance.createPromoKitty(556147357, coo, {from: coo,value: 0});
await instance.createPromoKitty(30924912, coo, {from: coo,value: 0});
await instance.createPromoKitty(419813833, coo, {from: coo,value: 0});
await instance.createPromoKitty(10810283, coo, {from: coo,value: 0});
await instance.createPromoKitty(631099630, coo, {from: coo,value: 0});
await instance.createPromoKitty(970212716, coo, {from: coo,value: 0});
await instance.createPromoKitty(11757288, coo, {from: coo,value: 0});
await instance.createPromoKitty(541416670, coo, {from: coo,value: 0});
await instance.createPromoKitty(497232570, coo, {from: coo,value: 0});
await instance.createPromoKitty(230586464, coo, {from: coo,value: 0});
await instance.createPromoKitty(969783148, coo, {from: coo,value: 0});
await instance.createPromoKitty(77769492, coo, {from: coo,value: 0});
await instance.createPromoKitty(583586389, coo, {from: coo,value: 0});
await instance.createPromoKitty(627287221, coo, {from: coo,value: 0});
await instance.createPromoKitty(237571188, coo, {from: coo,value: 0});
await instance.createPromoKitty(541331999, coo, {from: coo,value: 0});
await instance.createPromoKitty(582986054, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(18, 39, {from: coo});
await instance.breedWith(14, 17, {from: coo});
await instance.breedWith(10, 22, {from: coo});
await instance.breedWith(31, 1, {from: coo});
await instance.breedWith(28, 5, {from: coo});
await instance.breedWith(7, 2, {from: coo});
await instance.breedWith(40, 35, {from: coo});
await instance.breedWith(6, 25, {from: coo});
await instance.breedWith(38, 16, {from: coo});
await instance.breedWith(36, 15, {from: coo});
await instance.breedWith(11, 26, {from: coo});
await instance.breedWith(24, 30, {from: coo});
await instance.breedWith(27, 37, {from: coo});
await instance.breedWith(32, 21, {from: coo});
await instance.breedWith(33, 12, {from: coo});
await instance.breedWith(23, 8, {from: coo});
await instance.breedWith(29, 19, {from: coo});
await instance.breedWith(20, 9, {from: coo});
await instance.breedWith(4, 34, {from: coo});
await instance.breedWith(3, 13, {from: coo});
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
await instance.giveBirth(18);
await instance.giveBirth(14);
await instance.giveBirth(10);
await instance.giveBirth(31);
await instance.giveBirth(28);
await instance.giveBirth(7);
await instance.giveBirth(40);
await instance.giveBirth(6);
await instance.giveBirth(38);
await instance.giveBirth(36);
await instance.giveBirth(11);
await instance.giveBirth(24);
await instance.giveBirth(27);
await instance.giveBirth(32);
await instance.giveBirth(33);
await instance.giveBirth(23);
await instance.giveBirth(29);
await instance.giveBirth(20);
await instance.giveBirth(4);
await instance.giveBirth(3);
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
