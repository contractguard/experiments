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

result = await instance.transfer(accounts[2],443,{from:accounts[5]});

await instance.approve(accounts[148], 36434, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[148], 1000, {from: accounts[148]});

await instance.batchTransfer([accounts[61],accounts[93],accounts[10]],6845,{from:accounts[0]});

});
it('test 1',async() => {
result = await instance.transfer(accounts[1],895,{from:accounts[0]});
await instance.batchTransfer([accounts[70],accounts[10]],3951,{from:accounts[0]});


await instance.approve(accounts[172], 24915, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[172], 1000, {from: accounts[172]});

});
it('test 2',async() => {
await instance.batchTransfer([accounts[82]],3249,{from:accounts[0]});


await instance.approve(accounts[107], 21681, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[107], 1000, {from: accounts[107]});

result = await instance.transfer(accounts[3],767,{from:accounts[0]});
});
it('test 3',async() => {
result = await instance.transfer(accounts[4],725,{from:accounts[0]});

await instance.approve(accounts[95], 33773, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[95], 1000, {from: accounts[95]});

await instance.batchTransfer([accounts[58],accounts[11],accounts[7],accounts[97],accounts[10],accounts[84],accounts[54],accounts[82]],5356,{from:accounts[0]});

});
it('test 4',async() => {

await instance.approve(accounts[94], 27480, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[94], 1000, {from: accounts[94]});

await instance.batchTransfer([accounts[13],accounts[14],accounts[50],accounts[4],accounts[88],accounts[83],accounts[42],accounts[45]],2593,{from:accounts[0]});

result = await instance.transfer(accounts[4],574,{from:accounts[5]});
});
it('test 5',async() => {

await instance.approve(accounts[92], 34511, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[92], 1000, {from: accounts[92]});

await instance.batchTransfer([accounts[41],accounts[36],accounts[80],accounts[19],accounts[24],accounts[27],accounts[22],accounts[88],accounts[59]],7981,{from:accounts[0]});

result = await instance.transfer(accounts[4],687,{from:accounts[0]});
});
it('test 6',async() => {
result = await instance.transfer(accounts[0],570,{from:accounts[3]});

await instance.approve(accounts[28], 33372, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[28], 1000, {from: accounts[28]});

await instance.batchTransfer([accounts[17],accounts[24]],3201,{from:accounts[0]});

});
it('test 7',async() => {
result = await instance.transfer(accounts[5],734,{from:accounts[0]});

await instance.approve(accounts[183], 23259, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[183], 1000, {from: accounts[183]});

await instance.batchTransfer([accounts[26],accounts[74],accounts[39],accounts[88],accounts[92],accounts[28]],5106,{from:accounts[0]});

});
it('test 8',async() => {
result = await instance.transfer(accounts[1],630,{from:accounts[4]});
await instance.batchTransfer([accounts[49],accounts[9],accounts[53],accounts[96],accounts[78],accounts[25],accounts[86],accounts[94]],9086,{from:accounts[0]});


await instance.approve(accounts[176], 37588, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[176], 1000, {from: accounts[176]});

});
it('test 9',async() => {

await instance.approve(accounts[84], 25126, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[84], 1000, {from: accounts[84]});

await instance.batchTransfer([accounts[41],accounts[79],accounts[41],accounts[71],accounts[37],accounts[7],accounts[84],accounts[26]],2674,{from:accounts[0]});

result = await instance.transfer(accounts[5],831,{from:accounts[4]});
});
it('test 10',async() => {

await instance.approve(accounts[157], 30135, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[157], 1000, {from: accounts[157]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[3],745,{from:accounts[2]});
await instance.batchTransfer([accounts[20],accounts[95],accounts[68],accounts[24],accounts[83],accounts[57],accounts[66],accounts[75]],6250,{from:accounts[0]});

});
it('test 11',async() => {
result = await instance.transfer(accounts[5],706,{from:accounts[0]});
await instance.batchTransfer([accounts[14]],9745,{from:accounts[0]});


await instance.approve(accounts[125], 30465, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[125], 1000, {from: accounts[125]});

});
it('test 12',async() => {

await instance.approve(accounts[143], 35150, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[143], 1000, {from: accounts[143]});

await instance.batchTransfer([accounts[26],accounts[81],accounts[59],accounts[73],accounts[99],accounts[97],accounts[4],accounts[99],accounts[29]],7650,{from:accounts[0]});

result = await instance.transfer(accounts[5],958,{from:accounts[4]});
});
it('test 13',async() => {
result = await instance.transfer(accounts[0],496,{from:accounts[5]});

await instance.approve(accounts[129], 26739, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[129], 1000, {from: accounts[129]});

await instance.batchTransfer([accounts[72],accounts[59],accounts[62],accounts[73],accounts[25]],5977,{from:accounts[0]});

});
it('test 14',async() => {
await instance.batchTransfer([accounts[96],accounts[62],accounts[51],accounts[56]],8680,{from:accounts[0]});

result = await instance.transfer(accounts[4],862,{from:accounts[3]});

await instance.approve(accounts[94], 31449, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[94], 1000, {from: accounts[94]});

});
it('test 15',async() => {

await instance.approve(accounts[162], 26352, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[162], 1000, {from: accounts[162]});

result = await instance.transfer(accounts[3],234,{from:accounts[3]});
await instance.batchTransfer([accounts[45],accounts[6],accounts[65],accounts[14],accounts[31],accounts[53],accounts[10],accounts[94],accounts[42]],3717,{from:accounts[0]});

});
it('test 16',async() => {
result = await instance.transfer(accounts[1],250,{from:accounts[2]});
await instance.batchTransfer([accounts[73],accounts[19],accounts[49],accounts[86],accounts[85],accounts[9],accounts[6],accounts[70]],6463,{from:accounts[0]});


await instance.approve(accounts[100], 32623, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[100], 1000, {from: accounts[100]});

});
it('test 17',async() => {
await instance.batchTransfer([accounts[73],accounts[45],accounts[20],accounts[16]],8250,{from:accounts[0]});


await instance.approve(accounts[53], 27027, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[53], 1000, {from: accounts[53]});

result = await instance.transfer(accounts[2],806,{from:accounts[0]});
});
it('test 18',async() => {
await instance.batchTransfer([accounts[88],accounts[94],accounts[9],accounts[39],accounts[37],accounts[2],accounts[80],accounts[82],accounts[3]],6739,{from:accounts[0]});

result = await instance.transfer(accounts[0],888,{from:accounts[4]});

await instance.approve(accounts[57], 31693, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[57], 1000, {from: accounts[57]});

});
it('test 19',async() => {

await instance.approve(accounts[142], 20059, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[142], 1000, {from: accounts[142]});

await instance.batchTransfer([accounts[86],accounts[69],accounts[42],accounts[62]],6056,{from:accounts[0]});

result = await instance.transfer(accounts[0],611,{from:accounts[1]});
});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.batchTransfer([accounts[4],accounts[88],accounts[93],accounts[54],accounts[31],accounts[57],accounts[21],accounts[28]],3705,{from:accounts[0]});

result = await instance.transfer(accounts[4],551,{from:accounts[5]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[38], 30705, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[38], 1000, {from: accounts[38]});

});
it('test 21',async() => {

await instance.approve(accounts[141], 24949, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[141], 1000, {from: accounts[141]});

await instance.batchTransfer([accounts[66],accounts[17],accounts[91],accounts[86],accounts[37],accounts[10]],7613,{from:accounts[0]});

result = await instance.transfer(accounts[5],926,{from:accounts[2]});
});
it('test 22',async() => {
await instance.batchTransfer([accounts[30],accounts[76],accounts[20],accounts[33]],6013,{from:accounts[0]});


await instance.approve(accounts[74], 34212, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[74], 1000, {from: accounts[74]});

result = await instance.transfer(accounts[4],569,{from:accounts[0]});
});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 23',async() => {
await instance.batchTransfer([accounts[66],accounts[28],accounts[37],accounts[38],accounts[26]],2807,{from:accounts[0]});


await instance.approve(accounts[107], 37883, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[107], 1000, {from: accounts[107]});

result = await instance.transfer(accounts[3],630,{from:accounts[4]});
});
it('test 24',async() => {
await instance.batchTransfer([accounts[47],accounts[74],accounts[76],accounts[83]],7053,{from:accounts[0]});

result = await instance.transfer(accounts[1],727,{from:accounts[1]});

await instance.approve(accounts[137], 39714, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[137], 1000, {from: accounts[137]});

});
it('test 25',async() => {
result = await instance.transfer(accounts[4],894,{from:accounts[2]});

await instance.approve(accounts[77], 36620, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[77], 1000, {from: accounts[77]});

await instance.batchTransfer([accounts[91],accounts[38],accounts[30]],9816,{from:accounts[0]});

});
it('test 26',async() => {
await instance.batchTransfer([accounts[38],accounts[39]],3218,{from:accounts[0]});


await instance.approve(accounts[183], 25788, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[183], 1000, {from: accounts[183]});

result = await instance.transfer(accounts[4],422,{from:accounts[1]});
});
it('test 27',async() => {

await instance.approve(accounts[160], 29151, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[160], 1000, {from: accounts[160]});

await instance.batchTransfer([accounts[69],accounts[14],accounts[92]],8860,{from:accounts[0]});

result = await instance.transfer(accounts[4],804,{from:accounts[4]});
});
it('test 28',async() => {
result = await instance.transfer(accounts[1],976,{from:accounts[1]});

await instance.approve(accounts[6], 29025, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[6], 1000, {from: accounts[6]});

await instance.batchTransfer([accounts[45]],7011,{from:accounts[0]});

});
it('test 29',async() => {
result = await instance.transfer(accounts[0],678,{from:accounts[3]});
await instance.batchTransfer([accounts[8],accounts[23],accounts[17],accounts[52]],3291,{from:accounts[0]});


await instance.approve(accounts[74], 29210, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[74], 1000, {from: accounts[74]});

});
});
