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
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[5],value:84});
});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[3],value:100});
result = await instance.withdrawAll(accounts[3]);});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[6],value:86});
result = await instance.withdrawAll(accounts[0]);});
it('test 3',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[5],value:83});
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[5],value:69});
result = await instance.withdrawAll(accounts[5]);});
it('test 5',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[6],value:16});
});
it('test 6',async() => {
result = await instance.withdrawAll(accounts[1]);await instance.sendTransaction({from:accounts[3],value:46});
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[5],value:5});
result = await instance.withdrawAll(accounts[4]);});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[7],value:87});
result = await instance.withdrawAll(accounts[2]);});
it('test 9',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[2],value:73});
});
it('test 10',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[2],value:44});
});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[9],value:16});
result = await instance.withdrawAll(accounts[3]);});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[5],value:57});
result = await instance.withdrawAll(accounts[0]);});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[5],value:10});
result = await instance.withdrawAll(accounts[4]);});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[7],value:23});
result = await instance.withdrawAll(accounts[2]);});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[8],value:5});
result = await instance.withdrawAll(accounts[2]);});
it('test 16',async() => {
result = await instance.withdrawAll(accounts[5]);await instance.sendTransaction({from:accounts[4],value:91});
});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[2],value:14});
result = await instance.withdrawAll(accounts[5]);});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[1],value:27});
result = await instance.withdrawAll(accounts[5]);});
it('test 19',async() => {
result = await instance.withdrawAll(accounts[5]);await instance.sendTransaction({from:accounts[2],value:45});
});
it('test 20',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[6],value:92});
});
it('test 21',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[8],value:66});
});
it('test 22',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[2],value:3});
});
it('test 23',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[9],value:95});
});
it('test 24',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[5],value:54});
});
it('test 25',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[8],value:22});
});
it('test 26',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[5],value:78});
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[7],value:36});
result = await instance.withdrawAll(accounts[4]);});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[9],value:30});
result = await instance.withdrawAll(accounts[2]);});
it('test 29',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[1],value:50});
});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[5],value:31});
result = await instance.withdrawAll(accounts[2]);});
it('test 31',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[2],value:50});
});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[3],value:31});
result = await instance.withdrawAll(accounts[0]);});
it('test 33',async() => {
result = await instance.withdrawAll(accounts[1]);await instance.sendTransaction({from:accounts[7],value:38});
});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[4],value:1});
result = await instance.withdrawAll(accounts[5]);});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[7],value:46});
result = await instance.withdrawAll(accounts[0]);});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[8],value:6});
result = await instance.withdrawAll(accounts[5]);});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[7],value:22});
result = await instance.withdrawAll(accounts[1]);});
it('test 38',async() => {
result = await instance.withdrawAll(accounts[1]);await instance.sendTransaction({from:accounts[6],value:58});
});
it('test 39',async() => {
result = await instance.withdrawAll(accounts[5]);await instance.sendTransaction({from:accounts[5],value:92});
});
it('test 40',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[7],value:59});
});
it('test 41',async() => {
result = await instance.withdrawAll(accounts[1]);await instance.sendTransaction({from:accounts[2],value:21});
});
it('test 42',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[3],value:90});
});
it('test 43',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[8],value:100});
});
it('test 44',async() => {
result = await instance.withdrawAll(accounts[1]);await instance.sendTransaction({from:accounts[5],value:95});
});
it('acctack', async() => {
await attack.sendTransaction({from:accounts[0]})});
it('test 45',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[2],value:81});
});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[5],value:40});
result = await instance.withdrawAll(accounts[1]);});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[9],value:4});
result = await instance.withdrawAll(accounts[1]);});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[1],value:95});
result = await instance.withdrawAll(accounts[2]);});
it('test 49',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[3],value:72});
});
});
