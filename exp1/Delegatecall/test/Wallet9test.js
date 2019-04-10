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
result = await instance.withdraw(492973);
await instance.sendTransaction({from:accounts[4],value:82});

});
it('test 1',async() => {
result = await instance.withdraw(589555);
await instance.sendTransaction({from:accounts[8],value:38});

});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[9],value:54});

result = await instance.withdraw(264618);
});
it('test 3',async() => {
result = await instance.withdraw(212290);
await instance.sendTransaction({from:accounts[9],value:79});

});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[7],value:48});

result = await instance.withdraw(355925);
});
it('test 5',async() => {
result = await instance.withdraw(366333);
await instance.sendTransaction({from:accounts[4],value:49});

});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[8],value:19});

result = await instance.withdraw(521311);
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[2],value:99});

result = await instance.withdraw(636879);
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[1],value:13});

result = await instance.withdraw(729430);
});
it('test 9',async() => {
result = await instance.withdraw(1035174);
await instance.sendTransaction({from:accounts[2],value:9});

});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[4],value:7});

result = await instance.withdraw(626091);
});
it('test 11',async() => {
result = await instance.withdraw(359696);
await instance.sendTransaction({from:accounts[4],value:13});

});
it('test 12',async() => {
result = await instance.withdraw(343412);
await instance.sendTransaction({from:accounts[7],value:19});

});
it('test 13',async() => {
result = await instance.withdraw(709619);
await instance.sendTransaction({from:accounts[1],value:92});

});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[3],value:57});

result = await instance.withdraw(832125);
});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[5],value:53});

result = await instance.withdraw(315991);
});
it('test 16',async() => {
result = await instance.withdraw(797995);
await instance.sendTransaction({from:accounts[9],value:21});

});
it('test 17',async() => {
result = await instance.withdraw(534929);
await instance.sendTransaction({from:accounts[1],value:13});

});
it('test 18',async() => {
result = await instance.withdraw(380962);
await instance.sendTransaction({from:accounts[3],value:81});

});
it('test 19',async() => {
result = await instance.withdraw(870221);
await instance.sendTransaction({from:accounts[7],value:29});

});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[5],value:17});

result = await instance.withdraw(1038918);
});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[1],value:13});

result = await instance.withdraw(470579);
});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[3],value:64});

result = await instance.withdraw(902787);
});
it('test 23',async() => {
result = await instance.withdraw(679811);
await instance.sendTransaction({from:accounts[4],value:51});

});
it('test 24',async() => {
result = await instance.withdraw(272348);
await instance.sendTransaction({from:accounts[8],value:22});

});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[8],value:59});

result = await instance.withdraw(268940);
});
it('test 26',async() => {
result = await instance.withdraw(983606);
await instance.sendTransaction({from:accounts[5],value:45});

});
it('test 27',async() => {
result = await instance.withdraw(741896);
await instance.sendTransaction({from:accounts[1],value:10});

});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[3],value:83});

result = await instance.withdraw(147792);
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[4],value:76});

result = await instance.withdraw(702618);
});
it('test 30',async() => {
result = await instance.withdraw(1002094);
await instance.sendTransaction({from:accounts[9],value:22});

});
it('test 31',async() => {
result = await instance.withdraw(792217);
await instance.sendTransaction({from:accounts[2],value:39});

});
it('test 32',async() => {
result = await instance.withdraw(879238);
await instance.sendTransaction({from:accounts[6],value:25});

});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[4],value:3});

result = await instance.withdraw(491865);
});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[3],value:16});

result = await instance.withdraw(681549);
});
it('test 35',async() => {
result = await instance.withdraw(629948);
await instance.sendTransaction({from:accounts[9],value:69});

});
it('test 36',async() => {
result = await instance.withdraw(942521);
await instance.sendTransaction({from:accounts[9],value:71});

});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[8],value:3});

result = await instance.withdraw(78337);
});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[2],value:10});

result = await instance.withdraw(932020);
});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[5],value:22});

result = await instance.withdraw(584820);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 40',async() => {
result = await instance.withdraw(408061);
await instance.sendTransaction({from:accounts[9],value:98});

});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[7],value:51});

result = await instance.withdraw(957078);
});
it('test 42',async() => {
result = await instance.withdraw(326250);
await instance.sendTransaction({from:accounts[4],value:23});

});
it('test 43',async() => {
result = await instance.withdraw(504023);
await instance.sendTransaction({from:accounts[9],value:93});

});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[1],value:60});

result = await instance.withdraw(794979);
});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[3],value:55});

result = await instance.withdraw(650571);
});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[6],value:25});

result = await instance.withdraw(65493);
});
it('test 47',async() => {
result = await instance.withdraw(203083);
await instance.sendTransaction({from:accounts[8],value:72});

});
it('test 48',async() => {
result = await instance.withdraw(795563);
await instance.sendTransaction({from:accounts[1],value:37});

});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[9],value:18});

result = await instance.withdraw(327172);
});
});
