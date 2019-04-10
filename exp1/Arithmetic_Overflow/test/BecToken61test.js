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

await instance.approve(accounts[195], 25841, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[195], 1000, {from: accounts[195]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[5],556,{from:accounts[4]});
await instance.batchTransfer([accounts[79],accounts[98],accounts[60],accounts[98],accounts[23],accounts[34],accounts[27],accounts[81]],8146,{from:accounts[0]});

});
it('test 1',async() => {
result = await instance.transfer(accounts[4],686,{from:accounts[2]});
await instance.batchTransfer([accounts[93],accounts[82],accounts[85],accounts[81],accounts[43]],8773,{from:accounts[0]});


await instance.approve(accounts[105], 35474, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[105], 1000, {from: accounts[105]});

});
it('test 2',async() => {
result = await instance.transfer(accounts[4],528,{from:accounts[1]});
await instance.batchTransfer([accounts[49],accounts[39]],4389,{from:accounts[0]});


await instance.approve(accounts[59], 30994, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[59], 1000, {from: accounts[59]});

});
it('test 3',async() => {

await instance.approve(accounts[163], 24441, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[163], 1000, {from: accounts[163]});

result = await instance.transfer(accounts[3],351,{from:accounts[5]});
await instance.batchTransfer([accounts[4],accounts[98],accounts[20],accounts[100],accounts[72],accounts[57],accounts[54],accounts[47]],2684,{from:accounts[0]});

});
it('test 4',async() => {

await instance.approve(accounts[143], 31560, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[143], 1000, {from: accounts[143]});

result = await instance.transfer(accounts[5],447,{from:accounts[3]});
await instance.batchTransfer([accounts[54],accounts[70]],7882,{from:accounts[0]});

});
it('test 5',async() => {

await instance.approve(accounts[162], 35803, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[162], 1000, {from: accounts[162]});

await instance.batchTransfer([accounts[55],accounts[100],accounts[81],accounts[22],accounts[25],accounts[1],accounts[77]],2225,{from:accounts[0]});

result = await instance.transfer(accounts[0],552,{from:accounts[4]});
});
it('test 6',async() => {
await instance.batchTransfer([accounts[43],accounts[12],accounts[9]],1120,{from:accounts[0]});

result = await instance.transfer(accounts[4],212,{from:accounts[4]});

await instance.approve(accounts[71], 25614, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[71], 1000, {from: accounts[71]});

});
it('test 7',async() => {
await instance.batchTransfer([accounts[11]],2112,{from:accounts[0]});


await instance.approve(accounts[4], 31030, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[4], 1000, {from: accounts[4]});

result = await instance.transfer(accounts[4],238,{from:accounts[4]});
});
it('test 8',async() => {
await instance.batchTransfer([accounts[23],accounts[26],accounts[29],accounts[53],accounts[73],accounts[1],accounts[29],accounts[28],accounts[23]],4675,{from:accounts[0]});

result = await instance.transfer(accounts[2],511,{from:accounts[0]});

await instance.approve(accounts[137], 32670, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[137], 1000, {from: accounts[137]});

});
it('test 9',async() => {
await instance.batchTransfer([accounts[73],accounts[98],accounts[91],accounts[21],accounts[4]],2192,{from:accounts[0]});

result = await instance.transfer(accounts[2],720,{from:accounts[1]});

await instance.approve(accounts[66], 37450, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[66], 1000, {from: accounts[66]});

});
it('test 10',async() => {
await instance.batchTransfer([accounts[52],accounts[20],accounts[11],accounts[63],accounts[39],accounts[80],accounts[69]],7284,{from:accounts[0]});


await instance.approve(accounts[155], 33537, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[155], 1000, {from: accounts[155]});

result = await instance.transfer(accounts[1],422,{from:accounts[5]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 11',async() => {
await instance.batchTransfer([accounts[23],accounts[41]],2213,{from:accounts[0]});


await instance.approve(accounts[33], 30110, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[33], 1000, {from: accounts[33]});

result = await instance.transfer(accounts[3],644,{from:accounts[3]});
});
it('test 12',async() => {

await instance.approve(accounts[152], 29062, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[152], 1000, {from: accounts[152]});

await instance.batchTransfer([accounts[33],accounts[19]],9886,{from:accounts[0]});

result = await instance.transfer(accounts[2],559,{from:accounts[4]});
});
it('test 13',async() => {
result = await instance.transfer(accounts[5],408,{from:accounts[2]});

await instance.approve(accounts[69], 34493, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[69], 1000, {from: accounts[69]});

await instance.batchTransfer([accounts[57],accounts[12],accounts[87],accounts[41],accounts[22],accounts[52],accounts[12]],9377,{from:accounts[0]});

});
it('test 14',async() => {
await instance.batchTransfer([accounts[30]],8455,{from:accounts[0]});

result = await instance.transfer(accounts[5],225,{from:accounts[5]});

await instance.approve(accounts[194], 28642, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[194], 1000, {from: accounts[194]});

});
it('test 15',async() => {
await instance.batchTransfer([accounts[74],accounts[89],accounts[59]],9032,{from:accounts[0]});

result = await instance.transfer(accounts[1],988,{from:accounts[0]});

await instance.approve(accounts[124], 35080, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[124], 1000, {from: accounts[124]});

});
it('test 16',async() => {
await instance.batchTransfer([accounts[78],accounts[59]],5336,{from:accounts[0]});


await instance.approve(accounts[151], 22234, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[151], 1000, {from: accounts[151]});

result = await instance.transfer(accounts[1],875,{from:accounts[2]});
});
it('test 17',async() => {
result = await instance.transfer(accounts[3],794,{from:accounts[1]});

await instance.approve(accounts[63], 29417, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[63], 1000, {from: accounts[63]});

await instance.batchTransfer([accounts[77],accounts[4]],7313,{from:accounts[0]});

});
it('test 18',async() => {
result = await instance.transfer(accounts[5],829,{from:accounts[4]});

await instance.approve(accounts[14], 27858, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[14], 1000, {from: accounts[14]});

await instance.batchTransfer([accounts[4],accounts[19],accounts[65],accounts[46],accounts[90],accounts[80],accounts[89],accounts[9]],7051,{from:accounts[0]});

});
it('test 19',async() => {
await instance.batchTransfer([accounts[62],accounts[5],accounts[48],accounts[58],accounts[43],accounts[43]],2213,{from:accounts[0]});

result = await instance.transfer(accounts[1],512,{from:accounts[3]});

await instance.approve(accounts[89], 23993, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[89], 1000, {from: accounts[89]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.batchTransfer([accounts[90],accounts[7],accounts[63],accounts[74]],1463,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[121], 23739, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[121], 1000, {from: accounts[121]});

result = await instance.transfer(accounts[3],577,{from:accounts[3]});
});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 21',async() => {
result = await instance.transfer(accounts[0],540,{from:accounts[5]});

await instance.approve(accounts[197], 37533, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[197], 1000, {from: accounts[197]});

await instance.batchTransfer([accounts[81],accounts[94],accounts[65],accounts[72],accounts[18],accounts[9]],4396,{from:accounts[0]});

});
it('test 22',async() => {
await instance.batchTransfer([accounts[12],accounts[60],accounts[38],accounts[79],accounts[93],accounts[24],accounts[95]],8220,{from:accounts[0]});


await instance.approve(accounts[113], 24717, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[113], 1000, {from: accounts[113]});

result = await instance.transfer(accounts[3],496,{from:accounts[3]});
});
it('test 23',async() => {

await instance.approve(accounts[184], 26264, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[184], 1000, {from: accounts[184]});

result = await instance.transfer(accounts[1],519,{from:accounts[2]});
await instance.batchTransfer([accounts[29],accounts[4],accounts[12],accounts[93],accounts[41],accounts[89],accounts[41],accounts[81]],2706,{from:accounts[0]});

});
it('test 24',async() => {
result = await instance.transfer(accounts[1],409,{from:accounts[4]});
await instance.batchTransfer([accounts[78],accounts[32],accounts[31],accounts[12],accounts[5],accounts[47],accounts[49],accounts[25]],9735,{from:accounts[0]});


await instance.approve(accounts[2], 29368, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[2], 1000, {from: accounts[2]});

});
it('test 25',async() => {
await instance.batchTransfer([accounts[79],accounts[63],accounts[29],accounts[45],accounts[51],accounts[45],accounts[55],accounts[73],accounts[49]],4999,{from:accounts[0]});


await instance.approve(accounts[68], 28518, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[68], 1000, {from: accounts[68]});

result = await instance.transfer(accounts[2],834,{from:accounts[4]});
});
it('test 26',async() => {
await instance.batchTransfer([accounts[45],accounts[20],accounts[31],accounts[23]],8680,{from:accounts[0]});


await instance.approve(accounts[128], 38324, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[128], 1000, {from: accounts[128]});

result = await instance.transfer(accounts[4],630,{from:accounts[5]});
});
it('test 27',async() => {

await instance.approve(accounts[44], 25600, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[44], 1000, {from: accounts[44]});

result = await instance.transfer(accounts[2],288,{from:accounts[2]});
await instance.batchTransfer([accounts[29],accounts[83],accounts[54],accounts[18],accounts[23]],3314,{from:accounts[0]});

});
it('test 28',async() => {

await instance.approve(accounts[174], 30758, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[174], 1000, {from: accounts[174]});

result = await instance.transfer(accounts[4],920,{from:accounts[1]});
await instance.batchTransfer([accounts[5],accounts[92],accounts[3]],3529,{from:accounts[0]});

});
it('test 29',async() => {
await instance.batchTransfer([accounts[94],accounts[72],accounts[9]],4706,{from:accounts[0]});


await instance.approve(accounts[34], 28904, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[34], 1000, {from: accounts[34]});

result = await instance.transfer(accounts[3],656,{from:accounts[3]});
});
});
