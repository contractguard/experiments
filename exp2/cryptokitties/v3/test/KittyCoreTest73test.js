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
await instance.createPromoKitty(515172539, coo, {from: coo,value: 0});
await instance.createPromoKitty(975520775, coo, {from: coo,value: 0});
await instance.createPromoKitty(237453829, coo, {from: coo,value: 0});
await instance.createPromoKitty(298818499, coo, {from: coo,value: 0});
await instance.createPromoKitty(672990752, coo, {from: coo,value: 0});
await instance.createPromoKitty(484287070, coo, {from: coo,value: 0});
await instance.createPromoKitty(494921399, coo, {from: coo,value: 0});
await instance.createPromoKitty(545148965, coo, {from: coo,value: 0});
await instance.createPromoKitty(377197479, coo, {from: coo,value: 0});
await instance.createPromoKitty(573640641, coo, {from: coo,value: 0});
await instance.createPromoKitty(463170650, coo, {from: coo,value: 0});
await instance.createPromoKitty(415985005, coo, {from: coo,value: 0});
await instance.createPromoKitty(942524424, coo, {from: coo,value: 0});
await instance.createPromoKitty(944607869, coo, {from: coo,value: 0});
await instance.createPromoKitty(200455385, coo, {from: coo,value: 0});
await instance.createPromoKitty(457587423, coo, {from: coo,value: 0});
await instance.createPromoKitty(704989235, coo, {from: coo,value: 0});
await instance.createPromoKitty(562642782, coo, {from: coo,value: 0});
await instance.createPromoKitty(608453128, coo, {from: coo,value: 0});
await instance.createPromoKitty(744997385, coo, {from: coo,value: 0});
await instance.createPromoKitty(30859298, coo, {from: coo,value: 0});
await instance.createPromoKitty(247470369, coo, {from: coo,value: 0});
await instance.createPromoKitty(516314841, coo, {from: coo,value: 0});
await instance.createPromoKitty(871262322, coo, {from: coo,value: 0});
await instance.createPromoKitty(9196427, coo, {from: coo,value: 0});
await instance.createPromoKitty(786114893, coo, {from: coo,value: 0});
await instance.createPromoKitty(481748800, coo, {from: coo,value: 0});
await instance.createPromoKitty(568583100, coo, {from: coo,value: 0});
await instance.createPromoKitty(677132320, coo, {from: coo,value: 0});
await instance.createPromoKitty(95377698, coo, {from: coo,value: 0});
await instance.createPromoKitty(661058150, coo, {from: coo,value: 0});
await instance.createPromoKitty(462122932, coo, {from: coo,value: 0});
await instance.createPromoKitty(535901953, coo, {from: coo,value: 0});
await instance.createPromoKitty(269400784, coo, {from: coo,value: 0});
await instance.createPromoKitty(557171410, coo, {from: coo,value: 0});
await instance.createPromoKitty(753205394, coo, {from: coo,value: 0});
await instance.createPromoKitty(858006820, coo, {from: coo,value: 0});
await instance.createPromoKitty(43896892, coo, {from: coo,value: 0});
await instance.createPromoKitty(537197055, coo, {from: coo,value: 0});
await instance.createPromoKitty(636838186, coo, {from: coo,value: 0});
await instance.createPromoKitty(401087023, coo, {from: coo,value: 0});
await instance.createPromoKitty(131431804, coo, {from: coo,value: 0});
await instance.createPromoKitty(496058578, coo, {from: coo,value: 0});
await instance.createPromoKitty(748287996, coo, {from: coo,value: 0});
await instance.createPromoKitty(910118163, coo, {from: coo,value: 0});
await instance.createPromoKitty(371542253, coo, {from: coo,value: 0});
await instance.createPromoKitty(108428713, coo, {from: coo,value: 0});
await instance.createPromoKitty(517644493, coo, {from: coo,value: 0});
await instance.createPromoKitty(328612520, coo, {from: coo,value: 0});
await instance.createPromoKitty(244173255, coo, {from: coo,value: 0});
await instance.createPromoKitty(619743283, coo, {from: coo,value: 0});
await instance.createPromoKitty(689902789, coo, {from: coo,value: 0});
await instance.createPromoKitty(416528893, coo, {from: coo,value: 0});
await instance.createPromoKitty(987378504, coo, {from: coo,value: 0});
await instance.createPromoKitty(147461221, coo, {from: coo,value: 0});
await instance.createPromoKitty(72169378, coo, {from: coo,value: 0});
await instance.createPromoKitty(312709143, coo, {from: coo,value: 0});
await instance.createPromoKitty(670381699, coo, {from: coo,value: 0});
await instance.createPromoKitty(125818467, coo, {from: coo,value: 0});
await instance.createPromoKitty(44793988, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(34, 26, {from: coo});
await instance.breedWith(14, 9, {from: coo});
await instance.breedWith(1, 28, {from: coo});
await instance.breedWith(35, 15, {from: coo});
await instance.breedWith(5, 38, {from: coo});
await instance.breedWith(36, 8, {from: coo});
await instance.breedWith(11, 13, {from: coo});
await instance.breedWith(6, 19, {from: coo});
await instance.breedWith(30, 31, {from: coo});
await instance.breedWith(24, 17, {from: coo});
await instance.breedWith(7, 4, {from: coo});
await instance.breedWith(27, 3, {from: coo});
await instance.breedWith(16, 2, {from: coo});
await instance.breedWith(22, 23, {from: coo});
await instance.breedWith(10, 32, {from: coo});
await instance.breedWith(39, 20, {from: coo});
await instance.breedWith(21, 18, {from: coo});
await instance.breedWith(12, 33, {from: coo});
await instance.breedWith(40, 37, {from: coo});
await instance.breedWith(29, 25, {from: coo});
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
await instance.giveBirth(34);
await instance.giveBirth(14);
await instance.giveBirth(1);
await instance.giveBirth(35);
await instance.giveBirth(5);
await instance.giveBirth(36);
await instance.giveBirth(11);
await instance.giveBirth(6);
await instance.giveBirth(30);
await instance.giveBirth(24);
await instance.giveBirth(7);
await instance.giveBirth(27);
await instance.giveBirth(16);
await instance.giveBirth(22);
await instance.giveBirth(10);
await instance.giveBirth(39);
await instance.giveBirth(21);
await instance.giveBirth(12);
await instance.giveBirth(40);
await instance.giveBirth(29);
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
