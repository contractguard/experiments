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
await instance.sendTransaction({from:accounts[2],value:43});

result = await instance.claimThrone("gZdL2Hef9PDNsqklJChQ",{from:accounts[81],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(389844);
});
it('test 1',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(685917);
await instance.sendTransaction({from:accounts[6],value:86});

result = await instance.claimThrone("f6rApyIve8oSDX2Oaj",{from:accounts[96],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 2',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[4],value:53});

result = await instance.sweepCommission(100624);
result = await instance.claimThrone("lp6m91QRbFAw3y8v",{from:accounts[47],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 3',async() => {
result = await instance.claimThrone("apMHjPBZiz6h",{from:accounts[94],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(355780);
await instance.sendTransaction({from:accounts[1],value:78});

});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[9],value:10});

result = await instance.sweepCommission(616148);
result = await instance.claimThrone("xJ8mCwyNSj",{from:accounts[10],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[1]);
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[5],value:84});

result = await instance.claimThrone("bBQ0TzAPcN1JUHFwy",{from:accounts[96],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(17758);
});
it('test 6',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("Po7BD3OQmpEJA",{from:accounts[58],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[8],value:47});

result = await instance.sweepCommission(483);
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[3],value:57});

result = await instance.sweepCommission(214331);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("YfnP2CtydzGUAxa3EX",{from:accounts[8],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 8',async() => {
result = await instance.claimThrone("DKc2g30yO1mXJVRUrpoT",{from:accounts[25],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[8],value:80});

result = await instance.sweepCommission(592897);
});
it('test 9',async() => {
result = await instance.claimThrone("eQmNqcTRMuiYs8Lr",{from:accounts[91],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(118990);
await instance.sendTransaction({from:accounts[3],value:34});

});
it('test 10',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("YWaijcdTgQXH2sl37Bq",{from:accounts[9],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[6],value:40});

result = await instance.sweepCommission(788896);
});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[1],value:7});

result = await instance.claimThrone("lz7TtAkuR5nZ",{from:accounts[52],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(591459);
result = await instance.transferOwnership(accounts[4]);
});
it('test 12',async() => {
result = await instance.claimThrone("9Ent2sqQjNUcmS",{from:accounts[100],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(751036);
await instance.sendTransaction({from:accounts[1],value:43});

});
it('test 13',async() => {
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[1],value:22});

result = await instance.sweepCommission(669295);
result = await instance.claimThrone("zDFWsXpq2tHrOLZYn",{from:accounts[29],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[3],value:13});

result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("WjNZm8SeXHR4d5",{from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(882985);
});
it('test 15',async() => {
result = await instance.sweepCommission(271042);
await instance.sendTransaction({from:accounts[9],value:88});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("N23aPbJDyCGkmqQdg",{from:accounts[14],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 16',async() => {
result = await instance.claimThrone("obsFngXHhwB9kTyIL8",{from:accounts[25],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(382483);
await instance.sendTransaction({from:accounts[3],value:51});

});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[6],value:17});

result = await instance.sweepCommission(930166);
result = await instance.claimThrone("yT5G9ILRzePKpnFk",{from:accounts[87],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[2]);
});
it('test 18',async() => {
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[2],value:10});

result = await instance.sweepCommission(647320);
result = await instance.claimThrone("RoTXC6L7ncDZpy",{from:accounts[31],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 19',async() => {
result = await instance.sweepCommission(421634);
await instance.sendTransaction({from:accounts[3],value:51});

result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("bgVAnaycpZYdEUf1kj",{from:accounts[90],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 20',async() => {
result = await instance.sweepCommission(958648);
result = await instance.claimThrone("GsAxHcmfiL",{from:accounts[41],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[1],value:48});

});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[4],value:91});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("APJoN1jsIFHqMchmv2DS",{from:accounts[56],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(146773);
});
it('test 22',async() => {
result = await instance.sweepCommission(103202);
await instance.sendTransaction({from:accounts[9],value:80});

result = await instance.claimThrone("Ayo02imOlcdsbqQ4DPUj",{from:accounts[69],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[2]);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 23',async() => {
result = await instance.claimThrone("wvDaibAco7hrOIkBFlxy",{from:accounts[45],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[6],value:66});

result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(330117);
});
it('test 24',async() => {
result = await instance.sweepCommission(98110);
await instance.sendTransaction({from:accounts[4],value:90});

result = await instance.claimThrone("Y2htcOfwk4nElsr0ym",{from:accounts[34],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[2]);
});
it('test 25',async() => {
result = await instance.sweepCommission(461188);
await instance.sendTransaction({from:accounts[2],value:59});

result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("Df567s4VwudixqYgP",{from:accounts[28],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 26',async() => {
result = await instance.claimThrone("gUJolr9h17f5aGZwAy",{from:accounts[57],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(690073);
await instance.sendTransaction({from:accounts[9],value:66});

result = await instance.transferOwnership(accounts[2]);
});
it('test 27',async() => {
result = await instance.claimThrone("WOAw7d3yJtblk6j",{from:accounts[6],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[8],value:84});

result = await instance.sweepCommission(985071);
});
it('test 28',async() => {
result = await instance.claimThrone("qiQWMDs1mxR7FLlg0",{from:accounts[11],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(7240);
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[6],value:33});

});
it('test 29',async() => {
result = await instance.sweepCommission(815756);
await instance.sendTransaction({from:accounts[6],value:64});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("WbhDSXBZknzGsKV2qm",{from:accounts[80],value:web3.utils.toWei(web3.utils.toBN(1))});
});
});
