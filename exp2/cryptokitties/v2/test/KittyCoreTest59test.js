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
await instance.createPromoKitty(400336257, coo, {from: coo,value: 0});
await instance.createPromoKitty(819218660, coo, {from: coo,value: 0});
await instance.createPromoKitty(924095507, coo, {from: coo,value: 0});
await instance.createPromoKitty(581877395, coo, {from: coo,value: 0});
await instance.createPromoKitty(510880152, coo, {from: coo,value: 0});
await instance.createPromoKitty(424305069, coo, {from: coo,value: 0});
await instance.createPromoKitty(650763422, coo, {from: coo,value: 0});
await instance.createPromoKitty(364297376, coo, {from: coo,value: 0});
await instance.createPromoKitty(986185406, coo, {from: coo,value: 0});
await instance.createPromoKitty(732975293, coo, {from: coo,value: 0});
await instance.createPromoKitty(832628186, coo, {from: coo,value: 0});
await instance.createPromoKitty(739919514, coo, {from: coo,value: 0});
await instance.createPromoKitty(423808717, coo, {from: coo,value: 0});
await instance.createPromoKitty(739232966, coo, {from: coo,value: 0});
await instance.createPromoKitty(745628376, coo, {from: coo,value: 0});
await instance.createPromoKitty(696643182, coo, {from: coo,value: 0});
await instance.createPromoKitty(97689001, coo, {from: coo,value: 0});
await instance.createPromoKitty(805458065, coo, {from: coo,value: 0});
await instance.createPromoKitty(517511300, coo, {from: coo,value: 0});
await instance.createPromoKitty(562976052, coo, {from: coo,value: 0});
await instance.createPromoKitty(82849848, coo, {from: coo,value: 0});
await instance.createPromoKitty(813951103, coo, {from: coo,value: 0});
await instance.createPromoKitty(977658999, coo, {from: coo,value: 0});
await instance.createPromoKitty(15155034, coo, {from: coo,value: 0});
await instance.createPromoKitty(259735206, coo, {from: coo,value: 0});
await instance.createPromoKitty(163604577, coo, {from: coo,value: 0});
await instance.createPromoKitty(641960613, coo, {from: coo,value: 0});
await instance.createPromoKitty(480225071, coo, {from: coo,value: 0});
await instance.createPromoKitty(534465747, coo, {from: coo,value: 0});
await instance.createPromoKitty(684727299, coo, {from: coo,value: 0});
await instance.createPromoKitty(686026164, coo, {from: coo,value: 0});
await instance.createPromoKitty(393271745, coo, {from: coo,value: 0});
await instance.createPromoKitty(546288424, coo, {from: coo,value: 0});
await instance.createPromoKitty(772471679, coo, {from: coo,value: 0});
await instance.createPromoKitty(371910886, coo, {from: coo,value: 0});
await instance.createPromoKitty(913369999, coo, {from: coo,value: 0});
await instance.createPromoKitty(535374681, coo, {from: coo,value: 0});
await instance.createPromoKitty(639640999, coo, {from: coo,value: 0});
await instance.createPromoKitty(962428661, coo, {from: coo,value: 0});
await instance.createPromoKitty(464806559, coo, {from: coo,value: 0});
await instance.createPromoKitty(483933605, coo, {from: coo,value: 0});
await instance.createPromoKitty(648785768, coo, {from: coo,value: 0});
await instance.createPromoKitty(372650172, coo, {from: coo,value: 0});
await instance.createPromoKitty(305075238, coo, {from: coo,value: 0});
await instance.createPromoKitty(636715548, coo, {from: coo,value: 0});
await instance.createPromoKitty(963036950, coo, {from: coo,value: 0});
await instance.createPromoKitty(668927172, coo, {from: coo,value: 0});
await instance.createPromoKitty(356996653, coo, {from: coo,value: 0});
await instance.createPromoKitty(71039903, coo, {from: coo,value: 0});
await instance.createPromoKitty(148654486, coo, {from: coo,value: 0});
await instance.createPromoKitty(768355211, coo, {from: coo,value: 0});
await instance.createPromoKitty(243149195, coo, {from: coo,value: 0});
await instance.createPromoKitty(872609599, coo, {from: coo,value: 0});
await instance.createPromoKitty(387668652, coo, {from: coo,value: 0});
await instance.createPromoKitty(172681776, coo, {from: coo,value: 0});
await instance.createPromoKitty(741386548, coo, {from: coo,value: 0});
await instance.createPromoKitty(67243054, coo, {from: coo,value: 0});
await instance.createPromoKitty(156936372, coo, {from: coo,value: 0});
await instance.createPromoKitty(760715341, coo, {from: coo,value: 0});
await instance.createPromoKitty(525452449, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(9, 40, {from: coo});
await instance.breedWith(28, 34, {from: coo});
await instance.breedWith(25, 1, {from: coo});
await instance.breedWith(24, 2, {from: coo});
await instance.breedWith(11, 23, {from: coo});
await instance.breedWith(14, 22, {from: coo});
await instance.breedWith(17, 39, {from: coo});
await instance.breedWith(20, 12, {from: coo});
await instance.breedWith(10, 16, {from: coo});
await instance.breedWith(18, 36, {from: coo});
await instance.breedWith(5, 4, {from: coo});
await instance.breedWith(27, 19, {from: coo});
await instance.breedWith(21, 6, {from: coo});
await instance.breedWith(8, 35, {from: coo});
await instance.breedWith(32, 7, {from: coo});
await instance.breedWith(38, 30, {from: coo});
await instance.breedWith(13, 15, {from: coo});
await instance.breedWith(31, 29, {from: coo});
await instance.breedWith(37, 3, {from: coo});
await instance.breedWith(33, 26, {from: coo});
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
await instance.giveBirth(9);
await instance.giveBirth(28);
await instance.giveBirth(25);
await instance.giveBirth(24);
await instance.giveBirth(11);
await instance.giveBirth(14);
await instance.giveBirth(17);
await instance.giveBirth(20);
await instance.giveBirth(10);
await instance.giveBirth(18);
await instance.giveBirth(5);
await instance.giveBirth(27);
await instance.giveBirth(21);
await instance.giveBirth(8);
await instance.giveBirth(32);
await instance.giveBirth(38);
await instance.giveBirth(13);
await instance.giveBirth(31);
await instance.giveBirth(37);
await instance.giveBirth(33);
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
