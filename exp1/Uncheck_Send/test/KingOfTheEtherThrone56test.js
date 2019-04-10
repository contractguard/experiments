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
result = await instance.sweepCommission(820075);
result = await instance.claimThrone("kYydwlD0L1zU7C",{from:accounts[48],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[1],value:28});

result = await instance.transferOwnership(accounts[1]);
});
it('test 1',async() => {
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[3],value:22});

result = await instance.sweepCommission(884931);
result = await instance.claimThrone("4WQ3sOmlAZgN6hztUv",{from:accounts[69],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[7],value:4});

result = await instance.sweepCommission(582525);
result = await instance.claimThrone("VjJnuhDBUP",{from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[2]);
});
it('test 3',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(970403);
result = await instance.claimThrone("H0iKeLm3hqVS7yEsTw8",{from:accounts[16],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[5],value:88});

});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[5],value:69});

result = await instance.sweepCommission(293728);
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("OHfkPiqvJtXy3509QZK",{from:accounts[80],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 5',async() => {
result = await instance.sweepCommission(467733);
await instance.sendTransaction({from:accounts[8],value:34});

result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("Cnl1tadS6wAgcZei",{from:accounts[32],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[5],value:34});

result = await instance.sweepCommission(471911);
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("8JModjHQnxVlg1vymEw",{from:accounts[89],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 7',async() => {
result = await instance.claimThrone("kTGzHiWtbpwFo4D2d3Bu",{from:accounts[51],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(327096);
await instance.sendTransaction({from:accounts[9],value:90});

result = await instance.transferOwnership(accounts[0]);
});
it('test 8',async() => {
result = await instance.sweepCommission(364241);
await instance.sendTransaction({from:accounts[4],value:17});

result = await instance.claimThrone("7bLSk63jTdwPvFIhYBg",{from:accounts[74],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[5]);
});
it('test 9',async() => {
result = await instance.claimThrone("DN1QZbo5XIuzf",{from:accounts[84],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(702458);
await instance.sendTransaction({from:accounts[1],value:56});

});
it('test 10',async() => {
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[9],value:91});

result = await instance.sweepCommission(40695);
result = await instance.claimThrone("bhm5dEgMLn0pZAuV",{from:accounts[37],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[8],value:10});

result = await instance.sweepCommission(476058);
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("qI2pgADFcRnoBkKs",{from:accounts[33],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 12',async() => {
result = await instance.sweepCommission(225628);
await instance.sendTransaction({from:accounts[8],value:92});

result = await instance.claimThrone("ldLZHuM64Y",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 13',async() => {
result = await instance.sweepCommission(492240);
result = await instance.claimThrone("35IbUX6fEV",{from:accounts[30],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[7],value:61});

});
it('test 14',async() => {
result = await instance.sweepCommission(871632);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("0F1SMEX2RWGVhTu",{from:accounts[35],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[8],value:57});

});
it('test 15',async() => {
result = await instance.sweepCommission(744015);
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[7],value:24});

result = await instance.claimThrone("0g54IEByNT",{from:accounts[90],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 16',async() => {
result = await instance.claimThrone("Kh2zUj5v34eIu0f6w",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[6],value:89});

result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(459245);
});
it('test 17',async() => {
result = await instance.sweepCommission(423844);
result = await instance.claimThrone("Z2uXKRlJr5V7t0",{from:accounts[89],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[4],value:15});

});
it('test 18',async() => {
result = await instance.claimThrone("AaPcJzl4fF1gdGYkQC5",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[6],value:83});

result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(842913);
});
it('test 19',async() => {
result = await instance.sweepCommission(733747);
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[4],value:85});

result = await instance.claimThrone("NRyUQEsW8FBz7",{from:accounts[67],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 20',async() => {
result = await instance.claimThrone("wOpzDJ7cQdbvt8P",{from:accounts[61],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(775628);
await instance.sendTransaction({from:accounts[9],value:66});

});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[3],value:80});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("0VpzIXkKYPcr",{from:accounts[16],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(144222);
});
it('test 22',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(407026);
result = await instance.claimThrone("UCYLsSPyc13rZAd4",{from:accounts[81],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[1],value:99});

});
it('test 23',async() => {
result = await instance.claimThrone("OqTksYwPGgubJ5nUF",{from:accounts[38],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(314115);
await instance.sendTransaction({from:accounts[7],value:45});

});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[5],value:50});

result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(218146);
result = await instance.claimThrone("kTYWU3NfszrC",{from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 25',async() => {
result = await instance.sweepCommission(608320);
await instance.sendTransaction({from:accounts[1],value:13});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("ZIqeGcEV1Yn6y3B",{from:accounts[47],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 26',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(509454);
result = await instance.claimThrone("2P4T6Eg7cBYvVQsR",{from:accounts[23],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[9],value:47});

});
it('test 27',async() => {
result = await instance.claimThrone("fxUtPSLv8zmAZ94DJboc",{from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(801477);
await instance.sendTransaction({from:accounts[5],value:10});

result = await instance.transferOwnership(accounts[1]);
});
it('test 28',async() => {
result = await instance.sweepCommission(735474);
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[4],value:94});

result = await instance.claimThrone("uzBVRIL8fOeP",{from:accounts[26],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 29',async() => {
result = await instance.sweepCommission(972919);
result = await instance.claimThrone("EDKPvRckaAp724",{from:accounts[87],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[6],value:40});

result = await instance.transferOwnership(accounts[3]);
});
});
