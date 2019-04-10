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
result = await instance.claimThrone("JEL0uPrtioFBY2a",{from:accounts[44],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(423587);
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[4],value:50});

});
it('test 1',async() => {
result = await instance.sweepCommission(911441);
await instance.sendTransaction({from:accounts[6],value:69});

result = await instance.claimThrone("LKq6omtpHFdNkj29agv5",{from:accounts[21],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[0]);
});
it('test 2',async() => {
result = await instance.claimThrone("dpZUPvkEDf6rNu",{from:accounts[14],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[1],value:92});

result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(775564);
});
it('test 3',async() => {
result = await instance.sweepCommission(589039);
await instance.sendTransaction({from:accounts[1],value:12});

result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("fMainhI0CyH",{from:accounts[34],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 4',async() => {
result = await instance.claimThrone("ZMqGSKuLU97Rc",{from:accounts[19],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[2],value:70});

result = await instance.sweepCommission(639505);
});
it('test 5',async() => {
result = await instance.claimThrone("wb932XDFi17yvda0x",{from:accounts[32],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(1026693);
await instance.sendTransaction({from:accounts[8],value:90});

});
it('test 6',async() => {
result = await instance.sweepCommission(965651);
result = await instance.claimThrone("1go4MrdVLOG",{from:accounts[75],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[1],value:63});

result = await instance.transferOwnership(accounts[1]);
});
it('test 7',async() => {
result = await instance.sweepCommission(523651);
await instance.sendTransaction({from:accounts[6],value:84});

result = await instance.claimThrone("w9SqWa5BCofJuP7A",{from:accounts[61],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[1]);
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[2],value:16});

result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(1017016);
result = await instance.claimThrone("OYNo1GKlhAiTRmvED",{from:accounts[38],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 9',async() => {
result = await instance.sweepCommission(292085);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("pqRJUjBX8wM5yH",{from:accounts[35],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[3],value:90});

});
it('test 10',async() => {
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[9],value:93});

result = await instance.sweepCommission(508236);
result = await instance.claimThrone("bEZntM3elCiTJ0mOg49W",{from:accounts[91],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 11',async() => {
result = await instance.claimThrone("Jm7ofuNQgZ6UehiwF",{from:accounts[78],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[9],value:49});

result = await instance.sweepCommission(659028);
result = await instance.transferOwnership(accounts[4]);
});
it('test 12',async() => {
result = await instance.sweepCommission(720377);
await instance.sendTransaction({from:accounts[6],value:35});

result = await instance.claimThrone("K0t2eojRr87p946U5",{from:accounts[25],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[0]);
});
it('test 13',async() => {
result = await instance.claimThrone("NGWHla2KvoBpmSj",{from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[7],value:94});

result = await instance.sweepCommission(810188);
});
it('test 14',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("23N7XcWztnD41",{from:accounts[50],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(448812);
await instance.sendTransaction({from:accounts[5],value:20});

});
it('test 15',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("Lke08PgGts4Vl2Z",{from:accounts[100],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(823641);
await instance.sendTransaction({from:accounts[3],value:73});

});
it('test 16',async() => {
result = await instance.sweepCommission(920697);
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[5],value:24});

result = await instance.claimThrone("JylGFeS95kx4LQMrKW",{from:accounts[71],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 17',async() => {
result = await instance.claimThrone("TnIedWYhypEcu",{from:accounts[64],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(524292);
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[5],value:81});

});
it('test 18',async() => {
result = await instance.claimThrone("YtOVa0dz41RbHFgBi",{from:accounts[9],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[2],value:9});

result = await instance.sweepCommission(533324);
});
it('test 19',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(305760);
result = await instance.claimThrone("hptSYgWdMkO7s2wH",{from:accounts[37],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[3],value:84});

});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[3],value:8});

result = await instance.claimThrone("Uc36JupRXr",{from:accounts[87],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(823253);
result = await instance.transferOwnership(accounts[0]);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 21',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(294936);
result = await instance.claimThrone("ThfIilxQmS2OB67WZKP",{from:accounts[89],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[1],value:81});

});
it('test 22',async() => {
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[6],value:36});

result = await instance.sweepCommission(974752);
result = await instance.claimThrone("58NTiHVLjFYPuR0ZWfv",{from:accounts[40],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 23',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("wilKvAH6S8gL0o1Ucu",{from:accounts[84],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[9],value:35});

result = await instance.sweepCommission(819799);
});
it('test 24',async() => {
result = await instance.sweepCommission(147857);
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("Hbn8gfI4EO",{from:accounts[63],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[3],value:29});

});
it('test 25',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[3],value:87});

result = await instance.sweepCommission(614079);
result = await instance.claimThrone("zeIy9vkL4J8W7w",{from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 26',async() => {
result = await instance.claimThrone("WiS91Ea2vfq3P7Nmb5Cc",{from:accounts[61],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(514933);
await instance.sendTransaction({from:accounts[7],value:21});

});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[7],value:14});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("jnls6FuDXE38",{from:accounts[24],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(189544);
});
it('test 28',async() => {
result = await instance.sweepCommission(535828);
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("ALHG0uKoFfQ8wC4k",{from:accounts[46],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[5],value:97});

});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[2],value:92});

result = await instance.claimThrone("Ze2vIkJQi6",{from:accounts[49],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(662241);
});
});
