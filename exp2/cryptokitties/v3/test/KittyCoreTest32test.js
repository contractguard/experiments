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
await instance.createPromoKitty(620427446, coo, {from: coo,value: 0});
await instance.createPromoKitty(821850157, coo, {from: coo,value: 0});
await instance.createPromoKitty(564976895, coo, {from: coo,value: 0});
await instance.createPromoKitty(334271507, coo, {from: coo,value: 0});
await instance.createPromoKitty(458316403, coo, {from: coo,value: 0});
await instance.createPromoKitty(466484664, coo, {from: coo,value: 0});
await instance.createPromoKitty(361278910, coo, {from: coo,value: 0});
await instance.createPromoKitty(582600025, coo, {from: coo,value: 0});
await instance.createPromoKitty(854294747, coo, {from: coo,value: 0});
await instance.createPromoKitty(476884574, coo, {from: coo,value: 0});
await instance.createPromoKitty(924035776, coo, {from: coo,value: 0});
await instance.createPromoKitty(774292234, coo, {from: coo,value: 0});
await instance.createPromoKitty(473285204, coo, {from: coo,value: 0});
await instance.createPromoKitty(327799986, coo, {from: coo,value: 0});
await instance.createPromoKitty(48531932, coo, {from: coo,value: 0});
await instance.createPromoKitty(856316676, coo, {from: coo,value: 0});
await instance.createPromoKitty(185493372, coo, {from: coo,value: 0});
await instance.createPromoKitty(771209359, coo, {from: coo,value: 0});
await instance.createPromoKitty(752711663, coo, {from: coo,value: 0});
await instance.createPromoKitty(559176655, coo, {from: coo,value: 0});
await instance.createPromoKitty(226301613, coo, {from: coo,value: 0});
await instance.createPromoKitty(350353887, coo, {from: coo,value: 0});
await instance.createPromoKitty(684553741, coo, {from: coo,value: 0});
await instance.createPromoKitty(536288704, coo, {from: coo,value: 0});
await instance.createPromoKitty(13227449, coo, {from: coo,value: 0});
await instance.createPromoKitty(686446910, coo, {from: coo,value: 0});
await instance.createPromoKitty(771542852, coo, {from: coo,value: 0});
await instance.createPromoKitty(489212418, coo, {from: coo,value: 0});
await instance.createPromoKitty(262879298, coo, {from: coo,value: 0});
await instance.createPromoKitty(690153369, coo, {from: coo,value: 0});
await instance.createPromoKitty(902763050, coo, {from: coo,value: 0});
await instance.createPromoKitty(629529120, coo, {from: coo,value: 0});
await instance.createPromoKitty(117602793, coo, {from: coo,value: 0});
await instance.createPromoKitty(605304968, coo, {from: coo,value: 0});
await instance.createPromoKitty(474629061, coo, {from: coo,value: 0});
await instance.createPromoKitty(476572854, coo, {from: coo,value: 0});
await instance.createPromoKitty(146763150, coo, {from: coo,value: 0});
await instance.createPromoKitty(797516960, coo, {from: coo,value: 0});
await instance.createPromoKitty(448089102, coo, {from: coo,value: 0});
await instance.createPromoKitty(688839407, coo, {from: coo,value: 0});
await instance.createPromoKitty(696715090, coo, {from: coo,value: 0});
await instance.createPromoKitty(462627952, coo, {from: coo,value: 0});
await instance.createPromoKitty(459750613, coo, {from: coo,value: 0});
await instance.createPromoKitty(463607220, coo, {from: coo,value: 0});
await instance.createPromoKitty(695013170, coo, {from: coo,value: 0});
await instance.createPromoKitty(443659147, coo, {from: coo,value: 0});
await instance.createPromoKitty(329602580, coo, {from: coo,value: 0});
await instance.createPromoKitty(397016504, coo, {from: coo,value: 0});
await instance.createPromoKitty(763179459, coo, {from: coo,value: 0});
await instance.createPromoKitty(773890598, coo, {from: coo,value: 0});
await instance.createPromoKitty(950686812, coo, {from: coo,value: 0});
await instance.createPromoKitty(916770511, coo, {from: coo,value: 0});
await instance.createPromoKitty(902065492, coo, {from: coo,value: 0});
await instance.createPromoKitty(186463211, coo, {from: coo,value: 0});
await instance.createPromoKitty(377147269, coo, {from: coo,value: 0});
await instance.createPromoKitty(12811144, coo, {from: coo,value: 0});
await instance.createPromoKitty(423846797, coo, {from: coo,value: 0});
await instance.createPromoKitty(104969012, coo, {from: coo,value: 0});
await instance.createPromoKitty(741529438, coo, {from: coo,value: 0});
await instance.createPromoKitty(51523334, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(36, 2, {from: coo});
await instance.breedWith(29, 15, {from: coo});
await instance.breedWith(35, 6, {from: coo});
await instance.breedWith(16, 20, {from: coo});
await instance.breedWith(26, 14, {from: coo});
await instance.breedWith(23, 38, {from: coo});
await instance.breedWith(33, 5, {from: coo});
await instance.breedWith(40, 3, {from: coo});
await instance.breedWith(19, 37, {from: coo});
await instance.breedWith(12, 18, {from: coo});
await instance.breedWith(13, 8, {from: coo});
await instance.breedWith(10, 17, {from: coo});
await instance.breedWith(25, 39, {from: coo});
await instance.breedWith(27, 4, {from: coo});
await instance.breedWith(7, 30, {from: coo});
await instance.breedWith(24, 28, {from: coo});
await instance.breedWith(9, 21, {from: coo});
await instance.breedWith(32, 11, {from: coo});
await instance.breedWith(1, 31, {from: coo});
await instance.breedWith(22, 34, {from: coo});
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
await instance.giveBirth(36);
await instance.giveBirth(29);
await instance.giveBirth(35);
await instance.giveBirth(16);
await instance.giveBirth(26);
await instance.giveBirth(23);
await instance.giveBirth(33);
await instance.giveBirth(40);
await instance.giveBirth(19);
await instance.giveBirth(12);
await instance.giveBirth(13);
await instance.giveBirth(10);
await instance.giveBirth(25);
await instance.giveBirth(27);
await instance.giveBirth(7);
await instance.giveBirth(24);
await instance.giveBirth(9);
await instance.giveBirth(32);
await instance.giveBirth(1);
await instance.giveBirth(22);
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
