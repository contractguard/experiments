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
await instance.sendTransaction({from:accounts[6],value:72});

result = await instance.claimThrone("izpLSMJuOUeH109ng",{from:accounts[61],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(950443);
result = await instance.transferOwnership(accounts[0]);
});
it('test 1',async() => {
result = await instance.claimThrone("hE4N0LOQJIS8tus",{from:accounts[77],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[3],value:11});

result = await instance.sweepCommission(75750);
});
it('test 2',async() => {
result = await instance.sweepCommission(937507);
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("GLqQZz4P06",{from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[5],value:46});

});
it('test 3',async() => {
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[1],value:80});

result = await instance.sweepCommission(920369);
result = await instance.claimThrone("hKRGbBMaWNrTwmvuOgJ3",{from:accounts[89],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 4',async() => {
result = await instance.claimThrone("7BpP9JGgyTCbMajoIz",{from:accounts[92],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(625423);
await instance.sendTransaction({from:accounts[7],value:42});

result = await instance.transferOwnership(accounts[4]);
});
it('test 5',async() => {
result = await instance.claimThrone("zK2yFuXZQWi9",{from:accounts[87],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[7],value:4});

result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(831102);
});
it('test 6',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(74524);
await instance.sendTransaction({from:accounts[5],value:30});

result = await instance.claimThrone("Oeas2dRr89gDtv6EVA",{from:accounts[41],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 7',async() => {
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[3],value:62});

result = await instance.sweepCommission(425286);
result = await instance.claimThrone("RvCpNb4aWwUSyJh",{from:accounts[54],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 8',async() => {
result = await instance.sweepCommission(493977);
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[8],value:75});

result = await instance.claimThrone("1Nz8h406LqjO5HAlK",{from:accounts[34],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 9',async() => {
result = await instance.sweepCommission(299510);
await instance.sendTransaction({from:accounts[1],value:74});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("lKQfcIOsCx",{from:accounts[74],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 10',async() => {
result = await instance.sweepCommission(8399);
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("Jws2vjNqPhZeM7inp5",{from:accounts[84],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[7],value:35});

});
it('test 11',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(34111);
result = await instance.claimThrone("3RcIDHybJSg2",{from:accounts[10],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[8],value:45});

});
it('test 12',async() => {
result = await instance.claimThrone("UzNF5ioOVXe72qHlJK",{from:accounts[87],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(911534);
await instance.sendTransaction({from:accounts[2],value:59});

result = await instance.transferOwnership(accounts[5]);
});
it('test 13',async() => {
result = await instance.sweepCommission(546453);
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("BrEnlXI2yJYfAeWCtV",{from:accounts[18],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[1],value:34});

});
it('test 14',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[4],value:2});

result = await instance.claimThrone("mN2YCbXIvZPo9HzQk",{from:accounts[21],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(8066);
});
it('test 15',async() => {
result = await instance.sweepCommission(602334);
await instance.sendTransaction({from:accounts[1],value:83});

result = await instance.claimThrone("Yzqt1lCQrH",{from:accounts[19],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 16',async() => {
result = await instance.claimThrone("eFUyua5OiMwBArkYP",{from:accounts[81],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[9],value:89});

result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(202646);
});
it('test 17',async() => {
result = await instance.claimThrone("YCUpQ6Bsvx",{from:accounts[60],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[7],value:35});

result = await instance.sweepCommission(643771);
result = await instance.transferOwnership(accounts[3]);
});
it('test 18',async() => {
result = await instance.claimThrone("IA23agdTiFr89Q",{from:accounts[7],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(671663);
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[7],value:21});

});
it('test 19',async() => {
result = await instance.claimThrone("2FqHZ5KiSIaAs9D",{from:accounts[68],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(640957);
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[4],value:96});

});
it('test 20',async() => {
result = await instance.claimThrone("AeiosfLynDCYB1TX",{from:accounts[96],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[9],value:88});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(904774);
});
it('test 21',async() => {
result = await instance.claimThrone("NYEvpbXmZC",{from:accounts[62],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[7],value:56});

result = await instance.sweepCommission(219660);
result = await instance.transferOwnership(accounts[1]);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 22',async() => {
result = await instance.sweepCommission(24798);
result = await instance.claimThrone("e7VJlytokcNAm2p3s",{from:accounts[86],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[1],value:64});

result = await instance.transferOwnership(accounts[2]);
});
it('test 23',async() => {
result = await instance.sweepCommission(40903);
await instance.sendTransaction({from:accounts[8],value:27});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("C5zpuWdRkXMDITwO",{from:accounts[16],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 24',async() => {
result = await instance.claimThrone("bh7J4CdfZqzogO0rKW",{from:accounts[60],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(905678);
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[6],value:52});

});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[2],value:72});

result = await instance.sweepCommission(143924);
result = await instance.claimThrone("dvIYOA6at3QKqNxM",{from:accounts[77],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[2]);
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[9],value:5});

result = await instance.sweepCommission(74480);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("UkiLcPelnxSDY",{from:accounts[29],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 27',async() => {
result = await instance.sweepCommission(196971);
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("zmPTkJhIaBlEYGCfA8",{from:accounts[76],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[3],value:100});

});
it('test 28',async() => {
result = await instance.claimThrone("ZV309coFEIes",{from:accounts[17],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[8],value:93});

result = await instance.sweepCommission(85592);
result = await instance.transferOwnership(accounts[4]);
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[3],value:85});

result = await instance.sweepCommission(671220);
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("wU43edplWbHKiXrZhAqM",{from:accounts[50],value:web3.utils.toWei(web3.utils.toBN(3))});
});
});
