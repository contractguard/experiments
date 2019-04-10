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
result = await instance.withdraw(401775);
await instance.sendTransaction({from:accounts[4],value:3});

});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[7],value:97});

result = await instance.withdraw(79556);
});
it('test 2',async() => {
result = await instance.withdraw(42161);
await instance.sendTransaction({from:accounts[5],value:12});

});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[6],value:14});

result = await instance.withdraw(409807);
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[5],value:70});

result = await instance.withdraw(949291);
});
it('test 5',async() => {
result = await instance.withdraw(665037);
await instance.sendTransaction({from:accounts[5],value:16});

});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[4],value:20});

result = await instance.withdraw(966072);
});
it('test 7',async() => {
result = await instance.withdraw(348476);
await instance.sendTransaction({from:accounts[9],value:38});

});
it('test 8',async() => {
result = await instance.withdraw(867687);
await instance.sendTransaction({from:accounts[8],value:32});

});
it('test 9',async() => {
result = await instance.withdraw(639115);
await instance.sendTransaction({from:accounts[6],value:37});

});
it('test 10',async() => {
result = await instance.withdraw(237119);
await instance.sendTransaction({from:accounts[3],value:76});

});
it('test 11',async() => {
result = await instance.withdraw(371619);
await instance.sendTransaction({from:accounts[1],value:85});

});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[6],value:23});

result = await instance.withdraw(149189);
});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[3],value:89});

result = await instance.withdraw(988341);
});
it('test 14',async() => {
result = await instance.withdraw(1027945);
await instance.sendTransaction({from:accounts[4],value:44});

});
it('test 15',async() => {
result = await instance.withdraw(55896);
await instance.sendTransaction({from:accounts[5],value:84});

});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[9],value:65});

result = await instance.withdraw(154005);
});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[2],value:45});

result = await instance.withdraw(968337);
});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[3],value:83});

result = await instance.withdraw(661737);
});
it('test 19',async() => {
result = await instance.withdraw(852008);
await instance.sendTransaction({from:accounts[3],value:28});

});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[9],value:17});

result = await instance.withdraw(160749);
});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[3],value:74});

result = await instance.withdraw(118351);
});
it('test 22',async() => {
result = await instance.withdraw(795872);
await instance.sendTransaction({from:accounts[3],value:85});

});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[9],value:41});

result = await instance.withdraw(871469);
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[2],value:67});

result = await instance.withdraw(771200);
});
it('test 25',async() => {
result = await instance.withdraw(663715);
await instance.sendTransaction({from:accounts[2],value:6});

});
it('test 26',async() => {
result = await instance.withdraw(119017);
await instance.sendTransaction({from:accounts[5],value:3});

});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[6],value:70});

result = await instance.withdraw(769465);
});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[4],value:20});

result = await instance.withdraw(326822);
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[9],value:70});

result = await instance.withdraw(60994);
});
it('test 30',async() => {
result = await instance.withdraw(887020);
await instance.sendTransaction({from:accounts[9],value:97});

});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[3],value:39});

result = await instance.withdraw(883647);
});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[6],value:49});

result = await instance.withdraw(133402);
});
it('test 33',async() => {
result = await instance.withdraw(96585);
await instance.sendTransaction({from:accounts[3],value:11});

});
it('test 34',async() => {
result = await instance.withdraw(199336);
await instance.sendTransaction({from:accounts[9],value:64});

});
it('test 35',async() => {
result = await instance.withdraw(178762);
await instance.sendTransaction({from:accounts[7],value:43});

});
it('test 36',async() => {
result = await instance.withdraw(44176);
await instance.sendTransaction({from:accounts[4],value:17});

});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[6],value:52});

result = await instance.withdraw(942076);
});
it('test 38',async() => {
result = await instance.withdraw(408404);
await instance.sendTransaction({from:accounts[4],value:87});

});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[7],value:93});

result = await instance.withdraw(1029157);
});
it('test 40',async() => {
result = await instance.withdraw(289055);
await instance.sendTransaction({from:accounts[3],value:37});

});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[1],value:98});

result = await instance.withdraw(690848);
});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[8],value:53});

result = await instance.withdraw(553855);
});
it('test 43',async() => {
result = await instance.withdraw(909823);
await instance.sendTransaction({from:accounts[9],value:93});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 44',async() => {
await instance.sendTransaction({from:accounts[9],value:2});

result = await instance.withdraw(467370);
});
it('test 45',async() => {
result = await instance.withdraw(748750);
await instance.sendTransaction({from:accounts[6],value:61});

});
it('test 46',async() => {
result = await instance.withdraw(68269);
await instance.sendTransaction({from:accounts[2],value:57});

});
it('test 47',async() => {
result = await instance.withdraw(357243);
await instance.sendTransaction({from:accounts[2],value:74});

});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[7],value:16});

result = await instance.withdraw(181908);
});
it('test 49',async() => {
result = await instance.withdraw(165905);
await instance.sendTransaction({from:accounts[5],value:25});

});
});
