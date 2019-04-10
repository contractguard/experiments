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
result = await instance.claimThrone("75qSmIBduWyNkE8oT9",{from:accounts[46],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(596378);
await instance.sendTransaction({from:accounts[1],value:19});

result = await instance.transferOwnership(accounts[2]);
});
it('test 1',async() => {
result = await instance.claimThrone("eap9MGhlRIN",{from:accounts[70],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[9],value:66});

result = await instance.sweepCommission(96892);
result = await instance.transferOwnership(accounts[0]);
});
it('test 2',async() => {
result = await instance.claimThrone("yp0drItkA6n9qfH1",{from:accounts[31],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[7],value:81});

result = await instance.sweepCommission(16329);
result = await instance.transferOwnership(accounts[1]);
});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[6],value:24});

result = await instance.sweepCommission(776348);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("PGfH38y6Mma",{from:accounts[51],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 4',async() => {
result = await instance.sweepCommission(658288);
result = await instance.claimThrone("KEzOoBLl0ycuF5Cd1",{from:accounts[51],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[4],value:77});

});
it('test 5',async() => {
result = await instance.claimThrone("stqWRSOMNy",{from:accounts[81],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[4],value:91});

result = await instance.sweepCommission(912821);
result = await instance.transferOwnership(accounts[0]);
});
it('test 6',async() => {
result = await instance.claimThrone("R9qZTdbBMD3XPnJYW",{from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(227203);
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[8],value:46});

});
it('test 7',async() => {
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[8],value:70});

result = await instance.claimThrone("D35cNG2KJ6iTyZEX",{from:accounts[52],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(75743);
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[2],value:17});

result = await instance.sweepCommission(121936);
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("gWlBdeUMJ7EKwq1",{from:accounts[32],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[7],value:20});

result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(181728);
result = await instance.claimThrone("7LAqoC9X5YgGO1x",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[1],value:87});

result = await instance.sweepCommission(702654);
result = await instance.claimThrone("NfYsTm7pix6Ebv8",{from:accounts[81],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[2]);
});
it('test 11',async() => {
result = await instance.sweepCommission(526787);
result = await instance.claimThrone("lUWaZQpguHKiyt",{from:accounts[67],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[1],value:94});

result = await instance.transferOwnership(accounts[5]);
});
it('test 12',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[4],value:34});

result = await instance.claimThrone("hrSwdAKL9n",{from:accounts[9],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(813014);
});
it('test 13',async() => {
result = await instance.sweepCommission(714660);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("C2PZQxF9Oiuj8SeoE",{from:accounts[51],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[2],value:43});

});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[6],value:56});

result = await instance.sweepCommission(878253);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("PZKEABWgH7",{from:accounts[51],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 15',async() => {
result = await instance.sweepCommission(139611);
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("BqWifavTDsrU",{from:accounts[76],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[3],value:97});

});
it('test 16',async() => {
result = await instance.claimThrone("ulXDJh2wf39d",{from:accounts[62],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[7],value:1});

result = await instance.sweepCommission(492259);
result = await instance.transferOwnership(accounts[1]);
});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[7],value:45});

result = await instance.sweepCommission(898998);
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("kwVu82prclq",{from:accounts[6],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 18',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[1],value:39});

result = await instance.claimThrone("herOLDkgU87INVT4y",{from:accounts[85],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(420160);
});
it('test 19',async() => {
result = await instance.sweepCommission(1021323);
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[1],value:13});

result = await instance.claimThrone("rPKyZ4x3b1",{from:accounts[88],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 20',async() => {
result = await instance.claimThrone("yZSAQCPUae3gn6v",{from:accounts[93],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[6],value:98});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(416965);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 21',async() => {
result = await instance.sweepCommission(108375);
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("Q16mrJl9ApVG",{from:accounts[62],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[7],value:6});

});
it('test 22',async() => {
result = await instance.claimThrone("rUtnXQ1sdKNvfmuyB",{from:accounts[56],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[2],value:79});

result = await instance.sweepCommission(647636);
});
it('test 23',async() => {
result = await instance.claimThrone("tJpsU2Bi0zA",{from:accounts[71],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[6],value:19});

result = await instance.sweepCommission(93941);
});
it('test 24',async() => {
result = await instance.sweepCommission(600888);
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("A268F9U7zYoBLDVC3Rt",{from:accounts[71],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[1],value:25});

});
it('test 25',async() => {
result = await instance.claimThrone("3fnCtahbPdNxVO",{from:accounts[33],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(579450);
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[9],value:89});

});
it('test 26',async() => {
result = await instance.claimThrone("0di3wXYra6DfQSBqL9Cm",{from:accounts[75],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(574028);
await instance.sendTransaction({from:accounts[7],value:60});

});
it('test 27',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[8],value:76});

result = await instance.sweepCommission(415091);
result = await instance.claimThrone("SHe3BpnTX1NdauPIRV9y",{from:accounts[11],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 28',async() => {
result = await instance.sweepCommission(233789);
result = await instance.claimThrone("mP2R0ST3YMKaLedF5z",{from:accounts[71],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[7],value:45});

});
it('test 29',async() => {
result = await instance.sweepCommission(111968);
await instance.sendTransaction({from:accounts[6],value:94});

result = await instance.claimThrone("UMwnl34uqiTj1EzatLH",{from:accounts[34],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[2]);
});
});
