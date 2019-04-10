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
await instance.sendTransaction({from:accounts[9],value:31});

result = await instance.withdraw(97940);
});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[3],value:94});

result = await instance.withdraw(560747);
});
it('test 2',async() => {
result = await instance.withdraw(802168);
await instance.sendTransaction({from:accounts[3],value:58});

});
it('test 3',async() => {
result = await instance.withdraw(859678);
await instance.sendTransaction({from:accounts[9],value:60});

});
it('test 4',async() => {
result = await instance.withdraw(598468);
await instance.sendTransaction({from:accounts[5],value:15});

});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[4],value:52});

result = await instance.withdraw(934468);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[4],value:93});

result = await instance.withdraw(714849);
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[9],value:74});

result = await instance.withdraw(1032050);
});
it('test 8',async() => {
result = await instance.withdraw(248760);
await instance.sendTransaction({from:accounts[9],value:49});

});
it('test 9',async() => {
result = await instance.withdraw(494538);
await instance.sendTransaction({from:accounts[6],value:12});

});
it('test 10',async() => {
result = await instance.withdraw(172770);
await instance.sendTransaction({from:accounts[4],value:38});

});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[1],value:84});

result = await instance.withdraw(126048);
});
it('test 12',async() => {
result = await instance.withdraw(940870);
await instance.sendTransaction({from:accounts[5],value:4});

});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[8],value:20});

result = await instance.withdraw(685931);
});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[7],value:60});

result = await instance.withdraw(841604);
});
it('test 15',async() => {
result = await instance.withdraw(1040518);
await instance.sendTransaction({from:accounts[2],value:1});

});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[7],value:90});

result = await instance.withdraw(504721);
});
it('test 17',async() => {
result = await instance.withdraw(662724);
await instance.sendTransaction({from:accounts[5],value:37});

});
it('test 18',async() => {
result = await instance.withdraw(801987);
await instance.sendTransaction({from:accounts[7],value:75});

});
it('test 19',async() => {
result = await instance.withdraw(1025514);
await instance.sendTransaction({from:accounts[3],value:31});

});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[5],value:93});

result = await instance.withdraw(566194);
});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[5],value:82});

result = await instance.withdraw(97607);
});
it('test 22',async() => {
result = await instance.withdraw(976135);
await instance.sendTransaction({from:accounts[2],value:41});

});
it('test 23',async() => {
result = await instance.withdraw(910791);
await instance.sendTransaction({from:accounts[4],value:12});

});
it('test 24',async() => {
result = await instance.withdraw(589060);
await instance.sendTransaction({from:accounts[9],value:42});

});
it('test 25',async() => {
result = await instance.withdraw(725975);
await instance.sendTransaction({from:accounts[5],value:9});

});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[3],value:22});

result = await instance.withdraw(712617);
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[2],value:44});

result = await instance.withdraw(920746);
});
it('test 28',async() => {
result = await instance.withdraw(872801);
await instance.sendTransaction({from:accounts[7],value:44});

});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[4],value:88});

result = await instance.withdraw(598863);
});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[2],value:89});

result = await instance.withdraw(651580);
});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[6],value:42});

result = await instance.withdraw(324636);
});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[7],value:96});

result = await instance.withdraw(865088);
});
it('test 33',async() => {
result = await instance.withdraw(552937);
await instance.sendTransaction({from:accounts[3],value:54});

});
it('test 34',async() => {
result = await instance.withdraw(348314);
await instance.sendTransaction({from:accounts[1],value:57});

});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[8],value:68});

result = await instance.withdraw(937209);
});
it('test 36',async() => {
result = await instance.withdraw(572102);
await instance.sendTransaction({from:accounts[8],value:26});

});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[4],value:30});

result = await instance.withdraw(524909);
});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[3],value:61});

result = await instance.withdraw(759670);
});
it('test 39',async() => {
result = await instance.withdraw(622740);
await instance.sendTransaction({from:accounts[2],value:27});

});
it('test 40',async() => {
result = await instance.withdraw(408464);
await instance.sendTransaction({from:accounts[3],value:39});

});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[7],value:51});

result = await instance.withdraw(851686);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 42',async() => {
result = await instance.withdraw(583465);
await instance.sendTransaction({from:accounts[2],value:77});

});
it('test 43',async() => {
result = await instance.withdraw(666215);
await instance.sendTransaction({from:accounts[8],value:22});

});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[5],value:85});

result = await instance.withdraw(446487);
});
it('test 45',async() => {
result = await instance.withdraw(393392);
await instance.sendTransaction({from:accounts[8],value:69});

});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[8],value:20});

result = await instance.withdraw(371878);
});
it('test 47',async() => {
result = await instance.withdraw(968184);
await instance.sendTransaction({from:accounts[1],value:85});

});
it('test 48',async() => {
result = await instance.withdraw(117952);
await instance.sendTransaction({from:accounts[6],value:59});

});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[4],value:15});

result = await instance.withdraw(78471);
});
});
