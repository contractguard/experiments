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
result = await instance.withdraw(787601);
await instance.sendTransaction({from:accounts[5],value:35});

});
it('test 1',async() => {
result = await instance.withdraw(715656);
await instance.sendTransaction({from:accounts[5],value:80});

});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[1],value:40});

result = await instance.withdraw(1028664);
});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[6],value:33});

result = await instance.withdraw(1006015);
});
it('test 4',async() => {
result = await instance.withdraw(797096);
await instance.sendTransaction({from:accounts[2],value:68});

});
it('test 5',async() => {
result = await instance.withdraw(211997);
await instance.sendTransaction({from:accounts[6],value:20});

});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[2],value:21});

result = await instance.withdraw(311350);
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[8],value:28});

result = await instance.withdraw(753413);
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[1],value:80});

result = await instance.withdraw(460020);
});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[8],value:29});

result = await instance.withdraw(796000);
});
it('test 10',async() => {
result = await instance.withdraw(526624);
await instance.sendTransaction({from:accounts[5],value:66});

});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[4],value:94});

result = await instance.withdraw(1011536);
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[8],value:63});

result = await instance.withdraw(808124);
});
it('test 13',async() => {
result = await instance.withdraw(872835);
await instance.sendTransaction({from:accounts[2],value:15});

});
it('test 14',async() => {
result = await instance.withdraw(221094);
await instance.sendTransaction({from:accounts[6],value:92});

});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[6],value:82});

result = await instance.withdraw(415766);
});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[1],value:75});

result = await instance.withdraw(344072);
});
it('test 17',async() => {
result = await instance.withdraw(641076);
await instance.sendTransaction({from:accounts[2],value:74});

});
it('test 18',async() => {
result = await instance.withdraw(502311);
await instance.sendTransaction({from:accounts[9],value:72});

});
it('test 19',async() => {
result = await instance.withdraw(22821);
await instance.sendTransaction({from:accounts[8],value:46});

});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[3],value:81});

result = await instance.withdraw(535952);
});
it('test 21',async() => {
result = await instance.withdraw(189556);
await instance.sendTransaction({from:accounts[6],value:7});

});
it('test 22',async() => {
result = await instance.withdraw(497343);
await instance.sendTransaction({from:accounts[9],value:55});

});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[4],value:63});

result = await instance.withdraw(168839);
});
it('test 24',async() => {
result = await instance.withdraw(612685);
await instance.sendTransaction({from:accounts[2],value:13});

});
it('test 25',async() => {
result = await instance.withdraw(761004);
await instance.sendTransaction({from:accounts[3],value:53});

});
it('test 26',async() => {
result = await instance.withdraw(95587);
await instance.sendTransaction({from:accounts[9],value:87});

});
it('test 27',async() => {
result = await instance.withdraw(687387);
await instance.sendTransaction({from:accounts[9],value:37});

});
it('test 28',async() => {
result = await instance.withdraw(922558);
await instance.sendTransaction({from:accounts[5],value:8});

});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[5],value:42});

result = await instance.withdraw(1004246);
});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[1],value:59});

result = await instance.withdraw(471843);
});
it('test 31',async() => {
result = await instance.withdraw(987706);
await instance.sendTransaction({from:accounts[8],value:51});

});
it('test 32',async() => {
result = await instance.withdraw(932638);
await instance.sendTransaction({from:accounts[1],value:49});

});
it('test 33',async() => {
result = await instance.withdraw(687114);
await instance.sendTransaction({from:accounts[4],value:92});

});
it('test 34',async() => {
result = await instance.withdraw(297865);
await instance.sendTransaction({from:accounts[3],value:39});

});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[6],value:16});

result = await instance.withdraw(578615);
});
it('test 36',async() => {
result = await instance.withdraw(1008565);
await instance.sendTransaction({from:accounts[7],value:32});

});
it('test 37',async() => {
result = await instance.withdraw(661786);
await instance.sendTransaction({from:accounts[1],value:13});

});
it('test 38',async() => {
result = await instance.withdraw(885686);
await instance.sendTransaction({from:accounts[1],value:40});

});
it('test 39',async() => {
result = await instance.withdraw(184520);
await instance.sendTransaction({from:accounts[2],value:24});

});
it('test 40',async() => {
result = await instance.withdraw(689240);
await instance.sendTransaction({from:accounts[1],value:22});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 41',async() => {
await instance.sendTransaction({from:accounts[6],value:25});

result = await instance.withdraw(797688);
});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[3],value:55});

result = await instance.withdraw(716711);
});
it('test 43',async() => {
result = await instance.withdraw(857788);
await instance.sendTransaction({from:accounts[8],value:32});

});
it('test 44',async() => {
result = await instance.withdraw(692223);
await instance.sendTransaction({from:accounts[1],value:3});

});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[6],value:9});

result = await instance.withdraw(482899);
});
it('test 46',async() => {
result = await instance.withdraw(1034768);
await instance.sendTransaction({from:accounts[9],value:1});

});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[3],value:90});

result = await instance.withdraw(586238);
});
it('test 48',async() => {
result = await instance.withdraw(676413);
await instance.sendTransaction({from:accounts[2],value:46});

});
it('test 49',async() => {
result = await instance.withdraw(57938);
await instance.sendTransaction({from:accounts[2],value:6});

});
});
