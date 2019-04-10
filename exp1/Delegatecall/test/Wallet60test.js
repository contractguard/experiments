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
await instance.sendTransaction({from:accounts[2],value:90});

result = await instance.withdraw(953360);
});
it('test 1',async() => {
result = await instance.withdraw(210806);
await instance.sendTransaction({from:accounts[3],value:41});

});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[8],value:9});

result = await instance.withdraw(693845);
});
it('test 3',async() => {
result = await instance.withdraw(537984);
await instance.sendTransaction({from:accounts[9],value:54});

});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[7],value:86});

result = await instance.withdraw(404563);
});
it('test 5',async() => {
result = await instance.withdraw(66426);
await instance.sendTransaction({from:accounts[5],value:80});

});
it('test 6',async() => {
result = await instance.withdraw(297757);
await instance.sendTransaction({from:accounts[2],value:5});

});
it('test 7',async() => {
result = await instance.withdraw(903940);
await instance.sendTransaction({from:accounts[1],value:15});

});
it('test 8',async() => {
result = await instance.withdraw(510270);
await instance.sendTransaction({from:accounts[1],value:16});

});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[3],value:100});

result = await instance.withdraw(403120);
});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[8],value:96});

result = await instance.withdraw(607816);
});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[8],value:8});

result = await instance.withdraw(99782);
});
it('test 12',async() => {
result = await instance.withdraw(246970);
await instance.sendTransaction({from:accounts[4],value:9});

});
it('test 13',async() => {
result = await instance.withdraw(84071);
await instance.sendTransaction({from:accounts[6],value:80});

});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[8],value:44});

result = await instance.withdraw(496343);
});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[7],value:1});

result = await instance.withdraw(1038331);
});
it('test 16',async() => {
result = await instance.withdraw(288363);
await instance.sendTransaction({from:accounts[9],value:34});

});
it('test 17',async() => {
result = await instance.withdraw(657450);
await instance.sendTransaction({from:accounts[6],value:69});

});
it('test 18',async() => {
result = await instance.withdraw(342730);
await instance.sendTransaction({from:accounts[5],value:3});

});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[5],value:46});

result = await instance.withdraw(985036);
});
it('test 20',async() => {
result = await instance.withdraw(175771);
await instance.sendTransaction({from:accounts[1],value:39});

});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[1],value:46});

result = await instance.withdraw(985633);
});
it('test 22',async() => {
result = await instance.withdraw(935749);
await instance.sendTransaction({from:accounts[1],value:58});

});
it('test 23',async() => {
result = await instance.withdraw(208058);
await instance.sendTransaction({from:accounts[3],value:40});

});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[7],value:35});

result = await instance.withdraw(5605);
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[4],value:89});

result = await instance.withdraw(755209);
});
it('test 26',async() => {
result = await instance.withdraw(893615);
await instance.sendTransaction({from:accounts[4],value:15});

});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[6],value:16});

result = await instance.withdraw(569541);
});
it('test 28',async() => {
result = await instance.withdraw(824613);
await instance.sendTransaction({from:accounts[5],value:50});

});
it('test 29',async() => {
result = await instance.withdraw(575183);
await instance.sendTransaction({from:accounts[4],value:50});

});
it('test 30',async() => {
result = await instance.withdraw(855034);
await instance.sendTransaction({from:accounts[6],value:71});

});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[2],value:86});

result = await instance.withdraw(83236);
});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[3],value:45});

result = await instance.withdraw(755327);
});
it('test 33',async() => {
result = await instance.withdraw(1037951);
await instance.sendTransaction({from:accounts[1],value:14});

});
it('test 34',async() => {
result = await instance.withdraw(471862);
await instance.sendTransaction({from:accounts[2],value:42});

});
it('test 35',async() => {
result = await instance.withdraw(434984);
await instance.sendTransaction({from:accounts[3],value:55});

});
it('test 36',async() => {
result = await instance.withdraw(836310);
await instance.sendTransaction({from:accounts[9],value:69});

});
it('test 37',async() => {
result = await instance.withdraw(308219);
await instance.sendTransaction({from:accounts[3],value:54});

});
it('test 38',async() => {
result = await instance.withdraw(185232);
await instance.sendTransaction({from:accounts[3],value:19});

});
it('test 39',async() => {
result = await instance.withdraw(773807);
await instance.sendTransaction({from:accounts[4],value:9});

});
it('test 40',async() => {
result = await instance.withdraw(952022);
await instance.sendTransaction({from:accounts[3],value:100});

});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[1],value:48});

result = await instance.withdraw(694033);
});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[1],value:39});

result = await instance.withdraw(899530);
});
it('test 43',async() => {
await instance.sendTransaction({from:accounts[3],value:90});

result = await instance.withdraw(219019);
});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[6],value:61});

result = await instance.withdraw(269650);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 45',async() => {
result = await instance.withdraw(864031);
await instance.sendTransaction({from:accounts[7],value:6});

});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[6],value:77});

result = await instance.withdraw(582394);
});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[1],value:65});

result = await instance.withdraw(168308);
});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[6],value:95});

result = await instance.withdraw(234234);
});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[4],value:4});

result = await instance.withdraw(270980);
});
});
