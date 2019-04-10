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
result = await instance.claimThrone("5cCqlGOkxEQ41ZoDyRs",{from:accounts[54],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(479698);
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[2],value:38});

});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[8],value:21});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(279760);
result = await instance.claimThrone("YSm5dB6nzwOa",{from:accounts[7],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 2',async() => {
result = await instance.claimThrone("X6LzTHDBIylNcMK",{from:accounts[6],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[3],value:44});

result = await instance.sweepCommission(274182);
});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[2],value:52});

result = await instance.claimThrone("QYT1x85NeX",{from:accounts[50],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(415312);
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[8],value:89});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("3a7ZXLdE5chP2JVH",{from:accounts[98],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(579598);
});
it('test 5',async() => {
result = await instance.sweepCommission(262087);
await instance.sendTransaction({from:accounts[5],value:82});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("q538Nl2TnBi",{from:accounts[92],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 6',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(577238);
await instance.sendTransaction({from:accounts[3],value:35});

result = await instance.claimThrone("K26qfea0YH4GCjn8l",{from:accounts[7],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 7',async() => {
result = await instance.sweepCommission(126197);
result = await instance.claimThrone("mrKSGNu4p6Zz",{from:accounts[28],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[9],value:72});

result = await instance.transferOwnership(accounts[2]);
});
it('test 8',async() => {
result = await instance.sweepCommission(403327);
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[6],value:88});

result = await instance.claimThrone("W18kXtcSmIaNrZdJ",{from:accounts[63],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 9',async() => {
result = await instance.sweepCommission(818192);
result = await instance.claimThrone("oMXAIKegWG",{from:accounts[6],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[4],value:16});

result = await instance.transferOwnership(accounts[1]);
});
it('test 10',async() => {
result = await instance.sweepCommission(82880);
await instance.sendTransaction({from:accounts[3],value:34});

result = await instance.claimThrone("ENqJMZG1Sd",{from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[0]);
});
it('test 11',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(968798);
await instance.sendTransaction({from:accounts[2],value:29});

result = await instance.claimThrone("Ra5tYcVBLGJHT",{from:accounts[7],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[8],value:39});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(195780);
result = await instance.claimThrone("pZFAzyhSC3gflBKM",{from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 13',async() => {
result = await instance.sweepCommission(795473);
await instance.sendTransaction({from:accounts[2],value:27});

result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("7P3n9J2hklwYBvW6",{from:accounts[15],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 14',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(840020);
result = await instance.claimThrone("v5jM3OBti97sh8bLx",{from:accounts[9],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[6],value:59});

});
it('test 15',async() => {
result = await instance.claimThrone("9W2MBPQqU6",{from:accounts[65],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(972376);
await instance.sendTransaction({from:accounts[8],value:78});

result = await instance.transferOwnership(accounts[3]);
});
it('test 16',async() => {
result = await instance.sweepCommission(908020);
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("YgPk59F6rqHR",{from:accounts[56],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[3],value:27});

});
it('test 17',async() => {
result = await instance.sweepCommission(1016515);
await instance.sendTransaction({from:accounts[8],value:56});

result = await instance.claimThrone("STKEb4RDxGt",{from:accounts[38],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 18',async() => {
result = await instance.claimThrone("CqJMmruigFeY",{from:accounts[83],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[1],value:41});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(497884);
});
it('test 19',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[2],value:32});

result = await instance.claimThrone("JdcogVatmMz4UXDu",{from:accounts[62],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(35273);
});
it('test 20',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("dcHpW78xAnv",{from:accounts[47],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[9],value:68});

result = await instance.sweepCommission(234205);
});
it('test 21',async() => {
result = await instance.claimThrone("rjzasEcCfm8JYHui",{from:accounts[58],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[7],value:24});

result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(319322);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[2],value:100});

result = await instance.sweepCommission(206334);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("4mEF2YLzvXA3uSoUN7Q",{from:accounts[6],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 23',async() => {
result = await instance.claimThrone("lScpLExnY3r",{from:accounts[30],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[4],value:73});

result = await instance.sweepCommission(126772);
result = await instance.transferOwnership(accounts[4]);
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[4],value:15});

result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("OZ7mtBw28cD6er",{from:accounts[72],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(93260);
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[8],value:25});

result = await instance.claimThrone("Yir3lz69vgpw",{from:accounts[15],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(735314);
});
it('test 26',async() => {
result = await instance.sweepCommission(693000);
await instance.sendTransaction({from:accounts[3],value:43});

result = await instance.claimThrone("3mF7RviV5s0Clu",{from:accounts[72],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[5]);
});
it('test 27',async() => {
result = await instance.claimThrone("Iu7hHD2aK65wm3o",{from:accounts[45],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(368782);
await instance.sendTransaction({from:accounts[1],value:85});

result = await instance.transferOwnership(accounts[0]);
});
it('test 28',async() => {
result = await instance.claimThrone("kWqT4IcoZj",{from:accounts[15],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[4],value:46});

result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(381421);
});
it('test 29',async() => {
result = await instance.sweepCommission(255683);
await instance.sendTransaction({from:accounts[3],value:8});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("o4RE5jubZlDw3z",{from:accounts[13],value:web3.utils.toWei(web3.utils.toBN(3))});
});
});
