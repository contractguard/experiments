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
result = await instance.withdraw(356640);
await instance.sendTransaction({from:accounts[1],value:33});

});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[3],value:6});

result = await instance.withdraw(722819);
});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[3],value:68});

result = await instance.withdraw(617972);
});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[2],value:53});

result = await instance.withdraw(635667);
});
it('test 4',async() => {
result = await instance.withdraw(343569);
await instance.sendTransaction({from:accounts[6],value:5});

});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[7],value:49});

result = await instance.withdraw(397558);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[1],value:49});

result = await instance.withdraw(865633);
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[4],value:54});

result = await instance.withdraw(570105);
});
it('test 8',async() => {
result = await instance.withdraw(983238);
await instance.sendTransaction({from:accounts[9],value:74});

});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[4],value:28});

result = await instance.withdraw(784708);
});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[9],value:71});

result = await instance.withdraw(603748);
});
it('test 11',async() => {
result = await instance.withdraw(692603);
await instance.sendTransaction({from:accounts[3],value:1});

});
it('test 12',async() => {
result = await instance.withdraw(103672);
await instance.sendTransaction({from:accounts[6],value:22});

});
it('test 13',async() => {
result = await instance.withdraw(302407);
await instance.sendTransaction({from:accounts[2],value:28});

});
it('test 14',async() => {
result = await instance.withdraw(47840);
await instance.sendTransaction({from:accounts[3],value:38});

});
it('test 15',async() => {
result = await instance.withdraw(514453);
await instance.sendTransaction({from:accounts[7],value:88});

});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[6],value:9});

result = await instance.withdraw(362618);
});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[2],value:90});

result = await instance.withdraw(357761);
});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[4],value:72});

result = await instance.withdraw(785841);
});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[8],value:60});

result = await instance.withdraw(796064);
});
it('test 20',async() => {
result = await instance.withdraw(685512);
await instance.sendTransaction({from:accounts[3],value:69});

});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[4],value:53});

result = await instance.withdraw(833701);
});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[1],value:48});

result = await instance.withdraw(797057);
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[7],value:16});

result = await instance.withdraw(813640);
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[6],value:14});

result = await instance.withdraw(356303);
});
it('test 25',async() => {
result = await instance.withdraw(821384);
await instance.sendTransaction({from:accounts[5],value:73});

});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[6],value:55});

result = await instance.withdraw(607971);
});
it('test 27',async() => {
result = await instance.withdraw(617498);
await instance.sendTransaction({from:accounts[1],value:78});

});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[5],value:87});

result = await instance.withdraw(1029907);
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[4],value:98});

result = await instance.withdraw(713142);
});
it('test 30',async() => {
result = await instance.withdraw(831905);
await instance.sendTransaction({from:accounts[7],value:52});

});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[7],value:11});

result = await instance.withdraw(308561);
});
it('test 32',async() => {
result = await instance.withdraw(715191);
await instance.sendTransaction({from:accounts[4],value:43});

});
it('test 33',async() => {
result = await instance.withdraw(359382);
await instance.sendTransaction({from:accounts[5],value:89});

});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[5],value:72});

result = await instance.withdraw(766322);
});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[1],value:46});

result = await instance.withdraw(308853);
});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[5],value:82});

result = await instance.withdraw(931546);
});
it('test 37',async() => {
result = await instance.withdraw(820412);
await instance.sendTransaction({from:accounts[4],value:62});

});
it('test 38',async() => {
result = await instance.withdraw(619342);
await instance.sendTransaction({from:accounts[5],value:44});

});
it('test 39',async() => {
result = await instance.withdraw(946559);
await instance.sendTransaction({from:accounts[9],value:10});

});
it('test 40',async() => {
result = await instance.withdraw(767763);
await instance.sendTransaction({from:accounts[5],value:41});

});
it('test 41',async() => {
result = await instance.withdraw(151812);
await instance.sendTransaction({from:accounts[4],value:26});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 42',async() => {
result = await instance.withdraw(460835);
await instance.sendTransaction({from:accounts[9],value:97});

});
it('test 43',async() => {
await instance.sendTransaction({from:accounts[5],value:40});

result = await instance.withdraw(308089);
});
it('test 44',async() => {
result = await instance.withdraw(523308);
await instance.sendTransaction({from:accounts[3],value:4});

});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[8],value:25});

result = await instance.withdraw(452308);
});
it('test 46',async() => {
result = await instance.withdraw(153751);
await instance.sendTransaction({from:accounts[7],value:85});

});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[5],value:96});

result = await instance.withdraw(844707);
});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[3],value:63});

result = await instance.withdraw(995826);
});
it('test 49',async() => {
result = await instance.withdraw(468583);
await instance.sendTransaction({from:accounts[1],value:45});

});
});
