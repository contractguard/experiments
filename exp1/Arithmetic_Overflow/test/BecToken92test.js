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
await instance.batchTransfer([accounts[43],accounts[55],accounts[30],accounts[45]],1759,{from:accounts[0]});


await instance.approve(accounts[8], 21517, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[8], 1000, {from: accounts[8]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[1],470,{from:accounts[5]});
});
it('test 1',async() => {
await instance.batchTransfer([accounts[38],accounts[5],accounts[15]],9478,{from:accounts[0]});


await instance.approve(accounts[83], 37824, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[83], 1000, {from: accounts[83]});

result = await instance.transfer(accounts[5],558,{from:accounts[2]});
});
it('test 2',async() => {

await instance.approve(accounts[141], 27068, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[141], 1000, {from: accounts[141]});

result = await instance.transfer(accounts[5],691,{from:accounts[5]});
await instance.batchTransfer([accounts[37],accounts[91],accounts[40],accounts[60],accounts[40],accounts[100],accounts[76],accounts[77],accounts[85],accounts[39]],2599,{from:accounts[0]});

});
it('test 3',async() => {
result = await instance.transfer(accounts[5],898,{from:accounts[4]});

await instance.approve(accounts[37], 22891, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[37], 1000, {from: accounts[37]});

await instance.batchTransfer([accounts[6],accounts[4],accounts[93]],7367,{from:accounts[0]});

});
it('test 4',async() => {
await instance.batchTransfer([accounts[76],accounts[55],accounts[29],accounts[67],accounts[91],accounts[74],accounts[61],accounts[16],accounts[83]],7075,{from:accounts[0]});


await instance.approve(accounts[38], 26381, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[38], 1000, {from: accounts[38]});

result = await instance.transfer(accounts[0],989,{from:accounts[0]});
});
it('test 5',async() => {
await instance.batchTransfer([accounts[11]],1567,{from:accounts[0]});


await instance.approve(accounts[67], 29353, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[67], 1000, {from: accounts[67]});

result = await instance.transfer(accounts[3],489,{from:accounts[5]});
});
it('test 6',async() => {
await instance.batchTransfer([accounts[15]],6529,{from:accounts[0]});

result = await instance.transfer(accounts[3],294,{from:accounts[3]});

await instance.approve(accounts[197], 38848, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[197], 1000, {from: accounts[197]});

});
it('test 7',async() => {

await instance.approve(accounts[89], 38138, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[89], 1000, {from: accounts[89]});

result = await instance.transfer(accounts[0],527,{from:accounts[1]});
await instance.batchTransfer([accounts[14],accounts[93],accounts[12],accounts[20],accounts[62],accounts[74],accounts[11],accounts[33],accounts[23],accounts[64]],7761,{from:accounts[0]});

});
it('test 8',async() => {
await instance.batchTransfer([accounts[23],accounts[82],accounts[63],accounts[50],accounts[55],accounts[22],accounts[27]],4496,{from:accounts[0]});


await instance.approve(accounts[37], 33427, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[37], 1000, {from: accounts[37]});

result = await instance.transfer(accounts[1],524,{from:accounts[4]});
});
it('test 9',async() => {
result = await instance.transfer(accounts[1],555,{from:accounts[0]});
await instance.batchTransfer([accounts[14],accounts[43]],8679,{from:accounts[0]});


await instance.approve(accounts[11], 22852, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[11], 1000, {from: accounts[11]});

});
it('test 10',async() => {
result = await instance.transfer(accounts[5],298,{from:accounts[1]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[8], 25455, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[8], 1000, {from: accounts[8]});

await instance.batchTransfer([accounts[55],accounts[44],accounts[54],accounts[74],accounts[37],accounts[38],accounts[30]],6217,{from:accounts[0]});

});
it('test 11',async() => {
await instance.batchTransfer([accounts[20]],6227,{from:accounts[0]});


await instance.approve(accounts[6], 25824, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[6], 1000, {from: accounts[6]});

result = await instance.transfer(accounts[1],756,{from:accounts[0]});
});
it('test 12',async() => {
result = await instance.transfer(accounts[2],230,{from:accounts[2]});

await instance.approve(accounts[185], 29849, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[185], 1000, {from: accounts[185]});

await instance.batchTransfer([accounts[47],accounts[65],accounts[82]],3199,{from:accounts[0]});

});
it('test 13',async() => {
await instance.batchTransfer([accounts[88],accounts[46],accounts[48]],4696,{from:accounts[0]});

result = await instance.transfer(accounts[5],558,{from:accounts[1]});

await instance.approve(accounts[76], 33498, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[76], 1000, {from: accounts[76]});

});
it('test 14',async() => {
await instance.batchTransfer([accounts[63],accounts[26],accounts[99],accounts[54],accounts[31],accounts[73],accounts[57],accounts[54],accounts[22]],1786,{from:accounts[0]});


await instance.approve(accounts[157], 33815, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[157], 1000, {from: accounts[157]});

result = await instance.transfer(accounts[4],467,{from:accounts[1]});
});
it('test 15',async() => {
result = await instance.transfer(accounts[1],749,{from:accounts[1]});

await instance.approve(accounts[97], 36788, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[97], 1000, {from: accounts[97]});

await instance.batchTransfer([accounts[98],accounts[5],accounts[14],accounts[69],accounts[16],accounts[88],accounts[42],accounts[9],accounts[57],accounts[1]],2264,{from:accounts[0]});

});
it('test 16',async() => {
await instance.batchTransfer([accounts[100],accounts[8],accounts[88],accounts[92],accounts[36],accounts[1]],4708,{from:accounts[0]});

result = await instance.transfer(accounts[0],570,{from:accounts[0]});

await instance.approve(accounts[150], 23813, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[150], 1000, {from: accounts[150]});

});
it('test 17',async() => {
await instance.batchTransfer([accounts[58],accounts[7],accounts[87],accounts[58],accounts[97],accounts[92],accounts[50]],6557,{from:accounts[0]});

result = await instance.transfer(accounts[0],775,{from:accounts[2]});

await instance.approve(accounts[2], 27744, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[2], 1000, {from: accounts[2]});

});
it('test 18',async() => {
await instance.batchTransfer([accounts[58],accounts[62],accounts[75],accounts[1],accounts[86],accounts[83],accounts[94],accounts[91]],9816,{from:accounts[0]});


await instance.approve(accounts[50], 24695, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[50], 1000, {from: accounts[50]});

result = await instance.transfer(accounts[5],933,{from:accounts[4]});
});
it('test 19',async() => {

await instance.approve(accounts[106], 27993, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[106], 1000, {from: accounts[106]});

result = await instance.transfer(accounts[1],464,{from:accounts[1]});
await instance.batchTransfer([accounts[15],accounts[63],accounts[3]],7676,{from:accounts[0]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
result = await instance.transfer(accounts[4],987,{from:accounts[1]});
await instance.batchTransfer([accounts[79],accounts[25],accounts[90],accounts[20],accounts[26],accounts[90],accounts[2],accounts[94],accounts[56],accounts[24]],5245,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[126], 34794, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[126], 1000, {from: accounts[126]});

});
it('test 21',async() => {
result = await instance.transfer(accounts[3],387,{from:accounts[0]});

await instance.approve(accounts[77], 30941, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[77], 1000, {from: accounts[77]});

await instance.batchTransfer([accounts[17],accounts[49],accounts[76],accounts[36],accounts[19],accounts[51],accounts[48]],2083,{from:accounts[0]});

});
it('test 22',async() => {

await instance.approve(accounts[179], 32997, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[179], 1000, {from: accounts[179]});

await instance.batchTransfer([accounts[28]],6595,{from:accounts[0]});

result = await instance.transfer(accounts[5],850,{from:accounts[5]});
});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 23',async() => {

await instance.approve(accounts[14], 28308, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[14], 1000, {from: accounts[14]});

result = await instance.transfer(accounts[5],935,{from:accounts[0]});
await instance.batchTransfer([accounts[68],accounts[30],accounts[70],accounts[66],accounts[31]],3107,{from:accounts[0]});

});
it('test 24',async() => {

await instance.approve(accounts[40], 24356, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[40], 1000, {from: accounts[40]});

await instance.batchTransfer([accounts[73]],1381,{from:accounts[0]});

result = await instance.transfer(accounts[2],855,{from:accounts[1]});
});
it('test 25',async() => {

await instance.approve(accounts[158], 37761, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[158], 1000, {from: accounts[158]});

result = await instance.transfer(accounts[1],813,{from:accounts[5]});
await instance.batchTransfer([accounts[18],accounts[54],accounts[31],accounts[76],accounts[65],accounts[89],accounts[39],accounts[11],accounts[64],accounts[77]],5777,{from:accounts[0]});

});
it('test 26',async() => {

await instance.approve(accounts[60], 35221, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[60], 1000, {from: accounts[60]});

await instance.batchTransfer([accounts[72]],9689,{from:accounts[0]});

result = await instance.transfer(accounts[3],269,{from:accounts[2]});
});
it('test 27',async() => {
result = await instance.transfer(accounts[3],852,{from:accounts[0]});
await instance.batchTransfer([accounts[50],accounts[61],accounts[89],accounts[74],accounts[81],accounts[73],accounts[30],accounts[65]],5644,{from:accounts[0]});


await instance.approve(accounts[114], 29200, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[114], 1000, {from: accounts[114]});

});
it('test 28',async() => {
await instance.batchTransfer([accounts[14]],7914,{from:accounts[0]});


await instance.approve(accounts[139], 22905, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[139], 1000, {from: accounts[139]});

result = await instance.transfer(accounts[1],460,{from:accounts[5]});
});
it('test 29',async() => {

await instance.approve(accounts[194], 30968, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[194], 1000, {from: accounts[194]});

await instance.batchTransfer([accounts[29]],8659,{from:accounts[0]});

result = await instance.transfer(accounts[5],240,{from:accounts[1]});
});
});
