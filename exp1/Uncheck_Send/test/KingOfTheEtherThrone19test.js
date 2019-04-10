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
result = await instance.claimThrone("1HamMkPJCLFOrNxoyY",{from:accounts[27],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[2],value:82});

result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(731716);
});
it('test 1',async() => {
result = await instance.sweepCommission(878417);
result = await instance.claimThrone("VakjrSqIXDpN45F",{from:accounts[52],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[7],value:37});

result = await instance.transferOwnership(accounts[1]);
});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[7],value:25});

result = await instance.sweepCommission(647120);
result = await instance.claimThrone("FHQ2xKvcn08zB",{from:accounts[83],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[0]);
});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[6],value:29});

result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(56426);
result = await instance.claimThrone("iQgbMy9zVf",{from:accounts[88],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 4',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("oR03QYibrICfqw79P",{from:accounts[52],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[7],value:49});

result = await instance.sweepCommission(764950);
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[8],value:98});

result = await instance.sweepCommission(972831);
result = await instance.claimThrone("9DPbt64xZgT",{from:accounts[82],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 6',async() => {
result = await instance.sweepCommission(818951);
await instance.sendTransaction({from:accounts[9],value:40});

result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("qgtnx0MadkPlVBzf",{from:accounts[75],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 7',async() => {
result = await instance.claimThrone("u89psRUSyWkgaPfe5Mq2",{from:accounts[81],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[1],value:87});

result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(782743);
});
it('test 8',async() => {
result = await instance.sweepCommission(850553);
await instance.sendTransaction({from:accounts[6],value:68});

result = await instance.claimThrone("n6cXGxuQ4fN",{from:accounts[100],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[0]);
});
it('test 9',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("AixE5uYnd1C23",{from:accounts[29],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(919944);
await instance.sendTransaction({from:accounts[6],value:71});

});
it('test 10',async() => {
result = await instance.sweepCommission(409021);
result = await instance.claimThrone("hZtETqizWev",{from:accounts[53],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[3],value:84});

result = await instance.transferOwnership(accounts[1]);
});
it('test 11',async() => {
result = await instance.sweepCommission(926839);
await instance.sendTransaction({from:accounts[9],value:98});

result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("zec3TsCORbk1PS",{from:accounts[31],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 12',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(702967);
await instance.sendTransaction({from:accounts[3],value:47});

result = await instance.claimThrone("rj9ntOV8izYaQk3mJ",{from:accounts[19],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 13',async() => {
result = await instance.claimThrone("TpvkxbUVenBcD3q4",{from:accounts[69],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(339780);
await instance.sendTransaction({from:accounts[4],value:57});

result = await instance.transferOwnership(accounts[3]);
});
it('test 14',async() => {
result = await instance.claimThrone("m56sKVxOfjolT37wnrPN",{from:accounts[20],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[9],value:3});

result = await instance.sweepCommission(529231);
});
it('test 15',async() => {
result = await instance.claimThrone("26xDm9gj0IS",{from:accounts[24],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(612540);
await instance.sendTransaction({from:accounts[6],value:50});

});
it('test 16',async() => {
result = await instance.claimThrone("lGdm28BrfYsMgJQP9A0y",{from:accounts[43],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[8],value:18});

result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(970404);
});
it('test 17',async() => {
result = await instance.sweepCommission(828520);
await instance.sendTransaction({from:accounts[6],value:83});

result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("K1wTYqukz0RWN8",{from:accounts[80],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 18',async() => {
result = await instance.sweepCommission(33118);
result = await instance.claimThrone("6a5wWFr8xvy1lZ",{from:accounts[27],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[4],value:40});

result = await instance.transferOwnership(accounts[2]);
});
it('test 19',async() => {
result = await instance.claimThrone("PiSaU18RLy",{from:accounts[98],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(510770);
await instance.sendTransaction({from:accounts[4],value:71});

});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[8],value:64});

result = await instance.sweepCommission(930101);
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("uV6Xh4p9TI",{from:accounts[26],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 21',async() => {
result = await instance.sweepCommission(102531);
await instance.sendTransaction({from:accounts[2],value:14});

result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("4Jkfrb0vIPYQapLsxzcM",{from:accounts[52],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 22',async() => {
result = await instance.sweepCommission(33286);
result = await instance.claimThrone("Yo8KIfCSRtJDGN",{from:accounts[92],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[5],value:25});

result = await instance.transferOwnership(accounts[5]);
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[4],value:99});

result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(473270);
result = await instance.claimThrone("KDyoWr2pcEtUvRxZhM",{from:accounts[71],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 24',async() => {
result = await instance.sweepCommission(692420);
result = await instance.claimThrone("lU7n3zcRqb4vpfJjAiw",{from:accounts[67],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[1],value:58});

});
it('test 25',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[3],value:38});

result = await instance.claimThrone("EePwYWmdD2v5BrhHz",{from:accounts[65],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(810084);
});
it('test 26',async() => {
result = await instance.sweepCommission(281213);
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("uMVwnFTQUxh1r",{from:accounts[69],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[3],value:49});

});
it('test 27',async() => {
result = await instance.claimThrone("pEhmqslzHbcVfYSyj3",{from:accounts[56],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(161661);
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[7],value:72});

});
it('test 28',async() => {
result = await instance.claimThrone("6AJNFop4RETflHPnt9v",{from:accounts[76],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(306326);
await instance.sendTransaction({from:accounts[4],value:100});

result = await instance.transferOwnership(accounts[1]);
});
it('test 29',async() => {
result = await instance.claimThrone("3HYcIxpvgT",{from:accounts[90],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[7],value:28});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(601936);
});
});
