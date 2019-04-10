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
result = await instance.withdraw(873943);
await instance.sendTransaction({from:accounts[9],value:70});

});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[3],value:43});

result = await instance.withdraw(416851);
});
it('test 2',async() => {
result = await instance.withdraw(328588);
await instance.sendTransaction({from:accounts[8],value:83});

});
it('test 3',async() => {
result = await instance.withdraw(694510);
await instance.sendTransaction({from:accounts[8],value:73});

});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[9],value:77});

result = await instance.withdraw(333458);
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[5],value:43});

result = await instance.withdraw(871289);
});
it('test 6',async() => {
result = await instance.withdraw(674268);
await instance.sendTransaction({from:accounts[4],value:89});

});
it('test 7',async() => {
result = await instance.withdraw(1046995);
await instance.sendTransaction({from:accounts[1],value:73});

});
it('test 8',async() => {
result = await instance.withdraw(935175);
await instance.sendTransaction({from:accounts[3],value:75});

});
it('test 9',async() => {
result = await instance.withdraw(654564);
await instance.sendTransaction({from:accounts[7],value:88});

});
it('test 10',async() => {
result = await instance.withdraw(471215);
await instance.sendTransaction({from:accounts[7],value:53});

});
it('test 11',async() => {
result = await instance.withdraw(302736);
await instance.sendTransaction({from:accounts[6],value:17});

});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[2],value:37});

result = await instance.withdraw(188281);
});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[5],value:90});

result = await instance.withdraw(441588);
});
it('test 14',async() => {
result = await instance.withdraw(438894);
await instance.sendTransaction({from:accounts[7],value:24});

});
it('test 15',async() => {
result = await instance.withdraw(638655);
await instance.sendTransaction({from:accounts[3],value:24});

});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[1],value:63});

result = await instance.withdraw(862252);
});
it('test 17',async() => {
result = await instance.withdraw(570718);
await instance.sendTransaction({from:accounts[1],value:67});

});
it('test 18',async() => {
result = await instance.withdraw(78664);
await instance.sendTransaction({from:accounts[4],value:5});

});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[2],value:36});

result = await instance.withdraw(1040249);
});
it('test 20',async() => {
result = await instance.withdraw(797835);
await instance.sendTransaction({from:accounts[7],value:73});

});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[5],value:16});

result = await instance.withdraw(140089);
});
it('test 22',async() => {
result = await instance.withdraw(961564);
await instance.sendTransaction({from:accounts[2],value:55});

});
it('test 23',async() => {
result = await instance.withdraw(294425);
await instance.sendTransaction({from:accounts[1],value:12});

});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[3],value:12});

result = await instance.withdraw(29770);
});
it('test 25',async() => {
result = await instance.withdraw(773758);
await instance.sendTransaction({from:accounts[9],value:17});

});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[1],value:26});

result = await instance.withdraw(35648);
});
it('test 27',async() => {
result = await instance.withdraw(993253);
await instance.sendTransaction({from:accounts[5],value:14});

});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[1],value:24});

result = await instance.withdraw(52812);
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[8],value:15});

result = await instance.withdraw(868007);
});
it('test 30',async() => {
result = await instance.withdraw(375622);
await instance.sendTransaction({from:accounts[3],value:29});

});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[5],value:48});

result = await instance.withdraw(525728);
});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[6],value:60});

result = await instance.withdraw(702020);
});
it('test 33',async() => {
result = await instance.withdraw(70590);
await instance.sendTransaction({from:accounts[7],value:31});

});
it('test 34',async() => {
result = await instance.withdraw(217603);
await instance.sendTransaction({from:accounts[7],value:55});

});
it('test 35',async() => {
result = await instance.withdraw(65203);
await instance.sendTransaction({from:accounts[3],value:48});

});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[8],value:28});

result = await instance.withdraw(305991);
});
it('test 37',async() => {
result = await instance.withdraw(160842);
await instance.sendTransaction({from:accounts[2],value:42});

});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[4],value:41});

result = await instance.withdraw(827672);
});
it('test 39',async() => {
result = await instance.withdraw(113399);
await instance.sendTransaction({from:accounts[7],value:18});

});
it('test 40',async() => {
result = await instance.withdraw(292155);
await instance.sendTransaction({from:accounts[6],value:96});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 41',async() => {
await instance.sendTransaction({from:accounts[6],value:83});

result = await instance.withdraw(416791);
});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[2],value:81});

result = await instance.withdraw(209603);
});
it('test 43',async() => {
result = await instance.withdraw(813342);
await instance.sendTransaction({from:accounts[5],value:69});

});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[4],value:32});

result = await instance.withdraw(358196);
});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[8],value:97});

result = await instance.withdraw(340982);
});
it('test 46',async() => {
result = await instance.withdraw(910677);
await instance.sendTransaction({from:accounts[4],value:14});

});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[1],value:32});

result = await instance.withdraw(1025961);
});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[8],value:18});

result = await instance.withdraw(524166);
});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[9],value:59});

result = await instance.withdraw(748597);
});
});
