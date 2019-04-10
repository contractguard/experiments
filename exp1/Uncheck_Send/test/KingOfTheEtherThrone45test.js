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
result = await instance.claimThrone("aITHhogu58M",{from:accounts[71],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(611879);
await instance.sendTransaction({from:accounts[6],value:20});

});
it('test 1',async() => {
result = await instance.sweepCommission(512336);
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[7],value:94});

result = await instance.claimThrone("dNfEuTvJapht5",{from:accounts[30],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[2],value:93});

result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("WQ6ljADaR3dsy",{from:accounts[68],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(548041);
});
it('test 3',async() => {
result = await instance.claimThrone("XyqGiOvc2EI8UlFZPoWm",{from:accounts[67],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(973916);
await instance.sendTransaction({from:accounts[3],value:66});

});
it('test 4',async() => {
result = await instance.sweepCommission(74648);
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[9],value:74});

result = await instance.claimThrone("gevXyfxhVCGznbqJZQa",{from:accounts[98],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 5',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("nQKUcW5lTYru7",{from:accounts[70],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[5],value:32});

result = await instance.sweepCommission(926930);
});
it('test 6',async() => {
result = await instance.claimThrone("3iXPwbp56Uc8hH",{from:accounts[66],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[5],value:66});

result = await instance.sweepCommission(86603);
result = await instance.transferOwnership(accounts[2]);
});
it('test 7',async() => {
result = await instance.claimThrone("qVy08QXvgTUdLcJ",{from:accounts[65],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(855494);
await instance.sendTransaction({from:accounts[8],value:56});

result = await instance.transferOwnership(accounts[2]);
});
it('test 8',async() => {
result = await instance.sweepCommission(398308);
result = await instance.claimThrone("rw6PmTMghB7YEHNlx3J",{from:accounts[10],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[3],value:31});

result = await instance.transferOwnership(accounts[5]);
});
it('test 9',async() => {
result = await instance.sweepCommission(362655);
result = await instance.claimThrone("SiZ6E4VmeD",{from:accounts[17],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[8],value:81});

});
it('test 10',async() => {
result = await instance.sweepCommission(609707);
await instance.sendTransaction({from:accounts[3],value:50});

result = await instance.claimThrone("V25Yg3BF7UHPvoq1TkW",{from:accounts[12],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[3]);
});
it('test 11',async() => {
result = await instance.sweepCommission(548940);
result = await instance.claimThrone("MKH3BFdN4CW9",{from:accounts[62],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[4],value:8});

});
it('test 12',async() => {
result = await instance.sweepCommission(600803);
result = await instance.claimThrone("JR1OajQdGX2cMNTqAtY",{from:accounts[50],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[2],value:48});

result = await instance.transferOwnership(accounts[3]);
});
it('test 13',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(239759);
await instance.sendTransaction({from:accounts[3],value:39});

result = await instance.claimThrone("Fhi9Ktx6RHMV0",{from:accounts[14],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[8],value:31});

result = await instance.sweepCommission(258489);
result = await instance.claimThrone("SUnFpfRZLANDy",{from:accounts[59],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[3]);
});
it('test 15',async() => {
result = await instance.claimThrone("CxFkJ0lnu3eIiQ4Lv9hG",{from:accounts[22],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[9],value:38});

result = await instance.sweepCommission(220383);
});
it('test 16',async() => {
result = await instance.sweepCommission(106389);
await instance.sendTransaction({from:accounts[1],value:54});

result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("zIq12lcMRWLKHEB",{from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 17',async() => {
result = await instance.claimThrone("0yWaNjBOkR5L",{from:accounts[77],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[8],value:32});

result = await instance.sweepCommission(749846);
});
it('test 18',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(385973);
result = await instance.claimThrone("ZQR8CMjH9Dw",{from:accounts[7],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[2],value:42});

});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[8],value:56});

result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(513679);
result = await instance.claimThrone("n5Hv3Y6DjUmRM",{from:accounts[89],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 20',async() => {
result = await instance.claimThrone("VqAcMSxivFs",{from:accounts[39],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(432682);
await instance.sendTransaction({from:accounts[5],value:38});

result = await instance.transferOwnership(accounts[5]);
});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[3],value:29});

result = await instance.sweepCommission(690787);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("1HKMbNZJWl7Uo",{from:accounts[71],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 22',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(203784);
await instance.sendTransaction({from:accounts[2],value:20});

result = await instance.claimThrone("WnDb0jNyhIxr",{from:accounts[81],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[9],value:92});

result = await instance.sweepCommission(484119);
result = await instance.claimThrone("W9o81jXJ7lmFkVUK0",{from:accounts[17],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[0]);
});
it('test 24',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("A6v3onmupZ07Tw",{from:accounts[13],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[9],value:42});

result = await instance.sweepCommission(565127);
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[4],value:53});

result = await instance.claimThrone("Zg3IFUrQezjL0",{from:accounts[58],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(329161);
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[7],value:52});

result = await instance.claimThrone("Ozsx46irBlf5aUSEIt",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(394581);
});
it('test 27',async() => {
result = await instance.claimThrone("PhuSQBLXceIyOxr",{from:accounts[50],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[6],value:90});

result = await instance.sweepCommission(187090);
});
it('test 28',async() => {
result = await instance.claimThrone("BMekO0lzC7GtTuVWwx",{from:accounts[92],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(480681);
await instance.sendTransaction({from:accounts[4],value:89});

result = await instance.transferOwnership(accounts[1]);
});
it('test 29',async() => {
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[4],value:70});

result = await instance.claimThrone("swuejRFno41",{from:accounts[31],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(737182);
});
});
