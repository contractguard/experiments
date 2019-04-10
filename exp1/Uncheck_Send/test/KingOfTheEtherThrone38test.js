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
result = await instance.sweepCommission(264372);
result = await instance.claimThrone("xn9JNbO5fAahCkXi",{from:accounts[89],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[4],value:42});

});
it('test 1',async() => {
result = await instance.claimThrone("woBWEf3h4Rutn",{from:accounts[9],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(423609);
await instance.sendTransaction({from:accounts[7],value:10});

result = await instance.transferOwnership(accounts[2]);
});
it('test 2',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(680791);
await instance.sendTransaction({from:accounts[8],value:91});

result = await instance.claimThrone("L2edJ7t5MuEiA",{from:accounts[77],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[8],value:97});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("T0MPJLsurpj",{from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(15542);
});
it('test 4',async() => {
result = await instance.sweepCommission(899466);
await instance.sendTransaction({from:accounts[7],value:8});

result = await instance.claimThrone("ykoatZDHbL4rXO",{from:accounts[70],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[0]);
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[2],value:66});

result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(157000);
result = await instance.claimThrone("zOK1qpjAbEFtBLoI7ynx",{from:accounts[50],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 6',async() => {
result = await instance.claimThrone("30ZJVoTSPL",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[1],value:63});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(315731);
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[6],value:2});

result = await instance.sweepCommission(915851);
result = await instance.claimThrone("8zJewQjIxD2Kb7cG0sng",{from:accounts[67],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[2]);
});
it('test 8',async() => {
result = await instance.sweepCommission(681230);
await instance.sendTransaction({from:accounts[6],value:71});

result = await instance.claimThrone("L6EkYuR8h0Oe4fns",{from:accounts[82],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[3]);
});
it('test 9',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("p0syHZO7hjr3V",{from:accounts[48],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(780446);
await instance.sendTransaction({from:accounts[2],value:18});

});
it('test 10',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(803483);
await instance.sendTransaction({from:accounts[9],value:41});

result = await instance.claimThrone("t0yDodIvhL",{from:accounts[87],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 11',async() => {
result = await instance.sweepCommission(754908);
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[9],value:65});

result = await instance.claimThrone("gy4fpjMGnmW9a",{from:accounts[98],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 12',async() => {
result = await instance.claimThrone("YH9ExjSvcD1fQAw53",{from:accounts[39],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(619075);
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[8],value:42});

});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[3],value:78});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("418u7DLUJG",{from:accounts[64],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(843836);
});
it('test 14',async() => {
result = await instance.sweepCommission(58004);
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[2],value:89});

result = await instance.claimThrone("iQGo5laeCZjY3TP",{from:accounts[9],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[1],value:23});

result = await instance.claimThrone("Vi9pLFsE3MoZbIN",{from:accounts[9],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(362572);
result = await instance.transferOwnership(accounts[1]);
});
it('test 16',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[4],value:56});

result = await instance.claimThrone("jT8BWG3eHL",{from:accounts[90],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(11283);
});
it('test 17',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[2],value:58});

result = await instance.sweepCommission(563798);
result = await instance.claimThrone("2fvJPAmru5TzQ1",{from:accounts[98],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 18',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("2MqCVbNtsf3nRz",{from:accounts[73],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[1],value:92});

result = await instance.sweepCommission(543405);
});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[7],value:3});

result = await instance.sweepCommission(270451);
result = await instance.claimThrone("mVcZknTSl2t",{from:accounts[60],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[0]);
});
it('test 20',async() => {
result = await instance.claimThrone("ZzaDfbrApHdquYm0TS",{from:accounts[36],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[4],value:99});

result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(528830);
});
it('test 21',async() => {
result = await instance.claimThrone("kARMZYy23LrDW10GCNw",{from:accounts[6],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(501794);
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[4],value:75});

});
it('test 22',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[5],value:72});

result = await instance.claimThrone("ah72jVZvzK",{from:accounts[32],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(917123);
});
it('test 23',async() => {
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[7],value:28});

result = await instance.sweepCommission(978909);
result = await instance.claimThrone("BbMUgWAha1pC7S",{from:accounts[53],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[8],value:56});

result = await instance.sweepCommission(79343);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("RPBg2vGzXEcf6kQb",{from:accounts[6],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[1],value:60});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(13750);
result = await instance.claimThrone("xsJMG5z2Cbq",{from:accounts[6],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 26',async() => {
result = await instance.claimThrone("PMK6CpEWVSBihXTfa",{from:accounts[39],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(53678);
await instance.sendTransaction({from:accounts[4],value:50});

result = await instance.transferOwnership(accounts[0]);
});
it('test 27',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("n3ICFXUxvQDbsp",{from:accounts[34],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(798147);
await instance.sendTransaction({from:accounts[6],value:90});

});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[9],value:73});

result = await instance.sweepCommission(321693);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("wBf3RZXsStn4DHALoa",{from:accounts[28],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[7],value:62});

result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("ZDQ6JOC5qsTFBUc",{from:accounts[65],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(668962);
});
});
