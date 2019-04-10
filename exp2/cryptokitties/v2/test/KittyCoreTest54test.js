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
await instance.createPromoKitty(887110747, coo, {from: coo,value: 0});
await instance.createPromoKitty(324830027, coo, {from: coo,value: 0});
await instance.createPromoKitty(403236169, coo, {from: coo,value: 0});
await instance.createPromoKitty(828394636, coo, {from: coo,value: 0});
await instance.createPromoKitty(906020201, coo, {from: coo,value: 0});
await instance.createPromoKitty(222634429, coo, {from: coo,value: 0});
await instance.createPromoKitty(252197514, coo, {from: coo,value: 0});
await instance.createPromoKitty(27033623, coo, {from: coo,value: 0});
await instance.createPromoKitty(519516186, coo, {from: coo,value: 0});
await instance.createPromoKitty(911605158, coo, {from: coo,value: 0});
await instance.createPromoKitty(661299843, coo, {from: coo,value: 0});
await instance.createPromoKitty(691341541, coo, {from: coo,value: 0});
await instance.createPromoKitty(718370441, coo, {from: coo,value: 0});
await instance.createPromoKitty(735409232, coo, {from: coo,value: 0});
await instance.createPromoKitty(723338703, coo, {from: coo,value: 0});
await instance.createPromoKitty(159578216, coo, {from: coo,value: 0});
await instance.createPromoKitty(1214278, coo, {from: coo,value: 0});
await instance.createPromoKitty(952640384, coo, {from: coo,value: 0});
await instance.createPromoKitty(928116019, coo, {from: coo,value: 0});
await instance.createPromoKitty(631834639, coo, {from: coo,value: 0});
await instance.createPromoKitty(81105355, coo, {from: coo,value: 0});
await instance.createPromoKitty(4417833, coo, {from: coo,value: 0});
await instance.createPromoKitty(202225937, coo, {from: coo,value: 0});
await instance.createPromoKitty(181483598, coo, {from: coo,value: 0});
await instance.createPromoKitty(240105394, coo, {from: coo,value: 0});
await instance.createPromoKitty(100983154, coo, {from: coo,value: 0});
await instance.createPromoKitty(689031554, coo, {from: coo,value: 0});
await instance.createPromoKitty(945387169, coo, {from: coo,value: 0});
await instance.createPromoKitty(597396903, coo, {from: coo,value: 0});
await instance.createPromoKitty(222345816, coo, {from: coo,value: 0});
await instance.createPromoKitty(656245217, coo, {from: coo,value: 0});
await instance.createPromoKitty(467881154, coo, {from: coo,value: 0});
await instance.createPromoKitty(509050420, coo, {from: coo,value: 0});
await instance.createPromoKitty(916954707, coo, {from: coo,value: 0});
await instance.createPromoKitty(363405448, coo, {from: coo,value: 0});
await instance.createPromoKitty(436097481, coo, {from: coo,value: 0});
await instance.createPromoKitty(700454216, coo, {from: coo,value: 0});
await instance.createPromoKitty(496685349, coo, {from: coo,value: 0});
await instance.createPromoKitty(363793226, coo, {from: coo,value: 0});
await instance.createPromoKitty(895406939, coo, {from: coo,value: 0});
await instance.createPromoKitty(340336921, coo, {from: coo,value: 0});
await instance.createPromoKitty(244528786, coo, {from: coo,value: 0});
await instance.createPromoKitty(369493401, coo, {from: coo,value: 0});
await instance.createPromoKitty(519772082, coo, {from: coo,value: 0});
await instance.createPromoKitty(889781883, coo, {from: coo,value: 0});
await instance.createPromoKitty(45667540, coo, {from: coo,value: 0});
await instance.createPromoKitty(507266264, coo, {from: coo,value: 0});
await instance.createPromoKitty(326540398, coo, {from: coo,value: 0});
await instance.createPromoKitty(76807344, coo, {from: coo,value: 0});
await instance.createPromoKitty(806581876, coo, {from: coo,value: 0});
await instance.createPromoKitty(36914980, coo, {from: coo,value: 0});
await instance.createPromoKitty(582171048, coo, {from: coo,value: 0});
await instance.createPromoKitty(714584309, coo, {from: coo,value: 0});
await instance.createPromoKitty(113906716, coo, {from: coo,value: 0});
await instance.createPromoKitty(612753159, coo, {from: coo,value: 0});
await instance.createPromoKitty(384530863, coo, {from: coo,value: 0});
await instance.createPromoKitty(985486714, coo, {from: coo,value: 0});
await instance.createPromoKitty(38522353, coo, {from: coo,value: 0});
await instance.createPromoKitty(697009991, coo, {from: coo,value: 0});
await instance.createPromoKitty(980284807, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(1, 20, {from: coo});
await instance.breedWith(24, 10, {from: coo});
await instance.breedWith(33, 16, {from: coo});
await instance.breedWith(39, 9, {from: coo});
await instance.breedWith(3, 5, {from: coo});
await instance.breedWith(38, 23, {from: coo});
await instance.breedWith(17, 32, {from: coo});
await instance.breedWith(11, 7, {from: coo});
await instance.breedWith(8, 29, {from: coo});
await instance.breedWith(40, 4, {from: coo});
await instance.breedWith(22, 26, {from: coo});
await instance.breedWith(30, 6, {from: coo});
await instance.breedWith(13, 34, {from: coo});
await instance.breedWith(12, 37, {from: coo});
await instance.breedWith(25, 31, {from: coo});
await instance.breedWith(18, 28, {from: coo});
await instance.breedWith(36, 27, {from: coo});
await instance.breedWith(35, 19, {from: coo});
await instance.breedWith(2, 14, {from: coo});
await instance.breedWith(15, 21, {from: coo});
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
await instance.giveBirth(1);
await instance.giveBirth(24);
await instance.giveBirth(33);
await instance.giveBirth(39);
await instance.giveBirth(3);
await instance.giveBirth(38);
await instance.giveBirth(17);
await instance.giveBirth(11);
await instance.giveBirth(8);
await instance.giveBirth(40);
await instance.giveBirth(22);
await instance.giveBirth(30);
await instance.giveBirth(13);
await instance.giveBirth(12);
await instance.giveBirth(25);
await instance.giveBirth(18);
await instance.giveBirth(36);
await instance.giveBirth(35);
await instance.giveBirth(2);
await instance.giveBirth(15);
});
it('test 5',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('test 6',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('test 7',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('test 8',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('test 9',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('acctack', async() => {
 await instance._breedWith(57,58,{from:coo});
});
});
