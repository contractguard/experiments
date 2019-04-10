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
await instance.createPromoKitty(710413381, coo, {from: coo,value: 0});
await instance.createPromoKitty(54610242, coo, {from: coo,value: 0});
await instance.createPromoKitty(863307506, coo, {from: coo,value: 0});
await instance.createPromoKitty(483314763, coo, {from: coo,value: 0});
await instance.createPromoKitty(981248592, coo, {from: coo,value: 0});
await instance.createPromoKitty(553762598, coo, {from: coo,value: 0});
await instance.createPromoKitty(157889777, coo, {from: coo,value: 0});
await instance.createPromoKitty(676550384, coo, {from: coo,value: 0});
await instance.createPromoKitty(792347002, coo, {from: coo,value: 0});
await instance.createPromoKitty(813838657, coo, {from: coo,value: 0});
await instance.createPromoKitty(886036130, coo, {from: coo,value: 0});
await instance.createPromoKitty(482585243, coo, {from: coo,value: 0});
await instance.createPromoKitty(316325456, coo, {from: coo,value: 0});
await instance.createPromoKitty(469698688, coo, {from: coo,value: 0});
await instance.createPromoKitty(424837695, coo, {from: coo,value: 0});
await instance.createPromoKitty(189948830, coo, {from: coo,value: 0});
await instance.createPromoKitty(407347472, coo, {from: coo,value: 0});
await instance.createPromoKitty(834614452, coo, {from: coo,value: 0});
await instance.createPromoKitty(33590368, coo, {from: coo,value: 0});
await instance.createPromoKitty(458048916, coo, {from: coo,value: 0});
await instance.createPromoKitty(603619007, coo, {from: coo,value: 0});
await instance.createPromoKitty(249528706, coo, {from: coo,value: 0});
await instance.createPromoKitty(828847977, coo, {from: coo,value: 0});
await instance.createPromoKitty(42852973, coo, {from: coo,value: 0});
await instance.createPromoKitty(295155943, coo, {from: coo,value: 0});
await instance.createPromoKitty(521424814, coo, {from: coo,value: 0});
await instance.createPromoKitty(444362455, coo, {from: coo,value: 0});
await instance.createPromoKitty(668833061, coo, {from: coo,value: 0});
await instance.createPromoKitty(241874328, coo, {from: coo,value: 0});
await instance.createPromoKitty(337254791, coo, {from: coo,value: 0});
await instance.createPromoKitty(707985305, coo, {from: coo,value: 0});
await instance.createPromoKitty(7543770, coo, {from: coo,value: 0});
await instance.createPromoKitty(847672046, coo, {from: coo,value: 0});
await instance.createPromoKitty(428490718, coo, {from: coo,value: 0});
await instance.createPromoKitty(726463415, coo, {from: coo,value: 0});
await instance.createPromoKitty(77342348, coo, {from: coo,value: 0});
await instance.createPromoKitty(886549691, coo, {from: coo,value: 0});
await instance.createPromoKitty(123261811, coo, {from: coo,value: 0});
await instance.createPromoKitty(293673860, coo, {from: coo,value: 0});
await instance.createPromoKitty(544865960, coo, {from: coo,value: 0});
await instance.createPromoKitty(410455516, coo, {from: coo,value: 0});
await instance.createPromoKitty(488978028, coo, {from: coo,value: 0});
await instance.createPromoKitty(370556331, coo, {from: coo,value: 0});
await instance.createPromoKitty(588551717, coo, {from: coo,value: 0});
await instance.createPromoKitty(751849723, coo, {from: coo,value: 0});
await instance.createPromoKitty(925276545, coo, {from: coo,value: 0});
await instance.createPromoKitty(529049917, coo, {from: coo,value: 0});
await instance.createPromoKitty(984945751, coo, {from: coo,value: 0});
await instance.createPromoKitty(846754485, coo, {from: coo,value: 0});
await instance.createPromoKitty(177928531, coo, {from: coo,value: 0});
await instance.createPromoKitty(469208444, coo, {from: coo,value: 0});
await instance.createPromoKitty(321248120, coo, {from: coo,value: 0});
await instance.createPromoKitty(687474691, coo, {from: coo,value: 0});
await instance.createPromoKitty(44183736, coo, {from: coo,value: 0});
await instance.createPromoKitty(231477614, coo, {from: coo,value: 0});
await instance.createPromoKitty(177383672, coo, {from: coo,value: 0});
await instance.createPromoKitty(610511444, coo, {from: coo,value: 0});
await instance.createPromoKitty(406648449, coo, {from: coo,value: 0});
await instance.createPromoKitty(133937563, coo, {from: coo,value: 0});
await instance.createPromoKitty(990076036, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(38, 11, {from: coo});
await instance.breedWith(40, 22, {from: coo});
await instance.breedWith(32, 14, {from: coo});
await instance.breedWith(19, 37, {from: coo});
await instance.breedWith(27, 16, {from: coo});
await instance.breedWith(34, 2, {from: coo});
await instance.breedWith(5, 35, {from: coo});
await instance.breedWith(39, 10, {from: coo});
await instance.breedWith(23, 12, {from: coo});
await instance.breedWith(33, 21, {from: coo});
await instance.breedWith(4, 13, {from: coo});
await instance.breedWith(18, 7, {from: coo});
await instance.breedWith(31, 1, {from: coo});
await instance.breedWith(15, 3, {from: coo});
await instance.breedWith(6, 24, {from: coo});
await instance.breedWith(25, 20, {from: coo});
await instance.breedWith(9, 29, {from: coo});
await instance.breedWith(26, 36, {from: coo});
await instance.breedWith(17, 8, {from: coo});
await instance.breedWith(30, 28, {from: coo});
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
await instance.giveBirth(38);
await instance.giveBirth(40);
await instance.giveBirth(32);
await instance.giveBirth(19);
await instance.giveBirth(27);
await instance.giveBirth(34);
await instance.giveBirth(5);
await instance.giveBirth(39);
await instance.giveBirth(23);
await instance.giveBirth(33);
await instance.giveBirth(4);
await instance.giveBirth(18);
await instance.giveBirth(31);
await instance.giveBirth(15);
await instance.giveBirth(6);
await instance.giveBirth(25);
await instance.giveBirth(9);
await instance.giveBirth(26);
await instance.giveBirth(17);
await instance.giveBirth(30);
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
