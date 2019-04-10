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
result = await instance.withdraw(900382);
await instance.sendTransaction({from:accounts[2],value:68});

});
it('test 1',async() => {
result = await instance.withdraw(975969);
await instance.sendTransaction({from:accounts[6],value:62});

});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[9],value:26});

result = await instance.withdraw(609608);
});
it('test 3',async() => {
result = await instance.withdraw(430067);
await instance.sendTransaction({from:accounts[1],value:35});

});
it('test 4',async() => {
result = await instance.withdraw(132265);
await instance.sendTransaction({from:accounts[5],value:17});

});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[4],value:88});

result = await instance.withdraw(525698);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[4],value:85});

result = await instance.withdraw(863095);
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[4],value:47});

result = await instance.withdraw(9642);
});
it('test 8',async() => {
result = await instance.withdraw(190254);
await instance.sendTransaction({from:accounts[3],value:78});

});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[2],value:24});

result = await instance.withdraw(963392);
});
it('test 10',async() => {
result = await instance.withdraw(643851);
await instance.sendTransaction({from:accounts[8],value:93});

});
it('test 11',async() => {
result = await instance.withdraw(942708);
await instance.sendTransaction({from:accounts[6],value:95});

});
it('test 12',async() => {
result = await instance.withdraw(376143);
await instance.sendTransaction({from:accounts[7],value:50});

});
it('test 13',async() => {
result = await instance.withdraw(879483);
await instance.sendTransaction({from:accounts[3],value:60});

});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[7],value:88});

result = await instance.withdraw(863451);
});
it('test 15',async() => {
result = await instance.withdraw(385829);
await instance.sendTransaction({from:accounts[7],value:55});

});
it('test 16',async() => {
result = await instance.withdraw(399993);
await instance.sendTransaction({from:accounts[7],value:56});

});
it('test 17',async() => {
result = await instance.withdraw(896780);
await instance.sendTransaction({from:accounts[9],value:38});

});
it('test 18',async() => {
result = await instance.withdraw(666050);
await instance.sendTransaction({from:accounts[9],value:97});

});
it('test 19',async() => {
result = await instance.withdraw(50119);
await instance.sendTransaction({from:accounts[5],value:12});

});
it('test 20',async() => {
result = await instance.withdraw(968650);
await instance.sendTransaction({from:accounts[7],value:29});

});
it('test 21',async() => {
result = await instance.withdraw(651152);
await instance.sendTransaction({from:accounts[4],value:9});

});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[3],value:9});

result = await instance.withdraw(785012);
});
it('test 23',async() => {
result = await instance.withdraw(427929);
await instance.sendTransaction({from:accounts[8],value:34});

});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[6],value:19});

result = await instance.withdraw(349236);
});
it('test 25',async() => {
result = await instance.withdraw(669504);
await instance.sendTransaction({from:accounts[1],value:19});

});
it('test 26',async() => {
result = await instance.withdraw(423701);
await instance.sendTransaction({from:accounts[9],value:16});

});
it('test 27',async() => {
result = await instance.withdraw(37864);
await instance.sendTransaction({from:accounts[4],value:50});

});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[1],value:75});

result = await instance.withdraw(953488);
});
it('test 29',async() => {
result = await instance.withdraw(282263);
await instance.sendTransaction({from:accounts[4],value:37});

});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[2],value:22});

result = await instance.withdraw(174924);
});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[1],value:59});

result = await instance.withdraw(952859);
});
it('test 32',async() => {
result = await instance.withdraw(89641);
await instance.sendTransaction({from:accounts[4],value:86});

});
it('test 33',async() => {
result = await instance.withdraw(182391);
await instance.sendTransaction({from:accounts[5],value:30});

});
it('test 34',async() => {
result = await instance.withdraw(976232);
await instance.sendTransaction({from:accounts[3],value:6});

});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[9],value:89});

result = await instance.withdraw(900130);
});
it('test 36',async() => {
result = await instance.withdraw(809237);
await instance.sendTransaction({from:accounts[4],value:97});

});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[1],value:97});

result = await instance.withdraw(855206);
});
it('test 38',async() => {
result = await instance.withdraw(521019);
await instance.sendTransaction({from:accounts[8],value:64});

});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[7],value:31});

result = await instance.withdraw(382858);
});
it('test 40',async() => {
result = await instance.withdraw(632916);
await instance.sendTransaction({from:accounts[9],value:24});

});
it('test 41',async() => {
result = await instance.withdraw(247034);
await instance.sendTransaction({from:accounts[3],value:90});

});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[5],value:68});

result = await instance.withdraw(1022810);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 43',async() => {
result = await instance.withdraw(481034);
await instance.sendTransaction({from:accounts[4],value:51});

});
it('test 44',async() => {
result = await instance.withdraw(666345);
await instance.sendTransaction({from:accounts[9],value:24});

});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[6],value:15});

result = await instance.withdraw(1021970);
});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[4],value:75});

result = await instance.withdraw(923897);
});
it('test 47',async() => {
result = await instance.withdraw(147894);
await instance.sendTransaction({from:accounts[8],value:60});

});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[7],value:25});

result = await instance.withdraw(766949);
});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[6],value:18});

result = await instance.withdraw(937537);
});
});
