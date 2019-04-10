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
result = await instance.transfer(accounts[4],472,{from:accounts[1]});
await instance.sendTransaction({from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 1',async() => {
result = await instance.transfer(accounts[2],824,{from:accounts[3]});
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[2],691,{from:accounts[2]});
});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[0],611,{from:accounts[5]});
});
it('test 4',async() => {
result = await instance.transfer(accounts[5],490,{from:accounts[1]});
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 5',async() => {
result = await instance.transfer(accounts[4],885,{from:accounts[2]});
await instance.sendTransaction({from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 6',async() => {
result = await instance.transfer(accounts[4],856,{from:accounts[5]});
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 7',async() => {
result = await instance.transfer(accounts[2],713,{from:accounts[1]});
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[4],989,{from:accounts[0]});
});
it('test 9',async() => {
result = await instance.transfer(accounts[2],509,{from:accounts[0]});
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 10',async() => {
result = await instance.transfer(accounts[2],941,{from:accounts[1]});
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 11',async() => {
result = await instance.transfer(accounts[3],287,{from:accounts[3]});
await instance.sendTransaction({from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 12',async() => {
result = await instance.transfer(accounts[4],569,{from:accounts[1]});
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 13',async() => {
result = await instance.transfer(accounts[0],207,{from:accounts[3]});
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 14',async() => {
result = await instance.transfer(accounts[3],734,{from:accounts[3]});
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[4],408,{from:accounts[5]});
});
it('test 16',async() => {
result = await instance.transfer(accounts[5],668,{from:accounts[5]});
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[5],454,{from:accounts[4]});
});
it('test 18',async() => {
result = await instance.transfer(accounts[3],444,{from:accounts[2]});
await instance.sendTransaction({from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 19',async() => {
result = await instance.transfer(accounts[3],325,{from:accounts[2]});
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 20',async() => {
result = await instance.transfer(accounts[5],207,{from:accounts[0]});
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[5],895,{from:accounts[0]});
});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[5],739,{from:accounts[5]});
});
it('test 23',async() => {
result = await instance.transfer(accounts[4],608,{from:accounts[3]});
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[5],754,{from:accounts[2]});
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[3],270,{from:accounts[0]});
});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[4],999,{from:accounts[2]});
});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[2],834,{from:accounts[3]});
});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[2],579,{from:accounts[4]});
});
it('test 29',async() => {
result = await instance.transfer(accounts[1],468,{from:accounts[5]});
await instance.sendTransaction({from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[4],496,{from:accounts[0]});
});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[3],608,{from:accounts[4]});
});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[0],811,{from:accounts[4]});
});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[4],980,{from:accounts[4]});
});
it('test 34',async() => {
result = await instance.transfer(accounts[0],235,{from:accounts[3]});
await instance.sendTransaction({from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[4],330,{from:accounts[1]});
await instance.sendTransaction({from: accounts[88], value: web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.refund({from: accounts[88]});});
it('test 36',async() => {
result = await instance.transfer(accounts[0],792,{from:accounts[0]});
await instance.sendTransaction({from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 37',async() => {
result = await instance.transfer(accounts[1],288,{from:accounts[1]});
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 38',async() => {
result = await instance.transfer(accounts[1],825,{from:accounts[3]});
await instance.sendTransaction({from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 39',async() => {
result = await instance.transfer(accounts[4],948,{from:accounts[5]});
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 40',async() => {
result = await instance.transfer(accounts[3],405,{from:accounts[4]});
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 41',async() => {
result = await instance.transfer(accounts[4],317,{from:accounts[1]});
await instance.sendTransaction({from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[4],452,{from:accounts[1]});
});
it('test 43',async() => {
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[1],831,{from:accounts[3]});
});
it('test 44',async() => {
result = await instance.transfer(accounts[4],223,{from:accounts[0]});
await instance.sendTransaction({from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('acctack', async() => {
await attack.pwnEtherStore({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(50))}); 
 });
it('test 45',async() => {
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[3],554,{from:accounts[4]});
});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[2],338,{from:accounts[5]});
});
it('test 47',async() => {
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[1],999,{from:accounts[1]});
});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[3],712,{from:accounts[5]});
});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[5],665,{from:accounts[4]});
await instance.terminate({from: accounts[0]});
});
});
