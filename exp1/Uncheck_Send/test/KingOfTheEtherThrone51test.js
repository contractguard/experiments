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
await instance.sendTransaction({from:accounts[4],value:55});

result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(691074);
result = await instance.claimThrone("bXq5TEcNfO",{from:accounts[15],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 1',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[6],value:75});

result = await instance.sweepCommission(537664);
result = await instance.claimThrone("U6BKZpe1iNhbRy0VWlE",{from:accounts[23],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 2',async() => {
result = await instance.claimThrone("0VvkD59EeZcTo",{from:accounts[29],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(871999);
await instance.sendTransaction({from:accounts[1],value:6});

result = await instance.transferOwnership(accounts[1]);
});
it('test 3',async() => {
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[2],value:78});

result = await instance.claimThrone("MvnH6ZcQWlADh",{from:accounts[9],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(446322);
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[2],value:74});

result = await instance.claimThrone("Z0UoxWu8FYr6",{from:accounts[54],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(981512);
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[2],value:34});

result = await instance.sweepCommission(361016);
result = await instance.claimThrone("VFMfAegzS60r4c1NsBn",{from:accounts[100],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[9],value:94});

result = await instance.sweepCommission(977573);
result = await instance.claimThrone("WqMuf2zOm4etX8E",{from:accounts[93],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[2]);
});
it('test 7',async() => {
result = await instance.claimThrone("9rEuhOTtSkQeXNBb6Cgp",{from:accounts[34],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(28598);
await instance.sendTransaction({from:accounts[3],value:96});

result = await instance.transferOwnership(accounts[4]);
});
it('test 8',async() => {
result = await instance.sweepCommission(218358);
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("kWAfzrFp18JxTl3jLmG",{from:accounts[69],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[5],value:43});

});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[2],value:31});

result = await instance.sweepCommission(13657);
result = await instance.claimThrone("EowaBs6q3RAZTv5znQlt",{from:accounts[26],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[5]);
});
it('test 10',async() => {
result = await instance.claimThrone("sdKtCnHMU8QF",{from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(401675);
await instance.sendTransaction({from:accounts[8],value:15});

});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[3],value:81});

result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(88219);
result = await instance.claimThrone("PpE64Me7xlfvOXm58qJH",{from:accounts[34],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 12',async() => {
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[3],value:98});

result = await instance.sweepCommission(613101);
result = await instance.claimThrone("zPAKybk9Fs",{from:accounts[77],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 13',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(576507);
await instance.sendTransaction({from:accounts[6],value:61});

result = await instance.claimThrone("a62WgCDT4Yfli",{from:accounts[67],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 14',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("gf0pO2kyMEZBF",{from:accounts[47],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(761758);
await instance.sendTransaction({from:accounts[5],value:44});

});
it('test 15',async() => {
result = await instance.claimThrone("fEytgFw9us3Jh25XqOY",{from:accounts[57],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(421993);
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[1],value:82});

});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[1],value:80});

result = await instance.claimThrone("8rvjLx7inV",{from:accounts[78],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(386289);
});
it('test 17',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(234808);
result = await instance.claimThrone("GtUpqke0CKyZvFYu9VE",{from:accounts[71],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[7],value:49});

});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[1],value:31});

result = await instance.sweepCommission(344831);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("ogRPqVjcCB9mGieJKku",{from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 19',async() => {
result = await instance.sweepCommission(677596);
result = await instance.claimThrone("EsHKmSZpXDd1g",{from:accounts[38],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[4],value:11});

result = await instance.transferOwnership(accounts[4]);
});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[6],value:43});

result = await instance.claimThrone("4ehXHDaByQvG",{from:accounts[98],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(772432);
});
it('test 21',async() => {
result = await instance.sweepCommission(926856);
result = await instance.claimThrone("DzCL2Aw4olPOxrta0",{from:accounts[42],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[5],value:35});

result = await instance.transferOwnership(accounts[5]);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 22',async() => {
result = await instance.sweepCommission(544273);
await instance.sendTransaction({from:accounts[7],value:26});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("B0lMe4sFKEWbktm1py",{from:accounts[47],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 23',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(578663);
result = await instance.claimThrone("YQBIvios5yGg408uOxA",{from:accounts[17],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[1],value:69});

});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[3],value:30});

result = await instance.sweepCommission(1038716);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("Z3JpmTYzfoMXaVylew",{from:accounts[40],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[4],value:71});

result = await instance.sweepCommission(491153);
result = await instance.claimThrone("H7ZeM03UlPNAB8sLF",{from:accounts[12],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 26',async() => {
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[5],value:78});

result = await instance.claimThrone("8xvp5Tw3FCyOHAPfZ4aY",{from:accounts[28],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(81819);
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[6],value:84});

result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(929102);
result = await instance.claimThrone("JMPnvNH8Ie",{from:accounts[95],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[6],value:80});

result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("WajAYiSM1p8s9l4",{from:accounts[100],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(23030);
});
it('test 29',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(904588);
result = await instance.claimThrone("jhN2STHwuBrna0oPg",{from:accounts[87],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[5],value:77});

});
});
