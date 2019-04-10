const BecToken = artifacts.require("BecToken");
contract('BecToken', async (accounts) => {
let instance;
let result;
let bigValue = web3.utils.toBN("57896044618658097711785492504343953926634992332820282019728792003956564819968");
before('setup contract for each test',async() => {
instance = await BecToken.new({from:accounts[0]});
});
it('test 0',async() => {
await instance.transfer(accounts[1], 3000000, {from: accounts[0]});
await instance.transfer(accounts[2], 3000000, {from: accounts[0]});
await instance.transfer(accounts[3], 3000000, {from: accounts[0]});
await instance.transfer(accounts[4], 3000000, {from: accounts[0]});
await instance.transfer(accounts[5], 3000000, {from: accounts[0]});
await instance.transfer(accounts[6], 3000000, {from: accounts[0]});
await instance.transfer(accounts[7], 3000000, {from: accounts[0]});
await instance.transfer(accounts[8], 3000000, {from: accounts[0]});
await instance.transfer(accounts[9], 3000000, {from: accounts[0]});

await instance.approve(accounts[101], 25896, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[101], 1000, {from: accounts[101]});

result = await instance.transfer(accounts[5],333,{from:accounts[4]});
await instance.batchTransfer([accounts[1],accounts[97],accounts[39],accounts[3]],4183,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 1',async() => {

await instance.approve(accounts[96], 32700, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[96], 1000, {from: accounts[96]});

await instance.batchTransfer([accounts[72],accounts[58]],6069,{from:accounts[0]});

result = await instance.transfer(accounts[4],782,{from:accounts[2]});
});
it('test 2',async() => {
await instance.batchTransfer([accounts[16],accounts[50],accounts[99]],7527,{from:accounts[0]});

result = await instance.transfer(accounts[3],890,{from:accounts[3]});

await instance.approve(accounts[44], 24381, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[44], 1000, {from: accounts[44]});

});
it('test 3',async() => {
await instance.batchTransfer([accounts[96],accounts[42],accounts[88],accounts[50],accounts[97]],4268,{from:accounts[0]});


await instance.approve(accounts[81], 28019, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[81], 1000, {from: accounts[81]});

result = await instance.transfer(accounts[2],701,{from:accounts[3]});
});
it('test 4',async() => {

await instance.approve(accounts[108], 22062, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[108], 1000, {from: accounts[108]});

result = await instance.transfer(accounts[5],581,{from:accounts[2]});
await instance.batchTransfer([accounts[32],accounts[83],accounts[56],accounts[51]],1540,{from:accounts[0]});

});
it('test 5',async() => {

await instance.approve(accounts[21], 39610, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[21], 1000, {from: accounts[21]});

result = await instance.transfer(accounts[2],652,{from:accounts[5]});
await instance.batchTransfer([accounts[1],accounts[86],accounts[46],accounts[6]],4357,{from:accounts[0]});

});
it('test 6',async() => {

await instance.approve(accounts[72], 26458, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[72], 1000, {from: accounts[72]});

await instance.batchTransfer([accounts[35],accounts[6],accounts[4],accounts[83],accounts[99]],7772,{from:accounts[0]});

result = await instance.transfer(accounts[0],294,{from:accounts[0]});
});
it('test 7',async() => {
await instance.batchTransfer([accounts[59],accounts[27],accounts[92]],5405,{from:accounts[0]});


await instance.approve(accounts[63], 35707, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[63], 1000, {from: accounts[63]});

result = await instance.transfer(accounts[5],706,{from:accounts[1]});
});
it('test 8',async() => {

await instance.approve(accounts[5], 32639, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[5], 1000, {from: accounts[5]});

await instance.batchTransfer([accounts[62],accounts[95]],3333,{from:accounts[0]});

result = await instance.transfer(accounts[4],501,{from:accounts[0]});
});
it('test 9',async() => {

await instance.approve(accounts[36], 33098, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[36], 1000, {from: accounts[36]});

await instance.batchTransfer([accounts[27],accounts[47],accounts[62],accounts[95],accounts[28],accounts[52],accounts[34]],4598,{from:accounts[0]});

result = await instance.transfer(accounts[4],792,{from:accounts[3]});
});
it('test 10',async() => {
result = await instance.transfer(accounts[2],905,{from:accounts[3]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[134], 30555, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[134], 1000, {from: accounts[134]});

await instance.batchTransfer([accounts[15],accounts[4],accounts[77],accounts[60],accounts[4],accounts[79],accounts[2],accounts[34]],2247,{from:accounts[0]});

});
it('test 11',async() => {
result = await instance.transfer(accounts[0],830,{from:accounts[1]});
await instance.batchTransfer([accounts[3],accounts[29],accounts[30],accounts[58],accounts[37],accounts[87],accounts[37],accounts[61]],2658,{from:accounts[0]});


await instance.approve(accounts[89], 37920, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[89], 1000, {from: accounts[89]});

});
it('test 12',async() => {
await instance.batchTransfer([accounts[62],accounts[66],accounts[39],accounts[18]],4740,{from:accounts[0]});

result = await instance.transfer(accounts[0],708,{from:accounts[4]});

await instance.approve(accounts[26], 33977, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[26], 1000, {from: accounts[26]});

});
it('test 13',async() => {
result = await instance.transfer(accounts[5],995,{from:accounts[2]});
await instance.batchTransfer([accounts[70],accounts[19],accounts[38],accounts[91],accounts[21],accounts[6],accounts[79],accounts[84],accounts[87]],1729,{from:accounts[0]});


await instance.approve(accounts[101], 38231, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[101], 1000, {from: accounts[101]});

});
it('test 14',async() => {
result = await instance.transfer(accounts[3],955,{from:accounts[0]});
await instance.batchTransfer([accounts[70],accounts[63],accounts[36],accounts[71],accounts[99],accounts[46],accounts[96],accounts[99],accounts[14],accounts[28]],7580,{from:accounts[0]});


await instance.approve(accounts[137], 34721, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[137], 1000, {from: accounts[137]});

});
it('test 15',async() => {
await instance.batchTransfer([accounts[14],accounts[94],accounts[18],accounts[84],accounts[69],accounts[47]],6558,{from:accounts[0]});

result = await instance.transfer(accounts[4],363,{from:accounts[4]});

await instance.approve(accounts[84], 23953, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[84], 1000, {from: accounts[84]});

});
it('test 16',async() => {

await instance.approve(accounts[128], 26633, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[128], 1000, {from: accounts[128]});

result = await instance.transfer(accounts[2],765,{from:accounts[0]});
await instance.batchTransfer([accounts[42],accounts[25],accounts[57],accounts[19]],7897,{from:accounts[0]});

});
it('test 17',async() => {

await instance.approve(accounts[46], 22352, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[46], 1000, {from: accounts[46]});

await instance.batchTransfer([accounts[85]],7508,{from:accounts[0]});

result = await instance.transfer(accounts[0],230,{from:accounts[5]});
});
it('test 18',async() => {
result = await instance.transfer(accounts[0],620,{from:accounts[2]});
await instance.batchTransfer([accounts[71],accounts[44],accounts[20],accounts[73]],3645,{from:accounts[0]});


await instance.approve(accounts[99], 22263, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[99], 1000, {from: accounts[99]});

});
it('test 19',async() => {
await instance.batchTransfer([accounts[63],accounts[92],accounts[93]],5424,{from:accounts[0]});


await instance.approve(accounts[166], 26244, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[166], 1000, {from: accounts[166]});

result = await instance.transfer(accounts[3],507,{from:accounts[2]});
});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.batchTransfer([accounts[5],accounts[9],accounts[24],accounts[75],accounts[70],accounts[60],accounts[84],accounts[10],accounts[25],accounts[8]],5855,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[93], 38456, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[93], 1000, {from: accounts[93]});

result = await instance.transfer(accounts[2],719,{from:accounts[5]});
});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 21',async() => {
await instance.batchTransfer([accounts[92],accounts[10]],8122,{from:accounts[0]});

result = await instance.transfer(accounts[5],343,{from:accounts[0]});

await instance.approve(accounts[77], 23233, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[77], 1000, {from: accounts[77]});

});
it('test 22',async() => {

await instance.approve(accounts[159], 28262, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[159], 1000, {from: accounts[159]});

result = await instance.transfer(accounts[1],548,{from:accounts[5]});
await instance.batchTransfer([accounts[15],accounts[21],accounts[93],accounts[94]],1064,{from:accounts[0]});

});
it('test 23',async() => {
await instance.batchTransfer([accounts[4],accounts[69],accounts[13]],6086,{from:accounts[0]});

result = await instance.transfer(accounts[1],720,{from:accounts[4]});

await instance.approve(accounts[49], 39757, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[49], 1000, {from: accounts[49]});

});
it('test 24',async() => {

await instance.approve(accounts[107], 27876, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[107], 1000, {from: accounts[107]});

await instance.batchTransfer([accounts[24],accounts[50],accounts[86],accounts[11],accounts[6],accounts[56],accounts[46],accounts[41],accounts[92]],6777,{from:accounts[0]});

result = await instance.transfer(accounts[5],494,{from:accounts[5]});
});
it('test 25',async() => {
await instance.batchTransfer([accounts[100],accounts[15]],6613,{from:accounts[0]});


await instance.approve(accounts[161], 34325, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[161], 1000, {from: accounts[161]});

result = await instance.transfer(accounts[0],496,{from:accounts[1]});
});
it('test 26',async() => {
result = await instance.transfer(accounts[4],863,{from:accounts[4]});
await instance.batchTransfer([accounts[15],accounts[100],accounts[70],accounts[71],accounts[10],accounts[85],accounts[56]],7890,{from:accounts[0]});


await instance.approve(accounts[35], 32158, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[35], 1000, {from: accounts[35]});

});
it('test 27',async() => {
await instance.batchTransfer([accounts[51],accounts[96],accounts[73]],9519,{from:accounts[0]});

result = await instance.transfer(accounts[3],568,{from:accounts[2]});

await instance.approve(accounts[50], 39453, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[50], 1000, {from: accounts[50]});

});
it('test 28',async() => {
await instance.batchTransfer([accounts[89],accounts[89],accounts[92],accounts[31],accounts[98],accounts[5]],1941,{from:accounts[0]});

result = await instance.transfer(accounts[4],659,{from:accounts[4]});

await instance.approve(accounts[157], 31274, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[157], 1000, {from: accounts[157]});

});
it('test 29',async() => {
result = await instance.transfer(accounts[5],485,{from:accounts[4]});
await instance.batchTransfer([accounts[66],accounts[20],accounts[22],accounts[18],accounts[20],accounts[7],accounts[32],accounts[33],accounts[2],accounts[3]],8387,{from:accounts[0]});


await instance.approve(accounts[137], 34126, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[137], 1000, {from: accounts[137]});

});
});
