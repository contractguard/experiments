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
result = await instance.withdraw(245432);
await instance.sendTransaction({from:accounts[9],value:62});

});
it('test 1',async() => {
result = await instance.withdraw(710033);
await instance.sendTransaction({from:accounts[2],value:90});

});
it('test 2',async() => {
result = await instance.withdraw(1030558);
await instance.sendTransaction({from:accounts[7],value:14});

});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[6],value:41});

result = await instance.withdraw(648922);
});
it('test 4',async() => {
result = await instance.withdraw(52974);
await instance.sendTransaction({from:accounts[5],value:77});

});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[5],value:18});

result = await instance.withdraw(354723);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[8],value:54});

result = await instance.withdraw(22696);
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[5],value:87});

result = await instance.withdraw(576512);
});
it('test 8',async() => {
result = await instance.withdraw(36712);
await instance.sendTransaction({from:accounts[6],value:17});

});
it('test 9',async() => {
result = await instance.withdraw(976872);
await instance.sendTransaction({from:accounts[3],value:48});

});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[1],value:14});

result = await instance.withdraw(621930);
});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[5],value:32});

result = await instance.withdraw(679677);
});
it('test 12',async() => {
result = await instance.withdraw(265876);
await instance.sendTransaction({from:accounts[6],value:17});

});
it('test 13',async() => {
result = await instance.withdraw(431416);
await instance.sendTransaction({from:accounts[7],value:72});

});
it('test 14',async() => {
result = await instance.withdraw(942423);
await instance.sendTransaction({from:accounts[7],value:86});

});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[2],value:6});

result = await instance.withdraw(144243);
});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[5],value:29});

result = await instance.withdraw(574410);
});
it('test 17',async() => {
result = await instance.withdraw(263975);
await instance.sendTransaction({from:accounts[2],value:99});

});
it('test 18',async() => {
result = await instance.withdraw(367271);
await instance.sendTransaction({from:accounts[2],value:79});

});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[8],value:83});

result = await instance.withdraw(161891);
});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[7],value:75});

result = await instance.withdraw(63923);
});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[2],value:34});

result = await instance.withdraw(220820);
});
it('test 22',async() => {
result = await instance.withdraw(604702);
await instance.sendTransaction({from:accounts[6],value:69});

});
it('test 23',async() => {
result = await instance.withdraw(430838);
await instance.sendTransaction({from:accounts[7],value:59});

});
it('test 24',async() => {
result = await instance.withdraw(1023828);
await instance.sendTransaction({from:accounts[1],value:84});

});
it('test 25',async() => {
result = await instance.withdraw(276025);
await instance.sendTransaction({from:accounts[5],value:7});

});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[1],value:7});

result = await instance.withdraw(426629);
});
it('test 27',async() => {
result = await instance.withdraw(104251);
await instance.sendTransaction({from:accounts[3],value:2});

});
it('test 28',async() => {
result = await instance.withdraw(506560);
await instance.sendTransaction({from:accounts[2],value:5});

});
it('test 29',async() => {
result = await instance.withdraw(130527);
await instance.sendTransaction({from:accounts[2],value:4});

});
it('test 30',async() => {
result = await instance.withdraw(996271);
await instance.sendTransaction({from:accounts[1],value:92});

});
it('test 31',async() => {
result = await instance.withdraw(709370);
await instance.sendTransaction({from:accounts[1],value:1});

});
it('test 32',async() => {
result = await instance.withdraw(894034);
await instance.sendTransaction({from:accounts[8],value:61});

});
it('test 33',async() => {
result = await instance.withdraw(433357);
await instance.sendTransaction({from:accounts[4],value:1});

});
it('test 34',async() => {
result = await instance.withdraw(125014);
await instance.sendTransaction({from:accounts[5],value:11});

});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[7],value:52});

result = await instance.withdraw(912356);
});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[5],value:40});

result = await instance.withdraw(161758);
});
it('test 37',async() => {
result = await instance.withdraw(347159);
await instance.sendTransaction({from:accounts[3],value:38});

});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[7],value:33});

result = await instance.withdraw(192497);
});
it('test 39',async() => {
result = await instance.withdraw(656916);
await instance.sendTransaction({from:accounts[7],value:2});

});
it('test 40',async() => {
result = await instance.withdraw(188186);
await instance.sendTransaction({from:accounts[9],value:72});

});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[1],value:55});

result = await instance.withdraw(589311);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 42',async() => {
await instance.sendTransaction({from:accounts[1],value:22});

result = await instance.withdraw(61408);
});
it('test 43',async() => {
await instance.sendTransaction({from:accounts[3],value:91});

result = await instance.withdraw(1019286);
});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[5],value:55});

result = await instance.withdraw(904061);
});
it('test 45',async() => {
result = await instance.withdraw(957950);
await instance.sendTransaction({from:accounts[3],value:51});

});
it('test 46',async() => {
result = await instance.withdraw(717432);
await instance.sendTransaction({from:accounts[7],value:3});

});
it('test 47',async() => {
result = await instance.withdraw(1024245);
await instance.sendTransaction({from:accounts[2],value:15});

});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[6],value:86});

result = await instance.withdraw(963829);
});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[4],value:13});

result = await instance.withdraw(787371);
});
});
