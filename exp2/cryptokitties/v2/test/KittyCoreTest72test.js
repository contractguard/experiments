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
await instance.createPromoKitty(178298961, coo, {from: coo,value: 0});
await instance.createPromoKitty(794455154, coo, {from: coo,value: 0});
await instance.createPromoKitty(822630582, coo, {from: coo,value: 0});
await instance.createPromoKitty(988026477, coo, {from: coo,value: 0});
await instance.createPromoKitty(474779476, coo, {from: coo,value: 0});
await instance.createPromoKitty(873612284, coo, {from: coo,value: 0});
await instance.createPromoKitty(205786559, coo, {from: coo,value: 0});
await instance.createPromoKitty(486637706, coo, {from: coo,value: 0});
await instance.createPromoKitty(493652159, coo, {from: coo,value: 0});
await instance.createPromoKitty(377546912, coo, {from: coo,value: 0});
await instance.createPromoKitty(484172097, coo, {from: coo,value: 0});
await instance.createPromoKitty(145811146, coo, {from: coo,value: 0});
await instance.createPromoKitty(803678549, coo, {from: coo,value: 0});
await instance.createPromoKitty(817056529, coo, {from: coo,value: 0});
await instance.createPromoKitty(670724670, coo, {from: coo,value: 0});
await instance.createPromoKitty(4161600, coo, {from: coo,value: 0});
await instance.createPromoKitty(363953514, coo, {from: coo,value: 0});
await instance.createPromoKitty(724329308, coo, {from: coo,value: 0});
await instance.createPromoKitty(891518655, coo, {from: coo,value: 0});
await instance.createPromoKitty(980519088, coo, {from: coo,value: 0});
await instance.createPromoKitty(2365467, coo, {from: coo,value: 0});
await instance.createPromoKitty(300736158, coo, {from: coo,value: 0});
await instance.createPromoKitty(237386622, coo, {from: coo,value: 0});
await instance.createPromoKitty(598311348, coo, {from: coo,value: 0});
await instance.createPromoKitty(172386685, coo, {from: coo,value: 0});
await instance.createPromoKitty(37568077, coo, {from: coo,value: 0});
await instance.createPromoKitty(523491099, coo, {from: coo,value: 0});
await instance.createPromoKitty(577528348, coo, {from: coo,value: 0});
await instance.createPromoKitty(525086465, coo, {from: coo,value: 0});
await instance.createPromoKitty(877205062, coo, {from: coo,value: 0});
await instance.createPromoKitty(377898701, coo, {from: coo,value: 0});
await instance.createPromoKitty(267091224, coo, {from: coo,value: 0});
await instance.createPromoKitty(42172480, coo, {from: coo,value: 0});
await instance.createPromoKitty(626271814, coo, {from: coo,value: 0});
await instance.createPromoKitty(632634799, coo, {from: coo,value: 0});
await instance.createPromoKitty(83360969, coo, {from: coo,value: 0});
await instance.createPromoKitty(879808855, coo, {from: coo,value: 0});
await instance.createPromoKitty(810079422, coo, {from: coo,value: 0});
await instance.createPromoKitty(453284143, coo, {from: coo,value: 0});
await instance.createPromoKitty(106609076, coo, {from: coo,value: 0});
await instance.createPromoKitty(599139891, coo, {from: coo,value: 0});
await instance.createPromoKitty(698466916, coo, {from: coo,value: 0});
await instance.createPromoKitty(178198079, coo, {from: coo,value: 0});
await instance.createPromoKitty(914674418, coo, {from: coo,value: 0});
await instance.createPromoKitty(316270941, coo, {from: coo,value: 0});
await instance.createPromoKitty(849173511, coo, {from: coo,value: 0});
await instance.createPromoKitty(169936366, coo, {from: coo,value: 0});
await instance.createPromoKitty(66916253, coo, {from: coo,value: 0});
await instance.createPromoKitty(950104661, coo, {from: coo,value: 0});
await instance.createPromoKitty(402387598, coo, {from: coo,value: 0});
await instance.createPromoKitty(224336773, coo, {from: coo,value: 0});
await instance.createPromoKitty(375859646, coo, {from: coo,value: 0});
await instance.createPromoKitty(861942924, coo, {from: coo,value: 0});
await instance.createPromoKitty(690957096, coo, {from: coo,value: 0});
await instance.createPromoKitty(817698760, coo, {from: coo,value: 0});
await instance.createPromoKitty(195136425, coo, {from: coo,value: 0});
await instance.createPromoKitty(32861716, coo, {from: coo,value: 0});
await instance.createPromoKitty(31614974, coo, {from: coo,value: 0});
await instance.createPromoKitty(94605358, coo, {from: coo,value: 0});
await instance.createPromoKitty(161474730, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(10, 21, {from: coo});
await instance.breedWith(38, 28, {from: coo});
await instance.breedWith(40, 7, {from: coo});
await instance.breedWith(37, 32, {from: coo});
await instance.breedWith(30, 35, {from: coo});
await instance.breedWith(12, 31, {from: coo});
await instance.breedWith(18, 33, {from: coo});
await instance.breedWith(13, 2, {from: coo});
await instance.breedWith(3, 17, {from: coo});
await instance.breedWith(26, 11, {from: coo});
await instance.breedWith(20, 22, {from: coo});
await instance.breedWith(36, 14, {from: coo});
await instance.breedWith(9, 1, {from: coo});
await instance.breedWith(15, 5, {from: coo});
await instance.breedWith(25, 8, {from: coo});
await instance.breedWith(34, 29, {from: coo});
await instance.breedWith(27, 19, {from: coo});
await instance.breedWith(6, 23, {from: coo});
await instance.breedWith(24, 16, {from: coo});
await instance.breedWith(39, 4, {from: coo});
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
await instance.giveBirth(10);
await instance.giveBirth(38);
await instance.giveBirth(40);
await instance.giveBirth(37);
await instance.giveBirth(30);
await instance.giveBirth(12);
await instance.giveBirth(18);
await instance.giveBirth(13);
await instance.giveBirth(3);
await instance.giveBirth(26);
await instance.giveBirth(20);
await instance.giveBirth(36);
await instance.giveBirth(9);
await instance.giveBirth(15);
await instance.giveBirth(25);
await instance.giveBirth(34);
await instance.giveBirth(27);
await instance.giveBirth(6);
await instance.giveBirth(24);
await instance.giveBirth(39);
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
