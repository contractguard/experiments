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
result = await instance.transfer(accounts[1],566,{from:accounts[0]});
await instance.batchTransfer([accounts[83],accounts[44],accounts[25],accounts[54],accounts[60],accounts[6]],6433,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});


await instance.approve(accounts[72], 38756, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[72], 1000, {from: accounts[72]});

});
it('test 1',async() => {
result = await instance.transfer(accounts[2],838,{from:accounts[3]});

await instance.approve(accounts[122], 28036, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[122], 1000, {from: accounts[122]});

await instance.batchTransfer([accounts[50],accounts[87],accounts[70],accounts[89],accounts[48]],5363,{from:accounts[0]});

});
it('test 2',async() => {

await instance.approve(accounts[119], 20053, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[119], 1000, {from: accounts[119]});

result = await instance.transfer(accounts[2],865,{from:accounts[2]});
await instance.batchTransfer([accounts[91]],1573,{from:accounts[0]});

});
it('test 3',async() => {

await instance.approve(accounts[2], 34348, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[2], 1000, {from: accounts[2]});

result = await instance.transfer(accounts[5],351,{from:accounts[5]});
await instance.batchTransfer([accounts[35],accounts[73],accounts[64],accounts[70],accounts[76],accounts[30]],6970,{from:accounts[0]});

});
it('test 4',async() => {

await instance.approve(accounts[37], 39822, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[37], 1000, {from: accounts[37]});

await instance.batchTransfer([accounts[95],accounts[66],accounts[7],accounts[91]],7388,{from:accounts[0]});

result = await instance.transfer(accounts[2],853,{from:accounts[5]});
});
it('test 5',async() => {
await instance.batchTransfer([accounts[35]],8494,{from:accounts[0]});

result = await instance.transfer(accounts[2],622,{from:accounts[3]});

await instance.approve(accounts[108], 33472, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[108], 1000, {from: accounts[108]});

});
it('test 6',async() => {

await instance.approve(accounts[111], 22187, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[111], 1000, {from: accounts[111]});

result = await instance.transfer(accounts[4],392,{from:accounts[2]});
await instance.batchTransfer([accounts[11],accounts[57],accounts[89],accounts[16]],1492,{from:accounts[0]});

});
it('test 7',async() => {

await instance.approve(accounts[151], 28338, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[151], 1000, {from: accounts[151]});

result = await instance.transfer(accounts[0],990,{from:accounts[1]});
await instance.batchTransfer([accounts[23],accounts[100],accounts[77],accounts[71],accounts[72],accounts[20],accounts[23]],5756,{from:accounts[0]});

});
it('test 8',async() => {
await instance.batchTransfer([accounts[43],accounts[75],accounts[20],accounts[54],accounts[31]],7740,{from:accounts[0]});

result = await instance.transfer(accounts[4],777,{from:accounts[3]});

await instance.approve(accounts[5], 38405, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[5], 1000, {from: accounts[5]});

});
it('test 9',async() => {
await instance.batchTransfer([accounts[65],accounts[76],accounts[45],accounts[80],accounts[56],accounts[11],accounts[47],accounts[64],accounts[24]],6402,{from:accounts[0]});

result = await instance.transfer(accounts[0],578,{from:accounts[2]});

await instance.approve(accounts[174], 38310, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[174], 1000, {from: accounts[174]});

});
it('test 10',async() => {
result = await instance.transfer(accounts[2],627,{from:accounts[0]});

await instance.approve(accounts[120], 22807, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[120], 1000, {from: accounts[120]});

await instance.batchTransfer([accounts[45],accounts[39],accounts[99],accounts[62],accounts[54],accounts[87]],8979,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 11',async() => {

await instance.approve(accounts[63], 34500, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[63], 1000, {from: accounts[63]});

result = await instance.transfer(accounts[5],609,{from:accounts[1]});
await instance.batchTransfer([accounts[28],accounts[42],accounts[4]],4041,{from:accounts[0]});

});
it('test 12',async() => {
result = await instance.transfer(accounts[2],321,{from:accounts[4]});
await instance.batchTransfer([accounts[26],accounts[14],accounts[4],accounts[41],accounts[72],accounts[60]],4153,{from:accounts[0]});


await instance.approve(accounts[134], 37322, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[134], 1000, {from: accounts[134]});

});
it('test 13',async() => {
await instance.batchTransfer([accounts[55],accounts[97],accounts[85]],2816,{from:accounts[0]});


await instance.approve(accounts[69], 21440, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[69], 1000, {from: accounts[69]});

result = await instance.transfer(accounts[3],507,{from:accounts[4]});
});
it('test 14',async() => {
result = await instance.transfer(accounts[5],789,{from:accounts[1]});
await instance.batchTransfer([accounts[68]],9739,{from:accounts[0]});


await instance.approve(accounts[196], 33507, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[196], 1000, {from: accounts[196]});

});
it('test 15',async() => {

await instance.approve(accounts[78], 36765, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[78], 1000, {from: accounts[78]});

result = await instance.transfer(accounts[4],901,{from:accounts[2]});
await instance.batchTransfer([accounts[43],accounts[66],accounts[48]],1190,{from:accounts[0]});

});
it('test 16',async() => {

await instance.approve(accounts[17], 36469, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[17], 1000, {from: accounts[17]});

result = await instance.transfer(accounts[4],509,{from:accounts[2]});
await instance.batchTransfer([accounts[68],accounts[28],accounts[49],accounts[99],accounts[9],accounts[72],accounts[6],accounts[98]],6305,{from:accounts[0]});

});
it('test 17',async() => {

await instance.approve(accounts[97], 22067, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[97], 1000, {from: accounts[97]});

result = await instance.transfer(accounts[3],660,{from:accounts[1]});
await instance.batchTransfer([accounts[70],accounts[82],accounts[5],accounts[9],accounts[4],accounts[15],accounts[27]],3108,{from:accounts[0]});

});
it('test 18',async() => {

await instance.approve(accounts[173], 37160, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[173], 1000, {from: accounts[173]});

await instance.batchTransfer([accounts[27],accounts[41],accounts[28],accounts[48],accounts[20],accounts[5],accounts[48],accounts[59],accounts[100],accounts[74]],5392,{from:accounts[0]});

result = await instance.transfer(accounts[4],988,{from:accounts[1]});
});
it('test 19',async() => {

await instance.approve(accounts[65], 34872, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[65], 1000, {from: accounts[65]});

await instance.batchTransfer([accounts[5]],4785,{from:accounts[0]});

result = await instance.transfer(accounts[3],694,{from:accounts[3]});
});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});

await instance.approve(accounts[136], 39687, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[136], 1000, {from: accounts[136]});

await instance.batchTransfer([accounts[60],accounts[87],accounts[17],accounts[85],accounts[6],accounts[49],accounts[76]],1087,{from:accounts[0]});

result = await instance.transfer(accounts[2],878,{from:accounts[5]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 21',async() => {
result = await instance.transfer(accounts[3],300,{from:accounts[1]});
await instance.batchTransfer([accounts[62],accounts[91],accounts[26]],5255,{from:accounts[0]});


await instance.approve(accounts[104], 22684, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[104], 1000, {from: accounts[104]});

});
it('test 22',async() => {
await instance.batchTransfer([accounts[42]],4942,{from:accounts[0]});


await instance.approve(accounts[192], 38676, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[192], 1000, {from: accounts[192]});

result = await instance.transfer(accounts[4],482,{from:accounts[2]});
});
it('test 23',async() => {
await instance.batchTransfer([accounts[90],accounts[92],accounts[18],accounts[26],accounts[69],accounts[82],accounts[78],accounts[53]],8921,{from:accounts[0]});


await instance.approve(accounts[198], 27961, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[198], 1000, {from: accounts[198]});

result = await instance.transfer(accounts[0],727,{from:accounts[4]});
});
it('test 24',async() => {
result = await instance.transfer(accounts[2],642,{from:accounts[2]});
await instance.batchTransfer([accounts[41],accounts[48],accounts[46],accounts[13],accounts[57],accounts[21],accounts[72],accounts[26]],2603,{from:accounts[0]});


await instance.approve(accounts[72], 38393, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[72], 1000, {from: accounts[72]});

});
it('test 25',async() => {
result = await instance.transfer(accounts[3],654,{from:accounts[4]});

await instance.approve(accounts[61], 32787, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[61], 1000, {from: accounts[61]});

await instance.batchTransfer([accounts[19],accounts[52],accounts[79],accounts[75],accounts[62],accounts[31],accounts[11],accounts[94],accounts[1],accounts[79]],2529,{from:accounts[0]});

});
it('test 26',async() => {

await instance.approve(accounts[178], 21724, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[178], 1000, {from: accounts[178]});

await instance.batchTransfer([accounts[3],accounts[12],accounts[6],accounts[96],accounts[32],accounts[67]],8705,{from:accounts[0]});

result = await instance.transfer(accounts[5],394,{from:accounts[2]});
});
it('test 27',async() => {
result = await instance.transfer(accounts[4],906,{from:accounts[4]});
await instance.batchTransfer([accounts[2],accounts[6],accounts[62],accounts[58],accounts[82],accounts[31],accounts[66],accounts[75],accounts[43],accounts[72]],5381,{from:accounts[0]});


await instance.approve(accounts[178], 36430, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[178], 1000, {from: accounts[178]});

});
it('test 28',async() => {
result = await instance.transfer(accounts[2],323,{from:accounts[0]});

await instance.approve(accounts[182], 28747, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[182], 1000, {from: accounts[182]});

await instance.batchTransfer([accounts[76]],5406,{from:accounts[0]});

});
it('test 29',async() => {
await instance.batchTransfer([accounts[30],accounts[4],accounts[46],accounts[48],accounts[15]],4652,{from:accounts[0]});


await instance.approve(accounts[78], 23581, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[78], 1000, {from: accounts[78]});

result = await instance.transfer(accounts[1],591,{from:accounts[3]});
});
});
