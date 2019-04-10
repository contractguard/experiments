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
result = await instance.withdraw(203511);
await instance.sendTransaction({from:accounts[9],value:40});

});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[9],value:40});

result = await instance.withdraw(876770);
});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[4],value:6});

result = await instance.withdraw(56938);
});
it('test 3',async() => {
result = await instance.withdraw(41763);
await instance.sendTransaction({from:accounts[8],value:35});

});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[3],value:46});

result = await instance.withdraw(701060);
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[4],value:15});

result = await instance.withdraw(1000238);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[3],value:80});

result = await instance.withdraw(372923);
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[5],value:32});

result = await instance.withdraw(452721);
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[2],value:29});

result = await instance.withdraw(566283);
});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[7],value:54});

result = await instance.withdraw(412197);
});
it('test 10',async() => {
result = await instance.withdraw(429668);
await instance.sendTransaction({from:accounts[6],value:91});

});
it('test 11',async() => {
result = await instance.withdraw(938029);
await instance.sendTransaction({from:accounts[9],value:54});

});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[5],value:70});

result = await instance.withdraw(582232);
});
it('test 13',async() => {
result = await instance.withdraw(823226);
await instance.sendTransaction({from:accounts[6],value:73});

});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[5],value:54});

result = await instance.withdraw(892889);
});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[2],value:57});

result = await instance.withdraw(119134);
});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[9],value:73});

result = await instance.withdraw(1019858);
});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[2],value:88});

result = await instance.withdraw(416259);
});
it('test 18',async() => {
result = await instance.withdraw(331044);
await instance.sendTransaction({from:accounts[3],value:5});

});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[5],value:28});

result = await instance.withdraw(277932);
});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[5],value:100});

result = await instance.withdraw(360418);
});
it('test 21',async() => {
result = await instance.withdraw(498903);
await instance.sendTransaction({from:accounts[1],value:15});

});
it('test 22',async() => {
result = await instance.withdraw(642857);
await instance.sendTransaction({from:accounts[4],value:37});

});
it('test 23',async() => {
result = await instance.withdraw(193617);
await instance.sendTransaction({from:accounts[9],value:42});

});
it('test 24',async() => {
result = await instance.withdraw(584455);
await instance.sendTransaction({from:accounts[7],value:92});

});
it('test 25',async() => {
result = await instance.withdraw(477828);
await instance.sendTransaction({from:accounts[9],value:36});

});
it('test 26',async() => {
result = await instance.withdraw(1043523);
await instance.sendTransaction({from:accounts[3],value:96});

});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[7],value:23});

result = await instance.withdraw(71598);
});
it('test 28',async() => {
result = await instance.withdraw(86123);
await instance.sendTransaction({from:accounts[5],value:51});

});
it('test 29',async() => {
result = await instance.withdraw(714081);
await instance.sendTransaction({from:accounts[8],value:86});

});
it('test 30',async() => {
result = await instance.withdraw(937493);
await instance.sendTransaction({from:accounts[5],value:40});

});
it('test 31',async() => {
result = await instance.withdraw(415888);
await instance.sendTransaction({from:accounts[9],value:77});

});
it('test 32',async() => {
result = await instance.withdraw(445156);
await instance.sendTransaction({from:accounts[8],value:4});

});
it('test 33',async() => {
result = await instance.withdraw(967198);
await instance.sendTransaction({from:accounts[3],value:10});

});
it('test 34',async() => {
result = await instance.withdraw(153687);
await instance.sendTransaction({from:accounts[9],value:83});

});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[8],value:28});

result = await instance.withdraw(897137);
});
it('test 36',async() => {
result = await instance.withdraw(545471);
await instance.sendTransaction({from:accounts[6],value:39});

});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[8],value:24});

result = await instance.withdraw(284248);
});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[8],value:98});

result = await instance.withdraw(1044864);
});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[8],value:47});

result = await instance.withdraw(938045);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 40',async() => {
await instance.sendTransaction({from:accounts[9],value:81});

result = await instance.withdraw(492864);
});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[5],value:19});

result = await instance.withdraw(365056);
});
it('test 42',async() => {
result = await instance.withdraw(197965);
await instance.sendTransaction({from:accounts[6],value:19});

});
it('test 43',async() => {
result = await instance.withdraw(489342);
await instance.sendTransaction({from:accounts[4],value:81});

});
it('test 44',async() => {
result = await instance.withdraw(309532);
await instance.sendTransaction({from:accounts[9],value:12});

});
it('test 45',async() => {
result = await instance.withdraw(616040);
await instance.sendTransaction({from:accounts[4],value:30});

});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[7],value:49});

result = await instance.withdraw(394774);
});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[1],value:99});

result = await instance.withdraw(412431);
});
it('test 48',async() => {
result = await instance.withdraw(467286);
await instance.sendTransaction({from:accounts[2],value:60});

});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[2],value:61});

result = await instance.withdraw(347127);
});
});
