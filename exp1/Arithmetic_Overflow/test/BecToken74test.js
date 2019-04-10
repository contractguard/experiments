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

await instance.approve(accounts[61], 20518, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[61], 1000, {from: accounts[61]});

await instance.batchTransfer([accounts[49],accounts[22],accounts[93],accounts[65],accounts[57]],5829,{from:accounts[0]});

result = await instance.transfer(accounts[1],797,{from:accounts[5]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 1',async() => {

await instance.approve(accounts[51], 28010, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[51], 1000, {from: accounts[51]});

await instance.batchTransfer([accounts[89],accounts[100],accounts[76],accounts[93]],1537,{from:accounts[0]});

result = await instance.transfer(accounts[0],219,{from:accounts[4]});
});
it('test 2',async() => {
result = await instance.transfer(accounts[1],361,{from:accounts[4]});

await instance.approve(accounts[178], 26405, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[178], 1000, {from: accounts[178]});

await instance.batchTransfer([accounts[98],accounts[68],accounts[56],accounts[70],accounts[58],accounts[76],accounts[92]],1068,{from:accounts[0]});

});
it('test 3',async() => {
await instance.batchTransfer([accounts[22],accounts[19],accounts[32],accounts[100],accounts[45],accounts[100],accounts[52]],6905,{from:accounts[0]});

result = await instance.transfer(accounts[1],407,{from:accounts[5]});

await instance.approve(accounts[54], 30553, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[54], 1000, {from: accounts[54]});

});
it('test 4',async() => {

await instance.approve(accounts[21], 39818, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[21], 1000, {from: accounts[21]});

await instance.batchTransfer([accounts[32],accounts[80]],5074,{from:accounts[0]});

result = await instance.transfer(accounts[4],677,{from:accounts[3]});
});
it('test 5',async() => {

await instance.approve(accounts[172], 36241, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[172], 1000, {from: accounts[172]});

await instance.batchTransfer([accounts[13],accounts[45],accounts[24]],4691,{from:accounts[0]});

result = await instance.transfer(accounts[3],313,{from:accounts[0]});
});
it('test 6',async() => {
await instance.batchTransfer([accounts[96],accounts[23],accounts[71],accounts[12],accounts[72],accounts[74],accounts[26],accounts[35],accounts[54],accounts[45]],3302,{from:accounts[0]});

result = await instance.transfer(accounts[3],910,{from:accounts[5]});

await instance.approve(accounts[186], 31591, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[186], 1000, {from: accounts[186]});

});
it('test 7',async() => {

await instance.approve(accounts[116], 36273, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[116], 1000, {from: accounts[116]});

await instance.batchTransfer([accounts[79]],5603,{from:accounts[0]});

result = await instance.transfer(accounts[0],893,{from:accounts[0]});
});
it('test 8',async() => {
result = await instance.transfer(accounts[2],510,{from:accounts[4]});

await instance.approve(accounts[19], 35496, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[19], 1000, {from: accounts[19]});

await instance.batchTransfer([accounts[81],accounts[83]],4932,{from:accounts[0]});

});
it('test 9',async() => {
result = await instance.transfer(accounts[5],813,{from:accounts[4]});
await instance.batchTransfer([accounts[44]],1519,{from:accounts[0]});


await instance.approve(accounts[4], 34907, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[4], 1000, {from: accounts[4]});

});
it('test 10',async() => {
await instance.batchTransfer([accounts[55],accounts[35],accounts[50],accounts[98],accounts[35],accounts[32]],7279,{from:accounts[0]});


await instance.approve(accounts[158], 21071, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[158], 1000, {from: accounts[158]});

result = await instance.transfer(accounts[4],339,{from:accounts[5]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 11',async() => {
await instance.batchTransfer([accounts[97],accounts[80]],4346,{from:accounts[0]});


await instance.approve(accounts[152], 22449, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[152], 1000, {from: accounts[152]});

result = await instance.transfer(accounts[3],790,{from:accounts[5]});
});
it('test 12',async() => {

await instance.approve(accounts[96], 39544, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[96], 1000, {from: accounts[96]});

await instance.batchTransfer([accounts[57],accounts[90],accounts[42],accounts[23],accounts[60],accounts[96],accounts[53],accounts[35],accounts[24]],4303,{from:accounts[0]});

result = await instance.transfer(accounts[1],577,{from:accounts[2]});
});
it('test 13',async() => {

await instance.approve(accounts[24], 21728, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[24], 1000, {from: accounts[24]});

await instance.batchTransfer([accounts[41],accounts[83],accounts[84],accounts[67],accounts[78],accounts[29],accounts[37],accounts[77],accounts[8],accounts[100]],4065,{from:accounts[0]});

result = await instance.transfer(accounts[0],206,{from:accounts[3]});
});
it('test 14',async() => {

await instance.approve(accounts[29], 27539, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[29], 1000, {from: accounts[29]});

result = await instance.transfer(accounts[4],366,{from:accounts[0]});
await instance.batchTransfer([accounts[63]],4650,{from:accounts[0]});

});
it('test 15',async() => {

await instance.approve(accounts[57], 21903, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[57], 1000, {from: accounts[57]});

await instance.batchTransfer([accounts[67]],7979,{from:accounts[0]});

result = await instance.transfer(accounts[2],290,{from:accounts[5]});
});
it('test 16',async() => {
await instance.batchTransfer([accounts[65],accounts[48],accounts[73],accounts[36],accounts[73],accounts[8],accounts[94],accounts[68],accounts[34],accounts[47]],6172,{from:accounts[0]});

result = await instance.transfer(accounts[3],473,{from:accounts[3]});

await instance.approve(accounts[18], 20124, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[18], 1000, {from: accounts[18]});

});
it('test 17',async() => {

await instance.approve(accounts[74], 22729, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[74], 1000, {from: accounts[74]});

await instance.batchTransfer([accounts[87],accounts[69],accounts[82],accounts[73],accounts[82],accounts[33],accounts[100],accounts[10]],6506,{from:accounts[0]});

result = await instance.transfer(accounts[5],319,{from:accounts[0]});
});
it('test 18',async() => {
await instance.batchTransfer([accounts[37],accounts[79],accounts[94],accounts[65],accounts[74]],9620,{from:accounts[0]});


await instance.approve(accounts[170], 29596, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[170], 1000, {from: accounts[170]});

result = await instance.transfer(accounts[4],980,{from:accounts[5]});
});
it('test 19',async() => {
result = await instance.transfer(accounts[3],534,{from:accounts[1]});
await instance.batchTransfer([accounts[56],accounts[5],accounts[92]],2067,{from:accounts[0]});


await instance.approve(accounts[75], 39848, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[75], 1000, {from: accounts[75]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[0],520,{from:accounts[5]});

await instance.approve(accounts[163], 32446, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[163], 1000, {from: accounts[163]});

await instance.batchTransfer([accounts[35],accounts[87],accounts[55],accounts[71],accounts[72],accounts[9],accounts[58],accounts[84],accounts[87],accounts[3]],7278,{from:accounts[0]});

});
it('test 21',async() => {
await instance.batchTransfer([accounts[20]],3261,{from:accounts[0]});

result = await instance.transfer(accounts[2],961,{from:accounts[3]});

await instance.approve(accounts[163], 38940, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[163], 1000, {from: accounts[163]});

});
it('test 22',async() => {

await instance.approve(accounts[22], 22837, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[22], 1000, {from: accounts[22]});

result = await instance.transfer(accounts[4],634,{from:accounts[5]});
await instance.batchTransfer([accounts[8],accounts[74],accounts[32],accounts[96],accounts[60],accounts[8],accounts[82],accounts[67],accounts[45]],3659,{from:accounts[0]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 23',async() => {

await instance.approve(accounts[9], 32548, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[9], 1000, {from: accounts[9]});

result = await instance.transfer(accounts[5],456,{from:accounts[1]});
await instance.batchTransfer([accounts[54],accounts[23],accounts[68],accounts[16],accounts[69],accounts[12]],3501,{from:accounts[0]});

});
it('test 24',async() => {
result = await instance.transfer(accounts[5],862,{from:accounts[1]});

await instance.approve(accounts[180], 25068, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[180], 1000, {from: accounts[180]});

await instance.batchTransfer([accounts[31],accounts[68]],3673,{from:accounts[0]});

});
it('test 25',async() => {
result = await instance.transfer(accounts[1],853,{from:accounts[2]});
await instance.batchTransfer([accounts[20],accounts[45],accounts[82],accounts[87],accounts[10],accounts[3],accounts[52],accounts[53],accounts[26]],6878,{from:accounts[0]});


await instance.approve(accounts[27], 29200, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[27], 1000, {from: accounts[27]});

});
it('test 26',async() => {
await instance.batchTransfer([accounts[80]],3125,{from:accounts[0]});


await instance.approve(accounts[163], 22471, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[163], 1000, {from: accounts[163]});

result = await instance.transfer(accounts[1],833,{from:accounts[1]});
});
it('test 27',async() => {
result = await instance.transfer(accounts[2],709,{from:accounts[1]});
await instance.batchTransfer([accounts[14],accounts[29],accounts[96],accounts[25],accounts[95],accounts[16],accounts[36],accounts[92],accounts[24]],2870,{from:accounts[0]});


await instance.approve(accounts[94], 31544, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[94], 1000, {from: accounts[94]});

});
it('test 28',async() => {
result = await instance.transfer(accounts[4],319,{from:accounts[4]});
await instance.batchTransfer([accounts[100],accounts[40],accounts[4],accounts[35],accounts[72],accounts[43],accounts[31],accounts[53]],5984,{from:accounts[0]});


await instance.approve(accounts[66], 38927, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[66], 1000, {from: accounts[66]});

});
it('test 29',async() => {
result = await instance.transfer(accounts[4],579,{from:accounts[0]});

await instance.approve(accounts[139], 28531, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[139], 1000, {from: accounts[139]});

await instance.batchTransfer([accounts[46],accounts[10],accounts[33],accounts[62],accounts[45],accounts[27],accounts[92],accounts[8]],1356,{from:accounts[0]});

});
});
