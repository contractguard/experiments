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
result = await instance.transfer(accounts[1],601,{from:accounts[5]});

await instance.approve(accounts[41], 35677, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[41], 1000, {from: accounts[41]});

await instance.batchTransfer([accounts[4],accounts[25],accounts[63],accounts[92],accounts[21],accounts[59]],1136,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 1',async() => {

await instance.approve(accounts[188], 35695, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[188], 1000, {from: accounts[188]});

result = await instance.transfer(accounts[2],985,{from:accounts[3]});
await instance.batchTransfer([accounts[16],accounts[70],accounts[19],accounts[35],accounts[27],accounts[48],accounts[18],accounts[11]],1500,{from:accounts[0]});

});
it('test 2',async() => {

await instance.approve(accounts[102], 33438, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[102], 1000, {from: accounts[102]});

result = await instance.transfer(accounts[3],278,{from:accounts[4]});
await instance.batchTransfer([accounts[77],accounts[83],accounts[37]],9020,{from:accounts[0]});

});
it('test 3',async() => {
result = await instance.transfer(accounts[5],856,{from:accounts[2]});

await instance.approve(accounts[113], 25685, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[113], 1000, {from: accounts[113]});

await instance.batchTransfer([accounts[16],accounts[49],accounts[73],accounts[43],accounts[19],accounts[2],accounts[8],accounts[6],accounts[98]],8670,{from:accounts[0]});

});
it('test 4',async() => {
await instance.batchTransfer([accounts[96],accounts[27],accounts[23],accounts[100],accounts[35]],4467,{from:accounts[0]});

result = await instance.transfer(accounts[4],935,{from:accounts[4]});

await instance.approve(accounts[183], 33374, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[183], 1000, {from: accounts[183]});

});
it('test 5',async() => {
result = await instance.transfer(accounts[2],789,{from:accounts[4]});
await instance.batchTransfer([accounts[74],accounts[53],accounts[61],accounts[49]],8173,{from:accounts[0]});


await instance.approve(accounts[169], 33807, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[169], 1000, {from: accounts[169]});

});
it('test 6',async() => {

await instance.approve(accounts[150], 38298, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[150], 1000, {from: accounts[150]});

await instance.batchTransfer([accounts[6],accounts[85]],9147,{from:accounts[0]});

result = await instance.transfer(accounts[2],347,{from:accounts[1]});
});
it('test 7',async() => {

await instance.approve(accounts[16], 26065, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[16], 1000, {from: accounts[16]});

await instance.batchTransfer([accounts[77],accounts[12],accounts[18]],7625,{from:accounts[0]});

result = await instance.transfer(accounts[4],658,{from:accounts[0]});
});
it('test 8',async() => {

await instance.approve(accounts[27], 36324, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[27], 1000, {from: accounts[27]});

result = await instance.transfer(accounts[2],568,{from:accounts[4]});
await instance.batchTransfer([accounts[20],accounts[60],accounts[46],accounts[67],accounts[43]],4103,{from:accounts[0]});

});
it('test 9',async() => {
result = await instance.transfer(accounts[4],443,{from:accounts[3]});

await instance.approve(accounts[72], 29020, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[72], 1000, {from: accounts[72]});

await instance.batchTransfer([accounts[8],accounts[91],accounts[19],accounts[33],accounts[40],accounts[16],accounts[12]],1613,{from:accounts[0]});

});
it('test 10',async() => {
result = await instance.transfer(accounts[3],975,{from:accounts[1]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[4],accounts[93],accounts[65],accounts[89],accounts[50],accounts[95]],4473,{from:accounts[0]});


await instance.approve(accounts[53], 34876, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[53], 1000, {from: accounts[53]});

});
it('test 11',async() => {
result = await instance.transfer(accounts[3],586,{from:accounts[2]});

await instance.approve(accounts[5], 39917, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[5], 1000, {from: accounts[5]});

await instance.batchTransfer([accounts[85],accounts[14]],8830,{from:accounts[0]});

});
it('test 12',async() => {
await instance.batchTransfer([accounts[28],accounts[29],accounts[41]],8484,{from:accounts[0]});


await instance.approve(accounts[160], 29338, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[160], 1000, {from: accounts[160]});

result = await instance.transfer(accounts[1],915,{from:accounts[4]});
});
it('test 13',async() => {
result = await instance.transfer(accounts[2],290,{from:accounts[1]});

await instance.approve(accounts[49], 21301, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[49], 1000, {from: accounts[49]});

await instance.batchTransfer([accounts[9],accounts[7],accounts[12],accounts[37],accounts[80],accounts[16],accounts[64],accounts[33],accounts[6],accounts[59]],2901,{from:accounts[0]});

});
it('test 14',async() => {

await instance.approve(accounts[49], 30787, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[49], 1000, {from: accounts[49]});

await instance.batchTransfer([accounts[45],accounts[83],accounts[95],accounts[50],accounts[85],accounts[47],accounts[22],accounts[5]],8234,{from:accounts[0]});

result = await instance.transfer(accounts[5],730,{from:accounts[5]});
});
it('test 15',async() => {
result = await instance.transfer(accounts[1],657,{from:accounts[2]});
await instance.batchTransfer([accounts[11],accounts[65]],3798,{from:accounts[0]});


await instance.approve(accounts[145], 25290, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[145], 1000, {from: accounts[145]});

});
it('test 16',async() => {
await instance.batchTransfer([accounts[2],accounts[46],accounts[41]],3616,{from:accounts[0]});


await instance.approve(accounts[176], 23397, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[176], 1000, {from: accounts[176]});

result = await instance.transfer(accounts[4],630,{from:accounts[4]});
});
it('test 17',async() => {
await instance.batchTransfer([accounts[40],accounts[25],accounts[81],accounts[14]],8226,{from:accounts[0]});

result = await instance.transfer(accounts[2],847,{from:accounts[4]});

await instance.approve(accounts[54], 22529, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[54], 1000, {from: accounts[54]});

});
it('test 18',async() => {
result = await instance.transfer(accounts[5],801,{from:accounts[1]});

await instance.approve(accounts[61], 29918, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[61], 1000, {from: accounts[61]});

await instance.batchTransfer([accounts[93],accounts[24],accounts[19],accounts[90],accounts[48],accounts[3]],2099,{from:accounts[0]});

});
it('test 19',async() => {
result = await instance.transfer(accounts[2],569,{from:accounts[2]});

await instance.approve(accounts[88], 21196, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[88], 1000, {from: accounts[88]});

await instance.batchTransfer([accounts[60],accounts[8],accounts[4],accounts[44],accounts[56],accounts[52],accounts[34],accounts[44]],6038,{from:accounts[0]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
result = await instance.transfer(accounts[1],871,{from:accounts[0]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[32], 20420, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[32], 1000, {from: accounts[32]});

await instance.batchTransfer([accounts[40]],8889,{from:accounts[0]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 21',async() => {

await instance.approve(accounts[65], 26437, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[65], 1000, {from: accounts[65]});

await instance.batchTransfer([accounts[20],accounts[68],accounts[14],accounts[74],accounts[17],accounts[70],accounts[89],accounts[90]],8258,{from:accounts[0]});

result = await instance.transfer(accounts[5],507,{from:accounts[2]});
});
it('test 22',async() => {
result = await instance.transfer(accounts[1],614,{from:accounts[2]});
await instance.batchTransfer([accounts[28],accounts[36],accounts[89],accounts[58],accounts[65],accounts[13],accounts[24]],2017,{from:accounts[0]});


await instance.approve(accounts[31], 24039, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[31], 1000, {from: accounts[31]});

});
it('test 23',async() => {
await instance.batchTransfer([accounts[44],accounts[36],accounts[82],accounts[44],accounts[80],accounts[76],accounts[69],accounts[22],accounts[84]],4480,{from:accounts[0]});

result = await instance.transfer(accounts[2],730,{from:accounts[3]});

await instance.approve(accounts[51], 32036, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[51], 1000, {from: accounts[51]});

});
it('test 24',async() => {
await instance.batchTransfer([accounts[84],accounts[20],accounts[16],accounts[68],accounts[18],accounts[57],accounts[42],accounts[58],accounts[8]],2987,{from:accounts[0]});


await instance.approve(accounts[65], 23327, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[65], 1000, {from: accounts[65]});

result = await instance.transfer(accounts[2],262,{from:accounts[1]});
});
it('test 25',async() => {

await instance.approve(accounts[185], 34815, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[185], 1000, {from: accounts[185]});

result = await instance.transfer(accounts[3],927,{from:accounts[2]});
await instance.batchTransfer([accounts[83],accounts[39],accounts[71],accounts[89],accounts[79],accounts[48],accounts[54]],3487,{from:accounts[0]});

});
it('test 26',async() => {
await instance.batchTransfer([accounts[45],accounts[96],accounts[18],accounts[55]],4645,{from:accounts[0]});

result = await instance.transfer(accounts[4],584,{from:accounts[0]});

await instance.approve(accounts[165], 27581, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[165], 1000, {from: accounts[165]});

});
it('test 27',async() => {
await instance.batchTransfer([accounts[18],accounts[41],accounts[35],accounts[5],accounts[92],accounts[82],accounts[32],accounts[21],accounts[51],accounts[12]],6492,{from:accounts[0]});


await instance.approve(accounts[130], 22236, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[130], 1000, {from: accounts[130]});

result = await instance.transfer(accounts[5],895,{from:accounts[4]});
});
it('test 28',async() => {
await instance.batchTransfer([accounts[17],accounts[6],accounts[60]],4443,{from:accounts[0]});


await instance.approve(accounts[14], 25941, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[14], 1000, {from: accounts[14]});

result = await instance.transfer(accounts[2],909,{from:accounts[3]});
});
it('test 29',async() => {
await instance.batchTransfer([accounts[17],accounts[66],accounts[86],accounts[90],accounts[53],accounts[13]],8059,{from:accounts[0]});


await instance.approve(accounts[18], 22694, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[18], 1000, {from: accounts[18]});

result = await instance.transfer(accounts[2],540,{from:accounts[4]});
});
});
