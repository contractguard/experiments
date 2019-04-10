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
await instance.createPromoKitty(827904620, coo, {from: coo,value: 0});
await instance.createPromoKitty(965438249, coo, {from: coo,value: 0});
await instance.createPromoKitty(38014133, coo, {from: coo,value: 0});
await instance.createPromoKitty(221142011, coo, {from: coo,value: 0});
await instance.createPromoKitty(692442669, coo, {from: coo,value: 0});
await instance.createPromoKitty(542729165, coo, {from: coo,value: 0});
await instance.createPromoKitty(778321273, coo, {from: coo,value: 0});
await instance.createPromoKitty(400391212, coo, {from: coo,value: 0});
await instance.createPromoKitty(702160113, coo, {from: coo,value: 0});
await instance.createPromoKitty(723249075, coo, {from: coo,value: 0});
await instance.createPromoKitty(782877236, coo, {from: coo,value: 0});
await instance.createPromoKitty(534164784, coo, {from: coo,value: 0});
await instance.createPromoKitty(336413890, coo, {from: coo,value: 0});
await instance.createPromoKitty(668674006, coo, {from: coo,value: 0});
await instance.createPromoKitty(277616806, coo, {from: coo,value: 0});
await instance.createPromoKitty(462085686, coo, {from: coo,value: 0});
await instance.createPromoKitty(379107332, coo, {from: coo,value: 0});
await instance.createPromoKitty(604607687, coo, {from: coo,value: 0});
await instance.createPromoKitty(612260931, coo, {from: coo,value: 0});
await instance.createPromoKitty(629084690, coo, {from: coo,value: 0});
await instance.createPromoKitty(722706725, coo, {from: coo,value: 0});
await instance.createPromoKitty(321414930, coo, {from: coo,value: 0});
await instance.createPromoKitty(667119477, coo, {from: coo,value: 0});
await instance.createPromoKitty(25210468, coo, {from: coo,value: 0});
await instance.createPromoKitty(322059434, coo, {from: coo,value: 0});
await instance.createPromoKitty(530163539, coo, {from: coo,value: 0});
await instance.createPromoKitty(583132061, coo, {from: coo,value: 0});
await instance.createPromoKitty(981643655, coo, {from: coo,value: 0});
await instance.createPromoKitty(798627732, coo, {from: coo,value: 0});
await instance.createPromoKitty(430260710, coo, {from: coo,value: 0});
await instance.createPromoKitty(556020753, coo, {from: coo,value: 0});
await instance.createPromoKitty(413157189, coo, {from: coo,value: 0});
await instance.createPromoKitty(811459446, coo, {from: coo,value: 0});
await instance.createPromoKitty(757848006, coo, {from: coo,value: 0});
await instance.createPromoKitty(202395756, coo, {from: coo,value: 0});
await instance.createPromoKitty(624432649, coo, {from: coo,value: 0});
await instance.createPromoKitty(883136084, coo, {from: coo,value: 0});
await instance.createPromoKitty(348413683, coo, {from: coo,value: 0});
await instance.createPromoKitty(951715126, coo, {from: coo,value: 0});
await instance.createPromoKitty(70769744, coo, {from: coo,value: 0});
await instance.createPromoKitty(294854518, coo, {from: coo,value: 0});
await instance.createPromoKitty(718223770, coo, {from: coo,value: 0});
await instance.createPromoKitty(567090807, coo, {from: coo,value: 0});
await instance.createPromoKitty(663612586, coo, {from: coo,value: 0});
await instance.createPromoKitty(609552536, coo, {from: coo,value: 0});
await instance.createPromoKitty(755649181, coo, {from: coo,value: 0});
await instance.createPromoKitty(875756300, coo, {from: coo,value: 0});
await instance.createPromoKitty(394659974, coo, {from: coo,value: 0});
await instance.createPromoKitty(862390208, coo, {from: coo,value: 0});
await instance.createPromoKitty(720031254, coo, {from: coo,value: 0});
await instance.createPromoKitty(841191784, coo, {from: coo,value: 0});
await instance.createPromoKitty(217726558, coo, {from: coo,value: 0});
await instance.createPromoKitty(856574700, coo, {from: coo,value: 0});
await instance.createPromoKitty(172613519, coo, {from: coo,value: 0});
await instance.createPromoKitty(773024515, coo, {from: coo,value: 0});
await instance.createPromoKitty(557995913, coo, {from: coo,value: 0});
await instance.createPromoKitty(500823722, coo, {from: coo,value: 0});
await instance.createPromoKitty(361320711, coo, {from: coo,value: 0});
await instance.createPromoKitty(958227228, coo, {from: coo,value: 0});
await instance.createPromoKitty(247525821, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(26, 29, {from: coo});
await instance.breedWith(1, 13, {from: coo});
await instance.breedWith(19, 38, {from: coo});
await instance.breedWith(35, 34, {from: coo});
await instance.breedWith(5, 32, {from: coo});
await instance.breedWith(8, 4, {from: coo});
await instance.breedWith(16, 27, {from: coo});
await instance.breedWith(28, 39, {from: coo});
await instance.breedWith(21, 24, {from: coo});
await instance.breedWith(9, 14, {from: coo});
await instance.breedWith(37, 25, {from: coo});
await instance.breedWith(6, 10, {from: coo});
await instance.breedWith(40, 3, {from: coo});
await instance.breedWith(17, 22, {from: coo});
await instance.breedWith(18, 12, {from: coo});
await instance.breedWith(2, 30, {from: coo});
await instance.breedWith(15, 33, {from: coo});
await instance.breedWith(20, 36, {from: coo});
await instance.breedWith(7, 23, {from: coo});
await instance.breedWith(31, 11, {from: coo});
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
await instance.giveBirth(26);
await instance.giveBirth(1);
await instance.giveBirth(19);
await instance.giveBirth(35);
await instance.giveBirth(5);
await instance.giveBirth(8);
await instance.giveBirth(16);
await instance.giveBirth(28);
await instance.giveBirth(21);
await instance.giveBirth(9);
await instance.giveBirth(37);
await instance.giveBirth(6);
await instance.giveBirth(40);
await instance.giveBirth(17);
await instance.giveBirth(18);
await instance.giveBirth(2);
await instance.giveBirth(15);
await instance.giveBirth(20);
await instance.giveBirth(7);
await instance.giveBirth(31);
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
