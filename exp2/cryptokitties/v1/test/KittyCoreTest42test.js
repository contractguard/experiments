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
await instance.createPromoKitty(699905827, coo, {from: coo,value: 0});
await instance.createPromoKitty(731105760, coo, {from: coo,value: 0});
await instance.createPromoKitty(948465485, coo, {from: coo,value: 0});
await instance.createPromoKitty(664994689, coo, {from: coo,value: 0});
await instance.createPromoKitty(489678055, coo, {from: coo,value: 0});
await instance.createPromoKitty(865797811, coo, {from: coo,value: 0});
await instance.createPromoKitty(542085979, coo, {from: coo,value: 0});
await instance.createPromoKitty(171727780, coo, {from: coo,value: 0});
await instance.createPromoKitty(248642481, coo, {from: coo,value: 0});
await instance.createPromoKitty(332407169, coo, {from: coo,value: 0});
await instance.createPromoKitty(745024364, coo, {from: coo,value: 0});
await instance.createPromoKitty(43927090, coo, {from: coo,value: 0});
await instance.createPromoKitty(186959434, coo, {from: coo,value: 0});
await instance.createPromoKitty(372369982, coo, {from: coo,value: 0});
await instance.createPromoKitty(587575025, coo, {from: coo,value: 0});
await instance.createPromoKitty(360573101, coo, {from: coo,value: 0});
await instance.createPromoKitty(807166879, coo, {from: coo,value: 0});
await instance.createPromoKitty(839597989, coo, {from: coo,value: 0});
await instance.createPromoKitty(765931837, coo, {from: coo,value: 0});
await instance.createPromoKitty(167800086, coo, {from: coo,value: 0});
await instance.createPromoKitty(168460000, coo, {from: coo,value: 0});
await instance.createPromoKitty(851699347, coo, {from: coo,value: 0});
await instance.createPromoKitty(260750192, coo, {from: coo,value: 0});
await instance.createPromoKitty(957163687, coo, {from: coo,value: 0});
await instance.createPromoKitty(720510940, coo, {from: coo,value: 0});
await instance.createPromoKitty(944224523, coo, {from: coo,value: 0});
await instance.createPromoKitty(951052407, coo, {from: coo,value: 0});
await instance.createPromoKitty(879041924, coo, {from: coo,value: 0});
await instance.createPromoKitty(739127177, coo, {from: coo,value: 0});
await instance.createPromoKitty(16071430, coo, {from: coo,value: 0});
await instance.createPromoKitty(775262644, coo, {from: coo,value: 0});
await instance.createPromoKitty(107563318, coo, {from: coo,value: 0});
await instance.createPromoKitty(296718646, coo, {from: coo,value: 0});
await instance.createPromoKitty(119706210, coo, {from: coo,value: 0});
await instance.createPromoKitty(105437773, coo, {from: coo,value: 0});
await instance.createPromoKitty(292898235, coo, {from: coo,value: 0});
await instance.createPromoKitty(586330443, coo, {from: coo,value: 0});
await instance.createPromoKitty(716694742, coo, {from: coo,value: 0});
await instance.createPromoKitty(216418348, coo, {from: coo,value: 0});
await instance.createPromoKitty(826359727, coo, {from: coo,value: 0});
await instance.createPromoKitty(219017815, coo, {from: coo,value: 0});
await instance.createPromoKitty(856286310, coo, {from: coo,value: 0});
await instance.createPromoKitty(642760, coo, {from: coo,value: 0});
await instance.createPromoKitty(14251910, coo, {from: coo,value: 0});
await instance.createPromoKitty(133129829, coo, {from: coo,value: 0});
await instance.createPromoKitty(846221543, coo, {from: coo,value: 0});
await instance.createPromoKitty(596280434, coo, {from: coo,value: 0});
await instance.createPromoKitty(470437750, coo, {from: coo,value: 0});
await instance.createPromoKitty(916230123, coo, {from: coo,value: 0});
await instance.createPromoKitty(338000178, coo, {from: coo,value: 0});
await instance.createPromoKitty(704418725, coo, {from: coo,value: 0});
await instance.createPromoKitty(623848141, coo, {from: coo,value: 0});
await instance.createPromoKitty(505127212, coo, {from: coo,value: 0});
await instance.createPromoKitty(342154681, coo, {from: coo,value: 0});
await instance.createPromoKitty(906131975, coo, {from: coo,value: 0});
await instance.createPromoKitty(602745427, coo, {from: coo,value: 0});
await instance.createPromoKitty(653507910, coo, {from: coo,value: 0});
await instance.createPromoKitty(758153450, coo, {from: coo,value: 0});
await instance.createPromoKitty(498194868, coo, {from: coo,value: 0});
await instance.createPromoKitty(321964451, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(15, 16, {from: coo});
await instance.breedWith(24, 3, {from: coo});
await instance.breedWith(29, 35, {from: coo});
await instance.breedWith(21, 8, {from: coo});
await instance.breedWith(34, 25, {from: coo});
await instance.breedWith(14, 13, {from: coo});
await instance.breedWith(5, 17, {from: coo});
await instance.breedWith(19, 32, {from: coo});
await instance.breedWith(12, 10, {from: coo});
await instance.breedWith(2, 31, {from: coo});
await instance.breedWith(40, 27, {from: coo});
await instance.breedWith(23, 9, {from: coo});
await instance.breedWith(1, 11, {from: coo});
await instance.breedWith(20, 30, {from: coo});
await instance.breedWith(26, 7, {from: coo});
await instance.breedWith(18, 33, {from: coo});
await instance.breedWith(37, 28, {from: coo});
await instance.breedWith(22, 39, {from: coo});
await instance.breedWith(4, 38, {from: coo});
await instance.breedWith(6, 36, {from: coo});
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
await instance.giveBirth(15);
await instance.giveBirth(24);
await instance.giveBirth(29);
await instance.giveBirth(21);
await instance.giveBirth(34);
await instance.giveBirth(14);
await instance.giveBirth(5);
await instance.giveBirth(19);
await instance.giveBirth(12);
await instance.giveBirth(2);
await instance.giveBirth(40);
await instance.giveBirth(23);
await instance.giveBirth(1);
await instance.giveBirth(20);
await instance.giveBirth(26);
await instance.giveBirth(18);
await instance.giveBirth(37);
await instance.giveBirth(22);
await instance.giveBirth(4);
await instance.giveBirth(6);
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
