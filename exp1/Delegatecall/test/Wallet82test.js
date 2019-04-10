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
await instance.sendTransaction({from:accounts[2],value:29});

result = await instance.withdraw(193299);
});
it('test 1',async() => {
result = await instance.withdraw(198835);
await instance.sendTransaction({from:accounts[7],value:98});

});
it('test 2',async() => {
result = await instance.withdraw(572387);
await instance.sendTransaction({from:accounts[6],value:91});

});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[4],value:8});

result = await instance.withdraw(631921);
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[5],value:70});

result = await instance.withdraw(301737);
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[7],value:71});

result = await instance.withdraw(90708);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[1],value:23});

result = await instance.withdraw(194027);
});
it('test 7',async() => {
result = await instance.withdraw(723161);
await instance.sendTransaction({from:accounts[6],value:18});

});
it('test 8',async() => {
result = await instance.withdraw(787690);
await instance.sendTransaction({from:accounts[3],value:34});

});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[7],value:79});

result = await instance.withdraw(907150);
});
it('test 10',async() => {
result = await instance.withdraw(568554);
await instance.sendTransaction({from:accounts[3],value:68});

});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[1],value:43});

result = await instance.withdraw(592036);
});
it('test 12',async() => {
result = await instance.withdraw(774971);
await instance.sendTransaction({from:accounts[1],value:93});

});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[3],value:64});

result = await instance.withdraw(106062);
});
it('test 14',async() => {
result = await instance.withdraw(134987);
await instance.sendTransaction({from:accounts[4],value:2});

});
it('test 15',async() => {
result = await instance.withdraw(274928);
await instance.sendTransaction({from:accounts[6],value:53});

});
it('test 16',async() => {
result = await instance.withdraw(381622);
await instance.sendTransaction({from:accounts[3],value:21});

});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[8],value:83});

result = await instance.withdraw(310437);
});
it('test 18',async() => {
result = await instance.withdraw(882755);
await instance.sendTransaction({from:accounts[3],value:99});

});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[7],value:76});

result = await instance.withdraw(273011);
});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[4],value:17});

result = await instance.withdraw(459272);
});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[9],value:1});

result = await instance.withdraw(1018789);
});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[8],value:100});

result = await instance.withdraw(201762);
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[3],value:57});

result = await instance.withdraw(910582);
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[3],value:21});

result = await instance.withdraw(306817);
});
it('test 25',async() => {
result = await instance.withdraw(165884);
await instance.sendTransaction({from:accounts[2],value:50});

});
it('test 26',async() => {
result = await instance.withdraw(958896);
await instance.sendTransaction({from:accounts[2],value:44});

});
it('test 27',async() => {
result = await instance.withdraw(803520);
await instance.sendTransaction({from:accounts[5],value:20});

});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[7],value:63});

result = await instance.withdraw(497708);
});
it('test 29',async() => {
result = await instance.withdraw(870179);
await instance.sendTransaction({from:accounts[1],value:67});

});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[3],value:56});

result = await instance.withdraw(864121);
});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[1],value:98});

result = await instance.withdraw(704181);
});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[3],value:56});

result = await instance.withdraw(60791);
});
it('test 33',async() => {
result = await instance.withdraw(1006847);
await instance.sendTransaction({from:accounts[1],value:76});

});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[3],value:12});

result = await instance.withdraw(156013);
});
it('test 35',async() => {
result = await instance.withdraw(538080);
await instance.sendTransaction({from:accounts[4],value:56});

});
it('test 36',async() => {
result = await instance.withdraw(617363);
await instance.sendTransaction({from:accounts[2],value:79});

});
it('test 37',async() => {
result = await instance.withdraw(147595);
await instance.sendTransaction({from:accounts[9],value:84});

});
it('test 38',async() => {
result = await instance.withdraw(902102);
await instance.sendTransaction({from:accounts[3],value:16});

});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[7],value:54});

result = await instance.withdraw(352080);
});
it('test 40',async() => {
result = await instance.withdraw(888638);
await instance.sendTransaction({from:accounts[2],value:49});

});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[8],value:21});

result = await instance.withdraw(425816);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 42',async() => {
await instance.sendTransaction({from:accounts[7],value:6});

result = await instance.withdraw(633549);
});
it('test 43',async() => {
result = await instance.withdraw(827022);
await instance.sendTransaction({from:accounts[6],value:50});

});
it('test 44',async() => {
result = await instance.withdraw(641273);
await instance.sendTransaction({from:accounts[5],value:33});

});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[6],value:38});

result = await instance.withdraw(259189);
});
it('test 46',async() => {
result = await instance.withdraw(508762);
await instance.sendTransaction({from:accounts[7],value:65});

});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[8],value:27});

result = await instance.withdraw(381192);
});
it('test 48',async() => {
result = await instance.withdraw(51147);
await instance.sendTransaction({from:accounts[1],value:6});

});
it('test 49',async() => {
result = await instance.withdraw(394862);
await instance.sendTransaction({from:accounts[9],value:74});

});
});
