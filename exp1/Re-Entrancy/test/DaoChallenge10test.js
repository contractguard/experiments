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
await instance.sendTransaction({from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[1],914,{from:accounts[4]});
});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[0],389,{from:accounts[2]});
});
it('test 2',async() => {
result = await instance.transfer(accounts[0],632,{from:accounts[3]});
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[4],574,{from:accounts[1]});
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[5],771,{from:accounts[4]});
});
it('test 5',async() => {
result = await instance.transfer(accounts[5],337,{from:accounts[3]});
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[5],824,{from:accounts[2]});
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[2],950,{from:accounts[1]});
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[1],483,{from:accounts[1]});
});
it('test 9',async() => {
result = await instance.transfer(accounts[5],430,{from:accounts[5]});
await instance.sendTransaction({from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 10',async() => {
result = await instance.transfer(accounts[4],713,{from:accounts[1]});
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 11',async() => {
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[2],810,{from:accounts[1]});
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[3],876,{from:accounts[2]});
});
it('test 13',async() => {
result = await instance.transfer(accounts[0],642,{from:accounts[5]});
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[5],716,{from:accounts[4]});
});
it('test 15',async() => {
result = await instance.transfer(accounts[0],919,{from:accounts[4]});
await instance.sendTransaction({from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[3],760,{from:accounts[3]});
});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[1],912,{from:accounts[0]});
});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[1],574,{from:accounts[1]});
});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[4],520,{from:accounts[3]});
});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[0],292,{from:accounts[1]});
});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[0],604,{from:accounts[4]});
});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[2],628,{from:accounts[1]});
});
it('test 23',async() => {
result = await instance.transfer(accounts[2],518,{from:accounts[3]});
await instance.sendTransaction({from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[0],989,{from:accounts[4]});
});
it('test 25',async() => {
result = await instance.transfer(accounts[5],635,{from:accounts[1]});
await instance.sendTransaction({from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 26',async() => {
result = await instance.transfer(accounts[5],272,{from:accounts[4]});
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[0],387,{from:accounts[0]});
});
it('test 28',async() => {
result = await instance.transfer(accounts[0],533,{from:accounts[3]});
await instance.sendTransaction({from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[1],411,{from:accounts[2]});
});
it('test 30',async() => {
result = await instance.transfer(accounts[4],766,{from:accounts[5]});
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 31',async() => {
result = await instance.transfer(accounts[4],393,{from:accounts[2]});
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[2],786,{from:accounts[2]});
});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[0],601,{from:accounts[3]});
});
it('test 34',async() => {
result = await instance.transfer(accounts[4],782,{from:accounts[0]});
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 35',async() => {
result = await instance.transfer(accounts[1],281,{from:accounts[1]});
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[4],536,{from:accounts[0]});
});
it('test 37',async() => {
result = await instance.transfer(accounts[4],986,{from:accounts[2]});
await instance.sendTransaction({from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 38',async() => {
result = await instance.transfer(accounts[5],541,{from:accounts[1]});
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 39',async() => {
result = await instance.transfer(accounts[0],244,{from:accounts[1]});
await instance.sendTransaction({from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 40',async() => {
result = await instance.transfer(accounts[0],258,{from:accounts[5]});
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(2))});

await instance.sendTransaction({from: accounts[88], value: web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.refund({from: accounts[88]});});
it('acctack', async() => {
await attack.pwnEtherStore({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(50))}); 
 });
it('test 41',async() => {
result = await instance.transfer(accounts[4],942,{from:accounts[2]});
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 42',async() => {
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[4],374,{from:accounts[0]});
});
it('test 43',async() => {
result = await instance.transfer(accounts[0],313,{from:accounts[3]});
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 44',async() => {
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[1],879,{from:accounts[2]});
});
it('test 45',async() => {
result = await instance.transfer(accounts[4],765,{from:accounts[0]});
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[0],675,{from:accounts[4]});
});
it('test 47',async() => {
result = await instance.transfer(accounts[2],684,{from:accounts[4]});
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[1],663,{from:accounts[3]});
});
it('test 49',async() => {
result = await instance.transfer(accounts[5],326,{from:accounts[1]});
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(2))});

await instance.terminate({from: accounts[0]});
});
});
