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
result = await instance.withdraw(45686);
await instance.sendTransaction({from:accounts[9],value:72});

});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[2],value:79});

result = await instance.withdraw(601904);
});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[1],value:80});

result = await instance.withdraw(943711);
});
it('test 3',async() => {
result = await instance.withdraw(402218);
await instance.sendTransaction({from:accounts[3],value:6});

});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[1],value:37});

result = await instance.withdraw(413697);
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[8],value:92});

result = await instance.withdraw(420838);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[4],value:4});

result = await instance.withdraw(298984);
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[2],value:39});

result = await instance.withdraw(842408);
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[4],value:1});

result = await instance.withdraw(892633);
});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[6],value:30});

result = await instance.withdraw(645744);
});
it('test 10',async() => {
result = await instance.withdraw(369058);
await instance.sendTransaction({from:accounts[6],value:78});

});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[5],value:88});

result = await instance.withdraw(988760);
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[4],value:88});

result = await instance.withdraw(385036);
});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[6],value:5});

result = await instance.withdraw(683004);
});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[6],value:41});

result = await instance.withdraw(253584);
});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[3],value:65});

result = await instance.withdraw(691032);
});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[8],value:81});

result = await instance.withdraw(840635);
});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[4],value:62});

result = await instance.withdraw(5214);
});
it('test 18',async() => {
result = await instance.withdraw(370923);
await instance.sendTransaction({from:accounts[8],value:30});

});
it('test 19',async() => {
result = await instance.withdraw(890342);
await instance.sendTransaction({from:accounts[1],value:88});

});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[6],value:62});

result = await instance.withdraw(318126);
});
it('test 21',async() => {
result = await instance.withdraw(498146);
await instance.sendTransaction({from:accounts[9],value:91});

});
it('test 22',async() => {
result = await instance.withdraw(638781);
await instance.sendTransaction({from:accounts[2],value:9});

});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[7],value:95});

result = await instance.withdraw(576584);
});
it('test 24',async() => {
result = await instance.withdraw(721074);
await instance.sendTransaction({from:accounts[4],value:5});

});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[5],value:46});

result = await instance.withdraw(463547);
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[5],value:98});

result = await instance.withdraw(26586);
});
it('test 27',async() => {
result = await instance.withdraw(299202);
await instance.sendTransaction({from:accounts[6],value:58});

});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[1],value:81});

result = await instance.withdraw(151286);
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[3],value:13});

result = await instance.withdraw(290095);
});
it('test 30',async() => {
result = await instance.withdraw(63590);
await instance.sendTransaction({from:accounts[9],value:100});

});
it('test 31',async() => {
result = await instance.withdraw(988579);
await instance.sendTransaction({from:accounts[1],value:58});

});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[6],value:84});

result = await instance.withdraw(183129);
});
it('test 33',async() => {
result = await instance.withdraw(453892);
await instance.sendTransaction({from:accounts[3],value:100});

});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[7],value:16});

result = await instance.withdraw(278451);
});
it('test 35',async() => {
result = await instance.withdraw(365432);
await instance.sendTransaction({from:accounts[6],value:3});

});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[6],value:88});

result = await instance.withdraw(343648);
});
it('test 37',async() => {
result = await instance.withdraw(381035);
await instance.sendTransaction({from:accounts[2],value:29});

});
it('test 38',async() => {
result = await instance.withdraw(498687);
await instance.sendTransaction({from:accounts[8],value:13});

});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[2],value:69});

result = await instance.withdraw(571350);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 40',async() => {
result = await instance.withdraw(995545);
await instance.sendTransaction({from:accounts[6],value:90});

});
it('test 41',async() => {
result = await instance.withdraw(213314);
await instance.sendTransaction({from:accounts[9],value:60});

});
it('test 42',async() => {
result = await instance.withdraw(354296);
await instance.sendTransaction({from:accounts[9],value:82});

});
it('test 43',async() => {
result = await instance.withdraw(128696);
await instance.sendTransaction({from:accounts[7],value:83});

});
it('test 44',async() => {
result = await instance.withdraw(488284);
await instance.sendTransaction({from:accounts[4],value:57});

});
it('test 45',async() => {
result = await instance.withdraw(18499);
await instance.sendTransaction({from:accounts[7],value:19});

});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[7],value:18});

result = await instance.withdraw(863947);
});
it('test 47',async() => {
result = await instance.withdraw(506643);
await instance.sendTransaction({from:accounts[3],value:82});

});
it('test 48',async() => {
result = await instance.withdraw(548935);
await instance.sendTransaction({from:accounts[1],value:41});

});
it('test 49',async() => {
result = await instance.withdraw(157923);
await instance.sendTransaction({from:accounts[7],value:54});

});
});
