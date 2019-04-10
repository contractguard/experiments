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
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[9],value:73});
});
it('test 1',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[6],value:27});
});
it('test 2',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[5],value:24});
});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[6],value:100});
result = await instance.withdrawAll(accounts[3]);});
it('test 4',async() => {
result = await instance.withdrawAll(accounts[1]);await instance.sendTransaction({from:accounts[7],value:26});
});
it('test 5',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[5],value:98});
});
it('test 6',async() => {
result = await instance.withdrawAll(accounts[5]);await instance.sendTransaction({from:accounts[6],value:31});
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[5],value:52});
result = await instance.withdrawAll(accounts[5]);});
it('test 8',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[5],value:69});
});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[9],value:93});
result = await instance.withdrawAll(accounts[2]);});
it('test 10',async() => {
result = await instance.withdrawAll(accounts[1]);await instance.sendTransaction({from:accounts[6],value:48});
});
it('test 11',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[5],value:76});
});
it('test 12',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[4],value:9});
});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[7],value:35});
result = await instance.withdrawAll(accounts[4]);});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[1],value:6});
result = await instance.withdrawAll(accounts[2]);});
it('test 15',async() => {
result = await instance.withdrawAll(accounts[1]);await instance.sendTransaction({from:accounts[7],value:36});
});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[5],value:21});
result = await instance.withdrawAll(accounts[4]);});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[7],value:36});
result = await instance.withdrawAll(accounts[2]);});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[1],value:66});
result = await instance.withdrawAll(accounts[0]);});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[4],value:25});
result = await instance.withdrawAll(accounts[1]);});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[2],value:48});
result = await instance.withdrawAll(accounts[1]);});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[3],value:41});
result = await instance.withdrawAll(accounts[1]);});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[3],value:32});
result = await instance.withdrawAll(accounts[1]);});
it('test 23',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[3],value:45});
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[4],value:96});
result = await instance.withdrawAll(accounts[4]);});
it('test 25',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[9],value:67});
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[1],value:13});
result = await instance.withdrawAll(accounts[1]);});
it('test 27',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[5],value:22});
});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[5],value:62});
result = await instance.withdrawAll(accounts[2]);});
it('test 29',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[4],value:98});
});
it('test 30',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[3],value:27});
});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[4],value:38});
result = await instance.withdrawAll(accounts[0]);});
it('test 32',async() => {
result = await instance.withdrawAll(accounts[1]);await instance.sendTransaction({from:accounts[8],value:99});
});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[8],value:5});
result = await instance.withdrawAll(accounts[2]);});
it('test 34',async() => {
result = await instance.withdrawAll(accounts[1]);await instance.sendTransaction({from:accounts[5],value:53});
});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[7],value:51});
result = await instance.withdrawAll(accounts[4]);});
it('test 36',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[3],value:33});
});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[7],value:9});
result = await instance.withdrawAll(accounts[2]);});
it('test 38',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[6],value:78});
});
it('test 39',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[3],value:24});
});
it('test 40',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[4],value:87});
});
it('test 41',async() => {
result = await instance.withdrawAll(accounts[1]);await instance.sendTransaction({from:accounts[6],value:21});
});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[3],value:89});
result = await instance.withdrawAll(accounts[1]);});
it('test 43',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[1],value:1});
});
it('acctack', async() => {
await attack.sendTransaction({from:accounts[0]})});
it('test 44',async() => {
result = await instance.withdrawAll(accounts[1]);await instance.sendTransaction({from:accounts[5],value:75});
});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[7],value:70});
result = await instance.withdrawAll(accounts[5]);});
it('test 46',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[1],value:52});
});
it('test 47',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[8],value:100});
});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[6],value:1});
result = await instance.withdrawAll(accounts[3]);});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[5],value:51});
result = await instance.withdrawAll(accounts[5]);});
});
