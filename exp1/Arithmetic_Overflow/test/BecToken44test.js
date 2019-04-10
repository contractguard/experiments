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

await instance.approve(accounts[142], 39180, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[142], 1000, {from: accounts[142]});

result = await instance.transfer(accounts[1],628,{from:accounts[3]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[61],accounts[19],accounts[96],accounts[19],accounts[24],accounts[66],accounts[9],accounts[71],accounts[39]],7232,{from:accounts[0]});

});
it('test 1',async() => {
await instance.batchTransfer([accounts[87],accounts[32],accounts[77],accounts[84],accounts[65],accounts[75],accounts[42],accounts[46]],9553,{from:accounts[0]});


await instance.approve(accounts[120], 28458, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[120], 1000, {from: accounts[120]});

result = await instance.transfer(accounts[5],878,{from:accounts[1]});
});
it('test 2',async() => {

await instance.approve(accounts[51], 23013, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[51], 1000, {from: accounts[51]});

await instance.batchTransfer([accounts[95],accounts[56],accounts[58],accounts[87]],4457,{from:accounts[0]});

result = await instance.transfer(accounts[3],739,{from:accounts[2]});
});
it('test 3',async() => {
result = await instance.transfer(accounts[0],372,{from:accounts[0]});

await instance.approve(accounts[97], 21065, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[97], 1000, {from: accounts[97]});

await instance.batchTransfer([accounts[36],accounts[82],accounts[88],accounts[53],accounts[66],accounts[30],accounts[54],accounts[96],accounts[52]],2028,{from:accounts[0]});

});
it('test 4',async() => {
await instance.batchTransfer([accounts[29],accounts[96],accounts[35],accounts[33],accounts[8],accounts[9],accounts[13]],5211,{from:accounts[0]});


await instance.approve(accounts[124], 28866, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[124], 1000, {from: accounts[124]});

result = await instance.transfer(accounts[3],865,{from:accounts[0]});
});
it('test 5',async() => {
result = await instance.transfer(accounts[5],716,{from:accounts[5]});

await instance.approve(accounts[69], 27021, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[69], 1000, {from: accounts[69]});

await instance.batchTransfer([accounts[100],accounts[3],accounts[84],accounts[20],accounts[80],accounts[67],accounts[20],accounts[98],accounts[79],accounts[53]],3267,{from:accounts[0]});

});
it('test 6',async() => {
result = await instance.transfer(accounts[4],643,{from:accounts[4]});

await instance.approve(accounts[20], 35193, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[20], 1000, {from: accounts[20]});

await instance.batchTransfer([accounts[14],accounts[52],accounts[34],accounts[78],accounts[19],accounts[76],accounts[46],accounts[9],accounts[92],accounts[64]],7891,{from:accounts[0]});

});
it('test 7',async() => {
result = await instance.transfer(accounts[2],953,{from:accounts[2]});
await instance.batchTransfer([accounts[7],accounts[33],accounts[100],accounts[81]],9647,{from:accounts[0]});


await instance.approve(accounts[200], 33491, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[200], 1000, {from: accounts[200]});

});
it('test 8',async() => {
await instance.batchTransfer([accounts[61]],9290,{from:accounts[0]});


await instance.approve(accounts[115], 20149, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[115], 1000, {from: accounts[115]});

result = await instance.transfer(accounts[0],599,{from:accounts[2]});
});
it('test 9',async() => {
await instance.batchTransfer([accounts[96],accounts[75],accounts[73],accounts[83]],2602,{from:accounts[0]});

result = await instance.transfer(accounts[4],738,{from:accounts[5]});

await instance.approve(accounts[116], 23487, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[116], 1000, {from: accounts[116]});

});
it('test 10',async() => {

await instance.approve(accounts[78], 37064, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[78], 1000, {from: accounts[78]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[26],accounts[89],accounts[31]],4545,{from:accounts[0]});

result = await instance.transfer(accounts[2],894,{from:accounts[1]});
});
it('test 11',async() => {
result = await instance.transfer(accounts[3],475,{from:accounts[5]});
await instance.batchTransfer([accounts[51],accounts[37],accounts[30],accounts[92],accounts[48],accounts[45],accounts[100]],9390,{from:accounts[0]});


await instance.approve(accounts[176], 25781, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[176], 1000, {from: accounts[176]});

});
it('test 12',async() => {
await instance.batchTransfer([accounts[38],accounts[78],accounts[59],accounts[51],accounts[93],accounts[35],accounts[91],accounts[36],accounts[21],accounts[25]],2591,{from:accounts[0]});

result = await instance.transfer(accounts[5],631,{from:accounts[5]});

await instance.approve(accounts[141], 35683, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[141], 1000, {from: accounts[141]});

});
it('test 13',async() => {
await instance.batchTransfer([accounts[80],accounts[19]],9627,{from:accounts[0]});

result = await instance.transfer(accounts[0],315,{from:accounts[1]});

await instance.approve(accounts[181], 26047, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[181], 1000, {from: accounts[181]});

});
it('test 14',async() => {
result = await instance.transfer(accounts[2],608,{from:accounts[0]});
await instance.batchTransfer([accounts[64],accounts[32],accounts[12],accounts[56],accounts[93],accounts[16],accounts[71]],1068,{from:accounts[0]});


await instance.approve(accounts[16], 32658, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[16], 1000, {from: accounts[16]});

});
it('test 15',async() => {
result = await instance.transfer(accounts[5],690,{from:accounts[4]});

await instance.approve(accounts[96], 33555, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[96], 1000, {from: accounts[96]});

await instance.batchTransfer([accounts[92],accounts[16],accounts[13],accounts[36],accounts[1],accounts[42],accounts[61],accounts[86],accounts[74],accounts[47]],8832,{from:accounts[0]});

});
it('test 16',async() => {

await instance.approve(accounts[9], 28381, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[9], 1000, {from: accounts[9]});

await instance.batchTransfer([accounts[92],accounts[25]],9133,{from:accounts[0]});

result = await instance.transfer(accounts[0],747,{from:accounts[5]});
});
it('test 17',async() => {

await instance.approve(accounts[186], 29384, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[186], 1000, {from: accounts[186]});

await instance.batchTransfer([accounts[9],accounts[90],accounts[3],accounts[29],accounts[17],accounts[76],accounts[13],accounts[50]],3398,{from:accounts[0]});

result = await instance.transfer(accounts[1],450,{from:accounts[2]});
});
it('test 18',async() => {
await instance.batchTransfer([accounts[73],accounts[35],accounts[85],accounts[41],accounts[6],accounts[44]],5592,{from:accounts[0]});


await instance.approve(accounts[200], 36010, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[200], 1000, {from: accounts[200]});

result = await instance.transfer(accounts[2],865,{from:accounts[4]});
});
it('test 19',async() => {

await instance.approve(accounts[14], 39545, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[14], 1000, {from: accounts[14]});

result = await instance.transfer(accounts[0],507,{from:accounts[3]});
await instance.batchTransfer([accounts[37],accounts[36],accounts[54],accounts[23],accounts[3],accounts[100],accounts[26]],9815,{from:accounts[0]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.batchTransfer([accounts[51],accounts[39],accounts[18],accounts[35],accounts[81],accounts[63],accounts[76],accounts[90]],8653,{from:accounts[0]});

result = await instance.transfer(accounts[3],755,{from:accounts[5]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[187], 25232, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[187], 1000, {from: accounts[187]});

});
it('test 21',async() => {
result = await instance.transfer(accounts[0],936,{from:accounts[0]});
await instance.batchTransfer([accounts[58],accounts[91]],1805,{from:accounts[0]});


await instance.approve(accounts[130], 36524, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[130], 1000, {from: accounts[130]});

});
it('test 22',async() => {
await instance.batchTransfer([accounts[75],accounts[97],accounts[98],accounts[58],accounts[74],accounts[57],accounts[79]],5512,{from:accounts[0]});


await instance.approve(accounts[87], 32198, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[87], 1000, {from: accounts[87]});

result = await instance.transfer(accounts[4],336,{from:accounts[4]});
});
it('test 23',async() => {
result = await instance.transfer(accounts[5],733,{from:accounts[1]});
await instance.batchTransfer([accounts[18],accounts[24],accounts[26],accounts[44],accounts[46]],9993,{from:accounts[0]});


await instance.approve(accounts[163], 38871, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[163], 1000, {from: accounts[163]});

});
it('test 24',async() => {

await instance.approve(accounts[128], 37025, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[128], 1000, {from: accounts[128]});

await instance.batchTransfer([accounts[29],accounts[5],accounts[62],accounts[49],accounts[82]],6324,{from:accounts[0]});

result = await instance.transfer(accounts[5],955,{from:accounts[2]});
});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 25',async() => {
result = await instance.transfer(accounts[2],962,{from:accounts[0]});

await instance.approve(accounts[121], 32005, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[121], 1000, {from: accounts[121]});

await instance.batchTransfer([accounts[58],accounts[64],accounts[41],accounts[7],accounts[50],accounts[36],accounts[10],accounts[76]],9301,{from:accounts[0]});

});
it('test 26',async() => {
result = await instance.transfer(accounts[0],734,{from:accounts[1]});

await instance.approve(accounts[59], 35617, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[59], 1000, {from: accounts[59]});

await instance.batchTransfer([accounts[69],accounts[56]],1655,{from:accounts[0]});

});
it('test 27',async() => {
result = await instance.transfer(accounts[3],342,{from:accounts[3]});

await instance.approve(accounts[83], 24733, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[83], 1000, {from: accounts[83]});

await instance.batchTransfer([accounts[98],accounts[94],accounts[75],accounts[86],accounts[71],accounts[39],accounts[39],accounts[29],accounts[32]],8415,{from:accounts[0]});

});
it('test 28',async() => {
await instance.batchTransfer([accounts[48],accounts[71],accounts[91],accounts[3],accounts[75],accounts[69]],5457,{from:accounts[0]});

result = await instance.transfer(accounts[1],706,{from:accounts[3]});

await instance.approve(accounts[133], 34555, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[133], 1000, {from: accounts[133]});

});
it('test 29',async() => {
result = await instance.transfer(accounts[3],791,{from:accounts[5]});

await instance.approve(accounts[175], 37483, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[175], 1000, {from: accounts[175]});

await instance.batchTransfer([accounts[93],accounts[38]],4377,{from:accounts[0]});

});
});
