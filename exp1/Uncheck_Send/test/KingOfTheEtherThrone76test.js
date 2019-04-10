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
await instance.sendTransaction({from:accounts[1],value:20});

result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("mx02BXya7nQrwAi4sCuT",{from:accounts[67],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(330749);
});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[1],value:38});

result = await instance.sweepCommission(85040);
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("TPVRxyMSHgpcXWj2",{from:accounts[67],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 2',async() => {
result = await instance.sweepCommission(945530);
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("UfV32QIc7MGRobnzy0Ti",{from:accounts[85],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[7],value:74});

});
it('test 3',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("fNosZWUMDleaj",{from:accounts[10],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[3],value:23});

result = await instance.sweepCommission(486547);
});
it('test 4',async() => {
result = await instance.claimThrone("VX8vhT2Yc7j3IZ5",{from:accounts[16],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(449663);
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[3],value:17});

});
it('test 5',async() => {
result = await instance.claimThrone("mw4UQAG7eDyq",{from:accounts[7],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(797917);
await instance.sendTransaction({from:accounts[1],value:9});

result = await instance.transferOwnership(accounts[3]);
});
it('test 6',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(416674);
await instance.sendTransaction({from:accounts[2],value:2});

result = await instance.claimThrone("ihYc7fL9DIRB4U2gPX5W",{from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 7',async() => {
result = await instance.claimThrone("UMuysjbtZ68kSrAnIHO",{from:accounts[65],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[7],value:81});

result = await instance.sweepCommission(55985);
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[2],value:82});

result = await instance.claimThrone("BXgIOEvrRMfb5pjZVQ8Y",{from:accounts[61],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(611084);
});
it('test 9',async() => {
result = await instance.sweepCommission(655643);
await instance.sendTransaction({from:accounts[4],value:2});

result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("BlgqZ0YxF2yVX",{from:accounts[42],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 10',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("3e2KiQoPhEf6p",{from:accounts[90],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[1],value:3});

result = await instance.sweepCommission(139473);
});
it('test 11',async() => {
result = await instance.sweepCommission(334377);
result = await instance.claimThrone("0gAWOTKujdLP4",{from:accounts[20],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[3],value:4});

});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[3],value:89});

result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("gXc6s5i4TFblIomNf",{from:accounts[88],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(276083);
});
it('test 13',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(787897);
result = await instance.claimThrone("BlCg9w8yAZztNJ",{from:accounts[67],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[1],value:43});

});
it('test 14',async() => {
result = await instance.claimThrone("ckaJBFAodrvEK27",{from:accounts[57],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(279829);
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[9],value:20});

});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[5],value:39});

result = await instance.claimThrone("Kb9DOIW2cf6wjHk5z",{from:accounts[65],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(374107);
});
it('test 16',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("khbX2qMm6PTrJSCoGFYN",{from:accounts[13],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[6],value:58});

result = await instance.sweepCommission(731290);
});
it('test 17',async() => {
result = await instance.sweepCommission(20203);
result = await instance.claimThrone("PDkO1d0yKHui9tQGrwhn",{from:accounts[46],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[9],value:14});

});
it('test 18',async() => {
result = await instance.sweepCommission(282183);
await instance.sendTransaction({from:accounts[8],value:89});

result = await instance.claimThrone("XUz38VCYWQ6OtgnGZlxR",{from:accounts[75],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[0]);
});
it('test 19',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(728002);
result = await instance.claimThrone("MxqW9vdrfLtyYI5X",{from:accounts[63],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[9],value:12});

});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[2],value:90});

result = await instance.claimThrone("ve7FPs4lXzrBb",{from:accounts[44],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(986159);
result = await instance.transferOwnership(accounts[1]);
});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[8],value:60});

result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(888499);
result = await instance.claimThrone("LXSOxW7UNiwKI59A3u6B",{from:accounts[10],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 22',async() => {
result = await instance.claimThrone("1eagjEcpANKr",{from:accounts[36],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(1046739);
await instance.sendTransaction({from:accounts[6],value:18});

result = await instance.transferOwnership(accounts[1]);
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[1],value:56});

result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(901554);
result = await instance.claimThrone("P9DwuEzKq6iSCUpHBNZy",{from:accounts[89],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[2],value:83});

result = await instance.claimThrone("3Jhu4rFiYEx7I",{from:accounts[71],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(918865);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 25',async() => {
result = await instance.sweepCommission(179882);
await instance.sendTransaction({from:accounts[6],value:46});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("nWSkQZY4E8f",{from:accounts[18],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 26',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[1],value:90});

result = await instance.claimThrone("Em7lFjc6IYdw",{from:accounts[14],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(868277);
});
it('test 27',async() => {
result = await instance.sweepCommission(9400);
await instance.sendTransaction({from:accounts[6],value:56});

result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("imL6jEl9JRZYU4uFw",{from:accounts[90],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 28',async() => {
result = await instance.sweepCommission(1022085);
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[7],value:54});

result = await instance.claimThrone("kmtUIQh1eZxDq8rLRuBb",{from:accounts[67],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 29',async() => {
result = await instance.sweepCommission(102890);
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("E8hw2oQf9il",{from:accounts[61],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[3],value:2});

});
});
