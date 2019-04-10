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
result = await instance.withdraw(495704);
await instance.sendTransaction({from:accounts[7],value:65});

});
it('test 1',async() => {
result = await instance.withdraw(379324);
await instance.sendTransaction({from:accounts[8],value:49});

});
it('test 2',async() => {
result = await instance.withdraw(580734);
await instance.sendTransaction({from:accounts[6],value:2});

});
it('test 3',async() => {
result = await instance.withdraw(150618);
await instance.sendTransaction({from:accounts[8],value:50});

});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[2],value:41});

result = await instance.withdraw(628559);
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[8],value:84});

result = await instance.withdraw(624510);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[2],value:31});

result = await instance.withdraw(3543);
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[7],value:66});

result = await instance.withdraw(24303);
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[5],value:31});

result = await instance.withdraw(78575);
});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[1],value:13});

result = await instance.withdraw(14537);
});
it('test 10',async() => {
result = await instance.withdraw(221042);
await instance.sendTransaction({from:accounts[8],value:17});

});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[3],value:90});

result = await instance.withdraw(579000);
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[9],value:95});

result = await instance.withdraw(559464);
});
it('test 13',async() => {
result = await instance.withdraw(878852);
await instance.sendTransaction({from:accounts[9],value:30});

});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[1],value:81});

result = await instance.withdraw(567211);
});
it('test 15',async() => {
result = await instance.withdraw(179325);
await instance.sendTransaction({from:accounts[6],value:78});

});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[1],value:45});

result = await instance.withdraw(537830);
});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[7],value:25});

result = await instance.withdraw(351347);
});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[9],value:66});

result = await instance.withdraw(1026397);
});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[7],value:34});

result = await instance.withdraw(342211);
});
it('test 20',async() => {
result = await instance.withdraw(515045);
await instance.sendTransaction({from:accounts[4],value:84});

});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[7],value:100});

result = await instance.withdraw(908705);
});
it('test 22',async() => {
result = await instance.withdraw(12534);
await instance.sendTransaction({from:accounts[2],value:18});

});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[4],value:66});

result = await instance.withdraw(880010);
});
it('test 24',async() => {
result = await instance.withdraw(217659);
await instance.sendTransaction({from:accounts[8],value:16});

});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[9],value:92});

result = await instance.withdraw(889692);
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[4],value:76});

result = await instance.withdraw(819259);
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[9],value:35});

result = await instance.withdraw(513507);
});
it('test 28',async() => {
result = await instance.withdraw(359811);
await instance.sendTransaction({from:accounts[9],value:60});

});
it('test 29',async() => {
result = await instance.withdraw(275456);
await instance.sendTransaction({from:accounts[3],value:30});

});
it('test 30',async() => {
result = await instance.withdraw(468380);
await instance.sendTransaction({from:accounts[9],value:70});

});
it('test 31',async() => {
result = await instance.withdraw(964662);
await instance.sendTransaction({from:accounts[4],value:21});

});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[6],value:73});

result = await instance.withdraw(877416);
});
it('test 33',async() => {
result = await instance.withdraw(125975);
await instance.sendTransaction({from:accounts[9],value:8});

});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[7],value:24});

result = await instance.withdraw(38323);
});
it('test 35',async() => {
result = await instance.withdraw(681094);
await instance.sendTransaction({from:accounts[5],value:64});

});
it('test 36',async() => {
result = await instance.withdraw(527264);
await instance.sendTransaction({from:accounts[9],value:54});

});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[8],value:19});

result = await instance.withdraw(798235);
});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[4],value:38});

result = await instance.withdraw(70916);
});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[8],value:91});

result = await instance.withdraw(621481);
});
it('test 40',async() => {
await instance.sendTransaction({from:accounts[1],value:5});

result = await instance.withdraw(798483);
});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[7],value:6});

result = await instance.withdraw(969826);
});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[3],value:36});

result = await instance.withdraw(318184);
});
it('test 43',async() => {
result = await instance.withdraw(638149);
await instance.sendTransaction({from:accounts[5],value:29});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 44',async() => {
result = await instance.withdraw(295272);
await instance.sendTransaction({from:accounts[9],value:55});

});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[5],value:40});

result = await instance.withdraw(11654);
});
it('test 46',async() => {
result = await instance.withdraw(72125);
await instance.sendTransaction({from:accounts[6],value:68});

});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[9],value:33});

result = await instance.withdraw(112187);
});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[7],value:41});

result = await instance.withdraw(277804);
});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[3],value:5});

result = await instance.withdraw(355527);
});
});
