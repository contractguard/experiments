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
await instance.batchTransfer([accounts[63],accounts[82]],3918,{from:accounts[0]});

result = await instance.transfer(accounts[2],731,{from:accounts[0]});

await instance.approve(accounts[61], 20576, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[61], 1000, {from: accounts[61]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 1',async() => {
await instance.batchTransfer([accounts[62],accounts[46],accounts[84],accounts[49],accounts[53]],1239,{from:accounts[0]});

result = await instance.transfer(accounts[4],241,{from:accounts[5]});

await instance.approve(accounts[154], 32344, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[154], 1000, {from: accounts[154]});

});
it('test 2',async() => {

await instance.approve(accounts[34], 21540, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[34], 1000, {from: accounts[34]});

await instance.batchTransfer([accounts[3],accounts[35],accounts[30],accounts[87],accounts[80],accounts[20],accounts[76],accounts[94],accounts[50],accounts[67]],4858,{from:accounts[0]});

result = await instance.transfer(accounts[3],367,{from:accounts[1]});
});
it('test 3',async() => {
await instance.batchTransfer([accounts[22]],7719,{from:accounts[0]});

result = await instance.transfer(accounts[0],621,{from:accounts[5]});

await instance.approve(accounts[168], 31124, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[168], 1000, {from: accounts[168]});

});
it('test 4',async() => {
await instance.batchTransfer([accounts[88]],7599,{from:accounts[0]});

result = await instance.transfer(accounts[2],214,{from:accounts[2]});

await instance.approve(accounts[189], 35481, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[189], 1000, {from: accounts[189]});

});
it('test 5',async() => {

await instance.approve(accounts[98], 20152, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[98], 1000, {from: accounts[98]});

result = await instance.transfer(accounts[0],404,{from:accounts[2]});
await instance.batchTransfer([accounts[12],accounts[38],accounts[69],accounts[14],accounts[99],accounts[75],accounts[64],accounts[85],accounts[83]],3179,{from:accounts[0]});

});
it('test 6',async() => {
result = await instance.transfer(accounts[5],762,{from:accounts[5]});

await instance.approve(accounts[42], 28928, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[42], 1000, {from: accounts[42]});

await instance.batchTransfer([accounts[93],accounts[66],accounts[67]],7774,{from:accounts[0]});

});
it('test 7',async() => {
await instance.batchTransfer([accounts[92],accounts[28],accounts[66],accounts[10]],4041,{from:accounts[0]});


await instance.approve(accounts[77], 35511, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[77], 1000, {from: accounts[77]});

result = await instance.transfer(accounts[5],356,{from:accounts[2]});
});
it('test 8',async() => {
result = await instance.transfer(accounts[1],719,{from:accounts[0]});
await instance.batchTransfer([accounts[68],accounts[23]],1037,{from:accounts[0]});


await instance.approve(accounts[186], 35751, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[186], 1000, {from: accounts[186]});

});
it('test 9',async() => {
await instance.batchTransfer([accounts[9],accounts[65],accounts[11],accounts[93],accounts[12],accounts[13],accounts[99],accounts[45]],6750,{from:accounts[0]});


await instance.approve(accounts[189], 28738, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[189], 1000, {from: accounts[189]});

result = await instance.transfer(accounts[2],922,{from:accounts[1]});
});
it('test 10',async() => {
result = await instance.transfer(accounts[0],946,{from:accounts[5]});

await instance.approve(accounts[107], 23370, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[107], 1000, {from: accounts[107]});

await instance.batchTransfer([accounts[9],accounts[59],accounts[66]],2008,{from:accounts[0]});

await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 11',async() => {
await instance.batchTransfer([accounts[83],accounts[99],accounts[59],accounts[44]],2843,{from:accounts[0]});

result = await instance.transfer(accounts[3],904,{from:accounts[0]});

await instance.approve(accounts[77], 32729, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[77], 1000, {from: accounts[77]});

});
it('test 12',async() => {
await instance.batchTransfer([accounts[21],accounts[94],accounts[39],accounts[51],accounts[81],accounts[56],accounts[75],accounts[24]],5592,{from:accounts[0]});

result = await instance.transfer(accounts[1],501,{from:accounts[2]});

await instance.approve(accounts[76], 23087, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[76], 1000, {from: accounts[76]});

});
it('test 13',async() => {

await instance.approve(accounts[185], 37655, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[185], 1000, {from: accounts[185]});

await instance.batchTransfer([accounts[74],accounts[32],accounts[25]],4100,{from:accounts[0]});

result = await instance.transfer(accounts[5],959,{from:accounts[3]});
});
it('test 14',async() => {
await instance.batchTransfer([accounts[26],accounts[70],accounts[12],accounts[73]],9675,{from:accounts[0]});


await instance.approve(accounts[188], 25611, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[188], 1000, {from: accounts[188]});

result = await instance.transfer(accounts[5],543,{from:accounts[0]});
});
it('test 15',async() => {
await instance.batchTransfer([accounts[66],accounts[55],accounts[50],accounts[9],accounts[77],accounts[3],accounts[16],accounts[50],accounts[23]],8411,{from:accounts[0]});


await instance.approve(accounts[199], 34652, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[199], 1000, {from: accounts[199]});

result = await instance.transfer(accounts[4],869,{from:accounts[4]});
});
it('test 16',async() => {
result = await instance.transfer(accounts[3],894,{from:accounts[1]});
await instance.batchTransfer([accounts[33],accounts[9],accounts[67],accounts[99],accounts[90],accounts[63],accounts[41],accounts[88],accounts[19],accounts[50]],3901,{from:accounts[0]});


await instance.approve(accounts[162], 37724, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[162], 1000, {from: accounts[162]});

});
it('test 17',async() => {

await instance.approve(accounts[40], 24287, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[40], 1000, {from: accounts[40]});

await instance.batchTransfer([accounts[49],accounts[9],accounts[19],accounts[99]],5197,{from:accounts[0]});

result = await instance.transfer(accounts[4],922,{from:accounts[1]});
});
it('test 18',async() => {
await instance.batchTransfer([accounts[24],accounts[99],accounts[43],accounts[12],accounts[32],accounts[58],accounts[95],accounts[45],accounts[89]],2473,{from:accounts[0]});

result = await instance.transfer(accounts[4],442,{from:accounts[0]});

await instance.approve(accounts[31], 25971, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[31], 1000, {from: accounts[31]});

});
it('test 19',async() => {

await instance.approve(accounts[48], 32972, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[48], 1000, {from: accounts[48]});

await instance.batchTransfer([accounts[32],accounts[89],accounts[26],accounts[29],accounts[67],accounts[54],accounts[65],accounts[24]],4083,{from:accounts[0]});

result = await instance.transfer(accounts[1],809,{from:accounts[2]});
});
it('test 20',async() => {
await instance.pause({from: accounts[0]});
await instance.unpause({from: accounts[0]});

await instance.approve(accounts[93], 35792, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[93], 1000, {from: accounts[93]});

await instance.batchTransfer([accounts[76],accounts[12],accounts[7],accounts[61],accounts[29],accounts[60],accounts[17],accounts[51],accounts[44]],7601,{from:accounts[0]});

result = await instance.transfer(accounts[1],885,{from:accounts[4]});
await instance.transferOwnership(accounts[1],{from:accounts[0]});
await instance.transferOwnership(accounts[0],{from:accounts[1]});

});
it('test 21',async() => {
result = await instance.transfer(accounts[4],392,{from:accounts[0]});
await instance.batchTransfer([accounts[54],accounts[34],accounts[78],accounts[53],accounts[36],accounts[10],accounts[100],accounts[47],accounts[41],accounts[27]],3125,{from:accounts[0]});


await instance.approve(accounts[100], 29064, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[100], 1000, {from: accounts[100]});

});
it('test 22',async() => {
await instance.batchTransfer([accounts[9],accounts[85],accounts[9],accounts[17],accounts[9],accounts[21],accounts[63],accounts[32],accounts[32]],9810,{from:accounts[0]});

result = await instance.transfer(accounts[1],954,{from:accounts[5]});

await instance.approve(accounts[52], 29533, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[52], 1000, {from: accounts[52]});

});
it('attack', async() => {
await instance.batchTransfer([accounts[222],accounts[333]],bigValue,{from:accounts[0]});
 })
it('test 23',async() => {
result = await instance.transfer(accounts[2],851,{from:accounts[3]});
await instance.batchTransfer([accounts[84],accounts[82],accounts[83],accounts[19],accounts[2],accounts[44],accounts[20],accounts[16]],8498,{from:accounts[0]});


await instance.approve(accounts[172], 27445, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[172], 1000, {from: accounts[172]});

});
it('test 24',async() => {
result = await instance.transfer(accounts[5],406,{from:accounts[2]});

await instance.approve(accounts[112], 35765, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[112], 1000, {from: accounts[112]});

await instance.batchTransfer([accounts[43],accounts[45],accounts[39],accounts[58],accounts[25],accounts[18],accounts[61],accounts[74]],4216,{from:accounts[0]});

});
it('test 25',async() => {

await instance.approve(accounts[168], 31244, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[168], 1000, {from: accounts[168]});

result = await instance.transfer(accounts[3],331,{from:accounts[3]});
await instance.batchTransfer([accounts[83],accounts[43],accounts[64],accounts[36],accounts[83],accounts[40],accounts[37],accounts[53],accounts[47]],7265,{from:accounts[0]});

});
it('test 26',async() => {

await instance.approve(accounts[34], 22127, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[34], 1000, {from: accounts[34]});

await instance.batchTransfer([accounts[40]],2638,{from:accounts[0]});

result = await instance.transfer(accounts[2],577,{from:accounts[1]});
});
it('test 27',async() => {

await instance.approve(accounts[111], 35890, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[111], 1000, {from: accounts[111]});

await instance.batchTransfer([accounts[30],accounts[36],accounts[47],accounts[28],accounts[67]],5990,{from:accounts[0]});

result = await instance.transfer(accounts[1],435,{from:accounts[4]});
});
it('test 28',async() => {
await instance.batchTransfer([accounts[2],accounts[99],accounts[38],accounts[15],accounts[42],accounts[62]],3466,{from:accounts[0]});


await instance.approve(accounts[182], 26409, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[182], 1000, {from: accounts[182]});

result = await instance.transfer(accounts[0],681,{from:accounts[3]});
});
it('test 29',async() => {
result = await instance.transfer(accounts[3],951,{from:accounts[2]});

await instance.approve(accounts[200], 34087, {from: accounts[0]});
await instance.transferFrom(accounts[0], accounts[200], 1000, {from: accounts[200]});

await instance.batchTransfer([accounts[50],accounts[94],accounts[6],accounts[35],accounts[48],accounts[42],accounts[1],accounts[57]],6503,{from:accounts[0]});

});
});
