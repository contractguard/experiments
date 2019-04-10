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
await instance.sendTransaction({from:accounts[9],value:8});

result = await instance.withdraw(1005836);
});
it('test 1',async() => {
result = await instance.withdraw(874517);
await instance.sendTransaction({from:accounts[3],value:82});

});
it('test 2',async() => {
result = await instance.withdraw(4512);
await instance.sendTransaction({from:accounts[7],value:68});

});
it('test 3',async() => {
result = await instance.withdraw(388975);
await instance.sendTransaction({from:accounts[2],value:49});

});
it('test 4',async() => {
result = await instance.withdraw(934935);
await instance.sendTransaction({from:accounts[9],value:36});

});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[2],value:69});

result = await instance.withdraw(685837);
});
it('test 6',async() => {
result = await instance.withdraw(109064);
await instance.sendTransaction({from:accounts[1],value:58});

});
it('test 7',async() => {
result = await instance.withdraw(123748);
await instance.sendTransaction({from:accounts[3],value:49});

});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[4],value:2});

result = await instance.withdraw(233959);
});
it('test 9',async() => {
result = await instance.withdraw(310323);
await instance.sendTransaction({from:accounts[5],value:20});

});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[7],value:89});

result = await instance.withdraw(442177);
});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[9],value:51});

result = await instance.withdraw(961090);
});
it('test 12',async() => {
result = await instance.withdraw(293232);
await instance.sendTransaction({from:accounts[7],value:17});

});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[3],value:54});

result = await instance.withdraw(221969);
});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[1],value:16});

result = await instance.withdraw(629720);
});
it('test 15',async() => {
result = await instance.withdraw(504397);
await instance.sendTransaction({from:accounts[3],value:69});

});
it('test 16',async() => {
result = await instance.withdraw(179809);
await instance.sendTransaction({from:accounts[7],value:100});

});
it('test 17',async() => {
result = await instance.withdraw(473880);
await instance.sendTransaction({from:accounts[7],value:88});

});
it('test 18',async() => {
result = await instance.withdraw(259550);
await instance.sendTransaction({from:accounts[3],value:13});

});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[9],value:60});

result = await instance.withdraw(618367);
});
it('test 20',async() => {
result = await instance.withdraw(892966);
await instance.sendTransaction({from:accounts[5],value:40});

});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[3],value:10});

result = await instance.withdraw(308270);
});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[8],value:79});

result = await instance.withdraw(271454);
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[5],value:52});

result = await instance.withdraw(365482);
});
it('test 24',async() => {
result = await instance.withdraw(933427);
await instance.sendTransaction({from:accounts[1],value:53});

});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[9],value:16});

result = await instance.withdraw(235750);
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[1],value:9});

result = await instance.withdraw(1025063);
});
it('test 27',async() => {
result = await instance.withdraw(398024);
await instance.sendTransaction({from:accounts[1],value:85});

});
it('test 28',async() => {
result = await instance.withdraw(859429);
await instance.sendTransaction({from:accounts[5],value:25});

});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[5],value:5});

result = await instance.withdraw(627234);
});
it('test 30',async() => {
result = await instance.withdraw(728236);
await instance.sendTransaction({from:accounts[3],value:19});

});
it('test 31',async() => {
result = await instance.withdraw(517500);
await instance.sendTransaction({from:accounts[8],value:50});

});
it('test 32',async() => {
result = await instance.withdraw(348918);
await instance.sendTransaction({from:accounts[1],value:76});

});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[9],value:66});

result = await instance.withdraw(736512);
});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[4],value:85});

result = await instance.withdraw(4618);
});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[6],value:5});

result = await instance.withdraw(846694);
});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[8],value:10});

result = await instance.withdraw(322263);
});
it('test 37',async() => {
result = await instance.withdraw(359661);
await instance.sendTransaction({from:accounts[6],value:36});

});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[3],value:19});

result = await instance.withdraw(393727);
});
it('test 39',async() => {
result = await instance.withdraw(123203);
await instance.sendTransaction({from:accounts[4],value:89});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 40',async() => {
result = await instance.withdraw(70380);
await instance.sendTransaction({from:accounts[8],value:63});

});
it('test 41',async() => {
result = await instance.withdraw(289526);
await instance.sendTransaction({from:accounts[9],value:65});

});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[7],value:38});

result = await instance.withdraw(426507);
});
it('test 43',async() => {
result = await instance.withdraw(732448);
await instance.sendTransaction({from:accounts[8],value:18});

});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[3],value:80});

result = await instance.withdraw(68552);
});
it('test 45',async() => {
result = await instance.withdraw(525500);
await instance.sendTransaction({from:accounts[6],value:99});

});
it('test 46',async() => {
result = await instance.withdraw(678523);
await instance.sendTransaction({from:accounts[7],value:91});

});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[6],value:48});

result = await instance.withdraw(889561);
});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[7],value:18});

result = await instance.withdraw(679153);
});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[1],value:99});

result = await instance.withdraw(704098);
});
});
