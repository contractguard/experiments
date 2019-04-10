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
await instance.createPromoKitty(724322132, coo, {from: coo,value: 0});
await instance.createPromoKitty(500206689, coo, {from: coo,value: 0});
await instance.createPromoKitty(508826276, coo, {from: coo,value: 0});
await instance.createPromoKitty(273544353, coo, {from: coo,value: 0});
await instance.createPromoKitty(262596652, coo, {from: coo,value: 0});
await instance.createPromoKitty(491550598, coo, {from: coo,value: 0});
await instance.createPromoKitty(386868842, coo, {from: coo,value: 0});
await instance.createPromoKitty(614243565, coo, {from: coo,value: 0});
await instance.createPromoKitty(475532659, coo, {from: coo,value: 0});
await instance.createPromoKitty(596001213, coo, {from: coo,value: 0});
await instance.createPromoKitty(63049523, coo, {from: coo,value: 0});
await instance.createPromoKitty(703130087, coo, {from: coo,value: 0});
await instance.createPromoKitty(804184385, coo, {from: coo,value: 0});
await instance.createPromoKitty(622320005, coo, {from: coo,value: 0});
await instance.createPromoKitty(622258689, coo, {from: coo,value: 0});
await instance.createPromoKitty(408218117, coo, {from: coo,value: 0});
await instance.createPromoKitty(481572938, coo, {from: coo,value: 0});
await instance.createPromoKitty(41986977, coo, {from: coo,value: 0});
await instance.createPromoKitty(772500158, coo, {from: coo,value: 0});
await instance.createPromoKitty(127998720, coo, {from: coo,value: 0});
await instance.createPromoKitty(603013246, coo, {from: coo,value: 0});
await instance.createPromoKitty(309564240, coo, {from: coo,value: 0});
await instance.createPromoKitty(586624826, coo, {from: coo,value: 0});
await instance.createPromoKitty(83864997, coo, {from: coo,value: 0});
await instance.createPromoKitty(966769290, coo, {from: coo,value: 0});
await instance.createPromoKitty(53639875, coo, {from: coo,value: 0});
await instance.createPromoKitty(691858211, coo, {from: coo,value: 0});
await instance.createPromoKitty(522967137, coo, {from: coo,value: 0});
await instance.createPromoKitty(592114046, coo, {from: coo,value: 0});
await instance.createPromoKitty(723694447, coo, {from: coo,value: 0});
await instance.createPromoKitty(783223434, coo, {from: coo,value: 0});
await instance.createPromoKitty(122399973, coo, {from: coo,value: 0});
await instance.createPromoKitty(949749722, coo, {from: coo,value: 0});
await instance.createPromoKitty(405916090, coo, {from: coo,value: 0});
await instance.createPromoKitty(622014281, coo, {from: coo,value: 0});
await instance.createPromoKitty(713335412, coo, {from: coo,value: 0});
await instance.createPromoKitty(59929424, coo, {from: coo,value: 0});
await instance.createPromoKitty(246076913, coo, {from: coo,value: 0});
await instance.createPromoKitty(997955707, coo, {from: coo,value: 0});
await instance.createPromoKitty(961687894, coo, {from: coo,value: 0});
await instance.createPromoKitty(37568163, coo, {from: coo,value: 0});
await instance.createPromoKitty(494092641, coo, {from: coo,value: 0});
await instance.createPromoKitty(269542940, coo, {from: coo,value: 0});
await instance.createPromoKitty(876540613, coo, {from: coo,value: 0});
await instance.createPromoKitty(761490553, coo, {from: coo,value: 0});
await instance.createPromoKitty(36763859, coo, {from: coo,value: 0});
await instance.createPromoKitty(129035039, coo, {from: coo,value: 0});
await instance.createPromoKitty(665063130, coo, {from: coo,value: 0});
await instance.createPromoKitty(330462067, coo, {from: coo,value: 0});
await instance.createPromoKitty(684409624, coo, {from: coo,value: 0});
await instance.createPromoKitty(69292306, coo, {from: coo,value: 0});
await instance.createPromoKitty(879809002, coo, {from: coo,value: 0});
await instance.createPromoKitty(287105602, coo, {from: coo,value: 0});
await instance.createPromoKitty(957193199, coo, {from: coo,value: 0});
await instance.createPromoKitty(993900019, coo, {from: coo,value: 0});
await instance.createPromoKitty(841795268, coo, {from: coo,value: 0});
await instance.createPromoKitty(774412347, coo, {from: coo,value: 0});
await instance.createPromoKitty(377940914, coo, {from: coo,value: 0});
await instance.createPromoKitty(704317257, coo, {from: coo,value: 0});
await instance.createPromoKitty(401716029, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(24, 18, {from: coo});
await instance.breedWith(39, 28, {from: coo});
await instance.breedWith(31, 40, {from: coo});
await instance.breedWith(9, 7, {from: coo});
await instance.breedWith(36, 29, {from: coo});
await instance.breedWith(23, 34, {from: coo});
await instance.breedWith(14, 13, {from: coo});
await instance.breedWith(5, 25, {from: coo});
await instance.breedWith(21, 12, {from: coo});
await instance.breedWith(35, 3, {from: coo});
await instance.breedWith(37, 27, {from: coo});
await instance.breedWith(17, 4, {from: coo});
await instance.breedWith(32, 16, {from: coo});
await instance.breedWith(1, 38, {from: coo});
await instance.breedWith(22, 6, {from: coo});
await instance.breedWith(20, 10, {from: coo});
await instance.breedWith(15, 8, {from: coo});
await instance.breedWith(33, 30, {from: coo});
await instance.breedWith(26, 2, {from: coo});
await instance.breedWith(11, 19, {from: coo});
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
await instance.giveBirth(24);
await instance.giveBirth(39);
await instance.giveBirth(31);
await instance.giveBirth(9);
await instance.giveBirth(36);
await instance.giveBirth(23);
await instance.giveBirth(14);
await instance.giveBirth(5);
await instance.giveBirth(21);
await instance.giveBirth(35);
await instance.giveBirth(37);
await instance.giveBirth(17);
await instance.giveBirth(32);
await instance.giveBirth(1);
await instance.giveBirth(22);
await instance.giveBirth(20);
await instance.giveBirth(15);
await instance.giveBirth(33);
await instance.giveBirth(26);
await instance.giveBirth(11);
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
