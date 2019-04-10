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
await instance.batchTransfer([accounts[100],accounts[11],accounts[73],accounts[57],accounts[95],accounts[46],accounts[17],accounts[40],accounts[78]],7377,{from:accounts[0]});

result = await instance.transfer(accounts[5],285,{from:accounts[3]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[59], 29663, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[59], 1000, {from: accounts[59]});

});
it('test 1',async() => {
result = await instance.transfer(accounts[0],288,{from:accounts[0]});
await instance.batchTransfer([accounts[13],accounts[88],accounts[10],accounts[8],accounts[49],accounts[38],accounts[74],accounts[23]],6493,{from:accounts[0]});


await instance.approve(accounts[116], 23489, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[116], 1000, {from: accounts[116]});

});
it('test 2',async() => {
result = await instance.transfer(accounts[3],590,{from:accounts[0]});
await instance.batchTransfer([accounts[18],accounts[11],accounts[16],accounts[75],accounts[56],accounts[58],accounts[71],accounts[83],accounts[62],accounts[37]],6518,{from:accounts[0]});


await instance.approve(accounts[47], 36022, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[47], 1000, {from: accounts[47]});

});
it('test 3',async() => {
await instance.batchTransfer([accounts[78],accounts[98],accounts[20],accounts[97],accounts[19],accounts[72]],4100,{from:accounts[0]});


await instance.approve(accounts[116], 39854, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[116], 1000, {from: accounts[116]});

result = await instance.transfer(accounts[5],932,{from:accounts[4]});
});
it('test 4',async() => {
await instance.batchTransfer([accounts[29],accounts[62],accounts[66],accounts[1],accounts[35],accounts[20]],8603,{from:accounts[0]});


await instance.approve(accounts[189], 38853, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[189], 1000, {from: accounts[189]});

result = await instance.transfer(accounts[4],882,{from:accounts[4]});
});
it('test 5',async() => {
result = await instance.transfer(accounts[1],819,{from:accounts[1]});
await instance.batchTransfer([accounts[90],accounts[5]],5512,{from:accounts[0]});


await instance.approve(accounts[165], 37923, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[165], 1000, {from: accounts[165]});

});
it('test 6',async() => {

await instance.approve(accounts[7], 20941, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[7], 1000, {from: accounts[7]});

result = await instance.transfer(accounts[1],221,{from:accounts[1]});
await instance.batchTransfer([accounts[65],accounts[86],accounts[82],accounts[64],accounts[49],accounts[79],accounts[19],accounts[96],accounts[18]],9710,{from:accounts[0]});

});
it('test 7',async() => {

await instance.approve(accounts[24], 20918, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[24], 1000, {from: accounts[24]});

await instance.batchTransfer([accounts[49],accounts[40],accounts[76],accounts[68],accounts[65]],1318,{from:accounts[0]});

result = await instance.transfer(accounts[3],365,{from:accounts[4]});
});
it('test 8',async() => {
await instance.batchTransfer([accounts[44],accounts[27],accounts[65],accounts[51]],1034,{from:accounts[0]});


await instance.approve(accounts[152], 21990, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[152], 1000, {from: accounts[152]});

result = await instance.transfer(accounts[2],781,{from:accounts[4]});
});
it('test 9',async() => {
await instance.batchTransfer([accounts[80],accounts[61],accounts[84],accounts[95],accounts[41],accounts[74],accounts[27],accounts[8]],8353,{from:accounts[0]});


await instance.approve(accounts[193], 31102, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[193], 1000, {from: accounts[193]});

result = await instance.transfer(accounts[0],383,{from:accounts[1]});
});
it('test 10',async() => {
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[88], 38534, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[88], 1000, {from: accounts[88]});

await instance.batchTransfer([accounts[94],accounts[78],accounts[83],accounts[40]],7454,{from:accounts[0]});

result = await instance.transfer(accounts[3],394,{from:accounts[0]});
});
it('test 11',async() => {
result = await instance.transfer(accounts[0],242,{from:accounts[4]});

await instance.approve(accounts[133], 20131, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[133], 1000, {from: accounts[133]});

await instance.batchTransfer([accounts[72],accounts[28],accounts[22],accounts[45],accounts[4],accounts[77],accounts[69],accounts[7],accounts[59]],2369,{from:accounts[0]});

});
it('test 12',async() => {
result = await instance.transfer(accounts[3],955,{from:accounts[1]});

await instance.approve(accounts[4], 33318, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[4], 1000, {from: accounts[4]});

await instance.batchTransfer([accounts[64],accounts[87],accounts[12],accounts[79],accounts[39],accounts[7],accounts[3],accounts[82],accounts[12],accounts[56]],9683,{from:accounts[0]});

});
it('test 13',async() => {

await instance.approve(accounts[146], 28262, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[146], 1000, {from: accounts[146]});

await instance.batchTransfer([accounts[10],accounts[70]],1468,{from:accounts[0]});

result = await instance.transfer(accounts[4],345,{from:accounts[0]});
});
it('test 14',async() => {

await instance.approve(accounts[108], 26564, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[108], 1000, {from: accounts[108]});

await instance.batchTransfer([accounts[30],accounts[96],accounts[95],accounts[65],accounts[90],accounts[57],accounts[96]],9989,{from:accounts[0]});

result = await instance.transfer(accounts[1],546,{from:accounts[3]});
});
it('test 15',async() => {
await instance.batchTransfer([accounts[71],accounts[54],accounts[26],accounts[9]],3514,{from:accounts[0]});

result = await instance.transfer(accounts[2],944,{from:accounts[1]});

await instance.approve(accounts[63], 28786, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[63], 1000, {from: accounts[63]});

});
it('test 16',async() => {

await instance.approve(accounts[66], 30476, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[66], 1000, {from: accounts[66]});

await instance.batchTransfer([accounts[61],accounts[40]],6537,{from:accounts[0]});

result = await instance.transfer(accounts[0],704,{from:accounts[4]});
});
it('test 17',async() => {

await instance.approve(accounts[75], 35800, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[75], 1000, {from: accounts[75]});

result = await instance.transfer(accounts[3],981,{from:accounts[2]});
await instance.batchTransfer([accounts[52]],3600,{from:accounts[0]});

});
it('test 18',async() => {

await instance.approve(accounts[88], 22755, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[88], 1000, {from: accounts[88]});

await instance.batchTransfer([accounts[13],accounts[31],accounts[87],accounts[100],accounts[91]],2907,{from:accounts[0]});

result = await instance.transfer(accounts[4],216,{from:accounts[4]});
});
it('test 19',async() => {
await instance.batchTransfer([accounts[91],accounts[24],accounts[3],accounts[67],accounts[71],accounts[28],accounts[77],accounts[80],accounts[50],accounts[14]],6634,{from:accounts[0]});

result = await instance.transfer(accounts[2],792,{from:accounts[2]});

await instance.approve(accounts[144], 25534, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[144], 1000, {from: accounts[144]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[163], 36721, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[163], 1000, {from: accounts[163]});

await instance.batchTransfer([accounts[37],accounts[15],accounts[58],accounts[13]],5814,{from:accounts[0]});

result = await instance.transfer(accounts[3],222,{from:accounts[0]});
});
it('test 21',async() => {
await instance.batchTransfer([accounts[95],accounts[13],accounts[14],accounts[48],accounts[86],accounts[56],accounts[46],accounts[13],accounts[46],accounts[32]],7292,{from:accounts[0]});

result = await instance.transfer(accounts[2],520,{from:accounts[3]});

await instance.approve(accounts[62], 22267, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[62], 1000, {from: accounts[62]});

});
it('test 22',async() => {

await instance.approve(accounts[53], 39141, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[53], 1000, {from: accounts[53]});

await instance.batchTransfer([accounts[8],accounts[52],accounts[46]],9055,{from:accounts[0]});

result = await instance.transfer(accounts[4],422,{from:accounts[3]});
});
it('test 23',async() => {
await instance.batchTransfer([accounts[62],accounts[68],accounts[92],accounts[58],accounts[15],accounts[57],accounts[62]],4608,{from:accounts[0]});

result = await instance.transfer(accounts[1],665,{from:accounts[5]});

await instance.approve(accounts[100], 34216, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[100], 1000, {from: accounts[100]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 24',async() => {
await instance.batchTransfer([accounts[70],accounts[83],accounts[78],accounts[99],accounts[97],accounts[95],accounts[41]],2941,{from:accounts[0]});


await instance.approve(accounts[83], 38016, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[83], 1000, {from: accounts[83]});

result = await instance.transfer(accounts[5],414,{from:accounts[1]});
});
it('test 25',async() => {
result = await instance.transfer(accounts[4],508,{from:accounts[3]});
await instance.batchTransfer([accounts[11],accounts[16],accounts[98],accounts[85],accounts[20],accounts[96]],1325,{from:accounts[0]});


await instance.approve(accounts[161], 24757, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[161], 1000, {from: accounts[161]});

});
it('test 26',async() => {
await instance.batchTransfer([accounts[35],accounts[66],accounts[73]],3454,{from:accounts[0]});

result = await instance.transfer(accounts[4],510,{from:accounts[2]});

await instance.approve(accounts[91], 33168, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[91], 1000, {from: accounts[91]});

});
it('test 27',async() => {
result = await instance.transfer(accounts[1],475,{from:accounts[2]});

await instance.approve(accounts[119], 34602, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[119], 1000, {from: accounts[119]});

await instance.batchTransfer([accounts[59]],4441,{from:accounts[0]});

});
it('test 28',async() => {
await instance.batchTransfer([accounts[3],accounts[74],accounts[72],accounts[32],accounts[41],accounts[82],accounts[49],accounts[38],accounts[62],accounts[7]],7811,{from:accounts[0]});

result = await instance.transfer(accounts[2],413,{from:accounts[4]});

await instance.approve(accounts[18], 34203, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[18], 1000, {from: accounts[18]});

});
it('test 29',async() => {
await instance.batchTransfer([accounts[54],accounts[98],accounts[13]],7003,{from:accounts[0]});


await instance.approve(accounts[113], 22829, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[113], 1000, {from: accounts[113]});

result = await instance.transfer(accounts[4],440,{from:accounts[0]});
});
});
