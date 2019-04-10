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
result = await instance.withdraw(690928);
await instance.sendTransaction({from:accounts[3],value:40});

});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[5],value:95});

result = await instance.withdraw(732535);
});
it('test 2',async() => {
result = await instance.withdraw(584212);
await instance.sendTransaction({from:accounts[6],value:98});

});
it('test 3',async() => {
result = await instance.withdraw(444166);
await instance.sendTransaction({from:accounts[5],value:90});

});
it('test 4',async() => {
result = await instance.withdraw(455931);
await instance.sendTransaction({from:accounts[1],value:25});

});
it('test 5',async() => {
result = await instance.withdraw(741709);
await instance.sendTransaction({from:accounts[6],value:37});

});
it('test 6',async() => {
result = await instance.withdraw(674180);
await instance.sendTransaction({from:accounts[6],value:12});

});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[8],value:19});

result = await instance.withdraw(541912);
});
it('test 8',async() => {
result = await instance.withdraw(507197);
await instance.sendTransaction({from:accounts[2],value:61});

});
it('test 9',async() => {
result = await instance.withdraw(818039);
await instance.sendTransaction({from:accounts[8],value:35});

});
it('test 10',async() => {
result = await instance.withdraw(362600);
await instance.sendTransaction({from:accounts[8],value:6});

});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[5],value:60});

result = await instance.withdraw(117775);
});
it('test 12',async() => {
result = await instance.withdraw(88680);
await instance.sendTransaction({from:accounts[9],value:71});

});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[4],value:44});

result = await instance.withdraw(200193);
});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[9],value:99});

result = await instance.withdraw(1011445);
});
it('test 15',async() => {
result = await instance.withdraw(197524);
await instance.sendTransaction({from:accounts[3],value:94});

});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[6],value:90});

result = await instance.withdraw(331753);
});
it('test 17',async() => {
result = await instance.withdraw(530906);
await instance.sendTransaction({from:accounts[6],value:37});

});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[6],value:73});

result = await instance.withdraw(88644);
});
it('test 19',async() => {
result = await instance.withdraw(37268);
await instance.sendTransaction({from:accounts[7],value:45});

});
it('test 20',async() => {
result = await instance.withdraw(481758);
await instance.sendTransaction({from:accounts[5],value:92});

});
it('test 21',async() => {
result = await instance.withdraw(795785);
await instance.sendTransaction({from:accounts[2],value:33});

});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[1],value:90});

result = await instance.withdraw(328993);
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[2],value:4});

result = await instance.withdraw(188455);
});
it('test 24',async() => {
result = await instance.withdraw(68533);
await instance.sendTransaction({from:accounts[5],value:23});

});
it('test 25',async() => {
result = await instance.withdraw(87607);
await instance.sendTransaction({from:accounts[7],value:13});

});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[3],value:80});

result = await instance.withdraw(1026474);
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[4],value:59});

result = await instance.withdraw(1027322);
});
it('test 28',async() => {
result = await instance.withdraw(649964);
await instance.sendTransaction({from:accounts[1],value:40});

});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[5],value:85});

result = await instance.withdraw(251486);
});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[3],value:5});

result = await instance.withdraw(851156);
});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[4],value:56});

result = await instance.withdraw(1028769);
});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[3],value:35});

result = await instance.withdraw(657599);
});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[4],value:36});

result = await instance.withdraw(970105);
});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[4],value:5});

result = await instance.withdraw(945215);
});
it('test 35',async() => {
result = await instance.withdraw(1046262);
await instance.sendTransaction({from:accounts[6],value:49});

});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[7],value:64});

result = await instance.withdraw(126507);
});
it('test 37',async() => {
result = await instance.withdraw(895154);
await instance.sendTransaction({from:accounts[5],value:45});

});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[4],value:1});

result = await instance.withdraw(363447);
});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[1],value:44});

result = await instance.withdraw(328337);
});
it('test 40',async() => {
result = await instance.withdraw(342091);
await instance.sendTransaction({from:accounts[5],value:7});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 41',async() => {
await instance.sendTransaction({from:accounts[5],value:83});

result = await instance.withdraw(200237);
});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[4],value:27});

result = await instance.withdraw(676643);
});
it('test 43',async() => {
result = await instance.withdraw(631090);
await instance.sendTransaction({from:accounts[4],value:14});

});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[8],value:86});

result = await instance.withdraw(778695);
});
it('test 45',async() => {
result = await instance.withdraw(85394);
await instance.sendTransaction({from:accounts[1],value:31});

});
it('test 46',async() => {
result = await instance.withdraw(998363);
await instance.sendTransaction({from:accounts[8],value:10});

});
it('test 47',async() => {
result = await instance.withdraw(878984);
await instance.sendTransaction({from:accounts[9],value:88});

});
it('test 48',async() => {
result = await instance.withdraw(838331);
await instance.sendTransaction({from:accounts[7],value:47});

});
it('test 49',async() => {
result = await instance.withdraw(370244);
await instance.sendTransaction({from:accounts[9],value:94});

});
});
