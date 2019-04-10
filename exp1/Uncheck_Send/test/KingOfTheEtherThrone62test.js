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
await instance.sendTransaction({from:accounts[1],value:65});

result = await instance.sweepCommission(772157);
result = await instance.claimThrone("TAgHFDebhLvR8u7PxV",{from:accounts[17],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[5]);
});
it('test 1',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(522340);
result = await instance.claimThrone("pwWKPgQRO3o5aTSn2tH",{from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[8],value:86});

});
it('test 2',async() => {
result = await instance.sweepCommission(84488);
result = await instance.claimThrone("RIMCB36EhT",{from:accounts[96],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[1],value:70});

});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[7],value:27});

result = await instance.claimThrone("at6oi4Wbj8R",{from:accounts[54],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(529616);
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[7],value:82});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("ezImVjo0bg2TcwuGyahU",{from:accounts[97],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(762410);
});
it('test 5',async() => {
result = await instance.claimThrone("XoRezusOGnfwtC0WyQBm",{from:accounts[85],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[2],value:83});

result = await instance.sweepCommission(11853);
});
it('test 6',async() => {
result = await instance.claimThrone("G8mMCol1iZ23vzEpV",{from:accounts[41],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(136387);
await instance.sendTransaction({from:accounts[9],value:14});

result = await instance.transferOwnership(accounts[1]);
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[9],value:84});

result = await instance.claimThrone("KTza9Bpcv8w45dDrJufW",{from:accounts[67],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(587882);
});
it('test 8',async() => {
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[6],value:57});

result = await instance.sweepCommission(737437);
result = await instance.claimThrone("JpcXqPfTjVdN9blQK",{from:accounts[20],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 9',async() => {
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[1],value:80});

result = await instance.sweepCommission(138237);
result = await instance.claimThrone("1WKdOi5BHnlVy",{from:accounts[28],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 10',async() => {
result = await instance.sweepCommission(308327);
result = await instance.claimThrone("EGHsTxgL1q",{from:accounts[54],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[1],value:85});

});
it('test 11',async() => {
result = await instance.sweepCommission(67396);
result = await instance.claimThrone("AiCYzuTkMJcOV",{from:accounts[55],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[5],value:86});

result = await instance.transferOwnership(accounts[0]);
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[6],value:76});

result = await instance.sweepCommission(524581);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("TE8MGCKfyYS",{from:accounts[13],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[2],value:62});

result = await instance.sweepCommission(1008360);
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("rp7qPs6Idy8h5A1lf",{from:accounts[41],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 14',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("NpBoAHEUvb6kQWwI4M",{from:accounts[81],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[8],value:53});

result = await instance.sweepCommission(801132);
});
it('test 15',async() => {
result = await instance.claimThrone("iKY7LhZCB30xXTtM6Nck",{from:accounts[8],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(260343);
await instance.sendTransaction({from:accounts[5],value:7});

result = await instance.transferOwnership(accounts[4]);
});
it('test 16',async() => {
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[9],value:99});

result = await instance.sweepCommission(699047);
result = await instance.claimThrone("sFBOUx7T5Ch",{from:accounts[56],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 17',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("6CjN4Qxdl5Fp",{from:accounts[20],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[2],value:10});

result = await instance.sweepCommission(212092);
});
it('test 18',async() => {
result = await instance.sweepCommission(426220);
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[7],value:96});

result = await instance.claimThrone("vfTUV8XB0CGHqc",{from:accounts[25],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 19',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[3],value:91});

result = await instance.sweepCommission(61432);
result = await instance.claimThrone("zIAVbuCQXfFK",{from:accounts[17],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 20',async() => {
result = await instance.claimThrone("pltOQFDo83",{from:accounts[63],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[2],value:9});

result = await instance.sweepCommission(878919);
});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[5],value:4});

result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(667473);
result = await instance.claimThrone("O7sAXbR40jqDkNwF",{from:accounts[27],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 22',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[7],value:19});

result = await instance.claimThrone("7ZIYx4JOHwv2DKmSnNu",{from:accounts[52],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(612713);
});
it('test 23',async() => {
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[8],value:62});

result = await instance.claimThrone("GBRA75ZqlNsM6Fr3W",{from:accounts[98],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(982133);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 24',async() => {
result = await instance.sweepCommission(307751);
result = await instance.claimThrone("OFSIej7UgsC",{from:accounts[76],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[7],value:17});

});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[3],value:16});

result = await instance.claimThrone("TUiRScoXskOqaZfu0g",{from:accounts[36],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(170867);
result = await instance.transferOwnership(accounts[2]);
});
it('test 26',async() => {
result = await instance.sweepCommission(348272);
await instance.sendTransaction({from:accounts[5],value:1});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("TNtoJ1fBjDKzRUMX",{from:accounts[79],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[5],value:19});

result = await instance.sweepCommission(845709);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("XdAJgRpIOnvQ74CUh5fW",{from:accounts[7],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 28',async() => {
result = await instance.sweepCommission(471493);
await instance.sendTransaction({from:accounts[1],value:65});

result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("QAnjR2UwlFLcNThuG1",{from:accounts[9],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 29',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(674100);
result = await instance.claimThrone("2p7mLAoX56Ke",{from:accounts[97],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[2],value:54});

});
});
