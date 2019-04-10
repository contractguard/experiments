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
result = await instance.sweepCommission(501900);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("fSq3nWaHw0",{from:accounts[77],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[5],value:53});

});
it('test 1',async() => {
result = await instance.claimThrone("FodwJCYHqeNR9T7z",{from:accounts[31],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[6],value:33});

result = await instance.sweepCommission(897179);
});
it('test 2',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("KLd490gRkJMza6mDNT",{from:accounts[44],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[2],value:94});

result = await instance.sweepCommission(110608);
});
it('test 3',async() => {
result = await instance.sweepCommission(859828);
await instance.sendTransaction({from:accounts[2],value:64});

result = await instance.claimThrone("RpqStHC2eF09E",{from:accounts[91],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[2]);
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[9],value:63});

result = await instance.sweepCommission(795952);
result = await instance.claimThrone("fUJgeno3915ApWbmIhGX",{from:accounts[14],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[0]);
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[1],value:82});

result = await instance.sweepCommission(638237);
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("OtSXxGCyKwB0h",{from:accounts[6],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 6',async() => {
result = await instance.sweepCommission(852811);
result = await instance.claimThrone("haWijCIbf4U6mtoO",{from:accounts[53],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[8],value:75});

});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[6],value:28});

result = await instance.claimThrone("cSop6NuHrMEkqZ",{from:accounts[70],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(914100);
});
it('test 8',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(941965);
await instance.sendTransaction({from:accounts[7],value:4});

result = await instance.claimThrone("lK9SXHyqjFuO5n0s",{from:accounts[17],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 9',async() => {
result = await instance.claimThrone("fKF5DJGsy1",{from:accounts[48],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[2],value:51});

result = await instance.sweepCommission(667886);
result = await instance.transferOwnership(accounts[3]);
});
it('test 10',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(146358);
await instance.sendTransaction({from:accounts[4],value:18});

result = await instance.claimThrone("tFf0L4eShY1Jz",{from:accounts[36],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 11',async() => {
result = await instance.sweepCommission(696413);
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[2],value:59});

result = await instance.claimThrone("xqJCg7OnktDNu56X2",{from:accounts[24],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 12',async() => {
result = await instance.claimThrone("3poFxLObzK1U",{from:accounts[25],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(18472);
await instance.sendTransaction({from:accounts[8],value:96});

});
it('test 13',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("y12EMQesCAm",{from:accounts[78],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[8],value:4});

result = await instance.sweepCommission(850832);
});
it('test 14',async() => {
result = await instance.sweepCommission(609953);
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("a2XcYHriywUAsTLd",{from:accounts[7],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[2],value:25});

});
it('test 15',async() => {
result = await instance.sweepCommission(256470);
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("E46CieylmtIxkDv",{from:accounts[11],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[5],value:9});

});
it('test 16',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[8],value:44});

result = await instance.sweepCommission(650537);
result = await instance.claimThrone("H3LpBWPQwydeRnJcKbtF",{from:accounts[14],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 17',async() => {
result = await instance.claimThrone("Z5IFUfaVjMrwq4B",{from:accounts[77],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[8],value:80});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(771274);
});
it('test 18',async() => {
result = await instance.claimThrone("TiQ3rjzUFwN1p8aS",{from:accounts[42],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[3],value:59});

result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(8019);
});
it('test 19',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[1],value:93});

result = await instance.claimThrone("t1LJpP5ZzaRgNBs9qMd",{from:accounts[8],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(470660);
});
it('test 20',async() => {
result = await instance.sweepCommission(733491);
result = await instance.claimThrone("1IH8WCdfSOymgbATVstq",{from:accounts[16],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[5],value:68});

});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[8],value:7});

result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("weBQkEOfSynvU4",{from:accounts[45],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(1000733);
});
it('test 22',async() => {
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[7],value:62});

result = await instance.claimThrone("PwnQD7sRoWrzZaiESJNy",{from:accounts[6],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(699631);
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[3],value:57});

result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(282234);
result = await instance.claimThrone("Zy0cVDBQ7q6",{from:accounts[91],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[9],value:67});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("okTU2CLPjiw7yKbcXs1",{from:accounts[84],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(590827);
});
it('test 25',async() => {
result = await instance.sweepCommission(416942);
result = await instance.claimThrone("I802szUKCAWX",{from:accounts[59],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[3],value:28});

result = await instance.transferOwnership(accounts[1]);
});
it('test 26',async() => {
result = await instance.sweepCommission(236937);
await instance.sendTransaction({from:accounts[9],value:57});

result = await instance.claimThrone("XBb1UEJWOqHNePQcK",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[5]);
});
it('test 27',async() => {
result = await instance.sweepCommission(581726);
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[9],value:43});

result = await instance.claimThrone("z91daDYfke76",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 28',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(245398);
await instance.sendTransaction({from:accounts[2],value:49});

result = await instance.claimThrone("dQypPo8SxTg",{from:accounts[51],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[1],value:78});

result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(114913);
result = await instance.claimThrone("ZT7lh9OdGipuCIeqDzc",{from:accounts[9],value:web3.utils.toWei(web3.utils.toBN(4))});
});
});
