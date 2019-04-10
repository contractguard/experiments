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
await instance.sendTransaction({from:accounts[4],value:98});

result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(268563);
result = await instance.claimThrone("7gB1Ja02oTYemUkLd",{from:accounts[80],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 1',async() => {
result = await instance.claimThrone("ifKO5qVCalbDsrWx6Jn",{from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(286204);
await instance.sendTransaction({from:accounts[1],value:28});

result = await instance.transferOwnership(accounts[2]);
});
it('test 2',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(851288);
result = await instance.claimThrone("xg4BuWro3dn5wLfCUMvp",{from:accounts[32],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[6],value:21});

});
it('test 3',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[8],value:95});

result = await instance.claimThrone("luHftR2amh",{from:accounts[51],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(128586);
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[1],value:62});

result = await instance.sweepCommission(817425);
result = await instance.claimThrone("T84HUgyFzYCLZbmQc",{from:accounts[87],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[1]);
});
it('test 5',async() => {
result = await instance.sweepCommission(1031059);
await instance.sendTransaction({from:accounts[1],value:48});

result = await instance.claimThrone("YCu2UdGWKP7",{from:accounts[73],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[1]);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[5],value:32});

result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("I0GTqLDk4utAU7csZ",{from:accounts[72],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(392003);
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[3],value:84});

result = await instance.claimThrone("F4djK8RZolT0",{from:accounts[8],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(497540);
result = await instance.transferOwnership(accounts[1]);
});
it('test 8',async() => {
result = await instance.claimThrone("5iWyLsASO9",{from:accounts[91],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(11836);
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[5],value:43});

});
it('test 9',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[1],value:43});

result = await instance.sweepCommission(789013);
result = await instance.claimThrone("BT4DrQ2ZyU",{from:accounts[100],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 10',async() => {
result = await instance.sweepCommission(1018283);
result = await instance.claimThrone("oMkbR8C1xec73mOEw",{from:accounts[97],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[8],value:68});

result = await instance.transferOwnership(accounts[0]);
});
it('test 11',async() => {
result = await instance.sweepCommission(781527);
await instance.sendTransaction({from:accounts[1],value:75});

result = await instance.claimThrone("wWsv6F2b1R",{from:accounts[27],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[5]);
});
it('test 12',async() => {
result = await instance.claimThrone("YlJT5UWP8cn",{from:accounts[17],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[9],value:79});

result = await instance.sweepCommission(182648);
});
it('test 13',async() => {
result = await instance.claimThrone("XmpT5zFARynrbO",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(877210);
await instance.sendTransaction({from:accounts[7],value:58});

});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[6],value:49});

result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("2IfZzciRAelUHop",{from:accounts[48],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(651917);
});
it('test 15',async() => {
result = await instance.claimThrone("szNRdQv2Ej",{from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(986317);
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[1],value:89});

});
it('test 16',async() => {
result = await instance.sweepCommission(720802);
result = await instance.claimThrone("D0MqBfWTzpkxg5JLy",{from:accounts[64],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[5],value:9});

result = await instance.transferOwnership(accounts[2]);
});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[5],value:28});

result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(346872);
result = await instance.claimThrone("qmahXPTxG7Z",{from:accounts[41],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 18',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[3],value:31});

result = await instance.claimThrone("nBPGXskMJ5IACueL",{from:accounts[91],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(678080);
});
it('test 19',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(551932);
result = await instance.claimThrone("EPSW7ruBLT",{from:accounts[11],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[2],value:82});

});
it('test 20',async() => {
result = await instance.claimThrone("Vvcw6ZEKrJeC",{from:accounts[85],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[2],value:93});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(893103);
});
it('test 21',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("gK0QnDRmo4i9qZ",{from:accounts[49],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(956555);
await instance.sendTransaction({from:accounts[7],value:49});

});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[7],value:24});

result = await instance.sweepCommission(255893);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("3VNtGX1DqfsFIc0SAl",{from:accounts[56],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 23',async() => {
result = await instance.sweepCommission(587349);
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[5],value:54});

result = await instance.claimThrone("AcBJ9KzgMoyHGQ5ji",{from:accounts[58],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 24',async() => {
result = await instance.sweepCommission(340422);
result = await instance.claimThrone("q5nw3tKfg1JOU",{from:accounts[95],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[7],value:3});

result = await instance.transferOwnership(accounts[0]);
});
it('test 25',async() => {
result = await instance.sweepCommission(887787);
await instance.sendTransaction({from:accounts[7],value:90});

result = await instance.claimThrone("LYMvb3JDG29Ez8FRus",{from:accounts[62],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[1]);
});
it('test 26',async() => {
result = await instance.claimThrone("SDENU6dr0Q4Xnh19R",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(814152);
await instance.sendTransaction({from:accounts[2],value:58});

result = await instance.transferOwnership(accounts[5]);
});
it('test 27',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(363939);
await instance.sendTransaction({from:accounts[1],value:81});

result = await instance.claimThrone("VzDRca2t37UZgspxLXnJ",{from:accounts[74],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 28',async() => {
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[4],value:56});

result = await instance.claimThrone("Y6Qstlv5gj3MOCqwIT",{from:accounts[74],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(917299);
});
it('test 29',async() => {
result = await instance.claimThrone("thy8pfCeFuBcO1jznW7",{from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[5],value:29});

result = await instance.sweepCommission(573121);
});
});
