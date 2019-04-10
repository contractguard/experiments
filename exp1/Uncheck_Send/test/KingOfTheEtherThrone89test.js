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
await instance.sendTransaction({from:accounts[1],value:24});

result = await instance.claimThrone("uJQS234rKpfMAgai",{from:accounts[63],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(494655);
result = await instance.transferOwnership(accounts[1]);
});
it('test 1',async() => {
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[8],value:69});

result = await instance.claimThrone("2UackHL7QvNnFl",{from:accounts[91],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(773079);
});
it('test 2',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[2],value:75});

result = await instance.sweepCommission(839505);
result = await instance.claimThrone("kRS2Z15DLwp",{from:accounts[16],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[6],value:55});

result = await instance.claimThrone("z5nSlT7r4PFJk",{from:accounts[17],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(979526);
result = await instance.transferOwnership(accounts[3]);
});
it('test 4',async() => {
result = await instance.sweepCommission(173763);
await instance.sendTransaction({from:accounts[9],value:84});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("3uQhn69gCwrKyBzqXJ7",{from:accounts[61],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 5',async() => {
result = await instance.claimThrone("aPQintFXhCM",{from:accounts[54],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(1048032);
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[3],value:18});

});
it('test 6',async() => {
result = await instance.sweepCommission(162247);
result = await instance.claimThrone("iXYAaxv6hQl0MnH2",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[7],value:85});

result = await instance.transferOwnership(accounts[2]);
});
it('test 7',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[3],value:99});

result = await instance.sweepCommission(686891);
result = await instance.claimThrone("jpAa8DlYs9z4x5g",{from:accounts[21],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 8',async() => {
result = await instance.sweepCommission(185037);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("PQEC8p96aGbzmT",{from:accounts[41],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[2],value:22});

});
it('test 9',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[1],value:19});

result = await instance.sweepCommission(554768);
result = await instance.claimThrone("jyviAbsRCmkSf",{from:accounts[86],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 10',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[8],value:51});

result = await instance.claimThrone("da1LW3quMi",{from:accounts[96],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(92327);
});
it('test 11',async() => {
result = await instance.claimThrone("6nKEsyfDpH21gR",{from:accounts[47],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[7],value:99});

result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(732081);
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[3],value:94});

result = await instance.claimThrone("CeKNz1oJpk",{from:accounts[81],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(421432);
});
it('test 13',async() => {
result = await instance.claimThrone("emcHBT9ANsL6w2fQ1",{from:accounts[62],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[3],value:29});

result = await instance.sweepCommission(698171);
result = await instance.transferOwnership(accounts[2]);
});
it('test 14',async() => {
result = await instance.sweepCommission(444980);
result = await instance.claimThrone("hbZL5FmGyQRHU",{from:accounts[84],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[2],value:77});

result = await instance.transferOwnership(accounts[3]);
});
it('test 15',async() => {
result = await instance.claimThrone("WABxlfTYu5NpGC",{from:accounts[84],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[6],value:95});

result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(799552);
});
it('test 16',async() => {
result = await instance.sweepCommission(864613);
await instance.sendTransaction({from:accounts[2],value:90});

result = await instance.claimThrone("aHVd5tvLjUyAzxf9",{from:accounts[82],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[1]);
});
it('test 17',async() => {
result = await instance.sweepCommission(657936);
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[5],value:35});

result = await instance.claimThrone("7c4AtBubkhw",{from:accounts[26],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 18',async() => {
result = await instance.sweepCommission(898957);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("ZcfAi3yIE1DGKW",{from:accounts[46],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[9],value:49});

});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[8],value:94});

result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("E8HLySh1pARP4Y",{from:accounts[47],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(429054);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 20',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(591903);
result = await instance.claimThrone("gUkfZyVFbn",{from:accounts[41],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[3],value:26});

});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[4],value:60});

result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(219347);
result = await instance.claimThrone("BgT9VyHNXd1AqZW4vPxz",{from:accounts[32],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 22',async() => {
result = await instance.claimThrone("8c7Q2jCJhEL3St",{from:accounts[59],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[5],value:30});

result = await instance.sweepCommission(896235);
});
it('test 23',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(373353);
result = await instance.claimThrone("A9IUatLMpv",{from:accounts[39],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[5],value:84});

});
it('test 24',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("0xQqr1S9FHXJi6cwy",{from:accounts[10],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[3],value:37});

result = await instance.sweepCommission(909163);
});
it('test 25',async() => {
result = await instance.sweepCommission(967137);
result = await instance.claimThrone("sIUayQz9cWKJulke1",{from:accounts[90],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[4],value:9});

result = await instance.transferOwnership(accounts[0]);
});
it('test 26',async() => {
result = await instance.claimThrone("hRyEPVTL4zIOUc6quCaQ",{from:accounts[63],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[8],value:44});

result = await instance.sweepCommission(167729);
});
it('test 27',async() => {
result = await instance.claimThrone("i36tQDzeRWb8Z7UOYS",{from:accounts[17],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[7],value:27});

result = await instance.sweepCommission(348475);
result = await instance.transferOwnership(accounts[0]);
});
it('test 28',async() => {
result = await instance.sweepCommission(160569);
await instance.sendTransaction({from:accounts[9],value:18});

result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("3mWau2OobCF6JhqcnxY",{from:accounts[36],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 29',async() => {
result = await instance.claimThrone("JpLzyOPdMExsf18a4",{from:accounts[18],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(792281);
await instance.sendTransaction({from:accounts[5],value:50});

result = await instance.transferOwnership(accounts[0]);
});
});
