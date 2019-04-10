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
await instance.batchTransfer([accounts[16],accounts[72],accounts[51],accounts[33]],8526,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[32], 28550, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[32], 1000, {from: accounts[32]});

result = await instance.transfer(accounts[1],221,{from:accounts[5]});
});
it('test 1',async() => {

await instance.approve(accounts[188], 32225, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[188], 1000, {from: accounts[188]});

await instance.batchTransfer([accounts[43],accounts[76],accounts[69],accounts[15],accounts[67],accounts[54]],1450,{from:accounts[0]});

result = await instance.transfer(accounts[3],733,{from:accounts[3]});
});
it('test 2',async() => {
result = await instance.transfer(accounts[0],514,{from:accounts[0]});
await instance.batchTransfer([accounts[21],accounts[21],accounts[32],accounts[93],accounts[67],accounts[33],accounts[83],accounts[17],accounts[89]],7514,{from:accounts[0]});


await instance.approve(accounts[189], 29760, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[189], 1000, {from: accounts[189]});

});
it('test 3',async() => {

await instance.approve(accounts[181], 32528, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[181], 1000, {from: accounts[181]});

await instance.batchTransfer([accounts[5],accounts[89],accounts[84],accounts[76],accounts[90],accounts[5],accounts[82],accounts[55]],7612,{from:accounts[0]});

result = await instance.transfer(accounts[4],612,{from:accounts[4]});
});
it('test 4',async() => {
result = await instance.transfer(accounts[1],280,{from:accounts[2]});

await instance.approve(accounts[178], 35088, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[178], 1000, {from: accounts[178]});

await instance.batchTransfer([accounts[47]],4323,{from:accounts[0]});

});
it('test 5',async() => {
await instance.batchTransfer([accounts[53],accounts[28],accounts[1],accounts[70],accounts[84],accounts[58],accounts[45]],2831,{from:accounts[0]});

result = await instance.transfer(accounts[5],269,{from:accounts[1]});

await instance.approve(accounts[188], 23633, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[188], 1000, {from: accounts[188]});

});
it('test 6',async() => {
await instance.batchTransfer([accounts[76],accounts[53],accounts[38],accounts[15],accounts[81],accounts[2],accounts[37],accounts[91],accounts[15],accounts[67]],6900,{from:accounts[0]});

result = await instance.transfer(accounts[4],641,{from:accounts[5]});

await instance.approve(accounts[158], 38583, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[158], 1000, {from: accounts[158]});

});
it('test 7',async() => {
result = await instance.transfer(accounts[0],661,{from:accounts[4]});
await instance.batchTransfer([accounts[70],accounts[9],accounts[9]],4696,{from:accounts[0]});


await instance.approve(accounts[129], 22365, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[129], 1000, {from: accounts[129]});

});
it('test 8',async() => {

await instance.approve(accounts[52], 20831, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[52], 1000, {from: accounts[52]});

await instance.batchTransfer([accounts[56],accounts[50],accounts[52],accounts[70],accounts[61],accounts[49],accounts[2],accounts[38],accounts[35],accounts[81]],4926,{from:accounts[0]});

result = await instance.transfer(accounts[1],445,{from:accounts[2]});
});
it('test 9',async() => {
result = await instance.transfer(accounts[2],974,{from:accounts[2]});
await instance.batchTransfer([accounts[46],accounts[80],accounts[2],accounts[100],accounts[31]],8182,{from:accounts[0]});


await instance.approve(accounts[119], 31963, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[119], 1000, {from: accounts[119]});

});
it('test 10',async() => {

await instance.approve(accounts[79], 34990, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[79], 1000, {from: accounts[79]});

await instance.batchTransfer([accounts[11],accounts[4],accounts[93],accounts[25],accounts[39],accounts[66],accounts[13],accounts[26],accounts[20],accounts[51]],8518,{from:accounts[0]});

result = await instance.transfer(accounts[4],224,{from:accounts[0]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 11',async() => {
await instance.batchTransfer([accounts[59],accounts[62],accounts[93],accounts[60],accounts[7],accounts[79],accounts[93]],6632,{from:accounts[0]});


await instance.approve(accounts[162], 22231, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[162], 1000, {from: accounts[162]});

result = await instance.transfer(accounts[5],268,{from:accounts[3]});
});
it('test 12',async() => {
result = await instance.transfer(accounts[1],967,{from:accounts[5]});

await instance.approve(accounts[2], 26834, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[2], 1000, {from: accounts[2]});

await instance.batchTransfer([accounts[47]],1151,{from:accounts[0]});

});
it('test 13',async() => {
result = await instance.transfer(accounts[4],900,{from:accounts[4]});
await instance.batchTransfer([accounts[26],accounts[18],accounts[36],accounts[43],accounts[70]],8610,{from:accounts[0]});


await instance.approve(accounts[87], 30432, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[87], 1000, {from: accounts[87]});

});
it('test 14',async() => {
await instance.batchTransfer([accounts[79],accounts[85],accounts[15]],4563,{from:accounts[0]});


await instance.approve(accounts[165], 28644, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[165], 1000, {from: accounts[165]});

result = await instance.transfer(accounts[0],240,{from:accounts[5]});
});
it('test 15',async() => {
result = await instance.transfer(accounts[4],696,{from:accounts[0]});
await instance.batchTransfer([accounts[5],accounts[43],accounts[8],accounts[10],accounts[24],accounts[23],accounts[94],accounts[84],accounts[36]],4697,{from:accounts[0]});


await instance.approve(accounts[194], 29141, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[194], 1000, {from: accounts[194]});

});
it('test 16',async() => {

await instance.approve(accounts[113], 27560, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[113], 1000, {from: accounts[113]});

result = await instance.transfer(accounts[4],984,{from:accounts[1]});
await instance.batchTransfer([accounts[50],accounts[56],accounts[90]],2358,{from:accounts[0]});

});
it('test 17',async() => {

await instance.approve(accounts[69], 37785, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[69], 1000, {from: accounts[69]});

result = await instance.transfer(accounts[0],907,{from:accounts[4]});
await instance.batchTransfer([accounts[98]],5332,{from:accounts[0]});

});
it('test 18',async() => {
await instance.batchTransfer([accounts[58]],7961,{from:accounts[0]});

result = await instance.transfer(accounts[2],704,{from:accounts[3]});

await instance.approve(accounts[123], 27427, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[123], 1000, {from: accounts[123]});

});
it('test 19',async() => {
await instance.batchTransfer([accounts[53],accounts[96],accounts[1],accounts[24],accounts[18],accounts[88]],3648,{from:accounts[0]});

result = await instance.transfer(accounts[3],962,{from:accounts[3]});

await instance.approve(accounts[55], 34985, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[55], 1000, {from: accounts[55]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[2],860,{from:accounts[0]});

await instance.approve(accounts[59], 32007, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[59], 1000, {from: accounts[59]});

await instance.batchTransfer([accounts[34],accounts[53]],2767,{from:accounts[0]});

});
it('test 21',async() => {
result = await instance.transfer(accounts[1],410,{from:accounts[4]});
await instance.batchTransfer([accounts[44],accounts[41],accounts[39],accounts[41]],3583,{from:accounts[0]});


await instance.approve(accounts[6], 23249, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[6], 1000, {from: accounts[6]});

});
it('test 22',async() => {
result = await instance.transfer(accounts[2],230,{from:accounts[4]});

await instance.approve(accounts[18], 22603, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[18], 1000, {from: accounts[18]});

await instance.batchTransfer([accounts[97],accounts[44],accounts[32]],9178,{from:accounts[0]});

});
it('test 23',async() => {
await instance.batchTransfer([accounts[81],accounts[79],accounts[37],accounts[37],accounts[67],accounts[76],accounts[3],accounts[27],accounts[53]],7898,{from:accounts[0]});

result = await instance.transfer(accounts[2],276,{from:accounts[0]});

await instance.approve(accounts[55], 32524, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[55], 1000, {from: accounts[55]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 24',async() => {
await instance.batchTransfer([accounts[51],accounts[39]],8572,{from:accounts[0]});


await instance.approve(accounts[141], 25963, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[141], 1000, {from: accounts[141]});

result = await instance.transfer(accounts[1],661,{from:accounts[5]});
});
it('test 25',async() => {
result = await instance.transfer(accounts[1],432,{from:accounts[2]});
await instance.batchTransfer([accounts[23],accounts[23],accounts[81],accounts[59],accounts[85],accounts[83],accounts[89]],6623,{from:accounts[0]});


await instance.approve(accounts[7], 30275, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[7], 1000, {from: accounts[7]});

});
it('test 26',async() => {

await instance.approve(accounts[181], 32892, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[181], 1000, {from: accounts[181]});

await instance.batchTransfer([accounts[61],accounts[42],accounts[27],accounts[42],accounts[97],accounts[36],accounts[83],accounts[51]],5045,{from:accounts[0]});

result = await instance.transfer(accounts[1],326,{from:accounts[4]});
});
it('test 27',async() => {
result = await instance.transfer(accounts[4],329,{from:accounts[4]});
await instance.batchTransfer([accounts[93]],6729,{from:accounts[0]});


await instance.approve(accounts[155], 38655, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[155], 1000, {from: accounts[155]});

});
it('test 28',async() => {

await instance.approve(accounts[172], 26214, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[172], 1000, {from: accounts[172]});

result = await instance.transfer(accounts[5],675,{from:accounts[1]});
await instance.batchTransfer([accounts[58]],6491,{from:accounts[0]});

});
it('test 29',async() => {

await instance.approve(accounts[191], 37713, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[191], 1000, {from: accounts[191]});

await instance.batchTransfer([accounts[52],accounts[23],accounts[90]],9163,{from:accounts[0]});

result = await instance.transfer(accounts[0],734,{from:accounts[3]});
});
});
