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
result = await instance.withdraw(958027);
await instance.sendTransaction({from:accounts[1],value:89});

});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[6],value:60});

result = await instance.withdraw(957448);
});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[9],value:24});

result = await instance.withdraw(630907);
});
it('test 3',async() => {
result = await instance.withdraw(70560);
await instance.sendTransaction({from:accounts[6],value:77});

});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[3],value:15});

result = await instance.withdraw(115484);
});
it('test 5',async() => {
result = await instance.withdraw(415097);
await instance.sendTransaction({from:accounts[3],value:85});

});
it('test 6',async() => {
result = await instance.withdraw(295828);
await instance.sendTransaction({from:accounts[5],value:67});

});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[2],value:88});

result = await instance.withdraw(749809);
});
it('test 8',async() => {
result = await instance.withdraw(754843);
await instance.sendTransaction({from:accounts[4],value:52});

});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[7],value:22});

result = await instance.withdraw(344537);
});
it('test 10',async() => {
result = await instance.withdraw(18587);
await instance.sendTransaction({from:accounts[9],value:75});

});
it('test 11',async() => {
result = await instance.withdraw(493303);
await instance.sendTransaction({from:accounts[2],value:47});

});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[3],value:92});

result = await instance.withdraw(593316);
});
it('test 13',async() => {
result = await instance.withdraw(185881);
await instance.sendTransaction({from:accounts[1],value:56});

});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[6],value:87});

result = await instance.withdraw(508779);
});
it('test 15',async() => {
result = await instance.withdraw(268243);
await instance.sendTransaction({from:accounts[6],value:92});

});
it('test 16',async() => {
result = await instance.withdraw(750370);
await instance.sendTransaction({from:accounts[3],value:38});

});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[1],value:55});

result = await instance.withdraw(815153);
});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[5],value:18});

result = await instance.withdraw(777456);
});
it('test 19',async() => {
result = await instance.withdraw(413300);
await instance.sendTransaction({from:accounts[6],value:45});

});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[3],value:60});

result = await instance.withdraw(13509);
});
it('test 21',async() => {
result = await instance.withdraw(309637);
await instance.sendTransaction({from:accounts[4],value:8});

});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[5],value:6});

result = await instance.withdraw(521221);
});
it('test 23',async() => {
result = await instance.withdraw(353341);
await instance.sendTransaction({from:accounts[7],value:43});

});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[8],value:51});

result = await instance.withdraw(773710);
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[1],value:1});

result = await instance.withdraw(443938);
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[8],value:27});

result = await instance.withdraw(8713);
});
it('test 27',async() => {
result = await instance.withdraw(782389);
await instance.sendTransaction({from:accounts[2],value:67});

});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[4],value:22});

result = await instance.withdraw(282940);
});
it('test 29',async() => {
result = await instance.withdraw(779358);
await instance.sendTransaction({from:accounts[4],value:70});

});
it('test 30',async() => {
result = await instance.withdraw(986845);
await instance.sendTransaction({from:accounts[3],value:72});

});
it('test 31',async() => {
result = await instance.withdraw(869468);
await instance.sendTransaction({from:accounts[1],value:46});

});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[2],value:89});

result = await instance.withdraw(305451);
});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[1],value:57});

result = await instance.withdraw(361693);
});
it('test 34',async() => {
result = await instance.withdraw(1004730);
await instance.sendTransaction({from:accounts[6],value:42});

});
it('test 35',async() => {
result = await instance.withdraw(494554);
await instance.sendTransaction({from:accounts[1],value:14});

});
it('test 36',async() => {
result = await instance.withdraw(800843);
await instance.sendTransaction({from:accounts[2],value:85});

});
it('test 37',async() => {
result = await instance.withdraw(135175);
await instance.sendTransaction({from:accounts[2],value:61});

});
it('test 38',async() => {
result = await instance.withdraw(503897);
await instance.sendTransaction({from:accounts[7],value:70});

});
it('test 39',async() => {
result = await instance.withdraw(34378);
await instance.sendTransaction({from:accounts[3],value:12});

});
it('test 40',async() => {
await instance.sendTransaction({from:accounts[4],value:94});

result = await instance.withdraw(135626);
});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[4],value:46});

result = await instance.withdraw(205190);
});
it('test 42',async() => {
result = await instance.withdraw(794006);
await instance.sendTransaction({from:accounts[1],value:31});

});
it('test 43',async() => {
await instance.sendTransaction({from:accounts[3],value:6});

result = await instance.withdraw(104532);
});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[1],value:35});

result = await instance.withdraw(927475);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 45',async() => {
await instance.sendTransaction({from:accounts[8],value:54});

result = await instance.withdraw(415445);
});
it('test 46',async() => {
result = await instance.withdraw(138688);
await instance.sendTransaction({from:accounts[6],value:74});

});
it('test 47',async() => {
result = await instance.withdraw(404883);
await instance.sendTransaction({from:accounts[8],value:11});

});
it('test 48',async() => {
result = await instance.withdraw(115659);
await instance.sendTransaction({from:accounts[6],value:74});

});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[3],value:26});

result = await instance.withdraw(739847);
});
});
