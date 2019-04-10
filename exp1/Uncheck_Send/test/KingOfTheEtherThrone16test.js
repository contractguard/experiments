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
result = await instance.claimThrone("5P7DKvR3grWbZS0Y",{from:accounts[98],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[6],value:17});

result = await instance.sweepCommission(563796);
});
it('test 1',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[1],value:91});

result = await instance.claimThrone("hU9lQCjctJ1",{from:accounts[57],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(690620);
});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[9],value:96});

result = await instance.claimThrone("aSbFlm9JBDCV",{from:accounts[26],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(325584);
});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[5],value:61});

result = await instance.sweepCommission(55795);
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("PiEurLFe8Ca1",{from:accounts[11],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[6],value:66});

result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(929754);
result = await instance.claimThrone("oTmPhztxZnpS7d",{from:accounts[84],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 5',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("ZUkrIYy2ApwqR",{from:accounts[53],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[6],value:32});

result = await instance.sweepCommission(979336);
});
it('test 6',async() => {
result = await instance.sweepCommission(779742);
result = await instance.claimThrone("Xi1CvdT8McyW54kgL",{from:accounts[42],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[4],value:80});

result = await instance.transferOwnership(accounts[1]);
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[7],value:82});

result = await instance.sweepCommission(237778);
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("Usygd4L2Oj7WfFnMPVmS",{from:accounts[27],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 8',async() => {
result = await instance.sweepCommission(136608);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("90CmSe4Ph1Gj8",{from:accounts[86],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[2],value:90});

});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[2],value:35});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(37391);
result = await instance.claimThrone("eLUCEjD9wqxgt2dYa5pl",{from:accounts[93],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 10',async() => {
result = await instance.sweepCommission(282731);
await instance.sendTransaction({from:accounts[7],value:99});

result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("HvxgVbGBUAMZW10f",{from:accounts[73],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 11',async() => {
result = await instance.claimThrone("wtvmZnCXOVMUE2s",{from:accounts[72],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[6],value:72});

result = await instance.sweepCommission(923588);
result = await instance.transferOwnership(accounts[4]);
});
it('test 12',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("07omSn3ulPe",{from:accounts[74],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(779908);
await instance.sendTransaction({from:accounts[2],value:56});

});
it('test 13',async() => {
result = await instance.claimThrone("ZiUBEnlhHudjTtC06Q",{from:accounts[55],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[9],value:35});

result = await instance.sweepCommission(514268);
result = await instance.transferOwnership(accounts[5]);
});
it('test 14',async() => {
result = await instance.sweepCommission(690249);
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("yuVcTOHCL7PqdQhn63",{from:accounts[42],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[7],value:73});

});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[9],value:75});

result = await instance.sweepCommission(344800);
result = await instance.claimThrone("KucirIbRnvqt",{from:accounts[68],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[5]);
});
it('test 16',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(433644);
result = await instance.claimThrone("ZWE6cKiUo3kHIyNJ7L",{from:accounts[43],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[8],value:30});

});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[5],value:75});

result = await instance.claimThrone("sGHANSUrgX",{from:accounts[35],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(620055);
result = await instance.transferOwnership(accounts[1]);
});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[5],value:13});

result = await instance.sweepCommission(387291);
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("k24QaZPTnb",{from:accounts[17],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 19',async() => {
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[5],value:20});

result = await instance.sweepCommission(287873);
result = await instance.claimThrone("YCy4L3GNhxlnrE8",{from:accounts[9],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 20',async() => {
result = await instance.claimThrone("y8OE79poAU1jhQsFLuB",{from:accounts[37],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(119257);
await instance.sendTransaction({from:accounts[3],value:60});

result = await instance.transferOwnership(accounts[4]);
});
it('test 21',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(631443);
result = await instance.claimThrone("y3OXp5e4xmquijr8",{from:accounts[20],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[4],value:30});

});
it('test 22',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(892426);
result = await instance.claimThrone("OsS3XD6hPboIHW0ZcUxn",{from:accounts[48],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[1],value:33});

});
it('test 23',async() => {
result = await instance.claimThrone("Ffxvi4ZrpRn93kzMdat",{from:accounts[82],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(930321);
await instance.sendTransaction({from:accounts[7],value:1});

});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[3],value:34});

result = await instance.claimThrone("wl8cmu93qPiLz6",{from:accounts[20],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(964110);
result = await instance.transferOwnership(accounts[1]);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[5],value:21});

result = await instance.claimThrone("46nJ5LfwH9sECceO1",{from:accounts[27],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(68164);
result = await instance.transferOwnership(accounts[1]);
});
it('test 26',async() => {
result = await instance.sweepCommission(676726);
await instance.sendTransaction({from:accounts[5],value:51});

result = await instance.claimThrone("xbdSCOBJ7aHU0n1ARjp",{from:accounts[76],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[1],value:50});

result = await instance.claimThrone("TO6ZIxtgrhkEnLpJ9Gu",{from:accounts[94],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(504190);
result = await instance.transferOwnership(accounts[4]);
});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[3],value:62});

result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(297224);
result = await instance.claimThrone("9n1HzihpfFEoAKm5vB",{from:accounts[57],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 29',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(199098);
await instance.sendTransaction({from:accounts[7],value:21});

result = await instance.claimThrone("Tiwhsp8EBmMtqdR2",{from:accounts[10],value:web3.utils.toWei(web3.utils.toBN(4))});
});
});
