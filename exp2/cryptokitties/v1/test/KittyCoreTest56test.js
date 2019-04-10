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
await instance.createPromoKitty(507365317, coo, {from: coo,value: 0});
await instance.createPromoKitty(317292180, coo, {from: coo,value: 0});
await instance.createPromoKitty(16222023, coo, {from: coo,value: 0});
await instance.createPromoKitty(44927017, coo, {from: coo,value: 0});
await instance.createPromoKitty(56058272, coo, {from: coo,value: 0});
await instance.createPromoKitty(330878980, coo, {from: coo,value: 0});
await instance.createPromoKitty(499866802, coo, {from: coo,value: 0});
await instance.createPromoKitty(551787299, coo, {from: coo,value: 0});
await instance.createPromoKitty(562145438, coo, {from: coo,value: 0});
await instance.createPromoKitty(319624985, coo, {from: coo,value: 0});
await instance.createPromoKitty(236984660, coo, {from: coo,value: 0});
await instance.createPromoKitty(190355529, coo, {from: coo,value: 0});
await instance.createPromoKitty(328112030, coo, {from: coo,value: 0});
await instance.createPromoKitty(33946455, coo, {from: coo,value: 0});
await instance.createPromoKitty(921661538, coo, {from: coo,value: 0});
await instance.createPromoKitty(744982263, coo, {from: coo,value: 0});
await instance.createPromoKitty(520085474, coo, {from: coo,value: 0});
await instance.createPromoKitty(676586082, coo, {from: coo,value: 0});
await instance.createPromoKitty(90186536, coo, {from: coo,value: 0});
await instance.createPromoKitty(599615500, coo, {from: coo,value: 0});
await instance.createPromoKitty(756719277, coo, {from: coo,value: 0});
await instance.createPromoKitty(414578130, coo, {from: coo,value: 0});
await instance.createPromoKitty(638120085, coo, {from: coo,value: 0});
await instance.createPromoKitty(747203414, coo, {from: coo,value: 0});
await instance.createPromoKitty(984604374, coo, {from: coo,value: 0});
await instance.createPromoKitty(744005662, coo, {from: coo,value: 0});
await instance.createPromoKitty(412179109, coo, {from: coo,value: 0});
await instance.createPromoKitty(281038794, coo, {from: coo,value: 0});
await instance.createPromoKitty(354127923, coo, {from: coo,value: 0});
await instance.createPromoKitty(51910536, coo, {from: coo,value: 0});
await instance.createPromoKitty(17138509, coo, {from: coo,value: 0});
await instance.createPromoKitty(32306708, coo, {from: coo,value: 0});
await instance.createPromoKitty(496211130, coo, {from: coo,value: 0});
await instance.createPromoKitty(147358974, coo, {from: coo,value: 0});
await instance.createPromoKitty(252018098, coo, {from: coo,value: 0});
await instance.createPromoKitty(564438311, coo, {from: coo,value: 0});
await instance.createPromoKitty(450401254, coo, {from: coo,value: 0});
await instance.createPromoKitty(438061839, coo, {from: coo,value: 0});
await instance.createPromoKitty(479196543, coo, {from: coo,value: 0});
await instance.createPromoKitty(476779868, coo, {from: coo,value: 0});
await instance.createPromoKitty(103144107, coo, {from: coo,value: 0});
await instance.createPromoKitty(844009817, coo, {from: coo,value: 0});
await instance.createPromoKitty(953314159, coo, {from: coo,value: 0});
await instance.createPromoKitty(730295222, coo, {from: coo,value: 0});
await instance.createPromoKitty(110611306, coo, {from: coo,value: 0});
await instance.createPromoKitty(734789130, coo, {from: coo,value: 0});
await instance.createPromoKitty(411794058, coo, {from: coo,value: 0});
await instance.createPromoKitty(895465791, coo, {from: coo,value: 0});
await instance.createPromoKitty(560460337, coo, {from: coo,value: 0});
await instance.createPromoKitty(351468377, coo, {from: coo,value: 0});
await instance.createPromoKitty(784592190, coo, {from: coo,value: 0});
await instance.createPromoKitty(746509789, coo, {from: coo,value: 0});
await instance.createPromoKitty(268614710, coo, {from: coo,value: 0});
await instance.createPromoKitty(473453819, coo, {from: coo,value: 0});
await instance.createPromoKitty(712671602, coo, {from: coo,value: 0});
await instance.createPromoKitty(205551902, coo, {from: coo,value: 0});
await instance.createPromoKitty(893091497, coo, {from: coo,value: 0});
await instance.createPromoKitty(281991726, coo, {from: coo,value: 0});
await instance.createPromoKitty(817403801, coo, {from: coo,value: 0});
await instance.createPromoKitty(176687859, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(21, 28, {from: coo});
await instance.breedWith(20, 9, {from: coo});
await instance.breedWith(7, 5, {from: coo});
await instance.breedWith(23, 25, {from: coo});
await instance.breedWith(17, 38, {from: coo});
await instance.breedWith(39, 12, {from: coo});
await instance.breedWith(13, 31, {from: coo});
await instance.breedWith(29, 22, {from: coo});
await instance.breedWith(2, 1, {from: coo});
await instance.breedWith(10, 37, {from: coo});
await instance.breedWith(35, 40, {from: coo});
await instance.breedWith(26, 3, {from: coo});
await instance.breedWith(18, 8, {from: coo});
await instance.breedWith(14, 32, {from: coo});
await instance.breedWith(6, 36, {from: coo});
await instance.breedWith(16, 27, {from: coo});
await instance.breedWith(30, 15, {from: coo});
await instance.breedWith(19, 24, {from: coo});
await instance.breedWith(11, 33, {from: coo});
await instance.breedWith(34, 4, {from: coo});
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
await instance.giveBirth(21);
await instance.giveBirth(20);
await instance.giveBirth(7);
await instance.giveBirth(23);
await instance.giveBirth(17);
await instance.giveBirth(39);
await instance.giveBirth(13);
await instance.giveBirth(29);
await instance.giveBirth(2);
await instance.giveBirth(10);
await instance.giveBirth(35);
await instance.giveBirth(26);
await instance.giveBirth(18);
await instance.giveBirth(14);
await instance.giveBirth(6);
await instance.giveBirth(16);
await instance.giveBirth(30);
await instance.giveBirth(19);
await instance.giveBirth(11);
await instance.giveBirth(34);
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
// let Kit5 = await test_subjec.t_KittyCore.createPromoKitty(n4, accounts[3], {from: coo, gas: 400000, gasPrice: 1100000000, value:0});
//console.log(Kit1.logs);

//培养第一代 kitty5
await instance.breedWith(55, 56, {from: coo});
await util.forwardEVMTime(cooldowns[0]);
await instance.giveBirth(55);

//培育第二代
await instance.breedWith(57, 59, {from: coo});
await util.forwardEVMTime(cooldowns[0]);});
it('attack', async() => {
 let result_Gen2 = await instance.giveBirth(57);
});
});
