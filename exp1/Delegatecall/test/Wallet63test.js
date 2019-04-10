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
result = await instance.withdraw(475284);
await instance.sendTransaction({from:accounts[9],value:99});

});
it('test 1',async() => {
result = await instance.withdraw(170703);
await instance.sendTransaction({from:accounts[8],value:60});

});
it('test 2',async() => {
result = await instance.withdraw(714305);
await instance.sendTransaction({from:accounts[5],value:8});

});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[7],value:62});

result = await instance.withdraw(249310);
});
it('test 4',async() => {
result = await instance.withdraw(715052);
await instance.sendTransaction({from:accounts[8],value:91});

});
it('test 5',async() => {
result = await instance.withdraw(114002);
await instance.sendTransaction({from:accounts[2],value:2});

});
it('test 6',async() => {
result = await instance.withdraw(141828);
await instance.sendTransaction({from:accounts[2],value:18});

});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[8],value:75});

result = await instance.withdraw(639733);
});
it('test 8',async() => {
result = await instance.withdraw(830275);
await instance.sendTransaction({from:accounts[9],value:66});

});
it('test 9',async() => {
result = await instance.withdraw(854589);
await instance.sendTransaction({from:accounts[4],value:56});

});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[7],value:66});

result = await instance.withdraw(257961);
});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[8],value:8});

result = await instance.withdraw(391599);
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[2],value:26});

result = await instance.withdraw(413707);
});
it('test 13',async() => {
result = await instance.withdraw(310254);
await instance.sendTransaction({from:accounts[9],value:68});

});
it('test 14',async() => {
result = await instance.withdraw(368641);
await instance.sendTransaction({from:accounts[8],value:9});

});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[2],value:90});

result = await instance.withdraw(345701);
});
it('test 16',async() => {
result = await instance.withdraw(608918);
await instance.sendTransaction({from:accounts[1],value:82});

});
it('test 17',async() => {
result = await instance.withdraw(986391);
await instance.sendTransaction({from:accounts[5],value:91});

});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[3],value:73});

result = await instance.withdraw(258908);
});
it('test 19',async() => {
result = await instance.withdraw(359683);
await instance.sendTransaction({from:accounts[6],value:52});

});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[8],value:32});

result = await instance.withdraw(997907);
});
it('test 21',async() => {
result = await instance.withdraw(759935);
await instance.sendTransaction({from:accounts[5],value:39});

});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[3],value:28});

result = await instance.withdraw(183387);
});
it('test 23',async() => {
result = await instance.withdraw(874787);
await instance.sendTransaction({from:accounts[2],value:15});

});
it('test 24',async() => {
result = await instance.withdraw(904457);
await instance.sendTransaction({from:accounts[8],value:83});

});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[8],value:74});

result = await instance.withdraw(867151);
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[3],value:39});

result = await instance.withdraw(91679);
});
it('test 27',async() => {
result = await instance.withdraw(115134);
await instance.sendTransaction({from:accounts[6],value:61});

});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[6],value:57});

result = await instance.withdraw(749110);
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[2],value:83});

result = await instance.withdraw(401712);
});
it('test 30',async() => {
result = await instance.withdraw(484404);
await instance.sendTransaction({from:accounts[9],value:13});

});
it('test 31',async() => {
result = await instance.withdraw(386333);
await instance.sendTransaction({from:accounts[7],value:53});

});
it('test 32',async() => {
result = await instance.withdraw(395981);
await instance.sendTransaction({from:accounts[6],value:19});

});
it('test 33',async() => {
result = await instance.withdraw(312233);
await instance.sendTransaction({from:accounts[9],value:78});

});
it('test 34',async() => {
result = await instance.withdraw(242335);
await instance.sendTransaction({from:accounts[6],value:24});

});
it('test 35',async() => {
result = await instance.withdraw(442371);
await instance.sendTransaction({from:accounts[4],value:84});

});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[2],value:46});

result = await instance.withdraw(241543);
});
it('test 37',async() => {
result = await instance.withdraw(764508);
await instance.sendTransaction({from:accounts[5],value:81});

});
it('test 38',async() => {
result = await instance.withdraw(654308);
await instance.sendTransaction({from:accounts[6],value:93});

});
it('test 39',async() => {
result = await instance.withdraw(394104);
await instance.sendTransaction({from:accounts[6],value:9});

});
it('test 40',async() => {
await instance.sendTransaction({from:accounts[5],value:95});

result = await instance.withdraw(359649);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 41',async() => {
result = await instance.withdraw(671583);
await instance.sendTransaction({from:accounts[6],value:15});

});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[5],value:7});

result = await instance.withdraw(1009831);
});
it('test 43',async() => {
await instance.sendTransaction({from:accounts[9],value:19});

result = await instance.withdraw(365446);
});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[8],value:44});

result = await instance.withdraw(939416);
});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[3],value:43});

result = await instance.withdraw(549253);
});
it('test 46',async() => {
result = await instance.withdraw(800864);
await instance.sendTransaction({from:accounts[1],value:11});

});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[8],value:32});

result = await instance.withdraw(71011);
});
it('test 48',async() => {
result = await instance.withdraw(339593);
await instance.sendTransaction({from:accounts[7],value:95});

});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[6],value:89});

result = await instance.withdraw(242260);
});
});
