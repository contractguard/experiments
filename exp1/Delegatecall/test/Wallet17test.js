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
result = await instance.withdraw(734259);
await instance.sendTransaction({from:accounts[8],value:2});

});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[1],value:97});

result = await instance.withdraw(920614);
});
it('test 2',async() => {
result = await instance.withdraw(707122);
await instance.sendTransaction({from:accounts[2],value:87});

});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[4],value:17});

result = await instance.withdraw(449671);
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[9],value:57});

result = await instance.withdraw(852204);
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[6],value:18});

result = await instance.withdraw(581601);
});
it('test 6',async() => {
result = await instance.withdraw(533134);
await instance.sendTransaction({from:accounts[5],value:68});

});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[3],value:15});

result = await instance.withdraw(81117);
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[1],value:80});

result = await instance.withdraw(308672);
});
it('test 9',async() => {
result = await instance.withdraw(406417);
await instance.sendTransaction({from:accounts[6],value:26});

});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[2],value:24});

result = await instance.withdraw(537249);
});
it('test 11',async() => {
result = await instance.withdraw(95171);
await instance.sendTransaction({from:accounts[9],value:70});

});
it('test 12',async() => {
result = await instance.withdraw(400964);
await instance.sendTransaction({from:accounts[7],value:27});

});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[6],value:72});

result = await instance.withdraw(323764);
});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[5],value:3});

result = await instance.withdraw(821698);
});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[7],value:87});

result = await instance.withdraw(789609);
});
it('test 16',async() => {
result = await instance.withdraw(728909);
await instance.sendTransaction({from:accounts[5],value:98});

});
it('test 17',async() => {
result = await instance.withdraw(659393);
await instance.sendTransaction({from:accounts[4],value:23});

});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[4],value:63});

result = await instance.withdraw(438043);
});
it('test 19',async() => {
result = await instance.withdraw(348128);
await instance.sendTransaction({from:accounts[9],value:21});

});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[4],value:38});

result = await instance.withdraw(1004073);
});
it('test 21',async() => {
result = await instance.withdraw(404038);
await instance.sendTransaction({from:accounts[9],value:8});

});
it('test 22',async() => {
result = await instance.withdraw(491648);
await instance.sendTransaction({from:accounts[4],value:15});

});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[5],value:2});

result = await instance.withdraw(613054);
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[9],value:96});

result = await instance.withdraw(1005987);
});
it('test 25',async() => {
result = await instance.withdraw(945524);
await instance.sendTransaction({from:accounts[8],value:25});

});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[5],value:67});

result = await instance.withdraw(365745);
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[4],value:31});

result = await instance.withdraw(366663);
});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[5],value:17});

result = await instance.withdraw(823580);
});
it('test 29',async() => {
result = await instance.withdraw(191794);
await instance.sendTransaction({from:accounts[3],value:56});

});
it('test 30',async() => {
result = await instance.withdraw(538983);
await instance.sendTransaction({from:accounts[1],value:87});

});
it('test 31',async() => {
result = await instance.withdraw(719689);
await instance.sendTransaction({from:accounts[1],value:3});

});
it('test 32',async() => {
result = await instance.withdraw(608734);
await instance.sendTransaction({from:accounts[3],value:98});

});
it('test 33',async() => {
result = await instance.withdraw(836709);
await instance.sendTransaction({from:accounts[1],value:11});

});
it('test 34',async() => {
result = await instance.withdraw(598163);
await instance.sendTransaction({from:accounts[6],value:7});

});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[2],value:74});

result = await instance.withdraw(178552);
});
it('test 36',async() => {
result = await instance.withdraw(204041);
await instance.sendTransaction({from:accounts[5],value:7});

});
it('test 37',async() => {
result = await instance.withdraw(89429);
await instance.sendTransaction({from:accounts[9],value:48});

});
it('test 38',async() => {
result = await instance.withdraw(550616);
await instance.sendTransaction({from:accounts[6],value:61});

});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[9],value:43});

result = await instance.withdraw(25752);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 40',async() => {
result = await instance.withdraw(91219);
await instance.sendTransaction({from:accounts[2],value:5});

});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[5],value:33});

result = await instance.withdraw(856887);
});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[4],value:10});

result = await instance.withdraw(497339);
});
it('test 43',async() => {
result = await instance.withdraw(159518);
await instance.sendTransaction({from:accounts[7],value:41});

});
it('test 44',async() => {
result = await instance.withdraw(647601);
await instance.sendTransaction({from:accounts[5],value:41});

});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[3],value:12});

result = await instance.withdraw(135811);
});
it('test 46',async() => {
result = await instance.withdraw(644212);
await instance.sendTransaction({from:accounts[5],value:93});

});
it('test 47',async() => {
result = await instance.withdraw(250501);
await instance.sendTransaction({from:accounts[7],value:100});

});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[9],value:20});

result = await instance.withdraw(210832);
});
it('test 49',async() => {
result = await instance.withdraw(974548);
await instance.sendTransaction({from:accounts[7],value:2});

});
});
