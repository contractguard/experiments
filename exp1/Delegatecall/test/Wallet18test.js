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
await instance.sendTransaction({from:accounts[1],value:12});

result = await instance.withdraw(734545);
});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[5],value:14});

result = await instance.withdraw(752699);
});
it('test 2',async() => {
result = await instance.withdraw(443608);
await instance.sendTransaction({from:accounts[6],value:88});

});
it('test 3',async() => {
result = await instance.withdraw(826791);
await instance.sendTransaction({from:accounts[4],value:47});

});
it('test 4',async() => {
result = await instance.withdraw(570710);
await instance.sendTransaction({from:accounts[3],value:5});

});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[2],value:9});

result = await instance.withdraw(451458);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[3],value:96});

result = await instance.withdraw(822038);
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[1],value:59});

result = await instance.withdraw(567782);
});
it('test 8',async() => {
result = await instance.withdraw(743347);
await instance.sendTransaction({from:accounts[6],value:39});

});
it('test 9',async() => {
result = await instance.withdraw(1027942);
await instance.sendTransaction({from:accounts[6],value:71});

});
it('test 10',async() => {
result = await instance.withdraw(257421);
await instance.sendTransaction({from:accounts[8],value:40});

});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[7],value:3});

result = await instance.withdraw(704029);
});
it('test 12',async() => {
result = await instance.withdraw(878512);
await instance.sendTransaction({from:accounts[9],value:62});

});
it('test 13',async() => {
result = await instance.withdraw(584570);
await instance.sendTransaction({from:accounts[5],value:52});

});
it('test 14',async() => {
result = await instance.withdraw(823406);
await instance.sendTransaction({from:accounts[2],value:47});

});
it('test 15',async() => {
result = await instance.withdraw(96551);
await instance.sendTransaction({from:accounts[9],value:57});

});
it('test 16',async() => {
result = await instance.withdraw(200628);
await instance.sendTransaction({from:accounts[3],value:88});

});
it('test 17',async() => {
result = await instance.withdraw(794178);
await instance.sendTransaction({from:accounts[5],value:37});

});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[1],value:68});

result = await instance.withdraw(403966);
});
it('test 19',async() => {
result = await instance.withdraw(1012102);
await instance.sendTransaction({from:accounts[2],value:16});

});
it('test 20',async() => {
result = await instance.withdraw(797674);
await instance.sendTransaction({from:accounts[2],value:7});

});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[7],value:99});

result = await instance.withdraw(655911);
});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[4],value:57});

result = await instance.withdraw(562972);
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[8],value:66});

result = await instance.withdraw(362372);
});
it('test 24',async() => {
result = await instance.withdraw(638930);
await instance.sendTransaction({from:accounts[4],value:96});

});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[1],value:43});

result = await instance.withdraw(857921);
});
it('test 26',async() => {
result = await instance.withdraw(260564);
await instance.sendTransaction({from:accounts[7],value:81});

});
it('test 27',async() => {
result = await instance.withdraw(907443);
await instance.sendTransaction({from:accounts[1],value:84});

});
it('test 28',async() => {
result = await instance.withdraw(621208);
await instance.sendTransaction({from:accounts[8],value:19});

});
it('test 29',async() => {
result = await instance.withdraw(420866);
await instance.sendTransaction({from:accounts[5],value:72});

});
it('test 30',async() => {
result = await instance.withdraw(37723);
await instance.sendTransaction({from:accounts[6],value:10});

});
it('test 31',async() => {
result = await instance.withdraw(323699);
await instance.sendTransaction({from:accounts[9],value:22});

});
it('test 32',async() => {
result = await instance.withdraw(338316);
await instance.sendTransaction({from:accounts[6],value:93});

});
it('test 33',async() => {
result = await instance.withdraw(103545);
await instance.sendTransaction({from:accounts[7],value:74});

});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[6],value:48});

result = await instance.withdraw(786657);
});
it('test 35',async() => {
result = await instance.withdraw(97253);
await instance.sendTransaction({from:accounts[3],value:68});

});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[8],value:93});

result = await instance.withdraw(22095);
});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[7],value:31});

result = await instance.withdraw(401723);
});
it('test 38',async() => {
result = await instance.withdraw(108683);
await instance.sendTransaction({from:accounts[4],value:56});

});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[2],value:53});

result = await instance.withdraw(436146);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 40',async() => {
result = await instance.withdraw(652612);
await instance.sendTransaction({from:accounts[7],value:39});

});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[3],value:24});

result = await instance.withdraw(328172);
});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[6],value:65});

result = await instance.withdraw(423747);
});
it('test 43',async() => {
result = await instance.withdraw(1029870);
await instance.sendTransaction({from:accounts[3],value:37});

});
it('test 44',async() => {
result = await instance.withdraw(523155);
await instance.sendTransaction({from:accounts[2],value:19});

});
it('test 45',async() => {
result = await instance.withdraw(426063);
await instance.sendTransaction({from:accounts[7],value:62});

});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[1],value:14});

result = await instance.withdraw(732405);
});
it('test 47',async() => {
result = await instance.withdraw(351241);
await instance.sendTransaction({from:accounts[8],value:46});

});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[1],value:26});

result = await instance.withdraw(460907);
});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[8],value:84});

result = await instance.withdraw(480725);
});
});
