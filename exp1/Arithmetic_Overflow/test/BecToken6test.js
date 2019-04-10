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
result = await instance.transfer(accounts[0],791,{from:accounts[4]});

await instance.approve(accounts[113], 20339, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[113], 1000, {from: accounts[113]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[92]],2343,{from:accounts[0]});

});
it('test 1',async() => {
result = await instance.transfer(accounts[4],669,{from:accounts[1]});

await instance.approve(accounts[63], 20477, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[63], 1000, {from: accounts[63]});

await instance.batchTransfer([accounts[47],accounts[70],accounts[62],accounts[90],accounts[75],accounts[11],accounts[3],accounts[29]],1979,{from:accounts[0]});

});
it('test 2',async() => {
result = await instance.transfer(accounts[5],512,{from:accounts[2]});
await instance.batchTransfer([accounts[30],accounts[66],accounts[92],accounts[36]],4231,{from:accounts[0]});


await instance.approve(accounts[197], 32271, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[197], 1000, {from: accounts[197]});

});
it('test 3',async() => {
await instance.batchTransfer([accounts[39],accounts[37],accounts[22],accounts[31],accounts[90],accounts[79],accounts[41]],4472,{from:accounts[0]});


await instance.approve(accounts[112], 30036, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[112], 1000, {from: accounts[112]});

result = await instance.transfer(accounts[5],867,{from:accounts[3]});
});
it('test 4',async() => {
await instance.batchTransfer([accounts[79],accounts[31],accounts[67],accounts[60],accounts[26],accounts[53],accounts[1]],6840,{from:accounts[0]});

result = await instance.transfer(accounts[2],642,{from:accounts[3]});

await instance.approve(accounts[13], 32685, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[13], 1000, {from: accounts[13]});

});
it('test 5',async() => {
await instance.batchTransfer([accounts[80],accounts[69],accounts[48],accounts[99],accounts[20],accounts[25],accounts[58]],8348,{from:accounts[0]});


await instance.approve(accounts[65], 37157, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[65], 1000, {from: accounts[65]});

result = await instance.transfer(accounts[4],327,{from:accounts[3]});
});
it('test 6',async() => {
result = await instance.transfer(accounts[1],760,{from:accounts[0]});
await instance.batchTransfer([accounts[85],accounts[67],accounts[31],accounts[2],accounts[5],accounts[48],accounts[70],accounts[5]],9960,{from:accounts[0]});


await instance.approve(accounts[174], 28715, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[174], 1000, {from: accounts[174]});

});
it('test 7',async() => {
result = await instance.transfer(accounts[0],919,{from:accounts[5]});
await instance.batchTransfer([accounts[19],accounts[88],accounts[13],accounts[44],accounts[28]],6417,{from:accounts[0]});


await instance.approve(accounts[157], 20386, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[157], 1000, {from: accounts[157]});

});
it('test 8',async() => {
result = await instance.transfer(accounts[2],700,{from:accounts[1]});
await instance.batchTransfer([accounts[58],accounts[34]],9261,{from:accounts[0]});


await instance.approve(accounts[151], 21809, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[151], 1000, {from: accounts[151]});

});
it('test 9',async() => {
result = await instance.transfer(accounts[5],437,{from:accounts[2]});
await instance.batchTransfer([accounts[97],accounts[85],accounts[10],accounts[37],accounts[29],accounts[27],accounts[22],accounts[47],accounts[66],accounts[33]],7596,{from:accounts[0]});


await instance.approve(accounts[100], 39144, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[100], 1000, {from: accounts[100]});

});
it('test 10',async() => {
result = await instance.transfer(accounts[2],588,{from:accounts[1]});

await instance.approve(accounts[199], 30500, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[199], 1000, {from: accounts[199]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

await instance.batchTransfer([accounts[65],accounts[59]],7537,{from:accounts[0]});

});
it('test 11',async() => {
await instance.batchTransfer([accounts[85],accounts[77],accounts[38]],3276,{from:accounts[0]});


await instance.approve(accounts[185], 30878, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[185], 1000, {from: accounts[185]});

result = await instance.transfer(accounts[3],976,{from:accounts[5]});
});
it('test 12',async() => {
await instance.batchTransfer([accounts[23],accounts[78],accounts[55]],7316,{from:accounts[0]});

result = await instance.transfer(accounts[0],629,{from:accounts[1]});

await instance.approve(accounts[80], 34239, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[80], 1000, {from: accounts[80]});

});
it('test 13',async() => {
result = await instance.transfer(accounts[5],375,{from:accounts[3]});

await instance.approve(accounts[184], 28155, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[184], 1000, {from: accounts[184]});

await instance.batchTransfer([accounts[94],accounts[99],accounts[71]],7084,{from:accounts[0]});

});
it('test 14',async() => {
await instance.batchTransfer([accounts[25],accounts[75],accounts[77],accounts[58],accounts[75],accounts[3],accounts[33],accounts[79],accounts[84]],7072,{from:accounts[0]});

result = await instance.transfer(accounts[2],361,{from:accounts[1]});

await instance.approve(accounts[56], 37992, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[56], 1000, {from: accounts[56]});

});
it('test 15',async() => {

await instance.approve(accounts[64], 35409, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[64], 1000, {from: accounts[64]});

await instance.batchTransfer([accounts[86],accounts[46],accounts[73]],2989,{from:accounts[0]});

result = await instance.transfer(accounts[5],646,{from:accounts[0]});
});
it('test 16',async() => {

await instance.approve(accounts[129], 26211, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[129], 1000, {from: accounts[129]});

await instance.batchTransfer([accounts[65],accounts[36],accounts[36],accounts[29],accounts[8],accounts[9],accounts[55],accounts[38]],6271,{from:accounts[0]});

result = await instance.transfer(accounts[0],918,{from:accounts[0]});
});
it('test 17',async() => {
await instance.batchTransfer([accounts[43],accounts[44],accounts[41],accounts[80],accounts[70]],1315,{from:accounts[0]});

result = await instance.transfer(accounts[5],249,{from:accounts[0]});

await instance.approve(accounts[32], 27740, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[32], 1000, {from: accounts[32]});

});
it('test 18',async() => {

await instance.approve(accounts[48], 24592, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[48], 1000, {from: accounts[48]});

await instance.batchTransfer([accounts[67]],3305,{from:accounts[0]});

result = await instance.transfer(accounts[2],679,{from:accounts[2]});
});
it('test 19',async() => {
await instance.batchTransfer([accounts[38]],3475,{from:accounts[0]});

result = await instance.transfer(accounts[2],439,{from:accounts[3]});

await instance.approve(accounts[18], 22899, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[18], 1000, {from: accounts[18]});

});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});

await instance.approve(accounts[52], 37816, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[52], 1000, {from: accounts[52]});

await instance.batchTransfer([accounts[33],accounts[39],accounts[56],accounts[87],accounts[97]],4936,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[5],411,{from:accounts[4]});
});
it('test 21',async() => {
result = await instance.transfer(accounts[2],763,{from:accounts[4]});

await instance.approve(accounts[42], 38663, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[42], 1000, {from: accounts[42]});

await instance.batchTransfer([accounts[96],accounts[56],accounts[59],accounts[91]],7768,{from:accounts[0]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 22',async() => {
await instance.batchTransfer([accounts[32],accounts[69],accounts[19],accounts[17],accounts[67],accounts[35]],9683,{from:accounts[0]});

result = await instance.transfer(accounts[2],945,{from:accounts[2]});

await instance.approve(accounts[180], 30695, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[180], 1000, {from: accounts[180]});

});
it('test 23',async() => {
await instance.batchTransfer([accounts[92]],3883,{from:accounts[0]});


await instance.approve(accounts[10], 33544, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[10], 1000, {from: accounts[10]});

result = await instance.transfer(accounts[1],921,{from:accounts[5]});
});
it('test 24',async() => {
result = await instance.transfer(accounts[3],672,{from:accounts[0]});
await instance.batchTransfer([accounts[87],accounts[57],accounts[24],accounts[96],accounts[11],accounts[66],accounts[9],accounts[77],accounts[18]],6898,{from:accounts[0]});


await instance.approve(accounts[69], 23928, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[69], 1000, {from: accounts[69]});

});
it('test 25',async() => {
result = await instance.transfer(accounts[0],357,{from:accounts[2]});
await instance.batchTransfer([accounts[87],accounts[84],accounts[95],accounts[25],accounts[60],accounts[74],accounts[22],accounts[69],accounts[80]],3171,{from:accounts[0]});


await instance.approve(accounts[1], 39005, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[1], 1000, {from: accounts[1]});

});
it('test 26',async() => {
result = await instance.transfer(accounts[2],690,{from:accounts[5]});
await instance.batchTransfer([accounts[86],accounts[74],accounts[90],accounts[27]],2377,{from:accounts[0]});


await instance.approve(accounts[158], 38516, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[158], 1000, {from: accounts[158]});

});
it('test 27',async() => {

await instance.approve(accounts[142], 35025, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[142], 1000, {from: accounts[142]});

result = await instance.transfer(accounts[4],684,{from:accounts[2]});
await instance.batchTransfer([accounts[38]],7803,{from:accounts[0]});

});
it('test 28',async() => {
await instance.batchTransfer([accounts[66],accounts[73],accounts[79],accounts[97],accounts[82],accounts[92],accounts[58],accounts[45]],5407,{from:accounts[0]});


await instance.approve(accounts[84], 24774, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[84], 1000, {from: accounts[84]});

result = await instance.transfer(accounts[5],361,{from:accounts[5]});
});
it('test 29',async() => {
await instance.batchTransfer([accounts[4],accounts[96],accounts[54],accounts[97]],1219,{from:accounts[0]});

result = await instance.transfer(accounts[4],816,{from:accounts[4]});

await instance.approve(accounts[95], 29233, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[95], 1000, {from: accounts[95]});

});
});
