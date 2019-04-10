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
result = await instance.claimThrone("TJ1MsAhFSKkQD5R6Oubm",{from:accounts[18],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(1026574);
await instance.sendTransaction({from:accounts[7],value:85});

});
it('test 1',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[6],value:19});

result = await instance.claimThrone("cpsDP5LMid2H6zGr8QNk",{from:accounts[93],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(741624);
});
it('test 2',async() => {
result = await instance.claimThrone("i5wRGDqPEK3v",{from:accounts[94],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[6],value:99});

result = await instance.sweepCommission(828363);
result = await instance.transferOwnership(accounts[1]);
});
it('test 3',async() => {
result = await instance.sweepCommission(517789);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("Pv4Tm15liU",{from:accounts[57],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[7],value:43});

});
it('test 4',async() => {
result = await instance.claimThrone("D2uzspv6qtOE",{from:accounts[27],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(538560);
await instance.sendTransaction({from:accounts[9],value:72});

});
it('test 5',async() => {
result = await instance.claimThrone("pDK6NuieYZ7",{from:accounts[21],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[3],value:10});

result = await instance.sweepCommission(869887);
});
it('test 6',async() => {
result = await instance.claimThrone("5Hv6IeaTdXPGU82fcJV",{from:accounts[37],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(309675);
await instance.sendTransaction({from:accounts[1],value:51});

result = await instance.transferOwnership(accounts[3]);
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[4],value:70});

result = await instance.sweepCommission(502398);
result = await instance.claimThrone("oHVf8YZTAEb",{from:accounts[31],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[3]);
});
it('test 8',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(486050);
await instance.sendTransaction({from:accounts[1],value:66});

result = await instance.claimThrone("l8x9AfsVk1",{from:accounts[10],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[6],value:76});

result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("WLesFi6ZBan",{from:accounts[67],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(359079);
});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[2],value:53});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("ED3G9SVoq5r0maC",{from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(912772);
});
it('test 11',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(352048);
result = await instance.claimThrone("X6d3mHJSptTRL",{from:accounts[96],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[4],value:55});

});
it('test 12',async() => {
result = await instance.sweepCommission(329543);
result = await instance.claimThrone("sOFby7tBgoSN4rYhD",{from:accounts[76],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[4],value:12});

result = await instance.transferOwnership(accounts[0]);
});
it('test 13',async() => {
result = await instance.sweepCommission(857569);
await instance.sendTransaction({from:accounts[4],value:62});

result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("oi1hRF3TXNu",{from:accounts[92],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 14',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(73141);
await instance.sendTransaction({from:accounts[3],value:26});

result = await instance.claimThrone("zCrBqVkJYL5iEGI",{from:accounts[23],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 15',async() => {
result = await instance.claimThrone("BlrHLTnbc9WefUi",{from:accounts[10],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[6],value:10});

result = await instance.sweepCommission(687612);
});
it('test 16',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("cbry59IRlpjODBQCV7Ez",{from:accounts[92],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[7],value:68});

result = await instance.sweepCommission(135733);
});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[8],value:13});

result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(303022);
result = await instance.claimThrone("QhgbC2U3W7LTBsc",{from:accounts[9],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 18',async() => {
result = await instance.claimThrone("URagVfX9CDZqhNW",{from:accounts[94],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[3],value:12});

result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(870732);
});
it('test 19',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(616574);
await instance.sendTransaction({from:accounts[5],value:33});

result = await instance.claimThrone("TZxOWJultcB1",{from:accounts[17],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 20',async() => {
result = await instance.claimThrone("cfTv0ZV1theJ9HxboSuA",{from:accounts[69],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[9],value:9});

result = await instance.sweepCommission(543268);
});
it('test 21',async() => {
result = await instance.sweepCommission(394197);
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[7],value:71});

result = await instance.claimThrone("7zuyOiALp1xQ28",{from:accounts[13],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 22',async() => {
result = await instance.sweepCommission(455910);
await instance.sendTransaction({from:accounts[4],value:1});

result = await instance.claimThrone("35emqURs6P",{from:accounts[18],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[3]);
});
it('test 23',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(476715);
result = await instance.claimThrone("3xILeBajrYzv2Kn7",{from:accounts[59],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[5],value:46});

});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[4],value:20});

result = await instance.sweepCommission(45676);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("nky9qivjtGSpPADsd",{from:accounts[18],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 25',async() => {
result = await instance.sweepCommission(1005520);
result = await instance.claimThrone("BX3ZGwjlLJ1Mv",{from:accounts[82],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[5],value:79});

});
it('test 26',async() => {
result = await instance.claimThrone("6TM0f7rmbDpHoFSVxLAl",{from:accounts[85],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(124600);
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[7],value:15});

});
it('test 27',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[8],value:91});

result = await instance.sweepCommission(386406);
result = await instance.claimThrone("GrP5Nbu8hV",{from:accounts[60],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 28',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[2],value:5});

result = await instance.sweepCommission(416763);
result = await instance.claimThrone("GAoS59cEOe4zhiDjT",{from:accounts[46],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[1],value:50});

result = await instance.claimThrone("cqPDwO9NtLJnA5",{from:accounts[73],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(652963);
});
});
