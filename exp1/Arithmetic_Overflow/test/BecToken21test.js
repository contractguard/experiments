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
result = await instance.transfer(accounts[2],782,{from:accounts[3]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[15], 25582, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[15], 1000, {from: accounts[15]});

await instance.batchTransfer([accounts[92],accounts[99],accounts[22],accounts[20],accounts[53],accounts[17],accounts[93]],4601,{from:accounts[0]});

});
it('test 1',async() => {

await instance.approve(accounts[103], 28387, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[103], 1000, {from: accounts[103]});

await instance.batchTransfer([accounts[33],accounts[67],accounts[29],accounts[33],accounts[67]],4351,{from:accounts[0]});

result = await instance.transfer(accounts[3],924,{from:accounts[0]});
});
it('test 2',async() => {

await instance.approve(accounts[180], 30639, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[180], 1000, {from: accounts[180]});

await instance.batchTransfer([accounts[18],accounts[89],accounts[89],accounts[41],accounts[16],accounts[4]],8569,{from:accounts[0]});

result = await instance.transfer(accounts[4],827,{from:accounts[0]});
});
it('test 3',async() => {
await instance.batchTransfer([accounts[85],accounts[82],accounts[23],accounts[99],accounts[57]],4480,{from:accounts[0]});


await instance.approve(accounts[185], 27622, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[185], 1000, {from: accounts[185]});

result = await instance.transfer(accounts[3],624,{from:accounts[3]});
});
it('test 4',async() => {
result = await instance.transfer(accounts[2],659,{from:accounts[0]});

await instance.approve(accounts[108], 38932, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[108], 1000, {from: accounts[108]});

await instance.batchTransfer([accounts[8],accounts[19],accounts[63],accounts[87],accounts[79],accounts[62],accounts[56]],9077,{from:accounts[0]});

});
it('test 5',async() => {
result = await instance.transfer(accounts[5],824,{from:accounts[0]});

await instance.approve(accounts[162], 38369, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[162], 1000, {from: accounts[162]});

await instance.batchTransfer([accounts[86],accounts[60],accounts[82],accounts[37]],8582,{from:accounts[0]});

});
it('test 6',async() => {
await instance.batchTransfer([accounts[47],accounts[8],accounts[53],accounts[31],accounts[67],accounts[65],accounts[61],accounts[68],accounts[82],accounts[87]],1666,{from:accounts[0]});

result = await instance.transfer(accounts[0],434,{from:accounts[4]});

await instance.approve(accounts[125], 31429, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[125], 1000, {from: accounts[125]});

});
it('test 7',async() => {
result = await instance.transfer(accounts[0],685,{from:accounts[0]});
await instance.batchTransfer([accounts[65]],5856,{from:accounts[0]});


await instance.approve(accounts[35], 30344, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[35], 1000, {from: accounts[35]});

});
it('test 8',async() => {
result = await instance.transfer(accounts[1],995,{from:accounts[2]});
await instance.batchTransfer([accounts[37],accounts[11],accounts[62],accounts[17],accounts[96],accounts[18]],4319,{from:accounts[0]});


await instance.approve(accounts[155], 39240, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[155], 1000, {from: accounts[155]});

});
it('test 9',async() => {
result = await instance.transfer(accounts[3],569,{from:accounts[2]});

await instance.approve(accounts[163], 33930, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[163], 1000, {from: accounts[163]});

await instance.batchTransfer([accounts[5],accounts[80],accounts[69]],3895,{from:accounts[0]});

});
it('test 10',async() => {

await instance.approve(accounts[119], 38845, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[119], 1000, {from: accounts[119]});

result = await instance.transfer(accounts[2],245,{from:accounts[3]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[6],accounts[9],accounts[67],accounts[99],accounts[54],accounts[41],accounts[50],accounts[54],accounts[85]],5832,{from:accounts[0]});

});
it('test 11',async() => {

await instance.approve(accounts[30], 35786, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[30], 1000, {from: accounts[30]});

result = await instance.transfer(accounts[3],775,{from:accounts[2]});
await instance.batchTransfer([accounts[27],accounts[82],accounts[68]],1612,{from:accounts[0]});

});
it('test 12',async() => {

await instance.approve(accounts[125], 22175, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[125], 1000, {from: accounts[125]});

await instance.batchTransfer([accounts[44],accounts[50],accounts[97],accounts[25],accounts[7],accounts[79],accounts[33],accounts[71],accounts[96]],5998,{from:accounts[0]});

result = await instance.transfer(accounts[5],616,{from:accounts[1]});
});
it('test 13',async() => {
result = await instance.transfer(accounts[0],909,{from:accounts[2]});
await instance.batchTransfer([accounts[26],accounts[65]],5494,{from:accounts[0]});


await instance.approve(accounts[180], 22900, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[180], 1000, {from: accounts[180]});

});
it('test 14',async() => {

await instance.approve(accounts[30], 28755, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[30], 1000, {from: accounts[30]});

await instance.batchTransfer([accounts[26],accounts[72],accounts[39],accounts[49],accounts[92],accounts[18],accounts[54],accounts[31],accounts[61],accounts[68]],6946,{from:accounts[0]});

result = await instance.transfer(accounts[5],712,{from:accounts[3]});
});
it('test 15',async() => {
result = await instance.transfer(accounts[1],236,{from:accounts[1]});

await instance.approve(accounts[123], 27157, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[123], 1000, {from: accounts[123]});

await instance.batchTransfer([accounts[52],accounts[42],accounts[40],accounts[5],accounts[26]],7053,{from:accounts[0]});

});
it('test 16',async() => {
result = await instance.transfer(accounts[0],760,{from:accounts[4]});
await instance.batchTransfer([accounts[65],accounts[46],accounts[35],accounts[77],accounts[81],accounts[80],accounts[11],accounts[36]],4704,{from:accounts[0]});


await instance.approve(accounts[48], 23400, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[48], 1000, {from: accounts[48]});

});
it('test 17',async() => {
result = await instance.transfer(accounts[2],906,{from:accounts[3]});

await instance.approve(accounts[155], 27065, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[155], 1000, {from: accounts[155]});

await instance.batchTransfer([accounts[60],accounts[16],accounts[57],accounts[84],accounts[21],accounts[26],accounts[80]],7175,{from:accounts[0]});

});
it('test 18',async() => {
await instance.batchTransfer([accounts[7],accounts[38]],3878,{from:accounts[0]});


await instance.approve(accounts[108], 35534, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[108], 1000, {from: accounts[108]});

result = await instance.transfer(accounts[1],923,{from:accounts[5]});
});
it('test 19',async() => {

await instance.approve(accounts[31], 26250, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[31], 1000, {from: accounts[31]});

await instance.batchTransfer([accounts[1],accounts[60],accounts[58],accounts[3],accounts[11],accounts[49],accounts[21]],2534,{from:accounts[0]});

result = await instance.transfer(accounts[4],437,{from:accounts[5]});
});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});

await instance.approve(accounts[48], 29620, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[48], 1000, {from: accounts[48]});

result = await instance.transfer(accounts[2],289,{from:accounts[4]});
await instance.batchTransfer([accounts[28],accounts[18],accounts[21]],6886,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 21',async() => {
result = await instance.transfer(accounts[0],644,{from:accounts[4]});

await instance.approve(accounts[146], 24075, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[146], 1000, {from: accounts[146]});

await instance.batchTransfer([accounts[72],accounts[41],accounts[82],accounts[27],accounts[26],accounts[97]],9453,{from:accounts[0]});

});
it('test 22',async() => {
await instance.batchTransfer([accounts[20],accounts[87],accounts[3]],2754,{from:accounts[0]});

result = await instance.transfer(accounts[5],268,{from:accounts[1]});

await instance.approve(accounts[9], 27563, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[9], 1000, {from: accounts[9]});

});
it('test 23',async() => {

await instance.approve(accounts[139], 22642, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[139], 1000, {from: accounts[139]});

result = await instance.transfer(accounts[1],848,{from:accounts[4]});
await instance.batchTransfer([accounts[70],accounts[97],accounts[25],accounts[55],accounts[21]],8080,{from:accounts[0]});

});
it('test 24',async() => {

await instance.approve(accounts[118], 36136, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[118], 1000, {from: accounts[118]});

result = await instance.transfer(accounts[5],937,{from:accounts[4]});
await instance.batchTransfer([accounts[27],accounts[67],accounts[70]],9079,{from:accounts[0]});

});
it('test 25',async() => {

await instance.approve(accounts[122], 26907, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[122], 1000, {from: accounts[122]});

await instance.batchTransfer([accounts[29],accounts[47],accounts[94]],3807,{from:accounts[0]});

result = await instance.transfer(accounts[4],646,{from:accounts[3]});
});
it('test 26',async() => {

await instance.approve(accounts[13], 31620, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[13], 1000, {from: accounts[13]});

result = await instance.transfer(accounts[0],746,{from:accounts[3]});
await instance.batchTransfer([accounts[1],accounts[45]],7432,{from:accounts[0]});

});
it('test 27',async() => {

await instance.approve(accounts[39], 37049, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[39], 1000, {from: accounts[39]});

result = await instance.transfer(accounts[2],948,{from:accounts[2]});
await instance.batchTransfer([accounts[24],accounts[13],accounts[91],accounts[99],accounts[41],accounts[83],accounts[45],accounts[18]],6113,{from:accounts[0]});

});
it('test 28',async() => {
await instance.batchTransfer([accounts[74],accounts[96],accounts[79],accounts[45],accounts[23],accounts[19]],3651,{from:accounts[0]});

result = await instance.transfer(accounts[1],461,{from:accounts[1]});

await instance.approve(accounts[137], 27769, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[137], 1000, {from: accounts[137]});

});
it('test 29',async() => {
result = await instance.transfer(accounts[0],202,{from:accounts[3]});
await instance.batchTransfer([accounts[59],accounts[83],accounts[47],accounts[18],accounts[8],accounts[62]],1083,{from:accounts[0]});


await instance.approve(accounts[175], 25396, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[175], 1000, {from: accounts[175]});

});
});
