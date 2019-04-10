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
result = await instance.claimThrone("5it1JN2okg9VeUBlaPZD",{from:accounts[91],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(243193);
await instance.sendTransaction({from:accounts[1],value:8});

result = await instance.transferOwnership(accounts[0]);
});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[6],value:69});

result = await instance.sweepCommission(776798);
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("X8P9mEahlc",{from:accounts[77],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 2',async() => {
result = await instance.sweepCommission(614620);
await instance.sendTransaction({from:accounts[9],value:8});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("dhCbTDpVE7WkQiz012",{from:accounts[38],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 3',async() => {
result = await instance.sweepCommission(695900);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("yGJp479bWcSHzQj",{from:accounts[88],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[2],value:84});

});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[1],value:27});

result = await instance.claimThrone("ewGMtoQbHKR0BP4Y",{from:accounts[7],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(486091);
});
it('test 5',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("Bq1Jt5ImhfP",{from:accounts[29],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(85950);
await instance.sendTransaction({from:accounts[3],value:57});

});
it('test 6',async() => {
result = await instance.claimThrone("C6zBEysLoeT",{from:accounts[17],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(97138);
await instance.sendTransaction({from:accounts[4],value:54});

result = await instance.transferOwnership(accounts[5]);
});
it('test 7',async() => {
result = await instance.sweepCommission(262518);
await instance.sendTransaction({from:accounts[5],value:59});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("DLJHRKMjmkSyA",{from:accounts[71],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[3],value:36});

result = await instance.sweepCommission(478535);
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("eypdo9EtN3VhLI",{from:accounts[37],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 9',async() => {
result = await instance.sweepCommission(598688);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("2rxKd3R7eo69ITl4",{from:accounts[52],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[9],value:23});

});
it('test 10',async() => {
result = await instance.claimThrone("JT61KikeflNwg0",{from:accounts[12],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[7],value:90});

result = await instance.sweepCommission(12819);
result = await instance.transferOwnership(accounts[0]);
});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[6],value:49});

result = await instance.claimThrone("GEsHXY6jv3O5Nh",{from:accounts[57],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(288658);
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[3],value:22});

result = await instance.sweepCommission(93072);
result = await instance.claimThrone("1h2UjYAk96w8v",{from:accounts[16],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[0]);
});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[2],value:78});

result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(612266);
result = await instance.claimThrone("neiBNYpw9PaZ5A3TUIr",{from:accounts[69],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 14',async() => {
result = await instance.sweepCommission(882000);
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("MLvnGVDN10tOYcoPzIEj",{from:accounts[75],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[1],value:17});

});
it('test 15',async() => {
result = await instance.claimThrone("fhTKgAkFGE2tO",{from:accounts[96],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(506599);
await instance.sendTransaction({from:accounts[6],value:8});

result = await instance.transferOwnership(accounts[0]);
});
it('test 16',async() => {
result = await instance.sweepCommission(914374);
result = await instance.claimThrone("0BCXpVIdGjgi57enlsR",{from:accounts[80],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[8],value:34});

result = await instance.transferOwnership(accounts[1]);
});
it('test 17',async() => {
result = await instance.claimThrone("CSiMo7bBGRqj10pOFk",{from:accounts[14],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(431291);
await instance.sendTransaction({from:accounts[3],value:77});

result = await instance.transferOwnership(accounts[0]);
});
it('test 18',async() => {
result = await instance.claimThrone("bPmyYQV0RTxX",{from:accounts[64],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(555680);
await instance.sendTransaction({from:accounts[2],value:10});

result = await instance.transferOwnership(accounts[5]);
});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[6],value:23});

result = await instance.claimThrone("GpR3APa9L8nF",{from:accounts[17],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(948579);
});
it('test 20',async() => {
result = await instance.sweepCommission(912688);
await instance.sendTransaction({from:accounts[3],value:88});

result = await instance.claimThrone("dgtrqL91JWlCIDmcas",{from:accounts[16],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[1],value:64});

result = await instance.claimThrone("tS2gAMBlnHDGj",{from:accounts[70],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(239284);
result = await instance.transferOwnership(accounts[5]);
});
it('test 22',async() => {
result = await instance.claimThrone("uQC8mkfNj3s",{from:accounts[18],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[2],value:35});

result = await instance.sweepCommission(173055);
result = await instance.transferOwnership(accounts[0]);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[8],value:85});

result = await instance.claimThrone("vUZuPR7VAL",{from:accounts[84],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(161485);
result = await instance.transferOwnership(accounts[5]);
});
it('test 24',async() => {
result = await instance.sweepCommission(12582);
await instance.sendTransaction({from:accounts[2],value:8});

result = await instance.claimThrone("MItvcSnu84",{from:accounts[42],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 25',async() => {
result = await instance.sweepCommission(96813);
result = await instance.claimThrone("kvVaYrABywLm",{from:accounts[45],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[2],value:24});

result = await instance.transferOwnership(accounts[4]);
});
it('test 26',async() => {
result = await instance.claimThrone("4gFrhNkVeHR6IlYp5",{from:accounts[44],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[5],value:91});

result = await instance.sweepCommission(622253);
result = await instance.transferOwnership(accounts[5]);
});
it('test 27',async() => {
result = await instance.sweepCommission(727874);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("dkGZto4fCm",{from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[3],value:7});

});
it('test 28',async() => {
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[7],value:81});

result = await instance.sweepCommission(512326);
result = await instance.claimThrone("nHacQGNVb6ABMPewpDi",{from:accounts[92],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 29',async() => {
result = await instance.sweepCommission(166184);
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[4],value:91});

result = await instance.claimThrone("a4tAzqgdCJD9cMPkhY",{from:accounts[78],value:web3.utils.toWei(web3.utils.toBN(4))});
});
});
