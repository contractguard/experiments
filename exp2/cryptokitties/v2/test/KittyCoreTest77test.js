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
await instance.createPromoKitty(428538600, coo, {from: coo,value: 0});
await instance.createPromoKitty(990447299, coo, {from: coo,value: 0});
await instance.createPromoKitty(211239644, coo, {from: coo,value: 0});
await instance.createPromoKitty(486493914, coo, {from: coo,value: 0});
await instance.createPromoKitty(5893898, coo, {from: coo,value: 0});
await instance.createPromoKitty(828603177, coo, {from: coo,value: 0});
await instance.createPromoKitty(455203864, coo, {from: coo,value: 0});
await instance.createPromoKitty(621692918, coo, {from: coo,value: 0});
await instance.createPromoKitty(285643996, coo, {from: coo,value: 0});
await instance.createPromoKitty(741230473, coo, {from: coo,value: 0});
await instance.createPromoKitty(167464176, coo, {from: coo,value: 0});
await instance.createPromoKitty(525202501, coo, {from: coo,value: 0});
await instance.createPromoKitty(662425956, coo, {from: coo,value: 0});
await instance.createPromoKitty(140266842, coo, {from: coo,value: 0});
await instance.createPromoKitty(571565303, coo, {from: coo,value: 0});
await instance.createPromoKitty(153000221, coo, {from: coo,value: 0});
await instance.createPromoKitty(423059921, coo, {from: coo,value: 0});
await instance.createPromoKitty(255869701, coo, {from: coo,value: 0});
await instance.createPromoKitty(81502857, coo, {from: coo,value: 0});
await instance.createPromoKitty(60315979, coo, {from: coo,value: 0});
await instance.createPromoKitty(807158909, coo, {from: coo,value: 0});
await instance.createPromoKitty(835285605, coo, {from: coo,value: 0});
await instance.createPromoKitty(153343337, coo, {from: coo,value: 0});
await instance.createPromoKitty(542837395, coo, {from: coo,value: 0});
await instance.createPromoKitty(82788764, coo, {from: coo,value: 0});
await instance.createPromoKitty(216119920, coo, {from: coo,value: 0});
await instance.createPromoKitty(15859814, coo, {from: coo,value: 0});
await instance.createPromoKitty(270436436, coo, {from: coo,value: 0});
await instance.createPromoKitty(989015973, coo, {from: coo,value: 0});
await instance.createPromoKitty(501264840, coo, {from: coo,value: 0});
await instance.createPromoKitty(382407079, coo, {from: coo,value: 0});
await instance.createPromoKitty(664530689, coo, {from: coo,value: 0});
await instance.createPromoKitty(382492080, coo, {from: coo,value: 0});
await instance.createPromoKitty(538327101, coo, {from: coo,value: 0});
await instance.createPromoKitty(864951054, coo, {from: coo,value: 0});
await instance.createPromoKitty(676585681, coo, {from: coo,value: 0});
await instance.createPromoKitty(923905322, coo, {from: coo,value: 0});
await instance.createPromoKitty(36863754, coo, {from: coo,value: 0});
await instance.createPromoKitty(252436627, coo, {from: coo,value: 0});
await instance.createPromoKitty(786458731, coo, {from: coo,value: 0});
await instance.createPromoKitty(570056738, coo, {from: coo,value: 0});
await instance.createPromoKitty(289088120, coo, {from: coo,value: 0});
await instance.createPromoKitty(612248570, coo, {from: coo,value: 0});
await instance.createPromoKitty(439360232, coo, {from: coo,value: 0});
await instance.createPromoKitty(970421355, coo, {from: coo,value: 0});
await instance.createPromoKitty(823349406, coo, {from: coo,value: 0});
await instance.createPromoKitty(530800227, coo, {from: coo,value: 0});
await instance.createPromoKitty(847688000, coo, {from: coo,value: 0});
await instance.createPromoKitty(102836952, coo, {from: coo,value: 0});
await instance.createPromoKitty(827892320, coo, {from: coo,value: 0});
await instance.createPromoKitty(547675299, coo, {from: coo,value: 0});
await instance.createPromoKitty(642850479, coo, {from: coo,value: 0});
await instance.createPromoKitty(124406676, coo, {from: coo,value: 0});
await instance.createPromoKitty(864020622, coo, {from: coo,value: 0});
await instance.createPromoKitty(58152526, coo, {from: coo,value: 0});
await instance.createPromoKitty(592130813, coo, {from: coo,value: 0});
await instance.createPromoKitty(406106532, coo, {from: coo,value: 0});
await instance.createPromoKitty(199084152, coo, {from: coo,value: 0});
await instance.createPromoKitty(850960322, coo, {from: coo,value: 0});
await instance.createPromoKitty(357871012, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(3, 28, {from: coo});
await instance.breedWith(23, 30, {from: coo});
await instance.breedWith(31, 38, {from: coo});
await instance.breedWith(6, 29, {from: coo});
await instance.breedWith(26, 1, {from: coo});
await instance.breedWith(12, 21, {from: coo});
await instance.breedWith(14, 17, {from: coo});
await instance.breedWith(18, 15, {from: coo});
await instance.breedWith(33, 32, {from: coo});
await instance.breedWith(8, 9, {from: coo});
await instance.breedWith(22, 39, {from: coo});
await instance.breedWith(27, 25, {from: coo});
await instance.breedWith(40, 16, {from: coo});
await instance.breedWith(4, 20, {from: coo});
await instance.breedWith(36, 34, {from: coo});
await instance.breedWith(2, 24, {from: coo});
await instance.breedWith(35, 10, {from: coo});
await instance.breedWith(7, 19, {from: coo});
await instance.breedWith(5, 13, {from: coo});
await instance.breedWith(11, 37, {from: coo});
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
await instance.giveBirth(3);
await instance.giveBirth(23);
await instance.giveBirth(31);
await instance.giveBirth(6);
await instance.giveBirth(26);
await instance.giveBirth(12);
await instance.giveBirth(14);
await instance.giveBirth(18);
await instance.giveBirth(33);
await instance.giveBirth(8);
await instance.giveBirth(22);
await instance.giveBirth(27);
await instance.giveBirth(40);
await instance.giveBirth(4);
await instance.giveBirth(36);
await instance.giveBirth(2);
await instance.giveBirth(35);
await instance.giveBirth(7);
await instance.giveBirth(5);
await instance.giveBirth(11);
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
