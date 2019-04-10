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
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[8],value:52});

result = await instance.sweepCommission(17201);
result = await instance.claimThrone("7uHJGhU6VTg81QzaB",{from:accounts[71],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 1',async() => {
result = await instance.claimThrone("AJxuHZQeODv0",{from:accounts[66],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(81923);
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[7],value:44});

});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[4],value:6});

result = await instance.claimThrone("awb0EuXf3dRHcqzyPQ",{from:accounts[37],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(769353);
result = await instance.transferOwnership(accounts[2]);
});
it('test 3',async() => {
result = await instance.sweepCommission(21760);
await instance.sendTransaction({from:accounts[4],value:90});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("oBUbV2f7lTeWnGRA",{from:accounts[83],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[8],value:51});

result = await instance.claimThrone("KW4kDmlQ3M",{from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(1028859);
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[9],value:40});

result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(287360);
result = await instance.claimThrone("PxmohwO0g8AFn7by",{from:accounts[54],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 6',async() => {
result = await instance.sweepCommission(397866);
result = await instance.claimThrone("AxWfLdZHPX",{from:accounts[60],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[2],value:99});

result = await instance.transferOwnership(accounts[5]);
});
it('test 7',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(693848);
result = await instance.claimThrone("lPW0HXpt2DxzTIcsQfY",{from:accounts[50],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[6],value:27});

});
it('test 8',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("nDibRgBoXYQ",{from:accounts[52],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[2],value:17});

result = await instance.sweepCommission(868414);
});
it('test 9',async() => {
result = await instance.claimThrone("0xAo3F2PlQ8NisSyX6rn",{from:accounts[20],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[1],value:36});

result = await instance.sweepCommission(467537);
});
it('test 10',async() => {
result = await instance.claimThrone("jpyw6Qv2hH5Omqo",{from:accounts[24],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(497991);
await instance.sendTransaction({from:accounts[7],value:100});

});
it('test 11',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(813132);
await instance.sendTransaction({from:accounts[9],value:87});

result = await instance.claimThrone("j9yWRD4PrFVC7Lvd8SA",{from:accounts[12],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 12',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(888861);
result = await instance.claimThrone("EjhKO0o58TAYlw",{from:accounts[43],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[7],value:67});

});
it('test 13',async() => {
result = await instance.claimThrone("9EogsGztT0P",{from:accounts[69],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(718261);
await instance.sendTransaction({from:accounts[8],value:69});

result = await instance.transferOwnership(accounts[2]);
});
it('test 14',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("YdIecOF56no",{from:accounts[14],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(888489);
await instance.sendTransaction({from:accounts[3],value:90});

});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[2],value:50});

result = await instance.sweepCommission(986442);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("YcSMX96kje8",{from:accounts[28],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 16',async() => {
result = await instance.claimThrone("YO12PS6TzekF3sj",{from:accounts[21],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[4],value:81});

result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(982213);
});
it('test 17',async() => {
result = await instance.claimThrone("OGYpdWNhHT78Eo1s",{from:accounts[53],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(267149);
await instance.sendTransaction({from:accounts[3],value:95});

});
it('test 18',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[5],value:43});

result = await instance.claimThrone("muFfLljGsMOa53H",{from:accounts[57],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(37777);
});
it('test 19',async() => {
result = await instance.claimThrone("l9paGgKdCws3f8rbM",{from:accounts[80],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(645147);
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[4],value:8});

});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 20',async() => {
result = await instance.claimThrone("lQWmLRNfseBrp",{from:accounts[23],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[9],value:38});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(257986);
});
it('test 21',async() => {
result = await instance.claimThrone("J3iuTUVYRqA7dwcFCxN",{from:accounts[37],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[7],value:46});

result = await instance.sweepCommission(333825);
result = await instance.transferOwnership(accounts[4]);
});
it('test 22',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("DAWnTNsJKa",{from:accounts[94],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(589170);
await instance.sendTransaction({from:accounts[8],value:4});

});
it('test 23',async() => {
result = await instance.sweepCommission(61998);
result = await instance.claimThrone("u2cKmUtn7DhsG",{from:accounts[64],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[8],value:55});

});
it('test 24',async() => {
result = await instance.claimThrone("IeV4fl6Ys3QmLCcS",{from:accounts[42],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(350295);
await instance.sendTransaction({from:accounts[9],value:16});

result = await instance.transferOwnership(accounts[1]);
});
it('test 25',async() => {
result = await instance.claimThrone("8tlYfO4Aknx10RE2XrQs",{from:accounts[22],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[1],value:44});

result = await instance.sweepCommission(165854);
});
it('test 26',async() => {
result = await instance.sweepCommission(793073);
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("9h7XmqfwcC0",{from:accounts[72],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[7],value:46});

});
it('test 27',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("sGUHW3MFOI7tX",{from:accounts[81],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(429719);
await instance.sendTransaction({from:accounts[4],value:49});

});
it('test 28',async() => {
result = await instance.sweepCommission(10996);
result = await instance.claimThrone("XwqjfkeFC0PGbi3luT",{from:accounts[74],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[4],value:79});

});
it('test 29',async() => {
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[8],value:34});

result = await instance.sweepCommission(231490);
result = await instance.claimThrone("s3jCgKQu06ao2xrh",{from:accounts[45],value:web3.utils.toWei(web3.utils.toBN(2))});
});
});
