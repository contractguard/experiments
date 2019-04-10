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
await instance.sendTransaction({from:accounts[6],value:71});

result = await instance.withdraw(225022);
});
it('test 1',async() => {
result = await instance.withdraw(835864);
await instance.sendTransaction({from:accounts[7],value:57});

});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[9],value:95});

result = await instance.withdraw(201718);
});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[5],value:96});

result = await instance.withdraw(53572);
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[3],value:46});

result = await instance.withdraw(336782);
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[4],value:55});

result = await instance.withdraw(682983);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[8],value:33});

result = await instance.withdraw(361320);
});
it('test 7',async() => {
result = await instance.withdraw(853250);
await instance.sendTransaction({from:accounts[7],value:63});

});
it('test 8',async() => {
result = await instance.withdraw(374699);
await instance.sendTransaction({from:accounts[3],value:100});

});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[2],value:33});

result = await instance.withdraw(433536);
});
it('test 10',async() => {
result = await instance.withdraw(286530);
await instance.sendTransaction({from:accounts[2],value:64});

});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[3],value:58});

result = await instance.withdraw(583431);
});
it('test 12',async() => {
result = await instance.withdraw(130505);
await instance.sendTransaction({from:accounts[4],value:39});

});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[9],value:83});

result = await instance.withdraw(420388);
});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[5],value:24});

result = await instance.withdraw(894078);
});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[7],value:90});

result = await instance.withdraw(689009);
});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[8],value:52});

result = await instance.withdraw(417952);
});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[7],value:3});

result = await instance.withdraw(322677);
});
it('test 18',async() => {
result = await instance.withdraw(185280);
await instance.sendTransaction({from:accounts[4],value:51});

});
it('test 19',async() => {
result = await instance.withdraw(767074);
await instance.sendTransaction({from:accounts[1],value:32});

});
it('test 20',async() => {
result = await instance.withdraw(626691);
await instance.sendTransaction({from:accounts[8],value:14});

});
it('test 21',async() => {
result = await instance.withdraw(59843);
await instance.sendTransaction({from:accounts[7],value:30});

});
it('test 22',async() => {
result = await instance.withdraw(191335);
await instance.sendTransaction({from:accounts[1],value:100});

});
it('test 23',async() => {
result = await instance.withdraw(352944);
await instance.sendTransaction({from:accounts[8],value:11});

});
it('test 24',async() => {
result = await instance.withdraw(596721);
await instance.sendTransaction({from:accounts[3],value:85});

});
it('test 25',async() => {
result = await instance.withdraw(546285);
await instance.sendTransaction({from:accounts[8],value:76});

});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[6],value:50});

result = await instance.withdraw(172650);
});
it('test 27',async() => {
result = await instance.withdraw(542761);
await instance.sendTransaction({from:accounts[6],value:49});

});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[8],value:52});

result = await instance.withdraw(417284);
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[9],value:95});

result = await instance.withdraw(267045);
});
it('test 30',async() => {
result = await instance.withdraw(238364);
await instance.sendTransaction({from:accounts[7],value:41});

});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[7],value:58});

result = await instance.withdraw(873855);
});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[6],value:27});

result = await instance.withdraw(280604);
});
it('test 33',async() => {
result = await instance.withdraw(681752);
await instance.sendTransaction({from:accounts[3],value:78});

});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[1],value:8});

result = await instance.withdraw(804183);
});
it('test 35',async() => {
result = await instance.withdraw(390940);
await instance.sendTransaction({from:accounts[3],value:44});

});
it('test 36',async() => {
result = await instance.withdraw(874159);
await instance.sendTransaction({from:accounts[5],value:89});

});
it('test 37',async() => {
result = await instance.withdraw(389833);
await instance.sendTransaction({from:accounts[9],value:4});

});
it('test 38',async() => {
result = await instance.withdraw(859480);
await instance.sendTransaction({from:accounts[3],value:75});

});
it('test 39',async() => {
result = await instance.withdraw(606222);
await instance.sendTransaction({from:accounts[7],value:80});

});
it('test 40',async() => {
result = await instance.withdraw(505956);
await instance.sendTransaction({from:accounts[9],value:53});

});
it('test 41',async() => {
result = await instance.withdraw(1037079);
await instance.sendTransaction({from:accounts[6],value:48});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 42',async() => {
result = await instance.withdraw(258741);
await instance.sendTransaction({from:accounts[1],value:23});

});
it('test 43',async() => {
result = await instance.withdraw(444937);
await instance.sendTransaction({from:accounts[8],value:92});

});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[7],value:88});

result = await instance.withdraw(731658);
});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[3],value:69});

result = await instance.withdraw(234072);
});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[7],value:46});

result = await instance.withdraw(391171);
});
it('test 47',async() => {
result = await instance.withdraw(817245);
await instance.sendTransaction({from:accounts[7],value:62});

});
it('test 48',async() => {
result = await instance.withdraw(481952);
await instance.sendTransaction({from:accounts[5],value:90});

});
it('test 49',async() => {
result = await instance.withdraw(258145);
await instance.sendTransaction({from:accounts[2],value:44});

});
});
