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

await instance.approve(accounts[64], 25305, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[64], 1000, {from: accounts[64]});

result = await instance.transfer(accounts[2],668,{from:accounts[3]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[15],accounts[68],accounts[58],accounts[66],accounts[64],accounts[12],accounts[23]],7681,{from:accounts[0]});

});
it('test 1',async() => {
result = await instance.transfer(accounts[1],326,{from:accounts[5]});

await instance.approve(accounts[162], 29435, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[162], 1000, {from: accounts[162]});

await instance.batchTransfer([accounts[49]],4844,{from:accounts[0]});

});
it('test 2',async() => {
result = await instance.transfer(accounts[4],555,{from:accounts[4]});

await instance.approve(accounts[139], 26805, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[139], 1000, {from: accounts[139]});

await instance.batchTransfer([accounts[75],accounts[77],accounts[79]],2426,{from:accounts[0]});

});
it('test 3',async() => {

await instance.approve(accounts[100], 26940, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[100], 1000, {from: accounts[100]});

result = await instance.transfer(accounts[4],876,{from:accounts[0]});
await instance.batchTransfer([accounts[63],accounts[5],accounts[94],accounts[62]],7108,{from:accounts[0]});

});
it('test 4',async() => {
result = await instance.transfer(accounts[5],249,{from:accounts[1]});
await instance.batchTransfer([accounts[82],accounts[40],accounts[34],accounts[47],accounts[14],accounts[39]],1511,{from:accounts[0]});


await instance.approve(accounts[56], 22205, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[56], 1000, {from: accounts[56]});

});
it('test 5',async() => {

await instance.approve(accounts[3], 39584, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[3], 1000, {from: accounts[3]});

await instance.batchTransfer([accounts[12],accounts[99],accounts[97],accounts[53]],6513,{from:accounts[0]});

result = await instance.transfer(accounts[1],558,{from:accounts[0]});
});
it('test 6',async() => {

await instance.approve(accounts[116], 35500, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[116], 1000, {from: accounts[116]});

result = await instance.transfer(accounts[2],657,{from:accounts[2]});
await instance.batchTransfer([accounts[86],accounts[33],accounts[70],accounts[4],accounts[71],accounts[78],accounts[6],accounts[61]],1120,{from:accounts[0]});

});
it('test 7',async() => {
await instance.batchTransfer([accounts[44],accounts[69],accounts[23],accounts[9],accounts[35]],9932,{from:accounts[0]});


await instance.approve(accounts[142], 21253, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[142], 1000, {from: accounts[142]});

result = await instance.transfer(accounts[5],819,{from:accounts[5]});
});
it('test 8',async() => {
await instance.batchTransfer([accounts[81],accounts[50],accounts[93],accounts[97],accounts[44],accounts[77],accounts[82],accounts[56]],5965,{from:accounts[0]});


await instance.approve(accounts[150], 21271, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[150], 1000, {from: accounts[150]});

result = await instance.transfer(accounts[0],556,{from:accounts[3]});
});
it('test 9',async() => {
await instance.batchTransfer([accounts[49],accounts[85],accounts[53],accounts[73],accounts[25],accounts[43]],7270,{from:accounts[0]});


await instance.approve(accounts[179], 21906, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[179], 1000, {from: accounts[179]});

result = await instance.transfer(accounts[2],526,{from:accounts[4]});
});
it('test 10',async() => {
result = await instance.transfer(accounts[3],425,{from:accounts[5]});
await instance.batchTransfer([accounts[97],accounts[11],accounts[30],accounts[98],accounts[48],accounts[11],accounts[29],accounts[91],accounts[51],accounts[10]],4602,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[73], 39467, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[73], 1000, {from: accounts[73]});

});
it('test 11',async() => {

await instance.approve(accounts[41], 23864, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[41], 1000, {from: accounts[41]});

result = await instance.transfer(accounts[4],962,{from:accounts[2]});
await instance.batchTransfer([accounts[28],accounts[55],accounts[14],accounts[48],accounts[46],accounts[5]],6187,{from:accounts[0]});

});
it('test 12',async() => {
await instance.batchTransfer([accounts[61],accounts[33],accounts[33],accounts[86]],8261,{from:accounts[0]});

result = await instance.transfer(accounts[3],344,{from:accounts[3]});

await instance.approve(accounts[138], 28281, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[138], 1000, {from: accounts[138]});

});
it('test 13',async() => {

await instance.approve(accounts[48], 23693, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[48], 1000, {from: accounts[48]});

result = await instance.transfer(accounts[5],953,{from:accounts[1]});
await instance.batchTransfer([accounts[18],accounts[9],accounts[75],accounts[92],accounts[83]],2579,{from:accounts[0]});

});
it('test 14',async() => {
await instance.batchTransfer([accounts[88],accounts[34],accounts[52],accounts[74],accounts[64],accounts[76],accounts[24],accounts[83],accounts[71],accounts[100]],9903,{from:accounts[0]});

result = await instance.transfer(accounts[4],437,{from:accounts[4]});

await instance.approve(accounts[108], 22051, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[108], 1000, {from: accounts[108]});

});
it('test 15',async() => {
result = await instance.transfer(accounts[2],892,{from:accounts[2]});

await instance.approve(accounts[150], 31488, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[150], 1000, {from: accounts[150]});

await instance.batchTransfer([accounts[17],accounts[73],accounts[80],accounts[45],accounts[49],accounts[55],accounts[42],accounts[24],accounts[47]],2433,{from:accounts[0]});

});
it('test 16',async() => {
await instance.batchTransfer([accounts[87],accounts[35],accounts[79],accounts[52],accounts[38],accounts[68],accounts[5],accounts[27],accounts[73]],4516,{from:accounts[0]});


await instance.approve(accounts[117], 39286, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[117], 1000, {from: accounts[117]});

result = await instance.transfer(accounts[0],785,{from:accounts[2]});
});
it('test 17',async() => {
result = await instance.transfer(accounts[5],794,{from:accounts[2]});
await instance.batchTransfer([accounts[99],accounts[68],accounts[41],accounts[50]],8996,{from:accounts[0]});


await instance.approve(accounts[157], 25268, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[157], 1000, {from: accounts[157]});

});
it('test 18',async() => {

await instance.approve(accounts[35], 33926, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[35], 1000, {from: accounts[35]});

await instance.batchTransfer([accounts[18],accounts[25]],7771,{from:accounts[0]});

result = await instance.transfer(accounts[3],575,{from:accounts[0]});
});
it('test 19',async() => {
await instance.batchTransfer([accounts[25],accounts[23],accounts[57],accounts[24],accounts[65],accounts[88],accounts[8],accounts[59]],3933,{from:accounts[0]});


await instance.approve(accounts[24], 35473, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[24], 1000, {from: accounts[24]});

result = await instance.transfer(accounts[0],527,{from:accounts[2]});
});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
result = await instance.transfer(accounts[3],384,{from:accounts[4]});
await instance.batchTransfer([accounts[93],accounts[47],accounts[44],accounts[4],accounts[53],accounts[79]],5188,{from:accounts[0]});


await instance.approve(accounts[91], 28556, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[91], 1000, {from: accounts[91]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 21',async() => {

await instance.approve(accounts[119], 24443, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[119], 1000, {from: accounts[119]});

result = await instance.transfer(accounts[4],933,{from:accounts[0]});
await instance.batchTransfer([accounts[66],accounts[94],accounts[63],accounts[5]],6761,{from:accounts[0]});

});
it('test 22',async() => {

await instance.approve(accounts[143], 35309, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[143], 1000, {from: accounts[143]});

result = await instance.transfer(accounts[4],610,{from:accounts[2]});
await instance.batchTransfer([accounts[32],accounts[43],accounts[35],accounts[15],accounts[77]],5207,{from:accounts[0]});

});
it('test 23',async() => {

await instance.approve(accounts[184], 28067, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[184], 1000, {from: accounts[184]});

result = await instance.transfer(accounts[0],792,{from:accounts[2]});
await instance.batchTransfer([accounts[56]],7528,{from:accounts[0]});

});
it('test 24',async() => {
await instance.batchTransfer([accounts[71],accounts[22],accounts[14]],8829,{from:accounts[0]});


await instance.approve(accounts[46], 33396, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[46], 1000, {from: accounts[46]});

result = await instance.transfer(accounts[3],872,{from:accounts[2]});
});
it('test 25',async() => {

await instance.approve(accounts[49], 38905, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[49], 1000, {from: accounts[49]});

await instance.batchTransfer([accounts[92],accounts[5],accounts[43],accounts[65],accounts[16]],2932,{from:accounts[0]});

result = await instance.transfer(accounts[0],665,{from:accounts[3]});
});
it('test 26',async() => {
result = await instance.transfer(accounts[5],410,{from:accounts[3]});
await instance.batchTransfer([accounts[51],accounts[91],accounts[82],accounts[54],accounts[48],accounts[55]],3511,{from:accounts[0]});


await instance.approve(accounts[183], 25415, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[183], 1000, {from: accounts[183]});

});
it('test 27',async() => {
await instance.batchTransfer([accounts[14],accounts[99],accounts[73],accounts[7]],7343,{from:accounts[0]});

result = await instance.transfer(accounts[4],983,{from:accounts[4]});

await instance.approve(accounts[48], 38121, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[48], 1000, {from: accounts[48]});

});
it('test 28',async() => {
await instance.batchTransfer([accounts[52],accounts[96],accounts[10],accounts[29],accounts[57],accounts[74]],6356,{from:accounts[0]});

result = await instance.transfer(accounts[5],361,{from:accounts[0]});

await instance.approve(accounts[127], 34112, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[127], 1000, {from: accounts[127]});

});
it('test 29',async() => {
result = await instance.transfer(accounts[2],726,{from:accounts[4]});

await instance.approve(accounts[111], 31411, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[111], 1000, {from: accounts[111]});

await instance.batchTransfer([accounts[50],accounts[29]],3327,{from:accounts[0]});

});
});
