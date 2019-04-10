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
result = await instance.claimThrone("a1GK9tvD0Tq",{from:accounts[22],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(461358);
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[7],value:31});

});
it('test 1',async() => {
result = await instance.sweepCommission(105181);
result = await instance.claimThrone("esDbjdyUNJIcvqLTHh",{from:accounts[58],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[3],value:35});

});
it('test 2',async() => {
result = await instance.sweepCommission(88424);
await instance.sendTransaction({from:accounts[4],value:17});

result = await instance.claimThrone("WqjE1VAbNXfLh8RmDK",{from:accounts[29],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[3]);
});
it('test 3',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("dHOT7PJnMs",{from:accounts[96],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[2],value:90});

result = await instance.sweepCommission(511299);
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[5],value:50});

result = await instance.sweepCommission(754343);
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("dxDOk3o24cF7tEAUfa",{from:accounts[98],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[9],value:98});

result = await instance.sweepCommission(240199);
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("5RC9tInKG7jWYQ",{from:accounts[13],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[4],value:22});

result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(982999);
result = await instance.claimThrone("MouyDsmbXQ2PjnRi",{from:accounts[93],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 7',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(1035996);
result = await instance.claimThrone("wgeOHnlUdB6DWZr1f",{from:accounts[48],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[7],value:72});

});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[9],value:19});

result = await instance.claimThrone("QXvL9Yz2ly7ruE",{from:accounts[61],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(186782);
result = await instance.transferOwnership(accounts[4]);
});
it('test 9',async() => {
result = await instance.claimThrone("cKZ93VQtLoWEjbf6vAr",{from:accounts[46],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[7],value:53});

result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(927431);
});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[3],value:92});

result = await instance.claimThrone("3mXzqxw4MyK21",{from:accounts[18],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(654945);
result = await instance.transferOwnership(accounts[3]);
});
it('test 11',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("5rM4FIqbKl1DAjdHO",{from:accounts[80],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(902020);
await instance.sendTransaction({from:accounts[6],value:6});

});
it('test 12',async() => {
result = await instance.claimThrone("DscNUyZpq4hjdY",{from:accounts[39],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[6],value:85});

result = await instance.sweepCommission(368076);
});
it('test 13',async() => {
result = await instance.claimThrone("US9jvONsCe",{from:accounts[13],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(665335);
await instance.sendTransaction({from:accounts[7],value:43});

result = await instance.transferOwnership(accounts[5]);
});
it('test 14',async() => {
result = await instance.sweepCommission(332306);
result = await instance.claimThrone("Xu3iGmUwasd0T",{from:accounts[29],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[1],value:4});

});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[3],value:5});

result = await instance.claimThrone("nsE5vzjxI8p3PVU7TkB",{from:accounts[73],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(212809);
result = await instance.transferOwnership(accounts[2]);
});
it('test 16',async() => {
result = await instance.sweepCommission(312636);
result = await instance.claimThrone("57In21C3KQPZ",{from:accounts[32],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[9],value:52});

result = await instance.transferOwnership(accounts[5]);
});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[6],value:95});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("lBb2opzSn9aGmPFgjWxT",{from:accounts[19],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(708299);
});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[2],value:62});

result = await instance.claimThrone("WKMiom328Y9XSNLJ",{from:accounts[89],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(618245);
result = await instance.transferOwnership(accounts[0]);
});
it('test 19',async() => {
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[7],value:43});

result = await instance.sweepCommission(930438);
result = await instance.claimThrone("hmT6VqUsjZox2v",{from:accounts[35],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 20',async() => {
result = await instance.sweepCommission(22440);
await instance.sendTransaction({from:accounts[8],value:3});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("D4h59UbkJLHwNn",{from:accounts[49],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 21',async() => {
result = await instance.claimThrone("sq0uMDfcBvQU6hOP4WpK",{from:accounts[27],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[9],value:40});

result = await instance.sweepCommission(832271);
result = await instance.transferOwnership(accounts[5]);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 22',async() => {
result = await instance.sweepCommission(477846);
result = await instance.claimThrone("opWHE6ARcUSBOX",{from:accounts[11],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[3],value:52});

});
it('test 23',async() => {
result = await instance.claimThrone("KOqwg41cRby",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[7],value:14});

result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(43392);
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[7],value:12});

result = await instance.sweepCommission(124291);
result = await instance.claimThrone("qNM1Xkl2PCbtv",{from:accounts[51],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[5]);
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[9],value:41});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("86kr0KDhY5nso",{from:accounts[79],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(703657);
});
it('test 26',async() => {
result = await instance.claimThrone("cNvyLGxlJnFrmpKC6DI3",{from:accounts[89],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(515997);
await instance.sendTransaction({from:accounts[3],value:22});

result = await instance.transferOwnership(accounts[5]);
});
it('test 27',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[8],value:92});

result = await instance.claimThrone("hviLAsKTIYQd",{from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(742535);
});
it('test 28',async() => {
result = await instance.sweepCommission(768341);
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("b4IoRgEQlkxswJ2WD1KM",{from:accounts[69],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[2],value:75});

});
it('test 29',async() => {
result = await instance.sweepCommission(235118);
result = await instance.claimThrone("tjPCDm9V4oa6Iwd",{from:accounts[93],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[4],value:31});

result = await instance.transferOwnership(accounts[1]);
});
});
