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
result = await instance.claimThrone("ibaR4hK1v83BoDWdncGP",{from:accounts[37],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(194277);
await instance.sendTransaction({from:accounts[1],value:58});

});
it('test 1',async() => {
result = await instance.claimThrone("wu92RIgqctrbAmQfW34N",{from:accounts[96],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(56632);
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[6],value:18});

});
it('test 2',async() => {
result = await instance.sweepCommission(331093);
await instance.sendTransaction({from:accounts[6],value:49});

result = await instance.claimThrone("H3C8GDYojWvehFymR",{from:accounts[29],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 3',async() => {
result = await instance.claimThrone("EcjYM1UAFDBsKkRHzT",{from:accounts[32],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(319187);
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[7],value:47});

});
it('test 4',async() => {
result = await instance.sweepCommission(292493);
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[1],value:63});

result = await instance.claimThrone("jVbJwBDUauSinRcQ",{from:accounts[95],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 5',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[9],value:57});

result = await instance.claimThrone("BzISTcqGVxKwsoRP",{from:accounts[18],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(689115);
});
it('test 6',async() => {
result = await instance.sweepCommission(976779);
await instance.sendTransaction({from:accounts[1],value:24});

result = await instance.claimThrone("6HYu5mZVhgXnRUTk",{from:accounts[14],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[1]);
});
it('test 7',async() => {
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[3],value:37});

result = await instance.claimThrone("FTtBHR0YaZv",{from:accounts[20],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(638289);
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[3],value:47});

result = await instance.claimThrone("54ZQSKFLelqpnPidA",{from:accounts[34],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(1046268);
result = await instance.transferOwnership(accounts[2]);
});
it('test 9',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(756945);
result = await instance.claimThrone("0qRSIJkiNEFycrW9",{from:accounts[50],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[9],value:68});

});
it('test 10',async() => {
result = await instance.claimThrone("1zEsRQL7Hiq",{from:accounts[90],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[7],value:61});

result = await instance.sweepCommission(712533);
result = await instance.transferOwnership(accounts[4]);
});
it('test 11',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(932848);
result = await instance.claimThrone("usOiRaVTbDMk",{from:accounts[38],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[8],value:2});

});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[7],value:29});

result = await instance.claimThrone("uiszVadCYvH8xUrRKJF",{from:accounts[95],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(709291);
});
it('test 13',async() => {
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[6],value:39});

result = await instance.claimThrone("kma2dDCOTYqVlQA5",{from:accounts[86],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(573398);
});
it('test 14',async() => {
result = await instance.claimThrone("LQiv6oXTG4u2Vt1",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[8],value:21});

result = await instance.sweepCommission(579330);
});
it('test 15',async() => {
result = await instance.claimThrone("6gKPStLJ7qkhdIx",{from:accounts[17],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(262314);
await instance.sendTransaction({from:accounts[8],value:12});

});
it('test 16',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(34415);
result = await instance.claimThrone("cGvwQB73CAkqD",{from:accounts[7],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[1],value:26});

});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[6],value:16});

result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(16621);
result = await instance.claimThrone("csxlwBzMgT6G",{from:accounts[49],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 18',async() => {
result = await instance.claimThrone("egw9WAxhKIo",{from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(515031);
await instance.sendTransaction({from:accounts[7],value:63});

});
it('test 19',async() => {
result = await instance.sweepCommission(987440);
result = await instance.claimThrone("p4qZo0xFCf",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[9],value:46});

});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 20',async() => {
result = await instance.claimThrone("Z3PTegdsuCUMyAHKj5",{from:accounts[48],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[7],value:35});

result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(123806);
});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[6],value:89});

result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(428740);
result = await instance.claimThrone("vpBTAOLeXsV",{from:accounts[13],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 22',async() => {
result = await instance.sweepCommission(1006137);
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("QgPBubRiH6KO",{from:accounts[34],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[9],value:89});

});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[6],value:90});

result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("VKpLn8vlFs6B",{from:accounts[22],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(924877);
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[1],value:6});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("F9MBXOWNZC",{from:accounts[50],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(981220);
});
it('test 25',async() => {
result = await instance.sweepCommission(411103);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("HCUcaeMlsBq0pROrti",{from:accounts[14],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[4],value:96});

});
it('test 26',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("19eEpZPdtSx",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(686953);
await instance.sendTransaction({from:accounts[7],value:81});

});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[6],value:35});

result = await instance.claimThrone("T5lgP42uAew36I9",{from:accounts[40],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(946871);
result = await instance.transferOwnership(accounts[3]);
});
it('test 28',async() => {
result = await instance.claimThrone("RnFLgc64iylBwYCme",{from:accounts[62],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[7],value:63});

result = await instance.sweepCommission(582085);
});
it('test 29',async() => {
result = await instance.sweepCommission(1044245);
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("IhilzfgJ7s1MO",{from:accounts[11],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[7],value:97});

});
});
