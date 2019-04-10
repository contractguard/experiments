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
result = await instance.withdraw(700196);
await instance.sendTransaction({from:accounts[6],value:96});

});
it('test 1',async() => {
result = await instance.withdraw(482936);
await instance.sendTransaction({from:accounts[7],value:69});

});
it('test 2',async() => {
result = await instance.withdraw(219840);
await instance.sendTransaction({from:accounts[8],value:18});

});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[1],value:34});

result = await instance.withdraw(174027);
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[8],value:78});

result = await instance.withdraw(220695);
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[1],value:38});

result = await instance.withdraw(514193);
});
it('test 6',async() => {
result = await instance.withdraw(424186);
await instance.sendTransaction({from:accounts[8],value:8});

});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[4],value:4});

result = await instance.withdraw(387506);
});
it('test 8',async() => {
result = await instance.withdraw(145359);
await instance.sendTransaction({from:accounts[8],value:2});

});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[7],value:73});

result = await instance.withdraw(390477);
});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[1],value:47});

result = await instance.withdraw(405967);
});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[6],value:70});

result = await instance.withdraw(96883);
});
it('test 12',async() => {
result = await instance.withdraw(1024978);
await instance.sendTransaction({from:accounts[5],value:48});

});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[4],value:93});

result = await instance.withdraw(506626);
});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[8],value:47});

result = await instance.withdraw(926343);
});
it('test 15',async() => {
result = await instance.withdraw(880864);
await instance.sendTransaction({from:accounts[9],value:100});

});
it('test 16',async() => {
result = await instance.withdraw(491834);
await instance.sendTransaction({from:accounts[1],value:48});

});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[6],value:34});

result = await instance.withdraw(817330);
});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[5],value:74});

result = await instance.withdraw(946157);
});
it('test 19',async() => {
result = await instance.withdraw(24278);
await instance.sendTransaction({from:accounts[9],value:75});

});
it('test 20',async() => {
result = await instance.withdraw(610621);
await instance.sendTransaction({from:accounts[1],value:16});

});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[6],value:41});

result = await instance.withdraw(339810);
});
it('test 22',async() => {
result = await instance.withdraw(896463);
await instance.sendTransaction({from:accounts[7],value:97});

});
it('test 23',async() => {
result = await instance.withdraw(856624);
await instance.sendTransaction({from:accounts[3],value:80});

});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[8],value:13});

result = await instance.withdraw(486129);
});
it('test 25',async() => {
result = await instance.withdraw(52364);
await instance.sendTransaction({from:accounts[4],value:94});

});
it('test 26',async() => {
result = await instance.withdraw(741246);
await instance.sendTransaction({from:accounts[6],value:18});

});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[9],value:12});

result = await instance.withdraw(981819);
});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[9],value:13});

result = await instance.withdraw(772742);
});
it('test 29',async() => {
result = await instance.withdraw(340714);
await instance.sendTransaction({from:accounts[5],value:14});

});
it('test 30',async() => {
result = await instance.withdraw(355961);
await instance.sendTransaction({from:accounts[4],value:32});

});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[9],value:39});

result = await instance.withdraw(29547);
});
it('test 32',async() => {
result = await instance.withdraw(1019297);
await instance.sendTransaction({from:accounts[1],value:58});

});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[1],value:34});

result = await instance.withdraw(446964);
});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[4],value:38});

result = await instance.withdraw(85088);
});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[9],value:93});

result = await instance.withdraw(727583);
});
it('test 36',async() => {
result = await instance.withdraw(227111);
await instance.sendTransaction({from:accounts[9],value:63});

});
it('test 37',async() => {
result = await instance.withdraw(622425);
await instance.sendTransaction({from:accounts[4],value:31});

});
it('test 38',async() => {
result = await instance.withdraw(676134);
await instance.sendTransaction({from:accounts[8],value:63});

});
it('test 39',async() => {
result = await instance.withdraw(557143);
await instance.sendTransaction({from:accounts[5],value:23});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 40',async() => {
result = await instance.withdraw(32672);
await instance.sendTransaction({from:accounts[3],value:28});

});
it('test 41',async() => {
result = await instance.withdraw(189141);
await instance.sendTransaction({from:accounts[1],value:30});

});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[3],value:31});

result = await instance.withdraw(935274);
});
it('test 43',async() => {
await instance.sendTransaction({from:accounts[3],value:14});

result = await instance.withdraw(185037);
});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[8],value:76});

result = await instance.withdraw(66770);
});
it('test 45',async() => {
result = await instance.withdraw(283639);
await instance.sendTransaction({from:accounts[1],value:80});

});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[9],value:16});

result = await instance.withdraw(796425);
});
it('test 47',async() => {
result = await instance.withdraw(298126);
await instance.sendTransaction({from:accounts[4],value:40});

});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[5],value:60});

result = await instance.withdraw(535707);
});
it('test 49',async() => {
result = await instance.withdraw(334495);
await instance.sendTransaction({from:accounts[7],value:31});

});
});
