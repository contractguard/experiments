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
await instance.createPromoKitty(959037820, coo, {from: coo,value: 0});
await instance.createPromoKitty(565212691, coo, {from: coo,value: 0});
await instance.createPromoKitty(174622497, coo, {from: coo,value: 0});
await instance.createPromoKitty(660920951, coo, {from: coo,value: 0});
await instance.createPromoKitty(453888104, coo, {from: coo,value: 0});
await instance.createPromoKitty(786250665, coo, {from: coo,value: 0});
await instance.createPromoKitty(47959029, coo, {from: coo,value: 0});
await instance.createPromoKitty(602083087, coo, {from: coo,value: 0});
await instance.createPromoKitty(206668820, coo, {from: coo,value: 0});
await instance.createPromoKitty(552085649, coo, {from: coo,value: 0});
await instance.createPromoKitty(349422751, coo, {from: coo,value: 0});
await instance.createPromoKitty(77773804, coo, {from: coo,value: 0});
await instance.createPromoKitty(77232050, coo, {from: coo,value: 0});
await instance.createPromoKitty(201500302, coo, {from: coo,value: 0});
await instance.createPromoKitty(750180613, coo, {from: coo,value: 0});
await instance.createPromoKitty(395696709, coo, {from: coo,value: 0});
await instance.createPromoKitty(461187121, coo, {from: coo,value: 0});
await instance.createPromoKitty(934201664, coo, {from: coo,value: 0});
await instance.createPromoKitty(932996127, coo, {from: coo,value: 0});
await instance.createPromoKitty(725543768, coo, {from: coo,value: 0});
await instance.createPromoKitty(342973293, coo, {from: coo,value: 0});
await instance.createPromoKitty(74902326, coo, {from: coo,value: 0});
await instance.createPromoKitty(801335190, coo, {from: coo,value: 0});
await instance.createPromoKitty(399728526, coo, {from: coo,value: 0});
await instance.createPromoKitty(61347151, coo, {from: coo,value: 0});
await instance.createPromoKitty(538604462, coo, {from: coo,value: 0});
await instance.createPromoKitty(255472581, coo, {from: coo,value: 0});
await instance.createPromoKitty(130330542, coo, {from: coo,value: 0});
await instance.createPromoKitty(411536809, coo, {from: coo,value: 0});
await instance.createPromoKitty(436824634, coo, {from: coo,value: 0});
await instance.createPromoKitty(624625163, coo, {from: coo,value: 0});
await instance.createPromoKitty(157403991, coo, {from: coo,value: 0});
await instance.createPromoKitty(974781948, coo, {from: coo,value: 0});
await instance.createPromoKitty(48841272, coo, {from: coo,value: 0});
await instance.createPromoKitty(532270165, coo, {from: coo,value: 0});
await instance.createPromoKitty(728428737, coo, {from: coo,value: 0});
await instance.createPromoKitty(948976372, coo, {from: coo,value: 0});
await instance.createPromoKitty(881935946, coo, {from: coo,value: 0});
await instance.createPromoKitty(692612796, coo, {from: coo,value: 0});
await instance.createPromoKitty(668892903, coo, {from: coo,value: 0});
await instance.createPromoKitty(438012846, coo, {from: coo,value: 0});
await instance.createPromoKitty(805313870, coo, {from: coo,value: 0});
await instance.createPromoKitty(197553462, coo, {from: coo,value: 0});
await instance.createPromoKitty(508850665, coo, {from: coo,value: 0});
await instance.createPromoKitty(553404495, coo, {from: coo,value: 0});
await instance.createPromoKitty(399817287, coo, {from: coo,value: 0});
await instance.createPromoKitty(787479515, coo, {from: coo,value: 0});
await instance.createPromoKitty(504123942, coo, {from: coo,value: 0});
await instance.createPromoKitty(609301028, coo, {from: coo,value: 0});
await instance.createPromoKitty(526277085, coo, {from: coo,value: 0});
await instance.createPromoKitty(400864527, coo, {from: coo,value: 0});
await instance.createPromoKitty(782077843, coo, {from: coo,value: 0});
await instance.createPromoKitty(374083323, coo, {from: coo,value: 0});
await instance.createPromoKitty(963918466, coo, {from: coo,value: 0});
await instance.createPromoKitty(648773768, coo, {from: coo,value: 0});
await instance.createPromoKitty(988942392, coo, {from: coo,value: 0});
await instance.createPromoKitty(321676305, coo, {from: coo,value: 0});
await instance.createPromoKitty(64662562, coo, {from: coo,value: 0});
await instance.createPromoKitty(509438153, coo, {from: coo,value: 0});
await instance.createPromoKitty(177826293, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(15, 17, {from: coo});
await instance.breedWith(21, 7, {from: coo});
await instance.breedWith(39, 19, {from: coo});
await instance.breedWith(8, 3, {from: coo});
await instance.breedWith(14, 36, {from: coo});
await instance.breedWith(33, 4, {from: coo});
await instance.breedWith(26, 2, {from: coo});
await instance.breedWith(6, 29, {from: coo});
await instance.breedWith(12, 34, {from: coo});
await instance.breedWith(30, 37, {from: coo});
await instance.breedWith(35, 38, {from: coo});
await instance.breedWith(20, 18, {from: coo});
await instance.breedWith(1, 40, {from: coo});
await instance.breedWith(9, 31, {from: coo});
await instance.breedWith(25, 24, {from: coo});
await instance.breedWith(32, 5, {from: coo});
await instance.breedWith(11, 10, {from: coo});
await instance.breedWith(23, 16, {from: coo});
await instance.breedWith(28, 27, {from: coo});
await instance.breedWith(22, 13, {from: coo});
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
await instance.giveBirth(15);
await instance.giveBirth(21);
await instance.giveBirth(39);
await instance.giveBirth(8);
await instance.giveBirth(14);
await instance.giveBirth(33);
await instance.giveBirth(26);
await instance.giveBirth(6);
await instance.giveBirth(12);
await instance.giveBirth(30);
await instance.giveBirth(35);
await instance.giveBirth(20);
await instance.giveBirth(1);
await instance.giveBirth(9);
await instance.giveBirth(25);
await instance.giveBirth(32);
await instance.giveBirth(11);
await instance.giveBirth(23);
await instance.giveBirth(28);
await instance.giveBirth(22);
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
