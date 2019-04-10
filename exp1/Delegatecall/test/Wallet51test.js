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
result = await instance.withdraw(787027);
await instance.sendTransaction({from:accounts[9],value:99});

});
it('test 1',async() => {
result = await instance.withdraw(595033);
await instance.sendTransaction({from:accounts[1],value:68});

});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[7],value:77});

result = await instance.withdraw(535731);
});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[4],value:51});

result = await instance.withdraw(378626);
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[5],value:12});

result = await instance.withdraw(233803);
});
it('test 5',async() => {
result = await instance.withdraw(351805);
await instance.sendTransaction({from:accounts[3],value:25});

});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[4],value:61});

result = await instance.withdraw(712622);
});
it('test 7',async() => {
result = await instance.withdraw(477472);
await instance.sendTransaction({from:accounts[7],value:57});

});
it('test 8',async() => {
result = await instance.withdraw(22061);
await instance.sendTransaction({from:accounts[6],value:91});

});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[4],value:52});

result = await instance.withdraw(288199);
});
it('test 10',async() => {
result = await instance.withdraw(413718);
await instance.sendTransaction({from:accounts[4],value:76});

});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[9],value:62});

result = await instance.withdraw(495553);
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[5],value:65});

result = await instance.withdraw(139355);
});
it('test 13',async() => {
result = await instance.withdraw(911511);
await instance.sendTransaction({from:accounts[6],value:90});

});
it('test 14',async() => {
result = await instance.withdraw(696909);
await instance.sendTransaction({from:accounts[7],value:31});

});
it('test 15',async() => {
result = await instance.withdraw(279617);
await instance.sendTransaction({from:accounts[4],value:1});

});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[2],value:79});

result = await instance.withdraw(772863);
});
it('test 17',async() => {
result = await instance.withdraw(532352);
await instance.sendTransaction({from:accounts[4],value:74});

});
it('test 18',async() => {
result = await instance.withdraw(215561);
await instance.sendTransaction({from:accounts[7],value:98});

});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[4],value:63});

result = await instance.withdraw(19625);
});
it('test 20',async() => {
result = await instance.withdraw(980401);
await instance.sendTransaction({from:accounts[5],value:23});

});
it('test 21',async() => {
result = await instance.withdraw(375459);
await instance.sendTransaction({from:accounts[3],value:87});

});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[3],value:86});

result = await instance.withdraw(772671);
});
it('test 23',async() => {
result = await instance.withdraw(531582);
await instance.sendTransaction({from:accounts[7],value:50});

});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[6],value:71});

result = await instance.withdraw(97157);
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[4],value:2});

result = await instance.withdraw(717656);
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[4],value:86});

result = await instance.withdraw(678813);
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[2],value:12});

result = await instance.withdraw(487677);
});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[5],value:26});

result = await instance.withdraw(1040017);
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[8],value:94});

result = await instance.withdraw(217582);
});
it('test 30',async() => {
result = await instance.withdraw(43938);
await instance.sendTransaction({from:accounts[1],value:44});

});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[8],value:60});

result = await instance.withdraw(134081);
});
it('test 32',async() => {
result = await instance.withdraw(836474);
await instance.sendTransaction({from:accounts[7],value:21});

});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[2],value:88});

result = await instance.withdraw(480396);
});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[8],value:33});

result = await instance.withdraw(648688);
});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[5],value:45});

result = await instance.withdraw(749033);
});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[6],value:4});

result = await instance.withdraw(448772);
});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[5],value:41});

result = await instance.withdraw(173567);
});
it('test 38',async() => {
result = await instance.withdraw(275130);
await instance.sendTransaction({from:accounts[7],value:20});

});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[6],value:50});

result = await instance.withdraw(744698);
});
it('test 40',async() => {
await instance.sendTransaction({from:accounts[9],value:44});

result = await instance.withdraw(172188);
});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[9],value:43});

result = await instance.withdraw(832259);
});
it('test 42',async() => {
result = await instance.withdraw(418488);
await instance.sendTransaction({from:accounts[9],value:10});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 43',async() => {
result = await instance.withdraw(64594);
await instance.sendTransaction({from:accounts[3],value:18});

});
it('test 44',async() => {
result = await instance.withdraw(17408);
await instance.sendTransaction({from:accounts[3],value:98});

});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[2],value:30});

result = await instance.withdraw(558461);
});
it('test 46',async() => {
result = await instance.withdraw(268049);
await instance.sendTransaction({from:accounts[4],value:22});

});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[3],value:79});

result = await instance.withdraw(765571);
});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[2],value:13});

result = await instance.withdraw(653404);
});
it('test 49',async() => {
result = await instance.withdraw(367326);
await instance.sendTransaction({from:accounts[3],value:67});

});
});
