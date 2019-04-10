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
result = await instance.withdraw(934391);
await instance.sendTransaction({from:accounts[4],value:84});

});
it('test 1',async() => {
result = await instance.withdraw(906929);
await instance.sendTransaction({from:accounts[2],value:96});

});
it('test 2',async() => {
result = await instance.withdraw(111628);
await instance.sendTransaction({from:accounts[1],value:28});

});
it('test 3',async() => {
result = await instance.withdraw(568560);
await instance.sendTransaction({from:accounts[6],value:64});

});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[1],value:32});

result = await instance.withdraw(791416);
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[2],value:99});

result = await instance.withdraw(477508);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[9],value:78});

result = await instance.withdraw(302649);
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[5],value:16});

result = await instance.withdraw(288025);
});
it('test 8',async() => {
result = await instance.withdraw(475297);
await instance.sendTransaction({from:accounts[2],value:18});

});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[9],value:34});

result = await instance.withdraw(980398);
});
it('test 10',async() => {
result = await instance.withdraw(753020);
await instance.sendTransaction({from:accounts[5],value:68});

});
it('test 11',async() => {
result = await instance.withdraw(887134);
await instance.sendTransaction({from:accounts[3],value:10});

});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[1],value:91});

result = await instance.withdraw(939134);
});
it('test 13',async() => {
result = await instance.withdraw(178030);
await instance.sendTransaction({from:accounts[3],value:56});

});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[7],value:55});

result = await instance.withdraw(776520);
});
it('test 15',async() => {
result = await instance.withdraw(757767);
await instance.sendTransaction({from:accounts[1],value:61});

});
it('test 16',async() => {
result = await instance.withdraw(689689);
await instance.sendTransaction({from:accounts[2],value:37});

});
it('test 17',async() => {
result = await instance.withdraw(700395);
await instance.sendTransaction({from:accounts[2],value:64});

});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[8],value:62});

result = await instance.withdraw(580526);
});
it('test 19',async() => {
result = await instance.withdraw(420419);
await instance.sendTransaction({from:accounts[5],value:12});

});
it('test 20',async() => {
result = await instance.withdraw(615347);
await instance.sendTransaction({from:accounts[8],value:7});

});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[1],value:71});

result = await instance.withdraw(198941);
});
it('test 22',async() => {
result = await instance.withdraw(896533);
await instance.sendTransaction({from:accounts[5],value:61});

});
it('test 23',async() => {
result = await instance.withdraw(624428);
await instance.sendTransaction({from:accounts[4],value:25});

});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[7],value:96});

result = await instance.withdraw(484118);
});
it('test 25',async() => {
result = await instance.withdraw(114490);
await instance.sendTransaction({from:accounts[3],value:37});

});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[4],value:34});

result = await instance.withdraw(1020063);
});
it('test 27',async() => {
result = await instance.withdraw(198205);
await instance.sendTransaction({from:accounts[3],value:72});

});
it('test 28',async() => {
result = await instance.withdraw(190171);
await instance.sendTransaction({from:accounts[1],value:5});

});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[5],value:56});

result = await instance.withdraw(620219);
});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[8],value:39});

result = await instance.withdraw(545556);
});
it('test 31',async() => {
result = await instance.withdraw(703212);
await instance.sendTransaction({from:accounts[6],value:68});

});
it('test 32',async() => {
result = await instance.withdraw(199390);
await instance.sendTransaction({from:accounts[8],value:59});

});
it('test 33',async() => {
result = await instance.withdraw(341292);
await instance.sendTransaction({from:accounts[6],value:13});

});
it('test 34',async() => {
result = await instance.withdraw(671247);
await instance.sendTransaction({from:accounts[8],value:55});

});
it('test 35',async() => {
result = await instance.withdraw(274067);
await instance.sendTransaction({from:accounts[6],value:25});

});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[3],value:37});

result = await instance.withdraw(463945);
});
it('test 37',async() => {
result = await instance.withdraw(567854);
await instance.sendTransaction({from:accounts[2],value:91});

});
it('test 38',async() => {
result = await instance.withdraw(503170);
await instance.sendTransaction({from:accounts[1],value:14});

});
it('test 39',async() => {
result = await instance.withdraw(201917);
await instance.sendTransaction({from:accounts[8],value:14});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 40',async() => {
await instance.sendTransaction({from:accounts[8],value:25});

result = await instance.withdraw(229292);
});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[3],value:29});

result = await instance.withdraw(764317);
});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[3],value:24});

result = await instance.withdraw(560913);
});
it('test 43',async() => {
await instance.sendTransaction({from:accounts[7],value:18});

result = await instance.withdraw(314525);
});
it('test 44',async() => {
result = await instance.withdraw(829240);
await instance.sendTransaction({from:accounts[6],value:16});

});
it('test 45',async() => {
result = await instance.withdraw(789061);
await instance.sendTransaction({from:accounts[2],value:21});

});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[6],value:63});

result = await instance.withdraw(972867);
});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[1],value:7});

result = await instance.withdraw(227347);
});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[1],value:83});

result = await instance.withdraw(144699);
});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[4],value:19});

result = await instance.withdraw(504119);
});
});
