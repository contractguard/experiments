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
await instance.createPromoKitty(984474648, coo, {from: coo,value: 0});
await instance.createPromoKitty(259443435, coo, {from: coo,value: 0});
await instance.createPromoKitty(61736445, coo, {from: coo,value: 0});
await instance.createPromoKitty(699593051, coo, {from: coo,value: 0});
await instance.createPromoKitty(474910766, coo, {from: coo,value: 0});
await instance.createPromoKitty(752273648, coo, {from: coo,value: 0});
await instance.createPromoKitty(271496060, coo, {from: coo,value: 0});
await instance.createPromoKitty(472850834, coo, {from: coo,value: 0});
await instance.createPromoKitty(525184330, coo, {from: coo,value: 0});
await instance.createPromoKitty(27963046, coo, {from: coo,value: 0});
await instance.createPromoKitty(146817712, coo, {from: coo,value: 0});
await instance.createPromoKitty(972090883, coo, {from: coo,value: 0});
await instance.createPromoKitty(862034503, coo, {from: coo,value: 0});
await instance.createPromoKitty(652099210, coo, {from: coo,value: 0});
await instance.createPromoKitty(228023302, coo, {from: coo,value: 0});
await instance.createPromoKitty(857675469, coo, {from: coo,value: 0});
await instance.createPromoKitty(724404727, coo, {from: coo,value: 0});
await instance.createPromoKitty(638849100, coo, {from: coo,value: 0});
await instance.createPromoKitty(200155123, coo, {from: coo,value: 0});
await instance.createPromoKitty(853937688, coo, {from: coo,value: 0});
await instance.createPromoKitty(767712664, coo, {from: coo,value: 0});
await instance.createPromoKitty(120812606, coo, {from: coo,value: 0});
await instance.createPromoKitty(94019521, coo, {from: coo,value: 0});
await instance.createPromoKitty(181402169, coo, {from: coo,value: 0});
await instance.createPromoKitty(958249247, coo, {from: coo,value: 0});
await instance.createPromoKitty(8417374, coo, {from: coo,value: 0});
await instance.createPromoKitty(34995694, coo, {from: coo,value: 0});
await instance.createPromoKitty(428058907, coo, {from: coo,value: 0});
await instance.createPromoKitty(734900918, coo, {from: coo,value: 0});
await instance.createPromoKitty(619939974, coo, {from: coo,value: 0});
await instance.createPromoKitty(68648252, coo, {from: coo,value: 0});
await instance.createPromoKitty(826043008, coo, {from: coo,value: 0});
await instance.createPromoKitty(556391874, coo, {from: coo,value: 0});
await instance.createPromoKitty(298144569, coo, {from: coo,value: 0});
await instance.createPromoKitty(776556672, coo, {from: coo,value: 0});
await instance.createPromoKitty(946769912, coo, {from: coo,value: 0});
await instance.createPromoKitty(428695010, coo, {from: coo,value: 0});
await instance.createPromoKitty(580797456, coo, {from: coo,value: 0});
await instance.createPromoKitty(155283949, coo, {from: coo,value: 0});
await instance.createPromoKitty(60926339, coo, {from: coo,value: 0});
await instance.createPromoKitty(408126236, coo, {from: coo,value: 0});
await instance.createPromoKitty(59451648, coo, {from: coo,value: 0});
await instance.createPromoKitty(720155770, coo, {from: coo,value: 0});
await instance.createPromoKitty(745488042, coo, {from: coo,value: 0});
await instance.createPromoKitty(585002205, coo, {from: coo,value: 0});
await instance.createPromoKitty(389454140, coo, {from: coo,value: 0});
await instance.createPromoKitty(531905300, coo, {from: coo,value: 0});
await instance.createPromoKitty(648280581, coo, {from: coo,value: 0});
await instance.createPromoKitty(843781186, coo, {from: coo,value: 0});
await instance.createPromoKitty(964109473, coo, {from: coo,value: 0});
await instance.createPromoKitty(84655566, coo, {from: coo,value: 0});
await instance.createPromoKitty(463774273, coo, {from: coo,value: 0});
await instance.createPromoKitty(366712449, coo, {from: coo,value: 0});
await instance.createPromoKitty(367632480, coo, {from: coo,value: 0});
await instance.createPromoKitty(937913512, coo, {from: coo,value: 0});
await instance.createPromoKitty(952337030, coo, {from: coo,value: 0});
await instance.createPromoKitty(745129992, coo, {from: coo,value: 0});
await instance.createPromoKitty(672428289, coo, {from: coo,value: 0});
await instance.createPromoKitty(362549329, coo, {from: coo,value: 0});
await instance.createPromoKitty(857578479, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(13, 36, {from: coo});
await instance.breedWith(14, 9, {from: coo});
await instance.breedWith(27, 40, {from: coo});
await instance.breedWith(16, 33, {from: coo});
await instance.breedWith(34, 35, {from: coo});
await instance.breedWith(32, 18, {from: coo});
await instance.breedWith(3, 5, {from: coo});
await instance.breedWith(39, 4, {from: coo});
await instance.breedWith(26, 12, {from: coo});
await instance.breedWith(19, 23, {from: coo});
await instance.breedWith(25, 20, {from: coo});
await instance.breedWith(24, 29, {from: coo});
await instance.breedWith(8, 6, {from: coo});
await instance.breedWith(17, 2, {from: coo});
await instance.breedWith(11, 37, {from: coo});
await instance.breedWith(1, 30, {from: coo});
await instance.breedWith(22, 15, {from: coo});
await instance.breedWith(10, 28, {from: coo});
await instance.breedWith(21, 31, {from: coo});
await instance.breedWith(7, 38, {from: coo});
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
await instance.giveBirth(13);
await instance.giveBirth(14);
await instance.giveBirth(27);
await instance.giveBirth(16);
await instance.giveBirth(34);
await instance.giveBirth(32);
await instance.giveBirth(3);
await instance.giveBirth(39);
await instance.giveBirth(26);
await instance.giveBirth(19);
await instance.giveBirth(25);
await instance.giveBirth(24);
await instance.giveBirth(8);
await instance.giveBirth(17);
await instance.giveBirth(11);
await instance.giveBirth(1);
await instance.giveBirth(22);
await instance.giveBirth(10);
await instance.giveBirth(21);
await instance.giveBirth(7);
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
