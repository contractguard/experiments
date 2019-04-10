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
await instance.createPromoKitty(471543637, coo, {from: coo,value: 0});
await instance.createPromoKitty(463718610, coo, {from: coo,value: 0});
await instance.createPromoKitty(435773226, coo, {from: coo,value: 0});
await instance.createPromoKitty(536784413, coo, {from: coo,value: 0});
await instance.createPromoKitty(217684177, coo, {from: coo,value: 0});
await instance.createPromoKitty(40078937, coo, {from: coo,value: 0});
await instance.createPromoKitty(238294819, coo, {from: coo,value: 0});
await instance.createPromoKitty(559552172, coo, {from: coo,value: 0});
await instance.createPromoKitty(618135191, coo, {from: coo,value: 0});
await instance.createPromoKitty(54224298, coo, {from: coo,value: 0});
await instance.createPromoKitty(604247734, coo, {from: coo,value: 0});
await instance.createPromoKitty(669378150, coo, {from: coo,value: 0});
await instance.createPromoKitty(796608666, coo, {from: coo,value: 0});
await instance.createPromoKitty(416264312, coo, {from: coo,value: 0});
await instance.createPromoKitty(867219048, coo, {from: coo,value: 0});
await instance.createPromoKitty(345642644, coo, {from: coo,value: 0});
await instance.createPromoKitty(559064472, coo, {from: coo,value: 0});
await instance.createPromoKitty(501975682, coo, {from: coo,value: 0});
await instance.createPromoKitty(148375649, coo, {from: coo,value: 0});
await instance.createPromoKitty(941657100, coo, {from: coo,value: 0});
await instance.createPromoKitty(455315176, coo, {from: coo,value: 0});
await instance.createPromoKitty(5300748, coo, {from: coo,value: 0});
await instance.createPromoKitty(189706356, coo, {from: coo,value: 0});
await instance.createPromoKitty(572525422, coo, {from: coo,value: 0});
await instance.createPromoKitty(514622563, coo, {from: coo,value: 0});
await instance.createPromoKitty(502889530, coo, {from: coo,value: 0});
await instance.createPromoKitty(305550276, coo, {from: coo,value: 0});
await instance.createPromoKitty(79166108, coo, {from: coo,value: 0});
await instance.createPromoKitty(233236333, coo, {from: coo,value: 0});
await instance.createPromoKitty(6145976, coo, {from: coo,value: 0});
await instance.createPromoKitty(406804136, coo, {from: coo,value: 0});
await instance.createPromoKitty(144752815, coo, {from: coo,value: 0});
await instance.createPromoKitty(814380111, coo, {from: coo,value: 0});
await instance.createPromoKitty(604718552, coo, {from: coo,value: 0});
await instance.createPromoKitty(774224328, coo, {from: coo,value: 0});
await instance.createPromoKitty(701294458, coo, {from: coo,value: 0});
await instance.createPromoKitty(919945313, coo, {from: coo,value: 0});
await instance.createPromoKitty(358303340, coo, {from: coo,value: 0});
await instance.createPromoKitty(483104571, coo, {from: coo,value: 0});
await instance.createPromoKitty(462900105, coo, {from: coo,value: 0});
await instance.createPromoKitty(215111261, coo, {from: coo,value: 0});
await instance.createPromoKitty(553980546, coo, {from: coo,value: 0});
await instance.createPromoKitty(941000180, coo, {from: coo,value: 0});
await instance.createPromoKitty(483396639, coo, {from: coo,value: 0});
await instance.createPromoKitty(305209967, coo, {from: coo,value: 0});
await instance.createPromoKitty(454971038, coo, {from: coo,value: 0});
await instance.createPromoKitty(561408533, coo, {from: coo,value: 0});
await instance.createPromoKitty(67240931, coo, {from: coo,value: 0});
await instance.createPromoKitty(331061596, coo, {from: coo,value: 0});
await instance.createPromoKitty(713388684, coo, {from: coo,value: 0});
await instance.createPromoKitty(933071298, coo, {from: coo,value: 0});
await instance.createPromoKitty(928819169, coo, {from: coo,value: 0});
await instance.createPromoKitty(425263690, coo, {from: coo,value: 0});
await instance.createPromoKitty(427666837, coo, {from: coo,value: 0});
await instance.createPromoKitty(970995980, coo, {from: coo,value: 0});
await instance.createPromoKitty(591723916, coo, {from: coo,value: 0});
await instance.createPromoKitty(208108859, coo, {from: coo,value: 0});
await instance.createPromoKitty(445108246, coo, {from: coo,value: 0});
await instance.createPromoKitty(107930026, coo, {from: coo,value: 0});
await instance.createPromoKitty(455896516, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(16, 32, {from: coo});
await instance.breedWith(31, 12, {from: coo});
await instance.breedWith(9, 17, {from: coo});
await instance.breedWith(39, 19, {from: coo});
await instance.breedWith(20, 35, {from: coo});
await instance.breedWith(37, 15, {from: coo});
await instance.breedWith(40, 34, {from: coo});
await instance.breedWith(2, 33, {from: coo});
await instance.breedWith(4, 30, {from: coo});
await instance.breedWith(7, 22, {from: coo});
await instance.breedWith(28, 38, {from: coo});
await instance.breedWith(6, 27, {from: coo});
await instance.breedWith(18, 21, {from: coo});
await instance.breedWith(24, 3, {from: coo});
await instance.breedWith(1, 26, {from: coo});
await instance.breedWith(29, 36, {from: coo});
await instance.breedWith(11, 5, {from: coo});
await instance.breedWith(10, 25, {from: coo});
await instance.breedWith(8, 14, {from: coo});
await instance.breedWith(23, 13, {from: coo});
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
await instance.giveBirth(16);
await instance.giveBirth(31);
await instance.giveBirth(9);
await instance.giveBirth(39);
await instance.giveBirth(20);
await instance.giveBirth(37);
await instance.giveBirth(40);
await instance.giveBirth(2);
await instance.giveBirth(4);
await instance.giveBirth(7);
await instance.giveBirth(28);
await instance.giveBirth(6);
await instance.giveBirth(18);
await instance.giveBirth(24);
await instance.giveBirth(1);
await instance.giveBirth(29);
await instance.giveBirth(11);
await instance.giveBirth(10);
await instance.giveBirth(8);
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
