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

await instance.approve(accounts[9], 22240, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[9], 1000, {from: accounts[9]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[41],accounts[32],accounts[71],accounts[16],accounts[39],accounts[56],accounts[26],accounts[28],accounts[67]],2010,{from:accounts[0]});

result = await instance.transfer(accounts[1],415,{from:accounts[4]});
});
it('test 1',async() => {
await instance.batchTransfer([accounts[90],accounts[72],accounts[7],accounts[65],accounts[81],accounts[91],accounts[95],accounts[8],accounts[55],accounts[20]],1480,{from:accounts[0]});

result = await instance.transfer(accounts[1],619,{from:accounts[2]});

await instance.approve(accounts[8], 29989, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[8], 1000, {from: accounts[8]});

});
it('test 2',async() => {
await instance.batchTransfer([accounts[52],accounts[78],accounts[2],accounts[6],accounts[49],accounts[21],accounts[7],accounts[42],accounts[41],accounts[70]],5941,{from:accounts[0]});


await instance.approve(accounts[49], 31365, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[49], 1000, {from: accounts[49]});

result = await instance.transfer(accounts[3],364,{from:accounts[3]});
});
it('test 3',async() => {

await instance.approve(accounts[134], 26767, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[134], 1000, {from: accounts[134]});

await instance.batchTransfer([accounts[48],accounts[8],accounts[48]],8194,{from:accounts[0]});

result = await instance.transfer(accounts[1],797,{from:accounts[5]});
});
it('test 4',async() => {
result = await instance.transfer(accounts[4],629,{from:accounts[4]});

await instance.approve(accounts[79], 32867, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[79], 1000, {from: accounts[79]});

await instance.batchTransfer([accounts[65],accounts[23],accounts[85],accounts[94],accounts[48]],5333,{from:accounts[0]});

});
it('test 5',async() => {

await instance.approve(accounts[171], 37661, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[171], 1000, {from: accounts[171]});

await instance.batchTransfer([accounts[68],accounts[89],accounts[91],accounts[92],accounts[2],accounts[5],accounts[10]],6979,{from:accounts[0]});

result = await instance.transfer(accounts[4],571,{from:accounts[3]});
});
it('test 6',async() => {
await instance.batchTransfer([accounts[75],accounts[30],accounts[36],accounts[29],accounts[24],accounts[12],accounts[29],accounts[79],accounts[33],accounts[86]],9097,{from:accounts[0]});

result = await instance.transfer(accounts[0],744,{from:accounts[1]});

await instance.approve(accounts[176], 35632, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[176], 1000, {from: accounts[176]});

});
it('test 7',async() => {

await instance.approve(accounts[37], 31966, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[37], 1000, {from: accounts[37]});

await instance.batchTransfer([accounts[45],accounts[24],accounts[8],accounts[71],accounts[25],accounts[8],accounts[51],accounts[7],accounts[96]],5545,{from:accounts[0]});

result = await instance.transfer(accounts[0],893,{from:accounts[3]});
});
it('test 8',async() => {
result = await instance.transfer(accounts[2],988,{from:accounts[2]});
await instance.batchTransfer([accounts[68]],9378,{from:accounts[0]});


await instance.approve(accounts[176], 33208, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[176], 1000, {from: accounts[176]});

});
it('test 9',async() => {

await instance.approve(accounts[119], 21307, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[119], 1000, {from: accounts[119]});

result = await instance.transfer(accounts[2],399,{from:accounts[0]});
await instance.batchTransfer([accounts[75],accounts[98],accounts[44],accounts[42],accounts[89]],3962,{from:accounts[0]});

});
it('test 10',async() => {

await instance.approve(accounts[102], 37844, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[102], 1000, {from: accounts[102]});

await instance.batchTransfer([accounts[18],accounts[21],accounts[53],accounts[73]],5464,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[3],242,{from:accounts[0]});
});
it('test 11',async() => {
result = await instance.transfer(accounts[1],563,{from:accounts[5]});
await instance.batchTransfer([accounts[21],accounts[15],accounts[56],accounts[7],accounts[14],accounts[92],accounts[64]],3508,{from:accounts[0]});


await instance.approve(accounts[37], 39427, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[37], 1000, {from: accounts[37]});

});
it('test 12',async() => {

await instance.approve(accounts[176], 23230, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[176], 1000, {from: accounts[176]});

result = await instance.transfer(accounts[3],385,{from:accounts[5]});
await instance.batchTransfer([accounts[98],accounts[98],accounts[72],accounts[79],accounts[95],accounts[77]],9708,{from:accounts[0]});

});
it('test 13',async() => {

await instance.approve(accounts[11], 23701, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[11], 1000, {from: accounts[11]});

result = await instance.transfer(accounts[1],478,{from:accounts[5]});
await instance.batchTransfer([accounts[28],accounts[24],accounts[4],accounts[19],accounts[85],accounts[38],accounts[4],accounts[59],accounts[83],accounts[73]],7979,{from:accounts[0]});

});
it('test 14',async() => {
result = await instance.transfer(accounts[4],926,{from:accounts[3]});

await instance.approve(accounts[61], 34219, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[61], 1000, {from: accounts[61]});

await instance.batchTransfer([accounts[35],accounts[39],accounts[100],accounts[17]],4643,{from:accounts[0]});

});
it('test 15',async() => {

await instance.approve(accounts[83], 32287, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[83], 1000, {from: accounts[83]});

result = await instance.transfer(accounts[5],662,{from:accounts[4]});
await instance.batchTransfer([accounts[26],accounts[20]],8714,{from:accounts[0]});

});
it('test 16',async() => {
await instance.batchTransfer([accounts[99],accounts[56],accounts[46],accounts[51],accounts[82],accounts[72]],4331,{from:accounts[0]});


await instance.approve(accounts[49], 26686, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[49], 1000, {from: accounts[49]});

result = await instance.transfer(accounts[2],579,{from:accounts[2]});
});
it('test 17',async() => {
await instance.batchTransfer([accounts[27],accounts[9],accounts[80],accounts[76],accounts[46],accounts[39]],5391,{from:accounts[0]});

result = await instance.transfer(accounts[3],274,{from:accounts[3]});

await instance.approve(accounts[143], 27356, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[143], 1000, {from: accounts[143]});

});
it('test 18',async() => {
await instance.batchTransfer([accounts[53],accounts[53],accounts[36],accounts[87],accounts[62],accounts[16],accounts[88],accounts[27],accounts[68]],7136,{from:accounts[0]});


await instance.approve(accounts[152], 34720, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[152], 1000, {from: accounts[152]});

result = await instance.transfer(accounts[5],447,{from:accounts[4]});
});
it('test 19',async() => {

await instance.approve(accounts[89], 27416, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[89], 1000, {from: accounts[89]});

await instance.batchTransfer([accounts[66]],7656,{from:accounts[0]});

result = await instance.transfer(accounts[2],797,{from:accounts[1]});
});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});

await instance.approve(accounts[2], 36886, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[2], 1000, {from: accounts[2]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[2],449,{from:accounts[4]});
await instance.batchTransfer([accounts[1],accounts[59],accounts[47],accounts[65],accounts[85],accounts[7],accounts[39]],8714,{from:accounts[0]});

});
it('test 21',async() => {
result = await instance.transfer(accounts[1],563,{from:accounts[2]});
await instance.batchTransfer([accounts[8],accounts[4],accounts[16],accounts[33],accounts[3],accounts[27],accounts[58],accounts[10],accounts[57],accounts[23]],5078,{from:accounts[0]});


await instance.approve(accounts[92], 20142, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[92], 1000, {from: accounts[92]});

});
it('test 22',async() => {
result = await instance.transfer(accounts[1],498,{from:accounts[3]});
await instance.batchTransfer([accounts[53],accounts[13],accounts[19],accounts[45],accounts[84]],4103,{from:accounts[0]});


await instance.approve(accounts[70], 30903, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[70], 1000, {from: accounts[70]});

});
it('test 23',async() => {

await instance.approve(accounts[38], 32771, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[38], 1000, {from: accounts[38]});

await instance.batchTransfer([accounts[36],accounts[14],accounts[54],accounts[98],accounts[49],accounts[83],accounts[46],accounts[55]],5605,{from:accounts[0]});

result = await instance.transfer(accounts[2],716,{from:accounts[4]});
});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 24',async() => {

await instance.approve(accounts[181], 32220, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[181], 1000, {from: accounts[181]});

result = await instance.transfer(accounts[4],824,{from:accounts[0]});
await instance.batchTransfer([accounts[37],accounts[88],accounts[87],accounts[75]],1110,{from:accounts[0]});

});
it('test 25',async() => {

await instance.approve(accounts[58], 36342, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[58], 1000, {from: accounts[58]});

await instance.batchTransfer([accounts[56],accounts[18]],9138,{from:accounts[0]});

result = await instance.transfer(accounts[1],282,{from:accounts[4]});
});
it('test 26',async() => {
await instance.batchTransfer([accounts[96],accounts[10],accounts[71],accounts[75],accounts[96],accounts[7],accounts[69],accounts[13],accounts[41]],9654,{from:accounts[0]});

result = await instance.transfer(accounts[2],872,{from:accounts[3]});

await instance.approve(accounts[154], 29840, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[154], 1000, {from: accounts[154]});

});
it('test 27',async() => {
await instance.batchTransfer([accounts[82],accounts[96],accounts[41],accounts[16],accounts[77],accounts[1]],8100,{from:accounts[0]});

result = await instance.transfer(accounts[1],799,{from:accounts[5]});

await instance.approve(accounts[140], 20312, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[140], 1000, {from: accounts[140]});

});
it('test 28',async() => {
await instance.batchTransfer([accounts[96],accounts[74],accounts[15]],8634,{from:accounts[0]});


await instance.approve(accounts[196], 32064, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[196], 1000, {from: accounts[196]});

result = await instance.transfer(accounts[2],352,{from:accounts[4]});
});
it('test 29',async() => {
await instance.batchTransfer([accounts[21]],3197,{from:accounts[0]});

result = await instance.transfer(accounts[1],741,{from:accounts[1]});

await instance.approve(accounts[78], 34742, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[78], 1000, {from: accounts[78]});

});
});
