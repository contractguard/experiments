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
result = await instance.transfer(accounts[1],583,{from:accounts[2]});
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 1',async() => {
result = await instance.transfer(accounts[4],561,{from:accounts[0]});
await instance.sendTransaction({from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 2',async() => {
result = await instance.transfer(accounts[0],240,{from:accounts[4]});
await instance.sendTransaction({from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[2],728,{from:accounts[3]});
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[3],250,{from:accounts[3]});
});
it('test 5',async() => {
result = await instance.transfer(accounts[1],234,{from:accounts[2]});
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 6',async() => {
result = await instance.transfer(accounts[4],633,{from:accounts[2]});
await instance.sendTransaction({from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[4],780,{from:accounts[1]});
});
it('test 8',async() => {
result = await instance.transfer(accounts[1],996,{from:accounts[1]});
await instance.sendTransaction({from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[5],654,{from:accounts[1]});
});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[2],718,{from:accounts[1]});
});
it('test 11',async() => {
result = await instance.transfer(accounts[3],995,{from:accounts[4]});
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 12',async() => {
result = await instance.transfer(accounts[5],399,{from:accounts[1]});
await instance.sendTransaction({from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 13',async() => {
result = await instance.transfer(accounts[5],766,{from:accounts[5]});
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[5],486,{from:accounts[1]});
});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[2],375,{from:accounts[1]});
});
it('test 16',async() => {
result = await instance.transfer(accounts[1],805,{from:accounts[5]});
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[1],453,{from:accounts[2]});
});
it('test 18',async() => {
result = await instance.transfer(accounts[1],334,{from:accounts[0]});
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[4],779,{from:accounts[5]});
});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[1],761,{from:accounts[1]});
});
it('test 21',async() => {
result = await instance.transfer(accounts[1],472,{from:accounts[0]});
await instance.sendTransaction({from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[3],838,{from:accounts[2]});
});
it('test 23',async() => {
result = await instance.transfer(accounts[1],542,{from:accounts[4]});
await instance.sendTransaction({from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[1],690,{from:accounts[4]});
});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[1],705,{from:accounts[1]});
});
it('test 26',async() => {
result = await instance.transfer(accounts[1],994,{from:accounts[1]});
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[0],470,{from:accounts[4]});
});
it('test 28',async() => {
result = await instance.transfer(accounts[3],214,{from:accounts[0]});
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[1],515,{from:accounts[2]});
});
it('test 30',async() => {
await instance.sendTransaction({from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[0],393,{from:accounts[3]});
});
it('test 31',async() => {
result = await instance.transfer(accounts[0],996,{from:accounts[3]});
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[0],690,{from:accounts[1]});
});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[1],652,{from:accounts[0]});
});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[4],988,{from:accounts[4]});
});
it('test 35',async() => {
result = await instance.transfer(accounts[3],459,{from:accounts[4]});
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[1],331,{from:accounts[3]});
});
it('test 37',async() => {
result = await instance.transfer(accounts[5],898,{from:accounts[3]});
await instance.sendTransaction({from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 38',async() => {
result = await instance.transfer(accounts[2],874,{from:accounts[2]});
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 39',async() => {
result = await instance.transfer(accounts[0],359,{from:accounts[0]});
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 40',async() => {
result = await instance.transfer(accounts[2],575,{from:accounts[1]});
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[3],658,{from:accounts[4]});
await instance.sendTransaction({from: accounts[88], value: web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.refund({from: accounts[88]});});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[1],483,{from:accounts[4]});
});
it('acctack', async() => {
await attack.pwnEtherStore({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(50))}); 
 });
it('test 43',async() => {
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[5],407,{from:accounts[4]});
});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[1],455,{from:accounts[3]});
});
it('test 45',async() => {
result = await instance.transfer(accounts[1],805,{from:accounts[0]});
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 46',async() => {
result = await instance.transfer(accounts[3],436,{from:accounts[4]});
await instance.sendTransaction({from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 47',async() => {
result = await instance.transfer(accounts[1],989,{from:accounts[5]});
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 48',async() => {
result = await instance.transfer(accounts[2],320,{from:accounts[1]});
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[1],228,{from:accounts[2]});
await instance.terminate({from: accounts[0]});
});
});
