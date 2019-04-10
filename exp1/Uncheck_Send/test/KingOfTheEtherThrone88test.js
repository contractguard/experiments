const Attack = artifacts.require("Attack");
const KingOfTheEtherThrone = artifacts.require("KingOfTheEtherThrone");
contract('KingOfTheEtherThrone', async (accounts) => {
const owner = accounts[0];
let attack;let instance;
let result;
before('setup contract for each test',async() => {
instance = await KingOfTheEtherThrone.new({from:accounts[0]});
attack = await Attack.new(instance.address,{from:accounts[400]});
});
it('test 0',async() => {
await instance.sendTransaction({from: accounts[0], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[1], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[2], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[3], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[4], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[5], value: web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(797022);
result = await instance.claimThrone("NgPWvDIQM5A",{from:accounts[16],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[2],value:66});

result = await instance.transferOwnership(accounts[1]);
});
it('test 1',async() => {
result = await instance.claimThrone("yZ4YUViozb",{from:accounts[28],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[3],value:75});

result = await instance.sweepCommission(954640);
});
it('test 2',async() => {
result = await instance.claimThrone("sdvNpVQ34o2Iywk8",{from:accounts[29],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[2],value:52});

result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(166934);
});
it('test 3',async() => {
result = await instance.sweepCommission(679115);
await instance.sendTransaction({from:accounts[2],value:62});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("d0jFWYVxQG7TzP",{from:accounts[34],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 4',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("ZKzJeGLCsv4unP8xQIR",{from:accounts[6],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(576802);
await instance.sendTransaction({from:accounts[8],value:74});

});
it('test 5',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(911291);
await instance.sendTransaction({from:accounts[3],value:40});

result = await instance.claimThrone("wVPuv8BYzyUbZA94d2",{from:accounts[25],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 6',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(603503);
await instance.sendTransaction({from:accounts[7],value:8});

result = await instance.claimThrone("1PaUjrt94Ypu7",{from:accounts[98],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 7',async() => {
result = await instance.claimThrone("ok1Y6UPlGaezJW0",{from:accounts[75],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(719457);
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[6],value:94});

});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[1],value:14});

result = await instance.sweepCommission(586945);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("OZnr4lDTag7LCAs5z",{from:accounts[23],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 9',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(795634);
await instance.sendTransaction({from:accounts[9],value:93});

result = await instance.claimThrone("SywiAKM3hEe",{from:accounts[36],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 10',async() => {
result = await instance.sweepCommission(883977);
await instance.sendTransaction({from:accounts[3],value:55});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("A35qCTvwR2rY9HcGhM",{from:accounts[56],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 11',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(227917);
result = await instance.claimThrone("hMqCmZxVYQSbGFzc3X",{from:accounts[27],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[3],value:9});

});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[1],value:45});

result = await instance.sweepCommission(223607);
result = await instance.claimThrone("6ro9bpKvzMNy5k",{from:accounts[88],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[0]);
});
it('test 13',async() => {
result = await instance.sweepCommission(1048177);
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("FcxAylzTXRGu",{from:accounts[77],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[7],value:67});

});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[8],value:40});

result = await instance.sweepCommission(1986);
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("clxJo7k64Ir",{from:accounts[78],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 15',async() => {
result = await instance.claimThrone("fhptuwByWb",{from:accounts[59],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(94103);
await instance.sendTransaction({from:accounts[8],value:68});

});
it('test 16',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("fuYBGrWcQk0eEaCb6lZ",{from:accounts[6],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[2],value:40});

result = await instance.sweepCommission(379853);
});
it('test 17',async() => {
result = await instance.claimThrone("ctPbIxEJ5YQ4d6n7",{from:accounts[67],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(742598);
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[5],value:82});

});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[5],value:39});

result = await instance.sweepCommission(425631);
result = await instance.claimThrone("o4E36IcxefJ0OvWX9t",{from:accounts[64],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[5]);
});
it('test 19',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("QNTAaqw6fY4nyMblPVi",{from:accounts[91],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[4],value:13});

result = await instance.sweepCommission(205390);
});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[5],value:42});

result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("oGa0KEPW6pXmf",{from:accounts[53],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(1042877);
});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[9],value:19});

result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("p6e2CSMixY0woTZF7sq8",{from:accounts[12],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(490331);
});
it('test 22',async() => {
result = await instance.claimThrone("U5mvuIniPgcoLA",{from:accounts[27],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[4],value:43});

result = await instance.sweepCommission(173732);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 23',async() => {
result = await instance.claimThrone("RuQ7PqtAVs4M2j9N",{from:accounts[12],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[4],value:80});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(206282);
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[6],value:66});

result = await instance.claimThrone("mpLR76UZCDnJkzVM2Y",{from:accounts[58],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(657631);
});
it('test 25',async() => {
result = await instance.sweepCommission(472488);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("7DBiloL2fwTA",{from:accounts[28],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[1],value:44});

});
it('test 26',async() => {
result = await instance.sweepCommission(878874);
result = await instance.claimThrone("gKaRfv6nTxLwcB",{from:accounts[48],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[2],value:88});

result = await instance.transferOwnership(accounts[0]);
});
it('test 27',async() => {
result = await instance.claimThrone("WYH9qpxh3d20VJB",{from:accounts[87],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[3],value:9});

result = await instance.sweepCommission(497716);
});
it('test 28',async() => {
result = await instance.claimThrone("ZNWCT9n7KF6Y",{from:accounts[30],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(357990);
await instance.sendTransaction({from:accounts[9],value:13});

result = await instance.transferOwnership(accounts[3]);
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[4],value:9});

result = await instance.sweepCommission(1039233);
result = await instance.claimThrone("Wd8Bx5EqiZD",{from:accounts[28],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[2]);
});
});
