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
result = await instance.withdraw(136344);
await instance.sendTransaction({from:accounts[3],value:63});

});
it('test 1',async() => {
result = await instance.withdraw(401912);
await instance.sendTransaction({from:accounts[7],value:24});

});
it('test 2',async() => {
result = await instance.withdraw(284598);
await instance.sendTransaction({from:accounts[4],value:14});

});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[8],value:94});

result = await instance.withdraw(768174);
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[7],value:71});

result = await instance.withdraw(39449);
});
it('test 5',async() => {
result = await instance.withdraw(1026430);
await instance.sendTransaction({from:accounts[1],value:74});

});
it('test 6',async() => {
result = await instance.withdraw(157789);
await instance.sendTransaction({from:accounts[1],value:69});

});
it('test 7',async() => {
result = await instance.withdraw(529250);
await instance.sendTransaction({from:accounts[4],value:37});

});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[6],value:48});

result = await instance.withdraw(390516);
});
it('test 9',async() => {
result = await instance.withdraw(252308);
await instance.sendTransaction({from:accounts[9],value:32});

});
it('test 10',async() => {
result = await instance.withdraw(278833);
await instance.sendTransaction({from:accounts[9],value:77});

});
it('test 11',async() => {
result = await instance.withdraw(49884);
await instance.sendTransaction({from:accounts[8],value:25});

});
it('test 12',async() => {
result = await instance.withdraw(214133);
await instance.sendTransaction({from:accounts[9],value:32});

});
it('test 13',async() => {
result = await instance.withdraw(927386);
await instance.sendTransaction({from:accounts[6],value:85});

});
it('test 14',async() => {
result = await instance.withdraw(446057);
await instance.sendTransaction({from:accounts[8],value:99});

});
it('test 15',async() => {
result = await instance.withdraw(799488);
await instance.sendTransaction({from:accounts[8],value:49});

});
it('test 16',async() => {
result = await instance.withdraw(668101);
await instance.sendTransaction({from:accounts[9],value:36});

});
it('test 17',async() => {
result = await instance.withdraw(408130);
await instance.sendTransaction({from:accounts[9],value:23});

});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[6],value:90});

result = await instance.withdraw(890471);
});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[4],value:21});

result = await instance.withdraw(536059);
});
it('test 20',async() => {
result = await instance.withdraw(634289);
await instance.sendTransaction({from:accounts[6],value:81});

});
it('test 21',async() => {
result = await instance.withdraw(760792);
await instance.sendTransaction({from:accounts[4],value:58});

});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[3],value:7});

result = await instance.withdraw(220282);
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[4],value:66});

result = await instance.withdraw(713106);
});
it('test 24',async() => {
result = await instance.withdraw(437876);
await instance.sendTransaction({from:accounts[3],value:62});

});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[4],value:57});

result = await instance.withdraw(942768);
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[7],value:95});

result = await instance.withdraw(930932);
});
it('test 27',async() => {
result = await instance.withdraw(230106);
await instance.sendTransaction({from:accounts[9],value:59});

});
it('test 28',async() => {
result = await instance.withdraw(985356);
await instance.sendTransaction({from:accounts[9],value:20});

});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[6],value:72});

result = await instance.withdraw(78228);
});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[4],value:26});

result = await instance.withdraw(289076);
});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[3],value:4});

result = await instance.withdraw(1046404);
});
it('test 32',async() => {
result = await instance.withdraw(766407);
await instance.sendTransaction({from:accounts[5],value:39});

});
it('test 33',async() => {
result = await instance.withdraw(870536);
await instance.sendTransaction({from:accounts[4],value:25});

});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[7],value:24});

result = await instance.withdraw(575789);
});
it('test 35',async() => {
result = await instance.withdraw(703016);
await instance.sendTransaction({from:accounts[7],value:2});

});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[2],value:10});

result = await instance.withdraw(869108);
});
it('test 37',async() => {
result = await instance.withdraw(118239);
await instance.sendTransaction({from:accounts[5],value:64});

});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[5],value:41});

result = await instance.withdraw(398533);
});
it('test 39',async() => {
result = await instance.withdraw(900190);
await instance.sendTransaction({from:accounts[1],value:61});

});
it('test 40',async() => {
result = await instance.withdraw(972755);
await instance.sendTransaction({from:accounts[4],value:100});

});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[3],value:81});

result = await instance.withdraw(727335);
});
it('test 42',async() => {
result = await instance.withdraw(97759);
await instance.sendTransaction({from:accounts[2],value:62});

});
it('test 43',async() => {
result = await instance.withdraw(979118);
await instance.sendTransaction({from:accounts[8],value:67});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 44',async() => {
result = await instance.withdraw(563147);
await instance.sendTransaction({from:accounts[1],value:93});

});
it('test 45',async() => {
result = await instance.withdraw(348617);
await instance.sendTransaction({from:accounts[6],value:77});

});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[6],value:56});

result = await instance.withdraw(526919);
});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[1],value:9});

result = await instance.withdraw(909757);
});
it('test 48',async() => {
result = await instance.withdraw(293620);
await instance.sendTransaction({from:accounts[1],value:79});

});
it('test 49',async() => {
result = await instance.withdraw(1916);
await instance.sendTransaction({from:accounts[6],value:52});

});
});
