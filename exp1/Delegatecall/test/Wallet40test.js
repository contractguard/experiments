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
result = await instance.withdraw(959214);
await instance.sendTransaction({from:accounts[2],value:32});

});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[2],value:90});

result = await instance.withdraw(562619);
});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[4],value:61});

result = await instance.withdraw(376997);
});
it('test 3',async() => {
result = await instance.withdraw(833669);
await instance.sendTransaction({from:accounts[2],value:14});

});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[6],value:82});

result = await instance.withdraw(876669);
});
it('test 5',async() => {
result = await instance.withdraw(810482);
await instance.sendTransaction({from:accounts[3],value:56});

});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[8],value:47});

result = await instance.withdraw(437055);
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[7],value:34});

result = await instance.withdraw(983584);
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[4],value:6});

result = await instance.withdraw(810618);
});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[9],value:64});

result = await instance.withdraw(747368);
});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[2],value:61});

result = await instance.withdraw(367700);
});
it('test 11',async() => {
result = await instance.withdraw(31007);
await instance.sendTransaction({from:accounts[7],value:50});

});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[5],value:36});

result = await instance.withdraw(442298);
});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[2],value:79});

result = await instance.withdraw(809638);
});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[8],value:21});

result = await instance.withdraw(555384);
});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[1],value:2});

result = await instance.withdraw(446347);
});
it('test 16',async() => {
result = await instance.withdraw(587609);
await instance.sendTransaction({from:accounts[5],value:79});

});
it('test 17',async() => {
result = await instance.withdraw(239768);
await instance.sendTransaction({from:accounts[9],value:21});

});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[3],value:5});

result = await instance.withdraw(349277);
});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[5],value:43});

result = await instance.withdraw(551225);
});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[5],value:38});

result = await instance.withdraw(1004126);
});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[3],value:5});

result = await instance.withdraw(649835);
});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[9],value:57});

result = await instance.withdraw(54610);
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[4],value:15});

result = await instance.withdraw(454323);
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[4],value:64});

result = await instance.withdraw(357889);
});
it('test 25',async() => {
result = await instance.withdraw(680165);
await instance.sendTransaction({from:accounts[5],value:1});

});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[1],value:6});

result = await instance.withdraw(607038);
});
it('test 27',async() => {
result = await instance.withdraw(800676);
await instance.sendTransaction({from:accounts[4],value:52});

});
it('test 28',async() => {
result = await instance.withdraw(640303);
await instance.sendTransaction({from:accounts[9],value:70});

});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[6],value:95});

result = await instance.withdraw(40743);
});
it('test 30',async() => {
result = await instance.withdraw(945647);
await instance.sendTransaction({from:accounts[1],value:78});

});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[2],value:66});

result = await instance.withdraw(668655);
});
it('test 32',async() => {
result = await instance.withdraw(651731);
await instance.sendTransaction({from:accounts[5],value:25});

});
it('test 33',async() => {
result = await instance.withdraw(593872);
await instance.sendTransaction({from:accounts[4],value:66});

});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[5],value:62});

result = await instance.withdraw(399256);
});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[6],value:17});

result = await instance.withdraw(180477);
});
it('test 36',async() => {
result = await instance.withdraw(618791);
await instance.sendTransaction({from:accounts[2],value:24});

});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[4],value:39});

result = await instance.withdraw(282219);
});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[9],value:92});

result = await instance.withdraw(369845);
});
it('test 39',async() => {
result = await instance.withdraw(657755);
await instance.sendTransaction({from:accounts[9],value:76});

});
it('test 40',async() => {
await instance.sendTransaction({from:accounts[5],value:31});

result = await instance.withdraw(847231);
});
it('test 41',async() => {
result = await instance.withdraw(591281);
await instance.sendTransaction({from:accounts[6],value:25});

});
it('test 42',async() => {
result = await instance.withdraw(390540);
await instance.sendTransaction({from:accounts[6],value:74});

});
it('test 43',async() => {
await instance.sendTransaction({from:accounts[1],value:86});

result = await instance.withdraw(464258);
});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 44',async() => {
await instance.sendTransaction({from:accounts[3],value:4});

result = await instance.withdraw(500965);
});
it('test 45',async() => {
result = await instance.withdraw(959241);
await instance.sendTransaction({from:accounts[4],value:42});

});
it('test 46',async() => {
result = await instance.withdraw(161286);
await instance.sendTransaction({from:accounts[5],value:40});

});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[4],value:77});

result = await instance.withdraw(787922);
});
it('test 48',async() => {
result = await instance.withdraw(726083);
await instance.sendTransaction({from:accounts[9],value:60});

});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[8],value:27});

result = await instance.withdraw(713394);
});
});
