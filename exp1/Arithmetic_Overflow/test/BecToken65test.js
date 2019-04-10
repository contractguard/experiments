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

await instance.approve(accounts[158], 26525, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[158], 1000, {from: accounts[158]});

result = await instance.transfer(accounts[2],498,{from:accounts[0]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[40],accounts[82],accounts[22],accounts[83],accounts[96],accounts[29],accounts[70],accounts[72]],6403,{from:accounts[0]});

});
it('test 1',async() => {
await instance.batchTransfer([accounts[40],accounts[28],accounts[38],accounts[47],accounts[88],accounts[53],accounts[97]],6016,{from:accounts[0]});

result = await instance.transfer(accounts[3],727,{from:accounts[1]});

await instance.approve(accounts[154], 38225, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[154], 1000, {from: accounts[154]});

});
it('test 2',async() => {
result = await instance.transfer(accounts[1],547,{from:accounts[1]});

await instance.approve(accounts[39], 24759, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[39], 1000, {from: accounts[39]});

await instance.batchTransfer([accounts[26],accounts[63],accounts[75],accounts[47],accounts[11],accounts[4],accounts[10],accounts[65],accounts[59],accounts[8]],6984,{from:accounts[0]});

});
it('test 3',async() => {
result = await instance.transfer(accounts[2],414,{from:accounts[4]});

await instance.approve(accounts[185], 39142, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[185], 1000, {from: accounts[185]});

await instance.batchTransfer([accounts[63],accounts[78],accounts[30],accounts[48],accounts[99],accounts[63],accounts[74]],5642,{from:accounts[0]});

});
it('test 4',async() => {
result = await instance.transfer(accounts[0],975,{from:accounts[3]});
await instance.batchTransfer([accounts[29],accounts[45]],9167,{from:accounts[0]});


await instance.approve(accounts[19], 26884, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[19], 1000, {from: accounts[19]});

});
it('test 5',async() => {
result = await instance.transfer(accounts[0],923,{from:accounts[5]});
await instance.batchTransfer([accounts[39],accounts[3],accounts[53]],6331,{from:accounts[0]});


await instance.approve(accounts[90], 28007, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[90], 1000, {from: accounts[90]});

});
it('test 6',async() => {

await instance.approve(accounts[163], 25310, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[163], 1000, {from: accounts[163]});

await instance.batchTransfer([accounts[85],accounts[96],accounts[23],accounts[77],accounts[1],accounts[44],accounts[81],accounts[72]],6241,{from:accounts[0]});

result = await instance.transfer(accounts[0],608,{from:accounts[2]});
});
it('test 7',async() => {
result = await instance.transfer(accounts[5],688,{from:accounts[4]});
await instance.batchTransfer([accounts[20],accounts[53],accounts[43],accounts[63],accounts[28],accounts[12]],3315,{from:accounts[0]});


await instance.approve(accounts[135], 29445, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[135], 1000, {from: accounts[135]});

});
it('test 8',async() => {
await instance.batchTransfer([accounts[50]],7989,{from:accounts[0]});


await instance.approve(accounts[157], 25895, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[157], 1000, {from: accounts[157]});

result = await instance.transfer(accounts[4],235,{from:accounts[0]});
});
it('test 9',async() => {

await instance.approve(accounts[141], 30513, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[141], 1000, {from: accounts[141]});

await instance.batchTransfer([accounts[55],accounts[14],accounts[28],accounts[35]],4476,{from:accounts[0]});

result = await instance.transfer(accounts[3],855,{from:accounts[0]});
});
it('test 10',async() => {
result = await instance.transfer(accounts[1],465,{from:accounts[0]});
await instance.batchTransfer([accounts[67],accounts[73],accounts[63],accounts[95]],4446,{from:accounts[0]});


await instance.approve(accounts[196], 39951, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[196], 1000, {from: accounts[196]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 11',async() => {

await instance.approve(accounts[136], 36388, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[136], 1000, {from: accounts[136]});

result = await instance.transfer(accounts[3],502,{from:accounts[3]});
await instance.batchTransfer([accounts[89],accounts[80],accounts[83],accounts[35]],8741,{from:accounts[0]});

});
it('test 12',async() => {
result = await instance.transfer(accounts[1],756,{from:accounts[5]});

await instance.approve(accounts[102], 29323, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[102], 1000, {from: accounts[102]});

await instance.batchTransfer([accounts[45],accounts[19]],7242,{from:accounts[0]});

});
it('test 13',async() => {

await instance.approve(accounts[35], 25640, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[35], 1000, {from: accounts[35]});

result = await instance.transfer(accounts[2],999,{from:accounts[5]});
await instance.batchTransfer([accounts[35],accounts[7],accounts[55],accounts[27],accounts[67],accounts[30],accounts[53]],9505,{from:accounts[0]});

});
it('test 14',async() => {
result = await instance.transfer(accounts[3],734,{from:accounts[3]});
await instance.batchTransfer([accounts[34],accounts[75],accounts[24],accounts[50],accounts[82],accounts[20],accounts[34]],9764,{from:accounts[0]});


await instance.approve(accounts[2], 39097, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[2], 1000, {from: accounts[2]});

});
it('test 15',async() => {
result = await instance.transfer(accounts[2],995,{from:accounts[2]});
await instance.batchTransfer([accounts[41],accounts[7],accounts[36],accounts[31],accounts[25],accounts[100],accounts[59]],2827,{from:accounts[0]});


await instance.approve(accounts[152], 24417, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[152], 1000, {from: accounts[152]});

});
it('test 16',async() => {

await instance.approve(accounts[133], 39388, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[133], 1000, {from: accounts[133]});

result = await instance.transfer(accounts[5],995,{from:accounts[4]});
await instance.batchTransfer([accounts[6]],8753,{from:accounts[0]});

});
it('test 17',async() => {

await instance.approve(accounts[191], 39738, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[191], 1000, {from: accounts[191]});

await instance.batchTransfer([accounts[39],accounts[42],accounts[45],accounts[8],accounts[1]],7867,{from:accounts[0]});

result = await instance.transfer(accounts[1],451,{from:accounts[4]});
});
it('test 18',async() => {
await instance.batchTransfer([accounts[98],accounts[70],accounts[79],accounts[90]],5956,{from:accounts[0]});


await instance.approve(accounts[18], 29766, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[18], 1000, {from: accounts[18]});

result = await instance.transfer(accounts[2],596,{from:accounts[2]});
});
it('test 19',async() => {
await instance.batchTransfer([accounts[98],accounts[7],accounts[83],accounts[2],accounts[23],accounts[27],accounts[21],accounts[45],accounts[87],accounts[52]],4729,{from:accounts[0]});


await instance.approve(accounts[60], 23241, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[60], 1000, {from: accounts[60]});

result = await instance.transfer(accounts[0],464,{from:accounts[0]});
});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});

await instance.approve(accounts[112], 20965, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[112], 1000, {from: accounts[112]});

await instance.batchTransfer([accounts[38],accounts[40]],2346,{from:accounts[0]});

result = await instance.transfer(accounts[2],608,{from:accounts[5]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 21',async() => {
result = await instance.transfer(accounts[4],936,{from:accounts[0]});

await instance.approve(accounts[193], 25021, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[193], 1000, {from: accounts[193]});

await instance.batchTransfer([accounts[15],accounts[30],accounts[82],accounts[70],accounts[83],accounts[81]],6140,{from:accounts[0]});

});
it('test 22',async() => {
result = await instance.transfer(accounts[0],872,{from:accounts[2]});
await instance.batchTransfer([accounts[30],accounts[16],accounts[11],accounts[85],accounts[15],accounts[76],accounts[80],accounts[34]],2914,{from:accounts[0]});


await instance.approve(accounts[101], 33948, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[101], 1000, {from: accounts[101]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 23',async() => {

await instance.approve(accounts[37], 29373, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[37], 1000, {from: accounts[37]});

await instance.batchTransfer([accounts[60],accounts[31],accounts[95],accounts[37],accounts[5]],7858,{from:accounts[0]});

result = await instance.transfer(accounts[0],378,{from:accounts[2]});
});
it('test 24',async() => {
await instance.batchTransfer([accounts[47],accounts[8],accounts[35],accounts[69],accounts[51],accounts[100],accounts[8],accounts[26],accounts[61],accounts[53]],7467,{from:accounts[0]});


await instance.approve(accounts[42], 27397, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[42], 1000, {from: accounts[42]});

result = await instance.transfer(accounts[0],583,{from:accounts[3]});
});
it('test 25',async() => {
await instance.batchTransfer([accounts[51]],2272,{from:accounts[0]});


await instance.approve(accounts[103], 28632, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[103], 1000, {from: accounts[103]});

result = await instance.transfer(accounts[3],788,{from:accounts[0]});
});
it('test 26',async() => {
result = await instance.transfer(accounts[3],864,{from:accounts[3]});
await instance.batchTransfer([accounts[83]],1447,{from:accounts[0]});


await instance.approve(accounts[197], 30068, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[197], 1000, {from: accounts[197]});

});
it('test 27',async() => {
result = await instance.transfer(accounts[3],371,{from:accounts[0]});
await instance.batchTransfer([accounts[37],accounts[38],accounts[47]],1596,{from:accounts[0]});


await instance.approve(accounts[133], 24451, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[133], 1000, {from: accounts[133]});

});
it('test 28',async() => {
await instance.batchTransfer([accounts[36]],7304,{from:accounts[0]});

result = await instance.transfer(accounts[0],411,{from:accounts[3]});

await instance.approve(accounts[187], 30975, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[187], 1000, {from: accounts[187]});

});
it('test 29',async() => {

await instance.approve(accounts[187], 26752, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[187], 1000, {from: accounts[187]});

result = await instance.transfer(accounts[2],980,{from:accounts[4]});
await instance.batchTransfer([accounts[31],accounts[67],accounts[83],accounts[79],accounts[33],accounts[73],accounts[13],accounts[66],accounts[74],accounts[11]],1910,{from:accounts[0]});

});
});
