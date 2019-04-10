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
await instance.createPromoKitty(468854844, coo, {from: coo,value: 0});
await instance.createPromoKitty(779392405, coo, {from: coo,value: 0});
await instance.createPromoKitty(77586793, coo, {from: coo,value: 0});
await instance.createPromoKitty(733935656, coo, {from: coo,value: 0});
await instance.createPromoKitty(638219313, coo, {from: coo,value: 0});
await instance.createPromoKitty(2784612, coo, {from: coo,value: 0});
await instance.createPromoKitty(747735467, coo, {from: coo,value: 0});
await instance.createPromoKitty(578929753, coo, {from: coo,value: 0});
await instance.createPromoKitty(889011177, coo, {from: coo,value: 0});
await instance.createPromoKitty(240784333, coo, {from: coo,value: 0});
await instance.createPromoKitty(490814003, coo, {from: coo,value: 0});
await instance.createPromoKitty(989424015, coo, {from: coo,value: 0});
await instance.createPromoKitty(670564511, coo, {from: coo,value: 0});
await instance.createPromoKitty(250056677, coo, {from: coo,value: 0});
await instance.createPromoKitty(560223844, coo, {from: coo,value: 0});
await instance.createPromoKitty(90603437, coo, {from: coo,value: 0});
await instance.createPromoKitty(731256824, coo, {from: coo,value: 0});
await instance.createPromoKitty(885868456, coo, {from: coo,value: 0});
await instance.createPromoKitty(131081542, coo, {from: coo,value: 0});
await instance.createPromoKitty(405606224, coo, {from: coo,value: 0});
await instance.createPromoKitty(597609631, coo, {from: coo,value: 0});
await instance.createPromoKitty(248258184, coo, {from: coo,value: 0});
await instance.createPromoKitty(158011005, coo, {from: coo,value: 0});
await instance.createPromoKitty(422155996, coo, {from: coo,value: 0});
await instance.createPromoKitty(843160448, coo, {from: coo,value: 0});
await instance.createPromoKitty(716452962, coo, {from: coo,value: 0});
await instance.createPromoKitty(500260369, coo, {from: coo,value: 0});
await instance.createPromoKitty(871492712, coo, {from: coo,value: 0});
await instance.createPromoKitty(632709911, coo, {from: coo,value: 0});
await instance.createPromoKitty(368933824, coo, {from: coo,value: 0});
await instance.createPromoKitty(717287605, coo, {from: coo,value: 0});
await instance.createPromoKitty(31980150, coo, {from: coo,value: 0});
await instance.createPromoKitty(934007215, coo, {from: coo,value: 0});
await instance.createPromoKitty(489764700, coo, {from: coo,value: 0});
await instance.createPromoKitty(828564812, coo, {from: coo,value: 0});
await instance.createPromoKitty(623685299, coo, {from: coo,value: 0});
await instance.createPromoKitty(445810304, coo, {from: coo,value: 0});
await instance.createPromoKitty(681849478, coo, {from: coo,value: 0});
await instance.createPromoKitty(643320633, coo, {from: coo,value: 0});
await instance.createPromoKitty(644537, coo, {from: coo,value: 0});
await instance.createPromoKitty(953104089, coo, {from: coo,value: 0});
await instance.createPromoKitty(997134456, coo, {from: coo,value: 0});
await instance.createPromoKitty(914336794, coo, {from: coo,value: 0});
await instance.createPromoKitty(491685586, coo, {from: coo,value: 0});
await instance.createPromoKitty(836941984, coo, {from: coo,value: 0});
await instance.createPromoKitty(9349665, coo, {from: coo,value: 0});
await instance.createPromoKitty(700113344, coo, {from: coo,value: 0});
await instance.createPromoKitty(227303045, coo, {from: coo,value: 0});
await instance.createPromoKitty(248347724, coo, {from: coo,value: 0});
await instance.createPromoKitty(574539876, coo, {from: coo,value: 0});
await instance.createPromoKitty(624068694, coo, {from: coo,value: 0});
await instance.createPromoKitty(193462697, coo, {from: coo,value: 0});
await instance.createPromoKitty(909265435, coo, {from: coo,value: 0});
await instance.createPromoKitty(692100078, coo, {from: coo,value: 0});
await instance.createPromoKitty(809876544, coo, {from: coo,value: 0});
await instance.createPromoKitty(878394313, coo, {from: coo,value: 0});
await instance.createPromoKitty(717295169, coo, {from: coo,value: 0});
await instance.createPromoKitty(950119166, coo, {from: coo,value: 0});
await instance.createPromoKitty(879354547, coo, {from: coo,value: 0});
await instance.createPromoKitty(94179692, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(23, 22, {from: coo});
await instance.breedWith(33, 20, {from: coo});
await instance.breedWith(6, 18, {from: coo});
await instance.breedWith(36, 40, {from: coo});
await instance.breedWith(16, 25, {from: coo});
await instance.breedWith(39, 7, {from: coo});
await instance.breedWith(2, 27, {from: coo});
await instance.breedWith(29, 31, {from: coo});
await instance.breedWith(4, 12, {from: coo});
await instance.breedWith(26, 19, {from: coo});
await instance.breedWith(34, 9, {from: coo});
await instance.breedWith(3, 35, {from: coo});
await instance.breedWith(30, 24, {from: coo});
await instance.breedWith(15, 5, {from: coo});
await instance.breedWith(32, 1, {from: coo});
await instance.breedWith(8, 13, {from: coo});
await instance.breedWith(21, 14, {from: coo});
await instance.breedWith(38, 10, {from: coo});
await instance.breedWith(17, 11, {from: coo});
await instance.breedWith(28, 37, {from: coo});
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
await instance.giveBirth(23);
await instance.giveBirth(33);
await instance.giveBirth(6);
await instance.giveBirth(36);
await instance.giveBirth(16);
await instance.giveBirth(39);
await instance.giveBirth(2);
await instance.giveBirth(29);
await instance.giveBirth(4);
await instance.giveBirth(26);
await instance.giveBirth(34);
await instance.giveBirth(3);
await instance.giveBirth(30);
await instance.giveBirth(15);
await instance.giveBirth(32);
await instance.giveBirth(8);
await instance.giveBirth(21);
await instance.giveBirth(38);
await instance.giveBirth(17);
await instance.giveBirth(28);
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
