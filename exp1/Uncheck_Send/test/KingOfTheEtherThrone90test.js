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
result = await instance.sweepCommission(896778);
result = await instance.claimThrone("p2AHiom0Kl",{from:accounts[35],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[9],value:47});

result = await instance.transferOwnership(accounts[5]);
});
it('test 1',async() => {
result = await instance.sweepCommission(668951);
await instance.sendTransaction({from:accounts[2],value:16});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("qWOFj6zT0oK",{from:accounts[29],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 2',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[3],value:37});

result = await instance.sweepCommission(940650);
result = await instance.claimThrone("ILc34zGmbEeivtorFsa",{from:accounts[18],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 3',async() => {
result = await instance.claimThrone("sJD4x9VA2omHz",{from:accounts[38],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[8],value:47});

result = await instance.sweepCommission(699893);
result = await instance.transferOwnership(accounts[1]);
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[9],value:19});

result = await instance.claimThrone("MLpD9VblajxKrOc2Q4u",{from:accounts[76],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(612184);
});
it('test 5',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[4],value:8});

result = await instance.sweepCommission(820084);
result = await instance.claimThrone("xtm5zDNeuc",{from:accounts[26],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 6',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[9],value:16});

result = await instance.claimThrone("Nmw4Vy3Cuo6HdajhGUp",{from:accounts[75],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(303021);
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[7],value:93});

result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(560997);
result = await instance.claimThrone("JnmItgd4BheGTHW1",{from:accounts[47],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 8',async() => {
result = await instance.claimThrone("r1XkhsYT8MyKSciRlp",{from:accounts[83],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[4],value:62});

result = await instance.sweepCommission(1036096);
result = await instance.transferOwnership(accounts[4]);
});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[2],value:19});

result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(859101);
result = await instance.claimThrone("5j9mXxuzLNhM4iCJlFY",{from:accounts[46],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 10',async() => {
result = await instance.sweepCommission(956992);
await instance.sendTransaction({from:accounts[9],value:21});

result = await instance.claimThrone("sqWnv8It6aPGQL3uygi0",{from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[1]);
});
it('test 11',async() => {
result = await instance.sweepCommission(329431);
result = await instance.claimThrone("BJb1LeyvKzm",{from:accounts[54],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[1],value:3});

});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[9],value:96});

result = await instance.claimThrone("PfJYONA7FCkt",{from:accounts[42],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(404922);
});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[3],value:61});

result = await instance.claimThrone("85QLSuABD9",{from:accounts[6],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(443734);
});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[7],value:82});

result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(853039);
result = await instance.claimThrone("Es8dh9W6uRZczbjw7Cri",{from:accounts[98],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 15',async() => {
result = await instance.sweepCommission(1046190);
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[3],value:74});

result = await instance.claimThrone("ETGuyjndJMoF8hNvl",{from:accounts[21],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 16',async() => {
result = await instance.claimThrone("bg7NQLnCa3OHfz",{from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(472887);
await instance.sendTransaction({from:accounts[3],value:88});

});
it('test 17',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("8mhbtLAUnE5J1H",{from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(865512);
await instance.sendTransaction({from:accounts[8],value:24});

});
it('test 18',async() => {
result = await instance.claimThrone("YDlV7evM0mTsAEo",{from:accounts[51],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(156630);
await instance.sendTransaction({from:accounts[3],value:69});

});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[7],value:8});

result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(799810);
result = await instance.claimThrone("rEwMu4W7bFY8CL5iO3",{from:accounts[89],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 20',async() => {
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[6],value:83});

result = await instance.sweepCommission(317389);
result = await instance.claimThrone("yO8ArMLwDHhkde",{from:accounts[49],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 21',async() => {
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[4],value:9});

result = await instance.sweepCommission(403261);
result = await instance.claimThrone("thWa6CksYHQydbZ7pF9",{from:accounts[77],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 22',async() => {
result = await instance.sweepCommission(721009);
result = await instance.claimThrone("nHEmA8j0wfxdq1s7",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[5],value:32});

});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[4],value:29});

result = await instance.sweepCommission(462582);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("1TI2Z7vXrackOd65",{from:accounts[71],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[2],value:51});

result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(681863);
result = await instance.claimThrone("UYwvk8hWdyKg",{from:accounts[81],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[9],value:43});

result = await instance.claimThrone("PenOZgx4jaWGVXFtu",{from:accounts[37],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(678827);
result = await instance.transferOwnership(accounts[5]);
});
it('test 26',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("Y12ndMCzKqEWUHV",{from:accounts[46],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[8],value:89});

result = await instance.sweepCommission(141415);
});
it('test 27',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("VWuCH9rJvf2a",{from:accounts[8],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[6],value:96});

result = await instance.sweepCommission(313341);
});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[8],value:51});

result = await instance.claimThrone("E96d2r8i1AnWCSFyUT34",{from:accounts[15],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(1046622);
result = await instance.transferOwnership(accounts[5]);
});
it('test 29',async() => {
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[7],value:13});

result = await instance.claimThrone("v4JWoLRYXG",{from:accounts[60],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(463104);
});
});
