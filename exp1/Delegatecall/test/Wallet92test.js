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
await instance.sendTransaction({from:accounts[3],value:20});

result = await instance.withdraw(909713);
});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[8],value:6});

result = await instance.withdraw(826720);
});
it('test 2',async() => {
result = await instance.withdraw(881004);
await instance.sendTransaction({from:accounts[5],value:56});

});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[1],value:12});

result = await instance.withdraw(971138);
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[7],value:96});

result = await instance.withdraw(90406);
});
it('test 5',async() => {
result = await instance.withdraw(127112);
await instance.sendTransaction({from:accounts[2],value:78});

});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[3],value:16});

result = await instance.withdraw(608929);
});
it('test 7',async() => {
result = await instance.withdraw(544963);
await instance.sendTransaction({from:accounts[6],value:17});

});
it('test 8',async() => {
result = await instance.withdraw(550731);
await instance.sendTransaction({from:accounts[5],value:15});

});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[4],value:20});

result = await instance.withdraw(979530);
});
it('test 10',async() => {
result = await instance.withdraw(368305);
await instance.sendTransaction({from:accounts[6],value:3});

});
it('test 11',async() => {
result = await instance.withdraw(966996);
await instance.sendTransaction({from:accounts[1],value:63});

});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[4],value:62});

result = await instance.withdraw(755640);
});
it('test 13',async() => {
result = await instance.withdraw(490554);
await instance.sendTransaction({from:accounts[4],value:30});

});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[4],value:49});

result = await instance.withdraw(899807);
});
it('test 15',async() => {
result = await instance.withdraw(317254);
await instance.sendTransaction({from:accounts[1],value:64});

});
it('test 16',async() => {
result = await instance.withdraw(530080);
await instance.sendTransaction({from:accounts[8],value:19});

});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[7],value:74});

result = await instance.withdraw(210523);
});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[6],value:23});

result = await instance.withdraw(205887);
});
it('test 19',async() => {
result = await instance.withdraw(77396);
await instance.sendTransaction({from:accounts[3],value:76});

});
it('test 20',async() => {
result = await instance.withdraw(705159);
await instance.sendTransaction({from:accounts[8],value:76});

});
it('test 21',async() => {
result = await instance.withdraw(948904);
await instance.sendTransaction({from:accounts[5],value:87});

});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[1],value:58});

result = await instance.withdraw(976405);
});
it('test 23',async() => {
result = await instance.withdraw(573544);
await instance.sendTransaction({from:accounts[3],value:37});

});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[8],value:22});

result = await instance.withdraw(61676);
});
it('test 25',async() => {
result = await instance.withdraw(119830);
await instance.sendTransaction({from:accounts[1],value:10});

});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[9],value:96});

result = await instance.withdraw(432829);
});
it('test 27',async() => {
result = await instance.withdraw(938153);
await instance.sendTransaction({from:accounts[1],value:46});

});
it('test 28',async() => {
result = await instance.withdraw(433944);
await instance.sendTransaction({from:accounts[6],value:74});

});
it('test 29',async() => {
result = await instance.withdraw(5785);
await instance.sendTransaction({from:accounts[4],value:91});

});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[7],value:17});

result = await instance.withdraw(811075);
});
it('test 31',async() => {
result = await instance.withdraw(123659);
await instance.sendTransaction({from:accounts[1],value:91});

});
it('test 32',async() => {
result = await instance.withdraw(929097);
await instance.sendTransaction({from:accounts[1],value:9});

});
it('test 33',async() => {
result = await instance.withdraw(79765);
await instance.sendTransaction({from:accounts[5],value:17});

});
it('test 34',async() => {
result = await instance.withdraw(790568);
await instance.sendTransaction({from:accounts[8],value:45});

});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[1],value:51});

result = await instance.withdraw(460061);
});
it('test 36',async() => {
result = await instance.withdraw(574749);
await instance.sendTransaction({from:accounts[3],value:87});

});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[7],value:54});

result = await instance.withdraw(660898);
});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[6],value:31});

result = await instance.withdraw(481261);
});
it('test 39',async() => {
result = await instance.withdraw(90597);
await instance.sendTransaction({from:accounts[6],value:22});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 40',async() => {
await instance.sendTransaction({from:accounts[5],value:74});

result = await instance.withdraw(562191);
});
it('test 41',async() => {
result = await instance.withdraw(668876);
await instance.sendTransaction({from:accounts[7],value:95});

});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[2],value:21});

result = await instance.withdraw(83723);
});
it('test 43',async() => {
result = await instance.withdraw(322549);
await instance.sendTransaction({from:accounts[5],value:50});

});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[6],value:66});

result = await instance.withdraw(244175);
});
it('test 45',async() => {
result = await instance.withdraw(717133);
await instance.sendTransaction({from:accounts[1],value:6});

});
it('test 46',async() => {
result = await instance.withdraw(71845);
await instance.sendTransaction({from:accounts[9],value:17});

});
it('test 47',async() => {
result = await instance.withdraw(901018);
await instance.sendTransaction({from:accounts[5],value:40});

});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[9],value:45});

result = await instance.withdraw(501408);
});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[1],value:80});

result = await instance.withdraw(182402);
});
});
