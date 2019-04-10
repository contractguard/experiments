const Attack = artifacts.require("Attack");
const DaoChallenge = artifacts.require("DaoChallenge");
contract('DaoChallenge', async (accounts) => {
const owner = accounts[0];
let attack;let instance;
let result;
before('setup contract for each test',async() => {
instance = await DaoChallenge.new({from:accounts[0]});
attack = await Attack.new(instance.address,{from:accounts[400]});
});
it('test 0',async() => {
await instance.sendTransaction({from: accounts[0], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[1], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[2], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[3], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[4], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[5], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[44], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[1],996,{from:accounts[1]});
});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[2],828,{from:accounts[1]});
});
it('test 2',async() => {
result = await instance.transfer(accounts[0],692,{from:accounts[4]});
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 3',async() => {
result = await instance.transfer(accounts[5],628,{from:accounts[1]});
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[2],447,{from:accounts[2]});
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[0],496,{from:accounts[2]});
});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[4],844,{from:accounts[2]});
});
it('test 7',async() => {
result = await instance.transfer(accounts[4],236,{from:accounts[2]});
await instance.sendTransaction({from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[5],707,{from:accounts[0]});
});
it('test 9',async() => {
result = await instance.transfer(accounts[3],423,{from:accounts[5]});
await instance.sendTransaction({from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[0],476,{from:accounts[0]});
});
it('test 11',async() => {
result = await instance.transfer(accounts[4],768,{from:accounts[4]});
await instance.sendTransaction({from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 12',async() => {
result = await instance.transfer(accounts[3],347,{from:accounts[1]});
await instance.sendTransaction({from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[4],857,{from:accounts[5]});
});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[2],894,{from:accounts[2]});
});
it('test 15',async() => {
result = await instance.transfer(accounts[5],499,{from:accounts[3]});
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[3],856,{from:accounts[2]});
});
it('test 17',async() => {
result = await instance.transfer(accounts[2],979,{from:accounts[5]});
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 18',async() => {
result = await instance.transfer(accounts[0],489,{from:accounts[5]});
await instance.sendTransaction({from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[0],928,{from:accounts[5]});
});
it('test 20',async() => {
result = await instance.transfer(accounts[2],528,{from:accounts[0]});
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[3],387,{from:accounts[4]});
});
it('test 22',async() => {
result = await instance.transfer(accounts[0],684,{from:accounts[4]});
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 23',async() => {
result = await instance.transfer(accounts[5],996,{from:accounts[2]});
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[4],980,{from:accounts[2]});
});
it('test 25',async() => {
result = await instance.transfer(accounts[3],245,{from:accounts[2]});
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[2],284,{from:accounts[4]});
});
it('test 27',async() => {
result = await instance.transfer(accounts[2],532,{from:accounts[1]});
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[3],234,{from:accounts[1]});
});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[2],614,{from:accounts[0]});
});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[1],947,{from:accounts[0]});
});
it('test 31',async() => {
result = await instance.transfer(accounts[2],457,{from:accounts[1]});
await instance.sendTransaction({from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[2],368,{from:accounts[3]});
});
it('test 33',async() => {
result = await instance.transfer(accounts[1],598,{from:accounts[1]});
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 34',async() => {
result = await instance.transfer(accounts[5],539,{from:accounts[3]});
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[4],249,{from:accounts[5]});
});
it('test 36',async() => {
result = await instance.transfer(accounts[3],625,{from:accounts[4]});
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[2],983,{from:accounts[1]});
});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[4],632,{from:accounts[3]});
});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[1],260,{from:accounts[3]});
});
it('test 40',async() => {
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[4],357,{from:accounts[4]});
await instance.sendTransaction({from: accounts[88], value: web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.refund({from: accounts[88]});});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[3],972,{from:accounts[1]});
});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[3],428,{from:accounts[2]});
});
it('test 43',async() => {
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[1],492,{from:accounts[3]});
});
it('test 44',async() => {
result = await instance.transfer(accounts[4],213,{from:accounts[4]});
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('acctack', async() => {
await attack.pwnEtherStore({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(50))}); 
 });
it('test 45',async() => {
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[3],323,{from:accounts[1]});
});
it('test 46',async() => {
result = await instance.transfer(accounts[0],636,{from:accounts[3]});
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 47',async() => {
result = await instance.transfer(accounts[0],265,{from:accounts[1]});
await instance.sendTransaction({from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[1],425,{from:accounts[4]});
});
it('test 49',async() => {
result = await instance.transfer(accounts[1],910,{from:accounts[4]});
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(2))});

await instance.terminate({from: accounts[0]});
});
});
