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
await instance.sendTransaction({from:accounts[6],value:45});

result = await instance.withdraw(784212);
});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[2],value:96});

result = await instance.withdraw(671996);
});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[1],value:22});

result = await instance.withdraw(109967);
});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[9],value:67});

result = await instance.withdraw(311985);
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[5],value:36});

result = await instance.withdraw(494194);
});
it('test 5',async() => {
result = await instance.withdraw(561000);
await instance.sendTransaction({from:accounts[8],value:66});

});
it('test 6',async() => {
result = await instance.withdraw(687932);
await instance.sendTransaction({from:accounts[1],value:79});

});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[2],value:73});

result = await instance.withdraw(506236);
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[6],value:70});

result = await instance.withdraw(861056);
});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[3],value:88});

result = await instance.withdraw(482870);
});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[1],value:54});

result = await instance.withdraw(697667);
});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[3],value:59});

result = await instance.withdraw(115471);
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[4],value:76});

result = await instance.withdraw(115336);
});
it('test 13',async() => {
result = await instance.withdraw(20564);
await instance.sendTransaction({from:accounts[6],value:99});

});
it('test 14',async() => {
result = await instance.withdraw(231370);
await instance.sendTransaction({from:accounts[6],value:82});

});
it('test 15',async() => {
result = await instance.withdraw(946771);
await instance.sendTransaction({from:accounts[3],value:14});

});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[8],value:12});

result = await instance.withdraw(972362);
});
it('test 17',async() => {
result = await instance.withdraw(554397);
await instance.sendTransaction({from:accounts[7],value:20});

});
it('test 18',async() => {
result = await instance.withdraw(1041504);
await instance.sendTransaction({from:accounts[9],value:38});

});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[3],value:26});

result = await instance.withdraw(850419);
});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[3],value:85});

result = await instance.withdraw(243361);
});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[3],value:20});

result = await instance.withdraw(1044278);
});
it('test 22',async() => {
result = await instance.withdraw(689296);
await instance.sendTransaction({from:accounts[9],value:70});

});
it('test 23',async() => {
result = await instance.withdraw(727404);
await instance.sendTransaction({from:accounts[4],value:68});

});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[6],value:85});

result = await instance.withdraw(730659);
});
it('test 25',async() => {
result = await instance.withdraw(405783);
await instance.sendTransaction({from:accounts[7],value:88});

});
it('test 26',async() => {
result = await instance.withdraw(122904);
await instance.sendTransaction({from:accounts[1],value:28});

});
it('test 27',async() => {
result = await instance.withdraw(376181);
await instance.sendTransaction({from:accounts[5],value:27});

});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[1],value:1});

result = await instance.withdraw(430402);
});
it('test 29',async() => {
result = await instance.withdraw(153987);
await instance.sendTransaction({from:accounts[5],value:76});

});
it('test 30',async() => {
result = await instance.withdraw(102060);
await instance.sendTransaction({from:accounts[1],value:17});

});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[5],value:37});

result = await instance.withdraw(304854);
});
it('test 32',async() => {
result = await instance.withdraw(167709);
await instance.sendTransaction({from:accounts[3],value:42});

});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[2],value:33});

result = await instance.withdraw(672514);
});
it('test 34',async() => {
result = await instance.withdraw(706234);
await instance.sendTransaction({from:accounts[4],value:71});

});
it('test 35',async() => {
result = await instance.withdraw(964755);
await instance.sendTransaction({from:accounts[8],value:28});

});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[4],value:75});

result = await instance.withdraw(760490);
});
it('test 37',async() => {
result = await instance.withdraw(301933);
await instance.sendTransaction({from:accounts[9],value:18});

});
it('test 38',async() => {
result = await instance.withdraw(352487);
await instance.sendTransaction({from:accounts[3],value:83});

});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[6],value:74});

result = await instance.withdraw(281148);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 40',async() => {
result = await instance.withdraw(166175);
await instance.sendTransaction({from:accounts[2],value:77});

});
it('test 41',async() => {
result = await instance.withdraw(888709);
await instance.sendTransaction({from:accounts[2],value:46});

});
it('test 42',async() => {
result = await instance.withdraw(961347);
await instance.sendTransaction({from:accounts[5],value:91});

});
it('test 43',async() => {
result = await instance.withdraw(1019729);
await instance.sendTransaction({from:accounts[9],value:2});

});
it('test 44',async() => {
result = await instance.withdraw(837816);
await instance.sendTransaction({from:accounts[6],value:47});

});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[8],value:93});

result = await instance.withdraw(264565);
});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[2],value:70});

result = await instance.withdraw(1036854);
});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[1],value:10});

result = await instance.withdraw(894131);
});
it('test 48',async() => {
result = await instance.withdraw(1012543);
await instance.sendTransaction({from:accounts[1],value:48});

});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[3],value:55});

result = await instance.withdraw(317119);
});
});
