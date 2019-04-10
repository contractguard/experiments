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
result = await instance.withdraw(342301);
await instance.sendTransaction({from:accounts[7],value:22});

});
it('test 1',async() => {
result = await instance.withdraw(390628);
await instance.sendTransaction({from:accounts[6],value:44});

});
it('test 2',async() => {
result = await instance.withdraw(39666);
await instance.sendTransaction({from:accounts[5],value:19});

});
it('test 3',async() => {
result = await instance.withdraw(129540);
await instance.sendTransaction({from:accounts[8],value:19});

});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[3],value:85});

result = await instance.withdraw(514707);
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[8],value:34});

result = await instance.withdraw(381712);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[4],value:33});

result = await instance.withdraw(445459);
});
it('test 7',async() => {
result = await instance.withdraw(238360);
await instance.sendTransaction({from:accounts[3],value:57});

});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[5],value:47});

result = await instance.withdraw(813318);
});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[7],value:22});

result = await instance.withdraw(420256);
});
it('test 10',async() => {
result = await instance.withdraw(944408);
await instance.sendTransaction({from:accounts[5],value:74});

});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[8],value:8});

result = await instance.withdraw(565996);
});
it('test 12',async() => {
result = await instance.withdraw(908957);
await instance.sendTransaction({from:accounts[5],value:61});

});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[9],value:97});

result = await instance.withdraw(363371);
});
it('test 14',async() => {
result = await instance.withdraw(145262);
await instance.sendTransaction({from:accounts[2],value:28});

});
it('test 15',async() => {
result = await instance.withdraw(1037067);
await instance.sendTransaction({from:accounts[7],value:52});

});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[7],value:23});

result = await instance.withdraw(795642);
});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[5],value:63});

result = await instance.withdraw(890874);
});
it('test 18',async() => {
result = await instance.withdraw(1001676);
await instance.sendTransaction({from:accounts[8],value:90});

});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[3],value:77});

result = await instance.withdraw(441226);
});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[8],value:40});

result = await instance.withdraw(623743);
});
it('test 21',async() => {
result = await instance.withdraw(905473);
await instance.sendTransaction({from:accounts[7],value:39});

});
it('test 22',async() => {
result = await instance.withdraw(26150);
await instance.sendTransaction({from:accounts[8],value:39});

});
it('test 23',async() => {
result = await instance.withdraw(270560);
await instance.sendTransaction({from:accounts[3],value:57});

});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[2],value:93});

result = await instance.withdraw(372147);
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[1],value:96});

result = await instance.withdraw(818624);
});
it('test 26',async() => {
result = await instance.withdraw(281091);
await instance.sendTransaction({from:accounts[8],value:100});

});
it('test 27',async() => {
result = await instance.withdraw(762579);
await instance.sendTransaction({from:accounts[6],value:65});

});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[2],value:48});

result = await instance.withdraw(249680);
});
it('test 29',async() => {
result = await instance.withdraw(690587);
await instance.sendTransaction({from:accounts[9],value:20});

});
it('test 30',async() => {
result = await instance.withdraw(956675);
await instance.sendTransaction({from:accounts[1],value:69});

});
it('test 31',async() => {
result = await instance.withdraw(442654);
await instance.sendTransaction({from:accounts[5],value:26});

});
it('test 32',async() => {
result = await instance.withdraw(930036);
await instance.sendTransaction({from:accounts[8],value:91});

});
it('test 33',async() => {
result = await instance.withdraw(384078);
await instance.sendTransaction({from:accounts[7],value:83});

});
it('test 34',async() => {
result = await instance.withdraw(714149);
await instance.sendTransaction({from:accounts[4],value:43});

});
it('test 35',async() => {
result = await instance.withdraw(287690);
await instance.sendTransaction({from:accounts[8],value:99});

});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[1],value:25});

result = await instance.withdraw(848045);
});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[7],value:69});

result = await instance.withdraw(694214);
});
it('test 38',async() => {
result = await instance.withdraw(1029334);
await instance.sendTransaction({from:accounts[7],value:31});

});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[5],value:21});

result = await instance.withdraw(875539);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 40',async() => {
result = await instance.withdraw(251220);
await instance.sendTransaction({from:accounts[8],value:56});

});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[5],value:71});

result = await instance.withdraw(5901);
});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[9],value:57});

result = await instance.withdraw(178800);
});
it('test 43',async() => {
await instance.sendTransaction({from:accounts[6],value:54});

result = await instance.withdraw(478143);
});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[1],value:5});

result = await instance.withdraw(812279);
});
it('test 45',async() => {
result = await instance.withdraw(637433);
await instance.sendTransaction({from:accounts[2],value:91});

});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[4],value:90});

result = await instance.withdraw(460173);
});
it('test 47',async() => {
result = await instance.withdraw(855408);
await instance.sendTransaction({from:accounts[6],value:8});

});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[1],value:31});

result = await instance.withdraw(371759);
});
it('test 49',async() => {
result = await instance.withdraw(418771);
await instance.sendTransaction({from:accounts[6],value:34});

});
});
