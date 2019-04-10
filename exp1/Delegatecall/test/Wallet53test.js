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
result = await instance.withdraw(212814);
await instance.sendTransaction({from:accounts[6],value:33});

});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[7],value:4});

result = await instance.withdraw(302947);
});
it('test 2',async() => {
result = await instance.withdraw(507872);
await instance.sendTransaction({from:accounts[5],value:46});

});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[8],value:99});

result = await instance.withdraw(760490);
});
it('test 4',async() => {
result = await instance.withdraw(870544);
await instance.sendTransaction({from:accounts[9],value:26});

});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[5],value:96});

result = await instance.withdraw(333930);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[2],value:82});

result = await instance.withdraw(599795);
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[9],value:78});

result = await instance.withdraw(244738);
});
it('test 8',async() => {
result = await instance.withdraw(727971);
await instance.sendTransaction({from:accounts[8],value:96});

});
it('test 9',async() => {
result = await instance.withdraw(1023107);
await instance.sendTransaction({from:accounts[4],value:90});

});
it('test 10',async() => {
result = await instance.withdraw(935515);
await instance.sendTransaction({from:accounts[6],value:8});

});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[4],value:44});

result = await instance.withdraw(68091);
});
it('test 12',async() => {
result = await instance.withdraw(714263);
await instance.sendTransaction({from:accounts[3],value:59});

});
it('test 13',async() => {
result = await instance.withdraw(379730);
await instance.sendTransaction({from:accounts[6],value:59});

});
it('test 14',async() => {
result = await instance.withdraw(182187);
await instance.sendTransaction({from:accounts[3],value:95});

});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[4],value:71});

result = await instance.withdraw(405053);
});
it('test 16',async() => {
result = await instance.withdraw(535375);
await instance.sendTransaction({from:accounts[5],value:95});

});
it('test 17',async() => {
result = await instance.withdraw(82402);
await instance.sendTransaction({from:accounts[9],value:1});

});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[2],value:66});

result = await instance.withdraw(293013);
});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[3],value:46});

result = await instance.withdraw(938883);
});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[9],value:97});

result = await instance.withdraw(134572);
});
it('test 21',async() => {
result = await instance.withdraw(763982);
await instance.sendTransaction({from:accounts[1],value:34});

});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[8],value:83});

result = await instance.withdraw(133304);
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[6],value:24});

result = await instance.withdraw(802106);
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[7],value:67});

result = await instance.withdraw(918275);
});
it('test 25',async() => {
result = await instance.withdraw(782363);
await instance.sendTransaction({from:accounts[5],value:42});

});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[9],value:5});

result = await instance.withdraw(333886);
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[6],value:31});

result = await instance.withdraw(356769);
});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[5],value:5});

result = await instance.withdraw(530063);
});
it('test 29',async() => {
result = await instance.withdraw(994598);
await instance.sendTransaction({from:accounts[9],value:23});

});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[5],value:84});

result = await instance.withdraw(859352);
});
it('test 31',async() => {
result = await instance.withdraw(23352);
await instance.sendTransaction({from:accounts[8],value:22});

});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[8],value:79});

result = await instance.withdraw(298705);
});
it('test 33',async() => {
result = await instance.withdraw(159174);
await instance.sendTransaction({from:accounts[9],value:16});

});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[8],value:5});

result = await instance.withdraw(1010568);
});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[3],value:66});

result = await instance.withdraw(683133);
});
it('test 36',async() => {
result = await instance.withdraw(413802);
await instance.sendTransaction({from:accounts[5],value:30});

});
it('test 37',async() => {
result = await instance.withdraw(466826);
await instance.sendTransaction({from:accounts[9],value:100});

});
it('test 38',async() => {
result = await instance.withdraw(148247);
await instance.sendTransaction({from:accounts[2],value:71});

});
it('test 39',async() => {
result = await instance.withdraw(463);
await instance.sendTransaction({from:accounts[6],value:93});

});
it('test 40',async() => {
result = await instance.withdraw(271287);
await instance.sendTransaction({from:accounts[9],value:99});

});
it('test 41',async() => {
result = await instance.withdraw(105135);
await instance.sendTransaction({from:accounts[8],value:63});

});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[7],value:5});

result = await instance.withdraw(533662);
});
it('test 43',async() => {
await instance.sendTransaction({from:accounts[2],value:62});

result = await instance.withdraw(36235);
});
it('test 44',async() => {
result = await instance.withdraw(330598);
await instance.sendTransaction({from:accounts[8],value:44});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 45',async() => {
await instance.sendTransaction({from:accounts[6],value:1});

result = await instance.withdraw(662452);
});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[2],value:38});

result = await instance.withdraw(290298);
});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[1],value:13});

result = await instance.withdraw(864032);
});
it('test 48',async() => {
result = await instance.withdraw(268519);
await instance.sendTransaction({from:accounts[6],value:33});

});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[9],value:73});

result = await instance.withdraw(764671);
});
});
