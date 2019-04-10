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
await instance.sendTransaction({from:accounts[5],value:45});

result = await instance.withdraw(98363);
});
it('test 1',async() => {
result = await instance.withdraw(272492);
await instance.sendTransaction({from:accounts[5],value:4});

});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[5],value:73});

result = await instance.withdraw(173004);
});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[8],value:68});

result = await instance.withdraw(720702);
});
it('test 4',async() => {
result = await instance.withdraw(706558);
await instance.sendTransaction({from:accounts[6],value:46});

});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[3],value:98});

result = await instance.withdraw(135884);
});
it('test 6',async() => {
result = await instance.withdraw(107340);
await instance.sendTransaction({from:accounts[1],value:76});

});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[6],value:69});

result = await instance.withdraw(94420);
});
it('test 8',async() => {
result = await instance.withdraw(724222);
await instance.sendTransaction({from:accounts[5],value:86});

});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[7],value:24});

result = await instance.withdraw(469075);
});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[4],value:43});

result = await instance.withdraw(60551);
});
it('test 11',async() => {
result = await instance.withdraw(504405);
await instance.sendTransaction({from:accounts[1],value:11});

});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[6],value:44});

result = await instance.withdraw(545232);
});
it('test 13',async() => {
result = await instance.withdraw(674080);
await instance.sendTransaction({from:accounts[5],value:44});

});
it('test 14',async() => {
result = await instance.withdraw(61832);
await instance.sendTransaction({from:accounts[5],value:61});

});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[4],value:86});

result = await instance.withdraw(374433);
});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[9],value:12});

result = await instance.withdraw(25173);
});
it('test 17',async() => {
result = await instance.withdraw(932915);
await instance.sendTransaction({from:accounts[6],value:61});

});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[6],value:2});

result = await instance.withdraw(1021629);
});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[5],value:34});

result = await instance.withdraw(248394);
});
it('test 20',async() => {
result = await instance.withdraw(608156);
await instance.sendTransaction({from:accounts[1],value:84});

});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[5],value:90});

result = await instance.withdraw(151436);
});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[3],value:10});

result = await instance.withdraw(665818);
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[8],value:72});

result = await instance.withdraw(26235);
});
it('test 24',async() => {
result = await instance.withdraw(1037815);
await instance.sendTransaction({from:accounts[3],value:73});

});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[9],value:55});

result = await instance.withdraw(24784);
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[2],value:86});

result = await instance.withdraw(870825);
});
it('test 27',async() => {
result = await instance.withdraw(342129);
await instance.sendTransaction({from:accounts[1],value:76});

});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[2],value:14});

result = await instance.withdraw(631400);
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[8],value:90});

result = await instance.withdraw(91046);
});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[9],value:39});

result = await instance.withdraw(876588);
});
it('test 31',async() => {
result = await instance.withdraw(893824);
await instance.sendTransaction({from:accounts[5],value:1});

});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[5],value:14});

result = await instance.withdraw(654912);
});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[9],value:65});

result = await instance.withdraw(628922);
});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[4],value:5});

result = await instance.withdraw(1013958);
});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[6],value:84});

result = await instance.withdraw(709891);
});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[2],value:17});

result = await instance.withdraw(862162);
});
it('test 37',async() => {
result = await instance.withdraw(271252);
await instance.sendTransaction({from:accounts[8],value:14});

});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[8],value:94});

result = await instance.withdraw(93174);
});
it('test 39',async() => {
result = await instance.withdraw(926848);
await instance.sendTransaction({from:accounts[5],value:54});

});
it('test 40',async() => {
result = await instance.withdraw(1019829);
await instance.sendTransaction({from:accounts[4],value:20});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 41',async() => {
await instance.sendTransaction({from:accounts[8],value:63});

result = await instance.withdraw(792106);
});
it('test 42',async() => {
result = await instance.withdraw(955313);
await instance.sendTransaction({from:accounts[8],value:49});

});
it('test 43',async() => {
await instance.sendTransaction({from:accounts[8],value:44});

result = await instance.withdraw(207504);
});
it('test 44',async() => {
result = await instance.withdraw(1030732);
await instance.sendTransaction({from:accounts[5],value:19});

});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[7],value:38});

result = await instance.withdraw(577880);
});
it('test 46',async() => {
result = await instance.withdraw(892952);
await instance.sendTransaction({from:accounts[2],value:40});

});
it('test 47',async() => {
result = await instance.withdraw(750910);
await instance.sendTransaction({from:accounts[6],value:43});

});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[5],value:21});

result = await instance.withdraw(364352);
});
it('test 49',async() => {
result = await instance.withdraw(471439);
await instance.sendTransaction({from:accounts[9],value:7});

});
});
