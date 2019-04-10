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

await instance.approve(accounts[126], 21156, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[126], 1000, {from: accounts[126]});

await instance.batchTransfer([accounts[82],accounts[49],accounts[50],accounts[89],accounts[16],accounts[79],accounts[37],accounts[11],accounts[48],accounts[23]],1611,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[5],831,{from:accounts[3]});
});
it('test 1',async() => {
result = await instance.transfer(accounts[5],389,{from:accounts[2]});

await instance.approve(accounts[119], 34947, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[119], 1000, {from: accounts[119]});

await instance.batchTransfer([accounts[23],accounts[62],accounts[41],accounts[47],accounts[61]],9994,{from:accounts[0]});

});
it('test 2',async() => {
await instance.batchTransfer([accounts[63],accounts[6],accounts[1],accounts[17],accounts[73],accounts[48],accounts[4],accounts[23],accounts[82],accounts[8]],1371,{from:accounts[0]});

result = await instance.transfer(accounts[3],678,{from:accounts[3]});

await instance.approve(accounts[153], 32387, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[153], 1000, {from: accounts[153]});

});
it('test 3',async() => {

await instance.approve(accounts[95], 24723, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[95], 1000, {from: accounts[95]});

result = await instance.transfer(accounts[5],701,{from:accounts[2]});
await instance.batchTransfer([accounts[50],accounts[74],accounts[38],accounts[75],accounts[52],accounts[78]],8392,{from:accounts[0]});

});
it('test 4',async() => {
await instance.batchTransfer([accounts[13],accounts[93],accounts[7],accounts[54],accounts[52],accounts[12]],2527,{from:accounts[0]});


await instance.approve(accounts[145], 33626, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[145], 1000, {from: accounts[145]});

result = await instance.transfer(accounts[2],740,{from:accounts[5]});
});
it('test 5',async() => {
result = await instance.transfer(accounts[1],558,{from:accounts[4]});

await instance.approve(accounts[171], 36149, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[171], 1000, {from: accounts[171]});

await instance.batchTransfer([accounts[12],accounts[42],accounts[37]],4339,{from:accounts[0]});

});
it('test 6',async() => {

await instance.approve(accounts[175], 38667, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[175], 1000, {from: accounts[175]});

await instance.batchTransfer([accounts[32],accounts[64],accounts[64],accounts[88],accounts[70],accounts[27],accounts[52],accounts[34],accounts[38]],8096,{from:accounts[0]});

result = await instance.transfer(accounts[3],639,{from:accounts[4]});
});
it('test 7',async() => {
result = await instance.transfer(accounts[3],842,{from:accounts[5]});

await instance.approve(accounts[35], 39781, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[35], 1000, {from: accounts[35]});

await instance.batchTransfer([accounts[58],accounts[31],accounts[24],accounts[26],accounts[76],accounts[29],accounts[18]],6779,{from:accounts[0]});

});
it('test 8',async() => {
result = await instance.transfer(accounts[4],646,{from:accounts[2]});
await instance.batchTransfer([accounts[89],accounts[90],accounts[72],accounts[93],accounts[10],accounts[93],accounts[32]],8627,{from:accounts[0]});


await instance.approve(accounts[170], 34169, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[170], 1000, {from: accounts[170]});

});
it('test 9',async() => {
await instance.batchTransfer([accounts[32],accounts[57],accounts[35],accounts[50],accounts[91]],5128,{from:accounts[0]});

result = await instance.transfer(accounts[1],577,{from:accounts[0]});

await instance.approve(accounts[87], 29980, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[87], 1000, {from: accounts[87]});

});
it('test 10',async() => {
result = await instance.transfer(accounts[5],650,{from:accounts[1]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[56],accounts[41],accounts[37],accounts[5],accounts[58],accounts[41]],9598,{from:accounts[0]});


await instance.approve(accounts[47], 30595, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[47], 1000, {from: accounts[47]});

});
it('test 11',async() => {
result = await instance.transfer(accounts[3],637,{from:accounts[5]});

await instance.approve(accounts[138], 23332, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[138], 1000, {from: accounts[138]});

await instance.batchTransfer([accounts[49],accounts[80],accounts[44],accounts[21],accounts[59],accounts[9],accounts[95]],1927,{from:accounts[0]});

});
it('test 12',async() => {
await instance.batchTransfer([accounts[96],accounts[36],accounts[45],accounts[65],accounts[84],accounts[83]],4993,{from:accounts[0]});

result = await instance.transfer(accounts[1],263,{from:accounts[5]});

await instance.approve(accounts[70], 34639, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[70], 1000, {from: accounts[70]});

});
it('test 13',async() => {
result = await instance.transfer(accounts[3],636,{from:accounts[1]});
await instance.batchTransfer([accounts[71],accounts[12],accounts[11],accounts[86],accounts[74],accounts[55],accounts[2]],9757,{from:accounts[0]});


await instance.approve(accounts[126], 20195, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[126], 1000, {from: accounts[126]});

});
it('test 14',async() => {
await instance.batchTransfer([accounts[54]],2291,{from:accounts[0]});


await instance.approve(accounts[32], 21872, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[32], 1000, {from: accounts[32]});

result = await instance.transfer(accounts[5],623,{from:accounts[1]});
});
it('test 15',async() => {

await instance.approve(accounts[64], 39166, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[64], 1000, {from: accounts[64]});

result = await instance.transfer(accounts[1],839,{from:accounts[5]});
await instance.batchTransfer([accounts[90],accounts[60],accounts[17],accounts[80],accounts[34],accounts[90],accounts[3],accounts[21],accounts[26]],5542,{from:accounts[0]});

});
it('test 16',async() => {
result = await instance.transfer(accounts[5],473,{from:accounts[0]});

await instance.approve(accounts[7], 23744, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[7], 1000, {from: accounts[7]});

await instance.batchTransfer([accounts[5],accounts[90],accounts[62]],3757,{from:accounts[0]});

});
it('test 17',async() => {
result = await instance.transfer(accounts[3],648,{from:accounts[4]});

await instance.approve(accounts[181], 20652, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[181], 1000, {from: accounts[181]});

await instance.batchTransfer([accounts[95],accounts[24],accounts[87],accounts[92]],7521,{from:accounts[0]});

});
it('test 18',async() => {

await instance.approve(accounts[106], 37253, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[106], 1000, {from: accounts[106]});

await instance.batchTransfer([accounts[77],accounts[56],accounts[76],accounts[63],accounts[12],accounts[22],accounts[46],accounts[51],accounts[54]],5854,{from:accounts[0]});

result = await instance.transfer(accounts[2],273,{from:accounts[4]});
});
it('test 19',async() => {
await instance.batchTransfer([accounts[81],accounts[48],accounts[90],accounts[82],accounts[37],accounts[10],accounts[30]],8894,{from:accounts[0]});


await instance.approve(accounts[78], 20552, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[78], 1000, {from: accounts[78]});

result = await instance.transfer(accounts[2],827,{from:accounts[1]});
});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[45],accounts[53],accounts[43],accounts[6],accounts[74],accounts[37],accounts[91],accounts[50],accounts[80],accounts[70]],5474,{from:accounts[0]});


await instance.approve(accounts[80], 23025, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[80], 1000, {from: accounts[80]});

result = await instance.transfer(accounts[2],914,{from:accounts[2]});
});
it('test 21',async() => {
await instance.batchTransfer([accounts[76],accounts[46],accounts[58],accounts[25],accounts[18],accounts[60],accounts[49]],1207,{from:accounts[0]});

result = await instance.transfer(accounts[3],858,{from:accounts[0]});

await instance.approve(accounts[91], 22614, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[91], 1000, {from: accounts[91]});

});
it('test 22',async() => {

await instance.approve(accounts[69], 33456, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[69], 1000, {from: accounts[69]});

await instance.batchTransfer([accounts[40],accounts[100],accounts[72],accounts[72],accounts[6],accounts[12],accounts[78],accounts[95],accounts[50],accounts[36]],1291,{from:accounts[0]});

result = await instance.transfer(accounts[4],807,{from:accounts[4]});
});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 23',async() => {
result = await instance.transfer(accounts[2],364,{from:accounts[4]});

await instance.approve(accounts[124], 26345, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[124], 1000, {from: accounts[124]});

await instance.batchTransfer([accounts[25],accounts[100],accounts[41],accounts[24],accounts[98],accounts[85],accounts[58],accounts[59]],6998,{from:accounts[0]});

});
it('test 24',async() => {
result = await instance.transfer(accounts[1],671,{from:accounts[3]});
await instance.batchTransfer([accounts[48],accounts[22],accounts[45],accounts[5],accounts[45],accounts[81],accounts[45],accounts[1],accounts[45],accounts[55]],9078,{from:accounts[0]});


await instance.approve(accounts[177], 22293, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[177], 1000, {from: accounts[177]});

});
it('test 25',async() => {

await instance.approve(accounts[44], 30075, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[44], 1000, {from: accounts[44]});

await instance.batchTransfer([accounts[4],accounts[22],accounts[5],accounts[11],accounts[76],accounts[15]],3743,{from:accounts[0]});

result = await instance.transfer(accounts[2],239,{from:accounts[2]});
});
it('test 26',async() => {

await instance.approve(accounts[17], 26728, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[17], 1000, {from: accounts[17]});

await instance.batchTransfer([accounts[75],accounts[7],accounts[81],accounts[18],accounts[29],accounts[16],accounts[10],accounts[95],accounts[94]],1440,{from:accounts[0]});

result = await instance.transfer(accounts[0],485,{from:accounts[4]});
});
it('test 27',async() => {
await instance.batchTransfer([accounts[14],accounts[22],accounts[7]],3603,{from:accounts[0]});


await instance.approve(accounts[34], 35642, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[34], 1000, {from: accounts[34]});

result = await instance.transfer(accounts[1],712,{from:accounts[3]});
});
it('test 28',async() => {

await instance.approve(accounts[181], 25915, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[181], 1000, {from: accounts[181]});

await instance.batchTransfer([accounts[43],accounts[79],accounts[29],accounts[8],accounts[63],accounts[52]],5812,{from:accounts[0]});

result = await instance.transfer(accounts[2],421,{from:accounts[2]});
});
it('test 29',async() => {
result = await instance.transfer(accounts[3],655,{from:accounts[2]});
await instance.batchTransfer([accounts[39],accounts[13],accounts[25],accounts[50],accounts[18],accounts[73],accounts[17]],2343,{from:accounts[0]});


await instance.approve(accounts[179], 28920, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[179], 1000, {from: accounts[179]});

});
});
