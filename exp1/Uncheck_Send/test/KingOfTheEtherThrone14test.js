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
result = await instance.claimThrone("PjdzuaVpf90io",{from:accounts[71],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(626666);
await instance.sendTransaction({from:accounts[7],value:49});

});
it('test 1',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.sweepCommission(47933);
await instance.sendTransaction({from:accounts[9],value:55});

result = await instance.claimThrone("1Hqlt7m9Wv",{from:accounts[59],value:web3.utils.toWei(web3.utils.toBN(4))});
});
it('test 2',async() => {
result = await instance.claimThrone("eSoaY5PnkbpX",{from:accounts[66],value:web3.utils.toWei(web3.utils.toBN(2))});
result = await instance.sweepCommission(927999);
await instance.sendTransaction({from:accounts[5],value:2});

result = await instance.transferOwnership(accounts[2]);
});
it('test 3',async() => {
result = await instance.sweepCommission(584730);
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[9],value:9});

result = await instance.claimThrone("Qrs5SNZ62aEu",{from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 4',async() => {
result = await instance.claimThrone("KVqDWc0Sg9nLo",{from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[7],value:33});

result = await instance.sweepCommission(495885);
});
it('test 5',async() => {
result = await instance.sweepCommission(793733);
result = await instance.claimThrone("W3eLSJsFKV8qCR",{from:accounts[16],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[6],value:98});

result = await instance.transferOwnership(accounts[4]);
});
it('test 6',async() => {
result = await instance.sweepCommission(389269);
await instance.sendTransaction({from:accounts[6],value:97});

result = await instance.transferOwnership(accounts[4]);
result = await instance.claimThrone("a286WTJw9O",{from:accounts[79],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[1],value:43});

result = await instance.claimThrone("8FYDefn7j2qiWJ",{from:accounts[59],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(667622);
result = await instance.transferOwnership(accounts[5]);
});
it('test 8',async() => {
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[1],value:17});

result = await instance.claimThrone("JC8eWYBu3dzi9Ea",{from:accounts[65],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(928539);
});
it('test 9',async() => {
result = await instance.transferOwnership(accounts[5]);
await instance.sendTransaction({from:accounts[5],value:11});

result = await instance.sweepCommission(143615);
result = await instance.claimThrone("P1YiV2Zqg5W8vzC",{from:accounts[75],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 10',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[6],value:8});

result = await instance.claimThrone("xorUPH6zie",{from:accounts[78],value:web3.utils.toWei(web3.utils.toBN(3))});
result = await instance.sweepCommission(773441);
});
it('test 11',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[6],value:77});

result = await instance.claimThrone("OcZs98t12LeIf",{from:accounts[17],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.sweepCommission(367264);
});
it('test 12',async() => {
result = await instance.sweepCommission(444132);
result = await instance.claimThrone("N9Mm34eFbx8WgK506J",{from:accounts[57],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[8],value:57});

});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[1],value:39});

result = await instance.sweepCommission(844230);
result = await instance.transferOwnership(accounts[0]);
result = await instance.claimThrone("LYrCBMcW6XwVE5",{from:accounts[63],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 14',async() => {
result = await instance.claimThrone("Etm3BC7UqnpzrwuNM69",{from:accounts[75],value:web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[3],value:88});

result = await instance.sweepCommission(1041823);
});
it('test 15',async() => {
result = await instance.transferOwnership(accounts[3]);
result = await instance.claimThrone("INDeScY4oQ6",{from:accounts[12],value:web3.utils.toWei(web3.utils.toBN(3))});
await instance.sendTransaction({from:accounts[9],value:45});

result = await instance.sweepCommission(883890);
});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[1],value:6});

result = await instance.transferOwnership(accounts[5]);
result = await instance.sweepCommission(1031699);
result = await instance.claimThrone("m8UleKc7BA2jFs0h",{from:accounts[12],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 17',async() => {
result = await instance.sweepCommission(999458);
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[1],value:38});

result = await instance.claimThrone("KHVs4vNpeCGk7OFoIA5J",{from:accounts[37],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 18',async() => {
result = await instance.transferOwnership(accounts[1]);
result = await instance.sweepCommission(373820);
await instance.sendTransaction({from:accounts[6],value:30});

result = await instance.claimThrone("ESRi7zvP1qwhrG2okIXc",{from:accounts[83],value:web3.utils.toWei(web3.utils.toBN(1))});
});
it('test 19',async() => {
result = await instance.claimThrone("gOwBzyV2NdhtiFM",{from:accounts[49],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[1],value:43});

result = await instance.sweepCommission(660833);
result = await instance.transferOwnership(accounts[5]);
});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[1],value:35});

result = await instance.claimThrone("5Kp73bhArB24s6tF",{from:accounts[74],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(770890);
result = await instance.transferOwnership(accounts[4]);
});
it('acctack', async() => {
await attack.send_money({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[55], value: web3.utils.toWei(web3.utils.toBN(10))});});
it('test 21',async() => {
result = await instance.sweepCommission(825598);
await instance.sendTransaction({from:accounts[6],value:4});

result = await instance.transferOwnership(accounts[2]);
result = await instance.claimThrone("1X3LZsoadIwG9qWhTl5j",{from:accounts[57],value:web3.utils.toWei(web3.utils.toBN(2))});
});
it('test 22',async() => {
result = await instance.transferOwnership(accounts[0]);
await instance.sendTransaction({from:accounts[6],value:75});

result = await instance.claimThrone("m43osaH1IU8",{from:accounts[59],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(800568);
});
it('test 23',async() => {
result = await instance.claimThrone("0bwN9qzrBaYnk",{from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(5))});
await instance.sendTransaction({from:accounts[4],value:64});

result = await instance.transferOwnership(accounts[4]);
result = await instance.sweepCommission(743521);
});
it('test 24',async() => {
result = await instance.sweepCommission(796364);
result = await instance.claimThrone("Z8UXOQ5wjk7W",{from:accounts[94],value:web3.utils.toWei(web3.utils.toBN(4))});
await instance.sendTransaction({from:accounts[7],value:29});

result = await instance.transferOwnership(accounts[5]);
});
it('test 25',async() => {
result = await instance.transferOwnership(accounts[1]);
await instance.sendTransaction({from:accounts[9],value:70});

result = await instance.sweepCommission(698762);
result = await instance.claimThrone("UwGO0dLMSJcgrCh",{from:accounts[43],value:web3.utils.toWei(web3.utils.toBN(5))});
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[9],value:74});

result = await instance.transferOwnership(accounts[2]);
result = await instance.sweepCommission(551933);
result = await instance.claimThrone("o1RDIFwgBU6E8",{from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(3))});
});
it('test 27',async() => {
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[5],value:19});

result = await instance.claimThrone("paHBMjh0qTscn9tN",{from:accounts[95],value:web3.utils.toWei(web3.utils.toBN(5))});
result = await instance.sweepCommission(348735);
});
it('test 28',async() => {
result = await instance.claimThrone("K2LDR1awWeqZmgOxcG",{from:accounts[61],value:web3.utils.toWei(web3.utils.toBN(1))});
result = await instance.sweepCommission(242185);
result = await instance.transferOwnership(accounts[3]);
await instance.sendTransaction({from:accounts[8],value:28});

});
it('test 29',async() => {
result = await instance.transferOwnership(accounts[2]);
await instance.sendTransaction({from:accounts[5],value:55});

result = await instance.sweepCommission(772960);
result = await instance.claimThrone("0j6g5inBzaGl",{from:accounts[17],value:web3.utils.toWei(web3.utils.toBN(4))});
});
});
