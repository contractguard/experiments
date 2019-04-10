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
await instance.sendTransaction({from:accounts[2],value:31});

result = await instance.withdraw(207099);
});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[7],value:47});

result = await instance.withdraw(828665);
});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[2],value:69});

result = await instance.withdraw(123641);
});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[2],value:71});

result = await instance.withdraw(222305);
});
it('test 4',async() => {
result = await instance.withdraw(1018005);
await instance.sendTransaction({from:accounts[8],value:56});

});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[5],value:22});

result = await instance.withdraw(812164);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[4],value:7});

result = await instance.withdraw(262536);
});
it('test 7',async() => {
result = await instance.withdraw(258360);
await instance.sendTransaction({from:accounts[3],value:37});

});
it('test 8',async() => {
result = await instance.withdraw(524162);
await instance.sendTransaction({from:accounts[4],value:44});

});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[4],value:32});

result = await instance.withdraw(545931);
});
it('test 10',async() => {
result = await instance.withdraw(201715);
await instance.sendTransaction({from:accounts[9],value:90});

});
it('test 11',async() => {
result = await instance.withdraw(651073);
await instance.sendTransaction({from:accounts[7],value:87});

});
it('test 12',async() => {
result = await instance.withdraw(877748);
await instance.sendTransaction({from:accounts[3],value:5});

});
it('test 13',async() => {
result = await instance.withdraw(982007);
await instance.sendTransaction({from:accounts[5],value:27});

});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[4],value:40});

result = await instance.withdraw(802899);
});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[8],value:75});

result = await instance.withdraw(285084);
});
it('test 16',async() => {
result = await instance.withdraw(931577);
await instance.sendTransaction({from:accounts[2],value:5});

});
it('test 17',async() => {
result = await instance.withdraw(631876);
await instance.sendTransaction({from:accounts[7],value:19});

});
it('test 18',async() => {
result = await instance.withdraw(294615);
await instance.sendTransaction({from:accounts[3],value:39});

});
it('test 19',async() => {
result = await instance.withdraw(121078);
await instance.sendTransaction({from:accounts[9],value:99});

});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[4],value:76});

result = await instance.withdraw(31935);
});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[2],value:20});

result = await instance.withdraw(1026657);
});
it('test 22',async() => {
result = await instance.withdraw(774727);
await instance.sendTransaction({from:accounts[2],value:10});

});
it('test 23',async() => {
result = await instance.withdraw(290400);
await instance.sendTransaction({from:accounts[3],value:28});

});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[2],value:28});

result = await instance.withdraw(479722);
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[3],value:86});

result = await instance.withdraw(16100);
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[7],value:9});

result = await instance.withdraw(939974);
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[7],value:12});

result = await instance.withdraw(749622);
});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[9],value:97});

result = await instance.withdraw(184976);
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[8],value:27});

result = await instance.withdraw(518311);
});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[7],value:75});

result = await instance.withdraw(60327);
});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[8],value:70});

result = await instance.withdraw(234678);
});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[7],value:68});

result = await instance.withdraw(453883);
});
it('test 33',async() => {
result = await instance.withdraw(475631);
await instance.sendTransaction({from:accounts[7],value:1});

});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[8],value:85});

result = await instance.withdraw(67313);
});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[3],value:64});

result = await instance.withdraw(13669);
});
it('test 36',async() => {
result = await instance.withdraw(140056);
await instance.sendTransaction({from:accounts[1],value:72});

});
it('test 37',async() => {
result = await instance.withdraw(420277);
await instance.sendTransaction({from:accounts[8],value:83});

});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[1],value:6});

result = await instance.withdraw(659600);
});
it('test 39',async() => {
result = await instance.withdraw(295130);
await instance.sendTransaction({from:accounts[1],value:100});

});
it('test 40',async() => {
result = await instance.withdraw(539377);
await instance.sendTransaction({from:accounts[5],value:4});

});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[6],value:25});

result = await instance.withdraw(260097);
});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[3],value:18});

result = await instance.withdraw(338203);
});
it('test 43',async() => {
result = await instance.withdraw(606066);
await instance.sendTransaction({from:accounts[4],value:19});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 44',async() => {
result = await instance.withdraw(541204);
await instance.sendTransaction({from:accounts[7],value:79});

});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[3],value:53});

result = await instance.withdraw(121153);
});
it('test 46',async() => {
result = await instance.withdraw(23637);
await instance.sendTransaction({from:accounts[1],value:86});

});
it('test 47',async() => {
result = await instance.withdraw(25591);
await instance.sendTransaction({from:accounts[1],value:77});

});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[1],value:95});

result = await instance.withdraw(169304);
});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[2],value:73});

result = await instance.withdraw(10364);
});
});
