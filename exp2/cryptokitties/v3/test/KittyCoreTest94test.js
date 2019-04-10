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
await instance.createPromoKitty(182031428, coo, {from: coo,value: 0});
await instance.createPromoKitty(432733492, coo, {from: coo,value: 0});
await instance.createPromoKitty(945243110, coo, {from: coo,value: 0});
await instance.createPromoKitty(130051600, coo, {from: coo,value: 0});
await instance.createPromoKitty(636788558, coo, {from: coo,value: 0});
await instance.createPromoKitty(29228215, coo, {from: coo,value: 0});
await instance.createPromoKitty(400667609, coo, {from: coo,value: 0});
await instance.createPromoKitty(664612539, coo, {from: coo,value: 0});
await instance.createPromoKitty(603547157, coo, {from: coo,value: 0});
await instance.createPromoKitty(822132412, coo, {from: coo,value: 0});
await instance.createPromoKitty(910237849, coo, {from: coo,value: 0});
await instance.createPromoKitty(323010195, coo, {from: coo,value: 0});
await instance.createPromoKitty(917318655, coo, {from: coo,value: 0});
await instance.createPromoKitty(655725545, coo, {from: coo,value: 0});
await instance.createPromoKitty(669443703, coo, {from: coo,value: 0});
await instance.createPromoKitty(11064299, coo, {from: coo,value: 0});
await instance.createPromoKitty(697942668, coo, {from: coo,value: 0});
await instance.createPromoKitty(959949838, coo, {from: coo,value: 0});
await instance.createPromoKitty(210959765, coo, {from: coo,value: 0});
await instance.createPromoKitty(406832919, coo, {from: coo,value: 0});
await instance.createPromoKitty(588273984, coo, {from: coo,value: 0});
await instance.createPromoKitty(548433002, coo, {from: coo,value: 0});
await instance.createPromoKitty(14380316, coo, {from: coo,value: 0});
await instance.createPromoKitty(445524298, coo, {from: coo,value: 0});
await instance.createPromoKitty(805743150, coo, {from: coo,value: 0});
await instance.createPromoKitty(508517051, coo, {from: coo,value: 0});
await instance.createPromoKitty(950632762, coo, {from: coo,value: 0});
await instance.createPromoKitty(136687003, coo, {from: coo,value: 0});
await instance.createPromoKitty(16281057, coo, {from: coo,value: 0});
await instance.createPromoKitty(356361115, coo, {from: coo,value: 0});
await instance.createPromoKitty(616371316, coo, {from: coo,value: 0});
await instance.createPromoKitty(637602868, coo, {from: coo,value: 0});
await instance.createPromoKitty(684068537, coo, {from: coo,value: 0});
await instance.createPromoKitty(616479886, coo, {from: coo,value: 0});
await instance.createPromoKitty(539827922, coo, {from: coo,value: 0});
await instance.createPromoKitty(131269454, coo, {from: coo,value: 0});
await instance.createPromoKitty(3209253, coo, {from: coo,value: 0});
await instance.createPromoKitty(619717636, coo, {from: coo,value: 0});
await instance.createPromoKitty(187245581, coo, {from: coo,value: 0});
await instance.createPromoKitty(240462179, coo, {from: coo,value: 0});
await instance.createPromoKitty(447913364, coo, {from: coo,value: 0});
await instance.createPromoKitty(200637703, coo, {from: coo,value: 0});
await instance.createPromoKitty(417198564, coo, {from: coo,value: 0});
await instance.createPromoKitty(393288481, coo, {from: coo,value: 0});
await instance.createPromoKitty(717180169, coo, {from: coo,value: 0});
await instance.createPromoKitty(577864317, coo, {from: coo,value: 0});
await instance.createPromoKitty(838330679, coo, {from: coo,value: 0});
await instance.createPromoKitty(633581476, coo, {from: coo,value: 0});
await instance.createPromoKitty(748751827, coo, {from: coo,value: 0});
await instance.createPromoKitty(858730912, coo, {from: coo,value: 0});
await instance.createPromoKitty(611198748, coo, {from: coo,value: 0});
await instance.createPromoKitty(937507205, coo, {from: coo,value: 0});
await instance.createPromoKitty(879454535, coo, {from: coo,value: 0});
await instance.createPromoKitty(98350135, coo, {from: coo,value: 0});
await instance.createPromoKitty(829771533, coo, {from: coo,value: 0});
await instance.createPromoKitty(297789190, coo, {from: coo,value: 0});
await instance.createPromoKitty(732857736, coo, {from: coo,value: 0});
await instance.createPromoKitty(585380286, coo, {from: coo,value: 0});
await instance.createPromoKitty(783498551, coo, {from: coo,value: 0});
await instance.createPromoKitty(405360994, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(20, 15, {from: coo});
await instance.breedWith(12, 14, {from: coo});
await instance.breedWith(8, 26, {from: coo});
await instance.breedWith(5, 30, {from: coo});
await instance.breedWith(7, 11, {from: coo});
await instance.breedWith(28, 13, {from: coo});
await instance.breedWith(34, 6, {from: coo});
await instance.breedWith(40, 31, {from: coo});
await instance.breedWith(10, 38, {from: coo});
await instance.breedWith(32, 2, {from: coo});
await instance.breedWith(19, 1, {from: coo});
await instance.breedWith(29, 4, {from: coo});
await instance.breedWith(21, 33, {from: coo});
await instance.breedWith(39, 9, {from: coo});
await instance.breedWith(36, 22, {from: coo});
await instance.breedWith(25, 24, {from: coo});
await instance.breedWith(35, 17, {from: coo});
await instance.breedWith(3, 16, {from: coo});
await instance.breedWith(27, 18, {from: coo});
await instance.breedWith(23, 37, {from: coo});
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
await instance.giveBirth(20);
await instance.giveBirth(12);
await instance.giveBirth(8);
await instance.giveBirth(5);
await instance.giveBirth(7);
await instance.giveBirth(28);
await instance.giveBirth(34);
await instance.giveBirth(40);
await instance.giveBirth(10);
await instance.giveBirth(32);
await instance.giveBirth(19);
await instance.giveBirth(29);
await instance.giveBirth(21);
await instance.giveBirth(39);
await instance.giveBirth(36);
await instance.giveBirth(25);
await instance.giveBirth(35);
await instance.giveBirth(3);
await instance.giveBirth(27);
await instance.giveBirth(23);
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
