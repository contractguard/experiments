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
await instance.sendTransaction({from:accounts[9],value:76});

result = await instance.sweepCommission(979969);
result = await instance.claimThrone("IVXfnpBx53",{from:accounts[34],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[2]);
});
it('test 1',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("Cxdj2BrWRl",{from:accounts[28],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(480029);
await instance.sendTransaction({from:accounts[4],value:95});

});
it('test 2',async() => {
result = await instance.sweepCommission(961201);
result = await instance.claimThrone("kzeCT93LabF6y",{from:accounts[24],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[6],value:29});

result = await instance.transferOwnership(accounts[4]);
});
it('test 3',async() => {
result = await instance.sweepCommission(590310);
await instance.sendTransaction({from:accounts[1],value:51});

result = await instance.claimThrone("LF4kxBl6CM21",{from:accounts[77],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[2]);
});
it('test 4',async() => {
result = await instance.claimThrone("y8GQKlEHprSJ7xcANC",{from:accounts[24],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[1],value:76});

result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(42297);
});
it('test 5',async() => {
result = await instance.claimThrone("Qv1E2D8nukdhGw",{from:accounts[27],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(790785);
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[2],value:21});

});
it('test 6',async() => {
result = await instance.sweepCommission(536935);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("Y7DUoPIcw5Jdp",{from:accounts[89],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[9],value:13});

});
it('test 7',async() => {
result = await instance.sweepCommission(769233);
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("lYDutiBfWb1Xc8L",{from:accounts[24],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[9],value:18});

});
it('test 8',async() => {
result = await instance.claimThrone("Dd7S3iQFuARE",{from:accounts[53],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[2],value:49});

result = await instance.sweepCommission(930603);
});
it('test 9',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(563691);
await instance.sendTransaction({from:accounts[5],value:61});

result = await instance.claimThrone("ankgh7ENWu",{from:accounts[88],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 10',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("igryDJtRMnCmYUx8v",{from:accounts[70],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(867010);
await instance.sendTransaction({from:accounts[7],value:7});

});
it('test 11',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("X0JqLxG2bNdTlH6jR4sM",{from:accounts[20],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(151970);
await instance.sendTransaction({from:accounts[5],value:57});

});
it('test 12',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(35816);
result = await instance.claimThrone("UR4dhz7HmsoMtJpc8",{from:accounts[15],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[6],value:7});

});
it('test 13',async() => {
result = await instance.claimThrone("LyoTwF8Ocf",{from:accounts[33],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(599491);
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[1],value:94});

});
it('test 14',async() => {
result = await instance.claimThrone("x7KMretz26TBgL5nv",{from:accounts[10],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(914982);
await instance.sendTransaction({from:accounts[9],value:15});

});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[3],value:21});

result = await instance.claimThrone("QNjtDd39fenx2qc6zZyR",{from:accounts[80],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(195479);
result = await instance.transferOwnership(accounts[0]);
});
it('test 16',async() => {
result = await instance.sweepCommission(602774);
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[8],value:51});

result = await instance.claimThrone("otpAWTPGjuhEaB3n9qy",{from:accounts[52],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 17',async() => {
result = await instance.claimThrone("L4vbPqxiImc",{from:accounts[23],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[8],value:86});

result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(438346);
});
it('test 18',async() => {
result = await instance.claimThrone("Xk0thm8uEi52",{from:accounts[98],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[2],value:41});

result = await instance.sweepCommission(111808);
result = await instance.transferOwnership(accounts[5]);
});
it('test 19',async() => {
result = await instance.sweepCommission(160678);
result = await instance.claimThrone("ImYB6aZN9yuV0i7hz",{from:accounts[59],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[7],value:28});

result = await instance.transferOwnership(accounts[3]);
});
it('test 20',async() => {
result = await instance.claimThrone("VsqrUkwtzfgiIMCaW8H",{from:accounts[46],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[7],value:39});

result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(640165);
});
it('test 21',async() => {
result = await instance.sweepCommission(566001);
await instance.sendTransaction({from:accounts[2],value:99});

result = await instance.claimThrone("hqKGAtD2UEnaSgRXW",{from:accounts[85],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 22',async() => {
result = await instance.claimThrone("AwWPt9mzlQy6DqeLc",{from:accounts[96],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[7],value:58});

result = await instance.sweepCommission(452543);
result = await instance.transferOwnership(accounts[1]);
});
it('test 23',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[2],value:59});

result = await instance.sweepCommission(844382);
result = await instance.claimThrone("PdQNGVxWtES30",{from:accounts[46],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[1],value:86});

result = await instance.sweepCommission(990108);
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("BIO1pvct3hg",{from:accounts[82],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 25',async() => {
result = await instance.sweepCommission(17397);
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[4],value:61});

result = await instance.claimThrone("PSJFLctxCiuv7pG4",{from:accounts[66],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 26',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("Cm7Es0eZdqKIWiYO",{from:accounts[24],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(181547);
await instance.sendTransaction({from:accounts[8],value:23});

});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[8],value:53});

result = await instance.sweepCommission(45568);
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("jVAG8L5m7kn6WbM",{from:accounts[93],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[5],value:82});

result = await instance.claimThrone("or26pIwF1N8hG",{from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(1004132);
result = await instance.transferOwnership(accounts[3]);
});
it('test 29',async() => {
result = await instance.sweepCommission(761414);
await instance.sendTransaction({from:accounts[2],value:22});

result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("Jm7I0n5OUgC4YFWQjhc",{from:accounts[62],value:web3.utils.toWei(web3.utils.toBN(4))});
});
});
