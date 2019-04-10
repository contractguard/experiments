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
result = await instance.claimThrone("OTCVU7yJ3L6HR",{from:accounts[35],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[2],value:96});

result = await instance.sweepCommission(23145);
result = await instance.transferOwnership(accounts[1]);
});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[5],value:6});

result = await instance.claimThrone("HA1arkX8sujJzMywiY",{from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(146908);
result = await instance.transferOwnership(accounts[4]);
});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[5],value:95});

result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(388433);
result = await instance.claimThrone("NPTiRk2ZKFLv7ycAgwhD",{from:accounts[41],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 3',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(283127);
await instance.sendTransaction({from:accounts[2],value:67});

result = await instance.claimThrone("dX94avMp5D0ZIr76mWc",{from:accounts[11],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 4',async() => {
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[8],value:31});

result = await instance.claimThrone("dnzZCpYQU5",{from:accounts[43],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(584072);
});
it('test 5',async() => {
result = await instance.claimThrone("sitzugBrA9",{from:accounts[85],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[1],value:81});

result = await instance.sweepCommission(889889);
result = await instance.transferOwnership(accounts[3]);
});
it('test 6',async() => {
result = await instance.claimThrone("FIehzyRqbaQ",{from:accounts[71],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(88024);
await instance.sendTransaction({from:accounts[8],value:16});

});
it('test 7',async() => {
result = await instance.sweepCommission(309771);
await instance.sendTransaction({from:accounts[2],value:3});

result = await instance.claimThrone("vnLSfkW9olma3d2",{from:accounts[15],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[0]);
});
it('test 8',async() => {
result = await instance.claimThrone("RTeEYvwHl74",{from:accounts[35],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(643470);
await instance.sendTransaction({from:accounts[5],value:13});

});
it('test 9',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(264219);
result = await instance.claimThrone("Eq8XRJ5s1jADB",{from:accounts[23],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[5],value:51});

});
it('test 10',async() => {
result = await instance.sweepCommission(650775);
await instance.sendTransaction({from:accounts[8],value:7});

result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("UbszTKugAvGmBpCy1",{from:accounts[63],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 11',async() => {
result = await instance.claimThrone("a9ZTEi82sHGqX",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(361452);
await instance.sendTransaction({from:accounts[8],value:40});

result = await instance.transferOwnership(accounts[3]);
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[8],value:18});

result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(208387);
result = await instance.claimThrone("RdTo5ZkwHMGUSqxPNVj6",{from:accounts[64],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 13',async() => {
result = await instance.claimThrone("oXy4ESl32D7cOvrB",{from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(1036638);
await instance.sendTransaction({from:accounts[9],value:50});

});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[4],value:54});

result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(552946);
result = await instance.claimThrone("uaQ9zA80WlxvRc3S1kF",{from:accounts[96],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[7],value:2});

result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(145083);
result = await instance.claimThrone("EJV3UR97iQW",{from:accounts[57],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 16',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[6],value:96});

result = await instance.claimThrone("4rVg5SjyKzu3OJGYFUl6",{from:accounts[23],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(559432);
});
it('test 17',async() => {
result = await instance.sweepCommission(728586);
result = await instance.claimThrone("t0Y3zuWE8DeLUcsd",{from:accounts[13],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[7],value:35});

});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[7],value:70});

result = await instance.sweepCommission(617059);
result = await instance.claimThrone("KLH1EWxXtlD",{from:accounts[52],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[5]);
});
it('test 19',async() => {
result = await instance.sweepCommission(790050);
await instance.sendTransaction({from:accounts[5],value:49});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("r7dBRWm5x8",{from:accounts[30],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 20',async() => {
result = await instance.claimThrone("kYfZajpEH5Qd",{from:accounts[65],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[2],value:39});

result = await instance.sweepCommission(726279);
});
it('test 21',async() => {
result = await instance.claimThrone("iUR28uynMNt4LmjB",{from:accounts[98],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[6],value:66});

result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(134770);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[6],value:49});

result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(232076);
result = await instance.claimThrone("4dlYZog8sGQVN1cLJDb",{from:accounts[98],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 23',async() => {
result = await instance.sweepCommission(385788);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("BWOFNc0eRY",{from:accounts[49],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[8],value:13});

});
it('test 24',async() => {
result = await instance.sweepCommission(962495);
result = await instance.claimThrone("g5Rl3uJfaE0FXby",{from:accounts[8],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[6],value:41});

});
it('test 25',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(900243);
await instance.sendTransaction({from:accounts[6],value:81});

result = await instance.claimThrone("MF0Yqj5XvsxESJDanuWm",{from:accounts[96],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[8],value:78});

result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("Fjx0csGqyabnuIrETV5",{from:accounts[84],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(549019);
});
it('test 27',async() => {
result = await instance.sweepCommission(81247);
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[5],value:82});

result = await instance.claimThrone("e08mpgXonvSaBY4",{from:accounts[30],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[3],value:98});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(47152);
result = await instance.claimThrone("Xr45YmhT1ua39EP",{from:accounts[70],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 29',async() => {
result = await instance.claimThrone("CdIcGzDwYifmZLSNe5q",{from:accounts[11],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[8],value:80});

result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(841091);
});
});
