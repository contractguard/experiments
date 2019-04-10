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
await instance.sendTransaction({from:accounts[7],value:57});

result = await instance.withdraw(815547);
});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[8],value:10});

result = await instance.withdraw(776131);
});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[6],value:1});

result = await instance.withdraw(243781);
});
it('test 3',async() => {
result = await instance.withdraw(225761);
await instance.sendTransaction({from:accounts[4],value:21});

});
it('test 4',async() => {
result = await instance.withdraw(474208);
await instance.sendTransaction({from:accounts[4],value:29});

});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[8],value:24});

result = await instance.withdraw(29946);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[8],value:28});

result = await instance.withdraw(367511);
});
it('test 7',async() => {
result = await instance.withdraw(582088);
await instance.sendTransaction({from:accounts[1],value:13});

});
it('test 8',async() => {
result = await instance.withdraw(66638);
await instance.sendTransaction({from:accounts[2],value:96});

});
it('test 9',async() => {
result = await instance.withdraw(693674);
await instance.sendTransaction({from:accounts[3],value:18});

});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[9],value:42});

result = await instance.withdraw(1011235);
});
it('test 11',async() => {
result = await instance.withdraw(275056);
await instance.sendTransaction({from:accounts[9],value:48});

});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[3],value:18});

result = await instance.withdraw(598170);
});
it('test 13',async() => {
result = await instance.withdraw(207762);
await instance.sendTransaction({from:accounts[6],value:3});

});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[1],value:81});

result = await instance.withdraw(245032);
});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[5],value:11});

result = await instance.withdraw(443233);
});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[7],value:7});

result = await instance.withdraw(682500);
});
it('test 17',async() => {
result = await instance.withdraw(875183);
await instance.sendTransaction({from:accounts[6],value:85});

});
it('test 18',async() => {
result = await instance.withdraw(130971);
await instance.sendTransaction({from:accounts[9],value:73});

});
it('test 19',async() => {
result = await instance.withdraw(1026005);
await instance.sendTransaction({from:accounts[5],value:12});

});
it('test 20',async() => {
result = await instance.withdraw(239173);
await instance.sendTransaction({from:accounts[8],value:61});

});
it('test 21',async() => {
result = await instance.withdraw(461521);
await instance.sendTransaction({from:accounts[9],value:98});

});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[5],value:66});

result = await instance.withdraw(603711);
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[2],value:80});

result = await instance.withdraw(183997);
});
it('test 24',async() => {
result = await instance.withdraw(864312);
await instance.sendTransaction({from:accounts[3],value:31});

});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[5],value:63});

result = await instance.withdraw(662037);
});
it('test 26',async() => {
result = await instance.withdraw(1009558);
await instance.sendTransaction({from:accounts[4],value:29});

});
it('test 27',async() => {
result = await instance.withdraw(384842);
await instance.sendTransaction({from:accounts[5],value:49});

});
it('test 28',async() => {
result = await instance.withdraw(226853);
await instance.sendTransaction({from:accounts[8],value:87});

});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[8],value:93});

result = await instance.withdraw(333491);
});
it('test 30',async() => {
result = await instance.withdraw(298092);
await instance.sendTransaction({from:accounts[8],value:63});

});
it('test 31',async() => {
result = await instance.withdraw(921831);
await instance.sendTransaction({from:accounts[7],value:57});

});
it('test 32',async() => {
result = await instance.withdraw(312816);
await instance.sendTransaction({from:accounts[4],value:76});

});
it('test 33',async() => {
result = await instance.withdraw(847578);
await instance.sendTransaction({from:accounts[8],value:15});

});
it('test 34',async() => {
result = await instance.withdraw(991429);
await instance.sendTransaction({from:accounts[3],value:2});

});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[4],value:58});

result = await instance.withdraw(184727);
});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[6],value:46});

result = await instance.withdraw(732117);
});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[8],value:46});

result = await instance.withdraw(1008921);
});
it('test 38',async() => {
result = await instance.withdraw(12670);
await instance.sendTransaction({from:accounts[9],value:14});

});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[1],value:17});

result = await instance.withdraw(633495);
});
it('test 40',async() => {
result = await instance.withdraw(362310);
await instance.sendTransaction({from:accounts[1],value:86});

});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[3],value:3});

result = await instance.withdraw(675959);
});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[5],value:76});

result = await instance.withdraw(913298);
});
it('test 43',async() => {
result = await instance.withdraw(895976);
await instance.sendTransaction({from:accounts[8],value:71});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 44',async() => {
await instance.sendTransaction({from:accounts[3],value:42});

result = await instance.withdraw(715187);
});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[2],value:86});

result = await instance.withdraw(32708);
});
it('test 46',async() => {
result = await instance.withdraw(579029);
await instance.sendTransaction({from:accounts[3],value:31});

});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[7],value:69});

result = await instance.withdraw(613456);
});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[4],value:2});

result = await instance.withdraw(211065);
});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[4],value:25});

result = await instance.withdraw(760688);
});
});
