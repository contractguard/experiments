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
await instance.sendTransaction({from:accounts[1],value:63});

result = await instance.claimThrone("AamyfIbDdqKjhpGo",{from:accounts[49],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(464740);
});
it('test 1',async() => {
result = await instance.sweepCommission(332117);
await instance.sendTransaction({from:accounts[2],value:7});

result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("kle0RmXTrMJBdQSuZLjn",{from:accounts[97],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[6],value:19});

result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("Ffvq6I4tbuUWC3g",{from:accounts[19],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(569548);
});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[7],value:7});

result = await instance.sweepCommission(888911);
result = await instance.claimThrone("1eY4ryWvsR3LDKbECN",{from:accounts[27],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 4',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[1],value:35});

result = await instance.sweepCommission(108472);
result = await instance.claimThrone("XcLkFvDeGEQAno1p",{from:accounts[27],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[7],value:86});

result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("EfJaFbWkBS1odpmwuN",{from:accounts[34],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(960048);
});
it('test 6',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(1013208);
await instance.sendTransaction({from:accounts[8],value:9});

result = await instance.claimThrone("1uAeaZBcYy0nPT",{from:accounts[31],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 7',async() => {
result = await instance.sweepCommission(672063);
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("jGzAcklV3Kf",{from:accounts[73],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[7],value:11});

});
it('test 8',async() => {
result = await instance.sweepCommission(624628);
result = await instance.claimThrone("W7nzm5BvM9dR",{from:accounts[94],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[1],value:28});

});
it('test 9',async() => {
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(203091);
await instance.sendTransaction({from:accounts[4],value:64});

result = await instance.claimThrone("9I6VkSK1WzP",{from:accounts[12],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 10',async() => {
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[9],value:39});

result = await instance.claimThrone("prPwKN2BTSG",{from:accounts[81],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(125501);
});
it('test 11',async() => {
result = await instance.sweepCommission(570995);
await instance.sendTransaction({from:accounts[6],value:73});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("AahQxdvzqrLbu5JFnKU",{from:accounts[52],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 12',async() => {
result = await instance.claimThrone("ofPkQApSlrNhB46",{from:accounts[26],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[8],value:65});

result = await instance.sweepCommission(418562);
});
it('test 13',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("beNxKF3casHwJV6Wq571",{from:accounts[41],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(46450);
await instance.sendTransaction({from:accounts[6],value:90});

});
it('test 14',async() => {
result = await instance.sweepCommission(399401);
await instance.sendTransaction({from:accounts[4],value:100});

result = await instance.transferOwnership(accounts[1]);
result = await instance.claimThrone("T6GQMEajpy7ldtHWKY",{from:accounts[34],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 15',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(1024166);
result = await instance.claimThrone("dY93SlNgxJAL4o7Pqvn",{from:accounts[78],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[6],value:18});

});
it('test 16',async() => {
result = await instance.sweepCommission(388176);
result = await instance.transferOwnership(accounts[4]);
await instance.sendTransaction({from:accounts[3],value:67});

result = await instance.claimThrone("HY7Buj2ivOScDJbXpe",{from:accounts[33],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 17',async() => {
result = await instance.claimThrone("1dWYtISzF2PqngBLs76K",{from:accounts[100],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[3],value:46});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(331148);
});
it('test 18',async() => {
result = await instance.claimThrone("heRdDlZXfq",{from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[3],value:99});

result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(761383);
});
it('test 19',async() => {
result = await instance.sweepCommission(565759);
result = await instance.claimThrone("FDbpyHue8TosEBiC",{from:accounts[84],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[2],value:11});

});
it('test 20',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(687032);
result = await instance.claimThrone("cla81Kpr39dtq",{from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[1],value:78});

});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[1],value:21});

result = await instance.claimThrone("fpjagA786MukPEmT2z",{from:accounts[6],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(929578);
});
it('test 22',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(163142);
result = await instance.claimThrone("hzsBKVbmy2I6lJfr7Uj",{from:accounts[97],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[9],value:75});

});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 23',async() => {
result = await instance.sweepCommission(190777);
await instance.sendTransaction({from:accounts[3],value:53});

result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("6nFghcyEBDJZW",{from:accounts[74],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[2],value:10});

result = await instance.claimThrone("05fioqOeRNKk9",{from:accounts[33],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(182922);
result = await instance.transferOwnership(accounts[0]);
});
it('test 25',async() => {
result = await instance.sweepCommission(187639);
await instance.sendTransaction({from:accounts[5],value:39});

result = await instance.claimThrone("Uh1NKejIaMflwnds8bS",{from:accounts[9],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 26',async() => {
result = await instance.claimThrone("CLm2qr8aTeP0lv",{from:accounts[42],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(1040467);
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[8],value:47});

});
it('test 27',async() => {
result = await instance.sweepCommission(2791);
await instance.sendTransaction({from:accounts[5],value:15});

result = await instance.claimThrone("Nr79YA2wuHemU",{from:accounts[36],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 28',async() => {
result = await instance.claimThrone("XhHTqsrBb43Y2WFRDx7",{from:accounts[95],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[8],value:62});

result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(85089);
});
it('test 29',async() => {
result = await instance.claimThrone("cYGvt0jJgBMV2",{from:accounts[27],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[8],value:45});

result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(403488);
});
});
