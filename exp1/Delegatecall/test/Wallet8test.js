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
result = await instance.withdraw(206718);
await instance.sendTransaction({from:accounts[5],value:30});

});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[4],value:65});

result = await instance.withdraw(492572);
});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[3],value:17});

result = await instance.withdraw(973679);
});
it('test 3',async() => {
result = await instance.withdraw(883437);
await instance.sendTransaction({from:accounts[5],value:55});

});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[1],value:57});

result = await instance.withdraw(939124);
});
it('test 5',async() => {
result = await instance.withdraw(13162);
await instance.sendTransaction({from:accounts[3],value:57});

});
it('test 6',async() => {
result = await instance.withdraw(877390);
await instance.sendTransaction({from:accounts[9],value:75});

});
it('test 7',async() => {
result = await instance.withdraw(226817);
await instance.sendTransaction({from:accounts[4],value:97});

});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[5],value:86});

result = await instance.withdraw(583656);
});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[9],value:96});

result = await instance.withdraw(377698);
});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[6],value:60});

result = await instance.withdraw(220140);
});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[1],value:81});

result = await instance.withdraw(675587);
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[1],value:4});

result = await instance.withdraw(130224);
});
it('test 13',async() => {
result = await instance.withdraw(383785);
await instance.sendTransaction({from:accounts[2],value:48});

});
it('test 14',async() => {
result = await instance.withdraw(526815);
await instance.sendTransaction({from:accounts[7],value:17});

});
it('test 15',async() => {
result = await instance.withdraw(916244);
await instance.sendTransaction({from:accounts[5],value:72});

});
it('test 16',async() => {
result = await instance.withdraw(353186);
await instance.sendTransaction({from:accounts[1],value:36});

});
it('test 17',async() => {
result = await instance.withdraw(333735);
await instance.sendTransaction({from:accounts[7],value:30});

});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[8],value:91});

result = await instance.withdraw(42856);
});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[6],value:11});

result = await instance.withdraw(740848);
});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[4],value:14});

result = await instance.withdraw(405572);
});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[9],value:70});

result = await instance.withdraw(832276);
});
it('test 22',async() => {
result = await instance.withdraw(168450);
await instance.sendTransaction({from:accounts[2],value:79});

});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[8],value:98});

result = await instance.withdraw(756883);
});
it('test 24',async() => {
result = await instance.withdraw(334953);
await instance.sendTransaction({from:accounts[5],value:98});

});
it('test 25',async() => {
result = await instance.withdraw(846765);
await instance.sendTransaction({from:accounts[3],value:16});

});
it('test 26',async() => {
result = await instance.withdraw(109974);
await instance.sendTransaction({from:accounts[8],value:62});

});
it('test 27',async() => {
result = await instance.withdraw(141694);
await instance.sendTransaction({from:accounts[4],value:16});

});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[6],value:25});

result = await instance.withdraw(1032314);
});
it('test 29',async() => {
result = await instance.withdraw(782884);
await instance.sendTransaction({from:accounts[3],value:14});

});
it('test 30',async() => {
result = await instance.withdraw(500693);
await instance.sendTransaction({from:accounts[5],value:82});

});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[6],value:38});

result = await instance.withdraw(810292);
});
it('test 32',async() => {
result = await instance.withdraw(860189);
await instance.sendTransaction({from:accounts[7],value:37});

});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[7],value:76});

result = await instance.withdraw(908223);
});
it('test 34',async() => {
result = await instance.withdraw(282571);
await instance.sendTransaction({from:accounts[4],value:27});

});
it('test 35',async() => {
result = await instance.withdraw(50143);
await instance.sendTransaction({from:accounts[1],value:88});

});
it('test 36',async() => {
result = await instance.withdraw(968180);
await instance.sendTransaction({from:accounts[1],value:34});

});
it('test 37',async() => {
result = await instance.withdraw(702954);
await instance.sendTransaction({from:accounts[2],value:64});

});
it('test 38',async() => {
result = await instance.withdraw(427367);
await instance.sendTransaction({from:accounts[4],value:15});

});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[6],value:7});

result = await instance.withdraw(73944);
});
it('test 40',async() => {
await instance.sendTransaction({from:accounts[3],value:14});

result = await instance.withdraw(997282);
});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[3],value:92});

result = await instance.withdraw(559680);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 42',async() => {
result = await instance.withdraw(270090);
await instance.sendTransaction({from:accounts[3],value:48});

});
it('test 43',async() => {
result = await instance.withdraw(3156);
await instance.sendTransaction({from:accounts[7],value:17});

});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[7],value:9});

result = await instance.withdraw(254895);
});
it('test 45',async() => {
result = await instance.withdraw(322936);
await instance.sendTransaction({from:accounts[3],value:89});

});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[5],value:20});

result = await instance.withdraw(712934);
});
it('test 47',async() => {
result = await instance.withdraw(340636);
await instance.sendTransaction({from:accounts[3],value:25});

});
it('test 48',async() => {
result = await instance.withdraw(805109);
await instance.sendTransaction({from:accounts[1],value:3});

});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[2],value:86});

result = await instance.withdraw(477477);
});
});
