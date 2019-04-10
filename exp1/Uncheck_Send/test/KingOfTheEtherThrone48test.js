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
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[5],value:57});

result = await instance.sweepCommission(946304);
result = await instance.claimThrone("VcTaXrpxK8G5PI",{from:accounts[70],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 1',async() => {
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[6],value:65});

result = await instance.sweepCommission(531814);
result = await instance.claimThrone("Wk93wNqA8P6laH1C4OVt",{from:accounts[92],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 2',async() => {
result = await instance.sweepCommission(707518);
result = await instance.claimThrone("Ym2Kxe5givylJqh",{from:accounts[65],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[7],value:88});

});
it('test 3',async() => {
result = await instance.claimThrone("qmseJDnVXPiM36",{from:accounts[49],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(631942);
await instance.sendTransaction({from:accounts[3],value:23});

result = await instance.transferOwnership(accounts[4]);
});
it('test 4',async() => {
result = await instance.claimThrone("T6BUswXe7u8ovOVNhtGd",{from:accounts[54],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(695538);
await instance.sendTransaction({from:accounts[8],value:34});

});
it('test 5',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(595553);
await instance.sendTransaction({from:accounts[8],value:43});

result = await instance.claimThrone("fTxEgau9Uj0hZAJyRcN",{from:accounts[75],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 6',async() => {
result = await instance.claimThrone("PNkliX2sg03z7eYJv",{from:accounts[52],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(152257);
await instance.sendTransaction({from:accounts[7],value:23});

});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[7],value:6});

result = await instance.claimThrone("ZCq8O5bTgI1dySDQ",{from:accounts[47],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(159298);
result = await instance.transferOwnership(accounts[4]);
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[6],value:75});

result = await instance.sweepCommission(816055);
result = await instance.claimThrone("0okN4xHPR9KAI",{from:accounts[94],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[2]);
});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[4],value:42});

result = await instance.claimThrone("tbSKnAlVBPxh1TvZk",{from:accounts[34],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(955139);
});
it('test 10',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(831658);
result = await instance.claimThrone("meDNyZWwrqQGIt",{from:accounts[49],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[1],value:69});

});
it('test 11',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(957426);
await instance.sendTransaction({from:accounts[4],value:84});

result = await instance.claimThrone("fs91FEywX3rQDA",{from:accounts[36],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[6],value:33});

result = await instance.claimThrone("tNP4cCpYA2H7l3k",{from:accounts[53],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(406313);
});
it('test 13',async() => {
result = await instance.claimThrone("7IwnDKmPqz2RyoxOluA",{from:accounts[91],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(94519);
await instance.sendTransaction({from:accounts[1],value:84});

result = await instance.transferOwnership(accounts[5]);
});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[5],value:63});

result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("PzRFaYyexN",{from:accounts[93],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(367046);
});
it('test 15',async() => {
result = await instance.claimThrone("tnM72pLHbZiCE3xDWYzV",{from:accounts[67],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(302242);
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[4],value:20});

});
it('test 16',async() => {
result = await instance.sweepCommission(638086);
result = await instance.claimThrone("iTfUlsDAXjb1Snoz09",{from:accounts[70],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[2],value:99});

result = await instance.transferOwnership(accounts[0]);
});
it('test 17',async() => {
result = await instance.sweepCommission(726137);
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("sOSZPqWr9JDu4lnkQF",{from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[1],value:78});

});
it('test 18',async() => {
result = await instance.claimThrone("0PBQ25v1zpx",{from:accounts[36],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(968395);
await instance.sendTransaction({from:accounts[2],value:9});

});
it('test 19',async() => {
result = await instance.sweepCommission(804230);
await instance.sendTransaction({from:accounts[1],value:32});

result = await instance.claimThrone("nTe4uQPbMUsjfAaHxDrE",{from:accounts[40],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[5]);
});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[9],value:78});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(625814);
result = await instance.claimThrone("fMAgRkOuDYHGF04XS",{from:accounts[80],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 21',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("Reyu5AtqQCslFLHw3X",{from:accounts[93],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[4],value:56});

result = await instance.sweepCommission(299688);
});
it('test 22',async() => {
result = await instance.sweepCommission(565017);
result = await instance.claimThrone("dx72VpqXDPRt",{from:accounts[6],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[5],value:13});

result = await instance.transferOwnership(accounts[2]);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 23',async() => {
result = await instance.sweepCommission(467085);
await instance.sendTransaction({from:accounts[2],value:40});

result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("Isdru79Kflo4DTpkeha1",{from:accounts[49],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 24',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(759653);
await instance.sendTransaction({from:accounts[7],value:48});

result = await instance.claimThrone("nD9ubr4kGLM1aPhVscq",{from:accounts[20],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 25',async() => {
result = await instance.claimThrone("I6CXwOTcnepMm9EH",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[8],value:37});

result = await instance.sweepCommission(756051);
result = await instance.transferOwnership(accounts[4]);
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[1],value:59});

result = await instance.sweepCommission(694818);
result = await instance.claimThrone("cLPJnCdf4KyasB",{from:accounts[81],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[1]);
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[9],value:16});

result = await instance.sweepCommission(850078);
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("bkxD2i6qEAzO",{from:accounts[31],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 28',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(218883);
result = await instance.claimThrone("JsGCNo1ZKSdImAhR",{from:accounts[25],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[1],value:79});

});
it('test 29',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(533963);
await instance.sendTransaction({from:accounts[4],value:93});

result = await instance.claimThrone("vC8WrL9k0Gb1zS3hngT",{from:accounts[68],value:web3.utils.toWei(web3.utils.toBN(4))});
});
});
