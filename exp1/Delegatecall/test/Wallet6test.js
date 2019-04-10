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
await instance.sendTransaction({from:accounts[5],value:74});

result = await instance.withdraw(302345);
});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[4],value:12});

result = await instance.withdraw(269177);
});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[2],value:11});

result = await instance.withdraw(1018799);
});
it('test 3',async() => {
result = await instance.withdraw(1037409);
await instance.sendTransaction({from:accounts[2],value:90});

});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[4],value:81});

result = await instance.withdraw(325211);
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[2],value:79});

result = await instance.withdraw(891493);
});
it('test 6',async() => {
result = await instance.withdraw(894130);
await instance.sendTransaction({from:accounts[6],value:55});

});
it('test 7',async() => {
result = await instance.withdraw(445665);
await instance.sendTransaction({from:accounts[9],value:37});

});
it('test 8',async() => {
result = await instance.withdraw(228049);
await instance.sendTransaction({from:accounts[4],value:94});

});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[6],value:91});

result = await instance.withdraw(59705);
});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[2],value:68});

result = await instance.withdraw(645226);
});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[6],value:20});

result = await instance.withdraw(947981);
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[2],value:45});

result = await instance.withdraw(455631);
});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[6],value:95});

result = await instance.withdraw(866191);
});
it('test 14',async() => {
result = await instance.withdraw(812256);
await instance.sendTransaction({from:accounts[2],value:66});

});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[3],value:33});

result = await instance.withdraw(484302);
});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[3],value:99});

result = await instance.withdraw(728764);
});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[7],value:88});

result = await instance.withdraw(344541);
});
it('test 18',async() => {
result = await instance.withdraw(896644);
await instance.sendTransaction({from:accounts[5],value:69});

});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[6],value:19});

result = await instance.withdraw(669846);
});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[3],value:69});

result = await instance.withdraw(480939);
});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[6],value:95});

result = await instance.withdraw(36238);
});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[5],value:7});

result = await instance.withdraw(686507);
});
it('test 23',async() => {
result = await instance.withdraw(1047322);
await instance.sendTransaction({from:accounts[2],value:32});

});
it('test 24',async() => {
result = await instance.withdraw(575995);
await instance.sendTransaction({from:accounts[5],value:54});

});
it('test 25',async() => {
result = await instance.withdraw(590078);
await instance.sendTransaction({from:accounts[1],value:47});

});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[9],value:73});

result = await instance.withdraw(741165);
});
it('test 27',async() => {
result = await instance.withdraw(355639);
await instance.sendTransaction({from:accounts[6],value:61});

});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[4],value:97});

result = await instance.withdraw(336919);
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[1],value:88});

result = await instance.withdraw(30076);
});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[8],value:53});

result = await instance.withdraw(601917);
});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[5],value:5});

result = await instance.withdraw(472566);
});
it('test 32',async() => {
result = await instance.withdraw(666230);
await instance.sendTransaction({from:accounts[6],value:11});

});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[1],value:1});

result = await instance.withdraw(608187);
});
it('test 34',async() => {
result = await instance.withdraw(508149);
await instance.sendTransaction({from:accounts[2],value:32});

});
it('test 35',async() => {
result = await instance.withdraw(755347);
await instance.sendTransaction({from:accounts[3],value:5});

});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[3],value:89});

result = await instance.withdraw(900090);
});
it('test 37',async() => {
result = await instance.withdraw(411068);
await instance.sendTransaction({from:accounts[9],value:69});

});
it('test 38',async() => {
result = await instance.withdraw(851871);
await instance.sendTransaction({from:accounts[2],value:54});

});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[8],value:75});

result = await instance.withdraw(282945);
});
it('test 40',async() => {
await instance.sendTransaction({from:accounts[7],value:81});

result = await instance.withdraw(338225);
});
it('test 41',async() => {
result = await instance.withdraw(954138);
await instance.sendTransaction({from:accounts[9],value:68});

});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[2],value:67});

result = await instance.withdraw(199811);
});
it('test 43',async() => {
await instance.sendTransaction({from:accounts[5],value:4});

result = await instance.withdraw(689360);
});
it('test 44',async() => {
result = await instance.withdraw(829198);
await instance.sendTransaction({from:accounts[7],value:76});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 45',async() => {
await instance.sendTransaction({from:accounts[6],value:28});

result = await instance.withdraw(37142);
});
it('test 46',async() => {
result = await instance.withdraw(108642);
await instance.sendTransaction({from:accounts[1],value:95});

});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[1],value:8});

result = await instance.withdraw(653189);
});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[5],value:45});

result = await instance.withdraw(616692);
});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[1],value:66});

result = await instance.withdraw(824772);
});
});
