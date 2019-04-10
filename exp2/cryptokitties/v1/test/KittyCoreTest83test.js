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
await instance.createPromoKitty(522144757, coo, {from: coo,value: 0});
await instance.createPromoKitty(653154370, coo, {from: coo,value: 0});
await instance.createPromoKitty(91413000, coo, {from: coo,value: 0});
await instance.createPromoKitty(448226147, coo, {from: coo,value: 0});
await instance.createPromoKitty(553574419, coo, {from: coo,value: 0});
await instance.createPromoKitty(514019512, coo, {from: coo,value: 0});
await instance.createPromoKitty(253115819, coo, {from: coo,value: 0});
await instance.createPromoKitty(91305127, coo, {from: coo,value: 0});
await instance.createPromoKitty(174952868, coo, {from: coo,value: 0});
await instance.createPromoKitty(435154084, coo, {from: coo,value: 0});
await instance.createPromoKitty(611852671, coo, {from: coo,value: 0});
await instance.createPromoKitty(571612574, coo, {from: coo,value: 0});
await instance.createPromoKitty(864022598, coo, {from: coo,value: 0});
await instance.createPromoKitty(531165470, coo, {from: coo,value: 0});
await instance.createPromoKitty(8536712, coo, {from: coo,value: 0});
await instance.createPromoKitty(167575757, coo, {from: coo,value: 0});
await instance.createPromoKitty(292569314, coo, {from: coo,value: 0});
await instance.createPromoKitty(315322997, coo, {from: coo,value: 0});
await instance.createPromoKitty(302370556, coo, {from: coo,value: 0});
await instance.createPromoKitty(617805612, coo, {from: coo,value: 0});
await instance.createPromoKitty(317369595, coo, {from: coo,value: 0});
await instance.createPromoKitty(266937781, coo, {from: coo,value: 0});
await instance.createPromoKitty(230656758, coo, {from: coo,value: 0});
await instance.createPromoKitty(275414407, coo, {from: coo,value: 0});
await instance.createPromoKitty(854573776, coo, {from: coo,value: 0});
await instance.createPromoKitty(13920819, coo, {from: coo,value: 0});
await instance.createPromoKitty(589920539, coo, {from: coo,value: 0});
await instance.createPromoKitty(983145291, coo, {from: coo,value: 0});
await instance.createPromoKitty(480688488, coo, {from: coo,value: 0});
await instance.createPromoKitty(259957577, coo, {from: coo,value: 0});
await instance.createPromoKitty(74191320, coo, {from: coo,value: 0});
await instance.createPromoKitty(836720352, coo, {from: coo,value: 0});
await instance.createPromoKitty(144637504, coo, {from: coo,value: 0});
await instance.createPromoKitty(846899061, coo, {from: coo,value: 0});
await instance.createPromoKitty(273715458, coo, {from: coo,value: 0});
await instance.createPromoKitty(882269964, coo, {from: coo,value: 0});
await instance.createPromoKitty(364459374, coo, {from: coo,value: 0});
await instance.createPromoKitty(581965941, coo, {from: coo,value: 0});
await instance.createPromoKitty(656412529, coo, {from: coo,value: 0});
await instance.createPromoKitty(204298495, coo, {from: coo,value: 0});
await instance.createPromoKitty(226024402, coo, {from: coo,value: 0});
await instance.createPromoKitty(136656827, coo, {from: coo,value: 0});
await instance.createPromoKitty(880170228, coo, {from: coo,value: 0});
await instance.createPromoKitty(480909695, coo, {from: coo,value: 0});
await instance.createPromoKitty(437101920, coo, {from: coo,value: 0});
await instance.createPromoKitty(979914899, coo, {from: coo,value: 0});
await instance.createPromoKitty(874280559, coo, {from: coo,value: 0});
await instance.createPromoKitty(484032428, coo, {from: coo,value: 0});
await instance.createPromoKitty(204695711, coo, {from: coo,value: 0});
await instance.createPromoKitty(245986258, coo, {from: coo,value: 0});
await instance.createPromoKitty(524117970, coo, {from: coo,value: 0});
await instance.createPromoKitty(964528631, coo, {from: coo,value: 0});
await instance.createPromoKitty(679117857, coo, {from: coo,value: 0});
await instance.createPromoKitty(308916235, coo, {from: coo,value: 0});
await instance.createPromoKitty(796740515, coo, {from: coo,value: 0});
await instance.createPromoKitty(622303686, coo, {from: coo,value: 0});
await instance.createPromoKitty(794615212, coo, {from: coo,value: 0});
await instance.createPromoKitty(475485471, coo, {from: coo,value: 0});
await instance.createPromoKitty(75379827, coo, {from: coo,value: 0});
await instance.createPromoKitty(763705701, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(15, 34, {from: coo});
await instance.breedWith(40, 11, {from: coo});
await instance.breedWith(33, 14, {from: coo});
await instance.breedWith(39, 29, {from: coo});
await instance.breedWith(23, 21, {from: coo});
await instance.breedWith(2, 10, {from: coo});
await instance.breedWith(26, 12, {from: coo});
await instance.breedWith(31, 30, {from: coo});
await instance.breedWith(37, 18, {from: coo});
await instance.breedWith(25, 28, {from: coo});
await instance.breedWith(32, 1, {from: coo});
await instance.breedWith(20, 36, {from: coo});
await instance.breedWith(16, 9, {from: coo});
await instance.breedWith(19, 3, {from: coo});
await instance.breedWith(38, 35, {from: coo});
await instance.breedWith(27, 8, {from: coo});
await instance.breedWith(24, 4, {from: coo});
await instance.breedWith(5, 22, {from: coo});
await instance.breedWith(17, 13, {from: coo});
await instance.breedWith(6, 7, {from: coo});
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
await instance.giveBirth(40);
await instance.giveBirth(33);
await instance.giveBirth(39);
await instance.giveBirth(23);
await instance.giveBirth(2);
await instance.giveBirth(26);
await instance.giveBirth(31);
await instance.giveBirth(37);
await instance.giveBirth(25);
await instance.giveBirth(32);
await instance.giveBirth(20);
await instance.giveBirth(16);
await instance.giveBirth(19);
await instance.giveBirth(38);
await instance.giveBirth(27);
await instance.giveBirth(24);
await instance.giveBirth(5);
await instance.giveBirth(17);
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
