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
result = await instance.claimThrone("AmyMxjWPdOQV6J",{from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(412820);
await instance.sendTransaction({from:accounts[2],value:12});

result = await instance.transferOwnership(accounts[1]);
});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[2],value:99});

result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("4WNExijURGpT",{from:accounts[16],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(520848);
});
it('test 2',async() => {
result = await instance.claimThrone("UhnK8Pt4g9d",{from:accounts[13],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[2],value:93});

result = await instance.sweepCommission(41314);
result = await instance.transferOwnership(accounts[0]);
});
it('test 3',async() => {
result = await instance.sweepCommission(147202);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("iLD7zYuFs1bamh5",{from:accounts[71],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[1],value:53});

});
it('test 4',async() => {
result = await instance.sweepCommission(109584);
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("kI9hVacKADYEi1wvB",{from:accounts[70],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[3],value:14});

});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[9],value:83});

result = await instance.sweepCommission(708670);
result = await instance.claimThrone("aelotuQLcrAb4vk2G",{from:accounts[24],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[1]);
});
it('test 6',async() => {
result = await instance.claimThrone("jswGD2SraxulY",{from:accounts[11],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(999905);
await instance.sendTransaction({from:accounts[7],value:75});

result = await instance.transferOwnership(accounts[5]);
});
it('test 7',async() => {
result = await instance.claimThrone("hIgV8NBJRGKWCmafxkT",{from:accounts[82],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[8],value:65});

result = await instance.sweepCommission(724140);
result = await instance.transferOwnership(accounts[3]);
});
it('test 8',async() => {
result = await instance.sweepCommission(1048481);
await instance.sendTransaction({from:accounts[5],value:18});

result = await instance.claimThrone("a6ewl2WoR1AcH",{from:accounts[90],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 9',async() => {
result = await instance.claimThrone("P16ApkI5r7X23n0z",{from:accounts[18],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[9],value:32});

result = await instance.sweepCommission(792375);
result = await instance.transferOwnership(accounts[0]);
});
it('test 10',async() => {
result = await instance.sweepCommission(367895);
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("bUo3ahjfvqgDX1Y52",{from:accounts[76],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[7],value:94});

});
it('test 11',async() => {
result = await instance.sweepCommission(10309);
await instance.sendTransaction({from:accounts[6],value:39});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("TvewEAaLxB9",{from:accounts[26],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[3],value:97});

result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("oEpbDTdABZ",{from:accounts[77],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(712227);
});
it('test 13',async() => {
result = await instance.sweepCommission(536402);
result = await instance.claimThrone("2qNyWKxOHZb4re",{from:accounts[98],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[8],value:41});

});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[2],value:4});

result = await instance.claimThrone("uYxNt57ZlDMEop8sGaX",{from:accounts[95],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(132001);
result = await instance.transferOwnership(accounts[2]);
});
it('test 15',async() => {
result = await instance.claimThrone("Kv1ohzsA4QFE",{from:accounts[76],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[1],value:21});

result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(883355);
});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[2],value:65});

result = await instance.claimThrone("LgjZNv8MJkfGF0",{from:accounts[25],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(315989);
result = await instance.transferOwnership(accounts[3]);
});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[9],value:55});

result = await instance.sweepCommission(461072);
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("UBhognDYurmJA26QLax",{from:accounts[48],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[8],value:46});

result = await instance.sweepCommission(640808);
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("fRaYkUJ1lhgj0BHu",{from:accounts[46],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 19',async() => {
result = await instance.claimThrone("ocl3Hq8RznEIO",{from:accounts[9],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[9],value:49});

result = await instance.sweepCommission(84053);
result = await instance.transferOwnership(accounts[1]);
});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[8],value:28});

result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("I9AqPxCLOcj",{from:accounts[66],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(925600);
});
it('test 21',async() => {
result = await instance.claimThrone("YBvtFZIUdcO23S4sER",{from:accounts[32],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[2],value:86});

result = await instance.sweepCommission(548643);
result = await instance.transferOwnership(accounts[3]);
});
it('test 22',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("YBrc3sydZuxW75qMz",{from:accounts[37],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(284627);
await instance.sendTransaction({from:accounts[4],value:64});

});
it('test 23',async() => {
result = await instance.claimThrone("CoMSW1km2yLB9w5VYgX",{from:accounts[92],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[3],value:80});

result = await instance.sweepCommission(154876);
});
it('test 24',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(704250);
await instance.sendTransaction({from:accounts[8],value:90});

result = await instance.claimThrone("vmuiFRG5tXqeTUof",{from:accounts[89],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 25',async() => {
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[4],value:55});

result = await instance.sweepCommission(1001806);
result = await instance.claimThrone("UWs1GzOTK2mq6E",{from:accounts[66],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[1],value:95});

result = await instance.claimThrone("PVY20WmkCcQHJ4gXM3",{from:accounts[38],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(1023879);
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[2],value:83});

result = await instance.sweepCommission(140719);
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("rkyKS0WdBZ",{from:accounts[80],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 28',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(516729);
await instance.sendTransaction({from:accounts[3],value:72});

result = await instance.claimThrone("CMb3VPBshNodpl0r4GU",{from:accounts[74],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 29',async() => {
result = await instance.sweepCommission(449742);
await instance.sendTransaction({from:accounts[3],value:62});

result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("kSwTCZ148Bl0df",{from:accounts[16],value:web3.utils.toWei(web3.utils.toBN(1))});
});
});
