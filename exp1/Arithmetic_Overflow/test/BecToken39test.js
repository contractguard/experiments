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
await instance.batchTransfer([accounts[3],accounts[97],accounts[72],accounts[91],accounts[88]],1788,{from:accounts[0]});


await instance.approve(accounts[88], 24281, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[88], 1000, {from: accounts[88]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[3],572,{from:accounts[3]});
});
it('test 1',async() => {
await instance.batchTransfer([accounts[54],accounts[41],accounts[84],accounts[41],accounts[24],accounts[53]],5290,{from:accounts[0]});


await instance.approve(accounts[73], 30092, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[73], 1000, {from: accounts[73]});

result = await instance.transfer(accounts[3],603,{from:accounts[2]});
});
it('test 2',async() => {
await instance.batchTransfer([accounts[59],accounts[2],accounts[96]],5667,{from:accounts[0]});

result = await instance.transfer(accounts[2],511,{from:accounts[3]});

await instance.approve(accounts[128], 20659, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[128], 1000, {from: accounts[128]});

});
it('test 3',async() => {
result = await instance.transfer(accounts[3],854,{from:accounts[3]});

await instance.approve(accounts[101], 34336, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[101], 1000, {from: accounts[101]});

await instance.batchTransfer([accounts[95],accounts[83],accounts[15],accounts[54],accounts[33]],5014,{from:accounts[0]});

});
it('test 4',async() => {
result = await instance.transfer(accounts[4],688,{from:accounts[5]});
await instance.batchTransfer([accounts[90],accounts[23],accounts[1],accounts[43],accounts[37]],9125,{from:accounts[0]});


await instance.approve(accounts[167], 37487, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[167], 1000, {from: accounts[167]});

});
it('test 5',async() => {
await instance.batchTransfer([accounts[100],accounts[49],accounts[32],accounts[100]],9473,{from:accounts[0]});

result = await instance.transfer(accounts[2],502,{from:accounts[5]});

await instance.approve(accounts[35], 33657, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[35], 1000, {from: accounts[35]});

});
it('test 6',async() => {
result = await instance.transfer(accounts[4],801,{from:accounts[3]});
await instance.batchTransfer([accounts[12],accounts[49],accounts[94],accounts[70],accounts[83]],4902,{from:accounts[0]});


await instance.approve(accounts[94], 32196, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[94], 1000, {from: accounts[94]});

});
it('test 7',async() => {

await instance.approve(accounts[10], 36551, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[10], 1000, {from: accounts[10]});

await instance.batchTransfer([accounts[28],accounts[78],accounts[18],accounts[54],accounts[61],accounts[93],accounts[85]],8183,{from:accounts[0]});

result = await instance.transfer(accounts[1],385,{from:accounts[4]});
});
it('test 8',async() => {
result = await instance.transfer(accounts[1],590,{from:accounts[1]});
await instance.batchTransfer([accounts[32],accounts[20],accounts[74]],8375,{from:accounts[0]});


await instance.approve(accounts[24], 27999, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[24], 1000, {from: accounts[24]});

});
it('test 9',async() => {
await instance.batchTransfer([accounts[38],accounts[37],accounts[89],accounts[67],accounts[17],accounts[21],accounts[37],accounts[90],accounts[67],accounts[61]],6215,{from:accounts[0]});

result = await instance.transfer(accounts[5],507,{from:accounts[5]});

await instance.approve(accounts[29], 20189, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[29], 1000, {from: accounts[29]});

});
it('test 10',async() => {
result = await instance.transfer(accounts[4],234,{from:accounts[2]});

await instance.approve(accounts[64], 29299, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[64], 1000, {from: accounts[64]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[37],accounts[15],accounts[21],accounts[85],accounts[27],accounts[100],accounts[82],accounts[98],accounts[3]],5162,{from:accounts[0]});

});
it('test 11',async() => {
await instance.batchTransfer([accounts[88]],5195,{from:accounts[0]});

result = await instance.transfer(accounts[3],948,{from:accounts[4]});

await instance.approve(accounts[99], 36814, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[99], 1000, {from: accounts[99]});

});
it('test 12',async() => {
result = await instance.transfer(accounts[1],430,{from:accounts[5]});
await instance.batchTransfer([accounts[10],accounts[62],accounts[12],accounts[62],accounts[49]],6620,{from:accounts[0]});


await instance.approve(accounts[168], 38181, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[168], 1000, {from: accounts[168]});

});
it('test 13',async() => {

await instance.approve(accounts[182], 31702, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[182], 1000, {from: accounts[182]});

await instance.batchTransfer([accounts[32],accounts[52],accounts[53],accounts[100],accounts[59],accounts[57]],9423,{from:accounts[0]});

result = await instance.transfer(accounts[2],802,{from:accounts[1]});
});
it('test 14',async() => {
result = await instance.transfer(accounts[3],696,{from:accounts[2]});

await instance.approve(accounts[71], 31455, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[71], 1000, {from: accounts[71]});

await instance.batchTransfer([accounts[2],accounts[90]],2130,{from:accounts[0]});

});
it('test 15',async() => {
await instance.batchTransfer([accounts[55],accounts[31],accounts[46],accounts[42],accounts[93],accounts[1]],2857,{from:accounts[0]});


await instance.approve(accounts[40], 20546, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[40], 1000, {from: accounts[40]});

result = await instance.transfer(accounts[4],905,{from:accounts[4]});
});
it('test 16',async() => {
await instance.batchTransfer([accounts[88],accounts[12],accounts[43]],4617,{from:accounts[0]});


await instance.approve(accounts[136], 26664, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[136], 1000, {from: accounts[136]});

result = await instance.transfer(accounts[5],375,{from:accounts[0]});
});
it('test 17',async() => {
result = await instance.transfer(accounts[0],606,{from:accounts[1]});

await instance.approve(accounts[63], 27377, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[63], 1000, {from: accounts[63]});

await instance.batchTransfer([accounts[30],accounts[96],accounts[30],accounts[92]],1533,{from:accounts[0]});

});
it('test 18',async() => {

await instance.approve(accounts[142], 30458, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[142], 1000, {from: accounts[142]});

await instance.batchTransfer([accounts[95],accounts[24],accounts[44],accounts[92],accounts[75],accounts[50],accounts[37],accounts[27]],5330,{from:accounts[0]});

result = await instance.transfer(accounts[5],777,{from:accounts[1]});
});
it('test 19',async() => {
result = await instance.transfer(accounts[3],584,{from:accounts[5]});
await instance.batchTransfer([accounts[53],accounts[71],accounts[75],accounts[52],accounts[89]],1170,{from:accounts[0]});


await instance.approve(accounts[11], 20821, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[11], 1000, {from: accounts[11]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[0],782,{from:accounts[1]});
await instance.batchTransfer([accounts[17],accounts[88],accounts[93],accounts[65],accounts[16]],5981,{from:accounts[0]});


await instance.approve(accounts[138], 29354, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[138], 1000, {from: accounts[138]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 21',async() => {
result = await instance.transfer(accounts[5],332,{from:accounts[5]});

await instance.approve(accounts[67], 25708, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[67], 1000, {from: accounts[67]});

await instance.batchTransfer([accounts[28],accounts[35],accounts[28],accounts[80],accounts[74],accounts[100],accounts[19],accounts[2],accounts[50],accounts[11]],9019,{from:accounts[0]});

});
it('test 22',async() => {

await instance.approve(accounts[159], 24022, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[159], 1000, {from: accounts[159]});

await instance.batchTransfer([accounts[33]],4298,{from:accounts[0]});

result = await instance.transfer(accounts[4],660,{from:accounts[4]});
});
it('test 23',async() => {
result = await instance.transfer(accounts[4],871,{from:accounts[5]});
await instance.batchTransfer([accounts[97],accounts[53],accounts[91],accounts[92],accounts[9],accounts[43],accounts[40],accounts[11]],3523,{from:accounts[0]});


await instance.approve(accounts[10], 36244, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[10], 1000, {from: accounts[10]});

});
it('test 24',async() => {
await instance.batchTransfer([accounts[79],accounts[29],accounts[81],accounts[17]],3307,{from:accounts[0]});


await instance.approve(accounts[197], 22559, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[197], 1000, {from: accounts[197]});

result = await instance.transfer(accounts[5],248,{from:accounts[3]});
});
it('test 25',async() => {
await instance.batchTransfer([accounts[66],accounts[33],accounts[28],accounts[42],accounts[57],accounts[64],accounts[32]],8845,{from:accounts[0]});

result = await instance.transfer(accounts[0],895,{from:accounts[3]});

await instance.approve(accounts[27], 38087, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[27], 1000, {from: accounts[27]});

});
it('test 26',async() => {
result = await instance.transfer(accounts[0],907,{from:accounts[5]});
await instance.batchTransfer([accounts[27],accounts[23],accounts[76],accounts[88],accounts[71],accounts[67],accounts[50],accounts[90],accounts[85]],4386,{from:accounts[0]});


await instance.approve(accounts[39], 32317, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[39], 1000, {from: accounts[39]});

});
it('test 27',async() => {

await instance.approve(accounts[187], 34411, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[187], 1000, {from: accounts[187]});

await instance.batchTransfer([accounts[1],accounts[17],accounts[69],accounts[78],accounts[63]],2729,{from:accounts[0]});

result = await instance.transfer(accounts[0],614,{from:accounts[5]});
});
it('test 28',async() => {
await instance.batchTransfer([accounts[22],accounts[24],accounts[39],accounts[56],accounts[40],accounts[25],accounts[70]],9984,{from:accounts[0]});


await instance.approve(accounts[131], 28737, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[131], 1000, {from: accounts[131]});

result = await instance.transfer(accounts[3],721,{from:accounts[2]});
});
it('test 29',async() => {
await instance.batchTransfer([accounts[62],accounts[50],accounts[25],accounts[77],accounts[64],accounts[31],accounts[84],accounts[79],accounts[53]],6369,{from:accounts[0]});

result = await instance.transfer(accounts[0],205,{from:accounts[3]});

await instance.approve(accounts[5], 28268, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[5], 1000, {from: accounts[5]});

});
});
