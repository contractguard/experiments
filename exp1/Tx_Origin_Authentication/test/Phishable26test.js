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
await instance.sendTransaction({from:accounts[1],value:75});
result = await instance.withdrawAll(accounts[2]);});
it('test 1',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[8],value:7});
});
it('test 2',async() => {
result = await instance.withdrawAll(accounts[5]);await instance.sendTransaction({from:accounts[8],value:2});
});
it('test 3',async() => {
result = await instance.withdrawAll(accounts[1]);await instance.sendTransaction({from:accounts[4],value:12});
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[1],value:50});
result = await instance.withdrawAll(accounts[1]);});
it('test 5',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[2],value:98});
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[9],value:5});
result = await instance.withdrawAll(accounts[4]);});
it('test 7',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[8],value:93});
});
it('test 8',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[9],value:52});
});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[7],value:50});
result = await instance.withdrawAll(accounts[4]);});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[1],value:44});
result = await instance.withdrawAll(accounts[3]);});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[8],value:6});
result = await instance.withdrawAll(accounts[4]);});
it('test 12',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[9],value:38});
});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[4],value:44});
result = await instance.withdrawAll(accounts[2]);});
it('test 14',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[2],value:96});
});
it('test 15',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[8],value:97});
});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[8],value:26});
result = await instance.withdrawAll(accounts[3]);});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[9],value:83});
result = await instance.withdrawAll(accounts[4]);});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[8],value:86});
result = await instance.withdrawAll(accounts[5]);});
it('test 19',async() => {
result = await instance.withdrawAll(accounts[5]);await instance.sendTransaction({from:accounts[7],value:68});
});
it('test 20',async() => {
result = await instance.withdrawAll(accounts[5]);await instance.sendTransaction({from:accounts[2],value:5});
});
it('test 21',async() => {
result = await instance.withdrawAll(accounts[5]);await instance.sendTransaction({from:accounts[9],value:31});
});
it('test 22',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[6],value:2});
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[8],value:34});
result = await instance.withdrawAll(accounts[1]);});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[4],value:72});
result = await instance.withdrawAll(accounts[3]);});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[7],value:95});
result = await instance.withdrawAll(accounts[2]);});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[2],value:97});
result = await instance.withdrawAll(accounts[0]);});
it('test 27',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[3],value:18});
});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[6],value:78});
result = await instance.withdrawAll(accounts[5]);});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[5],value:35});
result = await instance.withdrawAll(accounts[4]);});
it('test 30',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[5],value:44});
});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[2],value:95});
result = await instance.withdrawAll(accounts[5]);});
it('test 32',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[6],value:55});
});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[4],value:3});
result = await instance.withdrawAll(accounts[4]);});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[3],value:88});
result = await instance.withdrawAll(accounts[3]);});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[2],value:32});
result = await instance.withdrawAll(accounts[2]);});
it('test 36',async() => {
result = await instance.withdrawAll(accounts[1]);await instance.sendTransaction({from:accounts[5],value:16});
});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[6],value:3});
result = await instance.withdrawAll(accounts[4]);});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[6],value:43});
result = await instance.withdrawAll(accounts[2]);});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[6],value:80});
result = await instance.withdrawAll(accounts[2]);});
it('acctack', async() => {
await attack.sendTransaction({from:accounts[0]})});
it('test 40',async() => {
await instance.sendTransaction({from:accounts[9],value:7});
result = await instance.withdrawAll(accounts[4]);});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[3],value:12});
result = await instance.withdrawAll(accounts[5]);});
it('test 42',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[4],value:46});
});
it('test 43',async() => {
await instance.sendTransaction({from:accounts[3],value:58});
result = await instance.withdrawAll(accounts[1]);});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[6],value:10});
result = await instance.withdrawAll(accounts[1]);});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[2],value:90});
result = await instance.withdrawAll(accounts[4]);});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[9],value:19});
result = await instance.withdrawAll(accounts[3]);});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[4],value:27});
result = await instance.withdrawAll(accounts[2]);});
it('test 48',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[9],value:72});
});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[7],value:92});
result = await instance.withdrawAll(accounts[4]);});
});
