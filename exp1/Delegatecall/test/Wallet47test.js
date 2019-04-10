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
result = await instance.withdraw(10066);
await instance.sendTransaction({from:accounts[3],value:99});

});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[4],value:13});

result = await instance.withdraw(383488);
});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[8],value:15});

result = await instance.withdraw(771755);
});
it('test 3',async() => {
result = await instance.withdraw(669943);
await instance.sendTransaction({from:accounts[6],value:40});

});
it('test 4',async() => {
result = await instance.withdraw(549747);
await instance.sendTransaction({from:accounts[3],value:1});

});
it('test 5',async() => {
result = await instance.withdraw(82845);
await instance.sendTransaction({from:accounts[9],value:16});

});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[8],value:35});

result = await instance.withdraw(837752);
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[4],value:54});

result = await instance.withdraw(895744);
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[2],value:96});

result = await instance.withdraw(38163);
});
it('test 9',async() => {
result = await instance.withdraw(964548);
await instance.sendTransaction({from:accounts[8],value:58});

});
it('test 10',async() => {
result = await instance.withdraw(616697);
await instance.sendTransaction({from:accounts[7],value:85});

});
it('test 11',async() => {
result = await instance.withdraw(374127);
await instance.sendTransaction({from:accounts[5],value:45});

});
it('test 12',async() => {
result = await instance.withdraw(790578);
await instance.sendTransaction({from:accounts[4],value:33});

});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[6],value:78});

result = await instance.withdraw(31379);
});
it('test 14',async() => {
result = await instance.withdraw(388557);
await instance.sendTransaction({from:accounts[1],value:10});

});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[5],value:60});

result = await instance.withdraw(417744);
});
it('test 16',async() => {
result = await instance.withdraw(663621);
await instance.sendTransaction({from:accounts[7],value:22});

});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[3],value:70});

result = await instance.withdraw(906116);
});
it('test 18',async() => {
result = await instance.withdraw(949259);
await instance.sendTransaction({from:accounts[7],value:52});

});
it('test 19',async() => {
result = await instance.withdraw(612325);
await instance.sendTransaction({from:accounts[3],value:86});

});
it('test 20',async() => {
result = await instance.withdraw(161765);
await instance.sendTransaction({from:accounts[1],value:61});

});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[7],value:49});

result = await instance.withdraw(786277);
});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[1],value:30});

result = await instance.withdraw(791647);
});
it('test 23',async() => {
result = await instance.withdraw(1029333);
await instance.sendTransaction({from:accounts[9],value:9});

});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[6],value:75});

result = await instance.withdraw(691600);
});
it('test 25',async() => {
result = await instance.withdraw(571378);
await instance.sendTransaction({from:accounts[8],value:10});

});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[5],value:45});

result = await instance.withdraw(1007004);
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[5],value:31});

result = await instance.withdraw(930909);
});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[5],value:63});

result = await instance.withdraw(231199);
});
it('test 29',async() => {
result = await instance.withdraw(338255);
await instance.sendTransaction({from:accounts[4],value:76});

});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[5],value:60});

result = await instance.withdraw(961129);
});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[2],value:6});

result = await instance.withdraw(366514);
});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[4],value:87});

result = await instance.withdraw(299982);
});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[2],value:18});

result = await instance.withdraw(930547);
});
it('test 34',async() => {
result = await instance.withdraw(484280);
await instance.sendTransaction({from:accounts[4],value:85});

});
it('test 35',async() => {
result = await instance.withdraw(753214);
await instance.sendTransaction({from:accounts[8],value:28});

});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[6],value:69});

result = await instance.withdraw(169506);
});
it('test 37',async() => {
result = await instance.withdraw(479806);
await instance.sendTransaction({from:accounts[1],value:94});

});
it('test 38',async() => {
result = await instance.withdraw(650649);
await instance.sendTransaction({from:accounts[9],value:20});

});
it('test 39',async() => {
result = await instance.withdraw(744532);
await instance.sendTransaction({from:accounts[4],value:47});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 40',async() => {
result = await instance.withdraw(15038);
await instance.sendTransaction({from:accounts[8],value:89});

});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[4],value:91});

result = await instance.withdraw(767234);
});
it('test 42',async() => {
result = await instance.withdraw(169214);
await instance.sendTransaction({from:accounts[8],value:81});

});
it('test 43',async() => {
await instance.sendTransaction({from:accounts[6],value:13});

result = await instance.withdraw(952053);
});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[8],value:60});

result = await instance.withdraw(504172);
});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[2],value:30});

result = await instance.withdraw(520395);
});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[3],value:82});

result = await instance.withdraw(254002);
});
it('test 47',async() => {
result = await instance.withdraw(593036);
await instance.sendTransaction({from:accounts[4],value:11});

});
it('test 48',async() => {
result = await instance.withdraw(79213);
await instance.sendTransaction({from:accounts[8],value:31});

});
it('test 49',async() => {
result = await instance.withdraw(300770);
await instance.sendTransaction({from:accounts[7],value:40});

});
});
