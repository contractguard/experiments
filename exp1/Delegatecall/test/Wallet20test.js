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
result = await instance.withdraw(645673);
await instance.sendTransaction({from:accounts[7],value:15});

});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[6],value:49});

result = await instance.withdraw(1029209);
});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[7],value:92});

result = await instance.withdraw(403925);
});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[8],value:73});

result = await instance.withdraw(694323);
});
it('test 4',async() => {
result = await instance.withdraw(481435);
await instance.sendTransaction({from:accounts[3],value:20});

});
it('test 5',async() => {
result = await instance.withdraw(797325);
await instance.sendTransaction({from:accounts[5],value:10});

});
it('test 6',async() => {
result = await instance.withdraw(643654);
await instance.sendTransaction({from:accounts[8],value:58});

});
it('test 7',async() => {
result = await instance.withdraw(698782);
await instance.sendTransaction({from:accounts[6],value:23});

});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[5],value:87});

result = await instance.withdraw(693006);
});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[7],value:48});

result = await instance.withdraw(438249);
});
it('test 10',async() => {
result = await instance.withdraw(342704);
await instance.sendTransaction({from:accounts[8],value:4});

});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[5],value:77});

result = await instance.withdraw(71776);
});
it('test 12',async() => {
result = await instance.withdraw(833974);
await instance.sendTransaction({from:accounts[5],value:92});

});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[4],value:88});

result = await instance.withdraw(276409);
});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[4],value:59});

result = await instance.withdraw(847205);
});
it('test 15',async() => {
result = await instance.withdraw(277136);
await instance.sendTransaction({from:accounts[8],value:27});

});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[8],value:78});

result = await instance.withdraw(478845);
});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[6],value:68});

result = await instance.withdraw(137554);
});
it('test 18',async() => {
result = await instance.withdraw(992299);
await instance.sendTransaction({from:accounts[5],value:97});

});
it('test 19',async() => {
result = await instance.withdraw(477145);
await instance.sendTransaction({from:accounts[5],value:77});

});
it('test 20',async() => {
result = await instance.withdraw(369010);
await instance.sendTransaction({from:accounts[3],value:68});

});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[6],value:6});

result = await instance.withdraw(396796);
});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[2],value:49});

result = await instance.withdraw(473291);
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[5],value:80});

result = await instance.withdraw(171262);
});
it('test 24',async() => {
result = await instance.withdraw(491853);
await instance.sendTransaction({from:accounts[4],value:100});

});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[5],value:39});

result = await instance.withdraw(224379);
});
it('test 26',async() => {
result = await instance.withdraw(952182);
await instance.sendTransaction({from:accounts[4],value:39});

});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[3],value:96});

result = await instance.withdraw(786547);
});
it('test 28',async() => {
result = await instance.withdraw(471831);
await instance.sendTransaction({from:accounts[7],value:7});

});
it('test 29',async() => {
result = await instance.withdraw(415333);
await instance.sendTransaction({from:accounts[4],value:60});

});
it('test 30',async() => {
result = await instance.withdraw(467965);
await instance.sendTransaction({from:accounts[2],value:94});

});
it('test 31',async() => {
result = await instance.withdraw(600741);
await instance.sendTransaction({from:accounts[6],value:78});

});
it('test 32',async() => {
result = await instance.withdraw(963962);
await instance.sendTransaction({from:accounts[6],value:4});

});
it('test 33',async() => {
result = await instance.withdraw(388268);
await instance.sendTransaction({from:accounts[9],value:29});

});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[7],value:58});

result = await instance.withdraw(724673);
});
it('test 35',async() => {
result = await instance.withdraw(435464);
await instance.sendTransaction({from:accounts[5],value:23});

});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[7],value:36});

result = await instance.withdraw(1018006);
});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[1],value:27});

result = await instance.withdraw(390791);
});
it('test 38',async() => {
result = await instance.withdraw(198801);
await instance.sendTransaction({from:accounts[1],value:84});

});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[3],value:70});

result = await instance.withdraw(1036049);
});
it('test 40',async() => {
result = await instance.withdraw(928956);
await instance.sendTransaction({from:accounts[9],value:70});

});
it('test 41',async() => {
result = await instance.withdraw(438303);
await instance.sendTransaction({from:accounts[9],value:99});

});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[4],value:92});

result = await instance.withdraw(957860);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 43',async() => {
await instance.sendTransaction({from:accounts[2],value:47});

result = await instance.withdraw(744369);
});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[7],value:92});

result = await instance.withdraw(563328);
});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[5],value:15});

result = await instance.withdraw(222391);
});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[2],value:84});

result = await instance.withdraw(762883);
});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[1],value:85});

result = await instance.withdraw(200334);
});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[2],value:4});

result = await instance.withdraw(687287);
});
it('test 49',async() => {
result = await instance.withdraw(424916);
await instance.sendTransaction({from:accounts[3],value:90});

});
});
