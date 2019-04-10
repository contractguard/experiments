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
await instance.sendTransaction({from:accounts[1],value:82});

result = await instance.withdraw(734324);
});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[1],value:87});

result = await instance.withdraw(465636);
});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[2],value:35});

result = await instance.withdraw(753432);
});
it('test 3',async() => {
result = await instance.withdraw(20549);
await instance.sendTransaction({from:accounts[2],value:100});

});
it('test 4',async() => {
result = await instance.withdraw(225636);
await instance.sendTransaction({from:accounts[1],value:60});

});
it('test 5',async() => {
result = await instance.withdraw(62927);
await instance.sendTransaction({from:accounts[7],value:27});

});
it('test 6',async() => {
result = await instance.withdraw(1012843);
await instance.sendTransaction({from:accounts[3],value:95});

});
it('test 7',async() => {
result = await instance.withdraw(163802);
await instance.sendTransaction({from:accounts[2],value:7});

});
it('test 8',async() => {
result = await instance.withdraw(107648);
await instance.sendTransaction({from:accounts[9],value:97});

});
it('test 9',async() => {
result = await instance.withdraw(971085);
await instance.sendTransaction({from:accounts[5],value:5});

});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[5],value:31});

result = await instance.withdraw(132480);
});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[3],value:80});

result = await instance.withdraw(952859);
});
it('test 12',async() => {
result = await instance.withdraw(261792);
await instance.sendTransaction({from:accounts[5],value:28});

});
it('test 13',async() => {
result = await instance.withdraw(76632);
await instance.sendTransaction({from:accounts[8],value:91});

});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[4],value:26});

result = await instance.withdraw(121527);
});
it('test 15',async() => {
result = await instance.withdraw(400906);
await instance.sendTransaction({from:accounts[2],value:55});

});
it('test 16',async() => {
result = await instance.withdraw(476418);
await instance.sendTransaction({from:accounts[6],value:77});

});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[3],value:17});

result = await instance.withdraw(693751);
});
it('test 18',async() => {
result = await instance.withdraw(755297);
await instance.sendTransaction({from:accounts[9],value:87});

});
it('test 19',async() => {
result = await instance.withdraw(537805);
await instance.sendTransaction({from:accounts[9],value:97});

});
it('test 20',async() => {
result = await instance.withdraw(1003418);
await instance.sendTransaction({from:accounts[1],value:86});

});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[4],value:37});

result = await instance.withdraw(372623);
});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[4],value:86});

result = await instance.withdraw(135395);
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[6],value:53});

result = await instance.withdraw(386051);
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[5],value:88});

result = await instance.withdraw(975265);
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[7],value:17});

result = await instance.withdraw(804873);
});
it('test 26',async() => {
result = await instance.withdraw(317188);
await instance.sendTransaction({from:accounts[8],value:45});

});
it('test 27',async() => {
result = await instance.withdraw(503433);
await instance.sendTransaction({from:accounts[4],value:29});

});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[2],value:57});

result = await instance.withdraw(26659);
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[3],value:56});

result = await instance.withdraw(8213);
});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[5],value:39});

result = await instance.withdraw(707991);
});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[4],value:31});

result = await instance.withdraw(590516);
});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[4],value:29});

result = await instance.withdraw(888486);
});
it('test 33',async() => {
result = await instance.withdraw(798823);
await instance.sendTransaction({from:accounts[9],value:95});

});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[9],value:54});

result = await instance.withdraw(193227);
});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[3],value:94});

result = await instance.withdraw(736432);
});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[6],value:42});

result = await instance.withdraw(150749);
});
it('test 37',async() => {
result = await instance.withdraw(313576);
await instance.sendTransaction({from:accounts[2],value:18});

});
it('test 38',async() => {
result = await instance.withdraw(552583);
await instance.sendTransaction({from:accounts[8],value:3});

});
it('test 39',async() => {
result = await instance.withdraw(607050);
await instance.sendTransaction({from:accounts[7],value:39});

});
it('test 40',async() => {
await instance.sendTransaction({from:accounts[8],value:72});

result = await instance.withdraw(942363);
});
it('test 41',async() => {
result = await instance.withdraw(22431);
await instance.sendTransaction({from:accounts[7],value:48});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 42',async() => {
await instance.sendTransaction({from:accounts[1],value:15});

result = await instance.withdraw(689733);
});
it('test 43',async() => {
result = await instance.withdraw(590027);
await instance.sendTransaction({from:accounts[8],value:40});

});
it('test 44',async() => {
result = await instance.withdraw(186767);
await instance.sendTransaction({from:accounts[9],value:89});

});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[3],value:86});

result = await instance.withdraw(538333);
});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[6],value:24});

result = await instance.withdraw(767667);
});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[7],value:43});

result = await instance.withdraw(564660);
});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[5],value:28});

result = await instance.withdraw(609303);
});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[3],value:4});

result = await instance.withdraw(548846);
});
});
