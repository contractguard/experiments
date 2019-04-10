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
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[76],accounts[41],accounts[96]],2528,{from:accounts[0]});

result = await instance.transfer(accounts[5],863,{from:accounts[1]});

await instance.approve(accounts[47], 38867, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[47], 1000, {from: accounts[47]});

});
it('test 1',async() => {
result = await instance.transfer(accounts[0],381,{from:accounts[0]});
await instance.batchTransfer([accounts[13]],7287,{from:accounts[0]});


await instance.approve(accounts[9], 21660, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[9], 1000, {from: accounts[9]});

});
it('test 2',async() => {
await instance.batchTransfer([accounts[75],accounts[56],accounts[20],accounts[76],accounts[27],accounts[69]],5990,{from:accounts[0]});

result = await instance.transfer(accounts[4],637,{from:accounts[1]});

await instance.approve(accounts[18], 27015, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[18], 1000, {from: accounts[18]});

});
it('test 3',async() => {
await instance.batchTransfer([accounts[94],accounts[81],accounts[96],accounts[83],accounts[6],accounts[88],accounts[54]],8833,{from:accounts[0]});


await instance.approve(accounts[178], 36601, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[178], 1000, {from: accounts[178]});

result = await instance.transfer(accounts[0],659,{from:accounts[2]});
});
it('test 4',async() => {

await instance.approve(accounts[169], 28093, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[169], 1000, {from: accounts[169]});

result = await instance.transfer(accounts[2],757,{from:accounts[5]});
await instance.batchTransfer([accounts[53],accounts[16],accounts[88],accounts[7],accounts[81],accounts[10],accounts[18]],4643,{from:accounts[0]});

});
it('test 5',async() => {
await instance.batchTransfer([accounts[97],accounts[48],accounts[86]],1375,{from:accounts[0]});


await instance.approve(accounts[27], 33768, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[27], 1000, {from: accounts[27]});

result = await instance.transfer(accounts[2],363,{from:accounts[4]});
});
it('test 6',async() => {
result = await instance.transfer(accounts[3],207,{from:accounts[4]});
await instance.batchTransfer([accounts[72],accounts[17],accounts[22],accounts[16]],1983,{from:accounts[0]});


await instance.approve(accounts[3], 37763, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[3], 1000, {from: accounts[3]});

});
it('test 7',async() => {

await instance.approve(accounts[130], 26775, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[130], 1000, {from: accounts[130]});

result = await instance.transfer(accounts[3],458,{from:accounts[2]});
await instance.batchTransfer([accounts[14],accounts[59],accounts[86]],1070,{from:accounts[0]});

});
it('test 8',async() => {
result = await instance.transfer(accounts[1],552,{from:accounts[2]});

await instance.approve(accounts[54], 23830, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[54], 1000, {from: accounts[54]});

await instance.batchTransfer([accounts[57],accounts[3],accounts[61],accounts[76],accounts[2],accounts[67]],2119,{from:accounts[0]});

});
it('test 9',async() => {

await instance.approve(accounts[158], 35452, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[158], 1000, {from: accounts[158]});

result = await instance.transfer(accounts[1],733,{from:accounts[5]});
await instance.batchTransfer([accounts[88],accounts[45],accounts[16]],5576,{from:accounts[0]});

});
it('test 10',async() => {
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[2],401,{from:accounts[0]});
await instance.batchTransfer([accounts[28],accounts[83],accounts[47],accounts[79],accounts[98],accounts[16]],4351,{from:accounts[0]});


await instance.approve(accounts[168], 39054, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[168], 1000, {from: accounts[168]});

});
it('test 11',async() => {
await instance.batchTransfer([accounts[8],accounts[65],accounts[31],accounts[79]],7406,{from:accounts[0]});

result = await instance.transfer(accounts[5],651,{from:accounts[1]});

await instance.approve(accounts[21], 28918, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[21], 1000, {from: accounts[21]});

});
it('test 12',async() => {
result = await instance.transfer(accounts[5],590,{from:accounts[2]});
await instance.batchTransfer([accounts[31],accounts[34],accounts[70],accounts[17],accounts[16],accounts[8],accounts[20],accounts[42],accounts[46]],6909,{from:accounts[0]});


await instance.approve(accounts[178], 37281, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[178], 1000, {from: accounts[178]});

});
it('test 13',async() => {

await instance.approve(accounts[33], 37358, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[33], 1000, {from: accounts[33]});

await instance.batchTransfer([accounts[90],accounts[76],accounts[99],accounts[100],accounts[61]],4167,{from:accounts[0]});

result = await instance.transfer(accounts[1],685,{from:accounts[1]});
});
it('test 14',async() => {
result = await instance.transfer(accounts[4],374,{from:accounts[2]});
await instance.batchTransfer([accounts[86],accounts[35],accounts[59]],1265,{from:accounts[0]});


await instance.approve(accounts[140], 35935, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[140], 1000, {from: accounts[140]});

});
it('test 15',async() => {
result = await instance.transfer(accounts[3],782,{from:accounts[2]});
await instance.batchTransfer([accounts[82],accounts[78],accounts[80],accounts[63],accounts[78],accounts[39],accounts[3],accounts[94],accounts[30],accounts[61]],1835,{from:accounts[0]});


await instance.approve(accounts[165], 32390, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[165], 1000, {from: accounts[165]});

});
it('test 16',async() => {
result = await instance.transfer(accounts[3],493,{from:accounts[3]});

await instance.approve(accounts[136], 21022, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[136], 1000, {from: accounts[136]});

await instance.batchTransfer([accounts[41],accounts[70],accounts[3],accounts[50],accounts[9],accounts[48],accounts[26],accounts[19],accounts[26],accounts[50]],1384,{from:accounts[0]});

});
it('test 17',async() => {

await instance.approve(accounts[35], 29068, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[35], 1000, {from: accounts[35]});

result = await instance.transfer(accounts[2],523,{from:accounts[1]});
await instance.batchTransfer([accounts[7],accounts[65],accounts[80],accounts[51]],8397,{from:accounts[0]});

});
it('test 18',async() => {
result = await instance.transfer(accounts[1],731,{from:accounts[3]});
await instance.batchTransfer([accounts[42],accounts[90],accounts[63],accounts[69],accounts[40],accounts[41],accounts[54],accounts[28],accounts[23],accounts[69]],8143,{from:accounts[0]});


await instance.approve(accounts[172], 24063, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[172], 1000, {from: accounts[172]});

});
it('test 19',async() => {
await instance.batchTransfer([accounts[94],accounts[97],accounts[40],accounts[83],accounts[25],accounts[45],accounts[100]],1335,{from:accounts[0]});

result = await instance.transfer(accounts[4],858,{from:accounts[1]});

await instance.approve(accounts[121], 22175, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[121], 1000, {from: accounts[121]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
result = await instance.transfer(accounts[1],649,{from:accounts[4]});
await instance.batchTransfer([accounts[8],accounts[11],accounts[1],accounts[18],accounts[21],accounts[34],accounts[99],accounts[3]],8306,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[8], 31932, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[8], 1000, {from: accounts[8]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 21',async() => {
await instance.batchTransfer([accounts[8],accounts[65],accounts[45],accounts[23],accounts[84]],6738,{from:accounts[0]});


await instance.approve(accounts[19], 38016, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[19], 1000, {from: accounts[19]});

result = await instance.transfer(accounts[4],951,{from:accounts[1]});
});
it('test 22',async() => {
await instance.batchTransfer([accounts[25],accounts[15],accounts[21],accounts[81],accounts[17],accounts[76],accounts[10],accounts[5],accounts[79],accounts[100]],2411,{from:accounts[0]});


await instance.approve(accounts[93], 36889, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[93], 1000, {from: accounts[93]});

result = await instance.transfer(accounts[1],976,{from:accounts[2]});
});
it('test 23',async() => {
await instance.batchTransfer([accounts[23],accounts[58]],2376,{from:accounts[0]});


await instance.approve(accounts[125], 29807, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[125], 1000, {from: accounts[125]});

result = await instance.transfer(accounts[2],811,{from:accounts[1]});
});
it('test 24',async() => {

await instance.approve(accounts[62], 34014, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[62], 1000, {from: accounts[62]});

result = await instance.transfer(accounts[0],661,{from:accounts[2]});
await instance.batchTransfer([accounts[50],accounts[51],accounts[50]],7683,{from:accounts[0]});

});
it('test 25',async() => {
await instance.batchTransfer([accounts[44],accounts[25],accounts[9],accounts[10],accounts[48],accounts[70],accounts[13],accounts[64],accounts[75]],5833,{from:accounts[0]});

result = await instance.transfer(accounts[4],593,{from:accounts[0]});

await instance.approve(accounts[117], 35074, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[117], 1000, {from: accounts[117]});

});
it('test 26',async() => {
result = await instance.transfer(accounts[3],334,{from:accounts[4]});
await instance.batchTransfer([accounts[56],accounts[94],accounts[70],accounts[35],accounts[40]],5680,{from:accounts[0]});


await instance.approve(accounts[53], 35658, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[53], 1000, {from: accounts[53]});

});
it('test 27',async() => {
await instance.batchTransfer([accounts[10],accounts[12],accounts[69],accounts[24],accounts[45],accounts[10],accounts[43],accounts[21],accounts[84],accounts[90]],9730,{from:accounts[0]});


await instance.approve(accounts[76], 22028, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[76], 1000, {from: accounts[76]});

result = await instance.transfer(accounts[3],497,{from:accounts[1]});
});
it('test 28',async() => {
result = await instance.transfer(accounts[0],368,{from:accounts[3]});
await instance.batchTransfer([accounts[60],accounts[36],accounts[98]],5782,{from:accounts[0]});


await instance.approve(accounts[5], 24233, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[5], 1000, {from: accounts[5]});

});
it('test 29',async() => {
await instance.batchTransfer([accounts[75],accounts[11],accounts[34],accounts[10],accounts[33],accounts[28],accounts[62],accounts[34],accounts[16]],4591,{from:accounts[0]});


await instance.approve(accounts[174], 28981, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[174], 1000, {from: accounts[174]});

result = await instance.transfer(accounts[1],300,{from:accounts[2]});
});
});
