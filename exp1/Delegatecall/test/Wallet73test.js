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
await instance.sendTransaction({from:accounts[7],value:71});

result = await instance.withdraw(41431);
});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[1],value:97});

result = await instance.withdraw(870006);
});
it('test 2',async() => {
result = await instance.withdraw(618185);
await instance.sendTransaction({from:accounts[3],value:66});

});
it('test 3',async() => {
result = await instance.withdraw(77935);
await instance.sendTransaction({from:accounts[4],value:69});

});
it('test 4',async() => {
result = await instance.withdraw(177976);
await instance.sendTransaction({from:accounts[4],value:94});

});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[6],value:100});

result = await instance.withdraw(877388);
});
it('test 6',async() => {
result = await instance.withdraw(539180);
await instance.sendTransaction({from:accounts[9],value:67});

});
it('test 7',async() => {
result = await instance.withdraw(245967);
await instance.sendTransaction({from:accounts[5],value:90});

});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[9],value:10});

result = await instance.withdraw(741327);
});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[5],value:59});

result = await instance.withdraw(592310);
});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[7],value:35});

result = await instance.withdraw(50261);
});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[4],value:100});

result = await instance.withdraw(975203);
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[4],value:24});

result = await instance.withdraw(1032308);
});
it('test 13',async() => {
result = await instance.withdraw(571804);
await instance.sendTransaction({from:accounts[3],value:6});

});
it('test 14',async() => {
result = await instance.withdraw(360681);
await instance.sendTransaction({from:accounts[1],value:2});

});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[7],value:79});

result = await instance.withdraw(167313);
});
it('test 16',async() => {
result = await instance.withdraw(713619);
await instance.sendTransaction({from:accounts[7],value:23});

});
it('test 17',async() => {
result = await instance.withdraw(306151);
await instance.sendTransaction({from:accounts[6],value:7});

});
it('test 18',async() => {
result = await instance.withdraw(889070);
await instance.sendTransaction({from:accounts[3],value:37});

});
it('test 19',async() => {
result = await instance.withdraw(603039);
await instance.sendTransaction({from:accounts[6],value:13});

});
it('test 20',async() => {
result = await instance.withdraw(659521);
await instance.sendTransaction({from:accounts[1],value:48});

});
it('test 21',async() => {
result = await instance.withdraw(670816);
await instance.sendTransaction({from:accounts[3],value:67});

});
it('test 22',async() => {
result = await instance.withdraw(1014048);
await instance.sendTransaction({from:accounts[6],value:91});

});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[6],value:30});

result = await instance.withdraw(332629);
});
it('test 24',async() => {
result = await instance.withdraw(86809);
await instance.sendTransaction({from:accounts[9],value:89});

});
it('test 25',async() => {
result = await instance.withdraw(489572);
await instance.sendTransaction({from:accounts[4],value:59});

});
it('test 26',async() => {
result = await instance.withdraw(5140);
await instance.sendTransaction({from:accounts[8],value:49});

});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[1],value:6});

result = await instance.withdraw(264214);
});
it('test 28',async() => {
result = await instance.withdraw(141661);
await instance.sendTransaction({from:accounts[9],value:34});

});
it('test 29',async() => {
result = await instance.withdraw(667785);
await instance.sendTransaction({from:accounts[9],value:16});

});
it('test 30',async() => {
result = await instance.withdraw(996185);
await instance.sendTransaction({from:accounts[7],value:37});

});
it('test 31',async() => {
result = await instance.withdraw(811015);
await instance.sendTransaction({from:accounts[5],value:59});

});
it('test 32',async() => {
result = await instance.withdraw(380957);
await instance.sendTransaction({from:accounts[6],value:3});

});
it('test 33',async() => {
result = await instance.withdraw(950081);
await instance.sendTransaction({from:accounts[8],value:49});

});
it('test 34',async() => {
result = await instance.withdraw(284064);
await instance.sendTransaction({from:accounts[6],value:15});

});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[4],value:32});

result = await instance.withdraw(402811);
});
it('test 36',async() => {
result = await instance.withdraw(151373);
await instance.sendTransaction({from:accounts[3],value:68});

});
it('test 37',async() => {
result = await instance.withdraw(398318);
await instance.sendTransaction({from:accounts[2],value:43});

});
it('test 38',async() => {
result = await instance.withdraw(714066);
await instance.sendTransaction({from:accounts[3],value:22});

});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[8],value:85});

result = await instance.withdraw(213004);
});
it('test 40',async() => {
result = await instance.withdraw(157370);
await instance.sendTransaction({from:accounts[2],value:84});

});
it('test 41',async() => {
result = await instance.withdraw(806627);
await instance.sendTransaction({from:accounts[8],value:25});

});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[7],value:86});

result = await instance.withdraw(666397);
});
it('test 43',async() => {
await instance.sendTransaction({from:accounts[6],value:26});

result = await instance.withdraw(464583);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 44',async() => {
result = await instance.withdraw(597186);
await instance.sendTransaction({from:accounts[1],value:77});

});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[9],value:47});

result = await instance.withdraw(636188);
});
it('test 46',async() => {
result = await instance.withdraw(432537);
await instance.sendTransaction({from:accounts[1],value:59});

});
it('test 47',async() => {
result = await instance.withdraw(93961);
await instance.sendTransaction({from:accounts[3],value:40});

});
it('test 48',async() => {
result = await instance.withdraw(1025561);
await instance.sendTransaction({from:accounts[2],value:58});

});
it('test 49',async() => {
result = await instance.withdraw(299176);
await instance.sendTransaction({from:accounts[7],value:95});

});
});
