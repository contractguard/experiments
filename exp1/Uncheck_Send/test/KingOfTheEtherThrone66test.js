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
result = await instance.claimThrone("zQLg2hwJcFZaRft7A",{from:accounts[97],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(441297);
await instance.sendTransaction({from:accounts[9],value:4});

});
it('test 1',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(91031);
result = await instance.claimThrone("R3wpBdozI2unTF485Wft",{from:accounts[7],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[1],value:69});

});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[3],value:37});

result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("xBYrR0ShdeiUjmQXlZ",{from:accounts[20],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(951731);
});
it('test 3',async() => {
result = await instance.sweepCommission(214312);
await instance.sendTransaction({from:accounts[9],value:22});

result = await instance.claimThrone("AfVQJYtInOPkLFp2KWg",{from:accounts[49],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[1],value:75});

result = await instance.sweepCommission(210081);
result = await instance.claimThrone("TMDRxQUJ17SmBGrEVk",{from:accounts[38],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[1]);
});
it('test 5',async() => {
result = await instance.sweepCommission(447163);
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[2],value:14});

result = await instance.claimThrone("ruwGISofkiF9J3WE6m",{from:accounts[81],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 6',async() => {
result = await instance.sweepCommission(405852);
await instance.sendTransaction({from:accounts[6],value:84});

result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("OZkwaNi0o2fxjr",{from:accounts[58],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 7',async() => {
result = await instance.sweepCommission(939313);
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[8],value:35});

result = await instance.claimThrone("cCHJBTyEioksQpetM",{from:accounts[78],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 8',async() => {
result = await instance.sweepCommission(397474);
await instance.sendTransaction({from:accounts[1],value:55});

result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("AKX2Gfi3zHDU1pgvBu7",{from:accounts[19],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 9',async() => {
result = await instance.claimThrone("pLj9lEwh7kAd2yK1G",{from:accounts[75],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[4],value:7});

result = await instance.sweepCommission(644943);
result = await instance.transferOwnership(accounts[5]);
});
it('test 10',async() => {
result = await instance.sweepCommission(833379);
await instance.sendTransaction({from:accounts[9],value:53});

result = await instance.claimThrone("xLetwSEimnPIKTWg",{from:accounts[76],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 11',async() => {
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[3],value:24});

result = await instance.sweepCommission(16028);
result = await instance.claimThrone("veq3XcSdDzPGsh6uNVty",{from:accounts[38],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 12',async() => {
result = await instance.sweepCommission(632751);
await instance.sendTransaction({from:accounts[2],value:9});

result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("2uTrmJ0qEgSfHiQ4Zt",{from:accounts[96],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[3],value:42});

result = await instance.claimThrone("CwtIJD64Ta",{from:accounts[67],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(435031);
result = await instance.transferOwnership(accounts[0]);
});
it('test 14',async() => {
result = await instance.claimThrone("N1eGULM9kp3CW7D",{from:accounts[92],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[1],value:50});

result = await instance.sweepCommission(323345);
result = await instance.transferOwnership(accounts[1]);
});
it('test 15',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(248493);
await instance.sendTransaction({from:accounts[9],value:68});

result = await instance.claimThrone("s2mnyiRMlaX",{from:accounts[53],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 16',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(903331);
await instance.sendTransaction({from:accounts[5],value:16});

result = await instance.claimThrone("2OYlHFwA6ZXo3h",{from:accounts[67],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 17',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(167735);
result = await instance.claimThrone("tMCYKWQVU3B8",{from:accounts[62],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[6],value:99});

});
it('test 18',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("ZkMduE7sVgIeHY",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(729625);
await instance.sendTransaction({from:accounts[2],value:24});

});
it('test 19',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[5],value:31});

result = await instance.sweepCommission(92792);
result = await instance.claimThrone("bqIxPdjGAK8Le",{from:accounts[85],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 20',async() => {
result = await instance.claimThrone("HqftEiMFcKOvXkl",{from:accounts[98],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[7],value:27});

result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(394875);
});
it('test 21',async() => {
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[6],value:53});

result = await instance.claimThrone("LYNhan2eKsCcXfJ9",{from:accounts[40],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(452258);
});
it('test 22',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(854176);
result = await instance.claimThrone("as3lMLKTVGxyDrp9",{from:accounts[13],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[7],value:14});

});
it('test 23',async() => {
result = await instance.sweepCommission(821532);
await instance.sendTransaction({from:accounts[9],value:69});

result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("41mFNIVK7gt95rEP",{from:accounts[47],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[9],value:6});

result = await instance.sweepCommission(536797);
result = await instance.claimThrone("aYXPqOohpQAy9GI5e",{from:accounts[82],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[2]);
});
it('test 25',async() => {
result = await instance.claimThrone("VpPvynbKMNBquimX",{from:accounts[95],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(503708);
await instance.sendTransaction({from:accounts[6],value:28});

result = await instance.transferOwnership(accounts[2]);
});
it('test 26',async() => {
result = await instance.sweepCommission(1034290);
result = await instance.claimThrone("KbOozZ8B20WH",{from:accounts[81],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[8],value:52});

});
it('test 27',async() => {
result = await instance.sweepCommission(581723);
result = await instance.claimThrone("hl9DuMyG7FNa",{from:accounts[81],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[7],value:81});

result = await instance.transferOwnership(accounts[0]);
});
it('test 28',async() => {
result = await instance.claimThrone("90h7WQ2duqVpXH",{from:accounts[92],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[1],value:3});

result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(248401);
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[5],value:97});

result = await instance.claimThrone("xsrevly60dfNW",{from:accounts[56],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(657290);
});
});
