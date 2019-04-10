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
result = await instance.sweepCommission(791995);
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("Ska5LwTgPhOBvEG",{from:accounts[24],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[1],value:53});

});
it('test 1',async() => {
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[3],value:84});

result = await instance.claimThrone("jdLaq8VeB9p0iYWZhSn5",{from:accounts[25],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(151429);
});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[5],value:55});

result = await instance.claimThrone("97jZXMKFiSA21l",{from:accounts[13],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(277211);
});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[1],value:35});

result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(365921);
result = await instance.claimThrone("uOgYa9Xl52fyQZC8",{from:accounts[73],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 4',async() => {
result = await instance.sweepCommission(888382);
result = await instance.claimThrone("rkbZXdPKAxU9N6tnW",{from:accounts[69],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[7],value:54});

result = await instance.transferOwnership(accounts[1]);
});
it('test 5',async() => {
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[8],value:95});

result = await instance.sweepCommission(768314);
result = await instance.claimThrone("Gaz857JsxZeYMn6qjAW3",{from:accounts[85],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[7],value:24});

result = await instance.sweepCommission(918926);
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("0ja2xV6htMvsXdoWHgQ5",{from:accounts[68],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 7',async() => {
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[8],value:7});

result = await instance.sweepCommission(46549);
result = await instance.claimThrone("YwzVHF4Scao3J8g7R",{from:accounts[89],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 8',async() => {
result = await instance.sweepCommission(945901);
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[6],value:72});

result = await instance.claimThrone("xlA0oLic3JQkfe6msC",{from:accounts[13],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 9',async() => {
result = await instance.claimThrone("0tHuUMS6By3NjCxqh",{from:accounts[88],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[3],value:22});

result = await instance.sweepCommission(471110);
result = await instance.transferOwnership(accounts[5]);
});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[9],value:40});

result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(294861);
result = await instance.claimThrone("1kqhSgQcW7diUj",{from:accounts[79],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 11',async() => {
result = await instance.sweepCommission(140267);
result = await instance.claimThrone("n9Zy3jpiwxd",{from:accounts[83],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[6],value:70});

result = await instance.transferOwnership(accounts[4]);
});
it('test 12',async() => {
result = await instance.claimThrone("z30vQej6NnIJKl",{from:accounts[17],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(760351);
await instance.sendTransaction({from:accounts[2],value:35});

});
it('test 13',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("OGbAWBlxH3NoUVa",{from:accounts[60],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(579260);
await instance.sendTransaction({from:accounts[2],value:52});

});
it('test 14',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[2],value:52});

result = await instance.claimThrone("6LznNqMjsERl",{from:accounts[94],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(565311);
});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[4],value:76});

result = await instance.sweepCommission(411186);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("boLYHJM5WZ8yiOInv",{from:accounts[16],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 16',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("eMHZKLsI8R9b7",{from:accounts[12],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[1],value:3});

result = await instance.sweepCommission(650006);
});
it('test 17',async() => {
result = await instance.claimThrone("mTPB3NWuAHaov5kM80",{from:accounts[69],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[6],value:9});

result = await instance.sweepCommission(261050);
result = await instance.transferOwnership(accounts[0]);
});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[4],value:86});

result = await instance.sweepCommission(183283);
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("TCan0L6o9X",{from:accounts[90],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 19',async() => {
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[4],value:72});

result = await instance.sweepCommission(414185);
result = await instance.claimThrone("i0G286Sk7CdDo",{from:accounts[50],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 20',async() => {
result = await instance.claimThrone("ucoMbUBfA0R9GpVDCiv",{from:accounts[98],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[2],value:74});

result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(673309);
});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[6],value:54});

result = await instance.claimThrone("KzRl7si6nXUY",{from:accounts[44],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(618117);
});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[3],value:44});

result = await instance.sweepCommission(476105);
result = await instance.claimThrone("SczZEQ6rvtFV",{from:accounts[52],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[2]);
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[3],value:78});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(581244);
result = await instance.claimThrone("PM9uZXD4dqYcgKysR6",{from:accounts[95],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 24',async() => {
result = await instance.sweepCommission(851269);
await instance.sendTransaction({from:accounts[9],value:25});

result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("OqfAzjciVUKegNt",{from:accounts[39],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 25',async() => {
result = await instance.sweepCommission(377400);
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[7],value:72});

result = await instance.claimThrone("rDuZ5fqJTS0A3xMp7dt",{from:accounts[66],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 26',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("KNU2XETRnw6mQ",{from:accounts[40],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(825922);
await instance.sendTransaction({from:accounts[6],value:91});

});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[4],value:51});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("EkjPA8GKoW",{from:accounts[70],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(978071);
});
it('test 28',async() => {
result = await instance.claimThrone("15n2EOCaNjbBGUH",{from:accounts[54],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(323718);
await instance.sendTransaction({from:accounts[4],value:56});

});
it('test 29',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(520857);
await instance.sendTransaction({from:accounts[1],value:78});

result = await instance.claimThrone("UqrOP0YsLQxy6NnI9Dj2",{from:accounts[56],value:web3.utils.toWei(web3.utils.toBN(4))});
});
});
