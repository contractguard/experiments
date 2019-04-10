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
await instance.sendTransaction({from:accounts[6],value:70});
result = await instance.withdrawAll(accounts[4]);});
it('test 1',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[8],value:92});
});
it('test 2',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[9],value:30});
});
it('test 3',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[3],value:78});
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[1],value:62});
result = await instance.withdrawAll(accounts[0]);});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[7],value:2});
result = await instance.withdrawAll(accounts[5]);});
it('test 6',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[1],value:41});
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[1],value:19});
result = await instance.withdrawAll(accounts[5]);});
it('test 8',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[9],value:20});
});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[2],value:27});
result = await instance.withdrawAll(accounts[3]);});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[6],value:2});
result = await instance.withdrawAll(accounts[5]);});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[7],value:92});
result = await instance.withdrawAll(accounts[0]);});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[9],value:16});
result = await instance.withdrawAll(accounts[4]);});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[4],value:37});
result = await instance.withdrawAll(accounts[0]);});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[8],value:21});
result = await instance.withdrawAll(accounts[4]);});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[4],value:30});
result = await instance.withdrawAll(accounts[1]);});
it('test 16',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[3],value:11});
});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[8],value:75});
result = await instance.withdrawAll(accounts[3]);});
it('test 18',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[1],value:38});
});
it('test 19',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[3],value:57});
});
it('test 20',async() => {
result = await instance.withdrawAll(accounts[5]);await instance.sendTransaction({from:accounts[4],value:99});
});
it('test 21',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[7],value:50});
});
it('test 22',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[5],value:21});
});
it('test 23',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[7],value:91});
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[7],value:100});
result = await instance.withdrawAll(accounts[4]);});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[1],value:75});
result = await instance.withdrawAll(accounts[1]);});
it('test 26',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[3],value:68});
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[4],value:10});
result = await instance.withdrawAll(accounts[2]);});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[2],value:90});
result = await instance.withdrawAll(accounts[1]);});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[3],value:12});
result = await instance.withdrawAll(accounts[4]);});
it('test 30',async() => {
result = await instance.withdrawAll(accounts[1]);await instance.sendTransaction({from:accounts[2],value:97});
});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[1],value:1});
result = await instance.withdrawAll(accounts[5]);});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[6],value:50});
result = await instance.withdrawAll(accounts[4]);});
it('test 33',async() => {
result = await instance.withdrawAll(accounts[5]);await instance.sendTransaction({from:accounts[8],value:60});
});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[3],value:61});
result = await instance.withdrawAll(accounts[5]);});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[9],value:3});
result = await instance.withdrawAll(accounts[1]);});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[3],value:74});
result = await instance.withdrawAll(accounts[5]);});
it('test 37',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[5],value:58});
});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[3],value:39});
result = await instance.withdrawAll(accounts[1]);});
it('test 39',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[6],value:2});
});
it('test 40',async() => {
await instance.sendTransaction({from:accounts[3],value:41});
result = await instance.withdrawAll(accounts[2]);});
it('test 41',async() => {
result = await instance.withdrawAll(accounts[1]);await instance.sendTransaction({from:accounts[8],value:70});
});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[3],value:65});
result = await instance.withdrawAll(accounts[3]);});
it('test 43',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[2],value:46});
});
it('acctack', async() => {
await attack.sendTransaction({from:accounts[0]})});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[2],value:25});
result = await instance.withdrawAll(accounts[5]);});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[3],value:55});
result = await instance.withdrawAll(accounts[2]);});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[9],value:21});
result = await instance.withdrawAll(accounts[3]);});
it('test 47',async() => {
result = await instance.withdrawAll(accounts[5]);await instance.sendTransaction({from:accounts[5],value:34});
});
it('test 48',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[3],value:42});
});
it('test 49',async() => {
result = await instance.withdrawAll(accounts[1]);await instance.sendTransaction({from:accounts[8],value:18});
});
});
