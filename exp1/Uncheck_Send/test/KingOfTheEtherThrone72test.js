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
result = await instance.sweepCommission(284023);
await instance.sendTransaction({from:accounts[2],value:4});

result = await instance.claimThrone("4FAZwaQu0NWmHbez9iq",{from:accounts[29],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[2],value:82});

result = await instance.claimThrone("MdjHRsZQu32KTEY",{from:accounts[49],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(739098);
});
it('test 2',async() => {
result = await instance.sweepCommission(886160);
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[8],value:26});

result = await instance.claimThrone("aKUJmFixfj6ZvWqOb",{from:accounts[96],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 3',async() => {
result = await instance.claimThrone("myd1oXFCQ3",{from:accounts[49],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(676842);
await instance.sendTransaction({from:accounts[8],value:96});

result = await instance.transferOwnership(accounts[1]);
});
it('test 4',async() => {
result = await instance.sweepCommission(563088);
await instance.sendTransaction({from:accounts[8],value:72});

result = await instance.claimThrone("ITqKAgzLFdG",{from:accounts[46],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[3]);
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[9],value:60});

result = await instance.claimThrone("i8gLXbcWO51adlkS",{from:accounts[52],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(678831);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[8],value:40});

result = await instance.sweepCommission(795260);
result = await instance.claimThrone("Fhm5W6KaONCDI7",{from:accounts[30],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[0]);
});
it('test 7',async() => {
result = await instance.sweepCommission(933224);
await instance.sendTransaction({from:accounts[5],value:54});

result = await instance.claimThrone("8LWhyvrQ0q9",{from:accounts[45],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[5]);
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[9],value:6});

result = await instance.sweepCommission(178047);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("aWQfqe1kERoK2CAsZBTg",{from:accounts[38],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 9',async() => {
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[6],value:69});

result = await instance.claimThrone("iQkVpJjhIuqK9rvOWgB",{from:accounts[46],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(590490);
});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[5],value:47});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(376274);
result = await instance.claimThrone("J8op4PkRlTeiSs5D",{from:accounts[42],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 11',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[1],value:42});

result = await instance.claimThrone("ygJFKdrz0fs2o",{from:accounts[72],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(120155);
});
it('test 12',async() => {
result = await instance.sweepCommission(832546);
await instance.sendTransaction({from:accounts[8],value:31});

result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("QOamZqyGTIeb",{from:accounts[12],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[2],value:97});

result = await instance.sweepCommission(1015688);
result = await instance.claimThrone("ZS9y52NEzU",{from:accounts[83],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[0]);
});
it('test 14',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(439287);
await instance.sendTransaction({from:accounts[3],value:83});

result = await instance.claimThrone("DXkxigaodmzBM",{from:accounts[82],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 15',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[7],value:90});

result = await instance.sweepCommission(554944);
result = await instance.claimThrone("E9FAUkTYrh6Hz2I",{from:accounts[68],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 16',async() => {
result = await instance.sweepCommission(262798);
await instance.sendTransaction({from:accounts[3],value:58});

result = await instance.claimThrone("a0CEIKDksJgZ",{from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[5]);
});
it('test 17',async() => {
result = await instance.claimThrone("IsgBHKnPzpU",{from:accounts[82],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[8],value:56});

result = await instance.sweepCommission(1034632);
});
it('test 18',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(224745);
result = await instance.claimThrone("hoXYaDlr1xvbdZ6J",{from:accounts[90],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[6],value:33});

});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[8],value:50});

result = await instance.sweepCommission(908198);
result = await instance.claimThrone("SHFNXTndbC",{from:accounts[61],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[3]);
});
it('test 20',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("JSKgG2ifpX",{from:accounts[28],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[7],value:29});

result = await instance.sweepCommission(355687);
});
it('test 21',async() => {
result = await instance.sweepCommission(501422);
result = await instance.claimThrone("ueXyxI5EGa",{from:accounts[83],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[4],value:86});

});
it('test 22',async() => {
result = await instance.claimThrone("P5esJ0jTE3gm",{from:accounts[33],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[6],value:43});

result = await instance.sweepCommission(402180);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[5],value:29});

result = await instance.claimThrone("eiuZtPONl64Gp",{from:accounts[72],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(894089);
result = await instance.transferOwnership(accounts[4]);
});
it('test 24',async() => {
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[9],value:52});

result = await instance.claimThrone("t6wRa8A5H73",{from:accounts[32],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(576418);
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[4],value:9});

result = await instance.claimThrone("4sU39pT1ZzEiuO",{from:accounts[28],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(21882);
result = await instance.transferOwnership(accounts[5]);
});
it('test 26',async() => {
result = await instance.claimThrone("Ppoj6iDhbxnwJ",{from:accounts[8],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[2],value:51});

result = await instance.sweepCommission(710863);
result = await instance.transferOwnership(accounts[3]);
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[8],value:51});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("E9zhRCexWwpjYv",{from:accounts[77],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(910558);
});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[2],value:61});

result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(733209);
result = await instance.claimThrone("RxCtLv2oPFTMjZX1",{from:accounts[64],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 29',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(616687);
await instance.sendTransaction({from:accounts[8],value:22});

result = await instance.claimThrone("Dr2wkcBYZEpCSlnK",{from:accounts[91],value:web3.utils.toWei(web3.utils.toBN(3))});
});
});
