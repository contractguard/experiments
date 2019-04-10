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
await instance.createPromoKitty(984564273, coo, {from: coo,value: 0});
await instance.createPromoKitty(640093584, coo, {from: coo,value: 0});
await instance.createPromoKitty(268307921, coo, {from: coo,value: 0});
await instance.createPromoKitty(673417286, coo, {from: coo,value: 0});
await instance.createPromoKitty(374713512, coo, {from: coo,value: 0});
await instance.createPromoKitty(436314038, coo, {from: coo,value: 0});
await instance.createPromoKitty(672343023, coo, {from: coo,value: 0});
await instance.createPromoKitty(974751425, coo, {from: coo,value: 0});
await instance.createPromoKitty(162597652, coo, {from: coo,value: 0});
await instance.createPromoKitty(413260693, coo, {from: coo,value: 0});
await instance.createPromoKitty(152450212, coo, {from: coo,value: 0});
await instance.createPromoKitty(399020132, coo, {from: coo,value: 0});
await instance.createPromoKitty(717565085, coo, {from: coo,value: 0});
await instance.createPromoKitty(343894292, coo, {from: coo,value: 0});
await instance.createPromoKitty(974899498, coo, {from: coo,value: 0});
await instance.createPromoKitty(547733651, coo, {from: coo,value: 0});
await instance.createPromoKitty(829501542, coo, {from: coo,value: 0});
await instance.createPromoKitty(313311769, coo, {from: coo,value: 0});
await instance.createPromoKitty(811892764, coo, {from: coo,value: 0});
await instance.createPromoKitty(105818312, coo, {from: coo,value: 0});
await instance.createPromoKitty(914877702, coo, {from: coo,value: 0});
await instance.createPromoKitty(609617365, coo, {from: coo,value: 0});
await instance.createPromoKitty(652954760, coo, {from: coo,value: 0});
await instance.createPromoKitty(547284015, coo, {from: coo,value: 0});
await instance.createPromoKitty(542580886, coo, {from: coo,value: 0});
await instance.createPromoKitty(583621082, coo, {from: coo,value: 0});
await instance.createPromoKitty(475723094, coo, {from: coo,value: 0});
await instance.createPromoKitty(550425768, coo, {from: coo,value: 0});
await instance.createPromoKitty(622648077, coo, {from: coo,value: 0});
await instance.createPromoKitty(491505579, coo, {from: coo,value: 0});
await instance.createPromoKitty(615619633, coo, {from: coo,value: 0});
await instance.createPromoKitty(65137130, coo, {from: coo,value: 0});
await instance.createPromoKitty(412920401, coo, {from: coo,value: 0});
await instance.createPromoKitty(518137302, coo, {from: coo,value: 0});
await instance.createPromoKitty(339480129, coo, {from: coo,value: 0});
await instance.createPromoKitty(226676353, coo, {from: coo,value: 0});
await instance.createPromoKitty(905059107, coo, {from: coo,value: 0});
await instance.createPromoKitty(257119204, coo, {from: coo,value: 0});
await instance.createPromoKitty(310601513, coo, {from: coo,value: 0});
await instance.createPromoKitty(265649621, coo, {from: coo,value: 0});
await instance.createPromoKitty(889798348, coo, {from: coo,value: 0});
await instance.createPromoKitty(622539294, coo, {from: coo,value: 0});
await instance.createPromoKitty(715410464, coo, {from: coo,value: 0});
await instance.createPromoKitty(708671884, coo, {from: coo,value: 0});
await instance.createPromoKitty(484961378, coo, {from: coo,value: 0});
await instance.createPromoKitty(303716972, coo, {from: coo,value: 0});
await instance.createPromoKitty(140954693, coo, {from: coo,value: 0});
await instance.createPromoKitty(867398570, coo, {from: coo,value: 0});
await instance.createPromoKitty(107542225, coo, {from: coo,value: 0});
await instance.createPromoKitty(3459463, coo, {from: coo,value: 0});
await instance.createPromoKitty(269112330, coo, {from: coo,value: 0});
await instance.createPromoKitty(968706408, coo, {from: coo,value: 0});
await instance.createPromoKitty(244031653, coo, {from: coo,value: 0});
await instance.createPromoKitty(653057268, coo, {from: coo,value: 0});
await instance.createPromoKitty(895423642, coo, {from: coo,value: 0});
await instance.createPromoKitty(452849026, coo, {from: coo,value: 0});
await instance.createPromoKitty(691239432, coo, {from: coo,value: 0});
await instance.createPromoKitty(270764443, coo, {from: coo,value: 0});
await instance.createPromoKitty(282148530, coo, {from: coo,value: 0});
await instance.createPromoKitty(140604766, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(13, 40, {from: coo});
await instance.breedWith(1, 24, {from: coo});
await instance.breedWith(15, 34, {from: coo});
await instance.breedWith(22, 21, {from: coo});
await instance.breedWith(36, 5, {from: coo});
await instance.breedWith(17, 11, {from: coo});
await instance.breedWith(4, 3, {from: coo});
await instance.breedWith(38, 10, {from: coo});
await instance.breedWith(28, 32, {from: coo});
await instance.breedWith(26, 20, {from: coo});
await instance.breedWith(12, 8, {from: coo});
await instance.breedWith(23, 19, {from: coo});
await instance.breedWith(30, 29, {from: coo});
await instance.breedWith(18, 31, {from: coo});
await instance.breedWith(25, 37, {from: coo});
await instance.breedWith(16, 33, {from: coo});
await instance.breedWith(35, 14, {from: coo});
await instance.breedWith(7, 6, {from: coo});
await instance.breedWith(9, 39, {from: coo});
await instance.breedWith(2, 27, {from: coo});
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
await instance.giveBirth(13);
await instance.giveBirth(1);
await instance.giveBirth(15);
await instance.giveBirth(22);
await instance.giveBirth(36);
await instance.giveBirth(17);
await instance.giveBirth(4);
await instance.giveBirth(38);
await instance.giveBirth(28);
await instance.giveBirth(26);
await instance.giveBirth(12);
await instance.giveBirth(23);
await instance.giveBirth(30);
await instance.giveBirth(18);
await instance.giveBirth(25);
await instance.giveBirth(16);
await instance.giveBirth(35);
await instance.giveBirth(7);
await instance.giveBirth(9);
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
