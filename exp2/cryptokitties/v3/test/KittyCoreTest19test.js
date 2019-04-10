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
await instance.createPromoKitty(796363230, coo, {from: coo,value: 0});
await instance.createPromoKitty(581048430, coo, {from: coo,value: 0});
await instance.createPromoKitty(497759605, coo, {from: coo,value: 0});
await instance.createPromoKitty(803305709, coo, {from: coo,value: 0});
await instance.createPromoKitty(271462749, coo, {from: coo,value: 0});
await instance.createPromoKitty(307483775, coo, {from: coo,value: 0});
await instance.createPromoKitty(302583302, coo, {from: coo,value: 0});
await instance.createPromoKitty(296117997, coo, {from: coo,value: 0});
await instance.createPromoKitty(787522622, coo, {from: coo,value: 0});
await instance.createPromoKitty(282251583, coo, {from: coo,value: 0});
await instance.createPromoKitty(212226884, coo, {from: coo,value: 0});
await instance.createPromoKitty(602014174, coo, {from: coo,value: 0});
await instance.createPromoKitty(859719221, coo, {from: coo,value: 0});
await instance.createPromoKitty(942082135, coo, {from: coo,value: 0});
await instance.createPromoKitty(847465720, coo, {from: coo,value: 0});
await instance.createPromoKitty(11379854, coo, {from: coo,value: 0});
await instance.createPromoKitty(449032030, coo, {from: coo,value: 0});
await instance.createPromoKitty(540753701, coo, {from: coo,value: 0});
await instance.createPromoKitty(788124641, coo, {from: coo,value: 0});
await instance.createPromoKitty(880889491, coo, {from: coo,value: 0});
await instance.createPromoKitty(834794162, coo, {from: coo,value: 0});
await instance.createPromoKitty(279090990, coo, {from: coo,value: 0});
await instance.createPromoKitty(887950317, coo, {from: coo,value: 0});
await instance.createPromoKitty(99806582, coo, {from: coo,value: 0});
await instance.createPromoKitty(615262268, coo, {from: coo,value: 0});
await instance.createPromoKitty(389944814, coo, {from: coo,value: 0});
await instance.createPromoKitty(393272945, coo, {from: coo,value: 0});
await instance.createPromoKitty(173395366, coo, {from: coo,value: 0});
await instance.createPromoKitty(315143550, coo, {from: coo,value: 0});
await instance.createPromoKitty(439663393, coo, {from: coo,value: 0});
await instance.createPromoKitty(284216469, coo, {from: coo,value: 0});
await instance.createPromoKitty(195927107, coo, {from: coo,value: 0});
await instance.createPromoKitty(182336004, coo, {from: coo,value: 0});
await instance.createPromoKitty(662278353, coo, {from: coo,value: 0});
await instance.createPromoKitty(870831134, coo, {from: coo,value: 0});
await instance.createPromoKitty(753662736, coo, {from: coo,value: 0});
await instance.createPromoKitty(381840816, coo, {from: coo,value: 0});
await instance.createPromoKitty(469032428, coo, {from: coo,value: 0});
await instance.createPromoKitty(266102433, coo, {from: coo,value: 0});
await instance.createPromoKitty(5179465, coo, {from: coo,value: 0});
await instance.createPromoKitty(592566269, coo, {from: coo,value: 0});
await instance.createPromoKitty(691580643, coo, {from: coo,value: 0});
await instance.createPromoKitty(758595978, coo, {from: coo,value: 0});
await instance.createPromoKitty(689341206, coo, {from: coo,value: 0});
await instance.createPromoKitty(635903580, coo, {from: coo,value: 0});
await instance.createPromoKitty(606080666, coo, {from: coo,value: 0});
await instance.createPromoKitty(777814807, coo, {from: coo,value: 0});
await instance.createPromoKitty(443821820, coo, {from: coo,value: 0});
await instance.createPromoKitty(852196603, coo, {from: coo,value: 0});
await instance.createPromoKitty(651784388, coo, {from: coo,value: 0});
await instance.createPromoKitty(876913514, coo, {from: coo,value: 0});
await instance.createPromoKitty(34172106, coo, {from: coo,value: 0});
await instance.createPromoKitty(585371583, coo, {from: coo,value: 0});
await instance.createPromoKitty(24496843, coo, {from: coo,value: 0});
await instance.createPromoKitty(257749038, coo, {from: coo,value: 0});
await instance.createPromoKitty(87267905, coo, {from: coo,value: 0});
await instance.createPromoKitty(150576772, coo, {from: coo,value: 0});
await instance.createPromoKitty(150784689, coo, {from: coo,value: 0});
await instance.createPromoKitty(538444809, coo, {from: coo,value: 0});
await instance.createPromoKitty(231806086, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(39, 20, {from: coo});
await instance.breedWith(40, 32, {from: coo});
await instance.breedWith(15, 18, {from: coo});
await instance.breedWith(36, 22, {from: coo});
await instance.breedWith(33, 24, {from: coo});
await instance.breedWith(28, 26, {from: coo});
await instance.breedWith(13, 29, {from: coo});
await instance.breedWith(6, 3, {from: coo});
await instance.breedWith(1, 30, {from: coo});
await instance.breedWith(21, 12, {from: coo});
await instance.breedWith(10, 38, {from: coo});
await instance.breedWith(4, 23, {from: coo});
await instance.breedWith(8, 5, {from: coo});
await instance.breedWith(35, 19, {from: coo});
await instance.breedWith(27, 7, {from: coo});
await instance.breedWith(34, 37, {from: coo});
await instance.breedWith(25, 9, {from: coo});
await instance.breedWith(17, 2, {from: coo});
await instance.breedWith(16, 11, {from: coo});
await instance.breedWith(31, 14, {from: coo});
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
await instance.giveBirth(15);
await instance.giveBirth(36);
await instance.giveBirth(33);
await instance.giveBirth(28);
await instance.giveBirth(13);
await instance.giveBirth(6);
await instance.giveBirth(1);
await instance.giveBirth(21);
await instance.giveBirth(10);
await instance.giveBirth(4);
await instance.giveBirth(8);
await instance.giveBirth(35);
await instance.giveBirth(27);
await instance.giveBirth(34);
await instance.giveBirth(25);
await instance.giveBirth(17);
await instance.giveBirth(16);
await instance.giveBirth(31);
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
