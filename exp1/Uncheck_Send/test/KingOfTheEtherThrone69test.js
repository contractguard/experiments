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
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(217918);
await instance.sendTransaction({from:accounts[4],value:28});

result = await instance.claimThrone("ZBiI4OY7tF",{from:accounts[81],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 1',async() => {
result = await instance.sweepCommission(457734);
await instance.sendTransaction({from:accounts[9],value:30});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("aLDI3YpwQhio1xe",{from:accounts[34],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 2',async() => {
result = await instance.sweepCommission(727848);
await instance.sendTransaction({from:accounts[8],value:52});

result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("hiolE7JVPNq",{from:accounts[46],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 3',async() => {
result = await instance.claimThrone("JeV9SmpA3t0f7zFqnLBU",{from:accounts[81],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[9],value:78});

result = await instance.sweepCommission(727227);
result = await instance.transferOwnership(accounts[1]);
});
it('test 4',async() => {
result = await instance.sweepCommission(262500);
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[8],value:80});

result = await instance.claimThrone("VYLnXOx491dMEeSD",{from:accounts[53],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 5',async() => {
result = await instance.sweepCommission(211635);
result = await instance.claimThrone("2x1DFHMTRv",{from:accounts[95],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[7],value:45});

result = await instance.transferOwnership(accounts[1]);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[1],value:50});

result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("Q1rRxgJ3qc",{from:accounts[26],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(163760);
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[4],value:60});

result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(100695);
result = await instance.claimThrone("ZGKRQth0X54nO",{from:accounts[64],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 8',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("dAqXIrchPUfvkVuWOl",{from:accounts[59],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(92056);
await instance.sendTransaction({from:accounts[6],value:8});

});
it('test 9',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(799923);
await instance.sendTransaction({from:accounts[7],value:93});

result = await instance.claimThrone("u5vFg30qGP6",{from:accounts[68],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 10',async() => {
result = await instance.claimThrone("XN2YzBfmyulxvSUKJOCo",{from:accounts[25],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[9],value:94});

result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(303775);
});
it('test 11',async() => {
result = await instance.claimThrone("1MDF3mUqoXKe6dlEn",{from:accounts[71],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[4],value:89});

result = await instance.sweepCommission(226326);
result = await instance.transferOwnership(accounts[4]);
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[8],value:48});

result = await instance.claimThrone("6pDmk49ugI8zJe",{from:accounts[91],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(858929);
result = await instance.transferOwnership(accounts[2]);
});
it('test 13',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("ZI9r7pV2Gi1AX6BaJR0F",{from:accounts[66],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[8],value:22});

result = await instance.sweepCommission(101686);
});
it('test 14',async() => {
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[3],value:91});

result = await instance.claimThrone("JkOT04a1d6nl",{from:accounts[95],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(435184);
});
it('test 15',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("1D3br4uyQOT",{from:accounts[24],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(617682);
await instance.sendTransaction({from:accounts[6],value:51});

});
it('test 16',async() => {
result = await instance.sweepCommission(701811);
result = await instance.claimThrone("SqFk8A15X9VmQc",{from:accounts[46],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[4],value:21});

});
it('test 17',async() => {
result = await instance.claimThrone("z5QPu6ZotXDIKhl1w",{from:accounts[17],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[8],value:73});

result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(747009);
});
it('test 18',async() => {
result = await instance.claimThrone("bRNj9HoDUympa6FC",{from:accounts[77],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(909143);
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[5],value:40});

});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[1],value:51});

result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(939358);
result = await instance.claimThrone("sSDm1xwHglzYfQ8",{from:accounts[29],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 20',async() => {
result = await instance.sweepCommission(951325);
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[1],value:45});

result = await instance.claimThrone("P4BLxCGKQRD1",{from:accounts[36],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 21',async() => {
result = await instance.sweepCommission(1016392);
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("nVbLSEQHuc",{from:accounts[93],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[1],value:74});

});
it('test 22',async() => {
result = await instance.sweepCommission(258775);
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("glskcFWjLZYhHebEURI",{from:accounts[69],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[6],value:16});

});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[8],value:58});

result = await instance.claimThrone("iwJUOBWuxVl0bZYy7I",{from:accounts[60],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(203473);
result = await instance.transferOwnership(accounts[5]);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 24',async() => {
result = await instance.claimThrone("CstFahbkf71jyx",{from:accounts[59],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(196569);
await instance.sendTransaction({from:accounts[5],value:25});

});
it('test 25',async() => {
result = await instance.sweepCommission(572075);
await instance.sendTransaction({from:accounts[4],value:6});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("MfQ87EBkR4mrnIOXCFD",{from:accounts[67],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 26',async() => {
result = await instance.claimThrone("kn805ZvLrBzqahXopsjO",{from:accounts[52],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(383772);
await instance.sendTransaction({from:accounts[2],value:92});

});
it('test 27',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[4],value:94});

result = await instance.sweepCommission(517675);
result = await instance.claimThrone("6KWtrxM1T7c49Z",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[1],value:62});

result = await instance.claimThrone("vOw5X24eHlYcDU",{from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(287087);
result = await instance.transferOwnership(accounts[1]);
});
it('test 29',async() => {
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[1],value:56});

result = await instance.claimThrone("7xUVFpsetoMikz1",{from:accounts[18],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(442032);
});
});
