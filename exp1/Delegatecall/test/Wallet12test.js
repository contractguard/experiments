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
await instance.sendTransaction({from:accounts[2],value:17});

result = await instance.withdraw(923590);
});
it('test 1',async() => {
result = await instance.withdraw(418897);
await instance.sendTransaction({from:accounts[8],value:53});

});
it('test 2',async() => {
result = await instance.withdraw(1036501);
await instance.sendTransaction({from:accounts[1],value:67});

});
it('test 3',async() => {
result = await instance.withdraw(299768);
await instance.sendTransaction({from:accounts[6],value:14});

});
it('test 4',async() => {
result = await instance.withdraw(420478);
await instance.sendTransaction({from:accounts[7],value:1});

});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[2],value:58});

result = await instance.withdraw(138095);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[2],value:49});

result = await instance.withdraw(723196);
});
it('test 7',async() => {
result = await instance.withdraw(538650);
await instance.sendTransaction({from:accounts[4],value:26});

});
it('test 8',async() => {
result = await instance.withdraw(536884);
await instance.sendTransaction({from:accounts[3],value:26});

});
it('test 9',async() => {
result = await instance.withdraw(1044924);
await instance.sendTransaction({from:accounts[9],value:94});

});
it('test 10',async() => {
result = await instance.withdraw(907955);
await instance.sendTransaction({from:accounts[4],value:5});

});
it('test 11',async() => {
result = await instance.withdraw(804021);
await instance.sendTransaction({from:accounts[6],value:12});

});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[2],value:22});

result = await instance.withdraw(63284);
});
it('test 13',async() => {
result = await instance.withdraw(538897);
await instance.sendTransaction({from:accounts[2],value:83});

});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[5],value:10});

result = await instance.withdraw(784193);
});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[7],value:71});

result = await instance.withdraw(321085);
});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[1],value:11});

result = await instance.withdraw(726944);
});
it('test 17',async() => {
result = await instance.withdraw(1040462);
await instance.sendTransaction({from:accounts[2],value:80});

});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[4],value:91});

result = await instance.withdraw(491242);
});
it('test 19',async() => {
result = await instance.withdraw(776203);
await instance.sendTransaction({from:accounts[9],value:8});

});
it('test 20',async() => {
result = await instance.withdraw(344814);
await instance.sendTransaction({from:accounts[1],value:53});

});
it('test 21',async() => {
result = await instance.withdraw(183126);
await instance.sendTransaction({from:accounts[4],value:51});

});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[7],value:75});

result = await instance.withdraw(140867);
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[5],value:95});

result = await instance.withdraw(381817);
});
it('test 24',async() => {
result = await instance.withdraw(697685);
await instance.sendTransaction({from:accounts[1],value:40});

});
it('test 25',async() => {
result = await instance.withdraw(196257);
await instance.sendTransaction({from:accounts[6],value:22});

});
it('test 26',async() => {
result = await instance.withdraw(395572);
await instance.sendTransaction({from:accounts[2],value:14});

});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[3],value:97});

result = await instance.withdraw(248944);
});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[9],value:40});

result = await instance.withdraw(274695);
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[7],value:24});

result = await instance.withdraw(218035);
});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[3],value:56});

result = await instance.withdraw(255943);
});
it('test 31',async() => {
result = await instance.withdraw(38665);
await instance.sendTransaction({from:accounts[4],value:64});

});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[2],value:49});

result = await instance.withdraw(368475);
});
it('test 33',async() => {
result = await instance.withdraw(135043);
await instance.sendTransaction({from:accounts[6],value:97});

});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[2],value:33});

result = await instance.withdraw(795624);
});
it('test 35',async() => {
result = await instance.withdraw(530483);
await instance.sendTransaction({from:accounts[1],value:4});

});
it('test 36',async() => {
result = await instance.withdraw(636901);
await instance.sendTransaction({from:accounts[9],value:55});

});
it('test 37',async() => {
result = await instance.withdraw(535350);
await instance.sendTransaction({from:accounts[6],value:68});

});
it('test 38',async() => {
result = await instance.withdraw(356810);
await instance.sendTransaction({from:accounts[5],value:54});

});
it('test 39',async() => {
result = await instance.withdraw(606160);
await instance.sendTransaction({from:accounts[2],value:87});

});
it('test 40',async() => {
await instance.sendTransaction({from:accounts[1],value:26});

result = await instance.withdraw(699615);
});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[5],value:100});

result = await instance.withdraw(441751);
});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[1],value:37});

result = await instance.withdraw(704027);
});
it('test 43',async() => {
result = await instance.withdraw(234015);
await instance.sendTransaction({from:accounts[6],value:50});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 44',async() => {
await instance.sendTransaction({from:accounts[4],value:38});

result = await instance.withdraw(117023);
});
it('test 45',async() => {
result = await instance.withdraw(86458);
await instance.sendTransaction({from:accounts[7],value:49});

});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[3],value:67});

result = await instance.withdraw(969981);
});
it('test 47',async() => {
result = await instance.withdraw(58085);
await instance.sendTransaction({from:accounts[1],value:85});

});
it('test 48',async() => {
result = await instance.withdraw(152574);
await instance.sendTransaction({from:accounts[7],value:20});

});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[3],value:59});

result = await instance.withdraw(562335);
});
});
