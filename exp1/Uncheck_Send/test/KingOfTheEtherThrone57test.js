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
await instance.sendTransaction({from:accounts[7],value:52});

result = await instance.claimThrone("MhXd3JIti0",{from:accounts[75],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(594960);
});
it('test 1',async() => {
result = await instance.sweepCommission(83401);
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("SLON4lM1uanmPKbR0D",{from:accounts[21],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[5],value:62});

});
it('test 2',async() => {
result = await instance.sweepCommission(603356);
result = await instance.claimThrone("O0xFkKSi2nU6r",{from:accounts[57],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[3],value:49});

});
it('test 3',async() => {
result = await instance.claimThrone("TsBu4Adwg3qGfO",{from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[2],value:10});

result = await instance.sweepCommission(973246);
result = await instance.transferOwnership(accounts[5]);
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[7],value:36});

result = await instance.claimThrone("jC8KqZ4RDkszI5Lv",{from:accounts[21],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(116766);
result = await instance.transferOwnership(accounts[5]);
});
it('test 5',async() => {
result = await instance.claimThrone("YvgU9N5Td3EzOq",{from:accounts[31],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(784875);
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[5],value:56});

});
it('test 6',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[6],value:61});

result = await instance.claimThrone("ZmYUNhJ12czq8KELS",{from:accounts[79],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(1033385);
});
it('test 7',async() => {
result = await instance.sweepCommission(572233);
await instance.sendTransaction({from:accounts[6],value:5});

result = await instance.claimThrone("TXsCJuZ39gLwSRz",{from:accounts[72],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 8',async() => {
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[7],value:1});

result = await instance.claimThrone("o6hOylmzfNjLJBVSrsEx",{from:accounts[66],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(634520);
});
it('test 9',async() => {
result = await instance.sweepCommission(188556);
await instance.sendTransaction({from:accounts[8],value:22});

result = await instance.claimThrone("ybmKTYD3ze0G6",{from:accounts[37],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[1]);
});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[9],value:37});

result = await instance.claimThrone("D2uojy6AN9BCgZk4dhb",{from:accounts[17],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(863433);
});
it('test 11',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[3],value:79});

result = await instance.sweepCommission(382912);
result = await instance.claimThrone("X8HQrPcsKJAqIR",{from:accounts[54],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 12',async() => {
result = await instance.claimThrone("Wk0CB2wulYtbc",{from:accounts[82],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[3],value:84});

result = await instance.sweepCommission(476374);
});
it('test 13',async() => {
result = await instance.sweepCommission(1013035);
result = await instance.claimThrone("g4TaDw2fq8CF7r",{from:accounts[76],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[4],value:3});

result = await instance.transferOwnership(accounts[2]);
});
it('test 14',async() => {
result = await instance.claimThrone("lOJG1EynQm8oSzM",{from:accounts[25],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[3],value:84});

result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(263215);
});
it('test 15',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("duytoemVC6",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[1],value:18});

result = await instance.sweepCommission(1033027);
});
it('test 16',async() => {
result = await instance.sweepCommission(212515);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("IsSf7b6ZHh",{from:accounts[33],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[9],value:32});

});
it('test 17',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(94043);
await instance.sendTransaction({from:accounts[2],value:19});

result = await instance.claimThrone("8gCy1jrSsN4kleAbI9t",{from:accounts[72],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 18',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[6],value:72});

result = await instance.claimThrone("iMZYkaUbgPm",{from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(381509);
});
it('test 19',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[8],value:25});

result = await instance.claimThrone("J9DVO7xz2LyHklap",{from:accounts[88],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(63178);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[1],value:49});

result = await instance.sweepCommission(695103);
result = await instance.claimThrone("VMmEDX1ylvQ5",{from:accounts[57],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[0]);
});
it('test 21',async() => {
result = await instance.claimThrone("vH8kfTN2S79aKiVz",{from:accounts[90],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(833714);
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[9],value:5});

});
it('test 22',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[9],value:51});

result = await instance.claimThrone("4LYB3busdX",{from:accounts[97],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(611757);
});
it('test 23',async() => {
result = await instance.sweepCommission(367173);
await instance.sendTransaction({from:accounts[4],value:47});

result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("sxBZeC1YOq5zLcR",{from:accounts[26],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 24',async() => {
result = await instance.sweepCommission(323750);
await instance.sendTransaction({from:accounts[7],value:24});

result = await instance.claimThrone("F6nfbTlIqV",{from:accounts[95],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[3]);
});
it('test 25',async() => {
result = await instance.sweepCommission(923451);
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("zRAZJqmvHjnTMi0elSF6",{from:accounts[54],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[7],value:85});

});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[5],value:36});

result = await instance.claimThrone("wLX7nmsTSdzfka0t8e",{from:accounts[20],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(886999);
result = await instance.transferOwnership(accounts[3]);
});
it('test 27',async() => {
result = await instance.sweepCommission(832806);
result = await instance.claimThrone("Zy0kmESvB6K2odPaxfY",{from:accounts[77],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[7],value:56});

});
it('test 28',async() => {
result = await instance.sweepCommission(178825);
result = await instance.claimThrone("HA0x3clJmv2B95",{from:accounts[63],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[9],value:83});

result = await instance.transferOwnership(accounts[4]);
});
it('test 29',async() => {
result = await instance.claimThrone("ZX0tobMpLNw41SA",{from:accounts[89],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(619141);
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[9],value:23});

});
});
