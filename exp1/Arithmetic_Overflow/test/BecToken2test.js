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
await instance.batchTransfer([accounts[61],accounts[100]],1896,{from:accounts[0]});

result = await instance.transfer(accounts[1],533,{from:accounts[5]});

await instance.approve(accounts[150], 28914, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[150], 1000, {from: accounts[150]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 1',async() => {
result = await instance.transfer(accounts[5],582,{from:accounts[3]});

await instance.approve(accounts[30], 29365, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[30], 1000, {from: accounts[30]});

await instance.batchTransfer([accounts[43],accounts[46],accounts[10],accounts[8],accounts[98],accounts[78],accounts[41],accounts[60]],8401,{from:accounts[0]});

});
it('test 2',async() => {

await instance.approve(accounts[152], 22251, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[152], 1000, {from: accounts[152]});

await instance.batchTransfer([accounts[32],accounts[46],accounts[60]],7067,{from:accounts[0]});

result = await instance.transfer(accounts[3],391,{from:accounts[1]});
});
it('test 3',async() => {
result = await instance.transfer(accounts[2],246,{from:accounts[0]});
await instance.batchTransfer([accounts[37],accounts[63],accounts[1],accounts[58],accounts[78],accounts[65],accounts[2],accounts[38]],4551,{from:accounts[0]});


await instance.approve(accounts[100], 31576, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[100], 1000, {from: accounts[100]});

});
it('test 4',async() => {
result = await instance.transfer(accounts[1],551,{from:accounts[1]});
await instance.batchTransfer([accounts[28],accounts[77],accounts[92],accounts[76],accounts[18],accounts[40],accounts[17],accounts[37],accounts[39],accounts[97]],1997,{from:accounts[0]});


await instance.approve(accounts[40], 21781, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[40], 1000, {from: accounts[40]});

});
it('test 5',async() => {

await instance.approve(accounts[4], 28923, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[4], 1000, {from: accounts[4]});

result = await instance.transfer(accounts[3],565,{from:accounts[4]});
await instance.batchTransfer([accounts[78],accounts[67],accounts[73],accounts[40],accounts[90]],7579,{from:accounts[0]});

});
it('test 6',async() => {

await instance.approve(accounts[189], 31712, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[189], 1000, {from: accounts[189]});

result = await instance.transfer(accounts[0],398,{from:accounts[4]});
await instance.batchTransfer([accounts[20],accounts[71],accounts[84],accounts[94],accounts[92],accounts[55],accounts[67],accounts[81],accounts[51]],8717,{from:accounts[0]});

});
it('test 7',async() => {

await instance.approve(accounts[180], 25511, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[180], 1000, {from: accounts[180]});

await instance.batchTransfer([accounts[84],accounts[58],accounts[100],accounts[51],accounts[42],accounts[66],accounts[55],accounts[34]],4604,{from:accounts[0]});

result = await instance.transfer(accounts[3],301,{from:accounts[1]});
});
it('test 8',async() => {

await instance.approve(accounts[59], 22415, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[59], 1000, {from: accounts[59]});

result = await instance.transfer(accounts[5],264,{from:accounts[2]});
await instance.batchTransfer([accounts[92],accounts[25]],6505,{from:accounts[0]});

});
it('test 9',async() => {

await instance.approve(accounts[190], 34694, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[190], 1000, {from: accounts[190]});

result = await instance.transfer(accounts[4],978,{from:accounts[5]});
await instance.batchTransfer([accounts[2],accounts[21],accounts[31],accounts[19],accounts[45],accounts[35],accounts[62]],6239,{from:accounts[0]});

});
it('test 10',async() => {

await instance.approve(accounts[135], 24753, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[135], 1000, {from: accounts[135]});

await instance.batchTransfer([accounts[79],accounts[1]],3003,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[2],417,{from:accounts[0]});
});
it('test 11',async() => {
await instance.batchTransfer([accounts[93],accounts[4],accounts[96],accounts[24],accounts[62],accounts[35],accounts[31]],9061,{from:accounts[0]});


await instance.approve(accounts[183], 27938, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[183], 1000, {from: accounts[183]});

result = await instance.transfer(accounts[1],292,{from:accounts[3]});
});
it('test 12',async() => {

await instance.approve(accounts[130], 37616, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[130], 1000, {from: accounts[130]});

result = await instance.transfer(accounts[3],821,{from:accounts[1]});
await instance.batchTransfer([accounts[98],accounts[23],accounts[51],accounts[21],accounts[25]],2534,{from:accounts[0]});

});
it('test 13',async() => {

await instance.approve(accounts[47], 26667, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[47], 1000, {from: accounts[47]});

result = await instance.transfer(accounts[5],619,{from:accounts[2]});
await instance.batchTransfer([accounts[65],accounts[90],accounts[6],accounts[88],accounts[7],accounts[5]],9440,{from:accounts[0]});

});
it('test 14',async() => {
result = await instance.transfer(accounts[5],441,{from:accounts[5]});

await instance.approve(accounts[96], 34992, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[96], 1000, {from: accounts[96]});

await instance.batchTransfer([accounts[67],accounts[17],accounts[83],accounts[48],accounts[76],accounts[8],accounts[66],accounts[53],accounts[80],accounts[75]],7579,{from:accounts[0]});

});
it('test 15',async() => {
await instance.batchTransfer([accounts[32],accounts[21],accounts[19],accounts[31],accounts[62],accounts[20],accounts[8]],9807,{from:accounts[0]});


await instance.approve(accounts[47], 23770, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[47], 1000, {from: accounts[47]});

result = await instance.transfer(accounts[0],276,{from:accounts[4]});
});
it('test 16',async() => {
result = await instance.transfer(accounts[1],367,{from:accounts[1]});
await instance.batchTransfer([accounts[75],accounts[48]],7834,{from:accounts[0]});


await instance.approve(accounts[146], 22698, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[146], 1000, {from: accounts[146]});

});
it('test 17',async() => {

await instance.approve(accounts[88], 31498, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[88], 1000, {from: accounts[88]});

result = await instance.transfer(accounts[5],817,{from:accounts[2]});
await instance.batchTransfer([accounts[81],accounts[31],accounts[32],accounts[65],accounts[10],accounts[36],accounts[12],accounts[55],accounts[70],accounts[47]],3638,{from:accounts[0]});

});
it('test 18',async() => {
result = await instance.transfer(accounts[4],562,{from:accounts[5]});
await instance.batchTransfer([accounts[55],accounts[47],accounts[52],accounts[82],accounts[39],accounts[47],accounts[46],accounts[81],accounts[55],accounts[49]],1312,{from:accounts[0]});


await instance.approve(accounts[99], 32514, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[99], 1000, {from: accounts[99]});

});
it('test 19',async() => {
result = await instance.transfer(accounts[3],601,{from:accounts[3]});

await instance.approve(accounts[146], 36475, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[146], 1000, {from: accounts[146]});

await instance.batchTransfer([accounts[27],accounts[58],accounts[40]],2702,{from:accounts[0]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
result = await instance.transfer(accounts[2],958,{from:accounts[4]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[76]],3275,{from:accounts[0]});


await instance.approve(accounts[111], 31574, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[111], 1000, {from: accounts[111]});

});
it('test 21',async() => {

await instance.approve(accounts[117], 38075, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[117], 1000, {from: accounts[117]});

await instance.batchTransfer([accounts[21]],5710,{from:accounts[0]});

result = await instance.transfer(accounts[2],947,{from:accounts[4]});
});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 22',async() => {

await instance.approve(accounts[34], 35686, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[34], 1000, {from: accounts[34]});

await instance.batchTransfer([accounts[44],accounts[33],accounts[90],accounts[50],accounts[51],accounts[77],accounts[73]],4057,{from:accounts[0]});

result = await instance.transfer(accounts[1],227,{from:accounts[0]});
});
it('test 23',async() => {

await instance.approve(accounts[159], 37200, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[159], 1000, {from: accounts[159]});

await instance.batchTransfer([accounts[90],accounts[6],accounts[36],accounts[64]],7131,{from:accounts[0]});

result = await instance.transfer(accounts[1],665,{from:accounts[3]});
});
it('test 24',async() => {
result = await instance.transfer(accounts[3],551,{from:accounts[1]});

await instance.approve(accounts[127], 32275, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[127], 1000, {from: accounts[127]});

await instance.batchTransfer([accounts[18],accounts[41],accounts[69],accounts[49],accounts[94]],8634,{from:accounts[0]});

});
it('test 25',async() => {
await instance.batchTransfer([accounts[82],accounts[86],accounts[8],accounts[63],accounts[17],accounts[30]],6431,{from:accounts[0]});


await instance.approve(accounts[90], 23905, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[90], 1000, {from: accounts[90]});

result = await instance.transfer(accounts[4],711,{from:accounts[5]});
});
it('test 26',async() => {
await instance.batchTransfer([accounts[46],accounts[77],accounts[98],accounts[88],accounts[79],accounts[29],accounts[36]],9443,{from:accounts[0]});

result = await instance.transfer(accounts[2],378,{from:accounts[1]});

await instance.approve(accounts[132], 35685, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[132], 1000, {from: accounts[132]});

});
it('test 27',async() => {
await instance.batchTransfer([accounts[43],accounts[84],accounts[14]],7713,{from:accounts[0]});


await instance.approve(accounts[31], 28272, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[31], 1000, {from: accounts[31]});

result = await instance.transfer(accounts[0],538,{from:accounts[2]});
});
it('test 28',async() => {

await instance.approve(accounts[129], 27240, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[129], 1000, {from: accounts[129]});

await instance.batchTransfer([accounts[93]],1108,{from:accounts[0]});

result = await instance.transfer(accounts[3],560,{from:accounts[5]});
});
it('test 29',async() => {

await instance.approve(accounts[177], 32500, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[177], 1000, {from: accounts[177]});

await instance.batchTransfer([accounts[63],accounts[91],accounts[99],accounts[62],accounts[49]],6067,{from:accounts[0]});

result = await instance.transfer(accounts[5],555,{from:accounts[1]});
});
});
