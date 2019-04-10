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
await instance.sendTransaction({from:accounts[9],value:57});

result = await instance.withdraw(870709);
});
it('test 1',async() => {
result = await instance.withdraw(955594);
await instance.sendTransaction({from:accounts[1],value:18});

});
it('test 2',async() => {
result = await instance.withdraw(766834);
await instance.sendTransaction({from:accounts[6],value:25});

});
it('test 3',async() => {
result = await instance.withdraw(430425);
await instance.sendTransaction({from:accounts[4],value:33});

});
it('test 4',async() => {
result = await instance.withdraw(750215);
await instance.sendTransaction({from:accounts[6],value:74});

});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[9],value:48});

result = await instance.withdraw(885890);
});
it('test 6',async() => {
result = await instance.withdraw(225357);
await instance.sendTransaction({from:accounts[8],value:64});

});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[3],value:27});

result = await instance.withdraw(50577);
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[7],value:18});

result = await instance.withdraw(993111);
});
it('test 9',async() => {
result = await instance.withdraw(188408);
await instance.sendTransaction({from:accounts[5],value:34});

});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[5],value:7});

result = await instance.withdraw(750859);
});
it('test 11',async() => {
result = await instance.withdraw(69490);
await instance.sendTransaction({from:accounts[3],value:15});

});
it('test 12',async() => {
result = await instance.withdraw(667502);
await instance.sendTransaction({from:accounts[1],value:49});

});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[3],value:46});

result = await instance.withdraw(207395);
});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[6],value:79});

result = await instance.withdraw(137808);
});
it('test 15',async() => {
result = await instance.withdraw(862146);
await instance.sendTransaction({from:accounts[1],value:50});

});
it('test 16',async() => {
result = await instance.withdraw(3906);
await instance.sendTransaction({from:accounts[1],value:31});

});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[9],value:7});

result = await instance.withdraw(273987);
});
it('test 18',async() => {
result = await instance.withdraw(658550);
await instance.sendTransaction({from:accounts[1],value:17});

});
it('test 19',async() => {
result = await instance.withdraw(722063);
await instance.sendTransaction({from:accounts[4],value:7});

});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[1],value:56});

result = await instance.withdraw(939167);
});
it('test 21',async() => {
result = await instance.withdraw(971912);
await instance.sendTransaction({from:accounts[4],value:6});

});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[1],value:54});

result = await instance.withdraw(73828);
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[9],value:33});

result = await instance.withdraw(921894);
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[6],value:61});

result = await instance.withdraw(367621);
});
it('test 25',async() => {
result = await instance.withdraw(284250);
await instance.sendTransaction({from:accounts[1],value:17});

});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[2],value:80});

result = await instance.withdraw(14304);
});
it('test 27',async() => {
result = await instance.withdraw(954484);
await instance.sendTransaction({from:accounts[8],value:4});

});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[2],value:82});

result = await instance.withdraw(934437);
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[9],value:17});

result = await instance.withdraw(512414);
});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[2],value:81});

result = await instance.withdraw(286528);
});
it('test 31',async() => {
result = await instance.withdraw(964804);
await instance.sendTransaction({from:accounts[3],value:13});

});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[3],value:1});

result = await instance.withdraw(111169);
});
it('test 33',async() => {
result = await instance.withdraw(733916);
await instance.sendTransaction({from:accounts[4],value:74});

});
it('test 34',async() => {
result = await instance.withdraw(852443);
await instance.sendTransaction({from:accounts[1],value:72});

});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[2],value:3});

result = await instance.withdraw(540576);
});
it('test 36',async() => {
result = await instance.withdraw(81401);
await instance.sendTransaction({from:accounts[4],value:35});

});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[5],value:83});

result = await instance.withdraw(558262);
});
it('test 38',async() => {
result = await instance.withdraw(588322);
await instance.sendTransaction({from:accounts[2],value:57});

});
it('test 39',async() => {
result = await instance.withdraw(172507);
await instance.sendTransaction({from:accounts[5],value:90});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 40',async() => {
result = await instance.withdraw(675856);
await instance.sendTransaction({from:accounts[4],value:89});

});
it('test 41',async() => {
result = await instance.withdraw(257809);
await instance.sendTransaction({from:accounts[7],value:40});

});
it('test 42',async() => {
result = await instance.withdraw(552873);
await instance.sendTransaction({from:accounts[7],value:82});

});
it('test 43',async() => {
result = await instance.withdraw(1032079);
await instance.sendTransaction({from:accounts[1],value:12});

});
it('test 44',async() => {
result = await instance.withdraw(172793);
await instance.sendTransaction({from:accounts[2],value:21});

});
it('test 45',async() => {
result = await instance.withdraw(915624);
await instance.sendTransaction({from:accounts[5],value:85});

});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[1],value:70});

result = await instance.withdraw(268859);
});
it('test 47',async() => {
result = await instance.withdraw(434363);
await instance.sendTransaction({from:accounts[9],value:78});

});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[1],value:40});

result = await instance.withdraw(739714);
});
it('test 49',async() => {
result = await instance.withdraw(263842);
await instance.sendTransaction({from:accounts[1],value:24});

});
});
