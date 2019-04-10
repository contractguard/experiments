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


await instance.approve(accounts[39], 22036, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[39], 1000, {from: accounts[39]});

result = await instance.transfer(accounts[1],531,{from:accounts[1]});
await instance.batchTransfer([accounts[100],accounts[21],accounts[75],accounts[29],accounts[74],accounts[51],accounts[39],accounts[100],accounts[28],accounts[6]],9795,{from:accounts[0]});

});
it('test 1',async() => {
result = await instance.transfer(accounts[1],236,{from:accounts[5]});
await instance.batchTransfer([accounts[67],accounts[43],accounts[67],accounts[22],accounts[47],accounts[22]],1195,{from:accounts[0]});


await instance.approve(accounts[34], 38425, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[34], 1000, {from: accounts[34]});

});
it('test 2',async() => {

await instance.approve(accounts[167], 25646, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[167], 1000, {from: accounts[167]});

result = await instance.transfer(accounts[1],564,{from:accounts[0]});
await instance.batchTransfer([accounts[87],accounts[18],accounts[19],accounts[82],accounts[45]],9189,{from:accounts[0]});

});
it('test 3',async() => {
await instance.batchTransfer([accounts[83]],3225,{from:accounts[0]});

result = await instance.transfer(accounts[4],693,{from:accounts[3]});

await instance.approve(accounts[170], 27839, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[170], 1000, {from: accounts[170]});

});
it('test 4',async() => {
await instance.batchTransfer([accounts[34],accounts[88],accounts[16],accounts[60],accounts[84],accounts[99],accounts[52],accounts[52],accounts[90]],4796,{from:accounts[0]});


await instance.approve(accounts[179], 28141, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[179], 1000, {from: accounts[179]});

result = await instance.transfer(accounts[2],295,{from:accounts[3]});
});
it('test 5',async() => {
result = await instance.transfer(accounts[0],330,{from:accounts[1]});
await instance.batchTransfer([accounts[74],accounts[52],accounts[66],accounts[60],accounts[54],accounts[33],accounts[93],accounts[11],accounts[60]],3960,{from:accounts[0]});


await instance.approve(accounts[117], 39591, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[117], 1000, {from: accounts[117]});

});
it('test 6',async() => {
await instance.batchTransfer([accounts[33],accounts[78],accounts[8],accounts[92],accounts[76]],5484,{from:accounts[0]});


await instance.approve(accounts[3], 25850, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[3], 1000, {from: accounts[3]});

result = await instance.transfer(accounts[5],960,{from:accounts[1]});
});
it('test 7',async() => {

await instance.approve(accounts[151], 38130, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[151], 1000, {from: accounts[151]});

result = await instance.transfer(accounts[2],349,{from:accounts[4]});
await instance.batchTransfer([accounts[33],accounts[87],accounts[53],accounts[1]],7522,{from:accounts[0]});

});
it('test 8',async() => {

await instance.approve(accounts[161], 26130, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[161], 1000, {from: accounts[161]});

result = await instance.transfer(accounts[2],527,{from:accounts[2]});
await instance.batchTransfer([accounts[78]],6652,{from:accounts[0]});

});
it('test 9',async() => {
result = await instance.transfer(accounts[3],502,{from:accounts[0]});
await instance.batchTransfer([accounts[23],accounts[37],accounts[78],accounts[79],accounts[28],accounts[80],accounts[5],accounts[19],accounts[54],accounts[55]],3011,{from:accounts[0]});


await instance.approve(accounts[160], 37057, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[160], 1000, {from: accounts[160]});

});
it('test 10',async() => {
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[65], 28238, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[65], 1000, {from: accounts[65]});

await instance.batchTransfer([accounts[65],accounts[42],accounts[25],accounts[43]],2007,{from:accounts[0]});

result = await instance.transfer(accounts[5],270,{from:accounts[4]});
});
it('test 11',async() => {
result = await instance.transfer(accounts[3],314,{from:accounts[1]});

await instance.approve(accounts[96], 31203, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[96], 1000, {from: accounts[96]});

await instance.batchTransfer([accounts[34],accounts[38],accounts[17],accounts[18],accounts[84],accounts[53],accounts[72]],6274,{from:accounts[0]});

});
it('test 12',async() => {
await instance.batchTransfer([accounts[1],accounts[58],accounts[90],accounts[44],accounts[72],accounts[62],accounts[40],accounts[3]],1865,{from:accounts[0]});


await instance.approve(accounts[152], 28387, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[152], 1000, {from: accounts[152]});

result = await instance.transfer(accounts[2],381,{from:accounts[2]});
});
it('test 13',async() => {

await instance.approve(accounts[91], 27961, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[91], 1000, {from: accounts[91]});

result = await instance.transfer(accounts[3],517,{from:accounts[2]});
await instance.batchTransfer([accounts[1],accounts[26],accounts[72],accounts[58],accounts[90],accounts[84],accounts[40],accounts[23],accounts[94],accounts[51]],5986,{from:accounts[0]});

});
it('test 14',async() => {
result = await instance.transfer(accounts[4],562,{from:accounts[4]});

await instance.approve(accounts[62], 21628, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[62], 1000, {from: accounts[62]});

await instance.batchTransfer([accounts[96],accounts[19],accounts[19],accounts[44],accounts[22],accounts[32],accounts[2]],3731,{from:accounts[0]});

});
it('test 15',async() => {
await instance.batchTransfer([accounts[12]],8200,{from:accounts[0]});


await instance.approve(accounts[81], 34940, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[81], 1000, {from: accounts[81]});

result = await instance.transfer(accounts[0],890,{from:accounts[1]});
});
it('test 16',async() => {
result = await instance.transfer(accounts[5],530,{from:accounts[4]});
await instance.batchTransfer([accounts[67],accounts[47],accounts[25],accounts[49],accounts[91],accounts[19],accounts[4],accounts[2]],4347,{from:accounts[0]});


await instance.approve(accounts[168], 37388, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[168], 1000, {from: accounts[168]});

});
it('test 17',async() => {
result = await instance.transfer(accounts[2],503,{from:accounts[5]});

await instance.approve(accounts[72], 22683, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[72], 1000, {from: accounts[72]});

await instance.batchTransfer([accounts[74],accounts[12],accounts[91],accounts[14],accounts[1],accounts[29],accounts[92],accounts[42],accounts[8]],7280,{from:accounts[0]});

});
it('test 18',async() => {
await instance.batchTransfer([accounts[46],accounts[27],accounts[79],accounts[63],accounts[84],accounts[14]],4869,{from:accounts[0]});

result = await instance.transfer(accounts[5],439,{from:accounts[1]});

await instance.approve(accounts[70], 27665, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[70], 1000, {from: accounts[70]});

});
it('test 19',async() => {
result = await instance.transfer(accounts[3],240,{from:accounts[4]});
await instance.batchTransfer([accounts[51],accounts[54],accounts[10],accounts[19],accounts[8]],9536,{from:accounts[0]});


await instance.approve(accounts[93], 33286, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[93], 1000, {from: accounts[93]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
result = await instance.transfer(accounts[2],314,{from:accounts[0]});

await instance.approve(accounts[32], 26819, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[32], 1000, {from: accounts[32]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[87],accounts[88],accounts[47],accounts[81],accounts[89],accounts[25],accounts[72],accounts[29],accounts[71]],2315,{from:accounts[0]});

});
it('test 21',async() => {
result = await instance.transfer(accounts[0],625,{from:accounts[2]});

await instance.approve(accounts[149], 27001, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[149], 1000, {from: accounts[149]});

await instance.batchTransfer([accounts[6],accounts[73],accounts[42],accounts[21],accounts[95],accounts[29]],2743,{from:accounts[0]});

});
it('test 22',async() => {
result = await instance.transfer(accounts[5],327,{from:accounts[0]});
await instance.batchTransfer([accounts[94],accounts[37],accounts[26],accounts[9],accounts[84],accounts[1],accounts[21],accounts[22],accounts[17]],2779,{from:accounts[0]});


await instance.approve(accounts[152], 39186, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[152], 1000, {from: accounts[152]});

});
it('test 23',async() => {

await instance.approve(accounts[101], 27323, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[101], 1000, {from: accounts[101]});

result = await instance.transfer(accounts[2],790,{from:accounts[3]});
await instance.batchTransfer([accounts[79],accounts[78],accounts[51],accounts[73],accounts[71],accounts[66],accounts[64],accounts[52],accounts[50]],9566,{from:accounts[0]});

});
it('test 24',async() => {

await instance.approve(accounts[157], 36115, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[157], 1000, {from: accounts[157]});

await instance.batchTransfer([accounts[90],accounts[16],accounts[11],accounts[44],accounts[51],accounts[92],accounts[9],accounts[2],accounts[58],accounts[98]],5688,{from:accounts[0]});

result = await instance.transfer(accounts[0],567,{from:accounts[3]});
});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 25',async() => {
await instance.batchTransfer([accounts[48],accounts[62],accounts[11],accounts[2],accounts[33],accounts[72],accounts[73],accounts[46]],1919,{from:accounts[0]});


await instance.approve(accounts[19], 34249, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[19], 1000, {from: accounts[19]});

result = await instance.transfer(accounts[0],646,{from:accounts[5]});
});
it('test 26',async() => {

await instance.approve(accounts[118], 31787, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[118], 1000, {from: accounts[118]});

await instance.batchTransfer([accounts[92],accounts[96],accounts[91],accounts[92],accounts[69],accounts[62]],4848,{from:accounts[0]});

result = await instance.transfer(accounts[0],299,{from:accounts[5]});
});
it('test 27',async() => {
await instance.batchTransfer([accounts[44],accounts[36]],5102,{from:accounts[0]});


await instance.approve(accounts[42], 39826, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[42], 1000, {from: accounts[42]});

result = await instance.transfer(accounts[5],274,{from:accounts[5]});
});
it('test 28',async() => {
result = await instance.transfer(accounts[2],948,{from:accounts[0]});

await instance.approve(accounts[84], 22334, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[84], 1000, {from: accounts[84]});

await instance.batchTransfer([accounts[53],accounts[88],accounts[71],accounts[39],accounts[92],accounts[67],accounts[10],accounts[47]],5182,{from:accounts[0]});

});
it('test 29',async() => {

await instance.approve(accounts[173], 25722, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[173], 1000, {from: accounts[173]});

await instance.batchTransfer([accounts[88],accounts[38],accounts[48],accounts[47],accounts[9],accounts[44],accounts[91],accounts[37],accounts[89],accounts[53]],1402,{from:accounts[0]});

result = await instance.transfer(accounts[5],967,{from:accounts[3]});
});
});
