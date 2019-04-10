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
result = await instance.withdraw(474543);
await instance.sendTransaction({from:accounts[1],value:81});

});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[9],value:83});

result = await instance.withdraw(710887);
});
it('test 2',async() => {
result = await instance.withdraw(801413);
await instance.sendTransaction({from:accounts[6],value:59});

});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[7],value:9});

result = await instance.withdraw(410307);
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[9],value:15});

result = await instance.withdraw(736811);
});
it('test 5',async() => {
result = await instance.withdraw(241893);
await instance.sendTransaction({from:accounts[6],value:49});

});
it('test 6',async() => {
result = await instance.withdraw(300675);
await instance.sendTransaction({from:accounts[1],value:37});

});
it('test 7',async() => {
result = await instance.withdraw(73686);
await instance.sendTransaction({from:accounts[7],value:9});

});
it('test 8',async() => {
result = await instance.withdraw(794336);
await instance.sendTransaction({from:accounts[9],value:69});

});
it('test 9',async() => {
result = await instance.withdraw(557703);
await instance.sendTransaction({from:accounts[3],value:49});

});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[3],value:34});

result = await instance.withdraw(819057);
});
it('test 11',async() => {
result = await instance.withdraw(182296);
await instance.sendTransaction({from:accounts[2],value:65});

});
it('test 12',async() => {
result = await instance.withdraw(913580);
await instance.sendTransaction({from:accounts[5],value:50});

});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[4],value:87});

result = await instance.withdraw(29682);
});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[5],value:56});

result = await instance.withdraw(291875);
});
it('test 15',async() => {
result = await instance.withdraw(297034);
await instance.sendTransaction({from:accounts[4],value:79});

});
it('test 16',async() => {
result = await instance.withdraw(102193);
await instance.sendTransaction({from:accounts[1],value:17});

});
it('test 17',async() => {
result = await instance.withdraw(706353);
await instance.sendTransaction({from:accounts[3],value:20});

});
it('test 18',async() => {
result = await instance.withdraw(394841);
await instance.sendTransaction({from:accounts[3],value:25});

});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[7],value:65});

result = await instance.withdraw(992224);
});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[4],value:86});

result = await instance.withdraw(574206);
});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[1],value:16});

result = await instance.withdraw(445454);
});
it('test 22',async() => {
result = await instance.withdraw(964165);
await instance.sendTransaction({from:accounts[3],value:50});

});
it('test 23',async() => {
result = await instance.withdraw(155380);
await instance.sendTransaction({from:accounts[8],value:7});

});
it('test 24',async() => {
result = await instance.withdraw(288605);
await instance.sendTransaction({from:accounts[4],value:57});

});
it('test 25',async() => {
result = await instance.withdraw(860676);
await instance.sendTransaction({from:accounts[3],value:85});

});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[1],value:59});

result = await instance.withdraw(433131);
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[8],value:41});

result = await instance.withdraw(551360);
});
it('test 28',async() => {
result = await instance.withdraw(305675);
await instance.sendTransaction({from:accounts[8],value:62});

});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[3],value:20});

result = await instance.withdraw(80922);
});
it('test 30',async() => {
result = await instance.withdraw(510507);
await instance.sendTransaction({from:accounts[2],value:2});

});
it('test 31',async() => {
result = await instance.withdraw(191272);
await instance.sendTransaction({from:accounts[4],value:75});

});
it('test 32',async() => {
result = await instance.withdraw(115752);
await instance.sendTransaction({from:accounts[8],value:18});

});
it('test 33',async() => {
result = await instance.withdraw(395152);
await instance.sendTransaction({from:accounts[4],value:72});

});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[5],value:64});

result = await instance.withdraw(841856);
});
it('test 35',async() => {
result = await instance.withdraw(800602);
await instance.sendTransaction({from:accounts[5],value:68});

});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[9],value:99});

result = await instance.withdraw(504164);
});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[9],value:2});

result = await instance.withdraw(14611);
});
it('test 38',async() => {
result = await instance.withdraw(471230);
await instance.sendTransaction({from:accounts[4],value:85});

});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[1],value:77});

result = await instance.withdraw(748107);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 40',async() => {
result = await instance.withdraw(276148);
await instance.sendTransaction({from:accounts[5],value:73});

});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[3],value:52});

result = await instance.withdraw(423188);
});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[5],value:2});

result = await instance.withdraw(527700);
});
it('test 43',async() => {
await instance.sendTransaction({from:accounts[6],value:15});

result = await instance.withdraw(250063);
});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[4],value:8});

result = await instance.withdraw(272802);
});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[8],value:50});

result = await instance.withdraw(3076);
});
it('test 46',async() => {
result = await instance.withdraw(864705);
await instance.sendTransaction({from:accounts[4],value:51});

});
it('test 47',async() => {
result = await instance.withdraw(924340);
await instance.sendTransaction({from:accounts[3],value:8});

});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[3],value:53});

result = await instance.withdraw(145740);
});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[8],value:83});

result = await instance.withdraw(497824);
});
});
