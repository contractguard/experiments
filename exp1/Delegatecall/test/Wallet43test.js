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
await instance.sendTransaction({from:accounts[8],value:73});

result = await instance.withdraw(97655);
});
it('test 1',async() => {
result = await instance.withdraw(872022);
await instance.sendTransaction({from:accounts[5],value:12});

});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[8],value:43});

result = await instance.withdraw(461052);
});
it('test 3',async() => {
result = await instance.withdraw(644059);
await instance.sendTransaction({from:accounts[6],value:56});

});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[4],value:16});

result = await instance.withdraw(281835);
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[9],value:94});

result = await instance.withdraw(576370);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[3],value:22});

result = await instance.withdraw(723055);
});
it('test 7',async() => {
result = await instance.withdraw(175455);
await instance.sendTransaction({from:accounts[6],value:54});

});
it('test 8',async() => {
result = await instance.withdraw(717804);
await instance.sendTransaction({from:accounts[5],value:87});

});
it('test 9',async() => {
result = await instance.withdraw(224950);
await instance.sendTransaction({from:accounts[2],value:47});

});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[6],value:51});

result = await instance.withdraw(491454);
});
it('test 11',async() => {
result = await instance.withdraw(167115);
await instance.sendTransaction({from:accounts[7],value:100});

});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[7],value:49});

result = await instance.withdraw(211300);
});
it('test 13',async() => {
result = await instance.withdraw(543402);
await instance.sendTransaction({from:accounts[1],value:87});

});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[4],value:95});

result = await instance.withdraw(1014513);
});
it('test 15',async() => {
result = await instance.withdraw(1003538);
await instance.sendTransaction({from:accounts[1],value:76});

});
it('test 16',async() => {
result = await instance.withdraw(908935);
await instance.sendTransaction({from:accounts[6],value:6});

});
it('test 17',async() => {
result = await instance.withdraw(384665);
await instance.sendTransaction({from:accounts[2],value:65});

});
it('test 18',async() => {
result = await instance.withdraw(1025772);
await instance.sendTransaction({from:accounts[7],value:28});

});
it('test 19',async() => {
result = await instance.withdraw(412931);
await instance.sendTransaction({from:accounts[2],value:34});

});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[7],value:8});

result = await instance.withdraw(346201);
});
it('test 21',async() => {
result = await instance.withdraw(367559);
await instance.sendTransaction({from:accounts[3],value:49});

});
it('test 22',async() => {
result = await instance.withdraw(62469);
await instance.sendTransaction({from:accounts[4],value:6});

});
it('test 23',async() => {
result = await instance.withdraw(105287);
await instance.sendTransaction({from:accounts[8],value:29});

});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[2],value:58});

result = await instance.withdraw(122952);
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[2],value:1});

result = await instance.withdraw(519212);
});
it('test 26',async() => {
result = await instance.withdraw(598618);
await instance.sendTransaction({from:accounts[6],value:53});

});
it('test 27',async() => {
result = await instance.withdraw(69993);
await instance.sendTransaction({from:accounts[6],value:79});

});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[7],value:7});

result = await instance.withdraw(894617);
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[9],value:84});

result = await instance.withdraw(268088);
});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[6],value:92});

result = await instance.withdraw(113848);
});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[7],value:65});

result = await instance.withdraw(633671);
});
it('test 32',async() => {
result = await instance.withdraw(971220);
await instance.sendTransaction({from:accounts[9],value:23});

});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[9],value:17});

result = await instance.withdraw(398138);
});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[9],value:17});

result = await instance.withdraw(232861);
});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[4],value:100});

result = await instance.withdraw(699424);
});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[7],value:57});

result = await instance.withdraw(839443);
});
it('test 37',async() => {
result = await instance.withdraw(726486);
await instance.sendTransaction({from:accounts[7],value:70});

});
it('test 38',async() => {
result = await instance.withdraw(161457);
await instance.sendTransaction({from:accounts[2],value:67});

});
it('test 39',async() => {
result = await instance.withdraw(479798);
await instance.sendTransaction({from:accounts[4],value:77});

});
it('test 40',async() => {
await instance.sendTransaction({from:accounts[7],value:40});

result = await instance.withdraw(31197);
});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[7],value:30});

result = await instance.withdraw(557656);
});
it('test 42',async() => {
result = await instance.withdraw(138619);
await instance.sendTransaction({from:accounts[6],value:42});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 43',async() => {
result = await instance.withdraw(927205);
await instance.sendTransaction({from:accounts[1],value:19});

});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[9],value:95});

result = await instance.withdraw(1037296);
});
it('test 45',async() => {
result = await instance.withdraw(426179);
await instance.sendTransaction({from:accounts[3],value:57});

});
it('test 46',async() => {
result = await instance.withdraw(301650);
await instance.sendTransaction({from:accounts[5],value:20});

});
it('test 47',async() => {
result = await instance.withdraw(54454);
await instance.sendTransaction({from:accounts[3],value:99});

});
it('test 48',async() => {
result = await instance.withdraw(693386);
await instance.sendTransaction({from:accounts[5],value:73});

});
it('test 49',async() => {
result = await instance.withdraw(169084);
await instance.sendTransaction({from:accounts[7],value:19});

});
});
