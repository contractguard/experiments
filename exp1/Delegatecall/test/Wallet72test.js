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
result = await instance.withdraw(119676);
await instance.sendTransaction({from:accounts[2],value:59});

});
it('test 1',async() => {
result = await instance.withdraw(419031);
await instance.sendTransaction({from:accounts[8],value:75});

});
it('test 2',async() => {
result = await instance.withdraw(53642);
await instance.sendTransaction({from:accounts[6],value:52});

});
it('test 3',async() => {
result = await instance.withdraw(736077);
await instance.sendTransaction({from:accounts[9],value:89});

});
it('test 4',async() => {
result = await instance.withdraw(635229);
await instance.sendTransaction({from:accounts[2],value:64});

});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[9],value:93});

result = await instance.withdraw(25049);
});
it('test 6',async() => {
result = await instance.withdraw(515147);
await instance.sendTransaction({from:accounts[1],value:44});

});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[3],value:75});

result = await instance.withdraw(25331);
});
it('test 8',async() => {
result = await instance.withdraw(1020541);
await instance.sendTransaction({from:accounts[5],value:35});

});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[4],value:77});

result = await instance.withdraw(861183);
});
it('test 10',async() => {
result = await instance.withdraw(174370);
await instance.sendTransaction({from:accounts[8],value:18});

});
it('test 11',async() => {
result = await instance.withdraw(734697);
await instance.sendTransaction({from:accounts[9],value:24});

});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[4],value:54});

result = await instance.withdraw(600464);
});
it('test 13',async() => {
result = await instance.withdraw(358707);
await instance.sendTransaction({from:accounts[8],value:1});

});
it('test 14',async() => {
result = await instance.withdraw(902841);
await instance.sendTransaction({from:accounts[8],value:75});

});
it('test 15',async() => {
result = await instance.withdraw(392241);
await instance.sendTransaction({from:accounts[3],value:46});

});
it('test 16',async() => {
result = await instance.withdraw(929532);
await instance.sendTransaction({from:accounts[3],value:82});

});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[8],value:11});

result = await instance.withdraw(101072);
});
it('test 18',async() => {
result = await instance.withdraw(356178);
await instance.sendTransaction({from:accounts[1],value:43});

});
it('test 19',async() => {
result = await instance.withdraw(849948);
await instance.sendTransaction({from:accounts[4],value:1});

});
it('test 20',async() => {
result = await instance.withdraw(235000);
await instance.sendTransaction({from:accounts[1],value:94});

});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[8],value:20});

result = await instance.withdraw(518166);
});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[4],value:44});

result = await instance.withdraw(814705);
});
it('test 23',async() => {
result = await instance.withdraw(487321);
await instance.sendTransaction({from:accounts[9],value:4});

});
it('test 24',async() => {
result = await instance.withdraw(781154);
await instance.sendTransaction({from:accounts[3],value:8});

});
it('test 25',async() => {
result = await instance.withdraw(631276);
await instance.sendTransaction({from:accounts[2],value:5});

});
it('test 26',async() => {
result = await instance.withdraw(352549);
await instance.sendTransaction({from:accounts[2],value:65});

});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[5],value:89});

result = await instance.withdraw(1009451);
});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[1],value:57});

result = await instance.withdraw(542615);
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[6],value:64});

result = await instance.withdraw(675892);
});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[3],value:86});

result = await instance.withdraw(966234);
});
it('test 31',async() => {
result = await instance.withdraw(992473);
await instance.sendTransaction({from:accounts[6],value:68});

});
it('test 32',async() => {
result = await instance.withdraw(82467);
await instance.sendTransaction({from:accounts[7],value:98});

});
it('test 33',async() => {
result = await instance.withdraw(619203);
await instance.sendTransaction({from:accounts[9],value:38});

});
it('test 34',async() => {
result = await instance.withdraw(467923);
await instance.sendTransaction({from:accounts[3],value:35});

});
it('test 35',async() => {
result = await instance.withdraw(637428);
await instance.sendTransaction({from:accounts[1],value:70});

});
it('test 36',async() => {
result = await instance.withdraw(230121);
await instance.sendTransaction({from:accounts[3],value:60});

});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[9],value:6});

result = await instance.withdraw(1004151);
});
it('test 38',async() => {
result = await instance.withdraw(811541);
await instance.sendTransaction({from:accounts[4],value:73});

});
it('test 39',async() => {
result = await instance.withdraw(931258);
await instance.sendTransaction({from:accounts[5],value:14});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 40',async() => {
result = await instance.withdraw(27735);
await instance.sendTransaction({from:accounts[3],value:31});

});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[4],value:96});

result = await instance.withdraw(568211);
});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[4],value:46});

result = await instance.withdraw(753036);
});
it('test 43',async() => {
result = await instance.withdraw(203686);
await instance.sendTransaction({from:accounts[8],value:7});

});
it('test 44',async() => {
result = await instance.withdraw(212723);
await instance.sendTransaction({from:accounts[8],value:18});

});
it('test 45',async() => {
result = await instance.withdraw(157249);
await instance.sendTransaction({from:accounts[5],value:53});

});
it('test 46',async() => {
result = await instance.withdraw(517875);
await instance.sendTransaction({from:accounts[8],value:91});

});
it('test 47',async() => {
result = await instance.withdraw(1045683);
await instance.sendTransaction({from:accounts[5],value:87});

});
it('test 48',async() => {
result = await instance.withdraw(820276);
await instance.sendTransaction({from:accounts[8],value:65});

});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[3],value:71});

result = await instance.withdraw(392915);
});
});
