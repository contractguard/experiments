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

await instance.batchTransfer([accounts[80],accounts[36],accounts[34],accounts[55],accounts[69],accounts[53],accounts[98],accounts[39],accounts[73]],2938,{from:accounts[0]});

result = await instance.transfer(accounts[0],516,{from:accounts[5]});

await instance.approve(accounts[199], 22833, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[199], 1000, {from: accounts[199]});

});
it('test 1',async() => {
result = await instance.transfer(accounts[3],708,{from:accounts[3]});
await instance.batchTransfer([accounts[8],accounts[43],accounts[75],accounts[14],accounts[48],accounts[54],accounts[68],accounts[99]],2124,{from:accounts[0]});


await instance.approve(accounts[150], 21138, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[150], 1000, {from: accounts[150]});

});
it('test 2',async() => {
result = await instance.transfer(accounts[3],968,{from:accounts[4]});

await instance.approve(accounts[108], 37123, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[108], 1000, {from: accounts[108]});

await instance.batchTransfer([accounts[71],accounts[42],accounts[1],accounts[52],accounts[5]],7817,{from:accounts[0]});

});
it('test 3',async() => {
await instance.batchTransfer([accounts[89],accounts[49],accounts[79]],1973,{from:accounts[0]});

result = await instance.transfer(accounts[2],420,{from:accounts[1]});

await instance.approve(accounts[9], 28500, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[9], 1000, {from: accounts[9]});

});
it('test 4',async() => {
result = await instance.transfer(accounts[1],243,{from:accounts[4]});

await instance.approve(accounts[105], 24746, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[105], 1000, {from: accounts[105]});

await instance.batchTransfer([accounts[51],accounts[97],accounts[79],accounts[55],accounts[19],accounts[34],accounts[71],accounts[19],accounts[9]],5907,{from:accounts[0]});

});
it('test 5',async() => {
result = await instance.transfer(accounts[3],277,{from:accounts[4]});

await instance.approve(accounts[156], 31297, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[156], 1000, {from: accounts[156]});

await instance.batchTransfer([accounts[95],accounts[26],accounts[75],accounts[39],accounts[90],accounts[73],accounts[52]],4192,{from:accounts[0]});

});
it('test 6',async() => {
result = await instance.transfer(accounts[0],767,{from:accounts[5]});

await instance.approve(accounts[111], 30048, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[111], 1000, {from: accounts[111]});

await instance.batchTransfer([accounts[31],accounts[27],accounts[66]],4224,{from:accounts[0]});

});
it('test 7',async() => {
await instance.batchTransfer([accounts[13],accounts[1],accounts[56],accounts[2],accounts[95]],8614,{from:accounts[0]});


await instance.approve(accounts[133], 39196, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[133], 1000, {from: accounts[133]});

result = await instance.transfer(accounts[1],336,{from:accounts[0]});
});
it('test 8',async() => {

await instance.approve(accounts[112], 33897, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[112], 1000, {from: accounts[112]});

result = await instance.transfer(accounts[5],577,{from:accounts[2]});
await instance.batchTransfer([accounts[95],accounts[58],accounts[99],accounts[57],accounts[15]],7889,{from:accounts[0]});

});
it('test 9',async() => {
await instance.batchTransfer([accounts[46],accounts[57],accounts[46],accounts[91],accounts[3],accounts[42],accounts[94]],5301,{from:accounts[0]});


await instance.approve(accounts[109], 27536, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[109], 1000, {from: accounts[109]});

result = await instance.transfer(accounts[0],550,{from:accounts[1]});
});
it('test 10',async() => {
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[103], 30004, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[103], 1000, {from: accounts[103]});

await instance.batchTransfer([accounts[82],accounts[89],accounts[16],accounts[42],accounts[31],accounts[25],accounts[44],accounts[94]],2937,{from:accounts[0]});

result = await instance.transfer(accounts[5],893,{from:accounts[5]});
});
it('test 11',async() => {

await instance.approve(accounts[155], 37015, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[155], 1000, {from: accounts[155]});

result = await instance.transfer(accounts[1],302,{from:accounts[4]});
await instance.batchTransfer([accounts[41],accounts[80],accounts[59],accounts[40],accounts[41],accounts[3],accounts[11]],5965,{from:accounts[0]});

});
it('test 12',async() => {
await instance.batchTransfer([accounts[32],accounts[61],accounts[98],accounts[53],accounts[53]],8892,{from:accounts[0]});

result = await instance.transfer(accounts[2],500,{from:accounts[4]});

await instance.approve(accounts[81], 24768, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[81], 1000, {from: accounts[81]});

});
it('test 13',async() => {
await instance.batchTransfer([accounts[59],accounts[19],accounts[67],accounts[42],accounts[15],accounts[32]],7954,{from:accounts[0]});


await instance.approve(accounts[148], 32395, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[148], 1000, {from: accounts[148]});

result = await instance.transfer(accounts[0],830,{from:accounts[0]});
});
it('test 14',async() => {

await instance.approve(accounts[77], 33429, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[77], 1000, {from: accounts[77]});

await instance.batchTransfer([accounts[78]],4910,{from:accounts[0]});

result = await instance.transfer(accounts[3],686,{from:accounts[4]});
});
it('test 15',async() => {
await instance.batchTransfer([accounts[41],accounts[65],accounts[55],accounts[90]],3154,{from:accounts[0]});

result = await instance.transfer(accounts[0],329,{from:accounts[0]});

await instance.approve(accounts[74], 20250, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[74], 1000, {from: accounts[74]});

});
it('test 16',async() => {

await instance.approve(accounts[72], 28951, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[72], 1000, {from: accounts[72]});

result = await instance.transfer(accounts[0],928,{from:accounts[1]});
await instance.batchTransfer([accounts[11],accounts[68],accounts[17],accounts[3]],6462,{from:accounts[0]});

});
it('test 17',async() => {
result = await instance.transfer(accounts[0],383,{from:accounts[3]});

await instance.approve(accounts[144], 36754, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[144], 1000, {from: accounts[144]});

await instance.batchTransfer([accounts[40]],1066,{from:accounts[0]});

});
it('test 18',async() => {
result = await instance.transfer(accounts[3],590,{from:accounts[0]});
await instance.batchTransfer([accounts[37],accounts[82],accounts[20],accounts[67]],2950,{from:accounts[0]});


await instance.approve(accounts[94], 36290, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[94], 1000, {from: accounts[94]});

});
it('test 19',async() => {

await instance.approve(accounts[116], 34666, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[116], 1000, {from: accounts[116]});

result = await instance.transfer(accounts[2],830,{from:accounts[5]});
await instance.batchTransfer([accounts[26],accounts[82],accounts[3],accounts[97],accounts[30],accounts[100],accounts[23],accounts[95],accounts[77],accounts[38]],5814,{from:accounts[0]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
result = await instance.transfer(accounts[4],351,{from:accounts[5]});

await instance.approve(accounts[63], 32881, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[63], 1000, {from: accounts[63]});

await instance.batchTransfer([accounts[31],accounts[84],accounts[27]],6099,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 21',async() => {
result = await instance.transfer(accounts[1],802,{from:accounts[0]});
await instance.batchTransfer([accounts[29],accounts[24]],1996,{from:accounts[0]});


await instance.approve(accounts[38], 31725, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[38], 1000, {from: accounts[38]});

});
it('test 22',async() => {
await instance.batchTransfer([accounts[70]],8417,{from:accounts[0]});


await instance.approve(accounts[121], 24070, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[121], 1000, {from: accounts[121]});

result = await instance.transfer(accounts[2],959,{from:accounts[3]});
});
it('test 23',async() => {
result = await instance.transfer(accounts[5],955,{from:accounts[4]});

await instance.approve(accounts[124], 33094, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[124], 1000, {from: accounts[124]});

await instance.batchTransfer([accounts[45],accounts[26],accounts[86],accounts[1],accounts[68],accounts[87],accounts[35]],7590,{from:accounts[0]});

});
it('test 24',async() => {

await instance.approve(accounts[115], 21643, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[115], 1000, {from: accounts[115]});

result = await instance.transfer(accounts[4],926,{from:accounts[2]});
await instance.batchTransfer([accounts[82],accounts[83],accounts[65],accounts[15],accounts[97],accounts[79],accounts[71],accounts[31],accounts[61]],5103,{from:accounts[0]});

});
it('test 25',async() => {
result = await instance.transfer(accounts[0],444,{from:accounts[2]});
await instance.batchTransfer([accounts[99],accounts[66],accounts[29]],6235,{from:accounts[0]});


await instance.approve(accounts[83], 37733, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[83], 1000, {from: accounts[83]});

});
it('test 26',async() => {

await instance.approve(accounts[54], 21919, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[54], 1000, {from: accounts[54]});

result = await instance.transfer(accounts[4],266,{from:accounts[0]});
await instance.batchTransfer([accounts[73],accounts[44],accounts[18],accounts[41],accounts[95],accounts[25]],2016,{from:accounts[0]});

});
it('test 27',async() => {
result = await instance.transfer(accounts[1],525,{from:accounts[0]});

await instance.approve(accounts[67], 23283, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[67], 1000, {from: accounts[67]});

await instance.batchTransfer([accounts[21],accounts[82],accounts[4],accounts[76],accounts[46]],5649,{from:accounts[0]});

});
it('test 28',async() => {
await instance.batchTransfer([accounts[76],accounts[96],accounts[88],accounts[58],accounts[40]],3915,{from:accounts[0]});

result = await instance.transfer(accounts[1],786,{from:accounts[4]});

await instance.approve(accounts[107], 33915, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[107], 1000, {from: accounts[107]});

});
it('test 29',async() => {

await instance.approve(accounts[46], 32938, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[46], 1000, {from: accounts[46]});

await instance.batchTransfer([accounts[66],accounts[95],accounts[62],accounts[66],accounts[80],accounts[84]],9046,{from:accounts[0]});

result = await instance.transfer(accounts[5],549,{from:accounts[2]});
});
});
