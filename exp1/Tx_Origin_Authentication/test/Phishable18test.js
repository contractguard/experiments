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
result = await instance.withdrawAll(accounts[1]);});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[3],value:4});
result = await instance.withdrawAll(accounts[0]);});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[9],value:75});
result = await instance.withdrawAll(accounts[4]);});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[1],value:48});
result = await instance.withdrawAll(accounts[3]);});
it('test 4',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[1],value:84});
});
it('test 5',async() => {
result = await instance.withdrawAll(accounts[1]);await instance.sendTransaction({from:accounts[2],value:72});
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[2],value:26});
result = await instance.withdrawAll(accounts[3]);});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[7],value:91});
result = await instance.withdrawAll(accounts[2]);});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[8],value:69});
result = await instance.withdrawAll(accounts[3]);});
it('test 9',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[7],value:22});
});
it('test 10',async() => {
result = await instance.withdrawAll(accounts[5]);await instance.sendTransaction({from:accounts[2],value:69});
});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[2],value:11});
result = await instance.withdrawAll(accounts[0]);});
it('test 12',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[5],value:16});
});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[6],value:7});
result = await instance.withdrawAll(accounts[3]);});
it('test 14',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[5],value:14});
});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[2],value:28});
result = await instance.withdrawAll(accounts[2]);});
it('test 16',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[4],value:90});
});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[7],value:36});
result = await instance.withdrawAll(accounts[4]);});
it('test 18',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[1],value:86});
});
it('test 19',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[2],value:42});
});
it('test 20',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[5],value:88});
});
it('test 21',async() => {
result = await instance.withdrawAll(accounts[5]);await instance.sendTransaction({from:accounts[5],value:8});
});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[1],value:60});
result = await instance.withdrawAll(accounts[3]);});
it('test 23',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[6],value:50});
});
it('test 24',async() => {
result = await instance.withdrawAll(accounts[5]);await instance.sendTransaction({from:accounts[8],value:82});
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[6],value:45});
result = await instance.withdrawAll(accounts[4]);});
it('test 26',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[9],value:100});
});
it('test 27',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[6],value:26});
});
it('test 28',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[4],value:48});
});
it('test 29',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[5],value:62});
});
it('test 30',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[9],value:74});
});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[6],value:8});
result = await instance.withdrawAll(accounts[1]);});
it('test 32',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[4],value:93});
});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[6],value:80});
result = await instance.withdrawAll(accounts[3]);});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[6],value:32});
result = await instance.withdrawAll(accounts[1]);});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[7],value:13});
result = await instance.withdrawAll(accounts[4]);});
it('test 36',async() => {
result = await instance.withdrawAll(accounts[1]);await instance.sendTransaction({from:accounts[7],value:61});
});
it('test 37',async() => {
result = await instance.withdrawAll(accounts[1]);await instance.sendTransaction({from:accounts[2],value:25});
});
it('test 38',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[3],value:44});
});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[3],value:57});
result = await instance.withdrawAll(accounts[3]);});
it('test 40',async() => {
result = await instance.withdrawAll(accounts[5]);await instance.sendTransaction({from:accounts[9],value:30});
});
it('test 41',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[5],value:86});
});
it('acctack', async() => {
await attack.sendTransaction({from:accounts[0]})});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[5],value:58});
result = await instance.withdrawAll(accounts[1]);});
it('test 43',async() => {
result = await instance.withdrawAll(accounts[1]);await instance.sendTransaction({from:accounts[9],value:38});
});
it('test 44',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[1],value:6});
});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[2],value:57});
result = await instance.withdrawAll(accounts[5]);});
it('test 46',async() => {
result = await instance.withdrawAll(accounts[5]);await instance.sendTransaction({from:accounts[2],value:34});
});
it('test 47',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[7],value:74});
});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[6],value:12});
result = await instance.withdrawAll(accounts[4]);});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[2],value:20});
result = await instance.withdrawAll(accounts[0]);});
});
