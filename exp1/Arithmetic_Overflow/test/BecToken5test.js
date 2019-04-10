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
result = await instance.transfer(accounts[4],426,{from:accounts[3]});
await instance.batchTransfer([accounts[93],accounts[24],accounts[42]],7957,{from:accounts[0]});


await instance.approve(accounts[9], 38092, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[9], 1000, {from: accounts[9]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 1',async() => {
result = await instance.transfer(accounts[4],466,{from:accounts[4]});
await instance.batchTransfer([accounts[28],accounts[59],accounts[83],accounts[24],accounts[27],accounts[21],accounts[2],accounts[3],accounts[81]],7427,{from:accounts[0]});


await instance.approve(accounts[59], 27704, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[59], 1000, {from: accounts[59]});

});
it('test 2',async() => {

await instance.approve(accounts[178], 28403, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[178], 1000, {from: accounts[178]});

await instance.batchTransfer([accounts[31]],9091,{from:accounts[0]});

result = await instance.transfer(accounts[5],281,{from:accounts[5]});
});
it('test 3',async() => {
await instance.batchTransfer([accounts[59],accounts[83]],4230,{from:accounts[0]});


await instance.approve(accounts[121], 36580, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[121], 1000, {from: accounts[121]});

result = await instance.transfer(accounts[2],553,{from:accounts[1]});
});
it('test 4',async() => {
await instance.batchTransfer([accounts[8],accounts[81],accounts[63],accounts[10],accounts[96],accounts[72],accounts[35]],9531,{from:accounts[0]});


await instance.approve(accounts[199], 38617, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[199], 1000, {from: accounts[199]});

result = await instance.transfer(accounts[1],991,{from:accounts[4]});
});
it('test 5',async() => {
result = await instance.transfer(accounts[3],566,{from:accounts[0]});
await instance.batchTransfer([accounts[34],accounts[53]],9839,{from:accounts[0]});


await instance.approve(accounts[156], 28819, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[156], 1000, {from: accounts[156]});

});
it('test 6',async() => {

await instance.approve(accounts[104], 29828, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[104], 1000, {from: accounts[104]});

result = await instance.transfer(accounts[2],328,{from:accounts[5]});
await instance.batchTransfer([accounts[72],accounts[34],accounts[23],accounts[40]],7809,{from:accounts[0]});

});
it('test 7',async() => {

await instance.approve(accounts[200], 32748, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[200], 1000, {from: accounts[200]});

result = await instance.transfer(accounts[3],251,{from:accounts[1]});
await instance.batchTransfer([accounts[80]],8374,{from:accounts[0]});

});
it('test 8',async() => {
result = await instance.transfer(accounts[3],324,{from:accounts[3]});

await instance.approve(accounts[47], 31113, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[47], 1000, {from: accounts[47]});

await instance.batchTransfer([accounts[41],accounts[17],accounts[41],accounts[20],accounts[50],accounts[56],accounts[89],accounts[24]],5726,{from:accounts[0]});

});
it('test 9',async() => {
result = await instance.transfer(accounts[3],457,{from:accounts[2]});

await instance.approve(accounts[99], 39110, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[99], 1000, {from: accounts[99]});

await instance.batchTransfer([accounts[48],accounts[86],accounts[55]],4074,{from:accounts[0]});

});
it('test 10',async() => {
await instance.batchTransfer([accounts[36],accounts[64]],6988,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[1],583,{from:accounts[5]});

await instance.approve(accounts[171], 27618, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[171], 1000, {from: accounts[171]});

});
it('test 11',async() => {
result = await instance.transfer(accounts[3],657,{from:accounts[5]});

await instance.approve(accounts[180], 37456, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[180], 1000, {from: accounts[180]});

await instance.batchTransfer([accounts[31],accounts[64],accounts[9],accounts[92],accounts[63]],4235,{from:accounts[0]});

});
it('test 12',async() => {

await instance.approve(accounts[10], 29026, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[10], 1000, {from: accounts[10]});

result = await instance.transfer(accounts[1],204,{from:accounts[4]});
await instance.batchTransfer([accounts[81]],5168,{from:accounts[0]});

});
it('test 13',async() => {
result = await instance.transfer(accounts[0],994,{from:accounts[5]});

await instance.approve(accounts[118], 35114, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[118], 1000, {from: accounts[118]});

await instance.batchTransfer([accounts[58],accounts[36],accounts[37],accounts[12],accounts[52]],6231,{from:accounts[0]});

});
it('test 14',async() => {

await instance.approve(accounts[145], 20272, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[145], 1000, {from: accounts[145]});

await instance.batchTransfer([accounts[83],accounts[79],accounts[55],accounts[10],accounts[29],accounts[55],accounts[29],accounts[41],accounts[100],accounts[33]],1314,{from:accounts[0]});

result = await instance.transfer(accounts[4],830,{from:accounts[1]});
});
it('test 15',async() => {
await instance.batchTransfer([accounts[86],accounts[10],accounts[89],accounts[72],accounts[91],accounts[19]],3595,{from:accounts[0]});

result = await instance.transfer(accounts[3],789,{from:accounts[4]});

await instance.approve(accounts[121], 22657, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[121], 1000, {from: accounts[121]});

});
it('test 16',async() => {
await instance.batchTransfer([accounts[4],accounts[63],accounts[58],accounts[15],accounts[18],accounts[9],accounts[67],accounts[12],accounts[17],accounts[68]],3315,{from:accounts[0]});

result = await instance.transfer(accounts[3],345,{from:accounts[2]});

await instance.approve(accounts[145], 28178, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[145], 1000, {from: accounts[145]});

});
it('test 17',async() => {

await instance.approve(accounts[31], 37285, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[31], 1000, {from: accounts[31]});

result = await instance.transfer(accounts[5],734,{from:accounts[5]});
await instance.batchTransfer([accounts[1],accounts[4],accounts[27],accounts[68],accounts[6]],1146,{from:accounts[0]});

});
it('test 18',async() => {

await instance.approve(accounts[44], 37680, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[44], 1000, {from: accounts[44]});

result = await instance.transfer(accounts[5],557,{from:accounts[5]});
await instance.batchTransfer([accounts[74],accounts[51]],2075,{from:accounts[0]});

});
it('test 19',async() => {
result = await instance.transfer(accounts[0],769,{from:accounts[4]});

await instance.approve(accounts[137], 28536, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[137], 1000, {from: accounts[137]});

await instance.batchTransfer([accounts[17],accounts[100],accounts[79],accounts[52],accounts[92]],8089,{from:accounts[0]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.batchTransfer([accounts[47],accounts[18],accounts[70],accounts[10],accounts[94],accounts[89]],2269,{from:accounts[0]});


await instance.approve(accounts[126], 34521, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[126], 1000, {from: accounts[126]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[4],436,{from:accounts[2]});
});
it('test 21',async() => {
result = await instance.transfer(accounts[0],778,{from:accounts[4]});
await instance.batchTransfer([accounts[25],accounts[95],accounts[57],accounts[35]],2927,{from:accounts[0]});


await instance.approve(accounts[169], 32045, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[169], 1000, {from: accounts[169]});

});
it('test 22',async() => {

await instance.approve(accounts[173], 32755, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[173], 1000, {from: accounts[173]});

result = await instance.transfer(accounts[3],795,{from:accounts[3]});
await instance.batchTransfer([accounts[98],accounts[49]],9074,{from:accounts[0]});

});
it('test 23',async() => {
result = await instance.transfer(accounts[4],673,{from:accounts[1]});

await instance.approve(accounts[117], 28178, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[117], 1000, {from: accounts[117]});

await instance.batchTransfer([accounts[45],accounts[50],accounts[28],accounts[18],accounts[37],accounts[75],accounts[72],accounts[49],accounts[94],accounts[54]],7777,{from:accounts[0]});

});
it('test 24',async() => {
await instance.batchTransfer([accounts[75],accounts[9],accounts[80],accounts[23],accounts[54],accounts[37],accounts[75],accounts[76],accounts[42]],6427,{from:accounts[0]});

result = await instance.transfer(accounts[5],892,{from:accounts[3]});

await instance.approve(accounts[8], 29712, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[8], 1000, {from: accounts[8]});

});
it('test 25',async() => {

await instance.approve(accounts[153], 27010, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[153], 1000, {from: accounts[153]});

await instance.batchTransfer([accounts[2],accounts[36],accounts[94],accounts[85],accounts[100],accounts[17],accounts[64]],9654,{from:accounts[0]});

result = await instance.transfer(accounts[4],289,{from:accounts[1]});
});
it('test 26',async() => {

await instance.approve(accounts[27], 21788, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[27], 1000, {from: accounts[27]});

await instance.batchTransfer([accounts[83],accounts[90],accounts[66],accounts[47],accounts[69]],7157,{from:accounts[0]});

result = await instance.transfer(accounts[2],831,{from:accounts[1]});
});
it('test 27',async() => {

await instance.approve(accounts[72], 26215, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[72], 1000, {from: accounts[72]});

result = await instance.transfer(accounts[4],845,{from:accounts[5]});
await instance.batchTransfer([accounts[39],accounts[9]],9933,{from:accounts[0]});

});
it('test 28',async() => {
result = await instance.transfer(accounts[1],486,{from:accounts[3]});

await instance.approve(accounts[19], 21719, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[19], 1000, {from: accounts[19]});

await instance.batchTransfer([accounts[11],accounts[29],accounts[64],accounts[82],accounts[92]],9461,{from:accounts[0]});

});
it('test 29',async() => {
await instance.batchTransfer([accounts[60]],4316,{from:accounts[0]});


await instance.approve(accounts[47], 21222, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[47], 1000, {from: accounts[47]});

result = await instance.transfer(accounts[5],758,{from:accounts[0]});
});
});
