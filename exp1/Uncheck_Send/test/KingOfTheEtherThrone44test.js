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
result = await instance.sweepCommission(319318);
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("7HikSIdyMsxY5a4mUZO",{from:accounts[35],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[6],value:9});

});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[9],value:58});

result = await instance.sweepCommission(458057);
result = await instance.claimThrone("GaZseCXyz1Rvq",{from:accounts[68],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 2',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(168512);
await instance.sendTransaction({from:accounts[9],value:53});

result = await instance.claimThrone("rLsFByixomaentYA",{from:accounts[23],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 3',async() => {
result = await instance.claimThrone("MWtw5EzsJmru7ojlXI",{from:accounts[28],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(41846);
await instance.sendTransaction({from:accounts[8],value:47});

result = await instance.transferOwnership(accounts[1]);
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[1],value:4});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("GnyoJLdvPuhQwcT",{from:accounts[31],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(1044344);
});
it('test 5',async() => {
result = await instance.sweepCommission(355965);
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("lBUwdFODrTjmpb",{from:accounts[47],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[7],value:3});

});
it('test 6',async() => {
result = await instance.claimThrone("bkvEVmZopiC9aD",{from:accounts[17],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[8],value:15});

result = await instance.sweepCommission(677644);
result = await instance.transferOwnership(accounts[5]);
});
it('test 7',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("0bqpUAoRZYfgh8",{from:accounts[30],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(627905);
await instance.sendTransaction({from:accounts[8],value:68});

});
it('test 8',async() => {
result = await instance.sweepCommission(296535);
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[6],value:64});

result = await instance.claimThrone("uBLqE5jRxpmXG",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 9',async() => {
result = await instance.sweepCommission(613767);
result = await instance.claimThrone("8kBlFfiXtyWa0sONA",{from:accounts[54],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[7],value:88});

result = await instance.transferOwnership(accounts[3]);
});
it('test 10',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(314123);
result = await instance.claimThrone("A2CUnf6bwKv1SZL",{from:accounts[96],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[2],value:62});

});
it('test 11',async() => {
result = await instance.sweepCommission(469877);
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("8UGitPLZFVfE42b",{from:accounts[67],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[3],value:4});

});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[1],value:84});

result = await instance.claimThrone("dARL9lScj47pe1rH",{from:accounts[54],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(683727);
result = await instance.transferOwnership(accounts[0]);
});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[1],value:8});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("FnrUoV6sEJhBNg",{from:accounts[48],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(110520);
});
it('test 14',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(884625);
result = await instance.claimThrone("cQvXiHxwAJt",{from:accounts[25],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[2],value:50});

});
it('test 15',async() => {
result = await instance.claimThrone("tZwsHepfJg0Q",{from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[6],value:12});

result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(373739);
});
it('test 16',async() => {
result = await instance.claimThrone("GTUtFznBRlKyQrEwMd",{from:accounts[46],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(707774);
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[1],value:48});

});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[5],value:47});

result = await instance.claimThrone("dbhH79OAuCXj1",{from:accounts[89],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(697993);
});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[4],value:28});

result = await instance.claimThrone("7mVFJldP9x85",{from:accounts[26],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(240523);
});
it('test 19',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("KQCFeIm8koN54ixbafyW",{from:accounts[72],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[2],value:98});

result = await instance.sweepCommission(422854);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[9],value:49});

result = await instance.claimThrone("IFlDh904UomCNn",{from:accounts[23],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(80641);
});
it('test 21',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(624562);
result = await instance.claimThrone("42KdyA5kTFRZ",{from:accounts[62],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[2],value:45});

});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[2],value:28});

result = await instance.claimThrone("VNTrMk9jWh",{from:accounts[34],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(1032121);
result = await instance.transferOwnership(accounts[3]);
});
it('test 23',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("4m6uPE3bskHgx",{from:accounts[39],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(988619);
await instance.sendTransaction({from:accounts[5],value:90});

});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[7],value:15});

result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(958261);
result = await instance.claimThrone("eWmYDv6NAxHIKZXMkTB1",{from:accounts[92],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[3],value:84});

result = await instance.claimThrone("YaRKkfJQDzEvZ",{from:accounts[55],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(868345);
result = await instance.transferOwnership(accounts[1]);
});
it('test 26',async() => {
result = await instance.claimThrone("0Jky9jWIQ86XTo5qtC",{from:accounts[69],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(887147);
await instance.sendTransaction({from:accounts[5],value:48});

});
it('test 27',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("BbQTIG3Xa2KpDfso",{from:accounts[48],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(1019003);
await instance.sendTransaction({from:accounts[4],value:40});

});
it('test 28',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[2],value:67});

result = await instance.claimThrone("spuLz82Y9v0GmSqWM",{from:accounts[94],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(434300);
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[3],value:83});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("cHkla6L7jvJgyB",{from:accounts[6],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(940553);
});
});
