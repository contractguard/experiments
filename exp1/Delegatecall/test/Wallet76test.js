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
await instance.sendTransaction({from:accounts[6],value:99});

result = await instance.withdraw(45335);
});
it('test 1',async() => {
result = await instance.withdraw(980226);
await instance.sendTransaction({from:accounts[4],value:51});

});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[9],value:99});

result = await instance.withdraw(319071);
});
it('test 3',async() => {
result = await instance.withdraw(88318);
await instance.sendTransaction({from:accounts[8],value:6});

});
it('test 4',async() => {
result = await instance.withdraw(394518);
await instance.sendTransaction({from:accounts[6],value:100});

});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[7],value:54});

result = await instance.withdraw(615534);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[8],value:68});

result = await instance.withdraw(990678);
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[2],value:46});

result = await instance.withdraw(776869);
});
it('test 8',async() => {
result = await instance.withdraw(340834);
await instance.sendTransaction({from:accounts[1],value:49});

});
it('test 9',async() => {
result = await instance.withdraw(866378);
await instance.sendTransaction({from:accounts[3],value:13});

});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[5],value:57});

result = await instance.withdraw(343477);
});
it('test 11',async() => {
result = await instance.withdraw(997972);
await instance.sendTransaction({from:accounts[4],value:31});

});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[6],value:47});

result = await instance.withdraw(730544);
});
it('test 13',async() => {
result = await instance.withdraw(802239);
await instance.sendTransaction({from:accounts[7],value:9});

});
it('test 14',async() => {
result = await instance.withdraw(988224);
await instance.sendTransaction({from:accounts[9],value:38});

});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[5],value:16});

result = await instance.withdraw(654304);
});
it('test 16',async() => {
result = await instance.withdraw(427078);
await instance.sendTransaction({from:accounts[3],value:40});

});
it('test 17',async() => {
result = await instance.withdraw(289421);
await instance.sendTransaction({from:accounts[2],value:42});

});
it('test 18',async() => {
result = await instance.withdraw(721267);
await instance.sendTransaction({from:accounts[9],value:82});

});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[9],value:11});

result = await instance.withdraw(29941);
});
it('test 20',async() => {
result = await instance.withdraw(855855);
await instance.sendTransaction({from:accounts[8],value:28});

});
it('test 21',async() => {
result = await instance.withdraw(611490);
await instance.sendTransaction({from:accounts[8],value:24});

});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[1],value:43});

result = await instance.withdraw(385231);
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[5],value:76});

result = await instance.withdraw(1040227);
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[9],value:49});

result = await instance.withdraw(292519);
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[3],value:66});

result = await instance.withdraw(849521);
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[8],value:96});

result = await instance.withdraw(617330);
});
it('test 27',async() => {
result = await instance.withdraw(672301);
await instance.sendTransaction({from:accounts[4],value:8});

});
it('test 28',async() => {
result = await instance.withdraw(242922);
await instance.sendTransaction({from:accounts[7],value:97});

});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[3],value:58});

result = await instance.withdraw(362999);
});
it('test 30',async() => {
result = await instance.withdraw(240659);
await instance.sendTransaction({from:accounts[3],value:99});

});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[1],value:25});

result = await instance.withdraw(411426);
});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[2],value:78});

result = await instance.withdraw(882313);
});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[4],value:44});

result = await instance.withdraw(810954);
});
it('test 34',async() => {
result = await instance.withdraw(643938);
await instance.sendTransaction({from:accounts[9],value:15});

});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[1],value:55});

result = await instance.withdraw(296539);
});
it('test 36',async() => {
result = await instance.withdraw(936937);
await instance.sendTransaction({from:accounts[4],value:21});

});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[4],value:15});

result = await instance.withdraw(71308);
});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[7],value:86});

result = await instance.withdraw(275416);
});
it('test 39',async() => {
result = await instance.withdraw(401598);
await instance.sendTransaction({from:accounts[5],value:33});

});
it('test 40',async() => {
result = await instance.withdraw(749220);
await instance.sendTransaction({from:accounts[2],value:100});

});
it('test 41',async() => {
result = await instance.withdraw(1033951);
await instance.sendTransaction({from:accounts[8],value:74});

});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[8],value:19});

result = await instance.withdraw(398674);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 43',async() => {
result = await instance.withdraw(191326);
await instance.sendTransaction({from:accounts[6],value:40});

});
it('test 44',async() => {
result = await instance.withdraw(289134);
await instance.sendTransaction({from:accounts[4],value:33});

});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[3],value:76});

result = await instance.withdraw(166130);
});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[9],value:31});

result = await instance.withdraw(682437);
});
it('test 47',async() => {
result = await instance.withdraw(988495);
await instance.sendTransaction({from:accounts[4],value:54});

});
it('test 48',async() => {
result = await instance.withdraw(960506);
await instance.sendTransaction({from:accounts[9],value:43});

});
it('test 49',async() => {
result = await instance.withdraw(935627);
await instance.sendTransaction({from:accounts[1],value:10});

});
});
