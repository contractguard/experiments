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
result = await instance.withdraw(106597);
await instance.sendTransaction({from:accounts[3],value:8});

});
it('test 1',async() => {
result = await instance.withdraw(505081);
await instance.sendTransaction({from:accounts[1],value:92});

});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[5],value:90});

result = await instance.withdraw(869614);
});
it('test 3',async() => {
result = await instance.withdraw(575972);
await instance.sendTransaction({from:accounts[9],value:98});

});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[6],value:37});

result = await instance.withdraw(133790);
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[8],value:57});

result = await instance.withdraw(987153);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[7],value:89});

result = await instance.withdraw(724575);
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[3],value:62});

result = await instance.withdraw(52919);
});
it('test 8',async() => {
result = await instance.withdraw(699603);
await instance.sendTransaction({from:accounts[9],value:58});

});
it('test 9',async() => {
result = await instance.withdraw(175924);
await instance.sendTransaction({from:accounts[9],value:39});

});
it('test 10',async() => {
result = await instance.withdraw(328431);
await instance.sendTransaction({from:accounts[5],value:85});

});
it('test 11',async() => {
result = await instance.withdraw(967367);
await instance.sendTransaction({from:accounts[5],value:72});

});
it('test 12',async() => {
result = await instance.withdraw(344098);
await instance.sendTransaction({from:accounts[7],value:27});

});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[6],value:96});

result = await instance.withdraw(340065);
});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[4],value:77});

result = await instance.withdraw(77935);
});
it('test 15',async() => {
result = await instance.withdraw(737479);
await instance.sendTransaction({from:accounts[4],value:26});

});
it('test 16',async() => {
result = await instance.withdraw(784929);
await instance.sendTransaction({from:accounts[3],value:10});

});
it('test 17',async() => {
result = await instance.withdraw(253824);
await instance.sendTransaction({from:accounts[6],value:56});

});
it('test 18',async() => {
result = await instance.withdraw(327197);
await instance.sendTransaction({from:accounts[6],value:50});

});
it('test 19',async() => {
result = await instance.withdraw(373656);
await instance.sendTransaction({from:accounts[9],value:51});

});
it('test 20',async() => {
result = await instance.withdraw(161001);
await instance.sendTransaction({from:accounts[3],value:97});

});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[8],value:69});

result = await instance.withdraw(916070);
});
it('test 22',async() => {
result = await instance.withdraw(481842);
await instance.sendTransaction({from:accounts[3],value:36});

});
it('test 23',async() => {
result = await instance.withdraw(958002);
await instance.sendTransaction({from:accounts[2],value:19});

});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[6],value:13});

result = await instance.withdraw(652409);
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[5],value:16});

result = await instance.withdraw(301257);
});
it('test 26',async() => {
result = await instance.withdraw(776871);
await instance.sendTransaction({from:accounts[6],value:36});

});
it('test 27',async() => {
result = await instance.withdraw(624852);
await instance.sendTransaction({from:accounts[1],value:34});

});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[3],value:97});

result = await instance.withdraw(647667);
});
it('test 29',async() => {
result = await instance.withdraw(537586);
await instance.sendTransaction({from:accounts[1],value:77});

});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[9],value:71});

result = await instance.withdraw(177145);
});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[3],value:93});

result = await instance.withdraw(418485);
});
it('test 32',async() => {
result = await instance.withdraw(677405);
await instance.sendTransaction({from:accounts[7],value:84});

});
it('test 33',async() => {
result = await instance.withdraw(409253);
await instance.sendTransaction({from:accounts[5],value:15});

});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[4],value:40});

result = await instance.withdraw(936221);
});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[4],value:71});

result = await instance.withdraw(62631);
});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[4],value:96});

result = await instance.withdraw(1005998);
});
it('test 37',async() => {
result = await instance.withdraw(209073);
await instance.sendTransaction({from:accounts[4],value:56});

});
it('test 38',async() => {
result = await instance.withdraw(853867);
await instance.sendTransaction({from:accounts[4],value:32});

});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[6],value:61});

result = await instance.withdraw(948716);
});
it('test 40',async() => {
await instance.sendTransaction({from:accounts[5],value:46});

result = await instance.withdraw(480363);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 41',async() => {
await instance.sendTransaction({from:accounts[6],value:50});

result = await instance.withdraw(581257);
});
it('test 42',async() => {
result = await instance.withdraw(988142);
await instance.sendTransaction({from:accounts[9],value:81});

});
it('test 43',async() => {
await instance.sendTransaction({from:accounts[6],value:34});

result = await instance.withdraw(902533);
});
it('test 44',async() => {
result = await instance.withdraw(978707);
await instance.sendTransaction({from:accounts[8],value:97});

});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[7],value:14});

result = await instance.withdraw(426062);
});
it('test 46',async() => {
result = await instance.withdraw(313761);
await instance.sendTransaction({from:accounts[3],value:74});

});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[5],value:35});

result = await instance.withdraw(108621);
});
it('test 48',async() => {
result = await instance.withdraw(390339);
await instance.sendTransaction({from:accounts[2],value:98});

});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[8],value:72});

result = await instance.withdraw(459675);
});
});
