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
result = await instance.claimThrone("FDV18SkBv6",{from:accounts[36],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(950535);
await instance.sendTransaction({from:accounts[6],value:1});

});
it('test 1',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(989258);
await instance.sendTransaction({from:accounts[4],value:90});

result = await instance.claimThrone("9PRKH6zaSvt4Cu",{from:accounts[18],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 2',async() => {
result = await instance.sweepCommission(894851);
await instance.sendTransaction({from:accounts[5],value:14});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("LV9z6o8R3lS0",{from:accounts[77],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[2],value:11});

result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("GplHaU3bJP2fW",{from:accounts[70],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(502994);
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[3],value:16});

result = await instance.claimThrone("UHCMeT3ZvjlV7Or",{from:accounts[87],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(638115);
});
it('test 5',async() => {
result = await instance.sweepCommission(281938);
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("2wgK6IFu5x4c",{from:accounts[43],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[6],value:11});

});
it('test 6',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("SCUt7F06aBsrRygE8Z",{from:accounts[31],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[1],value:56});

result = await instance.sweepCommission(339813);
});
it('test 7',async() => {
result = await instance.sweepCommission(436502);
result = await instance.claimThrone("p3sSlRDznKdv",{from:accounts[46],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[7],value:66});

});
it('test 8',async() => {
result = await instance.sweepCommission(788419);
await instance.sendTransaction({from:accounts[1],value:75});

result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("M4rZk768WpJXFYIKTa",{from:accounts[45],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 9',async() => {
result = await instance.claimThrone("nDBhe7VWZu9",{from:accounts[72],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(311185);
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[6],value:67});

});
it('test 10',async() => {
result = await instance.claimThrone("xm6yFrkDI108sA",{from:accounts[89],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[1],value:62});

result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(440282);
});
it('test 11',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("plAVzcvXmKEtd",{from:accounts[66],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[1],value:40});

result = await instance.sweepCommission(372554);
});
it('test 12',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(215402);
result = await instance.claimThrone("iXV8Br4x1NAk7Y5DwQ",{from:accounts[63],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[1],value:16});

});
it('test 13',async() => {
result = await instance.sweepCommission(463785);
await instance.sendTransaction({from:accounts[2],value:35});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("NI2HVBic6v0bm",{from:accounts[68],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 14',async() => {
result = await instance.claimThrone("SAzw3p2I8VGvJL6P",{from:accounts[91],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[4],value:87});

result = await instance.sweepCommission(303996);
});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[9],value:64});

result = await instance.claimThrone("OFQMRikb2yhosj8PqX",{from:accounts[80],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(116993);
result = await instance.transferOwnership(accounts[5]);
});
it('test 16',async() => {
result = await instance.claimThrone("O5TvZoMGWRaF7",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(74179);
await instance.sendTransaction({from:accounts[1],value:85});

});
it('test 17',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("UHcW7mRl8Q",{from:accounts[62],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(772508);
await instance.sendTransaction({from:accounts[5],value:35});

});
it('test 18',async() => {
result = await instance.claimThrone("iAqf8WjnaNtJuUEIyp",{from:accounts[81],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[4],value:26});

result = await instance.sweepCommission(956089);
result = await instance.transferOwnership(accounts[0]);
});
it('test 19',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("vlidKgNb5xfU",{from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[8],value:100});

result = await instance.sweepCommission(835654);
});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[2],value:16});

result = await instance.sweepCommission(391022);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("YkPEitn0b5B",{from:accounts[49],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 21',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("H92vSIUkTrdWcAG5Chw",{from:accounts[30],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[4],value:91});

result = await instance.sweepCommission(838365);
});
it('test 22',async() => {
result = await instance.claimThrone("rUYqbBQLgfPSe4x7h",{from:accounts[60],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(833538);
await instance.sendTransaction({from:accounts[4],value:52});

result = await instance.transferOwnership(accounts[2]);
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[4],value:26});

result = await instance.sweepCommission(14707);
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("Zh5k3tlrSXAnNsgFzEJj",{from:accounts[78],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 24',async() => {
result = await instance.sweepCommission(982331);
result = await instance.claimThrone("gazmYTsiSOGC",{from:accounts[17],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[1],value:24});

result = await instance.transferOwnership(accounts[0]);
});
it('test 25',async() => {
result = await instance.sweepCommission(72001);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("4H2xYTpNQGR6EfPl",{from:accounts[71],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[3],value:13});

});
it('test 26',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(411055);
result = await instance.claimThrone("fr4KjvL9WqGeRzDm",{from:accounts[34],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[2],value:12});

});
it('test 27',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(166881);
await instance.sendTransaction({from:accounts[6],value:44});

result = await instance.claimThrone("Q8zO1RGt6Dm7",{from:accounts[72],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 28',async() => {
result = await instance.claimThrone("EIsLvZOGMt4kR1uziKb",{from:accounts[66],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[6],value:44});

result = await instance.sweepCommission(432586);
result = await instance.transferOwnership(accounts[1]);
});
it('test 29',async() => {
result = await instance.claimThrone("zH2QIxJFKvCBf",{from:accounts[63],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(210153);
await instance.sendTransaction({from:accounts[2],value:23});

result = await instance.transferOwnership(accounts[5]);
});
});
