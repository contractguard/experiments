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
result = await instance.sweepCommission(713237);
await instance.sendTransaction({from:accounts[5],value:36});

result = await instance.claimThrone("s8fICbEaxp",{from:accounts[83],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[3]);
});
it('test 1',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(684954);
result = await instance.claimThrone("PqmrkWgU4AZadpBvF",{from:accounts[50],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[4],value:40});

});
it('test 2',async() => {
result = await instance.claimThrone("Nh7ijEJy8abzpY53L9",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[1],value:50});

result = await instance.sweepCommission(221587);
result = await instance.transferOwnership(accounts[4]);
});
it('test 3',async() => {
result = await instance.claimThrone("ZIyYj13Bi7mxENH",{from:accounts[91],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(656606);
await instance.sendTransaction({from:accounts[3],value:82});

});
it('test 4',async() => {
result = await instance.claimThrone("pgDLNvBeGaZ1r",{from:accounts[12],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(665017);
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[4],value:37});

});
it('test 5',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[8],value:62});

result = await instance.sweepCommission(472766);
result = await instance.claimThrone("82ycLoKtwQDdTJiAl",{from:accounts[27],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 6',async() => {
result = await instance.claimThrone("mhQGIWO3eFMc",{from:accounts[7],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[1],value:31});

result = await instance.sweepCommission(72590);
result = await instance.transferOwnership(accounts[2]);
});
it('test 7',async() => {
result = await instance.sweepCommission(613016);
result = await instance.claimThrone("sljFCU1utW",{from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[5],value:17});

result = await instance.transferOwnership(accounts[0]);
});
it('test 8',async() => {
result = await instance.claimThrone("1hyeIu6UociQNRwfnKz",{from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(526768);
await instance.sendTransaction({from:accounts[4],value:65});

});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[5],value:24});

result = await instance.claimThrone("QDStIoMxwzG0f4kLb9h",{from:accounts[17],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(549035);
result = await instance.transferOwnership(accounts[4]);
});
it('test 10',async() => {
result = await instance.sweepCommission(647514);
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[8],value:78});

result = await instance.claimThrone("QNt7cXgGpzk",{from:accounts[84],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 11',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(350190);
result = await instance.claimThrone("4LNjsUaPJ8bXEAudien",{from:accounts[80],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[1],value:37});

});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[8],value:46});

result = await instance.sweepCommission(222326);
result = await instance.claimThrone("NfqY1BoimzuS0t",{from:accounts[90],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[5]);
});
it('test 13',async() => {
result = await instance.sweepCommission(251675);
result = await instance.claimThrone("zOkoLCI9Um8xeMaPt",{from:accounts[66],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[6],value:25});

});
it('test 14',async() => {
result = await instance.claimThrone("wi7DRsva4L",{from:accounts[38],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(406613);
await instance.sendTransaction({from:accounts[9],value:47});

result = await instance.transferOwnership(accounts[3]);
});
it('test 15',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(719914);
result = await instance.claimThrone("Y5Bzko94f17",{from:accounts[55],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[6],value:68});

});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[7],value:58});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("TlnGwQWjE4eN",{from:accounts[18],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(588727);
});
it('test 17',async() => {
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[4],value:17});

result = await instance.sweepCommission(349977);
result = await instance.claimThrone("PZWRmlNfq0IT",{from:accounts[46],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 18',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[5],value:96});

result = await instance.claimThrone("8HLCDltVJv6P27g",{from:accounts[37],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(904436);
});
it('test 19',async() => {
result = await instance.sweepCommission(193116);
await instance.sendTransaction({from:accounts[3],value:66});

result = await instance.claimThrone("jopLAtmM6w9eEsF7TG",{from:accounts[48],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[5]);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[4],value:24});

result = await instance.claimThrone("aYIZSFywJBz14Lqflb",{from:accounts[42],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(483528);
});
it('test 21',async() => {
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[8],value:32});

result = await instance.claimThrone("UXei9Bz08ta64HI",{from:accounts[23],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(228854);
});
it('test 22',async() => {
result = await instance.sweepCommission(24820);
await instance.sendTransaction({from:accounts[5],value:67});

result = await instance.claimThrone("ij2upYJBlx",{from:accounts[73],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[3]);
});
it('test 23',async() => {
result = await instance.claimThrone("qnuxcBEeYJ7wAmzkrt",{from:accounts[44],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[6],value:72});

result = await instance.sweepCommission(559724);
});
it('test 24',async() => {
result = await instance.sweepCommission(51658);
await instance.sendTransaction({from:accounts[3],value:34});

result = await instance.claimThrone("zW6pZi48ubmhHA",{from:accounts[64],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[8],value:65});

result = await instance.sweepCommission(951128);
result = await instance.claimThrone("DO57kLMPGBxyd",{from:accounts[92],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[0]);
});
it('test 26',async() => {
result = await instance.sweepCommission(97137);
result = await instance.claimThrone("3jqvr6Rb8h",{from:accounts[77],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[1],value:1});

});
it('test 27',async() => {
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[9],value:64});

result = await instance.sweepCommission(371715);
result = await instance.claimThrone("a4q67CMNDfU",{from:accounts[14],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 28',async() => {
result = await instance.sweepCommission(206490);
await instance.sendTransaction({from:accounts[3],value:28});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("yvmJus6LO4GNkjeIKbSc",{from:accounts[48],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[6],value:23});

result = await instance.claimThrone("uMnKrIGSLJ8VoAZ",{from:accounts[47],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(493489);
});
});
