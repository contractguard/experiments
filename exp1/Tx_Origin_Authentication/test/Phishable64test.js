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
await instance.sendTransaction({from:accounts[9],value:35});
result = await instance.withdrawAll(accounts[1]);});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[6],value:20});
result = await instance.withdrawAll(accounts[1]);});
it('test 2',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[3],value:24});
});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[2],value:16});
result = await instance.withdrawAll(accounts[0]);});
it('test 4',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[8],value:24});
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[7],value:84});
result = await instance.withdrawAll(accounts[2]);});
it('test 6',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[7],value:73});
});
it('test 7',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[3],value:80});
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[7],value:29});
result = await instance.withdrawAll(accounts[0]);});
it('test 9',async() => {
result = await instance.withdrawAll(accounts[1]);await instance.sendTransaction({from:accounts[9],value:47});
});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[6],value:59});
result = await instance.withdrawAll(accounts[3]);});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[4],value:71});
result = await instance.withdrawAll(accounts[2]);});
it('test 12',async() => {
result = await instance.withdrawAll(accounts[1]);await instance.sendTransaction({from:accounts[4],value:6});
});
it('test 13',async() => {
result = await instance.withdrawAll(accounts[5]);await instance.sendTransaction({from:accounts[2],value:78});
});
it('test 14',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[8],value:4});
});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[2],value:64});
result = await instance.withdrawAll(accounts[3]);});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[4],value:32});
result = await instance.withdrawAll(accounts[3]);});
it('test 17',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[5],value:45});
});
it('test 18',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[3],value:65});
});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[9],value:57});
result = await instance.withdrawAll(accounts[3]);});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[4],value:53});
result = await instance.withdrawAll(accounts[2]);});
it('test 21',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[8],value:88});
});
it('test 22',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[9],value:18});
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[8],value:29});
result = await instance.withdrawAll(accounts[2]);});
it('test 24',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[5],value:28});
});
it('test 25',async() => {
result = await instance.withdrawAll(accounts[1]);await instance.sendTransaction({from:accounts[4],value:56});
});
it('test 26',async() => {
result = await instance.withdrawAll(accounts[5]);await instance.sendTransaction({from:accounts[9],value:20});
});
it('test 27',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[1],value:55});
});
it('test 28',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[9],value:86});
});
it('test 29',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[1],value:4});
});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[2],value:39});
result = await instance.withdrawAll(accounts[0]);});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[8],value:83});
result = await instance.withdrawAll(accounts[0]);});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[3],value:66});
result = await instance.withdrawAll(accounts[5]);});
it('test 33',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[6],value:37});
});
it('test 34',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[9],value:89});
});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[7],value:96});
result = await instance.withdrawAll(accounts[2]);});
it('test 36',async() => {
result = await instance.withdrawAll(accounts[5]);await instance.sendTransaction({from:accounts[5],value:1});
});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[4],value:24});
result = await instance.withdrawAll(accounts[5]);});
it('test 38',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[5],value:63});
});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[9],value:38});
result = await instance.withdrawAll(accounts[0]);});
it('test 40',async() => {
await instance.sendTransaction({from:accounts[3],value:26});
result = await instance.withdrawAll(accounts[1]);});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[4],value:11});
result = await instance.withdrawAll(accounts[1]);});
it('test 42',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[1],value:26});
});
it('acctack', async() => {
await attack.sendTransaction({from:accounts[0]})});
it('test 43',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[3],value:92});
});
it('test 44',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[1],value:98});
});
it('test 45',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[5],value:78});
});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[1],value:57});
result = await instance.withdrawAll(accounts[0]);});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[5],value:36});
result = await instance.withdrawAll(accounts[4]);});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[8],value:52});
result = await instance.withdrawAll(accounts[0]);});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[5],value:86});
result = await instance.withdrawAll(accounts[4]);});
});
