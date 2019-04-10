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
result = await instance.claimThrone("STekl4CE3ZnbK",{from:accounts[13],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[8],value:35});

result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(8829);
});
it('test 1',async() => {
result = await instance.sweepCommission(10673);
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[8],value:52});

result = await instance.claimThrone("52ZgrzNWkynEio340t",{from:accounts[27],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 2',async() => {
result = await instance.sweepCommission(1007554);
await instance.sendTransaction({from:accounts[1],value:91});

result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("bOmLQDsN0E6gur",{from:accounts[33],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 3',async() => {
result = await instance.sweepCommission(266001);
await instance.sendTransaction({from:accounts[5],value:58});

result = await instance.claimThrone("SBEQTOJnp2",{from:accounts[65],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[2]);
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[5],value:24});

result = await instance.sweepCommission(988156);
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("8r5SeBAHU7K2h",{from:accounts[43],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 5',async() => {
result = await instance.claimThrone("FPYNW7SU3LVn2X",{from:accounts[6],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(977319);
await instance.sendTransaction({from:accounts[1],value:60});

result = await instance.transferOwnership(accounts[5]);
});
it('test 6',async() => {
result = await instance.claimThrone("sx1OezVi7r63jTEc",{from:accounts[67],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(961773);
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[5],value:8});

});
it('test 7',async() => {
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[7],value:21});

result = await instance.sweepCommission(19382);
result = await instance.claimThrone("o1UIWh2QBeytzxdZ7",{from:accounts[45],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 8',async() => {
result = await instance.sweepCommission(826980);
await instance.sendTransaction({from:accounts[4],value:80});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("wOKq0eInuAsVJr5S",{from:accounts[23],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[3],value:95});

result = await instance.sweepCommission(644162);
result = await instance.claimThrone("pAC8d1ler5ou0ah",{from:accounts[57],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 10',async() => {
result = await instance.claimThrone("iuULPt47vcOjR",{from:accounts[39],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(414836);
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[9],value:60});

});
it('test 11',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(958133);
result = await instance.claimThrone("7An4IiDXxusetO",{from:accounts[39],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[9],value:85});

});
it('test 12',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(562307);
result = await instance.claimThrone("WPTxOYf54bwhd",{from:accounts[10],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[1],value:67});

});
it('test 13',async() => {
result = await instance.sweepCommission(108488);
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("On6k4Tq3trxIJj",{from:accounts[47],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[8],value:71});

});
it('test 14',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("4YPJoUGeplgd56tV",{from:accounts[95],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(491274);
await instance.sendTransaction({from:accounts[3],value:72});

});
it('test 15',async() => {
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[5],value:35});

result = await instance.sweepCommission(416713);
result = await instance.claimThrone("H7hRCl2EcZY3LJ9tUy0V",{from:accounts[88],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 16',async() => {
result = await instance.sweepCommission(468363);
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("vBZ52PzIHJb7W1Q6SY",{from:accounts[87],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[5],value:41});

});
it('test 17',async() => {
result = await instance.claimThrone("XL6jYVN7Dap4d",{from:accounts[58],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[3],value:94});

result = await instance.sweepCommission(894595);
result = await instance.transferOwnership(accounts[2]);
});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[6],value:51});

result = await instance.claimThrone("gvTOH4mDLpKQNqJthnuR",{from:accounts[12],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(506376);
result = await instance.transferOwnership(accounts[5]);
});
it('test 19',async() => {
result = await instance.sweepCommission(466443);
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("fQJY4B2iDAkl",{from:accounts[76],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[3],value:22});

});
it('test 20',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[4],value:11});

result = await instance.claimThrone("p16H8igZ7w3XJVPbF",{from:accounts[65],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(1025609);
});
it('test 21',async() => {
result = await instance.sweepCommission(511810);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("DVpWK3Cxbguz",{from:accounts[47],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[4],value:75});

});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[4],value:24});

result = await instance.claimThrone("UNAvYphktLb16iR",{from:accounts[16],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(195377);
});
it('test 23',async() => {
result = await instance.sweepCommission(421562);
result = await instance.claimThrone("rD5UGvHIK46",{from:accounts[79],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[6],value:97});

result = await instance.transferOwnership(accounts[2]);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 24',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("a0FQNteUCZEzJij3L",{from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[7],value:41});

result = await instance.sweepCommission(720819);
});
it('test 25',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("Z0i2jt4UsFApIeXWc",{from:accounts[28],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(16841);
await instance.sendTransaction({from:accounts[2],value:43});

});
it('test 26',async() => {
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[2],value:38});

result = await instance.sweepCommission(547944);
result = await instance.claimThrone("pArNU9BlPIqszyv72Q",{from:accounts[33],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 27',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(364460);
result = await instance.claimThrone("MWCYq2Ie9FQj7zu8X",{from:accounts[8],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[8],value:62});

});
it('test 28',async() => {
result = await instance.claimThrone("wFULdWvNlHJ8rkOSIM",{from:accounts[86],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[9],value:81});

result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(151577);
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[7],value:79});

result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(337912);
result = await instance.claimThrone("Vg0BGdM5bPNYel9FU",{from:accounts[88],value:web3.utils.toWei(web3.utils.toBN(1))});
});
});
