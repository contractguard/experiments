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
await instance.createPromoKitty(422253405, coo, {from: coo,value: 0});
await instance.createPromoKitty(395425004, coo, {from: coo,value: 0});
await instance.createPromoKitty(260382873, coo, {from: coo,value: 0});
await instance.createPromoKitty(186504603, coo, {from: coo,value: 0});
await instance.createPromoKitty(309674644, coo, {from: coo,value: 0});
await instance.createPromoKitty(91400469, coo, {from: coo,value: 0});
await instance.createPromoKitty(343029281, coo, {from: coo,value: 0});
await instance.createPromoKitty(473224604, coo, {from: coo,value: 0});
await instance.createPromoKitty(752833477, coo, {from: coo,value: 0});
await instance.createPromoKitty(420410747, coo, {from: coo,value: 0});
await instance.createPromoKitty(293337655, coo, {from: coo,value: 0});
await instance.createPromoKitty(959850396, coo, {from: coo,value: 0});
await instance.createPromoKitty(48700403, coo, {from: coo,value: 0});
await instance.createPromoKitty(248754890, coo, {from: coo,value: 0});
await instance.createPromoKitty(765558514, coo, {from: coo,value: 0});
await instance.createPromoKitty(331263836, coo, {from: coo,value: 0});
await instance.createPromoKitty(113898942, coo, {from: coo,value: 0});
await instance.createPromoKitty(694073834, coo, {from: coo,value: 0});
await instance.createPromoKitty(704068391, coo, {from: coo,value: 0});
await instance.createPromoKitty(627402685, coo, {from: coo,value: 0});
await instance.createPromoKitty(302850594, coo, {from: coo,value: 0});
await instance.createPromoKitty(621140888, coo, {from: coo,value: 0});
await instance.createPromoKitty(370440407, coo, {from: coo,value: 0});
await instance.createPromoKitty(540372471, coo, {from: coo,value: 0});
await instance.createPromoKitty(812208668, coo, {from: coo,value: 0});
await instance.createPromoKitty(812952824, coo, {from: coo,value: 0});
await instance.createPromoKitty(288237892, coo, {from: coo,value: 0});
await instance.createPromoKitty(726582785, coo, {from: coo,value: 0});
await instance.createPromoKitty(683104571, coo, {from: coo,value: 0});
await instance.createPromoKitty(60854520, coo, {from: coo,value: 0});
await instance.createPromoKitty(611455255, coo, {from: coo,value: 0});
await instance.createPromoKitty(197561850, coo, {from: coo,value: 0});
await instance.createPromoKitty(583100957, coo, {from: coo,value: 0});
await instance.createPromoKitty(108750694, coo, {from: coo,value: 0});
await instance.createPromoKitty(103078393, coo, {from: coo,value: 0});
await instance.createPromoKitty(929876077, coo, {from: coo,value: 0});
await instance.createPromoKitty(741577805, coo, {from: coo,value: 0});
await instance.createPromoKitty(934259191, coo, {from: coo,value: 0});
await instance.createPromoKitty(486876722, coo, {from: coo,value: 0});
await instance.createPromoKitty(904915247, coo, {from: coo,value: 0});
await instance.createPromoKitty(576901083, coo, {from: coo,value: 0});
await instance.createPromoKitty(595288463, coo, {from: coo,value: 0});
await instance.createPromoKitty(548643871, coo, {from: coo,value: 0});
await instance.createPromoKitty(804395100, coo, {from: coo,value: 0});
await instance.createPromoKitty(732074735, coo, {from: coo,value: 0});
await instance.createPromoKitty(546882652, coo, {from: coo,value: 0});
await instance.createPromoKitty(979090601, coo, {from: coo,value: 0});
await instance.createPromoKitty(317016966, coo, {from: coo,value: 0});
await instance.createPromoKitty(685537157, coo, {from: coo,value: 0});
await instance.createPromoKitty(774002028, coo, {from: coo,value: 0});
await instance.createPromoKitty(916285844, coo, {from: coo,value: 0});
await instance.createPromoKitty(960065408, coo, {from: coo,value: 0});
await instance.createPromoKitty(114011285, coo, {from: coo,value: 0});
await instance.createPromoKitty(520304042, coo, {from: coo,value: 0});
await instance.createPromoKitty(233765547, coo, {from: coo,value: 0});
await instance.createPromoKitty(523681771, coo, {from: coo,value: 0});
await instance.createPromoKitty(305045858, coo, {from: coo,value: 0});
await instance.createPromoKitty(373361918, coo, {from: coo,value: 0});
await instance.createPromoKitty(658895023, coo, {from: coo,value: 0});
await instance.createPromoKitty(853003338, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(1, 20, {from: coo});
await instance.breedWith(31, 3, {from: coo});
await instance.breedWith(17, 29, {from: coo});
await instance.breedWith(15, 6, {from: coo});
await instance.breedWith(35, 37, {from: coo});
await instance.breedWith(23, 21, {from: coo});
await instance.breedWith(10, 38, {from: coo});
await instance.breedWith(26, 16, {from: coo});
await instance.breedWith(12, 30, {from: coo});
await instance.breedWith(33, 28, {from: coo});
await instance.breedWith(22, 13, {from: coo});
await instance.breedWith(5, 7, {from: coo});
await instance.breedWith(32, 9, {from: coo});
await instance.breedWith(4, 36, {from: coo});
await instance.breedWith(39, 11, {from: coo});
await instance.breedWith(14, 24, {from: coo});
await instance.breedWith(27, 18, {from: coo});
await instance.breedWith(25, 34, {from: coo});
await instance.breedWith(2, 40, {from: coo});
await instance.breedWith(19, 8, {from: coo});
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
await instance.giveBirth(1);
await instance.giveBirth(31);
await instance.giveBirth(17);
await instance.giveBirth(15);
await instance.giveBirth(35);
await instance.giveBirth(23);
await instance.giveBirth(10);
await instance.giveBirth(26);
await instance.giveBirth(12);
await instance.giveBirth(33);
await instance.giveBirth(22);
await instance.giveBirth(5);
await instance.giveBirth(32);
await instance.giveBirth(4);
await instance.giveBirth(39);
await instance.giveBirth(14);
await instance.giveBirth(27);
await instance.giveBirth(25);
await instance.giveBirth(2);
await instance.giveBirth(19);
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
