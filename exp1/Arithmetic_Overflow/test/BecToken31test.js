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


await instance.approve(accounts[41], 28735, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[41], 1000, {from: accounts[41]});

result = await instance.transfer(accounts[3],669,{from:accounts[4]});
await instance.batchTransfer([accounts[60],accounts[65],accounts[98],accounts[61],accounts[16],accounts[9],accounts[38],accounts[16]],1667,{from:accounts[0]});

});
it('test 1',async() => {

await instance.approve(accounts[194], 26648, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[194], 1000, {from: accounts[194]});

result = await instance.transfer(accounts[4],542,{from:accounts[4]});
await instance.batchTransfer([accounts[66],accounts[77],accounts[42],accounts[45]],1320,{from:accounts[0]});

});
it('test 2',async() => {

await instance.approve(accounts[149], 26325, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[149], 1000, {from: accounts[149]});

result = await instance.transfer(accounts[3],671,{from:accounts[0]});
await instance.batchTransfer([accounts[32]],6725,{from:accounts[0]});

});
it('test 3',async() => {

await instance.approve(accounts[101], 21543, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[101], 1000, {from: accounts[101]});

await instance.batchTransfer([accounts[14],accounts[78],accounts[12],accounts[28],accounts[4],accounts[40],accounts[63],accounts[32],accounts[31],accounts[22]],4460,{from:accounts[0]});

result = await instance.transfer(accounts[2],312,{from:accounts[5]});
});
it('test 4',async() => {
result = await instance.transfer(accounts[1],307,{from:accounts[0]});
await instance.batchTransfer([accounts[49],accounts[8],accounts[30]],9232,{from:accounts[0]});


await instance.approve(accounts[170], 35123, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[170], 1000, {from: accounts[170]});

});
it('test 5',async() => {
await instance.batchTransfer([accounts[31],accounts[15],accounts[96],accounts[32],accounts[91]],4349,{from:accounts[0]});

result = await instance.transfer(accounts[4],388,{from:accounts[1]});

await instance.approve(accounts[168], 28209, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[168], 1000, {from: accounts[168]});

});
it('test 6',async() => {
await instance.batchTransfer([accounts[4],accounts[55]],2952,{from:accounts[0]});


await instance.approve(accounts[45], 21137, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[45], 1000, {from: accounts[45]});

result = await instance.transfer(accounts[3],331,{from:accounts[2]});
});
it('test 7',async() => {
await instance.batchTransfer([accounts[78],accounts[71],accounts[10]],9743,{from:accounts[0]});

result = await instance.transfer(accounts[3],295,{from:accounts[5]});

await instance.approve(accounts[191], 33660, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[191], 1000, {from: accounts[191]});

});
it('test 8',async() => {
await instance.batchTransfer([accounts[73],accounts[76],accounts[24],accounts[17],accounts[24],accounts[53]],3831,{from:accounts[0]});

result = await instance.transfer(accounts[5],268,{from:accounts[0]});

await instance.approve(accounts[117], 22942, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[117], 1000, {from: accounts[117]});

});
it('test 9',async() => {
result = await instance.transfer(accounts[4],399,{from:accounts[2]});

await instance.approve(accounts[75], 25557, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[75], 1000, {from: accounts[75]});

await instance.batchTransfer([accounts[45],accounts[20],accounts[71],accounts[89],accounts[13],accounts[28],accounts[52],accounts[11],accounts[37],accounts[50]],2719,{from:accounts[0]});

});
it('test 10',async() => {
result = await instance.transfer(accounts[3],407,{from:accounts[1]});
await instance.batchTransfer([accounts[78],accounts[56]],6815,{from:accounts[0]});


await instance.approve(accounts[149], 36633, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[149], 1000, {from: accounts[149]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 11',async() => {
await instance.batchTransfer([accounts[76],accounts[51],accounts[19],accounts[58],accounts[15],accounts[72],accounts[47],accounts[57],accounts[46],accounts[86]],5301,{from:accounts[0]});


await instance.approve(accounts[159], 35828, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[159], 1000, {from: accounts[159]});

result = await instance.transfer(accounts[0],734,{from:accounts[0]});
});
it('test 12',async() => {

await instance.approve(accounts[40], 29808, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[40], 1000, {from: accounts[40]});

result = await instance.transfer(accounts[4],761,{from:accounts[3]});
await instance.batchTransfer([accounts[87],accounts[51],accounts[58],accounts[9],accounts[33],accounts[99],accounts[60],accounts[11],accounts[88]],8978,{from:accounts[0]});

});
it('test 13',async() => {
await instance.batchTransfer([accounts[13],accounts[13],accounts[92],accounts[95]],3307,{from:accounts[0]});

result = await instance.transfer(accounts[1],972,{from:accounts[2]});

await instance.approve(accounts[18], 27025, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[18], 1000, {from: accounts[18]});

});
it('test 14',async() => {

await instance.approve(accounts[168], 24539, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[168], 1000, {from: accounts[168]});

await instance.batchTransfer([accounts[49]],5676,{from:accounts[0]});

result = await instance.transfer(accounts[1],585,{from:accounts[3]});
});
it('test 15',async() => {

await instance.approve(accounts[68], 39620, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[68], 1000, {from: accounts[68]});

result = await instance.transfer(accounts[1],250,{from:accounts[4]});
await instance.batchTransfer([accounts[69],accounts[57],accounts[92]],6681,{from:accounts[0]});

});
it('test 16',async() => {
result = await instance.transfer(accounts[1],969,{from:accounts[0]});
await instance.batchTransfer([accounts[8],accounts[68],accounts[39],accounts[48]],7444,{from:accounts[0]});


await instance.approve(accounts[128], 31224, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[128], 1000, {from: accounts[128]});

});
it('test 17',async() => {
await instance.batchTransfer([accounts[75]],7907,{from:accounts[0]});

result = await instance.transfer(accounts[5],633,{from:accounts[1]});

await instance.approve(accounts[130], 26756, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[130], 1000, {from: accounts[130]});

});
it('test 18',async() => {

await instance.approve(accounts[4], 20698, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[4], 1000, {from: accounts[4]});

await instance.batchTransfer([accounts[3],accounts[89],accounts[31],accounts[70],accounts[35],accounts[64],accounts[58],accounts[37],accounts[21]],8195,{from:accounts[0]});

result = await instance.transfer(accounts[0],378,{from:accounts[4]});
});
it('test 19',async() => {
result = await instance.transfer(accounts[0],298,{from:accounts[0]});

await instance.approve(accounts[127], 29950, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[127], 1000, {from: accounts[127]});

await instance.batchTransfer([accounts[62],accounts[62],accounts[18],accounts[86],accounts[4],accounts[4],accounts[71],accounts[63],accounts[72],accounts[13]],4648,{from:accounts[0]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
result = await instance.transfer(accounts[1],639,{from:accounts[0]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[25], 22848, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[25], 1000, {from: accounts[25]});

await instance.batchTransfer([accounts[25],accounts[45],accounts[3]],6196,{from:accounts[0]});

});
it('test 21',async() => {
result = await instance.transfer(accounts[3],369,{from:accounts[2]});
await instance.batchTransfer([accounts[33],accounts[13],accounts[42],accounts[29]],4489,{from:accounts[0]});


await instance.approve(accounts[110], 36804, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[110], 1000, {from: accounts[110]});

});
it('test 22',async() => {
result = await instance.transfer(accounts[2],884,{from:accounts[0]});

await instance.approve(accounts[174], 38299, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[174], 1000, {from: accounts[174]});

await instance.batchTransfer([accounts[77],accounts[23],accounts[98],accounts[40],accounts[11]],2836,{from:accounts[0]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 23',async() => {
result = await instance.transfer(accounts[4],538,{from:accounts[4]});
await instance.batchTransfer([accounts[72],accounts[62],accounts[68],accounts[27],accounts[94],accounts[73],accounts[44],accounts[72],accounts[13],accounts[87]],9847,{from:accounts[0]});


await instance.approve(accounts[89], 27517, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[89], 1000, {from: accounts[89]});

});
it('test 24',async() => {
await instance.batchTransfer([accounts[3],accounts[79],accounts[47]],7618,{from:accounts[0]});

result = await instance.transfer(accounts[5],882,{from:accounts[0]});

await instance.approve(accounts[28], 32550, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[28], 1000, {from: accounts[28]});

});
it('test 25',async() => {

await instance.approve(accounts[25], 24806, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[25], 1000, {from: accounts[25]});

await instance.batchTransfer([accounts[94],accounts[28],accounts[9],accounts[39],accounts[77],accounts[82],accounts[96]],6807,{from:accounts[0]});

result = await instance.transfer(accounts[3],847,{from:accounts[0]});
});
it('test 26',async() => {

await instance.approve(accounts[62], 25450, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[62], 1000, {from: accounts[62]});

await instance.batchTransfer([accounts[86],accounts[39],accounts[6],accounts[71],accounts[34]],4108,{from:accounts[0]});

result = await instance.transfer(accounts[1],224,{from:accounts[0]});
});
it('test 27',async() => {
result = await instance.transfer(accounts[4],417,{from:accounts[4]});
await instance.batchTransfer([accounts[17],accounts[66],accounts[67],accounts[34],accounts[36],accounts[78],accounts[3],accounts[95]],4979,{from:accounts[0]});


await instance.approve(accounts[93], 35542, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[93], 1000, {from: accounts[93]});

});
it('test 28',async() => {
result = await instance.transfer(accounts[0],544,{from:accounts[0]});
await instance.batchTransfer([accounts[98]],6524,{from:accounts[0]});


await instance.approve(accounts[123], 25983, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[123], 1000, {from: accounts[123]});

});
it('test 29',async() => {
await instance.batchTransfer([accounts[16],accounts[56],accounts[4],accounts[54],accounts[47],accounts[38]],9902,{from:accounts[0]});

result = await instance.transfer(accounts[4],875,{from:accounts[1]});

await instance.approve(accounts[19], 36295, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[19], 1000, {from: accounts[19]});

});
});
