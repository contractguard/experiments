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

await instance.approve(accounts[84], 38779, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[84], 1000, {from: accounts[84]});

await instance.batchTransfer([accounts[27]],8096,{from:accounts[0]});

result = await instance.transfer(accounts[5],834,{from:accounts[1]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 1',async() => {
await instance.batchTransfer([accounts[60],accounts[64]],5000,{from:accounts[0]});

result = await instance.transfer(accounts[1],723,{from:accounts[0]});

await instance.approve(accounts[176], 30088, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[176], 1000, {from: accounts[176]});

});
it('test 2',async() => {
result = await instance.transfer(accounts[2],623,{from:accounts[0]});
await instance.batchTransfer([accounts[50],accounts[98],accounts[65],accounts[84],accounts[16],accounts[56],accounts[75],accounts[12],accounts[80],accounts[33]],3827,{from:accounts[0]});


await instance.approve(accounts[174], 23331, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[174], 1000, {from: accounts[174]});

});
it('test 3',async() => {
await instance.batchTransfer([accounts[64],accounts[80],accounts[32],accounts[22]],7738,{from:accounts[0]});


await instance.approve(accounts[50], 39104, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[50], 1000, {from: accounts[50]});

result = await instance.transfer(accounts[3],723,{from:accounts[3]});
});
it('test 4',async() => {
result = await instance.transfer(accounts[0],576,{from:accounts[4]});

await instance.approve(accounts[42], 35643, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[42], 1000, {from: accounts[42]});

await instance.batchTransfer([accounts[56],accounts[46],accounts[38],accounts[84]],3660,{from:accounts[0]});

});
it('test 5',async() => {

await instance.approve(accounts[103], 35448, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[103], 1000, {from: accounts[103]});

result = await instance.transfer(accounts[4],585,{from:accounts[5]});
await instance.batchTransfer([accounts[95],accounts[67],accounts[35],accounts[4],accounts[28],accounts[90]],4779,{from:accounts[0]});

});
it('test 6',async() => {
await instance.batchTransfer([accounts[34],accounts[18],accounts[13],accounts[15],accounts[4],accounts[30],accounts[38],accounts[93],accounts[52],accounts[12]],7542,{from:accounts[0]});


await instance.approve(accounts[78], 29570, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[78], 1000, {from: accounts[78]});

result = await instance.transfer(accounts[3],731,{from:accounts[2]});
});
it('test 7',async() => {

await instance.approve(accounts[76], 22991, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[76], 1000, {from: accounts[76]});

await instance.batchTransfer([accounts[54],accounts[82],accounts[27],accounts[16],accounts[59],accounts[16],accounts[55]],1434,{from:accounts[0]});

result = await instance.transfer(accounts[1],865,{from:accounts[5]});
});
it('test 8',async() => {
await instance.batchTransfer([accounts[6],accounts[47],accounts[98]],4308,{from:accounts[0]});


await instance.approve(accounts[51], 26961, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[51], 1000, {from: accounts[51]});

result = await instance.transfer(accounts[2],779,{from:accounts[3]});
});
it('test 9',async() => {

await instance.approve(accounts[191], 25284, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[191], 1000, {from: accounts[191]});

result = await instance.transfer(accounts[0],234,{from:accounts[4]});
await instance.batchTransfer([accounts[68],accounts[15],accounts[92],accounts[67],accounts[90],accounts[77],accounts[57]],3917,{from:accounts[0]});

});
it('test 10',async() => {
await instance.batchTransfer([accounts[13]],4828,{from:accounts[0]});

result = await instance.transfer(accounts[5],677,{from:accounts[5]});

await instance.approve(accounts[54], 26769, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[54], 1000, {from: accounts[54]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 11',async() => {
result = await instance.transfer(accounts[2],566,{from:accounts[3]});

await instance.approve(accounts[7], 23385, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[7], 1000, {from: accounts[7]});

await instance.batchTransfer([accounts[26],accounts[58],accounts[77],accounts[50],accounts[45],accounts[19],accounts[7],accounts[80]],4573,{from:accounts[0]});

});
it('test 12',async() => {

await instance.approve(accounts[76], 30677, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[76], 1000, {from: accounts[76]});

await instance.batchTransfer([accounts[41],accounts[58],accounts[39],accounts[22],accounts[2],accounts[91],accounts[76]],7857,{from:accounts[0]});

result = await instance.transfer(accounts[3],998,{from:accounts[1]});
});
it('test 13',async() => {
result = await instance.transfer(accounts[1],726,{from:accounts[1]});
await instance.batchTransfer([accounts[30]],4462,{from:accounts[0]});


await instance.approve(accounts[136], 35454, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[136], 1000, {from: accounts[136]});

});
it('test 14',async() => {
result = await instance.transfer(accounts[4],878,{from:accounts[0]});
await instance.batchTransfer([accounts[24],accounts[18],accounts[25]],8498,{from:accounts[0]});


await instance.approve(accounts[130], 34021, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[130], 1000, {from: accounts[130]});

});
it('test 15',async() => {
await instance.batchTransfer([accounts[64]],2009,{from:accounts[0]});

result = await instance.transfer(accounts[4],244,{from:accounts[1]});

await instance.approve(accounts[74], 23954, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[74], 1000, {from: accounts[74]});

});
it('test 16',async() => {
result = await instance.transfer(accounts[1],565,{from:accounts[0]});
await instance.batchTransfer([accounts[51],accounts[12],accounts[57],accounts[4],accounts[23]],6450,{from:accounts[0]});


await instance.approve(accounts[158], 22836, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[158], 1000, {from: accounts[158]});

});
it('test 17',async() => {

await instance.approve(accounts[45], 34433, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[45], 1000, {from: accounts[45]});

result = await instance.transfer(accounts[5],257,{from:accounts[5]});
await instance.batchTransfer([accounts[59],accounts[56],accounts[76],accounts[29],accounts[75],accounts[59],accounts[87],accounts[98],accounts[17],accounts[85]],5830,{from:accounts[0]});

});
it('test 18',async() => {

await instance.approve(accounts[91], 30766, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[91], 1000, {from: accounts[91]});

result = await instance.transfer(accounts[5],875,{from:accounts[1]});
await instance.batchTransfer([accounts[42],accounts[48],accounts[66],accounts[24]],3858,{from:accounts[0]});

});
it('test 19',async() => {
await instance.batchTransfer([accounts[71],accounts[60],accounts[42],accounts[63],accounts[87],accounts[25],accounts[33],accounts[62]],6304,{from:accounts[0]});

result = await instance.transfer(accounts[1],997,{from:accounts[0]});

await instance.approve(accounts[91], 20182, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[91], 1000, {from: accounts[91]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});

await instance.approve(accounts[77], 37555, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[77], 1000, {from: accounts[77]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[5],498,{from:accounts[2]});
await instance.batchTransfer([accounts[99],accounts[24],accounts[42],accounts[65],accounts[19]],1914,{from:accounts[0]});

});
it('test 21',async() => {

await instance.approve(accounts[196], 26336, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[196], 1000, {from: accounts[196]});

result = await instance.transfer(accounts[3],469,{from:accounts[0]});
await instance.batchTransfer([accounts[66],accounts[3],accounts[72],accounts[7],accounts[70],accounts[82],accounts[33],accounts[43],accounts[78],accounts[11]],7450,{from:accounts[0]});

});
it('test 22',async() => {
result = await instance.transfer(accounts[5],878,{from:accounts[2]});

await instance.approve(accounts[43], 33707, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[43], 1000, {from: accounts[43]});

await instance.batchTransfer([accounts[48]],1594,{from:accounts[0]});

});
it('test 23',async() => {
await instance.batchTransfer([accounts[70],accounts[73],accounts[98],accounts[38],accounts[18],accounts[94],accounts[53],accounts[67],accounts[17]],7939,{from:accounts[0]});


await instance.approve(accounts[192], 27894, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[192], 1000, {from: accounts[192]});

result = await instance.transfer(accounts[1],287,{from:accounts[4]});
});
it('test 24',async() => {

await instance.approve(accounts[77], 23213, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[77], 1000, {from: accounts[77]});

await instance.batchTransfer([accounts[5],accounts[17],accounts[97],accounts[11],accounts[60]],2687,{from:accounts[0]});

result = await instance.transfer(accounts[4],711,{from:accounts[2]});
});
it('test 25',async() => {
await instance.batchTransfer([accounts[15],accounts[63],accounts[81],accounts[52],accounts[58],accounts[98]],4597,{from:accounts[0]});

result = await instance.transfer(accounts[5],452,{from:accounts[5]});

await instance.approve(accounts[73], 23839, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[73], 1000, {from: accounts[73]});

});
it('test 26',async() => {
result = await instance.transfer(accounts[0],484,{from:accounts[1]});

await instance.approve(accounts[192], 33573, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[192], 1000, {from: accounts[192]});

await instance.batchTransfer([accounts[3],accounts[67],accounts[93]],8082,{from:accounts[0]});

});
it('test 27',async() => {
result = await instance.transfer(accounts[2],483,{from:accounts[4]});
await instance.batchTransfer([accounts[77],accounts[96],accounts[84]],5988,{from:accounts[0]});


await instance.approve(accounts[39], 39332, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[39], 1000, {from: accounts[39]});

});
it('test 28',async() => {
result = await instance.transfer(accounts[5],417,{from:accounts[2]});
await instance.batchTransfer([accounts[78],accounts[18],accounts[14],accounts[69]],8921,{from:accounts[0]});


await instance.approve(accounts[148], 39809, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[148], 1000, {from: accounts[148]});

});
it('test 29',async() => {
await instance.batchTransfer([accounts[2],accounts[92],accounts[34],accounts[50],accounts[32]],8279,{from:accounts[0]});


await instance.approve(accounts[129], 26303, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[129], 1000, {from: accounts[129]});

result = await instance.transfer(accounts[4],919,{from:accounts[1]});
});
});
