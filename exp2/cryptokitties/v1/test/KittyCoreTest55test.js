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
await instance.createPromoKitty(951740197, coo, {from: coo,value: 0});
await instance.createPromoKitty(502378685, coo, {from: coo,value: 0});
await instance.createPromoKitty(21833950, coo, {from: coo,value: 0});
await instance.createPromoKitty(96736686, coo, {from: coo,value: 0});
await instance.createPromoKitty(629343861, coo, {from: coo,value: 0});
await instance.createPromoKitty(82383859, coo, {from: coo,value: 0});
await instance.createPromoKitty(269295103, coo, {from: coo,value: 0});
await instance.createPromoKitty(168201308, coo, {from: coo,value: 0});
await instance.createPromoKitty(796543030, coo, {from: coo,value: 0});
await instance.createPromoKitty(926260366, coo, {from: coo,value: 0});
await instance.createPromoKitty(342565879, coo, {from: coo,value: 0});
await instance.createPromoKitty(395873380, coo, {from: coo,value: 0});
await instance.createPromoKitty(448802722, coo, {from: coo,value: 0});
await instance.createPromoKitty(370914591, coo, {from: coo,value: 0});
await instance.createPromoKitty(617952167, coo, {from: coo,value: 0});
await instance.createPromoKitty(623826013, coo, {from: coo,value: 0});
await instance.createPromoKitty(489028345, coo, {from: coo,value: 0});
await instance.createPromoKitty(61924256, coo, {from: coo,value: 0});
await instance.createPromoKitty(254654345, coo, {from: coo,value: 0});
await instance.createPromoKitty(854929949, coo, {from: coo,value: 0});
await instance.createPromoKitty(688489633, coo, {from: coo,value: 0});
await instance.createPromoKitty(144933843, coo, {from: coo,value: 0});
await instance.createPromoKitty(770625564, coo, {from: coo,value: 0});
await instance.createPromoKitty(609528225, coo, {from: coo,value: 0});
await instance.createPromoKitty(3968596, coo, {from: coo,value: 0});
await instance.createPromoKitty(363518802, coo, {from: coo,value: 0});
await instance.createPromoKitty(84743100, coo, {from: coo,value: 0});
await instance.createPromoKitty(937067480, coo, {from: coo,value: 0});
await instance.createPromoKitty(866418554, coo, {from: coo,value: 0});
await instance.createPromoKitty(795366254, coo, {from: coo,value: 0});
await instance.createPromoKitty(598368316, coo, {from: coo,value: 0});
await instance.createPromoKitty(454486843, coo, {from: coo,value: 0});
await instance.createPromoKitty(89468337, coo, {from: coo,value: 0});
await instance.createPromoKitty(616867480, coo, {from: coo,value: 0});
await instance.createPromoKitty(788007353, coo, {from: coo,value: 0});
await instance.createPromoKitty(899492662, coo, {from: coo,value: 0});
await instance.createPromoKitty(817707389, coo, {from: coo,value: 0});
await instance.createPromoKitty(281854864, coo, {from: coo,value: 0});
await instance.createPromoKitty(602317989, coo, {from: coo,value: 0});
await instance.createPromoKitty(445740712, coo, {from: coo,value: 0});
await instance.createPromoKitty(159895353, coo, {from: coo,value: 0});
await instance.createPromoKitty(825021950, coo, {from: coo,value: 0});
await instance.createPromoKitty(256174272, coo, {from: coo,value: 0});
await instance.createPromoKitty(482204451, coo, {from: coo,value: 0});
await instance.createPromoKitty(756059123, coo, {from: coo,value: 0});
await instance.createPromoKitty(885383720, coo, {from: coo,value: 0});
await instance.createPromoKitty(657465991, coo, {from: coo,value: 0});
await instance.createPromoKitty(164308146, coo, {from: coo,value: 0});
await instance.createPromoKitty(359247215, coo, {from: coo,value: 0});
await instance.createPromoKitty(306324592, coo, {from: coo,value: 0});
await instance.createPromoKitty(192363264, coo, {from: coo,value: 0});
await instance.createPromoKitty(687606499, coo, {from: coo,value: 0});
await instance.createPromoKitty(547748058, coo, {from: coo,value: 0});
await instance.createPromoKitty(767636131, coo, {from: coo,value: 0});
await instance.createPromoKitty(974356913, coo, {from: coo,value: 0});
await instance.createPromoKitty(668865143, coo, {from: coo,value: 0});
await instance.createPromoKitty(211722257, coo, {from: coo,value: 0});
await instance.createPromoKitty(381655684, coo, {from: coo,value: 0});
await instance.createPromoKitty(939906638, coo, {from: coo,value: 0});
await instance.createPromoKitty(729920485, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(15, 22, {from: coo});
await instance.breedWith(27, 1, {from: coo});
await instance.breedWith(28, 24, {from: coo});
await instance.breedWith(23, 3, {from: coo});
await instance.breedWith(18, 17, {from: coo});
await instance.breedWith(14, 13, {from: coo});
await instance.breedWith(9, 21, {from: coo});
await instance.breedWith(32, 39, {from: coo});
await instance.breedWith(38, 11, {from: coo});
await instance.breedWith(6, 29, {from: coo});
await instance.breedWith(5, 16, {from: coo});
await instance.breedWith(34, 37, {from: coo});
await instance.breedWith(25, 26, {from: coo});
await instance.breedWith(33, 12, {from: coo});
await instance.breedWith(35, 40, {from: coo});
await instance.breedWith(30, 7, {from: coo});
await instance.breedWith(4, 10, {from: coo});
await instance.breedWith(19, 20, {from: coo});
await instance.breedWith(31, 2, {from: coo});
await instance.breedWith(36, 8, {from: coo});
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
await instance.giveBirth(27);
await instance.giveBirth(28);
await instance.giveBirth(23);
await instance.giveBirth(18);
await instance.giveBirth(14);
await instance.giveBirth(9);
await instance.giveBirth(32);
await instance.giveBirth(38);
await instance.giveBirth(6);
await instance.giveBirth(5);
await instance.giveBirth(34);
await instance.giveBirth(25);
await instance.giveBirth(33);
await instance.giveBirth(35);
await instance.giveBirth(30);
await instance.giveBirth(4);
await instance.giveBirth(19);
await instance.giveBirth(31);
await instance.giveBirth(36);
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
