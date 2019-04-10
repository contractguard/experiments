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
await instance.sendTransaction({from:accounts[6],value:27});

result = await instance.claimThrone("jfXwd4g0iQtkvx7O",{from:accounts[90],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(752536);
result = await instance.transferOwnership(accounts[0]);
});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[6],value:93});

result = await instance.sweepCommission(858515);
result = await instance.claimThrone("wrBE4ksRZSvJj",{from:accounts[87],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 2',async() => {
result = await instance.sweepCommission(619216);
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[7],value:88});

result = await instance.claimThrone("az67Z5k1svpYD2",{from:accounts[83],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[4],value:20});

result = await instance.sweepCommission(647400);
result = await instance.claimThrone("HeTP3MByGQ",{from:accounts[28],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[0]);
});
it('test 4',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("V61QidtAgTZnm9YRfFL",{from:accounts[39],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(44725);
await instance.sendTransaction({from:accounts[3],value:76});

});
it('test 5',async() => {
result = await instance.sweepCommission(214602);
result = await instance.claimThrone("GWQBZF2LnHk",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[4],value:93});

result = await instance.transferOwnership(accounts[4]);
});
it('test 6',async() => {
result = await instance.claimThrone("ZENk5xQ8jI",{from:accounts[19],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[7],value:42});

result = await instance.sweepCommission(514120);
});
it('test 7',async() => {
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[3],value:27});

result = await instance.sweepCommission(624316);
result = await instance.claimThrone("JbtPZHCYQoLGMN",{from:accounts[32],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 8',async() => {
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[7],value:28});

result = await instance.claimThrone("BpEZG7XOMRrxzoWYT",{from:accounts[37],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(498897);
});
it('test 9',async() => {
result = await instance.claimThrone("wo9OYSx3TLmPkq",{from:accounts[20],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(224186);
await instance.sendTransaction({from:accounts[1],value:59});

result = await instance.transferOwnership(accounts[0]);
});
it('test 10',async() => {
result = await instance.sweepCommission(134772);
result = await instance.claimThrone("aZTpVzR0iImtdgM",{from:accounts[80],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[4],value:32});

});
it('test 11',async() => {
result = await instance.claimThrone("3MgmBrXotU",{from:accounts[19],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[3],value:17});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(1029987);
});
it('test 12',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("Ws5ul9S8hmyZiJ1dM",{from:accounts[15],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[4],value:80});

result = await instance.sweepCommission(1008352);
});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[2],value:57});

result = await instance.claimThrone("whcSBvlIb9MZ",{from:accounts[49],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(717029);
result = await instance.transferOwnership(accounts[1]);
});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[3],value:23});

result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(255531);
result = await instance.claimThrone("Y4kBp8vQDs5VExWZL",{from:accounts[92],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[9],value:56});

result = await instance.sweepCommission(972000);
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("iuWrDwnZkEX",{from:accounts[27],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[7],value:71});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(372181);
result = await instance.claimThrone("Bw6EimDIYplr2hFjSb",{from:accounts[37],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 17',async() => {
result = await instance.claimThrone("VWCJbYsA0Hyhx",{from:accounts[66],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[7],value:25});

result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(53351);
});
it('test 18',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[9],value:65});

result = await instance.claimThrone("zXniUxJQmKe9ZwB",{from:accounts[34],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(399008);
});
it('test 19',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(843272);
await instance.sendTransaction({from:accounts[2],value:85});

result = await instance.claimThrone("Je4bAqHF05",{from:accounts[27],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 20',async() => {
result = await instance.claimThrone("fN78JUIBO09G1T",{from:accounts[6],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[8],value:84});

result = await instance.sweepCommission(655621);
});
it('test 21',async() => {
result = await instance.sweepCommission(114917);
result = await instance.claimThrone("uyQqZpDeCPo10Wx",{from:accounts[70],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[2],value:27});

});
it('test 22',async() => {
result = await instance.claimThrone("C37TaI1PEzp2kKhcxDg",{from:accounts[37],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(1043450);
await instance.sendTransaction({from:accounts[8],value:74});

result = await instance.transferOwnership(accounts[4]);
});
it('test 23',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(925174);
result = await instance.claimThrone("7JDzB562ZxUES8",{from:accounts[51],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[3],value:3});

});
it('test 24',async() => {
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[3],value:6});

result = await instance.sweepCommission(669548);
result = await instance.claimThrone("prNSbgVqTcAJYiw3Rnam",{from:accounts[38],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[8],value:57});

result = await instance.sweepCommission(1034632);
result = await instance.claimThrone("alN28EDLPUeRiY1nc",{from:accounts[26],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[0]);
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[3],value:41});

result = await instance.sweepCommission(761309);
result = await instance.claimThrone("gnwMrje3S5qcBkyR1Jh",{from:accounts[95],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[0]);
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[8],value:62});

result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(45476);
result = await instance.claimThrone("FQyZWXTAdfMJRH",{from:accounts[6],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[8],value:80});

result = await instance.sweepCommission(1022282);
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("MtqW6y8kAPn9JKO",{from:accounts[28],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[3],value:43});

result = await instance.sweepCommission(809190);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("CB8hjGylZWq6Dd",{from:accounts[49],value:web3.utils.toWei(web3.utils.toBN(2))});
});
});
