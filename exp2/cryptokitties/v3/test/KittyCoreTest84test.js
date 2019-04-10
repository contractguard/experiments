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
await instance.createPromoKitty(948427266, coo, {from: coo,value: 0});
await instance.createPromoKitty(212771965, coo, {from: coo,value: 0});
await instance.createPromoKitty(14004478, coo, {from: coo,value: 0});
await instance.createPromoKitty(236124558, coo, {from: coo,value: 0});
await instance.createPromoKitty(569043443, coo, {from: coo,value: 0});
await instance.createPromoKitty(868538903, coo, {from: coo,value: 0});
await instance.createPromoKitty(404293779, coo, {from: coo,value: 0});
await instance.createPromoKitty(940424155, coo, {from: coo,value: 0});
await instance.createPromoKitty(422913742, coo, {from: coo,value: 0});
await instance.createPromoKitty(811609296, coo, {from: coo,value: 0});
await instance.createPromoKitty(674515029, coo, {from: coo,value: 0});
await instance.createPromoKitty(466859161, coo, {from: coo,value: 0});
await instance.createPromoKitty(942838450, coo, {from: coo,value: 0});
await instance.createPromoKitty(849358558, coo, {from: coo,value: 0});
await instance.createPromoKitty(332780460, coo, {from: coo,value: 0});
await instance.createPromoKitty(478228348, coo, {from: coo,value: 0});
await instance.createPromoKitty(466368507, coo, {from: coo,value: 0});
await instance.createPromoKitty(745773551, coo, {from: coo,value: 0});
await instance.createPromoKitty(163886209, coo, {from: coo,value: 0});
await instance.createPromoKitty(319876991, coo, {from: coo,value: 0});
await instance.createPromoKitty(280191651, coo, {from: coo,value: 0});
await instance.createPromoKitty(674870105, coo, {from: coo,value: 0});
await instance.createPromoKitty(926482250, coo, {from: coo,value: 0});
await instance.createPromoKitty(649383485, coo, {from: coo,value: 0});
await instance.createPromoKitty(143788703, coo, {from: coo,value: 0});
await instance.createPromoKitty(513307344, coo, {from: coo,value: 0});
await instance.createPromoKitty(364946058, coo, {from: coo,value: 0});
await instance.createPromoKitty(869266515, coo, {from: coo,value: 0});
await instance.createPromoKitty(929780643, coo, {from: coo,value: 0});
await instance.createPromoKitty(748493800, coo, {from: coo,value: 0});
await instance.createPromoKitty(537158906, coo, {from: coo,value: 0});
await instance.createPromoKitty(104610784, coo, {from: coo,value: 0});
await instance.createPromoKitty(855914470, coo, {from: coo,value: 0});
await instance.createPromoKitty(267870745, coo, {from: coo,value: 0});
await instance.createPromoKitty(897067602, coo, {from: coo,value: 0});
await instance.createPromoKitty(830919102, coo, {from: coo,value: 0});
await instance.createPromoKitty(75641624, coo, {from: coo,value: 0});
await instance.createPromoKitty(309369827, coo, {from: coo,value: 0});
await instance.createPromoKitty(82598377, coo, {from: coo,value: 0});
await instance.createPromoKitty(796834572, coo, {from: coo,value: 0});
await instance.createPromoKitty(619312637, coo, {from: coo,value: 0});
await instance.createPromoKitty(772926882, coo, {from: coo,value: 0});
await instance.createPromoKitty(38097907, coo, {from: coo,value: 0});
await instance.createPromoKitty(655516943, coo, {from: coo,value: 0});
await instance.createPromoKitty(631883991, coo, {from: coo,value: 0});
await instance.createPromoKitty(949018450, coo, {from: coo,value: 0});
await instance.createPromoKitty(348882524, coo, {from: coo,value: 0});
await instance.createPromoKitty(993138927, coo, {from: coo,value: 0});
await instance.createPromoKitty(216825779, coo, {from: coo,value: 0});
await instance.createPromoKitty(649988293, coo, {from: coo,value: 0});
await instance.createPromoKitty(100095596, coo, {from: coo,value: 0});
await instance.createPromoKitty(267580366, coo, {from: coo,value: 0});
await instance.createPromoKitty(1669080, coo, {from: coo,value: 0});
await instance.createPromoKitty(292999485, coo, {from: coo,value: 0});
await instance.createPromoKitty(110005164, coo, {from: coo,value: 0});
await instance.createPromoKitty(686979480, coo, {from: coo,value: 0});
await instance.createPromoKitty(717644719, coo, {from: coo,value: 0});
await instance.createPromoKitty(145784477, coo, {from: coo,value: 0});
await instance.createPromoKitty(807183689, coo, {from: coo,value: 0});
await instance.createPromoKitty(359674298, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(16, 39, {from: coo});
await instance.breedWith(35, 7, {from: coo});
await instance.breedWith(32, 15, {from: coo});
await instance.breedWith(13, 37, {from: coo});
await instance.breedWith(4, 14, {from: coo});
await instance.breedWith(40, 5, {from: coo});
await instance.breedWith(33, 27, {from: coo});
await instance.breedWith(19, 1, {from: coo});
await instance.breedWith(20, 34, {from: coo});
await instance.breedWith(8, 12, {from: coo});
await instance.breedWith(3, 17, {from: coo});
await instance.breedWith(9, 38, {from: coo});
await instance.breedWith(6, 2, {from: coo});
await instance.breedWith(21, 30, {from: coo});
await instance.breedWith(18, 23, {from: coo});
await instance.breedWith(36, 26, {from: coo});
await instance.breedWith(11, 31, {from: coo});
await instance.breedWith(22, 10, {from: coo});
await instance.breedWith(29, 25, {from: coo});
await instance.breedWith(24, 28, {from: coo});
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
await instance.giveBirth(16);
await instance.giveBirth(35);
await instance.giveBirth(32);
await instance.giveBirth(13);
await instance.giveBirth(4);
await instance.giveBirth(40);
await instance.giveBirth(33);
await instance.giveBirth(19);
await instance.giveBirth(20);
await instance.giveBirth(8);
await instance.giveBirth(3);
await instance.giveBirth(9);
await instance.giveBirth(6);
await instance.giveBirth(21);
await instance.giveBirth(18);
await instance.giveBirth(36);
await instance.giveBirth(11);
await instance.giveBirth(22);
await instance.giveBirth(29);
await instance.giveBirth(24);
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
