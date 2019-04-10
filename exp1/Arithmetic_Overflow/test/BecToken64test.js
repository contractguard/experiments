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
result = await instance.transfer(accounts[3],404,{from:accounts[1]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[133], 34864, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[133], 1000, {from: accounts[133]});

await instance.batchTransfer([accounts[24],accounts[97]],3537,{from:accounts[0]});

});
it('test 1',async() => {
result = await instance.transfer(accounts[1],614,{from:accounts[2]});

await instance.approve(accounts[65], 23463, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[65], 1000, {from: accounts[65]});

await instance.batchTransfer([accounts[88],accounts[9],accounts[62]],4870,{from:accounts[0]});

});
it('test 2',async() => {

await instance.approve(accounts[165], 31130, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[165], 1000, {from: accounts[165]});

await instance.batchTransfer([accounts[65],accounts[88],accounts[87]],4483,{from:accounts[0]});

result = await instance.transfer(accounts[5],814,{from:accounts[5]});
});
it('test 3',async() => {
result = await instance.transfer(accounts[0],639,{from:accounts[5]});

await instance.approve(accounts[53], 31970, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[53], 1000, {from: accounts[53]});

await instance.batchTransfer([accounts[45],accounts[9],accounts[83],accounts[23],accounts[60],accounts[65],accounts[45],accounts[28],accounts[2],accounts[72]],3616,{from:accounts[0]});

});
it('test 4',async() => {

await instance.approve(accounts[187], 23270, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[187], 1000, {from: accounts[187]});

await instance.batchTransfer([accounts[10],accounts[46],accounts[94],accounts[43],accounts[33],accounts[4],accounts[98],accounts[35],accounts[100]],5247,{from:accounts[0]});

result = await instance.transfer(accounts[1],592,{from:accounts[4]});
});
it('test 5',async() => {
await instance.batchTransfer([accounts[81],accounts[66],accounts[32]],7041,{from:accounts[0]});

result = await instance.transfer(accounts[2],515,{from:accounts[0]});

await instance.approve(accounts[98], 39476, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[98], 1000, {from: accounts[98]});

});
it('test 6',async() => {

await instance.approve(accounts[81], 20957, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[81], 1000, {from: accounts[81]});

result = await instance.transfer(accounts[3],812,{from:accounts[0]});
await instance.batchTransfer([accounts[14],accounts[45],accounts[25],accounts[36],accounts[88]],9274,{from:accounts[0]});

});
it('test 7',async() => {
await instance.batchTransfer([accounts[50],accounts[92]],8284,{from:accounts[0]});


await instance.approve(accounts[124], 26778, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[124], 1000, {from: accounts[124]});

result = await instance.transfer(accounts[4],766,{from:accounts[1]});
});
it('test 8',async() => {
await instance.batchTransfer([accounts[43],accounts[85],accounts[29],accounts[1]],4494,{from:accounts[0]});


await instance.approve(accounts[38], 20136, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[38], 1000, {from: accounts[38]});

result = await instance.transfer(accounts[4],524,{from:accounts[1]});
});
it('test 9',async() => {
await instance.batchTransfer([accounts[9],accounts[19]],1287,{from:accounts[0]});


await instance.approve(accounts[12], 35665, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[12], 1000, {from: accounts[12]});

result = await instance.transfer(accounts[1],582,{from:accounts[1]});
});
it('test 10',async() => {
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[25],accounts[72],accounts[15],accounts[31],accounts[69],accounts[20],accounts[14],accounts[78],accounts[79],accounts[19]],1688,{from:accounts[0]});

result = await instance.transfer(accounts[3],830,{from:accounts[1]});

await instance.approve(accounts[36], 24645, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[36], 1000, {from: accounts[36]});

});
it('test 11',async() => {
result = await instance.transfer(accounts[3],529,{from:accounts[4]});

await instance.approve(accounts[55], 26869, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[55], 1000, {from: accounts[55]});

await instance.batchTransfer([accounts[77],accounts[48],accounts[26],accounts[71],accounts[65]],5219,{from:accounts[0]});

});
it('test 12',async() => {
result = await instance.transfer(accounts[3],560,{from:accounts[2]});

await instance.approve(accounts[172], 34763, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[172], 1000, {from: accounts[172]});

await instance.batchTransfer([accounts[49]],5124,{from:accounts[0]});

});
it('test 13',async() => {
result = await instance.transfer(accounts[4],401,{from:accounts[1]});
await instance.batchTransfer([accounts[86],accounts[31]],3670,{from:accounts[0]});


await instance.approve(accounts[154], 36486, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[154], 1000, {from: accounts[154]});

});
it('test 14',async() => {
result = await instance.transfer(accounts[0],285,{from:accounts[4]});
await instance.batchTransfer([accounts[99],accounts[38],accounts[81],accounts[88],accounts[45],accounts[92],accounts[8]],8422,{from:accounts[0]});


await instance.approve(accounts[158], 24930, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[158], 1000, {from: accounts[158]});

});
it('test 15',async() => {

await instance.approve(accounts[140], 31207, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[140], 1000, {from: accounts[140]});

await instance.batchTransfer([accounts[100]],9992,{from:accounts[0]});

result = await instance.transfer(accounts[3],364,{from:accounts[2]});
});
it('test 16',async() => {
await instance.batchTransfer([accounts[54],accounts[36]],9768,{from:accounts[0]});


await instance.approve(accounts[27], 34484, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[27], 1000, {from: accounts[27]});

result = await instance.transfer(accounts[3],532,{from:accounts[5]});
});
it('test 17',async() => {
await instance.batchTransfer([accounts[49]],5406,{from:accounts[0]});


await instance.approve(accounts[108], 33855, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[108], 1000, {from: accounts[108]});

result = await instance.transfer(accounts[4],493,{from:accounts[3]});
});
it('test 18',async() => {
await instance.batchTransfer([accounts[15],accounts[94],accounts[44],accounts[90],accounts[43],accounts[96],accounts[4],accounts[56],accounts[7],accounts[86]],4063,{from:accounts[0]});


await instance.approve(accounts[104], 32580, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[104], 1000, {from: accounts[104]});

result = await instance.transfer(accounts[0],489,{from:accounts[5]});
});
it('test 19',async() => {
result = await instance.transfer(accounts[5],885,{from:accounts[3]});

await instance.approve(accounts[136], 33790, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[136], 1000, {from: accounts[136]});

await instance.batchTransfer([accounts[83],accounts[20],accounts[76],accounts[99],accounts[74]],6881,{from:accounts[0]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});

await instance.approve(accounts[105], 22334, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[105], 1000, {from: accounts[105]});

result = await instance.transfer(accounts[1],989,{from:accounts[5]});
await instance.batchTransfer([accounts[78],accounts[40],accounts[30],accounts[76],accounts[73]],8758,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 21',async() => {
await instance.batchTransfer([accounts[16],accounts[41],accounts[49],accounts[77]],8104,{from:accounts[0]});


await instance.approve(accounts[70], 27030, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[70], 1000, {from: accounts[70]});

result = await instance.transfer(accounts[1],557,{from:accounts[1]});
});
it('test 22',async() => {
await instance.batchTransfer([accounts[64],accounts[85],accounts[11]],4477,{from:accounts[0]});


await instance.approve(accounts[29], 36431, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[29], 1000, {from: accounts[29]});

result = await instance.transfer(accounts[0],748,{from:accounts[1]});
});
it('test 23',async() => {
await instance.batchTransfer([accounts[98],accounts[90],accounts[68],accounts[26],accounts[11],accounts[7]],3567,{from:accounts[0]});

result = await instance.transfer(accounts[4],966,{from:accounts[1]});

await instance.approve(accounts[152], 26021, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[152], 1000, {from: accounts[152]});

});
it('test 24',async() => {

await instance.approve(accounts[118], 32112, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[118], 1000, {from: accounts[118]});

result = await instance.transfer(accounts[5],688,{from:accounts[5]});
await instance.batchTransfer([accounts[97],accounts[46],accounts[30],accounts[96]],8011,{from:accounts[0]});

});
it('test 25',async() => {

await instance.approve(accounts[198], 23452, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[198], 1000, {from: accounts[198]});

await instance.batchTransfer([accounts[36],accounts[2],accounts[45],accounts[21],accounts[30],accounts[31],accounts[98],accounts[28]],7137,{from:accounts[0]});

result = await instance.transfer(accounts[1],863,{from:accounts[0]});
});
it('test 26',async() => {

await instance.approve(accounts[188], 24655, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[188], 1000, {from: accounts[188]});

result = await instance.transfer(accounts[1],672,{from:accounts[4]});
await instance.batchTransfer([accounts[7],accounts[65],accounts[97],accounts[68],accounts[61],accounts[10],accounts[64],accounts[43],accounts[20]],2537,{from:accounts[0]});

});
it('test 27',async() => {

await instance.approve(accounts[54], 21968, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[54], 1000, {from: accounts[54]});

result = await instance.transfer(accounts[2],912,{from:accounts[4]});
await instance.batchTransfer([accounts[41],accounts[88]],7007,{from:accounts[0]});

});
it('test 28',async() => {
result = await instance.transfer(accounts[1],960,{from:accounts[1]});

await instance.approve(accounts[176], 37542, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[176], 1000, {from: accounts[176]});

await instance.batchTransfer([accounts[59],accounts[81],accounts[80]],8698,{from:accounts[0]});

});
it('test 29',async() => {

await instance.approve(accounts[11], 30928, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[11], 1000, {from: accounts[11]});

result = await instance.transfer(accounts[1],304,{from:accounts[3]});
await instance.batchTransfer([accounts[15],accounts[57],accounts[25],accounts[21],accounts[63],accounts[68]],3348,{from:accounts[0]});

});
});
