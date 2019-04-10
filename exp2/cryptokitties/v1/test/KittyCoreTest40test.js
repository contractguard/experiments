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
await instance.createPromoKitty(130339713, coo, {from: coo,value: 0});
await instance.createPromoKitty(373806069, coo, {from: coo,value: 0});
await instance.createPromoKitty(210056346, coo, {from: coo,value: 0});
await instance.createPromoKitty(485608321, coo, {from: coo,value: 0});
await instance.createPromoKitty(667395279, coo, {from: coo,value: 0});
await instance.createPromoKitty(545279336, coo, {from: coo,value: 0});
await instance.createPromoKitty(833243393, coo, {from: coo,value: 0});
await instance.createPromoKitty(942199010, coo, {from: coo,value: 0});
await instance.createPromoKitty(28640789, coo, {from: coo,value: 0});
await instance.createPromoKitty(133056033, coo, {from: coo,value: 0});
await instance.createPromoKitty(733804049, coo, {from: coo,value: 0});
await instance.createPromoKitty(421658877, coo, {from: coo,value: 0});
await instance.createPromoKitty(69156801, coo, {from: coo,value: 0});
await instance.createPromoKitty(626139245, coo, {from: coo,value: 0});
await instance.createPromoKitty(493746327, coo, {from: coo,value: 0});
await instance.createPromoKitty(495382874, coo, {from: coo,value: 0});
await instance.createPromoKitty(540414894, coo, {from: coo,value: 0});
await instance.createPromoKitty(812798181, coo, {from: coo,value: 0});
await instance.createPromoKitty(184961892, coo, {from: coo,value: 0});
await instance.createPromoKitty(163459135, coo, {from: coo,value: 0});
await instance.createPromoKitty(185035740, coo, {from: coo,value: 0});
await instance.createPromoKitty(388886778, coo, {from: coo,value: 0});
await instance.createPromoKitty(32929155, coo, {from: coo,value: 0});
await instance.createPromoKitty(545363437, coo, {from: coo,value: 0});
await instance.createPromoKitty(944996468, coo, {from: coo,value: 0});
await instance.createPromoKitty(625620330, coo, {from: coo,value: 0});
await instance.createPromoKitty(581649401, coo, {from: coo,value: 0});
await instance.createPromoKitty(201167390, coo, {from: coo,value: 0});
await instance.createPromoKitty(837607490, coo, {from: coo,value: 0});
await instance.createPromoKitty(238331228, coo, {from: coo,value: 0});
await instance.createPromoKitty(957064518, coo, {from: coo,value: 0});
await instance.createPromoKitty(446612015, coo, {from: coo,value: 0});
await instance.createPromoKitty(315326542, coo, {from: coo,value: 0});
await instance.createPromoKitty(483033961, coo, {from: coo,value: 0});
await instance.createPromoKitty(916492905, coo, {from: coo,value: 0});
await instance.createPromoKitty(423867262, coo, {from: coo,value: 0});
await instance.createPromoKitty(540529941, coo, {from: coo,value: 0});
await instance.createPromoKitty(599117134, coo, {from: coo,value: 0});
await instance.createPromoKitty(291039780, coo, {from: coo,value: 0});
await instance.createPromoKitty(769840822, coo, {from: coo,value: 0});
await instance.createPromoKitty(778410014, coo, {from: coo,value: 0});
await instance.createPromoKitty(487497458, coo, {from: coo,value: 0});
await instance.createPromoKitty(864703573, coo, {from: coo,value: 0});
await instance.createPromoKitty(722720791, coo, {from: coo,value: 0});
await instance.createPromoKitty(811146253, coo, {from: coo,value: 0});
await instance.createPromoKitty(819993357, coo, {from: coo,value: 0});
await instance.createPromoKitty(848184149, coo, {from: coo,value: 0});
await instance.createPromoKitty(211713118, coo, {from: coo,value: 0});
await instance.createPromoKitty(282534351, coo, {from: coo,value: 0});
await instance.createPromoKitty(890461207, coo, {from: coo,value: 0});
await instance.createPromoKitty(993086260, coo, {from: coo,value: 0});
await instance.createPromoKitty(799618417, coo, {from: coo,value: 0});
await instance.createPromoKitty(927394649, coo, {from: coo,value: 0});
await instance.createPromoKitty(403384980, coo, {from: coo,value: 0});
await instance.createPromoKitty(632030135, coo, {from: coo,value: 0});
await instance.createPromoKitty(546723075, coo, {from: coo,value: 0});
await instance.createPromoKitty(781614409, coo, {from: coo,value: 0});
await instance.createPromoKitty(454534981, coo, {from: coo,value: 0});
await instance.createPromoKitty(657447792, coo, {from: coo,value: 0});
await instance.createPromoKitty(94162300, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(22, 39, {from: coo});
await instance.breedWith(14, 20, {from: coo});
await instance.breedWith(30, 1, {from: coo});
await instance.breedWith(4, 16, {from: coo});
await instance.breedWith(36, 7, {from: coo});
await instance.breedWith(8, 28, {from: coo});
await instance.breedWith(34, 13, {from: coo});
await instance.breedWith(3, 29, {from: coo});
await instance.breedWith(26, 9, {from: coo});
await instance.breedWith(27, 33, {from: coo});
await instance.breedWith(18, 37, {from: coo});
await instance.breedWith(38, 25, {from: coo});
await instance.breedWith(24, 32, {from: coo});
await instance.breedWith(19, 12, {from: coo});
await instance.breedWith(6, 35, {from: coo});
await instance.breedWith(21, 23, {from: coo});
await instance.breedWith(15, 31, {from: coo});
await instance.breedWith(40, 10, {from: coo});
await instance.breedWith(11, 2, {from: coo});
await instance.breedWith(5, 17, {from: coo});
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
await instance.giveBirth(22);
await instance.giveBirth(14);
await instance.giveBirth(30);
await instance.giveBirth(4);
await instance.giveBirth(36);
await instance.giveBirth(8);
await instance.giveBirth(34);
await instance.giveBirth(3);
await instance.giveBirth(26);
await instance.giveBirth(27);
await instance.giveBirth(18);
await instance.giveBirth(38);
await instance.giveBirth(24);
await instance.giveBirth(19);
await instance.giveBirth(6);
await instance.giveBirth(21);
await instance.giveBirth(15);
await instance.giveBirth(40);
await instance.giveBirth(11);
await instance.giveBirth(5);
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
