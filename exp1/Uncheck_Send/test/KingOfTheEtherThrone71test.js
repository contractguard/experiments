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
result = await instance.sweepCommission(1035654);
await instance.sendTransaction({from:accounts[5],value:79});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("yQ6wKGVbdR",{from:accounts[79],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 1',async() => {
result = await instance.sweepCommission(601158);
result = await instance.claimThrone("65MkTUCaFovrhAx",{from:accounts[72],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[4],value:74});

result = await instance.transferOwnership(accounts[0]);
});
it('test 2',async() => {
result = await instance.sweepCommission(652925);
result = await instance.claimThrone("fl3PH7FjmgOv12",{from:accounts[37],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[3],value:33});

result = await instance.transferOwnership(accounts[2]);
});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[6],value:90});

result = await instance.claimThrone("PXZ0f6aWNAx",{from:accounts[8],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(906792);
});
it('test 4',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(110046);
result = await instance.claimThrone("SEVwbA7gaJ",{from:accounts[48],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[7],value:82});

});
it('test 5',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("TFBVmetJQkjxSpW",{from:accounts[52],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(1028351);
await instance.sendTransaction({from:accounts[2],value:64});

});
it('test 6',async() => {
result = await instance.claimThrone("MSIGKl1wN92mY",{from:accounts[24],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[6],value:92});

result = await instance.sweepCommission(699202);
result = await instance.transferOwnership(accounts[0]);
});
it('test 7',async() => {
result = await instance.claimThrone("DGqLwJErTlBm",{from:accounts[70],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(770862);
await instance.sendTransaction({from:accounts[1],value:83});

});
it('test 8',async() => {
result = await instance.sweepCommission(907199);
await instance.sendTransaction({from:accounts[3],value:43});

result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("P6oeDtCaXM9RA",{from:accounts[25],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 9',async() => {
result = await instance.sweepCommission(235137);
result = await instance.claimThrone("7W4BizrcQxEJ6dDwaY5",{from:accounts[69],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[6],value:87});

});
it('test 10',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("WHe3UrpgP9D",{from:accounts[98],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[4],value:58});

result = await instance.sweepCommission(570590);
});
it('test 11',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[8],value:48});

result = await instance.sweepCommission(22572);
result = await instance.claimThrone("zX4Ipv57PyaNn0AsWlO",{from:accounts[54],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 12',async() => {
result = await instance.sweepCommission(748615);
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[6],value:34});

result = await instance.claimThrone("ZXafBqv6P9sNJ7Gtr1dp",{from:accounts[49],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 13',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(951541);
result = await instance.claimThrone("8UIY52ebKWpw1GBOvl",{from:accounts[92],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[9],value:29});

});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[2],value:80});

result = await instance.sweepCommission(804214);
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("ec3LPMQI9itJza",{from:accounts[34],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 15',async() => {
result = await instance.claimThrone("PGOIB9K0Z2hzk",{from:accounts[71],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(205970);
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[6],value:7});

});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[4],value:67});

result = await instance.claimThrone("DwsWq4HVcjuOFzBGb",{from:accounts[59],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(178535);
result = await instance.transferOwnership(accounts[0]);
});
it('test 17',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[6],value:22});

result = await instance.claimThrone("UNSk7u2QEt9f1rj",{from:accounts[28],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(424534);
});
it('test 18',async() => {
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[9],value:88});

result = await instance.sweepCommission(731549);
result = await instance.claimThrone("dQh6rvHtmDunMWx",{from:accounts[52],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 19',async() => {
result = await instance.sweepCommission(908085);
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[9],value:6});

result = await instance.claimThrone("1fgltL03Okz8F",{from:accounts[52],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[5],value:67});

result = await instance.claimThrone("Sx6ONe8YaC",{from:accounts[54],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(828246);
});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[9],value:78});

result = await instance.sweepCommission(620510);
result = await instance.claimThrone("3xDcbPekpF57JCy",{from:accounts[14],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[0]);
});
it('test 22',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(346258);
result = await instance.claimThrone("SNAyzpJwxjDtsBmeC5rq",{from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[6],value:81});

});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[3],value:64});

result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(563711);
result = await instance.claimThrone("mM5QvU2ouC",{from:accounts[96],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 24',async() => {
result = await instance.sweepCommission(987965);
result = await instance.claimThrone("9fIQaY7m8Lx6RZeBXz4O",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[1],value:4});

});
it('test 25',async() => {
result = await instance.sweepCommission(807040);
result = await instance.claimThrone("Mvm4thxLjDQ9OfRU",{from:accounts[71],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[1],value:82});

});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[3],value:20});

result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("41NdbsVpRKqa",{from:accounts[6],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(179957);
});
it('test 27',async() => {
result = await instance.sweepCommission(453220);
result = await instance.claimThrone("9myYG7RgXdC",{from:accounts[82],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[3],value:2});

});
it('test 28',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(159111);
result = await instance.claimThrone("lrJGkxKfD0RAVyp",{from:accounts[8],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[3],value:23});

});
it('test 29',async() => {
result = await instance.sweepCommission(592170);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("ItPrEQJ3NaoLeGZ6njTF",{from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[2],value:28});

});
});
