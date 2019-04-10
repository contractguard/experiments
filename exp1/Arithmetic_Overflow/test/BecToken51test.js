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
result = await instance.transfer(accounts[2],208,{from:accounts[0]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[116], 31910, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[116], 1000, {from: accounts[116]});

await instance.batchTransfer([accounts[94],accounts[74],accounts[13],accounts[57],accounts[13],accounts[24],accounts[100]],5128,{from:accounts[0]});

});
it('test 1',async() => {
await instance.batchTransfer([accounts[77],accounts[90],accounts[90],accounts[54],accounts[61],accounts[21],accounts[28]],1799,{from:accounts[0]});


await instance.approve(accounts[82], 35911, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[82], 1000, {from: accounts[82]});

result = await instance.transfer(accounts[2],645,{from:accounts[4]});
});
it('test 2',async() => {
await instance.batchTransfer([accounts[6],accounts[44],accounts[4],accounts[15]],4354,{from:accounts[0]});


await instance.approve(accounts[71], 22728, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[71], 1000, {from: accounts[71]});

result = await instance.transfer(accounts[5],355,{from:accounts[0]});
});
it('test 3',async() => {
result = await instance.transfer(accounts[3],562,{from:accounts[1]});
await instance.batchTransfer([accounts[72],accounts[36],accounts[57],accounts[15],accounts[50],accounts[10],accounts[27]],2543,{from:accounts[0]});


await instance.approve(accounts[70], 31341, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[70], 1000, {from: accounts[70]});

});
it('test 4',async() => {
await instance.batchTransfer([accounts[89],accounts[83],accounts[83],accounts[36],accounts[82],accounts[82],accounts[45],accounts[54]],1865,{from:accounts[0]});

result = await instance.transfer(accounts[3],823,{from:accounts[1]});

await instance.approve(accounts[168], 32169, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[168], 1000, {from: accounts[168]});

});
it('test 5',async() => {
await instance.batchTransfer([accounts[61],accounts[70]],4721,{from:accounts[0]});


await instance.approve(accounts[54], 32822, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[54], 1000, {from: accounts[54]});

result = await instance.transfer(accounts[4],623,{from:accounts[2]});
});
it('test 6',async() => {
result = await instance.transfer(accounts[0],799,{from:accounts[2]});
await instance.batchTransfer([accounts[60],accounts[23],accounts[56],accounts[1],accounts[53],accounts[26],accounts[77],accounts[14],accounts[99],accounts[64]],6612,{from:accounts[0]});


await instance.approve(accounts[93], 36558, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[93], 1000, {from: accounts[93]});

});
it('test 7',async() => {
result = await instance.transfer(accounts[3],399,{from:accounts[3]});
await instance.batchTransfer([accounts[79]],8629,{from:accounts[0]});


await instance.approve(accounts[59], 23318, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[59], 1000, {from: accounts[59]});

});
it('test 8',async() => {

await instance.approve(accounts[39], 33763, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[39], 1000, {from: accounts[39]});

await instance.batchTransfer([accounts[57],accounts[25],accounts[65]],1811,{from:accounts[0]});

result = await instance.transfer(accounts[4],460,{from:accounts[4]});
});
it('test 9',async() => {
await instance.batchTransfer([accounts[16],accounts[92],accounts[21],accounts[34],accounts[93],accounts[89],accounts[54]],8582,{from:accounts[0]});

result = await instance.transfer(accounts[3],586,{from:accounts[3]});

await instance.approve(accounts[135], 36641, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[135], 1000, {from: accounts[135]});

});
it('test 10',async() => {

await instance.approve(accounts[69], 27284, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[69], 1000, {from: accounts[69]});

await instance.batchTransfer([accounts[60]],1168,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[2],214,{from:accounts[4]});
});
it('test 11',async() => {
result = await instance.transfer(accounts[3],631,{from:accounts[4]});
await instance.batchTransfer([accounts[39],accounts[45],accounts[14],accounts[21],accounts[32]],4804,{from:accounts[0]});


await instance.approve(accounts[16], 39768, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[16], 1000, {from: accounts[16]});

});
it('test 12',async() => {

await instance.approve(accounts[46], 37690, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[46], 1000, {from: accounts[46]});

result = await instance.transfer(accounts[2],221,{from:accounts[2]});
await instance.batchTransfer([accounts[17],accounts[48],accounts[19],accounts[87],accounts[29]],5668,{from:accounts[0]});

});
it('test 13',async() => {
await instance.batchTransfer([accounts[16],accounts[43],accounts[36],accounts[31],accounts[21],accounts[70]],3823,{from:accounts[0]});


await instance.approve(accounts[29], 28989, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[29], 1000, {from: accounts[29]});

result = await instance.transfer(accounts[2],275,{from:accounts[1]});
});
it('test 14',async() => {
await instance.batchTransfer([accounts[32],accounts[44],accounts[79],accounts[18],accounts[69],accounts[28],accounts[4],accounts[53]],2663,{from:accounts[0]});


await instance.approve(accounts[123], 25199, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[123], 1000, {from: accounts[123]});

result = await instance.transfer(accounts[2],499,{from:accounts[5]});
});
it('test 15',async() => {

await instance.approve(accounts[76], 33752, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[76], 1000, {from: accounts[76]});

await instance.batchTransfer([accounts[53],accounts[7],accounts[55],accounts[82],accounts[87],accounts[85]],3258,{from:accounts[0]});

result = await instance.transfer(accounts[3],249,{from:accounts[0]});
});
it('test 16',async() => {
result = await instance.transfer(accounts[4],341,{from:accounts[2]});

await instance.approve(accounts[149], 32891, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[149], 1000, {from: accounts[149]});

await instance.batchTransfer([accounts[96],accounts[38],accounts[71],accounts[54]],6425,{from:accounts[0]});

});
it('test 17',async() => {
result = await instance.transfer(accounts[0],490,{from:accounts[0]});
await instance.batchTransfer([accounts[66],accounts[14],accounts[13],accounts[38],accounts[53],accounts[79],accounts[21],accounts[65],accounts[2]],9123,{from:accounts[0]});


await instance.approve(accounts[101], 25968, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[101], 1000, {from: accounts[101]});

});
it('test 18',async() => {

await instance.approve(accounts[94], 31375, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[94], 1000, {from: accounts[94]});

result = await instance.transfer(accounts[3],979,{from:accounts[4]});
await instance.batchTransfer([accounts[17],accounts[24],accounts[31],accounts[31],accounts[76],accounts[15],accounts[71],accounts[93],accounts[36]],5013,{from:accounts[0]});

});
it('test 19',async() => {

await instance.approve(accounts[118], 22592, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[118], 1000, {from: accounts[118]});

await instance.batchTransfer([accounts[97],accounts[14],accounts[97],accounts[95],accounts[70],accounts[74]],1272,{from:accounts[0]});

result = await instance.transfer(accounts[1],884,{from:accounts[5]});
});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});

await instance.approve(accounts[180], 22217, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[180], 1000, {from: accounts[180]});

result = await instance.transfer(accounts[0],261,{from:accounts[1]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[59],accounts[35],accounts[59]],5465,{from:accounts[0]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 21',async() => {

await instance.approve(accounts[122], 31306, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[122], 1000, {from: accounts[122]});

result = await instance.transfer(accounts[0],848,{from:accounts[0]});
await instance.batchTransfer([accounts[54]],4638,{from:accounts[0]});

});
it('test 22',async() => {
await instance.batchTransfer([accounts[88],accounts[92],accounts[41],accounts[23],accounts[34],accounts[76],accounts[23]],6238,{from:accounts[0]});

result = await instance.transfer(accounts[5],367,{from:accounts[3]});

await instance.approve(accounts[171], 23524, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[171], 1000, {from: accounts[171]});

});
it('test 23',async() => {
await instance.batchTransfer([accounts[91],accounts[10]],2660,{from:accounts[0]});


await instance.approve(accounts[48], 24599, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[48], 1000, {from: accounts[48]});

result = await instance.transfer(accounts[1],650,{from:accounts[1]});
});
it('test 24',async() => {

await instance.approve(accounts[7], 31556, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[7], 1000, {from: accounts[7]});

await instance.batchTransfer([accounts[10]],8625,{from:accounts[0]});

result = await instance.transfer(accounts[3],709,{from:accounts[5]});
});
it('test 25',async() => {
await instance.batchTransfer([accounts[46],accounts[49],accounts[73]],1933,{from:accounts[0]});


await instance.approve(accounts[43], 26853, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[43], 1000, {from: accounts[43]});

result = await instance.transfer(accounts[5],833,{from:accounts[3]});
});
it('test 26',async() => {
await instance.batchTransfer([accounts[98]],6405,{from:accounts[0]});

result = await instance.transfer(accounts[4],203,{from:accounts[0]});

await instance.approve(accounts[26], 37057, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[26], 1000, {from: accounts[26]});

});
it('test 27',async() => {

await instance.approve(accounts[27], 34549, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[27], 1000, {from: accounts[27]});

result = await instance.transfer(accounts[2],713,{from:accounts[1]});
await instance.batchTransfer([accounts[53],accounts[67],accounts[37],accounts[85],accounts[17],accounts[30]],8347,{from:accounts[0]});

});
it('test 28',async() => {
result = await instance.transfer(accounts[2],281,{from:accounts[0]});

await instance.approve(accounts[83], 27334, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[83], 1000, {from: accounts[83]});

await instance.batchTransfer([accounts[97],accounts[51],accounts[69],accounts[3]],9005,{from:accounts[0]});

});
it('test 29',async() => {
await instance.batchTransfer([accounts[82],accounts[55],accounts[14]],7452,{from:accounts[0]});


await instance.approve(accounts[197], 24236, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[197], 1000, {from: accounts[197]});

result = await instance.transfer(accounts[0],867,{from:accounts[5]});
});
});
