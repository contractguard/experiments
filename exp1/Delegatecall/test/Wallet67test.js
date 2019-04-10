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
await instance.sendTransaction({from:accounts[3],value:74});

result = await instance.withdraw(917433);
});
it('test 1',async() => {
result = await instance.withdraw(681205);
await instance.sendTransaction({from:accounts[4],value:40});

});
it('test 2',async() => {
result = await instance.withdraw(267644);
await instance.sendTransaction({from:accounts[3],value:58});

});
it('test 3',async() => {
result = await instance.withdraw(385132);
await instance.sendTransaction({from:accounts[4],value:78});

});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[6],value:59});

result = await instance.withdraw(700828);
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[1],value:87});

result = await instance.withdraw(1021972);
});
it('test 6',async() => {
result = await instance.withdraw(111661);
await instance.sendTransaction({from:accounts[5],value:20});

});
it('test 7',async() => {
result = await instance.withdraw(231674);
await instance.sendTransaction({from:accounts[8],value:4});

});
it('test 8',async() => {
result = await instance.withdraw(903835);
await instance.sendTransaction({from:accounts[1],value:43});

});
it('test 9',async() => {
result = await instance.withdraw(116348);
await instance.sendTransaction({from:accounts[6],value:68});

});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[5],value:84});

result = await instance.withdraw(17831);
});
it('test 11',async() => {
result = await instance.withdraw(1001049);
await instance.sendTransaction({from:accounts[8],value:66});

});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[9],value:92});

result = await instance.withdraw(775358);
});
it('test 13',async() => {
result = await instance.withdraw(694212);
await instance.sendTransaction({from:accounts[7],value:24});

});
it('test 14',async() => {
result = await instance.withdraw(606039);
await instance.sendTransaction({from:accounts[9],value:7});

});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[3],value:2});

result = await instance.withdraw(17105);
});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[1],value:94});

result = await instance.withdraw(467294);
});
it('test 17',async() => {
result = await instance.withdraw(21974);
await instance.sendTransaction({from:accounts[3],value:65});

});
it('test 18',async() => {
result = await instance.withdraw(264710);
await instance.sendTransaction({from:accounts[2],value:75});

});
it('test 19',async() => {
result = await instance.withdraw(153865);
await instance.sendTransaction({from:accounts[3],value:30});

});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[2],value:38});

result = await instance.withdraw(797644);
});
it('test 21',async() => {
result = await instance.withdraw(767796);
await instance.sendTransaction({from:accounts[5],value:56});

});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[5],value:64});

result = await instance.withdraw(629743);
});
it('test 23',async() => {
result = await instance.withdraw(98744);
await instance.sendTransaction({from:accounts[3],value:40});

});
it('test 24',async() => {
result = await instance.withdraw(67020);
await instance.sendTransaction({from:accounts[7],value:78});

});
it('test 25',async() => {
result = await instance.withdraw(671050);
await instance.sendTransaction({from:accounts[2],value:36});

});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[9],value:6});

result = await instance.withdraw(86709);
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[7],value:36});

result = await instance.withdraw(423446);
});
it('test 28',async() => {
result = await instance.withdraw(160868);
await instance.sendTransaction({from:accounts[5],value:70});

});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[2],value:100});

result = await instance.withdraw(711207);
});
it('test 30',async() => {
result = await instance.withdraw(394922);
await instance.sendTransaction({from:accounts[9],value:98});

});
it('test 31',async() => {
result = await instance.withdraw(145846);
await instance.sendTransaction({from:accounts[3],value:93});

});
it('test 32',async() => {
result = await instance.withdraw(142859);
await instance.sendTransaction({from:accounts[5],value:93});

});
it('test 33',async() => {
result = await instance.withdraw(37444);
await instance.sendTransaction({from:accounts[5],value:95});

});
it('test 34',async() => {
result = await instance.withdraw(1047657);
await instance.sendTransaction({from:accounts[5],value:60});

});
it('test 35',async() => {
result = await instance.withdraw(324275);
await instance.sendTransaction({from:accounts[8],value:64});

});
it('test 36',async() => {
result = await instance.withdraw(594366);
await instance.sendTransaction({from:accounts[7],value:93});

});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[2],value:69});

result = await instance.withdraw(92582);
});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[3],value:26});

result = await instance.withdraw(672079);
});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[8],value:50});

result = await instance.withdraw(977070);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 40',async() => {
await instance.sendTransaction({from:accounts[9],value:24});

result = await instance.withdraw(540132);
});
it('test 41',async() => {
result = await instance.withdraw(341170);
await instance.sendTransaction({from:accounts[1],value:1});

});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[5],value:28});

result = await instance.withdraw(463923);
});
it('test 43',async() => {
await instance.sendTransaction({from:accounts[5],value:57});

result = await instance.withdraw(695370);
});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[3],value:12});

result = await instance.withdraw(533702);
});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[7],value:85});

result = await instance.withdraw(394611);
});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[2],value:69});

result = await instance.withdraw(24996);
});
it('test 47',async() => {
result = await instance.withdraw(282441);
await instance.sendTransaction({from:accounts[5],value:69});

});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[3],value:12});

result = await instance.withdraw(766389);
});
it('test 49',async() => {
result = await instance.withdraw(975402);
await instance.sendTransaction({from:accounts[9],value:23});

});
});
