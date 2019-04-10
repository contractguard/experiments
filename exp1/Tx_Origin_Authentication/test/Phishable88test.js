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
await instance.sendTransaction({from:accounts[6],value:25});
result = await instance.withdrawAll(accounts[0]);});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[5],value:24});
result = await instance.withdrawAll(accounts[0]);});
it('test 2',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[3],value:43});
});
it('test 3',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[3],value:8});
});
it('test 4',async() => {
result = await instance.withdrawAll(accounts[5]);await instance.sendTransaction({from:accounts[1],value:26});
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[5],value:9});
result = await instance.withdrawAll(accounts[5]);});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[5],value:6});
result = await instance.withdrawAll(accounts[2]);});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[3],value:88});
result = await instance.withdrawAll(accounts[1]);});
it('test 8',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[9],value:2});
});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[1],value:23});
result = await instance.withdrawAll(accounts[0]);});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[7],value:28});
result = await instance.withdrawAll(accounts[1]);});
it('test 11',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[6],value:13});
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[5],value:54});
result = await instance.withdrawAll(accounts[1]);});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[4],value:28});
result = await instance.withdrawAll(accounts[3]);});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[9],value:76});
result = await instance.withdrawAll(accounts[0]);});
it('test 15',async() => {
result = await instance.withdrawAll(accounts[5]);await instance.sendTransaction({from:accounts[6],value:66});
});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[1],value:86});
result = await instance.withdrawAll(accounts[2]);});
it('test 17',async() => {
result = await instance.withdrawAll(accounts[5]);await instance.sendTransaction({from:accounts[6],value:46});
});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[5],value:91});
result = await instance.withdrawAll(accounts[1]);});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[5],value:40});
result = await instance.withdrawAll(accounts[5]);});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[4],value:64});
result = await instance.withdrawAll(accounts[3]);});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[5],value:72});
result = await instance.withdrawAll(accounts[0]);});
it('test 22',async() => {
result = await instance.withdrawAll(accounts[5]);await instance.sendTransaction({from:accounts[8],value:28});
});
it('test 23',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[4],value:37});
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[2],value:91});
result = await instance.withdrawAll(accounts[2]);});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[7],value:25});
result = await instance.withdrawAll(accounts[4]);});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[2],value:41});
result = await instance.withdrawAll(accounts[1]);});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[3],value:46});
result = await instance.withdrawAll(accounts[5]);});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[8],value:31});
result = await instance.withdrawAll(accounts[4]);});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[4],value:92});
result = await instance.withdrawAll(accounts[4]);});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[2],value:62});
result = await instance.withdrawAll(accounts[2]);});
it('test 31',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[7],value:31});
});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[7],value:92});
result = await instance.withdrawAll(accounts[0]);});
it('test 33',async() => {
result = await instance.withdrawAll(accounts[1]);await instance.sendTransaction({from:accounts[4],value:85});
});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[1],value:97});
result = await instance.withdrawAll(accounts[1]);});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[3],value:30});
result = await instance.withdrawAll(accounts[2]);});
it('test 36',async() => {
result = await instance.withdrawAll(accounts[5]);await instance.sendTransaction({from:accounts[2],value:40});
});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[9],value:67});
result = await instance.withdrawAll(accounts[5]);});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[4],value:38});
result = await instance.withdrawAll(accounts[3]);});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[9],value:67});
result = await instance.withdrawAll(accounts[5]);});
it('test 40',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[3],value:15});
});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[7],value:66});
result = await instance.withdrawAll(accounts[3]);});
it('test 42',async() => {
result = await instance.withdrawAll(accounts[5]);await instance.sendTransaction({from:accounts[5],value:27});
});
it('test 43',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[8],value:81});
});
it('acctack', async() => {
await attack.sendTransaction({from:accounts[0]})});
it('test 44',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[6],value:10});
});
it('test 45',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[2],value:13});
});
it('test 46',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[6],value:95});
});
it('test 47',async() => {
result = await instance.withdrawAll(accounts[5]);await instance.sendTransaction({from:accounts[4],value:76});
});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[7],value:36});
result = await instance.withdrawAll(accounts[4]);});
it('test 49',async() => {
result = await instance.withdrawAll(accounts[1]);await instance.sendTransaction({from:accounts[6],value:57});
});
});
