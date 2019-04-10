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

await instance.approve(accounts[105], 20021, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[105], 1000, {from: accounts[105]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[4],459,{from:accounts[5]});
await instance.batchTransfer([accounts[50]],8519,{from:accounts[0]});

});
it('test 1',async() => {

await instance.approve(accounts[138], 24127, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[138], 1000, {from: accounts[138]});

result = await instance.transfer(accounts[1],277,{from:accounts[5]});
await instance.batchTransfer([accounts[73],accounts[18],accounts[76],accounts[11],accounts[75],accounts[10],accounts[4],accounts[62]],2111,{from:accounts[0]});

});
it('test 2',async() => {
await instance.batchTransfer([accounts[94],accounts[78],accounts[81],accounts[41],accounts[5],accounts[5],accounts[12],accounts[72],accounts[58]],9268,{from:accounts[0]});


await instance.approve(accounts[31], 32081, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[31], 1000, {from: accounts[31]});

result = await instance.transfer(accounts[5],689,{from:accounts[3]});
});
it('test 3',async() => {
await instance.batchTransfer([accounts[27],accounts[97],accounts[20],accounts[2],accounts[75],accounts[91]],3955,{from:accounts[0]});


await instance.approve(accounts[120], 32494, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[120], 1000, {from: accounts[120]});

result = await instance.transfer(accounts[5],201,{from:accounts[5]});
});
it('test 4',async() => {
result = await instance.transfer(accounts[4],359,{from:accounts[0]});

await instance.approve(accounts[198], 35532, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[198], 1000, {from: accounts[198]});

await instance.batchTransfer([accounts[82]],2256,{from:accounts[0]});

});
it('test 5',async() => {
result = await instance.transfer(accounts[2],276,{from:accounts[1]});

await instance.approve(accounts[66], 28575, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[66], 1000, {from: accounts[66]});

await instance.batchTransfer([accounts[47],accounts[58],accounts[9],accounts[80],accounts[52],accounts[45]],3900,{from:accounts[0]});

});
it('test 6',async() => {
await instance.batchTransfer([accounts[90],accounts[7],accounts[21],accounts[93],accounts[96],accounts[53],accounts[53],accounts[32],accounts[48]],7067,{from:accounts[0]});

result = await instance.transfer(accounts[3],238,{from:accounts[2]});

await instance.approve(accounts[91], 29683, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[91], 1000, {from: accounts[91]});

});
it('test 7',async() => {
result = await instance.transfer(accounts[5],490,{from:accounts[3]});
await instance.batchTransfer([accounts[1]],1483,{from:accounts[0]});


await instance.approve(accounts[57], 33985, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[57], 1000, {from: accounts[57]});

});
it('test 8',async() => {
result = await instance.transfer(accounts[4],984,{from:accounts[2]});

await instance.approve(accounts[75], 30707, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[75], 1000, {from: accounts[75]});

await instance.batchTransfer([accounts[57],accounts[29],accounts[70],accounts[65]],8751,{from:accounts[0]});

});
it('test 9',async() => {
await instance.batchTransfer([accounts[73],accounts[19],accounts[21],accounts[52],accounts[2],accounts[61],accounts[47],accounts[3]],8892,{from:accounts[0]});

result = await instance.transfer(accounts[3],926,{from:accounts[4]});

await instance.approve(accounts[81], 39825, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[81], 1000, {from: accounts[81]});

});
it('test 10',async() => {
await instance.batchTransfer([accounts[24],accounts[8],accounts[35],accounts[47]],7462,{from:accounts[0]});

result = await instance.transfer(accounts[5],421,{from:accounts[3]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[45], 31308, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[45], 1000, {from: accounts[45]});

});
it('test 11',async() => {

await instance.approve(accounts[120], 36542, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[120], 1000, {from: accounts[120]});

result = await instance.transfer(accounts[5],527,{from:accounts[0]});
await instance.batchTransfer([accounts[68],accounts[98],accounts[65],accounts[60]],2397,{from:accounts[0]});

});
it('test 12',async() => {

await instance.approve(accounts[144], 23242, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[144], 1000, {from: accounts[144]});

result = await instance.transfer(accounts[5],945,{from:accounts[4]});
await instance.batchTransfer([accounts[75],accounts[36],accounts[76],accounts[43],accounts[57],accounts[96],accounts[84],accounts[46],accounts[3],accounts[38]],7108,{from:accounts[0]});

});
it('test 13',async() => {

await instance.approve(accounts[28], 39380, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[28], 1000, {from: accounts[28]});

await instance.batchTransfer([accounts[53],accounts[7],accounts[91],accounts[75],accounts[71],accounts[73]],3804,{from:accounts[0]});

result = await instance.transfer(accounts[1],315,{from:accounts[5]});
});
it('test 14',async() => {
await instance.batchTransfer([accounts[33],accounts[14],accounts[24],accounts[68],accounts[50],accounts[99],accounts[44],accounts[31],accounts[2]],8711,{from:accounts[0]});


await instance.approve(accounts[41], 37238, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[41], 1000, {from: accounts[41]});

result = await instance.transfer(accounts[0],522,{from:accounts[3]});
});
it('test 15',async() => {

await instance.approve(accounts[146], 21731, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[146], 1000, {from: accounts[146]});

result = await instance.transfer(accounts[4],397,{from:accounts[4]});
await instance.batchTransfer([accounts[14],accounts[2],accounts[12],accounts[61],accounts[3],accounts[12],accounts[82],accounts[8],accounts[75]],4814,{from:accounts[0]});

});
it('test 16',async() => {
await instance.batchTransfer([accounts[98],accounts[84],accounts[67]],2975,{from:accounts[0]});

result = await instance.transfer(accounts[4],599,{from:accounts[3]});

await instance.approve(accounts[47], 20159, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[47], 1000, {from: accounts[47]});

});
it('test 17',async() => {

await instance.approve(accounts[59], 36781, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[59], 1000, {from: accounts[59]});

await instance.batchTransfer([accounts[2]],8509,{from:accounts[0]});

result = await instance.transfer(accounts[3],738,{from:accounts[2]});
});
it('test 18',async() => {
result = await instance.transfer(accounts[3],579,{from:accounts[3]});
await instance.batchTransfer([accounts[98],accounts[18],accounts[70],accounts[59],accounts[44],accounts[77]],1421,{from:accounts[0]});


await instance.approve(accounts[40], 35563, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[40], 1000, {from: accounts[40]});

});
it('test 19',async() => {

await instance.approve(accounts[21], 24750, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[21], 1000, {from: accounts[21]});

result = await instance.transfer(accounts[4],863,{from:accounts[3]});
await instance.batchTransfer([accounts[14],accounts[2],accounts[56],accounts[39],accounts[46],accounts[28],accounts[57],accounts[15],accounts[90],accounts[9]],4724,{from:accounts[0]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[59],accounts[26],accounts[72],accounts[3],accounts[81],accounts[21],accounts[61],accounts[27],accounts[30],accounts[12]],2858,{from:accounts[0]});


await instance.approve(accounts[69], 31543, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[69], 1000, {from: accounts[69]});

result = await instance.transfer(accounts[4],700,{from:accounts[5]});
});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 21',async() => {

await instance.approve(accounts[26], 38442, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[26], 1000, {from: accounts[26]});

result = await instance.transfer(accounts[4],952,{from:accounts[1]});
await instance.batchTransfer([accounts[98],accounts[42],accounts[1],accounts[56],accounts[91],accounts[13],accounts[50],accounts[34],accounts[56],accounts[64]],3452,{from:accounts[0]});

});
it('test 22',async() => {
await instance.batchTransfer([accounts[36],accounts[22]],5221,{from:accounts[0]});

result = await instance.transfer(accounts[0],678,{from:accounts[2]});

await instance.approve(accounts[116], 29395, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[116], 1000, {from: accounts[116]});

});
it('test 23',async() => {
result = await instance.transfer(accounts[2],877,{from:accounts[0]});

await instance.approve(accounts[152], 34891, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[152], 1000, {from: accounts[152]});

await instance.batchTransfer([accounts[61],accounts[97],accounts[80]],3920,{from:accounts[0]});

});
it('test 24',async() => {

await instance.approve(accounts[37], 21174, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[37], 1000, {from: accounts[37]});

await instance.batchTransfer([accounts[67],accounts[29],accounts[54],accounts[48]],8337,{from:accounts[0]});

result = await instance.transfer(accounts[5],321,{from:accounts[0]});
});
it('test 25',async() => {

await instance.approve(accounts[74], 28894, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[74], 1000, {from: accounts[74]});

await instance.batchTransfer([accounts[29],accounts[83],accounts[69]],6494,{from:accounts[0]});

result = await instance.transfer(accounts[2],517,{from:accounts[5]});
});
it('test 26',async() => {
await instance.batchTransfer([accounts[36],accounts[17]],4398,{from:accounts[0]});


await instance.approve(accounts[196], 28046, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[196], 1000, {from: accounts[196]});

result = await instance.transfer(accounts[4],559,{from:accounts[1]});
});
it('test 27',async() => {
await instance.batchTransfer([accounts[24],accounts[54]],4741,{from:accounts[0]});

result = await instance.transfer(accounts[5],615,{from:accounts[2]});

await instance.approve(accounts[34], 23982, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[34], 1000, {from: accounts[34]});

});
it('test 28',async() => {

await instance.approve(accounts[143], 20576, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[143], 1000, {from: accounts[143]});

result = await instance.transfer(accounts[2],573,{from:accounts[5]});
await instance.batchTransfer([accounts[63],accounts[23],accounts[19],accounts[95],accounts[50],accounts[14]],2672,{from:accounts[0]});

});
it('test 29',async() => {

await instance.approve(accounts[134], 29837, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[134], 1000, {from: accounts[134]});

result = await instance.transfer(accounts[5],215,{from:accounts[3]});
await instance.batchTransfer([accounts[16],accounts[99]],4527,{from:accounts[0]});

});
});
