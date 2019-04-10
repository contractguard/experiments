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
result = await instance.withdraw(966513);
await instance.sendTransaction({from:accounts[1],value:17});

});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[7],value:53});

result = await instance.withdraw(637915);
});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[9],value:66});

result = await instance.withdraw(535818);
});
it('test 3',async() => {
result = await instance.withdraw(927144);
await instance.sendTransaction({from:accounts[4],value:70});

});
it('test 4',async() => {
result = await instance.withdraw(499166);
await instance.sendTransaction({from:accounts[9],value:81});

});
it('test 5',async() => {
result = await instance.withdraw(1022758);
await instance.sendTransaction({from:accounts[4],value:1});

});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[8],value:19});

result = await instance.withdraw(177877);
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[6],value:49});

result = await instance.withdraw(419458);
});
it('test 8',async() => {
result = await instance.withdraw(594341);
await instance.sendTransaction({from:accounts[9],value:37});

});
it('test 9',async() => {
result = await instance.withdraw(469558);
await instance.sendTransaction({from:accounts[6],value:23});

});
it('test 10',async() => {
result = await instance.withdraw(120603);
await instance.sendTransaction({from:accounts[3],value:90});

});
it('test 11',async() => {
result = await instance.withdraw(445630);
await instance.sendTransaction({from:accounts[8],value:82});

});
it('test 12',async() => {
result = await instance.withdraw(935876);
await instance.sendTransaction({from:accounts[7],value:54});

});
it('test 13',async() => {
result = await instance.withdraw(433320);
await instance.sendTransaction({from:accounts[7],value:70});

});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[4],value:59});

result = await instance.withdraw(72150);
});
it('test 15',async() => {
result = await instance.withdraw(2745);
await instance.sendTransaction({from:accounts[7],value:45});

});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[1],value:66});

result = await instance.withdraw(194591);
});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[5],value:65});

result = await instance.withdraw(30928);
});
it('test 18',async() => {
result = await instance.withdraw(104385);
await instance.sendTransaction({from:accounts[1],value:11});

});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[8],value:64});

result = await instance.withdraw(242316);
});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[5],value:28});

result = await instance.withdraw(625978);
});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[7],value:74});

result = await instance.withdraw(128834);
});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[5],value:51});

result = await instance.withdraw(141259);
});
it('test 23',async() => {
result = await instance.withdraw(889624);
await instance.sendTransaction({from:accounts[9],value:37});

});
it('test 24',async() => {
result = await instance.withdraw(51667);
await instance.sendTransaction({from:accounts[5],value:78});

});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[8],value:79});

result = await instance.withdraw(374104);
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[1],value:18});

result = await instance.withdraw(955635);
});
it('test 27',async() => {
result = await instance.withdraw(804938);
await instance.sendTransaction({from:accounts[4],value:78});

});
it('test 28',async() => {
result = await instance.withdraw(951798);
await instance.sendTransaction({from:accounts[9],value:50});

});
it('test 29',async() => {
result = await instance.withdraw(29114);
await instance.sendTransaction({from:accounts[5],value:67});

});
it('test 30',async() => {
result = await instance.withdraw(226073);
await instance.sendTransaction({from:accounts[3],value:92});

});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[4],value:31});

result = await instance.withdraw(333715);
});
it('test 32',async() => {
result = await instance.withdraw(32202);
await instance.sendTransaction({from:accounts[1],value:59});

});
it('test 33',async() => {
result = await instance.withdraw(42342);
await instance.sendTransaction({from:accounts[4],value:12});

});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[3],value:97});

result = await instance.withdraw(965093);
});
it('test 35',async() => {
result = await instance.withdraw(962773);
await instance.sendTransaction({from:accounts[2],value:78});

});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[3],value:81});

result = await instance.withdraw(639212);
});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[9],value:21});

result = await instance.withdraw(803428);
});
it('test 38',async() => {
result = await instance.withdraw(759784);
await instance.sendTransaction({from:accounts[3],value:78});

});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[7],value:88});

result = await instance.withdraw(928541);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 40',async() => {
result = await instance.withdraw(806375);
await instance.sendTransaction({from:accounts[8],value:70});

});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[9],value:86});

result = await instance.withdraw(34933);
});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[1],value:25});

result = await instance.withdraw(296056);
});
it('test 43',async() => {
result = await instance.withdraw(70673);
await instance.sendTransaction({from:accounts[1],value:30});

});
it('test 44',async() => {
result = await instance.withdraw(974009);
await instance.sendTransaction({from:accounts[9],value:12});

});
it('test 45',async() => {
result = await instance.withdraw(878755);
await instance.sendTransaction({from:accounts[4],value:58});

});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[4],value:84});

result = await instance.withdraw(675344);
});
it('test 47',async() => {
result = await instance.withdraw(183181);
await instance.sendTransaction({from:accounts[2],value:75});

});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[9],value:5});

result = await instance.withdraw(100625);
});
it('test 49',async() => {
result = await instance.withdraw(129342);
await instance.sendTransaction({from:accounts[4],value:39});

});
});
