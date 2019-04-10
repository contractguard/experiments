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

await instance.approve(accounts[119], 38985, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[119], 1000, {from: accounts[119]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[95],accounts[71]],8628,{from:accounts[0]});

result = await instance.transfer(accounts[3],730,{from:accounts[5]});
});
it('test 1',async() => {
await instance.batchTransfer([accounts[19],accounts[57],accounts[90],accounts[78],accounts[27],accounts[12],accounts[98],accounts[45],accounts[87]],7281,{from:accounts[0]});


await instance.approve(accounts[27], 23253, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[27], 1000, {from: accounts[27]});

result = await instance.transfer(accounts[4],896,{from:accounts[5]});
});
it('test 2',async() => {
await instance.batchTransfer([accounts[8],accounts[36],accounts[100],accounts[1],accounts[36]],3968,{from:accounts[0]});


await instance.approve(accounts[25], 38293, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[25], 1000, {from: accounts[25]});

result = await instance.transfer(accounts[0],429,{from:accounts[0]});
});
it('test 3',async() => {

await instance.approve(accounts[140], 34708, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[140], 1000, {from: accounts[140]});

result = await instance.transfer(accounts[2],974,{from:accounts[5]});
await instance.batchTransfer([accounts[13],accounts[89],accounts[35],accounts[94]],4834,{from:accounts[0]});

});
it('test 4',async() => {

await instance.approve(accounts[37], 31367, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[37], 1000, {from: accounts[37]});

result = await instance.transfer(accounts[1],416,{from:accounts[5]});
await instance.batchTransfer([accounts[33],accounts[74],accounts[13],accounts[27]],4212,{from:accounts[0]});

});
it('test 5',async() => {

await instance.approve(accounts[141], 30581, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[141], 1000, {from: accounts[141]});

await instance.batchTransfer([accounts[55],accounts[11],accounts[44],accounts[63],accounts[96],accounts[68],accounts[21],accounts[21],accounts[99],accounts[26]],1658,{from:accounts[0]});

result = await instance.transfer(accounts[3],677,{from:accounts[0]});
});
it('test 6',async() => {
result = await instance.transfer(accounts[2],558,{from:accounts[4]});
await instance.batchTransfer([accounts[58],accounts[9],accounts[65]],2541,{from:accounts[0]});


await instance.approve(accounts[178], 31394, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[178], 1000, {from: accounts[178]});

});
it('test 7',async() => {
result = await instance.transfer(accounts[5],665,{from:accounts[1]});

await instance.approve(accounts[4], 25329, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[4], 1000, {from: accounts[4]});

await instance.batchTransfer([accounts[50],accounts[64],accounts[3],accounts[28],accounts[61],accounts[7],accounts[59]],5040,{from:accounts[0]});

});
it('test 8',async() => {

await instance.approve(accounts[30], 32232, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[30], 1000, {from: accounts[30]});

result = await instance.transfer(accounts[4],809,{from:accounts[0]});
await instance.batchTransfer([accounts[80],accounts[64],accounts[40],accounts[56],accounts[91],accounts[26],accounts[65],accounts[88],accounts[29],accounts[39]],2537,{from:accounts[0]});

});
it('test 9',async() => {
await instance.batchTransfer([accounts[3],accounts[74],accounts[92],accounts[50],accounts[86],accounts[64],accounts[39],accounts[100],accounts[84]],1270,{from:accounts[0]});


await instance.approve(accounts[32], 23153, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[32], 1000, {from: accounts[32]});

result = await instance.transfer(accounts[1],577,{from:accounts[2]});
});
it('test 10',async() => {
result = await instance.transfer(accounts[0],207,{from:accounts[0]});

await instance.approve(accounts[45], 25109, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[45], 1000, {from: accounts[45]});

await instance.batchTransfer([accounts[40],accounts[70],accounts[21],accounts[11],accounts[35],accounts[90]],8412,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 11',async() => {
result = await instance.transfer(accounts[3],255,{from:accounts[2]});

await instance.approve(accounts[194], 32723, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[194], 1000, {from: accounts[194]});

await instance.batchTransfer([accounts[84],accounts[67],accounts[61],accounts[58],accounts[41],accounts[65]],5396,{from:accounts[0]});

});
it('test 12',async() => {
await instance.batchTransfer([accounts[3],accounts[54],accounts[49],accounts[26],accounts[61]],3944,{from:accounts[0]});

result = await instance.transfer(accounts[3],470,{from:accounts[1]});

await instance.approve(accounts[159], 35401, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[159], 1000, {from: accounts[159]});

});
it('test 13',async() => {
result = await instance.transfer(accounts[1],445,{from:accounts[5]});

await instance.approve(accounts[154], 33627, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[154], 1000, {from: accounts[154]});

await instance.batchTransfer([accounts[28],accounts[62],accounts[89],accounts[93],accounts[29],accounts[13],accounts[28]],4395,{from:accounts[0]});

});
it('test 14',async() => {
await instance.batchTransfer([accounts[69]],3421,{from:accounts[0]});

result = await instance.transfer(accounts[0],370,{from:accounts[4]});

await instance.approve(accounts[141], 25029, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[141], 1000, {from: accounts[141]});

});
it('test 15',async() => {
await instance.batchTransfer([accounts[21],accounts[22],accounts[64],accounts[32],accounts[58],accounts[16]],5787,{from:accounts[0]});

result = await instance.transfer(accounts[5],959,{from:accounts[1]});

await instance.approve(accounts[117], 31259, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[117], 1000, {from: accounts[117]});

});
it('test 16',async() => {

await instance.approve(accounts[121], 27160, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[121], 1000, {from: accounts[121]});

await instance.batchTransfer([accounts[25]],5983,{from:accounts[0]});

result = await instance.transfer(accounts[3],728,{from:accounts[4]});
});
it('test 17',async() => {

await instance.approve(accounts[183], 25764, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[183], 1000, {from: accounts[183]});

await instance.batchTransfer([accounts[27],accounts[46],accounts[60],accounts[89],accounts[18],accounts[25],accounts[66],accounts[99],accounts[79]],2809,{from:accounts[0]});

result = await instance.transfer(accounts[5],967,{from:accounts[0]});
});
it('test 18',async() => {

await instance.approve(accounts[18], 34218, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[18], 1000, {from: accounts[18]});

await instance.batchTransfer([accounts[85],accounts[12],accounts[92],accounts[36],accounts[46],accounts[46]],2800,{from:accounts[0]});

result = await instance.transfer(accounts[1],372,{from:accounts[2]});
});
it('test 19',async() => {

await instance.approve(accounts[125], 33676, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[125], 1000, {from: accounts[125]});

result = await instance.transfer(accounts[2],749,{from:accounts[3]});
await instance.batchTransfer([accounts[15],accounts[50],accounts[61],accounts[30],accounts[77],accounts[11],accounts[67],accounts[94],accounts[99],accounts[76]],7786,{from:accounts[0]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.batchTransfer([accounts[69]],9679,{from:accounts[0]});

result = await instance.transfer(accounts[3],727,{from:accounts[1]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[113], 26570, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[113], 1000, {from: accounts[113]});

});
it('test 21',async() => {
result = await instance.transfer(accounts[2],652,{from:accounts[1]});

await instance.approve(accounts[10], 35962, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[10], 1000, {from: accounts[10]});

await instance.batchTransfer([accounts[11],accounts[9],accounts[70],accounts[12],accounts[43],accounts[44],accounts[48],accounts[73],accounts[10],accounts[51]],1748,{from:accounts[0]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 22',async() => {
result = await instance.transfer(accounts[2],394,{from:accounts[2]});
await instance.batchTransfer([accounts[19],accounts[9],accounts[96],accounts[57]],2289,{from:accounts[0]});


await instance.approve(accounts[44], 26359, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[44], 1000, {from: accounts[44]});

});
it('test 23',async() => {
await instance.batchTransfer([accounts[11],accounts[75],accounts[96]],9158,{from:accounts[0]});

result = await instance.transfer(accounts[2],879,{from:accounts[0]});

await instance.approve(accounts[118], 23962, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[118], 1000, {from: accounts[118]});

});
it('test 24',async() => {
result = await instance.transfer(accounts[1],422,{from:accounts[5]});
await instance.batchTransfer([accounts[93],accounts[11],accounts[45],accounts[10],accounts[76],accounts[35],accounts[81],accounts[89]],3262,{from:accounts[0]});


await instance.approve(accounts[22], 36781, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[22], 1000, {from: accounts[22]});

});
it('test 25',async() => {
result = await instance.transfer(accounts[0],527,{from:accounts[3]});

await instance.approve(accounts[73], 24358, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[73], 1000, {from: accounts[73]});

await instance.batchTransfer([accounts[86],accounts[57],accounts[77],accounts[29],accounts[17],accounts[59],accounts[13]],2537,{from:accounts[0]});

});
it('test 26',async() => {

await instance.approve(accounts[130], 37244, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[130], 1000, {from: accounts[130]});

result = await instance.transfer(accounts[0],547,{from:accounts[1]});
await instance.batchTransfer([accounts[98],accounts[100],accounts[18],accounts[84],accounts[70],accounts[12],accounts[93],accounts[74]],1426,{from:accounts[0]});

});
it('test 27',async() => {
result = await instance.transfer(accounts[2],489,{from:accounts[4]});

await instance.approve(accounts[6], 39560, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[6], 1000, {from: accounts[6]});

await instance.batchTransfer([accounts[49],accounts[35],accounts[85],accounts[53]],7517,{from:accounts[0]});

});
it('test 28',async() => {

await instance.approve(accounts[22], 24494, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[22], 1000, {from: accounts[22]});

await instance.batchTransfer([accounts[80],accounts[49],accounts[85],accounts[19],accounts[64]],7907,{from:accounts[0]});

result = await instance.transfer(accounts[5],223,{from:accounts[0]});
});
it('test 29',async() => {
await instance.batchTransfer([accounts[6],accounts[44],accounts[99],accounts[84],accounts[92]],3683,{from:accounts[0]});

result = await instance.transfer(accounts[4],590,{from:accounts[0]});

await instance.approve(accounts[182], 35798, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[182], 1000, {from: accounts[182]});

});
});
