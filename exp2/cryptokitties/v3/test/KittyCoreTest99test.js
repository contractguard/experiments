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
await instance.createPromoKitty(670679957, coo, {from: coo,value: 0});
await instance.createPromoKitty(844733490, coo, {from: coo,value: 0});
await instance.createPromoKitty(593606446, coo, {from: coo,value: 0});
await instance.createPromoKitty(939184808, coo, {from: coo,value: 0});
await instance.createPromoKitty(856677961, coo, {from: coo,value: 0});
await instance.createPromoKitty(709987913, coo, {from: coo,value: 0});
await instance.createPromoKitty(595575608, coo, {from: coo,value: 0});
await instance.createPromoKitty(161138995, coo, {from: coo,value: 0});
await instance.createPromoKitty(777744250, coo, {from: coo,value: 0});
await instance.createPromoKitty(210241801, coo, {from: coo,value: 0});
await instance.createPromoKitty(545964664, coo, {from: coo,value: 0});
await instance.createPromoKitty(386635925, coo, {from: coo,value: 0});
await instance.createPromoKitty(314810998, coo, {from: coo,value: 0});
await instance.createPromoKitty(290037637, coo, {from: coo,value: 0});
await instance.createPromoKitty(7891785, coo, {from: coo,value: 0});
await instance.createPromoKitty(914017596, coo, {from: coo,value: 0});
await instance.createPromoKitty(94203809, coo, {from: coo,value: 0});
await instance.createPromoKitty(697288326, coo, {from: coo,value: 0});
await instance.createPromoKitty(346530730, coo, {from: coo,value: 0});
await instance.createPromoKitty(410113912, coo, {from: coo,value: 0});
await instance.createPromoKitty(786526805, coo, {from: coo,value: 0});
await instance.createPromoKitty(928275553, coo, {from: coo,value: 0});
await instance.createPromoKitty(186056536, coo, {from: coo,value: 0});
await instance.createPromoKitty(501199425, coo, {from: coo,value: 0});
await instance.createPromoKitty(163636815, coo, {from: coo,value: 0});
await instance.createPromoKitty(933777330, coo, {from: coo,value: 0});
await instance.createPromoKitty(474768093, coo, {from: coo,value: 0});
await instance.createPromoKitty(118739056, coo, {from: coo,value: 0});
await instance.createPromoKitty(31410654, coo, {from: coo,value: 0});
await instance.createPromoKitty(564776986, coo, {from: coo,value: 0});
await instance.createPromoKitty(680749691, coo, {from: coo,value: 0});
await instance.createPromoKitty(826562724, coo, {from: coo,value: 0});
await instance.createPromoKitty(356760130, coo, {from: coo,value: 0});
await instance.createPromoKitty(400382387, coo, {from: coo,value: 0});
await instance.createPromoKitty(877732930, coo, {from: coo,value: 0});
await instance.createPromoKitty(788230600, coo, {from: coo,value: 0});
await instance.createPromoKitty(805534458, coo, {from: coo,value: 0});
await instance.createPromoKitty(580748108, coo, {from: coo,value: 0});
await instance.createPromoKitty(969812557, coo, {from: coo,value: 0});
await instance.createPromoKitty(649549025, coo, {from: coo,value: 0});
await instance.createPromoKitty(799361591, coo, {from: coo,value: 0});
await instance.createPromoKitty(534521186, coo, {from: coo,value: 0});
await instance.createPromoKitty(38195017, coo, {from: coo,value: 0});
await instance.createPromoKitty(856387042, coo, {from: coo,value: 0});
await instance.createPromoKitty(659707271, coo, {from: coo,value: 0});
await instance.createPromoKitty(790204308, coo, {from: coo,value: 0});
await instance.createPromoKitty(909745793, coo, {from: coo,value: 0});
await instance.createPromoKitty(2851173, coo, {from: coo,value: 0});
await instance.createPromoKitty(290483982, coo, {from: coo,value: 0});
await instance.createPromoKitty(683305815, coo, {from: coo,value: 0});
await instance.createPromoKitty(35388120, coo, {from: coo,value: 0});
await instance.createPromoKitty(117149276, coo, {from: coo,value: 0});
await instance.createPromoKitty(69779859, coo, {from: coo,value: 0});
await instance.createPromoKitty(720567845, coo, {from: coo,value: 0});
await instance.createPromoKitty(289903000, coo, {from: coo,value: 0});
await instance.createPromoKitty(450640795, coo, {from: coo,value: 0});
await instance.createPromoKitty(513728635, coo, {from: coo,value: 0});
await instance.createPromoKitty(157689951, coo, {from: coo,value: 0});
await instance.createPromoKitty(272390774, coo, {from: coo,value: 0});
await instance.createPromoKitty(889039452, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(28, 24, {from: coo});
await instance.breedWith(16, 5, {from: coo});
await instance.breedWith(7, 17, {from: coo});
await instance.breedWith(36, 6, {from: coo});
await instance.breedWith(4, 35, {from: coo});
await instance.breedWith(40, 29, {from: coo});
await instance.breedWith(37, 33, {from: coo});
await instance.breedWith(14, 27, {from: coo});
await instance.breedWith(8, 9, {from: coo});
await instance.breedWith(30, 11, {from: coo});
await instance.breedWith(10, 22, {from: coo});
await instance.breedWith(38, 15, {from: coo});
await instance.breedWith(12, 3, {from: coo});
await instance.breedWith(20, 34, {from: coo});
await instance.breedWith(13, 31, {from: coo});
await instance.breedWith(25, 1, {from: coo});
await instance.breedWith(23, 32, {from: coo});
await instance.breedWith(26, 21, {from: coo});
await instance.breedWith(19, 2, {from: coo});
await instance.breedWith(39, 18, {from: coo});
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
await instance.giveBirth(28);
await instance.giveBirth(16);
await instance.giveBirth(7);
await instance.giveBirth(36);
await instance.giveBirth(4);
await instance.giveBirth(40);
await instance.giveBirth(37);
await instance.giveBirth(14);
await instance.giveBirth(8);
await instance.giveBirth(30);
await instance.giveBirth(10);
await instance.giveBirth(38);
await instance.giveBirth(12);
await instance.giveBirth(20);
await instance.giveBirth(13);
await instance.giveBirth(25);
await instance.giveBirth(23);
await instance.giveBirth(26);
await instance.giveBirth(19);
await instance.giveBirth(39);
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
