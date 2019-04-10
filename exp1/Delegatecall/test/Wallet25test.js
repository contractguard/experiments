const Attack = artifacts.require("Attack");
const Wallet = artifacts.require("Wallet");
const WalletLibrary = artifacts.require("WalletLibrary");
contract('Wallet', async (accounts) => {
const owner = accounts[0];
let attack;let instance;
let result;
let walletLibrary;
before('setup contract for each test',async() => {
walletLibrary = await WalletLibrary.new({from: accounts[300]});
instance = await Wallet.new(walletLibrary.address,{from: accounts[0]});
attack = await Attack.new(instance.address,{from:accounts[400]});
});
it('test 0',async() => {
await instance.sendTransaction({from: accounts[0], value: web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.withdraw(699865);
await instance.sendTransaction({from:accounts[5],value:47});

});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[9],value:65});

result = await instance.withdraw(204091);
});
it('test 2',async() => {
result = await instance.withdraw(178143);
await instance.sendTransaction({from:accounts[1],value:6});

});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[8],value:26});

result = await instance.withdraw(21319);
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[9],value:60});

result = await instance.withdraw(869679);
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[4],value:10});

result = await instance.withdraw(731630);
});
it('test 6',async() => {
result = await instance.withdraw(124647);
await instance.sendTransaction({from:accounts[7],value:20});

});
it('test 7',async() => {
result = await instance.withdraw(520077);
await instance.sendTransaction({from:accounts[4],value:41});

});
it('test 8',async() => {
result = await instance.withdraw(902134);
await instance.sendTransaction({from:accounts[8],value:36});

});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[5],value:34});

result = await instance.withdraw(408196);
});
it('test 10',async() => {
result = await instance.withdraw(761548);
await instance.sendTransaction({from:accounts[6],value:17});

});
it('test 11',async() => {
result = await instance.withdraw(839245);
await instance.sendTransaction({from:accounts[3],value:61});

});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[5],value:16});

result = await instance.withdraw(259542);
});
it('test 13',async() => {
result = await instance.withdraw(191120);
await instance.sendTransaction({from:accounts[7],value:63});

});
it('test 14',async() => {
result = await instance.withdraw(96056);
await instance.sendTransaction({from:accounts[7],value:8});

});
it('test 15',async() => {
result = await instance.withdraw(628409);
await instance.sendTransaction({from:accounts[5],value:10});

});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[3],value:31});

result = await instance.withdraw(78960);
});
it('test 17',async() => {
result = await instance.withdraw(997641);
await instance.sendTransaction({from:accounts[7],value:28});

});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[1],value:61});

result = await instance.withdraw(998247);
});
it('test 19',async() => {
result = await instance.withdraw(944202);
await instance.sendTransaction({from:accounts[2],value:8});

});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[9],value:12});

result = await instance.withdraw(38519);
});
it('test 21',async() => {
result = await instance.withdraw(667807);
await instance.sendTransaction({from:accounts[5],value:22});

});
it('test 22',async() => {
result = await instance.withdraw(405649);
await instance.sendTransaction({from:accounts[1],value:87});

});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[2],value:78});

result = await instance.withdraw(103657);
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[5],value:42});

result = await instance.withdraw(157780);
});
it('test 25',async() => {
result = await instance.withdraw(538448);
await instance.sendTransaction({from:accounts[3],value:84});

});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[6],value:61});

result = await instance.withdraw(141734);
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[8],value:62});

result = await instance.withdraw(921120);
});
it('test 28',async() => {
result = await instance.withdraw(449865);
await instance.sendTransaction({from:accounts[2],value:93});

});
it('test 29',async() => {
result = await instance.withdraw(601813);
await instance.sendTransaction({from:accounts[7],value:37});

});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[6],value:79});

result = await instance.withdraw(19117);
});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[3],value:88});

result = await instance.withdraw(632064);
});
it('test 32',async() => {
result = await instance.withdraw(1034223);
await instance.sendTransaction({from:accounts[8],value:23});

});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[2],value:13});

result = await instance.withdraw(90118);
});
it('test 34',async() => {
result = await instance.withdraw(530188);
await instance.sendTransaction({from:accounts[5],value:29});

});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[1],value:53});

result = await instance.withdraw(368908);
});
it('test 36',async() => {
result = await instance.withdraw(913661);
await instance.sendTransaction({from:accounts[5],value:84});

});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[4],value:24});

result = await instance.withdraw(540694);
});
it('test 38',async() => {
result = await instance.withdraw(483634);
await instance.sendTransaction({from:accounts[5],value:2});

});
it('test 39',async() => {
result = await instance.withdraw(34643);
await instance.sendTransaction({from:accounts[5],value:89});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 40',async() => {
await instance.sendTransaction({from:accounts[5],value:16});

result = await instance.withdraw(879921);
});
it('test 41',async() => {
result = await instance.withdraw(678140);
await instance.sendTransaction({from:accounts[3],value:89});

});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[2],value:93});

result = await instance.withdraw(185623);
});
it('test 43',async() => {
result = await instance.withdraw(1012724);
await instance.sendTransaction({from:accounts[3],value:51});

});
it('test 44',async() => {
result = await instance.withdraw(335078);
await instance.sendTransaction({from:accounts[8],value:87});

});
it('test 45',async() => {
result = await instance.withdraw(613811);
await instance.sendTransaction({from:accounts[3],value:37});

});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[1],value:8});

result = await instance.withdraw(413867);
});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[5],value:91});

result = await instance.withdraw(935659);
});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[9],value:15});

result = await instance.withdraw(799201);
});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[3],value:21});

result = await instance.withdraw(543293);
});
});
