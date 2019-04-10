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
await instance.createPromoKitty(369475827, coo, {from: coo,value: 0});
await instance.createPromoKitty(708428053, coo, {from: coo,value: 0});
await instance.createPromoKitty(779725780, coo, {from: coo,value: 0});
await instance.createPromoKitty(154691679, coo, {from: coo,value: 0});
await instance.createPromoKitty(41483149, coo, {from: coo,value: 0});
await instance.createPromoKitty(449939490, coo, {from: coo,value: 0});
await instance.createPromoKitty(257072537, coo, {from: coo,value: 0});
await instance.createPromoKitty(603531036, coo, {from: coo,value: 0});
await instance.createPromoKitty(683362014, coo, {from: coo,value: 0});
await instance.createPromoKitty(928907661, coo, {from: coo,value: 0});
await instance.createPromoKitty(431767901, coo, {from: coo,value: 0});
await instance.createPromoKitty(904249432, coo, {from: coo,value: 0});
await instance.createPromoKitty(395329766, coo, {from: coo,value: 0});
await instance.createPromoKitty(860315032, coo, {from: coo,value: 0});
await instance.createPromoKitty(714848849, coo, {from: coo,value: 0});
await instance.createPromoKitty(361249635, coo, {from: coo,value: 0});
await instance.createPromoKitty(22754407, coo, {from: coo,value: 0});
await instance.createPromoKitty(637828461, coo, {from: coo,value: 0});
await instance.createPromoKitty(654127266, coo, {from: coo,value: 0});
await instance.createPromoKitty(356456147, coo, {from: coo,value: 0});
await instance.createPromoKitty(90126648, coo, {from: coo,value: 0});
await instance.createPromoKitty(9133802, coo, {from: coo,value: 0});
await instance.createPromoKitty(546251168, coo, {from: coo,value: 0});
await instance.createPromoKitty(301572970, coo, {from: coo,value: 0});
await instance.createPromoKitty(232978727, coo, {from: coo,value: 0});
await instance.createPromoKitty(108375298, coo, {from: coo,value: 0});
await instance.createPromoKitty(471328291, coo, {from: coo,value: 0});
await instance.createPromoKitty(771559568, coo, {from: coo,value: 0});
await instance.createPromoKitty(701628983, coo, {from: coo,value: 0});
await instance.createPromoKitty(6851500, coo, {from: coo,value: 0});
await instance.createPromoKitty(224170637, coo, {from: coo,value: 0});
await instance.createPromoKitty(83849725, coo, {from: coo,value: 0});
await instance.createPromoKitty(779003077, coo, {from: coo,value: 0});
await instance.createPromoKitty(382583265, coo, {from: coo,value: 0});
await instance.createPromoKitty(685130636, coo, {from: coo,value: 0});
await instance.createPromoKitty(256075155, coo, {from: coo,value: 0});
await instance.createPromoKitty(682416593, coo, {from: coo,value: 0});
await instance.createPromoKitty(989656963, coo, {from: coo,value: 0});
await instance.createPromoKitty(919139605, coo, {from: coo,value: 0});
await instance.createPromoKitty(167634529, coo, {from: coo,value: 0});
await instance.createPromoKitty(987158553, coo, {from: coo,value: 0});
await instance.createPromoKitty(305367809, coo, {from: coo,value: 0});
await instance.createPromoKitty(817349177, coo, {from: coo,value: 0});
await instance.createPromoKitty(201694354, coo, {from: coo,value: 0});
await instance.createPromoKitty(688660155, coo, {from: coo,value: 0});
await instance.createPromoKitty(614429054, coo, {from: coo,value: 0});
await instance.createPromoKitty(927091853, coo, {from: coo,value: 0});
await instance.createPromoKitty(33705619, coo, {from: coo,value: 0});
await instance.createPromoKitty(848859123, coo, {from: coo,value: 0});
await instance.createPromoKitty(657936210, coo, {from: coo,value: 0});
await instance.createPromoKitty(311029999, coo, {from: coo,value: 0});
await instance.createPromoKitty(941532038, coo, {from: coo,value: 0});
await instance.createPromoKitty(960851270, coo, {from: coo,value: 0});
await instance.createPromoKitty(679995023, coo, {from: coo,value: 0});
await instance.createPromoKitty(262266080, coo, {from: coo,value: 0});
await instance.createPromoKitty(844579849, coo, {from: coo,value: 0});
await instance.createPromoKitty(280332473, coo, {from: coo,value: 0});
await instance.createPromoKitty(691938010, coo, {from: coo,value: 0});
await instance.createPromoKitty(222048527, coo, {from: coo,value: 0});
await instance.createPromoKitty(541991675, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(35, 32, {from: coo});
await instance.breedWith(17, 22, {from: coo});
await instance.breedWith(15, 3, {from: coo});
await instance.breedWith(38, 31, {from: coo});
await instance.breedWith(24, 8, {from: coo});
await instance.breedWith(37, 19, {from: coo});
await instance.breedWith(7, 29, {from: coo});
await instance.breedWith(20, 9, {from: coo});
await instance.breedWith(23, 10, {from: coo});
await instance.breedWith(39, 5, {from: coo});
await instance.breedWith(21, 11, {from: coo});
await instance.breedWith(34, 27, {from: coo});
await instance.breedWith(40, 36, {from: coo});
await instance.breedWith(14, 1, {from: coo});
await instance.breedWith(28, 30, {from: coo});
await instance.breedWith(4, 18, {from: coo});
await instance.breedWith(6, 25, {from: coo});
await instance.breedWith(13, 33, {from: coo});
await instance.breedWith(26, 12, {from: coo});
await instance.breedWith(16, 2, {from: coo});
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
await instance.giveBirth(17);
await instance.giveBirth(15);
await instance.giveBirth(38);
await instance.giveBirth(24);
await instance.giveBirth(37);
await instance.giveBirth(7);
await instance.giveBirth(20);
await instance.giveBirth(23);
await instance.giveBirth(39);
await instance.giveBirth(21);
await instance.giveBirth(34);
await instance.giveBirth(40);
await instance.giveBirth(14);
await instance.giveBirth(28);
await instance.giveBirth(4);
await instance.giveBirth(6);
await instance.giveBirth(13);
await instance.giveBirth(26);
await instance.giveBirth(16);
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
