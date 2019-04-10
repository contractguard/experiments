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
await instance.sendTransaction({from:accounts[8],value:53});

result = await instance.withdraw(651012);
});
it('test 1',async() => {
result = await instance.withdraw(681224);
await instance.sendTransaction({from:accounts[7],value:14});

});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[1],value:95});

result = await instance.withdraw(565896);
});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[7],value:74});

result = await instance.withdraw(197848);
});
it('test 4',async() => {
result = await instance.withdraw(815333);
await instance.sendTransaction({from:accounts[8],value:12});

});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[7],value:73});

result = await instance.withdraw(983597);
});
it('test 6',async() => {
result = await instance.withdraw(200193);
await instance.sendTransaction({from:accounts[9],value:76});

});
it('test 7',async() => {
result = await instance.withdraw(855512);
await instance.sendTransaction({from:accounts[3],value:19});

});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[3],value:89});

result = await instance.withdraw(239528);
});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[9],value:18});

result = await instance.withdraw(130064);
});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[9],value:77});

result = await instance.withdraw(755948);
});
it('test 11',async() => {
result = await instance.withdraw(23522);
await instance.sendTransaction({from:accounts[6],value:37});

});
it('test 12',async() => {
result = await instance.withdraw(365703);
await instance.sendTransaction({from:accounts[6],value:54});

});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[4],value:45});

result = await instance.withdraw(360863);
});
it('test 14',async() => {
result = await instance.withdraw(939437);
await instance.sendTransaction({from:accounts[6],value:57});

});
it('test 15',async() => {
result = await instance.withdraw(798085);
await instance.sendTransaction({from:accounts[4],value:80});

});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[9],value:67});

result = await instance.withdraw(887689);
});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[9],value:63});

result = await instance.withdraw(1031494);
});
it('test 18',async() => {
result = await instance.withdraw(733547);
await instance.sendTransaction({from:accounts[2],value:89});

});
it('test 19',async() => {
result = await instance.withdraw(555771);
await instance.sendTransaction({from:accounts[3],value:93});

});
it('test 20',async() => {
result = await instance.withdraw(857630);
await instance.sendTransaction({from:accounts[8],value:68});

});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[6],value:11});

result = await instance.withdraw(978254);
});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[6],value:69});

result = await instance.withdraw(13700);
});
it('test 23',async() => {
result = await instance.withdraw(1048562);
await instance.sendTransaction({from:accounts[5],value:6});

});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[1],value:7});

result = await instance.withdraw(278287);
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[3],value:80});

result = await instance.withdraw(540117);
});
it('test 26',async() => {
result = await instance.withdraw(138849);
await instance.sendTransaction({from:accounts[1],value:70});

});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[8],value:34});

result = await instance.withdraw(611382);
});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[2],value:31});

result = await instance.withdraw(216429);
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[1],value:81});

result = await instance.withdraw(600956);
});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[9],value:64});

result = await instance.withdraw(576769);
});
it('test 31',async() => {
result = await instance.withdraw(336856);
await instance.sendTransaction({from:accounts[4],value:54});

});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[9],value:78});

result = await instance.withdraw(630351);
});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[8],value:56});

result = await instance.withdraw(316785);
});
it('test 34',async() => {
result = await instance.withdraw(351654);
await instance.sendTransaction({from:accounts[5],value:87});

});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[9],value:58});

result = await instance.withdraw(714894);
});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[2],value:48});

result = await instance.withdraw(324986);
});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[9],value:64});

result = await instance.withdraw(462659);
});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[1],value:32});

result = await instance.withdraw(500115);
});
it('test 39',async() => {
result = await instance.withdraw(538126);
await instance.sendTransaction({from:accounts[5],value:88});

});
it('test 40',async() => {
await instance.sendTransaction({from:accounts[5],value:66});

result = await instance.withdraw(542856);
});
it('test 41',async() => {
result = await instance.withdraw(630192);
await instance.sendTransaction({from:accounts[3],value:97});

});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[5],value:87});

result = await instance.withdraw(87117);
});
it('test 43',async() => {
await instance.sendTransaction({from:accounts[8],value:34});

result = await instance.withdraw(521987);
});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[8],value:45});

result = await instance.withdraw(811316);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 45',async() => {
await instance.sendTransaction({from:accounts[6],value:63});

result = await instance.withdraw(205614);
});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[5],value:74});

result = await instance.withdraw(452520);
});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[8],value:35});

result = await instance.withdraw(1031019);
});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[1],value:84});

result = await instance.withdraw(323998);
});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[3],value:54});

result = await instance.withdraw(1041935);
});
});
