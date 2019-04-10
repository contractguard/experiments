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
await instance.sendTransaction({from:accounts[5],value:95});

result = await instance.withdraw(87411);
});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[8],value:37});

result = await instance.withdraw(184459);
});
it('test 2',async() => {
result = await instance.withdraw(476132);
await instance.sendTransaction({from:accounts[1],value:84});

});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[1],value:97});

result = await instance.withdraw(546361);
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[9],value:77});

result = await instance.withdraw(858891);
});
it('test 5',async() => {
result = await instance.withdraw(99080);
await instance.sendTransaction({from:accounts[4],value:47});

});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[5],value:6});

result = await instance.withdraw(240954);
});
it('test 7',async() => {
result = await instance.withdraw(387958);
await instance.sendTransaction({from:accounts[7],value:64});

});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[5],value:88});

result = await instance.withdraw(1006128);
});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[9],value:78});

result = await instance.withdraw(666077);
});
it('test 10',async() => {
result = await instance.withdraw(680151);
await instance.sendTransaction({from:accounts[6],value:38});

});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[7],value:37});

result = await instance.withdraw(667023);
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[2],value:23});

result = await instance.withdraw(126609);
});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[1],value:8});

result = await instance.withdraw(447484);
});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[8],value:17});

result = await instance.withdraw(684979);
});
it('test 15',async() => {
result = await instance.withdraw(60283);
await instance.sendTransaction({from:accounts[3],value:81});

});
it('test 16',async() => {
result = await instance.withdraw(462987);
await instance.sendTransaction({from:accounts[9],value:75});

});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[8],value:47});

result = await instance.withdraw(493753);
});
it('test 18',async() => {
result = await instance.withdraw(731500);
await instance.sendTransaction({from:accounts[4],value:48});

});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[3],value:25});

result = await instance.withdraw(823249);
});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[9],value:73});

result = await instance.withdraw(347696);
});
it('test 21',async() => {
result = await instance.withdraw(737323);
await instance.sendTransaction({from:accounts[5],value:1});

});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[8],value:100});

result = await instance.withdraw(841009);
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[5],value:94});

result = await instance.withdraw(761997);
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[6],value:90});

result = await instance.withdraw(822453);
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[6],value:79});

result = await instance.withdraw(118906);
});
it('test 26',async() => {
result = await instance.withdraw(234273);
await instance.sendTransaction({from:accounts[9],value:21});

});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[6],value:38});

result = await instance.withdraw(700328);
});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[5],value:83});

result = await instance.withdraw(278111);
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[1],value:90});

result = await instance.withdraw(696203);
});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[9],value:100});

result = await instance.withdraw(962652);
});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[5],value:35});

result = await instance.withdraw(845320);
});
it('test 32',async() => {
result = await instance.withdraw(566278);
await instance.sendTransaction({from:accounts[3],value:57});

});
it('test 33',async() => {
result = await instance.withdraw(80075);
await instance.sendTransaction({from:accounts[2],value:22});

});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[2],value:78});

result = await instance.withdraw(385830);
});
it('test 35',async() => {
result = await instance.withdraw(672744);
await instance.sendTransaction({from:accounts[5],value:31});

});
it('test 36',async() => {
result = await instance.withdraw(1010599);
await instance.sendTransaction({from:accounts[3],value:32});

});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[9],value:28});

result = await instance.withdraw(650360);
});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[7],value:13});

result = await instance.withdraw(527134);
});
it('test 39',async() => {
result = await instance.withdraw(158687);
await instance.sendTransaction({from:accounts[5],value:54});

});
it('test 40',async() => {
await instance.sendTransaction({from:accounts[8],value:18});

result = await instance.withdraw(90339);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 41',async() => {
result = await instance.withdraw(299326);
await instance.sendTransaction({from:accounts[2],value:78});

});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[3],value:19});

result = await instance.withdraw(374376);
});
it('test 43',async() => {
result = await instance.withdraw(350054);
await instance.sendTransaction({from:accounts[5],value:59});

});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[5],value:84});

result = await instance.withdraw(772689);
});
it('test 45',async() => {
result = await instance.withdraw(459215);
await instance.sendTransaction({from:accounts[1],value:65});

});
it('test 46',async() => {
result = await instance.withdraw(642422);
await instance.sendTransaction({from:accounts[1],value:25});

});
it('test 47',async() => {
result = await instance.withdraw(856317);
await instance.sendTransaction({from:accounts[9],value:40});

});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[5],value:33});

result = await instance.withdraw(781964);
});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[6],value:57});

result = await instance.withdraw(872091);
});
});
