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

await instance.approve(accounts[39], 31302, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[39], 1000, {from: accounts[39]});

await instance.batchTransfer([accounts[64],accounts[68],accounts[21],accounts[99],accounts[75],accounts[92],accounts[34],accounts[84],accounts[61],accounts[79]],2386,{from:accounts[0]});

result = await instance.transfer(accounts[5],363,{from:accounts[1]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 1',async() => {
result = await instance.transfer(accounts[0],647,{from:accounts[3]});

await instance.approve(accounts[39], 33228, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[39], 1000, {from: accounts[39]});

await instance.batchTransfer([accounts[32],accounts[42]],7229,{from:accounts[0]});

});
it('test 2',async() => {

await instance.approve(accounts[34], 35705, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[34], 1000, {from: accounts[34]});

result = await instance.transfer(accounts[0],729,{from:accounts[0]});
await instance.batchTransfer([accounts[24]],9826,{from:accounts[0]});

});
it('test 3',async() => {

await instance.approve(accounts[82], 33966, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[82], 1000, {from: accounts[82]});

result = await instance.transfer(accounts[2],315,{from:accounts[4]});
await instance.batchTransfer([accounts[95]],3490,{from:accounts[0]});

});
it('test 4',async() => {

await instance.approve(accounts[13], 28467, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[13], 1000, {from: accounts[13]});

await instance.batchTransfer([accounts[89]],4556,{from:accounts[0]});

result = await instance.transfer(accounts[0],438,{from:accounts[1]});
});
it('test 5',async() => {
await instance.batchTransfer([accounts[36]],7926,{from:accounts[0]});


await instance.approve(accounts[163], 39918, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[163], 1000, {from: accounts[163]});

result = await instance.transfer(accounts[2],823,{from:accounts[3]});
});
it('test 6',async() => {

await instance.approve(accounts[12], 27728, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[12], 1000, {from: accounts[12]});

result = await instance.transfer(accounts[0],238,{from:accounts[0]});
await instance.batchTransfer([accounts[4],accounts[77],accounts[82]],1626,{from:accounts[0]});

});
it('test 7',async() => {

await instance.approve(accounts[174], 29017, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[174], 1000, {from: accounts[174]});

result = await instance.transfer(accounts[2],848,{from:accounts[5]});
await instance.batchTransfer([accounts[44],accounts[51],accounts[67],accounts[85],accounts[55],accounts[90]],7687,{from:accounts[0]});

});
it('test 8',async() => {
result = await instance.transfer(accounts[1],698,{from:accounts[0]});
await instance.batchTransfer([accounts[66],accounts[99],accounts[42],accounts[21],accounts[42],accounts[76],accounts[15]],9224,{from:accounts[0]});


await instance.approve(accounts[86], 27587, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[86], 1000, {from: accounts[86]});

});
it('test 9',async() => {
await instance.batchTransfer([accounts[42],accounts[77],accounts[60],accounts[38],accounts[99],accounts[98]],2151,{from:accounts[0]});

result = await instance.transfer(accounts[2],256,{from:accounts[5]});

await instance.approve(accounts[42], 33349, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[42], 1000, {from: accounts[42]});

});
it('test 10',async() => {
await instance.batchTransfer([accounts[33],accounts[77],accounts[90],accounts[7],accounts[4],accounts[35]],9083,{from:accounts[0]});

result = await instance.transfer(accounts[3],965,{from:accounts[2]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[150], 25513, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[150], 1000, {from: accounts[150]});

});
it('test 11',async() => {
result = await instance.transfer(accounts[4],399,{from:accounts[4]});

await instance.approve(accounts[149], 38114, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[149], 1000, {from: accounts[149]});

await instance.batchTransfer([accounts[13],accounts[2],accounts[56],accounts[53]],5282,{from:accounts[0]});

});
it('test 12',async() => {
await instance.batchTransfer([accounts[30]],6888,{from:accounts[0]});

result = await instance.transfer(accounts[2],334,{from:accounts[4]});

await instance.approve(accounts[121], 35237, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[121], 1000, {from: accounts[121]});

});
it('test 13',async() => {

await instance.approve(accounts[82], 31913, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[82], 1000, {from: accounts[82]});

result = await instance.transfer(accounts[3],469,{from:accounts[4]});
await instance.batchTransfer([accounts[72],accounts[85],accounts[38],accounts[95]],7808,{from:accounts[0]});

});
it('test 14',async() => {
result = await instance.transfer(accounts[5],320,{from:accounts[4]});

await instance.approve(accounts[63], 27102, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[63], 1000, {from: accounts[63]});

await instance.batchTransfer([accounts[98],accounts[95],accounts[69],accounts[84],accounts[83],accounts[81],accounts[81],accounts[4],accounts[69],accounts[70]],7568,{from:accounts[0]});

});
it('test 15',async() => {
await instance.batchTransfer([accounts[89],accounts[97]],9278,{from:accounts[0]});


await instance.approve(accounts[133], 32195, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[133], 1000, {from: accounts[133]});

result = await instance.transfer(accounts[1],900,{from:accounts[3]});
});
it('test 16',async() => {
result = await instance.transfer(accounts[2],899,{from:accounts[5]});
await instance.batchTransfer([accounts[59],accounts[92]],9809,{from:accounts[0]});


await instance.approve(accounts[42], 22874, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[42], 1000, {from: accounts[42]});

});
it('test 17',async() => {

await instance.approve(accounts[15], 36913, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[15], 1000, {from: accounts[15]});

result = await instance.transfer(accounts[4],299,{from:accounts[4]});
await instance.batchTransfer([accounts[10]],4464,{from:accounts[0]});

});
it('test 18',async() => {
await instance.batchTransfer([accounts[1]],8487,{from:accounts[0]});


await instance.approve(accounts[39], 37896, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[39], 1000, {from: accounts[39]});

result = await instance.transfer(accounts[0],722,{from:accounts[0]});
});
it('test 19',async() => {
await instance.batchTransfer([accounts[50]],8390,{from:accounts[0]});


await instance.approve(accounts[103], 36188, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[103], 1000, {from: accounts[103]});

result = await instance.transfer(accounts[1],253,{from:accounts[0]});
});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
result = await instance.transfer(accounts[5],421,{from:accounts[0]});
await instance.batchTransfer([accounts[34],accounts[57],accounts[98],accounts[7],accounts[89],accounts[68]],8532,{from:accounts[0]});


await instance.approve(accounts[86], 27383, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[86], 1000, {from: accounts[86]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 21',async() => {
await instance.batchTransfer([accounts[99],accounts[36],accounts[37],accounts[27]],1613,{from:accounts[0]});


await instance.approve(accounts[162], 38817, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[162], 1000, {from: accounts[162]});

result = await instance.transfer(accounts[2],393,{from:accounts[1]});
});
it('test 22',async() => {
await instance.batchTransfer([accounts[80],accounts[68],accounts[63],accounts[23],accounts[52]],7618,{from:accounts[0]});

result = await instance.transfer(accounts[1],652,{from:accounts[5]});

await instance.approve(accounts[49], 28216, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[49], 1000, {from: accounts[49]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 23',async() => {
await instance.batchTransfer([accounts[57],accounts[77]],8433,{from:accounts[0]});


await instance.approve(accounts[170], 28270, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[170], 1000, {from: accounts[170]});

result = await instance.transfer(accounts[0],436,{from:accounts[1]});
});
it('test 24',async() => {
result = await instance.transfer(accounts[5],569,{from:accounts[1]});
await instance.batchTransfer([accounts[65]],1492,{from:accounts[0]});


await instance.approve(accounts[192], 27330, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[192], 1000, {from: accounts[192]});

});
it('test 25',async() => {

await instance.approve(accounts[77], 38575, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[77], 1000, {from: accounts[77]});

result = await instance.transfer(accounts[0],427,{from:accounts[2]});
await instance.batchTransfer([accounts[3],accounts[57],accounts[73],accounts[86],accounts[87],accounts[8],accounts[50],accounts[95],accounts[98],accounts[91]],8640,{from:accounts[0]});

});
it('test 26',async() => {
result = await instance.transfer(accounts[3],458,{from:accounts[3]});

await instance.approve(accounts[113], 36754, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[113], 1000, {from: accounts[113]});

await instance.batchTransfer([accounts[39],accounts[9]],5041,{from:accounts[0]});

});
it('test 27',async() => {
result = await instance.transfer(accounts[2],269,{from:accounts[4]});
await instance.batchTransfer([accounts[12],accounts[82],accounts[18],accounts[27],accounts[82],accounts[56]],6971,{from:accounts[0]});


await instance.approve(accounts[85], 30369, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[85], 1000, {from: accounts[85]});

});
it('test 28',async() => {

await instance.approve(accounts[93], 22595, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[93], 1000, {from: accounts[93]});

await instance.batchTransfer([accounts[63]],3116,{from:accounts[0]});

result = await instance.transfer(accounts[1],304,{from:accounts[5]});
});
it('test 29',async() => {
await instance.batchTransfer([accounts[4],accounts[46],accounts[62],accounts[73],accounts[87]],6542,{from:accounts[0]});


await instance.approve(accounts[136], 30750, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[136], 1000, {from: accounts[136]});

result = await instance.transfer(accounts[3],513,{from:accounts[2]});
});
});
