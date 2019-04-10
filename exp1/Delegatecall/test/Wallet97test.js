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
result = await instance.withdraw(23361);
await instance.sendTransaction({from:accounts[6],value:19});

});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[5],value:80});

result = await instance.withdraw(927403);
});
it('test 2',async() => {
result = await instance.withdraw(1013009);
await instance.sendTransaction({from:accounts[5],value:87});

});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[4],value:86});

result = await instance.withdraw(701910);
});
it('test 4',async() => {
result = await instance.withdraw(611233);
await instance.sendTransaction({from:accounts[3],value:2});

});
it('test 5',async() => {
result = await instance.withdraw(747015);
await instance.sendTransaction({from:accounts[1],value:33});

});
it('test 6',async() => {
result = await instance.withdraw(226866);
await instance.sendTransaction({from:accounts[3],value:62});

});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[6],value:79});

result = await instance.withdraw(797090);
});
it('test 8',async() => {
result = await instance.withdraw(273248);
await instance.sendTransaction({from:accounts[9],value:47});

});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[6],value:61});

result = await instance.withdraw(613896);
});
it('test 10',async() => {
result = await instance.withdraw(432275);
await instance.sendTransaction({from:accounts[2],value:2});

});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[1],value:26});

result = await instance.withdraw(804009);
});
it('test 12',async() => {
result = await instance.withdraw(886124);
await instance.sendTransaction({from:accounts[4],value:60});

});
it('test 13',async() => {
result = await instance.withdraw(1014877);
await instance.sendTransaction({from:accounts[5],value:18});

});
it('test 14',async() => {
result = await instance.withdraw(533662);
await instance.sendTransaction({from:accounts[2],value:100});

});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[6],value:13});

result = await instance.withdraw(892690);
});
it('test 16',async() => {
result = await instance.withdraw(133085);
await instance.sendTransaction({from:accounts[7],value:52});

});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[1],value:66});

result = await instance.withdraw(577342);
});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[8],value:58});

result = await instance.withdraw(626332);
});
it('test 19',async() => {
result = await instance.withdraw(879822);
await instance.sendTransaction({from:accounts[5],value:83});

});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[5],value:32});

result = await instance.withdraw(500071);
});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[9],value:2});

result = await instance.withdraw(158292);
});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[6],value:33});

result = await instance.withdraw(907890);
});
it('test 23',async() => {
result = await instance.withdraw(673765);
await instance.sendTransaction({from:accounts[2],value:30});

});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[7],value:88});

result = await instance.withdraw(887297);
});
it('test 25',async() => {
result = await instance.withdraw(225714);
await instance.sendTransaction({from:accounts[6],value:2});

});
it('test 26',async() => {
result = await instance.withdraw(19162);
await instance.sendTransaction({from:accounts[8],value:39});

});
it('test 27',async() => {
result = await instance.withdraw(349952);
await instance.sendTransaction({from:accounts[9],value:38});

});
it('test 28',async() => {
result = await instance.withdraw(624819);
await instance.sendTransaction({from:accounts[4],value:93});

});
it('test 29',async() => {
result = await instance.withdraw(527616);
await instance.sendTransaction({from:accounts[7],value:49});

});
it('test 30',async() => {
result = await instance.withdraw(481972);
await instance.sendTransaction({from:accounts[6],value:84});

});
it('test 31',async() => {
result = await instance.withdraw(518850);
await instance.sendTransaction({from:accounts[1],value:31});

});
it('test 32',async() => {
result = await instance.withdraw(858045);
await instance.sendTransaction({from:accounts[6],value:58});

});
it('test 33',async() => {
result = await instance.withdraw(335575);
await instance.sendTransaction({from:accounts[2],value:85});

});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[6],value:39});

result = await instance.withdraw(747877);
});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[5],value:19});

result = await instance.withdraw(164000);
});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[3],value:45});

result = await instance.withdraw(694657);
});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[9],value:8});

result = await instance.withdraw(396312);
});
it('test 38',async() => {
result = await instance.withdraw(703105);
await instance.sendTransaction({from:accounts[4],value:1});

});
it('test 39',async() => {
result = await instance.withdraw(1014537);
await instance.sendTransaction({from:accounts[5],value:72});

});
it('test 40',async() => {
await instance.sendTransaction({from:accounts[6],value:94});

result = await instance.withdraw(710776);
});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[8],value:70});

result = await instance.withdraw(188174);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 42',async() => {
await instance.sendTransaction({from:accounts[7],value:62});

result = await instance.withdraw(285474);
});
it('test 43',async() => {
await instance.sendTransaction({from:accounts[3],value:81});

result = await instance.withdraw(214855);
});
it('test 44',async() => {
result = await instance.withdraw(508472);
await instance.sendTransaction({from:accounts[6],value:22});

});
it('test 45',async() => {
result = await instance.withdraw(545137);
await instance.sendTransaction({from:accounts[5],value:83});

});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[9],value:43});

result = await instance.withdraw(941126);
});
it('test 47',async() => {
result = await instance.withdraw(239770);
await instance.sendTransaction({from:accounts[7],value:21});

});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[4],value:98});

result = await instance.withdraw(840808);
});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[5],value:87});

result = await instance.withdraw(617209);
});
});
