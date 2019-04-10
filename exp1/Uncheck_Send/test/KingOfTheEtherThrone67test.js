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
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("0CpeP1AL8mDZybwX4G",{from:accounts[52],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(179831);
await instance.sendTransaction({from:accounts[3],value:49});

});
it('test 1',async() => {
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[8],value:92});

result = await instance.sweepCommission(427180);
result = await instance.claimThrone("p03Yg62EuGvM",{from:accounts[15],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 2',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[2],value:96});

result = await instance.claimThrone("PtsuIpLNzEWl",{from:accounts[98],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(902259);
});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[5],value:17});

result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("ivwVeQX4O5thqrS",{from:accounts[6],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(744884);
});
it('test 4',async() => {
result = await instance.sweepCommission(638349);
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[2],value:77});

result = await instance.claimThrone("Toy8ZuRszr1hvAaCx9Vi",{from:accounts[40],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[6],value:75});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(249861);
result = await instance.claimThrone("QP4dBtOFEvkpry9j5T",{from:accounts[38],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 6',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("IbxaHmYuZ8",{from:accounts[67],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(1022109);
await instance.sendTransaction({from:accounts[4],value:55});

});
it('test 7',async() => {
result = await instance.sweepCommission(678647);
await instance.sendTransaction({from:accounts[6],value:24});

result = await instance.claimThrone("UJje1Qv3fwdI4",{from:accounts[47],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[3]);
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[3],value:99});

result = await instance.sweepCommission(321898);
result = await instance.claimThrone("e4qTBzgxsEi",{from:accounts[35],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 9',async() => {
result = await instance.claimThrone("MLn74NoF38",{from:accounts[100],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[2],value:9});

result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(371141);
});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[4],value:63});

result = await instance.sweepCommission(48077);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("K5X4RQGziap",{from:accounts[8],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 11',async() => {
result = await instance.sweepCommission(1009994);
await instance.sendTransaction({from:accounts[9],value:92});

result = await instance.claimThrone("V52uDsUex4YfWByFb",{from:accounts[19],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[3]);
});
it('test 12',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(990820);
result = await instance.claimThrone("7YvEaHySWPmfM9NR6",{from:accounts[91],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[1],value:62});

});
it('test 13',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[4],value:1});

result = await instance.claimThrone("vhVO3AMTWIg2Q",{from:accounts[55],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(474007);
});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[1],value:52});

result = await instance.claimThrone("2QcxTIUeknb",{from:accounts[72],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(245085);
});
it('test 15',async() => {
result = await instance.sweepCommission(537551);
await instance.sendTransaction({from:accounts[6],value:37});

result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("UbSPGvNe74",{from:accounts[37],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 16',async() => {
result = await instance.sweepCommission(235006);
await instance.sendTransaction({from:accounts[7],value:17});

result = await instance.claimThrone("EGud0jqtyWC",{from:accounts[76],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[1]);
});
it('test 17',async() => {
result = await instance.claimThrone("qxAihadKjFm3ovL9",{from:accounts[35],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(582737);
await instance.sendTransaction({from:accounts[8],value:22});

});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[2],value:97});

result = await instance.sweepCommission(746098);
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("nKAPtqHXj4p6ZWwG",{from:accounts[78],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 19',async() => {
result = await instance.claimThrone("UN0RqH8KS1fBkCiW7",{from:accounts[47],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(676495);
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[4],value:5});

});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[7],value:18});

result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("frvz2c7WOK",{from:accounts[53],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(122427);
});
it('test 21',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(167770);
result = await instance.claimThrone("VZF0vhUmdp6LSwH3",{from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[9],value:46});

});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[1],value:72});

result = await instance.claimThrone("kLBWsSv1r6tKwuIEgj",{from:accounts[45],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(723871);
result = await instance.transferOwnership(accounts[4]);
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[1],value:100});

result = await instance.sweepCommission(444882);
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("I6H4vjKyrA9YP",{from:accounts[52],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 24',async() => {
result = await instance.claimThrone("LPg2WlNEFSvH",{from:accounts[89],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[2],value:46});

result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(238216);
});
it('test 25',async() => {
result = await instance.sweepCommission(710262);
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("f15cHWJD2a7",{from:accounts[47],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[2],value:21});

});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[3],value:91});

result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("DXLvSUWRu2Olm",{from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(539026);
});
it('test 27',async() => {
result = await instance.sweepCommission(517382);
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("GQqklYg2XHaO",{from:accounts[43],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[6],value:82});

});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[6],value:32});

result = await instance.sweepCommission(890068);
result = await instance.claimThrone("0OibQEaLjF",{from:accounts[29],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[2]);
});
it('test 29',async() => {
result = await instance.sweepCommission(749999);
await instance.sendTransaction({from:accounts[7],value:97});

result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("C38I6cXP4QqbwoWVR",{from:accounts[45],value:web3.utils.toWei(web3.utils.toBN(1))});
});
});
