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
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[1],value:35});

result = await instance.sweepCommission(269137);
result = await instance.claimThrone("YESkh7FLbNjys6t1xe",{from:accounts[53],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 1',async() => {
result = await instance.sweepCommission(584696);
result = await instance.claimThrone("KH3lEkFL8M7",{from:accounts[50],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[3],value:53});

});
it('test 2',async() => {
result = await instance.claimThrone("9bApBdwHL23Gf5",{from:accounts[35],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(464434);
await instance.sendTransaction({from:accounts[5],value:27});

result = await instance.transferOwnership(accounts[0]);
});
it('test 3',async() => {
result = await instance.sweepCommission(838740);
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[7],value:51});

result = await instance.claimThrone("GWO6dZESXA4q2brlhs",{from:accounts[26],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[2],value:16});

result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(588918);
result = await instance.claimThrone("JD1fMRWQhlrvG",{from:accounts[72],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 5',async() => {
result = await instance.claimThrone("6173NMvpogjEm",{from:accounts[83],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[3],value:14});

result = await instance.sweepCommission(419716);
});
it('test 6',async() => {
result = await instance.claimThrone("hueGHt6YS4",{from:accounts[62],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[2],value:45});

result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(236036);
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[9],value:33});

result = await instance.claimThrone("xIG8LHuCJY5SD7",{from:accounts[94],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(673581);
result = await instance.transferOwnership(accounts[1]);
});
it('test 8',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[9],value:36});

result = await instance.claimThrone("hBeT5KWy1CcvqG",{from:accounts[97],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(832515);
});
it('test 9',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(10101);
await instance.sendTransaction({from:accounts[4],value:69});

result = await instance.claimThrone("sHgZDmopBMy1qANl",{from:accounts[55],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 10',async() => {
result = await instance.sweepCommission(117865);
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("m6krFeHUZyfcTj5C4DB7",{from:accounts[64],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[3],value:28});

});
it('test 11',async() => {
result = await instance.sweepCommission(554562);
result = await instance.transferOwnership(accounts[5]);
result = await instance.claimThrone("NMFmwojev0OuLI",{from:accounts[26],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[5],value:86});

});
it('test 12',async() => {
result = await instance.claimThrone("txbHj72Jma9As6",{from:accounts[8],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(72679);
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[6],value:21});

});
it('test 13',async() => {
result = await instance.sweepCommission(771374);
result = await instance.claimThrone("KGf97AtUW3N6qekQ4Dnj",{from:accounts[78],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[3],value:17});

result = await instance.transferOwnership(accounts[0]);
});
it('test 14',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.sweepCommission(538765);
result = await instance.claimThrone("rG6XeofisOAjhBN4Hkb",{from:accounts[99],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[1],value:63});

});
it('test 15',async() => {
result = await instance.sweepCommission(73907);
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("AKxGNUoH1na",{from:accounts[74],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[1],value:58});

});
it('test 16',async() => {
result = await instance.sweepCommission(713558);
await instance.sendTransaction({from:accounts[4],value:12});

result = await instance.claimThrone("52SsQkjBY7NC3OPLcJ",{from:accounts[42],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[2]);
});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[5],value:72});

result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("ZFmsdJkbUIP50A",{from:accounts[84],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(600833);
});
it('test 18',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("bHqoLeCKD2",{from:accounts[11],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[2],value:53});

result = await instance.sweepCommission(125994);
});
it('test 19',async() => {
result = await instance.claimThrone("8DM6Ahvr9SlJ",{from:accounts[50],value:web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[7],value:15});

result = await instance.sweepCommission(1011926);
result = await instance.transferOwnership(accounts[0]);
});
it('test 20',async() => {
result = await instance.claimThrone("9jFQUvEShzncgo",{from:accounts[71],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[7],value:53});

result = await instance.sweepCommission(123535);
});
it('test 21',async() => {
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("fEt5nCyqxONVBjL",{from:accounts[66],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(66920);
await instance.sendTransaction({from:accounts[4],value:56});

});
it('test 22',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("z4tA6EP9fuByhx5vK",{from:accounts[89],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[5],value:97});

result = await instance.sweepCommission(928001);
});
it('test 23',async() => {
result = await instance.sweepCommission(391267);
result = await instance.claimThrone("hiaLWrY4KS",{from:accounts[10],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[5],value:84});

});
it('test 24',async() => {
result = await instance.claimThrone("lp58zDVuRQOAfyKhHa",{from:accounts[36],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[3],value:6});

result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(817773);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 25',async() => {
result = await instance.sweepCommission(731758);
await instance.sendTransaction({from:accounts[7],value:14});

result = await instance.claimThrone("uCDJzaX9oymNGThR",{from:accounts[97],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.transferOwnership(accounts[4]);
});
it('test 26',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("BXy8l4U6x2f0jvM",{from:accounts[42],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(873916);
await instance.sendTransaction({from:accounts[4],value:45});

});
it('test 27',async() => {
result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(242805);
result = await instance.claimThrone("i9jaIfYBsFz83KUX",{from:accounts[75],value:web3.utils.toWei(web3.utils.toBN(2))});
await instance.sendTransaction({from:accounts[9],value:74});

});
it('test 28',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[9],value:93});

result = await instance.sweepCommission(578062);
result = await instance.claimThrone("pmvkjcACGtYNi",{from:accounts[82],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 29',async() => {
result = await instance.claimThrone("ZAjSwl4KBLqIV",{from:accounts[80],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(787739);
await instance.sendTransaction({from:accounts[1],value:11});

result = await instance.transferOwnership(accounts[4]);
});
});
