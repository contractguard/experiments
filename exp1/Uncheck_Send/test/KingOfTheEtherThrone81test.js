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
await instance.sendTransaction({from:accounts[6],value:66});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("VKl46L52JeINUdkQDYM",{from:accounts[49],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(258426);
});
it('test 1',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("oV3CucWvRUQmsb",{from:accounts[94],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(438142);
await instance.sendTransaction({from:accounts[3],value:81});

});
it('test 2',async() => {
result = await instance.claimThrone("A5Wa9KTg3cx",{from:accounts[30],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[7],value:54});

result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(82256);
});
it('test 3',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(258734);
await instance.sendTransaction({from:accounts[8],value:60});

result = await instance.claimThrone("1XzmnTcWCfxD",{from:accounts[9],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 4',async() => {
result = await instance.claimThrone("R9q2nc5QDT",{from:accounts[70],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[3],value:16});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(517405);
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[9],value:6});

result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(578466);
result = await instance.claimThrone("gMrJkYSRZijslhoE",{from:accounts[54],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 6',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(1005936);
result = await instance.claimThrone("9CMm12ZFwji6",{from:accounts[81],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[3],value:11});

});
it('test 7',async() => {
result = await instance.sweepCommission(339552);
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[4],value:55});

result = await instance.claimThrone("8wUKxBHhyDQiGCW",{from:accounts[78],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 8',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("lCWYa4p8GoHdIORFz2U",{from:accounts[93],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[7],value:20});

result = await instance.sweepCommission(793057);
});
it('test 9',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[5],value:90});

result = await instance.claimThrone("IcZ98oVbjNhty1KiO72u",{from:accounts[14],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(1010887);
});
it('test 10',async() => {
result = await instance.claimThrone("l9PINB7JneZxoMCUd",{from:accounts[97],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[4],value:35});

result = await instance.sweepCommission(263979);
});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[9],value:45});

result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(490687);
result = await instance.claimThrone("G4ok52LSIaArh",{from:accounts[83],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 12',async() => {
result = await instance.claimThrone("EAdaJtrxGDnMjk3",{from:accounts[18],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(451229);
await instance.sendTransaction({from:accounts[1],value:95});

result = await instance.transferOwnership(accounts[3]);
});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[9],value:8});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(224680);
result = await instance.claimThrone("GeZnOQETSYKI9CLrMWHc",{from:accounts[54],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 14',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[4],value:40});

result = await instance.sweepCommission(723365);
result = await instance.claimThrone("1HmR7JDrVfktGsTW",{from:accounts[58],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 15',async() => {
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[9],value:57});

result = await instance.sweepCommission(783784);
result = await instance.claimThrone("2wSP38W5HTAK6Ith",{from:accounts[41],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[7],value:54});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(477142);
result = await instance.claimThrone("Gjo45pDbraKc",{from:accounts[24],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 17',async() => {
result = await instance.claimThrone("4wZpjYeXSC9EmWAqG",{from:accounts[86],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(550731);
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[9],value:37});

});
it('test 18',async() => {
result = await instance.claimThrone("BI5D8ZuWGlqLH0bOC9z",{from:accounts[95],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(47228);
await instance.sendTransaction({from:accounts[4],value:92});

});
it('test 19',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("Z9R5U0lDfAyNi1",{from:accounts[16],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[1],value:53});

result = await instance.sweepCommission(856240);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 20',async() => {
result = await instance.sweepCommission(636459);
result = await instance.claimThrone("yaRPFf6Kso",{from:accounts[68],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[7],value:83});

});
it('test 21',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("nSOArgFjMGh",{from:accounts[7],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[7],value:92});

result = await instance.sweepCommission(164823);
});
it('test 22',async() => {
result = await instance.claimThrone("kMG9Hu2brSfEDew0Bzs3",{from:accounts[81],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(547136);
await instance.sendTransaction({from:accounts[9],value:70});

});
it('test 23',async() => {
result = await instance.sweepCommission(921795);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("1vjXClfKLkOR",{from:accounts[86],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[5],value:99});

});
it('test 24',async() => {
result = await instance.sweepCommission(145977);
await instance.sendTransaction({from:accounts[4],value:92});

result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("XWfap8j2oqNIvU",{from:accounts[60],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 25',async() => {
result = await instance.sweepCommission(430045);
await instance.sendTransaction({from:accounts[6],value:21});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("xrNenOq6MR",{from:accounts[10],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 26',async() => {
result = await instance.claimThrone("FabepnDNOEK3",{from:accounts[7],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(630314);
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[5],value:90});

});
it('test 27',async() => {
result = await instance.sweepCommission(45706);
await instance.sendTransaction({from:accounts[9],value:96});

result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("KTMciCrbztoNZ6",{from:accounts[71],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 28',async() => {
result = await instance.sweepCommission(286975);
await instance.sendTransaction({from:accounts[5],value:74});

result = await instance.claimThrone("iv4EIMFOK5A",{from:accounts[32],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[0]);
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[2],value:39});

result = await instance.claimThrone("u10lDcNrBfji",{from:accounts[62],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(869986);
});
});
