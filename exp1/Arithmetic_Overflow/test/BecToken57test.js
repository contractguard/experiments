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
result = await instance.transfer(accounts[5],429,{from:accounts[3]});

await instance.approve(accounts[123], 23400, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[123], 1000, {from: accounts[123]});

await instance.batchTransfer([accounts[49]],6230,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 1',async() => {
await instance.batchTransfer([accounts[81],accounts[5],accounts[19],accounts[19],accounts[48],accounts[8],accounts[60],accounts[62],accounts[100]],7032,{from:accounts[0]});

result = await instance.transfer(accounts[2],899,{from:accounts[1]});

await instance.approve(accounts[150], 20023, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[150], 1000, {from: accounts[150]});

});
it('test 2',async() => {
await instance.batchTransfer([accounts[66],accounts[67],accounts[47],accounts[16],accounts[19]],4024,{from:accounts[0]});


await instance.approve(accounts[122], 27846, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[122], 1000, {from: accounts[122]});

result = await instance.transfer(accounts[5],591,{from:accounts[2]});
});
it('test 3',async() => {

await instance.approve(accounts[186], 39470, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[186], 1000, {from: accounts[186]});

result = await instance.transfer(accounts[5],303,{from:accounts[5]});
await instance.batchTransfer([accounts[51],accounts[20],accounts[97],accounts[5]],2768,{from:accounts[0]});

});
it('test 4',async() => {
result = await instance.transfer(accounts[5],699,{from:accounts[5]});

await instance.approve(accounts[66], 30827, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[66], 1000, {from: accounts[66]});

await instance.batchTransfer([accounts[24],accounts[87],accounts[64],accounts[28],accounts[34]],5862,{from:accounts[0]});

});
it('test 5',async() => {
await instance.batchTransfer([accounts[32],accounts[91]],1082,{from:accounts[0]});

result = await instance.transfer(accounts[3],486,{from:accounts[4]});

await instance.approve(accounts[129], 22854, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[129], 1000, {from: accounts[129]});

});
it('test 6',async() => {

await instance.approve(accounts[175], 31977, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[175], 1000, {from: accounts[175]});

await instance.batchTransfer([accounts[36]],9844,{from:accounts[0]});

result = await instance.transfer(accounts[2],511,{from:accounts[5]});
});
it('test 7',async() => {

await instance.approve(accounts[192], 37534, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[192], 1000, {from: accounts[192]});

result = await instance.transfer(accounts[0],515,{from:accounts[0]});
await instance.batchTransfer([accounts[40],accounts[16],accounts[60],accounts[18],accounts[83],accounts[48],accounts[96],accounts[69],accounts[96],accounts[94]],1516,{from:accounts[0]});

});
it('test 8',async() => {
result = await instance.transfer(accounts[3],526,{from:accounts[2]});
await instance.batchTransfer([accounts[24],accounts[3],accounts[18],accounts[31],accounts[76]],3981,{from:accounts[0]});


await instance.approve(accounts[67], 27756, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[67], 1000, {from: accounts[67]});

});
it('test 9',async() => {
await instance.batchTransfer([accounts[16],accounts[51],accounts[94]],4533,{from:accounts[0]});


await instance.approve(accounts[151], 32547, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[151], 1000, {from: accounts[151]});

result = await instance.transfer(accounts[1],214,{from:accounts[0]});
});
it('test 10',async() => {
result = await instance.transfer(accounts[5],780,{from:accounts[0]});

await instance.approve(accounts[154], 37142, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[154], 1000, {from: accounts[154]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[34],accounts[9],accounts[2],accounts[21],accounts[81],accounts[3]],1660,{from:accounts[0]});

});
it('test 11',async() => {

await instance.approve(accounts[173], 21537, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[173], 1000, {from: accounts[173]});

await instance.batchTransfer([accounts[63],accounts[52],accounts[51],accounts[82],accounts[100]],6146,{from:accounts[0]});

result = await instance.transfer(accounts[5],914,{from:accounts[3]});
});
it('test 12',async() => {

await instance.approve(accounts[83], 26766, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[83], 1000, {from: accounts[83]});

await instance.batchTransfer([accounts[3],accounts[56],accounts[68],accounts[93],accounts[57]],7481,{from:accounts[0]});

result = await instance.transfer(accounts[2],935,{from:accounts[3]});
});
it('test 13',async() => {
result = await instance.transfer(accounts[2],505,{from:accounts[0]});
await instance.batchTransfer([accounts[56],accounts[29],accounts[28],accounts[70],accounts[24],accounts[20],accounts[78],accounts[75],accounts[79]],3870,{from:accounts[0]});


await instance.approve(accounts[154], 28652, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[154], 1000, {from: accounts[154]});

});
it('test 14',async() => {
result = await instance.transfer(accounts[3],731,{from:accounts[3]});

await instance.approve(accounts[83], 29760, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[83], 1000, {from: accounts[83]});

await instance.batchTransfer([accounts[45]],2362,{from:accounts[0]});

});
it('test 15',async() => {

await instance.approve(accounts[7], 22299, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[7], 1000, {from: accounts[7]});

await instance.batchTransfer([accounts[76],accounts[95],accounts[60],accounts[45],accounts[91],accounts[97],accounts[85],accounts[97]],3196,{from:accounts[0]});

result = await instance.transfer(accounts[3],712,{from:accounts[4]});
});
it('test 16',async() => {
result = await instance.transfer(accounts[0],763,{from:accounts[0]});

await instance.approve(accounts[170], 30401, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[170], 1000, {from: accounts[170]});

await instance.batchTransfer([accounts[18],accounts[88],accounts[96],accounts[44],accounts[96]],8930,{from:accounts[0]});

});
it('test 17',async() => {
await instance.batchTransfer([accounts[45],accounts[88],accounts[69],accounts[91],accounts[21],accounts[46],accounts[89],accounts[73],accounts[5]],7026,{from:accounts[0]});

result = await instance.transfer(accounts[3],696,{from:accounts[2]});

await instance.approve(accounts[129], 25435, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[129], 1000, {from: accounts[129]});

});
it('test 18',async() => {
result = await instance.transfer(accounts[3],617,{from:accounts[1]});
await instance.batchTransfer([accounts[28],accounts[9],accounts[48],accounts[71],accounts[23],accounts[98],accounts[3],accounts[66]],5878,{from:accounts[0]});


await instance.approve(accounts[168], 20764, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[168], 1000, {from: accounts[168]});

});
it('test 19',async() => {
await instance.batchTransfer([accounts[71],accounts[27],accounts[4]],4348,{from:accounts[0]});


await instance.approve(accounts[172], 37779, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[172], 1000, {from: accounts[172]});

result = await instance.transfer(accounts[3],371,{from:accounts[1]});
});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});

await instance.approve(accounts[134], 24542, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[134], 1000, {from: accounts[134]});

await instance.batchTransfer([accounts[26]],2439,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[3],202,{from:accounts[4]});
});
it('test 21',async() => {
result = await instance.transfer(accounts[5],535,{from:accounts[1]});
await instance.batchTransfer([accounts[59]],3220,{from:accounts[0]});


await instance.approve(accounts[143], 21675, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[143], 1000, {from: accounts[143]});

});
it('test 22',async() => {
await instance.batchTransfer([accounts[33],accounts[84],accounts[70],accounts[54],accounts[85],accounts[80],accounts[36],accounts[59]],1442,{from:accounts[0]});


await instance.approve(accounts[179], 23057, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[179], 1000, {from: accounts[179]});

result = await instance.transfer(accounts[0],831,{from:accounts[5]});
});
it('test 23',async() => {
result = await instance.transfer(accounts[5],654,{from:accounts[1]});

await instance.approve(accounts[91], 24913, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[91], 1000, {from: accounts[91]});

await instance.batchTransfer([accounts[85],accounts[44],accounts[43],accounts[84],accounts[70],accounts[1],accounts[59],accounts[23],accounts[35]],7056,{from:accounts[0]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 24',async() => {

await instance.approve(accounts[196], 33450, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[196], 1000, {from: accounts[196]});

result = await instance.transfer(accounts[0],205,{from:accounts[5]});
await instance.batchTransfer([accounts[67],accounts[32]],4160,{from:accounts[0]});

});
it('test 25',async() => {

await instance.approve(accounts[199], 24836, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[199], 1000, {from: accounts[199]});

result = await instance.transfer(accounts[5],525,{from:accounts[4]});
await instance.batchTransfer([accounts[100],accounts[58],accounts[96],accounts[75]],7327,{from:accounts[0]});

});
it('test 26',async() => {
result = await instance.transfer(accounts[1],348,{from:accounts[1]});

await instance.approve(accounts[166], 21546, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[166], 1000, {from: accounts[166]});

await instance.batchTransfer([accounts[14],accounts[76],accounts[60]],9945,{from:accounts[0]});

});
it('test 27',async() => {
result = await instance.transfer(accounts[0],572,{from:accounts[4]});
await instance.batchTransfer([accounts[69],accounts[37],accounts[38],accounts[71],accounts[90],accounts[44],accounts[2],accounts[65],accounts[68],accounts[96]],3459,{from:accounts[0]});


await instance.approve(accounts[133], 31655, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[133], 1000, {from: accounts[133]});

});
it('test 28',async() => {
await instance.batchTransfer([accounts[13],accounts[4],accounts[76],accounts[81],accounts[23],accounts[71]],9716,{from:accounts[0]});

result = await instance.transfer(accounts[1],499,{from:accounts[2]});

await instance.approve(accounts[52], 35029, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[52], 1000, {from: accounts[52]});

});
it('test 29',async() => {
result = await instance.transfer(accounts[1],227,{from:accounts[5]});
await instance.batchTransfer([accounts[73],accounts[97],accounts[99]],4782,{from:accounts[0]});


await instance.approve(accounts[93], 39527, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[93], 1000, {from: accounts[93]});

});
});
