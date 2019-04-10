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
await instance.sendTransaction({from:accounts[2],value:86});
result = await instance.withdrawAll(accounts[4]);});
it('test 1',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[4],value:18});
});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[4],value:36});
result = await instance.withdrawAll(accounts[1]);});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[7],value:44});
result = await instance.withdrawAll(accounts[1]);});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[2],value:60});
result = await instance.withdrawAll(accounts[0]);});
it('test 5',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[4],value:91});
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[9],value:6});
result = await instance.withdrawAll(accounts[3]);});
it('test 7',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[4],value:31});
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[2],value:16});
result = await instance.withdrawAll(accounts[1]);});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[4],value:84});
result = await instance.withdrawAll(accounts[5]);});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[7],value:10});
result = await instance.withdrawAll(accounts[3]);});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[9],value:9});
result = await instance.withdrawAll(accounts[1]);});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[2],value:47});
result = await instance.withdrawAll(accounts[0]);});
it('test 13',async() => {
result = await instance.withdrawAll(accounts[5]);await instance.sendTransaction({from:accounts[7],value:22});
});
it('test 14',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[2],value:44});
});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[9],value:8});
result = await instance.withdrawAll(accounts[0]);});
it('test 16',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[1],value:57});
});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[4],value:2});
result = await instance.withdrawAll(accounts[0]);});
it('test 18',async() => {
result = await instance.withdrawAll(accounts[1]);await instance.sendTransaction({from:accounts[4],value:87});
});
it('test 19',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[7],value:17});
});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[5],value:52});
result = await instance.withdrawAll(accounts[1]);});
it('test 21',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[1],value:86});
});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[8],value:64});
result = await instance.withdrawAll(accounts[0]);});
it('test 23',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[1],value:80});
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[8],value:38});
result = await instance.withdrawAll(accounts[4]);});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[6],value:35});
result = await instance.withdrawAll(accounts[3]);});
it('test 26',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[7],value:59});
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[3],value:89});
result = await instance.withdrawAll(accounts[5]);});
it('test 28',async() => {
result = await instance.withdrawAll(accounts[1]);await instance.sendTransaction({from:accounts[2],value:76});
});
it('test 29',async() => {
result = await instance.withdrawAll(accounts[5]);await instance.sendTransaction({from:accounts[6],value:12});
});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[4],value:15});
result = await instance.withdrawAll(accounts[2]);});
it('test 31',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[2],value:37});
});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[5],value:71});
result = await instance.withdrawAll(accounts[5]);});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[5],value:95});
result = await instance.withdrawAll(accounts[1]);});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[2],value:41});
result = await instance.withdrawAll(accounts[3]);});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[3],value:35});
result = await instance.withdrawAll(accounts[2]);});
it('test 36',async() => {
result = await instance.withdrawAll(accounts[5]);await instance.sendTransaction({from:accounts[3],value:33});
});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[6],value:48});
result = await instance.withdrawAll(accounts[5]);});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[3],value:96});
result = await instance.withdrawAll(accounts[3]);});
it('test 39',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[8],value:31});
});
it('acctack', async() => {
await attack.sendTransaction({from:accounts[0]})});
it('test 40',async() => {
result = await instance.withdrawAll(accounts[1]);await instance.sendTransaction({from:accounts[3],value:49});
});
it('test 41',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[6],value:41});
});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[8],value:70});
result = await instance.withdrawAll(accounts[3]);});
it('test 43',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[7],value:36});
});
it('test 44',async() => {
result = await instance.withdrawAll(accounts[5]);await instance.sendTransaction({from:accounts[8],value:17});
});
it('test 45',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[8],value:95});
});
it('test 46',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[4],value:36});
});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[4],value:10});
result = await instance.withdrawAll(accounts[2]);});
it('test 48',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[8],value:9});
});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[1],value:89});
result = await instance.withdrawAll(accounts[5]);});
});
