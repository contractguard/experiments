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
result = await instance.transfer(accounts[2],687,{from:accounts[5]});
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 1',async() => {
result = await instance.transfer(accounts[3],802,{from:accounts[5]});
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 2',async() => {
await instance.sendTransaction({from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[0],908,{from:accounts[0]});
});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[0],543,{from:accounts[2]});
});
it('test 4',async() => {
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[5],599,{from:accounts[2]});
});
it('test 5',async() => {
result = await instance.transfer(accounts[1],340,{from:accounts[3]});
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 6',async() => {
await instance.sendTransaction({from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[3],316,{from:accounts[1]});
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[4],589,{from:accounts[0]});
});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[3],831,{from:accounts[4]});
});
it('test 9',async() => {
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[2],422,{from:accounts[2]});
});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[4],752,{from:accounts[3]});
});
it('test 11',async() => {
result = await instance.transfer(accounts[4],614,{from:accounts[0]});
await instance.sendTransaction({from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 12',async() => {
result = await instance.transfer(accounts[4],817,{from:accounts[4]});
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 13',async() => {
result = await instance.transfer(accounts[2],713,{from:accounts[5]});
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 14',async() => {
result = await instance.transfer(accounts[5],846,{from:accounts[1]});
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 15',async() => {
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[5],650,{from:accounts[1]});
});
it('test 16',async() => {
result = await instance.transfer(accounts[5],487,{from:accounts[2]});
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 17',async() => {
result = await instance.transfer(accounts[0],475,{from:accounts[0]});
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[2],721,{from:accounts[5]});
});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[3],995,{from:accounts[3]});
});
it('test 20',async() => {
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[3],945,{from:accounts[1]});
});
it('test 21',async() => {
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[4],601,{from:accounts[3]});
});
it('test 22',async() => {
result = await instance.transfer(accounts[1],790,{from:accounts[1]});
await instance.sendTransaction({from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 23',async() => {
await instance.sendTransaction({from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[0],835,{from:accounts[2]});
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[3],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[1],782,{from:accounts[3]});
});
it('test 25',async() => {
result = await instance.transfer(accounts[0],976,{from:accounts[3]});
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 26',async() => {
result = await instance.transfer(accounts[3],695,{from:accounts[2]});
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[5],714,{from:accounts[5]});
});
it('test 28',async() => {
result = await instance.transfer(accounts[3],373,{from:accounts[5]});
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[5],603,{from:accounts[0]});
});
it('test 30',async() => {
result = await instance.transfer(accounts[2],353,{from:accounts[1]});
await instance.sendTransaction({from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 31',async() => {
result = await instance.transfer(accounts[3],729,{from:accounts[5]});
await instance.sendTransaction({from:accounts[1],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 32',async() => {
result = await instance.transfer(accounts[3],304,{from:accounts[3]});
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[2],897,{from:accounts[0]});
});
it('test 34',async() => {
result = await instance.transfer(accounts[3],461,{from:accounts[2]});
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[3],850,{from:accounts[3]});
});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[5],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[1],513,{from:accounts[1]});
});
it('test 37',async() => {
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[1],631,{from:accounts[4]});
});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[2],317,{from:accounts[0]});
});
it('test 39',async() => {
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[2],471,{from:accounts[1]});
});
it('test 40',async() => {
result = await instance.transfer(accounts[3],874,{from:accounts[1]});
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 41',async() => {
await instance.sendTransaction({from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(2))});

result = await instance.transfer(accounts[3],316,{from:accounts[2]});
});
it('test 42',async() => {
result = await instance.transfer(accounts[3],455,{from:accounts[0]});
await instance.sendTransaction({from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 43',async() => {
result = await instance.transfer(accounts[3],753,{from:accounts[2]});
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(2))});

await instance.sendTransaction({from: accounts[88], value: web3.utils.toWei(web3.utils.toBN(4))});
result = await instance.refund({from: accounts[88]});});
it('acctack', async() => {
await attack.pwnEtherStore({from: accounts[400], value: web3.utils.toWei(web3.utils.toBN(50))}); 
 });
it('test 44',async() => {
result = await instance.transfer(accounts[3],443,{from:accounts[0]});
await instance.sendTransaction({from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 45',async() => {
result = await instance.transfer(accounts[2],729,{from:accounts[1]});
await instance.sendTransaction({from:accounts[4],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 46',async() => {
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(1))});

result = await instance.transfer(accounts[2],623,{from:accounts[1]});
});
it('test 47',async() => {
result = await instance.transfer(accounts[4],790,{from:accounts[5]});
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(1))});

});
it('test 48',async() => {
result = await instance.transfer(accounts[0],793,{from:accounts[1]});
await instance.sendTransaction({from:accounts[0],value:web3.utils.toWei(web3.utils.toBN(2))});

});
it('test 49',async() => {
result = await instance.transfer(accounts[5],781,{from:accounts[0]});
await instance.sendTransaction({from:accounts[2],value:web3.utils.toWei(web3.utils.toBN(2))});

await instance.terminate({from: accounts[0]});
});
});
