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
await instance.createPromoKitty(725550922, coo, {from: coo,value: 0});
await instance.createPromoKitty(336827050, coo, {from: coo,value: 0});
await instance.createPromoKitty(705169363, coo, {from: coo,value: 0});
await instance.createPromoKitty(82071865, coo, {from: coo,value: 0});
await instance.createPromoKitty(779776065, coo, {from: coo,value: 0});
await instance.createPromoKitty(749027525, coo, {from: coo,value: 0});
await instance.createPromoKitty(657661656, coo, {from: coo,value: 0});
await instance.createPromoKitty(936415796, coo, {from: coo,value: 0});
await instance.createPromoKitty(113327159, coo, {from: coo,value: 0});
await instance.createPromoKitty(473243319, coo, {from: coo,value: 0});
await instance.createPromoKitty(224348702, coo, {from: coo,value: 0});
await instance.createPromoKitty(213519723, coo, {from: coo,value: 0});
await instance.createPromoKitty(97144242, coo, {from: coo,value: 0});
await instance.createPromoKitty(275529397, coo, {from: coo,value: 0});
await instance.createPromoKitty(213837427, coo, {from: coo,value: 0});
await instance.createPromoKitty(406175113, coo, {from: coo,value: 0});
await instance.createPromoKitty(747177563, coo, {from: coo,value: 0});
await instance.createPromoKitty(32929037, coo, {from: coo,value: 0});
await instance.createPromoKitty(108478386, coo, {from: coo,value: 0});
await instance.createPromoKitty(576824796, coo, {from: coo,value: 0});
await instance.createPromoKitty(862266893, coo, {from: coo,value: 0});
await instance.createPromoKitty(358692082, coo, {from: coo,value: 0});
await instance.createPromoKitty(992919754, coo, {from: coo,value: 0});
await instance.createPromoKitty(342623119, coo, {from: coo,value: 0});
await instance.createPromoKitty(116735067, coo, {from: coo,value: 0});
await instance.createPromoKitty(49640211, coo, {from: coo,value: 0});
await instance.createPromoKitty(955419232, coo, {from: coo,value: 0});
await instance.createPromoKitty(766586463, coo, {from: coo,value: 0});
await instance.createPromoKitty(971846336, coo, {from: coo,value: 0});
await instance.createPromoKitty(496083872, coo, {from: coo,value: 0});
await instance.createPromoKitty(656123615, coo, {from: coo,value: 0});
await instance.createPromoKitty(496912762, coo, {from: coo,value: 0});
await instance.createPromoKitty(321951331, coo, {from: coo,value: 0});
await instance.createPromoKitty(915971349, coo, {from: coo,value: 0});
await instance.createPromoKitty(291406793, coo, {from: coo,value: 0});
await instance.createPromoKitty(951064871, coo, {from: coo,value: 0});
await instance.createPromoKitty(860135454, coo, {from: coo,value: 0});
await instance.createPromoKitty(924110970, coo, {from: coo,value: 0});
await instance.createPromoKitty(230942907, coo, {from: coo,value: 0});
await instance.createPromoKitty(80444358, coo, {from: coo,value: 0});
await instance.createPromoKitty(326140443, coo, {from: coo,value: 0});
await instance.createPromoKitty(231687916, coo, {from: coo,value: 0});
await instance.createPromoKitty(268147867, coo, {from: coo,value: 0});
await instance.createPromoKitty(643321247, coo, {from: coo,value: 0});
await instance.createPromoKitty(674149156, coo, {from: coo,value: 0});
await instance.createPromoKitty(814107640, coo, {from: coo,value: 0});
await instance.createPromoKitty(361654141, coo, {from: coo,value: 0});
await instance.createPromoKitty(768034661, coo, {from: coo,value: 0});
await instance.createPromoKitty(535148903, coo, {from: coo,value: 0});
await instance.createPromoKitty(756599781, coo, {from: coo,value: 0});
await instance.createPromoKitty(817256062, coo, {from: coo,value: 0});
await instance.createPromoKitty(478694333, coo, {from: coo,value: 0});
await instance.createPromoKitty(961131958, coo, {from: coo,value: 0});
await instance.createPromoKitty(402710812, coo, {from: coo,value: 0});
await instance.createPromoKitty(215473666, coo, {from: coo,value: 0});
await instance.createPromoKitty(262220011, coo, {from: coo,value: 0});
await instance.createPromoKitty(311657650, coo, {from: coo,value: 0});
await instance.createPromoKitty(418453659, coo, {from: coo,value: 0});
await instance.createPromoKitty(363639472, coo, {from: coo,value: 0});
await instance.createPromoKitty(792542322, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(32, 1, {from: coo});
await instance.breedWith(18, 39, {from: coo});
await instance.breedWith(24, 14, {from: coo});
await instance.breedWith(38, 2, {from: coo});
await instance.breedWith(11, 9, {from: coo});
await instance.breedWith(36, 5, {from: coo});
await instance.breedWith(17, 19, {from: coo});
await instance.breedWith(10, 6, {from: coo});
await instance.breedWith(29, 20, {from: coo});
await instance.breedWith(22, 35, {from: coo});
await instance.breedWith(33, 8, {from: coo});
await instance.breedWith(4, 28, {from: coo});
await instance.breedWith(13, 26, {from: coo});
await instance.breedWith(16, 34, {from: coo});
await instance.breedWith(30, 23, {from: coo});
await instance.breedWith(3, 12, {from: coo});
await instance.breedWith(25, 37, {from: coo});
await instance.breedWith(40, 7, {from: coo});
await instance.breedWith(21, 27, {from: coo});
await instance.breedWith(15, 31, {from: coo});
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
await instance.giveBirth(32);
await instance.giveBirth(18);
await instance.giveBirth(24);
await instance.giveBirth(38);
await instance.giveBirth(11);
await instance.giveBirth(36);
await instance.giveBirth(17);
await instance.giveBirth(10);
await instance.giveBirth(29);
await instance.giveBirth(22);
await instance.giveBirth(33);
await instance.giveBirth(4);
await instance.giveBirth(13);
await instance.giveBirth(16);
await instance.giveBirth(30);
await instance.giveBirth(3);
await instance.giveBirth(25);
await instance.giveBirth(40);
await instance.giveBirth(21);
await instance.giveBirth(15);
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
