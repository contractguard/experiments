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
await instance.createPromoKitty(328887550, coo, {from: coo,value: 0});
await instance.createPromoKitty(578906236, coo, {from: coo,value: 0});
await instance.createPromoKitty(153562733, coo, {from: coo,value: 0});
await instance.createPromoKitty(280151191, coo, {from: coo,value: 0});
await instance.createPromoKitty(303939795, coo, {from: coo,value: 0});
await instance.createPromoKitty(478402725, coo, {from: coo,value: 0});
await instance.createPromoKitty(828363233, coo, {from: coo,value: 0});
await instance.createPromoKitty(635244080, coo, {from: coo,value: 0});
await instance.createPromoKitty(404359499, coo, {from: coo,value: 0});
await instance.createPromoKitty(68838386, coo, {from: coo,value: 0});
await instance.createPromoKitty(899862159, coo, {from: coo,value: 0});
await instance.createPromoKitty(555911453, coo, {from: coo,value: 0});
await instance.createPromoKitty(850247533, coo, {from: coo,value: 0});
await instance.createPromoKitty(879400959, coo, {from: coo,value: 0});
await instance.createPromoKitty(984303673, coo, {from: coo,value: 0});
await instance.createPromoKitty(992213581, coo, {from: coo,value: 0});
await instance.createPromoKitty(574975925, coo, {from: coo,value: 0});
await instance.createPromoKitty(672381412, coo, {from: coo,value: 0});
await instance.createPromoKitty(149939034, coo, {from: coo,value: 0});
await instance.createPromoKitty(445673319, coo, {from: coo,value: 0});
await instance.createPromoKitty(581018812, coo, {from: coo,value: 0});
await instance.createPromoKitty(692551445, coo, {from: coo,value: 0});
await instance.createPromoKitty(384647705, coo, {from: coo,value: 0});
await instance.createPromoKitty(386021094, coo, {from: coo,value: 0});
await instance.createPromoKitty(225320884, coo, {from: coo,value: 0});
await instance.createPromoKitty(919035246, coo, {from: coo,value: 0});
await instance.createPromoKitty(864885977, coo, {from: coo,value: 0});
await instance.createPromoKitty(52760798, coo, {from: coo,value: 0});
await instance.createPromoKitty(46864065, coo, {from: coo,value: 0});
await instance.createPromoKitty(300108684, coo, {from: coo,value: 0});
await instance.createPromoKitty(768852613, coo, {from: coo,value: 0});
await instance.createPromoKitty(595543690, coo, {from: coo,value: 0});
await instance.createPromoKitty(398703841, coo, {from: coo,value: 0});
await instance.createPromoKitty(594726482, coo, {from: coo,value: 0});
await instance.createPromoKitty(732372104, coo, {from: coo,value: 0});
await instance.createPromoKitty(162602052, coo, {from: coo,value: 0});
await instance.createPromoKitty(292357355, coo, {from: coo,value: 0});
await instance.createPromoKitty(846529386, coo, {from: coo,value: 0});
await instance.createPromoKitty(353600298, coo, {from: coo,value: 0});
await instance.createPromoKitty(760724140, coo, {from: coo,value: 0});
await instance.createPromoKitty(40949736, coo, {from: coo,value: 0});
await instance.createPromoKitty(999429331, coo, {from: coo,value: 0});
await instance.createPromoKitty(546300144, coo, {from: coo,value: 0});
await instance.createPromoKitty(83596135, coo, {from: coo,value: 0});
await instance.createPromoKitty(871923811, coo, {from: coo,value: 0});
await instance.createPromoKitty(767933651, coo, {from: coo,value: 0});
await instance.createPromoKitty(284812596, coo, {from: coo,value: 0});
await instance.createPromoKitty(445206918, coo, {from: coo,value: 0});
await instance.createPromoKitty(426442764, coo, {from: coo,value: 0});
await instance.createPromoKitty(162472436, coo, {from: coo,value: 0});
await instance.createPromoKitty(758756433, coo, {from: coo,value: 0});
await instance.createPromoKitty(572821914, coo, {from: coo,value: 0});
await instance.createPromoKitty(571367316, coo, {from: coo,value: 0});
await instance.createPromoKitty(432021982, coo, {from: coo,value: 0});
await instance.createPromoKitty(289924240, coo, {from: coo,value: 0});
await instance.createPromoKitty(463398251, coo, {from: coo,value: 0});
await instance.createPromoKitty(895485530, coo, {from: coo,value: 0});
await instance.createPromoKitty(450543329, coo, {from: coo,value: 0});
await instance.createPromoKitty(746043461, coo, {from: coo,value: 0});
await instance.createPromoKitty(297533932, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(7, 11, {from: coo});
await instance.breedWith(30, 9, {from: coo});
await instance.breedWith(19, 8, {from: coo});
await instance.breedWith(1, 32, {from: coo});
await instance.breedWith(29, 33, {from: coo});
await instance.breedWith(14, 39, {from: coo});
await instance.breedWith(6, 20, {from: coo});
await instance.breedWith(25, 27, {from: coo});
await instance.breedWith(24, 13, {from: coo});
await instance.breedWith(2, 37, {from: coo});
await instance.breedWith(17, 15, {from: coo});
await instance.breedWith(38, 3, {from: coo});
await instance.breedWith(21, 35, {from: coo});
await instance.breedWith(16, 34, {from: coo});
await instance.breedWith(10, 4, {from: coo});
await instance.breedWith(36, 31, {from: coo});
await instance.breedWith(22, 26, {from: coo});
await instance.breedWith(18, 12, {from: coo});
await instance.breedWith(5, 40, {from: coo});
await instance.breedWith(23, 28, {from: coo});
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
await instance.giveBirth(7);
await instance.giveBirth(30);
await instance.giveBirth(19);
await instance.giveBirth(1);
await instance.giveBirth(29);
await instance.giveBirth(14);
await instance.giveBirth(6);
await instance.giveBirth(25);
await instance.giveBirth(24);
await instance.giveBirth(2);
await instance.giveBirth(17);
await instance.giveBirth(38);
await instance.giveBirth(21);
await instance.giveBirth(16);
await instance.giveBirth(10);
await instance.giveBirth(36);
await instance.giveBirth(22);
await instance.giveBirth(18);
await instance.giveBirth(5);
await instance.giveBirth(23);
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
