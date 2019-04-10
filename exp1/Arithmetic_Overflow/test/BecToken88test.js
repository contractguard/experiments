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

await instance.approve(accounts[14], 22411, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[14], 1000, {from: accounts[14]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[5],315,{from:accounts[5]});
await instance.batchTransfer([accounts[70],accounts[17],accounts[10],accounts[32],accounts[65],accounts[71],accounts[98],accounts[46]],8885,{from:accounts[0]});

});
it('test 1',async() => {

await instance.approve(accounts[50], 39415, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[50], 1000, {from: accounts[50]});

result = await instance.transfer(accounts[2],931,{from:accounts[3]});
await instance.batchTransfer([accounts[64],accounts[43],accounts[39],accounts[97],accounts[37],accounts[21],accounts[76],accounts[38]],5574,{from:accounts[0]});

});
it('test 2',async() => {

await instance.approve(accounts[144], 25563, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[144], 1000, {from: accounts[144]});

await instance.batchTransfer([accounts[48],accounts[94],accounts[81],accounts[47],accounts[5]],8734,{from:accounts[0]});

result = await instance.transfer(accounts[5],265,{from:accounts[0]});
});
it('test 3',async() => {

await instance.approve(accounts[29], 32520, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[29], 1000, {from: accounts[29]});

result = await instance.transfer(accounts[5],234,{from:accounts[5]});
await instance.batchTransfer([accounts[19],accounts[73],accounts[26],accounts[79],accounts[29],accounts[31]],6453,{from:accounts[0]});

});
it('test 4',async() => {
result = await instance.transfer(accounts[5],227,{from:accounts[5]});

await instance.approve(accounts[81], 39302, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[81], 1000, {from: accounts[81]});

await instance.batchTransfer([accounts[98],accounts[80],accounts[59],accounts[67],accounts[18],accounts[52],accounts[37]],8856,{from:accounts[0]});

});
it('test 5',async() => {
result = await instance.transfer(accounts[4],881,{from:accounts[0]});

await instance.approve(accounts[151], 39881, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[151], 1000, {from: accounts[151]});

await instance.batchTransfer([accounts[37],accounts[24],accounts[24],accounts[20],accounts[14]],7655,{from:accounts[0]});

});
it('test 6',async() => {

await instance.approve(accounts[173], 24082, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[173], 1000, {from: accounts[173]});

await instance.batchTransfer([accounts[41],accounts[95],accounts[69],accounts[22],accounts[58],accounts[100]],3477,{from:accounts[0]});

result = await instance.transfer(accounts[2],913,{from:accounts[1]});
});
it('test 7',async() => {

await instance.approve(accounts[187], 25272, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[187], 1000, {from: accounts[187]});

await instance.batchTransfer([accounts[7],accounts[59],accounts[33],accounts[15]],9951,{from:accounts[0]});

result = await instance.transfer(accounts[5],672,{from:accounts[1]});
});
it('test 8',async() => {
await instance.batchTransfer([accounts[69],accounts[2],accounts[88],accounts[79],accounts[21]],1351,{from:accounts[0]});


await instance.approve(accounts[172], 29101, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[172], 1000, {from: accounts[172]});

result = await instance.transfer(accounts[5],852,{from:accounts[4]});
});
it('test 9',async() => {

await instance.approve(accounts[64], 30848, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[64], 1000, {from: accounts[64]});

await instance.batchTransfer([accounts[57],accounts[68],accounts[45],accounts[27],accounts[8]],9652,{from:accounts[0]});

result = await instance.transfer(accounts[0],722,{from:accounts[2]});
});
it('test 10',async() => {
await instance.batchTransfer([accounts[66]],6295,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[2],236,{from:accounts[1]});

await instance.approve(accounts[2], 26338, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[2], 1000, {from: accounts[2]});

});
it('test 11',async() => {

await instance.approve(accounts[98], 27851, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[98], 1000, {from: accounts[98]});

await instance.batchTransfer([accounts[1]],5183,{from:accounts[0]});

result = await instance.transfer(accounts[2],826,{from:accounts[4]});
});
it('test 12',async() => {
await instance.batchTransfer([accounts[32],accounts[18],accounts[31],accounts[54],accounts[25],accounts[33]],2584,{from:accounts[0]});


await instance.approve(accounts[128], 26101, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[128], 1000, {from: accounts[128]});

result = await instance.transfer(accounts[1],411,{from:accounts[1]});
});
it('test 13',async() => {

await instance.approve(accounts[190], 31696, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[190], 1000, {from: accounts[190]});

result = await instance.transfer(accounts[2],944,{from:accounts[5]});
await instance.batchTransfer([accounts[16],accounts[13],accounts[36],accounts[74],accounts[80],accounts[99]],1777,{from:accounts[0]});

});
it('test 14',async() => {
await instance.batchTransfer([accounts[49],accounts[20],accounts[20],accounts[15],accounts[90],accounts[76],accounts[20],accounts[37],accounts[49],accounts[70]],7211,{from:accounts[0]});

result = await instance.transfer(accounts[4],660,{from:accounts[2]});

await instance.approve(accounts[106], 31548, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[106], 1000, {from: accounts[106]});

});
it('test 15',async() => {
await instance.batchTransfer([accounts[11],accounts[75],accounts[9]],2956,{from:accounts[0]});

result = await instance.transfer(accounts[2],793,{from:accounts[3]});

await instance.approve(accounts[95], 33059, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[95], 1000, {from: accounts[95]});

});
it('test 16',async() => {
await instance.batchTransfer([accounts[87]],1226,{from:accounts[0]});


await instance.approve(accounts[170], 34657, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[170], 1000, {from: accounts[170]});

result = await instance.transfer(accounts[4],253,{from:accounts[0]});
});
it('test 17',async() => {
await instance.batchTransfer([accounts[31],accounts[48],accounts[34],accounts[22],accounts[46],accounts[72],accounts[2],accounts[4],accounts[28],accounts[91]],8914,{from:accounts[0]});

result = await instance.transfer(accounts[0],930,{from:accounts[1]});

await instance.approve(accounts[56], 33792, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[56], 1000, {from: accounts[56]});

});
it('test 18',async() => {
await instance.batchTransfer([accounts[67],accounts[12]],7752,{from:accounts[0]});

result = await instance.transfer(accounts[4],300,{from:accounts[3]});

await instance.approve(accounts[77], 36702, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[77], 1000, {from: accounts[77]});

});
it('test 19',async() => {
result = await instance.transfer(accounts[3],438,{from:accounts[4]});
await instance.batchTransfer([accounts[50],accounts[93],accounts[37],accounts[45],accounts[11],accounts[40],accounts[34],accounts[43],accounts[78],accounts[13]],5793,{from:accounts[0]});


await instance.approve(accounts[57], 23227, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[57], 1000, {from: accounts[57]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});

await instance.approve(accounts[4], 37374, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[4], 1000, {from: accounts[4]});

await instance.batchTransfer([accounts[69],accounts[18],accounts[70],accounts[67]],8947,{from:accounts[0]});

result = await instance.transfer(accounts[5],799,{from:accounts[0]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 21',async() => {
await instance.batchTransfer([accounts[52],accounts[14],accounts[100],accounts[23],accounts[10]],7931,{from:accounts[0]});


await instance.approve(accounts[80], 27527, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[80], 1000, {from: accounts[80]});

result = await instance.transfer(accounts[1],712,{from:accounts[1]});
});
it('test 22',async() => {

await instance.approve(accounts[55], 25562, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[55], 1000, {from: accounts[55]});

await instance.batchTransfer([accounts[93],accounts[41],accounts[45],accounts[90],accounts[1],accounts[4],accounts[88],accounts[4]],3078,{from:accounts[0]});

result = await instance.transfer(accounts[3],727,{from:accounts[4]});
});
it('test 23',async() => {

await instance.approve(accounts[196], 22929, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[196], 1000, {from: accounts[196]});

await instance.batchTransfer([accounts[96],accounts[1],accounts[99],accounts[61]],2441,{from:accounts[0]});

result = await instance.transfer(accounts[5],537,{from:accounts[3]});
});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 24',async() => {
await instance.batchTransfer([accounts[13],accounts[10],accounts[72],accounts[44]],7921,{from:accounts[0]});


await instance.approve(accounts[178], 33385, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[178], 1000, {from: accounts[178]});

result = await instance.transfer(accounts[1],369,{from:accounts[2]});
});
it('test 25',async() => {

await instance.approve(accounts[93], 31435, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[93], 1000, {from: accounts[93]});

result = await instance.transfer(accounts[2],418,{from:accounts[5]});
await instance.batchTransfer([accounts[78],accounts[80],accounts[51]],1321,{from:accounts[0]});

});
it('test 26',async() => {
await instance.batchTransfer([accounts[76],accounts[15],accounts[17],accounts[24],accounts[26]],6301,{from:accounts[0]});

result = await instance.transfer(accounts[1],759,{from:accounts[3]});

await instance.approve(accounts[181], 34504, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[181], 1000, {from: accounts[181]});

});
it('test 27',async() => {
result = await instance.transfer(accounts[4],360,{from:accounts[3]});

await instance.approve(accounts[40], 32621, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[40], 1000, {from: accounts[40]});

await instance.batchTransfer([accounts[20],accounts[13],accounts[71],accounts[16],accounts[44],accounts[79],accounts[52]],7956,{from:accounts[0]});

});
it('test 28',async() => {
await instance.batchTransfer([accounts[66],accounts[82],accounts[89],accounts[72],accounts[96]],7382,{from:accounts[0]});

result = await instance.transfer(accounts[4],368,{from:accounts[5]});

await instance.approve(accounts[113], 34725, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[113], 1000, {from: accounts[113]});

});
it('test 29',async() => {
result = await instance.transfer(accounts[4],301,{from:accounts[5]});
await instance.batchTransfer([accounts[26],accounts[49],accounts[45],accounts[89],accounts[81],accounts[37],accounts[14],accounts[25]],3953,{from:accounts[0]});


await instance.approve(accounts[59], 21525, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[59], 1000, {from: accounts[59]});

});
});
