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
await instance.batchTransfer([accounts[55],accounts[18],accounts[47]],5275,{from:accounts[0]});


await instance.approve(accounts[120], 35224, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[120], 1000, {from: accounts[120]});

result = await instance.transfer(accounts[4],776,{from:accounts[3]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 1',async() => {

await instance.approve(accounts[165], 28584, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[165], 1000, {from: accounts[165]});

await instance.batchTransfer([accounts[32],accounts[37]],7425,{from:accounts[0]});

result = await instance.transfer(accounts[2],427,{from:accounts[0]});
});
it('test 2',async() => {

await instance.approve(accounts[93], 24198, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[93], 1000, {from: accounts[93]});

result = await instance.transfer(accounts[5],540,{from:accounts[0]});
await instance.batchTransfer([accounts[85],accounts[76],accounts[61]],7259,{from:accounts[0]});

});
it('test 3',async() => {
await instance.batchTransfer([accounts[72],accounts[92],accounts[36],accounts[57],accounts[60]],2914,{from:accounts[0]});


await instance.approve(accounts[173], 27760, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[173], 1000, {from: accounts[173]});

result = await instance.transfer(accounts[1],523,{from:accounts[0]});
});
it('test 4',async() => {
result = await instance.transfer(accounts[1],229,{from:accounts[5]});

await instance.approve(accounts[121], 35469, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[121], 1000, {from: accounts[121]});

await instance.batchTransfer([accounts[74],accounts[60],accounts[56],accounts[61],accounts[97]],4670,{from:accounts[0]});

});
it('test 5',async() => {

await instance.approve(accounts[68], 22696, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[68], 1000, {from: accounts[68]});

result = await instance.transfer(accounts[4],307,{from:accounts[2]});
await instance.batchTransfer([accounts[43],accounts[42],accounts[14],accounts[46],accounts[79]],8985,{from:accounts[0]});

});
it('test 6',async() => {
await instance.batchTransfer([accounts[9],accounts[1],accounts[82],accounts[96],accounts[56],accounts[49],accounts[33],accounts[94]],9454,{from:accounts[0]});


await instance.approve(accounts[51], 29867, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[51], 1000, {from: accounts[51]});

result = await instance.transfer(accounts[0],622,{from:accounts[2]});
});
it('test 7',async() => {
result = await instance.transfer(accounts[3],385,{from:accounts[0]});
await instance.batchTransfer([accounts[70],accounts[93],accounts[62],accounts[15]],2319,{from:accounts[0]});


await instance.approve(accounts[116], 33277, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[116], 1000, {from: accounts[116]});

});
it('test 8',async() => {

await instance.approve(accounts[25], 20812, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[25], 1000, {from: accounts[25]});

await instance.batchTransfer([accounts[81],accounts[30],accounts[81],accounts[87],accounts[10]],7397,{from:accounts[0]});

result = await instance.transfer(accounts[4],300,{from:accounts[4]});
});
it('test 9',async() => {
result = await instance.transfer(accounts[5],412,{from:accounts[4]});

await instance.approve(accounts[69], 29320, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[69], 1000, {from: accounts[69]});

await instance.batchTransfer([accounts[63],accounts[60],accounts[29],accounts[50],accounts[25],accounts[64],accounts[70],accounts[21]],5245,{from:accounts[0]});

});
it('test 10',async() => {

await instance.approve(accounts[164], 33937, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[164], 1000, {from: accounts[164]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[81],accounts[60],accounts[61],accounts[64],accounts[93],accounts[46],accounts[52]],4995,{from:accounts[0]});

result = await instance.transfer(accounts[2],388,{from:accounts[2]});
});
it('test 11',async() => {
result = await instance.transfer(accounts[0],799,{from:accounts[1]});

await instance.approve(accounts[146], 21013, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[146], 1000, {from: accounts[146]});

await instance.batchTransfer([accounts[56],accounts[7]],1774,{from:accounts[0]});

});
it('test 12',async() => {
result = await instance.transfer(accounts[4],694,{from:accounts[4]});

await instance.approve(accounts[102], 32168, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[102], 1000, {from: accounts[102]});

await instance.batchTransfer([accounts[31],accounts[54],accounts[5],accounts[65],accounts[31],accounts[34],accounts[80],accounts[80],accounts[30],accounts[92]],5813,{from:accounts[0]});

});
it('test 13',async() => {

await instance.approve(accounts[109], 21656, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[109], 1000, {from: accounts[109]});

await instance.batchTransfer([accounts[94]],4545,{from:accounts[0]});

result = await instance.transfer(accounts[1],238,{from:accounts[4]});
});
it('test 14',async() => {
result = await instance.transfer(accounts[3],438,{from:accounts[5]});

await instance.approve(accounts[149], 24771, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[149], 1000, {from: accounts[149]});

await instance.batchTransfer([accounts[58],accounts[68]],9478,{from:accounts[0]});

});
it('test 15',async() => {

await instance.approve(accounts[93], 39744, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[93], 1000, {from: accounts[93]});

await instance.batchTransfer([accounts[5],accounts[56],accounts[70],accounts[43],accounts[28],accounts[48],accounts[79],accounts[33],accounts[85]],6811,{from:accounts[0]});

result = await instance.transfer(accounts[3],418,{from:accounts[0]});
});
it('test 16',async() => {
await instance.batchTransfer([accounts[56],accounts[15],accounts[94],accounts[7],accounts[4],accounts[96],accounts[20],accounts[15],accounts[72]],6357,{from:accounts[0]});


await instance.approve(accounts[105], 37298, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[105], 1000, {from: accounts[105]});

result = await instance.transfer(accounts[4],380,{from:accounts[2]});
});
it('test 17',async() => {

await instance.approve(accounts[119], 27125, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[119], 1000, {from: accounts[119]});

result = await instance.transfer(accounts[1],566,{from:accounts[2]});
await instance.batchTransfer([accounts[65]],6348,{from:accounts[0]});

});
it('test 18',async() => {
result = await instance.transfer(accounts[1],233,{from:accounts[3]});

await instance.approve(accounts[70], 26114, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[70], 1000, {from: accounts[70]});

await instance.batchTransfer([accounts[37],accounts[91],accounts[21],accounts[67],accounts[52],accounts[90],accounts[60],accounts[81]],4955,{from:accounts[0]});

});
it('test 19',async() => {
await instance.batchTransfer([accounts[82],accounts[94],accounts[76],accounts[5]],4423,{from:accounts[0]});


await instance.approve(accounts[193], 24653, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[193], 1000, {from: accounts[193]});

result = await instance.transfer(accounts[1],896,{from:accounts[3]});
});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[10], 33990, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[10], 1000, {from: accounts[10]});

result = await instance.transfer(accounts[4],924,{from:accounts[1]});
await instance.batchTransfer([accounts[23],accounts[99],accounts[26]],4564,{from:accounts[0]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 21',async() => {
await instance.batchTransfer([accounts[67],accounts[73],accounts[3],accounts[52],accounts[16],accounts[49]],1298,{from:accounts[0]});


await instance.approve(accounts[190], 34780, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[190], 1000, {from: accounts[190]});

result = await instance.transfer(accounts[0],958,{from:accounts[3]});
});
it('test 22',async() => {
result = await instance.transfer(accounts[1],576,{from:accounts[3]});
await instance.batchTransfer([accounts[19],accounts[40],accounts[12],accounts[43],accounts[63],accounts[24],accounts[18],accounts[45],accounts[68]],7341,{from:accounts[0]});


await instance.approve(accounts[50], 30521, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[50], 1000, {from: accounts[50]});

});
it('test 23',async() => {
await instance.batchTransfer([accounts[96],accounts[99],accounts[40],accounts[86],accounts[79],accounts[38],accounts[27],accounts[32],accounts[80],accounts[92]],6187,{from:accounts[0]});


await instance.approve(accounts[131], 24287, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[131], 1000, {from: accounts[131]});

result = await instance.transfer(accounts[3],779,{from:accounts[0]});
});
it('test 24',async() => {
result = await instance.transfer(accounts[4],927,{from:accounts[2]});

await instance.approve(accounts[51], 20426, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[51], 1000, {from: accounts[51]});

await instance.batchTransfer([accounts[58],accounts[9],accounts[63],accounts[4],accounts[55],accounts[53],accounts[28],accounts[75]],8349,{from:accounts[0]});

});
it('test 25',async() => {
result = await instance.transfer(accounts[0],663,{from:accounts[1]});
await instance.batchTransfer([accounts[60],accounts[59],accounts[70],accounts[23],accounts[68],accounts[78],accounts[38]],7897,{from:accounts[0]});


await instance.approve(accounts[20], 22593, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[20], 1000, {from: accounts[20]});

});
it('test 26',async() => {

await instance.approve(accounts[192], 21100, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[192], 1000, {from: accounts[192]});

await instance.batchTransfer([accounts[35],accounts[41]],8951,{from:accounts[0]});

result = await instance.transfer(accounts[3],641,{from:accounts[3]});
});
it('test 27',async() => {

await instance.approve(accounts[57], 29618, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[57], 1000, {from: accounts[57]});

await instance.batchTransfer([accounts[57],accounts[85],accounts[44]],7398,{from:accounts[0]});

result = await instance.transfer(accounts[1],352,{from:accounts[3]});
});
it('test 28',async() => {

await instance.approve(accounts[104], 29841, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[104], 1000, {from: accounts[104]});

result = await instance.transfer(accounts[5],957,{from:accounts[2]});
await instance.batchTransfer([accounts[17],accounts[55],accounts[29]],6421,{from:accounts[0]});

});
it('test 29',async() => {

await instance.approve(accounts[108], 39677, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[108], 1000, {from: accounts[108]});

result = await instance.transfer(accounts[4],790,{from:accounts[4]});
await instance.batchTransfer([accounts[23],accounts[86],accounts[1],accounts[13]],8656,{from:accounts[0]});

});
});
