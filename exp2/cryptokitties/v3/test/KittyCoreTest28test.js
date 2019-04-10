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
await instance.createPromoKitty(227653552, coo, {from: coo,value: 0});
await instance.createPromoKitty(391822487, coo, {from: coo,value: 0});
await instance.createPromoKitty(20535593, coo, {from: coo,value: 0});
await instance.createPromoKitty(393915232, coo, {from: coo,value: 0});
await instance.createPromoKitty(820087660, coo, {from: coo,value: 0});
await instance.createPromoKitty(538367973, coo, {from: coo,value: 0});
await instance.createPromoKitty(926298333, coo, {from: coo,value: 0});
await instance.createPromoKitty(54705433, coo, {from: coo,value: 0});
await instance.createPromoKitty(985058603, coo, {from: coo,value: 0});
await instance.createPromoKitty(43117352, coo, {from: coo,value: 0});
await instance.createPromoKitty(319592133, coo, {from: coo,value: 0});
await instance.createPromoKitty(431432510, coo, {from: coo,value: 0});
await instance.createPromoKitty(822234491, coo, {from: coo,value: 0});
await instance.createPromoKitty(836858461, coo, {from: coo,value: 0});
await instance.createPromoKitty(959968799, coo, {from: coo,value: 0});
await instance.createPromoKitty(444383803, coo, {from: coo,value: 0});
await instance.createPromoKitty(936729801, coo, {from: coo,value: 0});
await instance.createPromoKitty(26495037, coo, {from: coo,value: 0});
await instance.createPromoKitty(973288890, coo, {from: coo,value: 0});
await instance.createPromoKitty(91408327, coo, {from: coo,value: 0});
await instance.createPromoKitty(616530681, coo, {from: coo,value: 0});
await instance.createPromoKitty(80735333, coo, {from: coo,value: 0});
await instance.createPromoKitty(625269489, coo, {from: coo,value: 0});
await instance.createPromoKitty(217168762, coo, {from: coo,value: 0});
await instance.createPromoKitty(375576132, coo, {from: coo,value: 0});
await instance.createPromoKitty(940746027, coo, {from: coo,value: 0});
await instance.createPromoKitty(23347592, coo, {from: coo,value: 0});
await instance.createPromoKitty(425706576, coo, {from: coo,value: 0});
await instance.createPromoKitty(480131109, coo, {from: coo,value: 0});
await instance.createPromoKitty(513049615, coo, {from: coo,value: 0});
await instance.createPromoKitty(608726427, coo, {from: coo,value: 0});
await instance.createPromoKitty(87447437, coo, {from: coo,value: 0});
await instance.createPromoKitty(948835515, coo, {from: coo,value: 0});
await instance.createPromoKitty(429834529, coo, {from: coo,value: 0});
await instance.createPromoKitty(218915256, coo, {from: coo,value: 0});
await instance.createPromoKitty(314851330, coo, {from: coo,value: 0});
await instance.createPromoKitty(914184147, coo, {from: coo,value: 0});
await instance.createPromoKitty(753247185, coo, {from: coo,value: 0});
await instance.createPromoKitty(24518706, coo, {from: coo,value: 0});
await instance.createPromoKitty(685844508, coo, {from: coo,value: 0});
await instance.createPromoKitty(704289152, coo, {from: coo,value: 0});
await instance.createPromoKitty(392470573, coo, {from: coo,value: 0});
await instance.createPromoKitty(992379181, coo, {from: coo,value: 0});
await instance.createPromoKitty(589705399, coo, {from: coo,value: 0});
await instance.createPromoKitty(300798232, coo, {from: coo,value: 0});
await instance.createPromoKitty(786205073, coo, {from: coo,value: 0});
await instance.createPromoKitty(486055983, coo, {from: coo,value: 0});
await instance.createPromoKitty(684550539, coo, {from: coo,value: 0});
await instance.createPromoKitty(242923305, coo, {from: coo,value: 0});
await instance.createPromoKitty(918236249, coo, {from: coo,value: 0});
await instance.createPromoKitty(320654866, coo, {from: coo,value: 0});
await instance.createPromoKitty(276149067, coo, {from: coo,value: 0});
await instance.createPromoKitty(92208714, coo, {from: coo,value: 0});
await instance.createPromoKitty(148704260, coo, {from: coo,value: 0});
await instance.createPromoKitty(579851684, coo, {from: coo,value: 0});
await instance.createPromoKitty(38336834, coo, {from: coo,value: 0});
await instance.createPromoKitty(641173235, coo, {from: coo,value: 0});
await instance.createPromoKitty(762590559, coo, {from: coo,value: 0});
await instance.createPromoKitty(420002107, coo, {from: coo,value: 0});
await instance.createPromoKitty(444093243, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(30, 37, {from: coo});
await instance.breedWith(32, 23, {from: coo});
await instance.breedWith(39, 5, {from: coo});
await instance.breedWith(29, 35, {from: coo});
await instance.breedWith(31, 3, {from: coo});
await instance.breedWith(21, 16, {from: coo});
await instance.breedWith(25, 40, {from: coo});
await instance.breedWith(36, 27, {from: coo});
await instance.breedWith(10, 11, {from: coo});
await instance.breedWith(19, 38, {from: coo});
await instance.breedWith(6, 14, {from: coo});
await instance.breedWith(17, 22, {from: coo});
await instance.breedWith(4, 33, {from: coo});
await instance.breedWith(20, 34, {from: coo});
await instance.breedWith(1, 12, {from: coo});
await instance.breedWith(9, 26, {from: coo});
await instance.breedWith(28, 2, {from: coo});
await instance.breedWith(15, 7, {from: coo});
await instance.breedWith(18, 24, {from: coo});
await instance.breedWith(13, 8, {from: coo});
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
await instance.giveBirth(30);
await instance.giveBirth(32);
await instance.giveBirth(39);
await instance.giveBirth(29);
await instance.giveBirth(31);
await instance.giveBirth(21);
await instance.giveBirth(25);
await instance.giveBirth(36);
await instance.giveBirth(10);
await instance.giveBirth(19);
await instance.giveBirth(6);
await instance.giveBirth(17);
await instance.giveBirth(4);
await instance.giveBirth(20);
await instance.giveBirth(1);
await instance.giveBirth(9);
await instance.giveBirth(28);
await instance.giveBirth(15);
await instance.giveBirth(18);
await instance.giveBirth(13);
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
});
it('attack', async() => {
 await instance.breedWith(57, bigValue, {from: coo});
});
});
