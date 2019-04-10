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
result = await instance.sweepCommission(382400);
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[6],value:69});

result = await instance.claimThrone("luqEOamIx5YKiMNPQh",{from:accounts[42],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 1',async() => {
result = await instance.claimThrone("jbXTEwLF10",{from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(913673);
await instance.sendTransaction({from:accounts[9],value:98});

result = await instance.transferOwnership(accounts[3]);
});
it('test 2',async() => {
result = await instance.sweepCommission(1020522);
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[3],value:74});

result = await instance.claimThrone("f7wNK3pydh",{from:accounts[86],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[5],value:90});

result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(20460);
result = await instance.claimThrone("WyBegPLFvIf5bo28wDX",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[3],value:79});

result = await instance.claimThrone("lNOCcLJnkM841YTR3uq",{from:accounts[55],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(30470);
});
it('test 5',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[5],value:40});

result = await instance.claimThrone("elSnJoK7AfZqDu4",{from:accounts[100],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(75384);
});
it('test 6',async() => {
result = await instance.claimThrone("0s4n7EiNDBrq",{from:accounts[27],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(760520);
await instance.sendTransaction({from:accounts[6],value:60});

result = await instance.transferOwnership(accounts[4]);
});
it('test 7',async() => {
result = await instance.sweepCommission(362001);
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[5],value:80});

result = await instance.claimThrone("3tIEsJo6HjM1rFeA",{from:accounts[61],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 8',async() => {
result = await instance.claimThrone("SHMihaCz4Udf3J7",{from:accounts[87],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(904312);
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[9],value:96});

});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[2],value:4});

result = await instance.claimThrone("ge82PxY7FKjDBCath",{from:accounts[91],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(633491);
});
it('test 10',async() => {
result = await instance.claimThrone("poPLIxwzKSMqGYEU",{from:accounts[26],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[4],value:41});

result = await instance.sweepCommission(817379);
result = await instance.transferOwnership(accounts[5]);
});
it('test 11',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("796UYoA4RwLnJfFXdE",{from:accounts[68],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(327713);
await instance.sendTransaction({from:accounts[3],value:95});

});
it('test 12',async() => {
result = await instance.claimThrone("S7xnTDbrXYPgytRwfvH5",{from:accounts[18],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(429084);
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[9],value:69});

});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[7],value:88});

result = await instance.sweepCommission(748335);
result = await instance.claimThrone("4BTCvudVDhMgmEP",{from:accounts[53],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[1]);
});
it('test 14',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(965467);
await instance.sendTransaction({from:accounts[9],value:19});

result = await instance.claimThrone("SZjL9OvE2C",{from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 15',async() => {
result = await instance.sweepCommission(82493);
await instance.sendTransaction({from:accounts[1],value:1});

result = await instance.claimThrone("kRMQXIpnL2V34qOU",{from:accounts[92],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[1]);
});
it('test 16',async() => {
result = await instance.sweepCommission(87933);
result = await instance.claimThrone("hTUrxNgkpaH4qE",{from:accounts[89],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[3],value:10});

result = await instance.transferOwnership(accounts[4]);
});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[8],value:72});

result = await instance.claimThrone("HEfRaerKiLyzqTM2jo",{from:accounts[73],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(222020);
});
it('test 18',async() => {
result = await instance.sweepCommission(478819);
await instance.sendTransaction({from:accounts[5],value:53});

result = await instance.claimThrone("OyX390F5Ijk",{from:accounts[50],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[5]);
});
it('test 19',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("Kun63YopZ5ljr",{from:accounts[53],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[8],value:57});

result = await instance.sweepCommission(499338);
});
it('test 20',async() => {
result = await instance.sweepCommission(494350);
result = await instance.claimThrone("8H2dsFhSVeC3J4BZ9nNA",{from:accounts[51],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[8],value:36});

});
it('test 21',async() => {
result = await instance.sweepCommission(549843);
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[6],value:49});

result = await instance.claimThrone("o7rbupql5FX2BNmw",{from:accounts[68],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 22',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(356292);
await instance.sendTransaction({from:accounts[9],value:84});

result = await instance.claimThrone("kS216CjyIAc",{from:accounts[43],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[7],value:72});

result = await instance.sweepCommission(4757);
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("mG93ZjU2vyFJ",{from:accounts[35],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 24',async() => {
result = await instance.claimThrone("JeSKNLn4Zdlybf",{from:accounts[22],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(325188);
await instance.sendTransaction({from:accounts[9],value:77});

});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[8],value:68});

result = await instance.sweepCommission(552247);
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("Mratk0O3pdU2C",{from:accounts[39],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 26',async() => {
result = await instance.sweepCommission(32795);
await instance.sendTransaction({from:accounts[9],value:11});

result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("2yYmH4ISMufB",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[6],value:86});

result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("XLQTwK4jte",{from:accounts[57],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(99162);
});
it('test 28',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[6],value:49});

result = await instance.sweepCommission(97986);
result = await instance.claimThrone("AKHMaik6s3Or",{from:accounts[64],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 29',async() => {
result = await instance.claimThrone("3FvT4yOe6Xx",{from:accounts[27],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(1001522);
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[2],value:24});

});
});
