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
await instance.sendTransaction({from:accounts[8],value:66});

result = await instance.withdraw(718037);
});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[1],value:39});

result = await instance.withdraw(255910);
});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[1],value:68});

result = await instance.withdraw(443436);
});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[1],value:84});

result = await instance.withdraw(650991);
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[3],value:62});

result = await instance.withdraw(812706);
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[1],value:45});

result = await instance.withdraw(799083);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[1],value:69});

result = await instance.withdraw(468963);
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[5],value:23});

result = await instance.withdraw(228697);
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[3],value:77});

result = await instance.withdraw(96689);
});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[3],value:90});

result = await instance.withdraw(184223);
});
it('test 10',async() => {
result = await instance.withdraw(457110);
await instance.sendTransaction({from:accounts[8],value:58});

});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[7],value:77});

result = await instance.withdraw(275163);
});
it('test 12',async() => {
result = await instance.withdraw(190358);
await instance.sendTransaction({from:accounts[7],value:77});

});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[8],value:56});

result = await instance.withdraw(339873);
});
it('test 14',async() => {
result = await instance.withdraw(1030593);
await instance.sendTransaction({from:accounts[5],value:22});

});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[5],value:98});

result = await instance.withdraw(840292);
});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[9],value:75});

result = await instance.withdraw(227796);
});
it('test 17',async() => {
result = await instance.withdraw(884582);
await instance.sendTransaction({from:accounts[4],value:96});

});
it('test 18',async() => {
result = await instance.withdraw(12420);
await instance.sendTransaction({from:accounts[5],value:14});

});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[2],value:29});

result = await instance.withdraw(595862);
});
it('test 20',async() => {
result = await instance.withdraw(558010);
await instance.sendTransaction({from:accounts[1],value:89});

});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[1],value:56});

result = await instance.withdraw(192485);
});
it('test 22',async() => {
result = await instance.withdraw(691097);
await instance.sendTransaction({from:accounts[7],value:1});

});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[7],value:29});

result = await instance.withdraw(992266);
});
it('test 24',async() => {
result = await instance.withdraw(370837);
await instance.sendTransaction({from:accounts[5],value:23});

});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[5],value:21});

result = await instance.withdraw(140708);
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[9],value:31});

result = await instance.withdraw(723368);
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[2],value:33});

result = await instance.withdraw(835317);
});
it('test 28',async() => {
result = await instance.withdraw(319472);
await instance.sendTransaction({from:accounts[8],value:79});

});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[4],value:40});

result = await instance.withdraw(48144);
});
it('test 30',async() => {
result = await instance.withdraw(326731);
await instance.sendTransaction({from:accounts[2],value:9});

});
it('test 31',async() => {
result = await instance.withdraw(48005);
await instance.sendTransaction({from:accounts[9],value:47});

});
it('test 32',async() => {
result = await instance.withdraw(897845);
await instance.sendTransaction({from:accounts[3],value:61});

});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[7],value:42});

result = await instance.withdraw(780750);
});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[8],value:63});

result = await instance.withdraw(551907);
});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[4],value:1});

result = await instance.withdraw(70918);
});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[2],value:91});

result = await instance.withdraw(1033442);
});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[9],value:87});

result = await instance.withdraw(689725);
});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[4],value:23});

result = await instance.withdraw(320061);
});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[6],value:99});

result = await instance.withdraw(1018979);
});
it('test 40',async() => {
await instance.sendTransaction({from:accounts[8],value:80});

result = await instance.withdraw(173241);
});
it('test 41',async() => {
result = await instance.withdraw(808008);
await instance.sendTransaction({from:accounts[6],value:2});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 42',async() => {
result = await instance.withdraw(309920);
await instance.sendTransaction({from:accounts[5],value:15});

});
it('test 43',async() => {
result = await instance.withdraw(904358);
await instance.sendTransaction({from:accounts[5],value:36});

});
it('test 44',async() => {
result = await instance.withdraw(1024341);
await instance.sendTransaction({from:accounts[4],value:1});

});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[6],value:45});

result = await instance.withdraw(63734);
});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[3],value:59});

result = await instance.withdraw(809696);
});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[9],value:73});

result = await instance.withdraw(168848);
});
it('test 48',async() => {
result = await instance.withdraw(164709);
await instance.sendTransaction({from:accounts[1],value:32});

});
it('test 49',async() => {
result = await instance.withdraw(71507);
await instance.sendTransaction({from:accounts[3],value:100});

});
});
