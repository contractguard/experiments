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
await instance.sendTransaction({from:accounts[4],value:72});

result = await instance.withdraw(864121);
});
it('test 1',async() => {
result = await instance.withdraw(283765);
await instance.sendTransaction({from:accounts[6],value:16});

});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[9],value:9});

result = await instance.withdraw(643882);
});
it('test 3',async() => {
result = await instance.withdraw(854022);
await instance.sendTransaction({from:accounts[1],value:27});

});
it('test 4',async() => {
result = await instance.withdraw(419258);
await instance.sendTransaction({from:accounts[3],value:64});

});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[1],value:20});

result = await instance.withdraw(569253);
});
it('test 6',async() => {
result = await instance.withdraw(112331);
await instance.sendTransaction({from:accounts[6],value:51});

});
it('test 7',async() => {
result = await instance.withdraw(173110);
await instance.sendTransaction({from:accounts[9],value:3});

});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[1],value:66});

result = await instance.withdraw(231581);
});
it('test 9',async() => {
result = await instance.withdraw(131929);
await instance.sendTransaction({from:accounts[1],value:40});

});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[8],value:68});

result = await instance.withdraw(254262);
});
it('test 11',async() => {
result = await instance.withdraw(290496);
await instance.sendTransaction({from:accounts[9],value:79});

});
it('test 12',async() => {
result = await instance.withdraw(102698);
await instance.sendTransaction({from:accounts[4],value:30});

});
it('test 13',async() => {
result = await instance.withdraw(145606);
await instance.sendTransaction({from:accounts[8],value:70});

});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[5],value:95});

result = await instance.withdraw(827374);
});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[1],value:77});

result = await instance.withdraw(36132);
});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[1],value:89});

result = await instance.withdraw(175252);
});
it('test 17',async() => {
result = await instance.withdraw(325466);
await instance.sendTransaction({from:accounts[3],value:87});

});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[3],value:52});

result = await instance.withdraw(54859);
});
it('test 19',async() => {
result = await instance.withdraw(947490);
await instance.sendTransaction({from:accounts[1],value:6});

});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[9],value:40});

result = await instance.withdraw(520355);
});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[5],value:19});

result = await instance.withdraw(816721);
});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[8],value:28});

result = await instance.withdraw(277573);
});
it('test 23',async() => {
result = await instance.withdraw(462342);
await instance.sendTransaction({from:accounts[4],value:6});

});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[7],value:81});

result = await instance.withdraw(877921);
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[7],value:47});

result = await instance.withdraw(147147);
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[4],value:57});

result = await instance.withdraw(660524);
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[1],value:70});

result = await instance.withdraw(90544);
});
it('test 28',async() => {
result = await instance.withdraw(467257);
await instance.sendTransaction({from:accounts[1],value:90});

});
it('test 29',async() => {
result = await instance.withdraw(566391);
await instance.sendTransaction({from:accounts[5],value:58});

});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[4],value:86});

result = await instance.withdraw(186391);
});
it('test 31',async() => {
result = await instance.withdraw(175893);
await instance.sendTransaction({from:accounts[1],value:6});

});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[6],value:11});

result = await instance.withdraw(714877);
});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[2],value:15});

result = await instance.withdraw(524106);
});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[3],value:64});

result = await instance.withdraw(628415);
});
it('test 35',async() => {
result = await instance.withdraw(808781);
await instance.sendTransaction({from:accounts[9],value:40});

});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[1],value:88});

result = await instance.withdraw(593596);
});
it('test 37',async() => {
result = await instance.withdraw(191081);
await instance.sendTransaction({from:accounts[6],value:6});

});
it('test 38',async() => {
result = await instance.withdraw(990694);
await instance.sendTransaction({from:accounts[3],value:58});

});
it('test 39',async() => {
result = await instance.withdraw(941799);
await instance.sendTransaction({from:accounts[8],value:20});

});
it('test 40',async() => {
await instance.sendTransaction({from:accounts[3],value:2});

result = await instance.withdraw(413789);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 41',async() => {
result = await instance.withdraw(660675);
await instance.sendTransaction({from:accounts[9],value:76});

});
it('test 42',async() => {
result = await instance.withdraw(493208);
await instance.sendTransaction({from:accounts[5],value:88});

});
it('test 43',async() => {
await instance.sendTransaction({from:accounts[3],value:59});

result = await instance.withdraw(252911);
});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[8],value:96});

result = await instance.withdraw(464907);
});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[5],value:22});

result = await instance.withdraw(64969);
});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[1],value:35});

result = await instance.withdraw(556859);
});
it('test 47',async() => {
result = await instance.withdraw(132409);
await instance.sendTransaction({from:accounts[5],value:43});

});
it('test 48',async() => {
result = await instance.withdraw(1033701);
await instance.sendTransaction({from:accounts[7],value:39});

});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[1],value:33});

result = await instance.withdraw(889743);
});
});
