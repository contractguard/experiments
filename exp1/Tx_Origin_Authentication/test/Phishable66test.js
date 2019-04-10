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
await instance.sendTransaction({from:accounts[8],value:24});
result = await instance.withdrawAll(accounts[0]);});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[7],value:8});
result = await instance.withdrawAll(accounts[1]);});
it('test 2',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[9],value:39});
});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[4],value:70});
result = await instance.withdrawAll(accounts[5]);});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[1],value:100});
result = await instance.withdrawAll(accounts[1]);});
it('test 5',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[6],value:4});
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[1],value:57});
result = await instance.withdrawAll(accounts[1]);});
it('test 7',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[7],value:35});
});
it('test 8',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[9],value:26});
});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[7],value:32});
result = await instance.withdrawAll(accounts[3]);});
it('test 10',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[2],value:42});
});
it('test 11',async() => {
result = await instance.withdrawAll(accounts[1]);await instance.sendTransaction({from:accounts[4],value:29});
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[2],value:1});
result = await instance.withdrawAll(accounts[1]);});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[6],value:2});
result = await instance.withdrawAll(accounts[1]);});
it('test 14',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[2],value:49});
});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[1],value:4});
result = await instance.withdrawAll(accounts[2]);});
it('test 16',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[1],value:97});
});
it('test 17',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[2],value:33});
});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[5],value:100});
result = await instance.withdrawAll(accounts[5]);});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[9],value:89});
result = await instance.withdrawAll(accounts[4]);});
it('test 20',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[2],value:9});
});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[8],value:39});
result = await instance.withdrawAll(accounts[0]);});
it('test 22',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[7],value:36});
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[2],value:47});
result = await instance.withdrawAll(accounts[1]);});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[4],value:65});
result = await instance.withdrawAll(accounts[4]);});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[1],value:26});
result = await instance.withdrawAll(accounts[0]);});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[6],value:12});
result = await instance.withdrawAll(accounts[1]);});
it('test 27',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[9],value:99});
});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[5],value:30});
result = await instance.withdrawAll(accounts[1]);});
it('test 29',async() => {
result = await instance.withdrawAll(accounts[1]);await instance.sendTransaction({from:accounts[6],value:70});
});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[5],value:62});
result = await instance.withdrawAll(accounts[5]);});
it('test 31',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[2],value:23});
});
it('test 32',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[2],value:63});
});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[4],value:88});
result = await instance.withdrawAll(accounts[1]);});
it('test 34',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[4],value:5});
});
it('test 35',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[8],value:75});
});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[8],value:50});
result = await instance.withdrawAll(accounts[1]);});
it('test 37',async() => {
result = await instance.withdrawAll(accounts[1]);await instance.sendTransaction({from:accounts[3],value:69});
});
it('test 38',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[1],value:54});
});
it('test 39',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[3],value:91});
});
it('test 40',async() => {
await instance.sendTransaction({from:accounts[6],value:74});
result = await instance.withdrawAll(accounts[3]);});
it('acctack', async() => {
await attack.sendTransaction({from:accounts[0]})});
it('test 41',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[4],value:36});
});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[1],value:67});
result = await instance.withdrawAll(accounts[1]);});
it('test 43',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[4],value:89});
});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[5],value:36});
result = await instance.withdrawAll(accounts[2]);});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[9],value:61});
result = await instance.withdrawAll(accounts[1]);});
it('test 46',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[4],value:82});
});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[2],value:51});
result = await instance.withdrawAll(accounts[4]);});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[8],value:82});
result = await instance.withdrawAll(accounts[2]);});
it('test 49',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[8],value:80});
});
});
