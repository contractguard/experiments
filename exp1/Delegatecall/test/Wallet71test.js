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
await instance.sendTransaction({from:accounts[7],value:17});

result = await instance.withdraw(172990);
});
it('test 1',async() => {
result = await instance.withdraw(789486);
await instance.sendTransaction({from:accounts[3],value:34});

});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[9],value:19});

result = await instance.withdraw(300103);
});
it('test 3',async() => {
result = await instance.withdraw(224572);
await instance.sendTransaction({from:accounts[6],value:12});

});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[7],value:80});

result = await instance.withdraw(468917);
});
it('test 5',async() => {
result = await instance.withdraw(737268);
await instance.sendTransaction({from:accounts[1],value:17});

});
it('test 6',async() => {
result = await instance.withdraw(129618);
await instance.sendTransaction({from:accounts[1],value:45});

});
it('test 7',async() => {
result = await instance.withdraw(358303);
await instance.sendTransaction({from:accounts[4],value:30});

});
it('test 8',async() => {
result = await instance.withdraw(775273);
await instance.sendTransaction({from:accounts[4],value:78});

});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[4],value:92});

result = await instance.withdraw(100022);
});
it('test 10',async() => {
result = await instance.withdraw(977330);
await instance.sendTransaction({from:accounts[4],value:24});

});
it('test 11',async() => {
result = await instance.withdraw(8985);
await instance.sendTransaction({from:accounts[2],value:17});

});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[9],value:17});

result = await instance.withdraw(335049);
});
it('test 13',async() => {
result = await instance.withdraw(988422);
await instance.sendTransaction({from:accounts[8],value:10});

});
it('test 14',async() => {
result = await instance.withdraw(970530);
await instance.sendTransaction({from:accounts[7],value:22});

});
it('test 15',async() => {
result = await instance.withdraw(172936);
await instance.sendTransaction({from:accounts[4],value:24});

});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[9],value:22});

result = await instance.withdraw(514435);
});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[5],value:45});

result = await instance.withdraw(359592);
});
it('test 18',async() => {
result = await instance.withdraw(735320);
await instance.sendTransaction({from:accounts[9],value:41});

});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[8],value:10});

result = await instance.withdraw(93950);
});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[5],value:45});

result = await instance.withdraw(372087);
});
it('test 21',async() => {
result = await instance.withdraw(76974);
await instance.sendTransaction({from:accounts[3],value:34});

});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[4],value:48});

result = await instance.withdraw(916849);
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[9],value:95});

result = await instance.withdraw(955508);
});
it('test 24',async() => {
result = await instance.withdraw(885009);
await instance.sendTransaction({from:accounts[4],value:66});

});
it('test 25',async() => {
result = await instance.withdraw(714398);
await instance.sendTransaction({from:accounts[6],value:2});

});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[8],value:87});

result = await instance.withdraw(365110);
});
it('test 27',async() => {
result = await instance.withdraw(397613);
await instance.sendTransaction({from:accounts[6],value:18});

});
it('test 28',async() => {
result = await instance.withdraw(735833);
await instance.sendTransaction({from:accounts[9],value:93});

});
it('test 29',async() => {
result = await instance.withdraw(129771);
await instance.sendTransaction({from:accounts[1],value:80});

});
it('test 30',async() => {
result = await instance.withdraw(476584);
await instance.sendTransaction({from:accounts[8],value:96});

});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[2],value:4});

result = await instance.withdraw(287872);
});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[9],value:76});

result = await instance.withdraw(155325);
});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[1],value:25});

result = await instance.withdraw(670303);
});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[6],value:88});

result = await instance.withdraw(301419);
});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[2],value:79});

result = await instance.withdraw(748258);
});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[4],value:44});

result = await instance.withdraw(511527);
});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[2],value:36});

result = await instance.withdraw(710206);
});
it('test 38',async() => {
result = await instance.withdraw(654994);
await instance.sendTransaction({from:accounts[6],value:29});

});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[3],value:80});

result = await instance.withdraw(695660);
});
it('test 40',async() => {
result = await instance.withdraw(439530);
await instance.sendTransaction({from:accounts[3],value:8});

});
it('test 41',async() => {
result = await instance.withdraw(164629);
await instance.sendTransaction({from:accounts[8],value:65});

});
it('test 42',async() => {
result = await instance.withdraw(961528);
await instance.sendTransaction({from:accounts[4],value:88});

});
it('test 43',async() => {
result = await instance.withdraw(231535);
await instance.sendTransaction({from:accounts[9],value:75});

});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[8],value:64});

result = await instance.withdraw(599370);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 45',async() => {
result = await instance.withdraw(363417);
await instance.sendTransaction({from:accounts[5],value:51});

});
it('test 46',async() => {
result = await instance.withdraw(76050);
await instance.sendTransaction({from:accounts[7],value:89});

});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[3],value:23});

result = await instance.withdraw(41655);
});
it('test 48',async() => {
result = await instance.withdraw(31886);
await instance.sendTransaction({from:accounts[9],value:17});

});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[3],value:50});

result = await instance.withdraw(624077);
});
});
