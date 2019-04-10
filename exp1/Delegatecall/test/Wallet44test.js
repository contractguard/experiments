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
await instance.sendTransaction({from:accounts[6],value:25});

result = await instance.withdraw(542202);
});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[7],value:73});

result = await instance.withdraw(495451);
});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[5],value:54});

result = await instance.withdraw(222312);
});
it('test 3',async() => {
result = await instance.withdraw(567915);
await instance.sendTransaction({from:accounts[8],value:85});

});
it('test 4',async() => {
result = await instance.withdraw(19909);
await instance.sendTransaction({from:accounts[7],value:53});

});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[4],value:33});

result = await instance.withdraw(991681);
});
it('test 6',async() => {
result = await instance.withdraw(241203);
await instance.sendTransaction({from:accounts[6],value:57});

});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[1],value:14});

result = await instance.withdraw(47345);
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[7],value:26});

result = await instance.withdraw(710925);
});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[7],value:11});

result = await instance.withdraw(417894);
});
it('test 10',async() => {
result = await instance.withdraw(12478);
await instance.sendTransaction({from:accounts[7],value:34});

});
it('test 11',async() => {
result = await instance.withdraw(229545);
await instance.sendTransaction({from:accounts[8],value:16});

});
it('test 12',async() => {
result = await instance.withdraw(748012);
await instance.sendTransaction({from:accounts[6],value:75});

});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[9],value:54});

result = await instance.withdraw(67777);
});
it('test 14',async() => {
result = await instance.withdraw(9179);
await instance.sendTransaction({from:accounts[4],value:77});

});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[5],value:60});

result = await instance.withdraw(186531);
});
it('test 16',async() => {
result = await instance.withdraw(949725);
await instance.sendTransaction({from:accounts[5],value:42});

});
it('test 17',async() => {
result = await instance.withdraw(903805);
await instance.sendTransaction({from:accounts[3],value:82});

});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[9],value:59});

result = await instance.withdraw(309358);
});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[8],value:3});

result = await instance.withdraw(676013);
});
it('test 20',async() => {
result = await instance.withdraw(359766);
await instance.sendTransaction({from:accounts[2],value:88});

});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[8],value:89});

result = await instance.withdraw(840421);
});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[8],value:46});

result = await instance.withdraw(952791);
});
it('test 23',async() => {
result = await instance.withdraw(732089);
await instance.sendTransaction({from:accounts[6],value:46});

});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[1],value:13});

result = await instance.withdraw(71484);
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[3],value:37});

result = await instance.withdraw(832056);
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[1],value:94});

result = await instance.withdraw(999133);
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[2],value:88});

result = await instance.withdraw(563154);
});
it('test 28',async() => {
result = await instance.withdraw(832754);
await instance.sendTransaction({from:accounts[7],value:25});

});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[3],value:28});

result = await instance.withdraw(71372);
});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[5],value:38});

result = await instance.withdraw(528547);
});
it('test 31',async() => {
result = await instance.withdraw(835965);
await instance.sendTransaction({from:accounts[2],value:26});

});
it('test 32',async() => {
result = await instance.withdraw(855096);
await instance.sendTransaction({from:accounts[3],value:67});

});
it('test 33',async() => {
result = await instance.withdraw(971492);
await instance.sendTransaction({from:accounts[7],value:36});

});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[4],value:33});

result = await instance.withdraw(53963);
});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[7],value:69});

result = await instance.withdraw(457165);
});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[2],value:6});

result = await instance.withdraw(53503);
});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[3],value:4});

result = await instance.withdraw(136059);
});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[4],value:70});

result = await instance.withdraw(897677);
});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[8],value:22});

result = await instance.withdraw(896311);
});
it('test 40',async() => {
await instance.sendTransaction({from:accounts[2],value:42});

result = await instance.withdraw(844328);
});
it('test 41',async() => {
result = await instance.withdraw(935500);
await instance.sendTransaction({from:accounts[6],value:59});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 42',async() => {
result = await instance.withdraw(749489);
await instance.sendTransaction({from:accounts[7],value:74});

});
it('test 43',async() => {
await instance.sendTransaction({from:accounts[1],value:85});

result = await instance.withdraw(11654);
});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[2],value:1});

result = await instance.withdraw(550825);
});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[8],value:34});

result = await instance.withdraw(759764);
});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[3],value:33});

result = await instance.withdraw(370499);
});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[2],value:7});

result = await instance.withdraw(871436);
});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[5],value:35});

result = await instance.withdraw(130734);
});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[3],value:39});

result = await instance.withdraw(38740);
});
});
