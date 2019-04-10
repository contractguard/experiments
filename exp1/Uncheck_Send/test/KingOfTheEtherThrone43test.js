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
await instance.sendTransaction({from:accounts[3],value:14});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(770196);
result = await instance.claimThrone("5T9cuFXR6D7GylMmSBAb",{from:accounts[59],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[3],value:7});

result = await instance.sweepCommission(344752);
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("vS2ocyms5X3Jj8L7eH",{from:accounts[87],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 2',async() => {
result = await instance.claimThrone("qROjI2KNelYz",{from:accounts[94],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[4],value:23});

result = await instance.sweepCommission(85749);
});
it('test 3',async() => {
result = await instance.sweepCommission(721127);
result = await instance.claimThrone("Bcuhso6UXNbJM1AZ",{from:accounts[22],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[3],value:32});

});
it('test 4',async() => {
result = await instance.sweepCommission(683396);
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("7RABS9fzqT2M6ri1H",{from:accounts[40],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[6],value:80});

});
it('test 5',async() => {
result = await instance.claimThrone("PR4vV6ZblT1mHheuw",{from:accounts[50],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(121733);
await instance.sendTransaction({from:accounts[5],value:99});

});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[1],value:69});

result = await instance.claimThrone("K0SGsCNDk2re6g19",{from:accounts[69],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(945634);
result = await instance.transferOwnership(accounts[3]);
});
it('test 7',async() => {
result = await instance.claimThrone("eKSWkhHLCNU",{from:accounts[95],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(656342);
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[7],value:67});

});
it('test 8',async() => {
result = await instance.sweepCommission(163327);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("Kz2FuODSPTipt",{from:accounts[60],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[2],value:84});

});
it('test 9',async() => {
result = await instance.sweepCommission(765259);
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("7phkAzKd6eFVO",{from:accounts[70],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[2],value:62});

});
it('test 10',async() => {
result = await instance.claimThrone("tNQIdPinuZ",{from:accounts[53],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[5],value:21});

result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(83724);
});
it('test 11',async() => {
result = await instance.sweepCommission(628320);
await instance.sendTransaction({from:accounts[3],value:82});

result = await instance.claimThrone("IhDJPji7SQWNMXO",{from:accounts[47],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[5]);
});
it('test 12',async() => {
result = await instance.sweepCommission(312717);
await instance.sendTransaction({from:accounts[8],value:90});

result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("IslFozeDhd",{from:accounts[14],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 13',async() => {
result = await instance.sweepCommission(1025990);
await instance.sendTransaction({from:accounts[3],value:91});

result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("Ab5KmEYo7saru2BVlhdO",{from:accounts[100],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 14',async() => {
result = await instance.sweepCommission(363259);
await instance.sendTransaction({from:accounts[2],value:57});

result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("ZOnRBC25a7z",{from:accounts[86],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[9],value:31});

result = await instance.sweepCommission(368494);
result = await instance.claimThrone("4M0gprbyktXPqdznI",{from:accounts[73],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 16',async() => {
result = await instance.claimThrone("Ej8kmHalJ6M9vNOy",{from:accounts[78],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[2],value:46});

result = await instance.sweepCommission(1046387);
result = await instance.transferOwnership(accounts[4]);
});
it('test 17',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(480335);
await instance.sendTransaction({from:accounts[2],value:70});

result = await instance.claimThrone("WNKFpzu3GndtLQ",{from:accounts[63],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 18',async() => {
result = await instance.claimThrone("Ixaur2h5pFbLfH7CGE",{from:accounts[90],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[9],value:33});

result = await instance.sweepCommission(794246);
});
it('test 19',async() => {
result = await instance.claimThrone("4oqSpsF7CfGYcaxmD",{from:accounts[83],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(318626);
await instance.sendTransaction({from:accounts[8],value:99});

result = await instance.transferOwnership(accounts[0]);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 20',async() => {
result = await instance.sweepCommission(68640);
result = await instance.claimThrone("jI1KYE9FCp",{from:accounts[13],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[9],value:39});

});
it('test 21',async() => {
result = await instance.claimThrone("e5j8FHhNncRqg4A",{from:accounts[79],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(285122);
await instance.sendTransaction({from:accounts[2],value:74});

result = await instance.transferOwnership(accounts[0]);
});
it('test 22',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("YV9oDp3BEj6RwC0fg",{from:accounts[6],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[6],value:18});

result = await instance.sweepCommission(323172);
});
it('test 23',async() => {
result = await instance.claimThrone("XOdUcuQ9Da",{from:accounts[56],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[2],value:17});

result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(382567);
});
it('test 24',async() => {
result = await instance.claimThrone("5RHWt7b1rZhU",{from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[7],value:91});

result = await instance.sweepCommission(686994);
result = await instance.transferOwnership(accounts[1]);
});
it('test 25',async() => {
result = await instance.sweepCommission(623669);
result = await instance.claimThrone("4oreL9tnpJ",{from:accounts[20],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[7],value:3});

});
it('test 26',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[7],value:66});

result = await instance.sweepCommission(167077);
result = await instance.claimThrone("QmJXzUWItadlps3ocb",{from:accounts[23],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[3],value:19});

result = await instance.sweepCommission(707384);
result = await instance.claimThrone("apowtVPGxZyXqSmLC3QO",{from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[2]);
});
it('test 28',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("ELYj6utcMQHgw0vi3GWn",{from:accounts[85],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(946355);
await instance.sendTransaction({from:accounts[8],value:23});

});
it('test 29',async() => {
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[7],value:45});

result = await instance.claimThrone("IVHen7kWjZ9",{from:accounts[15],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(3730);
});
});
