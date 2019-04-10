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
result = await instance.sweepCommission(285887);
await instance.sendTransaction({from:accounts[8],value:9});

result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("mwjCyDKM14l7FT",{from:accounts[24],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 1',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("raL3SReAKDMdovJ7qGVl",{from:accounts[42],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(162271);
await instance.sendTransaction({from:accounts[2],value:46});

});
it('test 2',async() => {
result = await instance.claimThrone("BTapuOi1WEJNFlj4yGVc",{from:accounts[9],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(178768);
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[2],value:54});

});
it('test 3',async() => {
result = await instance.claimThrone("xqWUGCre2IBbvy6X",{from:accounts[93],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(789096);
await instance.sendTransaction({from:accounts[8],value:41});

});
it('test 4',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(257864);
await instance.sendTransaction({from:accounts[1],value:54});

result = await instance.claimThrone("6b2a17flRJMAT3j",{from:accounts[39],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 5',async() => {
result = await instance.claimThrone("SR12KAyip9YtrXIsCOJg",{from:accounts[52],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[7],value:26});

result = await instance.sweepCommission(886822);
});
it('test 6',async() => {
result = await instance.sweepCommission(90131);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("0gnC9rvkyTAOlz7",{from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[4],value:18});

});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[2],value:79});

result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(48699);
result = await instance.claimThrone("cf3Shi59oCUMHB1bKYv",{from:accounts[63],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[4],value:29});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(260666);
result = await instance.claimThrone("S1qDgoY0QxV7T3h6ue",{from:accounts[43],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 9',async() => {
result = await instance.sweepCommission(92692);
await instance.sendTransaction({from:accounts[4],value:35});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("mV6NbDq4WJ3IiYvdlt",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 10',async() => {
result = await instance.sweepCommission(233145);
result = await instance.claimThrone("gE7BnuSdpI1j",{from:accounts[43],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[7],value:42});

result = await instance.transferOwnership(accounts[5]);
});
it('test 11',async() => {
result = await instance.claimThrone("5iAWCHQaZfFqbd",{from:accounts[79],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[3],value:90});

result = await instance.sweepCommission(110825);
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[1],value:7});

result = await instance.sweepCommission(679862);
result = await instance.claimThrone("KWiF6zlBVE94yJ",{from:accounts[52],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[2]);
});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[6],value:48});

result = await instance.claimThrone("nx3LHUKNgvcqbP8VY4yk",{from:accounts[42],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(59932);
result = await instance.transferOwnership(accounts[1]);
});
it('test 14',async() => {
result = await instance.sweepCommission(1003710);
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("Qr7kLZ82RweWAPMIg9N",{from:accounts[87],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[7],value:95});

});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[4],value:40});

result = await instance.sweepCommission(448586);
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("jhJFqYmi6Itu9sODKBW",{from:accounts[54],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 16',async() => {
result = await instance.sweepCommission(608300);
await instance.sendTransaction({from:accounts[6],value:67});

result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("ZbPOv8YlUgRFM",{from:accounts[86],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 17',async() => {
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[2],value:71});

result = await instance.sweepCommission(832546);
result = await instance.claimThrone("wWxyZziaAu2NTMFJfB",{from:accounts[8],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 18',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(576153);
result = await instance.claimThrone("ZXV8dtrLHo6FzvsClJ",{from:accounts[58],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[1],value:6});

});
it('test 19',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(743221);
await instance.sendTransaction({from:accounts[9],value:7});

result = await instance.claimThrone("kLeWyc2HDgw3Avz",{from:accounts[72],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 20',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(553600);
result = await instance.claimThrone("h0Ywf8DbX24Nr",{from:accounts[25],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[7],value:6});

});
it('test 21',async() => {
result = await instance.sweepCommission(254589);
result = await instance.claimThrone("lt4An9vwNxB0K",{from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[4],value:76});

});
it('test 22',async() => {
result = await instance.sweepCommission(837317);
result = await instance.claimThrone("FYJzQ2RXbf5ZSaq",{from:accounts[76],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[8],value:19});

});
it('test 23',async() => {
result = await instance.claimThrone("9nbs1RXUSLz73emIaj",{from:accounts[56],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(22450);
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[8],value:33});

});
it('test 24',async() => {
result = await instance.claimThrone("XKtqmoyi2TFLP0j96xs",{from:accounts[31],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(210067);
await instance.sendTransaction({from:accounts[8],value:26});

});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[4],value:44});

result = await instance.claimThrone("7DTsqkm4E8WdGxAcZFPC",{from:accounts[70],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(462123);
});
it('test 26',async() => {
result = await instance.sweepCommission(443121);
result = await instance.claimThrone("ZymCwcF651TIRHeLVU",{from:accounts[72],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[4],value:6});

});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[9],value:70});

result = await instance.sweepCommission(531283);
result = await instance.claimThrone("he1QGxsbUVdPJkuyga",{from:accounts[59],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[1],value:79});

result = await instance.sweepCommission(687197);
result = await instance.claimThrone("M1S0CR4h38q5neQG",{from:accounts[69],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[2]);
});
it('test 29',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[4],value:40});

result = await instance.claimThrone("iqIhOj2Tzat",{from:accounts[69],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(838321);
});
});
