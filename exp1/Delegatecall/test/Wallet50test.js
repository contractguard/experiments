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
await instance.sendTransaction({from:accounts[3],value:36});

result = await instance.withdraw(570212);
});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[9],value:62});

result = await instance.withdraw(164284);
});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[3],value:37});

result = await instance.withdraw(317111);
});
it('test 3',async() => {
result = await instance.withdraw(53018);
await instance.sendTransaction({from:accounts[8],value:32});

});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[6],value:57});

result = await instance.withdraw(137517);
});
it('test 5',async() => {
result = await instance.withdraw(392870);
await instance.sendTransaction({from:accounts[4],value:39});

});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[7],value:32});

result = await instance.withdraw(35656);
});
it('test 7',async() => {
result = await instance.withdraw(927409);
await instance.sendTransaction({from:accounts[8],value:28});

});
it('test 8',async() => {
result = await instance.withdraw(519104);
await instance.sendTransaction({from:accounts[3],value:50});

});
it('test 9',async() => {
result = await instance.withdraw(650350);
await instance.sendTransaction({from:accounts[5],value:42});

});
it('test 10',async() => {
result = await instance.withdraw(368199);
await instance.sendTransaction({from:accounts[5],value:4});

});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[1],value:7});

result = await instance.withdraw(33590);
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[8],value:37});

result = await instance.withdraw(602626);
});
it('test 13',async() => {
result = await instance.withdraw(878157);
await instance.sendTransaction({from:accounts[7],value:61});

});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[4],value:24});

result = await instance.withdraw(138807);
});
it('test 15',async() => {
result = await instance.withdraw(825487);
await instance.sendTransaction({from:accounts[8],value:7});

});
it('test 16',async() => {
result = await instance.withdraw(269690);
await instance.sendTransaction({from:accounts[4],value:91});

});
it('test 17',async() => {
result = await instance.withdraw(121394);
await instance.sendTransaction({from:accounts[2],value:12});

});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[9],value:3});

result = await instance.withdraw(190063);
});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[6],value:73});

result = await instance.withdraw(835064);
});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[1],value:2});

result = await instance.withdraw(681018);
});
it('test 21',async() => {
result = await instance.withdraw(758008);
await instance.sendTransaction({from:accounts[1],value:62});

});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[7],value:48});

result = await instance.withdraw(152785);
});
it('test 23',async() => {
result = await instance.withdraw(249017);
await instance.sendTransaction({from:accounts[8],value:94});

});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[2],value:48});

result = await instance.withdraw(802183);
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[5],value:77});

result = await instance.withdraw(1037788);
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[8],value:41});

result = await instance.withdraw(84777);
});
it('test 27',async() => {
result = await instance.withdraw(685515);
await instance.sendTransaction({from:accounts[5],value:64});

});
it('test 28',async() => {
result = await instance.withdraw(584538);
await instance.sendTransaction({from:accounts[9],value:48});

});
it('test 29',async() => {
result = await instance.withdraw(409976);
await instance.sendTransaction({from:accounts[1],value:86});

});
it('test 30',async() => {
result = await instance.withdraw(291778);
await instance.sendTransaction({from:accounts[9],value:54});

});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[4],value:62});

result = await instance.withdraw(795267);
});
it('test 32',async() => {
result = await instance.withdraw(949314);
await instance.sendTransaction({from:accounts[3],value:50});

});
it('test 33',async() => {
result = await instance.withdraw(943542);
await instance.sendTransaction({from:accounts[4],value:67});

});
it('test 34',async() => {
result = await instance.withdraw(110287);
await instance.sendTransaction({from:accounts[6],value:95});

});
it('test 35',async() => {
result = await instance.withdraw(596223);
await instance.sendTransaction({from:accounts[3],value:85});

});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[4],value:20});

result = await instance.withdraw(646060);
});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[1],value:10});

result = await instance.withdraw(903108);
});
it('test 38',async() => {
result = await instance.withdraw(437021);
await instance.sendTransaction({from:accounts[4],value:88});

});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[8],value:99});

result = await instance.withdraw(763245);
});
it('test 40',async() => {
result = await instance.withdraw(428720);
await instance.sendTransaction({from:accounts[7],value:51});

});
it('test 41',async() => {
result = await instance.withdraw(392918);
await instance.sendTransaction({from:accounts[3],value:11});

});
it('test 42',async() => {
result = await instance.withdraw(907754);
await instance.sendTransaction({from:accounts[1],value:71});

});
it('test 43',async() => {
result = await instance.withdraw(61886);
await instance.sendTransaction({from:accounts[2],value:90});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 44',async() => {
await instance.sendTransaction({from:accounts[3],value:94});

result = await instance.withdraw(667062);
});
it('test 45',async() => {
result = await instance.withdraw(614774);
await instance.sendTransaction({from:accounts[6],value:74});

});
it('test 46',async() => {
result = await instance.withdraw(240181);
await instance.sendTransaction({from:accounts[9],value:42});

});
it('test 47',async() => {
result = await instance.withdraw(785917);
await instance.sendTransaction({from:accounts[9],value:36});

});
it('test 48',async() => {
result = await instance.withdraw(424066);
await instance.sendTransaction({from:accounts[9],value:98});

});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[9],value:50});

result = await instance.withdraw(515639);
});
});
