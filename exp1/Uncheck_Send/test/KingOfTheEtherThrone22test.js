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
result = await instance.sweepCommission(247116);
result = await instance.claimThrone("Jrt1nxbCGNEjK4d",{from:accounts[14],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[9],value:4});

});
it('test 1',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("PlHiZz3vpVwWASDuj",{from:accounts[6],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(199800);
await instance.sendTransaction({from:accounts[7],value:40});

});
it('test 2',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[5],value:37});

result = await instance.sweepCommission(274837);
result = await instance.claimThrone("NDv2GjRkxA",{from:accounts[43],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 3',async() => {
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[2],value:61});

result = await instance.sweepCommission(889977);
result = await instance.claimThrone("4LqCd8nycVa",{from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 4',async() => {
result = await instance.sweepCommission(522521);
result = await instance.claimThrone("Ldv5oVtlHjW",{from:accounts[42],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[2],value:32});

});
it('test 5',async() => {
result = await instance.sweepCommission(159359);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("CNump10HYQw",{from:accounts[85],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[9],value:48});

});
it('test 6',async() => {
result = await instance.claimThrone("o8WCsVr5Q7uDfK",{from:accounts[25],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(734013);
await instance.sendTransaction({from:accounts[3],value:16});

});
it('test 7',async() => {
result = await instance.sweepCommission(534063);
result = await instance.claimThrone("rceFfsBjNumKMAb",{from:accounts[46],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[9],value:62});

result = await instance.transferOwnership(accounts[0]);
});
it('test 8',async() => {
result = await instance.claimThrone("4peXrE0qYjhs",{from:accounts[61],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[3],value:77});

result = await instance.sweepCommission(8021);
});
it('test 9',async() => {
result = await instance.sweepCommission(748281);
result = await instance.claimThrone("lYn75po2mWfU",{from:accounts[9],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[1],value:45});

});
it('test 10',async() => {
result = await instance.sweepCommission(1016149);
result = await instance.claimThrone("nP1vKkXzAGqNDt",{from:accounts[72],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[1],value:51});

});
it('test 11',async() => {
result = await instance.sweepCommission(192452);
await instance.sendTransaction({from:accounts[4],value:68});

result = await instance.claimThrone("n8DRCFwYgJsqvLt",{from:accounts[81],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[5]);
});
it('test 12',async() => {
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[9],value:40});

result = await instance.claimThrone("Y3s6BGrFKl5T",{from:accounts[18],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(584799);
});
it('test 13',async() => {
result = await instance.sweepCommission(627770);
result = await instance.claimThrone("yYVDuZksBH1zbitKm",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[2],value:97});

result = await instance.transferOwnership(accounts[0]);
});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[5],value:84});

result = await instance.claimThrone("Hv1iedQLa4TKOhYn",{from:accounts[27],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(597765);
result = await instance.transferOwnership(accounts[2]);
});
it('test 15',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(960280);
result = await instance.claimThrone("Q0cbSvCyglMLquEkDZWp",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[3],value:25});

});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[9],value:20});

result = await instance.sweepCommission(805553);
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("Cpz79GMRj5ID2xmBhed",{from:accounts[58],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 17',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(859694);
await instance.sendTransaction({from:accounts[2],value:52});

result = await instance.claimThrone("n5CJGcBw39xAiPDHXhY",{from:accounts[37],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 18',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[6],value:75});

result = await instance.sweepCommission(922175);
result = await instance.claimThrone("yfZnlaIqkNsSmG724z0",{from:accounts[91],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 19',async() => {
result = await instance.sweepCommission(412564);
result = await instance.claimThrone("EQPnSadqDwUeX14IT",{from:accounts[13],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[3],value:33});

});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 20',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(336708);
result = await instance.claimThrone("Owyx7oHzgamNfu6JGUc",{from:accounts[23],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[4],value:47});

});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[9],value:56});

result = await instance.claimThrone("o0RLyvf7bBQKF",{from:accounts[82],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(336833);
});
it('test 22',async() => {
result = await instance.sweepCommission(363072);
result = await instance.claimThrone("r4Xn8qQdHV7",{from:accounts[18],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[5],value:27});

});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[8],value:14});

result = await instance.sweepCommission(134865);
result = await instance.claimThrone("loxrVTqEdJp",{from:accounts[60],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[5]);
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[7],value:93});

result = await instance.claimThrone("2p8fEjwaAgFeJI",{from:accounts[75],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(899019);
result = await instance.transferOwnership(accounts[5]);
});
it('test 25',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[1],value:44});

result = await instance.claimThrone("2CyLrd8ck9uoNlMO",{from:accounts[27],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(63286);
});
it('test 26',async() => {
result = await instance.sweepCommission(351225);
await instance.sendTransaction({from:accounts[6],value:47});

result = await instance.claimThrone("spDi8OJHa1",{from:accounts[56],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[3]);
});
it('test 27',async() => {
result = await instance.claimThrone("gpPaUO1HAqM5Nhf0",{from:accounts[37],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[7],value:12});

result = await instance.sweepCommission(344402);
result = await instance.transferOwnership(accounts[0]);
});
it('test 28',async() => {
result = await instance.sweepCommission(301051);
result = await instance.claimThrone("KyBZ96fEzt5gRU4sw",{from:accounts[65],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[2],value:85});

});
it('test 29',async() => {
result = await instance.sweepCommission(900705);
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("Y9FpOcGX4jlHyP",{from:accounts[76],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[7],value:7});

});
});
