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
await instance.sendTransaction({from:accounts[8],value:58});
result = await instance.withdrawAll(accounts[1]);});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[2],value:94});
result = await instance.withdrawAll(accounts[2]);});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[3],value:41});
result = await instance.withdrawAll(accounts[2]);});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[6],value:26});
result = await instance.withdrawAll(accounts[4]);});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[2],value:34});
result = await instance.withdrawAll(accounts[1]);});
it('test 5',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[8],value:68});
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[2],value:30});
result = await instance.withdrawAll(accounts[2]);});
it('test 7',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[6],value:9});
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[9],value:18});
result = await instance.withdrawAll(accounts[4]);});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[1],value:74});
result = await instance.withdrawAll(accounts[3]);});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[9],value:3});
result = await instance.withdrawAll(accounts[4]);});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[2],value:78});
result = await instance.withdrawAll(accounts[1]);});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[9],value:88});
result = await instance.withdrawAll(accounts[3]);});
it('test 13',async() => {
result = await instance.withdrawAll(accounts[1]);await instance.sendTransaction({from:accounts[6],value:22});
});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[7],value:61});
result = await instance.withdrawAll(accounts[3]);});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[6],value:68});
result = await instance.withdrawAll(accounts[3]);});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[3],value:32});
result = await instance.withdrawAll(accounts[3]);});
it('test 17',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[1],value:29});
});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[8],value:99});
result = await instance.withdrawAll(accounts[3]);});
it('test 19',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[6],value:2});
});
it('test 20',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[8],value:54});
});
it('test 21',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[7],value:65});
});
it('test 22',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[6],value:2});
});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[2],value:77});
result = await instance.withdrawAll(accounts[4]);});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[9],value:97});
result = await instance.withdrawAll(accounts[1]);});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[9],value:83});
result = await instance.withdrawAll(accounts[3]);});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[7],value:23});
result = await instance.withdrawAll(accounts[3]);});
it('test 27',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[6],value:47});
});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[5],value:74});
result = await instance.withdrawAll(accounts[5]);});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[5],value:72});
result = await instance.withdrawAll(accounts[2]);});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[7],value:22});
result = await instance.withdrawAll(accounts[2]);});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[2],value:30});
result = await instance.withdrawAll(accounts[3]);});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[3],value:7});
result = await instance.withdrawAll(accounts[5]);});
it('test 33',async() => {
result = await instance.withdrawAll(accounts[5]);await instance.sendTransaction({from:accounts[3],value:13});
});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[8],value:53});
result = await instance.withdrawAll(accounts[2]);});
it('test 35',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[5],value:2});
});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[5],value:10});
result = await instance.withdrawAll(accounts[3]);});
it('test 37',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[6],value:24});
});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[2],value:15});
result = await instance.withdrawAll(accounts[1]);});
it('test 39',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[5],value:67});
});
it('test 40',async() => {
result = await instance.withdrawAll(accounts[1]);await instance.sendTransaction({from:accounts[1],value:93});
});
it('test 41',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[8],value:18});
});
it('acctack', async() => {
await attack.sendTransaction({from:accounts[0]})});
it('test 42',async() => {
result = await instance.withdrawAll(accounts[1]);await instance.sendTransaction({from:accounts[1],value:74});
});
it('test 43',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[7],value:84});
});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[8],value:56});
result = await instance.withdrawAll(accounts[0]);});
it('test 45',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[3],value:65});
});
it('test 46',async() => {
result = await instance.withdrawAll(accounts[5]);await instance.sendTransaction({from:accounts[2],value:43});
});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[3],value:84});
result = await instance.withdrawAll(accounts[2]);});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[4],value:4});
result = await instance.withdrawAll(accounts[2]);});
it('test 49',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[2],value:19});
});
});
