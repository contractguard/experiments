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
await instance.createPromoKitty(539004137, coo, {from: coo,value: 0});
await instance.createPromoKitty(731585841, coo, {from: coo,value: 0});
await instance.createPromoKitty(987300226, coo, {from: coo,value: 0});
await instance.createPromoKitty(66437128, coo, {from: coo,value: 0});
await instance.createPromoKitty(901827352, coo, {from: coo,value: 0});
await instance.createPromoKitty(541164346, coo, {from: coo,value: 0});
await instance.createPromoKitty(670691517, coo, {from: coo,value: 0});
await instance.createPromoKitty(730627024, coo, {from: coo,value: 0});
await instance.createPromoKitty(597827214, coo, {from: coo,value: 0});
await instance.createPromoKitty(778900581, coo, {from: coo,value: 0});
await instance.createPromoKitty(33541970, coo, {from: coo,value: 0});
await instance.createPromoKitty(716219658, coo, {from: coo,value: 0});
await instance.createPromoKitty(951846040, coo, {from: coo,value: 0});
await instance.createPromoKitty(832180665, coo, {from: coo,value: 0});
await instance.createPromoKitty(150494428, coo, {from: coo,value: 0});
await instance.createPromoKitty(707699052, coo, {from: coo,value: 0});
await instance.createPromoKitty(761512582, coo, {from: coo,value: 0});
await instance.createPromoKitty(445411790, coo, {from: coo,value: 0});
await instance.createPromoKitty(488381210, coo, {from: coo,value: 0});
await instance.createPromoKitty(756843496, coo, {from: coo,value: 0});
await instance.createPromoKitty(138204094, coo, {from: coo,value: 0});
await instance.createPromoKitty(278066749, coo, {from: coo,value: 0});
await instance.createPromoKitty(564686353, coo, {from: coo,value: 0});
await instance.createPromoKitty(868879669, coo, {from: coo,value: 0});
await instance.createPromoKitty(791831332, coo, {from: coo,value: 0});
await instance.createPromoKitty(703642453, coo, {from: coo,value: 0});
await instance.createPromoKitty(900542054, coo, {from: coo,value: 0});
await instance.createPromoKitty(166235336, coo, {from: coo,value: 0});
await instance.createPromoKitty(983695785, coo, {from: coo,value: 0});
await instance.createPromoKitty(155869063, coo, {from: coo,value: 0});
await instance.createPromoKitty(679422177, coo, {from: coo,value: 0});
await instance.createPromoKitty(790655558, coo, {from: coo,value: 0});
await instance.createPromoKitty(843907143, coo, {from: coo,value: 0});
await instance.createPromoKitty(619164239, coo, {from: coo,value: 0});
await instance.createPromoKitty(588002381, coo, {from: coo,value: 0});
await instance.createPromoKitty(606457002, coo, {from: coo,value: 0});
await instance.createPromoKitty(597250155, coo, {from: coo,value: 0});
await instance.createPromoKitty(41458559, coo, {from: coo,value: 0});
await instance.createPromoKitty(954764151, coo, {from: coo,value: 0});
await instance.createPromoKitty(870474540, coo, {from: coo,value: 0});
await instance.createPromoKitty(843181163, coo, {from: coo,value: 0});
await instance.createPromoKitty(224648066, coo, {from: coo,value: 0});
await instance.createPromoKitty(540417820, coo, {from: coo,value: 0});
await instance.createPromoKitty(538749142, coo, {from: coo,value: 0});
await instance.createPromoKitty(986608437, coo, {from: coo,value: 0});
await instance.createPromoKitty(69071951, coo, {from: coo,value: 0});
await instance.createPromoKitty(214618066, coo, {from: coo,value: 0});
await instance.createPromoKitty(447409172, coo, {from: coo,value: 0});
await instance.createPromoKitty(889514534, coo, {from: coo,value: 0});
await instance.createPromoKitty(342809872, coo, {from: coo,value: 0});
await instance.createPromoKitty(838559017, coo, {from: coo,value: 0});
await instance.createPromoKitty(303888857, coo, {from: coo,value: 0});
await instance.createPromoKitty(286180879, coo, {from: coo,value: 0});
await instance.createPromoKitty(831827426, coo, {from: coo,value: 0});
await instance.createPromoKitty(325620962, coo, {from: coo,value: 0});
await instance.createPromoKitty(904149755, coo, {from: coo,value: 0});
await instance.createPromoKitty(519309421, coo, {from: coo,value: 0});
await instance.createPromoKitty(834199982, coo, {from: coo,value: 0});
await instance.createPromoKitty(81433149, coo, {from: coo,value: 0});
await instance.createPromoKitty(584466046, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(14, 28, {from: coo});
await instance.breedWith(37, 18, {from: coo});
await instance.breedWith(9, 26, {from: coo});
await instance.breedWith(7, 32, {from: coo});
await instance.breedWith(13, 36, {from: coo});
await instance.breedWith(29, 34, {from: coo});
await instance.breedWith(40, 1, {from: coo});
await instance.breedWith(31, 5, {from: coo});
await instance.breedWith(3, 38, {from: coo});
await instance.breedWith(21, 30, {from: coo});
await instance.breedWith(24, 19, {from: coo});
await instance.breedWith(15, 10, {from: coo});
await instance.breedWith(8, 11, {from: coo});
await instance.breedWith(27, 23, {from: coo});
await instance.breedWith(4, 39, {from: coo});
await instance.breedWith(17, 20, {from: coo});
await instance.breedWith(22, 6, {from: coo});
await instance.breedWith(25, 16, {from: coo});
await instance.breedWith(12, 35, {from: coo});
await instance.breedWith(33, 2, {from: coo});
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
await instance.giveBirth(14);
await instance.giveBirth(37);
await instance.giveBirth(9);
await instance.giveBirth(7);
await instance.giveBirth(13);
await instance.giveBirth(29);
await instance.giveBirth(40);
await instance.giveBirth(31);
await instance.giveBirth(3);
await instance.giveBirth(21);
await instance.giveBirth(24);
await instance.giveBirth(15);
await instance.giveBirth(8);
await instance.giveBirth(27);
await instance.giveBirth(4);
await instance.giveBirth(17);
await instance.giveBirth(22);
await instance.giveBirth(25);
await instance.giveBirth(12);
await instance.giveBirth(33);
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
