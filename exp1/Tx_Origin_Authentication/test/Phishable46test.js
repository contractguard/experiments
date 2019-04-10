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
await instance.sendTransaction({from:accounts[8],value:29});
result = await instance.withdrawAll(accounts[1]);});
it('test 1',async() => {
result = await instance.withdrawAll(accounts[5]);await instance.sendTransaction({from:accounts[9],value:64});
});
it('test 2',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[5],value:27});
});
it('test 3',async() => {
result = await instance.withdrawAll(accounts[5]);await instance.sendTransaction({from:accounts[3],value:23});
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[9],value:55});
result = await instance.withdrawAll(accounts[4]);});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[3],value:8});
result = await instance.withdrawAll(accounts[0]);});
it('test 6',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[4],value:54});
});
it('test 7',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[2],value:95});
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[8],value:84});
result = await instance.withdrawAll(accounts[2]);});
it('test 9',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[7],value:68});
});
it('test 10',async() => {
result = await instance.withdrawAll(accounts[1]);await instance.sendTransaction({from:accounts[6],value:36});
});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[1],value:70});
result = await instance.withdrawAll(accounts[2]);});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[6],value:71});
result = await instance.withdrawAll(accounts[1]);});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[8],value:65});
result = await instance.withdrawAll(accounts[3]);});
it('test 14',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[6],value:50});
});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[8],value:40});
result = await instance.withdrawAll(accounts[0]);});
it('test 16',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[6],value:79});
});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[2],value:82});
result = await instance.withdrawAll(accounts[1]);});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[8],value:34});
result = await instance.withdrawAll(accounts[5]);});
it('test 19',async() => {
result = await instance.withdrawAll(accounts[1]);await instance.sendTransaction({from:accounts[7],value:80});
});
it('test 20',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[1],value:7});
});
it('test 21',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[3],value:18});
});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[9],value:78});
result = await instance.withdrawAll(accounts[1]);});
it('test 23',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[7],value:30});
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[5],value:7});
result = await instance.withdrawAll(accounts[1]);});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[3],value:96});
result = await instance.withdrawAll(accounts[4]);});
it('test 26',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[8],value:72});
});
it('test 27',async() => {
result = await instance.withdrawAll(accounts[5]);await instance.sendTransaction({from:accounts[4],value:82});
});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[6],value:82});
result = await instance.withdrawAll(accounts[0]);});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[6],value:81});
result = await instance.withdrawAll(accounts[1]);});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[6],value:65});
result = await instance.withdrawAll(accounts[1]);});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[1],value:70});
result = await instance.withdrawAll(accounts[4]);});
it('test 32',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[1],value:3});
});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[1],value:82});
result = await instance.withdrawAll(accounts[0]);});
it('test 34',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[1],value:34});
});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[3],value:42});
result = await instance.withdrawAll(accounts[3]);});
it('test 36',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[3],value:42});
});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[5],value:37});
result = await instance.withdrawAll(accounts[1]);});
it('test 38',async() => {
result = await instance.withdrawAll(accounts[5]);await instance.sendTransaction({from:accounts[4],value:26});
});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[8],value:42});
result = await instance.withdrawAll(accounts[4]);});
it('test 40',async() => {
await instance.sendTransaction({from:accounts[6],value:20});
result = await instance.withdrawAll(accounts[2]);});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[2],value:21});
result = await instance.withdrawAll(accounts[2]);});
it('test 42',async() => {
result = await instance.withdrawAll(accounts[1]);await instance.sendTransaction({from:accounts[2],value:37});
});
it('test 43',async() => {
await instance.sendTransaction({from:accounts[4],value:72});
result = await instance.withdrawAll(accounts[4]);});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[9],value:57});
result = await instance.withdrawAll(accounts[2]);});
it('acctack', async() => {
await attack.sendTransaction({from:accounts[0]})});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[1],value:10});
result = await instance.withdrawAll(accounts[4]);});
it('test 46',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[3],value:60});
});
it('test 47',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[9],value:59});
});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[8],value:7});
result = await instance.withdrawAll(accounts[0]);});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[2],value:30});
result = await instance.withdrawAll(accounts[1]);});
});
