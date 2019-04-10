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
result = await instance.withdraw(432126);
await instance.sendTransaction({from:accounts[1],value:83});

});
it('test 1',async() => {
result = await instance.withdraw(815594);
await instance.sendTransaction({from:accounts[6],value:61});

});
it('test 2',async() => {
result = await instance.withdraw(816326);
await instance.sendTransaction({from:accounts[8],value:23});

});
it('test 3',async() => {
result = await instance.withdraw(152586);
await instance.sendTransaction({from:accounts[3],value:27});

});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[1],value:64});

result = await instance.withdraw(60558);
});
it('test 5',async() => {
result = await instance.withdraw(294676);
await instance.sendTransaction({from:accounts[9],value:80});

});
it('test 6',async() => {
result = await instance.withdraw(204110);
await instance.sendTransaction({from:accounts[1],value:64});

});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[8],value:56});

result = await instance.withdraw(635025);
});
it('test 8',async() => {
result = await instance.withdraw(897286);
await instance.sendTransaction({from:accounts[5],value:47});

});
it('test 9',async() => {
result = await instance.withdraw(251492);
await instance.sendTransaction({from:accounts[9],value:85});

});
it('test 10',async() => {
result = await instance.withdraw(899241);
await instance.sendTransaction({from:accounts[4],value:15});

});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[9],value:85});

result = await instance.withdraw(524466);
});
it('test 12',async() => {
result = await instance.withdraw(954430);
await instance.sendTransaction({from:accounts[1],value:9});

});
it('test 13',async() => {
result = await instance.withdraw(424904);
await instance.sendTransaction({from:accounts[5],value:91});

});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[4],value:93});

result = await instance.withdraw(540891);
});
it('test 15',async() => {
result = await instance.withdraw(479579);
await instance.sendTransaction({from:accounts[9],value:71});

});
it('test 16',async() => {
result = await instance.withdraw(813690);
await instance.sendTransaction({from:accounts[2],value:76});

});
it('test 17',async() => {
result = await instance.withdraw(306056);
await instance.sendTransaction({from:accounts[6],value:58});

});
it('test 18',async() => {
result = await instance.withdraw(939000);
await instance.sendTransaction({from:accounts[2],value:53});

});
it('test 19',async() => {
result = await instance.withdraw(153453);
await instance.sendTransaction({from:accounts[5],value:62});

});
it('test 20',async() => {
result = await instance.withdraw(836968);
await instance.sendTransaction({from:accounts[4],value:40});

});
it('test 21',async() => {
result = await instance.withdraw(956916);
await instance.sendTransaction({from:accounts[6],value:6});

});
it('test 22',async() => {
result = await instance.withdraw(371672);
await instance.sendTransaction({from:accounts[1],value:20});

});
it('test 23',async() => {
result = await instance.withdraw(290359);
await instance.sendTransaction({from:accounts[9],value:93});

});
it('test 24',async() => {
result = await instance.withdraw(576890);
await instance.sendTransaction({from:accounts[3],value:95});

});
it('test 25',async() => {
result = await instance.withdraw(114951);
await instance.sendTransaction({from:accounts[3],value:34});

});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[6],value:69});

result = await instance.withdraw(158157);
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[6],value:89});

result = await instance.withdraw(547037);
});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[2],value:65});

result = await instance.withdraw(677199);
});
it('test 29',async() => {
result = await instance.withdraw(476572);
await instance.sendTransaction({from:accounts[5],value:11});

});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[9],value:22});

result = await instance.withdraw(748476);
});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[9],value:55});

result = await instance.withdraw(405897);
});
it('test 32',async() => {
result = await instance.withdraw(43081);
await instance.sendTransaction({from:accounts[4],value:59});

});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[8],value:87});

result = await instance.withdraw(916827);
});
it('test 34',async() => {
result = await instance.withdraw(895709);
await instance.sendTransaction({from:accounts[1],value:1});

});
it('test 35',async() => {
result = await instance.withdraw(20495);
await instance.sendTransaction({from:accounts[6],value:57});

});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[4],value:44});

result = await instance.withdraw(861823);
});
it('test 37',async() => {
result = await instance.withdraw(577870);
await instance.sendTransaction({from:accounts[2],value:77});

});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[9],value:13});

result = await instance.withdraw(615519);
});
it('test 39',async() => {
result = await instance.withdraw(125086);
await instance.sendTransaction({from:accounts[7],value:37});

});
it('test 40',async() => {
result = await instance.withdraw(929122);
await instance.sendTransaction({from:accounts[5],value:36});

});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[6],value:60});

result = await instance.withdraw(82697);
});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[2],value:48});

result = await instance.withdraw(845400);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 43',async() => {
result = await instance.withdraw(102988);
await instance.sendTransaction({from:accounts[7],value:58});

});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[9],value:24});

result = await instance.withdraw(714625);
});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[6],value:37});

result = await instance.withdraw(534628);
});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[5],value:20});

result = await instance.withdraw(18438);
});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[9],value:9});

result = await instance.withdraw(312531);
});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[7],value:3});

result = await instance.withdraw(357885);
});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[3],value:88});

result = await instance.withdraw(799768);
});
});
