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
result = await instance.withdraw(452040);
await instance.sendTransaction({from:accounts[9],value:65});

});
it('test 1',async() => {
result = await instance.withdraw(358252);
await instance.sendTransaction({from:accounts[2],value:1});

});
it('test 2',async() => {
result = await instance.withdraw(982288);
await instance.sendTransaction({from:accounts[7],value:19});

});
it('test 3',async() => {
result = await instance.withdraw(298977);
await instance.sendTransaction({from:accounts[1],value:38});

});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[2],value:86});

result = await instance.withdraw(336558);
});
it('test 5',async() => {
result = await instance.withdraw(689763);
await instance.sendTransaction({from:accounts[2],value:83});

});
it('test 6',async() => {
result = await instance.withdraw(476898);
await instance.sendTransaction({from:accounts[3],value:28});

});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[9],value:75});

result = await instance.withdraw(635630);
});
it('test 8',async() => {
result = await instance.withdraw(723080);
await instance.sendTransaction({from:accounts[9],value:28});

});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[2],value:3});

result = await instance.withdraw(306754);
});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[6],value:77});

result = await instance.withdraw(802783);
});
it('test 11',async() => {
result = await instance.withdraw(125181);
await instance.sendTransaction({from:accounts[8],value:20});

});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[7],value:10});

result = await instance.withdraw(951433);
});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[7],value:37});

result = await instance.withdraw(926328);
});
it('test 14',async() => {
result = await instance.withdraw(985303);
await instance.sendTransaction({from:accounts[6],value:64});

});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[7],value:51});

result = await instance.withdraw(889837);
});
it('test 16',async() => {
result = await instance.withdraw(637889);
await instance.sendTransaction({from:accounts[7],value:95});

});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[7],value:35});

result = await instance.withdraw(620202);
});
it('test 18',async() => {
result = await instance.withdraw(702269);
await instance.sendTransaction({from:accounts[4],value:82});

});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[2],value:12});

result = await instance.withdraw(379716);
});
it('test 20',async() => {
result = await instance.withdraw(135430);
await instance.sendTransaction({from:accounts[2],value:95});

});
it('test 21',async() => {
result = await instance.withdraw(594247);
await instance.sendTransaction({from:accounts[6],value:12});

});
it('test 22',async() => {
result = await instance.withdraw(496988);
await instance.sendTransaction({from:accounts[2],value:39});

});
it('test 23',async() => {
result = await instance.withdraw(687093);
await instance.sendTransaction({from:accounts[9],value:92});

});
it('test 24',async() => {
result = await instance.withdraw(461101);
await instance.sendTransaction({from:accounts[1],value:40});

});
it('test 25',async() => {
result = await instance.withdraw(889402);
await instance.sendTransaction({from:accounts[1],value:51});

});
it('test 26',async() => {
result = await instance.withdraw(628041);
await instance.sendTransaction({from:accounts[1],value:49});

});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[1],value:78});

result = await instance.withdraw(1003894);
});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[6],value:28});

result = await instance.withdraw(416983);
});
it('test 29',async() => {
result = await instance.withdraw(571582);
await instance.sendTransaction({from:accounts[9],value:50});

});
it('test 30',async() => {
result = await instance.withdraw(725339);
await instance.sendTransaction({from:accounts[6],value:54});

});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[1],value:2});

result = await instance.withdraw(202143);
});
it('test 32',async() => {
result = await instance.withdraw(469967);
await instance.sendTransaction({from:accounts[8],value:53});

});
it('test 33',async() => {
result = await instance.withdraw(704298);
await instance.sendTransaction({from:accounts[2],value:30});

});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[8],value:54});

result = await instance.withdraw(688701);
});
it('test 35',async() => {
result = await instance.withdraw(862304);
await instance.sendTransaction({from:accounts[4],value:77});

});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[1],value:12});

result = await instance.withdraw(929350);
});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[4],value:72});

result = await instance.withdraw(261575);
});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[7],value:83});

result = await instance.withdraw(261445);
});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[7],value:26});

result = await instance.withdraw(493288);
});
it('test 40',async() => {
await instance.sendTransaction({from:accounts[1],value:98});

result = await instance.withdraw(793551);
});
it('test 41',async() => {
result = await instance.withdraw(11976);
await instance.sendTransaction({from:accounts[1],value:74});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 42',async() => {
result = await instance.withdraw(968136);
await instance.sendTransaction({from:accounts[2],value:69});

});
it('test 43',async() => {
await instance.sendTransaction({from:accounts[4],value:65});

result = await instance.withdraw(223648);
});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[7],value:98});

result = await instance.withdraw(665453);
});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[5],value:91});

result = await instance.withdraw(457435);
});
it('test 46',async() => {
result = await instance.withdraw(750897);
await instance.sendTransaction({from:accounts[8],value:34});

});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[9],value:42});

result = await instance.withdraw(443106);
});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[9],value:62});

result = await instance.withdraw(367677);
});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[3],value:61});

result = await instance.withdraw(244326);
});
});
