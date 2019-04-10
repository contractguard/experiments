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
await instance.sendTransaction({from:accounts[6],value:40});

result = await instance.withdraw(822782);
});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[2],value:7});

result = await instance.withdraw(620136);
});
it('test 2',async() => {
result = await instance.withdraw(594744);
await instance.sendTransaction({from:accounts[7],value:43});

});
it('test 3',async() => {
result = await instance.withdraw(179362);
await instance.sendTransaction({from:accounts[3],value:78});

});
it('test 4',async() => {
result = await instance.withdraw(982184);
await instance.sendTransaction({from:accounts[9],value:84});

});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[8],value:73});

result = await instance.withdraw(869555);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[3],value:14});

result = await instance.withdraw(772406);
});
it('test 7',async() => {
result = await instance.withdraw(919548);
await instance.sendTransaction({from:accounts[8],value:66});

});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[4],value:88});

result = await instance.withdraw(44033);
});
it('test 9',async() => {
result = await instance.withdraw(875392);
await instance.sendTransaction({from:accounts[7],value:98});

});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[8],value:16});

result = await instance.withdraw(511723);
});
it('test 11',async() => {
result = await instance.withdraw(508195);
await instance.sendTransaction({from:accounts[6],value:19});

});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[3],value:35});

result = await instance.withdraw(906126);
});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[3],value:51});

result = await instance.withdraw(31287);
});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[1],value:23});

result = await instance.withdraw(694702);
});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[9],value:96});

result = await instance.withdraw(69280);
});
it('test 16',async() => {
result = await instance.withdraw(1012917);
await instance.sendTransaction({from:accounts[5],value:46});

});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[5],value:17});

result = await instance.withdraw(423588);
});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[1],value:67});

result = await instance.withdraw(1043747);
});
it('test 19',async() => {
result = await instance.withdraw(135555);
await instance.sendTransaction({from:accounts[4],value:33});

});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[6],value:17});

result = await instance.withdraw(1014691);
});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[6],value:62});

result = await instance.withdraw(263235);
});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[3],value:58});

result = await instance.withdraw(229322);
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[9],value:65});

result = await instance.withdraw(581757);
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[6],value:46});

result = await instance.withdraw(480541);
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[3],value:1});

result = await instance.withdraw(57207);
});
it('test 26',async() => {
result = await instance.withdraw(741421);
await instance.sendTransaction({from:accounts[2],value:46});

});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[3],value:52});

result = await instance.withdraw(344613);
});
it('test 28',async() => {
result = await instance.withdraw(135568);
await instance.sendTransaction({from:accounts[8],value:58});

});
it('test 29',async() => {
result = await instance.withdraw(399333);
await instance.sendTransaction({from:accounts[4],value:62});

});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[5],value:95});

result = await instance.withdraw(339737);
});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[1],value:56});

result = await instance.withdraw(434093);
});
it('test 32',async() => {
result = await instance.withdraw(549062);
await instance.sendTransaction({from:accounts[6],value:52});

});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[4],value:51});

result = await instance.withdraw(893056);
});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[7],value:55});

result = await instance.withdraw(740689);
});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[5],value:81});

result = await instance.withdraw(123437);
});
it('test 36',async() => {
result = await instance.withdraw(549339);
await instance.sendTransaction({from:accounts[6],value:62});

});
it('test 37',async() => {
result = await instance.withdraw(184919);
await instance.sendTransaction({from:accounts[1],value:89});

});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[7],value:96});

result = await instance.withdraw(621203);
});
it('test 39',async() => {
result = await instance.withdraw(700898);
await instance.sendTransaction({from:accounts[4],value:39});

});
it('test 40',async() => {
await instance.sendTransaction({from:accounts[7],value:61});

result = await instance.withdraw(46543);
});
it('test 41',async() => {
result = await instance.withdraw(679454);
await instance.sendTransaction({from:accounts[9],value:78});

});
it('test 42',async() => {
result = await instance.withdraw(806571);
await instance.sendTransaction({from:accounts[1],value:77});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 43',async() => {
result = await instance.withdraw(824072);
await instance.sendTransaction({from:accounts[3],value:92});

});
it('test 44',async() => {
result = await instance.withdraw(476382);
await instance.sendTransaction({from:accounts[3],value:74});

});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[2],value:52});

result = await instance.withdraw(603913);
});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[2],value:34});

result = await instance.withdraw(780890);
});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[1],value:83});

result = await instance.withdraw(920113);
});
it('test 48',async() => {
result = await instance.withdraw(417348);
await instance.sendTransaction({from:accounts[2],value:77});

});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[3],value:17});

result = await instance.withdraw(977326);
});
});
