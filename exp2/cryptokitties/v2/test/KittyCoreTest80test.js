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
await instance.createPromoKitty(103287431, coo, {from: coo,value: 0});
await instance.createPromoKitty(840566680, coo, {from: coo,value: 0});
await instance.createPromoKitty(828943384, coo, {from: coo,value: 0});
await instance.createPromoKitty(277340329, coo, {from: coo,value: 0});
await instance.createPromoKitty(461819757, coo, {from: coo,value: 0});
await instance.createPromoKitty(205599864, coo, {from: coo,value: 0});
await instance.createPromoKitty(6887741, coo, {from: coo,value: 0});
await instance.createPromoKitty(789074222, coo, {from: coo,value: 0});
await instance.createPromoKitty(814406336, coo, {from: coo,value: 0});
await instance.createPromoKitty(20206763, coo, {from: coo,value: 0});
await instance.createPromoKitty(354392405, coo, {from: coo,value: 0});
await instance.createPromoKitty(447176321, coo, {from: coo,value: 0});
await instance.createPromoKitty(570943158, coo, {from: coo,value: 0});
await instance.createPromoKitty(171831149, coo, {from: coo,value: 0});
await instance.createPromoKitty(381047092, coo, {from: coo,value: 0});
await instance.createPromoKitty(363455392, coo, {from: coo,value: 0});
await instance.createPromoKitty(787087819, coo, {from: coo,value: 0});
await instance.createPromoKitty(222906221, coo, {from: coo,value: 0});
await instance.createPromoKitty(396221605, coo, {from: coo,value: 0});
await instance.createPromoKitty(451375482, coo, {from: coo,value: 0});
await instance.createPromoKitty(350892859, coo, {from: coo,value: 0});
await instance.createPromoKitty(86186275, coo, {from: coo,value: 0});
await instance.createPromoKitty(302002920, coo, {from: coo,value: 0});
await instance.createPromoKitty(459561878, coo, {from: coo,value: 0});
await instance.createPromoKitty(810251206, coo, {from: coo,value: 0});
await instance.createPromoKitty(23980399, coo, {from: coo,value: 0});
await instance.createPromoKitty(948843592, coo, {from: coo,value: 0});
await instance.createPromoKitty(676846137, coo, {from: coo,value: 0});
await instance.createPromoKitty(966181004, coo, {from: coo,value: 0});
await instance.createPromoKitty(620547920, coo, {from: coo,value: 0});
await instance.createPromoKitty(558624818, coo, {from: coo,value: 0});
await instance.createPromoKitty(262660464, coo, {from: coo,value: 0});
await instance.createPromoKitty(339894286, coo, {from: coo,value: 0});
await instance.createPromoKitty(308054123, coo, {from: coo,value: 0});
await instance.createPromoKitty(644297675, coo, {from: coo,value: 0});
await instance.createPromoKitty(722236813, coo, {from: coo,value: 0});
await instance.createPromoKitty(953335938, coo, {from: coo,value: 0});
await instance.createPromoKitty(643799637, coo, {from: coo,value: 0});
await instance.createPromoKitty(609362632, coo, {from: coo,value: 0});
await instance.createPromoKitty(658126014, coo, {from: coo,value: 0});
await instance.createPromoKitty(965052028, coo, {from: coo,value: 0});
await instance.createPromoKitty(365999844, coo, {from: coo,value: 0});
await instance.createPromoKitty(613919263, coo, {from: coo,value: 0});
await instance.createPromoKitty(143934908, coo, {from: coo,value: 0});
await instance.createPromoKitty(239744653, coo, {from: coo,value: 0});
await instance.createPromoKitty(838865063, coo, {from: coo,value: 0});
await instance.createPromoKitty(346477296, coo, {from: coo,value: 0});
await instance.createPromoKitty(903603143, coo, {from: coo,value: 0});
await instance.createPromoKitty(259806857, coo, {from: coo,value: 0});
await instance.createPromoKitty(138694542, coo, {from: coo,value: 0});
await instance.createPromoKitty(179954458, coo, {from: coo,value: 0});
await instance.createPromoKitty(389989126, coo, {from: coo,value: 0});
await instance.createPromoKitty(840812451, coo, {from: coo,value: 0});
await instance.createPromoKitty(453169892, coo, {from: coo,value: 0});
await instance.createPromoKitty(52581081, coo, {from: coo,value: 0});
await instance.createPromoKitty(272666322, coo, {from: coo,value: 0});
await instance.createPromoKitty(530584252, coo, {from: coo,value: 0});
await instance.createPromoKitty(718380321, coo, {from: coo,value: 0});
await instance.createPromoKitty(618912632, coo, {from: coo,value: 0});
await instance.createPromoKitty(219499984, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(36, 30, {from: coo});
await instance.breedWith(20, 33, {from: coo});
await instance.breedWith(2, 1, {from: coo});
await instance.breedWith(13, 24, {from: coo});
await instance.breedWith(23, 9, {from: coo});
await instance.breedWith(19, 8, {from: coo});
await instance.breedWith(31, 40, {from: coo});
await instance.breedWith(21, 6, {from: coo});
await instance.breedWith(18, 14, {from: coo});
await instance.breedWith(5, 3, {from: coo});
await instance.breedWith(35, 11, {from: coo});
await instance.breedWith(15, 28, {from: coo});
await instance.breedWith(37, 17, {from: coo});
await instance.breedWith(16, 7, {from: coo});
await instance.breedWith(38, 29, {from: coo});
await instance.breedWith(10, 4, {from: coo});
await instance.breedWith(32, 34, {from: coo});
await instance.breedWith(27, 12, {from: coo});
await instance.breedWith(25, 39, {from: coo});
await instance.breedWith(26, 22, {from: coo});
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
await instance.giveBirth(36);
await instance.giveBirth(20);
await instance.giveBirth(2);
await instance.giveBirth(13);
await instance.giveBirth(23);
await instance.giveBirth(19);
await instance.giveBirth(31);
await instance.giveBirth(21);
await instance.giveBirth(18);
await instance.giveBirth(5);
await instance.giveBirth(35);
await instance.giveBirth(15);
await instance.giveBirth(37);
await instance.giveBirth(16);
await instance.giveBirth(38);
await instance.giveBirth(10);
await instance.giveBirth(32);
await instance.giveBirth(27);
await instance.giveBirth(25);
await instance.giveBirth(26);
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
