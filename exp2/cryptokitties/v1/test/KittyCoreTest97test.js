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
await instance.createPromoKitty(336556670, coo, {from: coo,value: 0});
await instance.createPromoKitty(167704323, coo, {from: coo,value: 0});
await instance.createPromoKitty(98255161, coo, {from: coo,value: 0});
await instance.createPromoKitty(704567779, coo, {from: coo,value: 0});
await instance.createPromoKitty(338911616, coo, {from: coo,value: 0});
await instance.createPromoKitty(935948115, coo, {from: coo,value: 0});
await instance.createPromoKitty(953490867, coo, {from: coo,value: 0});
await instance.createPromoKitty(343581756, coo, {from: coo,value: 0});
await instance.createPromoKitty(382316409, coo, {from: coo,value: 0});
await instance.createPromoKitty(418159051, coo, {from: coo,value: 0});
await instance.createPromoKitty(955219114, coo, {from: coo,value: 0});
await instance.createPromoKitty(543817346, coo, {from: coo,value: 0});
await instance.createPromoKitty(406242231, coo, {from: coo,value: 0});
await instance.createPromoKitty(835710472, coo, {from: coo,value: 0});
await instance.createPromoKitty(912401732, coo, {from: coo,value: 0});
await instance.createPromoKitty(948210089, coo, {from: coo,value: 0});
await instance.createPromoKitty(815042460, coo, {from: coo,value: 0});
await instance.createPromoKitty(381248499, coo, {from: coo,value: 0});
await instance.createPromoKitty(997363835, coo, {from: coo,value: 0});
await instance.createPromoKitty(880679177, coo, {from: coo,value: 0});
await instance.createPromoKitty(33495887, coo, {from: coo,value: 0});
await instance.createPromoKitty(741365638, coo, {from: coo,value: 0});
await instance.createPromoKitty(545134138, coo, {from: coo,value: 0});
await instance.createPromoKitty(140979074, coo, {from: coo,value: 0});
await instance.createPromoKitty(326994166, coo, {from: coo,value: 0});
await instance.createPromoKitty(947523034, coo, {from: coo,value: 0});
await instance.createPromoKitty(672240045, coo, {from: coo,value: 0});
await instance.createPromoKitty(238694043, coo, {from: coo,value: 0});
await instance.createPromoKitty(280517631, coo, {from: coo,value: 0});
await instance.createPromoKitty(692245808, coo, {from: coo,value: 0});
await instance.createPromoKitty(693440669, coo, {from: coo,value: 0});
await instance.createPromoKitty(80161145, coo, {from: coo,value: 0});
await instance.createPromoKitty(565079236, coo, {from: coo,value: 0});
await instance.createPromoKitty(604628135, coo, {from: coo,value: 0});
await instance.createPromoKitty(909904314, coo, {from: coo,value: 0});
await instance.createPromoKitty(69694918, coo, {from: coo,value: 0});
await instance.createPromoKitty(30295760, coo, {from: coo,value: 0});
await instance.createPromoKitty(430423869, coo, {from: coo,value: 0});
await instance.createPromoKitty(715813151, coo, {from: coo,value: 0});
await instance.createPromoKitty(5769250, coo, {from: coo,value: 0});
await instance.createPromoKitty(186700136, coo, {from: coo,value: 0});
await instance.createPromoKitty(389016917, coo, {from: coo,value: 0});
await instance.createPromoKitty(150657991, coo, {from: coo,value: 0});
await instance.createPromoKitty(219979297, coo, {from: coo,value: 0});
await instance.createPromoKitty(184568906, coo, {from: coo,value: 0});
await instance.createPromoKitty(663910656, coo, {from: coo,value: 0});
await instance.createPromoKitty(964428566, coo, {from: coo,value: 0});
await instance.createPromoKitty(71233525, coo, {from: coo,value: 0});
await instance.createPromoKitty(682116612, coo, {from: coo,value: 0});
await instance.createPromoKitty(801928987, coo, {from: coo,value: 0});
await instance.createPromoKitty(983872874, coo, {from: coo,value: 0});
await instance.createPromoKitty(343884625, coo, {from: coo,value: 0});
await instance.createPromoKitty(501695008, coo, {from: coo,value: 0});
await instance.createPromoKitty(856378555, coo, {from: coo,value: 0});
await instance.createPromoKitty(628596169, coo, {from: coo,value: 0});
await instance.createPromoKitty(829352353, coo, {from: coo,value: 0});
await instance.createPromoKitty(102744208, coo, {from: coo,value: 0});
await instance.createPromoKitty(831781649, coo, {from: coo,value: 0});
await instance.createPromoKitty(448202010, coo, {from: coo,value: 0});
await instance.createPromoKitty(429112725, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(3, 36, {from: coo});
await instance.breedWith(20, 24, {from: coo});
await instance.breedWith(38, 37, {from: coo});
await instance.breedWith(4, 10, {from: coo});
await instance.breedWith(6, 17, {from: coo});
await instance.breedWith(25, 9, {from: coo});
await instance.breedWith(2, 21, {from: coo});
await instance.breedWith(14, 22, {from: coo});
await instance.breedWith(13, 30, {from: coo});
await instance.breedWith(39, 8, {from: coo});
await instance.breedWith(32, 18, {from: coo});
await instance.breedWith(23, 7, {from: coo});
await instance.breedWith(31, 29, {from: coo});
await instance.breedWith(26, 19, {from: coo});
await instance.breedWith(34, 33, {from: coo});
await instance.breedWith(16, 40, {from: coo});
await instance.breedWith(15, 5, {from: coo});
await instance.breedWith(11, 1, {from: coo});
await instance.breedWith(12, 27, {from: coo});
await instance.breedWith(28, 35, {from: coo});
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
await instance.giveBirth(3);
await instance.giveBirth(20);
await instance.giveBirth(38);
await instance.giveBirth(4);
await instance.giveBirth(6);
await instance.giveBirth(25);
await instance.giveBirth(2);
await instance.giveBirth(14);
await instance.giveBirth(13);
await instance.giveBirth(39);
await instance.giveBirth(32);
await instance.giveBirth(23);
await instance.giveBirth(31);
await instance.giveBirth(26);
await instance.giveBirth(34);
await instance.giveBirth(16);
await instance.giveBirth(15);
await instance.giveBirth(11);
await instance.giveBirth(12);
await instance.giveBirth(28);
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
