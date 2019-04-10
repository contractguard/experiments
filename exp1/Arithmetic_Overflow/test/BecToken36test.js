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

await instance.approve(accounts[49], 23816, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[49], 1000, {from: accounts[49]});

result = await instance.transfer(accounts[5],412,{from:accounts[2]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[13],accounts[90],accounts[3],accounts[32]],3418,{from:accounts[0]});

});
it('test 1',async() => {

await instance.approve(accounts[178], 27768, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[178], 1000, {from: accounts[178]});

result = await instance.transfer(accounts[4],744,{from:accounts[2]});
await instance.batchTransfer([accounts[13],accounts[22]],4213,{from:accounts[0]});

});
it('test 2',async() => {

await instance.approve(accounts[62], 38934, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[62], 1000, {from: accounts[62]});

await instance.batchTransfer([accounts[9]],5962,{from:accounts[0]});

result = await instance.transfer(accounts[5],395,{from:accounts[2]});
});
it('test 3',async() => {
await instance.batchTransfer([accounts[36],accounts[87],accounts[83],accounts[95]],2135,{from:accounts[0]});

result = await instance.transfer(accounts[4],785,{from:accounts[0]});

await instance.approve(accounts[100], 20125, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[100], 1000, {from: accounts[100]});

});
it('test 4',async() => {
result = await instance.transfer(accounts[5],906,{from:accounts[0]});

await instance.approve(accounts[148], 27040, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[148], 1000, {from: accounts[148]});

await instance.batchTransfer([accounts[14],accounts[84],accounts[44],accounts[14],accounts[64],accounts[99]],4358,{from:accounts[0]});

});
it('test 5',async() => {
await instance.batchTransfer([accounts[48],accounts[61],accounts[73],accounts[32],accounts[77],accounts[73],accounts[41],accounts[49],accounts[44],accounts[97]],7033,{from:accounts[0]});

result = await instance.transfer(accounts[4],689,{from:accounts[2]});

await instance.approve(accounts[200], 26649, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[200], 1000, {from: accounts[200]});

});
it('test 6',async() => {
await instance.batchTransfer([accounts[64],accounts[90],accounts[49],accounts[8],accounts[86],accounts[19],accounts[96],accounts[75]],5486,{from:accounts[0]});

result = await instance.transfer(accounts[5],490,{from:accounts[0]});

await instance.approve(accounts[17], 35596, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[17], 1000, {from: accounts[17]});

});
it('test 7',async() => {

await instance.approve(accounts[96], 23183, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[96], 1000, {from: accounts[96]});

result = await instance.transfer(accounts[1],446,{from:accounts[5]});
await instance.batchTransfer([accounts[6],accounts[13],accounts[16],accounts[54],accounts[24],accounts[37],accounts[12],accounts[68],accounts[46]],9263,{from:accounts[0]});

});
it('test 8',async() => {
result = await instance.transfer(accounts[4],627,{from:accounts[5]});
await instance.batchTransfer([accounts[67]],7460,{from:accounts[0]});


await instance.approve(accounts[42], 33618, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[42], 1000, {from: accounts[42]});

});
it('test 9',async() => {
await instance.batchTransfer([accounts[45],accounts[29],accounts[86],accounts[26],accounts[85]],3836,{from:accounts[0]});

result = await instance.transfer(accounts[3],887,{from:accounts[5]});

await instance.approve(accounts[97], 30292, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[97], 1000, {from: accounts[97]});

});
it('test 10',async() => {
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[10],accounts[5],accounts[58],accounts[5],accounts[29],accounts[86]],8617,{from:accounts[0]});

result = await instance.transfer(accounts[4],703,{from:accounts[4]});

await instance.approve(accounts[22], 28174, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[22], 1000, {from: accounts[22]});

});
it('test 11',async() => {
result = await instance.transfer(accounts[4],790,{from:accounts[0]});

await instance.approve(accounts[66], 31597, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[66], 1000, {from: accounts[66]});

await instance.batchTransfer([accounts[87],accounts[32]],4074,{from:accounts[0]});

});
it('test 12',async() => {

await instance.approve(accounts[99], 35567, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[99], 1000, {from: accounts[99]});

result = await instance.transfer(accounts[1],477,{from:accounts[5]});
await instance.batchTransfer([accounts[83]],8618,{from:accounts[0]});

});
it('test 13',async() => {
result = await instance.transfer(accounts[2],436,{from:accounts[1]});

await instance.approve(accounts[120], 35452, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[120], 1000, {from: accounts[120]});

await instance.batchTransfer([accounts[69],accounts[21],accounts[31],accounts[31],accounts[68],accounts[87],accounts[97]],8581,{from:accounts[0]});

});
it('test 14',async() => {

await instance.approve(accounts[39], 28471, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[39], 1000, {from: accounts[39]});

await instance.batchTransfer([accounts[53],accounts[90]],7643,{from:accounts[0]});

result = await instance.transfer(accounts[1],966,{from:accounts[4]});
});
it('test 15',async() => {
result = await instance.transfer(accounts[5],708,{from:accounts[2]});
await instance.batchTransfer([accounts[91],accounts[30],accounts[97],accounts[24],accounts[60],accounts[21],accounts[38],accounts[67],accounts[2],accounts[1]],5188,{from:accounts[0]});


await instance.approve(accounts[108], 30296, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[108], 1000, {from: accounts[108]});

});
it('test 16',async() => {
await instance.batchTransfer([accounts[76]],2173,{from:accounts[0]});

result = await instance.transfer(accounts[2],243,{from:accounts[3]});

await instance.approve(accounts[66], 22779, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[66], 1000, {from: accounts[66]});

});
it('test 17',async() => {

await instance.approve(accounts[131], 37815, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[131], 1000, {from: accounts[131]});

await instance.batchTransfer([accounts[58],accounts[88],accounts[73],accounts[41],accounts[35],accounts[88],accounts[54],accounts[35],accounts[46],accounts[61]],1623,{from:accounts[0]});

result = await instance.transfer(accounts[5],722,{from:accounts[1]});
});
it('test 18',async() => {
result = await instance.transfer(accounts[1],425,{from:accounts[2]});

await instance.approve(accounts[29], 33890, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[29], 1000, {from: accounts[29]});

await instance.batchTransfer([accounts[25],accounts[62],accounts[24],accounts[10]],8081,{from:accounts[0]});

});
it('test 19',async() => {

await instance.approve(accounts[69], 22417, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[69], 1000, {from: accounts[69]});

result = await instance.transfer(accounts[5],531,{from:accounts[4]});
await instance.batchTransfer([accounts[13],accounts[35],accounts[4]],2566,{from:accounts[0]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[1],303,{from:accounts[2]});
await instance.batchTransfer([accounts[51],accounts[23],accounts[44],accounts[73],accounts[58],accounts[54],accounts[83],accounts[86],accounts[3],accounts[29]],9449,{from:accounts[0]});


await instance.approve(accounts[135], 36159, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[135], 1000, {from: accounts[135]});

});
it('test 21',async() => {
result = await instance.transfer(accounts[2],481,{from:accounts[2]});

await instance.approve(accounts[129], 22192, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[129], 1000, {from: accounts[129]});

await instance.batchTransfer([accounts[35],accounts[93],accounts[93],accounts[47],accounts[82],accounts[69],accounts[95],accounts[38]],1480,{from:accounts[0]});

});
it('test 22',async() => {
await instance.batchTransfer([accounts[49],accounts[55],accounts[77],accounts[35],accounts[4],accounts[86],accounts[16]],1468,{from:accounts[0]});

result = await instance.transfer(accounts[3],722,{from:accounts[5]});

await instance.approve(accounts[193], 37222, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[193], 1000, {from: accounts[193]});

});
it('test 23',async() => {

await instance.approve(accounts[100], 24895, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[100], 1000, {from: accounts[100]});

await instance.batchTransfer([accounts[84],accounts[9],accounts[30],accounts[59],accounts[20]],6528,{from:accounts[0]});

result = await instance.transfer(accounts[3],566,{from:accounts[3]});
});
it('test 24',async() => {

await instance.approve(accounts[47], 33129, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[47], 1000, {from: accounts[47]});

result = await instance.transfer(accounts[0],719,{from:accounts[0]});
await instance.batchTransfer([accounts[31],accounts[75],accounts[50],accounts[16],accounts[7],accounts[45],accounts[14]],8840,{from:accounts[0]});

});
it('test 25',async() => {

await instance.approve(accounts[48], 28611, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[48], 1000, {from: accounts[48]});

result = await instance.transfer(accounts[0],213,{from:accounts[2]});
await instance.batchTransfer([accounts[50],accounts[6],accounts[48],accounts[11],accounts[77],accounts[19],accounts[83],accounts[71],accounts[43],accounts[80]],2598,{from:accounts[0]});

});
it('test 26',async() => {
result = await instance.transfer(accounts[3],441,{from:accounts[0]});
await instance.batchTransfer([accounts[15],accounts[23],accounts[9]],5044,{from:accounts[0]});


await instance.approve(accounts[14], 38504, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[14], 1000, {from: accounts[14]});

});
it('test 27',async() => {
result = await instance.transfer(accounts[5],766,{from:accounts[4]});

await instance.approve(accounts[92], 20489, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[92], 1000, {from: accounts[92]});

await instance.batchTransfer([accounts[48],accounts[100]],7180,{from:accounts[0]});

});
it('test 28',async() => {
await instance.batchTransfer([accounts[72],accounts[92]],2885,{from:accounts[0]});


await instance.approve(accounts[182], 31687, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[182], 1000, {from: accounts[182]});

result = await instance.transfer(accounts[3],558,{from:accounts[4]});
});
it('test 29',async() => {
await instance.batchTransfer([accounts[94],accounts[56],accounts[33],accounts[20],accounts[8],accounts[33],accounts[91],accounts[11]],6914,{from:accounts[0]});


await instance.approve(accounts[76], 33982, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[76], 1000, {from: accounts[76]});

result = await instance.transfer(accounts[4],626,{from:accounts[0]});
});
});
