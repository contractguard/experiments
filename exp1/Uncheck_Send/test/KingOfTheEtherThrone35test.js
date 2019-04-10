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
result = await instance.sweepCommission(1001579);
await instance.sendTransaction({from:accounts[7],value:93});

result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("VWOmC25pq6PoYkd",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 1',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[3],value:8});

result = await instance.sweepCommission(711938);
result = await instance.claimThrone("B4oJLF2zqtbYAedigZ",{from:accounts[16],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 2',async() => {
result = await instance.sweepCommission(375731);
await instance.sendTransaction({from:accounts[6],value:52});

result = await instance.claimThrone("vOE8nFbpIRJVjwAuNfza",{from:accounts[30],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[0]);
});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[8],value:96});

result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(424853);
result = await instance.claimThrone("wCiYXnNsR6IoVr25kSb",{from:accounts[9],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 4',async() => {
result = await instance.sweepCommission(860840);
await instance.sendTransaction({from:accounts[1],value:20});

result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("jID5oL9xBsYzKbqc8",{from:accounts[41],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 5',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(717401);
await instance.sendTransaction({from:accounts[4],value:93});

result = await instance.claimThrone("w1qR7J9HrpKyDOVmat6Y",{from:accounts[30],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[2],value:62});

result = await instance.sweepCommission(268539);
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("Imq9kB2xL5NlJdu7hU6",{from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 7',async() => {
result = await instance.sweepCommission(642956);
await instance.sendTransaction({from:accounts[2],value:89});

result = await instance.claimThrone("y7m8PLXrH2ckVpDRFK",{from:accounts[69],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[1]);
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[5],value:78});

result = await instance.claimThrone("Nxh8IXReMpL",{from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(248926);
});
it('test 9',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(166738);
result = await instance.claimThrone("PB7a52IMcx1qTe4WQD8d",{from:accounts[85],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[1],value:76});

});
it('test 10',async() => {
result = await instance.sweepCommission(254627);
result = await instance.claimThrone("MDz790weFg3QWdP",{from:accounts[61],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[4],value:51});

});
it('test 11',async() => {
result = await instance.claimThrone("7LvQPInmzSgN",{from:accounts[96],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(675883);
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[2],value:46});

});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[6],value:66});

result = await instance.sweepCommission(1021080);
result = await instance.claimThrone("7cJzgaiIhrV3lLSqe",{from:accounts[72],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[0]);
});
it('test 13',async() => {
result = await instance.claimThrone("NCW14S2fOVs",{from:accounts[68],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[6],value:81});

result = await instance.sweepCommission(319248);
});
it('test 14',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(284045);
result = await instance.claimThrone("yRw64HpeWglFmSZtL5VK",{from:accounts[81],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[5],value:45});

});
it('test 15',async() => {
result = await instance.sweepCommission(990682);
result = await instance.claimThrone("7ljvC84AE3Vyrz5XYT",{from:accounts[73],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[5],value:93});

result = await instance.transferOwnership(accounts[5]);
});
it('test 16',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(376107);
await instance.sendTransaction({from:accounts[9],value:4});

result = await instance.claimThrone("ha2SKv9oRYI",{from:accounts[43],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 17',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(250655);
result = await instance.claimThrone("0EuHKFwn9J",{from:accounts[73],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[3],value:15});

});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[9],value:22});

result = await instance.claimThrone("dhkm7eOl0T6L4iKyBVNS",{from:accounts[32],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(466031);
});
it('test 19',async() => {
result = await instance.claimThrone("yOSbV4YKouAIw2r",{from:accounts[85],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(919051);
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[1],value:78});

});
it('test 20',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(673156);
await instance.sendTransaction({from:accounts[8],value:64});

result = await instance.claimThrone("TVtYJ61KjqARMp",{from:accounts[75],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 21',async() => {
result = await instance.sweepCommission(224338);
await instance.sendTransaction({from:accounts[8],value:26});

result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("raf1JP0XT2",{from:accounts[40],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 22',async() => {
result = await instance.sweepCommission(295647);
await instance.sendTransaction({from:accounts[3],value:49});

result = await instance.claimThrone("j7MZ9hGOti5F",{from:accounts[51],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[1]);
});
it('test 23',async() => {
result = await instance.sweepCommission(880689);
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[4],value:20});

result = await instance.claimThrone("uzxfi6VLWYES",{from:accounts[50],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 24',async() => {
result = await instance.claimThrone("GTA4ov6gsJp",{from:accounts[64],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(799024);
await instance.sendTransaction({from:accounts[2],value:38});

result = await instance.transferOwnership(accounts[5]);
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[8],value:37});

result = await instance.sweepCommission(949461);
result = await instance.claimThrone("7ZjscSOeyd90B4ok86bX",{from:accounts[91],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[2]);
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[9],value:84});

result = await instance.claimThrone("xNw8oElOTK",{from:accounts[34],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(206464);
result = await instance.transferOwnership(accounts[5]);
});
it('test 27',async() => {
result = await instance.sweepCommission(245844);
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[8],value:35});

result = await instance.claimThrone("WeAF9J2TctNvfZnih6kj",{from:accounts[38],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 28',async() => {
result = await instance.sweepCommission(56018);
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[4],value:85});

result = await instance.claimThrone("VgsG03QZ6wD59tAf",{from:accounts[58],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 29',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[2],value:37});

result = await instance.sweepCommission(170923);
result = await instance.claimThrone("NR1db9ZTaL75o6cOSrg2",{from:accounts[9],value:web3.utils.toWei(web3.utils.toBN(2))});
});
});
