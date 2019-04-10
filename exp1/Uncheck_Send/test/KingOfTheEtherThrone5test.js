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
await instance.sendTransaction({from:accounts[1],value:86});

result = await instance.sweepCommission(440498);
result = await instance.claimThrone("7xg4w1aBoTc",{from:accounts[46],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[3]);
});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[6],value:7});

result = await instance.sweepCommission(711491);
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("3ViDUW5nLXBRA",{from:accounts[79],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[5],value:94});

result = await instance.sweepCommission(579156);
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("aF5JyBfpuG",{from:accounts[51],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 3',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(804955);
await instance.sendTransaction({from:accounts[4],value:76});

result = await instance.claimThrone("HlpFgC75UAeBO",{from:accounts[93],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 4',async() => {
result = await instance.claimThrone("8xzaYJ5wG06iEBspOdRS",{from:accounts[22],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(694061);
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[3],value:83});

});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[2],value:55});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("eGZdmc2EhsF7PAjuMQ",{from:accounts[36],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(207594);
});
it('test 6',async() => {
result = await instance.claimThrone("UJ1GNakd5sjeEzCZ9m",{from:accounts[35],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(414642);
await instance.sendTransaction({from:accounts[3],value:75});

result = await instance.transferOwnership(accounts[0]);
});
it('test 7',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(769545);
await instance.sendTransaction({from:accounts[2],value:17});

result = await instance.claimThrone("4T3KPyqYEuMO",{from:accounts[93],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[2],value:6});

result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(633587);
result = await instance.claimThrone("QhCv6dafJK",{from:accounts[44],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[2],value:44});

result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("IVZ7MtsqOcpQy",{from:accounts[65],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(271373);
});
it('test 10',async() => {
result = await instance.claimThrone("aLwXB1WGPA5KVb",{from:accounts[62],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(814939);
await instance.sendTransaction({from:accounts[4],value:38});

});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[5],value:66});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("urmZQkXC5ybaMF2V7Kf",{from:accounts[55],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(43141);
});
it('test 12',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(1018984);
await instance.sendTransaction({from:accounts[6],value:25});

result = await instance.claimThrone("PTXqh8ZBLu6",{from:accounts[83],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 13',async() => {
result = await instance.sweepCommission(318161);
await instance.sendTransaction({from:accounts[9],value:77});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("qEnsoupzTe",{from:accounts[23],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 14',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(46801);
await instance.sendTransaction({from:accounts[2],value:3});

result = await instance.claimThrone("jGx5XHePVMzfu9Y3ZN",{from:accounts[22],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 15',async() => {
result = await instance.sweepCommission(455657);
await instance.sendTransaction({from:accounts[6],value:12});

result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("j1DhAaB3mq9Go6ENcwlP",{from:accounts[8],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 16',async() => {
result = await instance.claimThrone("Rw8jsMSTfeaco40g",{from:accounts[15],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[3],value:60});

result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(694527);
});
it('test 17',async() => {
result = await instance.sweepCommission(365277);
await instance.sendTransaction({from:accounts[8],value:54});

result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("eOwHgCV7J3mo5",{from:accounts[56],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 18',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("0x4Pz5ZQqoRXt1G",{from:accounts[59],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(737603);
await instance.sendTransaction({from:accounts[2],value:69});

});
it('test 19',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(298172);
await instance.sendTransaction({from:accounts[6],value:92});

result = await instance.claimThrone("BQ8lEqjxJDk",{from:accounts[8],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 20',async() => {
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[2],value:7});

result = await instance.claimThrone("Q9cENwiBx61Kv5XWtyus",{from:accounts[25],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(915679);
});
it('test 21',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("gMKvSYdocXH0fAJnajQ",{from:accounts[97],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(293011);
await instance.sendTransaction({from:accounts[7],value:30});

});
it('test 22',async() => {
result = await instance.claimThrone("xrYBZIz7V89sD1A6MSgH",{from:accounts[78],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[3],value:42});

result = await instance.sweepCommission(308292);
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[6],value:37});

result = await instance.sweepCommission(898542);
result = await instance.claimThrone("T3YZfMCODui",{from:accounts[58],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[2]);
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[7],value:89});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("Q4gOl38LPKNr",{from:accounts[94],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(189622);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 25',async() => {
result = await instance.claimThrone("V4ghoTvOSIxlHN7",{from:accounts[25],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[5],value:97});

result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(620911);
});
it('test 26',async() => {
result = await instance.claimThrone("FBhYZfxk3V5",{from:accounts[22],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[2],value:89});

result = await instance.sweepCommission(411074);
});
it('test 27',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(6533);
await instance.sendTransaction({from:accounts[9],value:63});

result = await instance.claimThrone("BY2itrVNc3n6dlZTvUjm",{from:accounts[67],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 28',async() => {
result = await instance.claimThrone("A4fQIdMgaHLCvF",{from:accounts[45],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[6],value:45});

result = await instance.sweepCommission(98942);
});
it('test 29',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(229053);
result = await instance.claimThrone("nxgPeQrvoW",{from:accounts[63],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[8],value:27});

});
});
