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
await instance.sendTransaction({from:accounts[2],value:27});

result = await instance.withdraw(764295);
});
it('test 1',async() => {
result = await instance.withdraw(552624);
await instance.sendTransaction({from:accounts[8],value:62});

});
it('test 2',async() => {
result = await instance.withdraw(212020);
await instance.sendTransaction({from:accounts[9],value:25});

});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[7],value:34});

result = await instance.withdraw(991488);
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[6],value:78});

result = await instance.withdraw(401179);
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[7],value:41});

result = await instance.withdraw(993941);
});
it('test 6',async() => {
result = await instance.withdraw(208468);
await instance.sendTransaction({from:accounts[5],value:82});

});
it('test 7',async() => {
result = await instance.withdraw(446631);
await instance.sendTransaction({from:accounts[3],value:20});

});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[2],value:69});

result = await instance.withdraw(703537);
});
it('test 9',async() => {
result = await instance.withdraw(675086);
await instance.sendTransaction({from:accounts[7],value:9});

});
it('test 10',async() => {
result = await instance.withdraw(412598);
await instance.sendTransaction({from:accounts[2],value:78});

});
it('test 11',async() => {
result = await instance.withdraw(559020);
await instance.sendTransaction({from:accounts[1],value:36});

});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[2],value:45});

result = await instance.withdraw(713074);
});
it('test 13',async() => {
result = await instance.withdraw(875135);
await instance.sendTransaction({from:accounts[9],value:40});

});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[3],value:55});

result = await instance.withdraw(594339);
});
it('test 15',async() => {
result = await instance.withdraw(38453);
await instance.sendTransaction({from:accounts[2],value:94});

});
it('test 16',async() => {
result = await instance.withdraw(500331);
await instance.sendTransaction({from:accounts[9],value:54});

});
it('test 17',async() => {
result = await instance.withdraw(67753);
await instance.sendTransaction({from:accounts[1],value:37});

});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[1],value:52});

result = await instance.withdraw(4004);
});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[4],value:100});

result = await instance.withdraw(273765);
});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[9],value:42});

result = await instance.withdraw(1022314);
});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[5],value:83});

result = await instance.withdraw(981073);
});
it('test 22',async() => {
result = await instance.withdraw(749054);
await instance.sendTransaction({from:accounts[9],value:37});

});
it('test 23',async() => {
result = await instance.withdraw(56580);
await instance.sendTransaction({from:accounts[5],value:61});

});
it('test 24',async() => {
result = await instance.withdraw(262170);
await instance.sendTransaction({from:accounts[4],value:98});

});
it('test 25',async() => {
result = await instance.withdraw(284938);
await instance.sendTransaction({from:accounts[1],value:6});

});
it('test 26',async() => {
result = await instance.withdraw(277386);
await instance.sendTransaction({from:accounts[2],value:40});

});
it('test 27',async() => {
result = await instance.withdraw(220229);
await instance.sendTransaction({from:accounts[6],value:1});

});
it('test 28',async() => {
result = await instance.withdraw(731413);
await instance.sendTransaction({from:accounts[9],value:27});

});
it('test 29',async() => {
result = await instance.withdraw(468709);
await instance.sendTransaction({from:accounts[5],value:71});

});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[1],value:32});

result = await instance.withdraw(559143);
});
it('test 31',async() => {
result = await instance.withdraw(934158);
await instance.sendTransaction({from:accounts[3],value:8});

});
it('test 32',async() => {
result = await instance.withdraw(434814);
await instance.sendTransaction({from:accounts[3],value:51});

});
it('test 33',async() => {
result = await instance.withdraw(467525);
await instance.sendTransaction({from:accounts[3],value:11});

});
it('test 34',async() => {
result = await instance.withdraw(923523);
await instance.sendTransaction({from:accounts[2],value:91});

});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[2],value:75});

result = await instance.withdraw(43182);
});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[3],value:60});

result = await instance.withdraw(324966);
});
it('test 37',async() => {
result = await instance.withdraw(616866);
await instance.sendTransaction({from:accounts[5],value:22});

});
it('test 38',async() => {
result = await instance.withdraw(209555);
await instance.sendTransaction({from:accounts[2],value:47});

});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[5],value:28});

result = await instance.withdraw(393678);
});
it('test 40',async() => {
await instance.sendTransaction({from:accounts[1],value:67});

result = await instance.withdraw(21557);
});
it('test 41',async() => {
result = await instance.withdraw(849393);
await instance.sendTransaction({from:accounts[3],value:81});

});
it('test 42',async() => {
result = await instance.withdraw(759993);
await instance.sendTransaction({from:accounts[5],value:47});

});
it('test 43',async() => {
result = await instance.withdraw(879090);
await instance.sendTransaction({from:accounts[9],value:1});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 44',async() => {
await instance.sendTransaction({from:accounts[7],value:54});

result = await instance.withdraw(510495);
});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[1],value:24});

result = await instance.withdraw(228689);
});
it('test 46',async() => {
result = await instance.withdraw(637675);
await instance.sendTransaction({from:accounts[2],value:78});

});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[6],value:37});

result = await instance.withdraw(965822);
});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[9],value:87});

result = await instance.withdraw(253218);
});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[1],value:22});

result = await instance.withdraw(1003598);
});
});
