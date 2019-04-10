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
result = await instance.withdraw(205180);
await instance.sendTransaction({from:accounts[3],value:94});

});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[3],value:73});

result = await instance.withdraw(128529);
});
it('test 2',async() => {
result = await instance.withdraw(170371);
await instance.sendTransaction({from:accounts[9],value:48});

});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[7],value:97});

result = await instance.withdraw(33034);
});
it('test 4',async() => {
result = await instance.withdraw(554117);
await instance.sendTransaction({from:accounts[5],value:11});

});
it('test 5',async() => {
result = await instance.withdraw(894576);
await instance.sendTransaction({from:accounts[3],value:15});

});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[2],value:2});

result = await instance.withdraw(1039879);
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[6],value:36});

result = await instance.withdraw(1038910);
});
it('test 8',async() => {
result = await instance.withdraw(1011640);
await instance.sendTransaction({from:accounts[5],value:82});

});
it('test 9',async() => {
result = await instance.withdraw(549594);
await instance.sendTransaction({from:accounts[9],value:2});

});
it('test 10',async() => {
result = await instance.withdraw(679459);
await instance.sendTransaction({from:accounts[2],value:92});

});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[5],value:18});

result = await instance.withdraw(594282);
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[6],value:36});

result = await instance.withdraw(839222);
});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[7],value:90});

result = await instance.withdraw(450767);
});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[2],value:41});

result = await instance.withdraw(534430);
});
it('test 15',async() => {
result = await instance.withdraw(698748);
await instance.sendTransaction({from:accounts[1],value:13});

});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[2],value:98});

result = await instance.withdraw(119721);
});
it('test 17',async() => {
result = await instance.withdraw(134121);
await instance.sendTransaction({from:accounts[1],value:37});

});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[3],value:76});

result = await instance.withdraw(426535);
});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[7],value:24});

result = await instance.withdraw(304598);
});
it('test 20',async() => {
result = await instance.withdraw(426072);
await instance.sendTransaction({from:accounts[5],value:77});

});
it('test 21',async() => {
result = await instance.withdraw(343745);
await instance.sendTransaction({from:accounts[8],value:89});

});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[4],value:46});

result = await instance.withdraw(870207);
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[1],value:54});

result = await instance.withdraw(381328);
});
it('test 24',async() => {
result = await instance.withdraw(500023);
await instance.sendTransaction({from:accounts[6],value:12});

});
it('test 25',async() => {
result = await instance.withdraw(441753);
await instance.sendTransaction({from:accounts[2],value:98});

});
it('test 26',async() => {
result = await instance.withdraw(947953);
await instance.sendTransaction({from:accounts[5],value:84});

});
it('test 27',async() => {
result = await instance.withdraw(496809);
await instance.sendTransaction({from:accounts[9],value:97});

});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[3],value:58});

result = await instance.withdraw(1045782);
});
it('test 29',async() => {
result = await instance.withdraw(227456);
await instance.sendTransaction({from:accounts[7],value:60});

});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[3],value:37});

result = await instance.withdraw(567311);
});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[7],value:43});

result = await instance.withdraw(446188);
});
it('test 32',async() => {
result = await instance.withdraw(475619);
await instance.sendTransaction({from:accounts[3],value:99});

});
it('test 33',async() => {
result = await instance.withdraw(536527);
await instance.sendTransaction({from:accounts[3],value:85});

});
it('test 34',async() => {
result = await instance.withdraw(827985);
await instance.sendTransaction({from:accounts[8],value:87});

});
it('test 35',async() => {
result = await instance.withdraw(481225);
await instance.sendTransaction({from:accounts[1],value:51});

});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[8],value:48});

result = await instance.withdraw(806226);
});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[2],value:69});

result = await instance.withdraw(653826);
});
it('test 38',async() => {
result = await instance.withdraw(722391);
await instance.sendTransaction({from:accounts[4],value:52});

});
it('test 39',async() => {
result = await instance.withdraw(196520);
await instance.sendTransaction({from:accounts[2],value:86});

});
it('test 40',async() => {
await instance.sendTransaction({from:accounts[9],value:84});

result = await instance.withdraw(76279);
});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[1],value:72});

result = await instance.withdraw(406763);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 42',async() => {
await instance.sendTransaction({from:accounts[3],value:97});

result = await instance.withdraw(164787);
});
it('test 43',async() => {
await instance.sendTransaction({from:accounts[5],value:20});

result = await instance.withdraw(70184);
});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[5],value:88});

result = await instance.withdraw(716848);
});
it('test 45',async() => {
result = await instance.withdraw(192495);
await instance.sendTransaction({from:accounts[8],value:6});

});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[4],value:7});

result = await instance.withdraw(196608);
});
it('test 47',async() => {
result = await instance.withdraw(206379);
await instance.sendTransaction({from:accounts[4],value:40});

});
it('test 48',async() => {
result = await instance.withdraw(779190);
await instance.sendTransaction({from:accounts[3],value:38});

});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[7],value:54});

result = await instance.withdraw(335147);
});
});
