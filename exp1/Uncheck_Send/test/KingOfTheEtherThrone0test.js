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
await instance.sendTransaction({from:accounts[9],value:21});

result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(953211);
result = await instance.claimThrone("y8nCmJDlWoEhiA",{from:accounts[18],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[3],value:16});

result = await instance.sweepCommission(1007235);
result = await instance.claimThrone("8k3msCOflR",{from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[5]);
});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[2],value:74});

result = await instance.claimThrone("XYwK2iP51VF8Jr7",{from:accounts[70],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(66856);
result = await instance.transferOwnership(accounts[1]);
});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[7],value:12});

result = await instance.claimThrone("ObWoHPKmxSw0s",{from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(527933);
result = await instance.transferOwnership(accounts[0]);
});
it('test 4',async() => {
result = await instance.claimThrone("tOxSVXmsUk1gaYL",{from:accounts[26],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[3],value:88});

result = await instance.sweepCommission(506303);
});
it('test 5',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(27684);
result = await instance.claimThrone("8SwWENsrJ0tMjIRCi",{from:accounts[97],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[4],value:86});

});
it('test 6',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(31643);
await instance.sendTransaction({from:accounts[8],value:57});

result = await instance.claimThrone("cJMm8CinbGZogIjrav",{from:accounts[18],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 7',async() => {
result = await instance.claimThrone("mfWXntz5e2",{from:accounts[9],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[7],value:95});

result = await instance.sweepCommission(863769);
result = await instance.transferOwnership(accounts[5]);
});
it('test 8',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(533570);
await instance.sendTransaction({from:accounts[5],value:74});

result = await instance.claimThrone("KGPlp5HtLSxXB1wVC0F",{from:accounts[65],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 9',async() => {
result = await instance.claimThrone("jnF2BCg0d8bcw1euq",{from:accounts[78],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(838712);
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[6],value:66});

});
it('test 10',async() => {
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[3],value:92});

result = await instance.sweepCommission(539179);
result = await instance.claimThrone("zlyqCuhX23MmIn5N",{from:accounts[82],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 11',async() => {
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[7],value:19});

result = await instance.claimThrone("CXQnDJScadx6PFk",{from:accounts[74],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(289561);
});
it('test 12',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("rpsIDvqKMBngk3",{from:accounts[58],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(103658);
await instance.sendTransaction({from:accounts[5],value:42});

});
it('test 13',async() => {
result = await instance.sweepCommission(38159);
await instance.sendTransaction({from:accounts[1],value:94});

result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("xCPYHWOv5Im3ju",{from:accounts[42],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 14',async() => {
result = await instance.sweepCommission(81798);
await instance.sendTransaction({from:accounts[2],value:42});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("xoca3C2gjD1He",{from:accounts[82],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 15',async() => {
result = await instance.sweepCommission(391321);
result = await instance.claimThrone("tNhPKTmoq3iXbcS4J",{from:accounts[38],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[6],value:90});

});
it('test 16',async() => {
result = await instance.claimThrone("FbXxedPfH4W0R",{from:accounts[38],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(909573);
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[8],value:63});

});
it('test 17',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(159208);
result = await instance.claimThrone("QaN3Y2J5tjfpIrxoO",{from:accounts[20],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[7],value:66});

});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[9],value:55});

result = await instance.sweepCommission(801973);
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("COfwT1NUqxQSKjMiEr4",{from:accounts[28],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 19',async() => {
result = await instance.sweepCommission(733172);
await instance.sendTransaction({from:accounts[9],value:22});

result = await instance.claimThrone("5eiEZW07jzSv",{from:accounts[66],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[1]);
});
it('test 20',async() => {
result = await instance.claimThrone("7aIxvdKBM3",{from:accounts[97],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(147974);
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[2],value:12});

});
it('test 21',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(165512);
await instance.sendTransaction({from:accounts[5],value:17});

result = await instance.claimThrone("PVWtISQ1fkwrpx",{from:accounts[6],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 22',async() => {
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[9],value:100});

result = await instance.sweepCommission(895768);
result = await instance.claimThrone("79aH28tQJY",{from:accounts[72],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 23',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("WIflc7R85jZxwpqS",{from:accounts[54],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[1],value:49});

result = await instance.sweepCommission(563947);
});
it('test 24',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("xOoIKbw4T0LYsd",{from:accounts[90],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(102409);
await instance.sendTransaction({from:accounts[4],value:25});

});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[7],value:55});

result = await instance.sweepCommission(245286);
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("yhAgDj8bO97TIs",{from:accounts[83],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 26',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(585351);
result = await instance.claimThrone("SVW2kgbjnQph50t",{from:accounts[97],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[7],value:7});

});
it('test 27',async() => {
result = await instance.sweepCommission(1010131);
await instance.sendTransaction({from:accounts[9],value:76});

result = await instance.claimThrone("VEDtsCQOc5Wq",{from:accounts[67],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[5]);
});
it('test 28',async() => {
result = await instance.claimThrone("jEPDipm6CBHT",{from:accounts[33],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(555138);
await instance.sendTransaction({from:accounts[6],value:38});

});
it('test 29',async() => {
result = await instance.claimThrone("HNokOvIdKz4",{from:accounts[12],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(87344);
await instance.sendTransaction({from:accounts[1],value:82});

result = await instance.transferOwnership(accounts[3]);
});
});
