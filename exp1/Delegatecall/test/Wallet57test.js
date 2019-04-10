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
result = await instance.withdraw(337188);
await instance.sendTransaction({from:accounts[6],value:6});

});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[3],value:55});

result = await instance.withdraw(962858);
});
it('test 2',async() => {
result = await instance.withdraw(202302);
await instance.sendTransaction({from:accounts[4],value:47});

});
it('test 3',async() => {
result = await instance.withdraw(411514);
await instance.sendTransaction({from:accounts[1],value:28});

});
it('test 4',async() => {
result = await instance.withdraw(787880);
await instance.sendTransaction({from:accounts[3],value:31});

});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[3],value:26});

result = await instance.withdraw(916679);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[7],value:21});

result = await instance.withdraw(1021999);
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[3],value:86});

result = await instance.withdraw(644748);
});
it('test 8',async() => {
result = await instance.withdraw(1029445);
await instance.sendTransaction({from:accounts[5],value:43});

});
it('test 9',async() => {
result = await instance.withdraw(938860);
await instance.sendTransaction({from:accounts[8],value:16});

});
it('test 10',async() => {
result = await instance.withdraw(1005235);
await instance.sendTransaction({from:accounts[3],value:30});

});
it('test 11',async() => {
result = await instance.withdraw(332743);
await instance.sendTransaction({from:accounts[9],value:14});

});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[2],value:4});

result = await instance.withdraw(645324);
});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[3],value:95});

result = await instance.withdraw(429506);
});
it('test 14',async() => {
result = await instance.withdraw(344207);
await instance.sendTransaction({from:accounts[5],value:59});

});
it('test 15',async() => {
result = await instance.withdraw(325749);
await instance.sendTransaction({from:accounts[7],value:52});

});
it('test 16',async() => {
result = await instance.withdraw(894536);
await instance.sendTransaction({from:accounts[6],value:21});

});
it('test 17',async() => {
result = await instance.withdraw(591481);
await instance.sendTransaction({from:accounts[4],value:73});

});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[9],value:22});

result = await instance.withdraw(284296);
});
it('test 19',async() => {
result = await instance.withdraw(152309);
await instance.sendTransaction({from:accounts[6],value:55});

});
it('test 20',async() => {
result = await instance.withdraw(64768);
await instance.sendTransaction({from:accounts[8],value:47});

});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[7],value:15});

result = await instance.withdraw(992759);
});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[7],value:62});

result = await instance.withdraw(505991);
});
it('test 23',async() => {
result = await instance.withdraw(166983);
await instance.sendTransaction({from:accounts[8],value:91});

});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[9],value:48});

result = await instance.withdraw(642143);
});
it('test 25',async() => {
result = await instance.withdraw(39265);
await instance.sendTransaction({from:accounts[4],value:63});

});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[7],value:82});

result = await instance.withdraw(444853);
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[8],value:78});

result = await instance.withdraw(532945);
});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[6],value:31});

result = await instance.withdraw(980691);
});
it('test 29',async() => {
result = await instance.withdraw(991989);
await instance.sendTransaction({from:accounts[7],value:79});

});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[7],value:30});

result = await instance.withdraw(842505);
});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[9],value:72});

result = await instance.withdraw(15293);
});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[7],value:100});

result = await instance.withdraw(860918);
});
it('test 33',async() => {
result = await instance.withdraw(539506);
await instance.sendTransaction({from:accounts[9],value:65});

});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[5],value:66});

result = await instance.withdraw(771718);
});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[7],value:63});

result = await instance.withdraw(461172);
});
it('test 36',async() => {
result = await instance.withdraw(15613);
await instance.sendTransaction({from:accounts[3],value:34});

});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[9],value:66});

result = await instance.withdraw(785189);
});
it('test 38',async() => {
result = await instance.withdraw(676840);
await instance.sendTransaction({from:accounts[1],value:91});

});
it('test 39',async() => {
result = await instance.withdraw(376422);
await instance.sendTransaction({from:accounts[6],value:42});

});
it('test 40',async() => {
await instance.sendTransaction({from:accounts[7],value:94});

result = await instance.withdraw(164939);
});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[7],value:94});

result = await instance.withdraw(758134);
});
it('test 42',async() => {
result = await instance.withdraw(228976);
await instance.sendTransaction({from:accounts[9],value:86});

});
it('test 43',async() => {
result = await instance.withdraw(559581);
await instance.sendTransaction({from:accounts[5],value:17});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 44',async() => {
await instance.sendTransaction({from:accounts[7],value:29});

result = await instance.withdraw(405593);
});
it('test 45',async() => {
result = await instance.withdraw(389834);
await instance.sendTransaction({from:accounts[1],value:91});

});
it('test 46',async() => {
result = await instance.withdraw(630794);
await instance.sendTransaction({from:accounts[1],value:51});

});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[6],value:21});

result = await instance.withdraw(63011);
});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[7],value:47});

result = await instance.withdraw(634199);
});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[8],value:87});

result = await instance.withdraw(1044570);
});
});
