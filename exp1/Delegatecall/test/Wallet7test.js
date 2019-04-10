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
await instance.sendTransaction({from:accounts[9],value:35});

result = await instance.withdraw(587510);
});
it('test 1',async() => {
result = await instance.withdraw(906333);
await instance.sendTransaction({from:accounts[4],value:89});

});
it('test 2',async() => {
result = await instance.withdraw(311439);
await instance.sendTransaction({from:accounts[8],value:99});

});
it('test 3',async() => {
result = await instance.withdraw(538705);
await instance.sendTransaction({from:accounts[7],value:24});

});
it('test 4',async() => {
result = await instance.withdraw(563327);
await instance.sendTransaction({from:accounts[6],value:12});

});
it('test 5',async() => {
result = await instance.withdraw(617097);
await instance.sendTransaction({from:accounts[8],value:92});

});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[5],value:43});

result = await instance.withdraw(703646);
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[2],value:69});

result = await instance.withdraw(216422);
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[7],value:86});

result = await instance.withdraw(176459);
});
it('test 9',async() => {
result = await instance.withdraw(313428);
await instance.sendTransaction({from:accounts[4],value:75});

});
it('test 10',async() => {
result = await instance.withdraw(522351);
await instance.sendTransaction({from:accounts[1],value:26});

});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[4],value:95});

result = await instance.withdraw(894465);
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[3],value:37});

result = await instance.withdraw(166761);
});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[8],value:1});

result = await instance.withdraw(639253);
});
it('test 14',async() => {
result = await instance.withdraw(978552);
await instance.sendTransaction({from:accounts[5],value:73});

});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[2],value:29});

result = await instance.withdraw(561698);
});
it('test 16',async() => {
result = await instance.withdraw(124932);
await instance.sendTransaction({from:accounts[3],value:60});

});
it('test 17',async() => {
result = await instance.withdraw(922692);
await instance.sendTransaction({from:accounts[5],value:31});

});
it('test 18',async() => {
result = await instance.withdraw(622300);
await instance.sendTransaction({from:accounts[7],value:43});

});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[4],value:83});

result = await instance.withdraw(591006);
});
it('test 20',async() => {
result = await instance.withdraw(1024278);
await instance.sendTransaction({from:accounts[6],value:75});

});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[1],value:85});

result = await instance.withdraw(810168);
});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[9],value:64});

result = await instance.withdraw(636346);
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[2],value:82});

result = await instance.withdraw(675952);
});
it('test 24',async() => {
result = await instance.withdraw(787323);
await instance.sendTransaction({from:accounts[8],value:8});

});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[1],value:86});

result = await instance.withdraw(153410);
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[3],value:78});

result = await instance.withdraw(812031);
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[7],value:13});

result = await instance.withdraw(137730);
});
it('test 28',async() => {
result = await instance.withdraw(582089);
await instance.sendTransaction({from:accounts[3],value:87});

});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[2],value:63});

result = await instance.withdraw(349374);
});
it('test 30',async() => {
result = await instance.withdraw(855312);
await instance.sendTransaction({from:accounts[4],value:31});

});
it('test 31',async() => {
result = await instance.withdraw(9712);
await instance.sendTransaction({from:accounts[9],value:33});

});
it('test 32',async() => {
result = await instance.withdraw(124178);
await instance.sendTransaction({from:accounts[5],value:71});

});
it('test 33',async() => {
result = await instance.withdraw(789384);
await instance.sendTransaction({from:accounts[3],value:48});

});
it('test 34',async() => {
result = await instance.withdraw(469619);
await instance.sendTransaction({from:accounts[3],value:68});

});
it('test 35',async() => {
result = await instance.withdraw(776200);
await instance.sendTransaction({from:accounts[1],value:62});

});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[1],value:51});

result = await instance.withdraw(845989);
});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[1],value:40});

result = await instance.withdraw(151646);
});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[2],value:85});

result = await instance.withdraw(254110);
});
it('test 39',async() => {
result = await instance.withdraw(305180);
await instance.sendTransaction({from:accounts[1],value:3});

});
it('test 40',async() => {
await instance.sendTransaction({from:accounts[7],value:75});

result = await instance.withdraw(624548);
});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[3],value:8});

result = await instance.withdraw(695729);
});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[6],value:23});

result = await instance.withdraw(194978);
});
it('test 43',async() => {
result = await instance.withdraw(378409);
await instance.sendTransaction({from:accounts[5],value:86});

});
it('test 44',async() => {
result = await instance.withdraw(555510);
await instance.sendTransaction({from:accounts[9],value:74});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 45',async() => {
await instance.sendTransaction({from:accounts[7],value:35});

result = await instance.withdraw(157085);
});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[7],value:26});

result = await instance.withdraw(980907);
});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[5],value:13});

result = await instance.withdraw(167938);
});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[3],value:44});

result = await instance.withdraw(838564);
});
it('test 49',async() => {
result = await instance.withdraw(49098);
await instance.sendTransaction({from:accounts[2],value:7});

});
});
