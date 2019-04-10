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
result = await instance.withdraw(339820);
await instance.sendTransaction({from:accounts[8],value:55});

});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[9],value:64});

result = await instance.withdraw(343952);
});
it('test 2',async() => {
result = await instance.withdraw(815660);
await instance.sendTransaction({from:accounts[2],value:51});

});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[5],value:26});

result = await instance.withdraw(718889);
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[8],value:81});

result = await instance.withdraw(620419);
});
it('test 5',async() => {
result = await instance.withdraw(507616);
await instance.sendTransaction({from:accounts[7],value:17});

});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[6],value:73});

result = await instance.withdraw(918710);
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[2],value:8});

result = await instance.withdraw(253702);
});
it('test 8',async() => {
result = await instance.withdraw(474804);
await instance.sendTransaction({from:accounts[2],value:68});

});
it('test 9',async() => {
result = await instance.withdraw(250122);
await instance.sendTransaction({from:accounts[2],value:52});

});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[1],value:5});

result = await instance.withdraw(959137);
});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[1],value:6});

result = await instance.withdraw(923240);
});
it('test 12',async() => {
result = await instance.withdraw(36148);
await instance.sendTransaction({from:accounts[6],value:70});

});
it('test 13',async() => {
result = await instance.withdraw(904412);
await instance.sendTransaction({from:accounts[4],value:15});

});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[1],value:89});

result = await instance.withdraw(198219);
});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[7],value:42});

result = await instance.withdraw(831558);
});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[3],value:81});

result = await instance.withdraw(812240);
});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[4],value:76});

result = await instance.withdraw(553656);
});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[6],value:54});

result = await instance.withdraw(219355);
});
it('test 19',async() => {
result = await instance.withdraw(108375);
await instance.sendTransaction({from:accounts[9],value:88});

});
it('test 20',async() => {
result = await instance.withdraw(757790);
await instance.sendTransaction({from:accounts[4],value:45});

});
it('test 21',async() => {
result = await instance.withdraw(449527);
await instance.sendTransaction({from:accounts[7],value:70});

});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[5],value:48});

result = await instance.withdraw(2941);
});
it('test 23',async() => {
result = await instance.withdraw(860510);
await instance.sendTransaction({from:accounts[8],value:89});

});
it('test 24',async() => {
result = await instance.withdraw(398538);
await instance.sendTransaction({from:accounts[6],value:48});

});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[4],value:4});

result = await instance.withdraw(941240);
});
it('test 26',async() => {
result = await instance.withdraw(663101);
await instance.sendTransaction({from:accounts[4],value:31});

});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[6],value:66});

result = await instance.withdraw(264634);
});
it('test 28',async() => {
result = await instance.withdraw(944603);
await instance.sendTransaction({from:accounts[5],value:94});

});
it('test 29',async() => {
result = await instance.withdraw(120776);
await instance.sendTransaction({from:accounts[3],value:52});

});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[8],value:19});

result = await instance.withdraw(315191);
});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[9],value:40});

result = await instance.withdraw(146253);
});
it('test 32',async() => {
result = await instance.withdraw(580349);
await instance.sendTransaction({from:accounts[5],value:1});

});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[4],value:60});

result = await instance.withdraw(496314);
});
it('test 34',async() => {
result = await instance.withdraw(566254);
await instance.sendTransaction({from:accounts[4],value:64});

});
it('test 35',async() => {
result = await instance.withdraw(596171);
await instance.sendTransaction({from:accounts[3],value:32});

});
it('test 36',async() => {
result = await instance.withdraw(1037472);
await instance.sendTransaction({from:accounts[1],value:90});

});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[1],value:13});

result = await instance.withdraw(5303);
});
it('test 38',async() => {
result = await instance.withdraw(558355);
await instance.sendTransaction({from:accounts[6],value:39});

});
it('test 39',async() => {
result = await instance.withdraw(524390);
await instance.sendTransaction({from:accounts[8],value:46});

});
it('test 40',async() => {
result = await instance.withdraw(431740);
await instance.sendTransaction({from:accounts[3],value:42});

});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[3],value:44});

result = await instance.withdraw(309093);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 42',async() => {
result = await instance.withdraw(927728);
await instance.sendTransaction({from:accounts[3],value:50});

});
it('test 43',async() => {
result = await instance.withdraw(242308);
await instance.sendTransaction({from:accounts[1],value:98});

});
it('test 44',async() => {
result = await instance.withdraw(440740);
await instance.sendTransaction({from:accounts[3],value:62});

});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[6],value:37});

result = await instance.withdraw(636491);
});
it('test 46',async() => {
result = await instance.withdraw(621236);
await instance.sendTransaction({from:accounts[2],value:91});

});
it('test 47',async() => {
result = await instance.withdraw(670957);
await instance.sendTransaction({from:accounts[1],value:55});

});
it('test 48',async() => {
result = await instance.withdraw(201139);
await instance.sendTransaction({from:accounts[8],value:85});

});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[7],value:19});

result = await instance.withdraw(599852);
});
});
