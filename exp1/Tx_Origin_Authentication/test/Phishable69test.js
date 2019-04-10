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
await instance.sendTransaction({from:accounts[4],value:88});
result = await instance.withdrawAll(accounts[4]);});
it('test 1',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[7],value:21});
});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[2],value:32});
result = await instance.withdrawAll(accounts[0]);});
it('test 3',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[9],value:96});
});
it('test 4',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[8],value:47});
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[1],value:46});
result = await instance.withdrawAll(accounts[4]);});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[5],value:96});
result = await instance.withdrawAll(accounts[5]);});
it('test 7',async() => {
result = await instance.withdrawAll(accounts[5]);await instance.sendTransaction({from:accounts[6],value:89});
});
it('test 8',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[8],value:4});
});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[5],value:28});
result = await instance.withdrawAll(accounts[4]);});
it('test 10',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[1],value:92});
});
it('test 11',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[4],value:96});
});
it('test 12',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[5],value:11});
});
it('test 13',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[1],value:65});
});
it('test 14',async() => {
result = await instance.withdrawAll(accounts[5]);await instance.sendTransaction({from:accounts[5],value:49});
});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[7],value:65});
result = await instance.withdrawAll(accounts[5]);});
it('test 16',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[1],value:58});
});
it('test 17',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[1],value:85});
});
it('test 18',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[5],value:53});
});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[3],value:75});
result = await instance.withdrawAll(accounts[0]);});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[8],value:83});
result = await instance.withdrawAll(accounts[3]);});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[7],value:98});
result = await instance.withdrawAll(accounts[2]);});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[8],value:47});
result = await instance.withdrawAll(accounts[1]);});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[2],value:95});
result = await instance.withdrawAll(accounts[2]);});
it('test 24',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[6],value:87});
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[9],value:55});
result = await instance.withdrawAll(accounts[5]);});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[5],value:53});
result = await instance.withdrawAll(accounts[4]);});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[5],value:2});
result = await instance.withdrawAll(accounts[2]);});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[8],value:71});
result = await instance.withdrawAll(accounts[4]);});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[9],value:37});
result = await instance.withdrawAll(accounts[0]);});
it('test 30',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[3],value:5});
});
it('test 31',async() => {
result = await instance.withdrawAll(accounts[5]);await instance.sendTransaction({from:accounts[8],value:33});
});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[1],value:33});
result = await instance.withdrawAll(accounts[1]);});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[7],value:79});
result = await instance.withdrawAll(accounts[3]);});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[5],value:8});
result = await instance.withdrawAll(accounts[5]);});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[7],value:37});
result = await instance.withdrawAll(accounts[5]);});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[7],value:75});
result = await instance.withdrawAll(accounts[0]);});
it('test 37',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[3],value:67});
});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[3],value:14});
result = await instance.withdrawAll(accounts[1]);});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[5],value:41});
result = await instance.withdrawAll(accounts[3]);});
it('test 40',async() => {
result = await instance.withdrawAll(accounts[5]);await instance.sendTransaction({from:accounts[7],value:28});
});
it('test 41',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[5],value:46});
});
it('acctack', async() => {
await attack.sendTransaction({from:accounts[0]})});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[9],value:50});
result = await instance.withdrawAll(accounts[2]);});
it('test 43',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[4],value:61});
});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[2],value:87});
result = await instance.withdrawAll(accounts[5]);});
it('test 45',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[2],value:77});
});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[5],value:23});
result = await instance.withdrawAll(accounts[4]);});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[9],value:54});
result = await instance.withdrawAll(accounts[1]);});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[6],value:28});
result = await instance.withdrawAll(accounts[5]);});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[8],value:24});
result = await instance.withdrawAll(accounts[5]);});
});
