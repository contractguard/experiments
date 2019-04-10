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

await instance.approve(accounts[176], 22781, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[176], 1000, {from: accounts[176]});

result = await instance.transfer(accounts[3],388,{from:accounts[1]});
await instance.batchTransfer([accounts[12],accounts[44],accounts[75],accounts[7],accounts[12],accounts[53],accounts[16],accounts[62]],1537,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 1',async() => {
await instance.batchTransfer([accounts[21],accounts[31]],5862,{from:accounts[0]});


await instance.approve(accounts[39], 27845, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[39], 1000, {from: accounts[39]});

result = await instance.transfer(accounts[0],604,{from:accounts[5]});
});
it('test 2',async() => {
result = await instance.transfer(accounts[3],779,{from:accounts[5]});
await instance.batchTransfer([accounts[79],accounts[86]],5135,{from:accounts[0]});


await instance.approve(accounts[90], 22782, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[90], 1000, {from: accounts[90]});

});
it('test 3',async() => {
await instance.batchTransfer([accounts[86],accounts[89]],5403,{from:accounts[0]});


await instance.approve(accounts[28], 27140, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[28], 1000, {from: accounts[28]});

result = await instance.transfer(accounts[5],765,{from:accounts[3]});
});
it('test 4',async() => {
await instance.batchTransfer([accounts[37],accounts[21]],3326,{from:accounts[0]});


await instance.approve(accounts[21], 20008, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[21], 1000, {from: accounts[21]});

result = await instance.transfer(accounts[1],846,{from:accounts[2]});
});
it('test 5',async() => {
result = await instance.transfer(accounts[0],313,{from:accounts[3]});

await instance.approve(accounts[34], 29699, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[34], 1000, {from: accounts[34]});

await instance.batchTransfer([accounts[67],accounts[39]],4421,{from:accounts[0]});

});
it('test 6',async() => {

await instance.approve(accounts[198], 30768, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[198], 1000, {from: accounts[198]});

result = await instance.transfer(accounts[0],522,{from:accounts[0]});
await instance.batchTransfer([accounts[47],accounts[19],accounts[13],accounts[56],accounts[16],accounts[10],accounts[26],accounts[94],accounts[18],accounts[10]],7022,{from:accounts[0]});

});
it('test 7',async() => {
result = await instance.transfer(accounts[4],320,{from:accounts[4]});
await instance.batchTransfer([accounts[71],accounts[83],accounts[31]],2253,{from:accounts[0]});


await instance.approve(accounts[119], 36854, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[119], 1000, {from: accounts[119]});

});
it('test 8',async() => {

await instance.approve(accounts[125], 31210, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[125], 1000, {from: accounts[125]});

await instance.batchTransfer([accounts[11],accounts[45]],6175,{from:accounts[0]});

result = await instance.transfer(accounts[5],459,{from:accounts[3]});
});
it('test 9',async() => {
await instance.batchTransfer([accounts[59],accounts[12],accounts[68]],7888,{from:accounts[0]});

result = await instance.transfer(accounts[3],200,{from:accounts[0]});

await instance.approve(accounts[173], 30465, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[173], 1000, {from: accounts[173]});

});
it('test 10',async() => {

await instance.approve(accounts[175], 34800, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[175], 1000, {from: accounts[175]});

result = await instance.transfer(accounts[1],572,{from:accounts[2]});
await instance.batchTransfer([accounts[8],accounts[97],accounts[11]],7008,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 11',async() => {

await instance.approve(accounts[93], 21102, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[93], 1000, {from: accounts[93]});

result = await instance.transfer(accounts[0],896,{from:accounts[2]});
await instance.batchTransfer([accounts[54],accounts[37],accounts[64],accounts[36],accounts[89],accounts[78],accounts[32],accounts[37],accounts[31],accounts[44]],4721,{from:accounts[0]});

});
it('test 12',async() => {
result = await instance.transfer(accounts[3],467,{from:accounts[1]});

await instance.approve(accounts[154], 29056, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[154], 1000, {from: accounts[154]});

await instance.batchTransfer([accounts[64]],3158,{from:accounts[0]});

});
it('test 13',async() => {
await instance.batchTransfer([accounts[41],accounts[45],accounts[81],accounts[36],accounts[77],accounts[15],accounts[75],accounts[65]],9590,{from:accounts[0]});

result = await instance.transfer(accounts[0],238,{from:accounts[2]});

await instance.approve(accounts[123], 31147, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[123], 1000, {from: accounts[123]});

});
it('test 14',async() => {
await instance.batchTransfer([accounts[44],accounts[1],accounts[25],accounts[68],accounts[51],accounts[34]],1630,{from:accounts[0]});


await instance.approve(accounts[104], 22292, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[104], 1000, {from: accounts[104]});

result = await instance.transfer(accounts[0],867,{from:accounts[1]});
});
it('test 15',async() => {
await instance.batchTransfer([accounts[15],accounts[100],accounts[83],accounts[13],accounts[16],accounts[9],accounts[86],accounts[64],accounts[70],accounts[22]],2997,{from:accounts[0]});

result = await instance.transfer(accounts[5],597,{from:accounts[3]});

await instance.approve(accounts[32], 38192, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[32], 1000, {from: accounts[32]});

});
it('test 16',async() => {
await instance.batchTransfer([accounts[39],accounts[39],accounts[14],accounts[19],accounts[74],accounts[73]],9016,{from:accounts[0]});

result = await instance.transfer(accounts[4],881,{from:accounts[1]});

await instance.approve(accounts[25], 26561, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[25], 1000, {from: accounts[25]});

});
it('test 17',async() => {

await instance.approve(accounts[50], 28706, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[50], 1000, {from: accounts[50]});

result = await instance.transfer(accounts[1],738,{from:accounts[3]});
await instance.batchTransfer([accounts[45],accounts[45],accounts[35],accounts[30],accounts[65],accounts[61],accounts[6],accounts[50],accounts[29],accounts[89]],9748,{from:accounts[0]});

});
it('test 18',async() => {
result = await instance.transfer(accounts[4],790,{from:accounts[1]});

await instance.approve(accounts[189], 25051, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[189], 1000, {from: accounts[189]});

await instance.batchTransfer([accounts[81],accounts[76]],8241,{from:accounts[0]});

});
it('test 19',async() => {
result = await instance.transfer(accounts[3],790,{from:accounts[4]});

await instance.approve(accounts[11], 33068, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[11], 1000, {from: accounts[11]});

await instance.batchTransfer([accounts[35],accounts[14],accounts[43],accounts[27],accounts[31],accounts[20],accounts[71]],2048,{from:accounts[0]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.batchTransfer([accounts[50],accounts[41],accounts[80],accounts[84],accounts[51],accounts[22],accounts[93],accounts[61]],6203,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[158], 31071, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[158], 1000, {from: accounts[158]});

result = await instance.transfer(accounts[3],615,{from:accounts[5]});
});
it('test 21',async() => {
result = await instance.transfer(accounts[0],776,{from:accounts[4]});
await instance.batchTransfer([accounts[68],accounts[96]],6927,{from:accounts[0]});


await instance.approve(accounts[172], 34839, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[172], 1000, {from: accounts[172]});

});
it('test 22',async() => {
await instance.batchTransfer([accounts[48],accounts[4],accounts[38],accounts[42],accounts[51],accounts[7]],7004,{from:accounts[0]});

result = await instance.transfer(accounts[0],787,{from:accounts[4]});

await instance.approve(accounts[182], 27807, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[182], 1000, {from: accounts[182]});

});
it('test 23',async() => {
await instance.batchTransfer([accounts[63],accounts[54],accounts[48]],1605,{from:accounts[0]});

result = await instance.transfer(accounts[2],286,{from:accounts[4]});

await instance.approve(accounts[85], 30533, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[85], 1000, {from: accounts[85]});

});
it('test 24',async() => {
result = await instance.transfer(accounts[5],487,{from:accounts[0]});

await instance.approve(accounts[73], 30222, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[73], 1000, {from: accounts[73]});

await instance.batchTransfer([accounts[43],accounts[51],accounts[95],accounts[81],accounts[7],accounts[11],accounts[90],accounts[3]],6610,{from:accounts[0]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 25',async() => {

await instance.approve(accounts[53], 22013, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[53], 1000, {from: accounts[53]});

await instance.batchTransfer([accounts[53]],4504,{from:accounts[0]});

result = await instance.transfer(accounts[5],221,{from:accounts[1]});
});
it('test 26',async() => {
await instance.batchTransfer([accounts[80],accounts[67],accounts[28],accounts[16],accounts[85],accounts[40],accounts[5],accounts[56],accounts[23]],4670,{from:accounts[0]});


await instance.approve(accounts[16], 36395, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[16], 1000, {from: accounts[16]});

result = await instance.transfer(accounts[1],833,{from:accounts[1]});
});
it('test 27',async() => {
result = await instance.transfer(accounts[4],663,{from:accounts[3]});
await instance.batchTransfer([accounts[11],accounts[73],accounts[54]],7093,{from:accounts[0]});


await instance.approve(accounts[78], 22980, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[78], 1000, {from: accounts[78]});

});
it('test 28',async() => {

await instance.approve(accounts[72], 34453, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[72], 1000, {from: accounts[72]});

result = await instance.transfer(accounts[2],929,{from:accounts[0]});
await instance.batchTransfer([accounts[91],accounts[17],accounts[50],accounts[9],accounts[33],accounts[3],accounts[56]],1608,{from:accounts[0]});

});
it('test 29',async() => {
await instance.batchTransfer([accounts[21],accounts[50]],1135,{from:accounts[0]});

result = await instance.transfer(accounts[1],310,{from:accounts[5]});

await instance.approve(accounts[151], 32344, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[151], 1000, {from: accounts[151]});

});
});
