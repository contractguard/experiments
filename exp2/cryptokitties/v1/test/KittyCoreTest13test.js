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
await instance.createPromoKitty(33437366, coo, {from: coo,value: 0});
await instance.createPromoKitty(286665777, coo, {from: coo,value: 0});
await instance.createPromoKitty(605662307, coo, {from: coo,value: 0});
await instance.createPromoKitty(374483255, coo, {from: coo,value: 0});
await instance.createPromoKitty(406737995, coo, {from: coo,value: 0});
await instance.createPromoKitty(483404523, coo, {from: coo,value: 0});
await instance.createPromoKitty(99269578, coo, {from: coo,value: 0});
await instance.createPromoKitty(168198247, coo, {from: coo,value: 0});
await instance.createPromoKitty(536703769, coo, {from: coo,value: 0});
await instance.createPromoKitty(556709928, coo, {from: coo,value: 0});
await instance.createPromoKitty(358021077, coo, {from: coo,value: 0});
await instance.createPromoKitty(819051688, coo, {from: coo,value: 0});
await instance.createPromoKitty(112232195, coo, {from: coo,value: 0});
await instance.createPromoKitty(446558133, coo, {from: coo,value: 0});
await instance.createPromoKitty(639503769, coo, {from: coo,value: 0});
await instance.createPromoKitty(402102447, coo, {from: coo,value: 0});
await instance.createPromoKitty(620393, coo, {from: coo,value: 0});
await instance.createPromoKitty(807271552, coo, {from: coo,value: 0});
await instance.createPromoKitty(139509308, coo, {from: coo,value: 0});
await instance.createPromoKitty(813360025, coo, {from: coo,value: 0});
await instance.createPromoKitty(977387576, coo, {from: coo,value: 0});
await instance.createPromoKitty(462934534, coo, {from: coo,value: 0});
await instance.createPromoKitty(581249562, coo, {from: coo,value: 0});
await instance.createPromoKitty(936486575, coo, {from: coo,value: 0});
await instance.createPromoKitty(407829441, coo, {from: coo,value: 0});
await instance.createPromoKitty(117949890, coo, {from: coo,value: 0});
await instance.createPromoKitty(266082926, coo, {from: coo,value: 0});
await instance.createPromoKitty(761378140, coo, {from: coo,value: 0});
await instance.createPromoKitty(310892256, coo, {from: coo,value: 0});
await instance.createPromoKitty(104847834, coo, {from: coo,value: 0});
await instance.createPromoKitty(847818556, coo, {from: coo,value: 0});
await instance.createPromoKitty(872298122, coo, {from: coo,value: 0});
await instance.createPromoKitty(336866936, coo, {from: coo,value: 0});
await instance.createPromoKitty(640039717, coo, {from: coo,value: 0});
await instance.createPromoKitty(103791165, coo, {from: coo,value: 0});
await instance.createPromoKitty(223587669, coo, {from: coo,value: 0});
await instance.createPromoKitty(259235464, coo, {from: coo,value: 0});
await instance.createPromoKitty(473753445, coo, {from: coo,value: 0});
await instance.createPromoKitty(913541034, coo, {from: coo,value: 0});
await instance.createPromoKitty(717410093, coo, {from: coo,value: 0});
await instance.createPromoKitty(833964870, coo, {from: coo,value: 0});
await instance.createPromoKitty(409816856, coo, {from: coo,value: 0});
await instance.createPromoKitty(897991832, coo, {from: coo,value: 0});
await instance.createPromoKitty(91081954, coo, {from: coo,value: 0});
await instance.createPromoKitty(590859568, coo, {from: coo,value: 0});
await instance.createPromoKitty(29751816, coo, {from: coo,value: 0});
await instance.createPromoKitty(595226200, coo, {from: coo,value: 0});
await instance.createPromoKitty(20963920, coo, {from: coo,value: 0});
await instance.createPromoKitty(897904593, coo, {from: coo,value: 0});
await instance.createPromoKitty(935186776, coo, {from: coo,value: 0});
await instance.createPromoKitty(889428509, coo, {from: coo,value: 0});
await instance.createPromoKitty(81116073, coo, {from: coo,value: 0});
await instance.createPromoKitty(861152175, coo, {from: coo,value: 0});
await instance.createPromoKitty(30752240, coo, {from: coo,value: 0});
await instance.createPromoKitty(955060342, coo, {from: coo,value: 0});
await instance.createPromoKitty(70156164, coo, {from: coo,value: 0});
await instance.createPromoKitty(735081038, coo, {from: coo,value: 0});
await instance.createPromoKitty(78598392, coo, {from: coo,value: 0});
await instance.createPromoKitty(282161699, coo, {from: coo,value: 0});
await instance.createPromoKitty(155401345, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(14, 19, {from: coo});
await instance.breedWith(1, 5, {from: coo});
await instance.breedWith(31, 15, {from: coo});
await instance.breedWith(40, 38, {from: coo});
await instance.breedWith(27, 13, {from: coo});
await instance.breedWith(22, 20, {from: coo});
await instance.breedWith(10, 2, {from: coo});
await instance.breedWith(8, 34, {from: coo});
await instance.breedWith(30, 16, {from: coo});
await instance.breedWith(25, 24, {from: coo});
await instance.breedWith(12, 36, {from: coo});
await instance.breedWith(4, 17, {from: coo});
await instance.breedWith(35, 11, {from: coo});
await instance.breedWith(9, 39, {from: coo});
await instance.breedWith(6, 7, {from: coo});
await instance.breedWith(29, 28, {from: coo});
await instance.breedWith(33, 23, {from: coo});
await instance.breedWith(18, 32, {from: coo});
await instance.breedWith(37, 26, {from: coo});
await instance.breedWith(3, 21, {from: coo});
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
await instance.giveBirth(14);
await instance.giveBirth(1);
await instance.giveBirth(31);
await instance.giveBirth(40);
await instance.giveBirth(27);
await instance.giveBirth(22);
await instance.giveBirth(10);
await instance.giveBirth(8);
await instance.giveBirth(30);
await instance.giveBirth(25);
await instance.giveBirth(12);
await instance.giveBirth(4);
await instance.giveBirth(35);
await instance.giveBirth(9);
await instance.giveBirth(6);
await instance.giveBirth(29);
await instance.giveBirth(33);
await instance.giveBirth(18);
await instance.giveBirth(37);
await instance.giveBirth(3);
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
