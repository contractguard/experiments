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
result = await instance.withdraw(811949);
await instance.sendTransaction({from:accounts[7],value:60});

});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[3],value:54});

result = await instance.withdraw(808790);
});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[7],value:51});

result = await instance.withdraw(634226);
});
it('test 3',async() => {
result = await instance.withdraw(23275);
await instance.sendTransaction({from:accounts[6],value:22});

});
it('test 4',async() => {
result = await instance.withdraw(10787);
await instance.sendTransaction({from:accounts[2],value:19});

});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[8],value:21});

result = await instance.withdraw(706734);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[5],value:43});

result = await instance.withdraw(456978);
});
it('test 7',async() => {
result = await instance.withdraw(373904);
await instance.sendTransaction({from:accounts[2],value:29});

});
it('test 8',async() => {
result = await instance.withdraw(747093);
await instance.sendTransaction({from:accounts[3],value:4});

});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[7],value:7});

result = await instance.withdraw(268939);
});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[3],value:88});

result = await instance.withdraw(454937);
});
it('test 11',async() => {
result = await instance.withdraw(188363);
await instance.sendTransaction({from:accounts[8],value:98});

});
it('test 12',async() => {
result = await instance.withdraw(195110);
await instance.sendTransaction({from:accounts[9],value:59});

});
it('test 13',async() => {
result = await instance.withdraw(896051);
await instance.sendTransaction({from:accounts[9],value:28});

});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[8],value:40});

result = await instance.withdraw(915000);
});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[8],value:82});

result = await instance.withdraw(296009);
});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[9],value:86});

result = await instance.withdraw(501774);
});
it('test 17',async() => {
result = await instance.withdraw(41957);
await instance.sendTransaction({from:accounts[8],value:87});

});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[3],value:83});

result = await instance.withdraw(560768);
});
it('test 19',async() => {
result = await instance.withdraw(880602);
await instance.sendTransaction({from:accounts[3],value:87});

});
it('test 20',async() => {
result = await instance.withdraw(958662);
await instance.sendTransaction({from:accounts[3],value:27});

});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[1],value:80});

result = await instance.withdraw(261517);
});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[5],value:37});

result = await instance.withdraw(444824);
});
it('test 23',async() => {
result = await instance.withdraw(508469);
await instance.sendTransaction({from:accounts[9],value:17});

});
it('test 24',async() => {
result = await instance.withdraw(630780);
await instance.sendTransaction({from:accounts[7],value:69});

});
it('test 25',async() => {
result = await instance.withdraw(5658);
await instance.sendTransaction({from:accounts[5],value:30});

});
it('test 26',async() => {
result = await instance.withdraw(933721);
await instance.sendTransaction({from:accounts[7],value:29});

});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[4],value:54});

result = await instance.withdraw(64212);
});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[6],value:97});

result = await instance.withdraw(838556);
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[5],value:36});

result = await instance.withdraw(286311);
});
it('test 30',async() => {
result = await instance.withdraw(17717);
await instance.sendTransaction({from:accounts[6],value:26});

});
it('test 31',async() => {
result = await instance.withdraw(739385);
await instance.sendTransaction({from:accounts[3],value:21});

});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[7],value:74});

result = await instance.withdraw(535104);
});
it('test 33',async() => {
result = await instance.withdraw(871132);
await instance.sendTransaction({from:accounts[2],value:74});

});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[6],value:3});

result = await instance.withdraw(980000);
});
it('test 35',async() => {
result = await instance.withdraw(471479);
await instance.sendTransaction({from:accounts[1],value:7});

});
it('test 36',async() => {
result = await instance.withdraw(22533);
await instance.sendTransaction({from:accounts[6],value:85});

});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[5],value:20});

result = await instance.withdraw(818910);
});
it('test 38',async() => {
result = await instance.withdraw(185078);
await instance.sendTransaction({from:accounts[9],value:24});

});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[3],value:74});

result = await instance.withdraw(751157);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 40',async() => {
result = await instance.withdraw(323768);
await instance.sendTransaction({from:accounts[7],value:22});

});
it('test 41',async() => {
result = await instance.withdraw(735493);
await instance.sendTransaction({from:accounts[2],value:60});

});
it('test 42',async() => {
result = await instance.withdraw(130863);
await instance.sendTransaction({from:accounts[6],value:13});

});
it('test 43',async() => {
result = await instance.withdraw(137912);
await instance.sendTransaction({from:accounts[4],value:84});

});
it('test 44',async() => {
result = await instance.withdraw(346778);
await instance.sendTransaction({from:accounts[4],value:93});

});
it('test 45',async() => {
result = await instance.withdraw(319109);
await instance.sendTransaction({from:accounts[5],value:49});

});
it('test 46',async() => {
result = await instance.withdraw(705037);
await instance.sendTransaction({from:accounts[6],value:63});

});
it('test 47',async() => {
result = await instance.withdraw(330408);
await instance.sendTransaction({from:accounts[2],value:32});

});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[1],value:48});

result = await instance.withdraw(227066);
});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[5],value:48});

result = await instance.withdraw(567038);
});
});
