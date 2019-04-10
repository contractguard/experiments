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
result = await instance.sweepCommission(461984);
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[3],value:86});

result = await instance.claimThrone("GgDlOeipQ6d5",{from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 1',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(657252);
await instance.sendTransaction({from:accounts[6],value:63});

result = await instance.claimThrone("7HazJYh89Cpq0inf",{from:accounts[73],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 2',async() => {
result = await instance.claimThrone("CkKz7LjpH4a16TRXbdeU",{from:accounts[73],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[9],value:35});

result = await instance.sweepCommission(570359);
result = await instance.transferOwnership(accounts[1]);
});
it('test 3',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("mMoqw4h1ivLAS",{from:accounts[70],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[7],value:80});

result = await instance.sweepCommission(131600);
});
it('test 4',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("ZFqUoDeLmGIsdYbBXk7l",{from:accounts[10],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[1],value:95});

result = await instance.sweepCommission(722931);
});
it('test 5',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("8nHSVapCE9vsDP",{from:accounts[88],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[6],value:88});

result = await instance.sweepCommission(756513);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[8],value:42});

result = await instance.claimThrone("GDtVXK8kCh4",{from:accounts[62],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(912282);
});
it('test 7',async() => {
result = await instance.claimThrone("qiawWfRygArHN06p9",{from:accounts[67],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[3],value:53});

result = await instance.sweepCommission(104591);
});
it('test 8',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(3872);
result = await instance.claimThrone("iLb2s7ycjohOSTxgF0Jq",{from:accounts[41],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[5],value:8});

});
it('test 9',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("tqvCE3Zu2R0fnrX9ceS",{from:accounts[56],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(813851);
await instance.sendTransaction({from:accounts[3],value:2});

});
it('test 10',async() => {
result = await instance.sweepCommission(27533);
await instance.sendTransaction({from:accounts[2],value:35});

result = await instance.claimThrone("uE1JtUP3VWd",{from:accounts[39],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[0]);
});
it('test 11',async() => {
result = await instance.sweepCommission(587504);
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[4],value:4});

result = await instance.claimThrone("J6HTted0XfqhD4YNK",{from:accounts[86],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 12',async() => {
result = await instance.claimThrone("KMmdFLRX5J9zga4Z2j6",{from:accounts[19],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(558658);
await instance.sendTransaction({from:accounts[1],value:71});

result = await instance.transferOwnership(accounts[5]);
});
it('test 13',async() => {
result = await instance.sweepCommission(548677);
await instance.sendTransaction({from:accounts[8],value:31});

result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("v3Sr4H0J2sAq",{from:accounts[36],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 14',async() => {
result = await instance.claimThrone("XI8YvPOKr5eyJ6",{from:accounts[48],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[9],value:95});

result = await instance.sweepCommission(319481);
});
it('test 15',async() => {
result = await instance.claimThrone("JpfrCkOP1twoXzlKbuQ3",{from:accounts[81],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(779988);
await instance.sendTransaction({from:accounts[6],value:35});

});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[3],value:6});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("xkSWEuDeQpc5h",{from:accounts[75],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(610453);
});
it('test 17',async() => {
result = await instance.claimThrone("PWfD5UclQOHaCLhz9A",{from:accounts[92],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(670105);
await instance.sendTransaction({from:accounts[9],value:78});

result = await instance.transferOwnership(accounts[5]);
});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[8],value:78});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("kiu4S0wgzJbNWjL",{from:accounts[55],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(711497);
});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[8],value:63});

result = await instance.claimThrone("1Lvqaj4lGOAbIXpZxkST",{from:accounts[72],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(63083);
result = await instance.transferOwnership(accounts[1]);
});
it('test 20',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("bE9GsRVCgtXwDMoSzB1",{from:accounts[90],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[8],value:89});

result = await instance.sweepCommission(34478);
});
it('test 21',async() => {
result = await instance.claimThrone("r1dykUJC2HFlYBo4LW",{from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(954578);
await instance.sendTransaction({from:accounts[3],value:5});

});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 22',async() => {
result = await instance.sweepCommission(513759);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("8cEZ1ke2DwHv",{from:accounts[9],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[9],value:70});

});
it('test 23',async() => {
result = await instance.claimThrone("CULQIAyvwWDGMZ1mzxEt",{from:accounts[63],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[6],value:45});

result = await instance.sweepCommission(888720);
});
it('test 24',async() => {
result = await instance.sweepCommission(396228);
await instance.sendTransaction({from:accounts[2],value:60});

result = await instance.claimThrone("z8OfG61XjQu7hNM",{from:accounts[40],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[3]);
});
it('test 25',async() => {
result = await instance.claimThrone("DHOqsV1lNpaUhQZwYtRB",{from:accounts[15],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[7],value:32});

result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(570282);
});
it('test 26',async() => {
result = await instance.claimThrone("qF9V1TkhlfbQ6R",{from:accounts[64],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[2],value:40});

result = await instance.sweepCommission(837217);
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[4],value:67});

result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("vazQtDfM6IOE7",{from:accounts[35],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(344331);
});
it('test 28',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("75NhdsotyFLZ1",{from:accounts[64],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[9],value:36});

result = await instance.sweepCommission(811376);
});
it('test 29',async() => {
result = await instance.claimThrone("GnCrP8DaU4J61gj",{from:accounts[61],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(680932);
await instance.sendTransaction({from:accounts[2],value:81});

result = await instance.transferOwnership(accounts[3]);
});
});
