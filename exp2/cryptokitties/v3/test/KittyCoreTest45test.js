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
await instance.createPromoKitty(743525617, coo, {from: coo,value: 0});
await instance.createPromoKitty(818584212, coo, {from: coo,value: 0});
await instance.createPromoKitty(261184279, coo, {from: coo,value: 0});
await instance.createPromoKitty(592166006, coo, {from: coo,value: 0});
await instance.createPromoKitty(195815783, coo, {from: coo,value: 0});
await instance.createPromoKitty(189856504, coo, {from: coo,value: 0});
await instance.createPromoKitty(538128402, coo, {from: coo,value: 0});
await instance.createPromoKitty(961705506, coo, {from: coo,value: 0});
await instance.createPromoKitty(606275201, coo, {from: coo,value: 0});
await instance.createPromoKitty(150631594, coo, {from: coo,value: 0});
await instance.createPromoKitty(903494363, coo, {from: coo,value: 0});
await instance.createPromoKitty(214369603, coo, {from: coo,value: 0});
await instance.createPromoKitty(334663201, coo, {from: coo,value: 0});
await instance.createPromoKitty(170413296, coo, {from: coo,value: 0});
await instance.createPromoKitty(170157483, coo, {from: coo,value: 0});
await instance.createPromoKitty(867565161, coo, {from: coo,value: 0});
await instance.createPromoKitty(827042680, coo, {from: coo,value: 0});
await instance.createPromoKitty(435395029, coo, {from: coo,value: 0});
await instance.createPromoKitty(987864360, coo, {from: coo,value: 0});
await instance.createPromoKitty(546433572, coo, {from: coo,value: 0});
await instance.createPromoKitty(910014237, coo, {from: coo,value: 0});
await instance.createPromoKitty(643776698, coo, {from: coo,value: 0});
await instance.createPromoKitty(345094612, coo, {from: coo,value: 0});
await instance.createPromoKitty(434212792, coo, {from: coo,value: 0});
await instance.createPromoKitty(544315452, coo, {from: coo,value: 0});
await instance.createPromoKitty(519968518, coo, {from: coo,value: 0});
await instance.createPromoKitty(190598727, coo, {from: coo,value: 0});
await instance.createPromoKitty(423106729, coo, {from: coo,value: 0});
await instance.createPromoKitty(828170458, coo, {from: coo,value: 0});
await instance.createPromoKitty(303076605, coo, {from: coo,value: 0});
await instance.createPromoKitty(840203539, coo, {from: coo,value: 0});
await instance.createPromoKitty(274074240, coo, {from: coo,value: 0});
await instance.createPromoKitty(90239696, coo, {from: coo,value: 0});
await instance.createPromoKitty(732166352, coo, {from: coo,value: 0});
await instance.createPromoKitty(716135467, coo, {from: coo,value: 0});
await instance.createPromoKitty(70811176, coo, {from: coo,value: 0});
await instance.createPromoKitty(243157775, coo, {from: coo,value: 0});
await instance.createPromoKitty(344788155, coo, {from: coo,value: 0});
await instance.createPromoKitty(221160122, coo, {from: coo,value: 0});
await instance.createPromoKitty(874447641, coo, {from: coo,value: 0});
await instance.createPromoKitty(911253333, coo, {from: coo,value: 0});
await instance.createPromoKitty(263116512, coo, {from: coo,value: 0});
await instance.createPromoKitty(815820728, coo, {from: coo,value: 0});
await instance.createPromoKitty(725948169, coo, {from: coo,value: 0});
await instance.createPromoKitty(958419538, coo, {from: coo,value: 0});
await instance.createPromoKitty(197439829, coo, {from: coo,value: 0});
await instance.createPromoKitty(575124999, coo, {from: coo,value: 0});
await instance.createPromoKitty(373876160, coo, {from: coo,value: 0});
await instance.createPromoKitty(415256019, coo, {from: coo,value: 0});
await instance.createPromoKitty(386921371, coo, {from: coo,value: 0});
await instance.createPromoKitty(811071563, coo, {from: coo,value: 0});
await instance.createPromoKitty(853718263, coo, {from: coo,value: 0});
await instance.createPromoKitty(589440974, coo, {from: coo,value: 0});
await instance.createPromoKitty(790830668, coo, {from: coo,value: 0});
await instance.createPromoKitty(76026226, coo, {from: coo,value: 0});
await instance.createPromoKitty(572040809, coo, {from: coo,value: 0});
await instance.createPromoKitty(607114814, coo, {from: coo,value: 0});
await instance.createPromoKitty(829342514, coo, {from: coo,value: 0});
await instance.createPromoKitty(783058074, coo, {from: coo,value: 0});
await instance.createPromoKitty(957657951, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(39, 7, {from: coo});
await instance.breedWith(40, 6, {from: coo});
await instance.breedWith(28, 30, {from: coo});
await instance.breedWith(2, 36, {from: coo});
await instance.breedWith(8, 13, {from: coo});
await instance.breedWith(31, 5, {from: coo});
await instance.breedWith(4, 24, {from: coo});
await instance.breedWith(23, 26, {from: coo});
await instance.breedWith(3, 1, {from: coo});
await instance.breedWith(10, 15, {from: coo});
await instance.breedWith(16, 29, {from: coo});
await instance.breedWith(33, 21, {from: coo});
await instance.breedWith(38, 22, {from: coo});
await instance.breedWith(37, 9, {from: coo});
await instance.breedWith(11, 17, {from: coo});
await instance.breedWith(32, 35, {from: coo});
await instance.breedWith(14, 25, {from: coo});
await instance.breedWith(18, 12, {from: coo});
await instance.breedWith(19, 27, {from: coo});
await instance.breedWith(34, 20, {from: coo});
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
await instance.giveBirth(39);
await instance.giveBirth(40);
await instance.giveBirth(28);
await instance.giveBirth(2);
await instance.giveBirth(8);
await instance.giveBirth(31);
await instance.giveBirth(4);
await instance.giveBirth(23);
await instance.giveBirth(3);
await instance.giveBirth(10);
await instance.giveBirth(16);
await instance.giveBirth(33);
await instance.giveBirth(38);
await instance.giveBirth(37);
await instance.giveBirth(11);
await instance.giveBirth(32);
await instance.giveBirth(14);
await instance.giveBirth(18);
await instance.giveBirth(19);
await instance.giveBirth(34);
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
