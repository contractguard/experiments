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
await instance.sendTransaction({from:accounts[9],value:80});

result = await instance.withdraw(985943);
});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[4],value:57});

result = await instance.withdraw(247415);
});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[8],value:50});

result = await instance.withdraw(407330);
});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[9],value:83});

result = await instance.withdraw(364780);
});
it('test 4',async() => {
result = await instance.withdraw(394016);
await instance.sendTransaction({from:accounts[1],value:13});

});
it('test 5',async() => {
result = await instance.withdraw(586230);
await instance.sendTransaction({from:accounts[8],value:58});

});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[9],value:12});

result = await instance.withdraw(974344);
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[2],value:9});

result = await instance.withdraw(801259);
});
it('test 8',async() => {
result = await instance.withdraw(970050);
await instance.sendTransaction({from:accounts[4],value:41});

});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[8],value:4});

result = await instance.withdraw(330505);
});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[5],value:92});

result = await instance.withdraw(814200);
});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[1],value:87});

result = await instance.withdraw(269523);
});
it('test 12',async() => {
result = await instance.withdraw(55927);
await instance.sendTransaction({from:accounts[3],value:32});

});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[9],value:52});

result = await instance.withdraw(138214);
});
it('test 14',async() => {
result = await instance.withdraw(814612);
await instance.sendTransaction({from:accounts[1],value:4});

});
it('test 15',async() => {
result = await instance.withdraw(139162);
await instance.sendTransaction({from:accounts[4],value:59});

});
it('test 16',async() => {
result = await instance.withdraw(46740);
await instance.sendTransaction({from:accounts[6],value:91});

});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[8],value:25});

result = await instance.withdraw(100228);
});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[6],value:10});

result = await instance.withdraw(25191);
});
it('test 19',async() => {
result = await instance.withdraw(965671);
await instance.sendTransaction({from:accounts[9],value:57});

});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[8],value:96});

result = await instance.withdraw(650092);
});
it('test 21',async() => {
result = await instance.withdraw(198310);
await instance.sendTransaction({from:accounts[3],value:27});

});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[6],value:18});

result = await instance.withdraw(392844);
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[2],value:19});

result = await instance.withdraw(490871);
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[6],value:97});

result = await instance.withdraw(361785);
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[9],value:21});

result = await instance.withdraw(360038);
});
it('test 26',async() => {
result = await instance.withdraw(303457);
await instance.sendTransaction({from:accounts[5],value:66});

});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[5],value:90});

result = await instance.withdraw(184076);
});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[5],value:6});

result = await instance.withdraw(97554);
});
it('test 29',async() => {
result = await instance.withdraw(1025448);
await instance.sendTransaction({from:accounts[7],value:46});

});
it('test 30',async() => {
result = await instance.withdraw(204477);
await instance.sendTransaction({from:accounts[6],value:12});

});
it('test 31',async() => {
result = await instance.withdraw(139253);
await instance.sendTransaction({from:accounts[2],value:12});

});
it('test 32',async() => {
result = await instance.withdraw(554836);
await instance.sendTransaction({from:accounts[1],value:25});

});
it('test 33',async() => {
result = await instance.withdraw(251949);
await instance.sendTransaction({from:accounts[4],value:44});

});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[1],value:86});

result = await instance.withdraw(719047);
});
it('test 35',async() => {
result = await instance.withdraw(120822);
await instance.sendTransaction({from:accounts[5],value:20});

});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[8],value:6});

result = await instance.withdraw(134129);
});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[6],value:80});

result = await instance.withdraw(439129);
});
it('test 38',async() => {
result = await instance.withdraw(141286);
await instance.sendTransaction({from:accounts[7],value:53});

});
it('test 39',async() => {
result = await instance.withdraw(578616);
await instance.sendTransaction({from:accounts[5],value:62});

});
it('test 40',async() => {
await instance.sendTransaction({from:accounts[1],value:71});

result = await instance.withdraw(638471);
});
it('test 41',async() => {
result = await instance.withdraw(1004333);
await instance.sendTransaction({from:accounts[9],value:64});

});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[9],value:87});

result = await instance.withdraw(320603);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 43',async() => {
await instance.sendTransaction({from:accounts[6],value:62});

result = await instance.withdraw(556606);
});
it('test 44',async() => {
result = await instance.withdraw(202220);
await instance.sendTransaction({from:accounts[7],value:94});

});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[4],value:23});

result = await instance.withdraw(563676);
});
it('test 46',async() => {
result = await instance.withdraw(959455);
await instance.sendTransaction({from:accounts[8],value:90});

});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[2],value:31});

result = await instance.withdraw(896141);
});
it('test 48',async() => {
result = await instance.withdraw(297557);
await instance.sendTransaction({from:accounts[2],value:71});

});
it('test 49',async() => {
result = await instance.withdraw(60787);
await instance.sendTransaction({from:accounts[5],value:86});

});
});
