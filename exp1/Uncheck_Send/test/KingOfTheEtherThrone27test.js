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
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[7],value:27});

result = await instance.claimThrone("w4bozeHs2kTZGQ",{from:accounts[83],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(958285);
});
it('test 1',async() => {
result = await instance.claimThrone("i4HlbNSDKf31AV5",{from:accounts[14],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(419752);
await instance.sendTransaction({from:accounts[2],value:56});

});
it('test 2',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("z6t3s01kqN",{from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[1],value:78});

result = await instance.sweepCommission(575259);
});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[2],value:63});

result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("k08ATIusaONre4tl9Cy",{from:accounts[20],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(84475);
});
it('test 4',async() => {
result = await instance.sweepCommission(663796);
await instance.sendTransaction({from:accounts[2],value:28});

result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("01THst2xSICfjegqM4k",{from:accounts[79],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 5',async() => {
result = await instance.claimThrone("9woAXr5vIjepB",{from:accounts[20],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[7],value:12});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(982033);
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[5],value:94});

result = await instance.sweepCommission(103669);
result = await instance.claimThrone("Qvxty4Z8YCVu",{from:accounts[57],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[2]);
});
it('test 7',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[1],value:74});

result = await instance.claimThrone("gOWz1u6AK5h",{from:accounts[37],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(5167);
});
it('test 8',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("vfIUT07BO8bqdC",{from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[7],value:76});

result = await instance.sweepCommission(119525);
});
it('test 9',async() => {
result = await instance.sweepCommission(634964);
await instance.sendTransaction({from:accounts[7],value:22});

result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("YfwqVIxcPaJ",{from:accounts[43],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 10',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("NWxPfQpvqwuL",{from:accounts[24],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[2],value:83});

result = await instance.sweepCommission(407231);
});
it('test 11',async() => {
result = await instance.sweepCommission(218661);
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("YH5k7fUN1qA8",{from:accounts[60],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[8],value:96});

});
it('test 12',async() => {
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[3],value:99});

result = await instance.sweepCommission(482710);
result = await instance.claimThrone("4ZVS9iNRx5",{from:accounts[22],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 13',async() => {
result = await instance.claimThrone("3wOWQXCAcVfRDeTI",{from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[3],value:17});

result = await instance.sweepCommission(500510);
});
it('test 14',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("EKhFTAlNgn0sORD1aBJ",{from:accounts[41],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[1],value:34});

result = await instance.sweepCommission(940434);
});
it('test 15',async() => {
result = await instance.claimThrone("KgV5M76uzcpoAi",{from:accounts[17],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[8],value:34});

result = await instance.sweepCommission(484193);
});
it('test 16',async() => {
result = await instance.sweepCommission(1013201);
await instance.sendTransaction({from:accounts[2],value:35});

result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("bwmy9gOJCMR",{from:accounts[54],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 17',async() => {
result = await instance.sweepCommission(34199);
result = await instance.claimThrone("xY18ZjkmPyul4V",{from:accounts[56],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[8],value:93});

});
it('test 18',async() => {
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[9],value:15});

result = await instance.sweepCommission(17085);
result = await instance.claimThrone("L4u1TUkYiJGH0VZoAphm",{from:accounts[39],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 19',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("5ovIdW21hJFy",{from:accounts[95],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(213245);
await instance.sendTransaction({from:accounts[4],value:42});

});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 20',async() => {
result = await instance.claimThrone("M0duLhfJDHpKGw975Xan",{from:accounts[72],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(775447);
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[2],value:78});

});
it('test 21',async() => {
result = await instance.claimThrone("Gue5mtg2OHR9Lc6",{from:accounts[53],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[9],value:74});

result = await instance.sweepCommission(601576);
result = await instance.transferOwnership(accounts[1]);
});
it('test 22',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("EjzvIRAJy70biZeC",{from:accounts[18],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(636135);
await instance.sendTransaction({from:accounts[2],value:88});

});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[3],value:77});

result = await instance.claimThrone("Aty0LZIEYhTC",{from:accounts[92],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(691178);
result = await instance.transferOwnership(accounts[5]);
});
it('test 24',async() => {
result = await instance.sweepCommission(735300);
await instance.sendTransaction({from:accounts[5],value:22});

result = await instance.claimThrone("Im74qt8yBLojnKCRsz",{from:accounts[29],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[1]);
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[7],value:16});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("IwuygYV71LjcTG3NJKq",{from:accounts[39],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(415703);
});
it('test 26',async() => {
result = await instance.sweepCommission(440116);
result = await instance.claimThrone("6zgUlsDXaxJyBweOH5",{from:accounts[34],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[2],value:64});

result = await instance.transferOwnership(accounts[1]);
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[5],value:45});

result = await instance.sweepCommission(143573);
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("v9cCKoxSUy",{from:accounts[32],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 28',async() => {
result = await instance.sweepCommission(211355);
await instance.sendTransaction({from:accounts[5],value:49});

result = await instance.claimThrone("VXFLgza8Kn",{from:accounts[41],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 29',async() => {
result = await instance.sweepCommission(896713);
await instance.sendTransaction({from:accounts[1],value:90});

result = await instance.claimThrone("O1DpreHLhU8oRnXkFI",{from:accounts[55],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[5]);
});
});
