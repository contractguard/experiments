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
await instance.createPromoKitty(523775605, coo, {from: coo,value: 0});
await instance.createPromoKitty(911982986, coo, {from: coo,value: 0});
await instance.createPromoKitty(959023550, coo, {from: coo,value: 0});
await instance.createPromoKitty(934636614, coo, {from: coo,value: 0});
await instance.createPromoKitty(904358028, coo, {from: coo,value: 0});
await instance.createPromoKitty(54870042, coo, {from: coo,value: 0});
await instance.createPromoKitty(693345534, coo, {from: coo,value: 0});
await instance.createPromoKitty(465935745, coo, {from: coo,value: 0});
await instance.createPromoKitty(203148974, coo, {from: coo,value: 0});
await instance.createPromoKitty(783107624, coo, {from: coo,value: 0});
await instance.createPromoKitty(893314157, coo, {from: coo,value: 0});
await instance.createPromoKitty(177644349, coo, {from: coo,value: 0});
await instance.createPromoKitty(183527837, coo, {from: coo,value: 0});
await instance.createPromoKitty(354401065, coo, {from: coo,value: 0});
await instance.createPromoKitty(586844066, coo, {from: coo,value: 0});
await instance.createPromoKitty(885835768, coo, {from: coo,value: 0});
await instance.createPromoKitty(200551335, coo, {from: coo,value: 0});
await instance.createPromoKitty(861391491, coo, {from: coo,value: 0});
await instance.createPromoKitty(576768475, coo, {from: coo,value: 0});
await instance.createPromoKitty(921221106, coo, {from: coo,value: 0});
await instance.createPromoKitty(287048951, coo, {from: coo,value: 0});
await instance.createPromoKitty(284230350, coo, {from: coo,value: 0});
await instance.createPromoKitty(722005507, coo, {from: coo,value: 0});
await instance.createPromoKitty(137814256, coo, {from: coo,value: 0});
await instance.createPromoKitty(461188609, coo, {from: coo,value: 0});
await instance.createPromoKitty(168583291, coo, {from: coo,value: 0});
await instance.createPromoKitty(639467771, coo, {from: coo,value: 0});
await instance.createPromoKitty(560096165, coo, {from: coo,value: 0});
await instance.createPromoKitty(444144007, coo, {from: coo,value: 0});
await instance.createPromoKitty(576499575, coo, {from: coo,value: 0});
await instance.createPromoKitty(139881507, coo, {from: coo,value: 0});
await instance.createPromoKitty(275740006, coo, {from: coo,value: 0});
await instance.createPromoKitty(250444171, coo, {from: coo,value: 0});
await instance.createPromoKitty(816883307, coo, {from: coo,value: 0});
await instance.createPromoKitty(764712044, coo, {from: coo,value: 0});
await instance.createPromoKitty(349157384, coo, {from: coo,value: 0});
await instance.createPromoKitty(297188759, coo, {from: coo,value: 0});
await instance.createPromoKitty(132234708, coo, {from: coo,value: 0});
await instance.createPromoKitty(809727344, coo, {from: coo,value: 0});
await instance.createPromoKitty(970582970, coo, {from: coo,value: 0});
await instance.createPromoKitty(953798715, coo, {from: coo,value: 0});
await instance.createPromoKitty(655171943, coo, {from: coo,value: 0});
await instance.createPromoKitty(832598473, coo, {from: coo,value: 0});
await instance.createPromoKitty(246414862, coo, {from: coo,value: 0});
await instance.createPromoKitty(12330130, coo, {from: coo,value: 0});
await instance.createPromoKitty(988768038, coo, {from: coo,value: 0});
await instance.createPromoKitty(919769515, coo, {from: coo,value: 0});
await instance.createPromoKitty(98397909, coo, {from: coo,value: 0});
await instance.createPromoKitty(824799374, coo, {from: coo,value: 0});
await instance.createPromoKitty(992513388, coo, {from: coo,value: 0});
await instance.createPromoKitty(623334508, coo, {from: coo,value: 0});
await instance.createPromoKitty(477367061, coo, {from: coo,value: 0});
await instance.createPromoKitty(419371602, coo, {from: coo,value: 0});
await instance.createPromoKitty(641662207, coo, {from: coo,value: 0});
await instance.createPromoKitty(768133951, coo, {from: coo,value: 0});
await instance.createPromoKitty(382398788, coo, {from: coo,value: 0});
await instance.createPromoKitty(947523435, coo, {from: coo,value: 0});
await instance.createPromoKitty(492320708, coo, {from: coo,value: 0});
await instance.createPromoKitty(260843741, coo, {from: coo,value: 0});
await instance.createPromoKitty(684041601, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(9, 38, {from: coo});
await instance.breedWith(5, 10, {from: coo});
await instance.breedWith(36, 26, {from: coo});
await instance.breedWith(22, 3, {from: coo});
await instance.breedWith(30, 21, {from: coo});
await instance.breedWith(34, 7, {from: coo});
await instance.breedWith(40, 1, {from: coo});
await instance.breedWith(28, 18, {from: coo});
await instance.breedWith(20, 11, {from: coo});
await instance.breedWith(4, 2, {from: coo});
await instance.breedWith(23, 25, {from: coo});
await instance.breedWith(24, 15, {from: coo});
await instance.breedWith(12, 32, {from: coo});
await instance.breedWith(37, 17, {from: coo});
await instance.breedWith(27, 8, {from: coo});
await instance.breedWith(16, 39, {from: coo});
await instance.breedWith(6, 13, {from: coo});
await instance.breedWith(33, 35, {from: coo});
await instance.breedWith(29, 31, {from: coo});
await instance.breedWith(19, 14, {from: coo});
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
await instance.giveBirth(9);
await instance.giveBirth(5);
await instance.giveBirth(36);
await instance.giveBirth(22);
await instance.giveBirth(30);
await instance.giveBirth(34);
await instance.giveBirth(40);
await instance.giveBirth(28);
await instance.giveBirth(20);
await instance.giveBirth(4);
await instance.giveBirth(23);
await instance.giveBirth(24);
await instance.giveBirth(12);
await instance.giveBirth(37);
await instance.giveBirth(27);
await instance.giveBirth(16);
await instance.giveBirth(6);
await instance.giveBirth(33);
await instance.giveBirth(29);
await instance.giveBirth(19);
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
