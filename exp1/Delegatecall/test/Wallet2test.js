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
result = await instance.withdraw(346378);
await instance.sendTransaction({from:accounts[5],value:80});

});
it('test 1',async() => {
result = await instance.withdraw(43445);
await instance.sendTransaction({from:accounts[5],value:28});

});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[7],value:89});

result = await instance.withdraw(253991);
});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[6],value:28});

result = await instance.withdraw(288158);
});
it('test 4',async() => {
result = await instance.withdraw(574740);
await instance.sendTransaction({from:accounts[9],value:65});

});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[4],value:96});

result = await instance.withdraw(169857);
});
it('test 6',async() => {
result = await instance.withdraw(652951);
await instance.sendTransaction({from:accounts[4],value:24});

});
it('test 7',async() => {
result = await instance.withdraw(705255);
await instance.sendTransaction({from:accounts[7],value:4});

});
it('test 8',async() => {
result = await instance.withdraw(570904);
await instance.sendTransaction({from:accounts[6],value:86});

});
it('test 9',async() => {
result = await instance.withdraw(948339);
await instance.sendTransaction({from:accounts[1],value:87});

});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[2],value:75});

result = await instance.withdraw(635250);
});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[8],value:49});

result = await instance.withdraw(490210);
});
it('test 12',async() => {
result = await instance.withdraw(1011324);
await instance.sendTransaction({from:accounts[5],value:50});

});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[9],value:24});

result = await instance.withdraw(350314);
});
it('test 14',async() => {
result = await instance.withdraw(853538);
await instance.sendTransaction({from:accounts[3],value:77});

});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[7],value:12});

result = await instance.withdraw(527729);
});
it('test 16',async() => {
result = await instance.withdraw(789050);
await instance.sendTransaction({from:accounts[5],value:59});

});
it('test 17',async() => {
result = await instance.withdraw(492967);
await instance.sendTransaction({from:accounts[4],value:57});

});
it('test 18',async() => {
result = await instance.withdraw(855617);
await instance.sendTransaction({from:accounts[6],value:19});

});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[3],value:68});

result = await instance.withdraw(46755);
});
it('test 20',async() => {
result = await instance.withdraw(319153);
await instance.sendTransaction({from:accounts[2],value:18});

});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[4],value:1});

result = await instance.withdraw(846241);
});
it('test 22',async() => {
result = await instance.withdraw(371578);
await instance.sendTransaction({from:accounts[2],value:78});

});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[1],value:94});

result = await instance.withdraw(430732);
});
it('test 24',async() => {
result = await instance.withdraw(960731);
await instance.sendTransaction({from:accounts[2],value:30});

});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[7],value:69});

result = await instance.withdraw(425008);
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[6],value:62});

result = await instance.withdraw(1030350);
});
it('test 27',async() => {
result = await instance.withdraw(426911);
await instance.sendTransaction({from:accounts[6],value:62});

});
it('test 28',async() => {
result = await instance.withdraw(201452);
await instance.sendTransaction({from:accounts[1],value:80});

});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[8],value:97});

result = await instance.withdraw(145580);
});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[5],value:66});

result = await instance.withdraw(185433);
});
it('test 31',async() => {
result = await instance.withdraw(16296);
await instance.sendTransaction({from:accounts[7],value:54});

});
it('test 32',async() => {
result = await instance.withdraw(544672);
await instance.sendTransaction({from:accounts[7],value:59});

});
it('test 33',async() => {
result = await instance.withdraw(97931);
await instance.sendTransaction({from:accounts[1],value:21});

});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[1],value:66});

result = await instance.withdraw(468682);
});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[7],value:59});

result = await instance.withdraw(624177);
});
it('test 36',async() => {
result = await instance.withdraw(14122);
await instance.sendTransaction({from:accounts[7],value:63});

});
it('test 37',async() => {
result = await instance.withdraw(10632);
await instance.sendTransaction({from:accounts[6],value:24});

});
it('test 38',async() => {
result = await instance.withdraw(556798);
await instance.sendTransaction({from:accounts[1],value:65});

});
it('test 39',async() => {
result = await instance.withdraw(730846);
await instance.sendTransaction({from:accounts[7],value:21});

});
it('test 40',async() => {
result = await instance.withdraw(387688);
await instance.sendTransaction({from:accounts[6],value:35});

});
it('test 41',async() => {
result = await instance.withdraw(238599);
await instance.sendTransaction({from:accounts[4],value:47});

});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[7],value:1});

result = await instance.withdraw(1019424);
});
it('test 43',async() => {
await instance.sendTransaction({from:accounts[6],value:27});

result = await instance.withdraw(401359);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 44',async() => {
await instance.sendTransaction({from:accounts[9],value:1});

result = await instance.withdraw(408037);
});
it('test 45',async() => {
result = await instance.withdraw(962150);
await instance.sendTransaction({from:accounts[1],value:73});

});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[6],value:23});

result = await instance.withdraw(382365);
});
it('test 47',async() => {
result = await instance.withdraw(165533);
await instance.sendTransaction({from:accounts[1],value:7});

});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[5],value:51});

result = await instance.withdraw(1031765);
});
it('test 49',async() => {
result = await instance.withdraw(565383);
await instance.sendTransaction({from:accounts[7],value:3});

});
});
