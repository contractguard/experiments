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
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("jF2YLU4uNBXW",{from:accounts[49],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(838237);
await instance.sendTransaction({from:accounts[3],value:99});

});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[2],value:66});

result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("Dqp5Y2zWgm",{from:accounts[23],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(90371);
});
it('test 2',async() => {
result = await instance.sweepCommission(86246);
await instance.sendTransaction({from:accounts[8],value:59});

result = await instance.claimThrone("WLKcqvJYD4yOdsbR",{from:accounts[23],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[5]);
});
it('test 3',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[2],value:38});

result = await instance.claimThrone("jAi1xzuN4QlX7OSdrRZp",{from:accounts[88],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(208098);
});
it('test 4',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("RcSkZCvK7nuFoOdlT",{from:accounts[58],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(755551);
await instance.sendTransaction({from:accounts[7],value:49});

});
it('test 5',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(93148);
await instance.sendTransaction({from:accounts[4],value:61});

result = await instance.claimThrone("1qEs6nOgPvXdS4bB9Tlz",{from:accounts[78],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 6',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(965449);
await instance.sendTransaction({from:accounts[4],value:32});

result = await instance.claimThrone("80jc2R6Vv7",{from:accounts[35],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 7',async() => {
result = await instance.claimThrone("oUhudwK5b9acsigD7yz",{from:accounts[63],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[6],value:1});

result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(908345);
});
it('test 8',async() => {
result = await instance.claimThrone("CTMD5NygX8ie",{from:accounts[93],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(527754);
await instance.sendTransaction({from:accounts[9],value:67});

});
it('test 9',async() => {
result = await instance.claimThrone("CFzGsnlS58B",{from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(843419);
await instance.sendTransaction({from:accounts[6],value:68});

});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[9],value:28});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("QSy47wW8b3eTHxViXG9",{from:accounts[79],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(683571);
});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[7],value:66});

result = await instance.claimThrone("AB3dEMSmbT2z8",{from:accounts[80],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(747290);
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[2],value:51});

result = await instance.claimThrone("Q2joXzlsy05IN1m",{from:accounts[23],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(890006);
});
it('test 13',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(860754);
result = await instance.claimThrone("ENZ2QBPjfJOimKy3n",{from:accounts[55],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[5],value:4});

});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[3],value:48});

result = await instance.claimThrone("6BvAOd7iwr8ysUC",{from:accounts[7],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(390482);
result = await instance.transferOwnership(accounts[0]);
});
it('test 15',async() => {
result = await instance.sweepCommission(241715);
result = await instance.claimThrone("a157UXCHBDwh6",{from:accounts[77],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[3],value:28});

});
it('test 16',async() => {
result = await instance.sweepCommission(910945);
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[9],value:34});

result = await instance.claimThrone("sv2bR7aV4Yl5JhpAoD",{from:accounts[77],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[7],value:42});

result = await instance.sweepCommission(610889);
result = await instance.claimThrone("ZfSjpc6iwP5t2mE3QDUs",{from:accounts[23],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[1]);
});
it('test 18',async() => {
result = await instance.sweepCommission(283825);
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("dUzSipPKuc5j",{from:accounts[69],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[9],value:14});

});
it('test 19',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("PgceWEiIpCwH1q20y",{from:accounts[6],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(343411);
await instance.sendTransaction({from:accounts[8],value:36});

});
it('test 20',async() => {
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[3],value:7});

result = await instance.claimThrone("9x1BMgTwJ7nAZF",{from:accounts[46],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(740727);
});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[4],value:56});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("eTo2qS0YiDr",{from:accounts[65],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(801061);
});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[2],value:52});

result = await instance.sweepCommission(1029711);
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("LJWwcngUiA",{from:accounts[35],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 23',async() => {
result = await instance.claimThrone("XvwO1sI3lBNdeg",{from:accounts[79],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(377524);
await instance.sendTransaction({from:accounts[9],value:20});

});
it('test 24',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("3PvMX78CVfuA",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[6],value:56});

result = await instance.sweepCommission(643932);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 25',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("JuSLPEqfw5GjMVi",{from:accounts[38],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(861624);
await instance.sendTransaction({from:accounts[1],value:67});

});
it('test 26',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("ORBGWZqFH23C1d",{from:accounts[27],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(228398);
await instance.sendTransaction({from:accounts[4],value:86});

});
it('test 27',async() => {
result = await instance.sweepCommission(704025);
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[6],value:34});

result = await instance.claimThrone("kJLNu08p7erA1fhO",{from:accounts[14],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 28',async() => {
result = await instance.sweepCommission(680984);
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("MAfUy63FjhNtJrn8ib9",{from:accounts[81],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[4],value:68});

});
it('test 29',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(856697);
await instance.sendTransaction({from:accounts[7],value:91});

result = await instance.claimThrone("JmvkGKsQqMa97pbu",{from:accounts[6],value:web3.utils.toWei(web3.utils.toBN(2))});
});
});
