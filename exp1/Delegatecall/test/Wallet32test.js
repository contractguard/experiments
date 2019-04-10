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
result = await instance.withdraw(34053);
await instance.sendTransaction({from:accounts[7],value:20});

});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[7],value:94});

result = await instance.withdraw(376005);
});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[7],value:54});

result = await instance.withdraw(110153);
});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[3],value:10});

result = await instance.withdraw(788377);
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[5],value:45});

result = await instance.withdraw(806256);
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[3],value:82});

result = await instance.withdraw(311173);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[1],value:99});

result = await instance.withdraw(416151);
});
it('test 7',async() => {
result = await instance.withdraw(59529);
await instance.sendTransaction({from:accounts[1],value:2});

});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[4],value:25});

result = await instance.withdraw(81683);
});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[8],value:84});

result = await instance.withdraw(770679);
});
it('test 10',async() => {
result = await instance.withdraw(230869);
await instance.sendTransaction({from:accounts[2],value:40});

});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[7],value:57});

result = await instance.withdraw(382379);
});
it('test 12',async() => {
result = await instance.withdraw(333637);
await instance.sendTransaction({from:accounts[6],value:21});

});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[7],value:21});

result = await instance.withdraw(903842);
});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[3],value:47});

result = await instance.withdraw(539512);
});
it('test 15',async() => {
result = await instance.withdraw(962576);
await instance.sendTransaction({from:accounts[4],value:99});

});
it('test 16',async() => {
result = await instance.withdraw(883117);
await instance.sendTransaction({from:accounts[3],value:44});

});
it('test 17',async() => {
result = await instance.withdraw(318603);
await instance.sendTransaction({from:accounts[9],value:60});

});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[6],value:42});

result = await instance.withdraw(825472);
});
it('test 19',async() => {
result = await instance.withdraw(346959);
await instance.sendTransaction({from:accounts[3],value:75});

});
it('test 20',async() => {
result = await instance.withdraw(275662);
await instance.sendTransaction({from:accounts[5],value:21});

});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[5],value:38});

result = await instance.withdraw(166839);
});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[3],value:63});

result = await instance.withdraw(1048161);
});
it('test 23',async() => {
result = await instance.withdraw(802268);
await instance.sendTransaction({from:accounts[9],value:14});

});
it('test 24',async() => {
result = await instance.withdraw(756469);
await instance.sendTransaction({from:accounts[3],value:81});

});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[1],value:60});

result = await instance.withdraw(507133);
});
it('test 26',async() => {
result = await instance.withdraw(135510);
await instance.sendTransaction({from:accounts[7],value:49});

});
it('test 27',async() => {
result = await instance.withdraw(943049);
await instance.sendTransaction({from:accounts[4],value:91});

});
it('test 28',async() => {
result = await instance.withdraw(376502);
await instance.sendTransaction({from:accounts[3],value:94});

});
it('test 29',async() => {
result = await instance.withdraw(872071);
await instance.sendTransaction({from:accounts[6],value:5});

});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[6],value:59});

result = await instance.withdraw(212678);
});
it('test 31',async() => {
result = await instance.withdraw(94349);
await instance.sendTransaction({from:accounts[7],value:82});

});
it('test 32',async() => {
result = await instance.withdraw(420656);
await instance.sendTransaction({from:accounts[6],value:1});

});
it('test 33',async() => {
result = await instance.withdraw(430451);
await instance.sendTransaction({from:accounts[4],value:96});

});
it('test 34',async() => {
result = await instance.withdraw(895606);
await instance.sendTransaction({from:accounts[5],value:88});

});
it('test 35',async() => {
result = await instance.withdraw(673654);
await instance.sendTransaction({from:accounts[5],value:45});

});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[8],value:80});

result = await instance.withdraw(908680);
});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[4],value:21});

result = await instance.withdraw(507597);
});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[7],value:18});

result = await instance.withdraw(607444);
});
it('test 39',async() => {
result = await instance.withdraw(631155);
await instance.sendTransaction({from:accounts[9],value:68});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 40',async() => {
await instance.sendTransaction({from:accounts[5],value:56});

result = await instance.withdraw(487141);
});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[3],value:63});

result = await instance.withdraw(816245);
});
it('test 42',async() => {
result = await instance.withdraw(739823);
await instance.sendTransaction({from:accounts[2],value:91});

});
it('test 43',async() => {
result = await instance.withdraw(413106);
await instance.sendTransaction({from:accounts[8],value:85});

});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[8],value:63});

result = await instance.withdraw(896918);
});
it('test 45',async() => {
result = await instance.withdraw(135238);
await instance.sendTransaction({from:accounts[5],value:11});

});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[5],value:97});

result = await instance.withdraw(210707);
});
it('test 47',async() => {
result = await instance.withdraw(746011);
await instance.sendTransaction({from:accounts[2],value:16});

});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[3],value:36});

result = await instance.withdraw(351819);
});
it('test 49',async() => {
result = await instance.withdraw(136792);
await instance.sendTransaction({from:accounts[9],value:75});

});
});
