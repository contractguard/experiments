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
result = await instance.withdraw(332272);
await instance.sendTransaction({from:accounts[7],value:12});

});
it('test 1',async() => {
result = await instance.withdraw(57867);
await instance.sendTransaction({from:accounts[9],value:39});

});
it('test 2',async() => {
result = await instance.withdraw(666777);
await instance.sendTransaction({from:accounts[7],value:64});

});
it('test 3',async() => {
result = await instance.withdraw(365888);
await instance.sendTransaction({from:accounts[4],value:53});

});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[1],value:100});

result = await instance.withdraw(240983);
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[1],value:77});

result = await instance.withdraw(537455);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[9],value:22});

result = await instance.withdraw(90260);
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[4],value:58});

result = await instance.withdraw(101614);
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[6],value:92});

result = await instance.withdraw(429428);
});
it('test 9',async() => {
result = await instance.withdraw(969935);
await instance.sendTransaction({from:accounts[5],value:53});

});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[4],value:8});

result = await instance.withdraw(641097);
});
it('test 11',async() => {
result = await instance.withdraw(243151);
await instance.sendTransaction({from:accounts[4],value:77});

});
it('test 12',async() => {
result = await instance.withdraw(2166);
await instance.sendTransaction({from:accounts[9],value:63});

});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[8],value:94});

result = await instance.withdraw(132134);
});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[9],value:17});

result = await instance.withdraw(222572);
});
it('test 15',async() => {
result = await instance.withdraw(940453);
await instance.sendTransaction({from:accounts[3],value:76});

});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[2],value:28});

result = await instance.withdraw(952822);
});
it('test 17',async() => {
result = await instance.withdraw(577384);
await instance.sendTransaction({from:accounts[3],value:81});

});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[6],value:69});

result = await instance.withdraw(263018);
});
it('test 19',async() => {
result = await instance.withdraw(556681);
await instance.sendTransaction({from:accounts[1],value:38});

});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[3],value:63});

result = await instance.withdraw(948464);
});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[6],value:93});

result = await instance.withdraw(736114);
});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[8],value:24});

result = await instance.withdraw(939056);
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[1],value:16});

result = await instance.withdraw(987131);
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[8],value:21});

result = await instance.withdraw(276797);
});
it('test 25',async() => {
result = await instance.withdraw(67435);
await instance.sendTransaction({from:accounts[4],value:62});

});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[6],value:62});

result = await instance.withdraw(1029752);
});
it('test 27',async() => {
result = await instance.withdraw(966751);
await instance.sendTransaction({from:accounts[6],value:78});

});
it('test 28',async() => {
result = await instance.withdraw(362629);
await instance.sendTransaction({from:accounts[6],value:56});

});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[7],value:15});

result = await instance.withdraw(558430);
});
it('test 30',async() => {
result = await instance.withdraw(634355);
await instance.sendTransaction({from:accounts[3],value:51});

});
it('test 31',async() => {
result = await instance.withdraw(434044);
await instance.sendTransaction({from:accounts[3],value:57});

});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[8],value:67});

result = await instance.withdraw(711326);
});
it('test 33',async() => {
result = await instance.withdraw(1036521);
await instance.sendTransaction({from:accounts[1],value:83});

});
it('test 34',async() => {
result = await instance.withdraw(33136);
await instance.sendTransaction({from:accounts[7],value:88});

});
it('test 35',async() => {
result = await instance.withdraw(551794);
await instance.sendTransaction({from:accounts[2],value:46});

});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[2],value:12});

result = await instance.withdraw(680848);
});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[8],value:67});

result = await instance.withdraw(479332);
});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[3],value:46});

result = await instance.withdraw(150877);
});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[9],value:99});

result = await instance.withdraw(191312);
});
it('test 40',async() => {
await instance.sendTransaction({from:accounts[9],value:97});

result = await instance.withdraw(80498);
});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[9],value:53});

result = await instance.withdraw(839833);
});
it('test 42',async() => {
result = await instance.withdraw(399008);
await instance.sendTransaction({from:accounts[1],value:97});

});
it('test 43',async() => {
await instance.sendTransaction({from:accounts[1],value:58});

result = await instance.withdraw(159986);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 44',async() => {
result = await instance.withdraw(640802);
await instance.sendTransaction({from:accounts[6],value:90});

});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[2],value:33});

result = await instance.withdraw(400810);
});
it('test 46',async() => {
result = await instance.withdraw(789845);
await instance.sendTransaction({from:accounts[7],value:52});

});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[9],value:48});

result = await instance.withdraw(875318);
});
it('test 48',async() => {
result = await instance.withdraw(119693);
await instance.sendTransaction({from:accounts[7],value:42});

});
it('test 49',async() => {
result = await instance.withdraw(690091);
await instance.sendTransaction({from:accounts[1],value:68});

});
});
