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
await instance.createPromoKitty(211701520, coo, {from: coo,value: 0});
await instance.createPromoKitty(410031170, coo, {from: coo,value: 0});
await instance.createPromoKitty(483849785, coo, {from: coo,value: 0});
await instance.createPromoKitty(572979651, coo, {from: coo,value: 0});
await instance.createPromoKitty(641654845, coo, {from: coo,value: 0});
await instance.createPromoKitty(568329124, coo, {from: coo,value: 0});
await instance.createPromoKitty(744410551, coo, {from: coo,value: 0});
await instance.createPromoKitty(912188763, coo, {from: coo,value: 0});
await instance.createPromoKitty(271961016, coo, {from: coo,value: 0});
await instance.createPromoKitty(399523368, coo, {from: coo,value: 0});
await instance.createPromoKitty(498873163, coo, {from: coo,value: 0});
await instance.createPromoKitty(313981496, coo, {from: coo,value: 0});
await instance.createPromoKitty(469512566, coo, {from: coo,value: 0});
await instance.createPromoKitty(42105229, coo, {from: coo,value: 0});
await instance.createPromoKitty(46846400, coo, {from: coo,value: 0});
await instance.createPromoKitty(974301694, coo, {from: coo,value: 0});
await instance.createPromoKitty(758116269, coo, {from: coo,value: 0});
await instance.createPromoKitty(462842376, coo, {from: coo,value: 0});
await instance.createPromoKitty(664510571, coo, {from: coo,value: 0});
await instance.createPromoKitty(373698201, coo, {from: coo,value: 0});
await instance.createPromoKitty(858422193, coo, {from: coo,value: 0});
await instance.createPromoKitty(816045782, coo, {from: coo,value: 0});
await instance.createPromoKitty(77854471, coo, {from: coo,value: 0});
await instance.createPromoKitty(213225152, coo, {from: coo,value: 0});
await instance.createPromoKitty(831369210, coo, {from: coo,value: 0});
await instance.createPromoKitty(20176097, coo, {from: coo,value: 0});
await instance.createPromoKitty(955093379, coo, {from: coo,value: 0});
await instance.createPromoKitty(612313581, coo, {from: coo,value: 0});
await instance.createPromoKitty(476297303, coo, {from: coo,value: 0});
await instance.createPromoKitty(946378866, coo, {from: coo,value: 0});
await instance.createPromoKitty(342279603, coo, {from: coo,value: 0});
await instance.createPromoKitty(956218140, coo, {from: coo,value: 0});
await instance.createPromoKitty(13090856, coo, {from: coo,value: 0});
await instance.createPromoKitty(731001605, coo, {from: coo,value: 0});
await instance.createPromoKitty(464734389, coo, {from: coo,value: 0});
await instance.createPromoKitty(192563167, coo, {from: coo,value: 0});
await instance.createPromoKitty(927053125, coo, {from: coo,value: 0});
await instance.createPromoKitty(675046672, coo, {from: coo,value: 0});
await instance.createPromoKitty(964750906, coo, {from: coo,value: 0});
await instance.createPromoKitty(857230206, coo, {from: coo,value: 0});
await instance.createPromoKitty(182281807, coo, {from: coo,value: 0});
await instance.createPromoKitty(831379413, coo, {from: coo,value: 0});
await instance.createPromoKitty(123356252, coo, {from: coo,value: 0});
await instance.createPromoKitty(480429469, coo, {from: coo,value: 0});
await instance.createPromoKitty(415637422, coo, {from: coo,value: 0});
await instance.createPromoKitty(733741198, coo, {from: coo,value: 0});
await instance.createPromoKitty(942112388, coo, {from: coo,value: 0});
await instance.createPromoKitty(63730415, coo, {from: coo,value: 0});
await instance.createPromoKitty(441660463, coo, {from: coo,value: 0});
await instance.createPromoKitty(113724167, coo, {from: coo,value: 0});
await instance.createPromoKitty(605786408, coo, {from: coo,value: 0});
await instance.createPromoKitty(852447985, coo, {from: coo,value: 0});
await instance.createPromoKitty(594503019, coo, {from: coo,value: 0});
await instance.createPromoKitty(620267961, coo, {from: coo,value: 0});
await instance.createPromoKitty(672192653, coo, {from: coo,value: 0});
await instance.createPromoKitty(636448553, coo, {from: coo,value: 0});
await instance.createPromoKitty(98473565, coo, {from: coo,value: 0});
await instance.createPromoKitty(404969270, coo, {from: coo,value: 0});
await instance.createPromoKitty(389639236, coo, {from: coo,value: 0});
await instance.createPromoKitty(208180865, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(30, 38, {from: coo});
await instance.breedWith(29, 24, {from: coo});
await instance.breedWith(21, 1, {from: coo});
await instance.breedWith(25, 9, {from: coo});
await instance.breedWith(36, 13, {from: coo});
await instance.breedWith(5, 37, {from: coo});
await instance.breedWith(11, 19, {from: coo});
await instance.breedWith(33, 4, {from: coo});
await instance.breedWith(15, 7, {from: coo});
await instance.breedWith(31, 2, {from: coo});
await instance.breedWith(14, 32, {from: coo});
await instance.breedWith(22, 18, {from: coo});
await instance.breedWith(10, 8, {from: coo});
await instance.breedWith(27, 12, {from: coo});
await instance.breedWith(34, 28, {from: coo});
await instance.breedWith(40, 35, {from: coo});
await instance.breedWith(20, 39, {from: coo});
await instance.breedWith(16, 26, {from: coo});
await instance.breedWith(17, 23, {from: coo});
await instance.breedWith(3, 6, {from: coo});
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
await instance.giveBirth(29);
await instance.giveBirth(21);
await instance.giveBirth(25);
await instance.giveBirth(36);
await instance.giveBirth(5);
await instance.giveBirth(11);
await instance.giveBirth(33);
await instance.giveBirth(15);
await instance.giveBirth(31);
await instance.giveBirth(14);
await instance.giveBirth(22);
await instance.giveBirth(10);
await instance.giveBirth(27);
await instance.giveBirth(34);
await instance.giveBirth(40);
await instance.giveBirth(20);
await instance.giveBirth(16);
await instance.giveBirth(17);
await instance.giveBirth(3);
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
