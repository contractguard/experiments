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

await instance.batchTransfer([accounts[66]],1853,{from:accounts[0]});

result = await instance.transfer(accounts[4],312,{from:accounts[0]});

await instance.approve(accounts[73], 32386, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[73], 1000, {from: accounts[73]});

});
it('test 1',async() => {

await instance.approve(accounts[37], 25966, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[37], 1000, {from: accounts[37]});

result = await instance.transfer(accounts[0],698,{from:accounts[1]});
await instance.batchTransfer([accounts[47],accounts[75],accounts[6]],7362,{from:accounts[0]});

});
it('test 2',async() => {
result = await instance.transfer(accounts[4],868,{from:accounts[5]});
await instance.batchTransfer([accounts[86],accounts[93],accounts[100],accounts[31],accounts[51],accounts[45],accounts[28]],4078,{from:accounts[0]});


await instance.approve(accounts[100], 35023, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[100], 1000, {from: accounts[100]});

});
it('test 3',async() => {

await instance.approve(accounts[98], 30417, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[98], 1000, {from: accounts[98]});

result = await instance.transfer(accounts[1],559,{from:accounts[3]});
await instance.batchTransfer([accounts[13],accounts[39],accounts[73],accounts[61]],4489,{from:accounts[0]});

});
it('test 4',async() => {
result = await instance.transfer(accounts[5],610,{from:accounts[0]});
await instance.batchTransfer([accounts[37],accounts[28],accounts[19],accounts[13],accounts[55],accounts[11]],8507,{from:accounts[0]});


await instance.approve(accounts[88], 37919, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[88], 1000, {from: accounts[88]});

});
it('test 5',async() => {
result = await instance.transfer(accounts[1],398,{from:accounts[2]});
await instance.batchTransfer([accounts[65],accounts[40],accounts[7],accounts[16],accounts[94],accounts[99],accounts[13],accounts[63]],8557,{from:accounts[0]});


await instance.approve(accounts[167], 26032, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[167], 1000, {from: accounts[167]});

});
it('test 6',async() => {

await instance.approve(accounts[182], 29562, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[182], 1000, {from: accounts[182]});

await instance.batchTransfer([accounts[86],accounts[27],accounts[21],accounts[46],accounts[12],accounts[89],accounts[55],accounts[46],accounts[13]],9024,{from:accounts[0]});

result = await instance.transfer(accounts[3],324,{from:accounts[2]});
});
it('test 7',async() => {

await instance.approve(accounts[137], 23228, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[137], 1000, {from: accounts[137]});

result = await instance.transfer(accounts[3],421,{from:accounts[4]});
await instance.batchTransfer([accounts[49]],5628,{from:accounts[0]});

});
it('test 8',async() => {
result = await instance.transfer(accounts[0],769,{from:accounts[1]});
await instance.batchTransfer([accounts[38]],2321,{from:accounts[0]});


await instance.approve(accounts[127], 32711, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[127], 1000, {from: accounts[127]});

});
it('test 9',async() => {

await instance.approve(accounts[115], 35646, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[115], 1000, {from: accounts[115]});

await instance.batchTransfer([accounts[76],accounts[58],accounts[5],accounts[21],accounts[76],accounts[47],accounts[99]],2030,{from:accounts[0]});

result = await instance.transfer(accounts[4],866,{from:accounts[0]});
});
it('test 10',async() => {
await instance.batchTransfer([accounts[38],accounts[65],accounts[90],accounts[93]],9031,{from:accounts[0]});

result = await instance.transfer(accounts[1],499,{from:accounts[3]});

await instance.approve(accounts[79], 28676, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[79], 1000, {from: accounts[79]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 11',async() => {

await instance.approve(accounts[4], 31846, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[4], 1000, {from: accounts[4]});

await instance.batchTransfer([accounts[64],accounts[67],accounts[84]],4752,{from:accounts[0]});

result = await instance.transfer(accounts[2],832,{from:accounts[3]});
});
it('test 12',async() => {

await instance.approve(accounts[44], 30308, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[44], 1000, {from: accounts[44]});

result = await instance.transfer(accounts[3],569,{from:accounts[5]});
await instance.batchTransfer([accounts[15],accounts[51],accounts[55],accounts[38]],7156,{from:accounts[0]});

});
it('test 13',async() => {
await instance.batchTransfer([accounts[58],accounts[55],accounts[92],accounts[1],accounts[100]],3073,{from:accounts[0]});

result = await instance.transfer(accounts[1],418,{from:accounts[1]});

await instance.approve(accounts[103], 24285, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[103], 1000, {from: accounts[103]});

});
it('test 14',async() => {
await instance.batchTransfer([accounts[59],accounts[39],accounts[55],accounts[32],accounts[28],accounts[9],accounts[36],accounts[48],accounts[62],accounts[37]],4802,{from:accounts[0]});


await instance.approve(accounts[111], 20297, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[111], 1000, {from: accounts[111]});

result = await instance.transfer(accounts[5],655,{from:accounts[5]});
});
it('test 15',async() => {

await instance.approve(accounts[194], 27354, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[194], 1000, {from: accounts[194]});

await instance.batchTransfer([accounts[46],accounts[33],accounts[96],accounts[1],accounts[45],accounts[15],accounts[66],accounts[6],accounts[29]],9045,{from:accounts[0]});

result = await instance.transfer(accounts[1],387,{from:accounts[0]});
});
it('test 16',async() => {
await instance.batchTransfer([accounts[86],accounts[54],accounts[98],accounts[98],accounts[60],accounts[85],accounts[30],accounts[17]],9091,{from:accounts[0]});

result = await instance.transfer(accounts[0],795,{from:accounts[4]});

await instance.approve(accounts[114], 33305, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[114], 1000, {from: accounts[114]});

});
it('test 17',async() => {
result = await instance.transfer(accounts[1],763,{from:accounts[2]});
await instance.batchTransfer([accounts[71],accounts[40],accounts[7],accounts[63],accounts[94]],5125,{from:accounts[0]});


await instance.approve(accounts[34], 37414, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[34], 1000, {from: accounts[34]});

});
it('test 18',async() => {
await instance.batchTransfer([accounts[92]],8481,{from:accounts[0]});


await instance.approve(accounts[171], 23017, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[171], 1000, {from: accounts[171]});

result = await instance.transfer(accounts[1],240,{from:accounts[2]});
});
it('test 19',async() => {
await instance.batchTransfer([accounts[47],accounts[58],accounts[10],accounts[92],accounts[45],accounts[17],accounts[3],accounts[23]],8606,{from:accounts[0]});

result = await instance.transfer(accounts[0],949,{from:accounts[0]});

await instance.approve(accounts[35], 21629, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[35], 1000, {from: accounts[35]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.batchTransfer([accounts[63],accounts[86],accounts[75],accounts[98],accounts[10]],1361,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[151], 21718, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[151], 1000, {from: accounts[151]});

result = await instance.transfer(accounts[2],364,{from:accounts[2]});
});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 21',async() => {

await instance.approve(accounts[170], 34638, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[170], 1000, {from: accounts[170]});

await instance.batchTransfer([accounts[81]],7058,{from:accounts[0]});

result = await instance.transfer(accounts[5],680,{from:accounts[0]});
});
it('test 22',async() => {
await instance.batchTransfer([accounts[11],accounts[57],accounts[48],accounts[12],accounts[54],accounts[63],accounts[92]],2078,{from:accounts[0]});


await instance.approve(accounts[14], 29552, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[14], 1000, {from: accounts[14]});

result = await instance.transfer(accounts[5],536,{from:accounts[0]});
});
it('test 23',async() => {

await instance.approve(accounts[140], 35081, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[140], 1000, {from: accounts[140]});

result = await instance.transfer(accounts[1],550,{from:accounts[4]});
await instance.batchTransfer([accounts[89],accounts[65],accounts[68],accounts[76],accounts[69],accounts[15],accounts[8]],6396,{from:accounts[0]});

});
it('test 24',async() => {

await instance.approve(accounts[185], 22846, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[185], 1000, {from: accounts[185]});

result = await instance.transfer(accounts[2],413,{from:accounts[5]});
await instance.batchTransfer([accounts[53],accounts[59],accounts[68],accounts[5],accounts[22],accounts[49],accounts[65]],4489,{from:accounts[0]});

});
it('test 25',async() => {
await instance.batchTransfer([accounts[86]],2110,{from:accounts[0]});


await instance.approve(accounts[88], 29600, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[88], 1000, {from: accounts[88]});

result = await instance.transfer(accounts[0],362,{from:accounts[0]});
});
it('test 26',async() => {
result = await instance.transfer(accounts[5],778,{from:accounts[3]});
await instance.batchTransfer([accounts[58],accounts[76],accounts[84],accounts[91],accounts[15],accounts[15],accounts[80],accounts[100],accounts[79],accounts[86]],1142,{from:accounts[0]});


await instance.approve(accounts[94], 27083, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[94], 1000, {from: accounts[94]});

});
it('test 27',async() => {
await instance.batchTransfer([accounts[44],accounts[86],accounts[9],accounts[94],accounts[20],accounts[73],accounts[77],accounts[28],accounts[56],accounts[6]],2827,{from:accounts[0]});


await instance.approve(accounts[161], 29596, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[161], 1000, {from: accounts[161]});

result = await instance.transfer(accounts[1],279,{from:accounts[5]});
});
it('test 28',async() => {
result = await instance.transfer(accounts[0],994,{from:accounts[3]});
await instance.batchTransfer([accounts[32],accounts[60],accounts[36],accounts[13],accounts[3],accounts[88],accounts[92],accounts[5]],7383,{from:accounts[0]});


await instance.approve(accounts[119], 34688, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[119], 1000, {from: accounts[119]});

});
it('test 29',async() => {
await instance.batchTransfer([accounts[1],accounts[70],accounts[76]],9626,{from:accounts[0]});


await instance.approve(accounts[152], 29219, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[152], 1000, {from: accounts[152]});

result = await instance.transfer(accounts[1],856,{from:accounts[4]});
});
});
