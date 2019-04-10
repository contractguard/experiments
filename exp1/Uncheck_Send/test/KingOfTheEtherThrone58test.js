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
result = await instance.claimThrone("v30FdX2xEtWI",{from:accounts[80],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[5],value:32});

result = await instance.sweepCommission(233865);
result = await instance.transferOwnership(accounts[0]);
});
it('test 1',async() => {
result = await instance.sweepCommission(574801);
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("y9zk5nGLwq",{from:accounts[74],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[2],value:24});

});
it('test 2',async() => {
result = await instance.sweepCommission(190786);
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[9],value:13});

result = await instance.claimThrone("lzGosARbiLBF7D1eK",{from:accounts[20],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 3',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(746271);
await instance.sendTransaction({from:accounts[3],value:70});

result = await instance.claimThrone("zoYOXByD8HVFhl9v13c",{from:accounts[23],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 4',async() => {
result = await instance.claimThrone("3Ly5NdoMp4OPuQBCtA",{from:accounts[30],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[6],value:32});

result = await instance.sweepCommission(686788);
result = await instance.transferOwnership(accounts[5]);
});
it('test 5',async() => {
result = await instance.claimThrone("ITBYtHeOguC3q4mdaZU",{from:accounts[29],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(623668);
await instance.sendTransaction({from:accounts[3],value:45});

});
it('test 6',async() => {
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[4],value:40});

result = await instance.sweepCommission(990604);
result = await instance.claimThrone("p8eLZig4CcK672j3f",{from:accounts[51],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 7',async() => {
result = await instance.claimThrone("a6X8ushIc4HmPvp",{from:accounts[77],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[5],value:73});

result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(975084);
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[6],value:91});

result = await instance.sweepCommission(855694);
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("rhoXbd6U7Nx",{from:accounts[63],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 9',async() => {
result = await instance.sweepCommission(8529);
await instance.sendTransaction({from:accounts[9],value:39});

result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("HE0ow8PGaWti",{from:accounts[28],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[8],value:69});

result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(636555);
result = await instance.claimThrone("5fCOYzxnLR",{from:accounts[52],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[3],value:23});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(676689);
result = await instance.claimThrone("LW1IcGOBHRkQ",{from:accounts[35],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 12',async() => {
result = await instance.sweepCommission(202325);
result = await instance.claimThrone("GucynWZTiOwBaxsEvI",{from:accounts[86],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[3],value:62});

result = await instance.transferOwnership(accounts[1]);
});
it('test 13',async() => {
result = await instance.claimThrone("3xFzHjm5K6XRden0WlaS",{from:accounts[11],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(1899);
await instance.sendTransaction({from:accounts[1],value:87});

});
it('test 14',async() => {
result = await instance.sweepCommission(489942);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("el2c6wf0OaVQvyIrCYs",{from:accounts[86],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[9],value:81});

});
it('test 15',async() => {
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[5],value:8});

result = await instance.claimThrone("nv9gfZpkR4wUQh5eL",{from:accounts[54],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(914058);
});
it('test 16',async() => {
result = await instance.claimThrone("kqLFDhyQmCt9f",{from:accounts[84],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(868315);
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[6],value:12});

});
it('test 17',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(990665);
result = await instance.claimThrone("zaw83Zlp4hvXuER1FnC",{from:accounts[34],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[4],value:5});

});
it('test 18',async() => {
result = await instance.claimThrone("iD6IjAuLHa",{from:accounts[30],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(755862);
await instance.sendTransaction({from:accounts[9],value:73});

});
it('test 19',async() => {
result = await instance.claimThrone("Q3emGhbUP7",{from:accounts[11],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(1019944);
await instance.sendTransaction({from:accounts[8],value:24});

});
it('test 20',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(346704);
result = await instance.claimThrone("s2nCdXIfzZ09P",{from:accounts[44],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[3],value:61});

});
it('test 21',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("qGMHtVrdKC3ZvAfpBOLe",{from:accounts[23],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(376150);
await instance.sendTransaction({from:accounts[2],value:21});

});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[7],value:78});

result = await instance.sweepCommission(239315);
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("Cpb5DwigqaI",{from:accounts[18],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 23',async() => {
result = await instance.claimThrone("SGHrAyMNZVnEudT9z",{from:accounts[11],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(236630);
await instance.sendTransaction({from:accounts[9],value:54});

});
it('test 24',async() => {
result = await instance.sweepCommission(823125);
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("zWGPnHgodCU",{from:accounts[15],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[9],value:21});

});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[2],value:62});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("5N2UucmnGv3sHAzCJrL",{from:accounts[87],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(558885);
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[1],value:72});

result = await instance.sweepCommission(452830);
result = await instance.claimThrone("A8kTbcBZ3IgE5O",{from:accounts[38],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[9],value:74});

result = await instance.sweepCommission(812468);
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("z08o61HwdXYcUf",{from:accounts[44],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 28',async() => {
result = await instance.sweepCommission(349186);
await instance.sendTransaction({from:accounts[2],value:51});

result = await instance.claimThrone("0GP6mMogI9N4OR8rjs",{from:accounts[56],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[5]);
});
it('test 29',async() => {
result = await instance.sweepCommission(132991);
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("MLK0yVPCENatso8zd",{from:accounts[61],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[8],value:91});

});
});
