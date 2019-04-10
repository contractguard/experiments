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
await instance.sendTransaction({from:accounts[7],value:90});

result = await instance.sweepCommission(802186);
result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("lPNUKHI5zaZ0YeExD3G",{from:accounts[38],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 1',async() => {
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[1],value:5});

result = await instance.claimThrone("3kNFPLExbfI5WC07aM84",{from:accounts[85],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(434609);
});
it('test 2',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(640737);
await instance.sendTransaction({from:accounts[2],value:72});

result = await instance.claimThrone("ZaxclNQquihTL8r",{from:accounts[51],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 3',async() => {
result = await instance.claimThrone("qZeHdG17M0bBYFcaP",{from:accounts[48],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(245057);
await instance.sendTransaction({from:accounts[7],value:64});

});
it('test 4',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(899770);
result = await instance.claimThrone("23kiUTKbnvCl",{from:accounts[73],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[2],value:79});

});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[1],value:46});

result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(579502);
result = await instance.claimThrone("kug2LNB0nSoJGfCYz",{from:accounts[97],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 6',async() => {
result = await instance.sweepCommission(368394);
await instance.sendTransaction({from:accounts[8],value:59});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("SDIAzhPQfYmMKZ30O",{from:accounts[59],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 7',async() => {
result = await instance.sweepCommission(510115);
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[9],value:75});

result = await instance.claimThrone("Cj1Uy0qVWBAQ",{from:accounts[32],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[1],value:29});

result = await instance.claimThrone("YgBI79lioSHkhaDeMcA",{from:accounts[35],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(350889);
result = await instance.transferOwnership(accounts[5]);
});
it('test 9',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[5],value:8});

result = await instance.claimThrone("5C7dPUWFYzQpGAj",{from:accounts[20],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(545862);
});
it('test 10',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("RSMdPWX7nhwZb",{from:accounts[16],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(884126);
await instance.sendTransaction({from:accounts[9],value:44});

});
it('test 11',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("GY3XNurn9JD5",{from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[5],value:80});

result = await instance.sweepCommission(172584);
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[4],value:96});

result = await instance.claimThrone("jHbX5BkmRdlMJTGDA",{from:accounts[40],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(117876);
});
it('test 13',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[3],value:61});

result = await instance.sweepCommission(37037);
result = await instance.claimThrone("uPoLr9RDahO",{from:accounts[74],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 14',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(845538);
result = await instance.claimThrone("lC3PmrIbeL",{from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[5],value:35});

});
it('test 15',async() => {
result = await instance.sweepCommission(1024579);
result = await instance.claimThrone("Jsrh195Y0tNDLImPTc",{from:accounts[18],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[8],value:41});

result = await instance.transferOwnership(accounts[4]);
});
it('test 16',async() => {
result = await instance.sweepCommission(891400);
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[7],value:21});

result = await instance.claimThrone("MB9ELxc68bIP",{from:accounts[16],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 17',async() => {
result = await instance.claimThrone("L6auHVvCDWPB",{from:accounts[38],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[1],value:37});

result = await instance.sweepCommission(630415);
});
it('test 18',async() => {
result = await instance.claimThrone("0ZABnER1iokqe9HLrcJ",{from:accounts[66],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(703418);
await instance.sendTransaction({from:accounts[2],value:42});

});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[7],value:15});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(804376);
result = await instance.claimThrone("LEcbJvg09P3SMUlItsGZ",{from:accounts[29],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 20',async() => {
result = await instance.sweepCommission(181737);
result = await instance.claimThrone("eVpIYwuCmzidB2x5N",{from:accounts[39],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[1],value:9});

});
it('test 21',async() => {
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(777457);
await instance.sendTransaction({from:accounts[4],value:88});

result = await instance.claimThrone("NuXjFsrLfG",{from:accounts[74],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 22',async() => {
result = await instance.sweepCommission(252041);
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[6],value:31});

result = await instance.claimThrone("DZkfKvqVTA8x7uX0t",{from:accounts[51],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 23',async() => {
result = await instance.sweepCommission(733507);
result = await instance.claimThrone("oahQwu04G2cLPMjfstD",{from:accounts[28],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[5],value:67});

result = await instance.transferOwnership(accounts[5]);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 24',async() => {
result = await instance.claimThrone("uWOnSPvGeE3Z7CUFyRK",{from:accounts[38],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[9],value:60});

result = await instance.sweepCommission(1009343);
result = await instance.transferOwnership(accounts[1]);
});
it('test 25',async() => {
result = await instance.sweepCommission(623332);
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("eS2sBwJdR9KCNAFixI",{from:accounts[47],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[7],value:44});

});
it('test 26',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[8],value:93});

result = await instance.sweepCommission(607790);
result = await instance.claimThrone("dbMZYHUtoE",{from:accounts[76],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 27',async() => {
result = await instance.claimThrone("CIXJQN0S8hFTjmB",{from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(336302);
await instance.sendTransaction({from:accounts[2],value:16});

result = await instance.transferOwnership(accounts[0]);
});
it('test 28',async() => {
result = await instance.claimThrone("5WpfqmIkVN2Zl",{from:accounts[63],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(941917);
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[9],value:74});

});
it('test 29',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("B9KxpL1nbtgA",{from:accounts[77],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[5],value:100});

result = await instance.sweepCommission(561783);
});
});
