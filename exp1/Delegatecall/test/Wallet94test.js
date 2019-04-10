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
await instance.sendTransaction({from:accounts[5],value:67});

result = await instance.withdraw(175483);
});
it('test 1',async() => {
result = await instance.withdraw(343581);
await instance.sendTransaction({from:accounts[2],value:97});

});
it('test 2',async() => {
result = await instance.withdraw(507252);
await instance.sendTransaction({from:accounts[9],value:6});

});
it('test 3',async() => {
result = await instance.withdraw(437280);
await instance.sendTransaction({from:accounts[8],value:18});

});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[1],value:59});

result = await instance.withdraw(557025);
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[9],value:7});

result = await instance.withdraw(136575);
});
it('test 6',async() => {
result = await instance.withdraw(116490);
await instance.sendTransaction({from:accounts[4],value:16});

});
it('test 7',async() => {
result = await instance.withdraw(7729);
await instance.sendTransaction({from:accounts[2],value:51});

});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[6],value:95});

result = await instance.withdraw(492725);
});
it('test 9',async() => {
result = await instance.withdraw(173528);
await instance.sendTransaction({from:accounts[8],value:70});

});
it('test 10',async() => {
result = await instance.withdraw(429181);
await instance.sendTransaction({from:accounts[6],value:81});

});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[7],value:69});

result = await instance.withdraw(436418);
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[4],value:90});

result = await instance.withdraw(623895);
});
it('test 13',async() => {
result = await instance.withdraw(234317);
await instance.sendTransaction({from:accounts[7],value:17});

});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[4],value:59});

result = await instance.withdraw(669076);
});
it('test 15',async() => {
result = await instance.withdraw(1014554);
await instance.sendTransaction({from:accounts[1],value:17});

});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[1],value:66});

result = await instance.withdraw(709231);
});
it('test 17',async() => {
result = await instance.withdraw(166525);
await instance.sendTransaction({from:accounts[4],value:77});

});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[5],value:91});

result = await instance.withdraw(805953);
});
it('test 19',async() => {
result = await instance.withdraw(115840);
await instance.sendTransaction({from:accounts[6],value:31});

});
it('test 20',async() => {
result = await instance.withdraw(618673);
await instance.sendTransaction({from:accounts[3],value:5});

});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[3],value:87});

result = await instance.withdraw(892515);
});
it('test 22',async() => {
result = await instance.withdraw(1032922);
await instance.sendTransaction({from:accounts[1],value:21});

});
it('test 23',async() => {
result = await instance.withdraw(373616);
await instance.sendTransaction({from:accounts[2],value:53});

});
it('test 24',async() => {
result = await instance.withdraw(728316);
await instance.sendTransaction({from:accounts[1],value:23});

});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[3],value:100});

result = await instance.withdraw(903310);
});
it('test 26',async() => {
result = await instance.withdraw(655128);
await instance.sendTransaction({from:accounts[9],value:70});

});
it('test 27',async() => {
result = await instance.withdraw(367173);
await instance.sendTransaction({from:accounts[8],value:3});

});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[9],value:39});

result = await instance.withdraw(172540);
});
it('test 29',async() => {
result = await instance.withdraw(779049);
await instance.sendTransaction({from:accounts[2],value:5});

});
it('test 30',async() => {
result = await instance.withdraw(879247);
await instance.sendTransaction({from:accounts[4],value:38});

});
it('test 31',async() => {
result = await instance.withdraw(517418);
await instance.sendTransaction({from:accounts[1],value:57});

});
it('test 32',async() => {
result = await instance.withdraw(259042);
await instance.sendTransaction({from:accounts[5],value:93});

});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[2],value:28});

result = await instance.withdraw(122504);
});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[9],value:23});

result = await instance.withdraw(595006);
});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[3],value:55});

result = await instance.withdraw(1004794);
});
it('test 36',async() => {
result = await instance.withdraw(887811);
await instance.sendTransaction({from:accounts[8],value:45});

});
it('test 37',async() => {
result = await instance.withdraw(805811);
await instance.sendTransaction({from:accounts[2],value:99});

});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[1],value:59});

result = await instance.withdraw(64215);
});
it('test 39',async() => {
result = await instance.withdraw(247341);
await instance.sendTransaction({from:accounts[5],value:79});

});
it('test 40',async() => {
result = await instance.withdraw(845950);
await instance.sendTransaction({from:accounts[4],value:10});

});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[2],value:54});

result = await instance.withdraw(212735);
});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[8],value:4});

result = await instance.withdraw(754527);
});
it('test 43',async() => {
result = await instance.withdraw(579546);
await instance.sendTransaction({from:accounts[5],value:78});

});
it('test 44',async() => {
result = await instance.withdraw(317816);
await instance.sendTransaction({from:accounts[3],value:8});

});
it('acctack', async() => {
 await attack.sendTransaction({from:accounts[99]}); 
 });
it('test 45',async() => {
result = await instance.withdraw(515590);
await instance.sendTransaction({from:accounts[2],value:91});

});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[9],value:90});

result = await instance.withdraw(338408);
});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[6],value:68});

result = await instance.withdraw(35957);
});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[5],value:19});

result = await instance.withdraw(19892);
});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[6],value:23});

result = await instance.withdraw(345700);
});
});
