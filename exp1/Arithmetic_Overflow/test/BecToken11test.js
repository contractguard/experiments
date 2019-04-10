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
await instance.batchTransfer([accounts[36],accounts[48],accounts[83],accounts[6],accounts[10]],1246,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[3],634,{from:accounts[3]});

await instance.approve(accounts[61], 27746, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[61], 1000, {from: accounts[61]});

});
it('test 1',async() => {
await instance.batchTransfer([accounts[84],accounts[30],accounts[4],accounts[10],accounts[23],accounts[65],accounts[1],accounts[51],accounts[88],accounts[55]],1121,{from:accounts[0]});

result = await instance.transfer(accounts[2],947,{from:accounts[2]});

await instance.approve(accounts[126], 33521, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[126], 1000, {from: accounts[126]});

});
it('test 2',async() => {
result = await instance.transfer(accounts[1],681,{from:accounts[0]});

await instance.approve(accounts[71], 30136, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[71], 1000, {from: accounts[71]});

await instance.batchTransfer([accounts[78],accounts[70],accounts[29]],5615,{from:accounts[0]});

});
it('test 3',async() => {
result = await instance.transfer(accounts[0],358,{from:accounts[5]});

await instance.approve(accounts[16], 28945, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[16], 1000, {from: accounts[16]});

await instance.batchTransfer([accounts[27],accounts[47],accounts[91],accounts[41],accounts[78],accounts[97],accounts[15],accounts[54],accounts[15],accounts[68]],5298,{from:accounts[0]});

});
it('test 4',async() => {
await instance.batchTransfer([accounts[41],accounts[1],accounts[82],accounts[9]],4546,{from:accounts[0]});


await instance.approve(accounts[76], 38930, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[76], 1000, {from: accounts[76]});

result = await instance.transfer(accounts[4],350,{from:accounts[5]});
});
it('test 5',async() => {
await instance.batchTransfer([accounts[31],accounts[49]],3758,{from:accounts[0]});


await instance.approve(accounts[143], 35707, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[143], 1000, {from: accounts[143]});

result = await instance.transfer(accounts[5],976,{from:accounts[0]});
});
it('test 6',async() => {
await instance.batchTransfer([accounts[99]],8293,{from:accounts[0]});


await instance.approve(accounts[166], 21078, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[166], 1000, {from: accounts[166]});

result = await instance.transfer(accounts[3],503,{from:accounts[5]});
});
it('test 7',async() => {
await instance.batchTransfer([accounts[15],accounts[44],accounts[94],accounts[6],accounts[62],accounts[11],accounts[51],accounts[78],accounts[74],accounts[6]],1747,{from:accounts[0]});


await instance.approve(accounts[188], 22240, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[188], 1000, {from: accounts[188]});

result = await instance.transfer(accounts[2],900,{from:accounts[0]});
});
it('test 8',async() => {
result = await instance.transfer(accounts[5],219,{from:accounts[1]});
await instance.batchTransfer([accounts[35],accounts[68],accounts[85],accounts[84],accounts[12],accounts[51],accounts[72],accounts[76]],8937,{from:accounts[0]});


await instance.approve(accounts[45], 22142, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[45], 1000, {from: accounts[45]});

});
it('test 9',async() => {
result = await instance.transfer(accounts[1],497,{from:accounts[4]});
await instance.batchTransfer([accounts[43],accounts[47]],5647,{from:accounts[0]});


await instance.approve(accounts[37], 39876, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[37], 1000, {from: accounts[37]});

});
it('test 10',async() => {

await instance.approve(accounts[135], 28891, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[135], 1000, {from: accounts[135]});

await instance.batchTransfer([accounts[58],accounts[20],accounts[4],accounts[7],accounts[65],accounts[88],accounts[6],accounts[51]],6761,{from:accounts[0]});

result = await instance.transfer(accounts[0],702,{from:accounts[4]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 11',async() => {
await instance.batchTransfer([accounts[94],accounts[28]],3356,{from:accounts[0]});


await instance.approve(accounts[134], 23155, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[134], 1000, {from: accounts[134]});

result = await instance.transfer(accounts[3],357,{from:accounts[3]});
});
it('test 12',async() => {
result = await instance.transfer(accounts[1],327,{from:accounts[1]});
await instance.batchTransfer([accounts[11],accounts[78],accounts[94],accounts[46],accounts[24],accounts[20]],9186,{from:accounts[0]});


await instance.approve(accounts[194], 20094, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[194], 1000, {from: accounts[194]});

});
it('test 13',async() => {

await instance.approve(accounts[98], 31688, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[98], 1000, {from: accounts[98]});

result = await instance.transfer(accounts[2],433,{from:accounts[4]});
await instance.batchTransfer([accounts[44],accounts[61],accounts[81]],3105,{from:accounts[0]});

});
it('test 14',async() => {

await instance.approve(accounts[93], 24874, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[93], 1000, {from: accounts[93]});

await instance.batchTransfer([accounts[16],accounts[62],accounts[64],accounts[89],accounts[86],accounts[43],accounts[37],accounts[58],accounts[26],accounts[30]],5693,{from:accounts[0]});

result = await instance.transfer(accounts[1],586,{from:accounts[3]});
});
it('test 15',async() => {

await instance.approve(accounts[10], 30968, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[10], 1000, {from: accounts[10]});

await instance.batchTransfer([accounts[52],accounts[95],accounts[67],accounts[6],accounts[74]],1826,{from:accounts[0]});

result = await instance.transfer(accounts[3],936,{from:accounts[4]});
});
it('test 16',async() => {
await instance.batchTransfer([accounts[99],accounts[4],accounts[3],accounts[73],accounts[26],accounts[1],accounts[81],accounts[43],accounts[72],accounts[81]],1132,{from:accounts[0]});

result = await instance.transfer(accounts[3],733,{from:accounts[0]});

await instance.approve(accounts[153], 33483, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[153], 1000, {from: accounts[153]});

});
it('test 17',async() => {
result = await instance.transfer(accounts[3],868,{from:accounts[2]});

await instance.approve(accounts[136], 32178, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[136], 1000, {from: accounts[136]});

await instance.batchTransfer([accounts[93]],6711,{from:accounts[0]});

});
it('test 18',async() => {

await instance.approve(accounts[168], 22684, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[168], 1000, {from: accounts[168]});

await instance.batchTransfer([accounts[14],accounts[30],accounts[84],accounts[88],accounts[60],accounts[27],accounts[15],accounts[90],accounts[6]],1307,{from:accounts[0]});

result = await instance.transfer(accounts[0],336,{from:accounts[4]});
});
it('test 19',async() => {
await instance.batchTransfer([accounts[100],accounts[88],accounts[48],accounts[37],accounts[18],accounts[65],accounts[96]],3127,{from:accounts[0]});


await instance.approve(accounts[6], 27019, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[6], 1000, {from: accounts[6]});

result = await instance.transfer(accounts[1],351,{from:accounts[1]});
});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.batchTransfer([accounts[57],accounts[43],accounts[57],accounts[21]],3417,{from:accounts[0]});


await instance.approve(accounts[168], 37770, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[168], 1000, {from: accounts[168]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[2],933,{from:accounts[5]});
});
it('test 21',async() => {

await instance.approve(accounts[12], 34139, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[12], 1000, {from: accounts[12]});

result = await instance.transfer(accounts[1],907,{from:accounts[3]});
await instance.batchTransfer([accounts[87]],3677,{from:accounts[0]});

});
it('test 22',async() => {
result = await instance.transfer(accounts[3],998,{from:accounts[1]});

await instance.approve(accounts[196], 26331, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[196], 1000, {from: accounts[196]});

await instance.batchTransfer([accounts[96],accounts[22],accounts[45],accounts[5],accounts[33],accounts[94],accounts[43]],3664,{from:accounts[0]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 23',async() => {
result = await instance.transfer(accounts[2],429,{from:accounts[4]});

await instance.approve(accounts[140], 39179, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[140], 1000, {from: accounts[140]});

await instance.batchTransfer([accounts[85],accounts[54],accounts[29]],2998,{from:accounts[0]});

});
it('test 24',async() => {

await instance.approve(accounts[94], 33738, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[94], 1000, {from: accounts[94]});

await instance.batchTransfer([accounts[53],accounts[98]],8863,{from:accounts[0]});

result = await instance.transfer(accounts[3],918,{from:accounts[1]});
});
it('test 25',async() => {

await instance.approve(accounts[73], 22158, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[73], 1000, {from: accounts[73]});

await instance.batchTransfer([accounts[9],accounts[79],accounts[9],accounts[91],accounts[52],accounts[8],accounts[98]],3066,{from:accounts[0]});

result = await instance.transfer(accounts[3],309,{from:accounts[0]});
});
it('test 26',async() => {

await instance.approve(accounts[195], 40000, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[195], 1000, {from: accounts[195]});

await instance.batchTransfer([accounts[82],accounts[28],accounts[85],accounts[81],accounts[34]],3028,{from:accounts[0]});

result = await instance.transfer(accounts[3],223,{from:accounts[4]});
});
it('test 27',async() => {

await instance.approve(accounts[44], 24419, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[44], 1000, {from: accounts[44]});

await instance.batchTransfer([accounts[43],accounts[3],accounts[13],accounts[36],accounts[92],accounts[70],accounts[44],accounts[66],accounts[17]],2551,{from:accounts[0]});

result = await instance.transfer(accounts[2],572,{from:accounts[5]});
});
it('test 28',async() => {
result = await instance.transfer(accounts[3],807,{from:accounts[4]});

await instance.approve(accounts[110], 23617, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[110], 1000, {from: accounts[110]});

await instance.batchTransfer([accounts[49]],9991,{from:accounts[0]});

});
it('test 29',async() => {
result = await instance.transfer(accounts[1],311,{from:accounts[5]});
await instance.batchTransfer([accounts[65],accounts[60],accounts[99],accounts[81],accounts[78],accounts[33],accounts[74]],9897,{from:accounts[0]});


await instance.approve(accounts[58], 20496, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[58], 1000, {from: accounts[58]});

});
});
