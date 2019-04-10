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
await instance.batchTransfer([accounts[82],accounts[69],accounts[39],accounts[29]],1786,{from:accounts[0]});

result = await instance.transfer(accounts[4],217,{from:accounts[1]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[122], 34973, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[122], 1000, {from: accounts[122]});

});
it('test 1',async() => {
result = await instance.transfer(accounts[3],914,{from:accounts[2]});

await instance.approve(accounts[180], 26214, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[180], 1000, {from: accounts[180]});

await instance.batchTransfer([accounts[51]],1869,{from:accounts[0]});

});
it('test 2',async() => {

await instance.approve(accounts[55], 33396, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[55], 1000, {from: accounts[55]});

await instance.batchTransfer([accounts[38],accounts[95],accounts[51],accounts[39]],4838,{from:accounts[0]});

result = await instance.transfer(accounts[1],272,{from:accounts[2]});
});
it('test 3',async() => {

await instance.approve(accounts[148], 24060, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[148], 1000, {from: accounts[148]});

await instance.batchTransfer([accounts[21],accounts[5],accounts[60],accounts[40]],5825,{from:accounts[0]});

result = await instance.transfer(accounts[2],290,{from:accounts[3]});
});
it('test 4',async() => {
await instance.batchTransfer([accounts[40],accounts[9],accounts[68],accounts[39],accounts[40],accounts[48]],3019,{from:accounts[0]});

result = await instance.transfer(accounts[1],504,{from:accounts[2]});

await instance.approve(accounts[11], 20060, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[11], 1000, {from: accounts[11]});

});
it('test 5',async() => {

await instance.approve(accounts[5], 21049, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[5], 1000, {from: accounts[5]});

await instance.batchTransfer([accounts[91]],6743,{from:accounts[0]});

result = await instance.transfer(accounts[5],844,{from:accounts[3]});
});
it('test 6',async() => {
result = await instance.transfer(accounts[5],719,{from:accounts[3]});

await instance.approve(accounts[17], 34116, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[17], 1000, {from: accounts[17]});

await instance.batchTransfer([accounts[32],accounts[60],accounts[88],accounts[35],accounts[74],accounts[54],accounts[40]],8011,{from:accounts[0]});

});
it('test 7',async() => {

await instance.approve(accounts[144], 27041, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[144], 1000, {from: accounts[144]});

result = await instance.transfer(accounts[3],442,{from:accounts[2]});
await instance.batchTransfer([accounts[79],accounts[69],accounts[59],accounts[44],accounts[64],accounts[100],accounts[73],accounts[47]],4558,{from:accounts[0]});

});
it('test 8',async() => {
result = await instance.transfer(accounts[1],728,{from:accounts[0]});
await instance.batchTransfer([accounts[10],accounts[84],accounts[9],accounts[78],accounts[23],accounts[9],accounts[45],accounts[79]],9484,{from:accounts[0]});


await instance.approve(accounts[185], 22487, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[185], 1000, {from: accounts[185]});

});
it('test 9',async() => {

await instance.approve(accounts[53], 23443, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[53], 1000, {from: accounts[53]});

await instance.batchTransfer([accounts[88],accounts[40]],2799,{from:accounts[0]});

result = await instance.transfer(accounts[5],446,{from:accounts[5]});
});
it('test 10',async() => {
result = await instance.transfer(accounts[3],971,{from:accounts[2]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[29],accounts[30],accounts[57],accounts[56],accounts[91],accounts[12],accounts[36],accounts[78]],9626,{from:accounts[0]});


await instance.approve(accounts[31], 39144, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[31], 1000, {from: accounts[31]});

});
it('test 11',async() => {

await instance.approve(accounts[144], 23934, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[144], 1000, {from: accounts[144]});

await instance.batchTransfer([accounts[24],accounts[43],accounts[5],accounts[10],accounts[71],accounts[61],accounts[40],accounts[78],accounts[2]],5558,{from:accounts[0]});

result = await instance.transfer(accounts[2],787,{from:accounts[1]});
});
it('test 12',async() => {
await instance.batchTransfer([accounts[86],accounts[32]],2730,{from:accounts[0]});

result = await instance.transfer(accounts[5],853,{from:accounts[1]});

await instance.approve(accounts[31], 20272, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[31], 1000, {from: accounts[31]});

});
it('test 13',async() => {
result = await instance.transfer(accounts[4],716,{from:accounts[0]});

await instance.approve(accounts[170], 27164, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[170], 1000, {from: accounts[170]});

await instance.batchTransfer([accounts[8],accounts[94],accounts[39],accounts[72],accounts[23],accounts[63],accounts[4],accounts[81],accounts[19],accounts[80]],9534,{from:accounts[0]});

});
it('test 14',async() => {
result = await instance.transfer(accounts[5],464,{from:accounts[0]});
await instance.batchTransfer([accounts[58],accounts[23],accounts[54],accounts[89]],5089,{from:accounts[0]});


await instance.approve(accounts[158], 37347, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[158], 1000, {from: accounts[158]});

});
it('test 15',async() => {

await instance.approve(accounts[101], 35091, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[101], 1000, {from: accounts[101]});

result = await instance.transfer(accounts[1],214,{from:accounts[2]});
await instance.batchTransfer([accounts[68],accounts[13],accounts[94],accounts[44]],9729,{from:accounts[0]});

});
it('test 16',async() => {

await instance.approve(accounts[190], 33573, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[190], 1000, {from: accounts[190]});

await instance.batchTransfer([accounts[61],accounts[13],accounts[4],accounts[48],accounts[13],accounts[80],accounts[42],accounts[57],accounts[18],accounts[54]],8918,{from:accounts[0]});

result = await instance.transfer(accounts[2],526,{from:accounts[3]});
});
it('test 17',async() => {
await instance.batchTransfer([accounts[24],accounts[95],accounts[99],accounts[36],accounts[45],accounts[60],accounts[88],accounts[100],accounts[4]],1463,{from:accounts[0]});


await instance.approve(accounts[16], 34917, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[16], 1000, {from: accounts[16]});

result = await instance.transfer(accounts[4],460,{from:accounts[2]});
});
it('test 18',async() => {
await instance.batchTransfer([accounts[62],accounts[78],accounts[58],accounts[30],accounts[32]],7289,{from:accounts[0]});

result = await instance.transfer(accounts[1],457,{from:accounts[3]});

await instance.approve(accounts[63], 34498, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[63], 1000, {from: accounts[63]});

});
it('test 19',async() => {
await instance.batchTransfer([accounts[99]],3636,{from:accounts[0]});


await instance.approve(accounts[96], 26031, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[96], 1000, {from: accounts[96]});

result = await instance.transfer(accounts[1],984,{from:accounts[1]});
});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});

await instance.approve(accounts[136], 29161, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[136], 1000, {from: accounts[136]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[2],693,{from:accounts[4]});
await instance.batchTransfer([accounts[82],accounts[99],accounts[61]],1438,{from:accounts[0]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 21',async() => {

await instance.approve(accounts[114], 20299, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[114], 1000, {from: accounts[114]});

await instance.batchTransfer([accounts[31],accounts[77],accounts[46],accounts[1],accounts[99],accounts[73],accounts[54]],4092,{from:accounts[0]});

result = await instance.transfer(accounts[5],807,{from:accounts[0]});
});
it('test 22',async() => {
result = await instance.transfer(accounts[0],347,{from:accounts[2]});

await instance.approve(accounts[21], 28186, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[21], 1000, {from: accounts[21]});

await instance.batchTransfer([accounts[14],accounts[36],accounts[79],accounts[64],accounts[83],accounts[45],accounts[79],accounts[13],accounts[58],accounts[15]],1825,{from:accounts[0]});

});
it('test 23',async() => {
await instance.batchTransfer([accounts[72],accounts[69],accounts[45],accounts[38],accounts[67]],7788,{from:accounts[0]});

result = await instance.transfer(accounts[5],449,{from:accounts[4]});

await instance.approve(accounts[151], 21653, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[151], 1000, {from: accounts[151]});

});
it('test 24',async() => {

await instance.approve(accounts[142], 21324, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[142], 1000, {from: accounts[142]});

result = await instance.transfer(accounts[5],208,{from:accounts[3]});
await instance.batchTransfer([accounts[15],accounts[4],accounts[81],accounts[86],accounts[19]],4316,{from:accounts[0]});

});
it('test 25',async() => {

await instance.approve(accounts[117], 25966, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[117], 1000, {from: accounts[117]});

await instance.batchTransfer([accounts[45],accounts[16],accounts[35],accounts[96],accounts[9],accounts[85],accounts[35],accounts[4],accounts[43],accounts[71]],1993,{from:accounts[0]});

result = await instance.transfer(accounts[2],933,{from:accounts[3]});
});
it('test 26',async() => {

await instance.approve(accounts[50], 26004, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[50], 1000, {from: accounts[50]});

result = await instance.transfer(accounts[5],623,{from:accounts[4]});
await instance.batchTransfer([accounts[15],accounts[84],accounts[60],accounts[93],accounts[80],accounts[43],accounts[40],accounts[41],accounts[55]],7747,{from:accounts[0]});

});
it('test 27',async() => {

await instance.approve(accounts[27], 38960, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[27], 1000, {from: accounts[27]});

result = await instance.transfer(accounts[4],693,{from:accounts[2]});
await instance.batchTransfer([accounts[47],accounts[23],accounts[46],accounts[23],accounts[30],accounts[57],accounts[6],accounts[2]],3967,{from:accounts[0]});

});
it('test 28',async() => {
await instance.batchTransfer([accounts[10],accounts[93],accounts[62],accounts[26],accounts[18],accounts[56]],3038,{from:accounts[0]});


await instance.approve(accounts[9], 25585, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[9], 1000, {from: accounts[9]});

result = await instance.transfer(accounts[1],767,{from:accounts[2]});
});
it('test 29',async() => {

await instance.approve(accounts[53], 38397, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[53], 1000, {from: accounts[53]});

result = await instance.transfer(accounts[2],221,{from:accounts[1]});
await instance.batchTransfer([accounts[94]],1859,{from:accounts[0]});

});
});
