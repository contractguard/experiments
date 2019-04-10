const Attack = artifacts.require("Attack");
const KingOfTheEtherThrone = artifacts.require("KingOfTheEtherThrone");
contract('KingOfTheEtherThrone', async (accounts) => {
const owner = accounts[0];
let attack;let instance;
let result;
before('setup contract for each test',async() => {
instance = await KingOfTheEtherThrone.new({from:accounts[0]});
attack = await Attack.new(instance.address,{from:accounts[400]});
});
it('test 0',async() => {
await instance.sendTransaction({from: accounts[0], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[1], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[2], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[3], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[4], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[5], value: web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.claimThrone("oqed57Vj1cC",{from:accounts[73],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[5],value:39});

result = await instance.sweepCommission(192835);
result = await instance.transferOwnership(accounts[1]);
});
it('test 1',async() => {
result = await instance.sweepCommission(965826);
result = await instance.claimThrone("hCApUtmRrDNji9M0BL",{from:accounts[91],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[3],value:58});

});
it('test 2',async() => {
result = await instance.sweepCommission(505734);
await instance.sendTransaction({from:accounts[9],value:2});

result = await instance.claimThrone("N5bxGYnk46",{from:accounts[19],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[2]);
});
it('test 3',async() => {
result = await instance.sweepCommission(945718);
await instance.sendTransaction({from:accounts[7],value:96});

result = await instance.claimThrone("5SyEGhHTiJZlwBxAKV",{from:accounts[61],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[2]);
});
it('test 4',async() => {
result = await instance.sweepCommission(684466);
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[1],value:57});

result = await instance.claimThrone("DeE5GPmv3wJUWT01a",{from:accounts[29],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[1],value:31});

result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("D1Iv6fLMToWg",{from:accounts[83],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(794460);
});
it('test 6',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(31019);
await instance.sendTransaction({from:accounts[2],value:46});

result = await instance.claimThrone("fKtaDH8XWY2AQBybz7",{from:accounts[10],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 7',async() => {
result = await instance.claimThrone("QcagTroB9ML8Vi",{from:accounts[60],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[5],value:30});

result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(1013480);
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[2],value:90});

result = await instance.claimThrone("9jfhrIeduGsvVnA82pF5",{from:accounts[75],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(1026508);
});
it('test 9',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(1023145);
result = await instance.claimThrone("RwCILrn2z5FShP",{from:accounts[53],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[8],value:95});

});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[5],value:28});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("wJhT5fcz4xWbISBZou",{from:accounts[91],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(991455);
});
it('test 11',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(890848);
result = await instance.claimThrone("hdOPT09LVy",{from:accounts[48],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[5],value:66});

});
it('test 12',async() => {
result = await instance.sweepCommission(202182);
await instance.sendTransaction({from:accounts[4],value:41});

result = await instance.claimThrone("kyz0ITnirv7mcatS9",{from:accounts[20],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[0]);
});
it('test 13',async() => {
result = await instance.claimThrone("YBEWJRHqlgvAX",{from:accounts[75],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[7],value:35});

result = await instance.sweepCommission(93169);
});
it('test 14',async() => {
result = await instance.sweepCommission(858281);
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[4],value:82});

result = await instance.claimThrone("1MKpv8eDofYFnwdqEk",{from:accounts[67],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 15',async() => {
result = await instance.sweepCommission(135468);
await instance.sendTransaction({from:accounts[4],value:3});

result = await instance.claimThrone("gOqPZMQEJrS0Ao5IbXe",{from:accounts[81],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 16',async() => {
result = await instance.sweepCommission(886578);
result = await instance.claimThrone("aNWdwfET6MomX",{from:accounts[53],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[8],value:73});

});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[9],value:83});

result = await instance.claimThrone("ZaJoj5fkOpNLIHU",{from:accounts[20],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(520286);
});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[9],value:55});

result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(491829);
result = await instance.claimThrone("eS2VLEMmW1Uv",{from:accounts[30],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 19',async() => {
result = await instance.claimThrone("URjhIEbDze5F1K",{from:accounts[69],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(59676);
await instance.sendTransaction({from:accounts[7],value:12});

});
it('test 20',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("OdtalSJVgs",{from:accounts[14],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[7],value:40});

result = await instance.sweepCommission(125622);
});
it('test 21',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("A1gykGREO59dv28",{from:accounts[46],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[2],value:49});

result = await instance.sweepCommission(568592);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[9],value:7});

result = await instance.sweepCommission(298307);
result = await instance.claimThrone("Dv2antYSfLV8xENpIrX",{from:accounts[85],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[5]);
});
it('test 23',async() => {
result = await instance.claimThrone("tvWqAIxo4mlHEgjThF",{from:accounts[95],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[9],value:50});

result = await instance.sweepCommission(839928);
result = await instance.transferOwnership(accounts[2]);
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[5],value:38});

result = await instance.sweepCommission(825008);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("YwuzItl6Eg",{from:accounts[78],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 25',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[2],value:48});

result = await instance.sweepCommission(744812);
result = await instance.claimThrone("zPmak5J2Z0hXbNFxq",{from:accounts[32],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 26',async() => {
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[8],value:45});

result = await instance.sweepCommission(960759);
result = await instance.claimThrone("lEvMYSwy9Wdieb5FP6os",{from:accounts[52],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 27',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("omEdI3GbPtKJ6VyNuRL",{from:accounts[93],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(276487);
await instance.sendTransaction({from:accounts[4],value:90});

});
it('test 28',async() => {
result = await instance.sweepCommission(46398);
result = await instance.claimThrone("dv5yws2IlXcnEafRUZM3",{from:accounts[88],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[4],value:88});

});
it('test 29',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("QFB4gck8pNiRaO",{from:accounts[96],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(434677);
await instance.sendTransaction({from:accounts[8],value:26});

});
});
