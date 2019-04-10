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
await instance.sendTransaction({from:accounts[1],value:38});

result = await instance.withdraw(777118);
});
it('test 1',async() => {
result = await instance.withdraw(788715);
await instance.sendTransaction({from:accounts[7],value:11});

});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[6],value:12});

result = await instance.withdraw(182252);
});
it('test 3',async() => {
result = await instance.withdraw(600745);
await instance.sendTransaction({from:accounts[9],value:72});

});
it('test 4',async() => {
result = await instance.withdraw(905124);
await instance.sendTransaction({from:accounts[3],value:16});

});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[5],value:42});

result = await instance.withdraw(589746);
});
it('test 6',async() => {
result = await instance.withdraw(9127);
await instance.sendTransaction({from:accounts[8],value:5});

});
it('test 7',async() => {
result = await instance.withdraw(895596);
await instance.sendTransaction({from:accounts[3],value:4});

});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[5],value:23});

result = await instance.withdraw(734167);
});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[5],value:70});

result = await instance.withdraw(351683);
});
it('test 10',async() => {
result = await instance.withdraw(230940);
await instance.sendTransaction({from:accounts[2],value:89});

});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[1],value:29});

result = await instance.withdraw(1042668);
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[5],value:89});

result = await instance.withdraw(884412);
});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[7],value:88});

result = await instance.withdraw(138422);
});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[6],value:93});

result = await instance.withdraw(319474);
});
it('test 15',async() => {
result = await instance.withdraw(854378);
await instance.sendTransaction({from:accounts[3],value:7});

});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[2],value:69});

result = await instance.withdraw(1002595);
});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[2],value:64});

result = await instance.withdraw(715909);
});
it('test 18',async() => {
result = await instance.withdraw(447433);
await instance.sendTransaction({from:accounts[7],value:22});

});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[7],value:24});

result = await instance.withdraw(174376);
});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[3],value:58});

result = await instance.withdraw(894523);
});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[9],value:90});

result = await instance.withdraw(431588);
});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[1],value:76});

result = await instance.withdraw(830878);
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[3],value:55});

result = await instance.withdraw(613095);
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[8],value:78});

result = await instance.withdraw(763661);
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[1],value:94});

result = await instance.withdraw(338075);
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[4],value:32});

result = await instance.withdraw(136611);
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[1],value:90});

result = await instance.withdraw(445673);
});
it('test 28',async() => {
result = await instance.withdraw(159667);
await instance.sendTransaction({from:accounts[7],value:57});

});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[1],value:36});

result = await instance.withdraw(986629);
});
it('test 30',async() => {
result = await instance.withdraw(214108);
await instance.sendTransaction({from:accounts[3],value:55});

});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[8],value:13});

result = await instance.withdraw(1000268);
});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[8],value:70});

result = await instance.withdraw(398534);
});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[5],value:83});

result = await instance.withdraw(240825);
});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[3],value:87});

result = await instance.withdraw(371628);
});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[5],value:69});

result = await instance.withdraw(482441);
});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[7],value:67});

result = await instance.withdraw(966273);
});
it('test 37',async() => {
result = await instance.withdraw(391207);
await instance.sendTransaction({from:accounts[3],value:34});

});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[6],value:14});

result = await instance.withdraw(508925);
});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[9],value:32});

result = await instance.withdraw(580111);
});
it('test 40',async() => {
result = await instance.withdraw(27761);
await instance.sendTransaction({from:accounts[2],value:79});

});
it('test 41',async() => {
result = await instance.withdraw(507160);
await instance.sendTransaction({from:accounts[3],value:5});

});
it('test 42',async() => {
result = await instance.withdraw(224926);
await instance.sendTransaction({from:accounts[2],value:3});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 43',async() => {
result = await instance.withdraw(241820);
await instance.sendTransaction({from:accounts[6],value:63});

});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[9],value:40});

result = await instance.withdraw(872925);
});
it('test 45',async() => {
result = await instance.withdraw(1030182);
await instance.sendTransaction({from:accounts[9],value:78});

});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[4],value:43});

result = await instance.withdraw(325237);
});
it('test 47',async() => {
result = await instance.withdraw(679180);
await instance.sendTransaction({from:accounts[3],value:30});

});
it('test 48',async() => {
result = await instance.withdraw(820814);
await instance.sendTransaction({from:accounts[4],value:75});

});
it('test 49',async() => {
result = await instance.withdraw(637755);
await instance.sendTransaction({from:accounts[5],value:79});

});
});
