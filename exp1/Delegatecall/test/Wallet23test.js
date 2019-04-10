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
result = await instance.withdraw(185585);
await instance.sendTransaction({from:accounts[9],value:82});

});
it('test 1',async() => {
result = await instance.withdraw(474521);
await instance.sendTransaction({from:accounts[3],value:85});

});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[3],value:71});

result = await instance.withdraw(854870);
});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[5],value:35});

result = await instance.withdraw(970645);
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[4],value:37});

result = await instance.withdraw(567574);
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[9],value:81});

result = await instance.withdraw(332675);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[1],value:27});

result = await instance.withdraw(661790);
});
it('test 7',async() => {
result = await instance.withdraw(238984);
await instance.sendTransaction({from:accounts[3],value:40});

});
it('test 8',async() => {
result = await instance.withdraw(269421);
await instance.sendTransaction({from:accounts[7],value:6});

});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[9],value:7});

result = await instance.withdraw(824150);
});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[7],value:73});

result = await instance.withdraw(6584);
});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[5],value:51});

result = await instance.withdraw(1010961);
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[5],value:59});

result = await instance.withdraw(1014469);
});
it('test 13',async() => {
result = await instance.withdraw(382610);
await instance.sendTransaction({from:accounts[5],value:18});

});
it('test 14',async() => {
result = await instance.withdraw(519870);
await instance.sendTransaction({from:accounts[5],value:80});

});
it('test 15',async() => {
result = await instance.withdraw(1024436);
await instance.sendTransaction({from:accounts[2],value:22});

});
it('test 16',async() => {
result = await instance.withdraw(487510);
await instance.sendTransaction({from:accounts[4],value:40});

});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[2],value:22});

result = await instance.withdraw(212840);
});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[6],value:95});

result = await instance.withdraw(56797);
});
it('test 19',async() => {
result = await instance.withdraw(339215);
await instance.sendTransaction({from:accounts[3],value:96});

});
it('test 20',async() => {
result = await instance.withdraw(879742);
await instance.sendTransaction({from:accounts[4],value:40});

});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[8],value:16});

result = await instance.withdraw(1000050);
});
it('test 22',async() => {
result = await instance.withdraw(338373);
await instance.sendTransaction({from:accounts[1],value:9});

});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[7],value:58});

result = await instance.withdraw(904133);
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[5],value:98});

result = await instance.withdraw(83154);
});
it('test 25',async() => {
result = await instance.withdraw(699733);
await instance.sendTransaction({from:accounts[2],value:15});

});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[1],value:44});

result = await instance.withdraw(877843);
});
it('test 27',async() => {
result = await instance.withdraw(657655);
await instance.sendTransaction({from:accounts[1],value:86});

});
it('test 28',async() => {
result = await instance.withdraw(512369);
await instance.sendTransaction({from:accounts[7],value:38});

});
it('test 29',async() => {
result = await instance.withdraw(329770);
await instance.sendTransaction({from:accounts[3],value:14});

});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[1],value:44});

result = await instance.withdraw(791820);
});
it('test 31',async() => {
result = await instance.withdraw(903855);
await instance.sendTransaction({from:accounts[1],value:96});

});
it('test 32',async() => {
result = await instance.withdraw(420272);
await instance.sendTransaction({from:accounts[8],value:75});

});
it('test 33',async() => {
result = await instance.withdraw(366360);
await instance.sendTransaction({from:accounts[1],value:93});

});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[1],value:89});

result = await instance.withdraw(470121);
});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[3],value:89});

result = await instance.withdraw(751545);
});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[6],value:62});

result = await instance.withdraw(743690);
});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[7],value:51});

result = await instance.withdraw(847664);
});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[3],value:96});

result = await instance.withdraw(714713);
});
it('test 39',async() => {
result = await instance.withdraw(469786);
await instance.sendTransaction({from:accounts[4],value:72});

});
it('test 40',async() => {
result = await instance.withdraw(913719);
await instance.sendTransaction({from:accounts[3],value:39});

});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[2],value:59});

result = await instance.withdraw(318987);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 42',async() => {
result = await instance.withdraw(678733);
await instance.sendTransaction({from:accounts[7],value:60});

});
it('test 43',async() => {
result = await instance.withdraw(528080);
await instance.sendTransaction({from:accounts[3],value:42});

});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[1],value:6});

result = await instance.withdraw(5584);
});
it('test 45',async() => {
result = await instance.withdraw(201522);
await instance.sendTransaction({from:accounts[9],value:50});

});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[4],value:45});

result = await instance.withdraw(371301);
});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[8],value:56});

result = await instance.withdraw(952173);
});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[9],value:39});

result = await instance.withdraw(771260);
});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[1],value:14});

result = await instance.withdraw(254807);
});
});
