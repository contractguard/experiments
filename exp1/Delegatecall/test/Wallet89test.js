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
await instance.sendTransaction({from:accounts[1],value:63});

result = await instance.withdraw(157684);
});
it('test 1',async() => {
result = await instance.withdraw(193533);
await instance.sendTransaction({from:accounts[4],value:71});

});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[2],value:92});

result = await instance.withdraw(45609);
});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[2],value:4});

result = await instance.withdraw(202501);
});
it('test 4',async() => {
result = await instance.withdraw(833241);
await instance.sendTransaction({from:accounts[6],value:69});

});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[3],value:8});

result = await instance.withdraw(954470);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[8],value:23});

result = await instance.withdraw(15276);
});
it('test 7',async() => {
result = await instance.withdraw(741736);
await instance.sendTransaction({from:accounts[7],value:69});

});
it('test 8',async() => {
result = await instance.withdraw(162266);
await instance.sendTransaction({from:accounts[6],value:81});

});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[8],value:38});

result = await instance.withdraw(468277);
});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[9],value:11});

result = await instance.withdraw(444594);
});
it('test 11',async() => {
result = await instance.withdraw(657377);
await instance.sendTransaction({from:accounts[2],value:8});

});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[2],value:14});

result = await instance.withdraw(225641);
});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[4],value:40});

result = await instance.withdraw(774184);
});
it('test 14',async() => {
result = await instance.withdraw(546308);
await instance.sendTransaction({from:accounts[6],value:98});

});
it('test 15',async() => {
result = await instance.withdraw(767842);
await instance.sendTransaction({from:accounts[6],value:33});

});
it('test 16',async() => {
result = await instance.withdraw(393420);
await instance.sendTransaction({from:accounts[1],value:99});

});
it('test 17',async() => {
result = await instance.withdraw(558994);
await instance.sendTransaction({from:accounts[4],value:85});

});
it('test 18',async() => {
result = await instance.withdraw(783090);
await instance.sendTransaction({from:accounts[3],value:52});

});
it('test 19',async() => {
result = await instance.withdraw(625441);
await instance.sendTransaction({from:accounts[2],value:58});

});
it('test 20',async() => {
result = await instance.withdraw(920575);
await instance.sendTransaction({from:accounts[8],value:64});

});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[4],value:54});

result = await instance.withdraw(8472);
});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[1],value:56});

result = await instance.withdraw(640839);
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[8],value:50});

result = await instance.withdraw(987181);
});
it('test 24',async() => {
result = await instance.withdraw(179999);
await instance.sendTransaction({from:accounts[6],value:12});

});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[6],value:15});

result = await instance.withdraw(16520);
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[8],value:75});

result = await instance.withdraw(92894);
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[9],value:20});

result = await instance.withdraw(58370);
});
it('test 28',async() => {
result = await instance.withdraw(375402);
await instance.sendTransaction({from:accounts[8],value:72});

});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[1],value:16});

result = await instance.withdraw(420412);
});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[8],value:19});

result = await instance.withdraw(1015635);
});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[5],value:94});

result = await instance.withdraw(40204);
});
it('test 32',async() => {
result = await instance.withdraw(868270);
await instance.sendTransaction({from:accounts[6],value:34});

});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[4],value:25});

result = await instance.withdraw(384767);
});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[7],value:57});

result = await instance.withdraw(619614);
});
it('test 35',async() => {
result = await instance.withdraw(43244);
await instance.sendTransaction({from:accounts[3],value:16});

});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[7],value:100});

result = await instance.withdraw(1002028);
});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[9],value:3});

result = await instance.withdraw(796364);
});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[1],value:30});

result = await instance.withdraw(9642);
});
it('test 39',async() => {
result = await instance.withdraw(895030);
await instance.sendTransaction({from:accounts[8],value:51});

});
it('test 40',async() => {
await instance.sendTransaction({from:accounts[1],value:71});

result = await instance.withdraw(387057);
});
it('test 41',async() => {
result = await instance.withdraw(51613);
await instance.sendTransaction({from:accounts[8],value:69});

});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[6],value:96});

result = await instance.withdraw(695347);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 43',async() => {
await instance.sendTransaction({from:accounts[8],value:14});

result = await instance.withdraw(655417);
});
it('test 44',async() => {
result = await instance.withdraw(659889);
await instance.sendTransaction({from:accounts[7],value:52});

});
it('test 45',async() => {
result = await instance.withdraw(517033);
await instance.sendTransaction({from:accounts[2],value:70});

});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[9],value:26});

result = await instance.withdraw(277852);
});
it('test 47',async() => {
result = await instance.withdraw(88323);
await instance.sendTransaction({from:accounts[3],value:34});

});
it('test 48',async() => {
result = await instance.withdraw(742050);
await instance.sendTransaction({from:accounts[5],value:28});

});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[3],value:24});

result = await instance.withdraw(756389);
});
});
