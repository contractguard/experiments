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
result = await instance.transfer(accounts[4],748,{from:accounts[0]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[58], 27731, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[58], 1000, {from: accounts[58]});

await instance.batchTransfer([accounts[45]],5216,{from:accounts[0]});

});
it('test 1',async() => {
result = await instance.transfer(accounts[4],945,{from:accounts[0]});
await instance.batchTransfer([accounts[73],accounts[41],accounts[53],accounts[51],accounts[33],accounts[13],accounts[38],accounts[21],accounts[72],accounts[33]],7013,{from:accounts[0]});


await instance.approve(accounts[150], 22442, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[150], 1000, {from: accounts[150]});

});
it('test 2',async() => {
await instance.batchTransfer([accounts[81],accounts[21]],3151,{from:accounts[0]});

result = await instance.transfer(accounts[2],813,{from:accounts[5]});

await instance.approve(accounts[67], 25727, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[67], 1000, {from: accounts[67]});

});
it('test 3',async() => {
result = await instance.transfer(accounts[5],928,{from:accounts[2]});
await instance.batchTransfer([accounts[44],accounts[48],accounts[13],accounts[46],accounts[47],accounts[64],accounts[64],accounts[41]],2248,{from:accounts[0]});


await instance.approve(accounts[79], 39985, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[79], 1000, {from: accounts[79]});

});
it('test 4',async() => {

await instance.approve(accounts[172], 33691, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[172], 1000, {from: accounts[172]});

result = await instance.transfer(accounts[2],523,{from:accounts[3]});
await instance.batchTransfer([accounts[10],accounts[70],accounts[42],accounts[44],accounts[81],accounts[38],accounts[43]],1428,{from:accounts[0]});

});
it('test 5',async() => {

await instance.approve(accounts[30], 34465, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[30], 1000, {from: accounts[30]});

result = await instance.transfer(accounts[2],804,{from:accounts[0]});
await instance.batchTransfer([accounts[13],accounts[100],accounts[55]],3663,{from:accounts[0]});

});
it('test 6',async() => {

await instance.approve(accounts[65], 27243, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[65], 1000, {from: accounts[65]});

result = await instance.transfer(accounts[0],660,{from:accounts[5]});
await instance.batchTransfer([accounts[19],accounts[15],accounts[2],accounts[11],accounts[3],accounts[100],accounts[23],accounts[22],accounts[94],accounts[39]],5423,{from:accounts[0]});

});
it('test 7',async() => {
await instance.batchTransfer([accounts[10],accounts[88],accounts[35],accounts[55],accounts[84],accounts[27],accounts[71]],7080,{from:accounts[0]});


await instance.approve(accounts[86], 35530, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[86], 1000, {from: accounts[86]});

result = await instance.transfer(accounts[1],703,{from:accounts[4]});
});
it('test 8',async() => {
result = await instance.transfer(accounts[2],799,{from:accounts[0]});

await instance.approve(accounts[92], 33730, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[92], 1000, {from: accounts[92]});

await instance.batchTransfer([accounts[86]],8823,{from:accounts[0]});

});
it('test 9',async() => {
result = await instance.transfer(accounts[1],361,{from:accounts[4]});

await instance.approve(accounts[193], 25861, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[193], 1000, {from: accounts[193]});

await instance.batchTransfer([accounts[1],accounts[16],accounts[74]],7112,{from:accounts[0]});

});
it('test 10',async() => {
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[91], 34114, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[91], 1000, {from: accounts[91]});

await instance.batchTransfer([accounts[3],accounts[67],accounts[39],accounts[79],accounts[10],accounts[82],accounts[46],accounts[30]],8572,{from:accounts[0]});

result = await instance.transfer(accounts[3],713,{from:accounts[1]});
});
it('test 11',async() => {

await instance.approve(accounts[24], 25013, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[24], 1000, {from: accounts[24]});

result = await instance.transfer(accounts[0],636,{from:accounts[0]});
await instance.batchTransfer([accounts[22],accounts[90],accounts[67],accounts[37],accounts[2],accounts[10],accounts[76],accounts[77],accounts[23]],2395,{from:accounts[0]});

});
it('test 12',async() => {
await instance.batchTransfer([accounts[44],accounts[73],accounts[15],accounts[2]],2052,{from:accounts[0]});


await instance.approve(accounts[108], 23560, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[108], 1000, {from: accounts[108]});

result = await instance.transfer(accounts[4],769,{from:accounts[0]});
});
it('test 13',async() => {

await instance.approve(accounts[156], 33409, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[156], 1000, {from: accounts[156]});

await instance.batchTransfer([accounts[71],accounts[81],accounts[56],accounts[16],accounts[95]],6902,{from:accounts[0]});

result = await instance.transfer(accounts[2],665,{from:accounts[0]});
});
it('test 14',async() => {

await instance.approve(accounts[161], 25592, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[161], 1000, {from: accounts[161]});

await instance.batchTransfer([accounts[99],accounts[21],accounts[76],accounts[42],accounts[83]],5309,{from:accounts[0]});

result = await instance.transfer(accounts[4],321,{from:accounts[4]});
});
it('test 15',async() => {
result = await instance.transfer(accounts[3],976,{from:accounts[4]});
await instance.batchTransfer([accounts[20],accounts[10],accounts[51],accounts[61],accounts[63],accounts[95],accounts[24],accounts[57],accounts[31]],6886,{from:accounts[0]});


await instance.approve(accounts[146], 38695, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[146], 1000, {from: accounts[146]});

});
it('test 16',async() => {

await instance.approve(accounts[28], 28445, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[28], 1000, {from: accounts[28]});

await instance.batchTransfer([accounts[87],accounts[73],accounts[95]],2304,{from:accounts[0]});

result = await instance.transfer(accounts[4],781,{from:accounts[1]});
});
it('test 17',async() => {
result = await instance.transfer(accounts[4],907,{from:accounts[3]});

await instance.approve(accounts[123], 22760, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[123], 1000, {from: accounts[123]});

await instance.batchTransfer([accounts[52],accounts[72],accounts[74],accounts[93],accounts[36],accounts[13],accounts[81],accounts[15]],4711,{from:accounts[0]});

});
it('test 18',async() => {

await instance.approve(accounts[79], 34350, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[79], 1000, {from: accounts[79]});

await instance.batchTransfer([accounts[5],accounts[27],accounts[5],accounts[24],accounts[88]],9627,{from:accounts[0]});

result = await instance.transfer(accounts[4],898,{from:accounts[3]});
});
it('test 19',async() => {

await instance.approve(accounts[79], 32462, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[79], 1000, {from: accounts[79]});

await instance.batchTransfer([accounts[15],accounts[45],accounts[27]],3552,{from:accounts[0]});

result = await instance.transfer(accounts[3],532,{from:accounts[5]});
});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[2],890,{from:accounts[5]});

await instance.approve(accounts[91], 34849, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[91], 1000, {from: accounts[91]});

await instance.batchTransfer([accounts[47]],1256,{from:accounts[0]});

});
it('test 21',async() => {

await instance.approve(accounts[24], 27164, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[24], 1000, {from: accounts[24]});

result = await instance.transfer(accounts[3],647,{from:accounts[0]});
await instance.batchTransfer([accounts[73],accounts[11],accounts[10],accounts[84],accounts[97],accounts[65],accounts[17],accounts[87],accounts[10],accounts[49]],7102,{from:accounts[0]});

});
it('test 22',async() => {
result = await instance.transfer(accounts[0],923,{from:accounts[4]});

await instance.approve(accounts[124], 39884, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[124], 1000, {from: accounts[124]});

await instance.batchTransfer([accounts[4],accounts[82],accounts[36],accounts[32],accounts[72],accounts[60]],3678,{from:accounts[0]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 23',async() => {
await instance.batchTransfer([accounts[74]],9863,{from:accounts[0]});

result = await instance.transfer(accounts[2],938,{from:accounts[3]});

await instance.approve(accounts[41], 25984, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[41], 1000, {from: accounts[41]});

});
it('test 24',async() => {
result = await instance.transfer(accounts[4],402,{from:accounts[1]});

await instance.approve(accounts[182], 20193, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[182], 1000, {from: accounts[182]});

await instance.batchTransfer([accounts[54],accounts[19],accounts[93],accounts[43],accounts[32],accounts[16]],8496,{from:accounts[0]});

});
it('test 25',async() => {

await instance.approve(accounts[2], 27764, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[2], 1000, {from: accounts[2]});

await instance.batchTransfer([accounts[78],accounts[60],accounts[14],accounts[14]],1161,{from:accounts[0]});

result = await instance.transfer(accounts[3],871,{from:accounts[4]});
});
it('test 26',async() => {
await instance.batchTransfer([accounts[76],accounts[97],accounts[8],accounts[82]],3941,{from:accounts[0]});


await instance.approve(accounts[156], 21205, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[156], 1000, {from: accounts[156]});

result = await instance.transfer(accounts[3],770,{from:accounts[3]});
});
it('test 27',async() => {
result = await instance.transfer(accounts[2],348,{from:accounts[3]});

await instance.approve(accounts[45], 39586, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[45], 1000, {from: accounts[45]});

await instance.batchTransfer([accounts[7],accounts[85],accounts[23],accounts[100],accounts[56],accounts[26],accounts[57],accounts[34],accounts[86],accounts[32]],4758,{from:accounts[0]});

});
it('test 28',async() => {
result = await instance.transfer(accounts[0],594,{from:accounts[5]});

await instance.approve(accounts[64], 28912, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[64], 1000, {from: accounts[64]});

await instance.batchTransfer([accounts[5],accounts[70],accounts[77],accounts[66],accounts[22],accounts[83],accounts[8],accounts[97]],9472,{from:accounts[0]});

});
it('test 29',async() => {
result = await instance.transfer(accounts[1],681,{from:accounts[0]});
await instance.batchTransfer([accounts[52],accounts[56],accounts[16],accounts[10],accounts[59],accounts[38]],1572,{from:accounts[0]});


await instance.approve(accounts[26], 38238, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[26], 1000, {from: accounts[26]});

});
});
