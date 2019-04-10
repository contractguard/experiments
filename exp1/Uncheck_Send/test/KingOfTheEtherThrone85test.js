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
await instance.sendTransaction({from:accounts[5],value:6});

result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(146531);
result = await instance.claimThrone("mU7nhEpcS2dV",{from:accounts[38],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 1',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(882418);
await instance.sendTransaction({from:accounts[9],value:25});

result = await instance.claimThrone("Bk0sPcG1MC6eYvLb",{from:accounts[35],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 2',async() => {
result = await instance.claimThrone("2vXV4rujMoiD3G9",{from:accounts[69],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(567462);
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[4],value:93});

});
it('test 3',async() => {
result = await instance.claimThrone("TcBhONfRnbm6K",{from:accounts[23],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[3],value:11});

result = await instance.sweepCommission(820303);
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[7],value:97});

result = await instance.claimThrone("NZRCWIz2edfA3VQaBP8",{from:accounts[58],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(23956);
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[5],value:76});

result = await instance.claimThrone("50tJgMFCpYjcoV",{from:accounts[54],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(130538);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[4],value:14});

result = await instance.sweepCommission(569500);
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("16DIBkrdKhuG7QZl5be",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 7',async() => {
result = await instance.claimThrone("XeNJqfrpihojbxHV9Gm",{from:accounts[93],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(286088);
await instance.sendTransaction({from:accounts[8],value:92});

});
it('test 8',async() => {
result = await instance.sweepCommission(621979);
result = await instance.claimThrone("azUkj7WTAZV4Hn6oYL3",{from:accounts[75],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[5],value:1});

result = await instance.transferOwnership(accounts[0]);
});
it('test 9',async() => {
result = await instance.claimThrone("uXzbh3wZAs5EYrBOKWe6",{from:accounts[29],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[2],value:51});

result = await instance.sweepCommission(149684);
});
it('test 10',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(122689);
await instance.sendTransaction({from:accounts[2],value:53});

result = await instance.claimThrone("nryMN9Ck1uYT",{from:accounts[6],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 11',async() => {
result = await instance.sweepCommission(1046085);
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("PsTFNQIBvfOj7euSMqpa",{from:accounts[63],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[4],value:57});

});
it('test 12',async() => {
result = await instance.sweepCommission(910885);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("72rgjFISaRo",{from:accounts[33],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[8],value:50});

});
it('test 13',async() => {
result = await instance.sweepCommission(417177);
result = await instance.claimThrone("FJVM8pPR4uik01YlCIAe",{from:accounts[100],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[9],value:73});

});
it('test 14',async() => {
result = await instance.claimThrone("JZRt91HOqEk",{from:accounts[89],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[2],value:83});

result = await instance.sweepCommission(900741);
result = await instance.transferOwnership(accounts[1]);
});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[4],value:69});

result = await instance.claimThrone("LXYA8awxO2Pn5I4y",{from:accounts[72],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(449142);
});
it('test 16',async() => {
result = await instance.claimThrone("gtI9mDFsWzJKM",{from:accounts[91],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(731155);
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[9],value:54});

});
it('test 17',async() => {
result = await instance.sweepCommission(15259);
await instance.sendTransaction({from:accounts[7],value:40});

result = await instance.claimThrone("SIXJPHnmEA",{from:accounts[16],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[1]);
});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[3],value:55});

result = await instance.sweepCommission(1000239);
result = await instance.claimThrone("U5exEtVjDN3",{from:accounts[94],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[3]);
});
it('test 19',async() => {
result = await instance.claimThrone("0oeDH14xVUuBPZGO",{from:accounts[87],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[6],value:83});

result = await instance.sweepCommission(643026);
});
it('test 20',async() => {
result = await instance.sweepCommission(915290);
await instance.sendTransaction({from:accounts[1],value:77});

result = await instance.claimThrone("UQBCRqPaX3I7S",{from:accounts[86],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[2]);
});
it('test 21',async() => {
result = await instance.claimThrone("harcDv9o8Qy",{from:accounts[70],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(983979);
await instance.sendTransaction({from:accounts[5],value:70});

});
it('test 22',async() => {
result = await instance.claimThrone("LyGMT3eXBbl",{from:accounts[50],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[8],value:72});

result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(15037);
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[6],value:95});

result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("6skvrpqYyL0RUbmM",{from:accounts[44],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(422839);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 24',async() => {
result = await instance.claimThrone("TUoKkul7xHQqhCzmc",{from:accounts[9],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[7],value:55});

result = await instance.sweepCommission(182698);
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[8],value:62});

result = await instance.sweepCommission(1010346);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("OFW9gNws42due",{from:accounts[80],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[3],value:3});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(781099);
result = await instance.claimThrone("zMdDRe4T3x",{from:accounts[25],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 27',async() => {
result = await instance.sweepCommission(48347);
result = await instance.claimThrone("Ge9CcNqQjAB",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[3],value:43});

});
it('test 28',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(610996);
await instance.sendTransaction({from:accounts[9],value:68});

result = await instance.claimThrone("g1rVHsJc5KELaTR2UFA7",{from:accounts[58],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 29',async() => {
result = await instance.sweepCommission(624430);
result = await instance.claimThrone("C53Qkb4lDW",{from:accounts[88],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[1],value:6});

});
});
