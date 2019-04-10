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


await instance.approve(accounts[169], 26082, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[169], 1000, {from: accounts[169]});

await instance.batchTransfer([accounts[74],accounts[34],accounts[87],accounts[76],accounts[56],accounts[41],accounts[81],accounts[81],accounts[21]],8061,{from:accounts[0]});

result = await instance.transfer(accounts[2],493,{from:accounts[4]});
});
it('test 1',async() => {
result = await instance.transfer(accounts[4],514,{from:accounts[3]});
await instance.batchTransfer([accounts[7],accounts[53],accounts[49],accounts[49],accounts[54],accounts[33],accounts[68],accounts[65]],7483,{from:accounts[0]});


await instance.approve(accounts[94], 27614, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[94], 1000, {from: accounts[94]});

});
it('test 2',async() => {
await instance.batchTransfer([accounts[66],accounts[77],accounts[81],accounts[9],accounts[34],accounts[30],accounts[97],accounts[74],accounts[26],accounts[7]],2371,{from:accounts[0]});

result = await instance.transfer(accounts[3],206,{from:accounts[5]});

await instance.approve(accounts[10], 37292, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[10], 1000, {from: accounts[10]});

});
it('test 3',async() => {

await instance.approve(accounts[166], 31083, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[166], 1000, {from: accounts[166]});

result = await instance.transfer(accounts[3],492,{from:accounts[4]});
await instance.batchTransfer([accounts[7],accounts[6],accounts[9]],1101,{from:accounts[0]});

});
it('test 4',async() => {

await instance.approve(accounts[21], 25994, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[21], 1000, {from: accounts[21]});

await instance.batchTransfer([accounts[20],accounts[47],accounts[42]],3625,{from:accounts[0]});

result = await instance.transfer(accounts[1],977,{from:accounts[2]});
});
it('test 5',async() => {

await instance.approve(accounts[29], 35736, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[29], 1000, {from: accounts[29]});

result = await instance.transfer(accounts[2],995,{from:accounts[0]});
await instance.batchTransfer([accounts[19],accounts[89],accounts[68],accounts[95],accounts[74],accounts[12],accounts[97],accounts[1],accounts[13]],2561,{from:accounts[0]});

});
it('test 6',async() => {

await instance.approve(accounts[36], 33975, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[36], 1000, {from: accounts[36]});

result = await instance.transfer(accounts[2],371,{from:accounts[0]});
await instance.batchTransfer([accounts[7],accounts[53],accounts[52],accounts[5],accounts[93],accounts[82]],4141,{from:accounts[0]});

});
it('test 7',async() => {

await instance.approve(accounts[164], 38266, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[164], 1000, {from: accounts[164]});

await instance.batchTransfer([accounts[10]],3666,{from:accounts[0]});

result = await instance.transfer(accounts[3],561,{from:accounts[0]});
});
it('test 8',async() => {
await instance.batchTransfer([accounts[26]],3027,{from:accounts[0]});

result = await instance.transfer(accounts[3],330,{from:accounts[2]});

await instance.approve(accounts[128], 28624, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[128], 1000, {from: accounts[128]});

});
it('test 9',async() => {

await instance.approve(accounts[120], 27381, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[120], 1000, {from: accounts[120]});

await instance.batchTransfer([accounts[53],accounts[26],accounts[51]],2692,{from:accounts[0]});

result = await instance.transfer(accounts[0],719,{from:accounts[1]});
});
it('test 10',async() => {
result = await instance.transfer(accounts[2],416,{from:accounts[0]});
await instance.batchTransfer([accounts[51],accounts[94],accounts[92],accounts[35],accounts[85],accounts[89],accounts[32],accounts[35],accounts[32],accounts[21]],6864,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[49], 34040, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[49], 1000, {from: accounts[49]});

});
it('test 11',async() => {
await instance.batchTransfer([accounts[11],accounts[37]],1327,{from:accounts[0]});

result = await instance.transfer(accounts[1],858,{from:accounts[5]});

await instance.approve(accounts[13], 33568, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[13], 1000, {from: accounts[13]});

});
it('test 12',async() => {

await instance.approve(accounts[84], 29503, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[84], 1000, {from: accounts[84]});

result = await instance.transfer(accounts[2],346,{from:accounts[1]});
await instance.batchTransfer([accounts[36],accounts[7],accounts[73]],6497,{from:accounts[0]});

});
it('test 13',async() => {

await instance.approve(accounts[10], 31926, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[10], 1000, {from: accounts[10]});

await instance.batchTransfer([accounts[45],accounts[68],accounts[72],accounts[2],accounts[39]],1193,{from:accounts[0]});

result = await instance.transfer(accounts[0],336,{from:accounts[1]});
});
it('test 14',async() => {
await instance.batchTransfer([accounts[35],accounts[23],accounts[28],accounts[16],accounts[45],accounts[48],accounts[78],accounts[29]],8616,{from:accounts[0]});


await instance.approve(accounts[68], 37106, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[68], 1000, {from: accounts[68]});

result = await instance.transfer(accounts[1],712,{from:accounts[5]});
});
it('test 15',async() => {
result = await instance.transfer(accounts[1],341,{from:accounts[4]});

await instance.approve(accounts[17], 27872, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[17], 1000, {from: accounts[17]});

await instance.batchTransfer([accounts[63],accounts[77],accounts[8],accounts[25],accounts[20]],6444,{from:accounts[0]});

});
it('test 16',async() => {
await instance.batchTransfer([accounts[36]],5465,{from:accounts[0]});

result = await instance.transfer(accounts[2],239,{from:accounts[4]});

await instance.approve(accounts[189], 39113, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[189], 1000, {from: accounts[189]});

});
it('test 17',async() => {
result = await instance.transfer(accounts[2],407,{from:accounts[2]});
await instance.batchTransfer([accounts[98],accounts[39],accounts[74],accounts[41],accounts[64],accounts[57]],4273,{from:accounts[0]});


await instance.approve(accounts[6], 22488, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[6], 1000, {from: accounts[6]});

});
it('test 18',async() => {
result = await instance.transfer(accounts[3],697,{from:accounts[5]});
await instance.batchTransfer([accounts[35],accounts[57],accounts[94],accounts[9],accounts[52],accounts[91],accounts[6],accounts[58]],8109,{from:accounts[0]});


await instance.approve(accounts[148], 30823, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[148], 1000, {from: accounts[148]});

});
it('test 19',async() => {

await instance.approve(accounts[17], 30969, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[17], 1000, {from: accounts[17]});

await instance.batchTransfer([accounts[79],accounts[2],accounts[77],accounts[8],accounts[75],accounts[51]],2877,{from:accounts[0]});

result = await instance.transfer(accounts[4],393,{from:accounts[1]});
});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});

await instance.approve(accounts[18], 26224, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[18], 1000, {from: accounts[18]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[1],890,{from:accounts[0]});
await instance.batchTransfer([accounts[15],accounts[67],accounts[83],accounts[62],accounts[48]],1782,{from:accounts[0]});

});
it('test 21',async() => {
result = await instance.transfer(accounts[1],263,{from:accounts[3]});
await instance.batchTransfer([accounts[86],accounts[4],accounts[31],accounts[39],accounts[100],accounts[82]],2532,{from:accounts[0]});


await instance.approve(accounts[20], 27424, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[20], 1000, {from: accounts[20]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 22',async() => {
result = await instance.transfer(accounts[1],383,{from:accounts[3]});

await instance.approve(accounts[29], 35886, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[29], 1000, {from: accounts[29]});

await instance.batchTransfer([accounts[97],accounts[77],accounts[69],accounts[6],accounts[28],accounts[85]],4457,{from:accounts[0]});

});
it('test 23',async() => {

await instance.approve(accounts[194], 31016, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[194], 1000, {from: accounts[194]});

await instance.batchTransfer([accounts[21],accounts[45],accounts[32],accounts[79]],9981,{from:accounts[0]});

result = await instance.transfer(accounts[5],278,{from:accounts[1]});
});
it('test 24',async() => {
await instance.batchTransfer([accounts[96],accounts[45],accounts[59],accounts[81],accounts[10],accounts[61],accounts[51],accounts[87]],9185,{from:accounts[0]});


await instance.approve(accounts[145], 31054, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[145], 1000, {from: accounts[145]});

result = await instance.transfer(accounts[0],911,{from:accounts[2]});
});
it('test 25',async() => {
await instance.batchTransfer([accounts[77]],5174,{from:accounts[0]});


await instance.approve(accounts[75], 20883, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[75], 1000, {from: accounts[75]});

result = await instance.transfer(accounts[1],614,{from:accounts[3]});
});
it('test 26',async() => {

await instance.approve(accounts[187], 36084, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[187], 1000, {from: accounts[187]});

await instance.batchTransfer([accounts[36],accounts[14]],5401,{from:accounts[0]});

result = await instance.transfer(accounts[0],590,{from:accounts[2]});
});
it('test 27',async() => {
result = await instance.transfer(accounts[3],306,{from:accounts[5]});
await instance.batchTransfer([accounts[54],accounts[72],accounts[22],accounts[11],accounts[35]],4190,{from:accounts[0]});


await instance.approve(accounts[32], 33306, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[32], 1000, {from: accounts[32]});

});
it('test 28',async() => {

await instance.approve(accounts[122], 34239, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[122], 1000, {from: accounts[122]});

await instance.batchTransfer([accounts[72],accounts[69],accounts[86],accounts[27],accounts[23],accounts[71],accounts[62]],1822,{from:accounts[0]});

result = await instance.transfer(accounts[4],782,{from:accounts[3]});
});
it('test 29',async() => {
await instance.batchTransfer([accounts[43],accounts[70]],7461,{from:accounts[0]});


await instance.approve(accounts[19], 39407, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[19], 1000, {from: accounts[19]});

result = await instance.transfer(accounts[3],828,{from:accounts[4]});
});
});
