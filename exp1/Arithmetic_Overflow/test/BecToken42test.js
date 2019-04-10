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
await instance.batchTransfer([accounts[90],accounts[4],accounts[18],accounts[38]],3987,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

result = await instance.transfer(accounts[2],976,{from:accounts[5]});

await instance.approve(accounts[114], 32304, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[114], 1000, {from: accounts[114]});

});
it('test 1',async() => {

await instance.approve(accounts[61], 24827, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[61], 1000, {from: accounts[61]});

result = await instance.transfer(accounts[3],745,{from:accounts[1]});
await instance.batchTransfer([accounts[61],accounts[16],accounts[6],accounts[57],accounts[12],accounts[29],accounts[53],accounts[38],accounts[97],accounts[28]],7574,{from:accounts[0]});

});
it('test 2',async() => {
result = await instance.transfer(accounts[5],576,{from:accounts[2]});

await instance.approve(accounts[131], 39188, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[131], 1000, {from: accounts[131]});

await instance.batchTransfer([accounts[95],accounts[45],accounts[41],accounts[31],accounts[92],accounts[94]],7429,{from:accounts[0]});

});
it('test 3',async() => {

await instance.approve(accounts[152], 35402, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[152], 1000, {from: accounts[152]});

await instance.batchTransfer([accounts[37],accounts[2],accounts[73],accounts[46]],9526,{from:accounts[0]});

result = await instance.transfer(accounts[1],513,{from:accounts[1]});
});
it('test 4',async() => {

await instance.approve(accounts[8], 28204, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[8], 1000, {from: accounts[8]});

await instance.batchTransfer([accounts[30],accounts[100],accounts[42],accounts[66],accounts[87],accounts[59],accounts[23]],2196,{from:accounts[0]});

result = await instance.transfer(accounts[5],605,{from:accounts[5]});
});
it('test 5',async() => {
result = await instance.transfer(accounts[2],947,{from:accounts[4]});
await instance.batchTransfer([accounts[82],accounts[92],accounts[17],accounts[85],accounts[32]],6092,{from:accounts[0]});


await instance.approve(accounts[13], 20468, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[13], 1000, {from: accounts[13]});

});
it('test 6',async() => {

await instance.approve(accounts[87], 22205, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[87], 1000, {from: accounts[87]});

result = await instance.transfer(accounts[5],878,{from:accounts[3]});
await instance.batchTransfer([accounts[63],accounts[74],accounts[33],accounts[74]],8621,{from:accounts[0]});

});
it('test 7',async() => {

await instance.approve(accounts[171], 39847, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[171], 1000, {from: accounts[171]});

result = await instance.transfer(accounts[1],696,{from:accounts[2]});
await instance.batchTransfer([accounts[32],accounts[48],accounts[19],accounts[44],accounts[89]],2279,{from:accounts[0]});

});
it('test 8',async() => {

await instance.approve(accounts[192], 24248, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[192], 1000, {from: accounts[192]});

result = await instance.transfer(accounts[2],234,{from:accounts[2]});
await instance.batchTransfer([accounts[41],accounts[94],accounts[91],accounts[56],accounts[100],accounts[87],accounts[63]],3815,{from:accounts[0]});

});
it('test 9',async() => {

await instance.approve(accounts[149], 24961, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[149], 1000, {from: accounts[149]});

await instance.batchTransfer([accounts[51],accounts[99],accounts[19],accounts[39],accounts[7],accounts[34],accounts[79],accounts[58],accounts[95],accounts[47]],3168,{from:accounts[0]});

result = await instance.transfer(accounts[0],745,{from:accounts[1]});
});
it('test 10',async() => {
await instance.batchTransfer([accounts[4],accounts[44],accounts[47],accounts[8],accounts[86],accounts[12],accounts[44]],5907,{from:accounts[0]});


await instance.approve(accounts[91], 21402, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[91], 1000, {from: accounts[91]});

result = await instance.transfer(accounts[3],644,{from:accounts[1]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 11',async() => {
await instance.batchTransfer([accounts[93],accounts[43],accounts[3],accounts[70]],8326,{from:accounts[0]});


await instance.approve(accounts[172], 32566, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[172], 1000, {from: accounts[172]});

result = await instance.transfer(accounts[0],454,{from:accounts[5]});
});
it('test 12',async() => {
await instance.batchTransfer([accounts[20],accounts[63],accounts[97],accounts[75]],2900,{from:accounts[0]});

result = await instance.transfer(accounts[2],757,{from:accounts[2]});

await instance.approve(accounts[3], 35706, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[3], 1000, {from: accounts[3]});

});
it('test 13',async() => {
await instance.batchTransfer([accounts[64],accounts[81],accounts[7],accounts[35],accounts[6],accounts[21],accounts[34],accounts[58]],2938,{from:accounts[0]});


await instance.approve(accounts[189], 26549, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[189], 1000, {from: accounts[189]});

result = await instance.transfer(accounts[0],319,{from:accounts[5]});
});
it('test 14',async() => {

await instance.approve(accounts[174], 28512, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[174], 1000, {from: accounts[174]});

result = await instance.transfer(accounts[4],850,{from:accounts[4]});
await instance.batchTransfer([accounts[46],accounts[49]],2540,{from:accounts[0]});

});
it('test 15',async() => {

await instance.approve(accounts[136], 23545, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[136], 1000, {from: accounts[136]});

result = await instance.transfer(accounts[2],581,{from:accounts[4]});
await instance.batchTransfer([accounts[33],accounts[69],accounts[40],accounts[86],accounts[84],accounts[99],accounts[83],accounts[47]],1367,{from:accounts[0]});

});
it('test 16',async() => {
result = await instance.transfer(accounts[3],422,{from:accounts[1]});
await instance.batchTransfer([accounts[58],accounts[4],accounts[97],accounts[94],accounts[12]],4820,{from:accounts[0]});


await instance.approve(accounts[199], 20845, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[199], 1000, {from: accounts[199]});

});
it('test 17',async() => {

await instance.approve(accounts[93], 29368, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[93], 1000, {from: accounts[93]});

await instance.batchTransfer([accounts[30],accounts[71],accounts[60]],7167,{from:accounts[0]});

result = await instance.transfer(accounts[5],233,{from:accounts[0]});
});
it('test 18',async() => {
result = await instance.transfer(accounts[1],334,{from:accounts[3]});
await instance.batchTransfer([accounts[40],accounts[76],accounts[79],accounts[76],accounts[52],accounts[37]],4760,{from:accounts[0]});


await instance.approve(accounts[76], 37286, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[76], 1000, {from: accounts[76]});

});
it('test 19',async() => {
result = await instance.transfer(accounts[5],296,{from:accounts[0]});

await instance.approve(accounts[102], 29653, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[102], 1000, {from: accounts[102]});

await instance.batchTransfer([accounts[9],accounts[70],accounts[1],accounts[11],accounts[55],accounts[30],accounts[53],accounts[38],accounts[19]],6653,{from:accounts[0]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});
await instance.batchTransfer([accounts[6],accounts[68],accounts[93],accounts[28],accounts[27],accounts[30],accounts[57],accounts[84]],4071,{from:accounts[0]});

result = await instance.transfer(accounts[1],559,{from:accounts[2]});

await instance.approve(accounts[33], 25699, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[33], 1000, {from: accounts[33]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 21',async() => {

await instance.approve(accounts[146], 24403, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[146], 1000, {from: accounts[146]});

await instance.batchTransfer([accounts[28]],6211,{from:accounts[0]});

result = await instance.transfer(accounts[0],463,{from:accounts[3]});
});
it('test 22',async() => {

await instance.approve(accounts[156], 20714, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[156], 1000, {from: accounts[156]});

await instance.batchTransfer([accounts[79],accounts[15],accounts[35],accounts[77],accounts[60]],4248,{from:accounts[0]});

result = await instance.transfer(accounts[4],803,{from:accounts[4]});
});
it('test 23',async() => {
await instance.batchTransfer([accounts[60],accounts[95],accounts[52],accounts[71],accounts[12],accounts[19]],4277,{from:accounts[0]});

result = await instance.transfer(accounts[1],548,{from:accounts[5]});

await instance.approve(accounts[97], 38291, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[97], 1000, {from: accounts[97]});

});
it('test 24',async() => {
await instance.batchTransfer([accounts[80],accounts[92],accounts[43],accounts[86],accounts[10],accounts[79],accounts[69],accounts[84],accounts[23]],8315,{from:accounts[0]});


await instance.approve(accounts[182], 30981, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[182], 1000, {from: accounts[182]});

result = await instance.transfer(accounts[2],988,{from:accounts[2]});
});
it('test 25',async() => {
await instance.batchTransfer([accounts[42],accounts[67],accounts[24]],5164,{from:accounts[0]});


await instance.approve(accounts[67], 38220, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[67], 1000, {from: accounts[67]});

result = await instance.transfer(accounts[5],874,{from:accounts[4]});
});
it('test 26',async() => {
await instance.batchTransfer([accounts[90],accounts[29],accounts[75],accounts[88],accounts[63]],7190,{from:accounts[0]});


await instance.approve(accounts[14], 32331, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[14], 1000, {from: accounts[14]});

result = await instance.transfer(accounts[0],255,{from:accounts[4]});
});
it('test 27',async() => {

await instance.approve(accounts[42], 27392, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[42], 1000, {from: accounts[42]});

await instance.batchTransfer([accounts[34],accounts[15]],7870,{from:accounts[0]});

result = await instance.transfer(accounts[4],222,{from:accounts[1]});
});
it('test 28',async() => {
await instance.batchTransfer([accounts[1],accounts[10],accounts[57],accounts[38],accounts[45],accounts[51],accounts[14],accounts[72],accounts[58]],7079,{from:accounts[0]});


await instance.approve(accounts[29], 29194, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[29], 1000, {from: accounts[29]});

result = await instance.transfer(accounts[2],514,{from:accounts[5]});
});
it('test 29',async() => {
result = await instance.transfer(accounts[2],237,{from:accounts[5]});

await instance.approve(accounts[177], 35690, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[177], 1000, {from: accounts[177]});

await instance.batchTransfer([accounts[17],accounts[79],accounts[67],accounts[54],accounts[31],accounts[17],accounts[39],accounts[45],accounts[97],accounts[10]],4267,{from:accounts[0]});

});
});
