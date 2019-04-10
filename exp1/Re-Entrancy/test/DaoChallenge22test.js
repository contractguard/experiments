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
result = await instance.transfer(accounts[1],575,{from:accounts[4]});
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[5],294,{from:accounts[3]});
});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[2],274,{from:accounts[1]});
});
it('test 3',async() => {
result = await instance.transfer(accounts[5],373,{from:accounts[3]});
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 4',async() => {
result = await instance.transfer(accounts[3],865,{from:accounts[5]});
await instance.sendTransaction({from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 5',async() => {
result = await instance.transfer(accounts[2],825,{from:accounts[4]});
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 6',async() => {
result = await instance.transfer(accounts[1],648,{from:accounts[1]});
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 7',async() => {
result = await instance.transfer(accounts[5],869,{from:accounts[3]});
await instance.sendTransaction({from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 8',async() => {
result = await instance.transfer(accounts[4],963,{from:accounts[4]});
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[0],269,{from:accounts[5]});
});
it('test 10',async() => {
result = await instance.transfer(accounts[3],742,{from:accounts[0]});
await instance.sendTransaction({from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[3],541,{from:accounts[4]});
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[4],973,{from:accounts[5]});
});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[5],710,{from:accounts[1]});
});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[5],701,{from:accounts[3]});
});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[1],708,{from:accounts[2]});
});
it('test 16',async() => {
result = await instance.transfer(accounts[5],680,{from:accounts[5]});
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[3],598,{from:accounts[3]});
});
it('test 18',async() => {
result = await instance.transfer(accounts[4],748,{from:accounts[3]});
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 19',async() => {
result = await instance.transfer(accounts[4],545,{from:accounts[4]});
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 20',async() => {
result = await instance.transfer(accounts[3],895,{from:accounts[5]});
await instance.sendTransaction({from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[2],417,{from:accounts[3]});
});
it('test 22',async() => {
result = await instance.transfer(accounts[5],200,{from:accounts[0]});
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 23',async() => {
result = await instance.transfer(accounts[2],695,{from:accounts[3]});
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[4],517,{from:accounts[3]});
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[4],565,{from:accounts[1]});
});
it('test 26',async() => {
result = await instance.transfer(accounts[4],643,{from:accounts[5]});
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 27',async() => {
result = await instance.transfer(accounts[4],550,{from:accounts[0]});
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 28',async() => {
result = await instance.transfer(accounts[0],388,{from:accounts[1]});
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 29',async() => {
result = await instance.transfer(accounts[5],825,{from:accounts[1]});
await instance.sendTransaction({from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[1],529,{from:accounts[0]});
});
it('test 31',async() => {
result = await instance.transfer(accounts[0],759,{from:accounts[1]});
await instance.sendTransaction({from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[4],336,{from:accounts[4]});
});
it('test 33',async() => {
result = await instance.transfer(accounts[5],365,{from:accounts[1]});
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[1],262,{from:accounts[0]});
});
it('test 35',async() => {
result = await instance.transfer(accounts[0],550,{from:accounts[5]});
await instance.sendTransaction({from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[2],266,{from:accounts[1]});
});
it('test 37',async() => {
result = await instance.transfer(accounts[4],498,{from:accounts[2]});
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[0],579,{from:accounts[1]});
});
it('test 39',async() => {
result = await instance.transfer(accounts[5],710,{from:accounts[5]});
await instance.sendTransaction({from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 40',async() => {
await instance.sendTransaction({from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[0],607,{from:accounts[3]});
});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[1],872,{from:accounts[1]});
});
it('test 42',async() => {
result = await instance.transfer(accounts[1],640,{from:accounts[4]});
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 43',async() => {
result = await instance.transfer(accounts[4],689,{from:accounts[4]});
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(2))});

await instance.sendTransaction({from: accounts[88], value: web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.refund({from: accounts[88]});});
it('acctack', async() => {
await attack.pwnEtherStore({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(50))}); 
 });
it('test 44',async() => {
result = await instance.transfer(accounts[0],404,{from:accounts[0]});
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 45',async() => {
result = await instance.transfer(accounts[2],591,{from:accounts[5]});
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 46',async() => {
result = await instance.transfer(accounts[4],727,{from:accounts[5]});
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[3],329,{from:accounts[3]});
});
it('test 48',async() => {
result = await instance.transfer(accounts[2],445,{from:accounts[0]});
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[2],452,{from:accounts[4]});
await instance.terminate({from: accounts[0]});
});
});
