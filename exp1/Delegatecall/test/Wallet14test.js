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
await instance.sendTransaction({from:accounts[7],value:15});

result = await instance.withdraw(487336);
});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[6],value:21});

result = await instance.withdraw(165565);
});
it('test 2',async() => {
result = await instance.withdraw(776001);
await instance.sendTransaction({from:accounts[6],value:11});

});
it('test 3',async() => {
result = await instance.withdraw(741161);
await instance.sendTransaction({from:accounts[4],value:32});

});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[8],value:62});

result = await instance.withdraw(420067);
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[7],value:53});

result = await instance.withdraw(200506);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[7],value:92});

result = await instance.withdraw(951104);
});
it('test 7',async() => {
result = await instance.withdraw(510145);
await instance.sendTransaction({from:accounts[8],value:97});

});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[3],value:34});

result = await instance.withdraw(802660);
});
it('test 9',async() => {
result = await instance.withdraw(100491);
await instance.sendTransaction({from:accounts[8],value:82});

});
it('test 10',async() => {
result = await instance.withdraw(815809);
await instance.sendTransaction({from:accounts[9],value:47});

});
it('test 11',async() => {
result = await instance.withdraw(348594);
await instance.sendTransaction({from:accounts[7],value:36});

});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[8],value:61});

result = await instance.withdraw(542424);
});
it('test 13',async() => {
result = await instance.withdraw(743354);
await instance.sendTransaction({from:accounts[7],value:74});

});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[5],value:80});

result = await instance.withdraw(464637);
});
it('test 15',async() => {
result = await instance.withdraw(644787);
await instance.sendTransaction({from:accounts[8],value:92});

});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[7],value:71});

result = await instance.withdraw(653059);
});
it('test 17',async() => {
result = await instance.withdraw(587829);
await instance.sendTransaction({from:accounts[5],value:79});

});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[5],value:46});

result = await instance.withdraw(65073);
});
it('test 19',async() => {
result = await instance.withdraw(314073);
await instance.sendTransaction({from:accounts[5],value:39});

});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[7],value:69});

result = await instance.withdraw(555006);
});
it('test 21',async() => {
result = await instance.withdraw(789977);
await instance.sendTransaction({from:accounts[1],value:1});

});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[3],value:20});

result = await instance.withdraw(1041143);
});
it('test 23',async() => {
result = await instance.withdraw(511036);
await instance.sendTransaction({from:accounts[1],value:39});

});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[2],value:74});

result = await instance.withdraw(203122);
});
it('test 25',async() => {
result = await instance.withdraw(780186);
await instance.sendTransaction({from:accounts[2],value:83});

});
it('test 26',async() => {
result = await instance.withdraw(221553);
await instance.sendTransaction({from:accounts[8],value:60});

});
it('test 27',async() => {
result = await instance.withdraw(335656);
await instance.sendTransaction({from:accounts[6],value:3});

});
it('test 28',async() => {
result = await instance.withdraw(368141);
await instance.sendTransaction({from:accounts[3],value:79});

});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[7],value:65});

result = await instance.withdraw(128100);
});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[6],value:3});

result = await instance.withdraw(762911);
});
it('test 31',async() => {
result = await instance.withdraw(452399);
await instance.sendTransaction({from:accounts[7],value:59});

});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[9],value:40});

result = await instance.withdraw(57371);
});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[5],value:11});

result = await instance.withdraw(296422);
});
it('test 34',async() => {
result = await instance.withdraw(9972);
await instance.sendTransaction({from:accounts[6],value:29});

});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[1],value:81});

result = await instance.withdraw(101064);
});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[2],value:36});

result = await instance.withdraw(957905);
});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[5],value:52});

result = await instance.withdraw(601045);
});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[3],value:39});

result = await instance.withdraw(642858);
});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[4],value:25});

result = await instance.withdraw(363295);
});
it('test 40',async() => {
result = await instance.withdraw(844831);
await instance.sendTransaction({from:accounts[8],value:22});

});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[5],value:60});

result = await instance.withdraw(899116);
});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[2],value:72});

result = await instance.withdraw(457456);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 43',async() => {
await instance.sendTransaction({from:accounts[9],value:19});

result = await instance.withdraw(917300);
});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[9],value:41});

result = await instance.withdraw(629892);
});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[4],value:96});

result = await instance.withdraw(359016);
});
it('test 46',async() => {
result = await instance.withdraw(95722);
await instance.sendTransaction({from:accounts[5],value:46});

});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[7],value:99});

result = await instance.withdraw(297841);
});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[7],value:40});

result = await instance.withdraw(625956);
});
it('test 49',async() => {
result = await instance.withdraw(900996);
await instance.sendTransaction({from:accounts[2],value:59});

});
});
