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
await instance.createPromoKitty(700704014, coo, {from: coo,value: 0});
await instance.createPromoKitty(524995873, coo, {from: coo,value: 0});
await instance.createPromoKitty(943596315, coo, {from: coo,value: 0});
await instance.createPromoKitty(473763506, coo, {from: coo,value: 0});
await instance.createPromoKitty(715260322, coo, {from: coo,value: 0});
await instance.createPromoKitty(769678267, coo, {from: coo,value: 0});
await instance.createPromoKitty(890817460, coo, {from: coo,value: 0});
await instance.createPromoKitty(341454241, coo, {from: coo,value: 0});
await instance.createPromoKitty(498469643, coo, {from: coo,value: 0});
await instance.createPromoKitty(131552791, coo, {from: coo,value: 0});
await instance.createPromoKitty(550642603, coo, {from: coo,value: 0});
await instance.createPromoKitty(118938491, coo, {from: coo,value: 0});
await instance.createPromoKitty(65680037, coo, {from: coo,value: 0});
await instance.createPromoKitty(891028944, coo, {from: coo,value: 0});
await instance.createPromoKitty(422896585, coo, {from: coo,value: 0});
await instance.createPromoKitty(480592965, coo, {from: coo,value: 0});
await instance.createPromoKitty(328002497, coo, {from: coo,value: 0});
await instance.createPromoKitty(838956965, coo, {from: coo,value: 0});
await instance.createPromoKitty(630167117, coo, {from: coo,value: 0});
await instance.createPromoKitty(228534675, coo, {from: coo,value: 0});
await instance.createPromoKitty(936467657, coo, {from: coo,value: 0});
await instance.createPromoKitty(493395590, coo, {from: coo,value: 0});
await instance.createPromoKitty(560749850, coo, {from: coo,value: 0});
await instance.createPromoKitty(753809403, coo, {from: coo,value: 0});
await instance.createPromoKitty(570960255, coo, {from: coo,value: 0});
await instance.createPromoKitty(344730076, coo, {from: coo,value: 0});
await instance.createPromoKitty(136887920, coo, {from: coo,value: 0});
await instance.createPromoKitty(345466006, coo, {from: coo,value: 0});
await instance.createPromoKitty(946876993, coo, {from: coo,value: 0});
await instance.createPromoKitty(664237024, coo, {from: coo,value: 0});
await instance.createPromoKitty(186477192, coo, {from: coo,value: 0});
await instance.createPromoKitty(68004852, coo, {from: coo,value: 0});
await instance.createPromoKitty(661966157, coo, {from: coo,value: 0});
await instance.createPromoKitty(776909554, coo, {from: coo,value: 0});
await instance.createPromoKitty(558227295, coo, {from: coo,value: 0});
await instance.createPromoKitty(843768759, coo, {from: coo,value: 0});
await instance.createPromoKitty(985271836, coo, {from: coo,value: 0});
await instance.createPromoKitty(598506202, coo, {from: coo,value: 0});
await instance.createPromoKitty(504077629, coo, {from: coo,value: 0});
await instance.createPromoKitty(369871707, coo, {from: coo,value: 0});
await instance.createPromoKitty(666396883, coo, {from: coo,value: 0});
await instance.createPromoKitty(338928883, coo, {from: coo,value: 0});
await instance.createPromoKitty(19877620, coo, {from: coo,value: 0});
await instance.createPromoKitty(791504550, coo, {from: coo,value: 0});
await instance.createPromoKitty(110765123, coo, {from: coo,value: 0});
await instance.createPromoKitty(627897466, coo, {from: coo,value: 0});
await instance.createPromoKitty(189859176, coo, {from: coo,value: 0});
await instance.createPromoKitty(252691143, coo, {from: coo,value: 0});
await instance.createPromoKitty(551776153, coo, {from: coo,value: 0});
await instance.createPromoKitty(220365070, coo, {from: coo,value: 0});
await instance.createPromoKitty(975101692, coo, {from: coo,value: 0});
await instance.createPromoKitty(486341428, coo, {from: coo,value: 0});
await instance.createPromoKitty(190841, coo, {from: coo,value: 0});
await instance.createPromoKitty(739429624, coo, {from: coo,value: 0});
await instance.createPromoKitty(128421880, coo, {from: coo,value: 0});
await instance.createPromoKitty(817312768, coo, {from: coo,value: 0});
await instance.createPromoKitty(494529503, coo, {from: coo,value: 0});
await instance.createPromoKitty(495530893, coo, {from: coo,value: 0});
await instance.createPromoKitty(417545474, coo, {from: coo,value: 0});
await instance.createPromoKitty(132192772, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(7, 23, {from: coo});
await instance.breedWith(22, 36, {from: coo});
await instance.breedWith(20, 11, {from: coo});
await instance.breedWith(6, 40, {from: coo});
await instance.breedWith(39, 5, {from: coo});
await instance.breedWith(17, 21, {from: coo});
await instance.breedWith(10, 29, {from: coo});
await instance.breedWith(30, 24, {from: coo});
await instance.breedWith(26, 18, {from: coo});
await instance.breedWith(31, 8, {from: coo});
await instance.breedWith(15, 1, {from: coo});
await instance.breedWith(38, 12, {from: coo});
await instance.breedWith(9, 37, {from: coo});
await instance.breedWith(2, 3, {from: coo});
await instance.breedWith(34, 32, {from: coo});
await instance.breedWith(25, 19, {from: coo});
await instance.breedWith(33, 16, {from: coo});
await instance.breedWith(27, 14, {from: coo});
await instance.breedWith(13, 28, {from: coo});
await instance.breedWith(35, 4, {from: coo});
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
await instance.giveBirth(22);
await instance.giveBirth(20);
await instance.giveBirth(6);
await instance.giveBirth(39);
await instance.giveBirth(17);
await instance.giveBirth(10);
await instance.giveBirth(30);
await instance.giveBirth(26);
await instance.giveBirth(31);
await instance.giveBirth(15);
await instance.giveBirth(38);
await instance.giveBirth(9);
await instance.giveBirth(2);
await instance.giveBirth(34);
await instance.giveBirth(25);
await instance.giveBirth(33);
await instance.giveBirth(27);
await instance.giveBirth(13);
await instance.giveBirth(35);
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
