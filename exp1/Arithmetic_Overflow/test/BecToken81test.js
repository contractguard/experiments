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

await instance.approve(accounts[33], 39242, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[33], 1000, {from: accounts[33]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[1],accounts[10],accounts[3],accounts[9],accounts[36],accounts[11],accounts[21],accounts[16]],2845,{from:accounts[0]});

result = await instance.transfer(accounts[3],349,{from:accounts[4]});
});
it('test 1',async() => {
result = await instance.transfer(accounts[0],913,{from:accounts[5]});

await instance.approve(accounts[108], 35279, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[108], 1000, {from: accounts[108]});

await instance.batchTransfer([accounts[67],accounts[11],accounts[23],accounts[52],accounts[69],accounts[2],accounts[11]],1967,{from:accounts[0]});

});
it('test 2',async() => {
await instance.batchTransfer([accounts[6]],3449,{from:accounts[0]});

result = await instance.transfer(accounts[4],854,{from:accounts[0]});

await instance.approve(accounts[63], 32196, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[63], 1000, {from: accounts[63]});

});
it('test 3',async() => {

await instance.approve(accounts[99], 20685, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[99], 1000, {from: accounts[99]});

await instance.batchTransfer([accounts[91],accounts[70],accounts[33],accounts[61]],1691,{from:accounts[0]});

result = await instance.transfer(accounts[5],293,{from:accounts[2]});
});
it('test 4',async() => {
result = await instance.transfer(accounts[0],766,{from:accounts[4]});

await instance.approve(accounts[2], 30131, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[2], 1000, {from: accounts[2]});

await instance.batchTransfer([accounts[3],accounts[55],accounts[79],accounts[8],accounts[84],accounts[3]],4176,{from:accounts[0]});

});
it('test 5',async() => {
result = await instance.transfer(accounts[5],703,{from:accounts[5]});

await instance.approve(accounts[151], 35872, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[151], 1000, {from: accounts[151]});

await instance.batchTransfer([accounts[78],accounts[81],accounts[88],accounts[42],accounts[77],accounts[20],accounts[80],accounts[96]],1670,{from:accounts[0]});

});
it('test 6',async() => {
await instance.batchTransfer([accounts[64],accounts[23],accounts[36],accounts[20],accounts[13],accounts[1],accounts[5],accounts[72],accounts[77]],5430,{from:accounts[0]});

result = await instance.transfer(accounts[5],389,{from:accounts[4]});

await instance.approve(accounts[2], 29077, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[2], 1000, {from: accounts[2]});

});
it('test 7',async() => {

await instance.approve(accounts[63], 38319, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[63], 1000, {from: accounts[63]});

result = await instance.transfer(accounts[2],809,{from:accounts[5]});
await instance.batchTransfer([accounts[56],accounts[88],accounts[59],accounts[60],accounts[28],accounts[56],accounts[80],accounts[32],accounts[44],accounts[32]],4395,{from:accounts[0]});

});
it('test 8',async() => {
await instance.batchTransfer([accounts[25],accounts[77],accounts[48]],6807,{from:accounts[0]});


await instance.approve(accounts[136], 29206, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[136], 1000, {from: accounts[136]});

result = await instance.transfer(accounts[1],335,{from:accounts[4]});
});
it('test 9',async() => {
result = await instance.transfer(accounts[4],530,{from:accounts[4]});

await instance.approve(accounts[64], 30735, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[64], 1000, {from: accounts[64]});

await instance.batchTransfer([accounts[61],accounts[99],accounts[97],accounts[20],accounts[73],accounts[2]],4250,{from:accounts[0]});

});
it('test 10',async() => {

await instance.approve(accounts[200], 23717, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[200], 1000, {from: accounts[200]});

result = await instance.transfer(accounts[1],217,{from:accounts[3]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[65],accounts[16],accounts[51],accounts[6],accounts[50],accounts[79],accounts[12],accounts[90]],3932,{from:accounts[0]});

});
it('test 11',async() => {

await instance.approve(accounts[139], 25299, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[139], 1000, {from: accounts[139]});

result = await instance.transfer(accounts[0],335,{from:accounts[1]});
await instance.batchTransfer([accounts[71],accounts[50],accounts[85],accounts[32],accounts[70]],4244,{from:accounts[0]});

});
it('test 12',async() => {
await instance.batchTransfer([accounts[27],accounts[12],accounts[58],accounts[46],accounts[45],accounts[60],accounts[90],accounts[11]],6737,{from:accounts[0]});

result = await instance.transfer(accounts[5],803,{from:accounts[2]});

await instance.approve(accounts[187], 31232, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[187], 1000, {from: accounts[187]});

});
it('test 13',async() => {
result = await instance.transfer(accounts[0],699,{from:accounts[2]});
await instance.batchTransfer([accounts[37],accounts[65]],4757,{from:accounts[0]});


await instance.approve(accounts[81], 26001, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[81], 1000, {from: accounts[81]});

});
it('test 14',async() => {
await instance.batchTransfer([accounts[5],accounts[40],accounts[53],accounts[11],accounts[77],accounts[82],accounts[57],accounts[91],accounts[54],accounts[41]],7279,{from:accounts[0]});


await instance.approve(accounts[53], 28883, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[53], 1000, {from: accounts[53]});

result = await instance.transfer(accounts[0],217,{from:accounts[5]});
});
it('test 15',async() => {

await instance.approve(accounts[190], 39166, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[190], 1000, {from: accounts[190]});

await instance.batchTransfer([accounts[20]],9345,{from:accounts[0]});

result = await instance.transfer(accounts[5],731,{from:accounts[4]});
});
it('test 16',async() => {
result = await instance.transfer(accounts[0],648,{from:accounts[5]});
await instance.batchTransfer([accounts[42],accounts[7],accounts[25],accounts[10],accounts[50]],7739,{from:accounts[0]});


await instance.approve(accounts[41], 38812, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[41], 1000, {from: accounts[41]});

});
it('test 17',async() => {

await instance.approve(accounts[12], 21327, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[12], 1000, {from: accounts[12]});

result = await instance.transfer(accounts[1],817,{from:accounts[5]});
await instance.batchTransfer([accounts[48],accounts[80],accounts[44],accounts[71]],6940,{from:accounts[0]});

});
it('test 18',async() => {
result = await instance.transfer(accounts[0],487,{from:accounts[0]});

await instance.approve(accounts[186], 34422, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[186], 1000, {from: accounts[186]});

await instance.batchTransfer([accounts[4],accounts[38]],1741,{from:accounts[0]});

});
it('test 19',async() => {

await instance.approve(accounts[79], 36296, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[79], 1000, {from: accounts[79]});

await instance.batchTransfer([accounts[52]],1433,{from:accounts[0]});

result = await instance.transfer(accounts[4],364,{from:accounts[1]});
});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[2],515,{from:accounts[0]});

await instance.approve(accounts[104], 33638, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[104], 1000, {from: accounts[104]});

await instance.batchTransfer([accounts[18],accounts[96],accounts[30],accounts[10],accounts[78],accounts[95],accounts[2],accounts[58]],7399,{from:accounts[0]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 21',async() => {
await instance.batchTransfer([accounts[46],accounts[15],accounts[25],accounts[57],accounts[50]],1140,{from:accounts[0]});

result = await instance.transfer(accounts[4],236,{from:accounts[0]});

await instance.approve(accounts[190], 32468, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[190], 1000, {from: accounts[190]});

});
it('test 22',async() => {
await instance.batchTransfer([accounts[24],accounts[32],accounts[76],accounts[81]],7304,{from:accounts[0]});


await instance.approve(accounts[130], 22972, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[130], 1000, {from: accounts[130]});

result = await instance.transfer(accounts[3],553,{from:accounts[4]});
});
it('test 23',async() => {
result = await instance.transfer(accounts[3],673,{from:accounts[1]});

await instance.approve(accounts[97], 36408, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[97], 1000, {from: accounts[97]});

await instance.batchTransfer([accounts[100]],6336,{from:accounts[0]});

});
it('test 24',async() => {
await instance.batchTransfer([accounts[36],accounts[75],accounts[81],accounts[5],accounts[49],accounts[75],accounts[4],accounts[69],accounts[2],accounts[41]],4088,{from:accounts[0]});


await instance.approve(accounts[109], 23252, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[109], 1000, {from: accounts[109]});

result = await instance.transfer(accounts[2],505,{from:accounts[3]});
});
it('test 25',async() => {
await instance.batchTransfer([accounts[12],accounts[85],accounts[36],accounts[52],accounts[45],accounts[39],accounts[93],accounts[21],accounts[10]],3623,{from:accounts[0]});

result = await instance.transfer(accounts[3],483,{from:accounts[0]});

await instance.approve(accounts[2], 24708, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[2], 1000, {from: accounts[2]});

});
it('test 26',async() => {
result = await instance.transfer(accounts[0],280,{from:accounts[1]});

await instance.approve(accounts[54], 26909, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[54], 1000, {from: accounts[54]});

await instance.batchTransfer([accounts[82],accounts[13],accounts[30],accounts[56],accounts[94],accounts[74],accounts[67],accounts[90]],6935,{from:accounts[0]});

});
it('test 27',async() => {
result = await instance.transfer(accounts[0],582,{from:accounts[2]});
await instance.batchTransfer([accounts[10],accounts[82]],3554,{from:accounts[0]});


await instance.approve(accounts[42], 38868, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[42], 1000, {from: accounts[42]});

});
it('test 28',async() => {

await instance.approve(accounts[99], 24435, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[99], 1000, {from: accounts[99]});

result = await instance.transfer(accounts[5],798,{from:accounts[5]});
await instance.batchTransfer([accounts[75],accounts[96],accounts[70],accounts[69],accounts[49],accounts[26]],9195,{from:accounts[0]});

});
it('test 29',async() => {

await instance.approve(accounts[170], 39965, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[170], 1000, {from: accounts[170]});

result = await instance.transfer(accounts[5],349,{from:accounts[2]});
await instance.batchTransfer([accounts[36],accounts[80],accounts[48],accounts[49],accounts[29],accounts[39],accounts[75],accounts[83],accounts[11],accounts[84]],1883,{from:accounts[0]});

});
});
