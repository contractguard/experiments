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
await instance.createPromoKitty(85967308, coo, {from: coo,value: 0});
await instance.createPromoKitty(781955250, coo, {from: coo,value: 0});
await instance.createPromoKitty(445344321, coo, {from: coo,value: 0});
await instance.createPromoKitty(942802089, coo, {from: coo,value: 0});
await instance.createPromoKitty(571131240, coo, {from: coo,value: 0});
await instance.createPromoKitty(976491194, coo, {from: coo,value: 0});
await instance.createPromoKitty(308347203, coo, {from: coo,value: 0});
await instance.createPromoKitty(226924064, coo, {from: coo,value: 0});
await instance.createPromoKitty(883418183, coo, {from: coo,value: 0});
await instance.createPromoKitty(386450623, coo, {from: coo,value: 0});
await instance.createPromoKitty(725590741, coo, {from: coo,value: 0});
await instance.createPromoKitty(526243502, coo, {from: coo,value: 0});
await instance.createPromoKitty(727748485, coo, {from: coo,value: 0});
await instance.createPromoKitty(343732238, coo, {from: coo,value: 0});
await instance.createPromoKitty(645801823, coo, {from: coo,value: 0});
await instance.createPromoKitty(605151024, coo, {from: coo,value: 0});
await instance.createPromoKitty(544536675, coo, {from: coo,value: 0});
await instance.createPromoKitty(600078839, coo, {from: coo,value: 0});
await instance.createPromoKitty(936467994, coo, {from: coo,value: 0});
await instance.createPromoKitty(419262435, coo, {from: coo,value: 0});
await instance.createPromoKitty(883200178, coo, {from: coo,value: 0});
await instance.createPromoKitty(698409831, coo, {from: coo,value: 0});
await instance.createPromoKitty(270980392, coo, {from: coo,value: 0});
await instance.createPromoKitty(847058668, coo, {from: coo,value: 0});
await instance.createPromoKitty(169599802, coo, {from: coo,value: 0});
await instance.createPromoKitty(841895184, coo, {from: coo,value: 0});
await instance.createPromoKitty(711350055, coo, {from: coo,value: 0});
await instance.createPromoKitty(401559629, coo, {from: coo,value: 0});
await instance.createPromoKitty(347555431, coo, {from: coo,value: 0});
await instance.createPromoKitty(178143063, coo, {from: coo,value: 0});
await instance.createPromoKitty(599170059, coo, {from: coo,value: 0});
await instance.createPromoKitty(3606382, coo, {from: coo,value: 0});
await instance.createPromoKitty(831157011, coo, {from: coo,value: 0});
await instance.createPromoKitty(545874793, coo, {from: coo,value: 0});
await instance.createPromoKitty(764362046, coo, {from: coo,value: 0});
await instance.createPromoKitty(221451024, coo, {from: coo,value: 0});
await instance.createPromoKitty(40748602, coo, {from: coo,value: 0});
await instance.createPromoKitty(518271101, coo, {from: coo,value: 0});
await instance.createPromoKitty(854568799, coo, {from: coo,value: 0});
await instance.createPromoKitty(306368402, coo, {from: coo,value: 0});
await instance.createPromoKitty(971381070, coo, {from: coo,value: 0});
await instance.createPromoKitty(119601506, coo, {from: coo,value: 0});
await instance.createPromoKitty(912010541, coo, {from: coo,value: 0});
await instance.createPromoKitty(32069238, coo, {from: coo,value: 0});
await instance.createPromoKitty(515833625, coo, {from: coo,value: 0});
await instance.createPromoKitty(692422463, coo, {from: coo,value: 0});
await instance.createPromoKitty(96921556, coo, {from: coo,value: 0});
await instance.createPromoKitty(376533845, coo, {from: coo,value: 0});
await instance.createPromoKitty(64864036, coo, {from: coo,value: 0});
await instance.createPromoKitty(422476853, coo, {from: coo,value: 0});
await instance.createPromoKitty(289670115, coo, {from: coo,value: 0});
await instance.createPromoKitty(478166279, coo, {from: coo,value: 0});
await instance.createPromoKitty(48759743, coo, {from: coo,value: 0});
await instance.createPromoKitty(45012726, coo, {from: coo,value: 0});
await instance.createPromoKitty(515722332, coo, {from: coo,value: 0});
await instance.createPromoKitty(235589593, coo, {from: coo,value: 0});
await instance.createPromoKitty(370932629, coo, {from: coo,value: 0});
await instance.createPromoKitty(98693698, coo, {from: coo,value: 0});
await instance.createPromoKitty(632729498, coo, {from: coo,value: 0});
await instance.createPromoKitty(363250567, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(4, 1, {from: coo});
await instance.breedWith(15, 26, {from: coo});
await instance.breedWith(36, 23, {from: coo});
await instance.breedWith(14, 35, {from: coo});
await instance.breedWith(6, 2, {from: coo});
await instance.breedWith(33, 27, {from: coo});
await instance.breedWith(24, 18, {from: coo});
await instance.breedWith(25, 34, {from: coo});
await instance.breedWith(39, 31, {from: coo});
await instance.breedWith(13, 30, {from: coo});
await instance.breedWith(7, 28, {from: coo});
await instance.breedWith(17, 22, {from: coo});
await instance.breedWith(37, 16, {from: coo});
await instance.breedWith(21, 38, {from: coo});
await instance.breedWith(9, 29, {from: coo});
await instance.breedWith(5, 19, {from: coo});
await instance.breedWith(32, 12, {from: coo});
await instance.breedWith(3, 8, {from: coo});
await instance.breedWith(10, 40, {from: coo});
await instance.breedWith(20, 11, {from: coo});
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
await instance.giveBirth(4);
await instance.giveBirth(15);
await instance.giveBirth(36);
await instance.giveBirth(14);
await instance.giveBirth(6);
await instance.giveBirth(33);
await instance.giveBirth(24);
await instance.giveBirth(25);
await instance.giveBirth(39);
await instance.giveBirth(13);
await instance.giveBirth(7);
await instance.giveBirth(17);
await instance.giveBirth(37);
await instance.giveBirth(21);
await instance.giveBirth(9);
await instance.giveBirth(5);
await instance.giveBirth(32);
await instance.giveBirth(3);
await instance.giveBirth(10);
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
