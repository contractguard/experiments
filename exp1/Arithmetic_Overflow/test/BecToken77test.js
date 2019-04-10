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


await instance.approve(accounts[199], 39213, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[199], 1000, {from: accounts[199]});

result = await instance.transfer(accounts[0],700,{from:accounts[3]});
await instance.batchTransfer([accounts[96],accounts[89],accounts[100],accounts[43],accounts[65],accounts[81],accounts[83],accounts[55]],4080,{from:accounts[0]});

});
it('test 1',async() => {

await instance.approve(accounts[8], 26302, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[8], 1000, {from: accounts[8]});

result = await instance.transfer(accounts[0],783,{from:accounts[2]});
await instance.batchTransfer([accounts[81],accounts[78],accounts[78],accounts[38]],9476,{from:accounts[0]});

});
it('test 2',async() => {
await instance.batchTransfer([accounts[23],accounts[35],accounts[37],accounts[97]],7078,{from:accounts[0]});


await instance.approve(accounts[112], 20650, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[112], 1000, {from: accounts[112]});

result = await instance.transfer(accounts[5],663,{from:accounts[3]});
});
it('test 3',async() => {
await instance.batchTransfer([accounts[84],accounts[96],accounts[51],accounts[49],accounts[79]],8422,{from:accounts[0]});


await instance.approve(accounts[109], 30420, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[109], 1000, {from: accounts[109]});

result = await instance.transfer(accounts[4],359,{from:accounts[5]});
});
it('test 4',async() => {

await instance.approve(accounts[67], 36407, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[67], 1000, {from: accounts[67]});

await instance.batchTransfer([accounts[39],accounts[50],accounts[46],accounts[82],accounts[66],accounts[100],accounts[8],accounts[71]],9362,{from:accounts[0]});

result = await instance.transfer(accounts[2],965,{from:accounts[1]});
});
it('test 5',async() => {

await instance.approve(accounts[28], 23302, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[28], 1000, {from: accounts[28]});

result = await instance.transfer(accounts[0],437,{from:accounts[0]});
await instance.batchTransfer([accounts[85],accounts[51],accounts[36],accounts[47],accounts[20],accounts[23],accounts[23]],9804,{from:accounts[0]});

});
it('test 6',async() => {
result = await instance.transfer(accounts[1],735,{from:accounts[3]});

await instance.approve(accounts[75], 34330, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[75], 1000, {from: accounts[75]});

await instance.batchTransfer([accounts[87],accounts[26],accounts[38]],6949,{from:accounts[0]});

});
it('test 7',async() => {
result = await instance.transfer(accounts[3],343,{from:accounts[4]});

await instance.approve(accounts[195], 22148, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[195], 1000, {from: accounts[195]});

await instance.batchTransfer([accounts[19],accounts[98],accounts[37],accounts[77],accounts[50],accounts[27],accounts[53]],7911,{from:accounts[0]});

});
it('test 8',async() => {
await instance.batchTransfer([accounts[71]],8482,{from:accounts[0]});


await instance.approve(accounts[118], 31188, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[118], 1000, {from: accounts[118]});

result = await instance.transfer(accounts[5],217,{from:accounts[2]});
});
it('test 9',async() => {

await instance.approve(accounts[85], 37156, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[85], 1000, {from: accounts[85]});

await instance.batchTransfer([accounts[83],accounts[46],accounts[16],accounts[59],accounts[76],accounts[4],accounts[41],accounts[63],accounts[73]],3639,{from:accounts[0]});

result = await instance.transfer(accounts[1],792,{from:accounts[2]});
});
it('test 10',async() => {
await instance.batchTransfer([accounts[37],accounts[80],accounts[52],accounts[4],accounts[63],accounts[12],accounts[84],accounts[41],accounts[65]],5588,{from:accounts[0]});


await instance.approve(accounts[50], 24008, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[50], 1000, {from: accounts[50]});

result = await instance.transfer(accounts[1],218,{from:accounts[2]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 11',async() => {
result = await instance.transfer(accounts[1],862,{from:accounts[5]});

await instance.approve(accounts[8], 30492, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[8], 1000, {from: accounts[8]});

await instance.batchTransfer([accounts[16],accounts[37],accounts[49],accounts[62],accounts[2],accounts[36],accounts[10]],7208,{from:accounts[0]});

});
it('test 12',async() => {

await instance.approve(accounts[91], 24042, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[91], 1000, {from: accounts[91]});

result = await instance.transfer(accounts[4],513,{from:accounts[3]});
await instance.batchTransfer([accounts[96],accounts[68],accounts[33],accounts[42],accounts[13],accounts[15],accounts[69],accounts[20]],2521,{from:accounts[0]});

});
it('test 13',async() => {
result = await instance.transfer(accounts[5],988,{from:accounts[5]});

await instance.approve(accounts[73], 28406, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[73], 1000, {from: accounts[73]});

await instance.batchTransfer([accounts[56],accounts[87],accounts[31],accounts[60],accounts[44],accounts[98]],7693,{from:accounts[0]});

});
it('test 14',async() => {
await instance.batchTransfer([accounts[8],accounts[41],accounts[61],accounts[24],accounts[86],accounts[41],accounts[41],accounts[28],accounts[62],accounts[7]],8020,{from:accounts[0]});

result = await instance.transfer(accounts[0],874,{from:accounts[3]});

await instance.approve(accounts[35], 28357, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[35], 1000, {from: accounts[35]});

});
it('test 15',async() => {
result = await instance.transfer(accounts[4],342,{from:accounts[5]});

await instance.approve(accounts[32], 32768, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[32], 1000, {from: accounts[32]});

await instance.batchTransfer([accounts[11],accounts[63],accounts[61],accounts[30]],3341,{from:accounts[0]});

});
it('test 16',async() => {
result = await instance.transfer(accounts[4],302,{from:accounts[4]});

await instance.approve(accounts[41], 33596, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[41], 1000, {from: accounts[41]});

await instance.batchTransfer([accounts[88],accounts[59],accounts[63],accounts[99],accounts[49],accounts[2],accounts[86],accounts[70]],1336,{from:accounts[0]});

});
it('test 17',async() => {
result = await instance.transfer(accounts[0],579,{from:accounts[5]});

await instance.approve(accounts[153], 39187, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[153], 1000, {from: accounts[153]});

await instance.batchTransfer([accounts[96],accounts[79],accounts[44],accounts[17],accounts[23],accounts[70]],4477,{from:accounts[0]});

});
it('test 18',async() => {
await instance.batchTransfer([accounts[37],accounts[62],accounts[57],accounts[57]],6243,{from:accounts[0]});


await instance.approve(accounts[32], 35379, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[32], 1000, {from: accounts[32]});

result = await instance.transfer(accounts[0],927,{from:accounts[3]});
});
it('test 19',async() => {

await instance.approve(accounts[143], 30834, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[143], 1000, {from: accounts[143]});

await instance.batchTransfer([accounts[8],accounts[5],accounts[38]],4108,{from:accounts[0]});

result = await instance.transfer(accounts[1],351,{from:accounts[3]});
});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[14], 39167, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[14], 1000, {from: accounts[14]});

await instance.batchTransfer([accounts[40],accounts[17]],8028,{from:accounts[0]});

result = await instance.transfer(accounts[1],987,{from:accounts[2]});
});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 21',async() => {
await instance.batchTransfer([accounts[21],accounts[42],accounts[39],accounts[63],accounts[45],accounts[11],accounts[80],accounts[41],accounts[29]],8315,{from:accounts[0]});


await instance.approve(accounts[59], 38972, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[59], 1000, {from: accounts[59]});

result = await instance.transfer(accounts[2],912,{from:accounts[0]});
});
it('test 22',async() => {
await instance.batchTransfer([accounts[45]],5352,{from:accounts[0]});

result = await instance.transfer(accounts[2],655,{from:accounts[4]});

await instance.approve(accounts[60], 23551, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[60], 1000, {from: accounts[60]});

});
it('test 23',async() => {
result = await instance.transfer(accounts[5],670,{from:accounts[3]});
await instance.batchTransfer([accounts[5],accounts[51],accounts[24],accounts[85],accounts[51],accounts[91],accounts[87],accounts[96],accounts[63]],6673,{from:accounts[0]});


await instance.approve(accounts[46], 37035, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[46], 1000, {from: accounts[46]});

});
it('test 24',async() => {

await instance.approve(accounts[37], 28353, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[37], 1000, {from: accounts[37]});

await instance.batchTransfer([accounts[36],accounts[19]],7170,{from:accounts[0]});

result = await instance.transfer(accounts[1],643,{from:accounts[1]});
});
it('test 25',async() => {

await instance.approve(accounts[60], 24740, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[60], 1000, {from: accounts[60]});

await instance.batchTransfer([accounts[51],accounts[60],accounts[67],accounts[26],accounts[73]],6810,{from:accounts[0]});

result = await instance.transfer(accounts[4],854,{from:accounts[1]});
});
it('test 26',async() => {
await instance.batchTransfer([accounts[65],accounts[29],accounts[53],accounts[85],accounts[72],accounts[94],accounts[82],accounts[49],accounts[58]],1770,{from:accounts[0]});

result = await instance.transfer(accounts[3],479,{from:accounts[2]});

await instance.approve(accounts[148], 20014, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[148], 1000, {from: accounts[148]});

});
it('test 27',async() => {
result = await instance.transfer(accounts[1],543,{from:accounts[4]});
await instance.batchTransfer([accounts[55]],9456,{from:accounts[0]});


await instance.approve(accounts[122], 36967, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[122], 1000, {from: accounts[122]});

});
it('test 28',async() => {
await instance.batchTransfer([accounts[83],accounts[1],accounts[54]],4210,{from:accounts[0]});


await instance.approve(accounts[78], 38208, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[78], 1000, {from: accounts[78]});

result = await instance.transfer(accounts[2],822,{from:accounts[2]});
});
it('test 29',async() => {
await instance.batchTransfer([accounts[99],accounts[44],accounts[37],accounts[67],accounts[79],accounts[61],accounts[76],accounts[69],accounts[67],accounts[95]],6790,{from:accounts[0]});


await instance.approve(accounts[164], 32325, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[164], 1000, {from: accounts[164]});

result = await instance.transfer(accounts[0],752,{from:accounts[4]});
});
});
