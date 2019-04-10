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
result = await instance.withdraw(1020600);
await instance.sendTransaction({from:accounts[4],value:20});

});
it('test 1',async() => {
result = await instance.withdraw(955948);
await instance.sendTransaction({from:accounts[1],value:5});

});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[2],value:99});

result = await instance.withdraw(673492);
});
it('test 3',async() => {
result = await instance.withdraw(608933);
await instance.sendTransaction({from:accounts[2],value:74});

});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[4],value:41});

result = await instance.withdraw(195956);
});
it('test 5',async() => {
result = await instance.withdraw(695140);
await instance.sendTransaction({from:accounts[5],value:21});

});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[4],value:19});

result = await instance.withdraw(779377);
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[8],value:44});

result = await instance.withdraw(445065);
});
it('test 8',async() => {
result = await instance.withdraw(762164);
await instance.sendTransaction({from:accounts[1],value:53});

});
it('test 9',async() => {
result = await instance.withdraw(768538);
await instance.sendTransaction({from:accounts[4],value:99});

});
it('test 10',async() => {
result = await instance.withdraw(613184);
await instance.sendTransaction({from:accounts[5],value:96});

});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[3],value:42});

result = await instance.withdraw(889357);
});
it('test 12',async() => {
result = await instance.withdraw(605509);
await instance.sendTransaction({from:accounts[8],value:89});

});
it('test 13',async() => {
result = await instance.withdraw(932728);
await instance.sendTransaction({from:accounts[6],value:13});

});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[3],value:48});

result = await instance.withdraw(82667);
});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[5],value:55});

result = await instance.withdraw(104070);
});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[6],value:100});

result = await instance.withdraw(622186);
});
it('test 17',async() => {
result = await instance.withdraw(990870);
await instance.sendTransaction({from:accounts[1],value:47});

});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[7],value:85});

result = await instance.withdraw(340388);
});
it('test 19',async() => {
result = await instance.withdraw(55639);
await instance.sendTransaction({from:accounts[2],value:48});

});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[5],value:17});

result = await instance.withdraw(679960);
});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[7],value:28});

result = await instance.withdraw(182198);
});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[9],value:95});

result = await instance.withdraw(464437);
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[3],value:60});

result = await instance.withdraw(821474);
});
it('test 24',async() => {
result = await instance.withdraw(299700);
await instance.sendTransaction({from:accounts[8],value:76});

});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[7],value:89});

result = await instance.withdraw(863187);
});
it('test 26',async() => {
result = await instance.withdraw(242041);
await instance.sendTransaction({from:accounts[1],value:34});

});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[2],value:5});

result = await instance.withdraw(1042488);
});
it('test 28',async() => {
result = await instance.withdraw(735308);
await instance.sendTransaction({from:accounts[9],value:17});

});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[4],value:62});

result = await instance.withdraw(922216);
});
it('test 30',async() => {
result = await instance.withdraw(98246);
await instance.sendTransaction({from:accounts[3],value:42});

});
it('test 31',async() => {
result = await instance.withdraw(28296);
await instance.sendTransaction({from:accounts[5],value:89});

});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[1],value:36});

result = await instance.withdraw(775886);
});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[9],value:80});

result = await instance.withdraw(938358);
});
it('test 34',async() => {
result = await instance.withdraw(748549);
await instance.sendTransaction({from:accounts[5],value:85});

});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[3],value:69});

result = await instance.withdraw(970516);
});
it('test 36',async() => {
result = await instance.withdraw(525158);
await instance.sendTransaction({from:accounts[2],value:40});

});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[8],value:85});

result = await instance.withdraw(696235);
});
it('test 38',async() => {
result = await instance.withdraw(958110);
await instance.sendTransaction({from:accounts[7],value:56});

});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[4],value:4});

result = await instance.withdraw(190562);
});
it('test 40',async() => {
await instance.sendTransaction({from:accounts[5],value:17});

result = await instance.withdraw(855603);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 41',async() => {
await instance.sendTransaction({from:accounts[2],value:92});

result = await instance.withdraw(967930);
});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[2],value:28});

result = await instance.withdraw(556160);
});
it('test 43',async() => {
result = await instance.withdraw(749136);
await instance.sendTransaction({from:accounts[7],value:79});

});
it('test 44',async() => {
result = await instance.withdraw(748266);
await instance.sendTransaction({from:accounts[4],value:64});

});
it('test 45',async() => {
result = await instance.withdraw(244604);
await instance.sendTransaction({from:accounts[4],value:86});

});
it('test 46',async() => {
result = await instance.withdraw(536161);
await instance.sendTransaction({from:accounts[1],value:50});

});
it('test 47',async() => {
result = await instance.withdraw(749122);
await instance.sendTransaction({from:accounts[9],value:68});

});
it('test 48',async() => {
result = await instance.withdraw(440231);
await instance.sendTransaction({from:accounts[5],value:10});

});
it('test 49',async() => {
result = await instance.withdraw(62997);
await instance.sendTransaction({from:accounts[5],value:84});

});
});
