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

await instance.approve(accounts[121], 32001, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[121], 1000, {from: accounts[121]});

await instance.batchTransfer([accounts[92],accounts[12],accounts[9],accounts[93],accounts[31],accounts[86],accounts[62],accounts[64],accounts[68],accounts[49]],5132,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[3],268,{from:accounts[5]});
});
it('test 1',async() => {

await instance.approve(accounts[182], 20784, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[182], 1000, {from: accounts[182]});

await instance.batchTransfer([accounts[47],accounts[72],accounts[7]],5345,{from:accounts[0]});

result = await instance.transfer(accounts[3],237,{from:accounts[1]});
});
it('test 2',async() => {
await instance.batchTransfer([accounts[27],accounts[48],accounts[4],accounts[40],accounts[52],accounts[85],accounts[71],accounts[81],accounts[79],accounts[15]],8656,{from:accounts[0]});


await instance.approve(accounts[6], 28647, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[6], 1000, {from: accounts[6]});

result = await instance.transfer(accounts[0],426,{from:accounts[4]});
});
it('test 3',async() => {

await instance.approve(accounts[72], 23824, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[72], 1000, {from: accounts[72]});

result = await instance.transfer(accounts[4],599,{from:accounts[0]});
await instance.batchTransfer([accounts[72],accounts[92],accounts[55],accounts[31]],4467,{from:accounts[0]});

});
it('test 4',async() => {
await instance.batchTransfer([accounts[67]],7051,{from:accounts[0]});


await instance.approve(accounts[85], 34511, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[85], 1000, {from: accounts[85]});

result = await instance.transfer(accounts[3],378,{from:accounts[4]});
});
it('test 5',async() => {

await instance.approve(accounts[14], 26676, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[14], 1000, {from: accounts[14]});

result = await instance.transfer(accounts[3],824,{from:accounts[0]});
await instance.batchTransfer([accounts[55],accounts[34],accounts[52],accounts[13],accounts[51],accounts[39],accounts[56],accounts[32],accounts[7]],7413,{from:accounts[0]});

});
it('test 6',async() => {

await instance.approve(accounts[122], 34926, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[122], 1000, {from: accounts[122]});

await instance.batchTransfer([accounts[59],accounts[59],accounts[66],accounts[81]],2716,{from:accounts[0]});

result = await instance.transfer(accounts[5],942,{from:accounts[4]});
});
it('test 7',async() => {

await instance.approve(accounts[42], 29166, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[42], 1000, {from: accounts[42]});

result = await instance.transfer(accounts[4],798,{from:accounts[1]});
await instance.batchTransfer([accounts[32],accounts[6],accounts[33],accounts[25],accounts[99],accounts[64],accounts[46],accounts[82],accounts[29]],9483,{from:accounts[0]});

});
it('test 8',async() => {
result = await instance.transfer(accounts[1],255,{from:accounts[2]});
await instance.batchTransfer([accounts[34],accounts[98],accounts[8],accounts[54],accounts[83],accounts[65]],3047,{from:accounts[0]});


await instance.approve(accounts[2], 24587, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[2], 1000, {from: accounts[2]});

});
it('test 9',async() => {
await instance.batchTransfer([accounts[15],accounts[53],accounts[48],accounts[65],accounts[75],accounts[65]],9309,{from:accounts[0]});


await instance.approve(accounts[67], 36983, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[67], 1000, {from: accounts[67]});

result = await instance.transfer(accounts[1],363,{from:accounts[2]});
});
it('test 10',async() => {

await instance.approve(accounts[58], 35085, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[58], 1000, {from: accounts[58]});

await instance.batchTransfer([accounts[24],accounts[61],accounts[16],accounts[99],accounts[62],accounts[23],accounts[86]],1107,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[1],996,{from:accounts[2]});
});
it('test 11',async() => {

await instance.approve(accounts[109], 33880, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[109], 1000, {from: accounts[109]});

await instance.batchTransfer([accounts[8]],1261,{from:accounts[0]});

result = await instance.transfer(accounts[2],745,{from:accounts[2]});
});
it('test 12',async() => {
await instance.batchTransfer([accounts[88],accounts[27],accounts[22],accounts[42],accounts[96],accounts[31],accounts[2]],3121,{from:accounts[0]});


await instance.approve(accounts[27], 25409, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[27], 1000, {from: accounts[27]});

result = await instance.transfer(accounts[0],853,{from:accounts[4]});
});
it('test 13',async() => {

await instance.approve(accounts[189], 28903, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[189], 1000, {from: accounts[189]});

await instance.batchTransfer([accounts[74],accounts[15]],9784,{from:accounts[0]});

result = await instance.transfer(accounts[1],339,{from:accounts[2]});
});
it('test 14',async() => {

await instance.approve(accounts[18], 29247, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[18], 1000, {from: accounts[18]});

result = await instance.transfer(accounts[1],520,{from:accounts[0]});
await instance.batchTransfer([accounts[60],accounts[80],accounts[74],accounts[3],accounts[66]],8871,{from:accounts[0]});

});
it('test 15',async() => {

await instance.approve(accounts[72], 22135, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[72], 1000, {from: accounts[72]});

await instance.batchTransfer([accounts[16],accounts[53],accounts[70],accounts[11],accounts[35],accounts[46],accounts[73],accounts[7],accounts[29]],4271,{from:accounts[0]});

result = await instance.transfer(accounts[2],509,{from:accounts[5]});
});
it('test 16',async() => {
result = await instance.transfer(accounts[2],273,{from:accounts[4]});

await instance.approve(accounts[76], 36709, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[76], 1000, {from: accounts[76]});

await instance.batchTransfer([accounts[7],accounts[100],accounts[56],accounts[94],accounts[56],accounts[63],accounts[31],accounts[28],accounts[78]],2707,{from:accounts[0]});

});
it('test 17',async() => {

await instance.approve(accounts[178], 38719, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[178], 1000, {from: accounts[178]});

result = await instance.transfer(accounts[0],809,{from:accounts[2]});
await instance.batchTransfer([accounts[98],accounts[8],accounts[74],accounts[27],accounts[54],accounts[99],accounts[33]],9602,{from:accounts[0]});

});
it('test 18',async() => {
await instance.batchTransfer([accounts[38],accounts[95],accounts[84]],8934,{from:accounts[0]});

result = await instance.transfer(accounts[4],285,{from:accounts[0]});

await instance.approve(accounts[2], 30749, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[2], 1000, {from: accounts[2]});

});
it('test 19',async() => {
result = await instance.transfer(accounts[4],810,{from:accounts[5]});
await instance.batchTransfer([accounts[28],accounts[56],accounts[10],accounts[31],accounts[48],accounts[10],accounts[63],accounts[60],accounts[45]],3686,{from:accounts[0]});


await instance.approve(accounts[162], 20046, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[162], 1000, {from: accounts[162]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});

await instance.approve(accounts[114], 26283, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[114], 1000, {from: accounts[114]});

await instance.batchTransfer([accounts[100],accounts[88],accounts[32],accounts[89],accounts[58],accounts[28],accounts[47],accounts[70],accounts[85],accounts[100]],4374,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[3],667,{from:accounts[4]});
});
it('test 21',async() => {
result = await instance.transfer(accounts[0],610,{from:accounts[0]});
await instance.batchTransfer([accounts[5],accounts[94],accounts[100],accounts[29],accounts[24],accounts[12]],4358,{from:accounts[0]});


await instance.approve(accounts[101], 21141, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[101], 1000, {from: accounts[101]});

});
it('test 22',async() => {
result = await instance.transfer(accounts[3],272,{from:accounts[5]});

await instance.approve(accounts[2], 34305, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[2], 1000, {from: accounts[2]});

await instance.batchTransfer([accounts[74],accounts[93],accounts[37]],8074,{from:accounts[0]});

});
it('test 23',async() => {
await instance.batchTransfer([accounts[97],accounts[48],accounts[94],accounts[86],accounts[79],accounts[66],accounts[78]],9778,{from:accounts[0]});


await instance.approve(accounts[119], 32344, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[119], 1000, {from: accounts[119]});

result = await instance.transfer(accounts[4],889,{from:accounts[5]});
});
it('test 24',async() => {
await instance.batchTransfer([accounts[10],accounts[5],accounts[54]],4571,{from:accounts[0]});


await instance.approve(accounts[73], 30971, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[73], 1000, {from: accounts[73]});

result = await instance.transfer(accounts[0],964,{from:accounts[4]});
});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 25',async() => {
await instance.batchTransfer([accounts[33],accounts[85],accounts[68],accounts[7],accounts[95],accounts[17],accounts[19]],5560,{from:accounts[0]});


await instance.approve(accounts[168], 36746, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[168], 1000, {from: accounts[168]});

result = await instance.transfer(accounts[1],308,{from:accounts[4]});
});
it('test 26',async() => {
await instance.batchTransfer([accounts[4],accounts[20],accounts[3],accounts[20],accounts[38],accounts[15]],4746,{from:accounts[0]});


await instance.approve(accounts[194], 25450, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[194], 1000, {from: accounts[194]});

result = await instance.transfer(accounts[3],873,{from:accounts[0]});
});
it('test 27',async() => {
await instance.batchTransfer([accounts[66],accounts[59],accounts[12],accounts[91],accounts[42]],6743,{from:accounts[0]});


await instance.approve(accounts[8], 36650, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[8], 1000, {from: accounts[8]});

result = await instance.transfer(accounts[1],256,{from:accounts[5]});
});
it('test 28',async() => {

await instance.approve(accounts[176], 21250, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[176], 1000, {from: accounts[176]});

result = await instance.transfer(accounts[2],480,{from:accounts[0]});
await instance.batchTransfer([accounts[49],accounts[6],accounts[99],accounts[74],accounts[87],accounts[16],accounts[16],accounts[62]],8795,{from:accounts[0]});

});
it('test 29',async() => {
result = await instance.transfer(accounts[1],669,{from:accounts[5]});
await instance.batchTransfer([accounts[77],accounts[52],accounts[91],accounts[77]],9095,{from:accounts[0]});


await instance.approve(accounts[182], 32218, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[182], 1000, {from: accounts[182]});

});
});
