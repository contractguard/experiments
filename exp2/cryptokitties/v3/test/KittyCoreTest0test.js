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
await instance.createPromoKitty(734147627, coo, {from: coo,value: 0});
await instance.createPromoKitty(522060242, coo, {from: coo,value: 0});
await instance.createPromoKitty(974079392, coo, {from: coo,value: 0});
await instance.createPromoKitty(791792966, coo, {from: coo,value: 0});
await instance.createPromoKitty(595785700, coo, {from: coo,value: 0});
await instance.createPromoKitty(297183856, coo, {from: coo,value: 0});
await instance.createPromoKitty(719423052, coo, {from: coo,value: 0});
await instance.createPromoKitty(175316873, coo, {from: coo,value: 0});
await instance.createPromoKitty(897472776, coo, {from: coo,value: 0});
await instance.createPromoKitty(808271617, coo, {from: coo,value: 0});
await instance.createPromoKitty(539667206, coo, {from: coo,value: 0});
await instance.createPromoKitty(762950987, coo, {from: coo,value: 0});
await instance.createPromoKitty(135792980, coo, {from: coo,value: 0});
await instance.createPromoKitty(628314747, coo, {from: coo,value: 0});
await instance.createPromoKitty(404302401, coo, {from: coo,value: 0});
await instance.createPromoKitty(691089262, coo, {from: coo,value: 0});
await instance.createPromoKitty(747071438, coo, {from: coo,value: 0});
await instance.createPromoKitty(791087578, coo, {from: coo,value: 0});
await instance.createPromoKitty(377657243, coo, {from: coo,value: 0});
await instance.createPromoKitty(12177056, coo, {from: coo,value: 0});
await instance.createPromoKitty(144137694, coo, {from: coo,value: 0});
await instance.createPromoKitty(196876085, coo, {from: coo,value: 0});
await instance.createPromoKitty(188431279, coo, {from: coo,value: 0});
await instance.createPromoKitty(18913552, coo, {from: coo,value: 0});
await instance.createPromoKitty(574455760, coo, {from: coo,value: 0});
await instance.createPromoKitty(981596715, coo, {from: coo,value: 0});
await instance.createPromoKitty(574957817, coo, {from: coo,value: 0});
await instance.createPromoKitty(331834509, coo, {from: coo,value: 0});
await instance.createPromoKitty(573678651, coo, {from: coo,value: 0});
await instance.createPromoKitty(933749427, coo, {from: coo,value: 0});
await instance.createPromoKitty(102562603, coo, {from: coo,value: 0});
await instance.createPromoKitty(420768230, coo, {from: coo,value: 0});
await instance.createPromoKitty(955120629, coo, {from: coo,value: 0});
await instance.createPromoKitty(407086968, coo, {from: coo,value: 0});
await instance.createPromoKitty(250765913, coo, {from: coo,value: 0});
await instance.createPromoKitty(840610485, coo, {from: coo,value: 0});
await instance.createPromoKitty(457893168, coo, {from: coo,value: 0});
await instance.createPromoKitty(923301124, coo, {from: coo,value: 0});
await instance.createPromoKitty(113632760, coo, {from: coo,value: 0});
await instance.createPromoKitty(212423193, coo, {from: coo,value: 0});
await instance.createPromoKitty(672724657, coo, {from: coo,value: 0});
await instance.createPromoKitty(611242176, coo, {from: coo,value: 0});
await instance.createPromoKitty(47462645, coo, {from: coo,value: 0});
await instance.createPromoKitty(783552974, coo, {from: coo,value: 0});
await instance.createPromoKitty(810796548, coo, {from: coo,value: 0});
await instance.createPromoKitty(131245723, coo, {from: coo,value: 0});
await instance.createPromoKitty(333009019, coo, {from: coo,value: 0});
await instance.createPromoKitty(749299131, coo, {from: coo,value: 0});
await instance.createPromoKitty(501009854, coo, {from: coo,value: 0});
await instance.createPromoKitty(221733494, coo, {from: coo,value: 0});
await instance.createPromoKitty(426512717, coo, {from: coo,value: 0});
await instance.createPromoKitty(180805489, coo, {from: coo,value: 0});
await instance.createPromoKitty(345020568, coo, {from: coo,value: 0});
await instance.createPromoKitty(600797222, coo, {from: coo,value: 0});
await instance.createPromoKitty(384150503, coo, {from: coo,value: 0});
await instance.createPromoKitty(344253810, coo, {from: coo,value: 0});
await instance.createPromoKitty(6481362, coo, {from: coo,value: 0});
await instance.createPromoKitty(714898433, coo, {from: coo,value: 0});
await instance.createPromoKitty(112300242, coo, {from: coo,value: 0});
await instance.createPromoKitty(984657062, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(35, 7, {from: coo});
await instance.breedWith(20, 9, {from: coo});
await instance.breedWith(19, 22, {from: coo});
await instance.breedWith(3, 37, {from: coo});
await instance.breedWith(28, 8, {from: coo});
await instance.breedWith(33, 14, {from: coo});
await instance.breedWith(36, 32, {from: coo});
await instance.breedWith(11, 26, {from: coo});
await instance.breedWith(25, 24, {from: coo});
await instance.breedWith(29, 10, {from: coo});
await instance.breedWith(17, 12, {from: coo});
await instance.breedWith(4, 2, {from: coo});
await instance.breedWith(1, 6, {from: coo});
await instance.breedWith(13, 40, {from: coo});
await instance.breedWith(16, 5, {from: coo});
await instance.breedWith(18, 38, {from: coo});
await instance.breedWith(30, 21, {from: coo});
await instance.breedWith(34, 39, {from: coo});
await instance.breedWith(27, 15, {from: coo});
await instance.breedWith(23, 31, {from: coo});
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
await instance.giveBirth(35);
await instance.giveBirth(20);
await instance.giveBirth(19);
await instance.giveBirth(3);
await instance.giveBirth(28);
await instance.giveBirth(33);
await instance.giveBirth(36);
await instance.giveBirth(11);
await instance.giveBirth(25);
await instance.giveBirth(29);
await instance.giveBirth(17);
await instance.giveBirth(4);
await instance.giveBirth(1);
await instance.giveBirth(13);
await instance.giveBirth(16);
await instance.giveBirth(18);
await instance.giveBirth(30);
await instance.giveBirth(34);
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
