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
await instance.batchTransfer([accounts[19],accounts[52],accounts[49],accounts[24]],6599,{from:accounts[0]});

result = await instance.transfer(accounts[0],512,{from:accounts[0]});

await instance.approve(accounts[42], 33956, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[42], 1000, {from: accounts[42]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 1',async() => {
await instance.batchTransfer([accounts[98],accounts[35],accounts[48],accounts[17]],6945,{from:accounts[0]});

result = await instance.transfer(accounts[4],557,{from:accounts[2]});

await instance.approve(accounts[57], 37788, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[57], 1000, {from: accounts[57]});

});
it('test 2',async() => {
await instance.batchTransfer([accounts[8],accounts[100],accounts[79]],9235,{from:accounts[0]});


await instance.approve(accounts[109], 36016, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[109], 1000, {from: accounts[109]});

result = await instance.transfer(accounts[1],936,{from:accounts[4]});
});
it('test 3',async() => {
result = await instance.transfer(accounts[5],427,{from:accounts[4]});

await instance.approve(accounts[115], 30473, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[115], 1000, {from: accounts[115]});

await instance.batchTransfer([accounts[94],accounts[58],accounts[45],accounts[75],accounts[45],accounts[14],accounts[82],accounts[89],accounts[84],accounts[65]],8514,{from:accounts[0]});

});
it('test 4',async() => {

await instance.approve(accounts[195], 33261, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[195], 1000, {from: accounts[195]});

await instance.batchTransfer([accounts[92],accounts[10],accounts[28],accounts[51],accounts[31],accounts[89],accounts[42],accounts[94]],1522,{from:accounts[0]});

result = await instance.transfer(accounts[0],549,{from:accounts[1]});
});
it('test 5',async() => {
await instance.batchTransfer([accounts[61],accounts[85],accounts[62],accounts[24],accounts[7]],9033,{from:accounts[0]});


await instance.approve(accounts[3], 39615, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[3], 1000, {from: accounts[3]});

result = await instance.transfer(accounts[4],979,{from:accounts[1]});
});
it('test 6',async() => {
result = await instance.transfer(accounts[4],757,{from:accounts[0]});
await instance.batchTransfer([accounts[90],accounts[58],accounts[45],accounts[95]],2445,{from:accounts[0]});


await instance.approve(accounts[34], 34043, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[34], 1000, {from: accounts[34]});

});
it('test 7',async() => {
await instance.batchTransfer([accounts[51]],1975,{from:accounts[0]});

result = await instance.transfer(accounts[5],699,{from:accounts[3]});

await instance.approve(accounts[22], 27879, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[22], 1000, {from: accounts[22]});

});
it('test 8',async() => {
result = await instance.transfer(accounts[3],956,{from:accounts[5]});

await instance.approve(accounts[88], 33147, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[88], 1000, {from: accounts[88]});

await instance.batchTransfer([accounts[41],accounts[89],accounts[5],accounts[4],accounts[18]],6415,{from:accounts[0]});

});
it('test 9',async() => {

await instance.approve(accounts[101], 20928, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[101], 1000, {from: accounts[101]});

result = await instance.transfer(accounts[0],513,{from:accounts[5]});
await instance.batchTransfer([accounts[83],accounts[53]],3184,{from:accounts[0]});

});
it('test 10',async() => {
result = await instance.transfer(accounts[1],224,{from:accounts[4]});

await instance.approve(accounts[176], 32305, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[176], 1000, {from: accounts[176]});

await instance.batchTransfer([accounts[5],accounts[83],accounts[99],accounts[90],accounts[80],accounts[36],accounts[74],accounts[61]],4662,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 11',async() => {

await instance.approve(accounts[135], 24042, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[135], 1000, {from: accounts[135]});

await instance.batchTransfer([accounts[40],accounts[100],accounts[100],accounts[40],accounts[26],accounts[62],accounts[66],accounts[86]],3684,{from:accounts[0]});

result = await instance.transfer(accounts[3],555,{from:accounts[0]});
});
it('test 12',async() => {
await instance.batchTransfer([accounts[56],accounts[4],accounts[13],accounts[50],accounts[75],accounts[85]],5110,{from:accounts[0]});


await instance.approve(accounts[83], 38616, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[83], 1000, {from: accounts[83]});

result = await instance.transfer(accounts[1],990,{from:accounts[3]});
});
it('test 13',async() => {
result = await instance.transfer(accounts[2],902,{from:accounts[0]});

await instance.approve(accounts[115], 24318, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[115], 1000, {from: accounts[115]});

await instance.batchTransfer([accounts[69],accounts[35],accounts[81]],6410,{from:accounts[0]});

});
it('test 14',async() => {
result = await instance.transfer(accounts[3],228,{from:accounts[0]});
await instance.batchTransfer([accounts[3],accounts[21],accounts[23],accounts[76],accounts[36],accounts[73],accounts[73],accounts[77],accounts[14]],1938,{from:accounts[0]});


await instance.approve(accounts[34], 32381, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[34], 1000, {from: accounts[34]});

});
it('test 15',async() => {
await instance.batchTransfer([accounts[55],accounts[31],accounts[94]],4629,{from:accounts[0]});

result = await instance.transfer(accounts[1],929,{from:accounts[2]});

await instance.approve(accounts[92], 39375, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[92], 1000, {from: accounts[92]});

});
it('test 16',async() => {
await instance.batchTransfer([accounts[19],accounts[2]],8339,{from:accounts[0]});

result = await instance.transfer(accounts[4],209,{from:accounts[0]});

await instance.approve(accounts[100], 21195, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[100], 1000, {from: accounts[100]});

});
it('test 17',async() => {
result = await instance.transfer(accounts[2],551,{from:accounts[3]});

await instance.approve(accounts[148], 21646, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[148], 1000, {from: accounts[148]});

await instance.batchTransfer([accounts[97],accounts[73],accounts[62],accounts[81],accounts[88],accounts[32]],3911,{from:accounts[0]});

});
it('test 18',async() => {
result = await instance.transfer(accounts[3],385,{from:accounts[4]});
await instance.batchTransfer([accounts[27],accounts[50],accounts[27],accounts[28],accounts[77],accounts[67],accounts[55],accounts[98]],5386,{from:accounts[0]});


await instance.approve(accounts[68], 30822, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[68], 1000, {from: accounts[68]});

});
it('test 19',async() => {

await instance.approve(accounts[200], 28199, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[200], 1000, {from: accounts[200]});

result = await instance.transfer(accounts[5],865,{from:accounts[4]});
await instance.batchTransfer([accounts[32],accounts[68],accounts[45]],3843,{from:accounts[0]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[3],969,{from:accounts[4]});
await instance.batchTransfer([accounts[27]],7045,{from:accounts[0]});


await instance.approve(accounts[14], 27594, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[14], 1000, {from: accounts[14]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 21',async() => {

await instance.approve(accounts[152], 25542, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[152], 1000, {from: accounts[152]});

await instance.batchTransfer([accounts[72],accounts[62],accounts[71],accounts[21]],4591,{from:accounts[0]});

result = await instance.transfer(accounts[2],615,{from:accounts[0]});
});
it('test 22',async() => {
await instance.batchTransfer([accounts[1],accounts[61]],2612,{from:accounts[0]});


await instance.approve(accounts[135], 26168, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[135], 1000, {from: accounts[135]});

result = await instance.transfer(accounts[1],632,{from:accounts[2]});
});
it('test 23',async() => {

await instance.approve(accounts[48], 39486, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[48], 1000, {from: accounts[48]});

await instance.batchTransfer([accounts[53],accounts[20],accounts[100],accounts[88],accounts[55],accounts[52],accounts[10],accounts[64]],9248,{from:accounts[0]});

result = await instance.transfer(accounts[3],501,{from:accounts[1]});
});
it('test 24',async() => {
await instance.batchTransfer([accounts[2],accounts[66],accounts[59],accounts[52],accounts[29],accounts[36],accounts[93],accounts[86],accounts[15],accounts[73]],7210,{from:accounts[0]});

result = await instance.transfer(accounts[0],474,{from:accounts[3]});

await instance.approve(accounts[104], 26714, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[104], 1000, {from: accounts[104]});

});
it('test 25',async() => {
result = await instance.transfer(accounts[2],412,{from:accounts[0]});

await instance.approve(accounts[54], 29691, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[54], 1000, {from: accounts[54]});

await instance.batchTransfer([accounts[92],accounts[41],accounts[57],accounts[59],accounts[82],accounts[59],accounts[48],accounts[57]],9468,{from:accounts[0]});

});
it('test 26',async() => {

await instance.approve(accounts[165], 28123, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[165], 1000, {from: accounts[165]});

await instance.batchTransfer([accounts[82],accounts[97],accounts[48],accounts[10],accounts[30],accounts[95],accounts[58],accounts[20]],7315,{from:accounts[0]});

result = await instance.transfer(accounts[5],713,{from:accounts[2]});
});
it('test 27',async() => {
await instance.batchTransfer([accounts[66],accounts[4],accounts[26]],1198,{from:accounts[0]});


await instance.approve(accounts[168], 31904, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[168], 1000, {from: accounts[168]});

result = await instance.transfer(accounts[3],482,{from:accounts[1]});
});
it('test 28',async() => {
await instance.batchTransfer([accounts[84],accounts[67],accounts[64],accounts[46],accounts[63]],7881,{from:accounts[0]});

result = await instance.transfer(accounts[1],863,{from:accounts[3]});

await instance.approve(accounts[65], 31875, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[65], 1000, {from: accounts[65]});

});
it('test 29',async() => {

await instance.approve(accounts[67], 36483, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[67], 1000, {from: accounts[67]});

await instance.batchTransfer([accounts[73],accounts[39],accounts[52],accounts[64],accounts[93],accounts[84],accounts[37]],9674,{from:accounts[0]});

result = await instance.transfer(accounts[5],396,{from:accounts[2]});
});
});
