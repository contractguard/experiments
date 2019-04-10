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
await instance.sendTransaction({from:accounts[6],value:79});

result = await instance.withdraw(533116);
});
it('test 1',async() => {
result = await instance.withdraw(795879);
await instance.sendTransaction({from:accounts[4],value:67});

});
it('test 2',async() => {
result = await instance.withdraw(499647);
await instance.sendTransaction({from:accounts[9],value:77});

});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[1],value:29});

result = await instance.withdraw(192751);
});
it('test 4',async() => {
result = await instance.withdraw(115657);
await instance.sendTransaction({from:accounts[4],value:97});

});
it('test 5',async() => {
result = await instance.withdraw(981939);
await instance.sendTransaction({from:accounts[9],value:8});

});
it('test 6',async() => {
result = await instance.withdraw(1010701);
await instance.sendTransaction({from:accounts[7],value:71});

});
it('test 7',async() => {
result = await instance.withdraw(348363);
await instance.sendTransaction({from:accounts[1],value:69});

});
it('test 8',async() => {
result = await instance.withdraw(157824);
await instance.sendTransaction({from:accounts[5],value:4});

});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[9],value:43});

result = await instance.withdraw(696547);
});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[5],value:25});

result = await instance.withdraw(326719);
});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[8],value:79});

result = await instance.withdraw(946730);
});
it('test 12',async() => {
result = await instance.withdraw(803193);
await instance.sendTransaction({from:accounts[7],value:70});

});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[5],value:74});

result = await instance.withdraw(317392);
});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[6],value:99});

result = await instance.withdraw(366229);
});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[5],value:92});

result = await instance.withdraw(710785);
});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[2],value:78});

result = await instance.withdraw(898042);
});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[2],value:59});

result = await instance.withdraw(332094);
});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[4],value:78});

result = await instance.withdraw(166672);
});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[9],value:3});

result = await instance.withdraw(272400);
});
it('test 20',async() => {
result = await instance.withdraw(1032040);
await instance.sendTransaction({from:accounts[5],value:24});

});
it('test 21',async() => {
result = await instance.withdraw(863517);
await instance.sendTransaction({from:accounts[9],value:68});

});
it('test 22',async() => {
result = await instance.withdraw(206683);
await instance.sendTransaction({from:accounts[5],value:51});

});
it('test 23',async() => {
result = await instance.withdraw(883614);
await instance.sendTransaction({from:accounts[9],value:42});

});
it('test 24',async() => {
result = await instance.withdraw(309647);
await instance.sendTransaction({from:accounts[9],value:38});

});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[4],value:56});

result = await instance.withdraw(1004438);
});
it('test 26',async() => {
result = await instance.withdraw(405269);
await instance.sendTransaction({from:accounts[1],value:38});

});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[9],value:20});

result = await instance.withdraw(632386);
});
it('test 28',async() => {
result = await instance.withdraw(291487);
await instance.sendTransaction({from:accounts[5],value:6});

});
it('test 29',async() => {
result = await instance.withdraw(954445);
await instance.sendTransaction({from:accounts[8],value:7});

});
it('test 30',async() => {
result = await instance.withdraw(372068);
await instance.sendTransaction({from:accounts[8],value:43});

});
it('test 31',async() => {
result = await instance.withdraw(135829);
await instance.sendTransaction({from:accounts[6],value:46});

});
it('test 32',async() => {
result = await instance.withdraw(705587);
await instance.sendTransaction({from:accounts[3],value:82});

});
it('test 33',async() => {
result = await instance.withdraw(814031);
await instance.sendTransaction({from:accounts[4],value:47});

});
it('test 34',async() => {
result = await instance.withdraw(235770);
await instance.sendTransaction({from:accounts[1],value:33});

});
it('test 35',async() => {
result = await instance.withdraw(534997);
await instance.sendTransaction({from:accounts[2],value:36});

});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[6],value:72});

result = await instance.withdraw(34731);
});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[7],value:3});

result = await instance.withdraw(151009);
});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[8],value:99});

result = await instance.withdraw(12654);
});
it('test 39',async() => {
result = await instance.withdraw(6908);
await instance.sendTransaction({from:accounts[4],value:36});

});
it('test 40',async() => {
result = await instance.withdraw(287866);
await instance.sendTransaction({from:accounts[4],value:11});

});
it('test 41',async() => {
result = await instance.withdraw(407990);
await instance.sendTransaction({from:accounts[1],value:90});

});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[3],value:61});

result = await instance.withdraw(537306);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 43',async() => {
await instance.sendTransaction({from:accounts[5],value:80});

result = await instance.withdraw(921763);
});
it('test 44',async() => {
result = await instance.withdraw(413395);
await instance.sendTransaction({from:accounts[5],value:94});

});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[8],value:70});

result = await instance.withdraw(238761);
});
it('test 46',async() => {
result = await instance.withdraw(917564);
await instance.sendTransaction({from:accounts[6],value:100});

});
it('test 47',async() => {
result = await instance.withdraw(224220);
await instance.sendTransaction({from:accounts[3],value:63});

});
it('test 48',async() => {
result = await instance.withdraw(878315);
await instance.sendTransaction({from:accounts[9],value:46});

});
it('test 49',async() => {
result = await instance.withdraw(1045398);
await instance.sendTransaction({from:accounts[7],value:72});

});
});
