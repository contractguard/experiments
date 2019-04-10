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
await instance.createPromoKitty(962656850, coo, {from: coo,value: 0});
await instance.createPromoKitty(29740067, coo, {from: coo,value: 0});
await instance.createPromoKitty(892748611, coo, {from: coo,value: 0});
await instance.createPromoKitty(941627895, coo, {from: coo,value: 0});
await instance.createPromoKitty(137235789, coo, {from: coo,value: 0});
await instance.createPromoKitty(117998028, coo, {from: coo,value: 0});
await instance.createPromoKitty(971562577, coo, {from: coo,value: 0});
await instance.createPromoKitty(284643192, coo, {from: coo,value: 0});
await instance.createPromoKitty(196194610, coo, {from: coo,value: 0});
await instance.createPromoKitty(940609487, coo, {from: coo,value: 0});
await instance.createPromoKitty(216191512, coo, {from: coo,value: 0});
await instance.createPromoKitty(501518234, coo, {from: coo,value: 0});
await instance.createPromoKitty(103117876, coo, {from: coo,value: 0});
await instance.createPromoKitty(571836535, coo, {from: coo,value: 0});
await instance.createPromoKitty(673194016, coo, {from: coo,value: 0});
await instance.createPromoKitty(343671565, coo, {from: coo,value: 0});
await instance.createPromoKitty(292309414, coo, {from: coo,value: 0});
await instance.createPromoKitty(336181036, coo, {from: coo,value: 0});
await instance.createPromoKitty(776489847, coo, {from: coo,value: 0});
await instance.createPromoKitty(707894594, coo, {from: coo,value: 0});
await instance.createPromoKitty(265136600, coo, {from: coo,value: 0});
await instance.createPromoKitty(466697007, coo, {from: coo,value: 0});
await instance.createPromoKitty(351066695, coo, {from: coo,value: 0});
await instance.createPromoKitty(836888600, coo, {from: coo,value: 0});
await instance.createPromoKitty(762293076, coo, {from: coo,value: 0});
await instance.createPromoKitty(910172027, coo, {from: coo,value: 0});
await instance.createPromoKitty(965281709, coo, {from: coo,value: 0});
await instance.createPromoKitty(254937278, coo, {from: coo,value: 0});
await instance.createPromoKitty(643135919, coo, {from: coo,value: 0});
await instance.createPromoKitty(965483370, coo, {from: coo,value: 0});
await instance.createPromoKitty(772344375, coo, {from: coo,value: 0});
await instance.createPromoKitty(153235876, coo, {from: coo,value: 0});
await instance.createPromoKitty(944877908, coo, {from: coo,value: 0});
await instance.createPromoKitty(254887719, coo, {from: coo,value: 0});
await instance.createPromoKitty(694802245, coo, {from: coo,value: 0});
await instance.createPromoKitty(921039431, coo, {from: coo,value: 0});
await instance.createPromoKitty(312989091, coo, {from: coo,value: 0});
await instance.createPromoKitty(885605678, coo, {from: coo,value: 0});
await instance.createPromoKitty(434474510, coo, {from: coo,value: 0});
await instance.createPromoKitty(40158189, coo, {from: coo,value: 0});
await instance.createPromoKitty(112877076, coo, {from: coo,value: 0});
await instance.createPromoKitty(842177122, coo, {from: coo,value: 0});
await instance.createPromoKitty(986424048, coo, {from: coo,value: 0});
await instance.createPromoKitty(834035401, coo, {from: coo,value: 0});
await instance.createPromoKitty(292031854, coo, {from: coo,value: 0});
await instance.createPromoKitty(31504960, coo, {from: coo,value: 0});
await instance.createPromoKitty(404337231, coo, {from: coo,value: 0});
await instance.createPromoKitty(687137683, coo, {from: coo,value: 0});
await instance.createPromoKitty(330556882, coo, {from: coo,value: 0});
await instance.createPromoKitty(466382041, coo, {from: coo,value: 0});
await instance.createPromoKitty(293713687, coo, {from: coo,value: 0});
await instance.createPromoKitty(401423162, coo, {from: coo,value: 0});
await instance.createPromoKitty(936309403, coo, {from: coo,value: 0});
await instance.createPromoKitty(300188150, coo, {from: coo,value: 0});
await instance.createPromoKitty(279814265, coo, {from: coo,value: 0});
await instance.createPromoKitty(763780202, coo, {from: coo,value: 0});
await instance.createPromoKitty(595268810, coo, {from: coo,value: 0});
await instance.createPromoKitty(878564652, coo, {from: coo,value: 0});
await instance.createPromoKitty(421526218, coo, {from: coo,value: 0});
await instance.createPromoKitty(959414439, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(22, 8, {from: coo});
await instance.breedWith(36, 34, {from: coo});
await instance.breedWith(12, 21, {from: coo});
await instance.breedWith(7, 3, {from: coo});
await instance.breedWith(25, 33, {from: coo});
await instance.breedWith(29, 37, {from: coo});
await instance.breedWith(32, 38, {from: coo});
await instance.breedWith(13, 10, {from: coo});
await instance.breedWith(5, 9, {from: coo});
await instance.breedWith(1, 2, {from: coo});
await instance.breedWith(11, 18, {from: coo});
await instance.breedWith(31, 26, {from: coo});
await instance.breedWith(40, 16, {from: coo});
await instance.breedWith(30, 20, {from: coo});
await instance.breedWith(28, 15, {from: coo});
await instance.breedWith(27, 35, {from: coo});
await instance.breedWith(24, 4, {from: coo});
await instance.breedWith(39, 17, {from: coo});
await instance.breedWith(23, 19, {from: coo});
await instance.breedWith(6, 14, {from: coo});
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
await instance.giveBirth(22);
await instance.giveBirth(36);
await instance.giveBirth(12);
await instance.giveBirth(7);
await instance.giveBirth(25);
await instance.giveBirth(29);
await instance.giveBirth(32);
await instance.giveBirth(13);
await instance.giveBirth(5);
await instance.giveBirth(1);
await instance.giveBirth(11);
await instance.giveBirth(31);
await instance.giveBirth(40);
await instance.giveBirth(30);
await instance.giveBirth(28);
await instance.giveBirth(27);
await instance.giveBirth(24);
await instance.giveBirth(39);
await instance.giveBirth(23);
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
