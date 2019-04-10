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
await instance.sendTransaction({from:accounts[8],value:7});

result = await instance.withdraw(347475);
});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[9],value:54});

result = await instance.withdraw(280319);
});
it('test 2',async() => {
result = await instance.withdraw(38760);
await instance.sendTransaction({from:accounts[9],value:62});

});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[4],value:40});

result = await instance.withdraw(578311);
});
it('test 4',async() => {
result = await instance.withdraw(1018797);
await instance.sendTransaction({from:accounts[9],value:75});

});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[1],value:88});

result = await instance.withdraw(226478);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[2],value:21});

result = await instance.withdraw(460152);
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[1],value:78});

result = await instance.withdraw(76554);
});
it('test 8',async() => {
result = await instance.withdraw(28263);
await instance.sendTransaction({from:accounts[1],value:47});

});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[8],value:7});

result = await instance.withdraw(186977);
});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[7],value:80});

result = await instance.withdraw(330413);
});
it('test 11',async() => {
result = await instance.withdraw(116370);
await instance.sendTransaction({from:accounts[1],value:82});

});
it('test 12',async() => {
result = await instance.withdraw(345913);
await instance.sendTransaction({from:accounts[9],value:93});

});
it('test 13',async() => {
result = await instance.withdraw(494376);
await instance.sendTransaction({from:accounts[7],value:20});

});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[6],value:96});

result = await instance.withdraw(412593);
});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[3],value:10});

result = await instance.withdraw(162337);
});
it('test 16',async() => {
result = await instance.withdraw(106984);
await instance.sendTransaction({from:accounts[3],value:1});

});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[4],value:99});

result = await instance.withdraw(711256);
});
it('test 18',async() => {
result = await instance.withdraw(752483);
await instance.sendTransaction({from:accounts[3],value:48});

});
it('test 19',async() => {
result = await instance.withdraw(183534);
await instance.sendTransaction({from:accounts[6],value:62});

});
it('test 20',async() => {
result = await instance.withdraw(972145);
await instance.sendTransaction({from:accounts[5],value:59});

});
it('test 21',async() => {
result = await instance.withdraw(460512);
await instance.sendTransaction({from:accounts[5],value:66});

});
it('test 22',async() => {
result = await instance.withdraw(713333);
await instance.sendTransaction({from:accounts[5],value:76});

});
it('test 23',async() => {
result = await instance.withdraw(611087);
await instance.sendTransaction({from:accounts[2],value:40});

});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[8],value:42});

result = await instance.withdraw(460418);
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[6],value:74});

result = await instance.withdraw(454959);
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[5],value:69});

result = await instance.withdraw(58511);
});
it('test 27',async() => {
result = await instance.withdraw(741428);
await instance.sendTransaction({from:accounts[6],value:63});

});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[2],value:11});

result = await instance.withdraw(111277);
});
it('test 29',async() => {
result = await instance.withdraw(342756);
await instance.sendTransaction({from:accounts[8],value:48});

});
it('test 30',async() => {
result = await instance.withdraw(218684);
await instance.sendTransaction({from:accounts[9],value:55});

});
it('test 31',async() => {
result = await instance.withdraw(1018789);
await instance.sendTransaction({from:accounts[2],value:45});

});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[4],value:4});

result = await instance.withdraw(310595);
});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[4],value:38});

result = await instance.withdraw(349867);
});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[4],value:93});

result = await instance.withdraw(420514);
});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[3],value:36});

result = await instance.withdraw(790928);
});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[3],value:95});

result = await instance.withdraw(453821);
});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[3],value:21});

result = await instance.withdraw(791050);
});
it('test 38',async() => {
result = await instance.withdraw(29186);
await instance.sendTransaction({from:accounts[2],value:68});

});
it('test 39',async() => {
result = await instance.withdraw(74544);
await instance.sendTransaction({from:accounts[4],value:42});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 40',async() => {
await instance.sendTransaction({from:accounts[8],value:16});

result = await instance.withdraw(621664);
});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[3],value:56});

result = await instance.withdraw(794749);
});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[5],value:37});

result = await instance.withdraw(288507);
});
it('test 43',async() => {
result = await instance.withdraw(791850);
await instance.sendTransaction({from:accounts[9],value:74});

});
it('test 44',async() => {
result = await instance.withdraw(135284);
await instance.sendTransaction({from:accounts[4],value:89});

});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[8],value:25});

result = await instance.withdraw(115587);
});
it('test 46',async() => {
result = await instance.withdraw(414316);
await instance.sendTransaction({from:accounts[7],value:37});

});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[2],value:59});

result = await instance.withdraw(745478);
});
it('test 48',async() => {
result = await instance.withdraw(192581);
await instance.sendTransaction({from:accounts[7],value:89});

});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[1],value:56});

result = await instance.withdraw(829507);
});
});
