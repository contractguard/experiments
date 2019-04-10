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
result = await instance.claimThrone("hEImrPDWxq3Ubl6",{from:accounts[86],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(893744);
await instance.sendTransaction({from:accounts[2],value:79});

});
it('test 1',async() => {
result = await instance.sweepCommission(421853);
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[6],value:13});

result = await instance.claimThrone("BeSUORuPi8yocWtlAshz",{from:accounts[76],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 2',async() => {
result = await instance.claimThrone("j7sz4oda8l",{from:accounts[68],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[8],value:70});

result = await instance.sweepCommission(759530);
result = await instance.transferOwnership(accounts[2]);
});
it('test 3',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(911659);
result = await instance.claimThrone("xaWQl43gH8YD5X",{from:accounts[93],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[1],value:83});

});
it('test 4',async() => {
result = await instance.claimThrone("3QYfJZrsT2",{from:accounts[11],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(279087);
await instance.sendTransaction({from:accounts[5],value:24});

});
it('test 5',async() => {
result = await instance.claimThrone("NngM68P57HDfRKw",{from:accounts[85],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[1],value:19});

result = await instance.sweepCommission(553291);
});
it('test 6',async() => {
result = await instance.claimThrone("ITLFmBybkRrK",{from:accounts[68],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(83981);
await instance.sendTransaction({from:accounts[6],value:31});

});
it('test 7',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[3],value:40});

result = await instance.claimThrone("y5i1WlvESb0s8MwoF",{from:accounts[67],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(80146);
});
it('test 8',async() => {
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[5],value:79});

result = await instance.sweepCommission(817737);
result = await instance.claimThrone("MOExqtbSoVQj1",{from:accounts[51],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 9',async() => {
result = await instance.sweepCommission(501869);
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("5sfBLPiIMFlt1",{from:accounts[40],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[9],value:92});

});
it('test 10',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("AV9mrDZulM",{from:accounts[71],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[4],value:36});

result = await instance.sweepCommission(666297);
});
it('test 11',async() => {
result = await instance.sweepCommission(967743);
result = await instance.claimThrone("6bko2q0KmGNWyp",{from:accounts[49],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[5],value:56});

});
it('test 12',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[2],value:51});

result = await instance.claimThrone("XaAK53MIpnJRLw",{from:accounts[28],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(182967);
});
it('test 13',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("c3holnCOEbBLkafwdqXm",{from:accounts[39],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(1004671);
await instance.sendTransaction({from:accounts[6],value:3});

});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[8],value:95});

result = await instance.sweepCommission(1046030);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("0yulP4a5CipgS16WO",{from:accounts[47],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 15',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("K7LChNxEuIijRQJrV1o",{from:accounts[83],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[6],value:92});

result = await instance.sweepCommission(257790);
});
it('test 16',async() => {
result = await instance.claimThrone("Fcy2BQ1K4hjxHD",{from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[6],value:46});

result = await instance.sweepCommission(838204);
});
it('test 17',async() => {
result = await instance.claimThrone("CrdxT7VuKzvDFchqi",{from:accounts[69],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[1],value:2});

result = await instance.sweepCommission(609652);
result = await instance.transferOwnership(accounts[4]);
});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[6],value:71});

result = await instance.sweepCommission(764694);
result = await instance.claimThrone("oz6ViLkOgKWn1ND",{from:accounts[33],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[5]);
});
it('test 19',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("3keamMfnHZz1jFQTyb",{from:accounts[15],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(110982);
await instance.sendTransaction({from:accounts[6],value:84});

});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[1],value:9});

result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(1024338);
result = await instance.claimThrone("g7y5Qj2JBlr",{from:accounts[81],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[8],value:68});

result = await instance.claimThrone("2FKUvJOn4Ck",{from:accounts[33],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(465923);
});
it('test 22',async() => {
result = await instance.sweepCommission(679027);
await instance.sendTransaction({from:accounts[5],value:3});

result = await instance.claimThrone("u4CPBh1EIJ",{from:accounts[60],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[0]);
});
it('test 23',async() => {
result = await instance.sweepCommission(185790);
result = await instance.claimThrone("4zbEicRk9gA0DIrUtOQf",{from:accounts[51],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[8],value:49});

result = await instance.transferOwnership(accounts[0]);
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[1],value:87});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("rARzbiy7KJFqDQ09u2",{from:accounts[36],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(565400);
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[3],value:34});

result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(609182);
result = await instance.claimThrone("iMGk5Aef9Uj62pF3Ch",{from:accounts[8],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 26',async() => {
result = await instance.claimThrone("fwhBInc7Ue",{from:accounts[57],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(800972);
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[4],value:89});

});
it('test 27',async() => {
result = await instance.sweepCommission(921025);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("D3nklpKirg2L",{from:accounts[12],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[4],value:63});

});
it('test 28',async() => {
result = await instance.claimThrone("DOvoIbPVpQ6dgJlMEu",{from:accounts[60],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[1],value:31});

result = await instance.sweepCommission(942458);
});
it('test 29',async() => {
result = await instance.claimThrone("l4Lc5NsUXpqtYSP",{from:accounts[75],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[8],value:66});

result = await instance.sweepCommission(117235);
result = await instance.transferOwnership(accounts[5]);
});
});
