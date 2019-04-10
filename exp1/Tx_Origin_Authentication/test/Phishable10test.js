const Attack = artifacts.require("Attack");
const Phishable = artifacts.require("Phishable");
contract('Phishable', async (accounts) => {
const owner = accounts[0];
let attack;let instance;
let result;
before('setup contract for each test',async() => {
instance = await Phishable.new(accounts[0], {from: accounts[0]});
attack = await Attack.new(instance.address,accounts[400],{from:accounts[400]});
});
it('test 0',async() => {
await instance.sendTransaction({from: accounts[0], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[1], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[2], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[3], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[4], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[5], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[7],value:11});
result = await instance.withdrawAll(accounts[2]);});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[8],value:7});
result = await instance.withdrawAll(accounts[0]);});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[6],value:47});
result = await instance.withdrawAll(accounts[2]);});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[6],value:31});
result = await instance.withdrawAll(accounts[2]);});
it('test 4',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[6],value:8});
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[8],value:73});
result = await instance.withdrawAll(accounts[2]);});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[9],value:9});
result = await instance.withdrawAll(accounts[3]);});
it('test 7',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[2],value:20});
});
it('test 8',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[3],value:62});
});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[6],value:98});
result = await instance.withdrawAll(accounts[0]);});
it('test 10',async() => {
result = await instance.withdrawAll(accounts[1]);await instance.sendTransaction({from:accounts[2],value:75});
});
it('test 11',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[8],value:44});
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[1],value:99});
result = await instance.withdrawAll(accounts[0]);});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[7],value:42});
result = await instance.withdrawAll(accounts[3]);});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[8],value:66});
result = await instance.withdrawAll(accounts[2]);});
it('test 15',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[4],value:100});
});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[9],value:76});
result = await instance.withdrawAll(accounts[0]);});
it('test 17',async() => {
result = await instance.withdrawAll(accounts[5]);await instance.sendTransaction({from:accounts[5],value:73});
});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[1],value:14});
result = await instance.withdrawAll(accounts[5]);});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[6],value:50});
result = await instance.withdrawAll(accounts[4]);});
it('test 20',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[8],value:65});
});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[2],value:78});
result = await instance.withdrawAll(accounts[1]);});
it('test 22',async() => {
result = await instance.withdrawAll(accounts[5]);await instance.sendTransaction({from:accounts[8],value:94});
});
it('test 23',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[7],value:76});
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[9],value:74});
result = await instance.withdrawAll(accounts[0]);});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[3],value:60});
result = await instance.withdrawAll(accounts[5]);});
it('test 26',async() => {
result = await instance.withdrawAll(accounts[1]);await instance.sendTransaction({from:accounts[8],value:21});
});
it('test 27',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[4],value:100});
});
it('test 28',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[8],value:65});
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[2],value:65});
result = await instance.withdrawAll(accounts[2]);});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[4],value:28});
result = await instance.withdrawAll(accounts[5]);});
it('test 31',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[1],value:94});
});
it('test 32',async() => {
result = await instance.withdrawAll(accounts[5]);await instance.sendTransaction({from:accounts[5],value:52});
});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[2],value:35});
result = await instance.withdrawAll(accounts[3]);});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[2],value:4});
result = await instance.withdrawAll(accounts[5]);});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[6],value:43});
result = await instance.withdrawAll(accounts[2]);});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[7],value:48});
result = await instance.withdrawAll(accounts[5]);});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[4],value:51});
result = await instance.withdrawAll(accounts[4]);});
it('test 38',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[9],value:93});
});
it('test 39',async() => {
result = await instance.withdrawAll(accounts[1]);await instance.sendTransaction({from:accounts[1],value:46});
});
it('test 40',async() => {
await instance.sendTransaction({from:accounts[6],value:39});
result = await instance.withdrawAll(accounts[3]);});
it('acctack', async() => {
await attack.sendTransaction({from:accounts[0]})});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[4],value:11});
result = await instance.withdrawAll(accounts[1]);});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[4],value:2});
result = await instance.withdrawAll(accounts[0]);});
it('test 43',async() => {
await instance.sendTransaction({from:accounts[8],value:53});
result = await instance.withdrawAll(accounts[1]);});
it('test 44',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[6],value:22});
});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[9],value:96});
result = await instance.withdrawAll(accounts[2]);});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[4],value:71});
result = await instance.withdrawAll(accounts[2]);});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[9],value:35});
result = await instance.withdrawAll(accounts[2]);});
it('test 48',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[4],value:47});
});
it('test 49',async() => {
result = await instance.withdrawAll(accounts[1]);await instance.sendTransaction({from:accounts[3],value:22});
});
});
