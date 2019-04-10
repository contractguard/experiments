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
await instance.sendTransaction({from:accounts[6],value:69});

result = await instance.withdraw(965340);
});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[6],value:11});

result = await instance.withdraw(773284);
});
it('test 2',async() => {
result = await instance.withdraw(880658);
await instance.sendTransaction({from:accounts[2],value:95});

});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[3],value:44});

result = await instance.withdraw(552833);
});
it('test 4',async() => {
result = await instance.withdraw(448298);
await instance.sendTransaction({from:accounts[3],value:23});

});
it('test 5',async() => {
result = await instance.withdraw(382978);
await instance.sendTransaction({from:accounts[2],value:89});

});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[9],value:33});

result = await instance.withdraw(113556);
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[5],value:44});

result = await instance.withdraw(244425);
});
it('test 8',async() => {
result = await instance.withdraw(428824);
await instance.sendTransaction({from:accounts[2],value:15});

});
it('test 9',async() => {
result = await instance.withdraw(989388);
await instance.sendTransaction({from:accounts[7],value:38});

});
it('test 10',async() => {
result = await instance.withdraw(549178);
await instance.sendTransaction({from:accounts[8],value:19});

});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[9],value:80});

result = await instance.withdraw(839821);
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[9],value:80});

result = await instance.withdraw(653454);
});
it('test 13',async() => {
result = await instance.withdraw(794598);
await instance.sendTransaction({from:accounts[8],value:31});

});
it('test 14',async() => {
result = await instance.withdraw(779446);
await instance.sendTransaction({from:accounts[7],value:61});

});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[9],value:40});

result = await instance.withdraw(1005066);
});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[6],value:63});

result = await instance.withdraw(952356);
});
it('test 17',async() => {
result = await instance.withdraw(677044);
await instance.sendTransaction({from:accounts[6],value:71});

});
it('test 18',async() => {
result = await instance.withdraw(908440);
await instance.sendTransaction({from:accounts[2],value:15});

});
it('test 19',async() => {
result = await instance.withdraw(373894);
await instance.sendTransaction({from:accounts[8],value:79});

});
it('test 20',async() => {
result = await instance.withdraw(455982);
await instance.sendTransaction({from:accounts[3],value:63});

});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[8],value:50});

result = await instance.withdraw(1045069);
});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[6],value:49});

result = await instance.withdraw(165503);
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[3],value:30});

result = await instance.withdraw(795905);
});
it('test 24',async() => {
result = await instance.withdraw(718780);
await instance.sendTransaction({from:accounts[1],value:26});

});
it('test 25',async() => {
result = await instance.withdraw(16764);
await instance.sendTransaction({from:accounts[7],value:61});

});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[3],value:40});

result = await instance.withdraw(855114);
});
it('test 27',async() => {
result = await instance.withdraw(815690);
await instance.sendTransaction({from:accounts[6],value:19});

});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[2],value:97});

result = await instance.withdraw(33150);
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[3],value:90});

result = await instance.withdraw(476525);
});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[6],value:62});

result = await instance.withdraw(439576);
});
it('test 31',async() => {
result = await instance.withdraw(262216);
await instance.sendTransaction({from:accounts[3],value:11});

});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[9],value:54});

result = await instance.withdraw(970323);
});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[2],value:4});

result = await instance.withdraw(903264);
});
it('test 34',async() => {
result = await instance.withdraw(594536);
await instance.sendTransaction({from:accounts[4],value:20});

});
it('test 35',async() => {
result = await instance.withdraw(880345);
await instance.sendTransaction({from:accounts[6],value:53});

});
it('test 36',async() => {
result = await instance.withdraw(960421);
await instance.sendTransaction({from:accounts[6],value:36});

});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[2],value:73});

result = await instance.withdraw(734426);
});
it('test 38',async() => {
result = await instance.withdraw(294303);
await instance.sendTransaction({from:accounts[4],value:21});

});
it('test 39',async() => {
result = await instance.withdraw(1034297);
await instance.sendTransaction({from:accounts[8],value:79});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 40',async() => {
await instance.sendTransaction({from:accounts[5],value:34});

result = await instance.withdraw(436863);
});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[3],value:16});

result = await instance.withdraw(867049);
});
it('test 42',async() => {
result = await instance.withdraw(882011);
await instance.sendTransaction({from:accounts[7],value:80});

});
it('test 43',async() => {
await instance.sendTransaction({from:accounts[6],value:34});

result = await instance.withdraw(36422);
});
it('test 44',async() => {
result = await instance.withdraw(932342);
await instance.sendTransaction({from:accounts[1],value:81});

});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[8],value:74});

result = await instance.withdraw(969779);
});
it('test 46',async() => {
result = await instance.withdraw(331178);
await instance.sendTransaction({from:accounts[4],value:21});

});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[7],value:79});

result = await instance.withdraw(85513);
});
it('test 48',async() => {
result = await instance.withdraw(721474);
await instance.sendTransaction({from:accounts[3],value:95});

});
it('test 49',async() => {
result = await instance.withdraw(820278);
await instance.sendTransaction({from:accounts[4],value:54});

});
});
