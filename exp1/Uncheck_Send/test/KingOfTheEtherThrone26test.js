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
await instance.sendTransaction({from:accounts[7],value:79});

result = await instance.sweepCommission(142764);
result = await instance.claimThrone("QjdODeE1r63CFVvus",{from:accounts[64],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[2]);
});
it('test 1',async() => {
result = await instance.claimThrone("O7QM5U3ZzuC9KGpBVi",{from:accounts[88],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(606569);
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[2],value:8});

});
it('test 2',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("DnM5GLFqWdtAa97",{from:accounts[74],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(546771);
await instance.sendTransaction({from:accounts[6],value:77});

});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[6],value:96});

result = await instance.sweepCommission(120044);
result = await instance.claimThrone("Hwarh3XPUp7",{from:accounts[16],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[2]);
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[1],value:83});

result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("0ftnhZgCDEr4R6jyv",{from:accounts[100],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(1036006);
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[6],value:59});

result = await instance.sweepCommission(246750);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("krBN86slCV5G3",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 6',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("kdIO4qBiHTC7m8A",{from:accounts[97],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(743852);
await instance.sendTransaction({from:accounts[7],value:71});

});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[3],value:99});

result = await instance.sweepCommission(979935);
result = await instance.claimThrone("hUdScZkRsKepfzTi",{from:accounts[27],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[5]);
});
it('test 8',async() => {
result = await instance.claimThrone("fsM3do5QHpK7F",{from:accounts[69],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[8],value:37});

result = await instance.sweepCommission(252843);
});
it('test 9',async() => {
result = await instance.sweepCommission(834012);
await instance.sendTransaction({from:accounts[7],value:14});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("EaxrF5ujd6vTMGc",{from:accounts[89],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[6],value:27});

result = await instance.claimThrone("W70LRKPi4UAVjlECDyqO",{from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(384821);
result = await instance.transferOwnership(accounts[3]);
});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[5],value:36});

result = await instance.claimThrone("po29e1EWKJZ",{from:accounts[47],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(161331);
result = await instance.transferOwnership(accounts[4]);
});
it('test 12',async() => {
result = await instance.sweepCommission(119111);
await instance.sendTransaction({from:accounts[9],value:36});

result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("5elV3s8SM7Z1GEgY0wBW",{from:accounts[8],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 13',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("la60jPYxkd8",{from:accounts[7],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(423322);
await instance.sendTransaction({from:accounts[3],value:78});

});
it('test 14',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(651911);
result = await instance.claimThrone("jvsRIYG9eJPpO",{from:accounts[86],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[2],value:86});

});
it('test 15',async() => {
result = await instance.claimThrone("xHSaWrK1YfI9FMmX4o",{from:accounts[27],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[9],value:15});

result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(894566);
});
it('test 16',async() => {
result = await instance.sweepCommission(562825);
await instance.sendTransaction({from:accounts[4],value:76});

result = await instance.claimThrone("JRjisaIx9yfQVKq3wu5Z",{from:accounts[11],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[3]);
});
it('test 17',async() => {
result = await instance.sweepCommission(882578);
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[8],value:45});

result = await instance.claimThrone("wAlqZUV7O9",{from:accounts[9],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 18',async() => {
result = await instance.claimThrone("vFEjTSPWOHACsY4yXh",{from:accounts[31],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[3],value:85});

result = await instance.sweepCommission(933975);
});
it('test 19',async() => {
result = await instance.claimThrone("C2sxdrlU5KZSg",{from:accounts[76],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[4],value:70});

result = await instance.sweepCommission(197301);
result = await instance.transferOwnership(accounts[0]);
});
it('test 20',async() => {
result = await instance.claimThrone("pZgH8PDI3dTXzGfuw9kJ",{from:accounts[100],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(541760);
await instance.sendTransaction({from:accounts[4],value:48});

result = await instance.transferOwnership(accounts[3]);
});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[8],value:76});

result = await instance.claimThrone("ROlYtI2VXwev7aGW",{from:accounts[31],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(180871);
result = await instance.transferOwnership(accounts[3]);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 22',async() => {
result = await instance.claimThrone("dnHQCi8BDp1A4jtFWs0",{from:accounts[37],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[3],value:59});

result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(746442);
});
it('test 23',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[2],value:8});

result = await instance.sweepCommission(918125);
result = await instance.claimThrone("ebMSs8P2Y3hN",{from:accounts[9],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 24',async() => {
result = await instance.sweepCommission(202735);
result = await instance.claimThrone("OxIrqy6J43",{from:accounts[30],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[3],value:92});

result = await instance.transferOwnership(accounts[4]);
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[4],value:77});

result = await instance.claimThrone("YblNChy9KPZ5I0c8OpLq",{from:accounts[48],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(860958);
});
it('test 26',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(482903);
await instance.sendTransaction({from:accounts[4],value:85});

result = await instance.claimThrone("bXdk81EuKID",{from:accounts[48],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[1],value:38});

result = await instance.claimThrone("djHTeGX3hOgSo1aUR2",{from:accounts[85],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(627704);
});
it('test 28',async() => {
result = await instance.sweepCommission(728282);
await instance.sendTransaction({from:accounts[1],value:62});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("dDsAzijS5xfTPo",{from:accounts[60],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 29',async() => {
result = await instance.claimThrone("zp7BQxoagLmZ4l8Ii",{from:accounts[66],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[1],value:70});

result = await instance.sweepCommission(848711);
});
});
