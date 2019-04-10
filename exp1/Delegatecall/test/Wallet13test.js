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
result = await instance.withdraw(207832);
await instance.sendTransaction({from:accounts[2],value:47});

});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[6],value:48});

result = await instance.withdraw(1017148);
});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[3],value:82});

result = await instance.withdraw(696170);
});
it('test 3',async() => {
result = await instance.withdraw(1026448);
await instance.sendTransaction({from:accounts[9],value:66});

});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[9],value:45});

result = await instance.withdraw(825881);
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[6],value:51});

result = await instance.withdraw(781035);
});
it('test 6',async() => {
result = await instance.withdraw(743794);
await instance.sendTransaction({from:accounts[3],value:60});

});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[8],value:19});

result = await instance.withdraw(979913);
});
it('test 8',async() => {
result = await instance.withdraw(1011461);
await instance.sendTransaction({from:accounts[6],value:44});

});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[4],value:39});

result = await instance.withdraw(871757);
});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[7],value:31});

result = await instance.withdraw(687726);
});
it('test 11',async() => {
result = await instance.withdraw(16335);
await instance.sendTransaction({from:accounts[6],value:46});

});
it('test 12',async() => {
result = await instance.withdraw(1012606);
await instance.sendTransaction({from:accounts[2],value:59});

});
it('test 13',async() => {
result = await instance.withdraw(980397);
await instance.sendTransaction({from:accounts[3],value:26});

});
it('test 14',async() => {
result = await instance.withdraw(989088);
await instance.sendTransaction({from:accounts[5],value:23});

});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[7],value:25});

result = await instance.withdraw(619823);
});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[2],value:49});

result = await instance.withdraw(760658);
});
it('test 17',async() => {
result = await instance.withdraw(263781);
await instance.sendTransaction({from:accounts[9],value:99});

});
it('test 18',async() => {
result = await instance.withdraw(240306);
await instance.sendTransaction({from:accounts[2],value:98});

});
it('test 19',async() => {
result = await instance.withdraw(150237);
await instance.sendTransaction({from:accounts[5],value:37});

});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[5],value:55});

result = await instance.withdraw(729542);
});
it('test 21',async() => {
result = await instance.withdraw(521416);
await instance.sendTransaction({from:accounts[4],value:13});

});
it('test 22',async() => {
result = await instance.withdraw(712728);
await instance.sendTransaction({from:accounts[2],value:6});

});
it('test 23',async() => {
result = await instance.withdraw(377895);
await instance.sendTransaction({from:accounts[7],value:85});

});
it('test 24',async() => {
result = await instance.withdraw(320046);
await instance.sendTransaction({from:accounts[1],value:40});

});
it('test 25',async() => {
result = await instance.withdraw(529);
await instance.sendTransaction({from:accounts[5],value:50});

});
it('test 26',async() => {
result = await instance.withdraw(486593);
await instance.sendTransaction({from:accounts[8],value:45});

});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[8],value:48});

result = await instance.withdraw(430638);
});
it('test 28',async() => {
result = await instance.withdraw(1013896);
await instance.sendTransaction({from:accounts[9],value:81});

});
it('test 29',async() => {
result = await instance.withdraw(232288);
await instance.sendTransaction({from:accounts[7],value:85});

});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[6],value:95});

result = await instance.withdraw(409740);
});
it('test 31',async() => {
result = await instance.withdraw(565177);
await instance.sendTransaction({from:accounts[7],value:88});

});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[1],value:33});

result = await instance.withdraw(567238);
});
it('test 33',async() => {
result = await instance.withdraw(388319);
await instance.sendTransaction({from:accounts[5],value:22});

});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[5],value:14});

result = await instance.withdraw(157584);
});
it('test 35',async() => {
result = await instance.withdraw(195960);
await instance.sendTransaction({from:accounts[6],value:39});

});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[6],value:98});

result = await instance.withdraw(837912);
});
it('test 37',async() => {
result = await instance.withdraw(69470);
await instance.sendTransaction({from:accounts[1],value:28});

});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[8],value:16});

result = await instance.withdraw(221917);
});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[3],value:99});

result = await instance.withdraw(824942);
});
it('test 40',async() => {
await instance.sendTransaction({from:accounts[9],value:10});

result = await instance.withdraw(178126);
});
it('test 41',async() => {
result = await instance.withdraw(101837);
await instance.sendTransaction({from:accounts[6],value:100});

});
it('test 42',async() => {
result = await instance.withdraw(52329);
await instance.sendTransaction({from:accounts[8],value:44});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 43',async() => {
await instance.sendTransaction({from:accounts[4],value:49});

result = await instance.withdraw(578355);
});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[3],value:51});

result = await instance.withdraw(664755);
});
it('test 45',async() => {
result = await instance.withdraw(176925);
await instance.sendTransaction({from:accounts[8],value:17});

});
it('test 46',async() => {
result = await instance.withdraw(799715);
await instance.sendTransaction({from:accounts[7],value:51});

});
it('test 47',async() => {
result = await instance.withdraw(607055);
await instance.sendTransaction({from:accounts[4],value:32});

});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[6],value:28});

result = await instance.withdraw(337995);
});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[9],value:87});

result = await instance.withdraw(353272);
});
});
