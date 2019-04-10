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

result = await instance.transfer(accounts[0],287,{from:accounts[3]});
await instance.batchTransfer([accounts[87],accounts[90],accounts[81]],4668,{from:accounts[0]});


await instance.approve(accounts[197], 21358, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[197], 1000, {from: accounts[197]});

});
it('test 1',async() => {

await instance.approve(accounts[101], 31230, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[101], 1000, {from: accounts[101]});

result = await instance.transfer(accounts[0],267,{from:accounts[0]});
await instance.batchTransfer([accounts[83],accounts[7],accounts[27],accounts[52],accounts[95],accounts[81],accounts[51],accounts[43]],2969,{from:accounts[0]});

});
it('test 2',async() => {
await instance.batchTransfer([accounts[45],accounts[73],accounts[35],accounts[18],accounts[64],accounts[90],accounts[47],accounts[57],accounts[81]],5661,{from:accounts[0]});

result = await instance.transfer(accounts[1],208,{from:accounts[2]});

await instance.approve(accounts[156], 36393, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[156], 1000, {from: accounts[156]});

});
it('test 3',async() => {
result = await instance.transfer(accounts[4],548,{from:accounts[1]});
await instance.batchTransfer([accounts[89],accounts[49],accounts[57],accounts[9],accounts[28],accounts[35],accounts[29]],9548,{from:accounts[0]});


await instance.approve(accounts[180], 28288, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[180], 1000, {from: accounts[180]});

});
it('test 4',async() => {

await instance.approve(accounts[131], 30396, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[131], 1000, {from: accounts[131]});

result = await instance.transfer(accounts[0],942,{from:accounts[4]});
await instance.batchTransfer([accounts[88],accounts[97],accounts[59],accounts[1],accounts[98]],5113,{from:accounts[0]});

});
it('test 5',async() => {
result = await instance.transfer(accounts[3],904,{from:accounts[3]});

await instance.approve(accounts[121], 35107, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[121], 1000, {from: accounts[121]});

await instance.batchTransfer([accounts[66]],8370,{from:accounts[0]});

});
it('test 6',async() => {
result = await instance.transfer(accounts[1],253,{from:accounts[3]});
await instance.batchTransfer([accounts[91],accounts[85]],7021,{from:accounts[0]});


await instance.approve(accounts[70], 30288, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[70], 1000, {from: accounts[70]});

});
it('test 7',async() => {

await instance.approve(accounts[158], 28062, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[158], 1000, {from: accounts[158]});

result = await instance.transfer(accounts[1],353,{from:accounts[1]});
await instance.batchTransfer([accounts[42],accounts[92],accounts[53],accounts[65],accounts[2]],4696,{from:accounts[0]});

});
it('test 8',async() => {
await instance.batchTransfer([accounts[19]],6247,{from:accounts[0]});


await instance.approve(accounts[169], 39132, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[169], 1000, {from: accounts[169]});

result = await instance.transfer(accounts[5],604,{from:accounts[3]});
});
it('test 9',async() => {
await instance.batchTransfer([accounts[94]],2914,{from:accounts[0]});


await instance.approve(accounts[155], 35962, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[155], 1000, {from: accounts[155]});

result = await instance.transfer(accounts[0],802,{from:accounts[1]});
});
it('test 10',async() => {

await instance.approve(accounts[170], 29128, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[170], 1000, {from: accounts[170]});

await instance.batchTransfer([accounts[18],accounts[51],accounts[19],accounts[20],accounts[84]],3124,{from:accounts[0]});

result = await instance.transfer(accounts[1],972,{from:accounts[5]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 11',async() => {
await instance.batchTransfer([accounts[64],accounts[44],accounts[92],accounts[33],accounts[5],accounts[98],accounts[53],accounts[1],accounts[100],accounts[55]],8569,{from:accounts[0]});


await instance.approve(accounts[185], 34625, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[185], 1000, {from: accounts[185]});

result = await instance.transfer(accounts[1],676,{from:accounts[3]});
});
it('test 12',async() => {
await instance.batchTransfer([accounts[26],accounts[90],accounts[15],accounts[14],accounts[25],accounts[17],accounts[71]],4569,{from:accounts[0]});

result = await instance.transfer(accounts[3],284,{from:accounts[5]});

await instance.approve(accounts[44], 27427, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[44], 1000, {from: accounts[44]});

});
it('test 13',async() => {
await instance.batchTransfer([accounts[1],accounts[38],accounts[52],accounts[29],accounts[26],accounts[9],accounts[92]],3654,{from:accounts[0]});

result = await instance.transfer(accounts[4],834,{from:accounts[4]});

await instance.approve(accounts[72], 30603, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[72], 1000, {from: accounts[72]});

});
it('test 14',async() => {
result = await instance.transfer(accounts[2],510,{from:accounts[0]});

await instance.approve(accounts[126], 32218, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[126], 1000, {from: accounts[126]});

await instance.batchTransfer([accounts[31],accounts[77],accounts[66],accounts[91]],5474,{from:accounts[0]});

});
it('test 15',async() => {
await instance.batchTransfer([accounts[28],accounts[44],accounts[53],accounts[47],accounts[46],accounts[68],accounts[56]],8078,{from:accounts[0]});


await instance.approve(accounts[199], 30951, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[199], 1000, {from: accounts[199]});

result = await instance.transfer(accounts[3],378,{from:accounts[3]});
});
it('test 16',async() => {
await instance.batchTransfer([accounts[12],accounts[64],accounts[55],accounts[82],accounts[63],accounts[48],accounts[97],accounts[4],accounts[16],accounts[96]],5731,{from:accounts[0]});


await instance.approve(accounts[32], 33207, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[32], 1000, {from: accounts[32]});

result = await instance.transfer(accounts[5],619,{from:accounts[3]});
});
it('test 17',async() => {
result = await instance.transfer(accounts[0],442,{from:accounts[0]});

await instance.approve(accounts[126], 32280, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[126], 1000, {from: accounts[126]});

await instance.batchTransfer([accounts[7],accounts[86],accounts[36],accounts[50],accounts[63],accounts[8],accounts[62],accounts[69]],2533,{from:accounts[0]});

});
it('test 18',async() => {

await instance.approve(accounts[33], 28740, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[33], 1000, {from: accounts[33]});

result = await instance.transfer(accounts[1],910,{from:accounts[3]});
await instance.batchTransfer([accounts[42],accounts[13],accounts[55],accounts[53],accounts[77],accounts[22],accounts[81],accounts[29]],4021,{from:accounts[0]});

});
it('test 19',async() => {

await instance.approve(accounts[33], 37675, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[33], 1000, {from: accounts[33]});

result = await instance.transfer(accounts[2],226,{from:accounts[0]});
await instance.batchTransfer([accounts[26],accounts[99],accounts[76],accounts[26]],4792,{from:accounts[0]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});

await instance.approve(accounts[112], 26018, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[112], 1000, {from: accounts[112]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[24],accounts[49]],2798,{from:accounts[0]});

result = await instance.transfer(accounts[2],890,{from:accounts[0]});
});
it('test 21',async() => {
await instance.batchTransfer([accounts[24],accounts[3],accounts[68],accounts[94],accounts[13],accounts[13]],9161,{from:accounts[0]});


await instance.approve(accounts[59], 31897, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[59], 1000, {from: accounts[59]});

result = await instance.transfer(accounts[5],342,{from:accounts[2]});
});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 22',async() => {

await instance.approve(accounts[73], 31858, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[73], 1000, {from: accounts[73]});

result = await instance.transfer(accounts[3],955,{from:accounts[0]});
await instance.batchTransfer([accounts[30],accounts[15],accounts[13],accounts[9]],3870,{from:accounts[0]});

});
it('test 23',async() => {
await instance.batchTransfer([accounts[54],accounts[31]],9788,{from:accounts[0]});

result = await instance.transfer(accounts[2],760,{from:accounts[2]});

await instance.approve(accounts[33], 33351, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[33], 1000, {from: accounts[33]});

});
it('test 24',async() => {

await instance.approve(accounts[53], 37426, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[53], 1000, {from: accounts[53]});

await instance.batchTransfer([accounts[52],accounts[14],accounts[74],accounts[15],accounts[18],accounts[20],accounts[100]],8844,{from:accounts[0]});

result = await instance.transfer(accounts[3],848,{from:accounts[3]});
});
it('test 25',async() => {
await instance.batchTransfer([accounts[60],accounts[22],accounts[48],accounts[38],accounts[9],accounts[42],accounts[71],accounts[52]],4104,{from:accounts[0]});

result = await instance.transfer(accounts[4],584,{from:accounts[5]});

await instance.approve(accounts[9], 39354, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[9], 1000, {from: accounts[9]});

});
it('test 26',async() => {
await instance.batchTransfer([accounts[23],accounts[61],accounts[82]],9062,{from:accounts[0]});

result = await instance.transfer(accounts[4],543,{from:accounts[0]});

await instance.approve(accounts[143], 31096, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[143], 1000, {from: accounts[143]});

});
it('test 27',async() => {
result = await instance.transfer(accounts[0],290,{from:accounts[0]});
await instance.batchTransfer([accounts[2],accounts[97],accounts[26],accounts[77],accounts[22]],5988,{from:accounts[0]});


await instance.approve(accounts[54], 33531, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[54], 1000, {from: accounts[54]});

});
it('test 28',async() => {

await instance.approve(accounts[21], 26058, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[21], 1000, {from: accounts[21]});

await instance.batchTransfer([accounts[9],accounts[2],accounts[64],accounts[54],accounts[64],accounts[11],accounts[79],accounts[79],accounts[6]],4346,{from:accounts[0]});

result = await instance.transfer(accounts[3],783,{from:accounts[3]});
});
it('test 29',async() => {
await instance.batchTransfer([accounts[23],accounts[82],accounts[34],accounts[86],accounts[5],accounts[64],accounts[28],accounts[24],accounts[86],accounts[22]],2311,{from:accounts[0]});

result = await instance.transfer(accounts[2],886,{from:accounts[4]});

await instance.approve(accounts[81], 36108, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[81], 1000, {from: accounts[81]});

});
});
