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
result = await instance.withdraw(167320);
await instance.sendTransaction({from:accounts[4],value:47});

});
it('test 1',async() => {
result = await instance.withdraw(638402);
await instance.sendTransaction({from:accounts[9],value:66});

});
it('test 2',async() => {
result = await instance.withdraw(613410);
await instance.sendTransaction({from:accounts[9],value:63});

});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[2],value:88});

result = await instance.withdraw(745828);
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[1],value:90});

result = await instance.withdraw(558635);
});
it('test 5',async() => {
result = await instance.withdraw(317865);
await instance.sendTransaction({from:accounts[4],value:5});

});
it('test 6',async() => {
result = await instance.withdraw(469154);
await instance.sendTransaction({from:accounts[2],value:83});

});
it('test 7',async() => {
result = await instance.withdraw(11024);
await instance.sendTransaction({from:accounts[9],value:63});

});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[2],value:21});

result = await instance.withdraw(826256);
});
it('test 9',async() => {
result = await instance.withdraw(293993);
await instance.sendTransaction({from:accounts[4],value:8});

});
it('test 10',async() => {
result = await instance.withdraw(624857);
await instance.sendTransaction({from:accounts[9],value:14});

});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[2],value:7});

result = await instance.withdraw(846560);
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[1],value:72});

result = await instance.withdraw(293910);
});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[3],value:65});

result = await instance.withdraw(643202);
});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[1],value:52});

result = await instance.withdraw(790914);
});
it('test 15',async() => {
result = await instance.withdraw(227777);
await instance.sendTransaction({from:accounts[5],value:84});

});
it('test 16',async() => {
result = await instance.withdraw(292933);
await instance.sendTransaction({from:accounts[3],value:75});

});
it('test 17',async() => {
result = await instance.withdraw(853271);
await instance.sendTransaction({from:accounts[2],value:42});

});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[6],value:87});

result = await instance.withdraw(400320);
});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[2],value:95});

result = await instance.withdraw(147425);
});
it('test 20',async() => {
result = await instance.withdraw(407391);
await instance.sendTransaction({from:accounts[8],value:15});

});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[7],value:18});

result = await instance.withdraw(375465);
});
it('test 22',async() => {
result = await instance.withdraw(38710);
await instance.sendTransaction({from:accounts[2],value:34});

});
it('test 23',async() => {
result = await instance.withdraw(809125);
await instance.sendTransaction({from:accounts[8],value:77});

});
it('test 24',async() => {
result = await instance.withdraw(73801);
await instance.sendTransaction({from:accounts[6],value:64});

});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[5],value:40});

result = await instance.withdraw(925327);
});
it('test 26',async() => {
result = await instance.withdraw(168315);
await instance.sendTransaction({from:accounts[7],value:70});

});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[9],value:22});

result = await instance.withdraw(35579);
});
it('test 28',async() => {
result = await instance.withdraw(758786);
await instance.sendTransaction({from:accounts[3],value:52});

});
it('test 29',async() => {
result = await instance.withdraw(1029203);
await instance.sendTransaction({from:accounts[1],value:87});

});
it('test 30',async() => {
result = await instance.withdraw(1041742);
await instance.sendTransaction({from:accounts[9],value:25});

});
it('test 31',async() => {
result = await instance.withdraw(321038);
await instance.sendTransaction({from:accounts[8],value:35});

});
it('test 32',async() => {
result = await instance.withdraw(135537);
await instance.sendTransaction({from:accounts[3],value:14});

});
it('test 33',async() => {
result = await instance.withdraw(5955);
await instance.sendTransaction({from:accounts[1],value:54});

});
it('test 34',async() => {
result = await instance.withdraw(9898);
await instance.sendTransaction({from:accounts[5],value:73});

});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[2],value:29});

result = await instance.withdraw(190412);
});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[9],value:14});

result = await instance.withdraw(632329);
});
it('test 37',async() => {
result = await instance.withdraw(185537);
await instance.sendTransaction({from:accounts[5],value:77});

});
it('test 38',async() => {
result = await instance.withdraw(905979);
await instance.sendTransaction({from:accounts[6],value:21});

});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[4],value:21});

result = await instance.withdraw(850313);
});
it('test 40',async() => {
await instance.sendTransaction({from:accounts[6],value:51});

result = await instance.withdraw(278947);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 41',async() => {
await instance.sendTransaction({from:accounts[5],value:40});

result = await instance.withdraw(1044105);
});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[8],value:84});

result = await instance.withdraw(826438);
});
it('test 43',async() => {
await instance.sendTransaction({from:accounts[5],value:98});

result = await instance.withdraw(252556);
});
it('test 44',async() => {
result = await instance.withdraw(753668);
await instance.sendTransaction({from:accounts[5],value:27});

});
it('test 45',async() => {
result = await instance.withdraw(16708);
await instance.sendTransaction({from:accounts[3],value:11});

});
it('test 46',async() => {
result = await instance.withdraw(470710);
await instance.sendTransaction({from:accounts[4],value:84});

});
it('test 47',async() => {
result = await instance.withdraw(151420);
await instance.sendTransaction({from:accounts[8],value:8});

});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[1],value:11});

result = await instance.withdraw(484751);
});
it('test 49',async() => {
result = await instance.withdraw(696611);
await instance.sendTransaction({from:accounts[4],value:15});

});
});
