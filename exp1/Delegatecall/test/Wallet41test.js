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
await instance.sendTransaction({from:accounts[2],value:93});

result = await instance.withdraw(266727);
});
it('test 1',async() => {
result = await instance.withdraw(297663);
await instance.sendTransaction({from:accounts[3],value:56});

});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[1],value:15});

result = await instance.withdraw(639287);
});
it('test 3',async() => {
result = await instance.withdraw(47489);
await instance.sendTransaction({from:accounts[3],value:95});

});
it('test 4',async() => {
result = await instance.withdraw(427936);
await instance.sendTransaction({from:accounts[1],value:30});

});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[1],value:98});

result = await instance.withdraw(306639);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[8],value:72});

result = await instance.withdraw(811128);
});
it('test 7',async() => {
result = await instance.withdraw(820707);
await instance.sendTransaction({from:accounts[7],value:51});

});
it('test 8',async() => {
result = await instance.withdraw(235586);
await instance.sendTransaction({from:accounts[6],value:41});

});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[9],value:36});

result = await instance.withdraw(30642);
});
it('test 10',async() => {
result = await instance.withdraw(957130);
await instance.sendTransaction({from:accounts[7],value:23});

});
it('test 11',async() => {
result = await instance.withdraw(822612);
await instance.sendTransaction({from:accounts[8],value:94});

});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[5],value:54});

result = await instance.withdraw(597530);
});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[3],value:89});

result = await instance.withdraw(10727);
});
it('test 14',async() => {
result = await instance.withdraw(13532);
await instance.sendTransaction({from:accounts[8],value:13});

});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[2],value:14});

result = await instance.withdraw(558270);
});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[7],value:61});

result = await instance.withdraw(157246);
});
it('test 17',async() => {
result = await instance.withdraw(274767);
await instance.sendTransaction({from:accounts[8],value:63});

});
it('test 18',async() => {
result = await instance.withdraw(6020);
await instance.sendTransaction({from:accounts[9],value:28});

});
it('test 19',async() => {
result = await instance.withdraw(775107);
await instance.sendTransaction({from:accounts[9],value:1});

});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[7],value:68});

result = await instance.withdraw(421526);
});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[9],value:30});

result = await instance.withdraw(662842);
});
it('test 22',async() => {
result = await instance.withdraw(895928);
await instance.sendTransaction({from:accounts[2],value:10});

});
it('test 23',async() => {
result = await instance.withdraw(1017585);
await instance.sendTransaction({from:accounts[2],value:81});

});
it('test 24',async() => {
result = await instance.withdraw(809384);
await instance.sendTransaction({from:accounts[4],value:21});

});
it('test 25',async() => {
result = await instance.withdraw(543778);
await instance.sendTransaction({from:accounts[9],value:59});

});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[8],value:25});

result = await instance.withdraw(941579);
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[3],value:68});

result = await instance.withdraw(558826);
});
it('test 28',async() => {
result = await instance.withdraw(381046);
await instance.sendTransaction({from:accounts[5],value:89});

});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[3],value:40});

result = await instance.withdraw(908311);
});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[7],value:54});

result = await instance.withdraw(218967);
});
it('test 31',async() => {
result = await instance.withdraw(35140);
await instance.sendTransaction({from:accounts[3],value:36});

});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[1],value:92});

result = await instance.withdraw(816029);
});
it('test 33',async() => {
result = await instance.withdraw(182735);
await instance.sendTransaction({from:accounts[1],value:25});

});
it('test 34',async() => {
result = await instance.withdraw(952675);
await instance.sendTransaction({from:accounts[7],value:11});

});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[5],value:72});

result = await instance.withdraw(339575);
});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[6],value:81});

result = await instance.withdraw(814790);
});
it('test 37',async() => {
result = await instance.withdraw(48835);
await instance.sendTransaction({from:accounts[5],value:11});

});
it('test 38',async() => {
result = await instance.withdraw(488125);
await instance.sendTransaction({from:accounts[2],value:28});

});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[1],value:57});

result = await instance.withdraw(907035);
});
it('test 40',async() => {
await instance.sendTransaction({from:accounts[6],value:38});

result = await instance.withdraw(430204);
});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[6],value:95});

result = await instance.withdraw(480066);
});
it('test 42',async() => {
result = await instance.withdraw(24626);
await instance.sendTransaction({from:accounts[6],value:42});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 43',async() => {
await instance.sendTransaction({from:accounts[8],value:41});

result = await instance.withdraw(502316);
});
it('test 44',async() => {
result = await instance.withdraw(336798);
await instance.sendTransaction({from:accounts[5],value:47});

});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[4],value:65});

result = await instance.withdraw(595584);
});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[7],value:76});

result = await instance.withdraw(640709);
});
it('test 47',async() => {
result = await instance.withdraw(554774);
await instance.sendTransaction({from:accounts[2],value:57});

});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[7],value:58});

result = await instance.withdraw(618690);
});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[6],value:85});

result = await instance.withdraw(198284);
});
});
