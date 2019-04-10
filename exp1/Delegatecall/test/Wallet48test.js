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
await instance.sendTransaction({from:accounts[8],value:78});

result = await instance.withdraw(355567);
});
it('test 1',async() => {
result = await instance.withdraw(329257);
await instance.sendTransaction({from:accounts[9],value:16});

});
it('test 2',async() => {
result = await instance.withdraw(104663);
await instance.sendTransaction({from:accounts[2],value:24});

});
it('test 3',async() => {
result = await instance.withdraw(708158);
await instance.sendTransaction({from:accounts[2],value:51});

});
it('test 4',async() => {
result = await instance.withdraw(12729);
await instance.sendTransaction({from:accounts[2],value:100});

});
it('test 5',async() => {
result = await instance.withdraw(363714);
await instance.sendTransaction({from:accounts[3],value:9});

});
it('test 6',async() => {
result = await instance.withdraw(211425);
await instance.sendTransaction({from:accounts[7],value:9});

});
it('test 7',async() => {
result = await instance.withdraw(470602);
await instance.sendTransaction({from:accounts[6],value:73});

});
it('test 8',async() => {
result = await instance.withdraw(52211);
await instance.sendTransaction({from:accounts[5],value:68});

});
it('test 9',async() => {
result = await instance.withdraw(25049);
await instance.sendTransaction({from:accounts[4],value:17});

});
it('test 10',async() => {
result = await instance.withdraw(310197);
await instance.sendTransaction({from:accounts[6],value:69});

});
it('test 11',async() => {
result = await instance.withdraw(915726);
await instance.sendTransaction({from:accounts[8],value:51});

});
it('test 12',async() => {
result = await instance.withdraw(65301);
await instance.sendTransaction({from:accounts[4],value:6});

});
it('test 13',async() => {
result = await instance.withdraw(266570);
await instance.sendTransaction({from:accounts[5],value:32});

});
it('test 14',async() => {
result = await instance.withdraw(406674);
await instance.sendTransaction({from:accounts[4],value:97});

});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[3],value:22});

result = await instance.withdraw(205811);
});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[9],value:42});

result = await instance.withdraw(112763);
});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[3],value:14});

result = await instance.withdraw(790443);
});
it('test 18',async() => {
result = await instance.withdraw(214405);
await instance.sendTransaction({from:accounts[5],value:99});

});
it('test 19',async() => {
result = await instance.withdraw(308502);
await instance.sendTransaction({from:accounts[6],value:17});

});
it('test 20',async() => {
result = await instance.withdraw(470401);
await instance.sendTransaction({from:accounts[1],value:22});

});
it('test 21',async() => {
result = await instance.withdraw(437677);
await instance.sendTransaction({from:accounts[3],value:34});

});
it('test 22',async() => {
result = await instance.withdraw(520848);
await instance.sendTransaction({from:accounts[3],value:64});

});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[2],value:84});

result = await instance.withdraw(31093);
});
it('test 24',async() => {
result = await instance.withdraw(733393);
await instance.sendTransaction({from:accounts[1],value:90});

});
it('test 25',async() => {
result = await instance.withdraw(143114);
await instance.sendTransaction({from:accounts[6],value:53});

});
it('test 26',async() => {
result = await instance.withdraw(786744);
await instance.sendTransaction({from:accounts[5],value:82});

});
it('test 27',async() => {
result = await instance.withdraw(136939);
await instance.sendTransaction({from:accounts[2],value:4});

});
it('test 28',async() => {
result = await instance.withdraw(874602);
await instance.sendTransaction({from:accounts[5],value:33});

});
it('test 29',async() => {
result = await instance.withdraw(1026752);
await instance.sendTransaction({from:accounts[1],value:89});

});
it('test 30',async() => {
result = await instance.withdraw(13853);
await instance.sendTransaction({from:accounts[9],value:85});

});
it('test 31',async() => {
result = await instance.withdraw(887218);
await instance.sendTransaction({from:accounts[5],value:25});

});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[3],value:77});

result = await instance.withdraw(498892);
});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[6],value:71});

result = await instance.withdraw(200533);
});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[6],value:57});

result = await instance.withdraw(490245);
});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[8],value:27});

result = await instance.withdraw(857300);
});
it('test 36',async() => {
result = await instance.withdraw(965562);
await instance.sendTransaction({from:accounts[4],value:66});

});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[5],value:20});

result = await instance.withdraw(401778);
});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[4],value:86});

result = await instance.withdraw(934979);
});
it('test 39',async() => {
result = await instance.withdraw(683857);
await instance.sendTransaction({from:accounts[3],value:83});

});
it('test 40',async() => {
await instance.sendTransaction({from:accounts[8],value:70});

result = await instance.withdraw(946368);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 41',async() => {
result = await instance.withdraw(998085);
await instance.sendTransaction({from:accounts[1],value:46});

});
it('test 42',async() => {
result = await instance.withdraw(22226);
await instance.sendTransaction({from:accounts[9],value:66});

});
it('test 43',async() => {
await instance.sendTransaction({from:accounts[5],value:36});

result = await instance.withdraw(307462);
});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[4],value:42});

result = await instance.withdraw(409439);
});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[1],value:44});

result = await instance.withdraw(881008);
});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[3],value:5});

result = await instance.withdraw(802079);
});
it('test 47',async() => {
result = await instance.withdraw(444642);
await instance.sendTransaction({from:accounts[4],value:25});

});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[7],value:56});

result = await instance.withdraw(41824);
});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[6],value:5});

result = await instance.withdraw(829711);
});
});
