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
await instance.sendTransaction({from:accounts[4],value:77});

result = await instance.withdraw(60102);
});
it('test 1',async() => {
result = await instance.withdraw(487081);
await instance.sendTransaction({from:accounts[6],value:84});

});
it('test 2',async() => {
result = await instance.withdraw(962620);
await instance.sendTransaction({from:accounts[2],value:12});

});
it('test 3',async() => {
result = await instance.withdraw(489392);
await instance.sendTransaction({from:accounts[9],value:8});

});
it('test 4',async() => {
result = await instance.withdraw(836899);
await instance.sendTransaction({from:accounts[5],value:56});

});
it('test 5',async() => {
result = await instance.withdraw(184465);
await instance.sendTransaction({from:accounts[6],value:25});

});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[2],value:96});

result = await instance.withdraw(30609);
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[5],value:13});

result = await instance.withdraw(562305);
});
it('test 8',async() => {
result = await instance.withdraw(329137);
await instance.sendTransaction({from:accounts[7],value:26});

});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[9],value:31});

result = await instance.withdraw(214327);
});
it('test 10',async() => {
result = await instance.withdraw(601877);
await instance.sendTransaction({from:accounts[7],value:38});

});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[9],value:60});

result = await instance.withdraw(899167);
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[8],value:68});

result = await instance.withdraw(447289);
});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[2],value:45});

result = await instance.withdraw(33927);
});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[2],value:65});

result = await instance.withdraw(240645);
});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[4],value:56});

result = await instance.withdraw(871113);
});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[4],value:30});

result = await instance.withdraw(968356);
});
it('test 17',async() => {
result = await instance.withdraw(971008);
await instance.sendTransaction({from:accounts[5],value:91});

});
it('test 18',async() => {
result = await instance.withdraw(412161);
await instance.sendTransaction({from:accounts[5],value:7});

});
it('test 19',async() => {
result = await instance.withdraw(115426);
await instance.sendTransaction({from:accounts[6],value:94});

});
it('test 20',async() => {
result = await instance.withdraw(981647);
await instance.sendTransaction({from:accounts[1],value:74});

});
it('test 21',async() => {
result = await instance.withdraw(393393);
await instance.sendTransaction({from:accounts[6],value:36});

});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[7],value:43});

result = await instance.withdraw(883340);
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[3],value:66});

result = await instance.withdraw(791217);
});
it('test 24',async() => {
result = await instance.withdraw(263372);
await instance.sendTransaction({from:accounts[8],value:93});

});
it('test 25',async() => {
result = await instance.withdraw(685504);
await instance.sendTransaction({from:accounts[4],value:39});

});
it('test 26',async() => {
result = await instance.withdraw(732689);
await instance.sendTransaction({from:accounts[6],value:20});

});
it('test 27',async() => {
result = await instance.withdraw(933468);
await instance.sendTransaction({from:accounts[3],value:18});

});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[4],value:34});

result = await instance.withdraw(524493);
});
it('test 29',async() => {
result = await instance.withdraw(751721);
await instance.sendTransaction({from:accounts[8],value:33});

});
it('test 30',async() => {
result = await instance.withdraw(942440);
await instance.sendTransaction({from:accounts[5],value:35});

});
it('test 31',async() => {
result = await instance.withdraw(374402);
await instance.sendTransaction({from:accounts[5],value:12});

});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[8],value:1});

result = await instance.withdraw(297850);
});
it('test 33',async() => {
result = await instance.withdraw(224501);
await instance.sendTransaction({from:accounts[7],value:87});

});
it('test 34',async() => {
result = await instance.withdraw(623141);
await instance.sendTransaction({from:accounts[7],value:40});

});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[8],value:51});

result = await instance.withdraw(861383);
});
it('test 36',async() => {
result = await instance.withdraw(987762);
await instance.sendTransaction({from:accounts[9],value:11});

});
it('test 37',async() => {
result = await instance.withdraw(933988);
await instance.sendTransaction({from:accounts[7],value:89});

});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[5],value:40});

result = await instance.withdraw(8596);
});
it('test 39',async() => {
result = await instance.withdraw(735007);
await instance.sendTransaction({from:accounts[2],value:54});

});
it('test 40',async() => {
await instance.sendTransaction({from:accounts[7],value:96});

result = await instance.withdraw(853954);
});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[6],value:50});

result = await instance.withdraw(484347);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 42',async() => {
await instance.sendTransaction({from:accounts[8],value:55});

result = await instance.withdraw(600036);
});
it('test 43',async() => {
result = await instance.withdraw(566590);
await instance.sendTransaction({from:accounts[4],value:73});

});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[2],value:25});

result = await instance.withdraw(192498);
});
it('test 45',async() => {
result = await instance.withdraw(989680);
await instance.sendTransaction({from:accounts[6],value:43});

});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[3],value:77});

result = await instance.withdraw(492346);
});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[6],value:57});

result = await instance.withdraw(305274);
});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[7],value:97});

result = await instance.withdraw(25719);
});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[6],value:62});

result = await instance.withdraw(183698);
});
});
