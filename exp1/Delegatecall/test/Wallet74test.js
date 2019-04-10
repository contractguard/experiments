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
result = await instance.withdraw(872499);
await instance.sendTransaction({from:accounts[7],value:16});

});
it('test 1',async() => {
result = await instance.withdraw(866394);
await instance.sendTransaction({from:accounts[1],value:73});

});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[3],value:74});

result = await instance.withdraw(69253);
});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[8],value:37});

result = await instance.withdraw(694790);
});
it('test 4',async() => {
result = await instance.withdraw(119569);
await instance.sendTransaction({from:accounts[4],value:52});

});
it('test 5',async() => {
result = await instance.withdraw(61391);
await instance.sendTransaction({from:accounts[3],value:9});

});
it('test 6',async() => {
result = await instance.withdraw(371976);
await instance.sendTransaction({from:accounts[9],value:35});

});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[5],value:7});

result = await instance.withdraw(833569);
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[5],value:9});

result = await instance.withdraw(381782);
});
it('test 9',async() => {
result = await instance.withdraw(370058);
await instance.sendTransaction({from:accounts[8],value:13});

});
it('test 10',async() => {
result = await instance.withdraw(942307);
await instance.sendTransaction({from:accounts[5],value:94});

});
it('test 11',async() => {
result = await instance.withdraw(592811);
await instance.sendTransaction({from:accounts[1],value:56});

});
it('test 12',async() => {
result = await instance.withdraw(980424);
await instance.sendTransaction({from:accounts[5],value:20});

});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[6],value:94});

result = await instance.withdraw(958187);
});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[3],value:92});

result = await instance.withdraw(970340);
});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[7],value:66});

result = await instance.withdraw(209835);
});
it('test 16',async() => {
result = await instance.withdraw(1012130);
await instance.sendTransaction({from:accounts[7],value:88});

});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[5],value:7});

result = await instance.withdraw(212009);
});
it('test 18',async() => {
result = await instance.withdraw(112712);
await instance.sendTransaction({from:accounts[9],value:41});

});
it('test 19',async() => {
result = await instance.withdraw(380713);
await instance.sendTransaction({from:accounts[9],value:66});

});
it('test 20',async() => {
result = await instance.withdraw(629494);
await instance.sendTransaction({from:accounts[3],value:1});

});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[5],value:36});

result = await instance.withdraw(240583);
});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[9],value:66});

result = await instance.withdraw(708425);
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[7],value:64});

result = await instance.withdraw(320320);
});
it('test 24',async() => {
result = await instance.withdraw(500323);
await instance.sendTransaction({from:accounts[4],value:15});

});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[5],value:20});

result = await instance.withdraw(8394);
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[1],value:9});

result = await instance.withdraw(836689);
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[5],value:23});

result = await instance.withdraw(876555);
});
it('test 28',async() => {
result = await instance.withdraw(865092);
await instance.sendTransaction({from:accounts[1],value:14});

});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[8],value:64});

result = await instance.withdraw(101171);
});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[3],value:98});

result = await instance.withdraw(295118);
});
it('test 31',async() => {
result = await instance.withdraw(412502);
await instance.sendTransaction({from:accounts[6],value:52});

});
it('test 32',async() => {
result = await instance.withdraw(900140);
await instance.sendTransaction({from:accounts[3],value:81});

});
it('test 33',async() => {
result = await instance.withdraw(888308);
await instance.sendTransaction({from:accounts[9],value:96});

});
it('test 34',async() => {
result = await instance.withdraw(820444);
await instance.sendTransaction({from:accounts[8],value:81});

});
it('test 35',async() => {
result = await instance.withdraw(598003);
await instance.sendTransaction({from:accounts[4],value:25});

});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[2],value:55});

result = await instance.withdraw(92544);
});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[3],value:77});

result = await instance.withdraw(739654);
});
it('test 38',async() => {
result = await instance.withdraw(59021);
await instance.sendTransaction({from:accounts[3],value:88});

});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[3],value:82});

result = await instance.withdraw(436984);
});
it('test 40',async() => {
await instance.sendTransaction({from:accounts[3],value:58});

result = await instance.withdraw(891051);
});
it('test 41',async() => {
result = await instance.withdraw(649042);
await instance.sendTransaction({from:accounts[9],value:77});

});
it('test 42',async() => {
result = await instance.withdraw(421843);
await instance.sendTransaction({from:accounts[9],value:23});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 43',async() => {
result = await instance.withdraw(177541);
await instance.sendTransaction({from:accounts[5],value:65});

});
it('test 44',async() => {
result = await instance.withdraw(406178);
await instance.sendTransaction({from:accounts[7],value:43});

});
it('test 45',async() => {
result = await instance.withdraw(130403);
await instance.sendTransaction({from:accounts[3],value:70});

});
it('test 46',async() => {
result = await instance.withdraw(578792);
await instance.sendTransaction({from:accounts[2],value:76});

});
it('test 47',async() => {
result = await instance.withdraw(28804);
await instance.sendTransaction({from:accounts[2],value:46});

});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[7],value:83});

result = await instance.withdraw(125340);
});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[4],value:74});

result = await instance.withdraw(161395);
});
});
