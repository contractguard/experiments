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
await instance.sendTransaction({from:accounts[1],value:26});

result = await instance.withdraw(657097);
});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[8],value:33});

result = await instance.withdraw(616792);
});
it('test 2',async() => {
result = await instance.withdraw(149896);
await instance.sendTransaction({from:accounts[6],value:59});

});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[3],value:20});

result = await instance.withdraw(460908);
});
it('test 4',async() => {
result = await instance.withdraw(748002);
await instance.sendTransaction({from:accounts[3],value:49});

});
it('test 5',async() => {
result = await instance.withdraw(681779);
await instance.sendTransaction({from:accounts[8],value:42});

});
it('test 6',async() => {
result = await instance.withdraw(6857);
await instance.sendTransaction({from:accounts[8],value:5});

});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[6],value:6});

result = await instance.withdraw(171648);
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[6],value:85});

result = await instance.withdraw(725518);
});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[5],value:80});

result = await instance.withdraw(532124);
});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[4],value:63});

result = await instance.withdraw(788959);
});
it('test 11',async() => {
result = await instance.withdraw(302263);
await instance.sendTransaction({from:accounts[5],value:65});

});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[3],value:5});

result = await instance.withdraw(640737);
});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[9],value:57});

result = await instance.withdraw(601513);
});
it('test 14',async() => {
result = await instance.withdraw(398928);
await instance.sendTransaction({from:accounts[9],value:14});

});
it('test 15',async() => {
result = await instance.withdraw(628514);
await instance.sendTransaction({from:accounts[9],value:76});

});
it('test 16',async() => {
result = await instance.withdraw(539716);
await instance.sendTransaction({from:accounts[6],value:71});

});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[1],value:42});

result = await instance.withdraw(242399);
});
it('test 18',async() => {
result = await instance.withdraw(422790);
await instance.sendTransaction({from:accounts[3],value:78});

});
it('test 19',async() => {
result = await instance.withdraw(756649);
await instance.sendTransaction({from:accounts[3],value:82});

});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[2],value:21});

result = await instance.withdraw(708077);
});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[9],value:20});

result = await instance.withdraw(478686);
});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[9],value:21});

result = await instance.withdraw(734779);
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[8],value:96});

result = await instance.withdraw(422951);
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[4],value:83});

result = await instance.withdraw(858768);
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[6],value:29});

result = await instance.withdraw(493121);
});
it('test 26',async() => {
result = await instance.withdraw(719114);
await instance.sendTransaction({from:accounts[5],value:56});

});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[4],value:78});

result = await instance.withdraw(794961);
});
it('test 28',async() => {
result = await instance.withdraw(752598);
await instance.sendTransaction({from:accounts[4],value:64});

});
it('test 29',async() => {
result = await instance.withdraw(409172);
await instance.sendTransaction({from:accounts[7],value:66});

});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[2],value:68});

result = await instance.withdraw(337150);
});
it('test 31',async() => {
result = await instance.withdraw(448834);
await instance.sendTransaction({from:accounts[4],value:14});

});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[1],value:85});

result = await instance.withdraw(1045066);
});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[1],value:49});

result = await instance.withdraw(465696);
});
it('test 34',async() => {
result = await instance.withdraw(375184);
await instance.sendTransaction({from:accounts[1],value:8});

});
it('test 35',async() => {
result = await instance.withdraw(415965);
await instance.sendTransaction({from:accounts[9],value:9});

});
it('test 36',async() => {
result = await instance.withdraw(355023);
await instance.sendTransaction({from:accounts[9],value:33});

});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[5],value:48});

result = await instance.withdraw(531013);
});
it('test 38',async() => {
result = await instance.withdraw(199637);
await instance.sendTransaction({from:accounts[9],value:6});

});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[1],value:100});

result = await instance.withdraw(224786);
});
it('test 40',async() => {
await instance.sendTransaction({from:accounts[1],value:49});

result = await instance.withdraw(695013);
});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[7],value:24});

result = await instance.withdraw(973656);
});
it('test 42',async() => {
result = await instance.withdraw(552893);
await instance.sendTransaction({from:accounts[3],value:59});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 43',async() => {
result = await instance.withdraw(10302);
await instance.sendTransaction({from:accounts[4],value:99});

});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[5],value:17});

result = await instance.withdraw(834595);
});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[4],value:97});

result = await instance.withdraw(9742);
});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[1],value:66});

result = await instance.withdraw(534107);
});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[4],value:58});

result = await instance.withdraw(278887);
});
it('test 48',async() => {
result = await instance.withdraw(258516);
await instance.sendTransaction({from:accounts[2],value:33});

});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[7],value:70});

result = await instance.withdraw(228470);
});
});
