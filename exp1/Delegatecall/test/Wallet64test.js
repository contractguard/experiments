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
result = await instance.withdraw(304883);
await instance.sendTransaction({from:accounts[2],value:100});

});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[6],value:18});

result = await instance.withdraw(187949);
});
it('test 2',async() => {
result = await instance.withdraw(460117);
await instance.sendTransaction({from:accounts[3],value:34});

});
it('test 3',async() => {
result = await instance.withdraw(134637);
await instance.sendTransaction({from:accounts[9],value:1});

});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[2],value:8});

result = await instance.withdraw(697243);
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[9],value:63});

result = await instance.withdraw(828268);
});
it('test 6',async() => {
result = await instance.withdraw(87899);
await instance.sendTransaction({from:accounts[1],value:36});

});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[2],value:96});

result = await instance.withdraw(249865);
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[4],value:64});

result = await instance.withdraw(751867);
});
it('test 9',async() => {
result = await instance.withdraw(999430);
await instance.sendTransaction({from:accounts[9],value:41});

});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[8],value:50});

result = await instance.withdraw(929935);
});
it('test 11',async() => {
result = await instance.withdraw(785275);
await instance.sendTransaction({from:accounts[3],value:58});

});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[2],value:61});

result = await instance.withdraw(397729);
});
it('test 13',async() => {
result = await instance.withdraw(620897);
await instance.sendTransaction({from:accounts[3],value:83});

});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[8],value:56});

result = await instance.withdraw(774341);
});
it('test 15',async() => {
result = await instance.withdraw(451892);
await instance.sendTransaction({from:accounts[5],value:82});

});
it('test 16',async() => {
result = await instance.withdraw(1000715);
await instance.sendTransaction({from:accounts[6],value:100});

});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[1],value:1});

result = await instance.withdraw(262147);
});
it('test 18',async() => {
result = await instance.withdraw(353604);
await instance.sendTransaction({from:accounts[5],value:86});

});
it('test 19',async() => {
result = await instance.withdraw(358643);
await instance.sendTransaction({from:accounts[3],value:86});

});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[3],value:90});

result = await instance.withdraw(510182);
});
it('test 21',async() => {
result = await instance.withdraw(697004);
await instance.sendTransaction({from:accounts[3],value:74});

});
it('test 22',async() => {
result = await instance.withdraw(787598);
await instance.sendTransaction({from:accounts[4],value:68});

});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[9],value:20});

result = await instance.withdraw(790127);
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[4],value:17});

result = await instance.withdraw(933226);
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[8],value:3});

result = await instance.withdraw(5325);
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[6],value:6});

result = await instance.withdraw(454324);
});
it('test 27',async() => {
result = await instance.withdraw(790337);
await instance.sendTransaction({from:accounts[1],value:34});

});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[4],value:36});

result = await instance.withdraw(195705);
});
it('test 29',async() => {
result = await instance.withdraw(16809);
await instance.sendTransaction({from:accounts[7],value:5});

});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[9],value:79});

result = await instance.withdraw(3871);
});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[2],value:75});

result = await instance.withdraw(968604);
});
it('test 32',async() => {
result = await instance.withdraw(182363);
await instance.sendTransaction({from:accounts[2],value:75});

});
it('test 33',async() => {
result = await instance.withdraw(370499);
await instance.sendTransaction({from:accounts[2],value:42});

});
it('test 34',async() => {
result = await instance.withdraw(1014342);
await instance.sendTransaction({from:accounts[1],value:42});

});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[2],value:68});

result = await instance.withdraw(159659);
});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[6],value:75});

result = await instance.withdraw(996602);
});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[2],value:31});

result = await instance.withdraw(714936);
});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[7],value:10});

result = await instance.withdraw(971208);
});
it('test 39',async() => {
result = await instance.withdraw(314172);
await instance.sendTransaction({from:accounts[5],value:74});

});
it('test 40',async() => {
result = await instance.withdraw(1007791);
await instance.sendTransaction({from:accounts[9],value:45});

});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[9],value:79});

result = await instance.withdraw(167628);
});
it('test 42',async() => {
result = await instance.withdraw(942601);
await instance.sendTransaction({from:accounts[1],value:16});

});
it('test 43',async() => {
result = await instance.withdraw(832182);
await instance.sendTransaction({from:accounts[5],value:23});

});
it('test 44',async() => {
result = await instance.withdraw(444007);
await instance.sendTransaction({from:accounts[3],value:18});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 45',async() => {
await instance.sendTransaction({from:accounts[3],value:63});

result = await instance.withdraw(460499);
});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[9],value:32});

result = await instance.withdraw(15778);
});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[1],value:35});

result = await instance.withdraw(406582);
});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[2],value:68});

result = await instance.withdraw(516343);
});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[8],value:4});

result = await instance.withdraw(673591);
});
});
