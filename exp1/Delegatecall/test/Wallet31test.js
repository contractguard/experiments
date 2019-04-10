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
result = await instance.withdraw(76357);
await instance.sendTransaction({from:accounts[4],value:2});

});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[6],value:82});

result = await instance.withdraw(783990);
});
it('test 2',async() => {
result = await instance.withdraw(869321);
await instance.sendTransaction({from:accounts[9],value:31});

});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[3],value:54});

result = await instance.withdraw(915851);
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[8],value:60});

result = await instance.withdraw(466597);
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[1],value:61});

result = await instance.withdraw(765796);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[7],value:3});

result = await instance.withdraw(1037527);
});
it('test 7',async() => {
result = await instance.withdraw(709433);
await instance.sendTransaction({from:accounts[1],value:27});

});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[3],value:39});

result = await instance.withdraw(283058);
});
it('test 9',async() => {
result = await instance.withdraw(572194);
await instance.sendTransaction({from:accounts[7],value:72});

});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[8],value:73});

result = await instance.withdraw(101663);
});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[1],value:88});

result = await instance.withdraw(85575);
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[8],value:85});

result = await instance.withdraw(750797);
});
it('test 13',async() => {
result = await instance.withdraw(357908);
await instance.sendTransaction({from:accounts[4],value:9});

});
it('test 14',async() => {
result = await instance.withdraw(490905);
await instance.sendTransaction({from:accounts[1],value:37});

});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[7],value:99});

result = await instance.withdraw(1008612);
});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[6],value:96});

result = await instance.withdraw(310024);
});
it('test 17',async() => {
result = await instance.withdraw(52207);
await instance.sendTransaction({from:accounts[5],value:4});

});
it('test 18',async() => {
result = await instance.withdraw(501764);
await instance.sendTransaction({from:accounts[3],value:20});

});
it('test 19',async() => {
result = await instance.withdraw(262724);
await instance.sendTransaction({from:accounts[3],value:52});

});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[4],value:12});

result = await instance.withdraw(833325);
});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[3],value:16});

result = await instance.withdraw(51489);
});
it('test 22',async() => {
result = await instance.withdraw(901691);
await instance.sendTransaction({from:accounts[5],value:99});

});
it('test 23',async() => {
result = await instance.withdraw(748069);
await instance.sendTransaction({from:accounts[2],value:18});

});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[7],value:91});

result = await instance.withdraw(140685);
});
it('test 25',async() => {
result = await instance.withdraw(413116);
await instance.sendTransaction({from:accounts[1],value:68});

});
it('test 26',async() => {
result = await instance.withdraw(25491);
await instance.sendTransaction({from:accounts[2],value:33});

});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[8],value:93});

result = await instance.withdraw(899470);
});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[5],value:18});

result = await instance.withdraw(544372);
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[3],value:85});

result = await instance.withdraw(543180);
});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[6],value:91});

result = await instance.withdraw(376963);
});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[5],value:34});

result = await instance.withdraw(783051);
});
it('test 32',async() => {
result = await instance.withdraw(444635);
await instance.sendTransaction({from:accounts[5],value:47});

});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[1],value:2});

result = await instance.withdraw(578872);
});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[1],value:57});

result = await instance.withdraw(428197);
});
it('test 35',async() => {
result = await instance.withdraw(669366);
await instance.sendTransaction({from:accounts[3],value:22});

});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[5],value:26});

result = await instance.withdraw(564041);
});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[9],value:1});

result = await instance.withdraw(955180);
});
it('test 38',async() => {
result = await instance.withdraw(708171);
await instance.sendTransaction({from:accounts[8],value:15});

});
it('test 39',async() => {
result = await instance.withdraw(372647);
await instance.sendTransaction({from:accounts[8],value:14});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 40',async() => {
result = await instance.withdraw(439359);
await instance.sendTransaction({from:accounts[3],value:4});

});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[2],value:52});

result = await instance.withdraw(773056);
});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[2],value:87});

result = await instance.withdraw(1047825);
});
it('test 43',async() => {
result = await instance.withdraw(327977);
await instance.sendTransaction({from:accounts[6],value:51});

});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[2],value:23});

result = await instance.withdraw(342650);
});
it('test 45',async() => {
result = await instance.withdraw(880844);
await instance.sendTransaction({from:accounts[8],value:92});

});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[9],value:92});

result = await instance.withdraw(440349);
});
it('test 47',async() => {
result = await instance.withdraw(69232);
await instance.sendTransaction({from:accounts[8],value:42});

});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[8],value:93});

result = await instance.withdraw(961680);
});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[5],value:79});

result = await instance.withdraw(456519);
});
});
