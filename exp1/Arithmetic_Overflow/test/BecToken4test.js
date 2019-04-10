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


await instance.approve(accounts[21], 26113, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[21], 1000, {from: accounts[21]});

await instance.batchTransfer([accounts[50]],1473,{from:accounts[0]});

result = await instance.transfer(accounts[1],826,{from:accounts[0]});
});
it('test 1',async() => {
result = await instance.transfer(accounts[0],715,{from:accounts[5]});

await instance.approve(accounts[25], 20787, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[25], 1000, {from: accounts[25]});

await instance.batchTransfer([accounts[64],accounts[74],accounts[43],accounts[59]],5267,{from:accounts[0]});

});
it('test 2',async() => {
result = await instance.transfer(accounts[5],923,{from:accounts[0]});

await instance.approve(accounts[59], 21932, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[59], 1000, {from: accounts[59]});

await instance.batchTransfer([accounts[34],accounts[45],accounts[83],accounts[73],accounts[44]],5911,{from:accounts[0]});

});
it('test 3',async() => {
result = await instance.transfer(accounts[3],328,{from:accounts[4]});

await instance.approve(accounts[102], 36695, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[102], 1000, {from: accounts[102]});

await instance.batchTransfer([accounts[77],accounts[30],accounts[44],accounts[80],accounts[83],accounts[20],accounts[48],accounts[19]],6627,{from:accounts[0]});

});
it('test 4',async() => {

await instance.approve(accounts[117], 36963, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[117], 1000, {from: accounts[117]});

await instance.batchTransfer([accounts[44],accounts[45],accounts[35],accounts[46]],8141,{from:accounts[0]});

result = await instance.transfer(accounts[0],387,{from:accounts[2]});
});
it('test 5',async() => {
await instance.batchTransfer([accounts[75],accounts[98],accounts[11],accounts[8]],5875,{from:accounts[0]});

result = await instance.transfer(accounts[3],722,{from:accounts[2]});

await instance.approve(accounts[186], 33397, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[186], 1000, {from: accounts[186]});

});
it('test 6',async() => {
result = await instance.transfer(accounts[1],622,{from:accounts[3]});

await instance.approve(accounts[2], 27573, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[2], 1000, {from: accounts[2]});

await instance.batchTransfer([accounts[58],accounts[67],accounts[56],accounts[70]],7747,{from:accounts[0]});

});
it('test 7',async() => {

await instance.approve(accounts[34], 39432, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[34], 1000, {from: accounts[34]});

result = await instance.transfer(accounts[1],492,{from:accounts[0]});
await instance.batchTransfer([accounts[97],accounts[97],accounts[11],accounts[15],accounts[10],accounts[46],accounts[12]],1233,{from:accounts[0]});

});
it('test 8',async() => {

await instance.approve(accounts[71], 28272, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[71], 1000, {from: accounts[71]});

result = await instance.transfer(accounts[3],457,{from:accounts[4]});
await instance.batchTransfer([accounts[58],accounts[53],accounts[62],accounts[46],accounts[68],accounts[69],accounts[67],accounts[9],accounts[77],accounts[2]],4937,{from:accounts[0]});

});
it('test 9',async() => {
result = await instance.transfer(accounts[2],791,{from:accounts[0]});

await instance.approve(accounts[56], 23313, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[56], 1000, {from: accounts[56]});

await instance.batchTransfer([accounts[24]],6287,{from:accounts[0]});

});
it('test 10',async() => {
result = await instance.transfer(accounts[3],747,{from:accounts[0]});

await instance.approve(accounts[67], 23044, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[67], 1000, {from: accounts[67]});

await instance.batchTransfer([accounts[48]],3116,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 11',async() => {
await instance.batchTransfer([accounts[70]],1550,{from:accounts[0]});

result = await instance.transfer(accounts[3],546,{from:accounts[2]});

await instance.approve(accounts[113], 24214, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[113], 1000, {from: accounts[113]});

});
it('test 12',async() => {
result = await instance.transfer(accounts[3],978,{from:accounts[1]});
await instance.batchTransfer([accounts[38],accounts[54],accounts[96],accounts[1]],6050,{from:accounts[0]});


await instance.approve(accounts[119], 25044, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[119], 1000, {from: accounts[119]});

});
it('test 13',async() => {
await instance.batchTransfer([accounts[59],accounts[65],accounts[7],accounts[35],accounts[37],accounts[48],accounts[28],accounts[52],accounts[67],accounts[89]],5953,{from:accounts[0]});


await instance.approve(accounts[44], 28946, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[44], 1000, {from: accounts[44]});

result = await instance.transfer(accounts[2],628,{from:accounts[0]});
});
it('test 14',async() => {
await instance.batchTransfer([accounts[38],accounts[64],accounts[31],accounts[58],accounts[42],accounts[28],accounts[16],accounts[92],accounts[98]],2885,{from:accounts[0]});

result = await instance.transfer(accounts[5],691,{from:accounts[5]});

await instance.approve(accounts[146], 28914, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[146], 1000, {from: accounts[146]});

});
it('test 15',async() => {

await instance.approve(accounts[123], 34363, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[123], 1000, {from: accounts[123]});

await instance.batchTransfer([accounts[11],accounts[61],accounts[37],accounts[83]],9925,{from:accounts[0]});

result = await instance.transfer(accounts[4],363,{from:accounts[4]});
});
it('test 16',async() => {

await instance.approve(accounts[118], 39390, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[118], 1000, {from: accounts[118]});

await instance.batchTransfer([accounts[63],accounts[3],accounts[54],accounts[20],accounts[6],accounts[95]],2264,{from:accounts[0]});

result = await instance.transfer(accounts[5],256,{from:accounts[2]});
});
it('test 17',async() => {
await instance.batchTransfer([accounts[91],accounts[57],accounts[49],accounts[77]],6320,{from:accounts[0]});

result = await instance.transfer(accounts[4],780,{from:accounts[4]});

await instance.approve(accounts[13], 25562, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[13], 1000, {from: accounts[13]});

});
it('test 18',async() => {
await instance.batchTransfer([accounts[38],accounts[17],accounts[80],accounts[30],accounts[64]],2609,{from:accounts[0]});

result = await instance.transfer(accounts[1],477,{from:accounts[0]});

await instance.approve(accounts[75], 30591, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[75], 1000, {from: accounts[75]});

});
it('test 19',async() => {
result = await instance.transfer(accounts[5],374,{from:accounts[5]});

await instance.approve(accounts[169], 36055, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[169], 1000, {from: accounts[169]});

await instance.batchTransfer([accounts[7],accounts[73]],1846,{from:accounts[0]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});

await instance.approve(accounts[175], 34211, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[175], 1000, {from: accounts[175]});

result = await instance.transfer(accounts[4],201,{from:accounts[3]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[94],accounts[5],accounts[66],accounts[40],accounts[82],accounts[70],accounts[82],accounts[69]],5469,{from:accounts[0]});

});
it('test 21',async() => {
result = await instance.transfer(accounts[0],966,{from:accounts[0]});
await instance.batchTransfer([accounts[52],accounts[17],accounts[49],accounts[100],accounts[84],accounts[16],accounts[78]],4566,{from:accounts[0]});


await instance.approve(accounts[1], 35523, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[1], 1000, {from: accounts[1]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 22',async() => {
await instance.batchTransfer([accounts[93],accounts[11],accounts[49],accounts[79]],5352,{from:accounts[0]});

result = await instance.transfer(accounts[0],362,{from:accounts[4]});

await instance.approve(accounts[199], 23039, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[199], 1000, {from: accounts[199]});

});
it('test 23',async() => {
result = await instance.transfer(accounts[2],511,{from:accounts[1]});
await instance.batchTransfer([accounts[96],accounts[14],accounts[50],accounts[25]],2348,{from:accounts[0]});


await instance.approve(accounts[115], 36658, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[115], 1000, {from: accounts[115]});

});
it('test 24',async() => {

await instance.approve(accounts[90], 38172, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[90], 1000, {from: accounts[90]});

await instance.batchTransfer([accounts[21],accounts[51],accounts[52],accounts[53]],6829,{from:accounts[0]});

result = await instance.transfer(accounts[3],440,{from:accounts[2]});
});
it('test 25',async() => {
await instance.batchTransfer([accounts[17],accounts[69],accounts[37],accounts[5],accounts[95],accounts[25]],9570,{from:accounts[0]});

result = await instance.transfer(accounts[4],651,{from:accounts[0]});

await instance.approve(accounts[124], 36741, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[124], 1000, {from: accounts[124]});

});
it('test 26',async() => {

await instance.approve(accounts[26], 26893, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[26], 1000, {from: accounts[26]});

result = await instance.transfer(accounts[0],929,{from:accounts[5]});
await instance.batchTransfer([accounts[31],accounts[27],accounts[85],accounts[94]],3556,{from:accounts[0]});

});
it('test 27',async() => {
await instance.batchTransfer([accounts[53],accounts[41],accounts[43],accounts[99],accounts[15],accounts[52]],8819,{from:accounts[0]});

result = await instance.transfer(accounts[5],892,{from:accounts[1]});

await instance.approve(accounts[170], 25217, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[170], 1000, {from: accounts[170]});

});
it('test 28',async() => {
result = await instance.transfer(accounts[5],331,{from:accounts[4]});

await instance.approve(accounts[136], 32259, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[136], 1000, {from: accounts[136]});

await instance.batchTransfer([accounts[87],accounts[17],accounts[70],accounts[28],accounts[63],accounts[54],accounts[9],accounts[55],accounts[31]],1677,{from:accounts[0]});

});
it('test 29',async() => {
result = await instance.transfer(accounts[1],418,{from:accounts[1]});
await instance.batchTransfer([accounts[28]],8066,{from:accounts[0]});


await instance.approve(accounts[190], 28561, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[190], 1000, {from: accounts[190]});

});
});
