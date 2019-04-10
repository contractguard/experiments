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
await instance.sendTransaction({from:accounts[1],value:68});

result = await instance.withdraw(813942);
});
it('test 1',async() => {
result = await instance.withdraw(280408);
await instance.sendTransaction({from:accounts[3],value:53});

});
it('test 2',async() => {
result = await instance.withdraw(77399);
await instance.sendTransaction({from:accounts[1],value:73});

});
it('test 3',async() => {
result = await instance.withdraw(1026773);
await instance.sendTransaction({from:accounts[1],value:20});

});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[7],value:46});

result = await instance.withdraw(590388);
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[7],value:59});

result = await instance.withdraw(798695);
});
it('test 6',async() => {
result = await instance.withdraw(490003);
await instance.sendTransaction({from:accounts[1],value:20});

});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[3],value:60});

result = await instance.withdraw(733495);
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[8],value:42});

result = await instance.withdraw(547681);
});
it('test 9',async() => {
result = await instance.withdraw(543917);
await instance.sendTransaction({from:accounts[6],value:62});

});
it('test 10',async() => {
result = await instance.withdraw(292398);
await instance.sendTransaction({from:accounts[1],value:5});

});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[5],value:42});

result = await instance.withdraw(867456);
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[1],value:58});

result = await instance.withdraw(664336);
});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[9],value:38});

result = await instance.withdraw(227649);
});
it('test 14',async() => {
result = await instance.withdraw(985241);
await instance.sendTransaction({from:accounts[3],value:61});

});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[1],value:13});

result = await instance.withdraw(45820);
});
it('test 16',async() => {
result = await instance.withdraw(255447);
await instance.sendTransaction({from:accounts[9],value:53});

});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[6],value:60});

result = await instance.withdraw(142306);
});
it('test 18',async() => {
result = await instance.withdraw(963663);
await instance.sendTransaction({from:accounts[8],value:35});

});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[5],value:53});

result = await instance.withdraw(759859);
});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[7],value:90});

result = await instance.withdraw(50912);
});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[3],value:94});

result = await instance.withdraw(588773);
});
it('test 22',async() => {
result = await instance.withdraw(37644);
await instance.sendTransaction({from:accounts[2],value:100});

});
it('test 23',async() => {
result = await instance.withdraw(401748);
await instance.sendTransaction({from:accounts[8],value:19});

});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[3],value:44});

result = await instance.withdraw(176930);
});
it('test 25',async() => {
result = await instance.withdraw(366814);
await instance.sendTransaction({from:accounts[5],value:95});

});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[6],value:97});

result = await instance.withdraw(726967);
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[1],value:88});

result = await instance.withdraw(126046);
});
it('test 28',async() => {
result = await instance.withdraw(221621);
await instance.sendTransaction({from:accounts[6],value:68});

});
it('test 29',async() => {
result = await instance.withdraw(49515);
await instance.sendTransaction({from:accounts[4],value:72});

});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[3],value:18});

result = await instance.withdraw(241716);
});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[6],value:45});

result = await instance.withdraw(355735);
});
it('test 32',async() => {
result = await instance.withdraw(687917);
await instance.sendTransaction({from:accounts[5],value:78});

});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[4],value:87});

result = await instance.withdraw(97588);
});
it('test 34',async() => {
result = await instance.withdraw(429173);
await instance.sendTransaction({from:accounts[4],value:25});

});
it('test 35',async() => {
result = await instance.withdraw(224990);
await instance.sendTransaction({from:accounts[1],value:21});

});
it('test 36',async() => {
result = await instance.withdraw(169375);
await instance.sendTransaction({from:accounts[2],value:39});

});
it('test 37',async() => {
result = await instance.withdraw(882653);
await instance.sendTransaction({from:accounts[5],value:86});

});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[9],value:87});

result = await instance.withdraw(920450);
});
it('test 39',async() => {
result = await instance.withdraw(27964);
await instance.sendTransaction({from:accounts[6],value:1});

});
it('test 40',async() => {
result = await instance.withdraw(867970);
await instance.sendTransaction({from:accounts[5],value:21});

});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[9],value:8});

result = await instance.withdraw(82461);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 42',async() => {
await instance.sendTransaction({from:accounts[7],value:52});

result = await instance.withdraw(140108);
});
it('test 43',async() => {
result = await instance.withdraw(542432);
await instance.sendTransaction({from:accounts[7],value:97});

});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[7],value:58});

result = await instance.withdraw(935509);
});
it('test 45',async() => {
result = await instance.withdraw(267352);
await instance.sendTransaction({from:accounts[9],value:47});

});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[5],value:15});

result = await instance.withdraw(88915);
});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[5],value:27});

result = await instance.withdraw(315621);
});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[2],value:58});

result = await instance.withdraw(918212);
});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[1],value:98});

result = await instance.withdraw(674798);
});
});
