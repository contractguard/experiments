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
await instance.sendTransaction({from:accounts[4],value:3});

result = await instance.withdraw(614152);
});
it('test 1',async() => {
result = await instance.withdraw(314734);
await instance.sendTransaction({from:accounts[1],value:23});

});
it('test 2',async() => {
result = await instance.withdraw(288091);
await instance.sendTransaction({from:accounts[2],value:14});

});
it('test 3',async() => {
result = await instance.withdraw(523754);
await instance.sendTransaction({from:accounts[8],value:51});

});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[6],value:89});

result = await instance.withdraw(918161);
});
it('test 5',async() => {
result = await instance.withdraw(474814);
await instance.sendTransaction({from:accounts[4],value:42});

});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[1],value:35});

result = await instance.withdraw(746121);
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[5],value:38});

result = await instance.withdraw(621255);
});
it('test 8',async() => {
result = await instance.withdraw(238966);
await instance.sendTransaction({from:accounts[8],value:62});

});
it('test 9',async() => {
result = await instance.withdraw(914808);
await instance.sendTransaction({from:accounts[9],value:62});

});
it('test 10',async() => {
result = await instance.withdraw(674068);
await instance.sendTransaction({from:accounts[7],value:1});

});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[8],value:4});

result = await instance.withdraw(414752);
});
it('test 12',async() => {
result = await instance.withdraw(757084);
await instance.sendTransaction({from:accounts[5],value:33});

});
it('test 13',async() => {
result = await instance.withdraw(319694);
await instance.sendTransaction({from:accounts[2],value:16});

});
it('test 14',async() => {
result = await instance.withdraw(46257);
await instance.sendTransaction({from:accounts[7],value:61});

});
it('test 15',async() => {
result = await instance.withdraw(582093);
await instance.sendTransaction({from:accounts[7],value:5});

});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[4],value:18});

result = await instance.withdraw(61646);
});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[9],value:71});

result = await instance.withdraw(621422);
});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[9],value:98});

result = await instance.withdraw(1022634);
});
it('test 19',async() => {
result = await instance.withdraw(904490);
await instance.sendTransaction({from:accounts[4],value:66});

});
it('test 20',async() => {
result = await instance.withdraw(647895);
await instance.sendTransaction({from:accounts[5],value:76});

});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[5],value:7});

result = await instance.withdraw(780028);
});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[9],value:20});

result = await instance.withdraw(840689);
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[2],value:33});

result = await instance.withdraw(927608);
});
it('test 24',async() => {
result = await instance.withdraw(573327);
await instance.sendTransaction({from:accounts[1],value:50});

});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[7],value:59});

result = await instance.withdraw(614276);
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[2],value:43});

result = await instance.withdraw(391927);
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[1],value:71});

result = await instance.withdraw(847381);
});
it('test 28',async() => {
result = await instance.withdraw(262497);
await instance.sendTransaction({from:accounts[2],value:59});

});
it('test 29',async() => {
result = await instance.withdraw(406479);
await instance.sendTransaction({from:accounts[1],value:95});

});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[8],value:18});

result = await instance.withdraw(316039);
});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[8],value:22});

result = await instance.withdraw(1019669);
});
it('test 32',async() => {
result = await instance.withdraw(689959);
await instance.sendTransaction({from:accounts[3],value:22});

});
it('test 33',async() => {
result = await instance.withdraw(836963);
await instance.sendTransaction({from:accounts[1],value:51});

});
it('test 34',async() => {
result = await instance.withdraw(1015024);
await instance.sendTransaction({from:accounts[4],value:28});

});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[4],value:70});

result = await instance.withdraw(1025718);
});
it('test 36',async() => {
result = await instance.withdraw(632279);
await instance.sendTransaction({from:accounts[4],value:30});

});
it('test 37',async() => {
result = await instance.withdraw(940677);
await instance.sendTransaction({from:accounts[3],value:14});

});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[1],value:51});

result = await instance.withdraw(420026);
});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[3],value:43});

result = await instance.withdraw(712574);
});
it('test 40',async() => {
await instance.sendTransaction({from:accounts[3],value:8});

result = await instance.withdraw(94772);
});
it('test 41',async() => {
result = await instance.withdraw(880337);
await instance.sendTransaction({from:accounts[9],value:11});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 42',async() => {
result = await instance.withdraw(515207);
await instance.sendTransaction({from:accounts[6],value:97});

});
it('test 43',async() => {
result = await instance.withdraw(208472);
await instance.sendTransaction({from:accounts[9],value:38});

});
it('test 44',async() => {
result = await instance.withdraw(471706);
await instance.sendTransaction({from:accounts[9],value:62});

});
it('test 45',async() => {
result = await instance.withdraw(816820);
await instance.sendTransaction({from:accounts[6],value:80});

});
it('test 46',async() => {
result = await instance.withdraw(553673);
await instance.sendTransaction({from:accounts[9],value:28});

});
it('test 47',async() => {
result = await instance.withdraw(17029);
await instance.sendTransaction({from:accounts[8],value:47});

});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[3],value:18});

result = await instance.withdraw(233885);
});
it('test 49',async() => {
result = await instance.withdraw(64441);
await instance.sendTransaction({from:accounts[1],value:90});

});
});
