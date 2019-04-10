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
await instance.createPromoKitty(694197507, coo, {from: coo,value: 0});
await instance.createPromoKitty(933673007, coo, {from: coo,value: 0});
await instance.createPromoKitty(586570645, coo, {from: coo,value: 0});
await instance.createPromoKitty(608552238, coo, {from: coo,value: 0});
await instance.createPromoKitty(785447680, coo, {from: coo,value: 0});
await instance.createPromoKitty(699997596, coo, {from: coo,value: 0});
await instance.createPromoKitty(935873212, coo, {from: coo,value: 0});
await instance.createPromoKitty(172267593, coo, {from: coo,value: 0});
await instance.createPromoKitty(78894110, coo, {from: coo,value: 0});
await instance.createPromoKitty(670502411, coo, {from: coo,value: 0});
await instance.createPromoKitty(361694202, coo, {from: coo,value: 0});
await instance.createPromoKitty(111355644, coo, {from: coo,value: 0});
await instance.createPromoKitty(263985593, coo, {from: coo,value: 0});
await instance.createPromoKitty(778490149, coo, {from: coo,value: 0});
await instance.createPromoKitty(93258928, coo, {from: coo,value: 0});
await instance.createPromoKitty(958699384, coo, {from: coo,value: 0});
await instance.createPromoKitty(973457317, coo, {from: coo,value: 0});
await instance.createPromoKitty(128331657, coo, {from: coo,value: 0});
await instance.createPromoKitty(898209017, coo, {from: coo,value: 0});
await instance.createPromoKitty(511142371, coo, {from: coo,value: 0});
await instance.createPromoKitty(7230669, coo, {from: coo,value: 0});
await instance.createPromoKitty(242595104, coo, {from: coo,value: 0});
await instance.createPromoKitty(680276670, coo, {from: coo,value: 0});
await instance.createPromoKitty(439875512, coo, {from: coo,value: 0});
await instance.createPromoKitty(531315215, coo, {from: coo,value: 0});
await instance.createPromoKitty(106879454, coo, {from: coo,value: 0});
await instance.createPromoKitty(91899071, coo, {from: coo,value: 0});
await instance.createPromoKitty(834924731, coo, {from: coo,value: 0});
await instance.createPromoKitty(940330301, coo, {from: coo,value: 0});
await instance.createPromoKitty(923066442, coo, {from: coo,value: 0});
await instance.createPromoKitty(599557446, coo, {from: coo,value: 0});
await instance.createPromoKitty(399047298, coo, {from: coo,value: 0});
await instance.createPromoKitty(374189126, coo, {from: coo,value: 0});
await instance.createPromoKitty(674640427, coo, {from: coo,value: 0});
await instance.createPromoKitty(146048205, coo, {from: coo,value: 0});
await instance.createPromoKitty(390573038, coo, {from: coo,value: 0});
await instance.createPromoKitty(56900941, coo, {from: coo,value: 0});
await instance.createPromoKitty(333056014, coo, {from: coo,value: 0});
await instance.createPromoKitty(823709684, coo, {from: coo,value: 0});
await instance.createPromoKitty(685498716, coo, {from: coo,value: 0});
await instance.createPromoKitty(915242253, coo, {from: coo,value: 0});
await instance.createPromoKitty(131137273, coo, {from: coo,value: 0});
await instance.createPromoKitty(333702182, coo, {from: coo,value: 0});
await instance.createPromoKitty(687002129, coo, {from: coo,value: 0});
await instance.createPromoKitty(131272597, coo, {from: coo,value: 0});
await instance.createPromoKitty(756159530, coo, {from: coo,value: 0});
await instance.createPromoKitty(981536823, coo, {from: coo,value: 0});
await instance.createPromoKitty(469708988, coo, {from: coo,value: 0});
await instance.createPromoKitty(198580034, coo, {from: coo,value: 0});
await instance.createPromoKitty(62290178, coo, {from: coo,value: 0});
await instance.createPromoKitty(547379496, coo, {from: coo,value: 0});
await instance.createPromoKitty(121702928, coo, {from: coo,value: 0});
await instance.createPromoKitty(514876276, coo, {from: coo,value: 0});
await instance.createPromoKitty(575077829, coo, {from: coo,value: 0});
await instance.createPromoKitty(806421239, coo, {from: coo,value: 0});
await instance.createPromoKitty(458781695, coo, {from: coo,value: 0});
await instance.createPromoKitty(854658405, coo, {from: coo,value: 0});
await instance.createPromoKitty(71754833, coo, {from: coo,value: 0});
await instance.createPromoKitty(513796687, coo, {from: coo,value: 0});
await instance.createPromoKitty(983590357, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(2, 27, {from: coo});
await instance.breedWith(28, 16, {from: coo});
await instance.breedWith(36, 11, {from: coo});
await instance.breedWith(31, 37, {from: coo});
await instance.breedWith(14, 4, {from: coo});
await instance.breedWith(33, 22, {from: coo});
await instance.breedWith(30, 17, {from: coo});
await instance.breedWith(29, 40, {from: coo});
await instance.breedWith(9, 25, {from: coo});
await instance.breedWith(26, 38, {from: coo});
await instance.breedWith(20, 15, {from: coo});
await instance.breedWith(6, 18, {from: coo});
await instance.breedWith(35, 32, {from: coo});
await instance.breedWith(3, 21, {from: coo});
await instance.breedWith(10, 39, {from: coo});
await instance.breedWith(13, 8, {from: coo});
await instance.breedWith(19, 1, {from: coo});
await instance.breedWith(12, 34, {from: coo});
await instance.breedWith(23, 5, {from: coo});
await instance.breedWith(7, 24, {from: coo});
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
await instance.giveBirth(2);
await instance.giveBirth(28);
await instance.giveBirth(36);
await instance.giveBirth(31);
await instance.giveBirth(14);
await instance.giveBirth(33);
await instance.giveBirth(30);
await instance.giveBirth(29);
await instance.giveBirth(9);
await instance.giveBirth(26);
await instance.giveBirth(20);
await instance.giveBirth(6);
await instance.giveBirth(35);
await instance.giveBirth(3);
await instance.giveBirth(10);
await instance.giveBirth(13);
await instance.giveBirth(19);
await instance.giveBirth(12);
await instance.giveBirth(23);
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
