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
result = await instance.withdraw(663522);
await instance.sendTransaction({from:accounts[4],value:40});

});
it('test 1',async() => {
result = await instance.withdraw(24135);
await instance.sendTransaction({from:accounts[7],value:41});

});
it('test 2',async() => {
result = await instance.withdraw(148213);
await instance.sendTransaction({from:accounts[7],value:66});

});
it('test 3',async() => {
result = await instance.withdraw(90304);
await instance.sendTransaction({from:accounts[8],value:47});

});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[6],value:14});

result = await instance.withdraw(399128);
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[4],value:97});

result = await instance.withdraw(816831);
});
it('test 6',async() => {
result = await instance.withdraw(80746);
await instance.sendTransaction({from:accounts[4],value:80});

});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[4],value:5});

result = await instance.withdraw(452490);
});
it('test 8',async() => {
result = await instance.withdraw(239887);
await instance.sendTransaction({from:accounts[5],value:6});

});
it('test 9',async() => {
result = await instance.withdraw(569219);
await instance.sendTransaction({from:accounts[5],value:67});

});
it('test 10',async() => {
result = await instance.withdraw(393443);
await instance.sendTransaction({from:accounts[5],value:100});

});
it('test 11',async() => {
result = await instance.withdraw(102836);
await instance.sendTransaction({from:accounts[6],value:74});

});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[6],value:6});

result = await instance.withdraw(260332);
});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[2],value:67});

result = await instance.withdraw(453229);
});
it('test 14',async() => {
result = await instance.withdraw(194678);
await instance.sendTransaction({from:accounts[2],value:33});

});
it('test 15',async() => {
result = await instance.withdraw(385550);
await instance.sendTransaction({from:accounts[5],value:100});

});
it('test 16',async() => {
result = await instance.withdraw(1010220);
await instance.sendTransaction({from:accounts[9],value:8});

});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[1],value:81});

result = await instance.withdraw(41252);
});
it('test 18',async() => {
result = await instance.withdraw(638537);
await instance.sendTransaction({from:accounts[6],value:72});

});
it('test 19',async() => {
result = await instance.withdraw(248276);
await instance.sendTransaction({from:accounts[6],value:11});

});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[4],value:60});

result = await instance.withdraw(211416);
});
it('test 21',async() => {
result = await instance.withdraw(216038);
await instance.sendTransaction({from:accounts[9],value:25});

});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[1],value:6});

result = await instance.withdraw(250450);
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[8],value:90});

result = await instance.withdraw(1014389);
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[9],value:77});

result = await instance.withdraw(101678);
});
it('test 25',async() => {
result = await instance.withdraw(609795);
await instance.sendTransaction({from:accounts[8],value:93});

});
it('test 26',async() => {
result = await instance.withdraw(545826);
await instance.sendTransaction({from:accounts[4],value:91});

});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[1],value:44});

result = await instance.withdraw(77637);
});
it('test 28',async() => {
result = await instance.withdraw(991781);
await instance.sendTransaction({from:accounts[6],value:14});

});
it('test 29',async() => {
result = await instance.withdraw(652586);
await instance.sendTransaction({from:accounts[8],value:58});

});
it('test 30',async() => {
result = await instance.withdraw(785085);
await instance.sendTransaction({from:accounts[2],value:46});

});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[2],value:67});

result = await instance.withdraw(274123);
});
it('test 32',async() => {
result = await instance.withdraw(658000);
await instance.sendTransaction({from:accounts[8],value:32});

});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[6],value:37});

result = await instance.withdraw(805824);
});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[2],value:1});

result = await instance.withdraw(133431);
});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[4],value:97});

result = await instance.withdraw(1012513);
});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[1],value:82});

result = await instance.withdraw(726610);
});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[7],value:42});

result = await instance.withdraw(546481);
});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[1],value:33});

result = await instance.withdraw(1046325);
});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[8],value:43});

result = await instance.withdraw(534220);
});
it('test 40',async() => {
result = await instance.withdraw(266043);
await instance.sendTransaction({from:accounts[3],value:90});

});
it('test 41',async() => {
result = await instance.withdraw(498877);
await instance.sendTransaction({from:accounts[9],value:80});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 42',async() => {
result = await instance.withdraw(156763);
await instance.sendTransaction({from:accounts[3],value:62});

});
it('test 43',async() => {
await instance.sendTransaction({from:accounts[6],value:27});

result = await instance.withdraw(118263);
});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[7],value:88});

result = await instance.withdraw(231030);
});
it('test 45',async() => {
result = await instance.withdraw(636002);
await instance.sendTransaction({from:accounts[3],value:32});

});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[5],value:55});

result = await instance.withdraw(719970);
});
it('test 47',async() => {
result = await instance.withdraw(761149);
await instance.sendTransaction({from:accounts[6],value:100});

});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[2],value:63});

result = await instance.withdraw(209849);
});
it('test 49',async() => {
result = await instance.withdraw(950858);
await instance.sendTransaction({from:accounts[8],value:79});

});
});
