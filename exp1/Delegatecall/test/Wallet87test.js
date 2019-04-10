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
result = await instance.withdraw(1045443);
await instance.sendTransaction({from:accounts[3],value:37});

});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[2],value:7});

result = await instance.withdraw(802);
});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[9],value:78});

result = await instance.withdraw(580538);
});
it('test 3',async() => {
result = await instance.withdraw(301549);
await instance.sendTransaction({from:accounts[3],value:59});

});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[9],value:95});

result = await instance.withdraw(504157);
});
it('test 5',async() => {
result = await instance.withdraw(505382);
await instance.sendTransaction({from:accounts[6],value:23});

});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[1],value:9});

result = await instance.withdraw(656571);
});
it('test 7',async() => {
result = await instance.withdraw(296296);
await instance.sendTransaction({from:accounts[3],value:50});

});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[9],value:21});

result = await instance.withdraw(1018266);
});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[5],value:91});

result = await instance.withdraw(470838);
});
it('test 10',async() => {
result = await instance.withdraw(800155);
await instance.sendTransaction({from:accounts[7],value:23});

});
it('test 11',async() => {
result = await instance.withdraw(884905);
await instance.sendTransaction({from:accounts[2],value:8});

});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[9],value:77});

result = await instance.withdraw(60729);
});
it('test 13',async() => {
result = await instance.withdraw(346755);
await instance.sendTransaction({from:accounts[8],value:39});

});
it('test 14',async() => {
result = await instance.withdraw(417563);
await instance.sendTransaction({from:accounts[2],value:26});

});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[3],value:31});

result = await instance.withdraw(152562);
});
it('test 16',async() => {
result = await instance.withdraw(771589);
await instance.sendTransaction({from:accounts[8],value:34});

});
it('test 17',async() => {
result = await instance.withdraw(812174);
await instance.sendTransaction({from:accounts[9],value:60});

});
it('test 18',async() => {
result = await instance.withdraw(284634);
await instance.sendTransaction({from:accounts[1],value:35});

});
it('test 19',async() => {
result = await instance.withdraw(171193);
await instance.sendTransaction({from:accounts[1],value:71});

});
it('test 20',async() => {
result = await instance.withdraw(731647);
await instance.sendTransaction({from:accounts[1],value:23});

});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[4],value:13});

result = await instance.withdraw(508927);
});
it('test 22',async() => {
result = await instance.withdraw(958261);
await instance.sendTransaction({from:accounts[6],value:25});

});
it('test 23',async() => {
result = await instance.withdraw(625927);
await instance.sendTransaction({from:accounts[2],value:59});

});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[4],value:31});

result = await instance.withdraw(755461);
});
it('test 25',async() => {
result = await instance.withdraw(190568);
await instance.sendTransaction({from:accounts[4],value:63});

});
it('test 26',async() => {
result = await instance.withdraw(986458);
await instance.sendTransaction({from:accounts[5],value:9});

});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[8],value:4});

result = await instance.withdraw(660298);
});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[6],value:1});

result = await instance.withdraw(1012962);
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[7],value:50});

result = await instance.withdraw(799854);
});
it('test 30',async() => {
result = await instance.withdraw(551412);
await instance.sendTransaction({from:accounts[1],value:9});

});
it('test 31',async() => {
result = await instance.withdraw(966970);
await instance.sendTransaction({from:accounts[6],value:59});

});
it('test 32',async() => {
result = await instance.withdraw(987639);
await instance.sendTransaction({from:accounts[6],value:45});

});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[6],value:14});

result = await instance.withdraw(996641);
});
it('test 34',async() => {
result = await instance.withdraw(342036);
await instance.sendTransaction({from:accounts[4],value:78});

});
it('test 35',async() => {
result = await instance.withdraw(78948);
await instance.sendTransaction({from:accounts[5],value:63});

});
it('test 36',async() => {
result = await instance.withdraw(740686);
await instance.sendTransaction({from:accounts[4],value:57});

});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[4],value:1});

result = await instance.withdraw(203773);
});
it('test 38',async() => {
result = await instance.withdraw(1043969);
await instance.sendTransaction({from:accounts[1],value:2});

});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[5],value:54});

result = await instance.withdraw(1017805);
});
it('test 40',async() => {
result = await instance.withdraw(935244);
await instance.sendTransaction({from:accounts[9],value:77});

});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[3],value:62});

result = await instance.withdraw(805881);
});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[2],value:61});

result = await instance.withdraw(239053);
});
it('test 43',async() => {
result = await instance.withdraw(154191);
await instance.sendTransaction({from:accounts[8],value:51});

});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[2],value:19});

result = await instance.withdraw(810972);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 45',async() => {
await instance.sendTransaction({from:accounts[3],value:92});

result = await instance.withdraw(363950);
});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[6],value:2});

result = await instance.withdraw(771108);
});
it('test 47',async() => {
result = await instance.withdraw(1003123);
await instance.sendTransaction({from:accounts[2],value:9});

});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[2],value:22});

result = await instance.withdraw(13050);
});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[9],value:38});

result = await instance.withdraw(571540);
});
});
