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

await instance.batchTransfer([accounts[64],accounts[36],accounts[69],accounts[32],accounts[19],accounts[2]],8933,{from:accounts[0]});

result = await instance.transfer(accounts[3],989,{from:accounts[4]});

await instance.approve(accounts[132], 24797, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[132], 1000, {from: accounts[132]});

});
it('test 1',async() => {

await instance.approve(accounts[145], 33199, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[145], 1000, {from: accounts[145]});

result = await instance.transfer(accounts[2],981,{from:accounts[1]});
await instance.batchTransfer([accounts[48],accounts[58],accounts[78],accounts[19],accounts[100],accounts[32],accounts[31],accounts[60],accounts[22]],8085,{from:accounts[0]});

});
it('test 2',async() => {

await instance.approve(accounts[18], 26948, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[18], 1000, {from: accounts[18]});

result = await instance.transfer(accounts[2],387,{from:accounts[5]});
await instance.batchTransfer([accounts[46],accounts[31],accounts[24],accounts[65],accounts[94],accounts[25],accounts[100],accounts[46],accounts[7]],7670,{from:accounts[0]});

});
it('test 3',async() => {

await instance.approve(accounts[50], 21024, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[50], 1000, {from: accounts[50]});

await instance.batchTransfer([accounts[99],accounts[46],accounts[65]],4892,{from:accounts[0]});

result = await instance.transfer(accounts[1],501,{from:accounts[1]});
});
it('test 4',async() => {
result = await instance.transfer(accounts[1],626,{from:accounts[2]});
await instance.batchTransfer([accounts[53],accounts[32],accounts[34],accounts[93],accounts[98],accounts[48],accounts[43],accounts[68]],8340,{from:accounts[0]});


await instance.approve(accounts[149], 38098, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[149], 1000, {from: accounts[149]});

});
it('test 5',async() => {

await instance.approve(accounts[125], 33055, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[125], 1000, {from: accounts[125]});

result = await instance.transfer(accounts[1],545,{from:accounts[2]});
await instance.batchTransfer([accounts[89],accounts[45],accounts[35],accounts[49],accounts[87],accounts[4]],8662,{from:accounts[0]});

});
it('test 6',async() => {
result = await instance.transfer(accounts[5],597,{from:accounts[1]});
await instance.batchTransfer([accounts[37]],6975,{from:accounts[0]});


await instance.approve(accounts[86], 29957, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[86], 1000, {from: accounts[86]});

});
it('test 7',async() => {
result = await instance.transfer(accounts[5],882,{from:accounts[2]});
await instance.batchTransfer([accounts[59],accounts[3],accounts[52]],4619,{from:accounts[0]});


await instance.approve(accounts[57], 23410, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[57], 1000, {from: accounts[57]});

});
it('test 8',async() => {

await instance.approve(accounts[51], 20879, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[51], 1000, {from: accounts[51]});

result = await instance.transfer(accounts[2],915,{from:accounts[1]});
await instance.batchTransfer([accounts[41],accounts[66],accounts[36],accounts[13]],6155,{from:accounts[0]});

});
it('test 9',async() => {
result = await instance.transfer(accounts[3],635,{from:accounts[3]});

await instance.approve(accounts[53], 21537, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[53], 1000, {from: accounts[53]});

await instance.batchTransfer([accounts[96],accounts[60],accounts[87],accounts[31],accounts[79]],5503,{from:accounts[0]});

});
it('test 10',async() => {
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[0],936,{from:accounts[4]});
await instance.batchTransfer([accounts[24],accounts[33],accounts[63],accounts[73],accounts[45],accounts[51],accounts[89]],7456,{from:accounts[0]});


await instance.approve(accounts[115], 36008, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[115], 1000, {from: accounts[115]});

});
it('test 11',async() => {
await instance.batchTransfer([accounts[51],accounts[52],accounts[35],accounts[91],accounts[74],accounts[78],accounts[13],accounts[26],accounts[88],accounts[70]],6125,{from:accounts[0]});

result = await instance.transfer(accounts[1],515,{from:accounts[3]});

await instance.approve(accounts[90], 35771, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[90], 1000, {from: accounts[90]});

});
it('test 12',async() => {
await instance.batchTransfer([accounts[31],accounts[32],accounts[66],accounts[85]],1469,{from:accounts[0]});

result = await instance.transfer(accounts[4],298,{from:accounts[0]});

await instance.approve(accounts[37], 26887, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[37], 1000, {from: accounts[37]});

});
it('test 13',async() => {
await instance.batchTransfer([accounts[37],accounts[97],accounts[72],accounts[21]],2937,{from:accounts[0]});


await instance.approve(accounts[101], 39784, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[101], 1000, {from: accounts[101]});

result = await instance.transfer(accounts[4],889,{from:accounts[3]});
});
it('test 14',async() => {
await instance.batchTransfer([accounts[89],accounts[45],accounts[14],accounts[5],accounts[21],accounts[61]],5469,{from:accounts[0]});

result = await instance.transfer(accounts[0],583,{from:accounts[5]});

await instance.approve(accounts[166], 36619, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[166], 1000, {from: accounts[166]});

});
it('test 15',async() => {

await instance.approve(accounts[39], 25497, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[39], 1000, {from: accounts[39]});

result = await instance.transfer(accounts[1],747,{from:accounts[5]});
await instance.batchTransfer([accounts[39],accounts[27],accounts[44],accounts[45]],3169,{from:accounts[0]});

});
it('test 16',async() => {

await instance.approve(accounts[98], 35807, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[98], 1000, {from: accounts[98]});

await instance.batchTransfer([accounts[61],accounts[95],accounts[64],accounts[43],accounts[3],accounts[75]],7371,{from:accounts[0]});

result = await instance.transfer(accounts[1],628,{from:accounts[3]});
});
it('test 17',async() => {

await instance.approve(accounts[15], 35654, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[15], 1000, {from: accounts[15]});

result = await instance.transfer(accounts[2],941,{from:accounts[4]});
await instance.batchTransfer([accounts[69],accounts[5],accounts[53],accounts[83],accounts[41],accounts[75],accounts[11],accounts[58],accounts[83],accounts[79]],9368,{from:accounts[0]});

});
it('test 18',async() => {
await instance.batchTransfer([accounts[95],accounts[14],accounts[63],accounts[91],accounts[52],accounts[18],accounts[35]],9591,{from:accounts[0]});


await instance.approve(accounts[183], 39048, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[183], 1000, {from: accounts[183]});

result = await instance.transfer(accounts[4],935,{from:accounts[1]});
});
it('test 19',async() => {

await instance.approve(accounts[137], 35749, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[137], 1000, {from: accounts[137]});

await instance.batchTransfer([accounts[29]],6248,{from:accounts[0]});

result = await instance.transfer(accounts[3],447,{from:accounts[3]});
});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
result = await instance.transfer(accounts[5],497,{from:accounts[0]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[80], 30198, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[80], 1000, {from: accounts[80]});

await instance.batchTransfer([accounts[43],accounts[5],accounts[72],accounts[44],accounts[8],accounts[64],accounts[54]],7687,{from:accounts[0]});

});
it('test 21',async() => {
result = await instance.transfer(accounts[5],665,{from:accounts[4]});

await instance.approve(accounts[52], 36093, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[52], 1000, {from: accounts[52]});

await instance.batchTransfer([accounts[46],accounts[56],accounts[43],accounts[52],accounts[73],accounts[83],accounts[24],accounts[82],accounts[77]],9680,{from:accounts[0]});

});
it('test 22',async() => {
result = await instance.transfer(accounts[3],929,{from:accounts[5]});

await instance.approve(accounts[91], 38331, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[91], 1000, {from: accounts[91]});

await instance.batchTransfer([accounts[72],accounts[31],accounts[85],accounts[92],accounts[27],accounts[12],accounts[11]],1837,{from:accounts[0]});

});
it('test 23',async() => {

await instance.approve(accounts[14], 37415, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[14], 1000, {from: accounts[14]});

result = await instance.transfer(accounts[3],350,{from:accounts[4]});
await instance.batchTransfer([accounts[69],accounts[25],accounts[73],accounts[53]],3013,{from:accounts[0]});

});
it('test 24',async() => {

await instance.approve(accounts[38], 24236, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[38], 1000, {from: accounts[38]});

result = await instance.transfer(accounts[4],935,{from:accounts[2]});
await instance.batchTransfer([accounts[12],accounts[75],accounts[60],accounts[68],accounts[18],accounts[61],accounts[64]],2296,{from:accounts[0]});

});
it('test 25',async() => {

await instance.approve(accounts[125], 39816, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[125], 1000, {from: accounts[125]});

await instance.batchTransfer([accounts[22],accounts[90],accounts[84],accounts[95],accounts[61],accounts[31],accounts[98],accounts[91],accounts[12],accounts[63]],7312,{from:accounts[0]});

result = await instance.transfer(accounts[3],868,{from:accounts[3]});
});
it('test 26',async() => {

await instance.approve(accounts[111], 34212, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[111], 1000, {from: accounts[111]});

await instance.batchTransfer([accounts[66]],9295,{from:accounts[0]});

result = await instance.transfer(accounts[0],445,{from:accounts[0]});
});
it('test 27',async() => {

await instance.approve(accounts[92], 31163, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[92], 1000, {from: accounts[92]});

result = await instance.transfer(accounts[4],612,{from:accounts[1]});
await instance.batchTransfer([accounts[78],accounts[54],accounts[68],accounts[66],accounts[76],accounts[13],accounts[56]],5435,{from:accounts[0]});

});
it('test 28',async() => {
await instance.batchTransfer([accounts[45]],8539,{from:accounts[0]});


await instance.approve(accounts[96], 27236, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[96], 1000, {from: accounts[96]});

result = await instance.transfer(accounts[2],726,{from:accounts[1]});
});
it('test 29',async() => {

await instance.approve(accounts[32], 29725, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[32], 1000, {from: accounts[32]});

result = await instance.transfer(accounts[4],544,{from:accounts[2]});
await instance.batchTransfer([accounts[86],accounts[65],accounts[17],accounts[50],accounts[72],accounts[95],accounts[37],accounts[3],accounts[8]],4768,{from:accounts[0]});

});
});
