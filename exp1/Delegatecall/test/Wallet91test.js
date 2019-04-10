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
result = await instance.withdraw(142821);
await instance.sendTransaction({from:accounts[2],value:67});

});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[3],value:76});

result = await instance.withdraw(956807);
});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[1],value:48});

result = await instance.withdraw(863353);
});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[1],value:60});

result = await instance.withdraw(699392);
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[9],value:71});

result = await instance.withdraw(608542);
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[5],value:29});

result = await instance.withdraw(1033329);
});
it('test 6',async() => {
result = await instance.withdraw(599834);
await instance.sendTransaction({from:accounts[2],value:76});

});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[3],value:67});

result = await instance.withdraw(921195);
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[5],value:17});

result = await instance.withdraw(780907);
});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[3],value:42});

result = await instance.withdraw(799768);
});
it('test 10',async() => {
result = await instance.withdraw(921106);
await instance.sendTransaction({from:accounts[9],value:27});

});
it('test 11',async() => {
result = await instance.withdraw(102839);
await instance.sendTransaction({from:accounts[7],value:42});

});
it('test 12',async() => {
result = await instance.withdraw(268487);
await instance.sendTransaction({from:accounts[4],value:92});

});
it('test 13',async() => {
result = await instance.withdraw(428683);
await instance.sendTransaction({from:accounts[6],value:78});

});
it('test 14',async() => {
result = await instance.withdraw(534689);
await instance.sendTransaction({from:accounts[2],value:37});

});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[8],value:83});

result = await instance.withdraw(105447);
});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[7],value:95});

result = await instance.withdraw(400218);
});
it('test 17',async() => {
result = await instance.withdraw(627950);
await instance.sendTransaction({from:accounts[8],value:28});

});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[5],value:9});

result = await instance.withdraw(96347);
});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[9],value:69});

result = await instance.withdraw(50621);
});
it('test 20',async() => {
result = await instance.withdraw(996617);
await instance.sendTransaction({from:accounts[3],value:30});

});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[8],value:3});

result = await instance.withdraw(281444);
});
it('test 22',async() => {
result = await instance.withdraw(122150);
await instance.sendTransaction({from:accounts[3],value:59});

});
it('test 23',async() => {
result = await instance.withdraw(960062);
await instance.sendTransaction({from:accounts[8],value:27});

});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[9],value:21});

result = await instance.withdraw(590689);
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[3],value:42});

result = await instance.withdraw(861606);
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[1],value:47});

result = await instance.withdraw(653420);
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[8],value:91});

result = await instance.withdraw(190158);
});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[3],value:22});

result = await instance.withdraw(767803);
});
it('test 29',async() => {
result = await instance.withdraw(84207);
await instance.sendTransaction({from:accounts[1],value:98});

});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[9],value:99});

result = await instance.withdraw(389145);
});
it('test 31',async() => {
result = await instance.withdraw(568802);
await instance.sendTransaction({from:accounts[4],value:83});

});
it('test 32',async() => {
result = await instance.withdraw(810190);
await instance.sendTransaction({from:accounts[1],value:81});

});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[7],value:100});

result = await instance.withdraw(1029233);
});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[6],value:2});

result = await instance.withdraw(57783);
});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[9],value:46});

result = await instance.withdraw(667259);
});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[9],value:5});

result = await instance.withdraw(40490);
});
it('test 37',async() => {
result = await instance.withdraw(129547);
await instance.sendTransaction({from:accounts[6],value:58});

});
it('test 38',async() => {
result = await instance.withdraw(499006);
await instance.sendTransaction({from:accounts[9],value:66});

});
it('test 39',async() => {
result = await instance.withdraw(997819);
await instance.sendTransaction({from:accounts[7],value:80});

});
it('test 40',async() => {
result = await instance.withdraw(989107);
await instance.sendTransaction({from:accounts[4],value:98});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 41',async() => {
await instance.sendTransaction({from:accounts[6],value:47});

result = await instance.withdraw(232915);
});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[8],value:3});

result = await instance.withdraw(181529);
});
it('test 43',async() => {
await instance.sendTransaction({from:accounts[7],value:43});

result = await instance.withdraw(522357);
});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[1],value:5});

result = await instance.withdraw(580056);
});
it('test 45',async() => {
result = await instance.withdraw(872996);
await instance.sendTransaction({from:accounts[6],value:32});

});
it('test 46',async() => {
result = await instance.withdraw(982225);
await instance.sendTransaction({from:accounts[8],value:2});

});
it('test 47',async() => {
result = await instance.withdraw(701821);
await instance.sendTransaction({from:accounts[6],value:20});

});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[3],value:3});

result = await instance.withdraw(846191);
});
it('test 49',async() => {
result = await instance.withdraw(327619);
await instance.sendTransaction({from:accounts[2],value:36});

});
});
