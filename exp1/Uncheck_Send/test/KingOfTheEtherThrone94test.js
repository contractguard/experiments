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
result = await instance.claimThrone("uMU7SbhwAdkQW2KBItYV",{from:accounts[97],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(973449);
await instance.sendTransaction({from:accounts[7],value:88});

result = await instance.transferOwnership(accounts[5]);
});
it('test 1',async() => {
result = await instance.claimThrone("9ZrsdD0oxhtABPfiOy",{from:accounts[72],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(210276);
await instance.sendTransaction({from:accounts[2],value:86});

});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[8],value:30});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("IApcxitjhWfzZqD1",{from:accounts[36],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(1018138);
});
it('test 3',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("PsdZJbnVli",{from:accounts[36],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[5],value:90});

result = await instance.sweepCommission(376581);
});
it('test 4',async() => {
result = await instance.claimThrone("vqQdDGJXOwoZ",{from:accounts[76],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[2],value:20});

result = await instance.sweepCommission(663132);
result = await instance.transferOwnership(accounts[1]);
});
it('test 5',async() => {
result = await instance.sweepCommission(492347);
result = await instance.claimThrone("PmszLjkxUEnF",{from:accounts[27],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[2],value:75});

result = await instance.transferOwnership(accounts[4]);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[6],value:38});

result = await instance.sweepCommission(369099);
result = await instance.claimThrone("tYaFVORZCUGswoS3Q",{from:accounts[22],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[4],value:24});

result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(786945);
result = await instance.claimThrone("O7jN0XI9igBAf28",{from:accounts[88],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[3],value:73});

result = await instance.claimThrone("quYFyUmv28bXWEaxwT",{from:accounts[68],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(598429);
result = await instance.transferOwnership(accounts[1]);
});
it('test 9',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("j2yV9Cx7Qc8",{from:accounts[31],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(321894);
await instance.sendTransaction({from:accounts[3],value:9});

});
it('test 10',async() => {
result = await instance.sweepCommission(696869);
result = await instance.claimThrone("ZX02ev7bo9nyDKt",{from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[1],value:4});

result = await instance.transferOwnership(accounts[2]);
});
it('test 11',async() => {
result = await instance.claimThrone("wdOC0zuG8a4Dk",{from:accounts[12],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(268681);
await instance.sendTransaction({from:accounts[4],value:63});

});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[1],value:74});

result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(860153);
result = await instance.claimThrone("zboQBqeJrjCG",{from:accounts[51],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[3],value:84});

result = await instance.claimThrone("xoUH80tCmnVSJd4",{from:accounts[63],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(372874);
});
it('test 14',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("kVoTgtzmalf1LwAK60",{from:accounts[19],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(121556);
await instance.sendTransaction({from:accounts[1],value:72});

});
it('test 15',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("sjoDY8ZtH25Urqg7JM",{from:accounts[18],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(200303);
await instance.sendTransaction({from:accounts[3],value:58});

});
it('test 16',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("uXrdYReE9FGiP",{from:accounts[70],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(755147);
await instance.sendTransaction({from:accounts[7],value:91});

});
it('test 17',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(393762);
await instance.sendTransaction({from:accounts[3],value:86});

result = await instance.claimThrone("0MpwUqJWBDgfFLEXKl",{from:accounts[10],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[1],value:10});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("VpTQhD5dzgUtG9eBK",{from:accounts[51],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(81668);
});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[4],value:49});

result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(616441);
result = await instance.claimThrone("INkdKDxVc8SW5Rq06",{from:accounts[70],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 20',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[9],value:11});

result = await instance.sweepCommission(538267);
result = await instance.claimThrone("bmvwsJFOBDNW",{from:accounts[28],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 21',async() => {
result = await instance.sweepCommission(706770);
await instance.sendTransaction({from:accounts[4],value:20});

result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("wjZVf8ekYm0dhP17S",{from:accounts[83],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 22',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(7046);
await instance.sendTransaction({from:accounts[6],value:81});

result = await instance.claimThrone("kizLv0K3Fns7GYgSHBr4",{from:accounts[68],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[2],value:37});

result = await instance.claimThrone("gz5IJj6N3xVZlsBObW8f",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(142380);
result = await instance.transferOwnership(accounts[4]);
});
it('test 24',async() => {
result = await instance.sweepCommission(869539);
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[3],value:2});

result = await instance.claimThrone("aBFIt6DuSzLHfkT2idb",{from:accounts[48],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[3],value:75});

result = await instance.sweepCommission(37606);
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("RnQypI5YPUg",{from:accounts[100],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 26',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[3],value:78});

result = await instance.claimThrone("cEqLwP6ZlazOdGD",{from:accounts[14],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(665998);
});
it('test 27',async() => {
result = await instance.sweepCommission(454110);
result = await instance.claimThrone("CwYygFDzfhM2A4jix",{from:accounts[100],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[3],value:63});

result = await instance.transferOwnership(accounts[1]);
});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[1],value:44});

result = await instance.claimThrone("vQkW48fiODC9Zcz1K5gG",{from:accounts[67],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(468823);
result = await instance.transferOwnership(accounts[3]);
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[7],value:51});

result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(818373);
result = await instance.claimThrone("FuPNov24f5",{from:accounts[68],value:web3.utils.toWei(web3.utils.toBN(2))});
});
});
