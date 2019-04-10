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
result = await instance.claimThrone("IREiq4UdxB0X",{from:accounts[12],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[3],value:87});

result = await instance.sweepCommission(304560);
});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[3],value:35});

result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("FDscbknGhyOMwvP9utr",{from:accounts[97],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(636211);
});
it('test 2',async() => {
result = await instance.claimThrone("4KCtkz7gXPx5MT",{from:accounts[84],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(717499);
await instance.sendTransaction({from:accounts[9],value:36});

});
it('test 3',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(365005);
result = await instance.claimThrone("iWQtwFEDMN",{from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[1],value:21});

});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[5],value:54});

result = await instance.claimThrone("ba2eg4oRyuvWlpnq",{from:accounts[31],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(288075);
result = await instance.transferOwnership(accounts[2]);
});
it('test 5',async() => {
result = await instance.claimThrone("1QaNBMIV7kosXlu2ytm",{from:accounts[54],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[8],value:81});

result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(150892);
});
it('test 6',async() => {
result = await instance.claimThrone("2U5nMdCLabqk1miWw",{from:accounts[70],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[3],value:78});

result = await instance.sweepCommission(957397);
});
it('test 7',async() => {
result = await instance.sweepCommission(228425);
result = await instance.claimThrone("upUGzjbCMSXoneN6VQRT",{from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[5],value:89});

result = await instance.transferOwnership(accounts[3]);
});
it('test 8',async() => {
result = await instance.claimThrone("ytlpZJdcaWFB4qA5ns",{from:accounts[70],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[6],value:42});

result = await instance.sweepCommission(669568);
});
it('test 9',async() => {
result = await instance.sweepCommission(909074);
result = await instance.claimThrone("haV9RLYbwqCx1mzBi",{from:accounts[73],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[2],value:13});

});
it('test 10',async() => {
result = await instance.sweepCommission(112443);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("EtQJ48oTImx1DK",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[8],value:11});

});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[2],value:78});

result = await instance.claimThrone("BG2vwD38NaxsLePqjAiZ",{from:accounts[18],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(864599);
result = await instance.transferOwnership(accounts[0]);
});
it('test 12',async() => {
result = await instance.sweepCommission(118984);
await instance.sendTransaction({from:accounts[6],value:19});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("hdWIaUQoLqk",{from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[9],value:4});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("9wPA4d5b7k1SJt62f",{from:accounts[9],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(443599);
});
it('test 14',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("ngpmWSErw54M8",{from:accounts[76],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(731959);
await instance.sendTransaction({from:accounts[5],value:15});

});
it('test 15',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(96957);
await instance.sendTransaction({from:accounts[2],value:62});

result = await instance.claimThrone("cRdBqLNDpEWZ",{from:accounts[85],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[6],value:35});

result = await instance.sweepCommission(904204);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("oe0JuLcDFRrati7H3b",{from:accounts[40],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 17',async() => {
result = await instance.sweepCommission(258066);
result = await instance.claimThrone("UnB0QHFSEDd4",{from:accounts[39],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[4],value:81});

});
it('test 18',async() => {
result = await instance.claimThrone("Bw0cjIsVxZoU3Tm",{from:accounts[76],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[1],value:98});

result = await instance.sweepCommission(254467);
result = await instance.transferOwnership(accounts[2]);
});
it('test 19',async() => {
result = await instance.sweepCommission(332424);
await instance.sendTransaction({from:accounts[4],value:17});

result = await instance.claimThrone("Jvc8rKY7TL2sFSk",{from:accounts[65],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[1]);
});
it('test 20',async() => {
result = await instance.claimThrone("4z0cY6kAW2",{from:accounts[47],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(136212);
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[2],value:42});

});
it('test 21',async() => {
result = await instance.claimThrone("Bi6HtsW3Men",{from:accounts[93],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(374925);
await instance.sendTransaction({from:accounts[1],value:41});

result = await instance.transferOwnership(accounts[1]);
});
it('test 22',async() => {
result = await instance.sweepCommission(66690);
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[6],value:65});

result = await instance.claimThrone("NsDEV3qdhH1aStZTf02",{from:accounts[56],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 23',async() => {
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[7],value:97});

result = await instance.claimThrone("QxWCNVgwJzEaPXBd",{from:accounts[16],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(467415);
});
it('test 24',async() => {
result = await instance.claimThrone("jmVwXn14aREP",{from:accounts[11],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[3],value:77});

result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(303497);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 25',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("jeCTGYtiO9bP",{from:accounts[87],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(477877);
await instance.sendTransaction({from:accounts[5],value:85});

});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[9],value:83});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("ZkWrgq03oh1a2NY",{from:accounts[71],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(923449);
});
it('test 27',async() => {
result = await instance.sweepCommission(442931);
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[7],value:53});

result = await instance.claimThrone("A1Z5LO84VwGoIN",{from:accounts[74],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 28',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("yItdzpEJDM",{from:accounts[10],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[9],value:33});

result = await instance.sweepCommission(285903);
});
it('test 29',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(349222);
await instance.sendTransaction({from:accounts[2],value:28});

result = await instance.claimThrone("Uwiy6MROzV4xv7hE",{from:accounts[37],value:web3.utils.toWei(web3.utils.toBN(3))});
});
});
