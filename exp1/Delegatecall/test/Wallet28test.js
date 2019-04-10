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
await instance.sendTransaction({from:accounts[3],value:2});

result = await instance.withdraw(496873);
});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[4],value:4});

result = await instance.withdraw(750763);
});
it('test 2',async() => {
result = await instance.withdraw(586725);
await instance.sendTransaction({from:accounts[8],value:24});

});
it('test 3',async() => {
result = await instance.withdraw(349946);
await instance.sendTransaction({from:accounts[4],value:84});

});
it('test 4',async() => {
result = await instance.withdraw(428329);
await instance.sendTransaction({from:accounts[7],value:64});

});
it('test 5',async() => {
result = await instance.withdraw(995480);
await instance.sendTransaction({from:accounts[9],value:88});

});
it('test 6',async() => {
result = await instance.withdraw(267025);
await instance.sendTransaction({from:accounts[4],value:91});

});
it('test 7',async() => {
result = await instance.withdraw(78860);
await instance.sendTransaction({from:accounts[7],value:76});

});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[6],value:44});

result = await instance.withdraw(997938);
});
it('test 9',async() => {
result = await instance.withdraw(454855);
await instance.sendTransaction({from:accounts[3],value:24});

});
it('test 10',async() => {
result = await instance.withdraw(332807);
await instance.sendTransaction({from:accounts[6],value:85});

});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[9],value:78});

result = await instance.withdraw(627506);
});
it('test 12',async() => {
result = await instance.withdraw(331024);
await instance.sendTransaction({from:accounts[2],value:49});

});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[2],value:60});

result = await instance.withdraw(418031);
});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[1],value:93});

result = await instance.withdraw(631451);
});
it('test 15',async() => {
result = await instance.withdraw(682305);
await instance.sendTransaction({from:accounts[8],value:31});

});
it('test 16',async() => {
result = await instance.withdraw(29082);
await instance.sendTransaction({from:accounts[1],value:42});

});
it('test 17',async() => {
result = await instance.withdraw(127944);
await instance.sendTransaction({from:accounts[2],value:99});

});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[1],value:96});

result = await instance.withdraw(844126);
});
it('test 19',async() => {
result = await instance.withdraw(233363);
await instance.sendTransaction({from:accounts[7],value:68});

});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[5],value:75});

result = await instance.withdraw(811346);
});
it('test 21',async() => {
result = await instance.withdraw(367566);
await instance.sendTransaction({from:accounts[7],value:74});

});
it('test 22',async() => {
result = await instance.withdraw(1047405);
await instance.sendTransaction({from:accounts[8],value:50});

});
it('test 23',async() => {
result = await instance.withdraw(130627);
await instance.sendTransaction({from:accounts[1],value:63});

});
it('test 24',async() => {
result = await instance.withdraw(321946);
await instance.sendTransaction({from:accounts[5],value:67});

});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[3],value:26});

result = await instance.withdraw(769740);
});
it('test 26',async() => {
result = await instance.withdraw(461546);
await instance.sendTransaction({from:accounts[7],value:36});

});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[3],value:32});

result = await instance.withdraw(839231);
});
it('test 28',async() => {
result = await instance.withdraw(752363);
await instance.sendTransaction({from:accounts[8],value:49});

});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[2],value:31});

result = await instance.withdraw(335800);
});
it('test 30',async() => {
result = await instance.withdraw(887860);
await instance.sendTransaction({from:accounts[3],value:8});

});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[9],value:74});

result = await instance.withdraw(380733);
});
it('test 32',async() => {
result = await instance.withdraw(32660);
await instance.sendTransaction({from:accounts[8],value:96});

});
it('test 33',async() => {
result = await instance.withdraw(597613);
await instance.sendTransaction({from:accounts[2],value:70});

});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[1],value:15});

result = await instance.withdraw(499712);
});
it('test 35',async() => {
result = await instance.withdraw(147141);
await instance.sendTransaction({from:accounts[3],value:14});

});
it('test 36',async() => {
result = await instance.withdraw(796109);
await instance.sendTransaction({from:accounts[6],value:80});

});
it('test 37',async() => {
result = await instance.withdraw(546002);
await instance.sendTransaction({from:accounts[1],value:53});

});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[2],value:20});

result = await instance.withdraw(819088);
});
it('test 39',async() => {
result = await instance.withdraw(570296);
await instance.sendTransaction({from:accounts[3],value:97});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 40',async() => {
await instance.sendTransaction({from:accounts[6],value:96});

result = await instance.withdraw(788676);
});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[7],value:28});

result = await instance.withdraw(111541);
});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[6],value:8});

result = await instance.withdraw(672576);
});
it('test 43',async() => {
result = await instance.withdraw(382186);
await instance.sendTransaction({from:accounts[5],value:58});

});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[3],value:72});

result = await instance.withdraw(95608);
});
it('test 45',async() => {
result = await instance.withdraw(55147);
await instance.sendTransaction({from:accounts[3],value:39});

});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[2],value:91});

result = await instance.withdraw(748684);
});
it('test 47',async() => {
result = await instance.withdraw(711310);
await instance.sendTransaction({from:accounts[9],value:64});

});
it('test 48',async() => {
result = await instance.withdraw(474025);
await instance.sendTransaction({from:accounts[5],value:66});

});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[9],value:3});

result = await instance.withdraw(944619);
});
});
