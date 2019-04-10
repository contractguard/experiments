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
await instance.createPromoKitty(860708240, coo, {from: coo,value: 0});
await instance.createPromoKitty(601672056, coo, {from: coo,value: 0});
await instance.createPromoKitty(107758620, coo, {from: coo,value: 0});
await instance.createPromoKitty(672210709, coo, {from: coo,value: 0});
await instance.createPromoKitty(717544996, coo, {from: coo,value: 0});
await instance.createPromoKitty(975703424, coo, {from: coo,value: 0});
await instance.createPromoKitty(37592587, coo, {from: coo,value: 0});
await instance.createPromoKitty(286538970, coo, {from: coo,value: 0});
await instance.createPromoKitty(93549161, coo, {from: coo,value: 0});
await instance.createPromoKitty(94444694, coo, {from: coo,value: 0});
await instance.createPromoKitty(648501617, coo, {from: coo,value: 0});
await instance.createPromoKitty(217471558, coo, {from: coo,value: 0});
await instance.createPromoKitty(753521665, coo, {from: coo,value: 0});
await instance.createPromoKitty(963165527, coo, {from: coo,value: 0});
await instance.createPromoKitty(502906509, coo, {from: coo,value: 0});
await instance.createPromoKitty(204289516, coo, {from: coo,value: 0});
await instance.createPromoKitty(633329895, coo, {from: coo,value: 0});
await instance.createPromoKitty(754855572, coo, {from: coo,value: 0});
await instance.createPromoKitty(82129494, coo, {from: coo,value: 0});
await instance.createPromoKitty(194729307, coo, {from: coo,value: 0});
await instance.createPromoKitty(166192709, coo, {from: coo,value: 0});
await instance.createPromoKitty(609023769, coo, {from: coo,value: 0});
await instance.createPromoKitty(635175337, coo, {from: coo,value: 0});
await instance.createPromoKitty(152544524, coo, {from: coo,value: 0});
await instance.createPromoKitty(731959641, coo, {from: coo,value: 0});
await instance.createPromoKitty(184545905, coo, {from: coo,value: 0});
await instance.createPromoKitty(926780436, coo, {from: coo,value: 0});
await instance.createPromoKitty(609573907, coo, {from: coo,value: 0});
await instance.createPromoKitty(853619297, coo, {from: coo,value: 0});
await instance.createPromoKitty(671421001, coo, {from: coo,value: 0});
await instance.createPromoKitty(916879997, coo, {from: coo,value: 0});
await instance.createPromoKitty(802574645, coo, {from: coo,value: 0});
await instance.createPromoKitty(243939676, coo, {from: coo,value: 0});
await instance.createPromoKitty(679189739, coo, {from: coo,value: 0});
await instance.createPromoKitty(402093284, coo, {from: coo,value: 0});
await instance.createPromoKitty(513730482, coo, {from: coo,value: 0});
await instance.createPromoKitty(16166092, coo, {from: coo,value: 0});
await instance.createPromoKitty(824353509, coo, {from: coo,value: 0});
await instance.createPromoKitty(822749571, coo, {from: coo,value: 0});
await instance.createPromoKitty(37276643, coo, {from: coo,value: 0});
await instance.createPromoKitty(583318390, coo, {from: coo,value: 0});
await instance.createPromoKitty(875179143, coo, {from: coo,value: 0});
await instance.createPromoKitty(696056759, coo, {from: coo,value: 0});
await instance.createPromoKitty(977455951, coo, {from: coo,value: 0});
await instance.createPromoKitty(974242113, coo, {from: coo,value: 0});
await instance.createPromoKitty(299870636, coo, {from: coo,value: 0});
await instance.createPromoKitty(832641221, coo, {from: coo,value: 0});
await instance.createPromoKitty(769316397, coo, {from: coo,value: 0});
await instance.createPromoKitty(344555398, coo, {from: coo,value: 0});
await instance.createPromoKitty(217130118, coo, {from: coo,value: 0});
await instance.createPromoKitty(676601862, coo, {from: coo,value: 0});
await instance.createPromoKitty(582212976, coo, {from: coo,value: 0});
await instance.createPromoKitty(204743325, coo, {from: coo,value: 0});
await instance.createPromoKitty(562183301, coo, {from: coo,value: 0});
await instance.createPromoKitty(578682189, coo, {from: coo,value: 0});
await instance.createPromoKitty(243400002, coo, {from: coo,value: 0});
await instance.createPromoKitty(746449235, coo, {from: coo,value: 0});
await instance.createPromoKitty(473219896, coo, {from: coo,value: 0});
await instance.createPromoKitty(518081948, coo, {from: coo,value: 0});
await instance.createPromoKitty(497380854, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(30, 32, {from: coo});
await instance.breedWith(12, 3, {from: coo});
await instance.breedWith(9, 5, {from: coo});
await instance.breedWith(6, 13, {from: coo});
await instance.breedWith(18, 15, {from: coo});
await instance.breedWith(11, 19, {from: coo});
await instance.breedWith(10, 17, {from: coo});
await instance.breedWith(31, 38, {from: coo});
await instance.breedWith(24, 20, {from: coo});
await instance.breedWith(34, 39, {from: coo});
await instance.breedWith(26, 35, {from: coo});
await instance.breedWith(1, 25, {from: coo});
await instance.breedWith(37, 27, {from: coo});
await instance.breedWith(29, 21, {from: coo});
await instance.breedWith(40, 28, {from: coo});
await instance.breedWith(16, 7, {from: coo});
await instance.breedWith(22, 23, {from: coo});
await instance.breedWith(36, 14, {from: coo});
await instance.breedWith(33, 4, {from: coo});
await instance.breedWith(2, 8, {from: coo});
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
await instance.giveBirth(12);
await instance.giveBirth(9);
await instance.giveBirth(6);
await instance.giveBirth(18);
await instance.giveBirth(11);
await instance.giveBirth(10);
await instance.giveBirth(31);
await instance.giveBirth(24);
await instance.giveBirth(34);
await instance.giveBirth(26);
await instance.giveBirth(1);
await instance.giveBirth(37);
await instance.giveBirth(29);
await instance.giveBirth(40);
await instance.giveBirth(16);
await instance.giveBirth(22);
await instance.giveBirth(36);
await instance.giveBirth(33);
await instance.giveBirth(2);
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
