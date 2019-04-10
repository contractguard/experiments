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
result = await instance.withdraw(155794);
await instance.sendTransaction({from:accounts[1],value:6});

});
it('test 1',async() => {
result = await instance.withdraw(741839);
await instance.sendTransaction({from:accounts[5],value:66});

});
it('test 2',async() => {
result = await instance.withdraw(422539);
await instance.sendTransaction({from:accounts[2],value:55});

});
it('test 3',async() => {
result = await instance.withdraw(728243);
await instance.sendTransaction({from:accounts[4],value:35});

});
it('test 4',async() => {
result = await instance.withdraw(749659);
await instance.sendTransaction({from:accounts[3],value:67});

});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[6],value:36});

result = await instance.withdraw(627462);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[1],value:46});

result = await instance.withdraw(761463);
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[2],value:76});

result = await instance.withdraw(570097);
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[1],value:15});

result = await instance.withdraw(1034514);
});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[1],value:6});

result = await instance.withdraw(379367);
});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[7],value:70});

result = await instance.withdraw(845314);
});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[9],value:81});

result = await instance.withdraw(263783);
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[3],value:97});

result = await instance.withdraw(533420);
});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[9],value:37});

result = await instance.withdraw(937484);
});
it('test 14',async() => {
result = await instance.withdraw(962952);
await instance.sendTransaction({from:accounts[6],value:66});

});
it('test 15',async() => {
result = await instance.withdraw(297161);
await instance.sendTransaction({from:accounts[4],value:27});

});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[8],value:10});

result = await instance.withdraw(992464);
});
it('test 17',async() => {
result = await instance.withdraw(682347);
await instance.sendTransaction({from:accounts[5],value:100});

});
it('test 18',async() => {
result = await instance.withdraw(412687);
await instance.sendTransaction({from:accounts[5],value:92});

});
it('test 19',async() => {
result = await instance.withdraw(636623);
await instance.sendTransaction({from:accounts[3],value:90});

});
it('test 20',async() => {
result = await instance.withdraw(593473);
await instance.sendTransaction({from:accounts[4],value:6});

});
it('test 21',async() => {
result = await instance.withdraw(609071);
await instance.sendTransaction({from:accounts[3],value:17});

});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[8],value:25});

result = await instance.withdraw(531499);
});
it('test 23',async() => {
result = await instance.withdraw(263008);
await instance.sendTransaction({from:accounts[1],value:23});

});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[5],value:43});

result = await instance.withdraw(989430);
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[8],value:45});

result = await instance.withdraw(460076);
});
it('test 26',async() => {
result = await instance.withdraw(417266);
await instance.sendTransaction({from:accounts[8],value:7});

});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[3],value:1});

result = await instance.withdraw(952042);
});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[4],value:68});

result = await instance.withdraw(751487);
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[1],value:96});

result = await instance.withdraw(898130);
});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[2],value:45});

result = await instance.withdraw(411786);
});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[8],value:63});

result = await instance.withdraw(363022);
});
it('test 32',async() => {
result = await instance.withdraw(109599);
await instance.sendTransaction({from:accounts[9],value:89});

});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[5],value:33});

result = await instance.withdraw(540258);
});
it('test 34',async() => {
result = await instance.withdraw(1019442);
await instance.sendTransaction({from:accounts[3],value:9});

});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[3],value:57});

result = await instance.withdraw(507549);
});
it('test 36',async() => {
result = await instance.withdraw(30960);
await instance.sendTransaction({from:accounts[2],value:32});

});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[5],value:34});

result = await instance.withdraw(819426);
});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[6],value:71});

result = await instance.withdraw(1036882);
});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[4],value:30});

result = await instance.withdraw(203965);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 40',async() => {
result = await instance.withdraw(632240);
await instance.sendTransaction({from:accounts[6],value:19});

});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[8],value:64});

result = await instance.withdraw(95120);
});
it('test 42',async() => {
result = await instance.withdraw(849188);
await instance.sendTransaction({from:accounts[7],value:38});

});
it('test 43',async() => {
await instance.sendTransaction({from:accounts[2],value:34});

result = await instance.withdraw(64953);
});
it('test 44',async() => {
result = await instance.withdraw(357298);
await instance.sendTransaction({from:accounts[3],value:43});

});
it('test 45',async() => {
result = await instance.withdraw(191576);
await instance.sendTransaction({from:accounts[7],value:9});

});
it('test 46',async() => {
result = await instance.withdraw(725600);
await instance.sendTransaction({from:accounts[9],value:73});

});
it('test 47',async() => {
result = await instance.withdraw(774102);
await instance.sendTransaction({from:accounts[6],value:9});

});
it('test 48',async() => {
result = await instance.withdraw(427270);
await instance.sendTransaction({from:accounts[6],value:18});

});
it('test 49',async() => {
result = await instance.withdraw(906499);
await instance.sendTransaction({from:accounts[5],value:26});

});
});
