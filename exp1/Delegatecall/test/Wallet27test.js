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
result = await instance.withdraw(671426);
await instance.sendTransaction({from:accounts[1],value:66});

});
it('test 1',async() => {
result = await instance.withdraw(80452);
await instance.sendTransaction({from:accounts[8],value:32});

});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[5],value:1});

result = await instance.withdraw(291442);
});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[5],value:40});

result = await instance.withdraw(1014351);
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[2],value:38});

result = await instance.withdraw(683313);
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[4],value:67});

result = await instance.withdraw(671205);
});
it('test 6',async() => {
result = await instance.withdraw(1034250);
await instance.sendTransaction({from:accounts[9],value:47});

});
it('test 7',async() => {
result = await instance.withdraw(636549);
await instance.sendTransaction({from:accounts[6],value:48});

});
it('test 8',async() => {
result = await instance.withdraw(562822);
await instance.sendTransaction({from:accounts[7],value:20});

});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[7],value:67});

result = await instance.withdraw(610607);
});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[2],value:85});

result = await instance.withdraw(420115);
});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[7],value:13});

result = await instance.withdraw(1042829);
});
it('test 12',async() => {
result = await instance.withdraw(345930);
await instance.sendTransaction({from:accounts[2],value:77});

});
it('test 13',async() => {
result = await instance.withdraw(1040726);
await instance.sendTransaction({from:accounts[4],value:58});

});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[8],value:41});

result = await instance.withdraw(711748);
});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[5],value:70});

result = await instance.withdraw(968200);
});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[7],value:56});

result = await instance.withdraw(103766);
});
it('test 17',async() => {
result = await instance.withdraw(257953);
await instance.sendTransaction({from:accounts[4],value:85});

});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[6],value:61});

result = await instance.withdraw(554199);
});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[8],value:15});

result = await instance.withdraw(209359);
});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[6],value:86});

result = await instance.withdraw(739244);
});
it('test 21',async() => {
result = await instance.withdraw(881455);
await instance.sendTransaction({from:accounts[4],value:81});

});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[1],value:98});

result = await instance.withdraw(593483);
});
it('test 23',async() => {
result = await instance.withdraw(441777);
await instance.sendTransaction({from:accounts[7],value:37});

});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[6],value:70});

result = await instance.withdraw(685156);
});
it('test 25',async() => {
result = await instance.withdraw(575737);
await instance.sendTransaction({from:accounts[8],value:83});

});
it('test 26',async() => {
result = await instance.withdraw(845715);
await instance.sendTransaction({from:accounts[7],value:16});

});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[2],value:97});

result = await instance.withdraw(632231);
});
it('test 28',async() => {
result = await instance.withdraw(152573);
await instance.sendTransaction({from:accounts[9],value:86});

});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[9],value:46});

result = await instance.withdraw(836466);
});
it('test 30',async() => {
result = await instance.withdraw(280167);
await instance.sendTransaction({from:accounts[5],value:5});

});
it('test 31',async() => {
result = await instance.withdraw(168057);
await instance.sendTransaction({from:accounts[2],value:80});

});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[5],value:71});

result = await instance.withdraw(852612);
});
it('test 33',async() => {
result = await instance.withdraw(954815);
await instance.sendTransaction({from:accounts[4],value:94});

});
it('test 34',async() => {
result = await instance.withdraw(588466);
await instance.sendTransaction({from:accounts[3],value:34});

});
it('test 35',async() => {
result = await instance.withdraw(218926);
await instance.sendTransaction({from:accounts[4],value:33});

});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[2],value:72});

result = await instance.withdraw(54509);
});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[6],value:65});

result = await instance.withdraw(177601);
});
it('test 38',async() => {
result = await instance.withdraw(444853);
await instance.sendTransaction({from:accounts[3],value:59});

});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[9],value:76});

result = await instance.withdraw(440284);
});
it('test 40',async() => {
result = await instance.withdraw(771970);
await instance.sendTransaction({from:accounts[5],value:27});

});
it('test 41',async() => {
result = await instance.withdraw(612527);
await instance.sendTransaction({from:accounts[1],value:55});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 42',async() => {
await instance.sendTransaction({from:accounts[8],value:37});

result = await instance.withdraw(757181);
});
it('test 43',async() => {
result = await instance.withdraw(22257);
await instance.sendTransaction({from:accounts[3],value:44});

});
it('test 44',async() => {
result = await instance.withdraw(851348);
await instance.sendTransaction({from:accounts[4],value:27});

});
it('test 45',async() => {
result = await instance.withdraw(241600);
await instance.sendTransaction({from:accounts[1],value:26});

});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[2],value:64});

result = await instance.withdraw(875751);
});
it('test 47',async() => {
result = await instance.withdraw(787741);
await instance.sendTransaction({from:accounts[7],value:17});

});
it('test 48',async() => {
result = await instance.withdraw(3836);
await instance.sendTransaction({from:accounts[9],value:81});

});
it('test 49',async() => {
result = await instance.withdraw(13713);
await instance.sendTransaction({from:accounts[2],value:27});

});
});
