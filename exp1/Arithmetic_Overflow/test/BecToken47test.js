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
await instance.batchTransfer([accounts[14],accounts[12],accounts[77],accounts[86],accounts[64]],5247,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[5],295,{from:accounts[0]});

await instance.approve(accounts[177], 23180, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[177], 1000, {from: accounts[177]});

});
it('test 1',async() => {
result = await instance.transfer(accounts[2],836,{from:accounts[4]});

await instance.approve(accounts[187], 33407, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[187], 1000, {from: accounts[187]});

await instance.batchTransfer([accounts[7],accounts[10],accounts[53],accounts[28]],7299,{from:accounts[0]});

});
it('test 2',async() => {

await instance.approve(accounts[9], 39896, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[9], 1000, {from: accounts[9]});

result = await instance.transfer(accounts[0],248,{from:accounts[2]});
await instance.batchTransfer([accounts[100]],2388,{from:accounts[0]});

});
it('test 3',async() => {

await instance.approve(accounts[73], 39385, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[73], 1000, {from: accounts[73]});

await instance.batchTransfer([accounts[94],accounts[66],accounts[58],accounts[3]],3981,{from:accounts[0]});

result = await instance.transfer(accounts[3],373,{from:accounts[1]});
});
it('test 4',async() => {
result = await instance.transfer(accounts[5],607,{from:accounts[5]});
await instance.batchTransfer([accounts[16]],2637,{from:accounts[0]});


await instance.approve(accounts[134], 39685, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[134], 1000, {from: accounts[134]});

});
it('test 5',async() => {
await instance.batchTransfer([accounts[77],accounts[82],accounts[14],accounts[19],accounts[92],accounts[10],accounts[27],accounts[69]],2843,{from:accounts[0]});

result = await instance.transfer(accounts[5],523,{from:accounts[5]});

await instance.approve(accounts[83], 25353, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[83], 1000, {from: accounts[83]});

});
it('test 6',async() => {
await instance.batchTransfer([accounts[97],accounts[71],accounts[38],accounts[27],accounts[45],accounts[62],accounts[21]],2604,{from:accounts[0]});


await instance.approve(accounts[145], 36358, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[145], 1000, {from: accounts[145]});

result = await instance.transfer(accounts[5],635,{from:accounts[0]});
});
it('test 7',async() => {

await instance.approve(accounts[119], 27463, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[119], 1000, {from: accounts[119]});

await instance.batchTransfer([accounts[60],accounts[87],accounts[70],accounts[83],accounts[60]],1414,{from:accounts[0]});

result = await instance.transfer(accounts[5],316,{from:accounts[2]});
});
it('test 8',async() => {
result = await instance.transfer(accounts[0],215,{from:accounts[5]});
await instance.batchTransfer([accounts[44],accounts[2]],2002,{from:accounts[0]});


await instance.approve(accounts[82], 24518, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[82], 1000, {from: accounts[82]});

});
it('test 9',async() => {
await instance.batchTransfer([accounts[87],accounts[52],accounts[91],accounts[5],accounts[57]],4521,{from:accounts[0]});


await instance.approve(accounts[141], 33146, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[141], 1000, {from: accounts[141]});

result = await instance.transfer(accounts[0],327,{from:accounts[0]});
});
it('test 10',async() => {

await instance.approve(accounts[95], 29570, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[95], 1000, {from: accounts[95]});

result = await instance.transfer(accounts[2],514,{from:accounts[4]});
await instance.batchTransfer([accounts[63],accounts[43],accounts[80],accounts[58],accounts[45],accounts[93],accounts[54],accounts[70]],3157,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 11',async() => {

await instance.approve(accounts[120], 37050, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[120], 1000, {from: accounts[120]});

await instance.batchTransfer([accounts[95]],2644,{from:accounts[0]});

result = await instance.transfer(accounts[4],546,{from:accounts[3]});
});
it('test 12',async() => {
await instance.batchTransfer([accounts[68],accounts[7],accounts[43],accounts[80],accounts[10],accounts[57],accounts[100]],1444,{from:accounts[0]});

result = await instance.transfer(accounts[3],308,{from:accounts[1]});

await instance.approve(accounts[98], 31531, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[98], 1000, {from: accounts[98]});

});
it('test 13',async() => {

await instance.approve(accounts[56], 30903, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[56], 1000, {from: accounts[56]});

await instance.batchTransfer([accounts[52],accounts[12],accounts[45]],3041,{from:accounts[0]});

result = await instance.transfer(accounts[0],722,{from:accounts[4]});
});
it('test 14',async() => {

await instance.approve(accounts[23], 33660, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[23], 1000, {from: accounts[23]});

result = await instance.transfer(accounts[4],465,{from:accounts[1]});
await instance.batchTransfer([accounts[74],accounts[63],accounts[29],accounts[71],accounts[60],accounts[43],accounts[68],accounts[33],accounts[91],accounts[20]],3372,{from:accounts[0]});

});
it('test 15',async() => {
await instance.batchTransfer([accounts[100],accounts[92],accounts[88],accounts[25],accounts[50]],1932,{from:accounts[0]});


await instance.approve(accounts[4], 39286, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[4], 1000, {from: accounts[4]});

result = await instance.transfer(accounts[2],912,{from:accounts[2]});
});
it('test 16',async() => {

await instance.approve(accounts[77], 34749, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[77], 1000, {from: accounts[77]});

await instance.batchTransfer([accounts[7],accounts[82],accounts[84],accounts[9],accounts[57],accounts[61],accounts[67],accounts[96],accounts[60]],4572,{from:accounts[0]});

result = await instance.transfer(accounts[4],340,{from:accounts[0]});
});
it('test 17',async() => {
await instance.batchTransfer([accounts[60]],6883,{from:accounts[0]});


await instance.approve(accounts[174], 35665, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[174], 1000, {from: accounts[174]});

result = await instance.transfer(accounts[3],265,{from:accounts[3]});
});
it('test 18',async() => {

await instance.approve(accounts[84], 39578, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[84], 1000, {from: accounts[84]});

await instance.batchTransfer([accounts[10]],3585,{from:accounts[0]});

result = await instance.transfer(accounts[0],347,{from:accounts[4]});
});
it('test 19',async() => {

await instance.approve(accounts[18], 25487, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[18], 1000, {from: accounts[18]});

result = await instance.transfer(accounts[4],918,{from:accounts[3]});
await instance.batchTransfer([accounts[26],accounts[94],accounts[18],accounts[12],accounts[92],accounts[61]],1519,{from:accounts[0]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
result = await instance.transfer(accounts[0],325,{from:accounts[0]});

await instance.approve(accounts[69], 25151, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[69], 1000, {from: accounts[69]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[59],accounts[79]],4942,{from:accounts[0]});

});
it('test 21',async() => {
await instance.batchTransfer([accounts[1],accounts[32],accounts[25],accounts[26],accounts[7],accounts[1]],6177,{from:accounts[0]});

result = await instance.transfer(accounts[4],414,{from:accounts[0]});

await instance.approve(accounts[135], 33481, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[135], 1000, {from: accounts[135]});

});
it('test 22',async() => {

await instance.approve(accounts[155], 33525, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[155], 1000, {from: accounts[155]});

await instance.batchTransfer([accounts[70],accounts[28],accounts[48],accounts[34],accounts[58],accounts[33],accounts[84],accounts[57],accounts[88]],4569,{from:accounts[0]});

result = await instance.transfer(accounts[5],316,{from:accounts[1]});
});
it('test 23',async() => {
await instance.batchTransfer([accounts[94]],1965,{from:accounts[0]});


await instance.approve(accounts[79], 29664, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[79], 1000, {from: accounts[79]});

result = await instance.transfer(accounts[0],742,{from:accounts[3]});
});
it('test 24',async() => {
await instance.batchTransfer([accounts[33],accounts[95],accounts[95],accounts[85],accounts[65],accounts[2],accounts[55],accounts[43],accounts[99],accounts[32]],6720,{from:accounts[0]});


await instance.approve(accounts[88], 34702, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[88], 1000, {from: accounts[88]});

result = await instance.transfer(accounts[4],703,{from:accounts[4]});
});
it('test 25',async() => {
await instance.batchTransfer([accounts[90],accounts[43],accounts[12],accounts[5],accounts[47],accounts[23]],6973,{from:accounts[0]});


await instance.approve(accounts[56], 20285, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[56], 1000, {from: accounts[56]});

result = await instance.transfer(accounts[5],434,{from:accounts[3]});
});
it('test 26',async() => {
await instance.batchTransfer([accounts[21],accounts[71],accounts[41],accounts[31]],3589,{from:accounts[0]});


await instance.approve(accounts[129], 39719, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[129], 1000, {from: accounts[129]});

result = await instance.transfer(accounts[0],364,{from:accounts[4]});
});
it('test 27',async() => {
await instance.batchTransfer([accounts[44],accounts[47],accounts[63],accounts[68],accounts[31]],3511,{from:accounts[0]});


await instance.approve(accounts[72], 32945, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[72], 1000, {from: accounts[72]});

result = await instance.transfer(accounts[0],768,{from:accounts[1]});
});
it('test 28',async() => {

await instance.approve(accounts[147], 24385, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[147], 1000, {from: accounts[147]});

result = await instance.transfer(accounts[4],740,{from:accounts[4]});
await instance.batchTransfer([accounts[22],accounts[44],accounts[46],accounts[21],accounts[31]],9193,{from:accounts[0]});

});
it('test 29',async() => {
await instance.batchTransfer([accounts[43],accounts[7],accounts[71],accounts[15],accounts[32],accounts[12]],3548,{from:accounts[0]});

result = await instance.transfer(accounts[4],421,{from:accounts[1]});

await instance.approve(accounts[62], 36057, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[62], 1000, {from: accounts[62]});

});
});
