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
await instance.sendTransaction({from:accounts[6],value:35});

result = await instance.withdraw(2913);
});
it('test 1',async() => {
result = await instance.withdraw(425085);
await instance.sendTransaction({from:accounts[2],value:74});

});
it('test 2',async() => {
result = await instance.withdraw(482277);
await instance.sendTransaction({from:accounts[4],value:86});

});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[5],value:61});

result = await instance.withdraw(664356);
});
it('test 4',async() => {
result = await instance.withdraw(871027);
await instance.sendTransaction({from:accounts[6],value:70});

});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[9],value:59});

result = await instance.withdraw(513516);
});
it('test 6',async() => {
result = await instance.withdraw(272275);
await instance.sendTransaction({from:accounts[7],value:40});

});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[8],value:74});

result = await instance.withdraw(146436);
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[1],value:11});

result = await instance.withdraw(634774);
});
it('test 9',async() => {
result = await instance.withdraw(576487);
await instance.sendTransaction({from:accounts[4],value:76});

});
it('test 10',async() => {
result = await instance.withdraw(486473);
await instance.sendTransaction({from:accounts[4],value:13});

});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[7],value:77});

result = await instance.withdraw(1029346);
});
it('test 12',async() => {
result = await instance.withdraw(979428);
await instance.sendTransaction({from:accounts[2],value:57});

});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[9],value:46});

result = await instance.withdraw(860062);
});
it('test 14',async() => {
result = await instance.withdraw(110879);
await instance.sendTransaction({from:accounts[5],value:50});

});
it('test 15',async() => {
result = await instance.withdraw(170707);
await instance.sendTransaction({from:accounts[5],value:27});

});
it('test 16',async() => {
result = await instance.withdraw(405724);
await instance.sendTransaction({from:accounts[4],value:44});

});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[1],value:68});

result = await instance.withdraw(651188);
});
it('test 18',async() => {
result = await instance.withdraw(93083);
await instance.sendTransaction({from:accounts[3],value:13});

});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[2],value:70});

result = await instance.withdraw(666463);
});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[5],value:43});

result = await instance.withdraw(737675);
});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[7],value:66});

result = await instance.withdraw(93239);
});
it('test 22',async() => {
result = await instance.withdraw(833579);
await instance.sendTransaction({from:accounts[8],value:53});

});
it('test 23',async() => {
result = await instance.withdraw(679641);
await instance.sendTransaction({from:accounts[9],value:13});

});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[4],value:37});

result = await instance.withdraw(198444);
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[2],value:50});

result = await instance.withdraw(190819);
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[3],value:43});

result = await instance.withdraw(483821);
});
it('test 27',async() => {
result = await instance.withdraw(635113);
await instance.sendTransaction({from:accounts[1],value:36});

});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[9],value:11});

result = await instance.withdraw(165998);
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[2],value:86});

result = await instance.withdraw(466947);
});
it('test 30',async() => {
result = await instance.withdraw(879210);
await instance.sendTransaction({from:accounts[9],value:14});

});
it('test 31',async() => {
result = await instance.withdraw(112966);
await instance.sendTransaction({from:accounts[3],value:7});

});
it('test 32',async() => {
result = await instance.withdraw(966931);
await instance.sendTransaction({from:accounts[1],value:21});

});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[6],value:25});

result = await instance.withdraw(850711);
});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[8],value:95});

result = await instance.withdraw(760113);
});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[5],value:16});

result = await instance.withdraw(227476);
});
it('test 36',async() => {
result = await instance.withdraw(160247);
await instance.sendTransaction({from:accounts[5],value:20});

});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[1],value:51});

result = await instance.withdraw(24943);
});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[8],value:84});

result = await instance.withdraw(72659);
});
it('test 39',async() => {
result = await instance.withdraw(179934);
await instance.sendTransaction({from:accounts[6],value:84});

});
it('test 40',async() => {
await instance.sendTransaction({from:accounts[7],value:58});

result = await instance.withdraw(50455);
});
it('test 41',async() => {
result = await instance.withdraw(687908);
await instance.sendTransaction({from:accounts[5],value:30});

});
it('test 42',async() => {
result = await instance.withdraw(700265);
await instance.sendTransaction({from:accounts[5],value:77});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 43',async() => {
await instance.sendTransaction({from:accounts[5],value:29});

result = await instance.withdraw(172783);
});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[8],value:60});

result = await instance.withdraw(289580);
});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[5],value:26});

result = await instance.withdraw(922746);
});
it('test 46',async() => {
result = await instance.withdraw(567508);
await instance.sendTransaction({from:accounts[9],value:37});

});
it('test 47',async() => {
result = await instance.withdraw(521563);
await instance.sendTransaction({from:accounts[7],value:11});

});
it('test 48',async() => {
result = await instance.withdraw(294657);
await instance.sendTransaction({from:accounts[5],value:58});

});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[6],value:32});

result = await instance.withdraw(244602);
});
});
