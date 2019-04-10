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
await instance.sendTransaction({from:accounts[6],value:46});

result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("ZH2D7dgvbcs",{from:accounts[24],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(717319);
});
it('test 1',async() => {
result = await instance.claimThrone("tUM74i5r8CW",{from:accounts[40],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(727211);
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[8],value:7});

});
it('test 2',async() => {
result = await instance.claimThrone("dtbcpCHgvSXyUVFIQKu",{from:accounts[33],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(855002);
await instance.sendTransaction({from:accounts[3],value:81});

result = await instance.transferOwnership(accounts[0]);
});
it('test 3',async() => {
result = await instance.sweepCommission(600877);
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("KOl4YicrsvjoAe",{from:accounts[56],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[7],value:84});

});
it('test 4',async() => {
result = await instance.sweepCommission(346496);
result = await instance.claimThrone("xMwv9GhcBa7H0VdCUzjY",{from:accounts[18],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[7],value:11});

});
it('test 5',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("xDaNwnm7AileC",{from:accounts[70],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[7],value:81});

result = await instance.sweepCommission(621944);
});
it('test 6',async() => {
result = await instance.sweepCommission(755990);
result = await instance.claimThrone("YgHauk4hle0mt2R1O",{from:accounts[84],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[1],value:52});

result = await instance.transferOwnership(accounts[4]);
});
it('test 7',async() => {
result = await instance.claimThrone("ktU9oF3IH2JLDpe",{from:accounts[48],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(730502);
await instance.sendTransaction({from:accounts[8],value:66});

});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[4],value:17});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("JQj9IlAuwcSBg",{from:accounts[67],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(655366);
});
it('test 9',async() => {
result = await instance.sweepCommission(340495);
result = await instance.claimThrone("WPmlx74cZHjv9E0tG",{from:accounts[8],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[8],value:5});

result = await instance.transferOwnership(accounts[0]);
});
it('test 10',async() => {
result = await instance.sweepCommission(195658);
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[5],value:80});

result = await instance.claimThrone("Jbm1nuAfKh6Mi0",{from:accounts[6],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 11',async() => {
result = await instance.claimThrone("GqCWUtVX8HeFjmBKO",{from:accounts[50],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[6],value:76});

result = await instance.sweepCommission(8418);
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[4],value:62});

result = await instance.sweepCommission(470748);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("wbPQoLO9escC",{from:accounts[47],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 13',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(879457);
result = await instance.claimThrone("61fkN7pEtPeqJ8X",{from:accounts[78],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[3],value:94});

});
it('test 14',async() => {
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[3],value:5});

result = await instance.sweepCommission(748672);
result = await instance.claimThrone("LtdZ2EfkOPUVRarb8",{from:accounts[48],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 15',async() => {
result = await instance.sweepCommission(807522);
result = await instance.claimThrone("iQmWCrYEa6AvOJsL",{from:accounts[85],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[9],value:10});

});
it('test 16',async() => {
result = await instance.sweepCommission(274544);
await instance.sendTransaction({from:accounts[5],value:97});

result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("6uaXtFUIoiER2H",{from:accounts[58],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 17',async() => {
result = await instance.sweepCommission(835298);
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[3],value:28});

result = await instance.claimThrone("MXo1qYCElQBbypfahnr",{from:accounts[33],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 18',async() => {
result = await instance.sweepCommission(673029);
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[5],value:20});

result = await instance.claimThrone("GCYxoUaFQf4Ikc6",{from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 19',async() => {
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[3],value:70});

result = await instance.sweepCommission(611501);
result = await instance.claimThrone("Jm3xFqvN0hbXEo",{from:accounts[49],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[8],value:23});

result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(646283);
result = await instance.claimThrone("ti1Nvgmo06p",{from:accounts[28],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 21',async() => {
result = await instance.sweepCommission(144679);
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[2],value:83});

result = await instance.claimThrone("L9fHC1wBeGWEVc",{from:accounts[36],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[4],value:70});

result = await instance.sweepCommission(833755);
result = await instance.claimThrone("pR7qna2YKk",{from:accounts[52],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[0]);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[4],value:28});

result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(693958);
result = await instance.claimThrone("CVpOFzGxvkT253f",{from:accounts[56],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[6],value:27});

result = await instance.claimThrone("gWi3OvXeVyszHnEQudBK",{from:accounts[74],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(571681);
});
it('test 25',async() => {
result = await instance.sweepCommission(878010);
await instance.sendTransaction({from:accounts[9],value:22});

result = await instance.claimThrone("pDmkF8YscSQC2zLqx1MX",{from:accounts[27],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[0]);
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[6],value:79});

result = await instance.claimThrone("uWVFzhgOLHcApDQrlm",{from:accounts[60],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(545437);
});
it('test 27',async() => {
result = await instance.sweepCommission(758882);
result = await instance.claimThrone("truOUy1vRV",{from:accounts[51],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[6],value:85});

result = await instance.transferOwnership(accounts[3]);
});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[8],value:45});

result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(847961);
result = await instance.claimThrone("O8qE2JIUTM9wR",{from:accounts[78],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 29',async() => {
result = await instance.claimThrone("AVdq1yCKoH48",{from:accounts[36],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(87012);
await instance.sendTransaction({from:accounts[1],value:37});

result = await instance.transferOwnership(accounts[1]);
});
});
