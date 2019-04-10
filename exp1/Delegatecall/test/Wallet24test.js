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
await instance.sendTransaction({from:accounts[8],value:29});

result = await instance.withdraw(488033);
});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[1],value:24});

result = await instance.withdraw(125264);
});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[6],value:98});

result = await instance.withdraw(393382);
});
it('test 3',async() => {
result = await instance.withdraw(747607);
await instance.sendTransaction({from:accounts[8],value:44});

});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[7],value:20});

result = await instance.withdraw(458994);
});
it('test 5',async() => {
result = await instance.withdraw(297711);
await instance.sendTransaction({from:accounts[5],value:81});

});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[7],value:14});

result = await instance.withdraw(519133);
});
it('test 7',async() => {
result = await instance.withdraw(917326);
await instance.sendTransaction({from:accounts[5],value:54});

});
it('test 8',async() => {
result = await instance.withdraw(646050);
await instance.sendTransaction({from:accounts[1],value:56});

});
it('test 9',async() => {
result = await instance.withdraw(578473);
await instance.sendTransaction({from:accounts[2],value:64});

});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[5],value:55});

result = await instance.withdraw(346753);
});
it('test 11',async() => {
result = await instance.withdraw(571383);
await instance.sendTransaction({from:accounts[1],value:18});

});
it('test 12',async() => {
result = await instance.withdraw(615972);
await instance.sendTransaction({from:accounts[4],value:82});

});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[5],value:26});

result = await instance.withdraw(342704);
});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[3],value:38});

result = await instance.withdraw(323155);
});
it('test 15',async() => {
result = await instance.withdraw(976269);
await instance.sendTransaction({from:accounts[3],value:18});

});
it('test 16',async() => {
result = await instance.withdraw(828449);
await instance.sendTransaction({from:accounts[9],value:65});

});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[5],value:81});

result = await instance.withdraw(54065);
});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[1],value:96});

result = await instance.withdraw(725709);
});
it('test 19',async() => {
result = await instance.withdraw(931108);
await instance.sendTransaction({from:accounts[1],value:83});

});
it('test 20',async() => {
result = await instance.withdraw(397507);
await instance.sendTransaction({from:accounts[4],value:61});

});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[5],value:80});

result = await instance.withdraw(203460);
});
it('test 22',async() => {
result = await instance.withdraw(399112);
await instance.sendTransaction({from:accounts[7],value:28});

});
it('test 23',async() => {
result = await instance.withdraw(83657);
await instance.sendTransaction({from:accounts[5],value:60});

});
it('test 24',async() => {
result = await instance.withdraw(298106);
await instance.sendTransaction({from:accounts[6],value:75});

});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[7],value:97});

result = await instance.withdraw(583648);
});
it('test 26',async() => {
result = await instance.withdraw(326058);
await instance.sendTransaction({from:accounts[1],value:14});

});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[6],value:44});

result = await instance.withdraw(99614);
});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[9],value:65});

result = await instance.withdraw(442148);
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[4],value:93});

result = await instance.withdraw(1018236);
});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[8],value:18});

result = await instance.withdraw(799201);
});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[3],value:79});

result = await instance.withdraw(958817);
});
it('test 32',async() => {
result = await instance.withdraw(136178);
await instance.sendTransaction({from:accounts[2],value:55});

});
it('test 33',async() => {
result = await instance.withdraw(498277);
await instance.sendTransaction({from:accounts[8],value:9});

});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[9],value:31});

result = await instance.withdraw(877533);
});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[6],value:90});

result = await instance.withdraw(325965);
});
it('test 36',async() => {
result = await instance.withdraw(981918);
await instance.sendTransaction({from:accounts[3],value:95});

});
it('test 37',async() => {
result = await instance.withdraw(555932);
await instance.sendTransaction({from:accounts[2],value:8});

});
it('test 38',async() => {
result = await instance.withdraw(945543);
await instance.sendTransaction({from:accounts[3],value:3});

});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[7],value:82});

result = await instance.withdraw(985159);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 40',async() => {
result = await instance.withdraw(300323);
await instance.sendTransaction({from:accounts[8],value:30});

});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[1],value:28});

result = await instance.withdraw(426111);
});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[8],value:93});

result = await instance.withdraw(378361);
});
it('test 43',async() => {
await instance.sendTransaction({from:accounts[3],value:18});

result = await instance.withdraw(793630);
});
it('test 44',async() => {
result = await instance.withdraw(179505);
await instance.sendTransaction({from:accounts[4],value:82});

});
it('test 45',async() => {
result = await instance.withdraw(339264);
await instance.sendTransaction({from:accounts[1],value:95});

});
it('test 46',async() => {
result = await instance.withdraw(795032);
await instance.sendTransaction({from:accounts[8],value:30});

});
it('test 47',async() => {
result = await instance.withdraw(103552);
await instance.sendTransaction({from:accounts[1],value:2});

});
it('test 48',async() => {
result = await instance.withdraw(160508);
await instance.sendTransaction({from:accounts[4],value:89});

});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[8],value:20});

result = await instance.withdraw(947185);
});
});
