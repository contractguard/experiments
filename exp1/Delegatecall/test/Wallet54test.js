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
await instance.sendTransaction({from:accounts[9],value:98});

result = await instance.withdraw(219590);
});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[3],value:44});

result = await instance.withdraw(359043);
});
it('test 2',async() => {
result = await instance.withdraw(696343);
await instance.sendTransaction({from:accounts[8],value:83});

});
it('test 3',async() => {
result = await instance.withdraw(298775);
await instance.sendTransaction({from:accounts[5],value:43});

});
it('test 4',async() => {
result = await instance.withdraw(113271);
await instance.sendTransaction({from:accounts[4],value:76});

});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[6],value:85});

result = await instance.withdraw(389370);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[4],value:97});

result = await instance.withdraw(711381);
});
it('test 7',async() => {
result = await instance.withdraw(382704);
await instance.sendTransaction({from:accounts[6],value:28});

});
it('test 8',async() => {
result = await instance.withdraw(207970);
await instance.sendTransaction({from:accounts[8],value:90});

});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[3],value:30});

result = await instance.withdraw(244500);
});
it('test 10',async() => {
result = await instance.withdraw(427039);
await instance.sendTransaction({from:accounts[6],value:64});

});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[5],value:76});

result = await instance.withdraw(487839);
});
it('test 12',async() => {
result = await instance.withdraw(285059);
await instance.sendTransaction({from:accounts[5],value:11});

});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[5],value:60});

result = await instance.withdraw(187222);
});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[7],value:53});

result = await instance.withdraw(408097);
});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[7],value:50});

result = await instance.withdraw(860604);
});
it('test 16',async() => {
result = await instance.withdraw(208672);
await instance.sendTransaction({from:accounts[6],value:43});

});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[4],value:50});

result = await instance.withdraw(410069);
});
it('test 18',async() => {
result = await instance.withdraw(151847);
await instance.sendTransaction({from:accounts[1],value:14});

});
it('test 19',async() => {
result = await instance.withdraw(617522);
await instance.sendTransaction({from:accounts[3],value:17});

});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[3],value:58});

result = await instance.withdraw(804610);
});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[2],value:98});

result = await instance.withdraw(592295);
});
it('test 22',async() => {
result = await instance.withdraw(804882);
await instance.sendTransaction({from:accounts[6],value:6});

});
it('test 23',async() => {
result = await instance.withdraw(815413);
await instance.sendTransaction({from:accounts[5],value:17});

});
it('test 24',async() => {
result = await instance.withdraw(109552);
await instance.sendTransaction({from:accounts[8],value:5});

});
it('test 25',async() => {
result = await instance.withdraw(928916);
await instance.sendTransaction({from:accounts[7],value:53});

});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[7],value:1});

result = await instance.withdraw(460747);
});
it('test 27',async() => {
result = await instance.withdraw(101524);
await instance.sendTransaction({from:accounts[9],value:12});

});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[4],value:74});

result = await instance.withdraw(711638);
});
it('test 29',async() => {
result = await instance.withdraw(808557);
await instance.sendTransaction({from:accounts[4],value:17});

});
it('test 30',async() => {
result = await instance.withdraw(697524);
await instance.sendTransaction({from:accounts[8],value:15});

});
it('test 31',async() => {
result = await instance.withdraw(379481);
await instance.sendTransaction({from:accounts[3],value:99});

});
it('test 32',async() => {
result = await instance.withdraw(221959);
await instance.sendTransaction({from:accounts[5],value:30});

});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[5],value:73});

result = await instance.withdraw(498638);
});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[3],value:85});

result = await instance.withdraw(94897);
});
it('test 35',async() => {
result = await instance.withdraw(732024);
await instance.sendTransaction({from:accounts[6],value:87});

});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[6],value:2});

result = await instance.withdraw(799516);
});
it('test 37',async() => {
result = await instance.withdraw(654439);
await instance.sendTransaction({from:accounts[8],value:85});

});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[1],value:73});

result = await instance.withdraw(365999);
});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[1],value:49});

result = await instance.withdraw(566735);
});
it('test 40',async() => {
await instance.sendTransaction({from:accounts[5],value:24});

result = await instance.withdraw(503541);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 41',async() => {
result = await instance.withdraw(988353);
await instance.sendTransaction({from:accounts[3],value:18});

});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[4],value:76});

result = await instance.withdraw(411584);
});
it('test 43',async() => {
await instance.sendTransaction({from:accounts[1],value:71});

result = await instance.withdraw(976197);
});
it('test 44',async() => {
result = await instance.withdraw(674809);
await instance.sendTransaction({from:accounts[9],value:80});

});
it('test 45',async() => {
result = await instance.withdraw(528347);
await instance.sendTransaction({from:accounts[3],value:17});

});
it('test 46',async() => {
result = await instance.withdraw(644624);
await instance.sendTransaction({from:accounts[1],value:93});

});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[9],value:76});

result = await instance.withdraw(615816);
});
it('test 48',async() => {
result = await instance.withdraw(396042);
await instance.sendTransaction({from:accounts[3],value:84});

});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[4],value:14});

result = await instance.withdraw(164555);
});
});
