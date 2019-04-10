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
await instance.sendTransaction({from:accounts[6],value:38});

result = await instance.withdraw(916057);
});
it('test 1',async() => {
result = await instance.withdraw(8698);
await instance.sendTransaction({from:accounts[9],value:86});

});
it('test 2',async() => {
result = await instance.withdraw(10695);
await instance.sendTransaction({from:accounts[4],value:22});

});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[5],value:80});

result = await instance.withdraw(432986);
});
it('test 4',async() => {
result = await instance.withdraw(640836);
await instance.sendTransaction({from:accounts[8],value:98});

});
it('test 5',async() => {
result = await instance.withdraw(868958);
await instance.sendTransaction({from:accounts[4],value:63});

});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[5],value:46});

result = await instance.withdraw(848025);
});
it('test 7',async() => {
result = await instance.withdraw(515381);
await instance.sendTransaction({from:accounts[6],value:12});

});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[7],value:13});

result = await instance.withdraw(176122);
});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[6],value:100});

result = await instance.withdraw(461219);
});
it('test 10',async() => {
result = await instance.withdraw(643300);
await instance.sendTransaction({from:accounts[8],value:83});

});
it('test 11',async() => {
result = await instance.withdraw(971364);
await instance.sendTransaction({from:accounts[9],value:55});

});
it('test 12',async() => {
result = await instance.withdraw(542048);
await instance.sendTransaction({from:accounts[8],value:59});

});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[4],value:26});

result = await instance.withdraw(513189);
});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[8],value:62});

result = await instance.withdraw(873322);
});
it('test 15',async() => {
result = await instance.withdraw(903064);
await instance.sendTransaction({from:accounts[9],value:55});

});
it('test 16',async() => {
result = await instance.withdraw(412209);
await instance.sendTransaction({from:accounts[5],value:68});

});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[2],value:18});

result = await instance.withdraw(493096);
});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[9],value:39});

result = await instance.withdraw(941098);
});
it('test 19',async() => {
result = await instance.withdraw(321688);
await instance.sendTransaction({from:accounts[4],value:93});

});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[2],value:77});

result = await instance.withdraw(58270);
});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[4],value:94});

result = await instance.withdraw(944514);
});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[3],value:38});

result = await instance.withdraw(833999);
});
it('test 23',async() => {
result = await instance.withdraw(337824);
await instance.sendTransaction({from:accounts[9],value:44});

});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[9],value:73});

result = await instance.withdraw(191286);
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[2],value:48});

result = await instance.withdraw(998021);
});
it('test 26',async() => {
result = await instance.withdraw(647438);
await instance.sendTransaction({from:accounts[4],value:77});

});
it('test 27',async() => {
result = await instance.withdraw(428489);
await instance.sendTransaction({from:accounts[3],value:69});

});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[9],value:95});

result = await instance.withdraw(480956);
});
it('test 29',async() => {
result = await instance.withdraw(930166);
await instance.sendTransaction({from:accounts[3],value:64});

});
it('test 30',async() => {
result = await instance.withdraw(23676);
await instance.sendTransaction({from:accounts[4],value:89});

});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[7],value:97});

result = await instance.withdraw(473798);
});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[3],value:91});

result = await instance.withdraw(1031408);
});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[6],value:31});

result = await instance.withdraw(447644);
});
it('test 34',async() => {
result = await instance.withdraw(441306);
await instance.sendTransaction({from:accounts[8],value:13});

});
it('test 35',async() => {
result = await instance.withdraw(503080);
await instance.sendTransaction({from:accounts[7],value:57});

});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[7],value:13});

result = await instance.withdraw(1009642);
});
it('test 37',async() => {
result = await instance.withdraw(358534);
await instance.sendTransaction({from:accounts[8],value:88});

});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[2],value:32});

result = await instance.withdraw(718948);
});
it('test 39',async() => {
result = await instance.withdraw(305174);
await instance.sendTransaction({from:accounts[1],value:87});

});
it('test 40',async() => {
result = await instance.withdraw(78271);
await instance.sendTransaction({from:accounts[6],value:18});

});
it('test 41',async() => {
result = await instance.withdraw(634188);
await instance.sendTransaction({from:accounts[7],value:19});

});
it('test 42',async() => {
result = await instance.withdraw(149441);
await instance.sendTransaction({from:accounts[2],value:17});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 43',async() => {
await instance.sendTransaction({from:accounts[8],value:62});

result = await instance.withdraw(470568);
});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[8],value:42});

result = await instance.withdraw(754088);
});
it('test 45',async() => {
result = await instance.withdraw(678129);
await instance.sendTransaction({from:accounts[7],value:83});

});
it('test 46',async() => {
result = await instance.withdraw(279091);
await instance.sendTransaction({from:accounts[2],value:10});

});
it('test 47',async() => {
result = await instance.withdraw(584104);
await instance.sendTransaction({from:accounts[3],value:65});

});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[4],value:92});

result = await instance.withdraw(146815);
});
it('test 49',async() => {
result = await instance.withdraw(685274);
await instance.sendTransaction({from:accounts[2],value:47});

});
});
