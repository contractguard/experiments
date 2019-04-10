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

result = await instance.transfer(accounts[2],440,{from:accounts[1]});

await instance.approve(accounts[75], 39422, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[75], 1000, {from: accounts[75]});

await instance.batchTransfer([accounts[60],accounts[96],accounts[98],accounts[5],accounts[39]],8101,{from:accounts[0]});

});
it('test 1',async() => {

await instance.approve(accounts[191], 25668, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[191], 1000, {from: accounts[191]});

await instance.batchTransfer([accounts[30],accounts[42],accounts[78],accounts[39],accounts[58]],1693,{from:accounts[0]});

result = await instance.transfer(accounts[0],647,{from:accounts[2]});
});
it('test 2',async() => {
result = await instance.transfer(accounts[3],901,{from:accounts[4]});

await instance.approve(accounts[76], 36849, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[76], 1000, {from: accounts[76]});

await instance.batchTransfer([accounts[59],accounts[13],accounts[69],accounts[69],accounts[45],accounts[46],accounts[86],accounts[76],accounts[98],accounts[36]],8354,{from:accounts[0]});

});
it('test 3',async() => {
await instance.batchTransfer([accounts[28],accounts[81],accounts[50],accounts[100],accounts[76],accounts[81],accounts[62]],4867,{from:accounts[0]});


await instance.approve(accounts[74], 32675, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[74], 1000, {from: accounts[74]});

result = await instance.transfer(accounts[2],703,{from:accounts[3]});
});
it('test 4',async() => {

await instance.approve(accounts[78], 33763, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[78], 1000, {from: accounts[78]});

result = await instance.transfer(accounts[2],852,{from:accounts[1]});
await instance.batchTransfer([accounts[62],accounts[64],accounts[54],accounts[88],accounts[25]],9518,{from:accounts[0]});

});
it('test 5',async() => {

await instance.approve(accounts[71], 36980, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[71], 1000, {from: accounts[71]});

result = await instance.transfer(accounts[1],490,{from:accounts[3]});
await instance.batchTransfer([accounts[38],accounts[25],accounts[88],accounts[5],accounts[96],accounts[70],accounts[61],accounts[23]],3917,{from:accounts[0]});

});
it('test 6',async() => {
await instance.batchTransfer([accounts[89],accounts[89],accounts[55],accounts[51],accounts[92],accounts[50],accounts[43],accounts[83],accounts[97],accounts[82]],7366,{from:accounts[0]});


await instance.approve(accounts[20], 36042, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[20], 1000, {from: accounts[20]});

result = await instance.transfer(accounts[5],521,{from:accounts[1]});
});
it('test 7',async() => {
await instance.batchTransfer([accounts[82]],4040,{from:accounts[0]});


await instance.approve(accounts[174], 21502, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[174], 1000, {from: accounts[174]});

result = await instance.transfer(accounts[0],958,{from:accounts[0]});
});
it('test 8',async() => {

await instance.approve(accounts[154], 27529, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[154], 1000, {from: accounts[154]});

result = await instance.transfer(accounts[2],378,{from:accounts[0]});
await instance.batchTransfer([accounts[80],accounts[5],accounts[94]],7476,{from:accounts[0]});

});
it('test 9',async() => {
result = await instance.transfer(accounts[1],969,{from:accounts[4]});
await instance.batchTransfer([accounts[39],accounts[51],accounts[84],accounts[21],accounts[49],accounts[1],accounts[61],accounts[70],accounts[73],accounts[32]],6222,{from:accounts[0]});


await instance.approve(accounts[82], 35060, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[82], 1000, {from: accounts[82]});

});
it('test 10',async() => {
await instance.batchTransfer([accounts[44],accounts[69],accounts[28]],7009,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[0],688,{from:accounts[3]});

await instance.approve(accounts[106], 21922, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[106], 1000, {from: accounts[106]});

});
it('test 11',async() => {
await instance.batchTransfer([accounts[56],accounts[34]],5689,{from:accounts[0]});

result = await instance.transfer(accounts[4],594,{from:accounts[3]});

await instance.approve(accounts[134], 36075, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[134], 1000, {from: accounts[134]});

});
it('test 12',async() => {

await instance.approve(accounts[192], 29898, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[192], 1000, {from: accounts[192]});

result = await instance.transfer(accounts[1],801,{from:accounts[0]});
await instance.batchTransfer([accounts[72],accounts[33],accounts[67],accounts[99],accounts[15],accounts[53],accounts[45],accounts[71],accounts[76]],4010,{from:accounts[0]});

});
it('test 13',async() => {
await instance.batchTransfer([accounts[88],accounts[36],accounts[57],accounts[64],accounts[27],accounts[85]],6781,{from:accounts[0]});


await instance.approve(accounts[62], 27464, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[62], 1000, {from: accounts[62]});

result = await instance.transfer(accounts[0],310,{from:accounts[2]});
});
it('test 14',async() => {
result = await instance.transfer(accounts[3],209,{from:accounts[0]});
await instance.batchTransfer([accounts[29]],7600,{from:accounts[0]});


await instance.approve(accounts[161], 25290, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[161], 1000, {from: accounts[161]});

});
it('test 15',async() => {
await instance.batchTransfer([accounts[68],accounts[18],accounts[25],accounts[83]],2856,{from:accounts[0]});


await instance.approve(accounts[76], 39721, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[76], 1000, {from: accounts[76]});

result = await instance.transfer(accounts[5],837,{from:accounts[0]});
});
it('test 16',async() => {
result = await instance.transfer(accounts[3],426,{from:accounts[4]});
await instance.batchTransfer([accounts[82]],1421,{from:accounts[0]});


await instance.approve(accounts[152], 35081, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[152], 1000, {from: accounts[152]});

});
it('test 17',async() => {
result = await instance.transfer(accounts[4],314,{from:accounts[1]});
await instance.batchTransfer([accounts[88],accounts[8],accounts[24],accounts[39]],5401,{from:accounts[0]});


await instance.approve(accounts[186], 28328, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[186], 1000, {from: accounts[186]});

});
it('test 18',async() => {
result = await instance.transfer(accounts[5],775,{from:accounts[1]});
await instance.batchTransfer([accounts[32],accounts[51],accounts[72],accounts[61],accounts[19],accounts[75],accounts[88],accounts[1]],9196,{from:accounts[0]});


await instance.approve(accounts[159], 29342, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[159], 1000, {from: accounts[159]});

});
it('test 19',async() => {
await instance.batchTransfer([accounts[16],accounts[48],accounts[59]],4824,{from:accounts[0]});

result = await instance.transfer(accounts[1],852,{from:accounts[1]});

await instance.approve(accounts[126], 26122, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[126], 1000, {from: accounts[126]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.batchTransfer([accounts[26],accounts[30],accounts[8],accounts[40],accounts[6],accounts[29],accounts[35],accounts[60],accounts[22],accounts[81]],9649,{from:accounts[0]});

result = await instance.transfer(accounts[3],457,{from:accounts[0]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[72], 21617, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[72], 1000, {from: accounts[72]});

});
it('test 21',async() => {

await instance.approve(accounts[130], 32653, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[130], 1000, {from: accounts[130]});

await instance.batchTransfer([accounts[14],accounts[15]],4132,{from:accounts[0]});

result = await instance.transfer(accounts[3],489,{from:accounts[3]});
});
it('test 22',async() => {
await instance.batchTransfer([accounts[97],accounts[62],accounts[72],accounts[68],accounts[54],accounts[26],accounts[1],accounts[20],accounts[99]],4463,{from:accounts[0]});


await instance.approve(accounts[61], 38561, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[61], 1000, {from: accounts[61]});

result = await instance.transfer(accounts[5],273,{from:accounts[4]});
});
it('test 23',async() => {
result = await instance.transfer(accounts[3],793,{from:accounts[0]});
await instance.batchTransfer([accounts[47],accounts[34],accounts[90],accounts[36]],8728,{from:accounts[0]});


await instance.approve(accounts[185], 31050, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[185], 1000, {from: accounts[185]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 24',async() => {
result = await instance.transfer(accounts[1],431,{from:accounts[2]});

await instance.approve(accounts[58], 36542, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[58], 1000, {from: accounts[58]});

await instance.batchTransfer([accounts[41],accounts[82],accounts[5],accounts[21]],4803,{from:accounts[0]});

});
it('test 25',async() => {
result = await instance.transfer(accounts[1],360,{from:accounts[2]});

await instance.approve(accounts[191], 32242, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[191], 1000, {from: accounts[191]});

await instance.batchTransfer([accounts[70],accounts[40],accounts[40],accounts[88],accounts[28],accounts[1],accounts[63],accounts[8]],6810,{from:accounts[0]});

});
it('test 26',async() => {
await instance.batchTransfer([accounts[21],accounts[23],accounts[20],accounts[32],accounts[1],accounts[27],accounts[64],accounts[53],accounts[38]],9665,{from:accounts[0]});

result = await instance.transfer(accounts[2],295,{from:accounts[0]});

await instance.approve(accounts[162], 27769, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[162], 1000, {from: accounts[162]});

});
it('test 27',async() => {
result = await instance.transfer(accounts[1],355,{from:accounts[1]});
await instance.batchTransfer([accounts[13],accounts[18],accounts[1],accounts[40],accounts[34],accounts[36]],3503,{from:accounts[0]});


await instance.approve(accounts[45], 21893, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[45], 1000, {from: accounts[45]});

});
it('test 28',async() => {

await instance.approve(accounts[152], 20405, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[152], 1000, {from: accounts[152]});

await instance.batchTransfer([accounts[46],accounts[65],accounts[95],accounts[46],accounts[31]],3956,{from:accounts[0]});

result = await instance.transfer(accounts[4],668,{from:accounts[5]});
});
it('test 29',async() => {
await instance.batchTransfer([accounts[22],accounts[60],accounts[83],accounts[29],accounts[74],accounts[87]],7475,{from:accounts[0]});

result = await instance.transfer(accounts[5],622,{from:accounts[4]});

await instance.approve(accounts[112], 20908, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[112], 1000, {from: accounts[112]});

});
});
