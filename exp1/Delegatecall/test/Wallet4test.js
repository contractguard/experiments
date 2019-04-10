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
result = await instance.withdraw(194099);
await instance.sendTransaction({from:accounts[4],value:44});

});
it('test 1',async() => {
result = await instance.withdraw(934041);
await instance.sendTransaction({from:accounts[1],value:48});

});
it('test 2',async() => {
result = await instance.withdraw(397826);
await instance.sendTransaction({from:accounts[2],value:16});

});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[2],value:6});

result = await instance.withdraw(121167);
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[1],value:19});

result = await instance.withdraw(209230);
});
it('test 5',async() => {
result = await instance.withdraw(780863);
await instance.sendTransaction({from:accounts[3],value:25});

});
it('test 6',async() => {
result = await instance.withdraw(750999);
await instance.sendTransaction({from:accounts[1],value:19});

});
it('test 7',async() => {
result = await instance.withdraw(141551);
await instance.sendTransaction({from:accounts[5],value:5});

});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[8],value:53});

result = await instance.withdraw(540043);
});
it('test 9',async() => {
result = await instance.withdraw(949010);
await instance.sendTransaction({from:accounts[9],value:55});

});
it('test 10',async() => {
result = await instance.withdraw(65419);
await instance.sendTransaction({from:accounts[1],value:63});

});
it('test 11',async() => {
result = await instance.withdraw(161899);
await instance.sendTransaction({from:accounts[2],value:39});

});
it('test 12',async() => {
result = await instance.withdraw(238140);
await instance.sendTransaction({from:accounts[9],value:52});

});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[3],value:59});

result = await instance.withdraw(234009);
});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[1],value:88});

result = await instance.withdraw(1008893);
});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[8],value:24});

result = await instance.withdraw(131002);
});
it('test 16',async() => {
result = await instance.withdraw(307459);
await instance.sendTransaction({from:accounts[8],value:76});

});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[5],value:67});

result = await instance.withdraw(3924);
});
it('test 18',async() => {
result = await instance.withdraw(80280);
await instance.sendTransaction({from:accounts[2],value:52});

});
it('test 19',async() => {
result = await instance.withdraw(262897);
await instance.sendTransaction({from:accounts[7],value:42});

});
it('test 20',async() => {
result = await instance.withdraw(88114);
await instance.sendTransaction({from:accounts[5],value:81});

});
it('test 21',async() => {
result = await instance.withdraw(246167);
await instance.sendTransaction({from:accounts[3],value:30});

});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[3],value:81});

result = await instance.withdraw(625568);
});
it('test 23',async() => {
result = await instance.withdraw(993885);
await instance.sendTransaction({from:accounts[2],value:98});

});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[2],value:54});

result = await instance.withdraw(810319);
});
it('test 25',async() => {
result = await instance.withdraw(216504);
await instance.sendTransaction({from:accounts[7],value:42});

});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[6],value:46});

result = await instance.withdraw(68524);
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[5],value:17});

result = await instance.withdraw(362361);
});
it('test 28',async() => {
result = await instance.withdraw(85422);
await instance.sendTransaction({from:accounts[1],value:94});

});
it('test 29',async() => {
result = await instance.withdraw(712720);
await instance.sendTransaction({from:accounts[1],value:91});

});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[2],value:66});

result = await instance.withdraw(333522);
});
it('test 31',async() => {
result = await instance.withdraw(717606);
await instance.sendTransaction({from:accounts[2],value:79});

});
it('test 32',async() => {
result = await instance.withdraw(11370);
await instance.sendTransaction({from:accounts[4],value:59});

});
it('test 33',async() => {
result = await instance.withdraw(552526);
await instance.sendTransaction({from:accounts[2],value:27});

});
it('test 34',async() => {
result = await instance.withdraw(738564);
await instance.sendTransaction({from:accounts[5],value:83});

});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[6],value:26});

result = await instance.withdraw(299983);
});
it('test 36',async() => {
result = await instance.withdraw(422920);
await instance.sendTransaction({from:accounts[1],value:42});

});
it('test 37',async() => {
result = await instance.withdraw(825928);
await instance.sendTransaction({from:accounts[5],value:35});

});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[1],value:93});

result = await instance.withdraw(660819);
});
it('test 39',async() => {
result = await instance.withdraw(282241);
await instance.sendTransaction({from:accounts[1],value:49});

});
it('test 40',async() => {
result = await instance.withdraw(376485);
await instance.sendTransaction({from:accounts[5],value:24});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 41',async() => {
result = await instance.withdraw(70007);
await instance.sendTransaction({from:accounts[4],value:84});

});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[9],value:13});

result = await instance.withdraw(229382);
});
it('test 43',async() => {
await instance.sendTransaction({from:accounts[4],value:75});

result = await instance.withdraw(914920);
});
it('test 44',async() => {
result = await instance.withdraw(98844);
await instance.sendTransaction({from:accounts[3],value:61});

});
it('test 45',async() => {
result = await instance.withdraw(110267);
await instance.sendTransaction({from:accounts[7],value:96});

});
it('test 46',async() => {
result = await instance.withdraw(138891);
await instance.sendTransaction({from:accounts[7],value:51});

});
it('test 47',async() => {
result = await instance.withdraw(323797);
await instance.sendTransaction({from:accounts[3],value:87});

});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[5],value:4});

result = await instance.withdraw(2134);
});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[1],value:5});

result = await instance.withdraw(705770);
});
});
